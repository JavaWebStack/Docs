# Overview
HTTP-Server is a really powerful and simple to use http routing library. While the name might be a bit confusing, it doesn't actually implement an http server from scratch but implements the Servlet API to allow using industry proven solutions. At the moment it's driven by Eclipse Jetty because it's fast and industry proven but this isn't fixed and might switch to another implementation in the feature.

## Maven (Standalone Usage)
```xml
<repository>
    <id>javawebstack</id>
    <url>https://repo.javawebstack.org</url>
</repository>
```
```xml
<dependency>
    <groupId>org.javawebstack</groupId>
    <artifactId>HTTP-Server</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>
```