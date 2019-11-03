namespace DesignPatterns.MyTrafficLight
{
    public abstract class TrafficLightState
    {
        private TrafficLight trafficLight;

        public TrafficLight TrafficLightProperty
        {
            get { return trafficLight; }
            set { trafficLight = value; }
        }       

        public abstract string GetNextState();
    }
}
