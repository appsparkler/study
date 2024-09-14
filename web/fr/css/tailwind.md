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


