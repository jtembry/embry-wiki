---
title: Agents in HomeADE
description: The chat list, every session on the machine, terminals, and the chat pane.
---

The **Sessions** section lists this machine's chats. The open chat sits to the right of whatever section you are in, so you can read Projects, Calendar, or a note while the chat stays up. Saved agents, the task-specific roles a new chat can run as, live on **Setup › Agents**: one list per source, each with its brief, tools and model. Click one for its page: description, model, tools as switches in three groups (built-in, connectors, other), and the prompt. A vault agent's description, model and tools save from there; the prompt is edited in Obsidian or by **Ask a chat to revise**. A chat already running as that agent picks up a change on its next message. **+ Make an agent** asks what it should do, then opens a chat that writes the file.

## The list

- **+ New chat** with a model menu and, for Claude, an **Agent** menu: a task-specific role with its own brief, a few tools and a model (Filer, Writer, Researcher, Shipper to start), or **No agent** for the full assistant. The pick stays for the chat's life. Picking an agent switches the model menu to the agent's own model; change it after if you want another. **Setup › Agents** is the full list: each agent's tools, the model it runs on (with its price and a benchmark score), your runs with it, and **+ Make an agent**. Click a row to open its page. A chat row shows its dot (red waiting, pulsing working, yellow open, green done), title, time, model, tag, Auto when on, and the hammer line of what its agent says it is doing ([the board](/embry-wiki/concepts/working-in-parallel/#the-board)).
- A **title filter** over chats and shells. **⋯** or right-click on a row: Rename, Name it from the chat, Tag (Projects, Areas, No tag, New project or area), Close, Delete.
- **All sessions on this machine** below the pinned rows: every other Claude, Grok and Codex session, grouped by folder, with closed-with tags. Click one to adopt it onto the list and open it; ⋯ → Delete from this machine erases it.
- **> Terminal** opens a shell on this machine, listed above the chats, in a real terminal pane.

## The chat

The same chat as the phone: history paged by **Older messages…**, streaming replies, the Allow/Deny card, a composer with **+** for pictures and files (pasted or dropped images are scaled and sent in line), `/` for the skill menu, Enter to send.

**Hide** folds the chat to one line under the section: the title, Working or Allow, and the last sentence. The chat keeps running. Click the line to open it. The × on that line closes the view. Drag the chat's left edge to make it wider or narrower. On Sessions the list stays on the left. On a narrow window the chat covers the section, and **Close** (or **‹ Chats**) brings the section back.

A microphone button (⌘⇧D, or Ctrl+Shift+D) types what you say into the box, using this computer's microphone; on Apple silicon the first use downloads a speech model onto this Mac, and nothing is sent until you send it. If the microphone is off, the notice has **Open Microphone settings**, which opens Privacy & Security → Microphone on a Mac and Privacy & security → Microphone on Windows. A tap that is too short asks you to click MIC, speak, then click STOP. A longer silent recording names the microphone and opens Sound → Input, where the volume is. If a recording cannot be read, the notice says to try again. The up and down arrows recall what you sent. The header has the tag chip, the agent chip when the chat runs as one, the model menu, the Ask/Auto toggle, the effort menu and ⋯. New chats start in Auto. Settings can make them ask first again.

A picture the agent shows appears in line. Close chat ends it; the row drops into the All sessions group.

## Sessions started elsewhere

A chat is one session, whichever screen you use. Start it on the phone, continue it here, pick it up in a terminal with the command the chat's ⋯ menu offers (**Continue in Terminal** seeds the shell with the resume command and waits for Return). While a terminal or Obsidian is driving a chat, the apps show **At the desk** and hold Send.

## Related

- [Chats on the phone](/embry-wiki/fieldade/chats/)
- [Agents and models](/embry-wiki/concepts/agents-and-models/)
- [Tickets](/embry-wiki/homeade/tickets/)
