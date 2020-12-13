class chain
{
    constructor(BodyA,BodyB)
    {
         var properties={
             bodyA:BodyA,
             pointB:BodyB,
             stiffness:1,
             length:450
            }
         this.cha=constraint.create(properties);

         World.add(world,this.cha);
    }
    display()
    {
        var pointA = this.cha.bodyA.position;
        var pointB = this.cha.pointB;

        stroke ("white");
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}