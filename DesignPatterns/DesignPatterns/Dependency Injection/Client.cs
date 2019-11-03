using System;

namespace DesignPatterns.Dependency_Injection
{
    public class Client
    {
        //private Service _service;

        //public Client()
        //{
        //    this._service = new Service();
        //}

        private IService _service;

        public Client(IService service)
        {
            this._service = service;
        }

        public void Start()
        {
            Console.WriteLine("Service Started");
            this._service.Serve();
        }
    }
}
