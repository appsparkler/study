# Animations

### An extremely simple animation

```kt
modifier = modifier
  .clickable { isExpanded = !isExpanded }
  .animateContentSize()
```
