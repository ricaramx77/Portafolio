/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                      *                                                     
* Autor: Ricardo Rangel Ramírez  (Towa)                                                                                *
*                                                                                                                      *                                                
* Fecha: 12/05/2017                                                                                                    *
*                                                                                                                      * 
* Descripcion: Script de métodos para paneles                                                                          *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var Ramo = (function () {

    function VerificarSiExisteElemento(elementos, elementoIndicado) {

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

    var SubRamo = (function () {

        function VerificarSiExisteElemento(subRamos, subRamoIndicado) {
            return Ramo.VerificarSiExisteElemento(subRamos, subRamoIndicado);
        }

        return {
            VerificarSiExisteElemento: VerificarSiExisteElemento            
        };
    })();

    //Miembros públicos
    return {
        VerificarSiExisteElemento: VerificarSiExisteElemento,
        SubRamo: SubRamo
    };
})();
