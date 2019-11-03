namespace DesignPatterns.Command
{
    /// <summary>
    /// The Command for turning off the light - ConcreteCommand #2 
    /// </summary>
    public class LightOnCommand : ICommand
    {
        private Light _light;

        public LightOnCommand(Light light)
        {
            _light = light;
        }

        public void Execute()
        {
            _light.TurnOn();
        }
    }
}
