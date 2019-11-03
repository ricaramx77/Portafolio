/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                    *
* Autor: Cjchavez                                                                                                    *
*                                                                                                                    *
* Fecha: 06/12/2016                                                                                                  *
*                                                                                                                    *
* Descripcion: Funcionalidad para el menú                                                                            *
*                                                                                                                    *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

$(document).ready(function () {
    
    Menu.Inicializar();
});

$(document).on({
    ajaxStart: function () {
        Menu.RemoverClase();       
    },
    ajaxStop: function () {        
        Menu.AgregarClase();
    }
});

$(document).on('submit', 'form', function () {

    Menu.RemoverClase();
})

var Menu = (function () {

    var HeightHidden;   
   
    function Inicializar() {

        //Resaltamos la opcion del menu en la que esta posicionada el usuario
        $('a[href="' + window.location.pathname + '"]').parents('li.dropdown').addClass('active is-open');

        $(".btn").tooltip({});
        $("form input").tooltipValidation({
            placement: "bottom"
        });

        //Estilo para resaltado de menú
        $(".dropdown").hover(function () {
            $(this).addClass('active');
        }, function () {
            $(this).removeClass('active');
        });

        $(".dropdown-toggle").hover(function () {
            $(this).addClass('active');
        }, function () {
            $(this).removeClass('active');
        });

        $("#lnkAltaOTEmpresarial").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.AltaOTEmpresarial);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.MULTIPOLIZA.value);
        });

        $("#lnkAltaOTFamiliar").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.AltaOTFamiliar);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.MULTIPOLIZA_FAMILIAR.value);
        });

        $("#lnkAltaOTTransportes").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.AltaOTTransporte);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.TRANSPORTES.value);
        });

        $("#lnkAltaOTIncendio").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.AltaOTIncendio);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.INCENDIO.value);
        });

        $("#lnkAltaOTDiversos").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.AltaOTDiversos);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.DIVERSOS.value);
        });

        $("#lnkAltaOTGMM").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.OTGMM);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.GASTOS_MEDICOS_MAYORES.value);
        });
        $("#lnkAltaOTAccidentes").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.OTAccidentes);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.ACCIDENTES_PERSONALES.value);
        });
        $("#lnkAltaOTVida").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.AltaOTVida);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.VIDA.value);
        });
        $("#lnkAltaOTDental").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.AltaOTDental);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.DENTAL.value);
        });
        $("#lnkAltaOTCascos").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.AltaOTCascos);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.CASCOS.value);
        });
        $("#lnkAltaOTFinancieras").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.AltaOTFinancieras);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.FINANCIERAS.value);
        });
        $("#lnkAltaOTAnimal").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.AltaOTAnimal);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.ANIMAL.value);
        });

        $("#lnkAltaOTRC").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.AltaOTRC);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.RESPONSABILIDAD_CIVIL.value);
        });

        $("#lnkEndosos").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.Endosos);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.ENDOSOS.value);
        });

        $("#lnkOrdenTrabajo").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.OrdenTrabajo);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.ORDEN_TRABAJO.value);
        });

        $("#lnkUbicaciones").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.Ubicaciones);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.UBICACIONES.value);
        });

        $("#lnkAseguradosContactos").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.AseguradosContactos);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.ASEGURADOS_CONTACTOS.value);
        });

        $("#lnkGastosMedicosGruposIncisos").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.GastosMedicosGrupoIncisos);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.GASTOS_MEDICOS_GRUPO_INCISOS.value);
        });

        $("#lnkConsultaTab").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.ConsultaTab);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.CONSULTA_TAB.value);
        });

        $("#lnkOrdenCobro").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.OrdenCobro);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.ORDEN_COBRO.value);
        });

        $("#lnkConsultas").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.Consultas);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.CONSULTAS.value);
        });

        $("#lnkAltaOtrosIngresos").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.AltaOtrosIngresos);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.ALTA_OTROS_INGRESOS.value);
        });

        $("#lnkEdicionOT").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.EdicionOT);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.EDICION_OT.value);
        });

        $("#lnkRenovacionPoliza").click(function () {
            localStorage.setItem("leyendaTitulo", LeyendasMenu.RenovacionaPoliza);
            localStorage.setItem("ramoSeleccionado", Enum.Ramo.RENOVACION_POLIZA.value);
        });
    }

    function AgregarClase() {

        $("#jqxLoader").addClass("hidden");
    }

    function RemoverClase() {

        Menu.HeightHidden = $("#wrapper").height() + "px";
        $("#jqxLoader").css("height", Menu.HeightHidden);
        $("#jqxLoader").removeClass("hidden");
    }

    //Miembros públicos
    return {
        //Propiedades
        HeightHidden: HeightHidden,
        //Métodos
        Inicializar: Inicializar,
        AgregarClase: AgregarClase,
        RemoverClase: RemoverClase
    };
})();