using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;

    public class DataGridControlCode
    {
        public static void HabilitaVisibilidadDataGrid(bool p_Habilita, params System.Web.UI.WebControls.DataGrid[] oDataGrid)
        {
            for (int x = 0; x <= oDataGrid.Length - 1; x++)
            {
                oDataGrid[x].Visible = p_Habilita;
            }//end for      
        } //void

        public static bool LlenaGridViewDataReader(System.Data.SqlClient.SqlDataReader sqldr, DataGrid datagrid  )
        {          
            if (sqldr.HasRows)
            {
                datagrid.DataSource = sqldr;
                datagrid.DataBind();
                datagrid.Caption = datagrid.Items.Count + " registros ";   
                
                return true;
                 
            }
            else
            {
                datagrid.DataSource = null;
                datagrid.DataBind();

                return false;

            }//if               

        }//end void 

        /* Ejemplo:
            int[] columnas = { 0 }; //Oculta la columna de Id
            DataGridControlCode.MostrarOcultarColumnas(dgUsuarios, columnas, false);  */
        public static void MostrarOcultarColumnas(DataGrid datagrid, int[] columnas, bool mostrarOcultar)
        {         
               //Iterar por las columnas del DataGid
            for (int x = 0; x <= datagrid.Columns.Count - 1; x++)
                {
                    //Ocultar las columnas indicadas del DataGrid indicadas en el Array
                    for (int i = 0; i < columnas.Length; i++)
                    {
                        if (x == columnas[i])
                        {
                            datagrid.Columns[x].Visible = mostrarOcultar;
                        }//if

                    }//for      

                }//for

        }//void

    }//class

