using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI.WebControls;

public class DropDownListControl
{
  public static int ObtenCantidadElementosLista(DropDownList oDropDownList)
  {
             return oDropDownList.Items.Count;
                             
   }//int

     public static bool VerificaAlgunElementoSeleccionado(params DropDownList[] oDropDownList)
        {
            for (int x = 0; x <= oDropDownList.Length - 1; x++)
            {
                if (oDropDownList[x].SelectedIndex > 0)
                {
                    return true;
                }
            }//end for              

            return false;

        }//end bool  

 public static bool VerificaElementoSeleccionado(DropDownList oDropDownList, string p_Elemento)
        {
            if (oDropDownList.SelectedItem.Text.ToUpper() == p_Elemento.ToUpper())
            {
                return true ;
            }

            return false;

        }//end bool  

    public static void AgregaElementosAListaDesplegable(DropDownList dropDownList, params String[] oElementos)
    {
        for (int x = 0; x <= oElementos.Length - 1; x++)
            {
                ListItem obj = new ListItem();
                obj.Value = oElementos[x];
                obj.Text = oElementos[x];
                dropDownList.Items.Add(obj);

               // oDropDownList.Items.Add(oElementos[x]);                          

            }//end for                                               

    }//end void

    public static void ObtenLista(DropDownList ddl, System.Data.SqlClient.SqlDataReader dr)
    {        
        if ((ddl.Items.Count > 0))
        {
            ddl.Items.Clear();
        }//end if      

        try
        {
            ddl.Items.Add("--Seleccione--");
            if (!(dr == null))
            {           
                while (dr.Read())
                {
                    //Agrega elementos a la lista
                    ListItem newItem = new ListItem();
                    newItem.Value = dr.GetValue(0).ToString();
                    newItem.Text = dr.GetValue(1).ToString();
                    ddl.Items.Add(new ListItem(newItem.Text, newItem.Value));
                }

            } //end if;       
        }
        catch (Exception ex)
        {
            throw new Exception("Se ha producido un error en el metodo ObtenLista ", ex);

        }//end try        

    }//end ObtenLista    
    
    public static void ObtenListaConMultplesValores(DropDownList ddl, System.Data.SqlClient.SqlDataReader dr, string value, params string[] oCadena)
    {
        if ((ddl.Items.Count > 0))
        {
            ddl.Items.Clear();
        }//end if      

        try
        {
            string y;
            y = String.Empty;

            ddl.Items.Add("--Seleccione--");
            if (!(dr == null))
            {
                while (dr.Read())
                {
                    //Agrega elementos a la lista
                    ListItem newItem = new ListItem();
                    newItem.Value = dr[value].ToString();

                    for (int x = 0; x <= oCadena.Length - 1; x++)
                    {
                        if (oCadena[x] != String.Empty)
                        {
                            if (x == 0)
                            {
                                y = dr[oCadena[x]].ToString();

                            }
                            else
                            {
                                y += " -- " + dr[oCadena[x]].ToString();
                            }//end if                

                        }//end if         

                    }//end for  

                    newItem.Text = y;

                    ddl.Items.Add(new ListItem(newItem.Text, newItem.Value));
                }

            } //end if;       
        }
        catch (Exception ex)
        {
            throw new Exception("Se ha producido un error en el metodo ObtenListaConMultplesValores ", ex);

        }//end try        

    }//end void

    public static void ObtenListaSinLimpiar(DropDownList ddl, System.Data.SqlClient.SqlDataReader dr)
    {
        try
        {
              if (!(dr == null))
                {
                    // oListaColeccion = new ListaColeccion();
                    while (dr.Read())
                    {
                        //Agrega elementos a la lista
                        ListItem newItem = new ListItem();
                        newItem.Value = dr.GetValue(0).ToString();
                        newItem.Text = dr.GetValue(1).ToString();
                        ddl.Items.Add(new ListItem(newItem.Text, newItem.Value));
                    }

                } //end if;      
        }
        catch (Exception ex)
        {
            throw new Exception("Se ha producido un error en el metodo ObtenListaSinLimpiar ", ex);

        }//end try       

    }//end ObtenLista

