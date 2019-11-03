namespace DesignPatterns.MyTrafficLight
{
    class GreenState : TrafficLightState
    {
        // This constructor will create new state taking values from old state       
        public GreenState(TrafficLightState state)
          : this(state.TrafficLightProperty)
        {
        }

        public GreenState(TrafficLight trafficLightBeingUsed)
        {
            this.TrafficLightProperty = trafficLightBeingUsed;           
        }        

        public override string GetNextState()
        {            
            UpdateState();
            
            return "Green";
        }

        private void UpdateState()
        {           
            TrafficLightProperty.currentState = new YellowState(this);
        }
        
    }
}
