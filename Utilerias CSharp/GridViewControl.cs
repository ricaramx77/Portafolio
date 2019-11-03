//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   
using System.Web.UI.WebControls;
using EntitiesFC;
using System.Collections.Generic;
using System.Web;
using System;

public class GridViewControl
{
    public static void HabilitaVisibilidadCeldasGridviewXDepto(bool p_Habilita, GridView gv, String p_Depto, params int[] celdas)
    {        
        UsuarioFC objUsrFC = (UsuarioFC)System.Web.HttpContext.Current.Session["objUsrFC"]; ;
        if ((objUsrFC.DptoOrganizacion == p_Depto))
            {
                for (int x = 0; x <= gv.Rows.Count - 1; x++)
                {
                    for (int y = 0; y <= gv.Columns.Count - 1; y++)
                    {
                        if (Array.IndexOf(celdas, y) != -1)
                        {
                            gv.Rows[x].Cells[y].Visible = p_Habilita;
                        }

                    }//end for

                }//end for

            }//end if

        //}//end foreach

    }//end void    

    public static void HabilitaDisponibilidadCeldasGridviewXDepto(bool p_Habilita, GridView gv, String p_Depto, params int[] celdas)
    {
        UsuarioFC objUsrFC = (UsuarioFC)System.Web.HttpContext.Current.Session["objUsrFC"]; ;
        if ((objUsrFC.DptoOrganizacion == p_Depto))
        {
            for (int x = 0; x <= gv.Rows.Count - 1; x++)
            {
                for (int y = 0; y <= gv.Columns.Count - 1; y++)
                {
                    if (Array.IndexOf(celdas, y) != -1)
                    {
                        gv.Rows[x].Cells[y].Enabled = p_Habilita;
                    }

                }//end for

            }//end for

        }//end if

        //}//end foreach

    }//end void    

    //lista de acceso de usuario
    private List<EntitiesFC.PerfilAccesoUsr> listaPerfilAccesoUsr;

    public void HabilitaDisponibilidadCeldasGridviewXRol(bool p_Habilita, GridView gv, String p_Rol, params int[] celdas)
    {
        listaPerfilAccesoUsr = (List<EntitiesFC.PerfilAccesoUsr>)System.Web.HttpContext.Current.Session["ListaPerfilAccesoUsr"];
        foreach (PerfilAccesoUsr i in listaPerfilAccesoUsr) // Loop through List with foreach
        {
            if (i.NombreRol == p_Rol)
            {
                for (int x = 0; x <= gv.Rows.Count - 1; x++)
                {
                    for (int y = 0; y <= gv.Columns.Count - 1; y++)
                    {
                        if (Array.IndexOf(celdas, y) != -1)
                        {
                            gv.Rows[x].Cells[y].Enabled = p_Habilita;
                        }       
                        
                    }//end for

                }//end for

            }//end if

        }//end foreach

    }//end void    

    public void HabilitaVisiblidadCeldasGridviewXRol(bool p_Habilita, GridView gv, String p_Rol, params int[] celdas)
    {
        listaPerfilAccesoUsr = (List<EntitiesFC.PerfilAccesoUsr>)System.Web.HttpContext.Current.Session["ListaPerfilAccesoUsr"];
        foreach (PerfilAccesoUsr i in listaPerfilAccesoUsr) // Loop through List with foreach
        {
            if (i.NombreRol == p_Rol)
            {
                for (int x = 0; x <= gv.Rows.Count - 1; x++)
                {
                    for (int y = 0; y <= gv.Columns.Count - 1; y++)
                    {
                        if (Array.IndexOf(celdas, y) != -1)
                        {
                            gv.Rows[x].Cells[y].Visible = p_Habilita;
                        }       

                    }//end for

                }//end for

            }//end if

        }//end foreach

    }//end void    

    public static void HabilitaVisibilidadCeldasGridview(bool p_Habilita, GridView gv, params int[] celdas)
    {
        for (int x = 0; x <= gv.Rows.Count - 1; x++)
        {
            for (int y = 0; y <= gv.Columns.Count - 1; y++)
            {
                if (Array.IndexOf(celdas, y) !=-1)
                {
                    gv.Rows[x].Cells[y].Visible = p_Habilita;
                }                                

            }//end for

        }//end for         

    }//end void    

