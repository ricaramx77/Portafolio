/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
*                                                                                                                      *
* Autor: Ricardo Rangel (Towa)                                                                                         *
*                                                                                                                      *
* Fecha: 09/12/2016                                                                                                    *
*                                                                                                                      *
* Descripcion: Script de métodos para Calendarios de tipo jQuery UI                                                    *
*																													   *
* Dependencia: jquery.mask.js																						   *
*                                                                                                                      *
* Índice                                                                                                             *
*       - MostrarCalendarios(calendarios, formato)          --> Permite mostrar calendarios[] en base a formato.       *                          
*                                                                                                                      *
* Uso                                                                                                                *
*         Calendario.MostrarCalendarios(["#txtFechaInicio", "#txtFechaFin"], "dd-mm-yy");                              *   
          SumaUnAnioRangoFechas("#txtFechaInicio", "#txtFechaFin");                                                    *

          Calendario.EspecificarFecha([GridEndosos.FechaVigenciaInicial, GridEndosos.FechaVigenciaFinal],
                                      ["#txt_VigenciaInicial_Endosos", "#txt_VigenciaFinal_Endosos"]);

*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var Calendario = (function () {

    function MostrarCalendarios(calendarios, formato) {

        try {
            if (calendarios == null || calendarios == "" || calendarios == undefined ||
                formato == null || formato == "" || formato == undefined)
                return;

            //Verifica que hayan enviado un array.
            if ($.isArray(calendarios)) {
                for (var i = 0; i < calendarios.length; i = i + 1) {
                    $(calendarios[i]).datepicker({
                        dateFormat: formato,
                        changeYear: true
                    });
                    $(calendarios[i]).mask('00-00-0000');
                }
            } else {
                $(calendarios).datepicker({ dateFormat: formato, changeYear: true });
                $(calendarios).mask('00-00-0000');
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function MostrarCalendariosAño(calendarios, formato) {

        try {
            if (calendarios == null || calendarios == "" || calendarios == undefined ||
                formato == null || formato == "" || formato == undefined)
                return;

            //Verifica que hayan enviado un array.
            if ($.isArray(calendarios)) {
                for (var i = 0; i < calendarios.length; i = i + 1) {
                    $(calendarios[i]).datepicker({
                        format: formato,
                        minViewMode: 2                      
                    });
                    $(calendarios[i]).mask('0000');
                }
            } else {
                $(calendarios).datepicker({ format: formato, minViewMode: 2 });
                $(calendarios).mask('0000');
            }
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    }

    function SumaUnAnioRangoFechas(fechaInicio, fechaFin) {

        try {

            if (fechaInicio == null || fechaInicio == "" || fechaInicio == undefined ||
                fechaFin == null || fechaFin == "" || fechaFin == undefined)
                return;

               var fecha = $(fechaInicio).val(),
               dia = fecha.split("-")[0].toString(),
               mes = fecha.split("-")[1].toString(),
               anio = fecha.split("-")[2].toString()

              $(fechaFin).val(dia + "-" + mes + "-" + (parseInt(anio) + 1));          

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }       
    };

    function SumaUnAnioFechaFin(fechaInicial, fechaFinal) {

        try {
            if (fechaInicial == null || fechaInicial == "" || fechaInicial == undefined ||
                fechaFinal == null || fechaFinal == "" || fechaFinal == undefined)
                return;

            var textDate = $(fechaInicial).val(),
                     dia = textDate.split("-")[0].toString(),
                     mes = textDate.split("-")[1].toString(),
                    anio = textDate.split("-")[2].toString();

            var date = new Date(mes + "/" + dia + "/" + anio);
            var anioCal = date.getFullYear();
            date.setFullYear(anioCal + 1);

            $(fechaFinal).datepicker('update', date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear());
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };

    function SumaUnMesFechaFin(fechaInicial, fechaFinal) {

        try {

            if (fechaInicial == null || fechaInicial == "" || fechaInicial == undefined ||
                fechaFinal == null || fechaFinal == "" || fechaFinal == undefined)
                return;

            var textDate = $(fechaInicial).val(),
                     dia = textDate.split("-")[0].toString(),
                     mes = textDate.split("-")[1].toString(),
                    anio = textDate.split("-")[2].toString();

            var date = new Date(mes + "/" + dia + "/" + anio);
            var mesCal = date.getMonth() + 1;  //Se obtiene un base 0.
            date.setMonth(mesCal + 1);

            $(fechaFinal).datepicker('update', date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear());
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };

	//Calendario.AsignarFecha("27/03/2018", "#fechaInicio");
    //Calendario.AsignarFecha(["27/03/2018", "15/05/2018"], ["#fechaInicio", "#fechaFin"]);
    function AsignarFecha(strfecha, textbox) {

        try {

            if (strfecha == null || strfecha == "" || strfecha == undefined ||
                textbox == null || textbox == "" || textbox == undefined)
                return;

            var splitFecha;

            if ($.isArray(strfecha) &&
                $.isArray(textbox)) {            

                for (var x = 0; x < textbox.length; x = x + 1) {
                    
                    if (typeof textbox[x] == undefined ||
                               textbox[x] == null ||
                               textbox[x] == "") { return; }

                    //Valida formato dd/mm/yyyy
                    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(strfecha[x])) return false;

                    splitFecha = strfecha[x].split("/");
                    $(textbox[x]).datepicker("setDate", new Date(parseInt(splitFecha[2]),
                                                                 parseInt(splitFecha[1] -1),
                                                                 parseInt(splitFecha[0])));
                }

                return;                
            }

            //Valida formato dd/mm/yyyy
            if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(strfecha)) return false;

            splitFecha = strfecha.split("/");
            $(textbox).datepicker("setDate", new Date(parseInt(splitFecha[2]),
                                                      parseInt(splitFecha[1] - 1),
                                                      parseInt(splitFecha[0])));

        } catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }       
    }

    //Miembros públicos
    return {
		AsignarFecha: AsignarFecha,
        MostrarCalendarios: MostrarCalendarios,
        MostrarCalendariosAño: MostrarCalendariosAño,
        SumaUnAnioRangoFechas: SumaUnAnioRangoFechas,
        SumaUnAnioFechaFin: SumaUnAnioFechaFin,
        SumaUnMesFechaFin: SumaUnMesFechaFin        
    };
})();

