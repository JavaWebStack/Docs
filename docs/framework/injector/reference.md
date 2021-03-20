# API Reference
## Injector
Method                                                  | Description
------------------------------------------------------- | ------------------------------------------------------
`inject(Object object)`                                 | Injects fields in the given object
`make(Class type)`                                      | Instantiate new instance for the given type
`getInstance(Class type)`                               | Returns the default instance for the given type
`getInstance(Class type, String name)`                  | Returns the named instance for the given type and name
`setInstance(Class type, Object instance)`              | Sets the default instance for the given type
`setInstance(Class type, String name, Object instance)` | Sets the named instance for the given type and name