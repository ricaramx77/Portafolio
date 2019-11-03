//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System.Web.UI.WebControls;
using System.Collections.Generic;
using System.Web;
using System;

public class LinkButtonControl
{
    public static void LimpiaLinkButton(params LinkButton[] linkbutton)
    {
        for (int x = 0; x <= linkbutton.Length - 1; x++)
        {
            linkbutton[x].Text = string.Empty; ;
        }//end for      

    }//end void    

    public static void HabilitaVisibilidadLink(bool p_Habilita, params LinkButton[] botones)
    {
        for (int x = 0; x <= botones.Length - 1; x++)
        {
            botones[x].Visible = p_Habilita;
        }//end for      
    } //void

    public static void HabilitaDisponilbilidadLink(bool p_Habilita, params LinkButton[] botones)
    {
        for (int x = 0; x <= botones.Length - 1; x++)
        {
            botones[x].Enabled = p_Habilita;
        }//end for      
    } //void  

}//end class