# Recipes

## Adding an image

- Click on <kbd>Resource Manager</kbd> tab
- Click on <kbd>+</kbd> sign
- Select <kbd>Import Drawables</kbd> from the dropdown
- Select the image we want to add
- Add the `Density` qualifier and select `No Density` value.
- Finally, `Next > Import`.  You can check the details before finally clicking on `Import`.
- Now you can access your image with `R.drawable.<imageName>`

## Composables

### Image to fill the background of the container

```kt
Image(
    painter = image,
    contentDescription = null,
    modifier = Modifier
        .fillMaxHeight()
        .fillMaxWidth(),
    contentScale = ContentScale.Crop
)
```

### Aligning Text content

```kt
// align to the right
Text(
    message,
    fontSize = 36.sp,
    modifier = Modifier.fillMaxWidth().wrapContentWidth(align = Alignment.Start)
)
// align to the left
Text(
    text = from,
    fontSize = 24.sp,
    modifier = Modifier.fillMaxWidth().wrapContentWidth(align = Alignment.End)
)
```