
(function(){if(!window.KAMPYLE_EMBED){var onPremEmbedRegex=/\/[a-zA-Z\d-]+\/\d+\/onsite\/medallia-digital-embed\.js$/;window.KAMPYLE_EMBED={kampyleInit:function(){var t=document.createElement('script');t.type='text/javascript';t.async=true;t.src=KAMPYLE_EMBED.getGenericLocation();t.charset='UTF-8';document.body.appendChild(t);},kampyleLoadLogger:function(){},kampyleEventHandler:function(elem,eventType,handler){if(elem.addEventListener){elem.addEventListener(eventType,handler,false);}
else if(elem.attachEvent){elem.attachEvent('on'+eventType,handler);}},isSupported:function(){var result={isIE:false,trueVersion:0,actingVersion:0,compatibilityMode:false};var trident=window.KAMPYLE_EMBED.getUserAgent().match(/Trident\/(\d+)/);if(trident){result.isIE=true;result.trueVersion=parseInt(trident[1],10)+4;}
var msie=navigator.userAgent.match(/MSIE (\d+)/);if(msie){result.isIE=true;result.actingVersion=parseInt(msie[1]);}else{result.actingVersion=result.trueVersion;}
if(result.isIE&&result.trueVersion>0&&result.actingVersion>0){result.compatibilityMode=result.trueVersion!=result.actingVersion;}
return!result.isIE||result.trueVersion>9||(result.actingVersion>=9&&result.compatibilityMode);},getUserAgent:function(){return navigator.userAgent;},isOnPremScript:function(scriptPath){return onPremEmbedRegex.test(scriptPath);},isOnPrem:function(){if(window.MDIGITAL_ON_PREM_PREFIX){return true;}
var scripts=(document.getElementsByTagName('script')||[]);if(!(scripts&&scripts.length)){return false;}
for(var i=scripts.length-1;i>=0;i--){if(window.KAMPYLE_EMBED.isOnPremScript(scripts[i].src)){return true;}}
return false;},getGenericLocation:function(){var cloudLocation=location.protocol+'//'+'nebula-cdn.kampyle.com/wu/314849/onsite/generic1536157006019.js';var genericPath=(cloudLocation.match(/\/[a-zA-Z\d-]+\/\d+\/onsite\/generic\d{13}\.js$/)||[])[0];return window.KAMPYLE_EMBED.isOnPrem()?window.KAMPYLE_EMBED.getResourcesPrefix()+genericPath:cloudLocation;},getResourcesPrefix:function(){if(window.MDIGITAL_ON_PREM_PREFIX){return window.MDIGITAL_ON_PREM_PREFIX;}
var scripts=document.getElementsByTagName('script');var neededSrcPath=null;var i=0;while(scripts&&!neededSrcPath&&i<scripts.length){if(scripts[i].src&&onPremEmbedRegex.test(scripts[i].src)){neededSrcPath=scripts[i].src;}
i++;}
if(neededSrcPath){window.MDIGITAL_ON_PREM_PREFIX=neededSrcPath.replace(onPremEmbedRegex,'');return window.MDIGITAL_ON_PREM_PREFIX;}
if(window.location&&window.location.origin){return window.location.origin;}
return'';}};if(window.KAMPYLE_EMBED.isSupported()){if(document.readyState==='complete'){window.KAMPYLE_EMBED.kampyleInit();}
else{window.KAMPYLE_EMBED.kampyleEventHandler(window,'load',window.KAMPYLE_EMBED.kampyleInit);}}}})();