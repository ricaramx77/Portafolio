//Web Developer: Ricardo Rangel Ramírez
//Contacto: ricaramx77@outlook.com

using System.Web.UI.WebControls;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class RadioButtonListControl
{
    //Este método valida si el primer o segundo elemento fueron seleccionados
    public static Byte VerificaElementoSeleccionado(RadioButtonList radioButtonListControl, string valorVerdadero, string valorFalso)
    {
        if (radioButtonListControl.SelectedValue == valorVerdadero)
        {
            return 1;
        }
        else
        {
            return 0;
        }//end if        

    }//void

    public static void SeleccionaElementoXValor(RadioButtonList radioButtonListControl,string valor)
    {
        if (radioButtonListControl.SelectedValue != string.Empty)
        {
            radioButtonListControl.SelectedValue = valor;

        }//if

    }//void        

    public static void LimpiaRadioButtonList(params RadioButtonList[] radioButtonList)
    {
        for (int x = 0; x <= radioButtonList.Length - 1; x++)
        {
            if ((radioButtonList[x].Items.Count > 0))
            {
                radioButtonList[x].SelectedIndex = -1;

            }//if

        }//end for           

    }//void      

}//class


