namespace DesignPatterns.Decorator
{
    public class DarkRoast : Beverage
    {
        public DarkRoast()
        {
            CoffeeDescription = "DarkRoast";
        }

        public override string getFullDescription()
        {
            return CoffeeDescription;
        }

        public override double getTotalCost()
        {
            return 0.99;
        }
    }
}
