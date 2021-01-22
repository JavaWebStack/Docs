# Controller
When dealing with a lot of routes you most likely want to structure those and split them up into logical units. A controller is such a logical unit that mediates between http calls and your business logic. HTTP-Server doesn't come with any class that you need to extend but we highly recommend to create your own one. It allows you to have common logic that can be called from any controller. It does come with a feature called annotated controllers though which allows you to configure your route mapping by annotating your controller classes and route methods.

## Getting Started
So let's build a really simple example and what's more obvious than writing a Hello World? Just create a new class with a method that you can call whatever you want. It can have whatever return type you like but for better readability it should match the type(s) that you are actually going to return. For now we'll choose `String` and our method will return the famous "Hello World!". To tell the http server that route to bind it to you simply annotate your method with the `@Get` annotation that optionally takes a path. For demonstration purposes we chose to map it to `/hello`.
```java
public class HelloController {
    @Get("hello")
    public String hello() {
        return "Hello World!";
    }
}
```
To register your controller you can simply call the `controller` method.
```java
server.controller(new HelloController());
```

## Auto Discovery
With tens of controllers, registering each controller by hand can get quite messy so there is a feature called auto discovery.

To use this feature we highly recommend to use an abstract controller base class so you can filter by this class but it's not strongly required.

What is required though is to keep all your controllers in a single base package or subpackages of this package. To address this package it's good idea to have your base class inside of it.

To discover your controller you call the same `controller` method you used before but give it your base class and package to search for instead.
```java
server.controller(Controller.class, Controller.class.getPackage());
```

## Path Prefix
To keep your code nice and clean and also allow for easier refactoring you can prefix your controller with a base path and even prepend a global path during registration. To set a global base path the `controller` method takes an optional argument for the global prefix. To prefix your controller you can add the @PathPrefix annotation to it which takes a string for the prefix.
```java
@PathPrefix("hello")
public class HelloController {
    @Get
    public String hello() {
        return "Hello World!";
    }
}
```

## Parameter Injection
To keep your code clean, parameter injection allows to inject most of the request parameters.

### Default types and annotations
By default the `Exchange` and `HTTPMethod` are injected automatically.

There are annotations though which allow you to inject different types of request parameters.

`@Body` will inject the result of `exchange.body(typeOfParameter)`

`@Query(String name)` will inject the query parameter with the given name. The type needs to be `String`

`@Path(String name)` will inject the path variable with the given name using `exchange.pathVariables.get(name)`. The type needs to be the expected type after coercing.

`@Attrib(String name)` will inject the attrib with the given name using `exchange.attrib(name)`.

### Custom types
Sometimes you might want to automatically inject custom types in to routes. This is done using the `RouteAutoInjector` interface.
```java
public class RequestInjector extends RouteAutoInjector {
    
    public Object getValue(Exchange exchange, Class<?> type) {
        return type.getSimpleName().endsWith("Request")) ? exchange.body(type) : null;
    }

}
```