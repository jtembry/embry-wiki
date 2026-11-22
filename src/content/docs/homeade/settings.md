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

## Your runs

Every model you used on this machine in the last 30 days: replies, the share that finished the job (the green dot), median reply time, tokens per reply and errors.

## Sidebar

Order and hide the sidebar rows. Per browser; the Mac classic window and the phone keep their own order.

## First run

Today shows a banner pointing here when the machine has no vault or no inbox yet.

## Related

- [Set up HomeADE](/embry-wiki/homeade/setup/)
- [FieldADE settings](/embry-wiki/fieldade/settings/)
