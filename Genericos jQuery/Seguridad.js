/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                      *                                                     
 Autor: Ricardo Rangel Ramírez  (Towa), Jorge Montoya Marin (Towa), Janet Del Rio (Towa)                                                                  
*                                                                                                                      *                                                
 Fecha: 12/05/2017                                                                                                    
*                                                                                                                      * 
 Descripcion: Script de métodos para manejo de sesión en peticiones AJAX                                              
*                                                                                                                      *                                    
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

$(document).ajaxSend(function (event, jqxhr, settings) {
        if (settings.url != "subSessionValidate") {
            Seguridad.VerificarSesion(jqxhr);
        }
});

$(document).ready(function () {
    Seguridad.noBackButton();
});

var Seguridad = (function () {

    function VerificarSesion(jqXHR) {
        $.ajaxSetup({
            async: false
        });

        $.ajax({
            async: false,
            cache: false,
            type: "POST",
            url: "subSessionValidate",
            //En caso de error
            error: function (jqXHR, textStatus, errorThrown) {                
                MsgExcepcion(FormatoMensajeExcepcionAJAX(window.TiempoSesionExpirado,
                               nombreFuncion = "VerificarSesion",
                               descripcionError = errorThrown));
            },
            complete: function (result) {
                if (result.responseJSON != true) {
                    jqXHR.abort();
                    MuestraMensaje(function () { MsgAdvertenciaReload(window.TiempoSesionExpirado, true) });
                }
                $.ajaxSetup({
                    async: true
                });
            }
        });

    };

    function MuestraMensaje(ExecFunction) {
        var A = ExecFunction();
    }

    function noBackButton() {
        window.location.hash = "no-back-button";
        window.location.hash = "Again-No-back-button" //chrome
        window.onhashchange = function () {
            window.location.hash = "no-back-button";
        }
    }

    //Miembros públicos
    return {
        VerificarSesion: VerificarSesion,
        noBackButton: noBackButton
    };
})();