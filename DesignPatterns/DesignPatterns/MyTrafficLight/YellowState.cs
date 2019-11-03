using System;

namespace DesignPatterns.MyTrafficLight
{
    class YellowState : TrafficLightState
    {
        // This constructor will create new state taking values from old state
        public YellowState(TrafficLightState state)
            : this(state.TrafficLightProperty)
        {

        }

        // this constructor will be used by the other one
        public YellowState(TrafficLight trafficLightBeingUsed)
        {
            this.TrafficLightProperty = trafficLightBeingUsed;            
        }

        public override string GetNextState()
        {
            Console.WriteLine("Siguiente Estado");
            string userInput = Console.ReadLine();

            UpdateState();
            
            return "Yellow";
        }

        private void UpdateState()
        {            
            TrafficLightProperty.currentState = new RedState(this);
        }
    }
}
