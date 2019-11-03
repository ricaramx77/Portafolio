/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                    *
* Autor: (Towa)                                                                                       *
*                                                                                                                    *
* Fecha: 09/12/2016                                                                                                  *
*                                                                                                                    *
* Descripcion: Mensajes configurables para scripts. Soportan formato "{0}" por medio de stringformat-1.11.js         *
*                                                                                                                    *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

//----------------------------------------------------------------------------------------------------------------------
//COMUNES/GENÉRICOS
//----------------------------------------------------------------------------------------------------------------------
window.TiempoSesionExpirado = "El tiempo de la sesión ha expirado. Recargar la Página.";
window.DatosCompletos = "Introduzca los datos completos.";
window.DatosErroneos = "Corrija los datos no validos capturados en la emisión.";
window.DatosGuardados = "Se han guardado los datos.";
window.DatosCompletosRangoFechasVigencia = "Introduzca la fecha inicial y final de la vigencia.";
window.EliminarFila = "No fue posible eliminar el registro.";
window.ExcepcionAgregarFila = "No fue posible agregar el registro.";
window.ExcepcionActualizarFila = "No fue posible actualizar el registro.";
window.ExcepcionComision = "La comisión no puede ser mayor al 30%.";
window.CampoRequerido = "Este campo es requerido";
window.ParametrosIncompletos = "Los parámetros de entrada están incompletos en {funcion}.";
window.DatosNoGuardados = "No fue posible guardar los datos.";
window.ExcepcionFuncion = "Excepción {descripcionError} en {nombreFuncion}.";
window.NoRegistrosEncontrados = "No se encontraron registros.";
window.NoRegistrosEncontradosGuardar = "No hay registros por guardar.";
window.ArrayVacio = "Se espera una estructura de datos con registros en {funcion}.";
window.SeleccioneElemento = "Debe seleccionar por lo menos un elemento.";
window.IntroduzcaElemento = "Debe introducir por lo menos un elemento.";
window.MensajeExcepcion = "Hubo un error en esta página. | Descripción del Error: {excepcion} | Click en Aceptar para continuar.";
window.Reporte = "Reporte...";

//----------------------------------------------------------------------------------------------------------------------
//NEGOCIO VARIOS
//----------------------------------------------------------------------------------------------------------------------
window.GuardarOrdenTrabajo = "Se ha generado la orden de trabajo con el número de Folio {numeroOrden}.";
window.IntroduzcaContactoAsegurado = "Debe introducir por lo menos un {contactoFilial}.";
window.EdadesAseguradosHijos = "Las edades de los asegurados (hijos) sobrepasan el rango permitido.";
window.PolizaNoExiste = "La póliza no existe.";
window.PolizaCuentaConCargaInicial = "Ya se realizó una carga inicial con la póliza introducida.";
window.ExcepcionConsultarPoliza = "Ocurrió un error al consultar la póliza, inténtelo de nuevo.";
window.RegistroDuplicadoAltaTitular = "No puede haber más de un registro en la opción Alta Titular.";
window.ExcepcionOrdenTrabajo = "No fue posible guardar la OT.";
window.InsertarPoliza = "Debe insertar una póliza.";
window.OTEnSeguimiento = "La OT {0} se encuentra en estatus {1}, no es posible generar un movimiento.";
window.RFCFechaNacimientoNoCoincide = "El RFC y Fecha de Nacimiento de algunos registros no coincide.";
window.PorcentajeTotalCompleto = "El porcentaje esta completo, es de 100%.";
window.EmisionPolizaFolio = "*Pruebas SAI* Favor de emitir póliza de acuerdo a propuesta presentada. ";

//----------------------------------------------------------------------------------------------------------------------
//COASEGURO
//----------------------------------------------------------------------------------------------------------------------

window.IntroduzcaAseguradora = "Debe seleccionar una aseguradora.";
window.PorcentajeParticipacionMayorACien = "El total del porcentaje de participación de las aseguradoras debe ser igual a 100%.";
window.PorcentajeParticipacionCompleto = "El total del porcentaje de participación esta completo, es del 100%.";
window.AgregarDatosCoaseguro = "Debe capturar información en la sección de coaseguro.";
window.MinimoDosAseguradoras = "La sección de Coaseguro debe tener por lo menos dos aseguradoras.";
window.PorcentajeMenorIgualCero = "El porcentaje de la aseguradora {0} debe ser mayor a 0.";
window.AseguradoraPorcentajeCien = "No puede haber una aseguradora con el porcentaje del 100%."

