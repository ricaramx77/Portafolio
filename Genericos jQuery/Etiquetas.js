
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*                                                                                                                      *
* Autor: Ricardo Rangel Ramírez (Towa)                                                                                 *
*                                                                                                                      *
* Fecha: 07/12/2016                                                                                                    *
*                                                                                                                      *
* Descripcion: Script de métodos para Etiquetas                                                                        *
*                                                                                                                      *
*   Índice                                                                                                             *
* 	    - LlenarEtiquetas(controlEtiqueta, controlValor)    --> Pobla etiqueta en base a el valor de un control.       *
*       - LimpiarEtiquetasXLista(lista, etiquetas)          --> Limpia un conjunto de etiquetas si no se ha            *
*                                                                   seleccionado algún elemento de la lista.           *
*       - LlenarEtiquetasConLeyenda(controlEtiqueta, controlValor, leyenda)                                            *
*                                                           --> Pobla etiqueta en base a el valor de un control y      * 
*                                                                   agrega una leyenda.                                *
*       - LlenarEtiquetaTextoConLeyenda(controlEtiqueta, controlValor, leyenda)                                        *
*                                                           --> Pobla etiqueta en base al texto introducido.           *
*                                                                                                                      *
*   Uso                                                                                                                *
*         Etiquetas.LlenarEtiquetas("#lblRamo", "#ddlRamo");                                                                     *
*         Etiquetas.LimpiarEtiquetasXLista("#ddlRamo", ["#lblRamo", "#lblSubRamo"]);                                             *
*         Etiquetas.LlenarEtiquetasConLeyenda("#lblRamo", "#ddlRamo", "Ramo");                                                   *
*         Etiquetas.LlenarEtiquetaTextoConLeyenda("#lblComision", "#txtcomision", "Comision");                                   *
*                                                                                                                      *
*                                                                                                                      *
*     var etiquetaClaveValorUbicacionesOT = {                                                                          *
*        NombreRazónSocial: "Grupo Ordas",
*        DescripciónBienAsegurado: "Esta es una decripción" }                                                          *                              
*                                                                                                                      *
*        LlenarEtiquetasClaveValor(etiquetaClaveValorUbicacionesOT, "#lblUbicacionOT");                                *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var Etiquetas = (function () {

    function LlenarEtiquetasClaveValor(estructuraDatos, controlEtiqueta) {

        try {

            var cadena = "";

            if ($.isArray(estructuraDatos)) {

                $.each(estructuraDatos[0], function (key, value) {
                    cadena = cadena + "<b>" + key + ": " + "</b>" + value + "<br\>"
                });

            }
            else if (typeof estructuraDatos === 'object') {

                $.each(estructuraDatos, function (key, value) {
                    cadena = cadena + "<b>" + key + ": " + "</b>" + value + "<br\>"
                });

            }
            else {
                return;
            }

            $(controlEtiqueta).html('');
            cadena = cadena.replace(/([A-Z])/g, " $1");
            $(controlEtiqueta).append(cadena)

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }
   
    function Mostrar(etiquetas) {

        try {
            if (etiquetas == null || etiquetas == "" || etiquetas == undefined)
                return;

            if ($.isArray(etiquetas)) {
                for (var i = 0; i < etiquetas.length; i = i + 1) {
                    $(etiquetas[i]).show();
                }

            } else {
                $(etiquetas).show();
            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Ocultar(etiquetas) {

        try {
            if (etiquetas == null || etiquetas == "" || etiquetas == undefined) {
                return;
            }

            if ($.isArray(etiquetas)) {

                //Ocultar etiquetas
                for (var i = 0; i < etiquetas.length; i = i + 1) {
                    $(etiquetas[i]).hide();
                }

            } else {
                $(etiquetas).hide();
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function LimpiarEtiquetasXLista(lista, etiquetas) {

        try {
            if (lista == null || lista == "" || lista == undefined ||
                etiquetas == null || etiquetas == "" || etiquetas == undefined)
                return;

            //Obten elemento seleccionado
            var elementoSeleccionado = $(lista).find("option:selected").text();

            //Verifica si el primer elemento seleccionado es "Seleccionar", indefinido o vacío
            if (elementoSeleccionado === "Seleccionar" ||
                elementoSeleccionado == undefined ||
                elementoSeleccionado == "") {

                //Verifica si enviaron array
                if ($.isArray(etiquetas)) {

                    //Limpia las etiquetas indicadas
                    for (var i = 0; i < etiquetas.length; i++) {
                        $(etiquetas[i]).text('');
                    }

                } else {
                    $(etiquetas).text('');
                }
            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function LlenarEtiquetaTextoConLeyenda(controlEtiqueta, controlValor, leyenda) {

        try {
            if (controlEtiqueta == null || controlEtiqueta == "" || controlEtiqueta == undefined ||
                controlValor == null || controlValor == "" || controlValor == undefined ||
                leyenda == null || leyenda == "" || leyenda == undefined)
                return;

            $(controlEtiqueta).text(leyenda + ": " + $(controlValor).val());

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }

    }

    function LlenarEtiquetasConLeyenda(controlEtiqueta, controlValor, leyenda) {

        try {
            if (controlEtiqueta == null || controlEtiqueta == "" || controlEtiqueta == undefined ||
                controlValor == null || controlValor == "" || controlValor == undefined ||
                leyenda == null || leyenda == "" || leyenda == undefined)
                return;

            //Obten el value del elemento seleccionado
            var elementoSeleccionado = $(controlValor).val();

            //Verifica si se ha seleccionado más de un elemento
            if (elementoSeleccionado.length > 1) {
                var str = "";

                $(controlValor + " option:selected").each(function () {
                    str += $(this).text() + " ";
                });

                textoSeleccionado = str;
            }
            else if (elementoSeleccionado.length == 0) //Si se ha quedado sin elementos
            {
                textoSeleccionado == "";
            }
            else //Un solo elemento seleccionado
            {
                textoSeleccionado = $(controlValor + ' option[value=' + elementoSeleccionado + ']')[0].text;
            }

            //Pobla etiqueta con el texto especificado
            $(controlEtiqueta).text(leyenda + ": " + textoSeleccionado);

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }

    }

    function LlenarEtiquetas(controlEtiqueta, controlValor) {

        try {
            if (controlEtiqueta == null || controlEtiqueta == "" || controlEtiqueta == undefined ||
                controlValor == null || controlValor == "" || controlValor == undefined)
                return;

            //Pobla etiqueta con el valor del control indicado
            $(controlEtiqueta).text($(controlValor).text());

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function LlenarEtiquetaValor(controlEtiqueta, valor) {

        try {
            if (controlEtiqueta == null || controlEtiqueta == "" || controlEtiqueta == undefined ||
                valor == null || valor == "" || valor == undefined)
                return;

            //Pobla etiqueta con el valor del control indicado
            $(controlEtiqueta).text(valor);

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Limpiar(etiqueta) {

        try {
            if (etiqueta == null || etiqueta == "" || etiqueta == undefined) {
                return;
            }

            if ($.isArray(etiqueta)) {

                //Limpia Textbox
                for (var i = 0; i < etiqueta.length; i = i + 1) {
                    $(etiqueta[i]).text("");
                }

            } else {
                $(etiqueta).text("");
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    //Miembros públicos
    return {
        LlenarEtiquetasClaveValor: LlenarEtiquetasClaveValor,       
        Mostrar: Mostrar,
        Ocultar: Ocultar,
        Limpiar: Limpiar,
        LimpiarEtiquetasXLista: LimpiarEtiquetasXLista,
        LlenarEtiquetaTextoConLeyenda: LlenarEtiquetaTextoConLeyenda,
        LlenarEtiquetasConLeyenda: LlenarEtiquetasConLeyenda,
        LlenarEtiquetas: LlenarEtiquetas,
        LlenarEtiquetaValor: LlenarEtiquetaValor
    };
})();


