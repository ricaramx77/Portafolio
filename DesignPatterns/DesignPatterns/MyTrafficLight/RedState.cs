using System;

namespace DesignPatterns.MyTrafficLight
{
    class RedState : TrafficLightState
    {
        // This constructor will create new state taking values from old state
        public RedState(TrafficLightState state)
            : this( state.TrafficLightProperty)
        {

        }      

        // this constructor will be used by the other one
        public RedState( TrafficLight trafficLightBeingUsed)
        {
            this.TrafficLightProperty = trafficLightBeingUsed;           
        }

        public override string GetNextState()
        {
            Console.WriteLine("Siguiente Estado");
            string userInput = Console.ReadLine();

            UpdateState();
            
            return "Red";
        }

        private void UpdateState()
        {
            TrafficLightProperty.currentState = new GreenState(this);
        }
    }
}
