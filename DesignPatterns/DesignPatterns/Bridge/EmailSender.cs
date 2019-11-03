using System;

namespace DesignPatterns.Bridge
{
    /// <summary>
    /// The 'ConcreteImplementor' class
    /// These are classes which implement the Bridge interface and also provide the implementation details for the 
    /// associated Abstraction class.
    /// </summary>
    public class EmailSender : IMessageSender
    {
        public void SendMessage(string subject, string body)
        {
            Console.WriteLine("Email\n{0}\n{1}\n", subject, body);
        }
    }
}
