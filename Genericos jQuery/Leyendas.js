/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                      *                                                     
* Autor: Ricardo Rangel Ramírez  (Towa)                                                                                *
*                                                                                                                      *                                                
* Fecha: 09/05/2017                                                                                                   *
*                                                                                                                      * 
* Descripcion: Script de métodos para paneles                                                                          *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var LeyendasMenu = (function () {

    var AltaOTEmpresarial = "Emisión Nueva Empresarial";
    var AltaOTFamiliar = "Emisión Nueva Casa Habitación";
    var AltaOTTransporte = "Emisión Nueva Transportes";
    var AltaOTIncendio = "Emisión Nueva Incendio";
    var AltaOTDiversos = "Emisión Nueva Diversos";
    var OTGMM = "Emisión Nueva Gastos Médicos Mayores";
    var OTAccidentes = "Emisión Nueva Accidentes Personales";
    var AltaOTVida = "Emisión Nueva Vida";
    var AltaOTRC = "Emisión Nueva Responsabilidad Civil";
    var AltaOTDental = "Emisión Nueva Dental";
    var AltaOTCascos = "Emisión Nueva Cascos";
    var AltaOTFinancieras = "Emisión Nueva Líneas Financieras";
    var AltaOTAnimal = "Emisión Nueva Agrícola Animal";
    var Endosos = "Endosos";
    var OrdenTrabajo = "Orden Trabajo";
    var Ubicaciones = "Ubicaciones";
    var GastosMedicosGrupoIncisos = "Gastos Médicos Grupos Incisos";
    var ConsultaTab = "Consulta Tab";
    var OrdenCobro = "Orden Cobro";
    var Consultas = "Consultas";
    var AltaOtrosIngresos = "Alta Otros Ingresos";
    var AseguradosContactos = "Filiales y Contactos";
    var EdicionOT = "Edición OT";
    var RenovacionaPoliza = "Renovación de Póliza";
   
    //Miembros públicos
    return {
        AltaOTEmpresarial: AltaOTEmpresarial,
        AltaOTFamiliar: AltaOTFamiliar,
        AltaOTTransporte: AltaOTTransporte,
        AltaOTIncendio: AltaOTIncendio,
        AltaOTDiversos: AltaOTDiversos,
        OTGMM: OTGMM,
        OTAccidentes: OTAccidentes,
        AltaOTVida: AltaOTVida,
        AltaOTRC: AltaOTRC,
        AltaOTDental: AltaOTDental,
        AltaOTCascos: AltaOTCascos,
        AltaOTFinancieras: AltaOTFinancieras,
        AltaOTAnimal: AltaOTAnimal,
        Endosos: Endosos,
        OrdenTrabajo: OrdenTrabajo,
        Ubicaciones: Ubicaciones,
        GastosMedicosGrupoIncisos: GastosMedicosGrupoIncisos,
        ConsultaTab: ConsultaTab,
        OrdenCobro: OrdenCobro,
        Consultas: Consultas,
        AltaOtrosIngresos: AltaOtrosIngresos,
        AseguradosContactos: AseguradosContactos,
        EdicionOT: EdicionOT,
        RenovacionaPoliza: RenovacionaPoliza
    };
})();

var LeyendasGridRenovaciones = (function () {

    var EsquemaPrimaContratada = "Pago de Renovación Vigencia";
    var Escalon = "Escalón";

    //Miembros públicos
    return {
        EsquemaPrimaContratada: EsquemaPrimaContratada,
        Escalon: Escalon
    };
})();
