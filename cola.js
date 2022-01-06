class Nodo {
    constructor (dato) {
        this.dato = dato;
        this.siguiente;
    }
}

class Cola {
    constructor () {
        this.primero = null;
        this.ultimo = null;
    }

    enqueue (dato) {
        let nuevoNodo = new Nodo(dato);

        if (this.primero == null) {
            this.primero = nuevoNodo;
            this.ultimo = nuevoNodo;
        } else {
            this.ultimo.siguiente = nuevoNodo;
            this.ultimo = nuevoNodo;
        }
    }

    dequeue () {
        this.primero = this.primero.siguiente;
    }

    imprimir () {
        let nodoAuxiliar = this.primero;
        while (this.ultimo != nodoAuxiliar) {
            console.log(nodoAuxiliar.dato);
            nodoAuxiliar = nodoAuxiliar.siguiente;
        }
        console.log(this.ultimo.dato);
    }

}

let cola = new Cola();
cola.enqueue(1);
cola.enqueue(2);
cola.enqueue(3);

cola.imprimir();
cola.dequeue();

cola.imprimir();