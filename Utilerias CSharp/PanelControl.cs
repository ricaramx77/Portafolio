//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System.Web.UI.WebControls;
using System.Collections.Generic;
using System.Web;
using System;

public class PanelControl
{
    public static void HabilitaVisibilidadPanel(bool p_Habilita, params System.Web.UI.WebControls.Panel [] panel)
    {
        for (int x = 0; x <= panel.Length - 1; x++)
        {
            panel[x].Visible = p_Habilita;
        }//end for      
    } //void   

    public static void HabilitaDisponibilidadPanel(bool p_Habilita, params System.Web.UI.WebControls.Panel[] panel)
    {
        for (int x = 0; x <= panel.Length - 1; x++)
        {
            panel[x].Enabled = p_Habilita;
        }//end for      
    } //void    

}//end class