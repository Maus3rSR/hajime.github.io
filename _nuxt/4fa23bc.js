(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{355:function(n,t,l){"use strict";l.r(t);l(12),l(50),l(60),l(44);var e=l(13),o={layout:"post",computed:{software_version:function(){return"0.1.1-prealpha"},release_link:function(){return"https://github.com/Maus3rSR/Hajime/releases"},latest_release_api_url:function(){return"https://api.github.com/repos/Maus3rSR/Hajime/releases/latest"}},methods:{trackEvent:function(label){this.$ga.event("Download","Click",label)}},data:function(){return{releaseMap:{windows_download_link:".exe",mac_download_link:".dmg",linux_download_link:".AppImage"},windows_download_link:null,mac_download_link:null,linux_download_link:null}},mounted:function(){var n=this;return Object(e.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$axios.get(n.latest_release_api_url);case 2:t.sent.data.assets.forEach((function(t){for(var l in n.releaseMap)if(null===n[l]&&t.name.includes(n.releaseMap[l])){n[l]=t.browser_download_url;break}}));case 4:case"end":return t.stop()}}),t)})))()}},r=l(30),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,l=n._self._c||t;return l("div",{staticClass:"item row"},[l("div",{staticClass:"col-12 col-md-4"}),n._v(" "),l("div",{staticClass:"col-12 col-md-8"},[l("div",{staticClass:"section-content scrollable"},[l("div",{staticClass:"wrapper"},[l("h1",[n._v("\n                    "+n._s(n.$t("download.title"))+"\n                    ("+n._s(n.software_version)+")\n                ")]),n._v(" "),l("div",{staticClass:"alert alert-warning"},[l("i",{staticClass:"fas fa-exclamation-triangle"}),n._v(" "),l("i18n",{attrs:{tag:"span",path:"download.warning"}},[l("b",[n._v("PRE-ALPHA")])])],1),n._v(" "),l("div",{staticClass:"alert alert-warning"},[l("i",{staticClass:"fas fa-exclamation-triangle"}),n._v("\n                    "+n._s(n.$t("download.warning2"))+"\n                ")]),n._v(" "),l("div",{staticClass:"row mt-4"},[l("div",{staticClass:"col-12 col-sm-3"},[null!==n.windows_download_link?l("a",{staticClass:"btn btn-outline-primary btn-round",attrs:{href:n.windows_download_link},on:{click:function(t){return n.trackEvent("Windows")}}},[l("i",{staticClass:"fab fa-windows"}),n._v("\n                            Windows\n                        ")]):n._e()]),n._v(" "),l("div",{staticClass:"col-12 col-sm-3"},[null!==n.mac_download_link?l("a",{staticClass:"btn btn-outline-primary btn-round",attrs:{href:n.mac_download_link},on:{click:function(t){return n.trackEvent("MacOsx")}}},[l("i",{staticClass:"fab fa-apple"}),n._v("\n                            Mac OSX\n                        ")]):n._e()]),n._v(" "),l("div",{staticClass:"col-12 col-sm-3"},[null!==n.linux_download_link?l("a",{staticClass:"btn btn-outline-primary btn-round",attrs:{href:n.linux_download_link},on:{click:function(t){return n.trackEvent("Linux")}}},[l("i",{staticClass:"fab fa-linux"}),n._v("\n                            Linux\n                        ")]):n._e()])]),n._v(" "),l("div",{staticClass:"row mt-4"},[l("div",{staticClass:"col-12"},[l("a",{attrs:{href:n.release_link,target:"_blank"}},[n._v("\n                            "+n._s(n.$t("download.oldVersion"))+"\n                        ")])])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);