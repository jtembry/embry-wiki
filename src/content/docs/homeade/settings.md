---
title: HomeADE settings
description: Vault, inboxes, agents on this machine, machines, models for tasks, sidebar.
---

## Vault

The notes folder on this machine, with **Change folder…** (a picker that starts one level above the current vault and lists recent vaults and drives). Changing it restarts the service. A machine can lock this so the folder is set only in its configuration.

## Inboxes

The mail accounts this machine reads, with **Remove**, and an add form with the server's presets and the help line for each provider's app password. The password goes straight into the machine's secret store.

## Agents on this machine

Which of Claude, Codex and Grok are installed, with their models, or the install line for one that is missing. On Windows, **Run the assistants inside WSL** when WSL exists.

## Machines

Other HomeADE machines paired as **peers**: show one in this window, remove it, or add one by pasting its pairing link or an address on the LAN or Tailscale with its token. One machine shows at a time; the sidebar's **on \<name\>** menu switches.

## Models for tasks

Which model does each small job on this machine: naming chats first. Automatic uses a small model matched to the chat's agent.

## Models on this machine

Every model on this machine in one table: published price, context size, speed and benchmark scores (each score links its source), plus your own runs. Tick two or three and press Compare to see them side by side; the best value in each row is marked.

## Your runs

Every model you used on this machine in the last 30 days: replies, the share that finished the job (the green dot), median reply time, tokens per reply and errors.

## Roles

Below the compare table, **Roles** shows which model the overnight router would give each role right now (planner, coder, reviewer, writer, tester, finder) and why, then the record so far: tasks, merged, reverted, win rate, median time, and tokens and an estimated cost per merged task. Until the swarm has run, the picks come from the starting table.

## Sidebar

Order and hide the sidebar rows. Per browser; the Mac classic window and the phone keep their own order.

## Dictation

Pick what the microphone button and Talk use: **Whisper (HomeADE)**, the default, or **System dictation** (macOS Dictation on a Mac, Windows voice typing on Windows). Per window, like the shortcuts. See [The window](/embry-wiki/homeade/the-window/#whisper-or-system-dictation).

## First run

Today shows a banner pointing here when the machine has no vault or no inbox yet.

## Related

- [Set up HomeADE](/embry-wiki/homeade/setup/)
- [FieldADE settings](/embry-wiki/fieldade/settings/)
