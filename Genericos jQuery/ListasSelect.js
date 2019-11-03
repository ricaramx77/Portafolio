/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                    *                                                     
* Autor: Ricardo Rangel Ramírez                                                                                      *
*                                                                                                                    *                                                
* Fecha: 07/12/2016                                                                                                  *
*                                                                                                                    * 
* Descripcion: Script de métodos para eqtiquetas                                                                     *
*                                                                                                                    *
*   Índice                                                                                                           *
*      - LimpiaListas()                                      --> Limpia un conjunto de listas                        *
*      - ResetListas()                                       --> Resetea un conjunto de listas, es decir quita la    *
*                                                                   seleccion.                                       *  
*      - ValidaSeleccionLista(listas)                        --> Valida que se haya seleccionado un elemento de una  *
*                                                                   lista.                                           *
*      - OcultarListas()                                     --> Permite ocultar las listas indicadas                *
*      - Habilitar()                                         -->Permite habilitar las listas indicadas               *
*      - Inhabilitar()                                       -->Permite inhabilitar las listas indicadas             *
*      - ObtenerValor()                                      -->Permite obtener el valor de la lista indicada        *
       - SeleccionarPrimerElemento()                         --> Permite seleccionar primer elemento                 *
       - ObtenerCantidadElementosSeleccionados()    -         --> Permite obtener cantidad elementos seleccionados   *
       - ObtenerTotalElementos()                              --> Permite obtener cantidad de elementos de una lista *
*                                                                                                                    *
*   Requerimientos:                                                                                                  *
*       - Se asume que se esta utilizando el plugin bootsrap-select                                                  * 
*                                                                                                                    *
*   Uso                                                                                                              *
*        Listas.Limpiar(["#ddlGrupo", "#ddlSubGrupo", "#ddlDireccion", "#ddlContacto", "#ddlAsociado"]);        *
*        Listas.ResetListas(["#ddlGrupo", "#ddlSubGrupo", "#ddlDireccion", "#ddlContacto", "#ddlAsociado"]);         *
*        Listas.Ocultar("#ddlPaquete")                                                                               *
         Listas.ValidaSeleccionLista(["#ddlDireccion", "#ddlGrupo", "#ddlSubGrupo", "#ddlCorporativo"]))             *              
         Listas.Habilitar(["#ddlDireccion", "#ddlGrupo", "#ddlSubGrupo", "#ddlCorporativo"]))                  *              
         Listas.Inhabilitar(["#ddlDireccion", "#ddlGrupo", "#ddlSubGrupo", "#ddlCorporativo"]))                *              
         Listas.ObtenerValor("#ddlDireccion")
