// the static method is used when the class should have the single copy of that instance
// the static method cannot be accessed by the instance of he class
// it can be accessed by the class name itself
// creating a class and keep the age a static
var patient_details = /** @class */ (function () {
    function patient_details() {
        this.name = 'kavi';
    }
    patient_details.prototype.display_name = function () {
        console.log(this.name);
    };
    patient_details.prototype.display_age = function () {
        console.log(patient_details.age); //the age can be accessed by the class name rather than the "this" keyword
    };
    patient_details.age = 26;
    return patient_details;
}());
var Patient_Details = new patient_details;
Patient_Details.display_name();
patient_details.age;
// //thus the code throws the error
var patient_Details = /** @class */ (function () {
    function patient_Details() {
        this.name = "kavi";
    }
    patient_Details.prototype.display_name = function () {
        console.log(this.name);
    };
    patient_Details.prototype.display_age = function () {
        console.log(patient_Details.age); //the age can be accessed by the class name rather than "this" keyword   
    };
    patient_Details.age = 22;
    return patient_Details;
}());
var Patient_details = new patient_Details;
Patient_details.display_name();
patient_Details.age; //accessing the age directly using the class name
