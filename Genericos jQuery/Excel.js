/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                      *                                                     
* Autor: Ricardo Rangel Ramírez  (Towa)                                                                                *
*                                                                                                                      *                                                
* Fecha: 14/02/2017                                                                                                    *
*                                                                                                                      * 
* Descripcion: Script de métodos para archivos Excel                                                                   *
*                                                                                                                      *
*   Índice                                                                                                             *
* 	    - CargarArchivo() ---> Permite cargar la información de un excel a web                                         *
*                                                                                                                      *
*   Uso                                                                                                                *
*                                                                                                                      *
*            Excel.CargarArchivo("#divUbicacionesAltaOT",                                                              *
*                          "CargaArchivoUbicacionesOT",                                                                *
*                          formData,                                                                                   *
*                         "/SAI/Empresarial/Emision/DatosUbicaciones"                                                  *
*                                                                                                                      *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var Excel = (function () {

    function NuevoArchivo(panel, url, funcion) {   
        
        try {

            if (panel == null || panel == "" || panel == undefined ||
                url == null || url == "" || url == undefined) return;

                $(panel).load(url, funcion);

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }                  
    }   

    function CargaArchivo(panel, url, formData, estructuraDatos) {

        try {

            if (panel == null || panel == "" || panel == undefined ||                
                url == null || url == "" || url == undefined ||
                formData == null || formData == "" || formData == undefined) return;

            if (!$.isArray(estructuraDatos)) { return; };

            return $.ajax({
                url: url,
                type: "post",
                data: formData,
                async: false,
                contentType: false,
                processData: false,
                error: function (jqXHR, textStatus, errorThrown) {
                    MsgExcepcion(FormatoMensajeExcepcionAJAX(window.ExcepcionCargaArchivo,
                                                   nombreFuncion = "CargarArchivo",
                                                   descripcionError = errorThrown));
                }
            });

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
            return false;
        }
    }

    //Miembros públicos
    return {        
        CargaArchivo: CargaArchivo,
        NuevoArchivo: NuevoArchivo
    };
})();
