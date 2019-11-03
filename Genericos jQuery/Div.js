/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                                                                                    
* Autor: Ricardo Rangel Ramírez                                                                                      *
*                                                                                                                    
* Fecha: 07/12/2016                                                                                                  *
*                                                                                                                    * 
* Descripcion: Script de métodos para eqtiquetas                                                                     *
*                                                                                                                    *
*																													 *
Nota:
* Para un mejor funcionamiento se recomienda agregar display:none en el div											 *
*																													 *
* Ej:
* 
* <div id="MiDiv" class="panel panel-primary small" style="border-color:black; border-width:2px; display: none;">
*
*                                                                                                                    *   
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var Div = (function () {

    function Ocultar(div) {

        try {
            if (div == null || div == "" || div == undefined)
                return;

            if ($.isArray(div)) {
                for (var i = 0; i < div.length; i = i + 1) {                                                                

                    $(div[i])[0].style.display = "none";
                }

            } else {                                

                $(div)[0].style.display = 'none';
            }
        }
        catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    }

    function Mostrar(div) {

        try {
            if (div == null || div == "" || div == undefined)
                return;

            if ($.isArray(div)) {
                for (var i = 0; i < div.length; i = i + 1) {                                       
                    $(div[i])[0].style.display = "block";
                }

            } else {
                                      
                $(div)[0].style.display = 'block';
            }
        }
        catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    }

    return {
        Ocultar: Ocultar,    
        Mostrar: Mostrar
    };
})();