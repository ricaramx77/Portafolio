//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System.Web.UI.WebControls;
using EntitiesFC;
using System.Collections.Generic;
using System.Web;
using System;
using System.Globalization;

public class LabelControl
{
    public static void LimpiaLabel(params Label[] label)
    {
        for (int x = 0; x <= label.Length - 1; x++)
        {
            label[x].Text = string.Empty; ;
        }//end for      

    }//end void  

    public static void HabilitaVisibilidadLabel(bool p_Habilita, params System.Web.UI.WebControls.Label[] labels)
    {
        for (int x = 0; x <= labels.Length - 1; x++)
        {
            labels[x].Visible = p_Habilita;
        }//end for      
    } //void

    public static void HabilitaDisponilbilidadLabel(bool p_Habilita, params Label[] labels)
    {
        for (int x = 0; x <= labels.Length - 1; x++)
        {
            labels[x].Enabled = p_Habilita;
        }//end for      
    } //void

    //lista de acceso de usuario
    private List<EntitiesFC.PerfilAccesoUsr> listaPerfilAccesoUsr;

    public void HabilitaVisibilidadLabelXRol(bool p_Habilita, String p_Rol, params Label[] labels)
    {
        listaPerfilAccesoUsr = (List<EntitiesFC.PerfilAccesoUsr>)System.Web.HttpContext.Current.Session["ListaPerfilAccesoUsr"];
        foreach (PerfilAccesoUsr i in listaPerfilAccesoUsr) // Loop through List with foreach
        {
            if (i.NombreRol == p_Rol)
            {
                for (int x = 0; x <= labels.Length - 1; x++)
                {
                    labels[x].Visible = p_Habilita;
                }//end for                

            }//end if

        }//end foreach

    }//end void

 public static string ObtenDatoString(Label oLabel)
    {
        if (oLabel.Text != String.Empty)
        {
            return oLabel.Text;
        }
        else
        {
            return null;
        }//end if        
    }//end void


    public void HabilitaDisponibilidadLabelXRol(bool p_Habilita, String p_Rol, params Label[] labels)
    {
        listaPerfilAccesoUsr = (List<EntitiesFC.PerfilAccesoUsr>)System.Web.HttpContext.Current.Session["ListaPerfilAccesoUsr"];
        foreach (PerfilAccesoUsr i in listaPerfilAccesoUsr) // Loop through List with foreach
        {
            if (i.NombreRol == p_Rol)
            {
                for (int x = 0; x <= labels.Length - 1; x++)
                {
                    labels[x].Enabled = p_Habilita;
                }//end for                

            }//end if

        }//end foreach

    }//end void

public static double ObtenDouble(Label oLabel)
    {
        if (oLabel.Text != String.Empty)
        {
            return Convert.ToDouble(EliminarFormato(oLabel.Text));
        }
        else
        {
            return 0;
        }//end if        
    }//end void

    public static string ObtenDatoString(Label oLabel)
    {
        if (oLabel.Text != String.Empty)
        {
            return oLabel.Text;
        }
        else
        {
            return null;
        }//end if        
    }//end void



public static DateTime? ObtenFechaNullable(Label oLabel)
    {
        if (oLabel.Text != String.Empty)
        {
            return DateTime.Parse(oLabel.Text);
        }
        else
        {
            return null;
        }//end if        
    }//end void


    public static DateTime ObtenFecha(Label oLabel)
    {
        if (oLabel.Text != String.Empty)
        {
            return DateTime.Parse(oLabel.Text);
        }
        else
        {
            return DateTime.MinValue;
        }//end if        
    }//end void

    public static Int32 ObtenInt32(Label oLabel)
    {
        if (oLabel.Text != String.Empty)
        {
            return Convert.ToInt32(oLabel.Text);
        }
        else
        {
            return 0;
        }//end if        
    }//end void

    public static Int32? ObtenInt32Nullable(Label oLabel)
    {
        if (oLabel.Text != String.Empty)
        {
            return Convert.ToInt32(oLabel.Text);
        }
        else
        {
            return null;
        }//end if        

    }//end void

    public static Decimal? ObtenDecimalNullable(Label oLabel)
    {
        if (oLabel.Text != String.Empty)
        {
            return Convert.ToDecimal(EliminarFormato(oLabel.Text));
        }
        else
        {
            return null;
        }//end if        
    }//end void

    /// <summary>
    /// Devuelve una cadena sin formato monetario o separador de millares.
    /// </summary>
    /// <param name="expresion">Expresión que se desea evaluar</param>
    /// <returns></returns>
    public static String EliminarFormato(String expresion)
    {
        String resultado = String.Empty;
        CultureInfo Cultura = System.Globalization.CultureInfo.CurrentCulture;
        String SimboloMoneda = Cultura.NumberFormat.CurrencySymbol;
        String SeparadorMiles = Cultura.NumberFormat.CurrencyGroupSeparator;

        resultado = EliminarCaracter(expresion, SimboloMoneda);
        resultado = EliminarCaracter(resultado, SeparadorMiles);

        Cultura = null;

        return resultado;
    }

    /// <summary>
    /// Devuelve una expresion, eliminando todas las incidencias de un caracter.
    /// </summary>
    /// <param name="expresion">Expresión que se desea evaluar</param>
    /// <param name="valor">Caracter que se desea remover</param>
    /// <returns></returns>
    public static String EliminarCaracter(String expresion, String caracter)
    {
        String resultado = expresion;
        while (resultado.IndexOf(caracter) > -1)
            resultado = resultado.Remove(resultado.IndexOf(caracter), 1);
        return resultado;
    }

    public static void AsignaValor(Label label, string valor) 
    {
        label.Text = valor;
    
    }//if

}//end class
