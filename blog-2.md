# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

Pick and Omit are utility types of TypeScript. These utility types prevent duplication and helps us to derive new, specialized types directly from a "master" interface. We don't need to redefine properties manually for these utility types. Pick and Omit automatically take the selected properties from the master interface and keeps our code DRY (Don't Repeat Yourself) by ensuring there is a single, authoritative source for every piece of type information.

## Prevent Duplication:

If we don't us utility types and want to create types from a master interface then our code base should like this:
<code>
interface User {
username: string;
password: string;
role: string;
age: number;
sex: string;
}

    type UserCard = {
        username: string;
        age: number;
    }

    type UserInfo = {
        username: string;
        role: string;
        age: number;
        sex: string;
    }

</code>

Here, we can see how much duplication we use to make two types from a master instance.

If we use Pick and Omit utility types our code base would be much cleaner and we can prevent duplication while keeping DRY in our code.

### Pick<Type, Keys>:

Pick constructs a new type by selecting targeted subset of properties (provided in Keys) from an existing one (provided in Type).

<code>
    interface User {
        username: string;
        password: string;
        role: string;
        age: number;
        sex: string;
    }

    type UserCard = Pick<User, "username" | "age">

</code>

Here, we create a new type with properties -> "username" and "age" from master interface User using pick utility type. We don't rewrite the properties. We take them from the single and authoritative master instance. So, Pick utility type prevents code duplication and keep DRY principle in our code.

### Omit<Type, Keys>:

Omit constructs a new type by stripping away targeted subset of properties (provided in Keys) from an existing one (provided in Type).

<code>
    interface User {
        username: string;
        password: string;
        role: string;
        age: number;
        sex: string;
    }

    type UserInfo = Omit<User, "password">

</code>

Here, we create a new type with all the properties of User except "password" using Omit. Omit strip away "password" as we pass it in keys and create a new type with other properties of the master interface. We don't rewrite the properties. We take them from the master interface. In this way Omit utility type prevent duplication and keep DRY principle in our code.

By using these utility types we can control the property types from the master instance. If we want make any changes on the type of any properties then we don't need to find them throught the code base and channge them manually. We just need to change it on the master interface. Then all the specialized slices of the master interface will automatically synchronized with the type as they are derived from the master interface. These utility types reduces maintainance tax and keeps DRY (Don't Repeat Yourself) in our code.
