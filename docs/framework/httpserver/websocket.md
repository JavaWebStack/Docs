# Web Socket
HTTP-Server has full websocket support. As websockets are consistent connections that can't be handled by a single function call, they are handled a bit differently.

## Usage
To implement a websocket endpoint you need to implement the `WebSocketHandler` interface which has the method `onConnect`, `onMessage` and `onClose`. Those 3 methods purpose should be self explanatory and they represent the lifecycle of a websocket connection. Instead of giving you the raw `Exchange` it will provide you with a `WebSocket` that wraps the http exchange and exposes you the websocket specific methods for sending messages and closing the connection.

```java
public class NotificationWebsocket extends WebSocketHandler {

    public void onConnect(WebSocket socket) {
        System.out.println(
            "New Websocket connection for user " +
            socket.getExchange().pathVariables.get("user")
        );
    }

    public void onMessage(WebSocket socket, String message) {
        System.out.println("New Websocket message: " + message);
    }

    public void onClose(WebSocket socket, int code, String reason) {
        System.out.println("Websocket connection closed");
    }

}
```
To register your websocket you can simply use the `webSocket` method of `HTTPServer`. It takes a path aswell as an instance of your handler. As it's initially handled the same way as any other `GET` route you can use path variables and apply middleware.
```java
server.webSocket("/notifications/{i+:user}/socket", new NotificationWebsocket());
```
