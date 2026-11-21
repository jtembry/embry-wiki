---
title: Troubleshooting HomeADE
description: What the common messages mean and what to do.
---

**The window says it has no token.** Setup is unfinished. Click the antenna icon, then **Set up this Mac…**

**Chats do not start.** Check that Claude Code is installed and signed in (type `claude` in Terminal), then click **Restart HomeADE…** in the antenna menu. Settings → Agents on this machine says what HomeADE found.

**The window is blank or dark.** Reload with ⌘R (Go → Reload). If it stays blank, Go → Classic Window still works; email the log from the antenna menu's **Open the log**.

**A chat says "API Error 400" on a company gateway.** The gateway needs the model's full id, not a short alias. Set the model list in the machine's configuration to the ids your gateway serves.

**The phone cannot reach this machine.** The antenna icon is green when the relay is connected, amber while it reconnects, red when the service is not answering. Red with "needs pairing" means the machine has no encryption key yet: **Pair a phone…** makes one.

**Windows: a trojan warning on install.** The beta is not code-signed. Click More info, then Run anyway. Defender flagged an older version's start-at-login step; that step is gone.

**Windows: the chooser shows the Windows Claude, not the WSL one.** Turn on Settings → Agents on this machine → Run the assistants inside WSL.

**A peer shows "open on the Mac right now".** That session is being driven at its desk; adopt it later.

**Something else.** Email [joel@embry.dev](mailto:joel@embry.dev) with the step, the message, and the version from the sidebar foot.
