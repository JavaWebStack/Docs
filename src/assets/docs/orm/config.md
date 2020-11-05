## Introduction
When registering new models you can optionally pass in an instance of `ORMConfig` which allows to define a few settings including the ORM's default behavior. In this guide we want to introduce you to all the options available.

## Available Options
The api follows a builder pattern so you can join all your options

### Table Prefix
Every table name gets prefixed with this string. This allows to have multiple instances of your application running on the same database. By default this value is empty.
```java
new ORMConfig().setTablePrefix("app1_");
```

### Convert camelCase field names to snake_case
While you want to use camel-case in Java, you often want to have your database in snake-case. This option automatically converts field names from camel-case to snake-case. This feature is enabled by default.
```java
new ORMConfig().setCamelToSnakeCase(false);
```

### Default Size
This determines the default size for string like columns. It defaults to 0 which uses TEXT instead of a VARCHAR of the given length.
```java
new ORMConfig().setDefaultSize(255);
```

### ID Primary Key
You often want your id field to be the primary key of the table. This feature is enabled by default and can be disabled.
```java
new ORMConfig().setIdPrimaryKey(false);
```

### Adding type mappers
You can also add your own using the `ORMConfig`. Read more about type mapping [here](/docs/orm/type-mapping)
```java
new ORMConfig().addTypeMapper(new CustomTypeMapper());
```

## Passing the config
Once you got your config done you can pass it into the register call.
```java
ORMConfig config = new ORMConfig()
    .setDefaultSize(255)
    .setTablePrefix("app1_");
ORM.register(MyModel.class, connection, config);
```