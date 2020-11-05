## Introduction
Observers allow you to observe all actions taken on individual entities. There are 2 stages for each action where "*ing" is executed before and "*ed" after the action. Keep in mind that observers are only notified while calling the action methods on single entities, not in queries!

## Usage
### Writing an observer
An observer needs to implement the `Observer` interface which comes with default methods you can implement.
```java
class MyModelObserver implements Observer<MyModel> {
    public void created(MyModel entity){
        System.out.println("Created a new entity!");
    }
}
```
The available methods are:
- creating(entity)
- created(entity)
- updating(entity)
- updated(entity)
- saving(entity)
- saved(entity)
- deleting(entity)
- deleted(entity)
- restoring(entity)
- restored(entity)
### Registering the observer
In order to register your observer you need to call the `observe(observer)` method of the `Repo`.
```java
Repo.get(MyModel.class).observe(new MyModelObserver());
```