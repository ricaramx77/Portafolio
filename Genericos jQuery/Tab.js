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

var Tab = (function () {

    function Ocultar(tab) {

        try {
            if (tab == null || tab == "" || tab == undefined)
                return;

            if ($.isArray(tab)) {
                for (var i = 0; i < tab.length; i = i + 1) {
                    $(tab[i]).hide();
                }

            } else {
                $(tab).hide();
            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Mostrar(tab) {

        try {
            if (tab == null || tab == "" || tab == undefined)
                return;

            if ($.isArray(tab)) {
                for (var i = 0; i < tab.length; i = i + 1) {
                    $(tab[i]).show();
                }

            } else {
                $(tab).show();
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
