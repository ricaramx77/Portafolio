//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System.Web.UI.WebControls;
using EntitiesFC;
using System.Collections.Generic;
using System.Web;
using System;

public class DeptoCode
{    
    public static bool VerificaDeptoUsuario(String p_Depto)
    {
        UsuarioFC objUsrFC = (UsuarioFC)System.Web.HttpContext.Current.Session["objUsrFC"]; ;
        if ((objUsrFC.DptoOrganizacion == p_Depto))
        {
            return true;

        }
        else 
        {
            return false;

        }//end if
        
    }//end void    

}//end class