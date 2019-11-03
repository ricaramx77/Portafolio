//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System.Web.UI.WebControls;
using EntitiesFC;
using System.Collections.Generic;
using System.Web;
using System;

public class RolCode
{
    //lista de acceso de usuario
    private List<EntitiesFC.PerfilAccesoUsr> listaPerfilAccesoUsr;

    public bool VerificaRolUsuario(String p_Rol)
    {
        listaPerfilAccesoUsr = (List<EntitiesFC.PerfilAccesoUsr>)System.Web.HttpContext.Current.Session["ListaPerfilAccesoUsr"];
        foreach (PerfilAccesoUsr i in listaPerfilAccesoUsr) // Loop through List with foreach
        {
            if (i.NombreRol == p_Rol)
            {
                return true;
            }          

        }//end foreach

        return false;

    }//end void    

}//end class