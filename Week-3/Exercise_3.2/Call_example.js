const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}

//with the use of call, calls the fullName function method of the person,using person1
console.log(person.fullName.call(person1));
