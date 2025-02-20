// module.ts

export namespace MyNamespace {
  export const namespaceName = 'Bruce';

  export class NamespacePerson {
    constructor(public name: string) {}
  }

  export namespace anotherNamespace {
    export const namespaceName = 'Another namespace name';
  }
}

export const nameSpaceConst = 'namespace const value';
