using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.ChainOfResponsability
{
	/// <summary>
	/// The 'ConcreteHandler' class
	/// </summary>
	public class President : Approver
	{
		public override void ProcessRequest(Purchase purchase)
		{
			if (purchase.Amount < 100000.0)
			{
				Console.WriteLine("{0} aprobó la solicitud #{1}",
				  this.GetType().Name, purchase.Number);
			}
			else
			{
				Console.WriteLine(
				  "La solicitud# {0} requiere una junta!",
				  purchase.Number);
			}
		}
	}
}
