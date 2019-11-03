namespace DesignPatterns.Command
{
    /// <summary>
    /// The 'Invoker' class
    /// </summary>
    public class SimpleRemoteControl
    {
        private ICommand slot;

        public void SetCommand(ICommand command)
        {
            slot = command;
        }

        public void ButtonWasPressed()
        {
            slot.Execute();
        }
    }
}
