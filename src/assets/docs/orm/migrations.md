## Introduction
While it might easy to keep your database up to date in your small dev setup in can get really dangerous when dealing with the production infrastructure or even open source software that might be used by hundrets or thousands of users who would need to upgrade their database. The way to tackle this problem are migrations which define the way a database needs to be upgraded or downgraded to match the current version in code. We support simple auto-migrations aswell as more complicated but way more advanced manual migrations.

## Auto Migration
The simplest way to upgrade the database to the required states is the AutoMigrator. It will determine the correct schema from the model class and execute the according sql statements.
```java
ORM.autoMigrate();
```
Or if you like to just migrate a single `Repo`. *Note that migrating all models using this method takes a lot more statements than calling it on the entire ORM.*
```java
Repo.get(MyModel.class).autoMigrate();
```

## Writing Migrations
This is the recommended and saver way but it requires quite some work from your side. Every migration needs to implement the `Migration` interface which contains 3 methods. The version method needs to return a string in format "yyyy-MM-dd HH:mm:ss" of the date this migration is supposed to be upgraded at. The up and down methods are used to describe the steps required to get to this state or get back to the previous state.
### Creating and dropping tables
```java
class UserMigration implements Migration {
    public String version(){
        return "2020-12-24 00:00:00";
    }
    public void up(DB db){
        db.table("users", table -> {
            table.id();
            table.string("username");
            table.string("email");
            table.string("description").nullable();
            table.dates();
            table.softDelete();
            table.create();
        });
    }
    public void down(DB db){
        db.table("users", DB.Table::drop);
    }
}
```
### Adding, modifying and dropping columns
```java
class UserUpdateMigration implements Migration {
    public String version(){
        return "2020-12-24 01:00:00";
    }
    public void up(DB db){
        db.table("users", table -> {
            table.string("username").rename("name");
            table.text("description").nullable().modify();
            table.string("email").drop();
            table.string("password").add();
        });
    }
    public void down(DB db){
        db.table("users", table -> {
            table.string("name").rename("username");
            table.string("description").nullable().modify();
            table.string("email").add();
            table.string("password").drop();
        });
    }
}
```
### Renaming tables
```java
class UserToCustomerMigration implements Migration {
    public String version(){
        return "2020-12-24 02:00:00";
    }
    public void up(DB db){
        db.table("users", table -> table.rename("customers"));
    }
    public void down(DB db){
        db.table("customers", table -> table.rename("users"));
    }
}
```
## Migrating
In order to migrate the database to a certain version your use the `Migrator` class. First create a new instance, then add all your migrations and finally migrate either to the current date and time or a custom version.
```java
new Migrator(connection, config).add(new UserMigration()).migrate();
```
*Note that this will also create a table called "migration_states" to keep track of the current database state. Never touch this table.*