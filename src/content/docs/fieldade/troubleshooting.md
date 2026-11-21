---
title: Troubleshooting FieldADE
description: What the common messages mean and what to do.
---

**The phone says to set the Mac's address.** The phone is not paired. Do [step 2 of setup](/embry-wiki/fieldade/setup/#2-pair-it-with-your-mac).

**"No end-to-end key" or "Odd answer (403)".** The phone and the Mac disagree on the encryption key, usually after a reinstall on either side. Make a new pairing code on the Mac and scan it again.

**Chats do not start.** On the Mac, check that Claude Code is installed and signed in, then click **Restart HomeADE…** in the antenna menu. [HomeADE troubleshooting](/embry-wiki/homeade/troubleshooting/) covers a window that says it has no token.

**"This chat was closed."** The chat was closed or deleted on another device. Start a new one; the folder tree under All sessions still lists the old transcript if it was only closed.

**A message got no reply.** The app confirms each message it sends and sends it again if the connection dropped. If a chat stays on "Working…" for a long time, open it again or pull to refresh the list. On a relay connection, **Prefer Direct** on the machine's settings page helps when you are on the same network or on Tailscale.

**Email or texts are missing.** Open the section again; it checks the feed when it opens. If an account failed, its last good rows stay and the header says so. A text that Messages shows but FieldADE does not was usually read on another device since the last sync.

**The widget is stale.** Widgets refresh by push from the machine. With the machine asleep they show the last copy and its time.

**A machine shows "older FieldADE" or a 404.** That machine's HomeADE is behind the phone. Update it from Settings → Machines → Relay setup guide, or on the Mac download the latest HomeADE.

**Something else.** Email [joel@embry.dev](mailto:joel@embry.dev) with what you tapped and what the screen said.
