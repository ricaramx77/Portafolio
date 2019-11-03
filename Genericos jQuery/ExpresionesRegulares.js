/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*                                                                                                                      *
* Autor: Ricardo Rangel (Towa)                                                                                         *
*                                                                                                                      *
* Fecha: 19/12/2016                                                                                                    *
*                                                                                                                      *
* Descripcion: Expresiones Regulares configurables para scripts.                                                       *
*                                                                                                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

window.expRegSoloLetrasNumeros = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ 0-9]+$/;
window.expRegSoloMayusculas = /^[A-ZÑ ]+$/;
window.expRegSoloMayusculasNumeros = /^[A-ZÑ 0-9]+$/;
window.expRegSoloMayusculasYMoneda = /^[a-zA-Z áéíóúñÁÉÍÓÚÑ 0-9 .$,]+$/;
window.expRegSoloNumeros = /^[0-9 ]+$/;
window.expRegSoloEnterosDecimalesMax_5 = /^[0-9]{1,2}([0-9 \.]{1,3}?)?$/;
window.expRegSoloEnterosDecimales = /^(\d|-)?(\d|,)*\.?\d*$/;
window.expRegSoloMoneda = /^[0-9 $., ]+$/;
window.expRegSoloNumerosSignos = /^[0-9 #().-]+$/;
window.expRegSoloNumerosPorcentaje = /^[0-9 %]+$/;
window.expRegSoloLetrasNumerosSignos = /^[a-zñA-ZÑ0-9 #().,-]+$/;
window.expRegSoloLetrasAcentos = /^[a-zA-Z+ áéíóúñÁÉÍÓÚÑ]+$/;
window.expRegSoloLetrasAcentosNumeros = /^[a-zA-Z áéíóúñÁÉÍÓÚÑ 0-9]+$/;
window.expRegSoloLetrasAcentosNumerosSignos = /^[a-zA-Z áéíóúñÁÉÍÓÚÑ 0-9 $#().-]+$/;
window.expRegEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*\u0040[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
window.expRegGenero = /^[MF]+$/;
window.expRegSoloMayusculasAcentosNumeros = /^[A-Z áéíóúñÁÉÍÓÚÑ 0-9]+$/;
window.expRegSoloNumerosDiagonal = /^[0-9 /]+$/;
window.expRegPaginaWeb = /^[a-zñA-ZÑ0-9 /.]+$/;
