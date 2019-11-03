using System.Web.UI.WebControls;
using System.Collections.Generic;
using System.Web;
using System;
using System.Globalization;

public class RadNumericTextBoxControl
{
    public static Decimal? ObtenDecimalNullable(Telerik.Web.UI.RadNumericTextBox textbox)
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

    public static Decimal ObtenDecimal(Telerik.Web.UI.RadNumericTextBox textbox)
    {
        if (textbox.Text != String.Empty)
        {
            return Convert.ToDecimal(EliminarFormato(textbox.Text));
        }
        else
        {
            return 0;
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
    }//string

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
    }//string

}//class

