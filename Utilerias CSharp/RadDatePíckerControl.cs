using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Web.UI.WebControls;
using System.Web;
using Telerik.Web.UI;

public class RadDatePíckerControl
{
    public static bool ValidaFecha(RadDatePicker rdp)
    {
        if (rdp.DateInput.InvalidTextBoxValue != string.Empty)
        {
            return false;
        }

        return true;

    }//end void     

    //Solo aplica en rangos, si primer fecha tiene dato, la segunda tambien debe tener
    public static bool ValidaDatoIntroducidoSegundaFecha(RadDatePicker rdpFechaInicio, RadDatePicker rdpFechaFin)
    {
        if (rdpFechaInicio.SelectedDate.HasValue && rdpFechaFin.SelectedDate.HasValue == false)
        {
            return false;
        }//if

        return true;

    }//end void         

    //Solo aplica en rangos,  si segunda  fecha tiene dato, la primera tambien debe tener
    public static bool ValidaDatoIntroducidoPrimerFecha(RadDatePicker rdpFechaInicio, RadDatePicker rdpFechaFin)
    {
        if (rdpFechaInicio.SelectedDate.HasValue == false && rdpFechaFin.SelectedDate.HasValue)
        {
            return false;
        }//if

        return true;

    }//end void      
   
    //Solo aplica en rangos
     public static bool ValidaDatoIntroducidoAmbasFechas(RadDatePicker rdpFechaInicio, RadDatePicker rdpFechaFin)
    {
        if (rdpFechaInicio.SelectedDate.HasValue && rdpFechaFin.SelectedDate.HasValue)
        {
            return true;
        }//if

        return false;

    }//end void        

    //Metodo que devuelve la fecha en formato 99990101
     public static String ObtenFechaUniversalSeleccionada(RadDatePicker radDatePicker)
     {
         if (radDatePicker.SelectedDate.HasValue)
             return  radDatePicker.SelectedDate.Value.Year.ToString() + 
                     int.Parse( radDatePicker.SelectedDate.Value.Month.ToString()).ToString("00") + 
                     int.Parse( radDatePicker.SelectedDate.Value.Day.ToString()).ToString("00");
         else
             return string.Empty;      
    
     }//end method  
    

}//class

