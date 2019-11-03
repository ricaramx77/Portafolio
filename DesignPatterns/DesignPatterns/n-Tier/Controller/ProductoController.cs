using DesignPatterns.n_Tier.Business;
using DesignPatterns.n_Tier.Model;
using System;
using System.Collections.Generic;

namespace DesignPatterns.n_Tier.Controller
{
    public class ProductoController
    {
        private IBOProducto boProducto;

        public ProductoController(IBOProducto _boProducto)
        {
            boProducto = _boProducto;

            ObtenerProductos();//<---------Simula la invocación desde el front, realmente no va aquí
        }

        public List<Producto> ObtenerProductos()
        {
            List<Producto> producto = boProducto.ObtenerProductos();

            Console.WriteLine(producto[0].ID);
            Console.WriteLine(producto[0].Name);
            Console.WriteLine(producto[0].Description);

            return producto;
        }
    }
}
