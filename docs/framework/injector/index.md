# Overview
Injector provides a generic dependency injection interface aswell as a default `SimpleInjector` implementation.
Most libraries of JavaWebStack deeply integrate the `Injector` and automatically inject fields in their domain objects.
To use your custom dependency injection framework you can simply write an adapter that implements the `Injector` interface.

## Getting Started
```java
public class Example {
    @Inject
    ExampleRepository defaultRepo;
    @Inject("backup")
    ExampleRepository backupRepo;
}
```
```java
Injector injector = new SimpleInjector();
injector.setInstance(ExampleRepository.class, new ExampleRepositoryImpl()); // Default instance
injector.setInstance(ExampleRepository.class, "backup", new ExampleRepositoryImpl()); // Named instance
Example example = injector.inject(new Example());
```

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
    <artifactId>Injector</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>
```