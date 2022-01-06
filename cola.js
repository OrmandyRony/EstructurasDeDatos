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
        if (this.queueEmpty()) {
            this.primero = this.primero.siguiente;
        } else {
            console.log("La cola esta vacia");
        }
       
    }

    imprimir () {
        if (this.queueEmpty()) {
            let nodoAuxiliar = this.primero;
            while (this.ultimo != nodoAuxiliar) {
                console.log(nodoAuxiliar.dato);
                nodoAuxiliar = nodoAuxiliar.siguiente;
            }
            console.log(this.ultimo.dato);
        } else {
            console.log("La cola esta vacia");
        }
       
    }

    generarDot () {
        let cadena = "digraph Cola { node [shape = box];\n";
        let cadena2 = "";

        let nodoAuxiliar = this.primero;
        while (this.ultimo != nodoAuxiliar) {
            cadena += nodoAuxiliar.dato + ";\n";
            cadena2 += nodoAuxiliar.dato + "->" + nodoAuxiliar.siguiente.dato + ";\n";
            nodoAuxiliar = nodoAuxiliar.siguiente;

        }
        cadena += this.ultimo.dato + ";\n";
        cadena = cadena + cadena2 + "}";
        console.log(cadena);
    
    }

    queueEmpty () {
        if (this.primero == null) {
            return false;
        } else {
            return true;
        }
    }
}

let cola = new Cola();
cola.enqueue(1);
cola.enqueue(2);
cola.enqueue(3);
cola.generarDot();
cola.imprimir();
cola.dequeue();

cola.imprimir();