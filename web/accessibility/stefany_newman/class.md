# Accessibility

## Resources
- color blind   
    - GreyScale Chrome plugin - https://chromewebstore.google.com/detail/grayscale-the-web-save-si/mblmpdpfppogibmoobibfannckeeleag?hl=en
    - I want to see like the colour blind Chrome plugin - https://chromewebstore.google.com/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg
    - Understanding color blindness - https://a11yproject.com/posts/understanding-colourblindness/
    - Color Contrast Checker - https://webaim.org/resources/contrastchecker/
- ARIA
    - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked

## Personas
- color blindness
- hearing impairment
- deaf
- 

## Getting Started
- semantic HTML
    - we need to use `button` for click interaction
    - we need to use `h1, h2, h3, h4, etc.` in the correct order
    - we need to use native form-controls for dropdowns, radios, checkbox instead of div, span, etc.
    - if we need to, due to unavoidable reason, use un-semantic element, ensure the following:
        - add `tabindex`
        - add `role` - for ex. `role="button"` for a button.  There are many other roles available to define the role of an element
- designing color accessible webpages
    - consider designing in grayscale (or take a printout of your website in black and white)
    - maintain contrast ratio
    - do not rely only on colors to transfer meaning
        - for ex. add name of color 
        - especially forms - users with color blindness are not going to be able to see the errors marked out in red
    - Exercise 
        - change your design in gray scale mode
        - set the laptop in grayscale mode and view your website, if everything is perceivable
        - use the available tools to make site accessible for all
- aria attributes
    - `aria-expanded` - set true/false based on expanded/collapsed state of a popup menu for ex.
    - `aria-label` - add aria label to SVG, for ex. to describe what clicking on the SVG will do
        ```html
            <a href="/path/to/insta">
                <svg aria-label="Follow us on Instagram"></svg>
            </a>
        ```
    - `aria-labelledby` - if we have a caption for an image, we want to tag the image with that caption.  For ex.: 
        ```html
            <img src="path/to/gem_file.webp" aria-labelledby="content" />
            <p id="caption">Red Gem</p>
        ```
    - `role and tabindex` attributes - to change the role of non-semantic element and make it tabbable
- accessible images
    - avoid non-blank alt attributes on background images. simply use `alt=""`
    - add non-blank alt attributes on supporting images - `alt="pink flowers"`
    - ensure the user gets the information that is needed when they tab on the image
    - use `aria-labelledby` for images with captions.  Ensure to add `alt=""` if we use `aria-labelledby`
    - if the image has important text, ensure the alt attribute or caption has that text.
- outline property
    - outline needs to be clearly visible, with the right contrast and color, to all users
- tabindex
    - `0` - to include element in tab-flow
    - `-1` - to remove element from tab-flow
    - `<any-integer>` - to manually set the tab-order
- 

    