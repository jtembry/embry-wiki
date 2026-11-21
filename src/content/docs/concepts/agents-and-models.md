---
title: Agents and models
description: Claude Code, Codex and Grok run the chats. You pick the model, and you allow each change.
---

HomeADE does not have its own AI. It runs the command-line agents you install and sign in to yourself: **Claude Code**, **Codex** and **Grok**. A chat in FieldADE or HomeADE is one of those tools running on your computer, in a folder you chose, under your own login or API key. HomeADE never sees that login.

## Starting a chat

Tap **+** and pick a model. Each entry says what that model is most often used for. Then pick the folder the chat works in. Inside a git repository you can switch on **Own branch**, which gives the chat its own branch and working copy so two chats on one repo never overwrite each other (see [Agents working in parallel](/embry-wiki/concepts/working-in-parallel/)).

A chat is pinned to its model and folder for life. You can change the model later from the chat's title menu; the folder never changes, because the agents file their transcripts by folder.

## Ask and Auto

Every chat is in one of two modes.

- **Ask**: before the agent edits a file or runs a command, a card shows the tool and what it wants to do. You tap Allow or Deny. On the phone an unanswered card sends an alert after a few seconds.
- **Auto**: the agent runs tools without asking. Turn it on per chat, or make it the default under Settings → Chats. A machine can be locked so Auto is never allowed.

Codex chats have no card: Ask runs it read-only, Auto lets it write inside the chat's folder.

On a machine with **signed approvals** on, an Allow, a switch to Auto, and opening a terminal need a signature from an enrolled phone or Mac, which asks for Face ID, Touch ID or your passcode.

## Effort and limits

Models that take an effort setting (low, medium, high) show it in the chat's header. The Agents screen shows how much of each assistant's limit is used today and this week, per machine, so you can see who still has room before you start a long job.

## Small jobs

Some things a model does are not chats: naming a chat after its first reply, planning how to file an item, drafting a reply, judging whether a chat still has open work. Settings → Models for tasks lets you pick which model does each of these, or leave it automatic (a small, cheap model).

## Related

- [Chats on the phone](/embry-wiki/fieldade/chats/)
- [Agents in HomeADE](/embry-wiki/homeade/agents/)
- [Skills, rules, hooks, connectors](/embry-wiki/concepts/skills-rules-hooks-connectors/)
