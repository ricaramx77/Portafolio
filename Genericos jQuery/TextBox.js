/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                      *
* Autor: Ricardo Rangel Ramírez (Towa)                                                                                 *
*                                                                                                                      *
* Fecha: 05/12/2016                                                                                                    *
*                                                                                                                      *
* Descripcion: Script de métodos para textbox                                                                          *
*                                                                                                                      *
*   Índice                                                                                                             *
*      - LimpiaTextBox(textbox)                             --> Limpia una o varias cajas de texto.                    *      
*      - ValidaCaracteres(textbox, regex)                   --> Valida caracter por caracter introducido en cajas de   *
*                                                                   texto con respecto a un regex                      *
*      - ValidaTextBox(textbox)                             --> Valida que un textbox tenga datos                      *
*      - RestetMoneda(textbox)                       --> Resetea a $0.00 las cajas de texto.                           *
*      - RestetPorcentaje(textbox)                   --> Resetea a 0% las cajas de texto.                              *         
*      - AsignaValoresTextBox(textboxClaveValor)            --> Permite asignar una lista valores a cajas de texto.    *
*      - ConvertirTextoAMayusculas(textbox)                 --> Permite convertir el valor de una caja de texto a      *
*                                                           -->     Mayúsculas.                                        *
*      - ConvertirTextoAMayusculas(textbox)                 --> Permite convertir el valor de una caja de texto a      *
*                                                                   Minúsculas.                                        *
*      - TrimEnd(character, string)                         --> Elimina los carateres especificados al final de un     *
*                                                                   string.                                            *
*      - TrimStart(character, string)                       --> Elimina los carateres especificados al inicio de un    *
*                                                                   string.                                            *
*      - AsignarMascaraPorcentaje(textbox)                  --> Asigna la amscara de porcentaje a un texbox.           *
*      - ObtenerValorCondicional                            -->Permite obtener un valor en base a una condición        *
*      - Ocultar                                            --> Permite ocultar caja de texto                          *
*      - Mostrar                                            --> Permite mostrar caja de texto                          *
*      - DeterminarSiAplicaFormatoMoneda                    --> Determina si aplica formato moneda en base a si        *
*                                                               presionaron número                                     *
*                                                                                                                      *
*   Uso                                                                                                                *
*        TextBox.Limpiar(["#ddlGrupo", "#ddlSubGrupo", "#ddlDireccion", "#ddlContacto", "#ddlAsociado"]);              *
*        TextBox.ValidaCaracteres('#txtcomision', /^[a-zA-Z0-9]+$/);                                                   *
*        TextBox.ValidaTextBox('#txtcomision');                                                                        *
*        TextBox.AsignarValorTextBox("#UbicacionesOT_SumaAsegurada_Modal", e.data.record.SumaAsegurada);               *
*        TextBox.AsignarValores([{                                                                                     *
*                                       "#UbicacionesOT_Valor_Modal": e.data.record.Valor,                             *
*                                        "#UbicacionesOT_SumaAsegurada_Modal": e.data.record.SumaAsegurada}]);         *
*                                                                                                                      *
*        TextBox.AsignarValores({                                                                                      *
*            "#UbicacionesOT_Valor_Modal": e.data.record.Valor,                                                        *
*            "#UbicacionesOT_SumaAsegurada_Modal": e.data.record.SumaAsegurada                                         *
*        });                                                                                                           *
*                                                                                                                      *
*        TextBox.ConvertirTextoAMayusculas("#txtValor_UbicacionesOT");                                                 *
*        TextBox.ConvertirTextoAMinusculas("#txtValor_UbicacionesOT");                                                 *
*        TextBox.ObtenerValorCondicional("#txtSumAseguradaSubCober", "", "$0.00");                                     *
*        TextBox.Ocultar("#txtSumAseguradaSubCober");                                                                  *
*        TextBox.Mostrar("#txtSumAseguradaSubCober");                                                                  *
*                                                                                                                      *
*        - Para un arreglo de campos o listas                                                                          *
*          TextBox.ValidaListaCampoObligatorio(["txtCliente", "ddlDireccion"],["inpCliente", "selDireccion"],          *
*                                              ["divCnte", "divDir"])                                                  *
*                                                                                                                      *
*          objBool = true,  para remover la clase de un solo campo con el evento focus                                 *
*          objBool = false, para remover las clases de todos los campos con otro evento.                               *
*        - TextBox.RemoverClaseListaCampoObligatorio(["txtCliente", "ddlDireccion"], ["divCnte", "divDir"], true);     *
*        - TextBox.RemoverClaseListaCampoObligatorio(["txtFechaFin"], ["divFeFin"], false); -> se usa en evento change *
                                                                                               de la fecha de inicio   *
