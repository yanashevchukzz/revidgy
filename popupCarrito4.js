    var intervalShakeActive
    var cantidadCarritoShake = parseInt($("#currentOrderQuantity").val());
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    function notifyChange() {
        clearInterval(intervalShakeActive);
        document.cookie = "notif=1";
        dataLayer.push({
        ecommerce: {
              promoClick: {
                promotions: [
                 //Promotions de Carrito abandonado
                 {
                   id: 'Home|Menu|Carrito abandonado',
                   name: 'Carrito abandonado',
                   creative: 'Mensaje',
                   position: '1'
                 }
               ]
              }
            },
        nd1:'EEC - Promo - Selección',
        nd2:'Home|Menu|Carrito abandonado',
        nd3:'<<Carrito|Cerrar>>',
        nd4:'',
        event:'clicCarritoAbandonado'
        });
    }
    $(document).ready(function () {
        if(getCookie("notif") != "1") {
            $(".carrito").append(
                '<div class="notif-carrito">'+
                    'Los productos de tu carrito te esperan. ¡Termina tu compra!'+
                    '<div class="flecha-notif">'+
                    '</div>'+
                    '<button class="close-notif" onclick="$(this).parent().fadeOut();notifyChange();">x</button>'+
                '</div>'
            );

            var noco = getCookie("notif");
            if (noco == "0" || noco == "") {

                if (cantidadCarritoShake && cantidadCarritoShake >  0){
                    intervalShakeActive = setInterval(function () {
                        $(".carritoIcon").addClass('shake');
                        var intervalShake = setInterval(function () {
                            $(".carritoIcon").removeClass('shake');
                            clearInterval(intervalShake);
                        }, 2000);
                    }, 10000);
                } 
                
                var interval = setInterval(function () {
                    if ($('.badge').is(":visible")) {
                        $('.notif-carrito').css("visibility", "visible");
                        dataLayer.push({
                            ecommerce: {
                                promoView: {
                                    promotions: [
                                        //Promotions de Sección carrito abandonado
                                        {
                                            id: 'Home|Menu|Carrito abandonado', 
                                            name: 'Carrito abandonado',
                                            creative: 'Mensaje',
                                            position: '1'
                                       }
                                    ]
                                }
                            },
                            nd1:'EEC - Promo - Impresion',
                            nd2:'Home|Menu|Carrito abandonado',
                            nd3:'',
                            nd4:'',
                            event: 'ImpresionCarritoAbandonado'
                        });
                        clearInterval(interval);
                    }
                }, 18000);
            } else {
                $('.notif-carrito').css("visibility", "visible");
            }   
        }
    });