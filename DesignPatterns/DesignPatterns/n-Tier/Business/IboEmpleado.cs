using DesignPatterns.n_Tier.Model;
using System.Collections.Generic;

namespace DesignPatterns.n_Tier.Business
{
    public interface IBOEmpleado
    {
        List<Empleado> ObtenerEmpleados();
    }    
}
