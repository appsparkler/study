# Animations

## Animate when height changes example:

```kt
// everytime the columns size changes due to change in content; it will do it in style (i.e. with animation)
Column(
   modifier = Modifier
       .animateContentSize(
           animationSpec = spring(
               dampingRatio = Spring.DampingRatioMediumBouncy,
               stiffness = Spring.StiffnessLow
           )
       )
)
```

### An extremely simple animation

```kt
modifier = modifier
  .clickable { isExpanded = !isExpanded }
  .animateContentSize()
```
