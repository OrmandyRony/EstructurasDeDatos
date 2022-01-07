class Node {
    constructor(key) {
        this.next = null;
        this.prev = null;
        this.key = key;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    insert(key) {
        let newNode = new Node(key);

        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    search(key) {
        let tmp = this.head;

        while (tmp != null) {
            if (tmp.key == key) {
              return tmp;  
            }
            tmp = tmp.next; 
        }

        return null;
    }

    delet(key) {
        let tmp = this.search(key);
        if (tmp != null) {
            if (tmp == this.head) {
                this.head = tmp.next;
                tmp = null;
            } else if (tmp.next == null) {
                tmp.prev.next = null;
                tmp = null;
            } else {
                tmp.prev.next = tmp.next;
                tmp.next.prev = tmp.prev;
                tmp = null;
            }
        } else {
            console.log("La llave no existe");
        }
        

    }

    print() {
        let tmp = this.head;

        while (tmp != null) {
            console.log(tmp.key);
            tmp = tmp.next;
        }
    }

    plotDot() {
        let tmp = this.head;
        let cadena = "digraph ListaDoble { node[shape = box];\n";
        let cadena2 = "";
        while (tmp != null) {
            cadena += tmp.key + ";\n";
            if (tmp.next != null) {
                cadena2 += tmp.key + "->" + tmp.next.key + ";\n";
            } 
            
            tmp = tmp.next;
        }
        cadena = cadena + cadena2 + "}";
        console.log(cadena);
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insert(1);
doublyLinkedList.insert(4);
doublyLinkedList.insert(16);
doublyLinkedList.insert(9);
doublyLinkedList.insert(25);
doublyLinkedList.print();
doublyLinkedList.plotDot();
console.log("Eliminacion 25");
doublyLinkedList.delet(25);
doublyLinkedList.print();
console.log("Eliminacion 16");
doublyLinkedList.delet(16);
doublyLinkedList.print();
console.log("Eliminacion 1");
doublyLinkedList.delet(1);
doublyLinkedList.print();