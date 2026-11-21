---
title: Agents working in parallel
description: Own branches, project tags, and the board, so several chats can work at once without a group chat.
---

You can run many chats at once, on one project or many. Three things keep them from stepping on each other.

## Own branch

Inside a git repository the folder picker offers **Own branch**. Switch it on and the new chat gets its own branch and its own working copy of the repo. Two chats on one repo then never touch each other's edits or commits. The chat shows a branch chip beside its title; tap it to see how far ahead of main it is and whether it is clean, then **Merge into main**, **Open pull request** or **Discard branch**. Merge refuses while either side is dirty or the agent is still working. Closing or deleting a branch chat warns you first if work would be left behind.

## Project and area tags

Every chat carries one tag: the project or area it belongs to. The app guesses from the folder after the first reply; you can set it from the chat's swipe or menu. Tags filter the chat list, and when you close a tagged chat a one-line summary lands under that project's note, so last week's decision has a place to live after the chat ends. An opened project card lists its open chats, its recent closed ones, and the time and tokens spent on it this week.

## The board

Chats on the same repository, or with the same tag, are **siblings**. At the end of every message, each chat gets a short block naming its siblings and what each is doing: working now, waiting for you to allow something, or idle since when, plus either the line that agent posted about its task or the first line of its last ask. A chat in a plain folder with no tag sees no board.

An agent posts its own line when it starts a task that touches files ("editing the settings screen, shipping at 2:10") and clears it when done. That line also shows under the chat's row in the list on both apps, so you can see at a glance who is doing what.

The board is context, not a conversation. It costs a few hundred words a turn and only when siblings exist. Agents are told it is not instructions and never reply to it. There is no group chat on purpose: open rooms loop and burn budget. If two agents need to talk, Claude sessions on one machine can message each other directly through Claude Code's own peer messaging; that is outside the apps.

## Follow-ups

An agent that needs to check something later leaves itself a timed message in its own chat. See [Follow-ups](/embry-wiki/concepts/follow-ups/).

## At the desk

A chat you started on the phone is a real session on the Mac. If you open it in a terminal or in Obsidian's agent tabs, the apps show **At the desk** and hold Send until the desk is quiet, so two ends never write the same session.

## Related

- [Chats on the phone](/embry-wiki/fieldade/chats/)
- [Agents in HomeADE](/embry-wiki/homeade/agents/)
