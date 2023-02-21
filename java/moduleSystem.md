# Module System

## The Descriptor
By default all properties of classes are not accessible outside a module - this includes both
private and public.  To make a method example, we would use the descriptor to make it accessible.

## How to make the project modular?
By adding the `module-info.java` file; the project becomes modular.  It can use only is is required
with the `requires` keyword.
