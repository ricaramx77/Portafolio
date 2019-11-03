using System;
using System.Collections.Generic;

namespace DesignPatterns.Adapter
{
    /// <summary>
    /// This is a class which interact with a type that implements the ITarget interface. 
    /// However, the communication class called adaptee, is not compatible with the client
    /// </summary>
    public class ThirdPartyBillingSystem
    {
        private ITarget employeeSource;

        public ThirdPartyBillingSystem(ITarget employeeSource)
        {
            this.employeeSource = employeeSource;
        }

        public void ShowEmployeeList()
        {
            List<string> employee = employeeSource.GetEmployeeList();
            //To DO: Implement you business logic

            Console.WriteLine("######### Employee List ##########");
            foreach (var item in employee)
            {
                Console.Write(item);
            }
        }
    }
}