    public static void HabilitaDisponibilidadCeldasGridview(bool p_Habilita, GridView gv, params int[] celdas)
    {      
                for (int x = 0; x <= gv.Rows.Count - 1; x++)
                {
                    for (int y = 0; y <= gv.Columns.Count - 1; y++)
                    {
                        if (Array.IndexOf(celdas, y) != -1)
                        {
                            gv.Rows[x].Cells[y].Enabled = p_Habilita;
                        }                                             

                    }//end for                                     

                }//end for         

    }//end void    

    public static bool VerificaSeleccionCheckBoxEnGridView(GridView gv, int celda, string NombreCheckBox)
    {
        int ContadorSeleccion;
        ContadorSeleccion = 0;

        for (int i = 0; i <= gv.Rows.Count - 1; i++)
        {
            if (((CheckBox)gv.Rows[i].Cells[celda].FindControl(NombreCheckBox)).Checked == true)
            {
                ContadorSeleccion = ContadorSeleccion + 1;

            }//end if

        }//end for

        if (ContadorSeleccion > 0)
        {
            return true;
        }
        else
        {
            return false;
        }//end if            

    }//end void      

    public static byte ObtenCantidadColumnas(GridView gv)
    {
        if (gv.Rows[0].Cells.Count > 0)
        {
            return (byte)gv.Rows[0].Cells.Count;
        }

        return 0;

    }//byte

    public static byte ObtenCantidadFilas(GridView gv)
    {
        if (gv.Rows.Count > 0)
        {
            return (byte)gv.Rows.Count;
        }

        return 0;

    }//byte

    public static bool VerificaSiHayDatos(GridView gv)
    {
        if (gv.Rows.Count > 0)
        {
            return true;
        }

        return false;

    }//byte

    public static GridView ObtenSumatoriaColumnas(GridView gv, bool ShowTotalTextInFirstColumn, string FooterCSSClass = "", params int[] args)
    {
        // Declarations
        System.Data.DataTable dtTotals = new System.Data.DataTable();
        System.Data.DataRow dr = dtTotals.NewRow();
        decimal decTemp = 0;

        // Create a column for each of the GridView's Cells
        for (int iColumn = 0; iColumn <= (gv.Rows[0].Cells.Count - 1); iColumn++)
        {
            dtTotals.Columns.Add("Column" + iColumn);
        }

        // Loop through each of the GridView's Rows
        for (int iRow = 0; iRow <= (gv.Rows.Count - 1); iRow++)
        {
            if (iRow == 0 && ShowTotalTextInFirstColumn == true)
            {
                dr["Column0"] = "Totals:";
            }
            else
            {
                // Make sure the row type is a DataRow
                if (gv.Rows[iRow].RowType == DataControlRowType.DataRow)
                {
                    // Loop through each Cell
                    string ValorCelda = null;

                    for (int iCurrentColumn = 0; iCurrentColumn <= (gv.Rows[0].Cells.Count - 1); iCurrentColumn++)
                    {
                        ValorCelda = gv.Rows[iRow].Cells[iCurrentColumn].Text.ToString().Replace("$", "");
                        //ValorCelda = gv.Rows[iRow].Cells[iCurrentColumn].Text.ToString();

                        if (ValorCelda == string.Empty) 
                        {
                            ValorCelda = "0";
                        }

                        // Add the value to the total if it is an Integer
                        decimal z;
                        if (decimal.TryParse(ValorCelda, out z) && !(iCurrentColumn == 0 & ShowTotalTextInFirstColumn == true))
                        {

                            // If the current value is null, add the value to the total
                            if (System.Convert.IsDBNull(dr["Column" + iCurrentColumn]))
                            {
                                dr["Column" + iCurrentColumn] = Convert.ToDecimal(ValorCelda);
                            }
                            else
                            {
                                // If we already have a total, add this value to that total
                                decTemp = Convert.ToDecimal(dr["Column" + iCurrentColumn]);
                                decTemp += Convert.ToDecimal(ValorCelda);
                                dr["Column" + iCurrentColumn] = decTemp;
                                // Reset the temp variable
                                decTemp = 0;
                            }//end if

                        }//end if

                    }//end for

                }//end if

            }//end if

        }//end for

        // Add the totals row to our totals DataTable
        dtTotals.Rows.Add(dr);

        // Turn on the footer in the GridView
        gv.ShowFooter = true;
        gv.FooterRow.Visible = true;

        // Add the totals to the footer row only in Columns of money
        for (int iFooterColumn = 0; iFooterColumn <= args.Length - 1; iFooterColumn++)
        {
            decimal X = default(decimal);
            System.Globalization.CultureInfo ci = new System.Globalization.CultureInfo("es-Mx");

            X = Convert.ToDecimal(dtTotals.Rows[0][args[iFooterColumn]]);
            //-->1366.1D 

            //gv.FooterRow.Cells[args[iFooterColumn]].Text = "$ " + X.ToString("##,##0.00", ci);
            gv.FooterRow.Cells[args[iFooterColumn]].Text = X.ToString("$ ###,###,##0.00", ci);            
            
            //<--$ 1,366.10

            //--> Esta es otra opcion de formato: 
            //--> Grid.FooterRow.Cells(iFooterColumn).Text = "$" & FormatNumber(dtTotals.Rows(0).Item(iFooterColumn).ToString, 2)

            //Alinear al centro
            gv.FooterRow.Cells[args[iFooterColumn]].HorizontalAlign = HorizontalAlign.Center;
            gv.FooterStyle.Wrap = false;
            gv.FooterStyle.Width = 500;
            gv.FooterStyle.ForeColor = System.Drawing.Color.Red;
            gv.FooterStyle.BackColor = System.Drawing.Color.White;
        }

        // Add the CSS class
        //If Not String.IsNullOrEmpty(FooterCSSClass) Then
        //    Grid.FooterRow.CssClass = FooterCSSClass
        //End If

        //Return the Grid
        return gv;

    }//end ObtenSumatoriaColumnas

