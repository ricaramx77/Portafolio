namespace DesignPatterns.Decorator
{
    public abstract class Beverage
    {
        public string CoffeeDescription = "I dont know what coffee will be asked";
        public abstract string getFullDescription();
        public abstract double getTotalCost();

    }
}
