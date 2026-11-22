---
title: Chats
description: The Agents screen, starting a chat, the dots, Allow and Deny, branches, tags, pictures and files, dictation, the voice call, terminals.
---

The **Agents** section lists every chat on every paired machine, then its open terminals and an **All sessions** tree of every other session on that machine grouped by folder (tap one to adopt it onto the list). Tap the **Models** button in the top bar to see each machine's available models and its current usage limits, including reset times. Pull down there to refresh. Claude models configured directly on the phone appear in their own group; direct API key limits aren't reported there.

## Starting a chat

Tap **+**. Pick a model (an ⓘ on each row says what it does best; **Terminal** is the last row). Pick a folder; inside a git repo, **Own branch** gives the chat its own branch (see [Agents working in parallel](/embry-wiki/concepts/working-in-parallel/)). The chat names itself after its first reply and guesses its project tag; rename or retag from a right swipe.

## The dots

- **Red**: waiting for you to allow or deny something.
- **Pulsing …**: working.
- **Yellow**: idle, but the thread still has open work (the agent asked you something or left a step).
- **Green**: ready to close.

A row's second line shows its tag and folder; a third line shows the next follow-up with a clock, and a hammer line shows what the agent says it is doing on the board.

## Inside a chat

- **Allow / Deny** cards appear before a file edit or a command. The first screen to answer wins; the card disappears everywhere else.
- The header shows the mode (Ask / Auto), effort, model and the branch chip. Tap any to change it.
- **Swipe left or right** on the chat to turn the page to the next or previous chat.
- Replies are one bubble each, with headings, lists, tables and code blocks. Code blocks have **COPY** and **TERMINAL**, which opens a shell in the chat's folder with the code pasted and waits for Return.
- A picture the agent shows appears above its text; long-press to copy, share or save.
- **+** in the input row attaches photos, videos or files. Files upload first and the agent reads them from disk.
- The **mic** is dictation: words land in the box, nothing sends until you tap Send.
- **📞** starts a voice call with Grok, which can ask the chat's agent questions on your behalf. It works on a locked phone and in CarPlay.
- Typing a draft on one device fills the box on the others.

## History and search

A chat opens from its cache at once, then re-reads the transcript on the machine, with an **Earlier…** row to page back. The title filter at the top of the list searches chats, shells and every other session on the machine, including closed ones. Chips under it filter by tag.

## Closing and deleting

Swipe left on a row: **Close** takes it off the list (the transcript stays; a tagged chat logs a one-line summary under its project), **Delete** erases the transcript after a confirm. A branch chat warns first if commits or files would be left behind.

## Terminals

A terminal is a real shell on the machine, listed with the chats. It outlives the screen; eight at most; a machine can switch them off.

## Related

- [Agents and models](/embry-wiki/concepts/agents-and-models/)
- [Follow-ups](/embry-wiki/concepts/follow-ups/)
- [Agents in HomeADE](/embry-wiki/homeade/agents/)
