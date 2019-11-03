//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System.Web.UI.WebControls;
using System.Collections.Generic;
using System.Web;
using System;

public class ImageButtonControl
{ 
    public static void HabilitaDisponibilidadBotones(bool p_Habilita, params ImageButton[] botones)
    {
        for (int x = 0; x <= botones.Length - 1; x++)
        {
            botones[x].Enabled = p_Habilita;
        }//end for      
    } //void        

    public static void HabilitaVisibilidadBotones(bool p_Habilita, params ImageButton[] botones)
    {
        for (int x = 0; x <= botones.Length - 1; x++)
        {
            botones[x].Visible = p_Habilita;
        }//end for      
    } //void        


}//end class