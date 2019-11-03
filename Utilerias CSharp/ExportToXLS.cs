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

namespace WebFC
{
    public class ExportToXls
    {
        public static void Export(string fileName, GridView gv, string title)
        {
            HttpContext.Current.Response.Clear();
            HttpContext.Current.Response.AddHeader("content-disposition", string.Format("attachment; filename={0}", fileName));
            HttpContext.Current.Response.ContentType = "application/ms-excel";

            using (StringWriter sw = new StringWriter())
            {
                HtmlTextWriter htw = new HtmlTextWriter(sw);
                try
                {
                    // render the table into the htmlwriter
                    RenderGrid(gv).RenderControl(htw);
                    // render the htmlwriter into the response
                    HttpContext.Current.Response.Write("" + title + "");
                    HttpContext.Current.Response.Write("Report created at: " + DateTime.Now.ToString());
                    HttpContext.Current.Response.Write(sw.ToString());
                    HttpContext.Current.Response.End();
                }
                finally
                {
                    htw.Close();
                }
            }
        }

        private static Table RenderGrid(GridView grd)
        {
            // Create a form to contain the grid
            Table table = new Table();
            table.GridLines = grd.GridLines;

            // add the header row to the table
            if (grd.HeaderRow != null)
            {
                ExportToXls.PrepareControlForExport(grd.HeaderRow);
                table.Rows.Add(grd.HeaderRow);
            }

            // add each of the data rows to the table
            foreach (GridViewRow row in grd.Rows)
            {
                //to allign top
                row.VerticalAlign = VerticalAlign.Top;
                ExportToXls.PrepareControlForExport(row);
                table.Rows.Add(row);
            }

            // add the footer row to the table
            if (grd.FooterRow != null)
            {
                ExportToXls.PrepareControlForExport(grd.FooterRow);
                table.Rows.Add(grd.FooterRow);
            }
            return table;
        }

        private static void PrepareControlForExport(Control control)
{
    for (int i = 0; i < control.Controls.Count; i++)
{
Control current = control.Controls[i];
if (current is GridView)
{
control.Controls.Remove(current);
control.Controls.AddAt(i, RenderGrid((GridView)current));
}
if (current is LinkButton)
{
control.Controls.Remove(current);
control.Controls.AddAt(i, new LiteralControl((current as LinkButton).Text));
}
if (current is Button)
{
control.Controls.Remove(current);
control.Controls.AddAt(i, new LiteralControl((current as Button).Text));
}

else if (current is ImageButton)
{
control.Controls.Remove(current);
control.Controls.AddAt(i, new LiteralControl((current as ImageButton).AlternateText));
}
else if (current is HyperLink)
{
control.Controls.Remove(current);
control.Controls.AddAt(i, new LiteralControl((current as HyperLink).Text));
}
else if (current is DropDownList)
{
control.Controls.Remove(current);
control.Controls.AddAt(i, new LiteralControl((current as DropDownList).SelectedItem.Text));
}
else if (current is CheckBox)
{
control.Controls.Remove(current);
control.Controls.AddAt(i, new LiteralControl((current as CheckBox).Checked ? "Da" : "Nu"));
}

if (current.HasControls())
{
ExportToXls.PrepareControlForExport(current);
}
}
}
    }
}