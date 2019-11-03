namespace DesignPatterns.Decorator
{
    public class Whip : CondimentDecorator
    {
        private Beverage _beverage;
        public Whip(Beverage pBeverage)//<------------Inyecta la bebida
        {
            this._beverage = pBeverage;
        }

        public override string getFullDescription()
        {
            //Variable privada tipo clase, va por la descripcion de la clase base (Beverage) y 
            //aprovecha para agregar la descripcion de esta clase (Whip)
            return (_beverage.getFullDescription() + ", Whip");
        }

        public override double getTotalCost()
        {
            //Variable privada tipo clase, va por el costo de la clase base (Beverage) y 
            //aprovecha para agregar el costo de esta clase (Whip)
            return (_beverage.getTotalCost() + 0.1);
        }

    }

}
