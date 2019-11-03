/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                      *
* Autor: Ricardo Rangel Ramírez (Towa)                                                                                 *
*                                                                                                                      *
* Fecha: 18/01/2017                                                                                                    *
*                                                                                                                      *
* Descripcion: Script para manipulación de datos de cualquier Grid                                                     *
*                                                                                                                      *
* Requerimientos:                                                                                                      *
*      - Plugin jQuery.Grid                                                                                            *
*        http://gijgo.com/grid                                                                                         *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var jQueryGrid = (function () {

    function EliminarFilaXID(id, grid, url, estructuraDatos, funcion, campoId) {

        try {

            if (grid == null || grid == "" || grid == undefined ||
                url == null || url == "" || url == undefined ||
                campoId == null || campoId == "" || campoId == undefined ||
                funcion == null || funcion == "" || funcion == undefined) { return; }

            if (!$.isArray(estructuraDatos)) { return; };

            parametro = {};
            parametro[campoId] = id; //El campoId debe ser el mismo que recibe el action Method

            $.ajax({
                url: url,
                type: "POST",
                async: false,
                data: parametro,
                error: function (jqXHR, textStatus, errorThrown) {
                    MsgExcepcion(FormatoMensajeExcepcionAJAX(window.ExcepcionFuncion,
                                 nombreFuncion = funcion,
                                 descripcionError = errorThrown));
                }
            })
              .done(function () {

                  for (var i = estructuraDatos.length - 1; i >= 0 ; i--) {
                      if (estructuraDatos[i][campoId] == id) {
                          estructuraDatos.splice(i, 1);
                          break;//Solo una fila
                      }
                  }

                  grid.reload();

              });

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function ActualizarFila(id, grid, url, datosJSON, fila, estructuraDatos, funcion, campoId) {

        try {

            $.ajax({
                url: url,
                type: "POST",
                data: { datosJSON: datosJSON },
                dataType: "json",
                error: function (jqXHR, textStatus, errorThrown) {
                    MsgExcepcion(FormatoMensajeExcepcionAJAX(window.ExcepcionFuncion,
                                 nombreFuncion = funcion,
                                 descripcionError = errorThrown));
                }
            })
                .done(function () {

                    //Elimina fila a actualizar temporalmente
                    for (var i = 0; i < estructuraDatos.length; i++) {

                        if (estructuraDatos[i][campoId] == id) {
                            estructuraDatos.splice(i, 1);
                            break; //Solo una fila
                        }
                    }

                    //Agrega la fila con los datos actualizados
                    estructuraDatos.push(fila);
                    grid.reload();

                });

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }

    }

    function AgregarFila(grid, url, datosJSON, fila, estructuraDatos, funcion) {

        try {

            if (grid == null || grid == "" || grid == undefined ||
                url == null || url == "" || url == undefined ||
                datosJSON == null || datosJSON == "" || datosJSON == undefined ||
                fila == null || fila == "" || fila == undefined ||
                funcion == null || funcion == "" || funcion == undefined) { return; }

            if (!$.isArray(estructuraDatos)) { return; };

            $.ajax({
                url: url,
                type: "POST",
                async: false,
                data: { datosJSON: datosJSON },
                dataType: "json",
                error: function (jqXHR, textStatus, errorThrown) {
                    MsgExcepcion(FormatoMensajeExcepcionAJAX(window.ExcepcionFuncion,
                                 nombreFuncion = funcion,
                                 descripcionError = errorThrown));
                }
            })
                .done(function () {

                    estructuraDatos.push(fila);

                    grid.reload();
                });

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }

    }

    function AgregarTodasLasFilasJSON(grid, url, datosJSON, funcion) {

        try {

            if (grid == null || grid == "" || grid == undefined ||
                url == null || url == "" || url == undefined ||
                datosJSON == null || datosJSON == "" || datosJSON == undefined ||
                funcion == null || funcion == "" || funcion == undefined) { return; }

            $.ajax({
                url: url,
                type: "POST",
                async: false,
                data: { datosJSON: datosJSON },
                dataType: "json",
                error: function (jqXHR, textStatus, errorThrown) {
                    MsgExcepcion(FormatoMensajeExcepcionAJAX(window.ExcepcionFuncion,
                                 nombreFuncion = funcion,
                                 descripcionError = errorThrown));
                }
            })
                .done(function () {

                    grid.reload();
                });

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }

    }

    function RemoverTodasLasFilas(grid, url, estructuraDatos, funcion) {

        try {

            if (grid == null || grid == "" || grid == undefined ||
                url == null || url == "" || url == undefined ||
                funcion == null || funcion == "" || funcion == undefined) { return; }

            if (!$.isArray(estructuraDatos)) { return; };

            $.ajax({
                url: url,
                type: "POST",
                async: false,
                error: function (jqXHR, textStatus, errorThrown) {
                    MsgExcepcion(FormatoMensajeExcepcionAJAX(window.ExcepcionFuncion,
                                 nombreFuncion = funcion,
                                 descripcionError = errorThrown));
                }
            })
              .done(function () {

                  estructuraDatos.splice(0);

                  //grid.reload({ sortBy: null, page: 1, direction: null, searchString: null, limit: 5 });

                  grid.reload({ page: 1 });

              });

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function RemoverTodasLasFilasBackEnd(grid, url, funcion) {

        try {

            if (grid == null || grid == "" || grid == undefined ||
                url == null || url == "" || url == undefined ||
                funcion == null || funcion == "" || funcion == undefined) { return; }            

            $.ajax({
                url: url,
                type: "POST",
                async: false,
                error: function (jqXHR, textStatus, errorThrown) {
                    MsgExcepcion(FormatoMensajeExcepcionAJAX(window.ExcepcionFuncion,
                                 nombreFuncion = funcion,
                                 descripcionError = errorThrown));
                }
            })             

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    //Validación de celdas

    function ConvertirTextoAMayusculasCelda(valorCelda) {
        try {
            if (valorCelda == null || valorCelda == "" || valorCelda == undefined) {
                return;
            }
            valorCelda = valorCelda.toUpperCase();
            return valorCelda;
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };

    function ValidarCaracteresCelda(valorCelda, regex) {

        try {

            if (valorCelda == null || valorCelda == "" || valorCelda == undefined ||
                regex == null || regex == "" || regex == undefined) {
                return;
            }

            var valorActual = String.fromCharCode(valorCelda);
            var valorFinal = valorCelda + valorActual;

            if (valorFinal.length > 0) {

                if (!regex.test(valorFinal)) {
                    return false;
                }
                else {
                    return true;
                }
            };

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function AsignarMascaraMonedaCelda(valorCelda) {
        try {

            if (valorCelda == null || valorCelda == undefined) {
                return;
            }

            if (valorCelda == "") {
                return "$0.00";
            }
            else {
                valorCelda.replace(/[^0-9\.]+/g, "");
                return FormatoMonedaString(TrimStart("$", valorCelda));
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };

    function TrimStart(character, string) {
        var startIndex = 0;

        while (string[startIndex] === character) {
            startIndex++;
        }

        return string.substr(startIndex);
    };

    function TrimEnd(character, string) {
        var intI = string.length - 1;

        for (; (intI >= 0) && string.charAt(intI) === character; intI = intI - 1);

        return string.substr(0, (intI + 1));
    };

    function FormatoMonedaString(value) {
        return FormatCurrency(value, 2, ".", "$", "");
    };

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
    };

    function LimpiarGrid(grid) {

        try {

            if (grid == null || grid == "" || grid == undefined) { return; }

            $(grid).grid("clear");

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function SearchGrid(grid, numOt) {
        try {

            if (grid == null || grid == "" || grid == undefined ||
                numOt == null || numOt == "" || numOt == undefined ) { return; }

            grid.reload({ sortBy: null, page: 1, direction: null, searchString: numOt, limit: 5 });
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function VerificarSiExisteCampo(elementos, elementoIndicado) {

        try {
            if (elementoIndicado == null || elementoIndicado == "" || elementoIndicado == undefined)
                return;

            if ($.isArray(elementos)) {

                for (var i = 0; i < elementos.length; i = i + 1) {
                    if (elementos[i] == elementoIndicado) { return true; }
                }
            }
            else {
                if (elementos == elementoIndicado) { return true; }
            }

            return false;

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    //Miembros públicos
    return {
        EliminarFilaXID: EliminarFilaXID,
        ActualizarFila: ActualizarFila,
        AgregarFila: AgregarFila,
        AgregarTodasLasFilasJSON: AgregarTodasLasFilasJSON,
        RemoverTodasLasFilas: RemoverTodasLasFilas,
        RemoverTodasLasFilasBackEnd:RemoverTodasLasFilasBackEnd,
        ConvertirTextoAMayusculasCelda: ConvertirTextoAMayusculasCelda,
        AsignarMascaraMonedaCelda: AsignarMascaraMonedaCelda,
        LimpiarGrid: LimpiarGrid,
        ValidarCaracteresCelda: ValidarCaracteresCelda,
        SearchGrid: SearchGrid,
        VerificarSiExisteCampo: VerificarSiExisteCampo
    };
})();
