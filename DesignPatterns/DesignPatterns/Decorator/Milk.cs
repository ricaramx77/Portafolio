namespace DesignPatterns.Decorator
{
    public class Milk : CondimentDecorator
    {
        private Beverage _beverage;
        public Milk(Beverage pBeverage)//<------------Inyecta la bebida
        {
            this._beverage = pBeverage;
        }

        public override string getFullDescription()
        {
            //Variable privada tipo clase, va por la descripcion de la clase base (Beverage) y 
            //aprovecha para agregar la descripcion de esta clase (Milk)
            return (_beverage.getFullDescription() + ", Milk");
        }

        public override double getTotalCost()
        {
            //Variable privada tipo clase, va por el costo de la clase base (Beverage) y 
            //aprovecha para agregar el costo de esta clase (Milk)
            return (_beverage.getTotalCost() + 0.1);
        }

    }

}
