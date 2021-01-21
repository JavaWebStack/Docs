# API Reference

## HTTPClient
Method                                         | Description
---------------------------------------------- | --------------------------------------------------
`setBaseUrl(String baseUrl)`                   | Sets a base url that will be prepended to any path
`authentication(String type, String value)`    | Sets the `Authentication` header
`bearer(String token)`                         | Sets the `Authentication` header (Alias for `authentication("Bearer", token)`)
`basicAuth(String username, String password)`  | Sets the `Authentication` header (Basic)
`setSSLVerification(booolean verification)`    | Allows to disable ssl verification to allow self-signed or expired certificates
`timeout(int timeout)`                         | Defines the request timeout in ms. Defaults to `5000` (5 seconds)
`query(String key, String value)`              | Adds query parameter to all requests
`header(String key, String... values)`         | Adds header to all requests
`cookie(HttpCookie cookie)`                    | Adds a cookie to all requests
`removeCookie(String name)`                    | Removes a cookie
`autoCookies()`                                | Enabled the auto-cookies feature which automatically sets cookies sent by the server
`request(String method, String path)`          | Starts a new request of the given method
`get(String path)`                             | Starts a new `GET` request
`post(String path)`                            | Starts a new `POST` request
`post(String path, Object body)`               | Starts a new `POST` request with a body
`put(String path)`                             | Starts a new `PUT` request
`put(String path, Object body)`                | Starts a new `PUT` request with a body
`delete(String path)`                          | Starts a new `DELETE` request
`abstractMapper(AbstractMapper mapper)`        | Set a custom instance of AbstractMapper
`before(BeforeRequestInterceptor interceptor)` | Set an interceptor to add more specfic parameters to requests
`debug()`                                      | Enabled debugging which prints the exceptions on bad requests
`isDebug()`                                    | Check if debugging is enabled

## HTTPRequest
Method                                         | Description
---------------------------------------------- | --------------------------------------------------
`authentication(String type, String value)`    | Sets the `Authentication` header
`bearer(String token)`                         | Sets the `Authentication` header (Alias for `authentication("Bearer", token)`)
`basicAuth(String username, String password)`  | Sets the `Authentication` header (Basic)
`query(String key, String value)`              | Adds query parameter to all requests
`header(String key, String... values)`         | Adds header to all requests
`cookie(HttpCookie cookie)`                    | Adds a cookie to all requests
`removeCookie(String name)`                    | Removes a cookie
`contentType(String contentType)`              | Sets the `Content-Type` header
`body(byte[] body)`                            | Sets the request body
`body(String body)`                            | Sets the request body
`jsonBody(Object object)`                      | Sets the request body and content type to `application/json`
`jsonBodyElement(AbstractElement object)`      | Sets the request body and content type to `application/json`
`formBody(Object query)`                       | Sets the request body and content type to `application/x-www-form-urlencoded`
`formBodyString(QueryString query)`            | Sets the request body and content type to `application/x-www-form-urlencoded`
`formBodyString(String query)`                 | Sets the request body and content type to `application/x-www-form-urlencoded`
`execute()`                                    | Executes the request manually
`status()`                                     | Returns the http status code
`bytes()`                                      | Returns the http response as `byte[]`
`string()`                                     | Returns the http response as `String`
`data()`                                       | Returns the http response as `AbstractElement` (see AbstractData library)
`object(Class type)`                           | Coerces the http response into the given type
`header(String key)`                           | Returns the first entry's value of the header
`headers(String key)`                          | Returns the values of all entries of the header
`cookie(String name)`                          | Returns the cookie with the given name
`cookies()`                                    | Returns all response cookies