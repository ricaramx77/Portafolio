//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System.Web.UI.WebControls;
using EntitiesFC;
using System.Collections.Generic;
using System.Web;
using System;

public class TextBoxControl
{
    public static void LimpiaTextBox(params TextBox[] textbox)
    {
        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            textbox[x].Text = String.Empty; ;
        }//end for      

    }//end void     

    public static void LimpiaTextBoxOnClic(TextBox otextbox)
    {
        otextbox.Attributes["onclick"] = "this.value=''";        

    }//end void     

    public static string ObtenDatoString(TextBox textbox)
    {
        if (textbox.Text != String.Empty)
        {
            return textbox.Text;
        }
        else
        {
            return null;
        }//end if        
    }//end void

 //Truncar cadenas en caso de copy paste en Multiline
    public static string ObtenDatoString(TextBox p_textbox, int max)
    {
        if (p_textbox.Text != String.Empty)
        {
            if (p_textbox.Text.Length > max)
            {
                return p_textbox.Text.ToUpper().Substring(0, max - 1);
            }
            else 
            {
                return p_textbox.Text.ToUpper();

            }//if
            
        }
        else
        {
            return string.Empty;
        }//end if        
    }//end void

    public static Int32 ? ObtenDatoInt32(TextBox textbox)
    {
        if (textbox.Text != String.Empty)
        {
            return Convert.ToInt32(textbox.Text);
        }
        else
        {
            return null;
        }//end if        
    }//end void

    public static Decimal ? ObtenDecimalNullable(TextBox textbox)
    {
        if (textbox.Text != String.Empty)
        {
            return Convert.ToDecimal(textbox.Text);
        }
        else
        {
            return null;
        }//end if       
 
    }//end void

 public static Decimal ObtenDecimal(TextBox textbox)
    {
        if (textbox.Text != String.Empty)
        {
            return Convert.ToDecimal(textbox.Text);
        }
        else
        {
            return 0l;
        }//end if    
    
    }//end void

  public static Int32? ObtenInt32Nullable(TextBox textbox)
    {
        if (textbox.Text != String.Empty)
        {
            return Convert.ToInt32(textbox.Text);
        }
        else
        {
            return null;
        }//end if        
    }//end void

    public static Decimal? ObtenDecimalNullable(TextBox textbox)
    {
        if (textbox.Text != String.Empty)
        {
            return Convert.ToDecimal(EliminarFormato(textbox.Text));
        }
        else
        {
            return null;
        }//end if        
    }//end void

    public static bool VerificaAlgunDatoIntroducido(params TextBox[] textbox)
    {
        for (int x = 0; x <= textbox.Length - 1; x++)
        {            
            if (textbox[x].Text != String.Empty)
            {
                return true;
            }               
        }//end for              

        return false;

    }//end bool  

    public static bool VerificaTodosLosDatosIntroducidos(params TextBox[] textbox)
    {
        int contador = 0;

        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            if (textbox[x].Text != String.Empty)
            {
                contador += 1;
            }
        }//end for     

        if (contador == textbox.Length)
        {
            return true;
        }
        else 
        {
            return false;        

        }//end if

    }//end bool  

    //lista de acceso de usuario
    private List<EntitiesFC.PerfilAccesoUsr> listaPerfilAccesoUsr;

    public void HabilitaDisponibilidadTextBoxXRol(bool p_Habilita, GridView gv, String p_Rol, String nombreTextBox, params int[] celdas)
    {
        listaPerfilAccesoUsr = (List<EntitiesFC.PerfilAccesoUsr>)System.Web.HttpContext.Current.Session["ListaPerfilAccesoUsr"];
        foreach (PerfilAccesoUsr i in listaPerfilAccesoUsr) // Loop through List with foreach
        {
            if (i.NombreRol == p_Rol)
            {
                for (int x = 0; x <= gv.Rows.Count - 1; x++)
                {
                    for (int y = 0; y <= celdas.Length - 1; y++)
                    {
                        TextBox gv2 = (TextBox)gv.Rows[x].Cells[y].FindControl(nombreTextBox);
                        gv2.Enabled = p_Habilita;

                    }//end for

                }//end for

            }//end if

        }//end foreach     

    }//end void    

    public void HabilitaVisibilidadTextBoxXRol(bool p_Habilita, GridView gv, String p_Rol, String nombreTextBox, params int[] celdas)
    {
        listaPerfilAccesoUsr = (List<EntitiesFC.PerfilAccesoUsr>)System.Web.HttpContext.Current.Session["ListaPerfilAccesoUsr"];
        foreach (PerfilAccesoUsr i in listaPerfilAccesoUsr) // Loop through List with foreach
        {
            if (i.NombreRol == p_Rol)
            {
                for (int x = 0; x <= gv.Rows.Count - 1; x++)
                {
                    for (int y = 0; y <= celdas.Length - 1; y++)
                    {
                        TextBox gv2 = (TextBox)gv.Rows[x].Cells[y].FindControl(nombreTextBox);
                        gv2.Visible = p_Habilita;

                    }//end for

                }//end for

            }//end if

        }//end foreach     

    }//end void    

    public static void HabilitaVisibilidadTextBox(bool p_Habilita, params System.Web.UI.WebControls.TextBox[] textbox)
    {
        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            textbox[x].Visible = p_Habilita;
        }//end for      
    } //void

    public static void HabilitaDisponilbilidadTextBox(bool p_Habilita, params TextBox[] textbox)
    {
        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            textbox[x].Enabled = p_Habilita;
        }//end for      
    } //void

    // Utilizar evento text_changed
    public static double ConvertirMetrosCuadradosHectareas(TextBox MetrosCuadrados)
    {
        double Hectareas = (Convert.ToDouble(MetrosCuadrados.Text) * 0.01) / 100;

        return Hectareas;
    }

    // Utilizar evento text_changed
    public static double ConvertirHectareasMetrosCuadrados(TextBox Hectareas)
    {
        double M2 = (Convert.ToDouble(Hectareas.Text) * 10000) / 1;

        return M2;
    }

    public const string FMT_MONEDA = "$#,##0.00";

    public static string FormatearAMoneda(double Expresion)
    {
        return (Expresion == 0) ? string.Empty : Expresion.ToString(FMT_MONEDA);
    }

    public static string FormatearAMoenda(decimal Expresion)
    {
        return (Expresion == 0) ? string.Empty : Expresion.ToString(FMT_MONEDA);
    }

    public static bool VerificaSiDatosIguales(string textbox1, string textbox2) 
    {
        return string.Equals(textbox1, textbox2);     
    
    }//bool

    public static void AsignaValor(TextBox textBox, string valor)
    {
        textBox.Text = valor;

    }//if

}//end class
