class Parent{

    constructor(name, age){
        this.name = name;
        this.age = age;
        this.lastName = "Sanitarsky" // we don't mention it in parameters cause it's static
    }

    greeting(){
        console.log('Hi')
    }

    tellName(){
        console.log(`My name is ${this.name} ${this.lastName}`)
    }
    tellAge(){
        console.log(`I am ${this.age} years old`)
    }
    addJobTitle(jobTitle){
        this.jobTitle = jobTitle
    }

    tellJobTitle(){
        if(this instanceof Child){
            console.log(`I don't have a job!`)
        } else {
            console.log(`My job title is ${this.jobTitle}`) 
        }
    }
}

class Child extends Parent{
    constructor(name, age, text){
        super(name, age);
        this.text = text;
    }

    greeting(){
        console.log('Hey!')
    }   
    goToSchool(){
        console.log('I like to go to school!')
    }
}

const parent = new Parent('Dmytro', 29);
const child = new Child('Sofia', 5, 'qweqwe');

console.log(child)

//parent.jobTitle = "QA"

parent.addJobTitle('QA')
parent.greeting();
parent.tellName();
parent.tellAge();
parent.tellJobTitle();

//parent.goToSchool();
console.log('\n')

child.greeting();
child.tellName();
child.tellAge();
child.tellJobTitle();
child.goToSchool();