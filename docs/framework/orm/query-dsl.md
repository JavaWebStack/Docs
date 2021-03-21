# Query DSL
## Introduction
The Query DSL aims to provide a simple to use but also powerful interface for querying entities.

### Accessing the Repo
The repository is returned initially by the register method but you can retrieve it at any time using the static get method.
```java
Repo<MyModel> repo = Repo.get(MyModel.class);
```

### Quick Data Access
The repository itself has a few quick access methods for querying data.
- get(id)
- all()
- stream()

### Starting a query
You can start a query either by using the `query()` method or by directly using the `where(field [, operation], value)` method on the repository.
```java
QueryBuilder<MyModel> query = Repo.get(MyModel.class).query();
```

### Query Filters and Options
These are the methods which can be called on a query builder. They are following the builder pattern and return the query itself. Make sure to to field names and not the actual column names.

#### where
This is the most important method for filtering entities. It allows to compare a field with a field using different supported operators (default "=").
```java
Repo.get(User.class).where("age", ">=", 18) // All users more than or exactly 18 years old
```

#### like
Sometimes you want to search for values which are not equal but similar. SQL provides the "LIKE" operator to achieve this. This method is a shorthand for `where(field, "LIKE", value)`.
```java
Repo.get(Article.class).like("title", "%" + keyword + "%") // All articles containing the keyword in the title
```

#### lessThan
This method is a shorthand for `where(field, "<", value)`.
```java
Repo.get(User.class).lessThan("age", 18) // All users younger than 18
```

#### greaterThan
This method is a shorthand for `where(field, ">", value)`.
```java
Repo.get(User.class).greaterThan("age", 17) // All users older than 17
```

#### isNull
This method filters for entities where the given field's value is null.
```java
Repo.get(User.class).isNull("description") // All users without a description
```

#### notNull
This method filters for entities where the given field's value isn't null.
```java
Repo.get(User.class).notNull("description") // All users with a description
```

#### orderBy
This method orders the results by the given field and returns them in descending order if the optional second parameter is set to true.
```java
Repo.get(User.class).orderBy("age", true) // All users starting with the oldest descending to the youngest
```

#### limit
Limit the amount of entities returned.
```java
Repo.get(User.class).limit(3) // Only the first 3 users
```

#### withDeleted
If [soft-deletes](/framework/orm/soft-deletes/) are enabled for the model, this will include soft-deleted entities into the query.
```java
Repo.get(Article.class).withDeleted() // All articles ever written including the deleted ones.
```

### Executing the query
You can execute the query and retrieve the result using one of the following methods.
#### get
The `get()` method will execute the query and return the first entity or null if none was found.
#### all
The `all()` method will execute the query and return a Java List holding all entities. If no entities are found the List will be empty.
#### stream
Similar to the all method this will return all results but in a Java Stream which can be used for further processing in a functional way.
