---
title: Connecting an OnlyFans Account
description: Step-by-step guide to connecting a new OnlyFans account to OnlyAI.
sidebar:
  order: 2
---
Connecting a model means linking an OnlyFans account so OnlyAI can read and send messages, deliver content, and track revenue on your behalf.

## Before you start

You'll need:

- The OnlyFans account **email and password**.
- A **proxy region** (UK or US) — this should match the geographic region where the OnlyFans account is usually accessed.
- Optionally, a short **bio** for the AI to use as context.

## Connection wizard

1. Go to **Models → Add Model**

   ![](/images/docs/connect-onlyfans/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-11%20%D0%BE%2020.45.44.png)

1. Fill in the connection form:

   - **Model name** — a label used inside OnlyAI (doesn't affect the OnlyFans profile).
   - **OnlyFans email** — the login email for this account.
   - **OnlyFans password** — the account password.
   - **Proxy region** — choose UK or US based on the account's typical location.
   - **Bio** *(optional)* — a short description the AI can reference when chatting.

1. Click **Connect**. OnlyAI will attempt to sign in to OnlyFans and initialize the connection.

![](/images/docs/connect-onlyfans/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-12%20%D0%BE%2012.32.39.png)

## Handling verification steps

OnlyFans may require additional verification during the connection attempt. Two scenarios are possible:

### Two-factor authentication (2FA)

If the account has 2FA enabled, a code entry field will appear. Check the email or authenticator app linked to the OnlyFans account, then enter the code and confirm.

### Face verification

Some accounts require face verification before OnlyAI can access them. If this happens:

1. A **verification URL** will be displayed in the wizard.
1. Copy the URL and open it in your browser.
1. Complete the face scan on the OnlyFans website.
1. Return to the OnlyAI wizard and click **Resume** to continue the connection.

:::caution
Face verification links expire. Complete the scan promptly after copying the URL.
:::

## After connecting

Once the connection succeeds, you'll be taken to the new model's **Overview** page. From there you can:

- Configure the AI persona in [Profile](/models/profile/).
- Set up your [Content library](/content/library/).
- Enable the [Welcome Flow](/welcome-flow/setup/).
- Turn on automation in [Settings](/models/controls/).

## Resuming a failed attempt

If the connection was interrupted (e.g. you closed the tab), you can resume it by navigating back to **Add Model** and using the attempt dropdown to pick up where you left off.

:::note
Previous connection attempts are listed in a dropdown at the top of the wizard. Select the relevant attempt to see its current status and continue.
:::