  public static GridView ObtenSumatoriaColumnasEnteros(GridView gv, bool ShowTotalTextInFirstColumn, string FooterCSSClass = "", params int[] args)
    {
        // Declarations
        System.Data.DataTable dtTotals = new System.Data.DataTable();
        System.Data.DataRow dr = dtTotals.NewRow();
        int Temp = 0;

        // Create a column for each of the GridView's Cells
        for (int iColumn = 0; iColumn <= (gv.Rows[0].Cells.Count - 1); iColumn++)
        {
            dtTotals.Columns.Add("Column" + iColumn);
        }

        // Loop through each of the GridView's Rows
        for (int iRow = 0; iRow <= (gv.Rows.Count - 1); iRow++)
        {
            if (iRow == 0 && ShowTotalTextInFirstColumn == true)
            {
                dr["Column0"] = "Totals:";
            }
            else
            {
                // Make sure the row type is a DataRow
                if (gv.Rows[iRow].RowType == DataControlRowType.DataRow)
                {
                    // Loop through each Cell
                    string ValorCelda = null;

                    for (int iCurrentColumn = 0; iCurrentColumn <= (gv.Rows[0].Cells.Count - 1); iCurrentColumn++)
                    {
                        ValorCelda = gv.Rows[iRow].Cells[iCurrentColumn].Text.ToString().Replace("$", "");

                        if (ValorCelda == string.Empty)
                        {
                            ValorCelda = "0";
                        }

                        // Add the value to the total if it is an Integer
                        decimal z;
                        if (decimal.TryParse(ValorCelda, out z) && !(iCurrentColumn == 0 & ShowTotalTextInFirstColumn == true))
                        {

                            // If the current value is null, add the value to the total
                            if (System.Convert.IsDBNull(dr["Column" + iCurrentColumn]))
                            {
                                dr["Column" + iCurrentColumn] = Convert.ToDecimal(ValorCelda);
                            }
                            else
                            {
                                // If we already have a total, add this value to that total
                                Temp = Convert.ToInt32(dr["Column" + iCurrentColumn]);
                                Temp += Convert.ToInt32(ValorCelda);
                                dr["Column" + iCurrentColumn] = Temp;
                                // Reset the temp variable
                                Temp = 0;
                            }//end if

                        }//end if

                    }//end for

                }//end if

            }//end if

        }//end for

        // Add the totals row to our totals DataTable
        dtTotals.Rows.Add(dr);

        // Turn on the footer in the GridView
        gv.ShowFooter = true;
        gv.FooterRow.Visible = true;

        // Add the totals to the footer row only in Columns of money
        for (int iFooterColumn = 0; iFooterColumn <= args.Length - 1; iFooterColumn++)
        {
            decimal X = default(decimal);
            System.Globalization.CultureInfo ci = new System.Globalization.CultureInfo("es-Mx");

            X = Convert.ToInt32(dtTotals.Rows[0][args[iFooterColumn]]);
            //-->1366.1D 

            gv.FooterRow.Cells[args[iFooterColumn]].Text = X.ToString();

            //<--$ 1,366.10

            //--> Esta es otra opcion de formato: 
            //--> Grid.FooterRow.Cells(iFooterColumn).Text = "$" & FormatNumber(dtTotals.Rows(0).Item(iFooterColumn).ToString, 2)

            //Alinear al centro
            gv.FooterRow.Cells[args[iFooterColumn]].HorizontalAlign = HorizontalAlign.Center;
            gv.FooterStyle.Wrap = false;
            gv.FooterStyle.Width = 500;
            gv.FooterStyle.ForeColor = System.Drawing.Color.Red;
            gv.FooterStyle.BackColor = System.Drawing.Color.White;
        }

        // Add the CSS class
        //If Not String.IsNullOrEmpty(FooterCSSClass) Then
        //    Grid.FooterRow.CssClass = FooterCSSClass
        //End If

        //Return the Grid
        return gv;

    }//end ObtenSumatoriaColumnasEnteros

