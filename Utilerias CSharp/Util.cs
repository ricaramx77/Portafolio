using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
//de usr
using System.Globalization;
using Microsoft.VisualBasic;
using elGuille.info.Util.Conversion;
using System.Configuration;

namespace WebFC
{
    public static class Util
    {

        //BD producción server 205
        public const string cadenaConexion_FondoPrueba = "Data Source=192.168.0.205;Initial Catalog=Fondo_Prueba;User ID=UWeb;Password=*k73Nz+Dsk8g,2Q";
       // public const string cadenaConexion_FondoPrueba = ConfigurationManager.ConnectionStrings["CadenaConexionFC"].ConnectionString;
       public const string cadenaConexion_UsrApp = "Data Source=192.168.0.205;Initial Catalog=UsuariosApp;User ID=UWeb;Password=*k73Nz+Dsk8g,2Q";
       // public const string cadenaConexion_UsrApp = ConfigurationManager.ConnectionStrings["CadenaConexion_UsrApp"].ConnectionString;

        

        //BD local UWeb
       // public const string cadenaConexion_FondoPrueba = "Data Source=.;Initial Catalog=Fondo_Prueba;User ID=UWeb;Password=*k73Nz+Dsk8g,2Q";
        //public const string cadenaConexion_UsrApp = "Data Source=.;Initial Catalog=UsuariosApp;User ID=UWeb;Password=*k73Nz+Dsk8g,2Q";

        //DB Local Seguridad Integrada
  //  public const string cadenaConexion_FondoPrueba = "Data Source=.;Initial Catalog=Fondo_Prueba;Integrated Security=SSPI";
   // public const string cadenaConexion_UsrApp = "Data Source=.;Initial Catalog=UsuariosApp;Integrated Security=SSPI";
    
        
        //Recibe un numero string con formato y lo convierte a decimal
        //ToDecimal("$258,222.00")
        //salida= 258222 (le quita el formato)
        static public decimal ToDecimal(string Value)
        {
            if (Value.Length == 0)
                return 0;
            else
            {
             
                return Decimal.Parse(Value.Replace(" ", ""), NumberStyles.AllowThousands
              | NumberStyles.AllowDecimalPoint | NumberStyles.AllowCurrencySymbol | NumberStyles.AllowLeadingSign);

            }
        }

        public static string FormateaFechaAñoMesDia(string Fecha)
        {

            String FechaAñoMesDia="";

            if ((Fecha.Length == 10) && IsDate(Fecha))
            {
                FechaAñoMesDia = FechaAñoMesDia + Fecha.Substring(6, 4);//año
                FechaAñoMesDia = FechaAñoMesDia + "/" + Fecha.Substring(3, 2);//mes
                FechaAñoMesDia = FechaAñoMesDia + "/" + Fecha.Substring(0, 2);//dia
            }
            else
                 throw new Exception( "No es una fecha con el formato dd/mm/aaaa");

            return FechaAñoMesDia;

        }


        //uso: bool result = Util.IsNumeric("123");
        public static bool IsNumeric(object Expression)
        {
            bool isNum;
            double retNum;

            isNum = Double.TryParse(Convert.ToString(Expression), System.Globalization.NumberStyles.Any, System.Globalization.NumberFormatInfo.InvariantInfo, out retNum);
            return isNum;
        }


        /// <summary>
        /// Comprueba si el valor es una fecha.
        /// </summary>
        /// <param name="cadenaFecha"></param>
        /// <returns>Se comprueba en la Cultura es-MX (Mexico).</returns>
        static public Boolean IsDate(string cadenaFecha)
        {
            CultureInfo es = new CultureInfo("es-MX");//formato cultural
            DateTime fechaTemp;

            return DateTime.TryParseExact(cadenaFecha, "dd/MM/yyyy", es, DateTimeStyles.AdjustToUniversal, out fechaTemp);
        }

     

        /// <summary>
        /// Convierte una cadena en fecha. Si falla en la conversión devuelve la fecha actual.
        /// </summary>
        /// <param name="fecha"></param>
        /// <returns></returns>
        static public DateTime convierteEnFecha(string fecha)
        {
            CultureInfo es = new CultureInfo("es-MX");
            DateTime fechaTemp = DateTime.Now;

            if (DateTime.TryParseExact(fecha, "dd/MM/yyyy", es, DateTimeStyles.None, out fechaTemp) == false)
            { fechaTemp = DateTime.Now; }

            return fechaTemp;
        }

        static public Boolean EsSoloLetras(string pCadena)
        {
           
            Boolean OK = true;
            string strCaracter = "";
            int i = 0;

            // recorrer toda la cadena del user para verificar caracteres
            for (i = 1; i <= Equivalencias.Len(pCadena.Trim()); i++)
            {
                strCaracter = Equivalencias.Mid(pCadena.ToLower(), i, 1);
                if (!(Equivalencias.InStr("abcdefghijklmnñopqrstuvwxyz ", strCaracter) != 0))
                {
                                                       
                    OK = false;//truncar el recorrido
                    break;
                }
            }//for
            return OK;
        }


        static public Boolean EnviaEmail(string pEmailPara, string pSuject, string pBody)
        {
            
                Boolean EmailEnviadoOK = false;
                System.Net.Mail.MailMessage correo = new System.Net.Mail.MailMessage();

                //------------------------------------------------------------------------------------
                //De
                string strDe = null;
                strDe = System.Configuration.ConfigurationManager.AppSettings["cuenta_privada"].ToString();
                correo.From = new System.Net.Mail.MailAddress(strDe);

                //------------------------------------------------------------------------------------
                //Para
                //correo.To.Add(oNotificacion.Correo);
                correo.To.Add(pEmailPara);

                //------------------------------------------------------------------------------------
                //Datos del correo
                correo.Subject = pSuject;
                correo.Body = pBody;

                correo.IsBodyHtml = false;
                correo.Priority = System.Net.Mail.MailPriority.Normal;

                //------------------------------------------------------------------------------------
                //Envio del correo
                System.Net.Mail.SmtpClient smtp = new System.Net.Mail.SmtpClient();

                //Servidor de correo
                smtp.Host = System.Configuration.ConfigurationManager.AppSettings["servidor_correo"].ToString();

                string n1 = System.Configuration.ConfigurationManager.AppSettings["netcredencial1"].ToString();
                string n2 = System.Configuration.ConfigurationManager.AppSettings["netcredencial2"].ToString();

                //Autenticacion
                smtp.Credentials = new System.Net.NetworkCredential(n1, n2);

                //Envialo
                try
                {
                  
                    smtp.Send(correo);
                    EmailEnviadoOK = true;
                }
                catch (Exception ex)
                {
                  
                    throw new Exception(ex.Message);
                   
                }//try

             return EmailEnviadoOK;
        }




    }
}