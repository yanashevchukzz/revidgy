var com_sas_ci_acs=com_sas_ci_acs||{};com_sas_ci_acs.version="1.1.0";com_sas_ci_acs.webmarketing=!1;com_sas_ci_acs.newvid=!1;
var CryptoJS=CryptoJS||function(a,e){var f={},c=f.lib={},h=function(){},k=c.Base={extend:function(a){h.prototype=this;var g=new h;a&&g.mixIn(a);g.hasOwnProperty("init")||(g.init=function(){g.$super.init.apply(this,arguments)});g.init.prototype=g;g.$super=this;return g},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var g in a)a.hasOwnProperty(g)&&(this[g]=a[g]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
l=c.WordArray=k.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=e?c:4*a.length},toString:function(a){return(a||q).stringify(this)},concat:function(a){var e=this.words,g=a.words,c=this.sigBytes;a=a.sigBytes;this.clamp();if(c%4)for(var f=0;f<a;f++)e[c+f>>>2]|=(g[f>>>2]>>>24-f%4*8&255)<<24-(c+f)%4*8;else if(65535<g.length)for(f=0;f<a;f+=4)e[c+f>>>2]=g[f>>>2];else e.push.apply(e,g);this.sigBytes+=a;return this},clamp:function(){var e=this.words,c=this.sigBytes;e[c>>>2]&=4294967295<<32-
c%4*8;e.length=a.ceil(c/4)},clone:function(){var a=k.clone.call(this);a.words=this.words.slice(0);return a},random:function(e){for(var c=[],g=0;g<e;g+=4)c.push(4294967296*a.random()|0);return new l.init(c,e)}}),m=f.enc={},q=m.Hex={stringify:function(a){var e=a.words;a=a.sigBytes;for(var c=[],g=0;g<a;g++){var f=e[g>>>2]>>>24-g%4*8&255;c.push((f>>>4).toString(16));c.push((f&15).toString(16))}return c.join("")},parse:function(a){for(var e=a.length,c=[],g=0;g<e;g+=2)c[g>>>3]|=parseInt(a.substr(g,2),16)<<
24-g%8*4;return new l.init(c,e/2)}},n=m.Latin1={stringify:function(a){var e=a.words;a=a.sigBytes;for(var c=[],g=0;g<a;g++)c.push(String.fromCharCode(e[g>>>2]>>>24-g%4*8&255));return c.join("")},parse:function(a){for(var e=a.length,c=[],g=0;g<e;g++)c[g>>>2]|=(a.charCodeAt(g)&255)<<24-g%4*8;return new l.init(c,e)}},x=m.Utf8={stringify:function(a){try{return decodeURIComponent(escape(n.stringify(a)))}catch(ra){throw Error("Malformed UTF-8 data");}},parse:function(a){return n.parse(unescape(encodeURIComponent(a)))}},
E=c.BufferedBlockAlgorithm=k.extend({reset:function(){this._data=new l.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(e){var c=this._data,g=c.words,f=c.sigBytes,k=this.blockSize,h=f/(4*k);h=e?a.ceil(h):a.max((h|0)-this._minBufferSize,0);e=h*k;f=a.min(4*e,f);if(e){for(var m=0;m<e;m+=k)this._doProcessBlock(g,m);m=g.splice(0,e);c.sigBytes-=f}return new l.init(m,f)},clone:function(){var a=k.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});c.Hasher=E.extend({cfg:k.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){E.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(e,c){return(new a.init(c)).finalize(e)}},_createHmacHelper:function(a){return function(e,c){return(new oa.HMAC.init(a,
c)).finalize(e)}}});var oa=f.algo={};return f}(Math);
(function(a){var e=CryptoJS,f=e.lib,c=f.Base,h=f.WordArray;e=e.x64={};e.Word=c.extend({init:function(a,e){this.high=a;this.low=e}});e.WordArray=c.extend({init:function(e,c){e=this.words=e||[];this.sigBytes=c!=a?c:8*e.length},toX32:function(){for(var a=this.words,e=a.length,c=[],f=0;f<e;f++){var n=a[f];c.push(n.high);c.push(n.low)}return h.create(c,this.sigBytes)},clone:function(){for(var a=c.clone.call(this),e=a.words=this.words.slice(0),f=e.length,h=0;h<f;h++)e[h]=e[h].clone();return a}})})();
(function(){function a(){return h.create.apply(h,arguments)}var e=CryptoJS,f=e.lib.Hasher,c=e.x64,h=c.Word,k=c.WordArray;c=e.algo;for(var l=[a(1116352408,3609767458),a(1899447441,602891725),a(3049323471,3964484399),a(3921009573,2173295548),a(961987163,4081628472),a(1508970993,3053834265),a(2453635748,2937671579),a(2870763221,3664609560),a(3624381080,2734883394),a(310598401,1164996542),a(607225278,1323610764),a(1426881987,3590304994),a(1925078388,4068182383),a(2162078206,991336113),a(2614888103,633803317),
a(3248222580,3479774868),a(3835390401,2666613458),a(4022224774,944711139),a(264347078,2341262773),a(604807628,2007800933),a(770255983,1495990901),a(1249150122,1856431235),a(1555081692,3175218132),a(1996064986,2198950837),a(2554220882,3999719339),a(2821834349,766784016),a(2952996808,2566594879),a(3210313671,3203337956),a(3336571891,1034457026),a(3584528711,2466948901),a(113926993,3758326383),a(338241895,168717936),a(666307205,1188179964),a(773529912,1546045734),a(1294757372,1522805485),a(1396182291,
2643833823),a(1695183700,2343527390),a(1986661051,1014477480),a(2177026350,1206759142),a(2456956037,344077627),a(2730485921,1290863460),a(2820302411,3158454273),a(3259730800,3505952657),a(3345764771,106217008),a(3516065817,3606008344),a(3600352804,1432725776),a(4094571909,1467031594),a(275423344,851169720),a(430227734,3100823752),a(506948616,1363258195),a(659060556,3750685593),a(883997877,3785050280),a(958139571,3318307427),a(1322822218,3812723403),a(1537002063,2003034995),a(1747873779,3602036899),
a(1955562222,1575990012),a(2024104815,1125592928),a(2227730452,2716904306),a(2361852424,442776044),a(2428436474,593698344),a(2756734187,3733110249),a(3204031479,2999351573),a(3329325298,3815920427),a(3391569614,3928383900),a(3515267271,566280711),a(3940187606,3454069534),a(4118630271,4000239992),a(116418474,1914138554),a(174292421,2731055270),a(289380356,3203993006),a(460393269,320620315),a(685471733,587496836),a(852142971,1086792851),a(1017036298,365543100),a(1126000580,2618297676),a(1288033470,
3409855158),a(1501505948,4234509866),a(1607167915,987167468),a(1816402316,1246189591)],m=[],q=0;80>q;q++)m[q]=a();c=c.SHA512=f.extend({_doReset:function(){this._hash=new k.init([new h.init(1779033703,4089235720),new h.init(3144134277,2227873595),new h.init(1013904242,4271175723),new h.init(2773480762,1595750129),new h.init(1359893119,2917565137),new h.init(2600822924,725511199),new h.init(528734635,4215389547),new h.init(1541459225,327033209)])},_doProcessBlock:function(a,e){var c=this._hash.words,
f=c[0],g=c[1],h=c[2],k=c[3],n=c[4],S=c[5],t=c[6];c=c[7];for(var x=f.high,q=f.low,fa=g.high,T=g.low,ha=h.high,U=h.low,ia=k.high,V=k.low,ja=n.high,W=n.low,ka=S.high,X=S.low,la=t.high,Y=t.low,ma=c.high,Z=c.low,B=x,y=q,M=fa,K=T,N=ha,L=U,ca=ia,O=V,C=ja,z=W,aa=ka,P=X,ba=la,Q=Y,da=ma,R=Z,D=0;80>D;D++){var H=m[D];if(16>D)var A=H.high=a[e+2*D]|0,r=H.low=a[e+2*D+1]|0;else{A=m[D-15];r=A.high;var F=A.low;A=(r>>>1|F<<31)^(r>>>8|F<<24)^r>>>7;F=(F>>>1|r<<31)^(F>>>8|r<<24)^(F>>>7|r<<25);var J=m[D-2];r=J.high;var w=
J.low;J=(r>>>19|w<<13)^(r<<3|w>>>29)^r>>>6;w=(w>>>19|r<<13)^(w<<3|r>>>29)^(w>>>6|r<<26);r=m[D-7];var ea=r.high,I=m[D-16],G=I.high;I=I.low;r=F+r.low;A=A+ea+(r>>>0<F>>>0?1:0);r+=w;A=A+J+(r>>>0<w>>>0?1:0);r+=I;A=A+G+(r>>>0<I>>>0?1:0);H.high=A;H.low=r}ea=C&aa^~C&ba;I=z&P^~z&Q;H=B&M^B&N^M&N;var pa=y&K^y&L^K&L;F=(B>>>28|y<<4)^(B<<30|y>>>2)^(B<<25|y>>>7);J=(y>>>28|B<<4)^(y<<30|B>>>2)^(y<<25|B>>>7);w=l[D];var qa=w.high,na=w.low;w=R+((z>>>14|C<<18)^(z>>>18|C<<14)^(z<<23|C>>>9));G=da+((C>>>14|z<<18)^(C>>>18|
z<<14)^(C<<23|z>>>9))+(w>>>0<R>>>0?1:0);w+=I;G=G+ea+(w>>>0<I>>>0?1:0);w+=na;G=G+qa+(w>>>0<na>>>0?1:0);w+=r;G=G+A+(w>>>0<r>>>0?1:0);r=J+pa;H=F+H+(r>>>0<J>>>0?1:0);da=ba;R=Q;ba=aa;Q=P;aa=C;P=z;z=O+w|0;C=ca+G+(z>>>0<O>>>0?1:0)|0;ca=N;O=L;N=M;L=K;M=B;K=y;y=w+r|0;B=G+H+(y>>>0<w>>>0?1:0)|0}q=f.low=q+y;f.high=x+B+(q>>>0<y>>>0?1:0);T=g.low=T+K;g.high=fa+M+(T>>>0<K>>>0?1:0);U=h.low=U+L;h.high=ha+N+(U>>>0<L>>>0?1:0);V=k.low=V+O;k.high=ia+ca+(V>>>0<O>>>0?1:0);W=n.low=W+z;n.high=ja+C+(W>>>0<z>>>0?1:0);X=S.low=
X+P;S.high=ka+aa+(X>>>0<P>>>0?1:0);Y=t.low=Y+Q;t.high=la+ba+(Y>>>0<Q>>>0?1:0);Z=c.low=Z+R;c.high=ma+da+(Z>>>0<R>>>0?1:0)},_doFinalize:function(){var a=this._data,c=a.words,e=8*this._nDataBytes,f=8*a.sigBytes;c[f>>>5]|=128<<24-f%32;c[(f+128>>>10<<5)+30]=Math.floor(e/4294967296);c[(f+128>>>10<<5)+31]=e;a.sigBytes=4*c.length;this._process();return this._hash.toX32()},clone:function(){var a=f.clone.call(this);a._hash=this._hash.clone();return a},blockSize:32});e.SHA512=f._createHelper(c);e.HmacSHA512=
f._createHmacHelper(c)})();
(function(){var a=CryptoJS,e=a.x64,f=e.Word,c=e.WordArray;e=a.algo;var h=e.SHA512;e=e.SHA384=h.extend({_doReset:function(){this._hash=new c.init([new f.init(3418070365,3238371032),new f.init(1654270250,914150663),new f.init(2438529370,812702999),new f.init(355462360,4144912697),new f.init(1731405415,4290775857),new f.init(2394180231,1750603025),new f.init(3675008525,1694076839),new f.init(1203062813,3204075428)])},_doFinalize:function(){var a=h._doFinalize.call(this);a.sigBytes-=16;return a}});a.SHA384=
h._createHelper(e);a.HmacSHA384=h._createHmacHelper(e)})();
(function(){var a=function(a){return"undefined"!==typeof a&&null!==a};try{var e="sas-ci360-hidden",f=document.getElementById("ob-script-async");if(a(f)&&"object"===typeof f.attributes&&"undefined"!==typeof f.attributes.getNamedItem){var c=f.attributes.getNamedItem("hiddenClass");a(c)&&a(c.value)&&(e=c.value)}if("function"===typeof document.querySelectorAll){var h=document.querySelectorAll("."+e);for(a=0;a<h.length;a++)h[a].style.visibility="hidden"}h=document;var k=new MutationObserver(function(a){a.forEach(function(a){for(var c=
0;c<a.addedNodes.length;c++){var f=a.addedNodes[c];f instanceof Element&&"undefined"!==typeof f.classList&&null!==f.classList&&f.classList.contains(e)&&(f.style.visibility="hidden")}})});k.observe(h,{childList:!0,subtree:!0});"function"===typeof window.addEventListener&&window.addEventListener("load",function(){k.disconnect()});"sessionStorage"in window||(window.sessionStorage={_data:{},setItem:function(a,c){return this._data[a]=String(c)},getItem:function(a){return this._data.hasOwnProperty(a)?this._data[a]:
void 0},removeItem:function(a){return delete this._data[a]},clear:function(){return this._data={}}});setTimeout(function(){if("function"===typeof document.querySelectorAll)for(var a=document.querySelectorAll("."+e),c=0;c<a.length;c++)a[c].style.visibility="visible"},2E3)}catch(l){console.log("error in mutation observer registration "+l)}})();
com_sas_ci_acs.ap=function(){var a=3;return{i:function(e,f,c){if("undefined"!==typeof com_sas_ci_acs.ob_configure&&"undefined"!==typeof com_sas_ci_acs.ob_configure.getLoadId()&&0<com_sas_ci_acs.ob_configure.getLoadId().length&&"undefined"!==typeof com_sas_ci_acs.api_engine)return com_sas_ci_acs.api_engine.i(e,f,c);setTimeout(function(){0<--a&&com_sas_ci_acs.ap.i(e,f,c)},1E3)}}}();
com_sas_ci_acs.ob_util_async={load_guid:"",custom_domain:"",cts_boot_base:0,virtualSpots:[],registerSpot:function(a,e,f,c,h){var k={};k.spot_id=a;k.selector=e;k.callback=f;k.parameters=c;k.observers=h;this.virtualSpots[a]=k},getTabId:function(){var a=sessionStorage.getItem("_ciutbid_");this.notBlank(a)||(a=Math.floor(1E12*Math.random()+1).toString(),sessionStorage.setItem("_ciutbid_",a));return a},notBlank:function(a){return"undefined"!==typeof a&&null!==a&&a},commonSubDomain:function(a){for(var e=
a.split("."),f=document.domain.split("."),c=e.length-1,h=f.length-1,k="",l=0;0<=c&&0<=h;){if(e[c]===f[h])k="."+e[c]+k,l++;else break;c--;h--}return 1<l?k:a.substring(a.indexOf("."))},extractParam:function(a,e){return e&&a?(a=a.replace(/[\[\]]/g,"\\$&"),e=e.replace(/^\s+|\s+$/gm,""),(a=(new RegExp(encodeURIComponent(a)+"(=([^&#]*)|#|$)")).exec(e))&&a[2]&&decodeURIComponent(a[2].replace(/\+/g," "))||null):null},jsVarVal:function(a){var e=window;a.split(".").forEach(function(a){e=e&&e[a]});return e&&
e.toString()||null},ckR:function(a){var e=a+"=";a=document.cookie;var f=a.indexOf(e);return-1!=f?(e=f+e.length,f=a.indexOf(";",e),-1==f&&(f=a.length),a.substring(e,f)):null},ckW:function(a,e,f,c,h){var k=null;if(null!=c){var l=c.indexOf(",");-1<l&&(l<c.length-1&&(k=c.substring(l+1)),c=c.substring(0,l))}h=new Date(h);c=null==c||0==c.length?"":"; domain="+c;document.cookie=a+"="+e+"; expires="+h.toGMTString()+"; path="+f+c;null==com_sas_ci_acs.ob_util_async.ckR(a)&&null!=k&&(c=null==k||0==k.length?
"":"; domain="+k,document.cookie=a+"="+e+"; expires="+h.toGMTString()+"; path="+f+c)},uickW:function(a,e,f,c){var h=null;if(null!=c){var k=c.indexOf(",");-1<k&&(k<c.length-1&&(h=c.substring(k+1)),c=c.substring(0,k))}c=null==c||0==c.length?"":"; domain="+c;document.cookie=a+"="+e+"; path="+f+c;null==com_sas_ci_acs.ob_util_async.ckR(a)&&null!=h&&(c=null==h||0==h.length?"":"; domain="+h,document.cookie=a+"="+e+"; path="+f+c)},sckW:function(a,e,f,c,h,k){var l=null;if(null!=c){var m=c.indexOf(",");-1<
m&&(m<c.length-1&&(l=c.substring(m+1)),c=c.substring(0,m))}null==f&&(f="/");void 0!==h&&(null==h&&(h=0),e=e+"."+h);void 0!==k&&(null==k&&(k=0),e=e+"."+k);c=null==c||0==c.length?"":"; domain="+c;document.cookie=a+"="+e+"; path="+f+c;null==com_sas_ci_acs.ob_util_async.ckR(a)&&null!=l&&(c=null==l||0==l.length?"":"; domain="+l,document.cookie=a+"="+e+"; path="+f+c)},parseUri:function(a){var e=document.createElement("a");e.href=a;return{protocol:e.protocol.replace(":",""),host:e.hostname,port:e.port,path:("/"!==
e.pathname.charAt(0)?"/":"")+e.pathname,search:e.search.substring(1)}},location:function(){var a=new String(location.protocol);return a.substr(0,a.length-1)},flash:function(a,e,f,c,h,k){a={e:!1,v:""};(f=navigator.plugins)&&f.length&&((h=f["Shockwave Flash"])||(h=f["Shockwave Flash 2.0"]),h&&(a.e=!0,k=h.description))&&(a.v=k.substr(k.indexOf("Flash")+6));if("Microsoft Internet Explorer"==navigator.appName)for(e=15;0<e;e--)try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+e);a.e=!0;a.v=c.GetVariable("$version");
break}catch(l){}return a},java:function(a,e,f,c,h,k,l,m,q){a={e:!1,v:""};if("Microsoft Internet Explorer"==navigator.appName)a:for(f=2;0<f;f--)for(h=9;0<=h;h--)for(k=5;0<=k;k--){d=f+"."+h+"."+k;try{new ActiveXObject("JavaWebStart.isInstalled."+d+".0");a.e=!0;a.v=d;break a}catch(n){}}else for(f=navigator.mimeTypes,e=0;e<f.length;e++)m=new String(f[e].type),0==m.indexOf("application/x-java-applet")&&(a.e=!0,q=m.split("sion=")[1],q>a.v&&(a.v=q));if(""!=a.v)return a;a.e=navigator.javaEnabled();a.v=a.e&&
"undefined"!=typeof java?java.lang.System.getProperty("java.version"):"";return a},isUndefined:function(a){return"undefined"==typeof a?!0:!1}};
(function(a,e,f){var c,h=e.getElementsByTagName(f)[0],k=function(a){var c=e.getElementById("ob-script-async");return null!=c&&"object"==typeof c.attributes&&"undefined"!=typeof c.attributes.getNamedItem?(a=c.attributes.getNamedItem(a))&&a.value&&a.value.trim()||null:null},l=function(a,c){var f=k(c);null!=f&&(c=e.createAttribute(c),c.nodeValue=f,a.attributes.setNamedItem(c))},m=function(c,f,h){var g="?version="+com_sas_ci_acs.version;g+="&domain="+e.domain;f=k(f);if(h){var m=com_sas_ci_acs.ob_util_async.ckR("_SI_VID_1."+
f);null!=m&&(g+="&vid="+m);var l=com_sas_ci_acs.ob_util_async.ckR("_SI_SID_1."+f);m=(new Date).getTime();if(null!=l&&(g+="&sid="+l.split(".")[0],2<l.length)){var t=l.split(".")[1];l=l.split(".")[2];t=m-t;t>l&&(l=t);g+="&hb="+l}}g+="&p="+encodeURIComponent(com_sas_ci_acs.ob_util_async.parseUri(e.URL).path);g+="&params="+encodeURIComponent(com_sas_ci_acs.ob_util_async.parseUri(e.URL).search);g+="&page_title="+encodeURIComponent(e.title);g+="&referrer="+encodeURIComponent(e.referrer);g+="&uri="+encodeURIComponent(e.URL);
g+="&requestedfile="+encodeURIComponent(com_sas_ci_acs.ob_util_async.parseUri(e.URL).path);h&&(g=g+("&cts="+m)+("&tzo="+(new Date).getTimezoneOffset()));g+="&platform="+navigator.platform;g+="&port="+location.port;g+="&protocol="+com_sas_ci_acs.ob_util_async.location();h&&(g+="&flash_enabled="+com_sas_ci_acs.ob_util_async.flash().e,g+="&flash_version="+com_sas_ci_acs.ob_util_async.flash().v,g+="&java_enabled="+com_sas_ci_acs.ob_util_async.java().e,g+="&java_version="+com_sas_ci_acs.ob_util_async.java().v,
g+="&screen_info="+screen.width+"x"+screen.height+"@"+screen.colorDepth);t=com_sas_ci_acs.ob_util_async.isUndefined(navigator.language)?navigator.browserLanguage:navigator.language;g+="&browser_language="+t;t=com_sas_ci_acs.ob_util_async.isUndefined(e.charset)?e.characterSet:e.charset;g+="&character_set="+t;if(h){g+="&csz="+e.documentElement.outerHTML.length;g+="&bsz="+a.innerWidth+"x"+a.innerHeight;g+="&tab_id="+com_sas_ci_acs.ob_util_async.getTabId();var n=(t=window.ci360)&&t.a&&JSON.parse(JSON.stringify(t.a))||
{};if(n&&n.identity){t=n.identity.type;var q=n.identity.name;l=n.identity.obscure||!1;var x={url:function(){return com_sas_ci_acs.ob_util_async.extractParam(q,window.location.href)},jsvar:function(){return com_sas_ci_acs.ob_util_async.jsVarVal(q)},"default":function(){return com_sas_ci_acs.ob_util_async.ckR(q)}};n=(x[n.identity.source||"cookie"]||x["default"])();t&&n&&(g=g+("&login_event_type="+t)+("&login_event="+(l?CryptoJS.SHA384(n+f):n)),l&&(g+="&ffobscure.1=login_event"))}}t=a.frames;h&&t&&t.name&&
0==t.name.indexOf("inlineBrowserIFrame-")&&(g+="&swm=1");c+=null!=f?"/"+f:"";h&&(c+="/"+m);return c+g},q=function(a,g,k,m,n){return function(){try{if(!e.getElementById(g))if(c=e.createElement(f),c.type="text/javascript",c.async=1,c.src=a,g&&(c.id=g),g&&k&&l(c,k),g&&m&&l(c,m),n&&(c.onload=function(){n()},c.onreadystatechange=function(){if("loaded"==c.readyState||"complete"==c.readyState)c.onreadystatechange=null,n()}),"ob-tag-boot"==g){var q=e.getElementById("ob-script");q.parentNode.insertBefore(c,
q.nextSibling)}else"ob-tag-boot-p"===g?(q=e.getElementById("ob-tag-boot"),q.parentNode.insertBefore(c,q.nextSibling)):h.parentNode.insertBefore(c,h)}catch(t){console.log("error in ot_boot add: "+t)}}},n=k("src");if(null!=n&&0<n.length){var x=document.createElement("a");x.href=n;n=x.protocol+"//"+x.host;com_sas_ci_acs.ob_util_async.custom_domain=n;b=n+"/t/s/c";p=n+"/t/s/p";u=n+"/js/ot-min.js";v=n+"/js/ot-api.min.js";var E=a.frames;n="sas_web_marketing."+k("a");x=com_sas_ci_acs.ob_util_async.commonSubDomain(x.host);
E&&E.name&&0==E.name.indexOf("inlineBrowserIFrame-")?com_sas_ci_acs.ob_util_async.uickW(n,"1","/",x):(E=new Date,E.setTime(E.getTime()-864E5),expires="; expires="+E.toGMTString(),document.cookie=n+"=0"+expires+"; domain="+x+"; path=/")}x=q(v,"ob-script-api","a","opt",function(){(new com_sas_ci_acs.ob_injector).injectAll()});com_sas_ci_acs.ob_util_async.cts_boot_base=(new Date).getTime();x=q(m(p,"a",!1),"ob-tag-boot-p","a","opt",x);m=q(m(b,"a",!0),"ob-tag-boot","a","opt",x);null==com_sas_ci_acs.ob_util_async.ckR("_SI_DNT")&&
q(u,"ob-script","a","opt",m)()})(window,document,"script");
