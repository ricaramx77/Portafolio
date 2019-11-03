using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Telerik.Web.UI;

public class RadButtonControl
{
    public static void HabilitaVisibilidadBotones(bool p_Habilita, params RadButton[] botones)
    {
        for (int x = 0; x <= botones.Length - 1; x++)
        {
            botones[x].Visible = p_Habilita;
        }//end for    
  
    } //void
}

