/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                      *                                                     
* Autor: Ricardo Rangel Ramírez  (Towa)                                                                                *
*                                                                                                                      *                                                
* Fecha: 24/07/2016                                                                                                    *
*                                                                                                                      * 
* Descripcion: Script de métodos para paneles                                                                          *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var Slip = (function () {

    function Nuevo(boton) {

        try {
            if (boton == null || boton == "" || boton == undefined) return;

            $(boton).removeClass("btn-success");
            $(boton).attr("disabled", false);
            $(boton).addClass("btn-secondary");
            $(boton).html("Cargar Archivo");           

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }
    
    function Load(boton, icono) {

        try {
            if (boton == null || boton == "" || boton == undefined) return;

            $(boton).removeClass("btn-secondary");
            $(boton).addClass("btn-success");
            $(boton).attr("disabled", true);
            $(boton).html("<span class='glyphicon " + icono + "'></span>");

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }
   
    //Miembros públicos
    return {
        Load: Load,
        Nuevo: Nuevo
    };
})();
