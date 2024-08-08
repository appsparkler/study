# Accessibility

## Resources
- color blind   
    - GreyScale Chrome plugin - https://chromewebstore.google.com/detail/grayscale-the-web-save-si/mblmpdpfppogibmoobibfannckeeleag?hl=en
    - I want to see like the colour blind Chrome plugin - https://chromewebstore.google.com/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg
    - Understanding color blindness - https://a11yproject.com/posts/understanding-colourblindness/
    - Color Contrast Checker - https://webaim.org/resources/contrastchecker/
- ARIA
    - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked
- OZ Player - accessible Video Player: https://www.accessibilityoz.com/ozplayer/
- Multimedia Accessibility FAQ (W3C)
- W3C Web Accessibility Initiaive
- WebAIM
- 10 Ways to Make Your Website Accessible (DeamHost)
- American Sign Language is not English on the Hands

## Personas
- color blindness
- hearing impairment
- deaf

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
    - `aria-hidden="true"` - will remove the entire element from the accessibility API
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
- bypass blocks (skips link)
    - add bypass blocks for providing option to user to skip the secondary content on the page
        - for ex. 
            - navigation links in the header
            - filters
    - skipping this is optional - we'll have a hidden-until-tabbed/focused link such as "Skip site navigation links" and "Skip product filters" or simply "Skip to Main" or "Skip to inventory"
- accessible audio and video
    - Providing captions and transcript
        - this also adds points for SEO because SEs cannot go through our audio or video files
    - captions can be open or closed
    - captions need to be in various languages depending on our target audience
    - include the captions in the title of the vides - for ex. `About Lets Recite [Closed Captions]`
    - captions should be in good quality and grammar
    - all on-screen-text needs to be showin in the caption/transcript
    - audio descriptions need to be included - for ex. door bell rings, chimes, thunder, etc.
    - placements should not block important sections on the video
    - consider interactive-transcripts for extreme user experience
    - audio/visual description - 
    - for videos without voice and presentations - ensure we include a audio-feedback so that sight-impared users know what our content is about.
    - IDV - consider Integrated Described Videos - 
    - Sign language for hearing impared - there are 300 sign languages so adding all 300 might not be possible so it is important to know our target audience.
    - accessible podcasts
        - include interactive transcripts for hearing impaired 
        - include transcripts in various languages for all users
        - also consider sign-language
        - enlist all speakers and links mentioned in the podcast
    - careful with your audience
        - avoid flashy videos, animations and sounds that may cause harm to users with epilepsy
        - nevery autoplay videos
    - accessible player
        - displaying captions
        - button for audio descriptions
        - full screen option
        - keyboard accessible
        - as cross browser compatible as possible (toss it if it doesn't run on the most popular browsers)
        - support for interactive transcript





    