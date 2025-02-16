export const task30 = () => {
    interface NameType{
        name: string
    }

    interface SurnameType{
        surname : string;
    }

    interface CompleteNameType{
        completeName(): string
    }

    type PersonType = NameType & SurnameType & CompleteNameType;
    interface PersonType2 extends NameType, SurnameType, CompleteNameType{}
    class Person implements PersonType2 {
        constructor(public name: string, public surname: string){}

        completeName(): string {
            return this.name + ' ' + this.surname
        }
    }

    const personObj: PersonType2 = {
        completeName(){
            return this.name + ' ' + this.surname
        },
        name: 'Pavlo',
        surname: 'Escolar'
    }

    const person = new Person('Mia', 'Khamikaze')
    console.log(person.completeName())
    console.log(personObj.completeName())


}