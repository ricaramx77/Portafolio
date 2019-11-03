using DesignPatterns.n_Tier.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace DesignPatterns.n_Tier.Data
{
    public class DALEmpleado : DbContext, IDALEmpleado
    {
        DbSet<Empleado> dbSetEmpleado { get; set; }

        public Empleado ObtenerEmpleado(int ID)
        {
            return dbSetEmpleado.Find(ID);
        }

        public IEnumerable<Empleado> ObtenerEmpleado(Func<Empleado, bool> where)
        {
            var lista = new List<Empleado>();

            var task = new Empleado();
            task.ID = 1;
            task.Description = "Desarrollador";
            task.Name = "Bill Gates";

            lista.Add(task);

            return lista;           
        }
    }
}
