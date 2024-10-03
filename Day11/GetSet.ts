//getter
class stud{
    private _name:string="kavi";
    private _semester:number;
    private _course:string="Physics";

    public get name(){
        return this._name;
    }
    public get course(){
        return this._course;
    }
    public get semester(){
        return this._semester;
    }
    public set semester(sem:number){ //setter
        this._semester=sem;
    }
}
let student=new stud();
    student.semester=5;
    console.log(student.semester);
    console.log(student.name);
    console.log(student.course);