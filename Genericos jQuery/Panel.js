/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                      *                                                     
* Autor: Ricardo Rangel Ramírez  (Towa)                                                                                *
*                                                                                                                      *                                                
* Fecha: 20/12/2016                                                                                                    *
*                                                                                                                      * 
* Descripcion: Script de métodos para paneles                                                                          *
*                                                                                                                      *
*   Índice                                                                                                             *
* 	    - OcultarPaneles(panel) ---> Ocultar paneles                                                                   *
*       - MostrarPaneles(panel) --> Mostrar paneles                                                                    *
*                                                                                                                      *
*   Uso                                                                                                                *
*        Panel.Ocultar(["#panelAgregaAse", "#panelAgregaCont"]);                                                *
*        Panel.Mostrar(["#panelAgregaAse", "#panelAgregaCont"]);                                                *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var Panel = (function () {   

    function Ocultar(panel) {

        try {
            if (panel == null || panel == "" || panel == undefined)
                return;

            if ($.isArray(panel)) {
                for (var i = 0; i < panel.length; i = i + 1) {
                    $(panel[i]).hide();
                }

            } else {
                $(panel).hide();
            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Mostrar(panel) {

        try {
            if (panel == null || panel == "" || panel == undefined)
                return;

            if ($.isArray(panel)) {
                for (var i = 0; i < panel.length; i = i + 1) {
                    $(panel[i]).show();
                }

            } else {
                $(panel).show();
            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    //Miembros públicos
    return {      
        Ocultar: Ocultar,
        Mostrar: Mostrar
    };
})();
