//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System.Web.UI.WebControls;
using EntitiesFC;
using System.Collections.Generic;
using System.Web;
using System;

public class CheckBoxControl
{
    public static void HabilitaVisibilidadCheckBox(bool p_Habilita, params CheckBox[] oCheckBox)
    {
        for (int x = 0; x <= oCheckBox.Length - 1; x++)
        {
            oCheckBox[x].Visible = p_Habilita;
        }//end for   
   
    } //void

    public static void HabilitaDisponibilidadCheckBox(bool p_Habilita, params CheckBox[] oCheckBox)
    {
        for (int x = 0; x <= oCheckBox.Length - 1; x++)
        {
            oCheckBox[x].Enabled = p_Habilita;
        }//end for   

    } //void

    public static void LimpiaCheckBox(bool p_Habilita, params CheckBox[] oCheckBox)
    {
        for (int x = 0; x <= oCheckBox.Length - 1; x++)
        {            
             oCheckBox[x].Checked = p_Habilita;
            
        }//end for   

    } //void

    public static Boolean ConvierteBooleanNullableABoolean(Boolean ? oBoolean)
    {
        return Convert.ToBoolean(oBoolean);

    }//end void

    public static Boolean ? ConvierteBooleanABooleanNullable(Boolean oBoolean)
    {
        return oBoolean;

    }//end void

}//end class
