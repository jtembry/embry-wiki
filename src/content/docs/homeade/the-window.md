---
title: The HomeADE window
description: The sidebar, the sections, search, row actions, the two looks, and what is the same as the phone.
---

The window is a sidebar of sections on the left and the open section on the right. On the Mac it opens from the antenna menu or the Dock; on Windows from the tray.

## Sidebar

- **Search** at the top (⌘K or Ctrl-K) finds projects, areas and chats by name, with every other note folded under Other notes and an **Ask Claude about "…"** button that opens a chat with the matching notes in front of it.
- Sections: Today, Email, Messages, Calendar, Ingest, Outbox, Projects, Areas, Agents, Tickets (when a machine has a queue), Setup, Settings. Drag a row to reorder it, right-click to hide it; Settings → Sidebar does the same with buttons. Today and Settings never hide.
- The foot shows Claude, Grok and OpenAI Codex limits as meters, the live dot, Look and Sign out, and the version. Hover over the meters for each window's reset time; click them to check again.
- When other machines are paired as peers, an **on \<name\>** menu switches the whole window to show that machine.

## Sections

**Today, Email, Messages, Calendar, Ingest, Projects, Areas** are the phone's sections with the same rows. Row buttons appear under a row on hover (always, on a touch screen): archive, delete, unsubscribe, Triage with the exact-plan dialog, add to calendar, Open (the reader, with the email's HTML in a frame), Respond with AI (the draft sheet with From, attachments and Send), Send to AI. Ingest rows have Triage, File and File private for scans, Transcribe for a recording, Send to AI and Delete. Cards have Rename and Archive and open the note reader. The Work Log lists archived roll-ups and ticked to-dos with Restore.

**Outbox** lists the drafts in the vault's `Outbox` folder, each with a big **COPY** button. Click a row to read the whole draft, with COPY and **Done** (asks first, then moves the note to the Mac's Trash). Today shows a row when drafts are waiting.

**Agents** is covered on [its own page](/embry-wiki/homeade/agents/).

**Setup** has tabs for Connectors, Skills, Hooks, Rules, Scheduled and Commands, read from this machine; **Re-check** refreshes. See [Skills, rules, hooks, connectors](/embry-wiki/concepts/skills-rules-hooks-connectors/).

**Settings** is covered on [its own page](/embry-wiki/homeade/settings/).

## Looks

**DOS** (green phosphor on black) or **Professional**, from the sidebar foot. The choice is per browser or per Mac.

## Keyboard

⌘N new chat, ⌘1 to ⌘9 the sidebar rows, ⌘K search, ⌘, Settings, ⌘R reload. In a chat, Return sends and Shift-Return breaks a line. Esc stops the reply and puts your message back in the box. The up and down arrows recall what you sent. ⌘⇧D (Ctrl+Shift+D on Windows) starts and stops dictation.

### Three-key shortcuts and a macro pad

Three actions run the window with one hand: **Previous chat** (Ctrl+Shift+←), **Talk** (Ctrl+Shift+D) and **Next chat** (Ctrl+Shift+→). A three-key macro pad can send them. Change the keys in Settings → Shortcuts.

- **Previous chat / Next chat:** each tap moves one chat at once, so quick taps scroll the list.
- **Talk:** hold to speak, and the words land in the box unsent. Tap it to turn the microphone on or off. Double-tap it to send.
- **Two keys together:** Talk + Previous chat = Esc. Talk + Next chat = Clear prompt (empties the box). Previous chat + Next chat = Refresh: the window reloads, as ⌘R does. A recording in progress is thrown away, and text in the box is not kept.
- **All three keys together** opens the **New chat** picker. It lists **No agent** on each model, then each agent with the model it runs on. The highlight starts on the model or agent picked above the chat list. Previous chat and Next chat move the highlight; double-tap Talk (or press Enter, or click a row) to start the chat; press Talk + Previous chat (or Esc) to cancel. The **+ New chat** button still starts a chat at once.
- **All three twice** = close the open chat. To confirm, double-tap Talk or press Enter; to keep the chat, press Talk + Previous chat or Esc.
- Settings → Shortcuts can give Previous chat and Next chat a double-tap too. A key with a double-tap waits a moment before its single press acts; **None** (the default for both) acts at once.
