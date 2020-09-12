import { eventHandlers } from "../module/client.ts";
import { structures } from "../structures/mod.ts";
import { DiscordPayload } from "../types/discord.ts";
import {
  GuildBanPayload,
  GuildMemberAddPayload,
  GuildMemberChunkPayload,
  GuildMemberUpdatePayload,
} from "../types/guild.ts";
import { cache } from "../utils/cache.ts";

export function handleInternalGuildMemberAdd(data: DiscordPayload) {
  if (data.t !== "GUILD_MEMBER_ADD") return;

  const payload = data.d as GuildMemberAddPayload;
  const guild = cache.guilds.get(payload.guild_id);
  if (!guild) return;

  guild.memberCount++;
  const member = structures.createMember(
    payload,
    guild,
  );
  guild.members.set(payload.user.id, member);

  eventHandlers.guildMemberAdd?.(guild, member);
}

export function handleInternalGuildMemberRemove(data: DiscordPayload) {
  if (data.t !== "GUILD_MEMBER_REMOVE") return;

  const payload = data.d as GuildBanPayload;
  const guild = cache.guilds.get(payload.guild_id);
  if (!guild) return;

  guild.memberCount--;
  const member = guild.members.get(payload.user.id);
  eventHandlers.guildMemberRemove?.(
    guild,
    member || payload.user,
  );

  eventHandlers.guildMemberRemove?.(
    guild,
    member || payload.user,
  );

  guild.members.delete(payload.user.id);
}

export function handleInternalGuildMemberUpdate(data: DiscordPayload) {
  if (data.t !== "GUILD_MEMBER_UPDATE") return;

  const payload = data.d as GuildMemberUpdatePayload;
  const guild = cache.guilds.get(payload.guild_id);
  if (!guild) return;

  const cachedMember = guild.members.get(payload.user.id);

  const newMemberData = {
    ...payload,
    premium_since: payload.premium_since || undefined,
    joined_at: new Date(cachedMember?.joinedAt || Date.now())
      .toISOString(),
    deaf: cachedMember?.deaf || false,
    mute: cachedMember?.mute || false,
  };
  const member = structures.createMember(
    newMemberData,
    guild,
  );
  guild.members.set(payload.user.id, member);

  if (cachedMember?.nick !== payload.nick) {
    eventHandlers.nicknameUpdate?.(
      guild,
      member,
      payload.nick,
      cachedMember?.nick,
    );
  }
  const roleIDs = cachedMember?.roles || [];

  roleIDs.forEach((id) => {
    if (!payload.roles.includes(id)) {
      eventHandlers.roleLost?.(guild, member, id);
    }
  });

  payload.roles.forEach((id) => {
    if (!roleIDs.includes(id)) {
      eventHandlers.roleGained?.(guild, member, id);
    }
  });

  eventHandlers.guildMemberUpdate?.(guild, member, cachedMember);
}

export function handleInternalGuildMembersChunk(data: DiscordPayload) {
  if (data.t !== "GUILD_MEMBERS_CHUNK") return;

  const payload = data.d as GuildMemberChunkPayload;
  const guild = cache.guilds.get(payload.guild_id);
  if (!guild) return;

  payload.members.forEach((member) => {
    guild.members.set(
      member.user.id,
      structures.createMember(
        member,
        guild,
      ),
    );
  });

  // Check if its necessary to resolve the fetchmembers promise for this chunk or if more chunks will be coming
  if (
    payload.nonce
  ) {
    const resolve = cache.fetchAllMembersProcessingRequests.get(payload.nonce);
    if (!resolve) return;

    if (payload.chunk_index + 1 === payload.chunk_count) {
      cache.fetchAllMembersProcessingRequests.delete(payload.nonce);
      resolve(guild.members);
    }
  }
}