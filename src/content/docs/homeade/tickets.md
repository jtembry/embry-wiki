---
title: Tickets
description: Start a chat from a Jira ticket in the folder you choose. The ticket, the branch and the notes stay attached to that chat.
---

When a machine is connected to a ticket queue, a **Tickets** section lists that machine's queue, grouped by status, with a refresh button. The phone shows one block per machine; HomeADE shows the machine it is on and any peer.

## Connecting a queue

The machine's configuration names a Jira address and token, a command that prints the queue, or a Jira connector the agent already has. HomeADE itself knows nothing about your workflow or repositories.

## Starting work

Tap a ticket (or **Start a chat**). A folder picker opens on that machine; pick the repository or folder where the work happens. A chat opens there and is sent the ticket's key, summary, type, status and link, in the shape the machine's own start template defines. From then on the machine's own skills take over ("make", "make-bug", whatever that team uses), and the chat can ask you before it creates a branch.

**Open in Jira** opens the ticket's page.

## Filters

Filter the queue by project, sprint, fix version, status, and **mine**. The filters are per machine and stay where you set them.

## Related

- [Agents in HomeADE](/embry-wiki/homeade/agents/)
- [Agents working in parallel](/embry-wiki/concepts/working-in-parallel/)
