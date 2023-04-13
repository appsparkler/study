# Intents

An intent is a request for the system to perform some action, commonly presenting a new activity.  There are many different intents.  `ACTION_SEND` is one of the intents.

To start an activity, we need the type of intent and the context.  For ex:

```kt
private fun shareOrder(context: Context, subject:String, summary: String) {
    val intent = Intent(Intent.ACTION_SEND).apply {
        type = "text/plain"
        putExtra(Intent.EXTRA_SUBJECT, subject)
        putExtra(Intent.EXTRA_TEXT, summary)
    }
    context.startActivity(
        Intent.createChooser(
            intent,
            context.getString(R.string.new_cupcake_order)
        )
    )
}
```
