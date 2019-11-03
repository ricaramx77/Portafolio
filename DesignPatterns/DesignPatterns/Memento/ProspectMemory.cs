using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Memento
{
	/// <summary>
	/// The 'Caretaker' class
	/// </summary>
	class ProspectMemory
	{
		private Memento _memento;

		// Property
		public Memento Memento
		{
			set { _memento = value; }
			get { return _memento; }
		}
	}
}
