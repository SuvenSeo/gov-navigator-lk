# GovCompanion Brand Rollout Checklist

## ✅ Completed
- [x] Update package.json name & description
- [x] Update AppHeader with "GovCompanion" branding
- [x] Update HeroSection messaging ("Government services made simple & clear")
- [x] Update storage keys (govnav → govcompanion)
- [x] Create BRANDING.md with complete guidelines
- [x] Update README.md with new positioning

## 🔄 In Progress / Next Steps

### Code Updates
- [ ] Update `.vercel` or Vercel project name to "govcompanion"
- [ ] Update domain: `govcompanion.lk` (or subdomain)
- [ ] Review all hardcoded text for "GovNav" references and replace with "GovCompanion"
- [ ] Update meta tags (og:title, description, etc.) in `app/layout.tsx`
- [ ] Update favicon/logo if separate from lion motif

### Content & Copy
- [ ] Review ChatInterface response templates for brand voice
- [ ] Update all "Quick Ask" prompts to reflect new positioning
- [ ] Sinhala translations review (currently: "ඔබගේ විශ්වස්ත රජ සහකරු" — verify accuracy)
- [ ] Update service knowledge base descriptions to use brand language

### Design System
- [ ] Confirm color usage matches BRANDING.md (maroon/gold/emerald palette)
- [ ] Review animation timings for "premium" feel
- [ ] Ensure accessibility contrast ratios meet WCAG AA
- [ ] Test dark mode colors for brand consistency

### Marketing & External
- [ ] Update website homepage (if separate from app)
- [ ] Create social media accounts (@govcompanion_lk)
- [ ] Update GitHub repo description
- [ ] Create email templates for support/announcements
- [ ] Prepare press release if launching publicly

### Analytics & Tracking
- [ ] Update GA4 property name
- [ ] Update Sentry project name
- [ ] Rename any existing user data sets/dashboards

### Testing
- [ ] Full QA pass on branding consistency
- [ ] Mobile viewport branding check
- [ ] Dark mode branding review
- [ ] Accessibility audit (contrast, semantic HTML, alt text)

---

## Quick Brand Checks

Run these before any public release:

1. **Visual Test**: Does every screen feel cohesive? (colors, lion motif, hierarchy)
2. **Tone Test**: Would a 60-year-old understand this without confusion?
3. **Trust Test**: Does it feel official yet approachable?
4. **Sri Lankan Test**: Is local identity clear but not stereotypical?
5. **Consistency Test**: Is the brand voice consistent across all copy?

---

## File References

- **Brand Guidelines**: `BRANDING.md`
- **Visual Components**: `components/LionMotif.tsx`, `app/globals.css` (color vars)
- **Key Text**: `components/AppHeader.tsx`, `components/HeroSection.tsx`
- **Documentation**: `README.md`, this file

