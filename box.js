class Box{
    constructor(x,y,width,height){
        var option10={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option10)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    fill("red");
    rect(0,0,this.width,this.height)
    pop()
    }
}