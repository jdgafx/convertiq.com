# ConvertIQ AI Content Audit Report

**Generated:** 2026-01-28  
**Auditor:** Playwright MCP + undetectableai.pro  
**Pass Threshold:** ≤4% AI detected  
**Status:** IN PROGRESS

---

## Executive Summary

| Metric | Cloudflare | Netlify |
|--------|------------|---------|
| Total Pages | 16 | TBD |
| Passed (≤4%) | 2 | TBD |
| Failed (>4%) | 0 | TBD |
| Status | Auditing | URL Needed |

**Cloudflare Deployment:** https://convertiq.pages.dev ✅ LIVE  
**Netlify Deployment:** URL needed from GitHub secrets

---

## Cloudflare Pages Results

| # | Page | URL | Score | Status | Notes |
|---|------|-----|-------|--------|-------|
| 1 | **Home** | https://convertiq.pages.dev/ | **0%** | ✅ PASS | "Content appears human-written" |
| 2 | **About** | https://convertiq.pages.dev/about/ | **0%** | ✅ PASS | "Content appears human-written" |
| 3 | **Pricing** | https://convertiq.pages.dev/pricing/ | 🕒 | In Progress | Content extracted, checking... |
| 4 | Contact | https://convertiq.pages.dev/contact/ | 🕒 | Pending | - |
| 5 | Blog | https://convertiq.pages.dev/blog/ | 🕒 | Pending | - |
| 6 | Services | https://convertiq.pages.dev/services/ | 🕒 | Pending | - |
| 7 | Lead Funnel | https://convertiq.pages.dev/services/lead-funnel/ | 🕒 | Pending | - |
| 8 | AI Chatbot | https://convertiq.pages.dev/services/ai-chatbot/ | 🕒 | Pending | - |
| 9 | AI Voice | https://convertiq.pages.dev/services/ai-voice/ | 🕒 | Pending | - |
| 10 | Google Business | https://convertiq.pages.dev/services/google-business/ | 🕒 | Pending | - |
| 11 | Review Response | https://convertiq.pages.dev/services/review-response/ | 🕒 | Pending | - |
| 12 | Email Automation | https://convertiq.pages.dev/services/email-automation/ | 🕒 | Pending | - |
| 13 | Social Media | https://convertiq.pages.dev/services/social-media/ | 🕒 | Pending | - |
| 14 | Ad Copy | https://convertiq.pages.dev/services/ad-copy/ | 🕒 | Pending | - |
| 15 | SEO Content | https://convertiq.pages.dev/services/seo-content/ | 🕒 | Pending | - |
| 16 | Landing Pages | https://convertiq.pages.dev/services/landing-pages/ | 🕒 | Pending | - |

---

## Detailed Results

### 1. Homepage (/) - ✅ PASS
**URL:** https://convertiq.pages.dev/  
**AI Score:** 0%  
**Status:** PASS  
**Verdict:** "The content appears human-written."  
**Cross-check:** All detectors (Turnitin, Copyleaks, OriginalityAI, GPTZero, Crossplag, Sapling.ai, Gowinston.ai, ZeroGPT) show as human.

### 2. About (/about) - ✅ PASS
**URL:** https://convertiq.pages.dev/about/  
**AI Score:** 0%  
**Status:** PASS  
**Verdict:** "The content appears human-written."  
**Cross-check:** All detectors show as human.

### 3. Pricing (/pricing) - 🕒 IN PROGRESS
**URL:** https://convertiq.pages.dev/pricing/  
**Content Preview:** "Transparent Pricing. Simple Pricing. Real Results. No hidden fees. No long-term contracts. Full customization on everything—that's just how we roll..."

---

## Netlify Deployment

**Status:** Workflow configured but URL not accessible  
**Workflow:** `.github/workflows/netlify.yml`  
**Secrets Required:**
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

**To complete Netlify audit, provide the deployment URL.**

---

## Tools Created

### 1. AI Content Auditor
**Location:** `convertiq.com/scripts/ai-content-auditor/`  
**Files:**
- `auditor.js` - Main audit script
- `package.json` - Package configuration

**Usage:**
```bash
cd convertiq.com/scripts/ai-content-auditor
node auditor.js --all
```

**Features:**
- Audits all configured sites
- Generates timestamped markdown reports
- Compares deployment results
- Identifies pages needing humanization

---

## Methodology

1. Navigate to page using Playwright MCP (`browser_navigate`)
2. Extract text content excluding nav/footer/scripts (`browser_evaluate`)
3. Submit to undetectableai.pro/detector
4. Wait 15 seconds for analysis
5. Extract AI score percentage
6. Mark PASS if ≤4%, FAIL if higher
7. Record cross-check results from all detectors

---

## Next Steps

1. **Complete Cloudflare audit** - Continue checking remaining 14 pages
2. **Obtain Netlify URL** - From GitHub secrets or deployment logs
3. **Audit Netlify** - Run identical checks on Netlify deployment
4. **Compare deployments** - Verify content is identical
5. **Finalize report** - Update with all results

---

*Report last updated: 2026-01-28*  
*Auditor: AI Content Auditor v1.0.0*
