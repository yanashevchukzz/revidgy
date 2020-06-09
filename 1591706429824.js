com_sas_ci_acs.ob_boot = {
    getDatahubId:function(){
    return com_sas_ci_acs.ob_util.ckR('_SI_DID_1.df2b9cb68c00010112fb657b');
	},
    setDatahubId:function(datahubid){
		com_sas_ci_acs.ob_util_async.ckW('_SI_DID_1.df2b9cb68c00010112fb657b',datahubid,'/','.coppel.com,.www.coppel.com',1654778453364);
	}
};
(function(doc, script) {
    var js, 
        fjs = doc.getElementsByTagName(script)[0],
        add = function(url, id) {
            if (doc.getElementById(id)) {return;}
            js = doc.createElement(script);
            js.async = 1;
            js.src = url;
            id && (js.id = id);
            fjs.parentNode.insertBefore(js, fjs);
        }
if(typeof(com_sas_ci_acs.version)==="undefined" || com_sas_ci_acs.version.split('.')[0] < 1){
    com_sas_ci_acs.ob_util.ckW('_SI_VID_1.df2b9cb68c00010112fb657b','ad6263fb70504a5a67af9d73','/','.coppel.com,.www.coppel.com',1654778453364);
}
else{
    com_sas_ci_acs.ob_util_async.ckW('_SI_VID_1.df2b9cb68c00010112fb657b','ad6263fb70504a5a67af9d73','/','.coppel.com,.www.coppel.com',1654778453364);
}
if(typeof(com_sas_ci_acs.version)==="undefined" || com_sas_ci_acs.version.split('.')[0] < 1){
    com_sas_ci_acs.ob_util.ckW('_SI_DID_1.df2b9cb68c00010112fb657b','4face293-f81d-3e11-89b1-24fcd9ed152e','/','.coppel.com,.www.coppel.com',1654778453364);
}
else{
    com_sas_ci_acs.ob_util_async.ckW('_SI_DID_1.df2b9cb68c00010112fb657b','4face293-f81d-3e11-89b1-24fcd9ed152e','/','.coppel.com,.www.coppel.com',1654778453364);
}
    com_sas_ci_acs.ob_util_async.load_guid = '89a6adbebd2cf00d1dc09d38';
if(typeof(com_sas_ci_acs.version)==="undefined" || com_sas_ci_acs.version.split('.')[0] < 1){
    com_sas_ci_acs.ob_util.sckW('_SI_SID_1.df2b9cb68c00010112fb657b','0e6b9c65e0ff6b34b70583ed','/','.coppel.com,.www.coppel.com',new Date().getTime(),12265);
}
else{
    com_sas_ci_acs.ob_util_async.sckW('_SI_SID_1.df2b9cb68c00010112fb657b','0e6b9c65e0ff6b34b70583ed','/','.coppel.com,.www.coppel.com',new Date().getTime(),12265);
}


}(document, 'script'));
com_sas_ci_acs._ob_configure.prototype.ob_cfg = function()
{
   this.ccs='https://eventsingest-prod.ci360.sas.com/t/e/df2b9cb68c00010112fb657b';
   this.csu='https://tngcicplusp-ads.aimatch.com/tngcicplusp/hserver';
   this.maxContentChange=10;
   this.maxJsVarChange=10;
this.maxMediaEvents=200;this.maxTotalEvents=2000;   this.batchSpots=true;
   this.timeout=2000;
   this.maxCCMatches=10;
   this.customerSpotDelivery=false;
   this.virtualSpotClassId='';
   if(typeof(com_sas_ci_acs.version)==="undefined" || com_sas_ci_acs.version.split('.')[0] < 1){
      this.load_guid = '89a6adbebd2cf00d1dc09d38';
   }
   else{
      this.load_guid = com_sas_ci_acs.ob_util_async.load_guid;
   }
   this.thousands_separator=',';
   this.decimal_separator='.';
   if(typeof(com_sas_ci_acs.ob_util.setBaseTimestamp)!=="undefined"){
      com_sas_ci_acs.ob_util.setBaseTimestamp(1591706453364);
   }
   this.sendBodyAsHeaderAll=false;
   this.sendBodyAsHeaderLoad=false;
   this.trackCancelledEvents=false;
   this.trackEventResponses=false;
}
com_sas_ci_acs._ob_configure.prototype.getVisitorId = function()
{
    return com_sas_ci_acs.ob_util.ckR('_SI_VID_1.df2b9cb68c00010112fb657b');
}
com_sas_ci_acs._ob_configure.prototype.getDatahubId = function()
{
     return com_sas_ci_acs.ob_boot.getDatahubId();
}
com_sas_ci_acs._ob_configure.prototype.getSessionId = function()
{
    var v=com_sas_ci_acs.ob_util.ckR('_SI_SID_1.df2b9cb68c00010112fb657b');
    if (v==null) return '';
    return v.split('.')[0];
}
com_sas_ci_acs._ob_configure.prototype.getLastActivity = function()
{
    var v=com_sas_ci_acs.ob_util.ckR('_SI_SID_1.df2b9cb68c00010112fb657b');
    if (v==null) return 0;
    var a=v.split('.');
    if (a.length < 2) return 0;
    return a[1];
}
com_sas_ci_acs._ob_configure.prototype.getMaxInactivity = function()
{
    var v=com_sas_ci_acs.ob_util.ckR('_SI_SID_1.df2b9cb68c00010112fb657b');
    if (v==null) return 0;
    var a=v.split('.');
    if (a.length < 3) return 0;
    return a[2];
}
com_sas_ci_acs._ob_configure.prototype.updateActivity = function(ts1, ts2)
{
 var latestSid=this.getSessionId(); latestSid = latestSid?latestSid:'0e6b9c65e0ff6b34b70583ed';    com_sas_ci_acs.ob_util.sckW('_SI_SID_1.df2b9cb68c00010112fb657b', latestSid , '/','.coppel.com,.www.coppel.com', ts1, ts2);
}
com_sas_ci_acs.ob_event.prototype.termConfiguration = function()
{
    var terms = {};

    terms['global'] = {};
    terms['find'] = {};
    terms['load'] = {};
    terms['tsp'] = {};
    terms['DOMContentLoaded'] = {};
    terms['click'] = {};
    terms['exclude'] = {};
    terms['blur'] = {};
    terms['change'] = {};
    terms['cart'] = {};
    terms['submit'] = {};

if(!com_sas_ci_acs.csz){com_sas_ci_acs.csz=document.documentElement.outerHTML.length;}if(!com_sas_ci_acs.bsz){com_sas_ci_acs.bsz=window.innerWidth+'x'+window.innerHeight;}terms['global']['page_title'] = document.title;
terms['global']['referrer'] = document.referrer;
terms['global']['uri'] = document.URL;
terms['global']['requestedfile'] = com_sas_ci_acs.ob_util.parseUri(document.URL).path;
terms['load']['tzo'] = new Date().getTimezoneOffset();
terms['load']['platform'] = navigator.platform;
terms['load']['cpu'] = navigator.cpuClass;
terms['load']['port'] = location.port;
terms['load']['protocol'] = com_sas_ci_acs.ob_util.location();
terms['load']['flash_enabled'] = com_sas_ci_acs.ob_util.flash().e;
terms['load']['flash_version'] = com_sas_ci_acs.ob_util.flash().v;
terms['load']['javascript_enabled'] = true;
terms['load']['java_enabled'] = com_sas_ci_acs.ob_util.java().e;
terms['load']['java_version'] = com_sas_ci_acs.ob_util.java().v;
terms['load']['screen_info'] = screen.width + 'x' + screen.height + '@' + screen.colorDepth;
if (!com_sas_ci_acs.ob_util.isUndefined(document.documentElement)&&(null!=document.documentElement.getAttribute('lang'))) terms['load']['html.lang'] = document.documentElement.getAttribute('lang');
if (!com_sas_ci_acs.ob_util.isUndefined(document.documentElement)&&(null!=document.documentElement.getAttribute('xml:lang'))) terms['load']['html.xml:lang'] = document.documentElement.getAttribute('xml:lang');
terms['load']['browser_language'] = !com_sas_ci_acs.ob_util.isUndefined(navigator.language) ? navigator.language : navigator.browserLanguage;
terms['load']['character_set'] = com_sas_ci_acs.ob_util.isUndefined(document.charset)?document.characterSet:document.charset;
terms['load']['csz'] = com_sas_ci_acs.csz;
terms['load']['bsz'] = com_sas_ci_acs.bsz;
terms['DOMContentLoaded']['tzo'] = new Date().getTimezoneOffset();
terms['DOMContentLoaded']['platform'] = navigator.platform;
terms['DOMContentLoaded']['cpu'] = navigator.cpuClass;
terms['DOMContentLoaded']['port'] = location.port;
terms['DOMContentLoaded']['protocol'] = com_sas_ci_acs.ob_util.location();
terms['DOMContentLoaded']['flash_enabled'] = com_sas_ci_acs.ob_util.flash().e;
terms['DOMContentLoaded']['flash_version'] = com_sas_ci_acs.ob_util.flash().v;
terms['DOMContentLoaded']['javascript_enabled'] = true;
terms['DOMContentLoaded']['java_enabled'] = com_sas_ci_acs.ob_util.java().e;
terms['DOMContentLoaded']['java_version'] = com_sas_ci_acs.ob_util.java().v;
terms['DOMContentLoaded']['screen_info'] = screen.width + 'x' + screen.height + '@' + screen.colorDepth;
if (!com_sas_ci_acs.ob_util.isUndefined(document.documentElement)&&(null!=document.documentElement.getAttribute('lang'))) terms['DOMContentLoaded']['html.lang'] = document.documentElement.getAttribute('lang');
if (!com_sas_ci_acs.ob_util.isUndefined(document.documentElement)&&(null!=document.documentElement.getAttribute('xml:lang'))) terms['DOMContentLoaded']['html.xml:lang'] = document.documentElement.getAttribute('xml:lang');
terms['DOMContentLoaded']['browser_language'] = !com_sas_ci_acs.ob_util.isUndefined(navigator.language) ? navigator.language : navigator.browserLanguage;
terms['DOMContentLoaded']['character_set'] = com_sas_ci_acs.ob_util.isUndefined(document.charset)?document.characterSet:document.charset;
terms['DOMContentLoaded']['csz'] = com_sas_ci_acs.csz;
terms['DOMContentLoaded']['bsz'] = com_sas_ci_acs.bsz;

terms['cart']['pe_14bd329ddf38b0fab6c3fab7bb044626'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#order_details > div.order_item.row > div > div > a > p.nombre_producto','innerText','none','');};}();
terms['cart']['pe_222a006fc83effe9d2c7f080ffbcf8ee'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#order_details > div.order_item.row > div > div > a > img.img-responsive','src','regex','[0-9][0-9][0-9][0-9][0-9][0-9][0-9]');};}();
terms['cart']['pe_2546dddc95ff6855ba1fa8d1fd681c26'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#order_details > div.summary_title.col-xs-12','innerText','before','(');};}();
terms['cart']['pe_3722576dc5a81de7be7f749a3e51a669'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#order_details > div.order_item.row > div > dl.clearfix > dd.precios-producto-carrito > span > b','innerText','after','$');};}();
terms['cart']['pe_4b84908134d33b999ca01e57d2b03ad5'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('#currentOrderId','value','none','');};}();
terms['cart']['pe_4bea368ebf407f420a995785d82581cd'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('td#WC_SingleShipmentOrderTotalsSummary_td_13','innerText','after','$');};}();
terms['cart']['pe_57956e4b158bf158efff952198f33c5c'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#order_details > div > div > div > span.nombre_articulo','innerText','none','');};}();
terms['cart']['pe_5b27c24060054ccb6d3573aa7542a892'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#shipping > div.col-xs-12.col-md-8 > div#OrderConfirmPagingDisplay > div#order_details > div > div > div> span.nombre_articulo','innerText','none','');};}();
terms['cart']['pe_743482c8a2eb47d49a15c7dd81d92f4d'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#order_details:nth-child(2) > p:nth-child(5)','innerHTML','after_last','&nbsp;');};}();
terms['cart']['pe_76d6fd178930297c48cecba65f225099'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('span#WC_OrderShippingBillingConfirmationPage_span_1','innerText','none','');};}();
terms['cart']['pe_870ee0cf35776863cb554252d4c2b73b'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#order_details > div.order_item.row > div > p.item-quantity > input','value','none','');};}();
terms['cart']['pe_886dc094894edca0af395c34ad5f5f35'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_CheckoutPaymentAndBillingAddressSummaryf_div_3_1 > div.row.rc_color > div.col-xs-12.col-sm-7 > b','innerText','none','');};}();
terms['cart']['pe_8cff27a75d952ac3ce164f9aa2857c5b'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('#currentOrderAmount','value','after','$');};}();
terms['cart']['pe_8dedec2965aef3fc94b0f1dbeda5a026'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#order_details:nth-child(2) > p:nth-child(5)','innerHTML','after_last',';');};}();
terms['cart']['pe_9f920bb5fee5bd399990031b698368b3'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_CheckoutPaymentAndBillingAddressSummaryf_div_3_1:nth-child(2) > div.row.rc_color:nth-child(2) > div.col-xs-12.col-sm-7:nth-child(2)','innerText','none','');};}();
terms['cart']['pe_a63f5fd837454915bb716a0bd4d585f4'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#order_details > div > div > div > img','outerHTML','regex','[0-9][0-9][0-9][0-9][0-9][0-9][0-9]');};}();
terms['cart']['pe_b65c2c6da99cb2911f050a34a5d108b7'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('table#order_total > tbody > tr.delivery_title > td.total_figures.text-right','innerText','after','$');};}();
terms['cart']['pe_bd2e4f484ad7bd559fe140ac1f2bcee2'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#order_details:nth-child(2) > p:nth-child(5)','innerHTML','between','C.P.__&&__&');};}();
terms['cart']['pe_d74ac54d302d65ab134e01ad031ad06c'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('header#header > nav.navbar.navbar-default > div.container-fluid > div.navbar-header > div.row > div.col-xs-12.columnasHeader','innerHTML','between','id=\"currentOrderId\" value=\"__&&__\">');};}();
terms['cart']['pe_e67f1f114196d86e82fe48bbd3c1fd76'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#shipping > div.col-xs-12.col-md-8 > div#OrderConfirmPagingDisplay > div#order_details > div> div > div > div > span.little_title','innerText','after',':');};}();
terms['cart']['pe_ed0f0e81d474967f23543c80529c3608'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#shipping > div.col-xs-12.col-md-8 > div#OrderConfirmPagingDisplay > div#order_details > div > div > div > div.precio > span.price','innerText','after','$');};}();
terms['cart']['pe_f7e2935daca815309accc676452674ed'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#shipping > div.col-xs-12.col-md-8 > div#OrderConfirmPagingDisplay > div#order_details > div > div > div> img','outerHTML','regex','[0-9][0-9][0-9][0-9][0-9][0-9][0-9]');};}();
terms['click']['pe_145696352f7d14a46011ea77eb530068'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('span#MiniShopCartAddedProdQty_','innerText','after','Cantidad: ');};}();
terms['click']['pe_77ebab8bc3e5e6231728ef7cb2ec447c'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('a#GotoCartButton2','innerText','none','');};}();
terms['find']['pe_0a1c33469b27edfa2d6318152e3ba88d'] = com_sas_ci_acs._ob_dom.findElement('a#singleOrderSummary');
terms['find']['pe_3130349fbd11f3f2c9d917e2b9f513a7'] = com_sas_ci_acs._ob_dom.findElement('div#WC_EmptyShopCartDisplayf_div_1 > h2');
terms['find']['pe_35245869efb671cca350477c936e64b7'] = com_sas_ci_acs._ob_dom.findElement('a[id=\'WC_BreadCrumb_Link_3_1_-1028_1102\']');
terms['find']['pe_357b7b2067e6b76421d00b2e3e7fdd69'] = com_sas_ci_acs._ob_dom.findElement('button#WC_OrderShippingBillingConfirmationPage_Print_Link');
terms['find']['pe_3f719721707a5e1afb6256900e351032'] = com_sas_ci_acs._ob_dom.findElement('div[id=\'contentRecommendationWidget_3_-1012_3074457345618302504\'] > div.left_espot > div.left_espot > div.row.cards-container-material > div.col-xs-12.col-md-4');
terms['find']['pe_77358986834e95698630184eaaca9735'] = com_sas_ci_acs._ob_dom.findElement('div#ShopCartPagingDisplay > div.row.orden-total > div.col-xs-12.col-sm-6.resumen_pagar.text-center > button.btn.btn-primary');
terms['find']['pe_8a1a9c94575a9e5fcf6d3a8efce32293'] = com_sas_ci_acs._ob_dom.findElement('form#solicitaCreditoFormPaso2 > div.col-md-12.formulario-solicitud-credito');
terms['find']['pe_9203717a806d480aaf3466da3a7914c5'] = com_sas_ci_acs._ob_dom.findElement('div[id=\'contentRecommendationWidget_3_-1012_3074457345618302004\'] > div.left_espot > div.bloqueComercial.row > div.col-xs-12.col-md-4.bloqueGDE.cyber > a.white > img.lazyImg.lazyImg-loaded');
terms['find']['pe_9a08ec5a0ea53956f3927ca6374d9720'] = com_sas_ci_acs._ob_dom.findElement('div#landing_solicitud_credito_coppel_typ > div.row > div.col-md-12 > div.col-sm-6.col-md-6.text-center.seccion-typ');
terms['find']['pe_b1cb74b4c209c0039f0f6f3d578f3f92'] = com_sas_ci_acs._ob_dom.findElement('div#WC_OrderShippingBillingConfirmationPage_div_4 > h1');
terms['find']['pe_bf278c4442bf7667df50608ee8d4376a'] = com_sas_ci_acs._ob_dom.findElement('div > div > div.item.active > a > img.lazyImg.lazyImg-loaded');
terms['find']['pe_c29e938f8f72eed422aeccf618b573ef'] = com_sas_ci_acs._ob_dom.findElement('div#contentCarousel_1_1003_1302 > ul.swiper-wrapper > li.swiper-slide.swiper-slide-active > div.left_espot > div.row.slider-fullimg > div.col-xs-12 > a.slider_principal > picture > img');
terms['find']['pe_c5b02a675d2910152faf0a92add4c988'] = com_sas_ci_acs._ob_dom.findElement('div#landing_solicitud_credito_coppel_typ > div.row > div.col-md-12 > div.col-sm-6.col-md-8.text-center.seccion-typ');
terms['find']['pe_cda938253e167f8febd8b025c4d8a8e2'] = com_sas_ci_acs._ob_dom.findElement('select#listPaymentMethod');
terms['find']['pe_d448865ae72daa9bb60d0b26276e612d'] = com_sas_ci_acs._ob_dom.findElement('a[id=\'WC_BreadCrumb_Link_2_1_-1028_1102\']');
terms['find']['pe_e90771e12c42f597739456a8add03870'] = com_sas_ci_acs._ob_dom.findElement('div#productPageAdd2Cart');
terms['find']['pe_fbfdda8fe551a2a7ec939742c38a12b3'] = com_sas_ci_acs._ob_dom.findElement('div#contentWrapper');
terms['load']['pe_0bfbb27af2de146a3d6c7a8d25487254'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div > span.nombre_articulo','innerText','before',' ');};}();
terms['load']['pe_0e7c0ab6cc78de23509046f3a9ddc81a'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_OrderItemDetailsSummaryf_div_1_1 > img','src','regex','[0-9]{7}');};}();
terms['load']['pe_104440087d28983019cde4ad47f692ba'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_OrderItemDetailsSummaryf_div_1_2 > img','src','regex','[0-9]{7}');};}();
terms['load']['pe_145696352f7d14a46011ea77eb530068'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('span#MiniShopCartAddedProdQty_','innerText','after','Cantidad: ');};}();
terms['load']['pe_18fe2cee03d27b3f16436a2104cf55af'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#order_details > div > div > div > img','src','regex','[0-9][0-9][0-9][0-9][0-9][0-9][0-9]');};}();
terms['load']['pe_2a1df8f3a5e979ff554ef74445ba914d'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_OrderItemDetailsSummaryf_div_1_4 > img','src','regex','[0-9]{7}');};}();
terms['load']['pe_3e2f9ee1b327abc83551e68133cd049e'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('table#storelocator_table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > span.shop_name:nth-child(1)','innerText','none','');};}();
terms['load']['pe_441a3b7ca9b9b736376d9b414ba8080b'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_OrderItemDetailsSummaryf_div_2_2 > span.nombre_articulo','innerText','before',' ');};}();
terms['load']['pe_45e2139b0f62e3034126d883b307232f'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div > span.nombre_articulo','innerText','none','');};}();
terms['load']['pe_45f5389c606a785f169a2ecb9c8b671b'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_OrderItemDetailsSummaryf_div_2_5 > span.nombre_articulo','innerText','before',' ');};}();
terms['load']['pe_4bd962575d3e420fae485c035650d321'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_EmptyShopCartDisplayf_div_1 > p','innerText','none','');};}();
terms['load']['pe_4de436e9794125be7e4ba8ae26fa4816'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_MyAccountCenterLinkDisplay_div_6:nth-child(2) > div.info_table.clearfix > div.col-xs-12:nth-child(3) > div.info_content:nth-child(2)','innerText','none','');};}();
terms['load']['pe_54b965554f1af8d6a237d5461b1eceef'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('a > p.nombre_producto','innerText','none','');};}();
terms['load']['pe_5719609a9714cac838e78e5492e7ec25'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('a > img.img-responsive','src','regex','[0-9][0-9][0-9][0-9][0-9][0-9][0-9]');};}();
terms['load']['pe_604ccfd806a494b9ca256e0680bcaa2c'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#container_10101:nth-child(1) > div.row:nth-child(2) > div.col-sm-12.bloque-beneficios > div[id=\'contentRecommendationWidget_3_-1012_3074457345618302504\']:nth-child(2) > div.left_espot > div.left_espot:nth-child(2) > div.row.cards-container-material > div.col-xs-12.col-md-4:nth-child(1) > div.card-material > a > img.lazyImg.lazyImg-loaded:nth-child(1)','outerHTML','between',' alt=\"__&&__\"');};}();
terms['load']['pe_6839e51773c5bbdb398f8b7ee0f597db'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#widget_breadcrumb','innerText','between','Inicio\/__&&__\/');};}();
terms['load']['pe_6a4766792da88e28cbda334341ffde0f'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_EmptyShopCartDisplayf_div_1 > div > a.btn.btn-primary','innerText','none','');};}();
terms['load']['pe_76da9f700cafa16c5ee91fccb5d8011d'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#widget_breadcrumb','innerText','after','Inicio\/');};}();
terms['load']['pe_7fa72c1e869d9d9ee11686b21cbcfe7d'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_OrderItemDetailsSummaryf_div_2_3 > span.nombre_articulo','innerText','before',' ');};}();
terms['load']['pe_831c2e4854bef7f2c71f587c7a3e26df'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_EmptyShopCartDisplayf_div_1 > h2','innerText','none','');};}();
terms['load']['pe_845a945873631dc9018e2373e9272968'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('td#WC_SingleShipmentOrderTotalsSummary_td_10','innerText','after','$');};}();
terms['load']['pe_87193ecad801215268bce9579b36ad61'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_OrderItemDetailsSummaryf_div_2_1 > span.nombre_articulo','innerText','before',' ');};}();
terms['load']['pe_8963e6413a3c974c183425634c199184'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_OrderItemDetailsSummaryf_div_2_4 > span.nombre_articulo','innerText','before',' ');};}();
terms['load']['pe_8d97bb8a7afc18d7f70d7cad2dff80c5'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#WC_OrderItemDetailsSummaryf_div_1_3 > img','src','regex','[0-9]{7}');};}();
terms['load']['pe_9751414fb9f71f92793bb62d0806b515'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div > div.priceTable > div.p_oferta > div.pcontado > div.tam_normal > p.discountRibbon','innerText','none','');};}();
terms['load']['pe_a7a97e488838b6037e5da7113552f26c'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div.nodisplay','innerText','regex','[0-9][0-9][0-9][0-9][0-9][0-9][0-9]');};}();
terms['load']['pe_ab43f47c24eaa26141bd2f797b09115b'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#PageHeading_17802 > h1.main_header','innerText','none','');};}();
terms['load']['pe_d90fa2ff9a5d0f8f325e632842df3b6f'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div > ul > li.current','innerText','none','');};}();
terms['load']['pe_e218316325fa0f43038fc58ae904c8ab'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#productSlot56 > div.row > div.col-xs-12.slot6','innerText','between','Disponible en l\u00EDnea__&&__Disponible en la tienda');};}();
terms['load']['pe_f9c969ff490f1b446a58ebdbf0cdeb41'] = function() {return function() {return com_sas_ci_acs._ob_dom.collectTerm('div#container_10101:nth-child(1) > div.row:nth-child(2) > div.col-sm-12.bloque-beneficios > div[id=\'contentRecommendationWidget_3_-1012_3074457345618302504\']:nth-child(2) > div.left_espot > div.left_espot:nth-child(2) > div.row.cards-container-material > div.col-xs-12.col-md-4:nth-child(1) > div.card-material > a > p:nth-child(2)','innerText','after','Ver ');};}();
terms['tsp']['pe_340b86b4789074a5ab37e467a7f82c31'] = 'button#btnrecibirllamada';
terms['tsp']['pe_57066279566919b6a5f973c3a696a928'] = 'button#btnagendarllamada';
terms['tsp']['pe_58bb8bf2acb3cf0afd4072e0010476b3'] = 'button#btnContinuar';
terms['tsp']['pe_77358986834e95698630184eaaca9735'] = 'div#ShopCartPagingDisplay > div.row.orden-total > div.col-xs-12.col-sm-6.resumen_pagar.text-center > button.btn.btn-primary';
terms['tsp']['pe_8c940c09303d8b8810d8bdd34eee3763'] = 'div.container > section.main.row > div.row > div.col-sm-3.col-md-6.col-lg-9.col-xl-12 > button.btn.btn-secondary.btn-lg.btn-block';
terms['tsp']['pe_c539a674e1b1a522d17cbe18c7e38851'] = 'table#order_total > tbody > tr.boton-pagar > td.total_details.text-center > button.btn.btn-primary';

    return terms;
}
com_sas_ci_acs._ob_cart_configuration.prototype.getCartConfig = function()
{
   var cart = {};



    return cart;
}
com_sas_ci_acs._ob_cart_configuration.prototype.getCheckoutConfig = function()
{
   var cart = {};



    return cart;
}
com_sas_ci_acs._ob_cart_configuration.prototype.getPurchaseConfig = function()
{
   var cart = {};



    return cart;
}
com_sas_ci_acs._ob_jsvar_configuration.prototype.getConfig = function()
{
    var jsVars = {};

jsVars['dataLayer[1].ecommerce.detail.products[0].id'] = 'dataLayer[1].ecommerce.detail.products[0].id';
jsVars['dataLayer[2].ecommerce.detail.products[0].id'] = 'dataLayer[2].ecommerce.detail.products[0].id';
jsVars['dataLayer[2].ecommerce.detail.products[0].price'] = 'dataLayer[2].ecommerce.detail.products[0].price';
jsVars['page_id'] = '';

    return jsVars;
}
com_sas_ci_acs._ob_jsvarchange_configuration.prototype.getConfig = function()
{
    var jsChangeVars = {};


    return jsChangeVars;
}
com_sas_ci_acs._ob_contentvisible_configuration.prototype.getConfig = function()
{
    var contentVars = {};

contentVars['contentChange_pe_0443ce0462c991d9194d3a03a9d72c14'] = 'span#ErrorMessageText';
contentVars['contentChange_pe_c1b0e63d7c8b32df793f05a8cb684430'] = 'input#WC_CheckoutLogon_FormInput_logonId';
contentVars['contentChange_pe_cda938253e167f8febd8b025c4d8a8e2'] = 'select#listPaymentMethod';
contentVars['6c84b54c-b705-4e20-b50e-8d7ead518d67'] = 'span#ErrorMessageText';

    return contentVars;
}
com_sas_ci_acs._ob_configure.prototype.getFormConfig = function()
{
   var ff = {};
   ff['nature'] = 'inc';

   ff['obs'] = [];
   ff['ign'] = [];
   ff['inc'] = [];


ff['nature'] = 'ign';

    return ff;
}
com_sas_ci_acs._ob_configure.prototype.isCollectionEnabled = function()
{
   var collect = {};


collect['clicks'] = 'true';
collect['contentevents'] = 'true';
collect['fieldinteractions'] = 'true';
collect['formsubmits'] = 'true';
collect['jsvars'] = 'true';
collect['media'] = 'true';
collect['mouseovers'] = 'false';
collect['pageloads'] = 'true';

   collect['pageloads_eventid'] = [];
   collect['pageloads_eventname'] = [];
   collect['pageloads_eventtype'] = [];
   collect['pageloads_eventsubtype'] = [];
   collect['pageloads_prd_selector'] = [];
   collect['pageloads_system_type'] = [];
   collect['formsubmits_eventid'] = [];
   collect['formsubmits_eventname'] = [];
   collect['formsubmits_system_type'] = [];
   collect['formsubmits_elements'] = [];
   collect['clicks_eventid'] = [];
   collect['clicks_eventname'] = [];
   collect['clicks_system_type'] = [];
   collect['changevar_eventid'] = [];
   collect['changevar_attributes'] = [];
   collect['content_eventid'] = [];
   collect['content_attributes'] = [];
   collect['pageloads_attributes'] = [];
   collect['formsubmits_attributes'] = [];
   collect['clicks_attributes'] = [];
   collect['event_properties'] = [];
   collect['clickThrough_system_eventid'] = [];
   collect['impression_system_eventid'] = [];
   collect['pageloads_system_eventid'] = [];
   collect['newsession_system_eventid'] = [];
   collect['focus_system_eventid'] = [];
   collect['defocus_system_eventid'] = [];
   collect['notification_opened_system_eventid'] = [];
   collect['email_open_system_eventid'] = [];
   collect['email_send_system_eventid'] = [];
   collect['email_view_system_eventid'] = [];
   collect['email_click_system_eventid'] = [];
   collect['email_hard_bounce_system_eventid'] = [];
   collect['email_opt-out_system_eventid'] = [];
   collect['email_spam_system_eventid'] = [];
   collect['email_reply_system_eventid'] = [];
   collect['loginevent_attributes'] = [];

collect['email_opt-out_system_eventid'].push('2a7c669c-1db9-4741-a344-3a8492cf20f3');



collect['email_click_system_eventid'].push('38408f89-b882-4d4c-bf69-14842f70df9a');





collect['email_view_system_eventid'].push('48d034b1-c629-411c-af29-68d4f7ee3c9c');



collect['pageloads_system_eventid'].push('52f17e4b-6d9d-424a-ae65-6afb08d05962');





collect['clickThrough_system_eventid'].push('5f8ffaa9-dec6-44bd-8e8b-ffef4fd5f746');

collect['email_send_system_eventid'].push('65cd1e83-a7be-4161-9c5a-b11677657729');

collect['content_eventid'].push('6c84b54c-b705-4e20-b50e-8d7ead518d67');
collect['content_attributes']['6c84b54c-b705-4e20-b50e-8d7ead518d67'] = [];
collect['content_attributes']['6c84b54c-b705-4e20-b50e-8d7ead518d67'][0] = [];
collect['content_attributes']['6c84b54c-b705-4e20-b50e-8d7ead518d67'][0]['changeRule'] = 'attrAnyToAny';
collect['content_attributes']['6c84b54c-b705-4e20-b50e-8d7ead518d67'][0]['from'] = '';
collect['content_attributes']['6c84b54c-b705-4e20-b50e-8d7ead518d67'][0]['to'] = '';
collect['content_attributes']['6c84b54c-b705-4e20-b50e-8d7ead518d67'][0]['attribute'] = 'innerText';



collect['email_spam_system_eventid'].push('702da7ec-b962-461b-a35b-abdb4662bdee');

collect['pageloads_eventid'].push('79f27029-7a8a-4ae6-8dad-187568845716');
collect['pageloads_eventname']['79f27029-7a8a-4ae6-8dad-187568845716'] = 'Home Page Coppel';
collect['pageloads_eventtype']['79f27029-7a8a-4ae6-8dad-187568845716'] = 'homePage';
collect['event_properties']['79f27029-7a8a-4ae6-8dad-187568845716'] = [];
collect['event_properties']['79f27029-7a8a-4ae6-8dad-187568845716'][0]=[];collect['event_properties']['79f27029-7a8a-4ae6-8dad-187568845716'][0]['pageTitle']='true';collect['event_properties']['79f27029-7a8a-4ae6-8dad-187568845716'][0]['name']='Coppel.com - Coppel Mejora tu vida';

collect['newsession_system_eventid'].push('7fd61dc3-63a2-41aa-ae5b-e1b509640e78');

collect['impression_system_eventid'].push('8a2f649c-8932-4590-b575-b6774271fc00');

collect['pageloads_eventid'].push('ca46b7c2-762a-4095-911b-72e61603e50b');
collect['pageloads_eventname']['ca46b7c2-762a-4095-911b-72e61603e50b'] = 'Product View';
collect['pageloads_eventtype']['ca46b7c2-762a-4095-911b-72e61603e50b'] = 'productPageView';
collect['pageloads_eventsubtype']['ca46b7c2-762a-4095-911b-72e61603e50b'] = '';
collect['pageloads_system_type']['ca46b7c2-762a-4095-911b-72e61603e50b'] = 'systemProductView';
collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'] = [];
collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][0]=[];collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][0]['name']='Departamento';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][0]['cart_att_type']='OTHER';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][0]['selector']='div#widget_breadcrumb';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][0]['attribute']='innerText';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][0]['type']='string';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][0]['filter']='between';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][0]['filterpattern']='Inicio/__&&__/';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][1]=[];collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][1]['name']='AT_PM_PR';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][1]['cart_att_type']='OTHER';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][1]['urlPath']='true';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][1]['attribute']='';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][1]['type']='string';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][1]['filter']='regex';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][1]['filterpattern']='/[a-z][a-z]/';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][2]=[];collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][2]['name']='product_name';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][2]['cart_att_type']='CART_PRODUCT_ATTRIBUTE';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][2]['selector']='div#PageHeading_17802 > h1.main_header';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][2]['attribute']='innerText';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][2]['type']='string';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][2]['filter']='none';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][2]['filterpattern']='';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][3]=[];collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][3]['name']='product_sku';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][3]['cart_att_type']='CART_PRODUCT_ATTRIBUTE';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][3]['jsVariable']='dataLayer[2].ecommerce.detail.products[0].id';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][3]['attribute']='';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][3]['type']='string';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][3]['filter']='regex';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][3]['filterpattern']='[0-9][0-9][0-9][0-9][0-9][0-9][0-9]';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][4]=[];collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][4]['name']='product_group';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][4]['cart_att_type']='CART_PRODUCT_ATTRIBUTE';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][4]['selector']='div#widget_breadcrumb';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][4]['attribute']='innerText';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][4]['type']='string';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][4]['filter']='after';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][4]['filterpattern']='Inicio/';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][5]=[];collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][5]['name']='product_unit_price_num';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][5]['cart_att_type']='CART_PRODUCT_ATTRIBUTE';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][5]['jsVariable']='dataLayer[2].ecommerce.detail.products[0].price';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][5]['attribute']='';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][5]['type']='numeric';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][5]['filter']='none';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][5]['filterpattern']='';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][6]=[];collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][6]['name']='product_availability_message';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][6]['cart_att_type']='CART_PRODUCT_ATTRIBUTE';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][6]['selector']='div#productSlot56 > div.row > div.col-xs-12.slot6';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][6]['attribute']='innerText';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][6]['type']='string';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][6]['filter']='between';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][6]['filterpattern']='Disponible en línea__&&__Disponible en la tienda';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][7]=[];collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][7]['name']='product_savings_message';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][7]['cart_att_type']='CART_PRODUCT_ATTRIBUTE';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][7]['selector']='div > div.priceTable > div.p_oferta > div.pcontado > div.tam_normal > p.discountRibbon';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][7]['attribute']='innerText';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][7]['type']='string';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][7]['filter']='none';collect['pageloads_attributes']['ca46b7c2-762a-4095-911b-72e61603e50b'][7]['filterpattern']='';collect['event_properties']['ca46b7c2-762a-4095-911b-72e61603e50b'] = [];
collect['event_properties']['ca46b7c2-762a-4095-911b-72e61603e50b'][0]=[];collect['event_properties']['ca46b7c2-762a-4095-911b-72e61603e50b'][0]['selectorOnly']='true';collect['event_properties']['ca46b7c2-762a-4095-911b-72e61603e50b'][0]['name']='div#productPageAdd2Cart';

