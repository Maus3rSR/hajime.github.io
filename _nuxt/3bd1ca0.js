(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{314:function(t,n,o){"use strict";o.r(n);var l={layout:"post",computed:{software_version:function(){return"0.1.0-prealpha"},old_release_link:function(){return"https://github.com/Maus3rSR/Hajime/releases"},download_link:function(){return"https://github.com/Maus3rSR/Hajime/releases/latest/download/"},windows_download_link:function(){return"".concat(this.download_link,"hajime-Setup-").concat(this.software_version,".exe")},mac_download_link:function(){return"".concat(this.download_link,"hajime-").concat(this.software_version,"-mac.zip")},linux_download_link:function(){return"".concat(this.download_link,"hajime-").concat(this.software_version,".AppImage")}},methods:{trackEvent:function(label){this.$ga.event("Download","Click",label)}}},c=o(27),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"item row"},[o("div",{staticClass:"col-12 col-md-4"}),t._v(" "),o("div",{staticClass:"col-12 col-md-8"},[o("div",{staticClass:"section-content scrollable"},[o("div",{staticClass:"wrapper"},[o("h1",[t._v("\n                    "+t._s(t.$t("download.title"))+"\n                    ("+t._s(t.software_version)+")\n                ")]),t._v(" "),o("div",{staticClass:"alert alert-warning"},[o("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(" "),o("i18n",{attrs:{tag:"span",path:"download.warning"}},[o("b",[t._v("PRE-ALPHA")])])],1),t._v(" "),o("div",{staticClass:"alert alert-warning"},[o("i",{staticClass:"fas fa-exclamation-triangle"}),t._v("\n                    "+t._s(t.$t("download.warning2"))+"\n                ")]),t._v(" "),o("div",{staticClass:"row mt-4"},[o("div",{staticClass:"col-12 col-sm-3"},[o("a",{staticClass:"btn btn-outline-primary btn-round",attrs:{href:t.windows_download_link},on:{click:function(n){return t.trackEvent("Windows")}}},[o("i",{staticClass:"fab fa-windows"}),t._v("\n                            Windows\n                        ")])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("a",{staticClass:"btn btn-outline-primary btn-round",attrs:{href:t.mac_download_link},on:{click:function(n){return t.trackEvent("MacOsx")}}},[o("i",{staticClass:"fab fa-apple"}),t._v("\n                            Mac OSX\n                        ")])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("a",{staticClass:"btn btn-outline-primary btn-round",attrs:{href:t.linux_download_link},on:{click:function(n){return t.trackEvent("Linux")}}},[o("i",{staticClass:"fab fa-linux"}),t._v("\n                            Linux\n                        ")])])]),t._v(" "),o("div",{staticClass:"row mt-4"},[o("div",{staticClass:"col-12"},[o("a",{attrs:{href:t.old_release_link,target:"_blank"}},[t._v("\n                            "+t._s(t.$t("download.oldVersion"))+"\n                        ")])])])])])])])}),[],!1,null,null,null);n.default=component.exports}}]);