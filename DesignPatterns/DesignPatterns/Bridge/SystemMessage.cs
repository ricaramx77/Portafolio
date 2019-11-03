namespace DesignPatterns.Bridge
{
    /// <summary>
    /// The 'RefinedAbstraction' class
    /// This is a class which inherits from the Abstraction class. It extends the interface defined by Abstraction class.
    /// </summary>
    public class SystemMessage : Message
    {
        public override void Send()
        {
            MessageSender.SendMessage(Subject, Body);
        }
    }
}
