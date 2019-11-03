//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System.Web.UI.WebControls;
using System;
using WebFC;

public class DateCode
{
    //El siguiente codigo valida la fecha que proviene de Excel sea correcta:
    //93456 = 12/03/2013 (Correcta)
    public static bool ValidaFechaExcel(string expresion)
    {
        if (expresion.Length == 0)
            return true;

        DateTime fecha;

        if (DateTime.TryParse(expresion, out fecha))
            return true;

        double f;

        if (!double.TryParse(expresion, out f))
            return false;

        if (f < 0)
            return false;

        return true;
    }

    //El siguiente codigo convierte la fecha que proviene de Excel:
    //93456 = 12/03/2013 (Correcta)
    public static DateTime? ConvertirFechaExcel(string expresion)
    {
        if (expresion.Length == 0)
            return null;

        DateTime fecha;

        if (DateTime.TryParse(expresion, out fecha))
            return fecha;

        double f;

        if (!double.TryParse(expresion, out f))
            return null;

        fecha = DateTime.FromOADate(f);

        return fecha;
    }

    public static bool ValidaFecha(String p_Fecha)
    {
        //Formato (dd/MM/yyyy)
        System.Text.RegularExpressions.Regex regexFecha = new System.Text.RegularExpressions.Regex("^(?:(?:0?[1-9]|1\\d|2[0-8])(\\/|-)(?:0?[1-9]|1[0-2]))(\\/|-)" +
       "(?:[1-9]\\d\\d\\d|\\d[1-9]\\d\\d|\\d\\d[1-9]\\d|\\d\\d\\d[1-9])$|^(?:(?:31(\\/|-)(?:0?[13578]|1[02]))|(?:(?:29|30)(\\/|-)" + "(?:0?[1,3-9]|1[0-2])))(\\/|-)(?:[1-" +
       "9]\\d\\d\\d|\\d[1-9]\\d\\d|\\d\\d[1-9]\\d|\\d\\d\\d[1-9])$|^(29(\\/|-)0?2)(\\/|-)" +
       "(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\\d\\d)?(?:0[48]|[2468][048]|[13579][26]))$");

        if (p_Fecha != string.Empty)
        {
            if (regexFecha.Match(p_Fecha).Success == false)
            {
                //Formato incorrecto
                return false;
            }
            else
            {
                //Es correcto
                return true;
            }//end if
        }
        else
        {
            return true;
        }//end if

    } //end bool    

    public static bool ValidaLimiteAño(string p_Fecha, Int16 p_AñoLimite)
    {
        Int32 Año;
        Año = Convert.ToDateTime(p_Fecha).Year;

        if (Año < p_AñoLimite)
        {
            return false;
        }
        else if (Año >= p_AñoLimite)
        {
            return true;

        }//end if

        return false;
    
    }//end void

    public static bool ComparaFechas(String p_FechaInicial, String p_FechaFinal)
    {
        if (p_FechaInicial != string.Empty && p_FechaFinal != string.Empty)
        {
            if (Convert.ToDateTime(p_FechaFinal) < Convert.ToDateTime(p_FechaInicial))
            {
                return false;
            }
            else
            {
                return true;
            }//end if   

        }
        else
        {
            return true;
        }//end if                       

    } //end bool      

    public static bool ComparaFechaCorte(String p_FechaCorte, String p_FechaActual)
    {
        if (p_FechaCorte != string.Empty && p_FechaActual != string.Empty)
        {
            if (Convert.ToDateTime(p_FechaCorte) >= Convert.ToDateTime(p_FechaActual))
            {
                return false;
            }
            else
            {
                return true;
            }//end if   

        }
        else
        {
            return true;
        }//end if                       

    } //end bool           

    public static String ObtenFechaAnteriorHabil()
    {
        DateTime FechaActual;
        FechaActual = System.DateTime.Now;

        String NombreDiaActual;
        NombreDiaActual = System.DateTime.Now.DayOfWeek.ToString();

        if (NombreDiaActual == "Tuesday" || NombreDiaActual == "Wednesday" || NombreDiaActual == "Thursday" || NombreDiaActual == "Friday")
        {
            return System.DateTime.Now.AddDays(-1).ToShortDateString();
        }
        else if (NombreDiaActual == "Monday")
        {
            return System.DateTime.Now.AddDays(-3).ToShortDateString();
        } //end if
        else
        {
            return String.Empty;
        }//end if

    }//end method  

    public static String ObtenFechaActual()
    {      
       return System.DateTime.Now.ToShortDateString();       

    }//end method  

     public static String ObtenFechaActuaUniversal()
    {
        return System.DateTime.Now.Year.ToString() + int.Parse(System.DateTime.Now.Month.ToString()).ToString("00") + int.Parse(System.DateTime.Now.Day.ToString()).ToString("00");

    }//end method  

  public static String ObtenAñoActual()
    {
        return System.DateTime.Now.Year.ToString();

    }//end method  

    //De  19/05/2011 a 2011/05/19
    public static String CambiaFechaDeEspañolAIngles(String p_Fecha)
    {
        if (p_Fecha != String.Empty)
        {
            string fecha;

            fecha = Microsoft.VisualBasic.Strings.Mid(p_Fecha, 7, 4) + "/" +
                        Microsoft.VisualBasic.Strings.Mid(p_Fecha, 4, 2) + "/" +
                        Microsoft.VisualBasic.Strings.Mid(p_Fecha, 1, 2) + " ";

            return fecha;

        }
        else 
        {
            return null;

        }//end if       
        
    }//end method  

    //De 2011/05/19 a 19/05/2011
    public static String CambiaFechaDeInglesAEspañol(String p_Fecha)
    {
        if (p_Fecha != String.Empty)
        {
            string fecha;

            fecha = Microsoft.VisualBasic.Strings.Mid(p_Fecha, 9, 2) + "/" +
                        Microsoft.VisualBasic.Strings.Mid(p_Fecha, 6, 2) + "/" +
                        Microsoft.VisualBasic.Strings.Mid(p_Fecha, 1, 4) + " ";

            return fecha;
        }
        else 
        {
            return null;

        }//end if        

    }//end method  

    public static String ObtenPrimerDiaMesDeFecha (String p_Fecha)
    {
        if (p_Fecha != String.Empty)
        {            
            DateTime oDate = Convert.ToDateTime(p_Fecha);
            DateTime firstDay = oDate.AddDays(-(oDate.Day - 1));

            return firstDay.ToShortDateString();
        }
        else
        {
            return String.Empty;

        }//end if        

    }//end string

    public static String ObtenUltimoDiaMesDeFecha(String p_Fecha)
    {
        if (p_Fecha != String.Empty)
        {
            DateTime oDate = Convert.ToDateTime(p_Fecha);
            DateTime firstDay = oDate.AddDays(-(oDate.Day - 1)); //first day
            oDate = oDate.AddMonths(1);
            DateTime lastDay = oDate.AddDays(-(oDate.Day)); //last day    

            return lastDay.ToShortDateString();
        }
        else
        {
            return String.Empty;

        }//end if        

    }//end string

}//end class