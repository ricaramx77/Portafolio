/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                      *                                                     
* Autor: Ricardo Rangel Ramírez  (Towa)                                                                                *
*                                                                                                                      *                                                
* Fecha: 06/04/2017                                                                                                    *
*                                                                                                                      * 
* Descripcion: Script de métodos para botones                                                                          *
*                                                                                                                      *
*   Índice                                                                                                             *
* 	    - Ocultar(boton) ---> Ocultar paneles                                                                          *
*       - Mostrar(boton) --> Mostrar paneles                                                                           *
*                                                                                                                      *
*   Uso                                                                                                                *
*        Boton.Ocultar(["#btnAgregaAse", "#btnAgregaCont"]);                                                           *
*        Boton.Mostrar(["#btnAgregaAse", "#btnAgregaCont"]);                                                           *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var Boton = (function () {

    function Ocultar(boton) {

        try {
            if (boton == null || boton == "" || boton == undefined)
                return;

            if ($.isArray(boton)) {
                for (var i = 0; i < boton.length; i = i + 1) {
                    $(boton[i]).hide();
                }

            } else {
                $(boton).hide();
            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Mostrar(boton) {

        try {
            if (boton == null || boton == "" || boton == undefined)
                return;

            if ($.isArray(boton)) {
                for (var i = 0; i < boton.length; i = i + 1) {
                    $(boton[i]).show();
                }

            } else {
                $(boton).show();
            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Habilitar(boton) {
        try {
            if (boton == null || boton == "" || boton == undefined)
                return;

            if ($.isArray(boton)) {
                for (var x = 0; x < boton.length; x = x + 1) {
                    $(boton[x]).prop('disabled', false);
                }
            } else {
                $(boton).prop('disabled', false);
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Inhabilitar(boton) {
        try {
            if (boton == null || boton == "" || boton == undefined)
                return;

            if ($.isArray(boton)) {
                for (var x = 0; x < boton.length; x = x + 1) {
                    $(boton[x]).prop('disabled', true);
                }
            } else {
                $(boton).prop('disabled', true);
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    //Miembros públicos
    return {
        Ocultar: Ocultar,
        Mostrar: Mostrar,
        Habilitar: Habilitar,
        Inhabilitar: Inhabilitar
    };
})();