*        - Para un solo campo o lista                                                                                  *
*          TextBox.ValidaListaCampoObligatorio("txtCliente", "inpCliente", "divCnte")                                  *
*          TextBox.RemoverClaseListaCampoObligatorio("txtCliente","divCnte");                                          *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var TextBox = (function () {

    function ConvertirTextoAMayusculas(textbox) {

        try {

            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            if ($.isArray(textbox)) {

                for (var i = 0; i < textbox.length; i = i + 1) {

                    $(textbox[i]).keyup(function () {
                        $(this).val($(this).val().toUpperCase());
                    });

                }

            } else {

                $(textbox).keyup(function () {
                    $(this).val($(this).val().toUpperCase());
                });

            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }

    }

    function ConvertirTextoAMayusculasDataTable(celda) {
        try {

            if (celda == null || celda == "" || celda == undefined) {
                return;
            }

            if ($.isArray(celda)) {

                for (var i = 0; i < celda.length; i = i + 1) {

                    $(celda[i]).keyup(function () {
                        $(this).text($(this).text().toUpperCase());
                    });

                }

            } else {

                $(celda).keyup(function () {
                    $(this).text($(this).text().toUpperCase());
                });

            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }

    }

    function ConvertirTextoAMinusculas(textbox) {

        try {

            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            if ($.isArray(textbox)) {

                for (var i = 0; i < textbox.length; i = i + 1) {

                    $(textbox[i]).keyup(function () {
                        $(this).val($(this).val().toLowerCase());
                    });

                }

            } else {

                $(textbox).keyup(function () {
                    $(this).val($(this).val().toLowerCase());
                });

            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function ObtenerValor(textbox) {

        try {

            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            return $(textbox).val();

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }

    }

    function AsignarValores(textboxClaveValor) {
        var response = true
        try {

            if ($.isArray(textboxClaveValor)) {

                $.each(textboxClaveValor[0], function (key, value) {
                    $(key).val(value);
                });

            }
            else if (typeof textboxClaveValor === 'object') {

                $.each(textboxClaveValor, function (key, value) {
                    $(key).val(value);
                });

            }
            else {
                response =  false;
            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }

        return response;
    }

    function AsignarMascaraMoneda(textbox) {

        try {

            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            $(textbox).focus(function (event) {
                $(event.target).select();
            });

            $(textbox).keyup(function (event) {
                $(event.target).val(function (index, value) {
                    return value.replace(/[^0-9\.]+/g, "");
                });
            });

            $(textbox).blur(function (event) {
                $(event.target).val(function (index, value) {
                    if (value == "") {
                        return "$0.00";
                    }
                    else {
                        if ($.isNumeric(value)) {
                            return FormatoMonedaString(TrimStart("$", value));
                        }

                        return value;

                    }
                });
            });

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function AsignarMascaraMonedaTextoOpcional(textbox) {

        try {

            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            $(textbox).focus(function (event) {
                $(event.target).select();
            });

            $(textbox).blur(function (event) {
                $(event.target).val(function (index, value) {
                    if (value == "") {
                        return "";
                    }
                    else {
                        if ($.isNumeric(value)) {

                            if (parseFloat(value) > 0) {

                                var valueParse = parseFloat(value);
                                return FormatoMonedaString(TrimStart("$", valueParse.toString()));
                            }

                            return value;
                        }

                        return value;

                    }
                });
            });

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function AsignarMascaraPorcentaje(textbox) {

        try {

            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            $(textbox).keyup(function (event) {
                $(event.target).val(function (index, value) {
                    return value.replace(/[^0-9\.]+/g, "");
                });
            });

            $(textbox).blur(function (event) {
                $(event.target).val(function (index, value) {
                    var strReturn;

                    if (value == "") {
                        strReturn = "0";
                    }
                    else {
                        var strAux = TrimEnd('.', TrimEnd('%', value));
                        var floatAux = parseFloat(strAux);

                        if (floatAux > 30.00) {
                            strReturn = "0";
                            MsgAdvertencia(window.ExcepcionComision);
                        }
                        else {
                            strReturn = strAux;
                        }
                    }

                    return strReturn + "%";
                });
            });

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function QuitarMascaraPorcentaje(textbox) {

        try {

            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            if ($(textbox).val().indexOf('%') != -1) {
                return $(textbox).val().replace(/%/g, "");
            }

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function ValidarXLoMenosUnElemento(textbox) {

        try {
            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            if ($.isArray(textbox)) {

                var numeroIntroducidos = 0;

                for (var i = 0; i < textbox.length; i = i + 1) {

                    if ($(textbox[i]).val() != "" && $(textbox[i]).val() != null && $(textbox[i]).val() != undefined) {
                        numeroIntroducidos = numeroIntroducidos + 1;
                        return true;
                    }

                }

                if (numeroIntroducidos == 0) {
                    MsgAdvertencia(window.IntroduzcaElemento);
                    return false;
                }

            }

            return false;

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function RestetMoneda(textbox) {

        try {
            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            if ($.isArray(textbox)) {

                //Limpia Textbox
                for (var i = 0; i < textbox.length; i = i + 1) {
                    $(textbox[i]).val("$0.00");
                }

            } else {
                $(textbox).val("$0.00");
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function RestetPorcentaje(textbox) {

        try {
            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            if ($.isArray(textbox)) {

                //Limpia Textbox
                for (var i = 0; i < textbox.length; i = i + 1) {
                    $(textbox[i]).val("0%");
                }

            } else {
                $(textbox).val("0%");
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function ValidaTextBox(textbox) {

        try {
            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            if ($.isArray(textbox)) {
                for (var i = 0; i < textbox.length; i = i + 1) {

                    if ($(textbox[i]).val() == "" || $(textbox[i]).val() == null || $(textbox[i]).val() == undefined) {
                        return false;
                    }
                }

            } else {
                if ($(textbox).val() == "" || $(textbox).val() == null || $(textbox).val() == undefined) {
                    return false;
                }
            }

            return true;
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function ValidaTextBoxRangoFechasVigencia(textbox) {

        try {
            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            if ($.isArray(textbox)) {
                for (var i = 0; i < textbox.length; i = i + 1) {

                    if ($(textbox[i]).val() == "" || $(textbox[i]).val() == null || $(textbox[i]).val() == undefined) {
                        MsgAdvertencia(window.DatosCompletosRangoFechasVigencia);
                        return false;
                    }
                }

            } else {
                if ($(textbox).val() == "" || $(textbox).val() == null || $(textbox).val() == undefined) {
                    MsgAdvertencia(window.DatosCompletosRangoFechasVigencia);
                    return false;
                }
            }

            return true;
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function AsignarMascaraTelefono(textbox) {

        try {

            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            return $(textbox).mask('(00) 0000-0000');

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Limpiar(textbox) {

        try {
            if (textbox == null || textbox == "" || textbox == undefined) {
                return;
            }

            if ($.isArray(textbox)) {

                //Limpia Textbox
                for (var i = 0; i < textbox.length; i = i + 1) {
                    $(textbox[i]).val("");
                }

            } else {
                $(textbox).val("");
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function ValidaCaracteres(textbox, regex) {

        try {

            if (textbox == null || textbox == "" || textbox == undefined ||
                regex == null || regex == "" || regex == undefined) {
                return;
            }

            if ($.isArray(textbox)) {
                for (var i = 0; i < textbox.length; i = i + 1) {

                    $(textbox[i]).on("keypress", function (e) {
                        var valorActual = String.fromCharCode(e.which);
                        var valorFinal = $(this).val() + valorActual;

                        if (valorFinal.length > 0) {
                            if (!regex.test(valorFinal)) {
                                return false;
                            }
                            else {
                                return true;
                            }
                        };
                    });
                }

            } else {

                $(textbox).on("keypress", function (e) {
                    var valorActual = String.fromCharCode(e.which);
                    var valorFinal = $(this).val() + valorActual;

                    if (valorFinal.length > 0) {

                        if (!regex.test(valorFinal)) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    };
                });
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function TrimStart(character, string) {
        var startIndex = 0;

        while (string[startIndex] === character) {
            startIndex++;
        }

        return string.substr(startIndex);
    }

    function TrimEnd(character, string) {
        var intI = string.length - 1;

        for (; (intI >= 0) && string.charAt(intI) === character; intI = intI - 1);

        return string.substr(0, (intI + 1));
    }

    function FormatoMonedaString(value) {
        return FormatCurrency(value, 2, ".", "$", "");
    }


    /**
     * formats number into currency
     *
     * num      : the value to be formatted
     * dec      : the number of decimals to be returned
     * decChar  : the decimals seperator
     * pre      : string to prefix the result
     * post     : string to postfix the result
     **/
    function FormatCurrency(num, dec, decChar, pre, post) {
        var n = num.toString().split(decChar);
        return (pre || '') + n[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + (n.length > 1 ? decChar + n[1].substr(0, dec) : '.00') + (post || '');
    }

    function CompararValor(textbox, valor) {

        try {
            if (textbox == null || textbox == "" || textbox == undefined ||
                valor == null || valor == "" || valor == undefined) {
                return;
            }

            if ($(textbox).val() === valor) {
                return true
            }

            return false;

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function ObtenerValorCondicional(textbox, condicion, valor) {

        try {
            if (textbox == null || textbox == "" || textbox == undefined ||
                valor == null || valor == "" || valor == undefined) {
                return;
            }

            return $(textbox).val() == condicion ? valor : $(textbox).val();

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Ocultar(textbox) {

        try {
            if (textbox == null || textbox == "" || textbox == undefined)
                return;

            if ($.isArray(textbox)) {
                for (var i = 0; i < textbox.length; i = i + 1) {
                    $(textbox[i]).hide();
                }

            } else {
                $(textbox).hide();
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Mostrar(textbox) {

        try {
            if (textbox == null || textbox == "" || textbox == undefined)
                return;

            if ($.isArray(textbox)) {
                for (var i = 0; i < textbox.length; i = i + 1) {
                    $(textbox[i]).show();
                }

            } else {
                $(textbox).show();
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function VerificarSiEsNumerico(textbox) {

        try {
            if (textbox == null || textbox == "" || textbox == undefined)
                return;

            if ($.isNumeric($(textbox).val())) {
                return true;
            }

            return false

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };

    function VerificarSiEsMoneda(textbox) {

        try {

            if (textbox == null || textbox == "" || textbox == undefined)
                return;

            var regex = /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{1,2})?$/;

            if (regex.test($(textbox).val())) {
                return true;
            }

            return false;

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };

    function Habilitar(textbox) {
        try {
            if (textbox == null || textbox == "" || textbox == undefined)
                return;

            if ($.isArray(textbox)) {
                for (var x = 0; x < textbox.length; x = x + 1) {
                    $(textbox[x]).prop('disabled', false);
                }
            } else {
                $(textbox).prop('disabled', false);
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Inhabilitar(textbox) {
        try {
            if (textbox == null || textbox == "" || textbox == undefined)
                return;

            if ($.isArray(textbox)) {
                for (var x = 0; x < textbox.length; x = x + 1) {
                    $(textbox[x]).prop('disabled', true);
                }
            } else {
                $(textbox).prop('disabled', true);
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function ValidaListaCampoObligatorio(objId, objValidar, objDiv, objMsj, objBool) {

        if (objId == null || objId == "" || objId == undefined ||
            objValidar == null || objValidar == "" || objValidar == undefined ||
            objDiv == null || objDiv == "" || objDiv == undefined) {
            return;
        }

        var boolDatosCompletos = true;
        var inputs = '';
        var divs = '';

        if ($.isArray(objId) && $.isArray(objValidar) && $.isArray(objDiv)) {
            for (var intTxT = 0; intTxT < objId.length; intTxT = intTxT + 1) {

                if (objBool) {
                    if ($("#" + objId[intTxT]).val() == "" || $("#" + objId[intTxT]).val() == null || $("#" + objId[intTxT]).val() == undefined) {

                        inputs = document.getElementsByClassName(objValidar[intTxT]);
                        divs = document.getElementsByClassName(objDiv[intTxT]);

                        TextBox.AddEtiquetaValidacion(objId[intTxT], divs[0], objMsj, objBool);

                        boolDatosCompletos = false;
                    }
                } else {

                    inputs = document.getElementsByClassName(objValidar[intTxT]);
                    divs = document.getElementsByClassName(objDiv[intTxT]);

                    TextBox.AddEtiquetaValidacion(objId[intTxT], divs[0], objMsj, objBool);

                    boolDatosCompletos = false;
                }
            }

            return boolDatosCompletos;

        } else {
            if ($("#" + objId).val() == "" || $("#" + objId).val() == null || $("#" + objId).val() == undefined) {

                inputs = document.getElementsByClassName(objValidar);
                divs = document.getElementsByClassName(objDiv);

                TextBox.AddEtiquetaValidacion(objId, divs[0], objMsj);

                boolDatosCompletos = false;
            } else {

                inputs = document.getElementsByClassName(objValidar);
                divs = document.getElementsByClassName(objDiv);

                TextBox.AddEtiquetaValidacion(objId, divs[0], objMsj);

                boolDatosCompletos = false;
            }

            return boolDatosCompletos;
        }
    };

    function AddEtiquetaValidacion(objId, objDiv, objMsj, objBool) {

        if (objId == null || objId == "" || objId == undefined
            || objDiv == null || objDiv == "" || objDiv == undefined) {
            return;
        }

        try {
            var campoVacio = '';
            var valida = '';
            var contDiv = '';
            var ulId = '';
            var newUlTool = '';

            if (objMsj == "" || objMsj == null) {
                campoVacio = window.CampoRequerido;
            }
            else {
                campoVacio = objMsj.toString();
            }

            ulId = 'msj' + objDiv.id;
            valida = document.getElementById(ulId);

            if (objBool) {
                if ($("#" + objId).val() == "" || $("#" + objId).val() == null || $("#" + objId).val() == undefined) {

                    if (valida == null) {
                        contDiv = document.getElementById(objDiv.id);
                        newUlTool = document.createElement('ul');
                        newUlTool.setAttribute('id', ulId);
                        newUlTool.setAttribute('class', 'parsley-error-list filled');
                        newUlTool.innerHTML = '<li class="">' + campoVacio + '</li>';
                        contDiv.appendChild(newUlTool);

                        return false;
                    }
                    else {
                        

                        $(valida).addClass('filled');

                        return false;
                    }

                    return true;
                }
            } else {

                if (valida == null) {
                    contDiv = document.getElementById(objDiv.id);
                    newUlTool = document.createElement('ul');
                    newUlTool.setAttribute('id', ulId);
                    newUlTool.setAttribute('class', 'parsley-error-list filled');
                    newUlTool.innerHTML = '<li class="">' + campoVacio + '</li>';
                    contDiv.appendChild(newUlTool);

                    return false;
                }
                else {                    
                    var el = valida.getElementsByTagName("li");
                    for (var i = 0; i < el.length; i++) {
                        el[i].innerHTML = campoVacio;
                    }

                    $(valida).addClass('filled');

                    return false;
                }

                return true;
            }
        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };

    function RemoverClaseListaCampoObligatorio(objId, objDiv, objBool) {

        if (objId == null || objId == "" || objId == undefined
            || objDiv == null || objDiv == "" || objDiv == undefined) {
            return;
        }

        if ($.isArray(objId) && $.isArray(objDiv)) {
            for (var intTxT = 0; intTxT < objId.length; intTxT = intTxT + 1) {

                var divs = document.getElementsByClassName(objDiv[intTxT]);

                if (objBool) {
                    TextBox.RemueveUnaEtiquetaValidacion(objId[intTxT], divs[0]);
                } else {
                    TextBox.RemueveTodasEtiquetasValidacion(objId[intTxT], divs[0]);
                }
            }
        } else {
            var divs = document.getElementsByClassName(objDiv);

            TextBox.RemueveUnaEtiquetaValidacion(objId, divs[0]);
        }
    };

    function RemueveUnaEtiquetaValidacion(objValidar, objDiv) {

        if (objValidar == null || objValidar == "" || objValidar == undefined
            || objDiv == null || objDiv == "" || objDiv == undefined) {
            return;
        }

        try {
            $("#" + objValidar).focus(function () {

                var ulId = 'msj' + objDiv.id;
                var valida = document.getElementById(ulId);

                if ($(valida).hasClass('filled')) {

                    $(valida).removeClass('filled');

                    return;
                }
            });

            return;
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };

    function RemueveTodasEtiquetasValidacion(objId, objDiv) {

        if (objId == null || objId == "" || objId == undefined
            || objDiv == null || objDiv == "" || objDiv == undefined) {
            return;
        }

        try {
            var ulId = 'msj' + objDiv.id;
            var valida = document.getElementById(ulId);

            if ($(valida).hasClass('filled')) {

                $(valida).removeClass('filled');

                return;
            }

            return;
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };
	
	function ValidarRegex(textbox, regex, mensaje) {
 
        if (textbox == null || textbox == "" || textbox == undefined) {
            return;
        }
 
        try {  
 
            var value;
 
            if ($.isArray(textbox)) {               
 
                for (var i = 0; i < textbox.length; i = i + 1) {
 
                    value = $(textbox[i]).val();
 
                    if (value != "") {
                        if (!regex.test(value)) {
                            swal(
                                'Error en campo',
                                mensaje,
                                'warning'
                            )
                            $(textbox).val("");
                            return false;
                        }
                    }                   
                }
 
                return true;
 
            }
            else {
 
                value = $(textbox).val();
 
                if (value != "") {
                    if (!regex.test(value)) {
                        swal(
                            'Error en campo',
                            mensaje,
                            'warning'
                        )
                        $(textbox).val("");
                        return false;
                    }
                }
               
                return true;
            }                      
        }
        catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    };
	
	function ValidarRango(textbox1, textbox2) {
 
        try {
 
            if (textbox1 == null || textbox1 == "" || textbox1 == undefined ||
                textbox2 == null || textbox2 == "" || textbox2 == undefined)
                return;
 
            var valor1 = parseFloat($(textbox1).val());
            var valor2 = parseFloat($(textbox2).val());           
 
            if (valor2 > valor1) {
                swal(
                    'El valor final no puede ser mayor al inicial',
                    'Operación inválida',
                    'warning'
                )
                return true;
            }
 
            return false;
 
        } catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    }
	
	function VerificarSiCampoFaltante(textbox) {
 
        try {
            if (textbox == null || textbox == "" || textbox == undefined)
                return;
 
            if ($.isArray(textbox)) {
 
                for (var x = 0; x < textbox.length; x = x + 1) {
 
                    if ($.trim($(textbox[x]).val()) == "") {                                                  
                        return $(textbox[x]).attr("name");
                    }                                      
                }
            } else {
 
                if ($.trim($(textbox).val()) == "") {                                      
                    return $(textbox).attr("name");
                }
 
                return false               
            }         
 
        } catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    }       
 
	function VerificarSiVacio(textbox) {
 
        try {
            if (textbox == null || textbox == "" || textbox == undefined)
                return;
 
            if ($.isArray(textbox)) {
 
                for (var x = 0; x < textbox.length; x = x + 1) {
 
                    if ($.trim($(textbox[x]).val()) == "") {
                        return true;
                    }
                }
            } else {
 
                if ($.trim($(textbox).val()) == "") {
                    return true;
                }
 
                return false
            }
 
        } catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    }

    //Miembros públicos
    return {
		AsignarValores: AsignarValores,
        AsignarMascaraMoneda: AsignarMascaraMoneda,
		AddEtiquetaValidacion: AddEtiquetaValidacion,
		AsignarMascaraPorcentaje: AsignarMascaraPorcentaje,
        AsignarMascaraTelefono: AsignarMascaraTelefono,
		AsignarMascaraMonedaTextoOpcional: AsignarMascaraMonedaTextoOpcional,
        ConvertirTextoAMayusculas: ConvertirTextoAMayusculas,
        ConvertirTextoAMayusculasDataTable: ConvertirTextoAMayusculasDataTable,
        ConvertirTextoAMinusculas: ConvertirTextoAMinusculas,
		CompararValor: CompararValor,         
		FormatoMonedaString: FormatoMonedaString,
		Habilitar: Habilitar,
        Inhabilitar: Inhabilitar, 
		Limpiar: Limpiar,   
		Mostrar: Mostrar,		
		ObtenerValor: ObtenerValor,  
		Ocultar: Ocultar,	
		ObtenerValorCondicional: ObtenerValorCondicional,				
		QuitarMascaraPorcentaje: QuitarMascaraPorcentaje,
        RestetMoneda: RestetMoneda,
        RestetPorcentaje: RestetPorcentaje,                               	
        RemoverClaseListaCampoObligatorio: RemoverClaseListaCampoObligatorio,
        RemueveUnaEtiquetaValidacion: RemueveUnaEtiquetaValidacion,
        RemueveTodasEtiquetasValidacion: RemueveTodasEtiquetasValidacion,
		TrimEnd: TrimEnd,
        TrimStart: TrimStart,        
		ValidaTextBox: ValidaTextBox,
		ValidarRegex: ValidarRegex,
		VerificarSiEsNumerico: VerificarSiEsNumerico,
        VerificarSiEsMoneda: VerificarSiEsMoneda,        
		ValidaCaracteres: ValidaCaracteres,                 		
		ValidarXLoMenosUnElemento: ValidarXLoMenosUnElemento,
		ValidaListaCampoObligatorio: ValidaListaCampoObligatorio,
		ValidaTextBoxRangoFechasVigencia: ValidaTextBoxRangoFechasVigencia,
		ValidarRango: ValidarRango,
		VerificarSiCampoFaltante: VerificarSiCampoFaltante,
		VerificarSiVacio: VerificarSiVacio
    };
})();