    public static void LimpiaGridview(params GridView[] gridview)
    {
        for (int x = 0; x <= gridview.Length - 1; x++)
        {
            gridview[x].DataSource = null;
            gridview[x].DataBind();

        }//end for      

    }//end void     

    public static void HabilitaVisibilidadGridView(bool p_Habilita, params System.Web.UI.WebControls.GridView[] gridview)
    {
        for (int x = 0; x <= gridview.Length - 1; x++)
        {
            gridview[x].Visible = p_Habilita;
        }//end for      
    } //void   

    public static void HabilitaDisponibilidadGridView(bool p_Habilita, params System.Web.UI.WebControls.GridView[] gridview)
    {
        for (int x = 0; x <= gridview.Length - 1; x++)
        {
            gridview[x].Enabled = p_Habilita;
        }//end for      
    } //void    

    public static void LlenaGridViewDataReader(System.Data.SqlClient.SqlDataReader sqldr, GridView gv)
    {
        try
        {
            if (sqldr.HasRows)
            {
                gv.DataSource = sqldr;
                gv.DataBind();
                gv.Caption = gv.Rows.Count + " registros ";
            }
            else
            {
                GridViewControl.LimpiaGridview(gv);

            }//end if
        }
        catch (Exception ex)
        {
            throw ex;
        }

    }//end void 

    public static void LlenaGridViewDataReader( System.Data.SqlClient.SqlDataReader sqldr , GridView gv, Label lblTitulo, String DescripcionTitulo, Label lblMsj )
    {
        try
        {
             if (sqldr.HasRows)
                    {            
                        gv.DataSource = sqldr;
                        gv.DataBind();
                        gv.Caption = gv.Rows.Count + " registros ";
                        lblTitulo.Text = DescripcionTitulo;
                        LabelControl.LimpiaLabel(lblMsj);
                    }
                    else
                    {
                        GridViewControl.LimpiaGridview(gv);
                        LabelControl.LimpiaLabel(lblTitulo);
                        lblMsj.Text = FmkCartera.Generales.Mensaje.DevuelveMsj(2);            

                    }//end if
        }
        catch (Exception ex)
        {
            lblMsj.Text = ex.Message;
        }       

    }//end void 

    public static void LlenaGridViewDataTable(System.Data.DataTable dataTable, GridView gv)
    {
        try
        {
            if (dataTable.Rows.Count>0)
            {
                gv.DataSource = dataTable;
                gv.DataBind();
                gv.Caption = gv.Rows.Count + " registros ";              
            }
            else
            {
                GridViewControl.LimpiaGridview(gv);               

            }//end if
        }
        catch (Exception ex)
        {
            throw ex;
        }

    }//end void 

