## Introduction
Soft-Deletes are a concept that describes marking certain objects as "deleted" instead of actually deleting them in case you still need to access them at a later point. We implemented soft-deletes using a timestamp field that gets set to the current date and time on deletion. Whenever you query on a repository with soft-deletes enabled the deleted entries are automatically getting filtered out in the query.

## Usage
In order to enable soft-deletes for a model you need to give it the `@SoftDelete` annotation. This will by default use the field "deletedAt" as soft-delete field but you can also give the field name as a parameter to the annotation.
```java
@SoftDelete
class User extends Model {
    /* <other fields> */
    @Column
    Timestamp deletedAt;
}
```
By calling the `delete()` method it will set the `deletedAt` timestamp to the current time. This will exclude it from queries which don't include the `withDeleted()` option. To later restore an entity you can use the `restore()` method or to finally delete it you can call `finalDelete()`.

## An additional note
Even though this might seem to be a pretty useful feature it's often considered to be bad practice. Our philosophy is to keep stuff simple and easy so we implemented native soft-delete support. In our view it's a good feature as long as you keep in mind the impact it has on query speed and storage usage and don't use it excessively.