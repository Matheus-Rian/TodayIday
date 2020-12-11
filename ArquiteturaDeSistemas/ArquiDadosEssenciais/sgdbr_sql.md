# SGDBR-SQL

## SQL

DDL - Data Definition Language
DML - Data Manipulation Language 
DQL - Data Query Language

### DDL

* Exemplos

Create Table Cliente {
  Codigo number(10) Not Null(required) Primary Key,
  Nome varchar(50) Not Null,
  Telefone varchar(15)
}

### DML

* Exemplos

insert into Cliente(Codigo, Nome, Telefone)
values(1, "Matheus", "(81) 99064545")

Delete from Cliente
Where Codigo = 1

Update Cliente
set Nome = "Matheus"
Where Codigo = 1

### DQL

* Exemplos

Select Codigo, 
      Nome, 
    from Cliente
<Where> Codigo = 1
  <Group by> Profissao
  <Having> Count(1) > 0
<Order by> Nome, Codigo

