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

## Epics become Projects

Each ticket row shows its Jira Epic, when it has one, beside its status. Start a chat on a ticket and its Epic is added to your vault's Projects (made the first time, reused after), and the chat is labelled with that Project. A Project you already made with the same name is used as it is. Rename the Project later and new chats on that Epic still find it. A ticket with no Epic starts its chat with no label, as before.

## The ticket on the Agents screen

A chat started from a ticket shows the ticket's key and the column it is in on the Jira board (In Progress, Code Review, and so on) under its name in the chat list. The column is checked again every few minutes while the list is open.

## Filters

Filter the queue by project, sprint, fix version, status, and **mine**. The filters are per machine and stay where you set them.

## Related

- [Agents in HomeADE](/embry-wiki/homeade/agents/)
- [Agents working in parallel](/embry-wiki/concepts/working-in-parallel/)
