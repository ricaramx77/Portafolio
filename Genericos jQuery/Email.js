/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                      *                                                     
* Autor: Celia Jessica Chávez Cañada                                                                                   *
*                                                                                                                      *                                                
* Fecha: 15/05/2017                                                                                                    *
*                                                                                                                      * 
* Descripcion: Script de métodos para validar email                                                                    
*
* Uso:
*
* - ValidarFormato:
*
*   Email.ValidarFormato("#txtDe")
*
* - ValidarFormatoConEtiqueta:
*
   if (!Email.ValidarFormatoConEtiqueta(["txtDe", "txtPara"],
                                          ["inpDe", "inpPara"],
                                          ["divDe", "divPara"],
                                          window.EmailInvalido)) {
          return false;
    } 
                                                                                                                   
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

$("#txtPara").blur(function () {
    Email.Validar()
});

var Email = (function () {   

    function ValidarFormato(email) {

        try {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }       
    }

    function ValidarFormatoConEtiqueta(objId, objValidar, objDiv, objMsj) {

        if (objId == null || objId == "" || objId == undefined ||
            objValidar == null || objValidar == "" || objValidar == undefined ||
            objDiv == null || objDiv == "" || objDiv == undefined) {
            return;
        }
       
        var boolDatosCompletos = true;
        var inputs = '';
        var divs = '';

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;      

        if ($.isArray(objId) &&
            $.isArray(objValidar) &&
            $.isArray(objDiv)) {

            for (var x = 0; x < objId.length; x = x + 1) {
                     
                var correos = $("#" + objId[x]).val();
                var arrCorreos = correos.split(",");

                for (var intICorreo = 0; intICorreo < arrCorreos.length; intICorreo = intICorreo + 1) {
                    if (!re.test($.trim(arrCorreos[intICorreo]))) {

                        inputs = document.getElementsByClassName(objValidar[x]);
                        divs = document.getElementsByClassName(objDiv[x]);

                        TextBox.AddEtiquetaValidacion(objId[x], divs[0], objMsj);
                        boolDatosCompletos = false;

                        intICorreo = arrCorreos.length + 1;
                    }
                }                               
            }

            return boolDatosCompletos;

        }
        else {

            if (!re.test($("#" + objId).val())) {

                inputs = document.getElementsByClassName(objValidar);
                divs = document.getElementsByClassName(objDiv);

                TextBox.AddEtiquetaValidacion(objId, divs[0], objMsj);
                boolDatosCompletos = false;
            }

            return boolDatosCompletos;
        }

        return boolDatosCompletos;
    };

    function Validar() {

        try {

            var email = $("#txtPara").val();

            if (Email.ValidarFormato(email)) {

            } else {
                MsgInformativo(window.EmailInvalido);
            }
            return false;

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }       
    }

    function NotificarExcepcionAjax(mensajeExcepcion) {

        try {                       

            $.ajax({
                url: "EnviarExcepcionAJAX",
                type: "POST",
                dataType: "json",
                data: { strErrorMessage: mensajeExcepcion },
                error: function (jqXHR, textStatus, errorThrown) {
                    MsgExcepcion(FormatoMensajeExcepcionAJAX(window.ExcepcionFuncion,
                                 nombreFuncion = "NotificarExcepcionAjax",
                                 descripcionError = errorThrown));
                },
                success: {
                }
            })
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    //Miembros públicos
    return {
        ValidarFormato: ValidarFormato,
        Validar: Validar,
        ValidarFormatoConEtiqueta: ValidarFormatoConEtiqueta,
        NotificarExcepcionAjax: NotificarExcepcionAjax
    };
})();