    public static void LlenaGridViewDataReaderSesionTabla(System.Data.SqlClient.SqlDataReader sqldr, GridView gv, Label lblTitulo, String DescripcionTitulo, Label lblMsj, ImageButton bt)
    {
        try
        {
            if (sqldr.HasRows)
            {
                System.Data.DataTable dt = new System.Data.DataTable();
                dt.Load(sqldr);

                System.Web.HttpContext.Current.Session["TablaDatos"] = dt;

                gv.DataSource = dt;
                gv.DataBind();
                gv.Caption = gv.Rows.Count + " registros ";
                lblTitulo.Text = DescripcionTitulo;
                LabelControl.LimpiaLabel(lblMsj);

                ImageButtonControl.HabilitaVisibilidadBotones(true, bt);

                if (dt.Rows.Count >= 20)
                {
                    gv.Caption = "Registros: " + dt.Rows.Count + " (Paginados de 20 en 20)";
                }
                else
                {
                    gv.Caption = "Registros: " + dt.Rows.Count;
                }//end if   
            }
            else
            {
                ImageButtonControl.HabilitaVisibilidadBotones(false, bt);
                GridViewControl.LimpiaGridview(gv);
                LabelControl.LimpiaLabel(lblTitulo);
                lblMsj.Text = FmkCartera.Generales.Mensaje.DevuelveMsj(2);

            }//end if
        }
        catch (Exception ex)
        {
            lblMsj.Text = ex.Message;

        }//end try       

    }//end void       

    public static Int32 ExtraeValorNumericoCelda(int valorCelda, string nombreCampo, GridViewUpdateEventArgs e, GridView gridview)
    {
        DataControlFieldCell cell = (DataControlFieldCell)gridview.Rows[e.RowIndex].Cells[valorCelda];
        BoundField field = (BoundField)cell.ContainingField;
        System.Collections.Specialized.OrderedDictionary dict = new System.Collections.Specialized.OrderedDictionary();
        field.ExtractValuesFromCell(dict, cell, DataControlRowState.Edit, true);
        return DataTypeCode.ConvertirAInt32(dict[nombreCampo].ToString().Replace("$", "").Trim());
    }

    public static Decimal ExtraeValorNumericoDecimalCelda(int valorCelda, string nombreCampo, GridViewUpdateEventArgs e, GridView gridview)
    {
        DataControlFieldCell cell = (DataControlFieldCell)gridview.Rows[e.RowIndex].Cells[valorCelda];
        BoundField field = (BoundField)cell.ContainingField;
        System.Collections.Specialized.OrderedDictionary dict = new System.Collections.Specialized.OrderedDictionary();
        field.ExtractValuesFromCell(dict, cell, DataControlRowState.Edit, true);
        return DataTypeCode.ConvertirADecimal(dict[nombreCampo].ToString().Replace("$", "").Trim());
    }//Decimal

    public static Decimal ExtraeValorNumericoDecimalCelda(int valorCelda, string nombreCampo, int rowIndex, GridView gridview)
    {
        DataControlFieldCell cell = (DataControlFieldCell)gridview.Rows[rowIndex].Cells[valorCelda];
        BoundField field = (BoundField)cell.ContainingField;
        System.Collections.Specialized.OrderedDictionary dict = new System.Collections.Specialized.OrderedDictionary();
        field.ExtractValuesFromCell(dict, cell, DataControlRowState.Edit, true);
        return DataTypeCode.ConvertirADecimal(dict[nombreCampo].ToString().Replace("$", "").Trim());
    }//Decimal

    public static Byte ExtraeValorNumericoByteCelda(int valorCelda, string nombreCampo, GridViewUpdateEventArgs e, GridView gridview)
    {
        DataControlFieldCell cell = (DataControlFieldCell)gridview.Rows[e.RowIndex].Cells[valorCelda];
        BoundField field = (BoundField)cell.ContainingField;
        System.Collections.Specialized.OrderedDictionary dict = new System.Collections.Specialized.OrderedDictionary();
        field.ExtractValuesFromCell(dict, cell, DataControlRowState.Edit, true);
        return DataTypeCode.ConvertirAByte(dict[nombreCampo].ToString().Replace("$", "").Trim());
    }  //Byte

