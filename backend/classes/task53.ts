// Quando o decorator é aplicado numa classe ele é executado imediatamente antes mesmo de qualquer instancia da mesma
// Eles servem para reutilizar código
// Se um decorator retornar uma classe essa classe substitui a q chama o decorator
// Em outros casos o retorno do decorator é irrelevante
// O super é obrigatório ao estender classes que possuem construtor
// O super tbm é usado para chamar métodos da classe pai
// A classe pai inicia os atributos no construtor

export const task53 = () => {
  type Constructor = new (...args: any[]) => any;

  function classDecorator(constructor: Constructor): any {
    // Chamada na criação da classe
    console.log('CLASS');
    console.log(constructor);
    console.log('###');

    // Return can be hidden
    return class extends constructor {};
  }

  function methodDecorator(
    classPrototype: any,
    methodName: string,
    propertyDescription: PropertyDescriptor
  ): any {
    // Called on creation, don't need call the method
    console.log('NORMAL METHOD');
    console.log(classPrototype);
    console.log(methodName);
    console.log(propertyDescription);
    console.log('###');

    // Return can be hidden
    return {
      // value changes the original return
      // value: (...args: any[]) => console.log(args),
      writable: true,
      enumerable: true,
      configurable: true,
    };
  }

  //static methods
  function staticMethodDecorator(
    classConstructor: Constructor,
    methodName: string,
    propertyDescription: PropertyDescriptor
  ): any {
    // Called on creation, don't need call the method
    console.log('STATIC METHOD');
    console.log(classConstructor);
    console.log(methodName);
    console.log(propertyDescription);
    console.log('###');

    // Return can be hidden
    return {
      // Use get/set OR hidden
      enumerable: true,
      configurable: true,
    };
  }

  function methodParamDecorator(
    classPrototype: any,
    methodName: string,
    propertyIndex: number
  ): any {
    console.log("METHOD's PARAMETER");
    console.log(classPrototype);
    console.log(methodName);
    console.log(propertyIndex);
    console.log('###');
  }

  function staticMethodParameterDecorator(
    constructorClass: Constructor,

    methodName: string,
    propertyIndex: number
  ): any {
    console.log('STATIC METHOD PARAMETER');
    console.log(constructorClass);
    console.log(methodName);
    console.log(propertyIndex);
    console.log('###');
  }

  function propertyDecorator(classPrototype: any, propertyName: string): any {
    console.log('PROPERTY DECRATOR');
    console.log(classPrototype);
    console.log(propertyName);
    console.log('###');

    // Use get and set to manipulate the property value
    let propertyValue: any;
    return {
      enumerable: true,
      configurable: true,
      get: () => propertyValue,
      set: (value: any) => {
        if (typeof value === 'string') {
          propertyValue = value.split('').reverse().join('');
          // Esse return só serve para impedir q o código continue executando
          return;
        }
        classPrototype;
        propertyValue = value;
      },
    };
  }

  //Static property
  function staticPropertyDecorator(
    classConstructor: any,
    propertyName: string
  ): any {
    console.log('STATIC PROPERTY DECORATOR');
    console.log(classConstructor);
    console.log(propertyName);
    console.log('###');

    return {
      enumerable: true,
      configurable: true,
    };
  }

  //Getter && Setter
  function normalGetterAndSetterDecorator(
    classPrototype: any,
    propertyName: string,
    propertyDescription: PropertyDescriptor
  ): any {
    // (Só pode ser aplicado no getter OUU no setter, não em ambos)
    console.log('GETTER/SETTER normal');
    console.log(classPrototype);
    console.log(propertyName);
    console.log(propertyDescription);
    console.log('###');

    return {
      // Use get/set OU value
      enumerable: true,
      configurable: true,
    };
  }

  //Static Getter and Setter
  function staticGetterAndSetterDecorator(
    classConstructor: Constructor,
    propertyName: string,
    propertyDescription: PropertyDescriptor
  ): any {
    // (Só pode ser aplicado no getter OUU no setter, não em ambos)
    console.log('GETTER/SETTER static');
    console.log(classConstructor);
    console.log(propertyName);
    console.log(propertyDescription);
    console.log('###');

    return {
      // Use get/set OU value
      enumerable: true,
      configurable: true,
    };
  }

  // The class and the use of the decorators

  @classDecorator
  class Person {
    @propertyDecorator
    name: string;
    surname: string;
    age: number;

    @staticPropertyDecorator
    static staticProperty = 'STATIC PROPERTY VALUE';

    constructor(name: string, surname: string, age: number) {
      this.name = name;
      this.surname = surname;
      this.age = age;
    }

    @methodDecorator
    method(@methodParamDecorator msg: string): string {
      return `${this.name} ${this.surname}: ${msg}`;
    }

    @staticMethodDecorator
    static staticMethod(@staticMethodParameterDecorator msg: string): string {
      return Person.staticProperty + ' - ' + msg;
    }

    get completeName(): string {
      return this.name + ' ' + this.surname;
    }

    @normalGetterAndSetterDecorator
    set completeName(value: string) {
      const words = value.split(/\s+/g);
      const firstName = words.shift();
      if (!firstName) return;
      this.name = firstName;
      this.surname = words.join(' ');
    }

    @staticGetterAndSetterDecorator
    static get staticPropertyGetterAndSeter(): string {
      return Person.staticProperty;
    }

    static set staticPropertyGetterAndSetter(value: string) {
      Person.staticProperty = value;
    }
  }

  const person = new Person('Logan', 'Roy', 70);
  person.completeName = 'John Rockfeller';
  const method = person.method('Hello world!');
  const staticMethod = Person.staticMethod('Hey buddy!');

  console.log(person);
  console.log(method);
  console.log(staticMethod);
  console.log(Person.staticProperty);
};
