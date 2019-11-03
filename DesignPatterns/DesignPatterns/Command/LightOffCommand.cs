namespace DesignPatterns.Command
{
    /// <summary>
    /// The Command for turning off the light - ConcreteCommand #1 
    /// </summary>
    public class LightOffCommand : ICommand
    {
        private Light _light;

        public LightOffCommand(Light light)
        {
            _light = light;
        }

        public void Execute()
        {
            _light.TurnOff();
        }
    }
}