    public static Int32 ExtraeValorNumericoCelda(int valorCelda, string nombreCampo, GridViewDeleteEventArgs e, GridView gridview)
    {
        DataControlFieldCell cell = (DataControlFieldCell)gridview.Rows[e.RowIndex].Cells[valorCelda];
        BoundField field = (BoundField)cell.ContainingField;
        System.Collections.Specialized.OrderedDictionary dict = new System.Collections.Specialized.OrderedDictionary();
        field.ExtractValuesFromCell(dict, cell, DataControlRowState.Edit, true);
        return DataTypeCode.ConvertirAInt32(dict[nombreCampo].ToString().Replace("$", "").Trim());
    }

    public static Byte ExtraeValorNumericoByteCelda(int valorCelda, string nombreCampo, GridViewDeleteEventArgs e, GridView gridview)
    {
        DataControlFieldCell cell = (DataControlFieldCell)gridview.Rows[e.RowIndex].Cells[valorCelda];
        BoundField field = (BoundField)cell.ContainingField;
        System.Collections.Specialized.OrderedDictionary dict = new System.Collections.Specialized.OrderedDictionary();
        field.ExtractValuesFromCell(dict, cell, DataControlRowState.Edit, true);
        return DataTypeCode.ConvertirAByte(dict[nombreCampo].ToString().Replace("$", "").Trim());
    }

    public static string ExtraeValorCelda(int valorCelda, string nombreCampo, GridViewUpdateEventArgs e, GridView gridview, int fila)
    {
        DataControlFieldCell cell = (DataControlFieldCell)gridview.Rows[fila].Cells[valorCelda];
        BoundField field = (BoundField)cell.ContainingField;
        System.Collections.Specialized.OrderedDictionary dict = new System.Collections.Specialized.OrderedDictionary();
        field.ExtractValuesFromCell(dict, cell, DataControlRowState.Edit, true);

        if (dict[nombreCampo] == null)
            return string.Empty;
        else
            return dict[nombreCampo].ToString().Replace("$", "").Trim();

    }//string

    public static string ExtraeValorCelda(int valorCelda, string nombreCampo, GridViewUpdateEventArgs e, GridView gridview)
    {
        DataControlFieldCell cell = (DataControlFieldCell)gridview.Rows[e.RowIndex].Cells[valorCelda];
        BoundField field = (BoundField)cell.ContainingField;
        System.Collections.Specialized.OrderedDictionary dict = new System.Collections.Specialized.OrderedDictionary();
        field.ExtractValuesFromCell(dict, cell, DataControlRowState.Edit, true);

        if (dict[nombreCampo] == null)
            return string.Empty;
        else
            return dict[nombreCampo].ToString().Replace("$", "").Trim();

    }//string

    public static string ExtraeValorCelda(int valorCelda, string nombreCampo, GridViewDeleteEventArgs e, GridView gridview)
    {
        DataControlFieldCell cell = (DataControlFieldCell)gridview.Rows[e.RowIndex].Cells[valorCelda];
        BoundField field = (BoundField)cell.ContainingField;
        System.Collections.Specialized.OrderedDictionary dict = new System.Collections.Specialized.OrderedDictionary();
        field.ExtractValuesFromCell(dict, cell, DataControlRowState.Edit, true);

        if (dict[nombreCampo] == null)
            return string.Empty;
        else
            return dict[nombreCampo].ToString().Replace("$", "").Trim();

    }//string

    //Usado para Exportar a Excel y Paginacion
    public static void LlenaGridViewDataReaderSesionTabla(System.Data.SqlClient.SqlDataReader sqldr, GridView gv, Label lblTitulo, String DescripcionTitulo, Label lblMsj, ImageButton bt, String NombreSesion)
    {
        try
        {
            if (sqldr.HasRows)
            {
                System.Data.DataTable dt = new System.Data.DataTable();
                dt.Load(sqldr);                

                System.Web.HttpContext.Current.Session[NombreSesion] = dt;

                gv.DataSource = dt;
                gv.DataBind();
                gv.Caption = gv.Rows.Count + " registros ";
                lblTitulo.Text = DescripcionTitulo;
                LabelControl.LimpiaLabel(lblMsj);

                ImageButtonControl.HabilitaVisibilidadBotones(true, bt);

                if (dt.Rows.Count >= 20)
                {
                    gv.Caption = "Registros: " + dt.Rows.Count + " (Paginados de 20 en 20)";
                }
                else
                {
                    gv.Caption = "Registros: " + dt.Rows.Count;
                }//end if   
            }
            else
            {
                ImageButtonControl.HabilitaVisibilidadBotones(false, bt);
                GridViewControl.LimpiaGridview(gv);
                LabelControl.LimpiaLabel(lblTitulo);
                lblMsj.Text = FmkCartera.Generales.Mensaje.DevuelveMsj(2);

            }//end if
        }
        catch (Exception ex)
        {
            lblMsj.Text = ex.Message;

        }//end try       

    }//end void       

