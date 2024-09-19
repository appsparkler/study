# Tailwind CSS
https://www.linkedin.com/learning/tailwind-css-3-essential-training/working-with-tailwind-css?resume=false&u=2130370

## Tools and resources
- Editor Plugins
    - TailwindCSS Intellisense
    - Tailwind Docs
    - CodeSwing - oneline editor for 
- Vite
- npm packages
    - tailwindcss - 
    - postcss - TW runs as a postcss plugin, so we need it.
    - autoprefixer - adds prefix to make TW compatible with older browsers

- Tailwind Play - https://play.tailwindcss.com
- CDN - https://cdn.tailwind.css

## Tailwind Modules
- `@tailwind base` - 
- `@tailwind components` - 
- `@tailwind utilities` - 

## Tailwind Config - Preflight
- We can set `corePlugins.preflight: false` if we want to keep the default browsers styles for the elements

## Customizing default configuration:
We can modify the base layer so that the default elements have different styles from what is provided by the browser.  So, the elements will show a default style even without adding any classes to them.  For ex:

```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    @layer base {
        h1 {
            @apply text-4xl text-orange-500 mt-1;
        }
        h2
            @apply text-xl text-indigo-500 mt-3;
        }
    ｝
```

## Utility First
- Tailwind is utility first i.e. 
    - no unclear names
    - clear intent
    - no overrides
    - mirrors CSS

## Make Tailwind Easy to use
- use `@apply`
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    @layer components {
        .btn {
                @apply
                bg-gray-500
                hover:bg-gray-700 
                text-white
                ру-2
                px-4
                m-0.5
                text-sm
                rounded-md
            ｝
    }
    ```
Now we can simply use the `.btn` class wherever we need these styles
- Tailwind UI: https://tailwindui.com/ has ready to use component copy-paste - paid and free options
- Tailwind Kit: https://www.tailwind-kit.com - 
- Headless UI
- Daisy UI
- Raybo.org - search for tailwind
 
## Tailwind Colors
- `bg-<color-name>-<weight>` - `bg-gray-900`
- `text-<color-name>-<weight>` - ex. `text-gray-900`
- gradients - `bg(-none)|(-gradient-to)(-DIR)` - `DIR` is the direction - `t,l,r` etc.
    - examples: 
    - `from and to` - `class="bg-gradient-to-r from-red-600 to-blue-600"`
    - `from, via and to` - `class="bg-gradient-to-tl from-red-600 via-yellow-600 to-blue-600"`

