(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{407:function(e,t,s){"use strict";s.r(t);var n=s(25),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"frequently-asked-questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[e._v("#")]),e._v(" Frequently Asked Questions")]),e._v(" "),s("h2",{attrs:{id:"does-discordeno-support-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#does-discordeno-support-typescript"}},[e._v("#")]),e._v(" Does Discordeno Support TypeScript?")]),e._v(" "),s("p",[e._v("Discordeno provides first class support for TypeScript! Since Deno provides\nsupport for TypeScript, that also comes into Discordeno. This means you don't\nneed to compile TypeScript before you use it. However, this isn't really why\nDiscordeno is the best library for TypeScript developers. When I developed this\nlibrary, I was experimenting with a lot of different things and one of them was\nautomated typings.")]),e._v(" "),s("p",[e._v("Whenever I used other libraries, I was always seeing typings being inaccurate or\nproblematic. This is because in any Discord API library, the majority is not\nused by the library itself so TypeScript doesn't warn the library developers.\nThis makes it extremely likely that those typings become inaccurate or out of\ndate because of simple mistakes like forgetting to update typings. Sometimes\nlibraries will add a property and forget to add that on their typings. This\nmakes it usable for JavaScript developers but not for TypeScript devs. For\nTypeScript developers, typings are everything! Discordeno treats typings as part\nof it's code! A breaking change in typings is a breaking change for the library!")]),e._v(" "),s("h2",{attrs:{id:"how-stable-is-discordeno"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-stable-is-discordeno"}},[e._v("#")]),e._v(" How Stable Is Discordeno?")]),e._v(" "),s("p",[e._v("One of the biggest issues with almost every library(I have used) is stability.\nNone of the libraries gave much love and attention to TypeScript developers the\nway it deserves. Sometimes TypeScript projects would break because breaking\nchanges to typings did not make a MAJOR bump so TypeScript bots in production\nwould break. Sometimes I was personally maintaing the typings because no one\nelse was for that lib. Some libs were pre 1.0 and didn't even have a stable\nbranch/version where I would not have to worry about breaking changes.")]),e._v(" "),s("p",[e._v("This is why I made it one of my foundational goals of this library to have the\nbest stability for TypeScript developers. No matter how small, a breaking change\nis a breaking change when it affects the public API. I could care less if we end\nup at version 500. Being afraid to bump a MAJOR because it's a small change or a\ntyping change is a terrible decision as a library maintainer and destroys the\nexperience for end users.")]),e._v(" "),s("h2",{attrs:{id:"why-doesn-t-discordeno-use-classes-or-eventemitter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-doesn-t-discordeno-use-classes-or-eventemitter"}},[e._v("#")]),e._v(" Why Doesn't Discordeno Use Classes or EventEmitter?")]),e._v(" "),s("p",[e._v("This is a design decision for the lib itself. You can still use class if you\nwant on your bot. In fact, I hope someone makes a framework/boilerplate for this\nlib one day using classes so that devs have a choice on which style they prefer.\nWithout trying to write an entire thesis statement on the reasons why I avoided\nClasses in this lib, I will just link to the best resources I believe help\nexplain it.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://dannyfritz.wordpress.com/2014/10/11/class-free-object-oriented-programming/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Really good article"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.youtube.com/watch?v=PSGEjv3Tqo0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lecture by one of the developers who makes\nJavaScript"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("In regards to EventEmitter, I believe a functional event API was a much better\nchoice. EventEmitter at it's core is simply just functions that run when a\ncertain event is emitted. In Discordeno, that function is executed instead of\nemitting some event to trigger that function.")]),e._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// EventEmitter Example")]),e._v("\nEventEmitter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"guildCreate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" guild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Discordeno Example")]),e._v("\neventHandlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("guildCreate"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?.")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("guild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("There isn't really any difference especially for users when they use it. One bad\nthing about EventEmitter is that if misused it can easily cause memory leaks. It\nis very easy to open yourself up to these memory leak issues. It has happened to\nme when I started coding as well. This is why I wanted Discordeno's\nimplementation to help devs avoid the issues I had. It prevents anyone from\nhaving this as a potential issue. Another issue with EventEmitter is trying to\nupdate the code in those functions without having to deal with headaches left\nand right of removing and adding listeners. You don't need to worry about\nbinding or not binding events. They are just pure functions")]),e._v(" "),s("p",[e._v("In Discordeno, this is extremely simple, you just simply give it the new event\nhandlers.")]),e._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("updateEventHandlers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("newEventHandlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h2",{attrs:{id:"why-do-you-have-a-class-for-collection-if-classes-are-bad"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-do-you-have-a-class-for-collection-if-classes-are-bad"}},[e._v("#")]),e._v(" Why Do You Have A Class for Collection If Classes Are Bad?")]),e._v(" "),s("p",[e._v("The Collection class is an exception in the library where a class was allowed.\nThis is because Collection extends Map. The Map class is provided by JavaScript\nitself and is extremely fast. You can perform millions of operations a second\nwith a Map. Maps are too useful to avoid and don't have downsides like\nEventEmitters do. The Collection class simply adds on other functionality that\nDiscordeno users felt they needed. Although I am against using classes whenever\npossible, I am also a big supporter of providing the best developer experience.")]),e._v(" "),s("h2",{attrs:{id:"why-are-there-no-options-in-discordeno"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-are-there-no-options-in-discordeno"}},[e._v("#")]),e._v(" Why Are there no options in Discordeno?")]),e._v(" "),s("p",[e._v("Discordeno is not a library that handles code in the exact way every person\nwants it to. It is opinionated. Discordeno defaults to the Discord recommended\noptions or the best options for majority of developers needs. For example, there\nis no option of fetching all members startup. This is a practice that Discord\ndoes not recommend or want users doing. By default, we don't support stuff like\nthis. In Discordeno, we follow Discords recommended solution and it just works\ninternally. The End! No fuss! No Muss! Just good stuff!")]),e._v(" "),s("p",[e._v("Now, I understand that there are times when it's necessary to be able to\ncustomize this and fetch them all. If you are advanced enough to need these\noptions, you should be able to simply do it yourself. For most users, this is\njust an unnecessary option. The main module should remain minimalistic and easy\nto use for 99% of users.")]),e._v(" "),s("h2",{attrs:{id:"why-do-i-see-errors-like-missing-view-channel-or-bots-highest-role-too-low"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-do-i-see-errors-like-missing-view-channel-or-bots-highest-role-too-low"}},[e._v("#")]),e._v(' Why Do I See errors Like "MISSING_VIEW_CHANNEL" or "BOTS_HIGHEST_ROLE_TOO_LOW"?')]),e._v(" "),s("p",[e._v("Discordeno is the only library(that I have used), that has built in permission\nhandling. A lot of bots get automatically banned by Discord because they forget\nto handle permissions. When bots don't check permissions and continue to send\nrequests to the API, this leads to bots being banned. I have tried to request\nadding this feature into libraries but they were reluctant to do so because it\nwould require the devs to maintain the library whenever an update was made by\nDiscord.")]),e._v(" "),s("p",[e._v("Discordeno provides you specific keywords that you can use to send a clean\nresponse to the end user of your choosing. I have even seen some bots have\nhundreds of thousands of Missing Permission or Missing Access errors because\nlibraries don't handle it. IMO, this is a crucial part of any good library as\nmuch as it is to handle rate limiting.")]),e._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" Errors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" Message "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://deno.land/x/discordeno@10.0.0/mod.ts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("handleCommandError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("message"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Errors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("switch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" Errors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("MISSING_MANAGE_NICKNAMES")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("channel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sendMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"The bot does not have the necessary permission to manage/edit other user\'s nicknames. Grant the **MANAGE_NICKNAME** permission to the bot and try again."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" Errors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("MISSING_MANAGE_ROLES")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Note: i18n is not part of the library. This is just an example of how you could use i18n for custom error responses.")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("channel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sendMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("i18n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("translate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);