/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
*                                                                                                                      *
* Autor: Jorge Montoya (Towa)                                                                                          *
*                                                                                                                      *
* Fecha: 30/06/2017                                                                                                    *
*                                                                                                                      *
* Descripcion: Script con métodos para mostrar mensajes                                                                *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

$('#btnCloseMensajeAlertAPP').click(function () {
    AlertAPP.CerrarMensaje();
});
var EjecutarFuncion;
var ReloadPage;
var Funcion;
var AlertAPP = (function () {

    function MostrarMensaje(mnsalert, mnsTitulo, reloadPage, iconoMns, ejecFuncion, funcion) {
        if (mnsalert == null || mnsalert == "" || mnsalert == undefined) {
            return;
        }

        ReloadPage = reloadPage;
        EjecutarFuncion = ejecFuncion;
        Funcion = funcion;
        $('#myModalTitle').html("<span><i class='" + iconoMns + "'></i></span><label>&nbsp&nbsp" + mnsTitulo + " </label>");
        $('#lblMensajeAlertAPP').html(GetMensaje(mnsalert));
        Modal.Mostrar("#ModalAlertAPP");
    };

    function CerrarMensaje() {
        Modal.Ocultar("#ModalAlertAPP");
        if (EjecutarFuncion) {
            Funcion();
        }

        if (ReloadPage) {
            location.reload();
        }
    }

    function GetMensaje(mnsAlert) {
        var strMensaje = ""
        var arrRes = mnsAlert.split("|");

        for (var i = 0; i < arrRes.length; i++) {

            strMensaje = strMensaje + " <span> " + arrRes[i] + " </span> <br\> ";
        }

        return strMensaje;
    };

    //Miembros públicos
    return {
        //Propiedades
        EjecutarFuncion: EjecutarFuncion,
        ReloadPage: ReloadPage,
        Funcion: Function,

        //Funciones
        MostrarMensaje: MostrarMensaje,
        CerrarMensaje: CerrarMensaje
    };
})();