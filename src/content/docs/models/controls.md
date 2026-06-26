---
title: Model Controls
description: Understanding and using the automation toggles and limits for a model.
sidebar:
  order: 3
---
Every model has four main automation switches. You can find them on the model **Overview** page and also in the **Settings** tab.

## Automation toggles

### Active

Enables or disables the AI bot for this model entirely.

- **ON** — the bot reads incoming messages and responds automatically.
- **OFF** — no automatic responses are sent. The account is connected but dormant.

Use this to pause automation temporarily without disconnecting the OnlyFans account.

### Sales

Controls whether the AI attempts to make PPV sales during conversations.

- **ON** — the bot will identify sales opportunities and send PPV offers from your [Content library](/content/ppv-folders/).
- **OFF** — the bot keeps chatting but won't send any paid content or PPV messages.

### Welcome Flow

Enables the [Welcome Flow](/welcome-flow/setup/) for new subscribers.

- **ON** — new fans receive your configured welcome message when they subscribe.
- **OFF** — new subscribers don't receive a greeting from the bot.

### Warmup

Enables the warmup drip sequence for inactive fans.

- **ON** — fans who haven't interacted recently receive a series of re-engagement messages.
- **OFF** — no warmup messages are sent.

![](/images/docs/controls/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-12%20%D0%BE%2013.05.20.png)

## Limits

In the **Settings → Limits** section, you can configure restrictions for AI behavior and control when the bot starts selling content and when it stops interacting with fans.

All limits are set as a range of message numbers. For each new chat, the bot randomly selects a number within the specified range. This makes the timing feel more natural and prevents the bot from behaving the same way in every conversation. We recommend keeping the range small, with no more than a 2–3 message difference between the values. If both fields are left empty, the corresponding limit will be disabled.

### **First PPV — earliest**

The minimum number of messages after which the bot can send its first PPV. For example, if the range is set to 5–8, the bot will send the first PPV no earlier than after 5–8 messages.

### **First PPV — send by**

The maximum number of messages by which the bot should send its first PPV. If the bot has not sent a PPV by this point, it will send one automatically. If both fields are left empty, this limit will not be applied.

### **Warmup — earliest**

The minimum number of messages after which the bot can send a warmup message. A warmup is a teaser message sent before a PPV to make the offer feel more natural.

### **Warmup — send by**

The maximum number of messages by which the bot should send a warmup message. If the bot has not sent a warmup by this point, it will send one automatically. If both fields are left empty, this limit will not be applied.

### **Sale limit**

The total sales amount  after which the bot will exit the chat with the fan.

Click **Save** after adjusting limits.

![](/images/docs/controls/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-26%20%D0%BE%2014.09.22.png)

:::tip
Setting a Sale limit is useful if you want to control spend or test PPV strategies at a controlled scale before rolling out to all fans.
:::

## Renaming a model

On the model **Overview** page, click the model name at the top of the page to edit it inline. Press Enter or click outside to save.

## Overview page quick links

The model Overview also shows:

- A **completeness indicator** — how fully the model's profile and content are configured.
- Quick-access buttons to **Chats**, **Profile**, **Welcome**, and **Settings**.
- A summary of the model's current profile and configuration state.
