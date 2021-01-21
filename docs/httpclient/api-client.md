# Building an API Client
HTTP-Client is built to be extendable and allow building api clients and prevent you from writing any useless boilerplate code

## Extending the HTTPClient class
To get started simply create your api class and extend the `HTTPClient` class and use the constructor to set default properties associated with your api.
```java
public class PetstoreAPI extends HTTPClient {

    public PetstoreAPI(String token) {
        setBaseUrl("https://api.example.com/v1");
        bearer(token);
    }

    public Dog[] getDogs() {
        return get("/dogs").object(Dog[].class);
    }

}
```
As you see there is a neat method called `object` that takes the datatype and will try to automatically coerce the response into it. It uses the `AbstractData` library which has support for different data formats like json, yaml, form-data and more.