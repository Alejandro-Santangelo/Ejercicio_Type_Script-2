class Documento {
    private numero: string;
  
    constructor(numero: string) {
      this.numero = numero;
    }
  
    imprimirNumero() {
      console.log(`El número del documento es ${this.numero}`);
    }
  }