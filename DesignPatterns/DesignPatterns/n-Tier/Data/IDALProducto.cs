using DesignPatterns.n_Tier.Model;
using System;
using System.Collections.Generic;

namespace DesignPatterns.n_Tier.Data
{
    public interface IDALProducto
    {
        Producto ObtenerProducto(int ID);
        IEnumerable<Producto> ObtenerProducto(Func<Producto, bool> where);
    }
}
