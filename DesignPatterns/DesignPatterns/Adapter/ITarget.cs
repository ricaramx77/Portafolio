using System.Collections.Generic;

namespace DesignPatterns.Adapter
{
    /// <summary>
    /// This is an interface which is used by the client to achieve its functionality/request.
    /// </summary>
    public interface ITarget
    {
        List<string> GetEmployeeList();
    }
}
