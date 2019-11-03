//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;
using EntitiesFC;
using System;

public class ComboAjaxControl
{
    public static void ObtenComboAjax(AjaxControlToolkit.ComboBox oComboAjax, System.Data.SqlClient.SqlDataReader dr)
    {
        if ((oComboAjax.Items.Count > 0))
        {
            oComboAjax.Items.Clear();
        }//end if      

        try
        {
            oComboAjax.Items.Add("--");
            if (!(dr == null))
            {
                while (dr.Read())
                {
                    //Agrega elementos a la lista
                    ListItem newItem = new ListItem();
                    newItem.Value = dr.GetValue(0).ToString();
                    newItem.Text = dr.GetValue(1).ToString();
                    oComboAjax.Items.Add(new ListItem(newItem.Text, newItem.Value));
                }

            } //end if;       
        }
        catch (Exception ex)
        {
            throw new Exception("Se ha producido un error en el metodo ObtenCombo ", ex);

        }//end try        

    }//end ObtenCombo 

       public static void HabilitaDisponilbilidadComboAjax(bool p_Habilita, params AjaxControlToolkit.ComboBox[] oComboAjax)
        {
            for (int x = 0; x <= oComboAjax.Length - 1; x++)
            {
                oComboAjax[x].Enabled = p_Habilita;

            }//end for      

        } //void     

       public static void LimpiaComboAjax(params AjaxControlToolkit.ComboBox[] oComboAjax)
        {
            for (int x = 0; x <= oComboAjax.Length - 1; x++)
            {
                if ((oComboAjax[x].Items.Count > 0))
                {
                    oComboAjax[x].Items.Clear();
                }

            }//end for      

        }//end void     

       public static string ObtenValueString(params AjaxControlToolkit.ComboBox[] oComboAjax)
        {
            for (int x = 0; x <= oComboAjax.Length - 1; x++)
            {
                if ((oComboAjax[x].Items.Count > 0))
                {
                    if (oComboAjax[x].SelectedIndex > 0 || oComboAjax[x].SelectedValue != String.Empty)
                    {
                        if (oComboAjax[x].SelectedValue != "--")
                        {
                            return oComboAjax[x].SelectedValue;
                        }
                        else if (oComboAjax[x].SelectedValue == "--")
                        {
                            return null;
                        }

                    } //end if                           

                }//end if            

            }//end for  

            return null;

        }//end string

       public static Int32? ObtenValueInt32(params AjaxControlToolkit.ComboBox[] oComboAjax)
        {
            for (int x = 0; x <= oComboAjax.Length - 1; x++)
            {
                if ((oComboAjax[x].Items.Count > 0))
                {
                    if (oComboAjax[x].SelectedIndex > 0 || oComboAjax[x].SelectedValue != String.Empty)
                    {
                        if (oComboAjax[x].SelectedValue != "--")
                        {
                            return Convert.ToInt32(oComboAjax[x].SelectedValue);
                        }
                        else if (oComboAjax[x].SelectedValue == "--")
                        {
                            return null;
                        }

                    } //end if     

                }//end if            

            }//end for  

            return null;

        }//end Int32

       public static Int16? ObtenValueInt16(params AjaxControlToolkit.ComboBox[] oComboAjax)
        {
            for (int x = 0; x <= oComboAjax.Length - 1; x++)
            {
                if ((oComboAjax[x].Items.Count > 0))
                {
                    if (oComboAjax[x].SelectedIndex > 0 || oComboAjax[x].SelectedValue != String.Empty)
                    {
                        if (oComboAjax[x].SelectedValue != "--")
                        {
                            return Convert.ToInt16(oComboAjax[x].SelectedValue);
                        }
                        else if (oComboAjax[x].SelectedValue == "--")
                        {
                            return null;
                        }

                    } //end if     

                }//end if            

            }//end for  

            return null;

        }//end Int32

       public static Byte? ObtenValueByte(params AjaxControlToolkit.ComboBox[] oComboAjax)
        {
            for (int x = 0; x <= oComboAjax.Length - 1; x++)
            {
                if ((oComboAjax[x].Items.Count > 0))
                {
                    if (oComboAjax[x].SelectedIndex > 0 || oComboAjax[x].SelectedValue != String.Empty)
                    {
                        if (oComboAjax[x].SelectedValue != "--")
                        {
                            return Convert.ToByte(oComboAjax[x].SelectedValue);
                        }
                        else if (oComboAjax[x].SelectedValue == "--")
                        {
                            return null;
                        }

                    } //end if     

                }//end if            

            }//end for  

            return null;

        }//end Int32

       public static string ObtenText(params AjaxControlToolkit.ComboBox[] oComboAjax)
        {
            for (int x = 0; x <= oComboAjax.Length - 1; x++)
            {
                if ((oComboAjax[x].Items.Count > 0))
                {
                    if (oComboAjax[x].SelectedIndex > 0)
                    {
                        return oComboAjax[x].SelectedItem.Text;
                    } //end if                           

                }//end if            

            }//end for  

            return null;

        }//end string  

}//end void