    public static void SelecccionaPrimerElementoLista(params DropDownList[] dropdownList)
    {
        for (int x = 0; x <= dropdownList.Length - 1; x++)
        {
            dropdownList[x].SelectedIndex = 0;
        }//end for     

    }//end void      

    public static void HabilitaDisponilbilidadDropdownlist(bool p_Habilita, params DropDownList[] dropdownlist)
    {
        for (int x = 0; x <= dropdownlist.Length - 1; x++)
        {
            dropdownlist[x].Enabled = p_Habilita;

        }//end for      

    } //void     

    public static void HabilitaVisibilidadDropdownlist(bool p_Habilita, params DropDownList[] dropdownlist)
    {
       for (int x = 0; x <= dropdownlist.Length - 1; x++)
       {
           dropdownlist[x].Visible = p_Habilita;

       }//end for      

    } //void   

    public static void LimpiaDropDownList(params DropDownList[] dropdownlist)
    {
        for (int x = 0; x <= dropdownlist.Length - 1; x++)
        {
            if ((dropdownlist[x].Items.Count > 0))
            {
                dropdownlist[x].Items.Clear();
            }

        }//end for      

    }//end void     

    public static string ObtenValueString(params DropDownList[] dropdownlist) 
    {
        for (int x = 0; x <= dropdownlist.Length - 1; x++)
        {
            if ((dropdownlist[x].Items.Count > 0))
            {
                if (dropdownlist[x].SelectedIndex > 0 || dropdownlist[x].SelectedValue != String.Empty)
                {
                    if (dropdownlist[x].SelectedValue != "--Seleccione--")
                    {
                        return dropdownlist[x].SelectedValue;
                    }
                    else if (dropdownlist[x].SelectedValue == "--Seleccione--")
                    {
                        return null;
                    }
                    
                } //end if                           

            }//end if            

        }//end for  

        return null;
        
    }//end string

    public static Int32 ? ObtenValueInt32Nullable(params DropDownList[] dropdownlist)
    {
        for (int x = 0; x <= dropdownlist.Length - 1; x++)
        {
            if ((dropdownlist[x].Items.Count > 0))
            {               
                if (dropdownlist[x].SelectedIndex > 0 || dropdownlist[x].SelectedValue != String.Empty)
                {
                    if (dropdownlist[x].SelectedValue != "--Seleccione--")
                    {
                        return Convert.ToInt32(dropdownlist[x].SelectedValue);
                    }
                    else if (dropdownlist[x].SelectedValue == "--Seleccione--")
                    {
                        return null;
                    }

                } //end if     

            }//end if            

        }//end for  
         
        return null;

    }//end Int32

    public static Int32 ObtenValueInt32(params DropDownList[] dropdownlist)
    {
        for (int x = 0; x <= dropdownlist.Length - 1; x++)
        {
            if ((dropdownlist[x].Items.Count > 0))
            {
                if (dropdownlist[x].SelectedIndex > 0 || dropdownlist[x].SelectedValue != String.Empty)
                {
                    if (dropdownlist[x].SelectedValue != "--Seleccione--")
                    {
                        return Convert.ToInt32(dropdownlist[x].SelectedValue);
                    }
                    else if (dropdownlist[x].SelectedValue == "--Seleccione--")
                    {
                        return 0;
                    }

                } //end if     

            }//end if            

        }//end for  

        return 0;

    }//end Int32

    public static Int16 ? ObtenValueInt16Nullable(params DropDownList[] dropdownlist)
    {
        for (int x = 0; x <= dropdownlist.Length - 1; x++)
        {
            if ((dropdownlist[x].Items.Count > 0))
            {
                if (dropdownlist[x].SelectedIndex > 0 || dropdownlist[x].SelectedValue != String.Empty)
                {
                    if (dropdownlist[x].SelectedValue != "--Seleccione--")
                    {
                        return Convert.ToInt16(dropdownlist[x].SelectedValue);
                    }
                    else if (dropdownlist[x].SelectedValue == "--Seleccione--")
                    {
                        return null;
                    }

                } //end if     

            }//end if            

        }//end for  

        return null;

    }//Int16

