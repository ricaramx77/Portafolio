namespace DesignPatterns.Decorator
{
    public class Mocha : CondimentDecorator
    {
        private Beverage _beverage;
        public Mocha(Beverage pBeverage)//<------------Inyecta la bebida
        {
            this._beverage = pBeverage;
        }

        public override string getFullDescription()
        {
            //Variable privada tipo clase, va por la descripcion de la clase base (Beverage) y 
            //aprovecha para agregar la descripcion de esta clase (Mocha)
            return (_beverage.getFullDescription() + ", Mocha");
        }

        public override double getTotalCost()
        {
            //Variable privada tipo clase, va por el costo de la clase base (Beverage) y 
            //aprovecha para agregar el costo de esta clase (Mocha)
            return (_beverage.getTotalCost() + 0.2);
        }

    }

}
