window["ccs_cc_loadQueue"].push({
"ldn": "ccs_cc_ld_f4428abc91"
,
"inlineScript": "ccs_cc_loge_e62e64(\u0027b37766ee\u0027);\r\nfunction ccs_cc_gete_params_e62e64(id){switch(id){\r\ncase \u0027b37766ee\u0027: return { et: \u0027ProductHookLoad\u0027, serverParams: {\"ServerTime\":\"2\",\"ResultCode\":\"101\"} };break;\r\n}}\r\nfunction ccs_cc_loge_e62e64(id, clientParams){\r\nvar eventInfo = ccs_cc_gete_params_e62e64(id); if(!eventInfo) return;\r\nccs_cc_log.logEvent (eventInfo.et, \u0027SKey=4890f7dc\u0026LCID=2058\u0026Market=MX\u0026Locale=ES-MEX\u0026ZoneId=f4428abc91\u0026ZoneVer=77\u0026CatalogId=8684324d-7835-ac08-d5ec-90fea9f4fbb0\u0026SMfgName=BRUMM\u0026SMfgPn=COP-7410-0057\u0026SUpcEan=undefined\u0026ProductId=753016\u0026MfgId=45451\u0027, eventInfo.serverParams, clientParams); }\r\n\r\n"
,
"jsBefore": "/*Target Logo to existing Div ID*/\r\nvar moveLogoContainer = document.getElementById(\u0027contentRecommendationWidget_5_-1012_33101\u0027); \r\nvar logoContainer = document.createElement(\"div\"); \r\nlogoContainer.setAttribute(\"id\", \"ccs-logos\"); \r\nmoveLogoContainer.appendChild(logoContainer);\r\n\r\n/*FICON - Target Div - SB */\r\nvar imageContainer = document.getElementById(\u0027widget_product_image_viewer\u0027); \r\nvar ficonContainer = document.createElement(\"div\"); \r\nficonContainer.setAttribute(\"id\", \"ccs-feature-icons\"); \r\nimageContainer.appendChild(ficonContainer);\r\n\r\n\r\n\r\n"
,
"jsAfter": "if (!ccsJq == undefined) {\r\nfunction ccsATC (pid) {\r\n  $JSON = ccsJq(\u0027[id*=entitledItem_]\u0027);\r\n  oldJSON = $JSON.text();\r\n  ccsCatID = ccsJq(\u0027#add2CartBtn\u0027).attr(\u0027href\u0027).split(\u0027,\u0027)[6].replace(\u0027)\u0027,\u0027\u0027).trim();\r\n  newJSON = $JSON.text().replace(ccsCatID,localStorage.getItem(pid));\r\n  $JSON.text(newJSON);\r\n  ccsJq(\u0027#add2CartBtn \u003e \u0027).trigger(\u0027click\u0027);\r\n  setTimeout(function(){  ccsJq(\u0027#miniShopCartProductsAdded\u0027).hide();\r\n $JSON.text(oldJSON); }, 3000);\r\n}}\r\n\r\n\r\n  \r\n  \r\n\r\n"
});
