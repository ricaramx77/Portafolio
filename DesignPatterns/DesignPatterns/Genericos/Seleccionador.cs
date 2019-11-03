using System;

namespace DesignPatterns.Genericos
{
    public class Seleccionador<T> where T : IComparable // !Sólo permitimos comparables!
    {
        public T Mayor(T x, T y)
        {           
            int result = ((IComparable)x).CompareTo(y);
            if (result > 0)
                return x;
            else
                return y;
        }
    }      
}