//----------------------------------------------------------------------------------------------------------------------
//ARCHIVOS
//----------------------------------------------------------------------------------------------------------------------
window.DescargaIncorrecta = "No fue posible descargar el archivo.";
window.ArchivoVacio = "El archivo que intenta cargar esta vacío.";
window.EstructuraArchivoIncorrecta = "El archivo no tiene la estructura correcta.";
window.ExcepcionCargaArchivo = "Ocurrió un error al cargar el archivo.";
window.DatosArchivoVaciosObligatorios = "El archivo tiene datos vacíos que son obligatorios.";
window.CamposDatosErroneosArchivo = "Hay campos con datos erróneos en su archivo.";
window.ArchivoSinRegistros = "El archivo debe contener al menos un registro.";
window.PesoTotalArchivos = "El peso total de los archivos debe ser menor a 10 MB.";
window.DescargaLayoutIncorrecta = "Ocurrió un error al descargar el layout solicitado. Intente más tarde.";
window.SeleccionarDocumento = "Seleccione un documento";

//----------------------------------------------------------------------------------------------------------------------
//EMAIL
//----------------------------------------------------------------------------------------------------------------------
window.DireccionCampoIncorrecto = "La dirección del campo {campo} es un correo inválido";
window.EmailInvalido = "Correo inválido.";
window.ConfirmacionCorreo = "El correo se ha enviado con éxito.";
window.ExcepcionCorreo = "Hubo un error al enviar el correo, intente mas tarde.";
window.ValidacionXLoMenosUnCorreo = "Debe al menos agregar un correo.";

//----------------------------------------------------------------------------------------------------------------------
//ESQUEMA DE PRIMA MÍNIMA
//----------------------------------------------------------------------------------------------------------------------
window.ValidaEsquemaPrimaMinima = "Debe agregar datos en la sección de Esquema Prima Mínima.";
window.PorcentajeTotalCien = "La suma de los porcentajes debe ser 100% para la sección Esquema de Prima Mínima.";
window.NumeroMaximoEscalonesGridRenovaciones = "Sólo se permiten hasta {numeroEscalones} escalones.";
window.EsqPrimaMinMenorIgualCero = "El porcentaje del {0} debe ser mayor a 0";
window.MinimoDosEsquemas = "Debe agregar por lo menos dos esquemas en la sección de Esquema de Prima Mínima.";
window.EsquemaPorcentajeCien = "No puede haber un esquema con el porcentaje del 100%."

//----------------------------------------------------------------------------------------------------------------------
//ENDOSOS
//----------------------------------------------------------------------------------------------------------------------
window.PolizaSinAsegurados = "La póliza {numeroOrden} no tiene asegurados cargados. Verifique.";
window.GuardarEndoso = "Se ha guardado el Endoso.";
window.EndosoEstatusOTTerminada = "No es posible realizar el endoso porque la OT ya esta terminada.";

//----------------------------------------------------------------------------------------------------------------------
//FECHAS/CALENDARIOS
//----------------------------------------------------------------------------------------------------------------------
window.FechaInicialMayorFinal = "La fecha inicio de vigencia no puede ser posterior a la fecha fin de vigencia.";
window.FechaFinMayorAFechaInicio = "La fecha fin de vigencia debe ser posterior a la fecha inicio de vigencia.";
window.FormatoFechaIncorrecto = "Formato de fecha incorrecto.";
window.IntroduzcaFechaInicio = "Debe introducir una fecha de inicio.";

//----------------------------------------------------------------------------------------------------------------------
//EMISIÓN
//----------------------------------------------------------------------------------------------------------------------
window.ExcepcionContacto = "Los datos del contacto no estan completos, no se puede agregar.";
window.ExcepcionAsegurado = "Los datos del asegurado no estan completos, no se puede agregar.";

//----------------------------------------------------------------------------------------------------------------------
//FACTURACIÓN
//----------------------------------------------------------------------------------------------------------------------
window.MontoDeudoresNoCoincideRecibo = "El monto de los deudores no coincide con el del recibo.";
window.OTNoSePuedeDarSeguimiento = "No se puede dar seguimiento a esta OT";
window.OTNoSePuedeFacturar = "Esta OT no se puede facturar.";
window.FechaEnvioAse = "La fecha de envío a la aseguradora no puede ser anterior a la de solicitud.";
window.FechaRecepAseguradora = "La fecha de recepción de la aseguradora no puede ser anterior a la de envío.";
window.FechaRecepGo = "La fecha de recepción en GO no puede ser anterior a la de recepción de la aseguradora.";
window.NumeroPolizaAsignado = "El número de póliza {numPoliza} ya fue asignado.";
window.FaltaNumPoliza = "Debe de ingresar un número de póliza.";
//----------------------------------------------------------------------------------------------------------------------
//EDICIÓN
//----------------------------------------------------------------------------------------------------------------------
window.OTNoEditable = "No se puede editar esta OT.";

//----------------------------------------------------------------------------------------------------------------------
//String.format {0}
//----------------------------------------------------------------------------------------------------------------------

