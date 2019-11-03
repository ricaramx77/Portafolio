using DesignPatterns.n_Tier.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;

namespace DesignPatterns.n_Tier.Data
{
    public class DALProducto : DbContext, IDALProducto
    {
        DbSet<Producto> dbSetProducto { get; set; }

        public Producto ObtenerProducto(int ID)
        {
            return dbSetProducto.Find(ID);
        }

        public IEnumerable<Producto> ObtenerProducto(Func<Producto, bool> where)
        {
            var lista = new List<Producto>();

            var task = new Producto();
            task.ID = 1;
            task.Description = "Android";
            task.Name = "CellPhone";

            lista.Add(task);

            return lista;
        }
    }
}
