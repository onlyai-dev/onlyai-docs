---
title: Setting Up Welcome Messages
description: Configure the first message new subscribers receive when they follow the model.
sidebar:
  order: 1
---

## What is the welcome flow?

The welcome flow is a series of automated messages sent to a fan when they first subscribe. It's the AI's first impression — and getting it right can significantly increase early engagement and PPV conversions.

The welcome flow is configured per model in the **Welcome Flow** tab.

## Enabling the welcome flow

Before configuring messages, make sure the welcome flow is enabled:

- On the model **Overview** or **Settings** page, toggle **Welcome Flow** to ON.

:::note
Even if the welcome flow is fully configured, it won't run unless this toggle is on.
:::

## Configuring the welcome message

The welcome message has two variants, depending on whether OnlyAI knows the fan's name:

| Variant | When it's used |
|---------|---------------|
| **Name known** | The fan's name is available from OnlyFans. The message can be personalized. |
| **No name** | The fan's name isn't available. A generic but warm greeting is used instead. |

1. Navigate to the **Welcome Flow** tab for the model.
2. Find the **Welcome message** section.
3. Click **Edit** next to the **Name known** variant and write the personalized version. Use `{name}` as a placeholder where the fan's name should appear.
4. Click **Edit** next to the **No name** variant and write the fallback version.
5. Click **Save** for each variant.

:::tip
Write the welcome message in the model's voice, referencing her persona. Keep it short, warm, and with a soft call to action (e.g. "check out my latest content" or "reply and tell me about yourself").
:::

## Message variants

You can add multiple variants for each welcome message type. The AI will rotate between them to avoid repetition for fans who may see similar messages across accounts.

Click **Add variant** to create an additional version of the message.

## Saving

Each message section saves independently. Click **Save** after editing each variant to preserve your changes.
