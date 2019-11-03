//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   

using System;
using System.Text;
using System.Collections.Specialized;

namespace Steren.Franquicias.TarjetaLealtad.Comun
{      
    public class Excepciones
    {                  
        /// <summary>
        /// Crea una estructura XML para el manejo de Expceciones
        /// </summary>
        /// <param name="claseOrigen"></param>
        /// <param name="metodoOrigen"></param>
        /// <param name="fechaHora"></param>
        /// <param name="descripcionError"></param>
        /// <param name="usuario"></param>
        /// <returns></returns>
      public  static StringBuilder CreaEstructuraXML(string clase, string metodo, string fechaHora, string descripcionError, string usuario)
     {
          
         string strExcepcionInicialXML = "<Excepcion>" + "\r\n";
         string strExcepcionFinalXML = "</Excepcion>" + "\r\n";

         string strClaseInicialXML = "<Clase>" + clase;
         string strClaseFinalXML = "</Clase>" +  "\r\n";

         string strMetodoInicioXML = "<Metodo>" + metodo;
         string strMetodoFinXML = "</Metodo>" + "\r\n";

         string strFechaInicioXML = "<FechaHora>" + fechaHora;
         string strFechaFinXML = "</FechaHora>" + "\r\n";

         string strDescInicioXML = "<DescripcionError>" + descripcionError;
         string strDescFinXML = "</DescripcionError>" + "\r\n";

         string strUsuarioInicioXML = "<Usuario>" + usuario;
         string strUsuarioFinXML = "</Usuario>" + "\r\n";

        //Acomo de tags
        
            SKUsXML.Append(strExcepcionInicialXML);

            SKUsXML.Append(strClaseInicialXML);
            SKUsXML.Append(strClaseFinalXML);

              SKUsXML.Append(strMetodoInicioXML);
              SKUsXML.Append(strMetodoFinXML);

              SKUsXML.Append(strFechaInicioXML);
              SKUsXML.Append(strFechaFinXML);

              SKUsXML.Append(strDescInicioXML);
              SKUsXML.Append(strDescFinXML);

              SKUsXML.Append(strUsuarioInicioXML);
              SKUsXML.Append(strUsuarioFinXML);

              SKUsXML.Append(strExcepcionFinalXML);
             
           return SKUsXML;

       }//end StringBuilder
 
    }//class  

}//namespace