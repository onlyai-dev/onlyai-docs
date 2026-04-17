---
title: Follow-up Sequences
description: Set up multi-stage follow-up messages after the initial welcome.
sidebar:
  order: 2
---

## What are follow-up sequences?

Follow-up sequences are additional messages sent after the initial welcome message, spaced out over time. They're designed to keep new subscribers engaged during the critical first hours or days after they subscribe.

Each follow-up stage is sent at a configurable delay after the previous one.

## Enabling follow-ups

In the **Welcome Flow** tab, find the **Follow-up** section and toggle it on per model. You can also enable or disable individual follow-up stages without removing them.

## Configuring follow-up stages

Each stage has:

- **Delay** — how long after the previous message this stage fires (e.g. 1 hour, 24 hours).
- **Message variants** — just like the welcome message, follow-ups support name-known and no-name variants, plus multiple text variants for rotation.

### Adding a stage

Click **Add stage** to append a new follow-up step to the sequence.

### Editing a stage

Click **Edit** on any stage to update its message text or delay timing. Save changes per stage.

### Removing a stage

To disable a stage temporarily, toggle it off. To remove it permanently, delete the stage.

:::tip
A typical high-performing sequence looks like this:

- **T+1 hour** — soft check-in ("Did you get a chance to look at my profile?")
- **T+24 hours** — engagement prompt ("I posted something special today…")
- **T+3 days** — PPV tease ("I have some content I only share with my closest fans…")
:::

## Relationship to welcome content

Follow-up messages can reference or include media from the [Welcome content folders](/content/welcome-warmup/). Make sure the welcome content library is set up before activating follow-ups that include media.

## Testing the flow

Once your follow-up sequence is saved and enabled, new subscribers will go through it automatically. Monitor chat threads for a few new subscribers to verify the timing and tone feel right.
