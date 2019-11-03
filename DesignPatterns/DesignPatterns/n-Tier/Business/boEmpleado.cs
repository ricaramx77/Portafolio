using DesignPatterns.n_Tier.Data;
using DesignPatterns.n_Tier.Model;
using System.Collections.Generic;
using System.Linq;

namespace DesignPatterns.n_Tier.Business
{
    public class BOEmpleado : IBOEmpleado
    {
        private IDALEmpleado repo;

        public BOEmpleado(IDALEmpleado repository)
        {
            repo = repository;
        }

        public List<Empleado> ObtenerEmpleados()
        {                        
            return repo.ObtenerEmpleado(x => x.Name == "Bill Gates").ToList();
        }
    }
}
