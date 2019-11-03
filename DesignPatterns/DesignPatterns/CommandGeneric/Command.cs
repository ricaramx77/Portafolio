using DesignPatterns.Command;
using System;

namespace DesignPatterns.CommandGeneric
{
    public class Command<T> : ICommand
    {
        private T target;
        private Action<T> command;

        public Command(T target, Action<T> command) //<-----The Action<T> command is a variable that will hold a lambda expression that doesn't return a value
        {
            this.target = target;
            this.command = command;
        }

        public void Execute()
        {
            command(target); //<------TurnOn() or TurnOff, dependiendo la expresión lambda
        }
    }
}
