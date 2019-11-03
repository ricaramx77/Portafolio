using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Web.UI.WebControls;
using System.Web;
using Telerik.Web.UI;

public class RadGridControl
{
    public static void LlenaRadGridLista<T>( IList<T> lista,  RadGrid rgv)
    {
        try
        {
            if (lista.Count()>0)
            {
                rgv.DataSource = lista;
                rgv.DataBind();                           
            }
            else
            {
                rgv.DataSource = null;
                rgv.DataBind();
            }//end if
        }
        catch (Exception ex)
        {
            throw ex;
        }//try

    }//void  

    public static void LlenaRadGridDataReader(System.Data.SqlClient.SqlDataReader sqldr, RadGrid rgv)
    {
        try
        {
            if (sqldr.HasRows)
            {
                rgv.DataSource = sqldr;
                rgv.DataBind();
            }
            else
            {
                rgv.DataSource = null;
                rgv.DataBind();

            }//end if
        }
        catch (Exception ex)
        {
            throw ex;
        }

    }//void

    public static void LimpiaRadGrid(RadGrid rdg)
    {
        rdg.DataSource = null;
        rdg.DataBind(); 

    }//end void   
  
    public static bool VerificaSiContieneDatos(RadGrid rdg)                
    {
        if (rdg.Items.Count > 0)
        {
            return true;
        }
       
        return false;

    }//bool

}//class

