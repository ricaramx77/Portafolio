//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System.Web.UI.WebControls;
using System.Collections.Generic;
using System.Web;
using System;
using System.Web.UI.WebControls;

public class ArrayCode
{
    public static int[] ObtenElementosArray(int[] elementos, byte elementoInicial)
    {
        for (int x = 0; x <= elementos.Length - 1; x++)
        {           
            elementos[x] = x + elementoInicial;
        }

        return elementos;

    }//int[]

    public static System.Web.UI.HtmlControls.HtmlTableRow[] PoblaArrayTableRow(params System.Web.UI.HtmlControls.HtmlTableRow[] oTableRowItems)
    {
        return oTableRowItems;        

    }//end void


    public static String[]  PoblaArrayString(params String[] oStringItems)
    {
        return oStringItems;        

    }//end void

    public static Button[] PoblaArrayBotones(params Button[] oButtonItems)
    {
        return oButtonItems;

    }//end void

    public static ImageButton[] PoblaArrayImageButton(params ImageButton[] oImageButtonItems)
    {
        return oImageButtonItems;

    }//end void

    public static Int32[] PoblaArrayInt32(params Int32[] oInt32Items)
    {
        return oInt32Items;

    }//end void

    public static Byte[] PoblaArrayByte(params Byte[] oByteItems)
    {
        return oByteItems;

    }//end void

    public static TextBox[] PoblaArrayTextBox(params TextBox[] oTextBox)
    {
        return oTextBox;

    }//end void

    public static DropDownList[] PoblaArrayDropDownList(params DropDownList[] oDropDownList)
    {
        return oDropDownList;

    }//end void

    public static ListBox[] PoblaArrayListBox(params ListBox[] oListBox)
    {
        return oListBox;

    }//end void

    public static Label[] PoblaArrayLabel(params Label[] oLabel)
    {
        return oLabel;

    }//end void

    public static GridView[] PoblaArrayGridView(params GridView[] oGridView)
    {
        return oGridView;

    }//end void

    public static CheckBox[] PoblaArrayCheckBox(params CheckBox[] oCheckBox)
    {
        return oCheckBox;

    }//end void

}//end class
