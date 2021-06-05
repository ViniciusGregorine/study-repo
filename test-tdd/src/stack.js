class Stack{
    constructor(){
        this.top = -1
        this.items = {}

    }

    get peek(){
        return this.items[this.top]
    }

     pop(){
        delete this.items[this.top]
        this.top -= 1;
    }

    push(value){
        this.top += 1;
        this.items[this.top] = value       
    }
}

module.exports = Stack