# Modules

Modules provide a way to extend parts of your applications without the need of adding these one by one.

## Writing Modules

A module just needs to implement the `Module` interface, like in the following example: 

```java
public class ExampleModule implements Module {
    // overwrite methods of the interface
}
```

## Usage

```java
public class ExampleApp extends WebApplication {
    protected void setupModules() {
        addModule(new ExampleModule());
    }
}
```

## Community Modules

- [JWS-GraphQL](https://github.com/x7airworker/JWS-GraphQL)