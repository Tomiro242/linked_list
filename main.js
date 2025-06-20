class Node {
    constructor(data,next= null){
        this.data = data;
        this.next = next;
    }
};

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
        this.size++;
    };

    insertFirst (data){
        this.head = new Node(data, this.head)
    }

    printData (){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

    insertLast(data){
       let node = new Node(data);
       let current;

       //if empty make head
       if(!this.head){
        this.head = node;
       }else{
        current = this.head;

        while (current.next){
            current = current.next;
        }

        current.next = node;
       }
       this.size++
    }

    insertAt(data,index){
        if (index > 0 && index > this.size){
            return;
        } else if (index === 0){
            this.head = new Node (data, this.head);
            return;
        }else{
            const node = new Node(data);
            let current;
            let previous;

            current = this.head;
            let count = 0;

            while (count < index){
                previous = current;
                count++;
                current = current.next;
            }

            node.next = current;
            previous.next = node;
            this.size++;
        }
    };

    getAt (index){
        let current = this.head;
        let count = 0;

        while (current){
            if (count === index){
                console.log(current.data)
            }

            count++;
            current = current.next;
        }
    }

    removeAt (index){
       if (index > 0 && index > this.size){
        return;
       }else{
        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0){
            this.head = current.next;
        }else {
            while (count < index){
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
       }
    }

    clearList (){
        this.head = null;
        this.size = 0;
    }
}


const ll = new LinkedList();

ll.insertFirst(455);
ll.insertFirst(112);
ll.insertFirst(641);
ll.insertLast(35);
ll.insertAt(2,1);
//ll.removeAt(0);
//ll.clearList();

ll.printData();


//ll.getAt(3);

