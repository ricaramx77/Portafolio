//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System.Web.UI.WebControls;
using System;
using System.Text.RegularExpressions;
using WebFC;

public class Character
{
    public static Decimal ConvierteCadenaADecimal(String oCadena)
    {
        try
        {
            return Convert.ToDecimal(oCadena);
        }
        catch (Exception)
        {
            return 0;

        }//end try        

    }//end string

    public static Boolean VerificaLongitudMayorIgualCadena(String oCadena, Byte oLongitud)
    {
        if (oCadena.Length >= oLongitud)
        {
            return true;
        }
        else 
        {
            return false;
        }//end if                

    }//end string

    public static Boolean VerificaLongitudIgualCadena(String oCadena, Byte oLongitud)
    {
        if (oCadena.Length == oLongitud)
        {
            return true;
        }
        else
        {
            return false;
        }//end if                

    }//end string

    public static Boolean VerificaLongitudMenorIgualCadena(String oCadena, Byte oLongitud)
    {
        if (oCadena.Length <= oLongitud)
        {
            return true;
        }
        else
        {
            return false;
        }//end if                

    }//end string

    public static string ExtraeCadena(String oCadena, Byte oInicio, Byte oFin)
    {
        return oCadena.Substring(oInicio, oFin);

    }//end string

    public static string ExtraeCadenaAntesDelSigno(String CadenaOriginal, String Signo) 
    {        
        int p = CadenaOriginal.LastIndexOf(Signo);
        return CadenaOriginal.Substring(0, p).Trim();
    
    }//end string

     public static string ExtraeCadenaDespuesDelSigno(String CadenaOriginal, String Signo) 
    {        
        int p = CadenaOriginal.LastIndexOf(Signo);
        return CadenaOriginal.Substring(p + 1).Trim();
    
    }//end string

    public static bool VerificaArrayTextBox_SoloMayMinMayAcnMinAcn(System.Web.UI.UpdatePanel up, String oReplace, params TextBox[] textbox)
    {
        //Valida formato del Concepto (Obligatorio)
        Regex oRegex = new Regex("^[a-zA-ZáéíóúÁÉÍÓÚ ]+$");

        for (int x = 0; x <= textbox.Length - 1; x++)
        {            
            if (!string.IsNullOrEmpty(textbox[x].Text))
            {
                if (oRegex.Match(textbox[x].Text).Success == false)
                {
                    WebMsgBox.MuestraMensajeAJAX(up, "Introduzca solo letras en el campo " + textbox[x].ID.Replace(oReplace, String.Empty));                     
                    return false;
                }
            }
            else
            {
                return true;

            }//end if

        }//end for            

        return true;

    }//end string

    public static bool VerificaArrayTextBox_SoloMayMinNum(System.Web.UI.UpdatePanel up, String oReplace, params TextBox[] textbox)
    {
        //Valida formato del Concepto (Obligatorio)        
        Regex oRegex = new Regex("^[a-zA-Z0-9 ]+$");

        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            if (!string.IsNullOrEmpty(textbox[x].Text))
            {
                if (oRegex.Match(textbox[x].Text).Success == false)
                {
                    WebMsgBox.MuestraMensajeAJAX(up, "Introduzca solo números en el campo " + textbox[x].ID.Replace(oReplace, String.Empty));
                    return false;
                }
            }
            else
            {
                return true;

            }//end if

        }//end for            

