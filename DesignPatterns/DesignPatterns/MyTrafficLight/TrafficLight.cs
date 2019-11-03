using System;
using System.Timers;

namespace DesignPatterns.MyTrafficLight
{
    public class TrafficLight
    {
        public TrafficLightState currentState = null;

        public TrafficLight()
        {
            currentState = new GreenState(this);
        }        

        public void StartTrafficLight()
        {
            while (true) {

                var aTimer = new System.Timers.Timer(1000);
                aTimer.Elapsed += new ElapsedEventHandler(RunThis);
                aTimer.AutoReset = true;
                aTimer.Enabled = true;

                Console.WriteLine(currentState.GetNextState());
            }           
        }

        private static void RunThis(object source, ElapsedEventArgs e)
        {
            Console.WriteLine("Print this in every 10 seconds");
        }
    }
}
