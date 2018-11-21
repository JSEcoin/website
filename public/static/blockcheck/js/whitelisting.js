/* Object.assign polyfill */

if (typeof Object.assign != 'function') {
  Object.assign = function(target, varArgs) { // .length of function is 2
    'use strict';
    if (target == null) { // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) { // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}


var wlConfig = wlConfig || {};
wlConfig.media = wlConfig.media || {};

wlConfig.blockerList = {
	"adblock" : {
		title : "AdBlock",
		useragents : ["cr","sf","op","ie","ed"]
	},
	"adblock_plus" : {
		title : "AdBlock Plus",
		useragents : ["cr","ff","sf","op","ie","ed"]
	},
	"adguard" : {
		title : "Adguard AdBlocker",
		useragents : ["cr","ff","sf","op","ie","ed"]
	},
	"ublock_origin" : {
		title : "uBlock Origin",
		useragents : ["cr","ff","op"]
	}
}

wlConfig.media.en = {
	"cr" : ["adblock","adblock_plus","adblock_pro","adguard","ublock","ublock_origin"],
	"ed" : ["adblock","adblock_plus","adguard"],
	"ie" : ["adblock","adblock_plus","adguard"],
	"op" : ["adblock","adblock_plus","adguard","ublock_origin"],
	"ff" : ["adblock_plus","adguard","ublock","ublock_origin"],
	"sf" : ["adblock","adblock_plus","adguard"]
};

wlConfig.version = 4;
wlConfig.buildNr = 310;

var lastSelectedBlocker = null,
	detectedBlocker = null,
	containerEl = null,
	currentPanel = null,
	previousPanel = null,
	artefact_ABC = null,
	prevEventName = null,
	nrEvents = 0,
	timerStart = performance.now(),
	timerLast = null,
	displayInstructionsTimeout = null;

wlConfig.ui.locale = wlConfig.ui.locale || "en";

// UA detection

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;
// At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || !isChrome && !isOpera && window.webkitAudioContext !== undefined;

var instructionsUA = ( isOpera ? "op" : (isSafari ? "sf" : ( isFirefox ? "ff" : ( isEdge ? "ed" : ( isIE ? "ie" : "cr" ) ) ) ) );
var browsers = { "cr" : "Chrome" , "ff" : "Firefox" , "sf" : "Safari", "op" : "Opera" , "ie" : "Internet Explorer" , "ed" : "Microsoft Edge"};

var prefsCookie = Cookies.get("sp_wl_settings") != null ? JSON.parse(Cookies.get("sp_wl_settings")) : null;

console.log(mobileAndTabletcheck());

if (!mobileAndTabletcheck())
  initInstructions();
else
  initMobile();

window.onbeforeunload = function () {
   trackEvent('whitelist.leave');
};

function initInstructions(){

	// extract parameters from Query String

	if (getParameterByName("veil"))
        wlConfig.veilEnabled = ( getParameterByName("veil") == 1 ? true : false );

    if (getParameterByName("close"))
        wlConfig.closeEnabled = ( getParameterByName("close") == 1 ? true : false );

    if (getParameterByName("video"))
        wlConfig.videoEnabled = ( getParameterByName("video") == 1 ? true : false );

    if (getParameterByName("theme"))
        wlConfig.theme = ( getParameterByName("theme") != "" ? getParameterByName("theme") : false );

    // load stylesheet for theme

    if (wlConfig.theme !== false)
    	$('head').append('<link rel="stylesheet" type="text/css" href="css/themes/'+wlConfig.theme+'.css">');

	// force veil if enabled
	if (wlConfig.veilEnabled == true)
		$("body").css("background-color","rgba(0, 0, 0, 0.701961)");

	if (wlConfig.closeEnabled == true)
		$(".sp_wl_btn_close").show();

	trackEvent("whitelist.show.page");

	setTextLabels();

	$(".sp_wl_btn_support").click( function() { showPanel("supportOverview") } );
	$(".sp_wl_select_show_all").click( function() { $(".sp_wl_blocker_list li").show(); $(this).hide(); });

	showPanel("blockersList");

    // Default Adblocker

    wlConfig.defaultBlocker = 	( prefsCookie != null && prefsCookie.hasOwnProperty("lastSelectedBlocker") ?

    								prefsCookie.lastSelectedBlocker :

    								( getParameterByName("defaultBlocker") ? getParameterByName("defaultBlocker") : $(".sp_wl_blocker_list li:first-child").data("blocker") )
    							);

	showPanel("blockerInstructions", { blockerName : wlConfig.defaultBlocker } );



	setTimeout(function(){
		$(".sp_wl_container").show();
	},(wlConfig.theme !== false ? 500 : 0));
}

function reloadParent(){

	trackEvent("whitelist.click.reload", { lastSelectedBlockerName : lastSelectedBlocker });

	window.parent.postMessage({
            action: 'sp.complete',
            statusCode: 0
        }, '*');

}

// simple whitelisting
function showWhitelistingBlockers(){

	trackEvent("whitelist.show.blockersList");

	var listEl = $(".sp_wl_blocker_list").empty();

	var blockers = Object.keys(wlConfig.blockerList);

	for ( i in blockers )
	{

		if (wlConfig.blockerList[blockers[i]].useragents.indexOf(instructionsUA) >= 0)
		{
			var d1 = $("<li>");
			d1.data('blocker', blockers[i]);
			d1.attr("id","blockerTab_"+blockers[i]);
			d1.html("<img src='images/icon_"+blockers[i]+".png' class='icon'> <span>" + wlConfig.blockerList[blockers[i]].title + "</span>");
			d1.hover(function() {
				showPanel("blockerInstructions", { blockerName : $(this).data('blocker') } );
			});
			d1.css('display' , ( detectedBlocker == 'adblock' ?
									( ["adblock","adblock_plus"].indexOf(d1.data("blocker")) >= 0 ? "block" : "none" ) :
										( detectedBlocker == 'ublock_origin' ?
											( ["ublock_origin","adblock_pro"].indexOf(d1.data("blocker")) >= 0 ? "block" : "none" ) :
											"block" ) ) );

			listEl.append(d1);
		}

	}

	if (["ublock_origin","adblock"].indexOf(detectedBlocker) >= 0 && !previousPanel)
	{
		$(".sp_wl_select_show_all").show();
	}
	else
	{
		$(".sp_wl_blocker_list li").css("display","flex");
		$(".sp_wl_select_show_all").hide();
	}

	// show whitelisting panel
	$("#sp_wl_select_panel_id").show();

}

// whitelisting with autodetect
function showWhitelistingInstructions( blocker ){

	console.log(blocker);

	if (displayInstructionsTimeout != null)
		clearInterval(displayInstructionsTimeout);

	displayInstructionsTimeout = setTimeout(function(){

			trackEvent("whitelist.show.blockerInstructions", { blockerName : blocker });

         }, ( displayInstructionsTimeout == null ? 5000 : 2500 ) );

	// set cookie to track last shown instructions for future visits

	Cookies.set('sp_wl_settings', { version: wlConfig.version , lastSelectedBlocker: blocker} );


	if (wlConfig.videoEnabled)
	{
		// determine video url

		var foundTranslationMain = ( wlConfig.media[wlConfig.ui.locale]["cr"] && wlConfig.media[wlConfig.ui.locale]["cr"].indexOf(blocker) >= 0 ? true : false);
		var foundTranslationBrowser = ( wlConfig.media[wlConfig.ui.locale][instructionsUA] && wlConfig.media[wlConfig.ui.locale][instructionsUA].indexOf(blocker) >= 0 ? true : false);

		var videoURL = 'videos/'+(foundTranslationMain ? wlConfig.ui.locale : "en") +'/'+blocker+"_"+ (foundTranslationMain ? ( foundTranslationBrowser ? instructionsUA : "cr" ) : instructionsUA ) +".mp4"

		// hide instructions video - show loader
		$("video source[type='video/mp4']").attr('src',videoURL);
		// $("video source[type='video/webm']").attr('src','videos/scr_'+blocker+"_"+instructionsUA+".webm");
		var vidEl = $("video").show().get(0);
		vidEl.load();
		vidEl.play();

	}

	$(".sp_wl_video_container").toggle( wlConfig.videoEnabled );


	var stepsEl = $(".sp_wl_instructions_steps").empty();

	for (i in Object.keys(wlConfig.ui.copy.instructions[blocker]['default']))
	{
		var key = Object.keys(wlConfig.ui.copy.instructions[blocker]['default'])[i];
		var stepUA = ( wlConfig.ui.copy.instructions[blocker][instructionsUA] && wlConfig.ui.copy.instructions[blocker][instructionsUA][key] ? instructionsUA : "default");

		var stepCopy = wlConfig.ui.copy.instructions[blocker][ stepUA ][key];

		stepsEl.append( $("<li>").html( stepCopy ) );
	}

	// show whitelisting panel
	$("#sp_wl_instructions_panel_id").css('display','flex');

	$(".sp_wl_blocker_list li").removeClass("active");
	$("#blockerTab_"+blocker).addClass("active");

}

function showSupportOverview (){
	$('.sp_wl_btn_support').tooltip('hide');
	$("#sp_wl_support_overview_panel_id").show();
}

function showPanel(panelName, params){

	if (!(panelName == "blockerInstructions" && params.blockerName == lastSelectedBlocker))
	{

		if (panelName != "previous")
		{
			previousPanel = currentPanel;
			currentPanel = {"panelName" : panelName , "params" : params};
		}

		// hide all Panels
		$(".sp_wl_panel").hide();

		switch (panelName)
		{
			case "blockersList":
				showWhitelistingBlockers();
				break;
			case "blockerInstructions":
				lastSelectedBlocker = params.blockerName;
				showWhitelistingInstructions(params.blockerName);
				break;
			case "supportOverview":
				showSupportOverview ();
				break;
			case "previous":
				showPanel(previousPanel.panelName, previousPanel.params);
				break;
			default:
				showWhitelistingBlockers();
				break;
		}

		if (panelName != "previous")
			updatePanelUI( panelName );

	}

}

function updatePanelUI( panelName ){
	$(".sp_wl_back_button").toggle( (previousPanel !== null ? true : false) );
	$(".sp_wl_reload").toggle( (panelName == "blockerInstructions" ? true : false) );
	$(".sp_wl_footer").toggle( previousPanel !== null || panelName == "blockerInstructions" ? true : false);

	$("label.browserName").each(function( index ) { $(this).text(browsers[instructionsUA]); });

	if (lastSelectedBlocker !== null)
	{
		$("label.blockerName").text(wlConfig.blockerList[lastSelectedBlocker].title);
		$(".sp_wl_ab_icon").removeClass().addClass("sp_wl_ab_icon").addClass("sp_wl_ab_icon_"+lastSelectedBlocker);
	}

	$(".sp_wl_btn_support").css("right", (panelName == "blockerInstructions" ? "230px" : "10px" ));
	$(".sp_wl_container").css("width", "870px" );
	$(".sp_wl_container").css("height", (panelName == "blockerInstructions" && wlConfig.videoEnabled ? "295px" : "auto"));

	$('[data-toggle="tooltip"]').tooltip();
}

function initMobile() {
  $('.sp_wl_container').hide();
  $('.sp_wl_mobile').show();
}

function selectDifferentBlocker(){
	trackEvent("whitelist.click.blockerList", { blockerName : lastSelectedBlocker });
	showWhitelistingBlockers();
}

function setTextLabels(){
	for (var label in wlConfig.ui.copy.primary)
		$(".sp_wl_"+label).html(wlConfig.ui.copy.primary[label]);
}


function trackEvent (eventName, eventData) {

	var defaultData = {
		version : wlConfig.version,
		buildNr : wlConfig.buildNr,
		uiLocale : wlConfig.ui.locale,
		closeEnabled: wlConfig.closeEnabled,
		videoEnabled: wlConfig.videoEnabled,
		theme : wlConfig.theme,
		prevEventName : prevEventName,
		nrEvents : ++nrEvents,
		timeElapsedSinceStart : Math.round( (performance.now() - timerStart) / 1000),
		timeElapsedSinceLastEvent : Math.round ( (performance.now() - (timerLast !== null ? timerLast : timerStart ) ) / 1000)
	};

	// mixpanel.track(eventName, Object.assign(defaultData, eventData));

	prevEventName = eventName;
	timerLast = performance.now();
}

function mobileAndTabletcheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
