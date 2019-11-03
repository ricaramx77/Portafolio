using System;

namespace DesignPatterns.n_Tier.Model
{
    public class Empleado
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
    }
}
