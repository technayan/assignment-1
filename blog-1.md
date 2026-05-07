# Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

"any" is called a "type safety hole" because it effectively turns off TypeScript's static type checking for a variable. TypeScript is used for it's type checking facility. But "any" bypasses compiler safety mechanisms and force to treat data as any type and access any property. Which can cause unexpected runtime errors. On the other hand "unknown" is considered as safer choice for handling unpredictable data. It allows you to assign any type to a variable. But it requires the developer to prove the type via narrowing before performing any operations. Type narrowing is the process where we narrow down the type of a broad or unknown type variable using checks called type guard.

## any

any allows us to use any type of data in a variable and also access any property even if the property is not available for the data type. It also bypasses the compiler safety mechanisms. So, we can't see any error while using a method that is not available on that type. We only see the error on runtime.

For example: </br>
<code>
const data: any = 123;
console.log(data.toUpperCase());  
</code>

The Following code will provide a runtime error -> TypeError: data.toUpperCase is not a function.

Here we want to access a method of string on a number data type. TypeScript gives no error as we use data type any here. We will get error only in runtime. So any is considered as "type safety hole".

## unknown

we use unknown on those variables who's type is not yet known. But we need to check it's type before using the value or access any method. Unless TypeScript shows error on development.

For example: </br>
<code>
const user: unknown = "Nayan";
console.log(user.toUpperCase());
</code>

Here we are trying to use a method of string on string data type. But we are getting error on development via TypeScript. error -> 'user' is of type 'unknown'.

We have to check the type before using the value or access any method.

Correction: </br>
<code>
const user: unknown = "Nayan";

    if (typeof user === "string") {
        console.log(user.toUpperCase());
    }

</code>

Now, TypeScript knows the data type of the variable inside the if block, so the operation becomes safe.

## type narrowing

Type narrowing means reducing a broad or unknown type into a specific type using checks called type guard.

For example: </br>
<code>
const checks = (value: string | number) => {
if (typeof value === "string") {
console.log(value.toUpperCase());
} else {
console.log(value.toFixed(2));
}
};
</code>

Here we start assuming the value be string or number. Then inside the first block, we narrows value to string and inside the else block we narrows the value to number.

There are some ways to narrow types:

### typeof: 
</br>
<code>
    if (typeof value === 'string');
</code>
used for string, number, boolean, undefined, function.

### instanceof:
</br>
<code>
    if(person instanceof Person);
</code>
used for classes and objects.

### in operator:
</br>
<code>
    if("name" in obj);
</code>
checks wheather a property exist.
</br> </br>

So, we can say that any is a "type safety hole" for bypassing type safety in TypeScript. And unknown is the safer choice for handling unpredictable data as the developer has to checks it's type before using it. Type Narrowing helps us to narrow down types from broad and unknown types using checks called type guard.
