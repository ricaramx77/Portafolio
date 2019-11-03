namespace DesignPatterns.Decorator
{
    public class Soy : CondimentDecorator
    {

        //Private _beverage As Beverage

        private Beverage _beverage;
        public Soy(Beverage pBeverage)//<------------Inyecta la bebida
        {
            //  MyBase.New()
            this._beverage = pBeverage;
        }

        public override string getFullDescription()
        {
            //Variable privada tipo clase, va por la descripcion de la clase base (Beverage) y 
            //aprovecha para agregar la descripcion de esta clase (Soy)
            return (_beverage.getFullDescription() + ", Soy");
        }

        public override double getTotalCost()
        {
            //Variable privada tipo clase, va por el costo de la clase base (Beverage) y 
            //aprovecha para agregar el costo de esta clase (Soy)
            return (_beverage.getTotalCost() + 0.15);
        }
    }
}
