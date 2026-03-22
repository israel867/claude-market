# Kurtz Auto Detailing — Project Context

> Last updated: 2026-03-22

---

## Owner

**Israel Yanez** — ceramic coating detailer (service provider, not manufacturer)
Kurtz Auto Detailing
612 Mockingbird Street, Navasota, TX
(979) 574-2005
israel@kurtzautodetailing.com

---

## What We Built — Session 1 (2026-03-22)

### Outputs

| File | What it is |
|---|---|
| `brand/positioning.md` | Brand source of truth — positioning statement, audience profiles, tone of voice, pain points, messaging rules |
| `index.html` | Landing page — ceramic coating service page with hero, benefits, "what we won't promise" section, transparent pricing ($800–$1,600), quote request form. Live at `claude-market.vercel.app` |
| `lead-magnet.html` | Ceramic Coating BS Detector — 7-question interactive quiz that scores users on ability to spot exaggerated coating claims. Live at `claude-market.vercel.app/lead-magnet.html` |
| `emails/welcome-sequence.md` | 3-email welcome sequence (Day 0, Day 2, Day 4) triggered by quiz completion. A/B subject lines, preview text, full copy. Only Email 3 has a CTA. |

### Infrastructure
- GitHub repo: `github.com/israel867/claude-market`
- Live deployment: `claude-market.vercel.app` (auto-deploys on push)
- Git configured with `israel@kurtzautodetailing.com`

---

## What Worked Well

1. **Positioning-first approach.** Starting with competitive research and brand positioning before writing a single line of copy meant every asset spoke the same language. Nothing feels generic.
2. **Radical Transparency angle.** The "we tell you what coatings can't do" positioning is a genuine market gap. No competitor in the detailing space owns honesty as a brand identity. This gives every piece of content a clear edge.
3. **Quiz as lead magnet.** The BS Detector is inherently shareable and directly reinforces the brand angle. It's not a generic checklist — it's a tool that makes the prospect smarter, which builds trust before they ever talk to Israel.
4. **Email sequence restraint.** No CTA until Email 3. Emails 1 and 2 are pure value. This matches the anti-pressure positioning and builds trust through patience.
5. **Pricing on the page.** Putting $800–$1,600 on the landing page when competitors hide pricing is the single strongest proof of the transparency promise.

---

## What to Improve Next Session

1. **Form handling.** The quote form on `index.html` doesn't send anywhere yet. Needs to connect to an email service (ConvertKit, MailerLite, or a simple email forwarding setup).
2. **Quiz → email capture.** The BS Detector quiz needs an email gate on the results screen to actually feed into the welcome sequence. Right now it shows results without collecting contact info.
3. **Social proof.** Testimonial sections on the landing page are placeholders. Need real customer quotes or at minimum a Google Reviews embed.
4. **SEO basics.** No structured data, no Open Graph tags for social sharing, no sitemap. Low effort, high return.
5. **Landing page copy for the quiz.** We wrote promo copy for the BS Detector but haven't built it as a standalone landing page driving traffic to the quiz.
6. **Custom domain.** `claude-market.vercel.app` should become something like `kurtzautodetailing.com` or a subdomain.

---

## Suggested Next Steps (Priority Order)

1. **Wire up the form** — connect quote form to email delivery so leads actually reach Israel
2. **Add email capture to quiz** — gate results behind email input, connect to email platform, trigger welcome sequence
3. **Set up email platform** — create ConvertKit or MailerLite account, load the 3-email sequence as an automation
4. **Collect social proof** — pull best Google/Yelp reviews or ask 3 past customers for a one-sentence quote
5. **Custom domain** — point `kurtzautodetailing.com` (or similar) to Vercel
6. **Build quiz promo page** — standalone page that drives traffic specifically to the BS Detector
7. **Local SEO content** — "Ceramic coating in Navasota TX" page targeting local search

---

## Brand Context — Quick Reference

- **Positioning:** Radical Transparency — we tell you what coatings do, what they don't, what they cost, and what the warranty covers. Before you spend a dollar.
- **We sell:** Confidence, not coatings.
- **Audience:** Skeptical second-timers (30-55, $80K+, research-heavy, distrusts hype). Secondary: cautious first-timers.
- **Tone:** Direct. Honest. Confident. Anti-corporate. Short sentences. Plain words. No fluff. Sounds like a knowledgeable friend, not a marketing department.
- **Never:** Superlatives without proof, urgency/scarcity tactics, jargon to sound impressive, trashing competitors by name, overpromising.
- **Price range:** $800–$1,600 for most vehicles.
- **Positioning file:** Always load `brand/positioning.md` before writing any customer-facing content.
