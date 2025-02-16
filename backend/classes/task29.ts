export const task29 = () => {
    type nameType = {
        name:string;
    }

    type SurnameType = {
        surname: string;
    }

    type completeNameType = {
        completeName: () => string
    }

    class Person implements nameType, SurnameType, completeNameType {
        constructor(public name: string, public surname: string){}
        completeName(): string{
            return this.name + ' ' + this.surname
        }
    }

    const person = new Person('Pablo', 'Escobar');
    console.log(person.completeName())
}