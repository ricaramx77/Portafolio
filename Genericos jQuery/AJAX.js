/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                    *                                                     
* Autor: Ricardo Rangel Ramírez                                                                                      *
*                                                                                                                    *                                                
* Fecha: 03/03/2017                                                                                                  *
*                                                                                                                    * 
* Descripcion: Script de métodos para eqtiquetas                                                                     *
*                                                                                                                    *
*   Índice                                                                                                           *
*      - RequestPOST()                                      --> Permite realizar una petición AJAX POST              *
*                                                                                                                    *                                                                                                                  *
*   Uso                                                                                                              *

          Endosos.AJAXRequestGuardarEndosos = AJAX.RequestPOST("GuardarEndosos",
                                                                datos,
                                                                "GuardarEndosos");
*                                                                                                                    *   
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
AJAX = (function () {

    function RequestPOST(url, datos, funcion) {

        try {

            if (url == null || url == "" || url == undefined ||
                funcion == null || funcion == "" || funcion == undefined ||
                datos == null || datos == "" || datos == undefined) { return; }

            return $.ajax({
                    url: url,
                    type: "POST",
                    dataType: "json",
                    data: { datos: datos },                
                    headers: {
                        "EsPeticionAJAX": "True"
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        MsgExcepcion(FormatoMensajeExcepcionAJAX(window.ExcepcionFuncion,
                                     nombreFuncion = "RequestPOST",
                                     descripcionError = errorThrown));
                        }
                    })
                    .done(function () {
                    })
                    .success(function (result) {
                    })              

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    //Miembros públicos
    return {
        RequestPOST: RequestPOST
    };
})();