####  @fbltd/google-auth

<b>google-auth</b> is a wrapper library for "Sign in with Google" that simplifies the integration process:
- no need to uglify your html file;
- no untyped global variables;
- framework-agnostic — works with any frontend framework.;
- no hidden properties or any side effects beyond the import;
- includes TypeScript types.

Just type
```typescript
const google = await GoogleAuth.import();
if (!google) {
    // Google lib loading error
    return;
}

// Proceed with Google Sign-In
google.accounts.id.initialize(...);
```
and check the [Google documentation](https://developers.google.com/identity/gsi/web/reference/js-reference) for further exploration.
