export const task36 = () => {
  // Builder GoF
  /*O Builder Pattern é como montar algo personalizado 
  (hambúrguer ou requisição) com várias opções. 
  Ele organiza o processo em etapas simples 
  e permite personalizar cada passo antes de finalizar.*/

  class RequestBuilder {
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;

    setMethod(method: 'get' | 'post'): this {
      this.method = method;
      return this;
    }

    setUrl(url: string): this {
      this.url = url;
      return this;
    }

    send(): void {
      console.log(`Enviando dados via ${this.method} para ${this.url}`);
    }
  }

  const request = new RequestBuilder();
  request.setUrl('http://www.google.com').setMethod('post').send();
};
