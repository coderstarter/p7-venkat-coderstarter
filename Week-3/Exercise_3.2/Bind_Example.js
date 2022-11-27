var car = {
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function () {
        console.log(this.registrationNumber + " " + this.brand);
    }
}


// By this way of calling it will throw the error as "this" is assigned to the global context right now and don't have the access to the properties

// var myCarDetails = car.displayDetails;
// myCarDetails();

// By using the "bind" , "this" refers to the parameter in the paranthesis, Able to access the properties of the car.

var myCarDetails = car.displayDetails.bind(car);
myCarDetails();