function FormatoMensajeExcepcion(mensaje, err) {

    if (mensaje == null || mensaje == "" || mensaje == undefined ||
        err == null || err == "" || err == undefined)
        return;

    return (String.format(mensaje, { excepcion: err }));

};

function FormatoMensajePolizaSinAsegurados(mensaje, intNumOrden) {

    if (mensaje == null || mensaje == "" || mensaje == undefined ||
        intNumOrden == null || intNumOrden == "" || intNumOrden == undefined)
        return;

    return (String.format(mensaje, { numeroOrden: intNumOrden }));

};

function FormatoMensajeDireccionEmailIncorrecta(mensaje, strCampo) {

    if (mensaje == null || mensaje == "" || mensaje == undefined ||
        strCampo == null || strCampo == "" || strCampo == undefined)
        return;

    return (String.format(mensaje, { campo: strCampo }));

};

function FormatoMensajeParametros(mensaje, funcion) {

    if (mensaje == null || mensaje == "" || mensaje == undefined ||
        funcion == null || funcion == "" || funcion == undefined)
        return;

    return (String.format(mensaje, { funcion: funcion }));

};

function FormatoMensajeNumeroEscalones(mensaje, numeroEscalones) {

    if (mensaje == null || mensaje == "" || mensaje == undefined ||
        numeroEscalones == null || numeroEscalones == "" || numeroEscalones == undefined)
        return;

    return (String.format(mensaje, { numeroEscalones: numeroEscalones }));

};

function FormatoMensajeArrayVacio(mensaje, funcion) {

    if (mensaje == null || mensaje == "" || mensaje == undefined ||
        funcion == null || funcion == "" || funcion == undefined)
        return;

    return (String.format(mensaje, { funcion: funcion }));

};

function FormatoMensajeOrdenTrabajo(mensaje, intNumOrden) {

    if (mensaje == null || mensaje == "" || mensaje == undefined ||
        intNumOrden == null || intNumOrden == "" || intNumOrden == undefined)
        return;

    return (String.format(mensaje, { numeroOrden: intNumOrden }));

};

function FormatoMensajeNumeroPolizaAsignado(mensaje, intNumOrden) {

    if (mensaje == null || mensaje == "" || mensaje == undefined ||
        intNumOrden == null || intNumOrden == "" || intNumOrden == undefined)
        return;

    return (String.format(mensaje, { numPoliza: intNumOrden }));

};

function FormatoMensajeContactoAsegurado(mensaje, strContactoFilial) {

    if (mensaje == null || mensaje == "" || mensaje == undefined ||
        strContactoFilial == null || strContactoFilial == "" || strContactoFilial == undefined)
        return;

    return (String.format(mensaje, { contactoFilial: strContactoFilial }));

};

function FormatoMensajeExcepcionAJAX(mensaje, funcion, errorThrown) {

    if (mensaje == null || mensaje == "" || mensaje == undefined ||
        errorThrown == null || errorThrown == "" || errorThrown == undefined)
        return;

    return (String.format(mensaje, { descripcionError: errorThrown, nombreFuncion: funcion }));

};

function FormatoMensajeAltaAseguradosIncisos(mensaje) {
    
    if (mensaje == null || mensaje == "" || mensaje == undefined)
        return;

    return (String.format(mensaje));

};

//----------------------------------------------------------------------------------------------------------------------
//alertaDialog
//----------------------------------------------------------------------------------------------------------------------

function MsgAdvertencia(mensaje) {
    alertaDialog(mensaje, "Advertencia", false, "fa fa-exclamation-triangle fa-lg", false, null)
};

function MsgAdvertenciaReload(mensaje, reloadPage) {
    alertaDialog(mensaje, "Advertencia", reloadPage, "fa fa-exclamation-triangle fa-lg", false, null)
};

function MsgInformativo(mensaje) {
    alertaDialog(mensaje, "Informativo", false, "fa fa-exclamation-triangle fa-lg", false, null)
};

function MsgInformativo(mensaje, ejecFuncion, funcion, reload) {
    alertaDialog(mensaje, "Informativo", reload, "fa fa-exclamation-triangle fa-lg", ejecFuncion, funcion)
};

function MsgInformativoReload(mensaje) {
    alertaDialog(mensaje, "Informativo", true, "fa fa-exclamation-triangle fa-lg", false, null)
};

function MsgConfirmacion(mensaje) {
    alertaDialog(mensaje, "Confirmación", false, "fa fa-exclamation-triangle fa-lg", false, null)
};

function MsgExcepcion(mensaje) {
    alertaDialog(mensaje, "Excepcion", false, "fa fa-exclamation-triangle fa-lg", false, null)
};

function alertaDialog(mnsalert, mnsTitulo, reloadPage, iconoMns, ejecFuncion, funcion) {
    AlertAPP.MostrarMensaje(mnsalert, mnsTitulo, reloadPage, iconoMns, ejecFuncion, funcion);
};