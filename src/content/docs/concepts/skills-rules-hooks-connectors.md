---
title: Skills, rules, hooks, connectors
description: What an agent can do and what it will follow, listed per machine so you can read it before you start a chat.
---

Each agent tool keeps its own configuration in files on the machine. HomeADE and FieldADE read those files and show them, grouped by machine, so you know what a chat can do before you hand it work. In the HomeADE window they are the tabs of **Harness**. Nothing here edits the agent; it is a window onto it.

## Skills

A **skill** is a written set of steps an agent can follow on request, such as "file my inbox" or "draft a reply in my style". The Skills screen lists every skill on the machine by source: Claude's own folder, skills synced from your Claude account, each enabled plugin, and Grok's. A skill that lives in your notes folder opens as a note.

In a chat, typing `/` opens the same list as a menu you can finish with a tap.

## Rules

A **rule** is a standing instruction: the instruction files the agent reads at the start of every session, and the permission settings (what is allowed, what always asks, what is denied). The Rules screen lists them per folder and per agent, with the first heading and the line count. No file body leaves the machine.

## Hooks

A **hook** is a script the agent runs at a set moment, such as before a tool runs or when a session starts. The Hooks screen lists them by the file name and the events they fire on. The command itself is never shown.

## Connectors

A **connector** is an outside service an agent can call: your mail, a calendar, a payment account, a documentation site. The Connectors screen shows how many are connected and how many are failing, per machine, with the failing ones first and the reason. A connector that **needs authentication** reads in red with the way in beside it: a claude.ai connector opens the claude.ai connectors page, any other opens a sign-in in a browser on that Mac.

Add a connector from the built-in directory (Anthropic's public list) with one tap, or paste an address. Grok's connectors switch on and off from the same screen. A machine can be locked so connectors cannot be added from the apps.

Sites that an agent drives through a browser (no API, just a signed-in page) show in their own **Browser connections** group, read from a note in your vault, with what the agent can do there and when it last did.

## Scheduled and Commands

**Scheduled** lists every timed job on each machine: follow-ups agents left, your own scheduled sends, cron, launchd agents, systemd timers and Windows tasks, read-only except that you can cancel a follow-up. **Commands** lists the slash commands the agent itself offers.

## Related

- [Agents and models](/embry-wiki/concepts/agents-and-models/)
- [Follow-ups](/embry-wiki/concepts/follow-ups/)
