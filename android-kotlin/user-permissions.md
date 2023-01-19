# USER PERMISSIONS

## Add list of permissions to `AndroidMainfest.xml`.  

For ex:
```xml
<uses-permission android:name="android.permission.CAMERA" />
```

## Add `<uses-feature>` to present the app only to users that have access to the feature on the app
```xml
  <uses-feature android:name="android.hardware.camera.any" />
```

## Check if all permissions are granted:
- Create a companion object for the class:
```kt
companion object {
  private const val REQUEST_CODE_PERMISSIONS=10 // any number as code so that we can check this code in onRequestPermissionsResult
  private val REQUIRED_PERMISSIONS = mutableListOf(Manifest.permisison.CAMERA).toTypedArray() // this is referenced from the android.Manifest library
}
```
- Create a private function to check if all permissions are granted:
```kt
private fun allPermissionsGranted() {
  REQUIRED_PERMISSIONS.all{ it
    ContextCompat.checkSelfPermission(baseContext,it) == PackageManager.PERMISSION_GRANTED	
  }
}
```
- Handle the permission request:
```kt
override fun onRequestPermissionsResult(
    requestCode: Int, permissions: Array<String>, grantResults:
    IntArray) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
    if (requestCode == REQUEST_CODE_PERMISSIONS) {
        if (allPermissionsGranted()) {
            Toast.makeText(this,
                "Permissions granted by the user.",
                Toast.LENGTH_SHORT).show()
        } else {
            Toast.makeText(this,
                "Permissions not granted by the user.",
                Toast.LENGTH_SHORT).show()
        }
    }
}
```
- Check permissions `onCreate`.  If no permissions, request the permissions:
```kt
if(allPermissionsGranted()) {
    Toast.makeText(this@MainActivity, "Ready to start camera", Toast.LENGTH_SHORT).show()
} else {
    ActivityCompat.requestPermissions(
        this, REQUIRED_PERMISSIONS, REQUEST_CODE_PERMISSIONS
    )
}
```
