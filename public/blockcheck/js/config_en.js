var wlConfig = wlConfig || {};
wlConfig.ui = wlConfig.ui || {};
wlConfig.ui.copy = wlConfig.ui.copy || {};

wlConfig.ui.locale = "en";

wlConfig.ui.copy.primary = {
	select_title : "Select your ad blocker:",
	select_description : "One of the icons above should appear in the <label class=\"browserName\"></label> toolbar.",
	select_show_all : "Show more options",
	instructions_title : "Disable <label class=\"blockerName\"></label>:",
	differentblocker_text : "Using a different ad blocker?",
	differentblocker_link : "Click here.",
	support_title : "Help & Support",
	support_option_1 : "I can't find my ad blockers icon in the browser toolbar",
	support_option_2 : "I'm using a different ad blocker",
	support_option_3 : "I don't want to enable my ad blocker",
	back_button : "Back",
	reload_button : "Reload",
	continue_button : "Continue to site"
}

var instrTemplates = {
	clickIcon : "Click on the <span class='sp_wl_ab_icon'></span> icon in the <label class=\"browserName\"></label> toolbar.",
	reloadPage : "<a href=\"javascript:reloadParent()\">"+wlConfig.ui.copy.primary.reload_button+"</a> your browser or click the button below to continue."
}

wlConfig.ui.copy.instructions = {
	"adblock" : { 
		default : {
			1: instrTemplates.clickIcon,
			2: "Click on the \"Don't run on pages on this domain\" option.",
			3: instrTemplates.reloadPage
		}
	},
	"adblock_plus" : { 
		default : {
			1: instrTemplates.clickIcon,
			2: "Click \"Enabled on this site\" to change to \"Disabled\".",
			3: instrTemplates.reloadPage
		},
		ff : {
			2 : "Click \"Disable on website.com\".",
		}

	},
	"ublock_origin" : { 
		default : {
			1: instrTemplates.clickIcon,
			2: "Click on the big blue \"power\" icon.",
			3: instrTemplates.reloadPage
		}
	},
	"adguard" : { 
		default : {
			1: instrTemplates.clickIcon,
			2: "Click on the toggle next to \"Protection on this website\".",
			3: instrTemplates.reloadPage
		}
	},
	"adblock_pro" : { 
		default : {
			1: instrTemplates.clickIcon,
			2: "Click on the big blue \"power\" icon.",
			3: instrTemplates.reloadPage
		}
	},
	"ublock" : { 
		default : {
			1: instrTemplates.clickIcon,
			2: "Click on the big blue \"power\" icon.",
			3: instrTemplates.reloadPage
		}
	}
};