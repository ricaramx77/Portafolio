//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System.Web.UI.WebControls;
using EntitiesFC;
using System.Collections.Generic;
using System.Web;
using System;

public class ListCode
{
    public static void AgregaElementosAListas(System.Data.SqlClient.SqlDataReader sqldr, params ListBox[] oListBox)
    {
        try
        {         
            if (sqldr.HasRows)
            {
                while (sqldr.Read())
                {
                    for (int x = 0; x <= oListBox.Length - 1; x++)
                    {                        
                        ListItem obj = new ListItem();
                        obj.Value = sqldr.GetValue(0).ToString();
                        obj.Text = sqldr.GetValue(1).ToString();                        
                        oListBox[x].Items.Add(obj);                         

                    }//end for                          

                }//end while 

                sqldr.Close();
                sqldr = null;

            }//end if            

        }
        catch (Exception ex)
        {
            throw new Exception("Se ha producido un error en el metodo AgregaElementosAListas " + ex.Message);

        }//end try        

    }//end void

    public static void LimpiaLista(params ListControl[] listcontrol)
    {
        for (int x = 0; x <= listcontrol.Length - 1; x++)
        {
            if ((listcontrol[x].Items.Count > 0))
            {
                listcontrol[x].Items.Clear();
            }

        }//end for   

    }//end void

    public static void EliminaElementosSeleccionados (ListBox oListBox)
    {
     List<ListItem> lstItemsNoSeleccionados = new List<ListItem>();

     foreach (ListItem liItems in oListBox.Items)
            {
                if (! liItems.Selected == true)
                {
                    lstItemsNoSeleccionados.Add(liItems);
                }//end if

            }//end foreach

            oListBox.Items.Clear();
            foreach (ListItem item in lstItemsNoSeleccionados)
            {
                oListBox.Items.Add(item);

            }//end foreach    

    }//end void

    public static void EliminaTodosLosElementos(ListBox oListBox)
    {
        oListBox.Items.Clear();

    }//end void   

    public static void AgregaElementosDeMultiplesTextBoxSeparadosPorGuion(ListBox oListBox, params TextBox[] oTextBox)
    {
        string y;
        y = String.Empty;      

        for (int x = 0; x <= oTextBox.Length - 1; x++)
        {
            if (oTextBox[x].Text != String.Empty)
            {
                if (x == 0)
                {
                    y = oTextBox[x].Text;
                }
                else 
                {
                    y += "--" + oTextBox[x].Text;
                }//end if                

            }//end if         

        }//end for  

        if (y != String.Empty) 
        {
            oListBox.Items.Add(y);

        }//end if        

    } //void

    public static void AgregaElementosDeMultiplesCadenasSeparadosPorGuion(ListBox oListBox, params string[] oCadena)
    {
        string y;
        y = String.Empty;

        for (int x = 0; x <= oCadena.Length - 1; x++)
        {
            if (oCadena[x] != String.Empty)
            {
                if (x == 0)
                {
                    y = oCadena[x];
                }
                else
                {
                    y += "--" + oCadena[x];
                }//end if                

            }//end if         

        }//end for  

        if (y != String.Empty)
        {                   
           oListBox.Items.Add(y);

        }//end if        

    } //void

    public static void HabilitaVisibilidadLista(bool p_Habilita, params ListBox[] lista)
    {
        for (int x = 0; x <= lista.Length - 1; x++)
        {
            lista[x].Visible = p_Habilita;
        }//end for     
 
    } //void

    public static void HabilitaDisponibilidadLista(bool p_Habilita, params ListBox[] lista)
    {
        for (int x = 0; x <= lista.Length - 1; x++)
        {
            lista[x].Enabled = p_Habilita;
        }//end for      
    } //void

    public static decimal SumaValoresListaConUnSeparador(ListBox oListBox, string separador)
    {
        Decimal x;
        x = 0;

        int i;
        for (i = 0; i <= oListBox.Items.Count - 1; i++)
        {

            int p = oListBox.Items[i].Text.LastIndexOf(separador);
            x += Convert.ToDecimal(oListBox.Items[i].Text.Substring(p + separador.Length));

        }//end for        

        return x;

    }//end void

    public static decimal SumaValoresEnMedioDeListaConDosSeparadores(ListBox oListBox, string separador)
    {
        Decimal x = 0;        
        String cadena = String.Empty;        
        int IndiceSeparador;        

        int i;
        for (i = 0; i <= oListBox.Items.Count - 1; i++)
        {
            //Obten cadena despues del separador
            IndiceSeparador = oListBox.Items[i].Text.IndexOf(separador);
            cadena = oListBox.Items[i].Text.Substring(IndiceSeparador + 2);

            //Obten Cadena antes del separador
            IndiceSeparador = cadena.IndexOf(separador);
            cadena = cadena.Substring(0, IndiceSeparador);

            x += Convert.ToDecimal(cadena);
         
        }//end for              

        return  x;        

    }//end void

    public static String CuentaElementosListaConLeyenda(ListBox oListBox)
    {       
        Int32 x;
        x = oListBox.Items.Count;

        if (x == 1)
        {
            return x.ToString() + " Elemento ";

        }
        else if (x > 1)
        {
            return x.ToString() + " Elementos ";

        }
        else if (x == 0)
        {
            return String.Empty;

        }

        return String.Empty;
                    
    }//end void

    public static Int32 ? CuentaElementosLista(ListBox oListBox)
    {
        Int32 x;
        x = oListBox.Items.Count;

        if (x >= 1)
        {
            return x;
        }
        else if (x == 0)
        {
            return 0;

        }//end if

        return null;

    }//end void

    public static bool VerificaExistenciaElemento(ListBox oListBox, String NuevoElemento)
    {   
            if ((oListBox.Items.Count > 0))
            {
                for (int x = 0; x <= oListBox.Items.Count - 1; x++)
                {                    
                    if (oListBox.Items[x].Text.Contains(NuevoElemento) == true)                        
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }                

                }//end for                      

            }
            else 
            {
             return false;

            }//end if      

            return false;

    }//end void

    public static bool VerificaAlgunElementoSeleccionado(ListBox oListBox)
    {
        if ((oListBox.Items.Count > 0))
        {
            for (int x = 0; x <= oListBox.Items.Count - 1; x++)
            {
                if (oListBox.Items[x].Selected == true)
                {
                    return true;
                }                

            }//end for                      

        }
        else
        {
            return false;

        }//end if      

        return false;

    }//end void

//<sumary>    
    //Extrae los elementos separados por algun caracter del elemento indicado
    //15-12345-7    
    //Devolverá:
    //[0] 15
    //[1] 12645
    //[7] 7
    //</sumary>
    //<param name="p_Lista"></param>
    //<param name="p_Indice"></param>
    //<param name="p_caracter"></param>
    // <remarks>
    // Asegurarse que hay un elemento en la lista
    //</remarks>    
    public static string[] ExtraerElementosSeparadosXCaracter(ListBox p_Lista,  Int16 p_indice, char p_caracter)
    {
        string[] oElementos = p_Lista.Items[p_indice].ToString().Split(p_caracter);                
        
        return oElementos;
    
    }//Array
    
}//end class
