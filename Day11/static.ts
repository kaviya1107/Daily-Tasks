// the static method is used when the class should have the single copy of that instance
// the static method cannot be accessed by the instance of he class
// it can be accessed by the class name itself

// creating a class and keep the age a static


class patient_details{
    name:string='kavi';
    static age:number=26;

    display_name(){
        console.log(this.name);
    }
    display_age(){
        console.log(patient_details.age); //the age can be accessed by the class name rather than the "this" keyword
    }
}
const Patient_Details=new patient_details
Patient_Details.display_name();
patient_details.age;

// //thus the code throws the error

class patient_Details{
    name:string="kavi"
    static age:number=22;

    display_name(){
        console.log(this.name);
    }
    display_age(){
        console.log(patient_Details.age);//the age can be accessed by the class name rather than "this" keyword   
    }
}
const Patient_details=new patient_Details
Patient_details.display_name()
patient_Details.age//accessing the age directly using the class name