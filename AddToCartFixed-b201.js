
	var objSticky = {
		ancla : function(){
			try{
				$('.shopperActions').addClass('anclado');
				$('.definingAttributes').addClass('anclado');
				$('.shopperActions #add2CartBtn').attr('data-sticky', 'true');
				$('#divMotoInCart').addClass('hideDivMoto');
			}catch(e){
				console.log('error'+e);
			}
		},
		quitarAncla : function (){
			try{
				$('.shopperActions').removeClass('anclado');
				$('.definingAttributes').removeClass('anclado');
				$('#divMotoInCart').removeClass('hideDivMoto');
				$('.shopperActions #add2CartBtn').attr('data-sticky', 'false');
			}catch(e){
				console.log('error'+e);
			}
		},
		quitarAnclaEncabezado : function(){
			try{
				$('.productpage h1.main_header').removeClass('anclado');
				$('.productpage .namePartPriceContainer .sku').removeClass('anclado');
				$('#ProductAngleImagesAreaList li#productAngleLi0').removeClass('anclado');
			}catch(e){
				console.log('error'+e);
			}
			
		},
		anclaEncabezado : function(){
			try{
				$('.productpage h1.main_header').addClass('anclado');
				$('.productpage .namePartPriceContainer .sku').addClass('anclado');
				$('#ProductAngleImagesAreaList li#productAngleLi0').addClass('anclado');
			}catch(e){
				console.log('error'+e);
			}
			
		}
	}
	
	var p = $( "#add2CartBtn" );
	var offset = p.offset();
	offset.top -= 40;
	
	$(window).scroll(function (){
		try{
			var posicion = $(window).scrollTop();
			var ancho    = $(window).width();

			if( ancho < 768 ){
				if(posicion < offset.top){ objSticky.quitarAncla(); }
				if(posicion > offset.top){ objSticky.ancla(); }
			}	

			if( ancho >= 768 && ancho < 992 ){
				objSticky.quitarAnclaEncabezado();

				if(posicion < (offset.top - 60)){ objSticky.quitarAncla(); }
				if(posicion > (offset.top - 60)){ objSticky.ancla(); }
			}

			if( ancho >= 992 ){
				if(posicion < 400){
					objSticky.quitarAncla();
					objSticky.quitarAnclaEncabezado();
				}

				if(posicion > 400){ objSticky.ancla(); }
				if( ancho >= 1200 && posicion > 400 ){ objSticky.anclaEncabezado(); }
			}
		}catch(e){
			console.log('error'+e);
		}
	});
	
	
	if($('#shopperActionsUnavailable').length > 0 && $('#shopperActionsUnavailable').is(':visible')){
		
		$(".definingAttributes").hide();
	}
	

	if($('#add2CartBtn.btn-cancelar').length > 0 && $('#shopperActionsUnavailable').not(':visible')){
		
		$("#productPageSearchInStore").addClass("no_sticky");
		
	}
	
	//tag descuento en detalle de producto
	
	try{
		var isOferta = $('.info_product .tam_normal span[id*="offerPrice_"]').is(':visible');
		if(isOferta){
			var precioReal = parseInt( $('.info_product .priceTable .p_oferta span[class*="listPrice"]').html().trim().replace('$','').replace(',','') );
			var precioOferta  = parseInt( $('.info_product .priceTable .p_oferta input[id*="ProductInfoPrice_"]').val().replace('$','').replace(',','') );
			var totalDescuento = precioReal - precioOferta;
			var porcentajeDescuentoString = totalDescuento.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
			var totalDescuento = totalDescuento.toString();
			var porcentajeDescuento = Math.floor( (totalDescuento / precioReal ) * 100);
		
			if( porcentajeDescuento >= 10 ){
				// Porcentaje
				$('.info_product .tam_normal').append('<p class="discountRibbon">Ahorra $'+ porcentajeDescuentoString +' ('+porcentajeDescuento+'%)</p>');
			}
		}
	}catch(e){
		console.log('error'+e);
	}