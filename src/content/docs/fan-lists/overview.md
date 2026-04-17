---
title: Fan Lists & Routing
description: Map OnlyFans custom lists to triage lanes so fans are handled correctly.
sidebar:
  order: 1
---

## What are fan lists?

OnlyFans lets creators organize subscribers into **custom lists** (e.g. "VIP fans", "free fans", "high spenders"). OnlyAI's **Lists** feature maps those OnlyFans lists to **routing lanes** — rules that tell the AI how to handle fans in each list differently.

Access the Lists tab from the model sidebar: **Lists**.

## Why use list routing?

Different fans deserve different treatment:

- **VIP fans** — high spenders who should receive premium content and more personalized attention.
- **Free subscribers** — fans on a free trial who need a gentle push toward paid content.
- **Expired fans** — lapsed subscribers who might be worth re-engaging.

Without routing, the AI treats every fan the same way. With routing, it adapts its behavior based on which list a fan belongs to.

## Setting up a routing lane

:::note
Before setting up a routing lane, make sure the OnlyFans account has custom lists created. These are managed in OnlyFans itself, not in OnlyAI.
:::

1. Navigate to the **Lists** tab for the model.
2. Each **lane** represents a routing behavior. Click **Setup** next to the lane you want to configure.
3. Connect the lane to one or more OnlyFans custom lists using the list picker.
4. Save the configuration.

## Lane counts

The Lists page shows the current fan count for each connected list. This is pulled live from OnlyFans and gives you a quick sense of how many fans are routed through each lane.

## Connecting and disconnecting lists

To change which OnlyFans list is linked to a lane:

- Click the **Connect** or **Edit** option for the lane.
- Pick the new list from the dropdown.
- Save.

To remove a list from a lane, click **Disconnect** next to the linked list.

:::tip
If a fan belongs to multiple OnlyFans lists, they'll be routed by the first matching lane in priority order. Review your lane priorities if fans are being routed unexpectedly.
:::
