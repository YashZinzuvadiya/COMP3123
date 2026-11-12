let variableLocal = 200
var variableglobal = 100 
variableglobal = "Hello"
console.log(variableglobal)

// Prototypes: one time use obejct created from the
// prototype called Object

const newObject = { 
    prop1: "Yash",
    prop2: "comp3123",
    method1: function(param1){
        console.log(param1)
    }
}

console.log(newObject)
console.log(newObject.prop1)
console.log(newObject.prop2)
newObject.method1("pizza")

// Prototype: Constructor

function Student(student_name, course, lunch){
    this.prop1 = student_name
    this.prop2 = course
    this.prop3 = lunch
    
    this.method1 = function(param1){
        console.log(param1)
    }
} 

const student_morning = new Student("Yash","COMP3123","Burger")
console.log(student_morning)
console.log(student_morning.prop1)
console.log(student_morning.prop2)
student_morning.method1(student_morning.prop3)


// Optional Instantiate another Studen Object and print its values

// Prototypes: Add a method AFTER/IN ANOTHER FILE to give more capabilities to the prototypes

Student.prototype.prop4 = "hard-coded value"
Student.prototype.method2 = function(param1){
    return param1
}

console.log(student_morning.prop4)
console.log(student_morning.method2("Chow mein"))

// Classes 

class Prof {
    constructor(prof_name_p){
        this.prof_name = prof_name_p
    }

    method1(param1){
        return param1
    }    
}

const morning_prof = new Prof("Laily")
console.log(morning_prof)

// Optional Call morning_profs method and directly next print its property




