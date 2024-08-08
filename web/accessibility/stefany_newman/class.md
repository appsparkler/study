# Accessibility

## Resources
- color blind   
    - GreyScale Chrome plugin - https://chromewebstore.google.com/detail/grayscale-the-web-save-si/mblmpdpfppogibmoobibfannckeeleag?hl=en
    - I want to see like the colour blind Chrome plugin - https://chromewebstore.google.com/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg
    - Understanding color blindness - https://a11yproject.com/posts/understanding-colourblindness/
    - Color Contrast Checker - https://webaim.org/resources/contrastchecker/

## Personas
- color blindness
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
    
    

    