namespace DesignPatterns.Bridge
{
    /// <summary>
    /// The 'RefinedAbstraction' class
    /// This is a class which inherits from the Abstraction class. It extends the interface defined by Abstraction class.
    /// </summary>
    public class UserMessage : Message
    {
        public string UserComments { get; set; }

        public override void Send()
        {
            string fullBody = string.Format("{0}\nUser Comments: {1}", Body, UserComments);
            MessageSender.SendMessage(Subject, fullBody);
        }
    }
}
