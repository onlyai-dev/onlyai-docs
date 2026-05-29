---
title: Trigger Messages
description: >-
  Configure automatic trigger messages that are sent to fans after specific
  actions
sidebar:
  order: 3
---
**Trigger Messages** is a feature that automatically sends messages when a fan likes content or comes online, helping bring users back into the conversation and increase engagement.

The feature operates with built-in time restrictions to prevent excessive bot activity.

💡**Before sending a Trigger Message, the bot checks:**

- whether the bot has sent any messages within the last **4 hours**
- whether any Trigger Messages have been sent within the last **8 hours**

If both conditions are met, the bot sends a Trigger Message.

### How Messages Are Selected

- messages are selected **randomly from the list of added Trigger Messages**
- priority is given to messages that have not been used before
- once all messages have been used, the cycle starts again

## Setup Steps

### Step 1. Open the model → **Trigger Messages** tab

![](/images/docs/trigger-messages/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-28%20%D0%BE%2009.25.08.png)

## Step 2. Add Trigger Messages

There are two ways to add Trigger Messages.

### Option 1. Import

Click **Import** to choose messages from the suggested templates.

- you can use ready-made messages
- you can use them as a base and customize them for the model

![](/images/docs/trigger-messages/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-28%20%D0%BE%2009.34.01.png)

When you click **Import**, the selected Trigger Message is automatically added to the list.

### Option 2. Add

Click **Add** to create your own Trigger Message.

Available configuration options:

- add a **text-only message**
- add a **media file**
- when adding media, you can:
  - set a **price** (for paid content)
  - add a **preview**
- text and media can be used together or separately

![](/images/docs/trigger-messages/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-28%20%D0%BE%2009.35.00.png)

After completing the setup, click **Create Trigger**. The new message will automatically appear in the list.

### Step 3. Enable the Feature

Once you have added enough Trigger Messages, activate the feature.

![](/images/docs/trigger-messages/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-28%20%D0%BE%2009.36.00.png)

Before enabling the feature, it is recommended to make sure the list contains:

- 4–5 text messages
- 1–2 messages with media (or more if content is available)

This allows the bot to use a variety of different message types.

Once configured and enabled, the bot will automatically react to likes and fans coming online by sending Trigger Messages according to the configured restrictions.
