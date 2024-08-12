# Remix

## The Root Route
`app/root.tsx` - this is the "Root Route"
    - it is the first component in the UI that renders so it typically contains the global layout of the page

## Link Tags
- Link tags can be added with a function, in the Root Route, for ex:
```tsx
import type { LinksFunction } from "@remix-run/node";
// existing imports

import appStylesHref from "./app.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];
```

## Routing
- add `app/routes` folder
- in that we can add dynmaic routes with `$` - for ex. `app/routes/contacts.\$contactId.tsx`
- In the Remix route file convention, `.` will create a `/` in the URL and `$` makes a segment dynamic. We just created a route that will match URLs that look like this:

- `/contacts/123`
- `/contacts/abc`


