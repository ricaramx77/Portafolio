using System.Collections;

namespace ObserverTest
{
    abstract class ASubject
    {
        //This is the one way we can implement ir, lets call it WAY_1
        ArrayList list = new ArrayList();
        
        //This is another way we can implement observer, lets call it WAY_2
        public delegate void StatusUpdate(float price);
        public event StatusUpdate OnStatusUpdate = null;
        
        public void Suscribe(Shop product)
        {
            //For ArrayList lets assign attach the observers with subjects
            list.Add(product);
        }
        public void Unsuscribe(Shop product)
        {
            //For ArrayList lets assign detach the observers with subjects
            list.Remove(product);           
        }

        public void Suscribe2(Shop product)
        {
            //For event-delegate lets assign attach the observers with subjects
            OnStatusUpdate += new StatusUpdate(product.Update);
        }
        public void Unsuscribe2(Shop product)
        {
            //For event-delegate lets assign detach the observers with subjects
            OnStatusUpdate -= new StatusUpdate(product.Update);
        }

        public void Notify(float price)
        {
            //For ArrayList lets notify the observers with change
            foreach (Shop p in list)
            {
                p.Update(price);
            }

            //For vent-delegate lets notify the observers with change
            if (OnStatusUpdate != null)
            {
                OnStatusUpdate(price);
            }
        }
    }
}
