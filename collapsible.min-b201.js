var toggleCollapsible=function(a){var b=a.querySelector(".content"),c=a.getAttribute("aria-expanded"),d=document.getElementById("mainESpotHome");b.id.match(/homeESpotDetails/)?"closed"==d.className?d.className="expand":d.className="closed":0,"true"==c?(b.style.maxHeight=b.scrollHeight+"px",window.setTimeout(function(){a.setAttribute("aria-expanded","false"),b.style.maxHeight=null,b.style.transition="max-height .2s"},0),window.setTimeout(function(){b.style.transition=null},200)):"false"==c&&(a.setAttribute("aria-expanded","true"),b.style.maxHeight=b.scrollHeight+"px",b.style.transition="max-height .2s",window.setTimeout(function(){b.style.maxHeight=null,b.style.transition=null},200))},updateGrid=function(a){var b=a.clientWidth,c=a.getAttribute("data-min-col-width"),d=a.getAttribute("data-min-col-count"),e=Math.floor(b/c);d>e&&(e=d);for(var f=Math.floor(100/e)+"%",g=a.querySelectorAll(".col"),h=0;h<g.length;h++)g[h].style.width=f};require(["dojo/on","dojo/query","dojo/topic","dojo/dom-attr","dojo/NodeList-traverse","dojo/domReady!"],function(a,b,c){var d=function(a){var c=a?!a.matches:document.documentElement.clientWidth>583;b(".collapsible").attr("aria-expanded",c.toString())};if(window.matchMedia){var e=window.matchMedia("(max-width: 800px)");d(e),e.addListener(d)}else d(),a(window,"resize",function(a){d()});a(document,".collapsible .toggle:click",function(a){toggleCollapsible(b(a.target).parents(".collapsible")[0]),a.preventDefault()}),a(document,".collapsible .toggle:keydown",function(a){(13==a.keyCode||32==a.keyCode)&&(toggleCollapsible(b(a.target).parents(".collapsible")[0]),a.preventDefault())}),b(".grid").forEach(updateGrid),a(window,"resize",function(a){b(".grid").forEach(updateGrid)})});