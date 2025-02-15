export const task27 = () => {
  class BuyCart {
    private readonly products: Product[] = [];

    public insertProduct(...products: Product[]): void {
      for (const product of products) {
        this.products.push(product);
      }
    }

    productCount(): number {
      /*
      let i: number = 0;
      this.products.forEach((product) => {
        i++;
      });
      return i;
      */

      return this.products.length;
    }
    totalValue(): number {
      /*
      let price: number = 0;
      this.products.forEach((product) => {
        price += product.price;
      });

      return price;
      */
      return this.products.reduce((sum, product) => sum + product.price, 0);
      // O Reduce é uma função que reduz todos os elementos do array a um só valor
      // Ele recebe 2 parâmetros, o acumulador e o item do array, após o retorno ele pede o valor inicial do acumulador
    }
  }

  class Product {
    constructor(public name: string, public price: number) {}
  }

  const product1 = new Product('T-shirt', 43.54);
  const product2 = new Product('Pants', 65.23);
  const product3 = new Product('Book', 119.99);
  const product4 = new Product('Pen', 1.24);

  const buyCart = new BuyCart();
  buyCart.insertProduct(product1, product2, product3, product4);
  console.log(buyCart.totalValue());
  console.log(buyCart.productCount());
};
