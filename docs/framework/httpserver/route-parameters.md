# Route Parameters
Routes can contain static parts and variable parts called route parameters. This section explains how to define and access path parameters.

## Defining parameters
The basic syntax for route parameters is the parameter name in curly braces so an example would be `/profiles/{username}`. You can have as many route parameters as you want and they can be in any place. To allow more specific parameters and automatic mapping into java types you can optionally specify a type by adding the type's name followed by a colon in front of the parameter name so this would like `/users/{i+:id}` for example. Unless specified it defaults to `string`.

### Default Parameter Types
Type                     | Description
------------------------ | ---------------------------------------
`*`, `any`               | 0 to n arbitrary characters
`*+`, `any+`             | 1 to n arbitrary characters
`s`, `string`            | an alphanumberic string with length > 0
`short`                  | arbitrary short
`i`, `int`, `integer`    | arbitrary integer
`i*`, `int*`, `integer*` | positive integer including 0
`i+`, `int+`, `integer+` | positive integer (> 0)
`i-`, `int-`, `integer-` | negative integer
`l`, `long`              | arbitrary long
`l*`, `long*`            | positive long including 0
`l+`, `long+`            | positive long (> 0)
`l-`, `long-`            | negative long
`f`, `float`             | arbitrary float
`d`, `double`            | arbitrary double
`b`, `bool, `boolean`    | boolean value (true, false, 1, 0)
`uuid`                   | version 4 uuid (java.util.UUID)

### Custom Parameter Types
To add your own parameters from scratch you can extend the abstract class `RouteParamTransformer` but i would recommend to extend the `DefaultRouteParamTransformer` as it already comes with predefined base types that you can build on using the `extend` method.
```java

```
```java
public enum QuizAnswer {
    A, B, C, D
}

public class CustomRouteParamTransformer extends DefaultRouteParamTransformer {

    public CustomRouteParamTransformer() {
        add("quizanswer|qa", "[A-D]", (e,s) -> QuizAnswer.valueOf((String) s)); // Create an new type from scratch
        extend("i+", "question", (e,s) -> Quiz.findQuestion((Integer) s)); // Extend an existing type
    }

}
```
To register your custom transformer you can use the method `routeParamTransformer`
```java
server.routeParamTransformer(new CustomRouteParamTransformer());
```
---
**Note:**
Web-Framework already comes with built-in model-binding functionality. [Read More](/framework/model-binding)
---
## Accessing parameters
To access the parameter values the `Exchange` currently exposes a `Map<String, Object>` Field `pathVariables` that contains all path variables. When using annotated controllers you can also annotate parameters with the `@Path("variablename")` annotation to inject the path parameter.
```java
public class SomeController {

    @Get("/{param1}/{param2}")
    public void example(Exchange exchange, @Path("param1") String param1) {
        String param2 = (String) exchange.pathVariables.get("param2");
    }

}
```