    public static Int16 ObtenValueInt16(params DropDownList[] dropdownlist)
    {
        for (int x = 0; x <= dropdownlist.Length - 1; x++)
        {
            if ((dropdownlist[x].Items.Count > 0))
            {
                if (dropdownlist[x].SelectedIndex > 0 || dropdownlist[x].SelectedValue != String.Empty)
                {
                    if (dropdownlist[x].SelectedValue != "--Seleccione--")
                    {
                        return Convert.ToInt16(dropdownlist[x].SelectedValue);
                    }
                    else if (dropdownlist[x].SelectedValue == "--Seleccione--")
                    {
                        return 0;
                    }

                } //end if     

            }//end if            

        }//end for  

        return 0;

    }//Int16

    public static Byte ObtenValueByte(params DropDownList[] dropdownlist)
    {
        for (int x = 0; x <= dropdownlist.Length - 1; x++)
        {
            if ((dropdownlist[x].Items.Count > 0))
            {
                if (dropdownlist[x].SelectedIndex > 0 || dropdownlist[x].SelectedValue != String.Empty)
                {
                    if (dropdownlist[x].SelectedValue != "--Seleccione--")
                    {
                        return Convert.ToByte(dropdownlist[x].SelectedValue);
                    }
                    else if (dropdownlist[x].SelectedValue == "--Seleccione--")
                    {
                        return 0;
                    }

                } //end if     

            }//end if            

        }//end for  

        return 0;

    }//end Byte

    public static Byte? ObtenValueByteNullable(params DropDownList[] dropdownlist)
    {
        for (int x = 0; x <= dropdownlist.Length - 1; x++)
        {
            if ((dropdownlist[x].Items.Count > 0))
            {
                if (dropdownlist[x].SelectedIndex > 0 || dropdownlist[x].SelectedValue != String.Empty)
                {
                    if (dropdownlist[x].SelectedValue != "--Seleccione--")
                    {
                        return Convert.ToByte(dropdownlist[x].SelectedValue);
                    }
                    else if (dropdownlist[x].SelectedValue == "--Seleccione--")
                    {
                        return null;
                    }

                } //end if     

            }//end if            

        }//end for  

        return null;

    }//end Byte

    public static Boolean ObtenValueBoolean(params DropDownList[] dropdownlist)
    {
        for (int x = 0; x <= dropdownlist.Length - 1; x++)
        {
            if ((dropdownlist[x].Items.Count > 0))
            {
                if (dropdownlist[x].SelectedIndex > 0 || dropdownlist[x].SelectedValue != String.Empty)
                {
                    if (dropdownlist[x].SelectedValue != "--Seleccione--")
                    {
                        string valor = dropdownlist[x].SelectedValue;

                        if (valor == "0")
                        {
                            return false;
                        }
                        else if (valor == "1")
                        {
                            return true;
                        }
                    }
                    else if (dropdownlist[x].SelectedValue == "--Seleccione--")
                    {
                        return false;
                    }

                } //end if     

            }//end if            

        }//end for  

        return false;

    }//Boolean

    public static Boolean? ObtenValueBooleanNullable(params DropDownList[] dropdownlist)
    {
        for (int x = 0; x <= dropdownlist.Length - 1; x++)
        {
            if ((dropdownlist[x].Items.Count > 0))
            {
                if (dropdownlist[x].SelectedIndex > 0 || dropdownlist[x].SelectedValue != String.Empty)
                {
                    if (dropdownlist[x].SelectedValue != "--Seleccione--")
                    {
                        string valor =  dropdownlist[x].SelectedValue;

                        if (valor == "0")
                        {
                            return false;
                        }
                        else if (valor == "1")
                        {
                            return true;
                        }
                        
                    }
                    else if (dropdownlist[x].SelectedValue == "--Seleccione--")
                    {
                        return null;
                    }

                } //end if     

            }//end if            

        }//end for  

        return null;

    }//Boolean

