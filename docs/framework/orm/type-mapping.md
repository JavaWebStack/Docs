# Type Mapping
## Introduction
The ORM needs to map from java field types to some primitive type that can be stored in the database. By default it can do this for Integer, Long, Double, Float, String, UUID, Timestamp, Date and any kind of Enum but you can also add your own type mapper to support custom field types.

## Usage
First create a class that implements the `TypeMapper` interface. It has to implement 4 methods, `mapToSQL` and `mapToJava` for actual type conversion and `getType` and `getTypeParameters` to define the sql type for correct conversion and auto-migration.
```java
class StringArrayMapper implements TypeMapper {
    public Object mapToSQL(Object source, Class<?> type) {
        if(source == null)
            return null;
        if(type.equals(String[].class))
            return String.join(",", ((String[]) source));
        return source;
    }
    public Object mapToJava(Object source, Class<?> type) {
        if(source == null)
            return null;
        if(type.equals(String[].class))
            return ((String) source).split(",");
        return source;
    }
    public SQLType getType(Class<?> type, int size){
        if(type.equals(String[].class))
            return SQLType.TEXT;
        return null;
    }
    public String getTypeParameters(Class<?> type, int size){
        return null;
    }
}
```
Then you can simply add an instance of your mapper to the `ORMConfig` which is described in detail [here](/docs/orm/config).
```java
new ORMConfig().addTypeMapper(new StringArrayMapper());
```