# NjDataGrid
A datagrid for angular 6 with .net core 2.1. Ongoing project

## Frameworks

1. [.Net Core 2.1](https://www.microsoft.com/net/download)

    1. **Repository Patterns and Dependency Injections**
    2. Generics
    3. Action
    4. Dynamic Linq
    5. Expressions and Func
    
2. [Angular 6](https://angular.io)
    1. Custom Datagrid
    2. Dynamic Columns and Action Button
    3. Dynamic Pagination Features
    4. Dynamic Search Box (One from all or separate Columns for each Textbox)

***
## Codes
> In this project, other than generic function, there are some codes, written just to show implementation of certain features in C#. There may be better ways to do. But we wrote it to show some of C# advance features. You will not need this to implement datagrid in your project.
```csharp
     Func<string, string, string> FullName = 
                    delegate(string firstName, string lastName)
                  {
                      return firstName + " " + lastName;

                  };
     result.Items.ToList().ForEach(p => p.FullName = FullName(p.FirstName, p.LastName));
```
***

## Our saying
   > Though We have tried to implement easy to understand and readable as well as generic functions without compromising with the best coding practise along with standard and efficient codes, there may be sections and areas needed to improve.
   
   You are most welcome to suggest change. 