collect['clicks_eventid'].push('e3e4544c-7c51-487b-aa17-3cad78233d1c');
collect['clicks_eventname']['e3e4544c-7c51-487b-aa17-3cad78233d1c'] = 'Product View(Evento Añadir al carrito)';
collect['clicks_system_type']['e3e4544c-7c51-487b-aa17-3cad78233d1c'] = 'systemAddToCart';
collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'] = [];
collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][0] = [];
collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][0]['targetSelector'] = 'a#GotoCartButton2';
collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][1]=[];collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][1]['name']='Departamento';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][1]['cart_att_type']='OTHER';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][1]['selector']='div#widget_breadcrumb';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][1]['attribute']='innerText';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][1]['type']='string';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][1]['filter']='between';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][1]['filterpattern']='Inicio/__&&__/';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][2]=[];collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][2]['name']='AT_PM_PR';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][2]['cart_att_type']='OTHER';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][2]['urlPath']='true';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][2]['attribute']='';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][2]['type']='string';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][2]['filter']='regex';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][2]['filterpattern']='/[a-z][a-z]/';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][3]=[];collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][3]['name']='product_name';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][3]['cart_att_type']='CART_PRODUCT_ATTRIBUTE';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][3]['selector']='div#PageHeading_17802 > h1.main_header';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][3]['attribute']='innerText';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][3]['type']='string';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][3]['filter']='none';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][3]['filterpattern']='';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][4]=[];collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][4]['name']='product_sku';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][4]['cart_att_type']='CART_PRODUCT_ATTRIBUTE';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][4]['jsVariable']='dataLayer[2].ecommerce.detail.products[0].id';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][4]['attribute']='';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][4]['type']='string';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][4]['filter']='regex';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][4]['filterpattern']='[0-9][0-9][0-9][0-9][0-9][0-9][0-9]';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][5]=[];collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][5]['name']='product_group';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][5]['cart_att_type']='CART_PRODUCT_ATTRIBUTE';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][5]['selector']='div#widget_breadcrumb';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][5]['attribute']='innerText';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][5]['type']='string';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][5]['filter']='after';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][5]['filterpattern']='Inicio/';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][6]=[];collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][6]['name']='product_unit_price_num';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][6]['cart_att_type']='CART_PRODUCT_ATTRIBUTE';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][6]['jsVariable']='dataLayer[2].ecommerce.detail.products[0].price';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][6]['attribute']='';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][6]['type']='numeric';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][6]['filter']='none';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][6]['filterpattern']='';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][7]=[];collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][7]['name']='product_availability_message';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][7]['cart_att_type']='CART_PRODUCT_ATTRIBUTE';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][7]['selector']='div#productSlot56 > div.row > div.col-xs-12.slot6';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][7]['attribute']='innerText';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][7]['type']='string';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][7]['filter']='between';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][7]['filterpattern']='Disponible en línea__&&__Disponible en la tienda';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][8]=[];collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][8]['name']='product_savings_message';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][8]['cart_att_type']='CART_PRODUCT_ATTRIBUTE';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][8]['selector']='div > div.priceTable > div.p_oferta > div.pcontado > div.tam_normal > p.discountRibbon';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][8]['attribute']='innerText';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][8]['type']='string';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][8]['filter']='none';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][8]['filterpattern']='';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][9]=[];collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][9]['name']='Departamento';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][9]['cart_att_type']='OTHER';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][9]['selector']='div#widget_breadcrumb';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][9]['attribute']='innerText';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][9]['type']='string';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][9]['filter']='between';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][9]['filterpattern']='Inicio/__&&__/';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][10]=[];collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][10]['name']='AT_PM_PR';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][10]['cart_att_type']='OTHER';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][10]['urlPath']='true';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][10]['attribute']='';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][10]['type']='string';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][10]['filter']='regex';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][10]['filterpattern']='/[a-z][a-z]/';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][11]=[];collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][11]['name']='product_quantity_num';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][11]['cart_att_type']='CART_PRODUCT_ATTRIBUTE';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][11]['selector']='span#MiniShopCartAddedProdQty_';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][11]['attribute']='innerText';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][11]['type']='numeric';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][11]['filter']='after';collect['clicks_attributes']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][11]['filterpattern']='Cantidad: ';collect['event_properties']['e3e4544c-7c51-487b-aa17-3cad78233d1c'] = [];
collect['event_properties']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][0]=[];collect['event_properties']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][0]['selectorOnly']='true';collect['event_properties']['e3e4544c-7c51-487b-aa17-3cad78233d1c'][0]['name']='div#productPageAdd2Cart';

collect['email_hard_bounce_system_eventid'].push('e7da0871-b763-4417-b4f8-c54a2840c62f');

collect['email_reply_system_eventid'].push('ebea6ac8-c20c-42ab-bfc6-ea926c0a1322');

collect['email_open_system_eventid'].push('f35ab2e9-456f-4925-825d-21e0210b43d3');

collect['notification_opened_system_eventid'].push('fffa8f00-f2f5-4249-a8b7-ceab28a6f38d');


    return collect;
}

com_sas_ci_acs.ob_util.specialClickProcessing=true;
com_sas_ci_acs.cacheCollect=com_sas_ci_acs._ob_configure.prototype.isCollectionEnabled();com_sas_ci_acs._ob_configure.prototype.isCollectionEnabled=function(){return com_sas_ci_acs.cacheCollect;};
com_sas_ci_acs.ob_configure.initialize();
