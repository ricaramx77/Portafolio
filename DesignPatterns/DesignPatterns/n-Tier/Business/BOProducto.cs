using DesignPatterns.n_Tier.Data;
using DesignPatterns.n_Tier.Model;
using System.Collections.Generic;
using System.Linq;

namespace DesignPatterns.n_Tier.Business
{
    public class BOProducto: IBOProducto
    {
        private IDALProducto repo;

        public BOProducto(IDALProducto repository)
        {
            repo = repository;
        }

        public List<Producto> ObtenerProductos()
        {
            return repo.ObtenerProducto(x => x.Name == "CellPhone").ToList();
        }
    }
}
