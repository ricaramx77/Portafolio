namespace ObserverTest
{
    class Product : ASubject
    {
        public void ChangePrice(float price)
        {
            Notify(price);
        }
    }
}