        return true;

    }//end string

    public static void TransformaCaracteresAMayusculas(params TextBox[] textbox)
    {
        for (int x = 0; x <= textbox.Length - 1; x++)
        {            
            textbox[x].Attributes.Add("onKeypress", "this.value=this.value.toUpperCase()");               
            
        }//end for              

    }//end string     

    public static void TransformaCaracteresAMinusculas(params TextBox[] textbox)
    {
        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            textbox[x].Attributes.Add("onKeypress", "this.value=this.value.toLowerCase()");

        }//end for              
        
    }//end string            

    //*******************************************************************************************************************
    // ONKEYPRESS
    //*******************************************************************************************************************

    public static void SoloNumeros(params TextBox[] textbox)
    {
        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            textbox[x].Attributes.Add("onKeypress", "if (event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;");

        }//end for    
        

    }//end void  

    public static bool SoloNumeros(string valor)
    {
        Regex regexDealer = new Regex("^[0-9 ]");

        if (!string.IsNullOrEmpty(valor))
        {
            if (regexDealer.Match(valor).Success == false)
            {
                return false;
            }
            return true;
        }

        return true;

    }//bool

 //Numeros soportados por el metodo SoloNumerosDecimales
    // 0.00
    //0.10
    //10.40
    //234.67
    //1234.67
    //1300.00
    //1300.50
    //0
    //50
    //30000
    //3.01
    //134989.76
    //2134989.76
    public static bool SoloNumerosDecimales(string valor)
    {    
        Regex regexDealer = new Regex(@"^0?\d+\.?\d*\0?$");           

        if (!string.IsNullOrEmpty(valor))
        {
            if (regexDealer.Match(valor).Success == false)
            {
                return false;
            }
            return true;
        }

        return true;

    }//bool


    public static void SoloMayEspNum(params TextBox[] textbox)
    {
        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            textbox[x].Attributes.Add("onKeypress", "if (event.keyCode < 32 || event.keyCode > 32 & " +
                                                                          " event.keyCode < 48 || event.keyCode > 57 & " +
                                                                           " event.keyCode < 65 || event.keyCode > 90) " +
                                                                           " event.returnValue = false;");
        }//end for            

    }//end void 

    public static void SoloMayMinEspNum(params TextBox[] textbox)
    {
        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            textbox[x].Attributes.Add("onKeypress", "if (event.keyCode < 32 || event.keyCode > 32 & " +
                                                                          " event.keyCode < 48 || event.keyCode > 57 & " +
                                                                           " event.keyCode < 65 || event.keyCode > 90 & " +
                                                                           " event.keyCode < 97 || event.keyCode > 122) " +
                                                                           " event.returnValue = false;");
        }//end for            

    }//end void    

    public static void SoloMayMinEspNumPunto(params TextBox[] textbox)
    {
        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            textbox[x].Attributes.Add("onKeypress", "if (event.keyCode < 32 || event.keyCode > 32 & " +
                                                                          " event.keyCode < 46 || event.keyCode > 46 & " +
                                                                          " event.keyCode < 48 || event.keyCode > 57 & " +
                                                                           " event.keyCode < 65 || event.keyCode > 90 & " +
                                                                           " event.keyCode < 97 || event.keyCode > 122) " +
                                                                           " event.returnValue = false;");
        }//end for            

    }//end void    

    public static void SoloMayMinEspMayAcnMinAcn(params TextBox[] textbox)
    {
        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            textbox[x].Attributes.Add("onKeypress", "if (event.keyCode < 32 || event.keyCode > 32 & " +
                                                                      " event.keyCode < 65 || event.keyCode > 90 & " +
                                                                      " event.keyCode < 97 || event.keyCode > 122 & " +
                                                                      " event.keyCode < 193 || event.keyCode > 193 & " +
                                                                      " event.keyCode < 201 || event.keyCode > 201 & " +
                                                                      " event.keyCode < 205 || event.keyCode > 205 & " +
                                                                      " event.keyCode < 211 || event.keyCode > 211 & " +
                                                                      " event.keyCode < 218 || event.keyCode > 218 & " +
                                                                      " event.keyCode < 225 || event.keyCode > 225 & " +
                                                                      " event.keyCode < 233 || event.keyCode > 233 & " +
                                                                      " event.keyCode < 237 || event.keyCode > 237 & " +
                                                                      " event.keyCode < 243 || event.keyCode > 243 & " +
                                                                          " event.keyCode < 250 || event.keyCode > 250) " +
                                                                          " event.returnValue = false;");
        }//end for         
    
    }//end void      

    public static void SoloMayMinEspMayAcnMinAcnNum(params TextBox[] textbox)
    {
        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            textbox[x].Attributes.Add("onKeypress", "if (event.keyCode < 32 || event.keyCode > 32 & " +
                                              " event.keyCode < 48 || event.keyCode > 57 & " +
                                              " event.keyCode < 65 || event.keyCode > 90 & " +
                                              " event.keyCode < 97 || event.keyCode > 122 & " +
                                              " event.keyCode < 193 || event.keyCode > 193 & " +
                                              " event.keyCode < 201 || event.keyCode > 201 & " +
                                              " event.keyCode < 205 || event.keyCode > 205 & " +
                                              " event.keyCode < 211 || event.keyCode > 211 & " +
                                              " event.keyCode < 218 || event.keyCode > 218 & " +
                                              " event.keyCode < 225 || event.keyCode > 225 & " +
                                              " event.keyCode < 233 || event.keyCode > 233 & " +
                                              " event.keyCode < 237 || event.keyCode > 237 & " +
                                              " event.keyCode < 243 || event.keyCode > 243 & " +
                                                  " event.keyCode < 250 || event.keyCode > 250) " +
                                                  " event.returnValue = false;");
        }//end for         
      
    }//end string      

    public static void SoloMayMinEspNumGuionMayAcnMinAcnPuntoGato(params TextBox[] textbox)
    {
        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            textbox[x].Attributes.Add("onKeypress", "if (event.keyCode < 32 || event.keyCode > 32 & " +
                                                         "event.keyCode < 35 || event.keyCode > 35 & " +
                                                             "event.keyCode < 45 || event.keyCode > 45 & " +
                                                             "event.keyCode < 46 || event.keyCode > 46 & " +
                                                             "event.keyCode < 48 || event.keyCode > 48 & " +
                                                             "event.keyCode < 49 || event.keyCode > 49 & " +
                                                             "event.keyCode < 50 || event.keyCode > 50 & " +
                                                             "event.keyCode < 51 || event.keyCode > 51 & " +
                                                             "event.keyCode < 52 || event.keyCode > 52 & " +
                                                             "event.keyCode < 53 || event.keyCode > 53 & " +
                                                             "event.keyCode < 54 || event.keyCode > 54 & " +
                                                             "event.keyCode < 55 || event.keyCode > 55 & " +
                                                             "event.keyCode < 56 || event.keyCode > 56 & " +
                                                             "event.keyCode < 57 || event.keyCode > 57 & " +
                                                             "event.keyCode < 65 || event.keyCode > 90 & " +
                                                             "event.keyCode < 97 || event.keyCode > 122 & " +
                                                             " event.keyCode < 193 || event.keyCode > 193 & " +
                                                             " event.keyCode < 201 || event.keyCode > 201 & " +
                                                             " event.keyCode < 205 || event.keyCode > 205 & " +
                                                             " event.keyCode < 211 || event.keyCode > 211 & " +
                                                             " event.keyCode < 218 || event.keyCode > 218 & " +
                                                             " event.keyCode < 225 || event.keyCode > 225 & " +
                                                             " event.keyCode < 233 || event.keyCode > 233 & " +
                                                             " event.keyCode < 237 || event.keyCode > 237 & " +
                                                             " event.keyCode < 243 || event.keyCode > 243 & " +
                                                             " event.keyCode < 250 || event.keyCode > 250) " +
                                                             "event.returnValue = false;");
        }//end for        

       
    }//end string   

    public static void SoloMayMinEspMayAcnMinAcnNumSignosPuntuacion(params TextBox[] textbox)
    {

        for (int x = 0; x <= textbox.Length - 1; x++)
        {
            //33 ! / 36 $ /  40 ( / 41 ) / 44 , /   46 ./ 58: / 59; / 63? / 161¡ / 191 ¿
            textbox[x].Attributes.Add("onKeypress", "if (event.keyCode < 32 || event.keyCode > 32 & " +
                                                   "event.keyCode < 33 || event.keyCode > 33 & " +
                                                   "event.keyCode < 36 || event.keyCode > 36 & " +
                                                   "event.keyCode < 40 || event.keyCode > 40 & " +
                                                       "event.keyCode < 41 || event.keyCode > 41 & " +
                                                       "event.keyCode < 44 || event.keyCode > 44 & " +
                                                       "event.keyCode < 46 || event.keyCode > 46 & " +
                                                       "event.keyCode < 48 || event.keyCode > 57 & " +
                                                       "event.keyCode < 58 || event.keyCode > 59 & " +
                                                       "event.keyCode < 63 || event.keyCode > 63 & " +
                                                       "event.keyCode < 65 || event.keyCode > 90 & " +
                                                           "event.keyCode < 97 || event.keyCode > 122 & " +
                                                           "event.keyCode < 161 || event.keyCode > 161 & " +
                                                           "event.keyCode < 191 || event.keyCode > 191 & " +
                                                           "event.keyCode < 193 || event.keyCode > 193 & " +
                                                           "event.keyCode < 201 || event.keyCode > 201 &  " +
                                                           "event.keyCode < 205 || event.keyCode > 205 & " +
                                                           "event.keyCode < 211 || event.keyCode > 211 & " +
                                                           "event.keyCode < 218 || event.keyCode > 218 & " +
                                                           "event.keyCode < 225 || event.keyCode > 225 & " +
                                                           "event.keyCode < 233 || event.keyCode > 233 & " +
                                                           "event.keyCode < 237 || event.keyCode > 237 & " +
                                                           "event.keyCode < 243 || event.keyCode > 243 & " +
                                                           "event.keyCode < 250 || event.keyCode > 250)  " +
                                                           "event.returnValue = false;");
        }//end for         

     
    }//end string         

    public static string ReemplazarUltimoCaracter(string cadena, string caracterNuevo)
    {
        string cadenaSinEspacios = cadena.Trim();
        return cadenaSinEspacios.Substring(0, cadenaSinEspacios.Length - 1) + caracterNuevo;
    }         

    public static int ObtenerLongitudCadena(string cadena)
    {
        return cadena.Length;

    }//int

    public static char ObtenerCaracterEspecificado(string cadena, int indice)
    {
        return cadena.Substring(indice, 1)[0];

    }//char    

    public static bool VerificaCadenaVacia(string cadena)
    {
        if (cadena.Trim().Length == 0) 
        {
            return true;
        }

        return false;

    }//char    


}//end class