class Person{

    _steps = 0;
    _age = 0

    constructor(name){
        this.name = name;
    }

    get fullname(){
        return `${this.firstName} ${this.lastName}`;
    }
    
    get age(){
        return this._age;
    }

    set age(age){
        if(typeof age == 'number'){
            this._age = age;
        }
    }

    get steps(){
        return this._steps;
    }

    set steps(step){
        this._steps = step;
    }
}

class Student extends Person{

    _id = 0;

    constructor(name, id){
        super(name);
        this._id = id;
    }

    get id(){
        return this._id;
    }
}

//factory
function createStudent(name, id, age, steps){
    let p = new Student(name, id,age, steps);
    p.age = age;
    p.steps = steps;

    return p;
}
let p1 = createStudent('Renan', 5050, 34, 20);

console.log(`${p1.name} tem ${p1.age} anos, ja andou ${p1.steps} passos. A matricula é ${p1.id}`);

