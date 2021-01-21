# Response Transformer
A request handler can return any kind of object. If no response transformer is registered this object will be transformed by calling it's `toString()` method.

## Json
For API's you usually want to return json so we included a `JsonResponseTransformer`. It's enabled by default (config: http.server.json) in Web-Framework. To register it manually you can use the `responseTransformer` method.
```java
server.responseTransformer(new JsonResponseTransformer().ignoreStrings());
```
As you've seen it also has an optional method `ignoreStrings()` that prevents strings from getting transformed. The constructor also optionally accepts a custom instance of `AbstractMapper`

## Custom
To create your own transformer you need to implement the `ResponseTransformer` interface. You need to implement the `transform(Object object)` and you can optionally override the default method `transformBytes(Object object)`
```java
public class YamlResponseTransformer implements ResponseTransformer {

    public String transform(Object object) {
        return new AbstractMapper().toAbstract(object).toYaml(true);
    }

}

```
If the transformer can't transform the given object it should return `null` so the next transformer will be tried. If no transformer accepts the object it will fall back to `toString()`