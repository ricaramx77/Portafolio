using System;

namespace DesignPatterns.Command
{
    public class TV
    {
        public void TurnOn()
        {
            Console.WriteLine("The TV is on");
        }

        public void TurnOff()
        {
            Console.WriteLine("The TV is off");
        }
    }
}
