# Testing
HTTP-Server supports unit testing with JUnit 5 (Jupiter). To realise this we provide a mock `TestExchange` that allows you to simulate http requests. The recommended way to do tests against http routes is to extend the provided abstract class `HTTPTest` that contains helper methods for mocking requests.

To make testing comfortable we suggest to create your own intermediary testing base class instead of of directly extending `HTTPTest`. This way you can set up your test environment in a single location and prevent redundant code.
```java
public class TestCase extends HTTPTest {
    public TestCase() {
        super(new ExampleApp().getServer());
    }
}
```
Then extend your base class and start writing tests.
```java
public class ExampleTest extends TestCase {

    @Test
    public exampleTest() {
        httpGet("/example")
            .assertStatus(200)
            .assertJsonPath("data.hello", "Hello World");
    }

}
```