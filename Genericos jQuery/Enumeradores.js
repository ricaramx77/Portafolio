/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*                                                                                                                      *
* Autor: Jorge Montoya Marin (Towa)                                                                                    *
*                                                                                                                      *
* Fecha: 26/01/2017                                                                                                    *
*                                                                                                                      *
* Descripcion: Enumeradores para scripts.                                                                              *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var Enum = (function () {

    var EstatusOT = {

        SOLICITUD:{ value: 1 },
        TERMINADA:{ value: 2 },
        CALIFICAR_POR_TECNICO:{ value: 3 },
        RECHAZADA_POR_TECNICO:{ value: 4 },
        POR_ENVIAR_A_LA_ASEGURADORA:{ value: 5 },
        ENVIADO_A_LA_ASEGURADORA:{ value: 6 },
        RECIBIDA_POR_LA_ASEGURADORA:{ value: 7 },
        REGISTRO_DEL_ENDOSO:{ value: 8 },
        ENVIADA_AL_CLIENTE:{ value: 9 },
        RECHAZADA_POR_ASEGURADORA:{ value: 10 },
        ENTREGADA_AL_TECNICO:{ value: 11 },
        RECIBIDA_EN_GRUPO_ORDAS:{ value: 12 },
        CANCELADA:{ value: 13 }
    };

    var TipoBusquedaOT = {

        POR_OT:{ value:1 },
        POR_POLIZA: { value:2 },
        POR_CLIENTE: { value:3}
    };

    var Renovaciones = {

        NUMERO_ESCALONES: { value: 4 }   
    };

    var SubRamo = {            
        EMBARQUES_ESPECIFICOS:{value:92},
        DECLARACION_MENSUAL_DE__EMBARQUES:{value:93},
        DECLARACION_ANUAL_DE_VENTAS_EMBARQUES: { value: 94 },
        GRUPO: { value: 111 },
        INDIVIDUAL: { value: 112 }
    };

    var SubTipoEndoso = {

        //Descripcion y clave de los suptipos para Endosos Tipo A.
        ALTA_COBERTURAS: { value: 42 },

        //Descripcion y clave de los suptipos para Endosos Tipo B.
        MODIFICACION_ASEGURADOS: { value: 108 },

        //Descripcion y clave de los suptipos para Endosos Tipo D.
        BAJA_COBERTURAS: { value: 48 }
    };                             
   
    var Ramo = {
    
        INCENDIO_RAYO: { value: 1 },

        AUTOMOVILES: { value: 2 },

        TRANSPORTES: { value: 3 },

        TERREMOTO_ERUPCION_VOLCANICA: { value: 4 },

        OTROS: { value: 5 },

        MULTIPOLIZA: { value: 6 },

        DIVERSOS: { value: 7 },

        RESPONSABILIDAD_CIVIL: { value: 8 },

        ACCIDENTES_ENFERMEDADES: { value: 9 },

        VIDA: { value: 10 },

        ACCIDENTES_PERSONALES: { value: 11 },

        VIDA_GRUPO: { value: 12 },

        INCENDIO: { value: 13 },

        MULTIPOLIZA_FAMILIAR: { value: 14},

        CASCOS: { value: 19 },

        GASTOS_MEDICOS_MAYORES: { value: 20 },

        DENTAL: { value: 21 },

        //                                                  //Estos no pertenecen a la tabla CM_C_RAMOS. Son usados en el menu.
        ENDOSOS: { value: 201 },
        ORDEN_TRABAJO: { value: 202 },
        UBICACIONES: { value: 203 },
        GASTOS_MEDICOS_GRUPO_INCISOS: { value: 204 },
        CONSULTA_TAB: { value: 205 },
        ORDEN_COBRO: { value: 206 },
        CONSULTAS: { value: 207 },
        ALTA_OTROS_INGRESOS: { value: 208 },
        ASEGURADOS_CONTACTOS: { value: 209 },
        EDICION_OT: { value: 210 },
        RENOVACION_POLIZA: { value: 211 }
    }

    var TipoExcel = {
        CONTACTOS: { value: 1 },

        ASEGURADOS: { value: 2 },

        UBICACIONES: { value: 3 }
    };

    return {
        EstatusOT: EstatusOT,
        TipoBusquedaOT: TipoBusquedaOT,
        Renovaciones: Renovaciones,
        SubRamo: SubRamo,
        SubTipoEndoso:SubTipoEndoso,
        Ramo: Ramo,
        TipoExcel: TipoExcel
    };
})();