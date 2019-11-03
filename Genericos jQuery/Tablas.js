/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                      *
* Autor: Ricardo Rangel Ramírez (Towa)                                                                                 *
*                                                                                                                      *
* Fecha: 27/12/2016                                                                                                    *
*                                                                                                                      *
* Descripcion: Script de métodos para tablas                                                                           *
*                                                                                                                      *
*   Índice                                                                                                             *
*      - LimpiaTablas(tablas)                               --> Limpia una o varias tablas.                            *
*      - VerificaSiTablaTieneDatos(tabla)                   --> Verifica si una tabla tiene datos.                     *
*                                                                                                                      *
*   Uso                                                                                                                *
*        LimpiaTablas(["#tb_Asignado", "#tbContacto"]);                                                                *
*                                                                                                                      *
*   Requerimientos                                                                                                     *
*        Se asume que se esta usando el plugin DataTables.net https://datatables.net/                                  *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var Tablas = (function () {

    function LimpiaTablas(tablas) {

        try {
            if (tablas == null || tablas == "" || tablas == undefined)
                return;

            if ($.isArray(tablas)) {

                for (var i = 0; i < tablas.length; i = i + 1) {
                    var tabla = $(tablas[i]).DataTable();

                    tabla
                        .clear()
                        .draw();
                }

            } else {
                var tabla = $(tablas).DataTable();

                tabla
                    .clear()
                    .draw();
            }

        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }

    }

    function VerificaSiTablaTieneDatos(tabla) {
        return $(tabla + " tbody tr td").hasClass("dataTables_empty")
    }

    //Miembros públicos
    return {
        LimpiaTablas: LimpiaTablas,
        VerificaSiTablaTieneDatos: VerificaSiTablaTieneDatos
    };
})();