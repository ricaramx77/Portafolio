namespace DesignPatterns.Decorator
{
    public class Decaf : Beverage
    {
        public Decaf()
        {
            CoffeeDescription = "Decaf";
        }

        public override string getFullDescription()
        {
            return CoffeeDescription;
        }

        public override double getTotalCost()
        {
            return 1.05;
        }
    }
}
