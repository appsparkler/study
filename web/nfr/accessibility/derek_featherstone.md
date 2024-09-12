# Accessibility for web design
## Structured Content
- Ensure structure is meaningfully arranged on a page.  For ex. main headings to have `<h1>`, sub headings to have `<h2>`, and so on.
- Ensure each page on the site has a unique title.
- Ensure the titles are properly written - for ex. "Bhagavad Gita, Shloka 2.77 - Lets Recite" instead of "Lets Recite - Bhagavad Gita, Shloka 2.77" - this will help people confirm quicker that they are where they expect to be.
- Use symantic HTML elements like
    - `<header>`
    - `<footer>`
    - `<aside>`
    - `<form>`
    - `<article>`
    - `<paragraph>`
    - `<main>`
    - `<nav>`
    - `<button>`
    - `<table>`
    - `<dl>`
    - `<ul>`
    - `<ol>`
- Ensure minimum use of least meaningful markup - use them ONLY when there's no other appropriate element
    - `<span>`
    - `<div>`
    - `<section>`


## Flexibility
- avoid assuming that that less than desktop size is "touch".  For ex. for someone who uses 800 X 600 screen resolution on desktop will see the design we made for tablets.  So if we designed only for touch on tablets, this user would have a problem.

### Text Resizing Cautions
- text disappears
- overlaps
- lacks meaning or functionality
- content block becomes too narrow

## Accessible Forms
- add `<label>` tag to every form fields
- ensure each form field has one-to-one relationship (i.e. one label for each field).  If there are two fields for multi-line address, ensure we add a "hidden" label (`aria-label`) for the second line.
- Use the HTML5 form types - these greatly improve the UX on mobile devices where the keyboards that come up are optimized for each type
    - tel
    - url or email
    - number
    - date
    - search
- Accessible error messages 
    - consistent placement - it shouldn't be placed above the field for some fields and below the fields for others.  It should be consistently placed
    - visually close to the field 
    - simple, plain message
    - error icon (for people with color blindness)
    - programatically connected to the field - use `aria-describedby`


## Text Equivanlets for audio and videos (Very Important!)
1. transcripts for podcasts,
1. captions or transcriptions for videos
1. for `<img>` tags, we need to use the `alt` attribute to describe the image which the screen-reader will read out.
1. meaningful `aria-label` for elements which the screen reader can read out to the user.
1. if a selection has the corresponding text, avoid duplication by using `aria-hidden="true"` 
1. audio description for important things that are happening on the screen.

## Different types of content
1. Informational - valuable in and of its own right (these need an equivalent - for ex. a podcast ought to have a transcript which is easily accessible.
1. Functional - useful to execute a task - play/pause, etc.
1. Decorative - unimportant, only for decoration

## Gestures on touch screens
- Google, Microsoft and Apple's documentation for assistive technology gestures.
- for ex.
    - dexterity issues - we can make a larget slider
- use gestures, but make sure there's another mechanism to do the same thing

## Accessible Web Design
- Think about the varios personas while building your site.  How would they navigate or complete tasks on the site?  For ex. on an ecomm site, it would be helpful to a keyboard user to be able to tab to the order-summary before entering the billing information even though the billing information comes first in the layout.
- improve spacing and size so that its easier to click on targets - for ex. pagination-buttons and radio buttons are either too small or too closely arrange to click on the right target.

## Accessible Design
- Color should not be the only method to communicate our message or the indicator - use shapes, patterns, labels, text, etc. along with color to improve accessiblility
- maintain contrast ratios - 4.5:1 is ideal, 5:1 is great, less than 3:1 is difficult for people
- Animations and motions 
    - try to avoid it
    - if we use it, have extremely smooth transitions and avoid jerky animations
    - provide option to user to turn on/off
    - respect the iOS setting and fine-tune the animation
- Ensure that the focus states are clear for all users
- Avoid keyboard traps by list out the tab order in the design.  For ex.
    1. User ID (label)
    1. Password (label)
    1. show/hide password (label)
    1. secret key (label)

## Accessibility is all about
1. Accessible Design
1. Accessible Development
1. Accessible Content

## Tools that user use for accessibility 
1. Magnifier
1. Screen Reader
1. Voice assist - for ex. Dragon accessibility software 
1. Eye movement recognition

## Think in terms of personas
- Its a good practice to build the application having in mind a few personas. It will put us in their shoes and develop an application that is accessible for everyone.  These personas have low vision, blind, deaf, arthritis and autism (ADD).
- Ask yourself
    - Can a person with color blindness access my site?
    - Can a blind person access my site?
    - Can a person with low vision access my site? (maginfies site to 400% or more)
    - can a person complete all tasks on the app with keyboard instead of mouse?
        - for someone who is blind, they cannot see where the cursor is on the screen.  They use screen reader.
    - can a person who can see the screen, locate where the mouse is from a distance?
    - how can you offer the same functionality to people who can't touch the screen?

![alt text](personas.png)