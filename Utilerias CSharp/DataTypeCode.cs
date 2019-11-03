using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class DataTypeCode
{
    public static Int32 ConvertirAInt32(string cadena)
    {
        return int.Parse(cadena);

    }//Int32

    public static Int16 ConvertirAInt16(string cadena)
    {
        return Int16.Parse(cadena);

    }//Int16

    public static Int64 ConvertirAInt64(string cadena)
    {
        return Int64.Parse(cadena);

    }//Int64

    public static Decimal ConvertirADecimal(string cadena)
    {
        return Decimal.Parse(cadena);

    }//Int64

    public static Decimal ConvertirADecimal(int numero)
    {
        return Decimal.Parse(numero.ToString());

    }//Int64

}//class

