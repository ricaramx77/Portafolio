/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                        *
* Autor: Jorge Pacheco Martínez                                          *
*                                                                        *
* Fecha: 30/05/2016                                                      *
*                                                                        *
* Descripcion: Script de métodos Ajax.                                   *
*                                                                        *
*   Índice                                                               *
        - FillddlGMMIncisos
        - FillddlParamJSon
        - SinParametros
*       - Fillddl() Llenado de un dropdown asíncrono                     *
* 	    - AjaxPost() Método genérico de carga asíncrona                  *
*       - imbuirEnModal() Método para abrir modal genérico imbuido en    *
                          la vista maestra _Layout.cshtml apartir de     *
                          un div o elemento html en cualquier otra vista *

Uso:

Función que permite llenar un dropdown list llamando un método Action del controllador de forma asíncrona.
Ejemplo de uso:  AjaxUtilities.FillddlGMMIncisos("#ddlGrupo","9","AXA");

/// Función que permite llenar un dropdown list llamando un método Action del controllador de forma asíncrona.
/// Ejemplo de uso:  AjaxUtilities.FillddlParamJSon("getGrupos", "65", "#ddlGrupo");

/// Función que permite llenar una caja de texto llamando un método Action del controllador de forma asíncrona.
/// Ejemplo de uso:  AjaxUtilities.SinParametros(metodo = "GetAsociadoList", contenedor = "#ddlAsociado");

/// Función que permite llenar un dropdown list llamando un método Action del controllador de forma asíncrona.
/// Ejemplo de uso:  AjaxUtilities.Fillddl("getGrupos", "65", "#ddlGrupo");

/// Función genérica para invocar un modal de bootstrap (Se encuentra en Views\Shared\_Layout.cshtml) 
/// e imbuir código html de otro elemento html en cualquier otra vista.
/// Ejemplo de uso:  imbuirEnModal('Mi titulo', '#div-cuerpo', '#div-botonera');
/// Donde: htmlFooter siempre lleva el boton cerrar.

// Método para generar petición post asincrona.
// Parámetros de entrada: Url, id de la forma a serializar y contenedor para el resultado.
// Forma de uso: AjaxPost("action", "#myForm", ".container")

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var idCliente = -1;

var AjaxUtilities = (function () {

    function FillddlGMMIncisos(contenedor, seleccionador, descripcion) {
        $(contenedor).append("<option selected value='" + seleccionador + "'>" + descripcion + "</option>");
        $(contenedor).selectpicker("refresh");
    }

    function FillddlParamJSon(metodo, sParametro, contenedor) {

        var coleccion = JSON.stringify(sParametro); //<------------------Convierte la colección a cadena

        $.ajax({
            type: "POST",
            url: metodo,
            //Formato Json /*NOTA: el nombre del argumento del método en el controlador debe llamarse "sParametros"*/       
            data: { sParametros: coleccion },
            success: function (respuesta) {

                for (var i = 0; i < respuesta.length; i++) {
                    //Los campos clave y descripcion corresponden a la entidad Tupla.
                    $(contenedor).append("<option value='" + respuesta[i].Clave + "'>" + respuesta[i].Descripcion + "</option>");
                }
            },

            //En caso de error
            error: function (jqXHR, textStatus, errorThrown) {

                Listas.InhabilitarXError(contenedor);
                MsgExcepcion(FormatoMensajeExcepcionAJAX(window.ExcepcionFuncion,
                                                   nombreFuncion = "FillddlParamJSon",
                                                   descripcionError = errorThrown));
            },
            complete: function () {                
                Listas.Actualizar(contenedor);
            }
        });
    }

    function SinParametros(metodo, contenedor) {

        $.ajax({
            type: "POST",
            url: metodo,
            success: function (respuesta) {

                for (var i = 0; i < respuesta.length; i++) {
                    //Los campos clave y descripcion corresponden a la entidad Tupla.
                    $(contenedor).append("<option value='" + respuesta[i].Clave + "'>" + respuesta[i].Descripcion + "</option>");
                }
            },

            //En caso de error
            error: function (jqXHR, textStatus, errorThrown) {

                Listas.InhabilitarXError(contenedor);                
                MsgExcepcion(FormatoMensajeExcepcionAJAX(window.ExcepcionFuncion,
                                                    nombreFuncion = "SinParametros",
                                                    descripcionError = errorThrown));
            },
            complete: function () {                
                Listas.Actualizar(contenedor);
            }
        });
    }

    function Fillddl(metodo, sParametro, contenedor) {

        $.ajax({
            type: "POST",
            url: metodo,
            //Formato Json /*NOTA: el nombre del argumento del método en el controlador debe llamarse "sParametros"*/
            data: { sParametros: sParametro },
            success: function (respuesta) {

                for (var i = 0; i < respuesta.length; i++) {
                    //Los campos clave y descripcion corresponden a la entidad Tupla.
                    $(contenedor).append("<option value='" + respuesta[i].Clave + "'>" + respuesta[i].Descripcion + "</option>");
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {

                Listas.InhabilitarXError(contenedor);
                MsgExcepcion(FormatoMensajeExcepcionAJAX(window.ExcepcionFuncion,
                                                  nombreFuncion = "Fillddl",
                                                  descripcionError = errorThrown));                
            },
            complete: function () {                
                Listas.Actualizar(contenedor);
            }
        });
    }

    function imbuirEnModal(strTitle, htmlBody, htmlFooter) {

        //La función obtiene el código html para agregarlo al cuerpo del modal.
        var title = "#txtTituloModal";
        var body = "#panelCuerpoModal";
        var footer = "#panelPieModal";

        //Actualiza etiqueta título.
        $(title).html("");
        $(title).html(strTitle);

        //Actualiza cuerpo de modal.
        $(body).html("");
        $(body).html($(htmlBody).html());

        //Agrega a pie de modal conservando el botón cerrar.
        $(footer).html("");
        $(footer).html($(htmlFooter).html());

    }

    function AjaxPost(url, forma, contenedor) {
        // Serializamos los parametros a enviar por post al controlador
        var parametro = $(forma).serialize();
        $.ajax({
            type: "POST",
            url: url,
            data: parametro,
            beforeSend: function () {
                //Cargando
                $(contenedor).html('<p id="pCargando" align="center">Cargando</p>');
            },
            success: function (response) {
                $("#pCargando").hide();  //Código html generado en beforeSend
                $(contenedor).html(response);
            },
            error: function (jqXHR, status, errorThrown) {
                if (errorThrown === "Not Found") {
                    errorThrown = errorThrown + ' page "<strong>' + url + '</strong>" ';
                }

                $(contenedor).html('<p align="center">Disculpe, existió un problema<br/>'
                                  + 'Estatus: ' + status + '<br/>'
                                  + 'jqXhr: ' + jqXHR.status + '<br/>'
                                  + 'Error: ' + errorThrown + '</P>');
            }
        });
    }

    //Miembros públicos
    return {
        FillddlGMMIncisos: FillddlGMMIncisos,
        FillddlParamJSon: FillddlParamJSon,
        SinParametros: SinParametros,
        Fillddl: Fillddl,
        imbuirEnModal: imbuirEnModal,
        AjaxPost: AjaxPost
    };
})();

