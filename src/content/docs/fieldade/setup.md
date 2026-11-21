---
title: Set up FieldADE
description: Install the app, pair it with HomeADE on your Mac, start the first chat. Phone-only setup with no Mac.
---

FieldADE pairs with [HomeADE](/embry-wiki/homeade/setup/), which has to be running on your Mac. If HomeADE is not installed yet, set up the Mac first. Pairing takes a few minutes once the Mac shows a code.

## What you need

- An iPhone with iOS 17 or later.
- HomeADE on a Mac with a pairing code on the screen, or skip the Mac and [use the phone on its own](#without-a-mac).

## 1. Install FieldADE

1. [Install FieldADE from the App Store](https://apps.apple.com/us/app/fieldade/id6828288883).
2. Open FieldADE.

## 2. Pair it with your Mac

1. On the Mac, HomeADE's window should show a pairing code. If it does not, click the antenna icon in the menu bar and choose **Pair a phone…**.
2. In FieldADE, open **Settings → Machines → Scan a pairing code**.
3. Point the camera at the code.

The code holds your Mac's key, so do not share it or post a picture of it. If the phone cannot scan, click **Copy the link instead** on the Mac, send the link to the phone and tap it. The link asks before it applies, and says which machine it is for.

The phone reaches the Mac through a relay, so it works away from home with nothing else to install. The traffic is encrypted end to end with a key only your phone and your Mac hold; the relay cannot read it. On the same network, or over Tailscale, the phone can also talk to the Mac directly: the machine's settings page shows which route is live and lets you prefer one.

## 3. Start a chat

1. Tap **+**, pick a model, then pick a folder for the chat.
2. Type a question about your notes and send it.

Before the assistant edits a file or runs a command, the phone asks you to allow or deny it. The same chat is open in the HomeADE window when you sit down at the Mac.

## Add more

- **Calendars.** Settings → Choose sources → Calendars. Sign in to Google, sign in to iCloud with an app-specific password, or allow access to the calendars already on the phone.
- **Inboxes.** Settings → Choose sources → Inboxes adds a mail account by address and app password; the password goes to the Mac's keychain, never the phone.
- **Codex or Grok.** Install the tool on the Mac and sign in. HomeADE lists it under Settings → Agents on this machine.
- **A second machine.** Pair as many as you like. Each gets its own section on the Agents list and its own row under Settings → Machines.
- **Share sheet and widget.** See [Widgets, share sheet, CarPlay](/embry-wiki/fieldade/widgets-share-carplay/).

## Without a Mac

FieldADE can run on its own. Open **Settings → Phone alone**, turn on **Phone only**, pick a notes folder on the phone and enter an Anthropic API key. Chats then run on the phone and bill that key. Today reads the phone's folder. To look around first, tap **Try the sample vault** on the Today screen. Pairing a machine later turns Phone only off.

## Windows

The Windows build is HomeADE, and the beta cannot pair a phone yet. [HomeADE setup](/embry-wiki/homeade/setup/#windows-beta) covers the installer and the warning Windows shows.

If something does not work, see [Troubleshooting](/embry-wiki/fieldade/troubleshooting/).
