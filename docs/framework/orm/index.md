# Overview
## About
The ORM (Object-Relational-Mapping) allows you to access SQL databases without any need to write SQL query strings or map between SQL and java.
[Getting Started](/docs/orm/getting-started)

## Goals and State of the Project
The ORM attempts to make sensible decisions for developers while also granting the ability to overwrite these decisions. To illustrate this with an example:

The ORM ships with a DefaultMapper, which specifies, for instance, what Field in your model maps to which SQL datatype. You have the option to use your own definition and partially use ours when it fits you already.

We consider our v1.0 goals achieved when the following features have been achieved:

### Relation Mapping

|Achieved|Tested|Implemented|Feature|
| - | - | - | - |
| No |No | No | 
|  |  |  |

### Query Building
|Achieved|Tested|Implemented|Feature|
| - | - | - | - |
| No | No | Yes | |

## Maven (Standalone Usage)
```xml
<repository>
    <id>javawebstack</id>
    <url>https://repo.javawebstack.org</url>
</repository>
```
```xml
<dependency>
    <groupId>org.javawebstack</groupId>
    <artifactId>ORM</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>
```
```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.22</version>
</dependency>
```