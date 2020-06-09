(function() {
  function getParameterByName(name) {
      var url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
	// Home page
	if(window.location.pathname === "/"){
		document.write(unescape("%3Cscript src='https://img.metaffiliation.com/u/36/p69613.js'%3E%3C/script%3E"));
		window.ptag_params = {
			zone: "homepage",
			customerId: "",
			siteType: "d",
			language : "es_ES",
			m_md5: ""
		};
	}
	// Product view
	if(window.location.pathname.indexOf("pm-") != -1){
		document.write(unescape("%3Cscript src='https://img.metaffiliation.com/u/36/p69613.js'%3E%3C/script%3E"));
		var prd = window.location.pathname.split("-");
		if(prd.length) {
			window.ptag_params = {
				zone: "product",
				productId: prd[prd.length-1],
				categoryId: "",
				customerId: "",
				siteType: "d",
				language : "es_ES",
				m_md5: ""
			};
		}
	}
	// Category list
	if(window.location.search.indexOf("catalogId") != -1){
		document.write(unescape("%3Cscript src='https://img.metaffiliation.com/u/36/p69613.js'%3E%3C/script%3E"));
		window.ptag_params = {
			zone: "listing",
			categoryId: getParameterByName("catalogId"),
			products: [],
			customerId: "",
			siteType: "d",
			language : "es_ES",
			m_md5: ""
		};
	}
	// Basket
	if(window.location.pathname === "/AjaxOrderItemDisplayView"){
		document.write(unescape("%3Cscript src='https://img.metaffiliation.com/u/36/p69613.js'%3E%3C/script%3E"));
		window.ptag_params = {
			zone: "basket",
			products: [
			],
			currency: "MXN",
			customerId: "",
			siteType: "d",
			language : "es_ES",
			m_md5: ""
		};
	}
	// Transaction tracker
	if(window.location.pathname === "/OrderShippingBillingConfirmationView"){
		document.write(unescape("%3Cscript src='https://img.metaffiliation.com/u/36/p69613.js'%3E%3C/script%3E"));
		window.ptag_params = {
			zone: "transaction",
			products: [],
			transactionId: getParameterByName("orderId"),
			currency: "MXN",
			customerId: "",
			siteType: "d",
			language : "es_ES",
			m_md5: ""
		};
	}
	/*
	var dom = "affiliatemanager";
  var emasAct = 6267;
  var emasGel = 37400;
  var emasPub = 4497;
  var emasOrg = 1425;
  var emasURL = document.URL;
  var gclid_emas = getParameterByName('gclid');
  var utm_source_emas = getParameterByName('utm_source');
  var utm_medium_emas = getParameterByName('utm_medium');
  var utm_campaign_emas = getParameterByName('utm_campaign');
  var utm_term_emas = getParameterByName('utm_term');
  var utm_content_emas = getParameterByName('utm_content');
  var referrer_emas = document.referrer;
  var img_emas = document.createElement('img');
  var flag = 0;
  img_emas.src = "";
  img_emas.width = 0;
  img_emas.height = 0;
  img_emas.style.display = "none";
  img_emas.style.visibility = "hidden";

  var ei1 = "";
  var ei2 = "";
  var ei3 = "";
  var ei4 = "";
  var sid = "";

  if(utm_source_emas !== null && utm_medium_emas != null){
    ei1 = utm_source_emas + ' - ' +  utm_medium_emas;
  }
  if(utm_campaign_emas !== null){
    ei2 = utm_campaign_emas;
  }
  if(utm_term_emas !== null){
    ei3 = utm_term_emas;
  }
  if(utm_content_emas !== null){
    ei4 = utm_content_emas;
  }
  if(gclid_emas !== null){
    sid = gclid_emas;
  }
  if(utm_medium_emas == "cpc"){
     emasAct = 6703;
     emasGel = 39677;
     //facebook
    if(referrer_emas.indexOf("facebook") != -1){
      flag = 1;
      emasPub = 5016;
    }
  }

  if(flag == 1){
    img_emas.src = location.protocol +'//'+dom+'.uinterbox.com/tracking/clk?nre=2&act='+ emasAct +'&gel='+ emasGel +'&pub='+ emasPub + '&org=' + emasOrg + '&sid=' + sid + '&ei1=' + ei1 + '&ei2=' + ei2 + '&ei3=' + ei3 + '&ei4=' + ei4;
    document.body.appendChild(img_emas);
  }
	*/
  var _pid = 10298;var _js = "https://ad.soicos.com/rtg.php?pid="+_pid+"&s=.js";document.write(unescape("%3Cscript src='" + _js + "'%3E%3C/script%3E"));
})();