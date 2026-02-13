## Description

What changes were made and why?

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Refactor
- [ ] Documentation update
- [ ] UI/UX change
- [ ] Dark mode migration

## Branch Naming Convention

- `feature/<description>` - New features
- `fix/<description>` - Bug fixes
- `refactor/<description>` - Code improvements
- `darkmode/<description>` - Dark mode migration work
- `docs/<description>` - Documentation updates

## Checklist (must complete before merge)

- [ ] Code builds: `npm run build` exits with code 0
- [ ] No lint errors: `npm run lint` passes
- [ ] No TypeScript errors: `npx tsc --noEmit` passes
- [ ] All pages render without console errors
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Dark mode styling applied consistently
- [ ] Tested in browser

## Verification Commands

```bash
npm ci
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment

- [ ] Netlify build hook configured
- [ ] Build preview tested
- [ ] Production deployment verified

## Screenshots (if UI changes)

## Related Issues

- Closes #
- Related to #
