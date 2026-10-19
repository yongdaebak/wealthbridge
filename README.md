# WealthBridge — Interactive wealth-advice demo

Two connected experiences in one Vite + React prototype: a **mass-affluent client app** and a **relationship-manager (RM) workbench**.

## Run locally

```bash
npm install
npm run dev
```

Use **Switch to RM** in the header to see workflow changes from the other side. State is shared and saved to localStorage in the same browser profile. `npm run build` builds `dist/` for deployment.

## End-to-end demo

1. **Client > Opportunities**: compare deposits, REITs, funds and bonds. Select an investment to see its details, estimated income and risk suitability. Press **Request RM review**; this is **not** an executed trade.
2. **RM > Requests**: view the new request. Mark it reviewed or request a follow-up. Changes show in the client experience.
3. **RM > My Clients**: choose a client and open **Recommendations**. A rules-based suitability gate checks product risk, client risk, consent and product knowledge before sharing a recommendation.
4. **Client > Insights**: view the RM-shared recommendation and open its detail page.
5. **Client > My RM**, send a message; **RM > Messages**, reply. Messages appear in both views.
6. **RM > Activity log**: view actions recorded in the simulated audit trail.

## Architectural fit

**Sources (mocked)**: deposits/CASA, account transactions, holdings, KYC/risk tier, product shelf, market data and client consent.

**Rules and orchestration (in-browser simulation)**: monitoring signals (FD maturity, idle cash and portfolio drift), next-best-action ranking, deterministic suitability screening and plain-language explanations. Recommendations and requests route through RM approval/review. No live banking integration, no real AI model, no brokerage transaction execution.

**Controls modelled**: risk profile suitability, CKA for applicable products, client consent, approved product shelf, fee visibility, explainable recommendation reasons and local event log. **Not production-grade**: no real authentication, backend database, immutable records, encryption, transaction signing, genuine data feeds or regulated-advice engine.

## Deployment

Import this repository into [Vercel](https://vercel.com/new). Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`. No environment variables required.

## Disclaimer

All names, holdings, market data, yields, accounts and messages are fictional. Rates/yields are indicative placeholder figures, not current offers or projections. This is a hackathon demonstration, not a banking service or financial advice.
