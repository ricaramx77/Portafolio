using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Win32;

namespace Steren.Franquicias.TarjetaLealtad.Comun
{
    public class Registro
    {
         public static string ObtenCadenaConexion() 
        {         
            string cadenaConexion = System.Configuration.ConfigurationManager.AppSettings["InicioCadenaConexion"].ToString();
            string reg_subKey = System.Configuration.ConfigurationManager.AppSettings["reg_subKey"].ToString();

            RegistryKey root = Registry.CurrentUser.CreateSubKey(reg_subKey);

            System.Collections.Specialized.NameValueCollection coleccion = new System.Collections.Specialized.NameValueCollection();
           
            foreach (string keyname in root.GetSubKeyNames())
            {
                using (RegistryKey key = root.OpenSubKey(keyname))
                {
                    string[] arreglo = key.GetValueNames();
                    Array.Sort(arreglo);

                    foreach (string valueName in arreglo)         
                    {                       
                        switch (valueName)
                        {                           
                            case "Data Source":
                                cadenaConexion += @"Data Source=" + key.GetValue(valueName).ToString() + ";";
                                break;
                            case "Initial Catalog":
                                cadenaConexion += "Initial Catalog=" + key.GetValue(valueName).ToString() + ";";
                                break;
                            case "User Id":
                                cadenaConexion += "User Id=" + key.GetValue(valueName).ToString() + ";";
                                break;
                            case "Password":
                                cadenaConexion += "Password=" + key.GetValue(valueName).ToString() + ";";
                                break;
                            default:
                                break;
                        }
                       
                    }//foreach

                    cadenaConexion += System.Configuration.ConfigurationManager.AppSettings["FinCadenaConexion"].ToString();
                }
            }

            return cadenaConexion;
        
        }//string    

    }//class

}//namespace
