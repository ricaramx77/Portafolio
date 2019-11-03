using System.Collections.Generic;

namespace DesignPatterns.Adapter
{
    /// <summary>
    /// This is a class which implements the ITarget interface and inherits the Adaptee class. 
    /// It is responsible for communication between Client and Adaptee.
    /// </summary>
    public class EmployeeAdapter : HRSystem, ITarget
    {
        public List<string> GetEmployeeList()
        {
            List<string> employeeList = new List<string>();
            string[][] employees = GetEmployees();
            foreach (string[] employee in employees)
            {
                employeeList.Add(employee[0]);
                employeeList.Add(",");
                employeeList.Add(employee[1]);
                employeeList.Add(",");
                employeeList.Add(employee[2]);
                employeeList.Add("\n");
            }

            return employeeList;
        }
    }
}
