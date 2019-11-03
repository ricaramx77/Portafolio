/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*                                                                                                                      *
* Autor: Ricardo Rangel Ramírez (Towa)                                                                                 *
*                                                                                                                      *
* Fecha: 05/12/2016                                                                                                    *
*                                                                                                                      *
* Descripcion: Script de métodos para textbox                                                                          *
*                                                                                                                      * 
*   Índice                                                                                                             *
*       - CheckBox.LimpiaCheckBox                                    --> Limpia una o varias checkbox                  *
        - CheckBox.AsignarValor                             --> Permite asignar valor a un checkbox           *
        - CheckBox.ObtenerValor                              --> Permite obtener el valor de un checkbox       *
*                                                                                                                      * 
*   Uso                                                                                                                * 
*        CheckBox.LimpiaCheckBox(["#chbCoaseguro", "#chbRenovacion"]);                                                 *
*        CheckBox.AsignarValor("#chbRenovacion", true);                                                        *          
*        var valor = CheckBox.ObtenerValor("#chbRenovacion");                                                  *                                                   
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var CheckBox = (function () {   

    function LimpiarValor(checkbox) {

        try {
            if (checkbox == null || checkbox == "" || checkbox == undefined)
                return;

            //Verifica si enviaron Array
            if ($.isArray(checkbox)) {

                //Limpia CheckBox
                for (var i = 0; i < checkbox.length; i = i + 1) {
                    $(checkbox[i]).prop('checked', false);
                }
            } else {
                $(checkbox).prop('checked', false);
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function AsignarValor(checkbox, valor) {

        try {
            if (checkbox == null || checkbox == "" || checkbox == undefined ||
                valor == null || valor == undefined)
                return;

            //Verifica si enviaron Array
            if ($.isArray(checkbox)) {

                //Limpia CheckBox
                for (var i = 0; i < checkbox.length; i = i + 1) {
                    $(checkbox[i]).prop('checked', valor);
                }
            } else {
                $(checkbox).prop('checked', valor);
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function ObtenerValor(checkbox) {

        try {
            if (checkbox == null || checkbox == "" || checkbox == undefined)
                return;

            if ($(checkbox).prop('checked')) {
                return true;
            }
            else {
                return false;
            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Ocultar(checkbox) {

        try {
            if (checkbox == null || checkbox == "" || checkbox == undefined)
                return;

            if ($.isArray(checkbox)) {
                for (var i = 0; i < checkbox.length; i = i + 1) {
                    $(checkbox[i]).hide();
                }

            } else {
                $(checkbox).hide();
            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function OcultarSlide(checkbox, label) {

        try {
            if (checkbox == null || checkbox == "" || checkbox == undefined ||
                label == null || label == "" || label == undefined)
                return;

            $(label).hide();
            $(checkbox).hide();

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function MostrarSlide(checkbox, label) {

        try {
            if (checkbox == null || checkbox == "" || checkbox == undefined ||
                label == null || label == "" || label == undefined)
                return;

            $(label).show();
            $(checkbox).show();

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Mostrar(checkbox) {

        try {
            if (checkbox == null || checkbox == "" || checkbox == undefined)
                return;

            if ($.isArray(checkbox)) {
                for (var i = 0; i < checkbox.length; i = i + 1) {
                    $(checkbox[i]).show();
                }

            } else {
                $(checkbox).show();
            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Habilitar(control) {
        try {
            if (control == null || control == "" || control == undefined)
                return;

            if ($.isArray(control)) {
                for (var x = 0; x < control.length; x = x + 1) {
                    $(control[x]).prop('disabled', false);
                }
            } else {
                $(control).prop('disabled', false);
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function Inhabilitar(control) {
        try {
            if (control == null || control == "" || control == undefined)
                return;

            if ($.isArray(control)) {
                for (var x = 0; x < control.length; x = x + 1) {
                    $(control[x]).prop('disabled', true);
                }
            } else {
                $(control).prop('disabled', true);
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }
	
	 function VerificarSiSeleccionado(chk) {

        try {
            if (chk == null || chk == "" || chk == undefined)
                return;            

            var obj = $(chk)[0];

            if (obj.type != "checkbox") {

                swal(
                    'No es checkbox',
                    err,
                    'warning'
                )               
                return false;
            }

            if (obj.checked) {
                return true;
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
    }   

    //Miembros públicos
    return {        
        AsignarValor: AsignarValor,
        ObtenerValor: ObtenerValor,
		Habilitar: Habilitar,
        Inhabilitar: Inhabilitar,
        LimpiarValor: LimpiarValor,        
        Mostrar: Mostrar,
		OcultarSlide: OcultarSlide,
        Ocultar: Ocultar,        
		VerificarSiSeleccionado: VerificarSiSeleccionado
    };
})();