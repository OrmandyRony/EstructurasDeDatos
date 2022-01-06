class Nodo {
    constructor (dato) {
        this.dato = dato;
        this.anterior = null;
    }
}

class Pila {
    constructor () {
        this.ultimo = null;
        this.primero = null;
    }

    push (dato) {
        let nuevoNodo = new Nodo(dato);

        if (this.ultimo === null) {
            this.primero = nuevoNodo;
            this.ultimo = nuevoNodo; 
        } else {
            console.log("Entro")
            let nodoAuxiliar = this.primero;
            nuevoNodo.anterior = nodoAuxiliar;
            this.primero = nuevoNodo;
        }
        
    }

    imprimir () {
        if (this.stackEmpty()) {
            let nodoAuxiliar = this.primero;
      
            while (this.ultimo != nodoAuxiliar) {
                console.log(nodoAuxiliar.dato);
                nodoAuxiliar = nodoAuxiliar.anterior;
            }
            console.log(this.ultimo.dato);
        } else {
            console.log("La pila esta vacia");   
        }
    }

    pop () {
        if (this.stackEmpty()) {
            console.log(this.primero.dato);
            this.primero = this.primero.anterior;
        } else {
            console.log("La lista esta vacia");
        }
        
    }

    stackEmpty () {
        if (this.primero === null) {
            return false;
        } else {
            return true;
        }
    }

    generarDot () {
        let cadena = "digraph Pila { node [shape = box];\n";
        let cadena2 = "";
        if (this.stackEmpty()) {
            let nodoAuxiliar = this.primero;
      
            while (this.ultimo != nodoAuxiliar) {
                cadena += "\n" + nodoAuxiliar.dato + ";";
                cadena2 += "\n" + nodoAuxiliar.dato + "->" + nodoAuxiliar.anterior.dato + ";\n";
                nodoAuxiliar = nodoAuxiliar.anterior;
            }
            cadena += "\n" + this.ultimo.dato + ";";  
            cadena = cadena + cadena2 + "}";
            console.log(cadena);

        } else {
            console.log("La pila esta vacia");   
        }
    }
}