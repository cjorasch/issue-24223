# Ionic Issue 24223

See https://github.com/ionic-team/ionic-framework/issues/24223 for a description of the issue

## Steps to reproduce

1. `npm start`
2. Click on `router.push('a')` button
3. Click on `router.push('a/b')` button
4. Click on `router.push('a/b/c')` button

There will now be 3 views in the stack

5. Click on `nav.pop()` button or click on the back arrow

The view will pop back to `a/b` but the url will change to `/` so the router and nav will be out of sync.

Additional details are available in the Javascript console.