*        Listas.SeleccionarPrimerElemento(["#ddlRamo", "#ddlSubRamo"]);                                              *
*        Listas.ObtenerCantidadElementosSeleccionados("#ddlSubCoberturas")                                           *
*        Listas.ObtenerTotalElementos(#ddlSubCoberturas)                                                             *
*                                                                                                                    *   
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var ListasSelect = (function () {

    function Ocultar(listas) {
 
        try {
            if (listas == null || listas == "" || listas == undefined) {
                return;
            }
 
            if ($.isArray(listas)) {
 
                $.each(listas, function (i) {                  
                    $(listas[i]).hide();
                });
 
            } 
			else {               
 
                $(listas).hide();
            }
        }
        catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    }
 
    function Mostrar(listas) {
 
        try {
            if (listas == null || listas == "" || listas == undefined) {
                return;
            }
 
            if ($.isArray(listas)) {
 
                $.each(listas, function (i) {                  
                    $(listas[i]).show();
                });
 
            } 
			else {               
 
                $(listas[i]).show();
            }
        }
        catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    }

    function ValidaSeleccionLista(listas) {

       try {
            if (listas == null || listas == "" || listas == undefined)
                return;

            //Verifica si enviaron Array.
            if ($.isArray(listas)) {

                //Verifica si seleccionaron algún elemento.
                for (var intI = 0; intI < listas.length; intI = intI + 1) {                   

                    if ($(listas[intI]).val() == "") {                                                                       
                        return $(listas[intI]).attr("name");
                    }
                }

            }
            else {
                //Verifica si seleccionaron algún elemento.               
                if ($(listas).val() == "") {                                        
                    return $(listas).attr("name");
                }
            }

            return false;

        }
        catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )

    }

    function ResetListas(listas) {
        try {
            //Validación de parámetros
            if (listas == null || listas == "" || listas == undefined)
                return;

            //Verifica si enviaron Array
            if ($.isArray(listas)) {
                //reset listas
                for (var intL = 0; intL < listas.length; intL = intL + 1) {
                    $(listas[intL]).selectpicker('deselectAll');
                    $(listas[intL]).selectpicker('refresh');
                }
            } else {
                $(listas).selectpicker('deselectAll');
                $(listas).selectpicker('refresh');
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }    

    function Limpiar(listas) {
        try {
            if (listas == null || listas == "" || listas == undefined)
                return;

            //Verifica si enviaron Array.
            if ($.isArray(listas)) {
                //Limpia listas
                for (var intI = 0; intI < listas.length; intI = intI + 1) {
                    $(listas[intI] + " option").remove();
                    $(listas[intI]).selectpicker('refresh');
                }
            } else {
                $(listas + " option").remove();
                $(listas).selectpicker('refresh');
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Habilitar(listas)
    {      
        try {
            if (listas == null || listas == "" || listas == undefined)
                return;
            
            if ($.isArray(listas)) {                
                for (var intI = 0; intI < listas.length; intI = intI + 1) {
                    $(listas[intI]).prop('disabled', false);
                    $(listas[intI]).selectpicker('refresh');
                }
            } else {
                $(listas).prop('disabled', false);
                $(listas).selectpicker('refresh');
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Inhabilitar(listas) {
        try {
            if (listas == null || listas == "" || listas == undefined)
                return;

            if ($.isArray(listas)) {
                for (var intI = 0; intI < listas.length; intI = intI + 1) {
                    $(listas[intI]).prop('disabled', true);
                    $(listas[intI]).selectpicker('refresh');
                }
            } else {
                $(listas).prop('disabled', true);
                $(listas).selectpicker('refresh');
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function ObtenerValor(lista) {

        try {
            if (lista == null || lista == "" || lista == undefined)
                return;

            return $(lista).val();
         
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function SeleccionarElementos(elemento, listaDesplegable) {

        try {

            if (listaDesplegable == null || listaDesplegable == "" || listaDesplegable == undefined) { return; }

            if ($.isArray(elemento)) {

                var valor = ""
                var valores = [];

                if (!DataObject.VerificarSiObjetoVacio(elemento)) {
                    for (var x = 0; x <= elemento.length - 1; x = x + 1) {

                        $.each(elemento[x], function (key, value) {
                            valor = valor + value + byteSeparador;
                        });
                        valores.push(valor);
                        valor = "";
                    }
                    $(listaDesplegable).val(valores);
                    $(listaDesplegable).selectpicker('render');
                }

            } else {
                $(listaDesplegable).val(elemento);
                $(listaDesplegable).selectpicker('render');
            }
           
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function SeleccionarPrimerElemento(listas) {

        try {

            if (listas == null || listas == "" || listas == undefined) { return; }
           
            var primerElemento;
                      
            if ($.isArray(listas)) {

                for (var x = 0; x < listas.length; x = x + 1) {
                    primerElemento = listas[x] + " option:first";
                    $(listas[x]).val($(primerElemento).val());
                    $(listas[x]).selectpicker('render');
                }

            } else {
                primerElemento = listas + " option:first";
                $(listas).val($(primerElemento).val());
                $(listas).selectpicker('render');
            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function CancelarSeleccionElementos(estructuraDatos, lista) {

        try {

            if (lista == null || lista == "" || lista == undefined) { return; }

            $(lista).selectpicker('deselectAll');
            SeleccionarElementos(estructuraDatos, lista);                         

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function ObtenerElementosSeleccionados(lista) {

        try {

            if (lista == null || lista == "" || lista == undefined) { return; }
            return $(lista + ' :selected');

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function ObtenerCantidadElementosSeleccionados(lista) {

        try {

            if (lista == null || lista == "" || lista == undefined) { return; }

            return $(lista + ' :selected').length;

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function ObtenerTotalElementos(lista) {

        try {

            if (lista == null || lista == "" || lista == undefined) { return; }

            return $(lista + ' > option').length;

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }   

    function PoblarLista(metodo, sParametros, lista) {

        try {

            var datosJSON = DataObject.ConvertirACadenaJSON(sParametros);

            return $.ajax({
                type: "POST",
                url: metodo,                
                data: { datos: datosJSON },
                success: function (respuesta) {
                    for (var x = 0; x <= respuesta.length - 1; x = x + 1) {
                        $(lista).append("<option value='" + respuesta[x].Value + "'>" + respuesta[x].Key);
                    }
                },

                error: function (jqXHR, textStatus, errorThrown) {
                    MsgExcepcion(FormatoMensajeExcepcionAJAX(window.ExcepcionFuncion,
                                     nombreFuncion = "PoblarLista",
                                     descripcionError = errorThrown));
                },
                complete: function () {
                    $(lista).selectpicker('refresh');
                }
            });

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function InhabilitarXError(lista) {

        try {

            if (lista == null || lista == "" || lista == undefined) { return; }

            $(lista).attr("disabled", "disabled");
            $(lista).html("<option>Error</option>");

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Actualizar(lista) {

        try {

            if (lista == null || lista == "" || lista == undefined) { return; }

            $(lista).selectpicker('refresh');

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }	
	
	function ObtenerTextoSeleccionado(lista) {
 
        try {
 
            if (lista == null || lista == "" || lista == undefined) { return; }
            return $(lista + ' :selected')[0].text;
 
        } catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    }		
 
    function ObtenerValorSeleccionado(lista) {
 
        try {
 
            if (lista == null || lista == "" || lista == undefined) { return; }
            return $(lista + ' :selected')["0"].value;            
 
        } catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    }
	
	function SeleccionarElementoXIndice(listas, indice) {
 
        try {
 
            if (listas == null || listas == "" || listas == undefined ||
                indice == null || indice == "" || indice == undefined) { return; }           
 
            if ($.isArray(listas)) {
 
                for (var x = 0; x < listas.length; x = x + 1) {                   
                    $(listas[x] + ' option').eq(indice).prop('selected', true);                  
                }
 
            } else {               
                $(listas + ' option').eq(indice).prop('selected', true);
            }
 
        }
        catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    }
   
    //Miembros públicos
    return {
		Actualizar: Actualizar,                                    
        CancelarSeleccionElementos: CancelarSeleccionElementos,        
        Habilitar: Habilitar,
        Inhabilitar: Inhabilitar,
		InhabilitarXError: InhabilitarXError,   
		Limpiar: Limpiar,
		Mostrar: Mostrar,
        ObtenerCantidadElementosSeleccionados: ObtenerCantidadElementosSeleccionados,
        ObtenerTotalElementos: ObtenerTotalElementos,
        Ocultar: Ocultar,
		ObtenerValor: ObtenerValor,
		ObtenerElementosSeleccionados: ObtenerElementosSeleccionados,		
		ObtenerTextoSeleccionado: ObtenerTextoSeleccionado,
		ObtenerValorSeleccionado: ObtenerValorSeleccionado,
		PoblarLista: PoblarLista,              
		ResetListas: ResetListas,       
		SeleccionarElementos: SeleccionarElementos,
        SeleccionarPrimerElemento: SeleccionarPrimerElemento,
		SeleccionarElementoXIndice: SeleccionarElementoXIndice,
		ValidaSeleccionLista: ValidaSeleccionLista
    };
})();

