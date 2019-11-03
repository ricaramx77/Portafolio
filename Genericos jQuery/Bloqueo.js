/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
*                                                                                                                      *
* Autor: Ricardo Rangel (Towa)                                                                                         *
*                                                                                                                      *
* Fecha: 01/03/2017                                                                                                    *
*                                                                                                                      *
* Descripcion: Script que permite bloquear página completa, o solo un elemento                                         *
*                                                                                                                      *
* Requerimientos: jQuery BlockUI                                                                                       *
*                                                                                                                      *
*   Índice                                                                                                             *
*       - MostrarModal(modal)          --> Permite mostrar modal                                                       *                          
*       - OcultarModal(modal)          --> Permite ocultar modal                                                       *
*                                                                                                                      *
*   Uso                                                                                                                *
*         Modal.Mostrar(["#seccionUbicacionesOTModal");                                                                *   
*         Modal.Ocultar("#seccionUbicacionesOTModal");                                                                 *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var Bloqueo = (function () {

    function BloquearElemento(elemento) {

        try {
            if (elemento == null || elemento == "" || elemento == undefined) {
                return;
            }

            if ($.isArray(elemento)) {
                for (var i = 0; i < elemento.length; i = i + 1) {                    
                    $(elemento[i]).block();
                }

            } else {
                $(elemento).block();
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function BloquearElementoConMensaje(elemento, mensaje) {

        try {
            if (elemento == null || elemento == "" || elemento == undefined) {
                return;
            }

            if ($.isArray(elemento)) {
                for (var i = 0; i < elemento.length; i = i + 1) {

                    $(elemento[i]).block({
                        message: '<h2>' + mensaje + '</h2>',
                        css: { border: '3px solid #a00', textAlign: 'center' }
                    });

                }

            } else {
                $(elemento).block({
                    message: '<h2>' + mensaje + '</h2>',
                    css: { border: '3px solid #a00', textAlign: 'center' }
                });
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function DesbloquearElemento(elemento) {

        try {

            if (elemento == null || elemento == "" || elemento == undefined) {
                return;
            }

            if ($.isArray(elemento)) {

                for (var i = 0; i < elemento.length; i = i + 1) {
                    $(elemento[i]).unblock();                   
                }

            } else {
                $(elemento).unblock();
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    //Miembros públicos
    return {
        BloquearElemento: BloquearElemento,
        BloquearElementoConMensaje: BloquearElementoConMensaje,
        DesbloquearElemento: DesbloquearElemento
    };
})();