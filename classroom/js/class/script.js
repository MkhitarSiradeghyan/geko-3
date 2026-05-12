class Shape {
    constructor(name){
        this.name = name
    }
}

class Qarakusi extends Shape {
    constructor(name, width){
        super(name)
        this.width = width
        this.height = width
    }
    makeres(){
        return `Qarakusu makeresn e ${this.width * this.height}`
    }
}

const q = new Qarakusi("qarakusi", 12)


console.log(q.makeres())