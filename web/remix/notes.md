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

## Outlet
- we can add an `Outlet` tag and it will render the route in the Outlet, for ex. in our `app/root.tsx` file:
```tsx
<div id="detail">
    <Outlet />
</div>
```

## Client Side Routing - `<Link>` instead of `<a>`
- Client side routing allows our app to update the URL without requesting another document from the server
```tsx
    <Link to={`/contacts/1`}>Your Name</Link>
```

## Loader and `useLoaderData`
- We can execute server-side code with `loader` function.  For ex. in the `app/root.tsx` file:
```tsx
// setting up the loader to get data and pass it to the UI
export const loader = async () => {
  const contacts = await getContacts();
  return json({ contacts });
};

// using the data
export default function App() {
  const { contacts } = useLoaderData<typeof loader>();
    // somewhere in the JSX
    // {contacts.map() ....}
}
```

## Handling Errors
### Step 1: To add types to the params, we can use `LoaderFunctionArgs` - we need to do this to avoid params being of type `any`
```tsx
import { LoaderFunctionArgs } from "@remix-run/node";

export const loader = ({params}:LoaderFunctionArgs) => {
    return ...
}
```
### Step 2: Use `invariant` to make the `params.contactId` type-safe. `params.contactId` is narrowed down to type of `string` since `Params` in `LoaderFunctionArgs` has type like so:

```tsx 
export type Params<Key extends string = string> = {
    readonly [key in Key]: string | undefined;
};
```

```tsx
import invariant from 'tiny-invariant'
import { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async({params}:LoaderFunctionArgs) => {
    invariant(params.contactId, "Missing Contact Id");
    const contact = await getContact(params.contactId); //params.contactId is typeof string :)
    return ...
}
```

### Step 3: Throwing Error
We can throw errors on server-side as a `Response`:
```tsx
// inside a loader
if(!contact) {
    throw new Response("Not Found", {status: 404})
}
```

## An important note on `HTML Forms`:
HTML forms actually cause a navigation in the browser, just like clicking a link. The only difference is in the request: links can only change the URL while forms can also change the request method (GET vs. POST) and the request body (POST form data).

Without client side routing, the browser will serialize the form's data automatically and send it to the server as the request body for POST, and as URLSearchParams for GET. Remix does the same thing, except instead of sending the request to the server, it uses client side routing and sends it to the route's action function.

## POST request:
We can add a `http:POST` request like so:
```tsx
<Form method="post">
    <button type="submit">New</button>
</Form>
```
Now, when the `New` button is clicked, we can handle the request in an `action`:

```tsx
export const action = async() => {
  const contact = await createEmptyContact();
  return json({contact})
}
```

## 



