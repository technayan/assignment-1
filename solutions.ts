// Problem 1:
const filterEvenNumbers = (nums: number[]): number[] => {
  return nums.filter((num: number) => num % 2 === 0);
};

// Problem 2:
const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};

// Problem 3:
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
  if (typeof input === "string") {
    return "String";
  } else return "Number";
};

// Problem 4:
const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

// Problem 5:
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};

// Problem 6:
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7:
const getIntersection = (numbers1: number[], numbers2: number[]): number[] => {
  return numbers1.filter((num: number) => numbers2.includes(num));
};
