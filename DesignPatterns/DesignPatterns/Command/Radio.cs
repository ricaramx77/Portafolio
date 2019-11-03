using System;

namespace DesignPatterns.Command
{
    public class Radio
    {
        public void TurnOn()
        {
            Console.WriteLine("The radio is on");
        }

        public void TurnOff()
        {
            Console.WriteLine("The radio is off");
        }
    }
}
