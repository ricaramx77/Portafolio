//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com  
 
using System;
    using System.Data;
    using System.Configuration;
    using System.IO;
    using System.Web;
    using System.Web.Security;
    using System.Web.UI;
    using System.Web.UI.WebControls;
    using System.Web.UI.WebControls.WebParts;
    using System.Web.UI.HtmlControls;
    using System.Web.SessionState;

//para export excel
//using System.IO;
//using System.Web.UI.HtmlControls;
//using System.Text;


public class Excel
{   
    public static void ExportaDatosExcel( System.Object o, GridView gv)
    {
        System.Text.StringBuilder sb = new System.Text.StringBuilder();
            System.IO.StringWriter sw = new System.IO.StringWriter(sb);
            HtmlTextWriter htw = new HtmlTextWriter(sw);
            GridView dg = new GridView();

            try
            {
                //Se declara un DataGridView al vuelo porque el que se expone en la GUI tiene pagineo
                //y al exportar a Excel sólo exporta los registros de la pagina actual en el GridView.
                dg = new GridView();
                dg.AllowPaging = false;
                dg.ShowFooter = false;
                dg.PagerSettings.Visible = false;
                dg.AutoGenerateColumns = true;                
                dg.DataSource = (System.Data.DataTable) o;                
                dg.DataBind();                 
 
                Page page = new Page();                

                System.Web.UI.HtmlControls.HtmlForm form = new System.Web.UI.HtmlControls.HtmlForm();
                gv.EnableViewState = false;
                page.EnableEventValidation = false;
                page.DesignerInitialize();
                page.Controls.Add(form);
                form.Controls.Add(dg);
                //Enviar el grid
                page.RenderControl(htw);                                
                HttpContext.Current.Response.Clear();
                HttpContext.Current.Response.Buffer = true;
                HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";
                //Response.ContentType = "text/plain"
                HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=data.xls");
                HttpContext.Current.Response.Charset = "UTF-8";
                HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.Default;
                HttpContext.Current.Response.Write(sb);

            }
            catch (Exception)
            {                
                //this.LabelInfo.Text = "Ocurrió una excepción al intentar exportar la información al formato Excel";
                HttpContext.Current.Response.Write( "Ocurrió una excepción al intentar exportar la información al formato Excel");
            }

            HttpContext.Current.Response.End();
            //se puso fuera para que no generé excepción.
            //HttpContext.Current.ApplicationInstance.CompleteRequest()
            sb = null;
            sw = null;
            htw = null;
            dg = null;

        } //end void

    //<sumary>
    //' Exportacion a Excel respetando formato y colores de Gridview
    //</sumary>    
    // <remarks>
    // No se recomienda el uso de este metodo en Gridviews que tengan implementada
    // paginación porque solo mostrará una de las páginas
    //</remarks>    
    public static void ExportaDatosExcelConFormato(GridView gv)
    {        
        System.Text.StringBuilder sb = new System.Text.StringBuilder();
        StringWriter sw = new StringWriter(sb);
        HtmlTextWriter htw = new HtmlTextWriter(sw);

        Page page = new Page();
        HtmlForm form = new HtmlForm();
        gv.EnableViewState = false;
        page.EnableEventValidation = false;
        //Page que requieran los diseñadores RAD.
        page.DesignerInitialize();
        page.Controls.Add(form);
        form.Controls.Add(gv);
        page.RenderControl(htw);
        HttpContext.Current.Response.Clear();
        HttpContext.Current.Response.Buffer = true;
        HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";
        HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=data.xls");
        HttpContext.Current.Response.Charset = "UTF-8";
        HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.Default;
        HttpContext.Current.Response.Write(sb.ToString());
        HttpContext.Current.Response.End();
    
    }//end void

}//end class