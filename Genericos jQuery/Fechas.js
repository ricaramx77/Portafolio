/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*                                                                                                                      *                                                                    
* Autor: Ricardo Rangel (Towa)                                                                                         *
*                                                                                                                      *
* Fecha: 19/12/2016                                                                                                    *
*                                                                                                                      *
* Descripcion: Script de métodos para manejo de fechas.                                                                *
*                                                                                                                      *
*   Índice                                                                                                             *
*      - FormatoFecha(fecha)                                -->Da el formato correcto de fecha a la cadena que recibe  *
*                                                                   Esta debera de usarse en el evento onKeyUp.        *   
*                                                                                                                      *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var Fechas = (function () {    

    function ValidarFechaInicialMayorQueFinal(fechaInicial, fechaFinal, objId, objDiv) {

        try {
            if (fechaInicial == null || fechaInicial == "" || fechaInicial == undefined ||
                fechaFinal == null || fechaFinal == "" || fechaFinal == undefined)
                return;

            var valorFechaInicial = $(fechaInicial).val();
            var valorFechaFinal = $(fechaFinal).val();

            //Si se introdujeron ambas fechas
            if (valorFechaInicial != "" & valorFechaFinal != "") {

                //------------------------------------------------------------------------
                //FECHA INICIAL
                var splitFechaInicial;

                if (valorFechaInicial.indexOf('-') != -1) {
                    splitFechaInicial = valorFechaInicial.split("-");
                }
                else if (valorFechaInicial.indexOf('/') != -1) {
                    splitFechaInicial = valorFechaInicial.split("/");
                }

                valorFechaInicial = new Date(
                    parseInt(splitFechaInicial[2]),
                    parseInt(splitFechaInicial[1] - 1),
                    parseInt(splitFechaInicial[0])
                );

                //------------------------------------------------------------------------
                //FECHA FINAL

                var splitFechaFinal;

                if (valorFechaFinal.indexOf('-') != -1) {
                    splitFechaFinal = valorFechaFinal.split("-");
                }
                else if (valorFechaFinal.indexOf('/') != -1) {
                    splitFechaFinal = valorFechaFinal.split("/");
                }

                valorFechaFinal = new Date(
                    parseInt(splitFechaFinal[2]),
                    parseInt(splitFechaFinal[1] - 1),
                    parseInt(splitFechaFinal[0])
                );

                //Valida rango de fechas
               if (valorFechaFinal <= valorFechaInicial) {
                   
                    TextBox.ValidaListaCampoObligatorio([fechaFinal.replace("#", "")], [objId], [objDiv], window.FechaFinMayorAFechaInicio, false);
                    return false;
               }
               else {
                   TextBox.RemoverClaseListaCampoObligatorio([fechaFinal.replace("#", "")], [objDiv], false);
                   return true;
               }
            }
            else {
                return false;
            }
            
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };   

    var primerSlap = false;
    var segundoSlap = false;

    function FormatoFecha(fecha) {
        var long = fecha.length;
        var dia;
        var mes;
        var ano;

        if ((long >= 2) && (primerSlap == false)) {
            dia = fecha.substr(0, 2);
            if ((IsNumeric(dia) == true) && (dia <= 31) && (dia != "00")) { fecha = fecha.substr(0, 2) + "-" + fecha.substr(3, 7); primerSlap = true; }
            else { fecha = ""; primerSlap = false; }
        }
        else {
            dia = fecha.substr(0, 1);
            if (IsNumeric(dia) == false)
            { fecha = ""; }
            if ((long <= 2) && (primerSlap = true)) { fecha = fecha.substr(0, 1); primerSlap = false; }
        }
        if ((long >= 5) && (segundoSlap == false)) {
            mes = fecha.substr(3, 2);
            if ((IsNumeric(mes) == true) && (mes <= 12) && (mes != "00")) { fecha = fecha.substr(0, 5) + "-" + fecha.substr(6, 4); segundoSlap = true; }
            else {
                fecha = fecha.substr(0, 3); segundoSlap = false;
            }
        }
        else { if ((long <= 5) && (segundoSlap = true)) { fecha = fecha.substr(0, 4); segundoSlap = false; } }
        if (long >= 7) {
            ano = fecha.substr(6, 4);
            if (IsNumeric(ano) == false) { fecha = fecha.substr(0, 6); }
            else { if (long == 10) { if ((ano == 0) || (ano < 1900) || (ano > 2100)) { fecha = fecha.substr(0, 6); } } }
        }

        if (long >= 10) {
            fecha = fecha.substr(0, 10);
            dia = fecha.substr(0, 2);
            mes = fecha.substr(3, 2);
            ano = fecha.substr(6, 4);
            // Año no viciesto y es febrero y el dia es mayor a 28
            if ((ano % 4 != 0) && (mes == 02) && (dia > 28)) { fecha = fecha.substr(0, 2) + "-"; }

            if ((ano % 4 == 0) && (mes == 02) && (dia > 28)) { fecha = fecha.substr(0, 2) + "-"; }
        }
        return (fecha);
    };

    function ObtenerAño(fecha) {

        try {
            if (fecha == null || fecha == "" || fecha == undefined)
                return;

            var valorFecha = $(fecha).val();

            if (valorFecha != "") {

                var splitFecha;

                if (valorFecha.indexOf('-') != -1) {
                    splitFecha = valorFecha.split("-");
                }
                else if (valorFecha.indexOf('/') != -1) {
                    splitFecha = valorFecha.split("/");
                }               

                valorFecha = new Date(
                    parseInt(splitFecha[2]),
                    parseInt(splitFecha[1] - 1),
                    parseInt(splitFecha[0])
                );

                return new Date(valorFecha).getFullYear();
            }

            return;
        }
        catch (err) {
            MsgExcepcion(FormatoMensajeExcepcion(window.MensajeExcepcion, err));
        }
    };

    function ValidarFechas(fechaInicial, fechaFinal) {        

        try {
            if (fechaInicial == null || fechaInicial == "" || fechaInicial == undefined ||
                fechaFinal == null || fechaFinal == "" || fechaFinal == undefined) {
                return false;
            }                       

            if (fechaInicial != "" & fechaFinal != "") {

                var valorFechaInicial = $(fechaInicial).val();
                var valorFechaFinal = $(fechaFinal).val();          


                //FECHA INICIAL
                var splitFechaInicial;

                if (valorFechaInicial.indexOf('-') != -1) {
                    splitFechaInicial = valorFechaInicial.split("-");
                }
                else if (valorFechaInicial.indexOf('/') != -1) {
                    splitFechaInicial = valorFechaInicial.split("/");
                }

                valorFechaInicial = new Date(
                    parseInt(splitFechaInicial[2]),
                    parseInt(splitFechaInicial[1] - 1),
                    parseInt(splitFechaInicial[0])
                );

                //FECHA FINAL
                var splitFechaFinal;

                if (valorFechaFinal.indexOf('-') != -1) {
                    splitFechaFinal = valorFechaFinal.split("-");
                }
                else if (valorFechaFinal.indexOf('/') != -1) {
                    splitFechaFinal = valorFechaFinal.split("/");
                }

                valorFechaFinal = new Date(
                    parseInt(splitFechaFinal[2]),
                    parseInt(splitFechaFinal[1] - 1),
                    parseInt(splitFechaFinal[0])
                );

                //Valida rango de fechas
                if (valorFechaInicial > valorFechaFinal) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        catch (err) {
            return false;
        }

        return true;
    };

    var Diferencia = {

        Dias: function (d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();

            return parseInt((t2 - t1) / (24 * 3600 * 1000));
        },

        Semanas: function (d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();

            return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
        },

        Meses: function (d1, d2) {
            var d1Y = d1.getFullYear();
            var d2Y = d2.getFullYear();
            var d1M = d1.getMonth();
            var d2M = d2.getMonth();

            return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
        },

        Anios: function (d1, d2) {
            return d2.getFullYear() - d1.getFullYear();
        }
    }
	
	function ObtenerFechaActual() {

        try {

            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd;
            }

            if (mm < 10) {
                mm = '0' + mm;
            }

            today = mm + '-' + dd + '-' + yyyy;
            console.log(today);
            today = mm + '/' + dd + '/' + yyyy;
            console.log(today);

            today = dd + '-' + mm + '-' + yyyy;
            console.log(today);

            today = dd + '/' + mm + '/' + yyyy;
            console.log(today);

            return today;
 
        } catch (err) {
            return false;
        }       

    }
	
	function DiaMesAño(fecha) {
 
		try {

			var date = new Date(fecha);

			var MyDateString = ('0' + date.getDate()).slice(-2) + '/'
							 + ('0' + (date.getMonth() + 1)).slice(-2) + '/'
							 + date.getFullYear();                               

			return MyDateString;

		} catch (err) {
			swal(
				'Error',
				err,
				'warning'
			)
		}
    }
	
	function DiaMesAño_HoraMinSeg(fecha) {
 
		try {

			var date = new Date(fecha);

			var MyDateString = ('0' + date.getDate()).slice(-2) + '/'
							 + ('0' + (date.getMonth() + 1)).slice(-2) + '/'
							 + date.getFullYear() + ' '
							 + ('0' + date.getHours()).slice(-2) + ':'
							 + ('0' + date.getMinutes()).slice(-2) + ':'
							 + ('0' + date.getSeconds()).slice(-2);                               

			return MyDateString;

		} catch (err) {
			swal(
				'Error',
				err,
				'warning'
			)
		}
    }
     
    //Miembros públicos
    return {     
        DiaMesAño: DiaMesAño,	
	    DiaMesAño_HoraMinSeg: DiaMesAño_HoraMinSeg,
        FormatoFecha: FormatoFecha,         
        Diferencia: Diferencia,
		ObtenerAño: ObtenerAño,  
		ObtenerFechaActual: ObtenerFechaActual,
		ValidarFechas: ValidarFechas,
		ValidarFechaInicialMayorQueFinal: ValidarFechaInicialMayorQueFinal
    };
})();




