# Plan: Fix mobile input styling in refactored NewsletterForm

## Problem
After merging variants, mobile input/button lost original styling and focus behavior.
1. `flex-1` on base input stretches it in `flex-col` mobile layout.
2. Mobile button is `w-[81%] mx-auto` instead of original `w-full`.
3. `outline-none` only applies at `sm:`, leaving mobile with browser default focus ring.
4. Parent form has no mobile focus styling; desktop relies on `focus-within:ring`.

## Cross-check: breakpoint claim
You suggested changing `sm:` to `lg:`. However, the original `newsletter-section.tsx` toggled visibility at `sm:` (`sm:hidden` / `hidden sm:block`). Keeping `sm:` preserves the exact original responsive boundary. Reaching `lg:` would change behavior.

**Decision: keep `sm:` breakpoints** to match original parent toggling.

## Changes (newsletter-form.tsx only)

### Form
- Base: `flex w-full flex-col gap-3`
- Desktop: `sm:flex-row sm:items-center sm:h-[48px] sm:bg-white sm:border sm:border-fs-border-light sm:rounded-[12px] sm:p-[3px] sm:shadow-[...] sm:focus-within:ring-2 sm:focus-within:ring-[#7F56D9] sm:focus-within:ring-offset-0`
- Add `sm:gap-0` so desktop gets no gap.

### Input
- Remove base `flex-1`. Add base `outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent`.
- Remove `sm:outline-none`. Add `sm:focus:ring-0` so desktop defers to parent ring.
- Keep existing mobile border/background/radius; keep `sm:bg-transparent sm:border-none`.

```tsx
newsletter-input w-full h-[48px] px-4 bg-white border border-fs-border-light rounded-[12px] outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent sm:flex-1 sm:h-full sm:bg-transparent sm:border-none sm:focus:ring-0 font-heading font-normal text-[14px] leading-[17px] placeholder:text-fs-grey/70
```

### Button
- Change base width from `w-[81%] mx-auto` to `w-full`.
- Keep `sm:w-auto sm:mx-0`.

```tsx
newsletter-button h-[48px] w-full px-5 bg-fs-purple rounded-[12px] shadow-[0_1px_1px_rgba(88,111,54,0.08)] sm:h-full sm:w-auto sm:mx-0 sm:rounded-[10px] font-heading font-bold text-[12px] leading-[15px] text-white whitespace-nowrap transition-transform duration-150 sm:hover:-translate-y-[1px] disabled:opacity-70
```

## Validation
- `npx tsc --noEmit` passes.
- `npm run lint` passes.
- Mobile: 48px fixed height input, full-width button, custom purple focus ring, no browser default outline.
- Desktop: no gap between input/button, parent focus-within ring, no double ring.
