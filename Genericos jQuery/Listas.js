var Listas = (function () {

    function VerificarSiHayElementos(lista) {

        try {

            if (lista == null || lista == "" || lista == undefined)                
                return;

            if ($(lista + " li").length > 0) {
                return true
            }

            return false;

        } catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    }

    function VerificarSiExisteElemento(lista, id) {

        try {

            if (lista == null || lista == "" || lista == undefined ||
                id == null || id == "" || id == undefined )
                return;

            if ($(lista + " " + id).length > 0) {
                return true
            }

            return false;

        } catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }        
    }

    function AgregarElemento(lista, id) {          

        try {

            if (lista == null || lista == "" || lista == undefined ||
                id == null || id == "" || id == undefined)
                return;

            $(lista).append("<li id=" + id + " class='list-group-item'>" + id + "</li>");                

        } catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }        
    }   

    function RemoverElementosTodos(lista) {

        try {

            if (lista == null || lista == "" || lista == undefined)                
                return;

                $(lista).empty();

        } catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }        
    }

    function ObtenerElementosSeleccionados() {

        try {
            
            var checkedItems = [], counter = 0;

            $("li.active").each(function (idx, li) {
                checkedItems[counter] = $(li).text();
                counter++;
            });

            return checkedItems;

        } catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    }

    function ObtenerElementos(lista) {

        try {

            if (lista == null || lista == "" || lista == undefined)
                return;

            var elementos = [], counter = 0;

            $(lista + " li").each(function (idx, li) {
                elementos[counter] = $(li).text();
                counter++;
            });

            return elementos;

        } catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }
    }

    //Código tomado de bootsnipp
    //https://bootsnipp.com/snippets/featured/checked-list-group
    function AgregarFormatoElemento() {

        try {

            $('.list-group.checked-list-box .list-group-item').each(function () {

                // Settings
                var $widget = $(this),
                    $checkbox = $('<input type="checkbox" class="hidden" />'),
                    color = ($widget.data('color') ? $widget.data('color') : "primary"),
                    style = ($widget.data('style') == "button" ? "btn-" : "list-group-item-"),
                    settings = {
                        on: {
                            icon: 'glyphicon glyphicon-check'
                        },
                        off: {
                            icon: 'glyphicon glyphicon-unchecked'
                        }
                    };

                $widget.css('cursor', 'pointer')
                $widget.append($checkbox);

                // Event Handlers
                $widget.on('click', function () {
                    $checkbox.prop('checked', !$checkbox.is(':checked'));
                    $checkbox.triggerHandler('change');
                    updateDisplay();
                });
                $checkbox.on('change', function () {
                    updateDisplay();
                });


                // Actions
                function updateDisplay() {
                    var isChecked = $checkbox.is(':checked');

                    // Set the button's state
                    $widget.data('state', (isChecked) ? "on" : "off");

                    // Set the button's icon
                    $widget.find('.state-icon')
                        .removeClass()
                        .addClass('state-icon ' + settings[$widget.data('state')].icon);

                    // Update the button's color
                    if (isChecked) {
                        $widget.addClass(style + color + ' active');
                    } else {
                        $widget.removeClass(style + color + ' active');
                    }
                }

                // Initialization
                function init() {

                    if ($widget.data('checked') == true) {
                        $checkbox.prop('checked', !$checkbox.is(':checked'));
                    }

                    updateDisplay();

                    // Inject the icon if applicable
                    if ($widget.find('.state-icon').length == 0) {
                        $widget.prepend('<span class="state-icon ' + settings[$widget.data('state')].icon + '"></span>');
                    }
                }
                init();
            });

        } catch (err) {
            swal(
                'Error',
                err,
                'warning'
            )
        }       
    }
    
    return {
        VerificarSiHayElementos: VerificarSiHayElementos,
        VerificarSiExisteElemento: VerificarSiExisteElemento,      
        AgregarElemento: AgregarElemento,  
        AgregarFormatoElemento: AgregarFormatoElemento,
        RemoverElementosTodos: RemoverElementosTodos,
        ObtenerElementosSeleccionados: ObtenerElementosSeleccionados,
        ObtenerElementos: ObtenerElementos
    };
})();
