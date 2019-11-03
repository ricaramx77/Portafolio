
using DesignPatterns.n_Tier.Business;
using DesignPatterns.n_Tier.Model;
using System;
using System.Collections.Generic;

namespace DesignPatterns.n_Tier.Controller
{
    public class NominaController
    {
        private IBOEmpleado boEmpleado;
        public NominaController(IBOEmpleado _boEmpleado)
        {
            boEmpleado = _boEmpleado;

            ObtenerEmpleados(); //<---------Simula la invocación desde el front, realmente no va aquí
        }

        public List<Empleado> ObtenerEmpleados()
        {
            List<Empleado> empleados = boEmpleado.ObtenerEmpleados();

            Console.WriteLine(empleados[0].ID);
            Console.WriteLine(empleados[0].Name);
            Console.WriteLine(empleados[0].Description);

            return empleados;
        }
    }
}
