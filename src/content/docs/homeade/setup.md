---
title: Set up HomeADE
description: Install on a Mac or a Windows PC, install Claude Code, choose the notes folder, open the window.
---

Setup on a Mac takes about ten minutes. HomeADE needs no other app.

## What you need

- A Mac with macOS 14 or later, or a Windows PC for the [beta](#windows-beta).
- A Claude plan or an Anthropic API key. HomeADE runs Claude Code, which you install and sign in to yourself. Codex and Grok are optional.
- A notes folder. An Obsidian vault works best, but any folder will do.

## 1. Install HomeADE on your Mac

1. [Download HomeADE](https://downloads.embry.dev/HomeADE-latest.dmg), open the file, and drag HomeADE to Applications.
2. Open HomeADE. Apple has signed and notarized it, so it opens without a warning. An antenna icon appears in the menu bar. Click it and turn on **Open at login**.

Or, with Homebrew:

```
brew install --cask jtembry/homeade/homeade
```

## 2. Install Claude Code

Today, mail and the calendar work before this step. The assistants do not.

```
curl -fsSL https://claude.ai/install.sh | bash
```

Then type `claude` in Terminal, press Return, sign in when it asks, and close Terminal.

## 3. Choose the notes folder

1. Click the antenna icon, then **Set up this Mac…**
2. Under **Your notes**, click **Choose the folder…** and pick your vault.
3. Under **Claude Code**, check that it says *Found*. If not, finish step 2 and click **Check again**.
4. Click **Start**. The window opens.

On the Mac, HomeADE's own Settings → Vault changes this later. A desktop can only pick a folder on itself; the phone can pick a folder on any paired machine.

## Add Codex or Grok

Install either command-line tool and sign in to it. HomeADE lists what it finds under **Settings → Agents on this machine**, with the install command for any that is missing.

## Pair a phone

Click the antenna icon → **Pair a phone…** and scan the code with FieldADE. See [Set up FieldADE](/embry-wiki/fieldade/setup/).

## Windows (beta)

The [Windows beta](https://downloads.embry.dev/HomeADE-latest-windows-x64-setup.exe) runs the same window and a tray icon. It is not yet code-signed, so Windows warns you: click **More info**, then **Run anyway**. Pick a vault under **Settings → Vault → Change folder…**, and install and sign in to Claude Code, Codex or Grok yourself.

- If your agents live inside WSL rather than Windows, turn on **Settings → Agents on this machine → Run the assistants inside WSL**. HomeADE then finds the Linux tools, lists the WSL chats, and runs new chats there.
- The tray has **Show pairing code…**, so a phone can pair with a Windows machine once that reaches the beta. Today the Windows beta cannot pair a phone.
- Downloads come from downloads.embry.dev; the installer replaces an older copy in place.

## Next

[The window](/embry-wiki/homeade/the-window/) walks through each screen. If something goes wrong, see [Troubleshooting](/embry-wiki/homeade/troubleshooting/).
