/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
*                                                                                                                      *
* Autor: Ricardo Rangel (Towa)                                                                                         *
*                                                                                                                      *
* Fecha: 27/02/2017                                                                                                    *
*                                                                                                                      *
* Descripcion: Script de métodos para formato de Moneda                                                                *
*                                                                                                                      *
* Requerimientos: jquery.formatCurrency-1.4.0                                                                          *
*                                                                                                                      *
*   Índice                                                                                                             *
*       - AplicarFormato()          --> Permite aplicar formato de moneda                                              *                          
*       - QuitarFormato()           -->Permite quitar formato de moneda y devuelve el valor convertido a número        *
*                                                                                                                      *
*   Uso                                                                                                                *
*         Moneda.AplicarFormato(2334.56);   --> $2,334.5                                                               *   
*         Moneda.QuitarFormato($2,334.56);   --> 2334.56                                                               *   
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var Moneda = (function () {

    function AplicarFormato(valor)
    {
        try {

            if (valor == null || valor == "" || valor == undefined) return;

            valor = $("<span>" + valor + "</span>").formatCurrency().text();
            return valor;

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }       
    }

    function QuitarFormato(valor) {

        try {

            if(valor == 0){ return 0 }
            if (valor == null || valor == "" || valor == undefined) return;
                       
            valor = valor.replace(/[$,]/g, '');
            valor = Number(valor);
            
            return valor;

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }       
    }

    //Miembros públicos
    return {
        AplicarFormato: AplicarFormato,
        QuitarFormato: QuitarFormato
    };
})();


