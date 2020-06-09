
(function(d, w) {
  if (!d.createElement) { return false; }
  var self = {};
  var partnerInfo = {};
  var loadPartnerTag = function() {
    self.tagsZone = {"accueil":[{"nom":"Kwanko_Tag_Test","object":"script","attr":{"type":"text\/javascript","text":"(function(d,b){var c=1;\"undefined\"!=typeof d.ptag_params&&(c=2);var a=b.createElement(\"img\");a.src=\"\/\/action.metaffiliation.com\/ptag.php?zone=1&id_prog={IDPROGNETAFF}&version=\"+c})(window,document);"},"lang":""}],"produit":[{"nom":"Kwanko_Tag_Test","object":"script","attr":{"type":"text\/javascript","text":"(function(d,b){var c=1;\"undefined\"!=typeof d.ptag_params&&(c=2);var a=b.createElement(\"img\");a.src=\"\/\/action.metaffiliation.com\/ptag.php?zone=2&idproduit={IDPRODUIT}&idcategorie={IDCATEGORIE}&id_prog={IDPROGNETAFF}&version=\"+c})(window,document);"},"lang":""}],"categorie":[{"nom":"Kwanko_Tag_Test","object":"script","attr":{"type":"text\/javascript","text":"(function(d,b){var c=1;\"undefined\"!=typeof d.ptag_params&&(c=2);var a=b.createElement(\"img\");a.src=\"\/\/action.metaffiliation.com\/ptag.php?zone=3&idcategorie={IDCATEGORIE}&listeids={LISTEIDS}&id_prog={IDPROGNETAFF}&version=\"+c})(window,document);"},"lang":""}],"panier":[{"nom":"Kwanko_Tag_Test","object":"script","attr":{"type":"text\/javascript","text":"(function(c,d){var f=1,b=\"{LISTEIDS}\";if(\"undefined\"!=typeof c.ptag_params&&(f=2,b=\"\",\"undefined\"!=typeof c.ptag_params.products))for(i=0;i<c.ptag_params.products.length;++i){var a=\"\",e;for(e in c.ptag_params.products[i])\"\"!=a&&(a+=\",\"),a+=e+i+\":\"+c.ptag_params.products[i][e];\"\"!=b&&(b+=\"!\");b+=a}a=d.createElement(\"img\");a.src=\"\/\/action.metaffiliation.com\/ptag.php?zone=4&montant={MONTANT}&listeids=\"+b+\"&id_prog={IDPROGNETAFF}&version=\"+f})(window,document);"},"lang":""}],"fincommande":[{"nom":"Kwanko_Tag_Test","object":"script","attr":{"type":"text\/javascript","text":"(function(c,d){var f=1,b=\"{LISTEIDS}\";if(\"undefined\"!=typeof c.ptag_params&&(f=2,b=\"\",\"undefined\"!=typeof c.ptag_params.products))for(i=0;i<c.ptag_params.products.length;++i){var a=\"\",e;for(e in c.ptag_params.products[i])\"\"!=a&&(a+=\",\"),a+=e+i+\":\"+c.ptag_params.products[i][e];\"\"!=b&&(b+=\"!\");b+=a}a=d.createElement(\"img\");a.src=\"\/\/action.metaffiliation.com\/ptag.php?zone=5&montant={MONTANT}&listeids=\"+b+\"&idtransaction={IDTRANSACTION}&id_prog={IDPROGNETAFF}&version=\"+f})(window,document);"},"lang":""}],"lead_inscription":[{"nom":"Kwanko_Tag_Test","object":"script","attr":{"type":"text\/javascript","text":"(function(d,b){var c=1;\"undefined\"!=typeof d.ptag_params&&(c=2);var a=b.createElement(\"img\");a.src=\"\/\/action.metaffiliation.com\/ptag.php?zone=6&id_prog={IDPROGNETAFF}&version=\"+c})(window,document);"},"lang":""}],"lead_confirmation":[{"nom":"Kwanko_Tag_Test","object":"script","attr":{"type":"text\/javascript","text":"(function(d,b){var c=1;\"undefined\"!=typeof d.ptag_params&&(c=2);var a=b.createElement(\"img\");a.src=\"\/\/action.metaffiliation.com\/ptag.php?zone=7&id_lead={ID_LEAD}&id_prog={IDPROGNETAFF}&version=\"+c})(window,document);"},"lang":""}]};
    var netaffTabPattern = checkParams(NetaffParseParam(partnerInfo.str_js));
    // Global Consent needed
    if(!globalConsentReady(netaffTabPattern)){
      globalConsentTimer();
      return;
    }
    if (typeof netaffWanTtWcCdth69613 == 'undefined') {
      // Global Consent Ok
      if(globalConsentMandatory(netaffTabPattern)){
        execConsent();
      }
      // Partial consent waiting
      else{
        partialConsentTimer();
      }

      netaffWanTtWcCdth69613 = new Object();
      NetaffCD(netaffTabPattern);
      var zone = self.tagsZone[netaffTabPattern['ZONE']];
      if(typeof(zone) == 'object') {
        for(var i_cpt_tag = 0; i_cpt_tag < zone.length; ++i_cpt_tag) {
          if(typeof zone[i_cpt_tag] != 'undefined'){
            if(zone[i_cpt_tag].object == 'script' || zone[i_cpt_tag].object == 'img' || zone[i_cpt_tag].object == 'iframe'){
              partnerInfo.divConteneur.innerHTML += "\n\n<!-- Tag "+zone[i_cpt_tag].nom+" -->\n";
              var tag = d.createElement(zone[i_cpt_tag].object);
              var tab_attr = zone[i_cpt_tag].attr;
              var script_src = false;
              for (var type_attr in tab_attr) {
                if (tab_attr.hasOwnProperty(type_attr)){
                  var code = tab_attr[type_attr];
                  if(type_attr == 'src' || type_attr == 'text'){
                    if(type_attr == 'src'){ script_src = true; }
                    if(d.location.protocol == 'https:'){ code = code.replace(new RegExp('(^http://)|(("|\')http://)', 'g'), '$3https://'); }
                    var nomFonctionFiltre = null;
                    var nom_fct_filtre = NetaffRemplaceChar('filtre_'+zone[i_cpt_tag].nom.toLowerCase()+'_'+netaffTabPattern['ZONE'], '-', '_');
                    try{
                      if(eval('typeof '+nom_fct_filtre+' == "function"')){ nomFonctionFiltre = nom_fct_filtre; }
                    }
                    catch(e){
                      console.warn(e);
                    }
                    code = NetaffPattern(code, netaffTabPattern, nomFonctionFiltre);
                  }
                  tag[type_attr]=code;
                }
              }
              if(zone[i_cpt_tag].object == 'script' && script_src){ d.getElementsByTagName('head')[0].appendChild(tag); }
              else if(zone[i_cpt_tag].nom.toLowerCase() != "criteo_onetag" || (zone[i_cpt_tag].nom.toLowerCase() == "criteo_onetag" && typeof w.ptag_params != 'undefined')){ partnerInfo.divConteneur.appendChild(tag); }
              tag = tab_attr = type_attr = code = null;
            }
          }
        }
        netaffTabPattern = null;
      }
      zone = null;
    }
  };

  partnerInfo.divConteneur = creerDivPartnerTag();

  try{
    if (typeof w.ptag_params != 'undefined' && w.ptag_params.hasOwnProperty('requiresDOM') && w.ptag_params.requiresDOM === false) { loadPartnerTag(); }
    else if (w.addEventListener) {
      w.addEventListener('load', loadPartnerTag, false);
      var timeoutID = window.setTimeout(function(){Timer();},1000);
    }
    else if (w.attachEvent) {
      w.attachEvent('onload', loadPartnerTag );
      var timeoutID = window.setTimeout(function(){Timer();},1000);
    }
  }
  catch(e){
    console.warn(e);
  }

  // FCT GDPR
  function globalConsentMandatory(params){
    return params.hasOwnProperty('GDPR') && params.GDPR == 1;
  }

  function globalConsentReady(params){
    if(globalConsentMandatory(params)){
      return checkConsent();
    }
    return true;
  }

  function checkConsent(){
    return w.hasOwnProperty('__kwgc') && w.__kwgc == 1;
  }

  function globalConsentTimer(){
    w.setTimeout(function(){
      if(!checkConsent()){
        globalConsentTimer();
        return;         
      }
      loadPartnerTag();
    },1000);
  }

  function partialConsentTimer(){
    w.setTimeout(function(){
      if(!checkConsent()){
        partialConsentTimer();
        return;         
      }
      execConsent();
    },1000);
  }

  function execConsent(){
    if(!self.tagsZone.hasOwnProperty('consent')){
      return;
    }

    var codeConsent = self.tagsZone['consent'];
    var patternList = checkParams([]);

    for(var j = 0; j < codeConsent.length; ++j) {
      var tag = d.createElement(codeConsent[j].object);
      var tab_attr = codeConsent[j].attr;
      for (var type_attr in tab_attr) {
        var code = tab_attr[type_attr];
        if(type_attr == 'src' || type_attr == 'text'){
          code = NetaffPattern(code, patternList, null);
        }
        tag[type_attr]=code;
      }
      partnerInfo.divConteneur.innerHTML += "\n\n<!-- Consent "+codeConsent[j].nom+" -->\n";
      partnerInfo.divConteneur.appendChild(tag);
      tag = tab_attr = type_attr = code = null;
    }
  }

  var listeClicTime = [];
  if (listeClicTime.length > 0) {
    poseClicTime(listeClicTime);
  }
  function poseClicTime(listeClicTime) {
    var tagClicTime = d.createElement('script');
    for(var i in listeClicTime) {
      tagClicTime.innerHTML += listeClicTime[i];
    }
    partnerInfo.divConteneur.appendChild(tagClicTime);
  }
  function creerDivPartnerTag() {
    var self = {};
    self.tabUrl = ["img.metaffiliation.com/u/36/p69613.js","img.netaffiliation.com/u/36/p69613.js"];
    partnerInfo.str_js = null;
    var allScripts = d.getElementsByTagName('script');
    for (var i = 0; i < self.tabUrl.length; i++) {
      if (partnerInfo.str_js != null){break;}
      for (var i_cpt_allscr = 0 ; i_cpt_allscr < allScripts.length ; i_cpt_allscr++) {
        var currentScript = allScripts.item(i_cpt_allscr);
        if(!currentScript.src){continue; }
        var reg_src_js = new RegExp(self.tabUrl[i],'g');
        if (reg_src_js.test(currentScript.src)) {
          var index = currentScript.src.indexOf('?',7);
          if (index == -1){ partnerInfo.str_js = ''; break; }
          partnerInfo.str_js = currentScript.src.substring(index+1);
        }
        if (partnerInfo.str_js != null){ break; }
      }
      var divConteneur = d.createElement('div');
      divConteneur.id = 'Netaff-'+NetaffAleat(15);
      divConteneur.style.display = 'none';
      var currentScriptParent = currentScript.parentNode;
      currentScriptParent.appendChild(divConteneur);
    }
    return divConteneur;
  }
  function Timer() {
    if(document.readyState == 'complete' && typeof netaffWanTtWcCdth69613 !== 'object'){ loadPartnerTag(); }
    else if(typeof netaffWanTtWcCdth69613 === 'object'){ window.clearTimeout(timeoutID); }
    else{ timeoutID = window.setTimeout(function(){Timer();},1000); }
  }
  function callBackProgramme() {

  }
  function checkParams(params_url){
    var netaffTabParams = new Array();
    netaffTabParams['IDPROGNETAFF'] = '69613';
    netaffTabParams['REFERRER'] = encodeURIComponent(d.referrer);
    netaffTabParams['TITLE'] = encodeURIComponent(d.title);
    netaffTabParams['META'] = function(){for(var b="",c=d.getElementsByTagName("meta"),a=0;a<c.length;a++)b+=""!=b?"&":"",b+="mn"+a+"="+c[a].getAttribute("name")+"&mc"+a+"="+c[a].getAttribute("content");return encodeURIComponent(b)};
    var varFr = ['idproduit','idcategorie','idtransaction','accueil','produit','categorie','panier','fincommande'];
    var varEn = ['productid','categoryid','transactionid','homepage','product','listing','basket','transaction'];
    callBackProgramme();
    var boucle = [params_url, w.ptag_params];
    for (var index = 0; index < boucle.length; ++index) {
      for (var nom_param in boucle[index]) {
        var keyPattern = nom_param.toUpperCase();
        for(var i = 0; i < varEn.length; i++) {
          if(varEn[i] == nom_param.toLowerCase()){ keyPattern = varFr[i].toUpperCase(); }
        }
        netaffTabParams[keyPattern] = boucle[index][nom_param];
      }
    }
    for(var i = 0; i < varEn.length; i++) {
      if(varEn[i] == netaffTabParams['ZONE']){ netaffTabParams['ZONE'] = varFr[i]; }
    }
    // On rempli le tableau
    switch(netaffTabParams['ZONE']) {
      case "panier":
      case "fincommande":
        if(typeof netaffTabParams['PRODUCTS'] == 'object'){
          var montantTot = 0;
          for (var ind = 0; ind < netaffTabParams['PRODUCTS'].length; ++ind) {
            netaffTabParams['LISTEIDS'] = (netaffTabParams['LISTEIDS'] ? netaffTabParams['LISTEIDS']+',' : '')+netaffTabParams['PRODUCTS'][ind]['id'];
            netaffTabParams['LISTEQTY'] = (netaffTabParams['LISTEQTY'] ? netaffTabParams['LISTEQTY']+',' : '')+netaffTabParams['PRODUCTS'][ind]['quantity'];
            montantTot = montantTot+parseFloat(parseFloat(netaffTabParams['PRODUCTS'][ind]['price'])*parseInt(netaffTabParams['PRODUCTS'][ind]['quantity']));
          }
          netaffTabParams['MONTANT'] = montantTot;
        }
      break;
      case "categorie":
        if(typeof netaffTabParams['PRODUCTS'] == 'object'){
          for (var ind = 0; ind < netaffTabParams['PRODUCTS'].length; ++ind) {
            netaffTabParams['LISTEIDS'] = (netaffTabParams['LISTEIDS'] ? netaffTabParams['LISTEIDS']+',' : '')+netaffTabParams['PRODUCTS'][ind];
          }
        }
      break;
    }
    if(netaffTabParams['LISTEIDS']){ netaffTabParams['LISTEIDS'] = NetaffRemplaceChar(netaffTabParams['LISTEIDS'],'%2C',','); }
    if(netaffTabParams['LISTEQTY']){ netaffTabParams['LISTEQTY'] = NetaffRemplaceChar(netaffTabParams['LISTEQTY'],'%2C',','); }
    return netaffTabParams;
  }
  function NetaffParseParam(url) {
    var result = new Array();
    if(url == null || url == ''){ return result; }
    var params = url.split('&');
    for(var i_cpt_parse = 0; i_cpt_parse < params.length; ++i_cpt_parse) {
      var t = params[i_cpt_parse].split('=');
      if(t[1] == 'generique'){ t[1] = 'accueil'; }
      if(t[0].substring(0, 4) == 'amp;'){ t[0] = t[0].substring(4, t[0].length); }
      result[t[0]] = t[1];
    }
    return result;
  }
  function NetaffPattern(str, netaffTabPatternARemplacer, nomFonction) {
    netaffTabPatternARemplacer['cachebuster'] = NetaffAleat(15);
    for (var pattern in netaffTabPatternARemplacer) {
      var valuePat = netaffTabPatternARemplacer[pattern];
      if(nomFonction != null){
        try{
          eval('valuePat = '+nomFonction+'(valuePat, pattern)');
        }
        catch(e){
          console.warn(e);
        }
      }
      var reg_pattern = new RegExp('{'+pattern+'}', 'g');
      str = str.replace(reg_pattern, valuePat);
    }
    return str;
  }
  function NetaffAleat(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    if (!length) { length = Math.floor(Math.random() * chars.length);  }
    var str = '';
    for (var i_cpt_aleat = 0; i_cpt_aleat < length; i_cpt_aleat++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }
  function NetaffRemplaceChar(chaine, caractere_in, caractere_out) {
    var strrc = '';
    var tabrc = chaine.split(caractere_in);
    for (var irc=0; irc<tabrc.length; irc++){
      if(tabrc[irc] != ''){
        (strrc != '') ? strrc = strrc+caractere_out+tabrc[irc] : strrc = tabrc[irc];
      }
    }
    tabrc = irc = null;
    return strrc;
  }
  function NetaffCD(netaffTabPattern) {
    if(netaffTabPattern.hasOwnProperty('M_MD5') && netaffTabPattern['M_MD5'] != ''){
      url_cd = '//action.metaffiliation.com/aff.php?maff=S510FED1010';
      var imgCD = document.createElement('img');
      imgCD.setAttribute('src', url_cd+'&r='+new Date().getTime()+'&altid='+netaffTabPattern['M_MD5']);
      imgCD.setAttribute('width', '0');
      imgCD.setAttribute('height', '0');
      imgCD.setAttribute('id', "kwankoCD");
      partnerInfo.divConteneur.appendChild(imgCD);
    }
  }
  
})(document, window);