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

## Creating un-nested routes
By default, Remix will automatically nest routes.  For ex. if we have 2 routes - `contacts.$contactId.tsx` and `contact.$contactId.edit.tsx` - Remix will expect the outlet on the `contactId` page.  To avoid this, we add and `_` at the end of the param in the filename - `contact.$contactId_.edit.tsx` - this tells Remix to not nest the route under `contact/<contactId>`

## Redirecting
We can redirect to other pages in `action` or `loader`:

```tsx
// inside action or loader
return redirect(`/contacts/${contact.contactId}/edit`)
```

## Using `NavLink` Component
This component has a `className` prop which accepts a function which can return a string or a string.  The function has parameters - `isActive`, `isPending` and others which let us know the status of the route

## Using navigation states
With `useNavigation()`, we can get the navigation states which can be helpful in informing user about the navigation state - for ex. - showing a spinner, etc.

## Index Route
- every route, from the root-route has an index route.  We can add an index route with `index.tsx`.  For ex. `dashboard/index.tsx`
- it renders this route when there are no other routes to render in the parent routes `<Outlet />`
- for the root route's `index`, we need to prefix `_` else it will consider `/index` as a separate page.  So the route would be `_index.tsx`

## Navigation within the component
- we can use `navigate(-1)` to navigate to the previous route.  If there is no previous route, it will navigate to the parent route

## Using the URL Search Params
- We can use the native API `URL` to pass the search params from the loader to the component.  For ex:

```tsx
// inside the loader
const url = new URL();
const q = url.searchParams.get("q");
return json({contacts, q});
```

## Replacing the history stack
- while navigating, we can replace the history with the second argument to `navigate`
```tsx
// inside the component
const isFirstSearch = q === null;
navigate(event.currentTarget, {
    replace: true // !isFirstSearch
})
```

## Fetcher Form
- many times we don't want to navigate or redirect while submitting a form like we did for edit and delete.  We simply want to update the UI.  In that case, we can use the `fetcher` API.  For ex.
```tsx
const fetcher = useFetcher();

<form.Fetcher>
    <button name="favorite" value="true/false" aria-label="Add to favorites/Remove from favorites" value={contact.favorite ? "false" : "true"}>...</button>
</form.Fetcher>
```

## Optimistic UI
- we can setup optimistic UI with fetcher:
```tsx
// if formData is available on fetcher, lets already show the new state, else, lets show the existing state
const favorite = fetcher.formData ? fetcher.formData.get("favorite") === "true" : contact.favorite
```


