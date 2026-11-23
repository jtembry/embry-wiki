---
title: The Today screen
description: The root of the app. The bar, the sections, what Today shows, and how the bar hides when you scroll.
---

Open FieldADE and you are on **Today**. A glass pill at the bottom holds five section glyphs and More. Everything in the app is a section on that bar or a screen pushed over it.

## The bar

- The default five are Today, Email, Messages, Calendar and Agents. **More** opens the rest as a list.
- Long-press a bar tile and drag it onto More to remove it; drag a More row onto the bar to pin it. The bar can hold more or fewer than five.
- The bar hides when you scroll down a list and comes back only at the top of the page or when you change section. Content never shifts when it leaves or returns.
- A red badge on Agents counts chats waiting for you to allow or deny something. Ingest, Email and Messages badge their counts too.
- A magnifying glass floats above the bar on Today and jumps to Vault search.

## What Today shows

- **Happening** and **Due**: calendar events for today, and to-dos with a date of today or earlier, with the overdue date under the line. Swipe left on a due row for Done or Archive; swipe right to send that note to an agent.
- **Follow-ups**: every check an agent has scheduled, across machines. Tap one to open its chat.
- **Gone quiet**: projects whose last chat or filed session is two weeks old or more. Tap one to open a chat on it.
- **N drafts in Outbox**: shown when drafts are waiting. One tap opens the Outbox.
- A banner points at Settings when the machine that feeds Today has no vault or no mail set up.

Today opens from a cached copy at once, then refreshes over a live connection. A grey "Updated N min ago" line means the copy is older than the connection.

## Projects and Areas

Each is a card with the roll-up's phase, the next action, this week's chat time, or "quiet Nd". The top of each list is one open to-do per project or area. Tap a card to open the note in the app's reader (nested lists, callouts, checkboxes you can tick, links that push the next note), with Open in Obsidian at the bottom. An opened card also lists its open chats and its recent closed ones, and has **Rename** and **Archive** (confirm first). **New project** and **New area** are on the chat tag sheet.

## Calendar

Calendar reads your Google and iCloud calendars directly on the phone (Settings → Choose sources → Calendars) and lays follow-ups under their day. The vault's own calendar mirror is never shown.

## Outbox

Drafts an agent wrote for you to send yourself: one note each in the vault's `Outbox` folder, newest first. Each row shows the title, the date and the first lines, with a big **COPY** button that puts the whole draft on the clipboard. Tap a row to read the full text (you can select part of it), with **COPY** and **Done**. Done asks first, then moves the note to the Mac's Trash. Notes whose name starts with `_` stay hidden. Outbox starts in More; drag it onto the bar to pin it.

## More

Outbox, Skills, Rules, Hooks, Connectors, Scheduled, Tickets (when a machine has a ticket queue), Vault (search over your notes, by title then by meaning), Ingest Log, Work Log, and an embry.dev link at the end. Each config section has one block per paired machine.

## Related

- [Ingest](/embry-wiki/fieldade/ingest/)
- [Email and texts](/embry-wiki/fieldade/email-and-texts/)
- [Follow-ups](/embry-wiki/concepts/follow-ups/)
