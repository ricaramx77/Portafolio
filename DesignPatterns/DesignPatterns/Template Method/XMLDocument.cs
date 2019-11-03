using System;

namespace DesignPatterns.Template_Method
{
    public class XMLDocument : Document
    {
        public override void Print()
        {
            Console.WriteLine("Print XML Document");
        }

        public override void PrintBody()
        {
            Console.WriteLine("Print XML Body");
        }

        public override void PrintHeader()
        {
            Console.WriteLine("Print xml Header");
        }
    }
}
