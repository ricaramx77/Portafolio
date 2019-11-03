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
	public class VicePresident : Approver
	{
		public override void ProcessRequest(Purchase purchase)
		{
			if (purchase.Amount < 25000.0)
			{
				Console.WriteLine("{0} aprobó la solicitud #{1}",
				  this.GetType().Name, purchase.Number);
			}
			else if (successor != null)
			{
				successor.ProcessRequest(purchase);
			}
		}
	}
}
