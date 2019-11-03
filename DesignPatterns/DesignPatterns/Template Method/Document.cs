namespace DesignPatterns.Template_Method
{
    public abstract class Document
    {
        public abstract void Print();
        public abstract void PrintBody();
        public abstract void PrintHeader();
    }
}
