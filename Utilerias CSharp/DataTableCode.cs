//Web Developer: Ricardo Rangel Ramírez
//Contacto: riccardorangel@hotmail.com   
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;


    public class DataTableCode
    {
        public static bool VerificaExistenciaDatosTabla(DataTable tabla)
        {
            if (tabla.Rows.Count > 0)
            {
                return true;
            }

            return false;

        }//bool       

    }//class

     public static int ObtenCantidadFilas(DataTable tabla)
    {
        if (tabla.Rows.Count > 0)
        {
            return tabla.Rows.Count;
        }

        return 0;

    }//int

    public static int QuitaColumnas(DataTable tabla, int columnas)
    {
        if (tabla.Columns.Count > 0)
        {
            return tabla.Columns.Count - columnas;
        }

        return tabla.Columns.Count;

    }//int

    public static int AgregaColumnas(DataTable tabla, int columnas)
    {
        if (tabla.Columns.Count > 0)
        {
            return tabla.Columns.Count + columnas;
        }

        return tabla.Columns.Count;

    }//int


