namespace DesignPatterns.Decorator
{
    public class Espresso : Beverage
    {
        public Espresso()
        {
            //MyBase.New()
            CoffeeDescription = "Expresso";
        }

        public override string getFullDescription()
        {
            return CoffeeDescription;
        }

        public override double getTotalCost()
        {
            return 1.99;
        }
    }
}
