# Getting Started
## Introduction
The ORM (Object-Relational-Mapping) allows you to access SQL databases without any need to write sql query strings or map between sql and java. This is all done by the ORM for you and even more. A lot of Java ORM's are implementing the Java Persistance API (JPA) but we decided against it to allow more dynamic query design using a custom query DSL that aims to be as user friendly as possible. This guide will give you a quick introduction to the basics of the ORM.

## Quick Start
To get you started you first need to design your first model. Let's persist our apps users as an example.
### Definining the model class
Every model **needs to extend the `Model` class** and have at least one field with the `@Column` annotation. As this alone doesn't really allow us to store any real data we'll add some more user data fields to it. Note that only fields having the `@Column` annotation are going to be scanned and persisted to the database. You can add additional fields or methods to the class but **there always needs to be an empty constructor** available so the ORM can create instance of the model class.
```java
public class User extends Model {
    @Column
    int id;
    @Column
    String email;
    @Column
    String firstName;
    @Column
    String lastName;
}
```
### Registering the model
Once you got your model defined you are ready to go. First you need to create a connection to the database. The ORM allows to implement custom sql drivers by simply implementing the SQL interface but it ships with a ready to go MySQL/MariaDB implementation using the standard MySQL connector for Java. Second you need to register your model with the ORM giving the model class and the sql connection that should be used for this model. There is also a third optional parameter which allows to give an `ORMConfig` instance holding some additional configuration options.
```java
SQL connection = new MySQL("localhost", 3306, "mydatabase", "myuser", "changeme");
ORM.register(User.class, connection /* , new ORMConfig().setDefaultSize(255) */);
```
We are not going into [migrations](/docs/orm/migrations) in this quick guide so we assume that you create the equivalent table by hand.  
*Note: The table name by default is the class name in plural converted to snake-case (users). The default ORMConfig will also convert column names from camel-case to snake-case so "firstName" needs to be named "first_name" in the database.*
### Creating a new user
The first thing you might want to do is inserting new users into the database. In order to do that you can simply construct your model as you do with any other java class and fill it with data. After that you can simply call the `save()` method on it to actually save it to your database. This will also set the id field to the auto increment id.
```java
User user = new User();
user.email = "john@example.com";
user.firstName = "John";
user.lastName = "Doe";
user.save();
System.out.println("New User ID: " + user.id);
```
### Accessing a user by id
At a later point we might want to access the user we've just created. The component that allows us to access model entities is the `Repo` class. It's returned by the `register` function but can also be accessed at any time by using the `Repo.get(model)` method. To access just a single entity by it's id you can use it's `get(id)` method.
```java
User user = Repo.get(User.class).get(1);
if(user != null){
    System.out.println(user.firstName + " " + user.lastName + " (" + user.email + ")");
} else {
    System.out.println("Couldn't find the user!");
}
```
### Querying a single or multiple users
When searching for an entity or querying multiple entities you might want to use the query dsl. You can use the `get()` method to only get the first result or the `all()` method to get all results.
```java
User john = Repo.get(User.class).where("email", "john@example.com").get();
List<User> familyDoe = Repo.get(User.class).where("lastName", "Doe").all();
```
*You can find more in-depth information about the query dsl [here](/docs/orm/query-dsl).*
### Updating a user's data
At some point of time you might also want to be able to change a user's data. To do this you can simply change the data you want to change and call the `save()` method you know from earlier again. The save method automatically detects whether this is a new or existing entity and will either create or update correspondingly.
```java
void marry(User mr, User mrs){
    mrs.lastName = mr.lastName;
    mrs.save();
}
```
### Deleting a user
Let's say one of your customers decided to delete his or her account and you want to remove it from the database. This is simply done by calling the `delete()` method.
```java
User customer = ...;
customer.delete();
```
#### Special Case: Soft Deletes
The ORM supports a technique called soft deletes. This will instead of actually the deleting the entity from the database, set a special timestamp to mark it as "deleted". It allows to restore the entity at any later point in time. You can read more about soft deletes [here](/docs/orm/soft-deletes).

## Conclusion
You are now able to save, query and delete entities in a database. Before using the ORM in your application we recommend to read the [QueryDSL Guide](/docs/orm/query-dsl) to make yourself familiar with all the options it offers. Another recommendation would be to take a look at [Migration API](/docs/orm/migrations) which provides a save and easy way of creating, upgrading and downgrading the database structure.