    public static Decimal ? ObtenValueDecimal(params DropDownList[] dropdownlist)
    {
        for (int x = 0; x <= dropdownlist.Length - 1; x++)
        {
            if ((dropdownlist[x].Items.Count > 0))
            {
                if (dropdownlist[x].SelectedIndex > 0 || dropdownlist[x].SelectedValue != String.Empty)
                {
                    if (dropdownlist[x].SelectedValue != "--Seleccione--")
                    {
                        return Convert.ToDecimal(dropdownlist[x].SelectedValue);
                    }
                    else if (dropdownlist[x].SelectedValue == "--Seleccione--")
                    {
                        return null;
                    }

                } //end if     

            }//end if            

        }//end for  

        return null;

    }//end Byte

    public static string ObtenText(params DropDownList[] dropdownlist)
    {
        for (int x = 0; x <= dropdownlist.Length - 1; x++)
        {
            if ((dropdownlist[x].Items.Count > 0))
            {
                if (dropdownlist[x].SelectedIndex > 0)
                {
                    return dropdownlist[x].SelectedItem.Text ;
                } //end if                           

            }//end if            

        }//end for  

        return null;

    }//end string  

        //Compara varias cadenas contra el elemento seleccionado del DropDownList y si alguno coincide devuelve true
        public static bool ComparaCadenasConElementoSeleccionado(DropDownList dropdownlist,  params string[] cadena)
        {
            for (int x = 0; x <= cadena.Length - 1; x++)
            {
                if (dropdownlist.SelectedItem.Text == cadena[x])
                {
                    return true;

                } //end if                                           

            }//end for  

            return false;

        }//end bool

        public static void SeleccionaElementoXValor(string valor, params DropDownList[] dropdownList)
        {
            for (int x = 0; x <= dropdownList.Length - 1; x++)
            {
                dropdownList[x].SelectedValue = valor;

            }//for

        }//end void       

       //No utilizar este metodo, porque agrega un elemento a la lista, en vez de seleccionar el existente
        public static void SeleccionaElementoXTexto(string texto, params DropDownList[] dropdownList)
        {
            for (int x = 0; x <= dropdownList.Length - 1; x++)
            {
                dropdownList[x].SelectedItem.Text = texto;

            }//for

        }//end void  

    public static void SeleccionaElementoXValor(string valor,  DropDownList dropdownList)
        {
            dropdownList.SelectedValue = valor;

        }//end void   

       //No utilizar este metodo, porque agrega un elemento a la lista, en vez de seleccionar el existente
        public static void SeleccionaElementoXTexto(string texto,  DropDownList dropdownList)
        {
            dropdownList.SelectedItem.Text = texto;          

        }//end void           

  //public static void  OrdenaDropDownList(DropDownList dropDownList)
  //      {
  //          List<ListItem> listCopy = new List<ListItem>();
  //          foreach (ListItem item in dropDownList.Items)
  //              listCopy.Add(item);
  //          dropDownList.Items.Clear();
  //          foreach (ListItem item in listCopy.OrderBy(item => item.Text))
  //              dropDownList.Items.Add(item);

  //      }

        protected static void LoadList<T>(DropDownList ddlControl, IList<T> items, string dataValue, string dataDisplay,
                   bool addElement, string valueIni, string textIni)
        {
            ddlControl.DataValueField = dataValue;
            ddlControl.DataTextField = dataDisplay;
            ddlControl.DataSource = items;

            ddlControl.DataBind();

            if (addElement)
            {
                ddlControl.Items.Insert(0, new ListItem(textIni, valueIni));
            }
        }

        public static void FillControl<T>(DropDownList ddlControl, IList<T> items, string dataValue, string dataDisplay,
                bool addElement)
        {

            LoadList<T>(ddlControl, items, dataValue, dataDisplay, addElement, "0", "--Seleccione--");

        }

        public static void FillControl<T>(DropDownList ddlControl, IList<T> items, string dataValue, string dataDisplay,
            string valueIni, string textIni)
        {

            LoadList<T>(ddlControl, items, dataValue, dataDisplay, true, valueIni, textIni);

        }

}//end class
