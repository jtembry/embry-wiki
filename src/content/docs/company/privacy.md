---
title: Privacy and data
description: Where your data lives with FieldADE and HomeADE, and where the formal policies are.
---

The formal policies are on embry.dev: [FieldADE and HomeADE privacy policy](https://embry.dev/fieldade/privacy) and [Kingdom Guide privacy policy](https://embry.dev/kingdom-guide/privacy). This page is the short version.

## No accounts

FieldADE and HomeADE have no account and no server that stores your notes. Notes stay in the folder you chose on your computer. Chats are stored on that machine by the agent tool you run.

## What leaves the machine

- A chat's prompt goes to Claude, Codex or Grok only when you run it, under your own plan or API key.
- Mail and texts are read on your computer from the accounts you added; a reply is sent from your own account.
- The phone talks to the computer through a relay when it is away from home. That traffic is encrypted end to end with a key only your phone and your computer hold. The relay forwards sealed bytes and cannot read them.
- Push alerts carry a chat's title and a tool's name, never the command or the content.

## What the apps refuse to show

A note marked private is never shown in the note reader or sent to an agent by the Ingest tools. A scan that holds an SSN, a card or account number, or an ID number is flagged before its text enters the folder.

## Secrets

Tokens, keys and mail passwords live in the machine's secret store (Keychain, Credential Manager) and in the phone's Keychain. Nothing of the kind is written into the notes folder.

Questions: [joel@embry.dev](mailto:joel@embry.dev).
