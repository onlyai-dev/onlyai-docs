---
title: PPV Folders
description: How to create, organize, and price PPV content folders for AI delivery.
sidebar:
  order: 2
---

## What are PPV folders?

PPV (pay-per-view) folders are collections of content that the AI sends to fans as paid offers. When the AI detects that a fan is ready to buy, it selects a folder and delivers the content at the configured price.

## Creating a PPV folder

1. Navigate to the **Content** tab for the model.
2. Inside the **PPV** group, click **Create folder**.
3. In the sheet that opens, fill in:
   - **Folder name** — a descriptive internal label (fans don't see this).
   - **Vault list** — the OnlyFans Vault list containing the media for this folder.
   - **Price** — how much to charge the fan for this content.
4. Click **Save**.

The folder is now available for the AI to use.

## Pricing ladder

You can configure a **pricing ladder** within the PPV group — a sequence of folders at different price points. The AI uses this ladder to present escalating offers to fans over time, starting with lower-priced content and moving up.

To set up a ladder, create multiple PPV folders and arrange them in order of price.

:::tip
A well-structured ladder usually starts with a low-cost teaser folder ($5–$10) and escalates to premium content ($30+). This gives the AI natural progression points to work with.
:::

## Subfolders

Each PPV folder can have **subfolders** to further organize content variations (e.g. by theme, format, or intensity). The AI picks from available subfolders based on context.

Click inside a folder to see its subfolders and add more with the **+** button.

## Editing or deleting a folder

Hover over any folder and click the **⋯** menu to:
- **Edit** — change the name, linked Vault list, or price.
- **Delete** — remove the folder. This doesn't delete the content from your OnlyFans Vault, only from the OnlyAI library.

:::caution
Deleting a PPV folder means the AI will no longer use that content. If a fan recently received a message about this content, subsequent interactions may reference a folder that no longer exists.
:::

## How the AI selects PPV content

When **Sales** is turned on for a model, the AI considers the PPV folder structure when deciding what to offer a fan. It uses the pricing ladder and any fan context (e.g. previous purchases) to pick the most appropriate folder.

→ To enable sales, see [Model Controls](/models/controls/).
