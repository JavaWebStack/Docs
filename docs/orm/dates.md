# Dates
## Introduction
Often you want some kind of way to determine when entities were created or last updated at. This feature covers exactly that need.

## Usage
It's as simple as adding the `@Dates` annotation and the 2 timestamp columns (createdAt, updatedAt) to your model. You can optionally specify the field names using the annotation parameters `create` and `update`.
```java
@Dates
class User extends Model {
    /* <other fields> */
    @Column
    Timestamp createdAt;
    @Column
    Timestamp updatedAt;
}
```
Whenever you save the entity, the `updatedAt` field gets set to the current date and time while `createdAt` only gets set on the first save.