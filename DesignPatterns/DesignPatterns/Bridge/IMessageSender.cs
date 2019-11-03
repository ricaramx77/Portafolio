namespace DesignPatterns.Bridge
{
    /// <summary>
    /// The 'Bridge/Implementor' interface
    /// This is an interface which acts as a bridge between the abstraction class and implementer classes and 
    /// also makes the functionality of implementer class independent from the abstraction class.
    /// </summary>
    public interface IMessageSender
    {
        void SendMessage(string subject, string body);
    }
}
