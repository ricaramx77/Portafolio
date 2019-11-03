using DesignPatterns.n_Tier.Business;
using DesignPatterns.n_Tier.Controller;
using DesignPatterns.n_Tier.Data;
using Unity;

namespace DesignPatterns.n_Tier.CompositioRoot
{
    public class CompositioRoot
    {
        //public void Inicializar()
        //{
        //    //Poor DI 
        //    new NominaController(new BOEmpleado(new DALEmpleado()));
        //    new ProductoController(new BOProducto(new DALProducto()));
        //}

        public void InicializarUnity()
        {
            var container = new UnityContainer();

            //Register DAL
            container.RegisterType<IDALEmpleado, DALEmpleado>();
            container.RegisterType<IDALProducto, DALProducto>();

            //Register Business
            container.RegisterType<IBOEmpleado, BOEmpleado>();
            container.RegisterType<IBOProducto, BOProducto>();

            //Resolve
            container.Resolve<NominaController>();
            container.Resolve<ProductoController>();
        }
    }
}
