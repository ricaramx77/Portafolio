using System;

namespace DesignPatterns.Template_Method
{
    public class HTMLDocument: Document
    {
        public override void Print()
        {
            Console.WriteLine("Print HTML document");
        }

        public override void PrintBody()
        {
            Console.WriteLine("Print HTML Body");
        }

        public override void PrintHeader()
        {
            Console.WriteLine("Print HTML Header");
        }
    }
}
