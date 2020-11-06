## Introduction
This page describes which settings and extra annotations you can use in your model class.

## Class Annotations

### @Table
This annotation allows to specify a custom table name.
```java
@Table("customers")
class User extends Model {
    ...
}
```
### @SoftDelete
This enables soft-deletes for the table. It has an optional parameter for the field name to use (defaults to `deletedAt`). Read more about soft-deletes [here](/docs/orm/soft-deletes).

### @Dates
This enables auto-dates for the table. It has two optional parameters `create` and `update` for the field names to use (udefaults to `createdAt` and `updatedAt`). Read more about auto-dates [here](/docs/orm/dates).

## Field Annotations

### @Column
This is the main annotation and is required to mark a field as a database column. It has a few optional parameters.
#### `name`
Allows you to specify a custom column name for this field.
#### `id`
Marks this field as the main identifier column. By default the ORM searches for the fields `id` and `uuid` but you can mark one of your choice with this annotation.
#### `ai`
Enables auto-increment for the column if it's the primary key column. By default the id field is automatically `ai=true`.
#### `key`
Can be set to either `NONE`, `PRIMARY` or `UNIQUE` and defaults to `NONE`. For the id field this is automatically set to `PRIMARY` by a policy that can be disabled in the [config](/docs/orm/config).
#### `size`
Specifies the size of the column in the database for auto-migration.