---
title: Settings
description: Machines, sources, inboxes, calendars, chats defaults, follow-ups, models for tasks, look, phone only.
---

## Machines

Every paired machine, with its live route ("Relay · end-to-end" or "Direct · address") and the HomeADE version it runs. Open one for its connection section (prefer Direct or Relay, fall back to the other), its vault pointer, and **Relay setup guide**, the steps for a new Mac, Linux box or Windows PC. Pair a new machine with **Scan a pairing code** or by pasting the link.

## Choose sources

- **Vault**: which machine's notes feed Today, or **This phone**. Each machine row opens a page to choose the folder on that machine, make it the home vault, and show or hide it on Today.
- **Email** and **Texts**: which machine's feeds you see, or off.
- **Calendars**: Google (sign in on the phone), iCloud (Apple Account and an app-specific password), or the calendars on the device, with a switch per calendar. Birthdays and subscribed feeds are left out.
- **Inboxes**: the mail accounts on the Email machine. Add with address and app password; remove with a swipe.

## Chats

- **Default auto mode**: new chats start in Auto instead of Ask.
- **Kept loaded** (HomeADE only): how many chats stay mounted behind the open one.

## Follow-ups

**Also add to Apple Reminders** mirrors every pending check into a FieldADE list. See [Follow-ups](/embry-wiki/concepts/follow-ups/).

## Models

Which model does each small job (naming chats, planning triage, drafting replies) on each machine, or Automatic. Phone-only chats pick their naming model here too.

## Look

**Professional** or **DOS**. Also the link browser (Edge or Safari) and a few per-device toggles.

## Phone only

**Settings → Phone alone → Phone only** makes the app act as if no machine were paired: Today reads the phone's folder, chats run on the phone with your Anthropic API key, and the share sheet writes to the phone. The paired machines stay saved. Pairing a machine turns it off.

## Security notes

- Every connection to a machine needs that machine's token, and a relay connection is sealed end to end.
- A pairing link asks before it applies and says when it replaces a saved key.
- A machine with **signed approvals** on needs Face ID, Touch ID or a passcode for Auto, for opening a terminal, and signs each Allow silently.
- The phone's own secrets (tokens, keys) live in the Keychain and sync between your devices through iCloud Keychain; nothing is in the notes folder.
