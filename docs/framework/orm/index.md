# Overview
## About
The ORM (Object-Relational-Mapping) allows you to access SQL databases without any need to write SQL query strings or map between SQL and java.
[Getting Started](/docs/orm/getting-started)

## Goals and State of the Project
The ORM attempts to make sensible decisions for developers while also granting the ability to overwrite these decisions. To illustrate this with an example:

The ORM ships with a DefaultMapper, which specifies, for instance, what Field in your model maps to which SQL datatype. You have the option to use your definition and partially use ours when it fits you already.

We consider our v1.0 goals achieved when the following features are implemented:

Type Definition:
Elementary - If this feature is not included there will be SQL features which will become impossible to perform with the ORM.

Utility - If this feature is not included the developer will not be limited in options but needs to write more code to achive the same code

Decision - A utility feature, which forces some convention on the developer and should, thusly, be overwritable.

### Relation Mapping

|Achieved|Tested|Implemented|Feature|Type|
| - | - | - | - | - |
| | | | Spec is WIP | Info |

### Query Building
|Achieved|Tested|Implemented|Feature|Type|
| - | - | - | - | - |
| No | No | No | SELECT Clause (default: SELECT *) | Elementary |
| No | No | Yes | FROM Clause derived from Model | Elementary |
| No | No | Yes | WHERE Clause | Elementary |
| No | No | Yes | Nested WHERE Clause | Elementary |
| No | No | Yes | WHERE EXISTS Clause | Elementary |
| No | No | No | whereHas | Utility |
| No | No | No | has | Utility |
| No | No | Yes | ORDER BY Clause | Elementary |
| No | No | No | GROUP BY Clause | Elementary |
| No | No | Yes | OFFSET Clause | Elementary |
| No | No | Yes | LIMIT Clause | Elementary |
| No | No | Yes | HAVING Clause | Elementary |
| No | No | Yes | Belongs To (1:n) Relation | Utility |
| No | No | Yes | Has Many (n:1) Relation | Utility |
| No | No | Yes | Belongs To Many (n:n) Relation | Utility |
| No | No | Only Count | Aggregate Functions (only aggregate value returned) | Elementary |
| No | No | No | Aggregate Function (in conjunction with GROUP BY) | Elementary |
| No | No | No | Aggregate Function (with default value for null) | Elementary |

### Automatic Migration
|Achieved|Tested|Implemented|Feature|Type|
| - | - | - | - | - |
| No | No | Yes | Default Size per config | Utility |
| No | No | Yes | Size per configurable per column | Essential |
| No | No | Yes | Table name is the plural of class name | Decision |
| No | No | Yes | Table name per configurable per model | Essentials |
| No | No | Yes | Column name is snake case of attribute name | Decision |
| No | No | Yes | Column name convention is overwritable to other cases | Utility |
| No | No | Yes | Column name is configurable per column | Essential |
| No | No | No | An index can be set per column | Essential |
| No | No | Yes | A primary key can be set per column | Essential |
| No | No | No | A primary key can be set across multiple columns | Essential | 
| No | No | Yes | A unique attribute can be set per column | Essential |
| No | No | No | A foreign key can be set per column | Essential |
| No | No | No | ON DELETE | Essential | 
| No | No | No | ON UPDATE | Essential |
| No | No | No | On Soft Delete | Utility |
| No | No | Yes | Auto-increment can be configured per column | Essential |
| No | No | No | Not nullable can be configured per column | Essential |

### Processing
|Achieved|Tested|Implemented|Feature|
| - | - | - | - |
| No | No | Yes | Timestamps (Created At, Updated At) | Utility |
| No | No | Yes | Soft Deletes | Utility |
| No | No | Yes | Observer | Utility |

### Security
|Achieved|Tested|Implemented|Feature|
| - | - | - | - |
| No | No | No | SQL Injection Protection |

### Not included but considered features
|Feature|Type|Reason|
| - | - | - |
| Raw Query Fragments | Essential | They pose a big challenge to our typing though they might get a lose AbstractObject typing in later versions |
| Joins | Essential | They were the subject of internal discussions, and we aim to support them in later versions
| Configurable Encoding/Collation | Essential | We decided only to support utf8mb4_unicode_ci collation for simplicity's sake. We might add this much later |
| Unsigned Propery | Essential | We could offer this easily by simply plugging in the setting in the SQL Syntax and existing databases with unsigned columns already work. The Datatype ranges in Java, however, do not support it and can overflow. We want to introduce our own unsigned types later.

### Current Design Flaws and architectural impurities 
- Relationships are not their own types, and their methods placed on the model
- We don't treat exceptions soundly
- An id field is currently necessary (we could dynamically go via the attributes primary key and unique and otherwise match all data with LIMIT 1)
 

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