    //Usado solo para Paginacion
    public static void LlenaGridViewDataReaderSesionTabla(System.Data.SqlClient.SqlDataReader sqldr, GridView gv, Label lblTitulo, String DescripcionTitulo, Label lblMsj,  String NombreSesion)
    {
        try
        {
            if (sqldr.HasRows)
            {
                System.Data.DataTable dt = new System.Data.DataTable();
                dt.Load(sqldr);

                System.Web.HttpContext.Current.Session[NombreSesion] = dt;

                gv.DataSource = dt;
                gv.DataBind();
                gv.Caption = gv.Rows.Count + " registros ";
                lblTitulo.Text = DescripcionTitulo;
                LabelControl.LimpiaLabel(lblMsj);
               
                if (dt.Rows.Count >= 20)
                {
                    gv.Caption = "Registros: " + dt.Rows.Count + " (Paginados de 20 en 20)";
                }
                else
                {
                    gv.Caption = "Registros: " + dt.Rows.Count;
                }//end if   
            }
            else
            {                
                GridViewControl.LimpiaGridview(gv);
                LabelControl.LimpiaLabel(lblTitulo);
                lblMsj.Text = FmkCartera.Generales.Mensaje.DevuelveMsj(2);

            }//end if
        }
        catch (Exception ex)
        {
            lblMsj.Text = ex.Message;

        }//end try       

    }//end void       

   /* Ejemplo:
          int[] columnas = { 0 }; //Oculta la columna de Id
          GridViewControl.MostrarOcultarColumnas(gvUsuarios, columnas, false);  */
    public static void MostrarOcultarColumnas(GridView gridview, int[] columnas, bool mostrarOcultar)
    {
        //Iterar por las columnas del DataGid
        for (int x = 0; x <= gridview.Columns.Count - 1; x++)
        {
            //Ocultar las columnas indicadas del Gridview indicadas en el Array
            for (int i = 0; i < columnas.Length; i++)
            {
                if (x == columnas[i])
                {
                    gridview.Columns[x].Visible = mostrarOcultar;
                }//if

            }//for      

        }//for

    }//void

     public static void MostrarOcultarColumnas(GridView gridview, GridViewRowEventArgs e, int[] columnas, bool mostrarOcultar)
    {      
            for (int i = 0; i < columnas.Length; i++)
            {                                    
                    e.Row.Cells[i].Visible = mostrarOcultar;
                                   
            }//for      
 
    }//void

    public static void AlinearCeldas(Byte columnas, GridView gv, HorizontalAlign alineacion)
    {           
        for (int r = 0; r <= gv.Rows.Count - 1; r++)
        {
            for (int c = 0; c <= columnas; c++)
            {
                gv.Rows[r].Cells[c].HorizontalAlign = alineacion;

            }//for

        }//for             

    }//void

    public static void AlinearCeldas(Byte columnas, GridView gv, VerticalAlign alineacion)
    {
        for (int r = 0; r <= gv.Rows.Count - 1; r++)
        {
            for (int c = 0; c <= columnas; c++)
            {
                gv.Rows[r].Cells[c].VerticalAlign = alineacion;

            }//for

        }//for             

    }//void

    public static decimal ObtenSumaUltimaColumna(GridView gv, Int32? ultimaColumna, string nombreColumna)
    {
        decimal sumaTotales = 0.0M;
        decimal total = 0.0M;  

        for (int r = 0; (r <= (GridViewControl.ObtenCantidadFilas(gv) - 1)); r++)
        {
            for (int c = 0; c <= ultimaColumna; c++)
            {
                if ((c == ultimaColumna))
                {
                    total = GridViewControl.ExtraeValorNumericoDecimalCelda(DataTypeCode.ConvertirAInt32(ultimaColumna.ToString()), nombreColumna, r, gv);
                    sumaTotales = (sumaTotales + ((Decimal)(total)));

                }//if

            }//for

        }//for         

        return sumaTotales;

    }//void

}//end class