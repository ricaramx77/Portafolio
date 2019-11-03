namespace DesignPatterns.Decorator
{
    public class HouseBlend : Beverage
    {
        public HouseBlend()
        {
            CoffeeDescription = "HouseBlend";
        }

        public override string getFullDescription()
        {
            return CoffeeDescription;
        }

        public override double getTotalCost()
        {
            return 0.89;
        }
    }
}
