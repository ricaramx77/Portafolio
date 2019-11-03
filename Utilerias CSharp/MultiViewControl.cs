using System.Web.UI.WebControls;
using System.Collections.Generic;
using System.Web;
using System;
using System.Globalization;

public class MultiViewControl
{
    public static void MostrarView(MultiView multiview, short indice)
    {
        multiview.ActiveViewIndex = indice;

    }//end void   

}//class

