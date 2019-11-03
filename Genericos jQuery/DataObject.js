/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                      *                                                     
* Autor: Ricardo Rangel Ramírez  (Towa)                                                                                *
*                                                                                                                      *                                                
* Fecha: 09/12/2017                                                                                                    *
*                                                                                                                      * 
* Descripcion: Script de métodos para manipulación de objetos de datos                                                 *
*                                                                                                                      *
*   Índice                                                                                                             *
* 	    - ConvertirACadenaJSON() ---> Permite convertir un data objet a cadena json                              *
* 	    - VerificarSiObjetoVacío() ---> Permite verificar si un data object tien filas    
        - VerificarSiExisteElemento() ----> Permite verificar si existe elemento en una estructura de datos en base a ID
        - VerificarSiEsNumerico() -----> Veerifica si un valor es numérico
*                                                                                                                      *
    Uso      

      ConvertirACadenaJSON:

      var filaUbicacionesOT = {
            ID: IDEditarUbicacionesOT,
            Valor: TextBox.ObtenerValor("#UbicacionesOT_Valor_Modal"),
            SumaAsegurada: TextBox.ObtenerValor("#UbicacionesOT_SumaAsegurada_Modal")
        };              
        
        var datosUbicacionesOT_JSon = DataObject.ConvertirACadenaJSON(filaUbicacionesOT)



        VerificarSiObjetoVacío:

         if (DataObject.VerificarSiObjetoVacio(window.datosSeccionHeaderUbicaciones)) {
               //Haz algo
          }

        VerificarSiExisteElemento:

           if (DataObject.VerificarSiExisteElemento(window.datosGridAsignacionCoberturasParticulares,
                                            "IdAsignacionCobertura", 
                                            record.IdAsignacionCobertura))

          ObtenerDescripcionXClave:

           DataObject.ObtenerDescripcionXClave(window.datosSeccionPaquete,
                                               "Clave",
                                               window.datosSubCoberturas[item].Cve_Seccion,
                                               "Descripcion")

           VerificarSiEsNumerico:

          if (DataObject.VerificarSiEsNumerico("1") { //Haz algo }


                                                                                                                    
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var DataObject = (function () {   
  
    function ConvertirACadenaJSON(objeto)
    {
        try
        {
            if (objeto == null || objeto == "" || objeto == undefined) { return; }

            return JSON.stringify(objeto);

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };

    function VerificarSiObjetoVacio(estructuraDatos)
    {
        try
        {
            if (!$.isArray(estructuraDatos)) { return };

            if (estructuraDatos.length == 0)
                return true;
            else
                return false;

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };

    function VerificarSiExisteObjeto(estructuraDatos) {

        try {

            if (typeof estructuraDatos !== 'undefined') {
                return true;
            }

            return false

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }       
    };

    function VerificarSiEsNumerico(valor) {

        try {

            if (valor == null || valor == "" || valor == undefined) { return; }

            if ($.isNumeric(valor)) {
                return true;
            }

            return false

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }       
    };

    function VerificarSiEsMoneda(valor) {

        try {

            if (valor == null || valor == "" || valor == undefined)
                return;

            var regex = /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{1,2})?$/;

            if (regex.test(valor)) {
                return true;
            }

            return false;

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };   

    function VerificarSiExisteElemento(estructuraDatos, Id, valorId) {

        try {

            if (Id == null || Id == "" || Id == undefined ||
                valorId == null || valorId == "" || valorId == undefined) { return; }

            if (!$.isArray(estructuraDatos)) { return; };

            for (var i = 0; i < estructuraDatos.length; i++)
                if (estructuraDatos[i][Id] === valorId) {
                    return true;
                }

            return false;

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }       
    };   

    function ObtenerDescripcionXClave(estructuraDatos, Clave, ValorClave, Descripcion) {

        try {

            if (Clave == null || Clave == "" || Clave == undefined ||
                ValorClave == null || ValorClave == "" || ValorClave == undefined ||
                Descripcion == null || Descripcion == "" || Descripcion == undefined) { return; }

            if (!$.isArray(estructuraDatos)) { return; };

            for (var i = 0; i < estructuraDatos.length; i++)
                if (estructuraDatos[i][Clave] === ValorClave) {
                    return estructuraDatos[i][Descripcion];
                }

            return "";

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }       
    };

    function ObtenerClaveXDescripcion(estructuraDatos, Clave, ValorDescripcion, Descripcion) {

        try {

            if (Clave == null || Clave == "" || Clave == undefined ||
                ValorDescripcion == null || ValorDescripcion == "" || ValorDescripcion == undefined ||
                Descripcion == null || Descripcion == "" || Descripcion == undefined) { return; }

            if (!$.isArray(estructuraDatos)) { return; };

            for (var i = 0; i < estructuraDatos.length; i++)
                if (estructuraDatos[i][Descripcion] === ValorDescripcion) {
                    return estructuraDatos[i][Clave];
                }

            return "";

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }        
    };

    //Miembros públicos
    return {
        ConvertirACadenaJSON: ConvertirACadenaJSON,
        VerificarSiObjetoVacio: VerificarSiObjetoVacio,
        VerificarSiExisteObjeto: VerificarSiExisteObjeto,
        VerificarSiExisteElemento: VerificarSiExisteElemento,       
        ObtenerDescripcionXClave: ObtenerDescripcionXClave,
        ObtenerClaveXDescripcion: ObtenerClaveXDescripcion,
        VerificarSiEsNumerico: VerificarSiEsNumerico,
        VerificarSiEsMoneda:VerificarSiEsMoneda
    };
})();


