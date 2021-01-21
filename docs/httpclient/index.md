# Overview
A simple to use http/https client that can be extended to build beautiful api clients.

## Getting Started
```java
HTTPClient client = new HTTPClient();
client.setBaseUrl("https://jsonplaceholder.typicode.com");
GraphArray data = client.get("/todos").graph().array();
for(GraphElement e : data) {
    System.out.println(
        (e.get("completed").bool() ? "✓" : "✘") +
        " - " +
        e.get("title").string()
    );
}
```

## Maven
```xml
<repository>
    <id>javawebstack</id>
    <url>https://repo.javawebstack.org</url>
</repository>
```
```xml
<dependency>
    <groupId>org.javawebstack</groupId>
    <artifactId>HTTP-Client</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>
```