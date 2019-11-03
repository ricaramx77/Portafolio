/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
*                                                                                                                      *
* Autor: Ricardo Rangel (Towa)                                                                                         *
*                                                                                                                      *
* Fecha: 08/02/2017                                                                                                    *
*                                                                                                                      *
* Descripcion: Script de métodos para Modal                                                                            *
*                                                                                                                      *
* Requerimientos: Bootstrap 3, se utilia el método modal                                                               *
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

var Modal = (function () {
   
    function Mostrar(modal) {

        try {
            if (modal == null || modal == "" || modal == undefined) {
                return;
            }

            if ($.isArray(modal)) {
                for (var i = 0; i < modal.length; i = i + 1) {
                    $(modal[i]).modal("show");
                }

            } else {
                $(modal).modal("show");
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Ocultar(modal) {

        try {

            if (modal == null || modal == "" || modal == undefined) {
                return;
            }

            if ($.isArray(modal)) {
                for (var i = 0; i < modal.length; i = i + 1) {
                    $(modal[i]).modal("hide");
                }

            } else {
                $(modal).modal("hide");
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    //Miembros públicos
    return {     
        Mostrar: Mostrar,
        Ocultar: Ocultar
    };
})();

