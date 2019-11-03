using DesignPatterns.n_Tier.Model;
using System;
using System.Collections.Generic;

namespace DesignPatterns.n_Tier.Data
{
    public interface IDALEmpleado
    {
        Empleado ObtenerEmpleado(int ID);
        IEnumerable<Empleado> ObtenerEmpleado(Func<Empleado, bool> where);
    }
}
