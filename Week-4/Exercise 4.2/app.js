function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.printName = function () {
    console.log(this.name);
    console.log(this.age);
};

function Employee(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Object.setPrototypeOf(Employee.prototype, Person.prototype);


Employee.prototype.printsubject = function () {

    console.log(this.subject);
}


const e = new Employee('Aks', 'Data Structures');

console.log(e.name + ' is teaching now ' + e.subject);
