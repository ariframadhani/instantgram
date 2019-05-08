(function framework7ComponentLoader(a,e){void 0===e&&(e=!0);document,window;var r=a.$,t=(a.Template7,a.utils),o=(a.device,a.support),s=(a.Class,a.Modal,a.ConstructorMethods,a.ModalMethods,{open:function(a,e){var t;void 0===a&&(a=".card-expandable"),void 0===e&&(e=!0);var s=this;if(!r(".card-opened").length){var n=r(a).eq(0);if(n&&n.length&&!(n.hasClass("card-opened")||n.hasClass("card-opening")||n.hasClass("card-closing"))){var d,c=n.parents(".page").eq(0);if(c.length)if(n.trigger("card:beforeopen",{prevent:F}),s.emit("cardBeforeOpen",n[0],F),!d){var i,l,p;s.params.card.backrop&&((i=n.parents(".page-content").find(".card-backdrop")).length||(i=r('<div class="card-backdrop"></div>'),n.parents(".page-content").append(i))),s.params.card.hideNavbarOnOpen&&((l=c.children(".navbar")).length||c[0].f7Page&&(l=c[0].f7Page.$navbarEl)),s.params.card.hideToolbarOnOpen&&((p=c.children(".toolbar")).length||(p=c.parents(".view").children(".toolbar")),p.length||(p=c.parents(".views").children(".toolbar")));var h,f=n.css("transform");f&&f.match(/[2-9]/)&&(h=!0);var g=n.children(".card-content"),v=r(document.createElement("div")).addClass("card-expandable-size");n.append(v);var m,u,b=n[0].offsetWidth,C=n[0].offsetHeight,x=c[0].offsetWidth,k=c[0].offsetHeight,w=v[0].offsetWidth||x,O=v[0].offsetHeight||k,T=w/b,M=O/C,H=n.offset();h?(m=n[0].offsetLeft,u=n[0].offsetTop-n.parents(".page-content")[0].scrollTop):(m=H.left,u=H.top-c.offset().top,s.rtl&&(m-=n[0].scrollLeft)),u-=(k-O)/2;var E=w-b-(m-=(x-w)/2);s.rtl&&(m=(t=[E,m])[0],E=t[1]);var W,q,B,P,y,z,L,N,X,$,Y,D=O-C-u,j=(E-m)/2,A=(D-u)/2;s.params.card.hideNavbarOnOpen&&l&&l.length&&s.navbar.hide(l,e),s.params.card.hideToolbarOnOpen&&p&&p.length&&s.toolbar.hide(p,e),i&&i.removeClass("card-backdrop-out").addClass("card-backdrop-in"),n.removeClass("card-transitioning"),e&&n.addClass("card-opening"),n.trigger("card:open"),s.emit("cardOpen",n[0]),g.css({width:w+"px",height:O+"px"}).transform("translate3d("+(s.rtl?m+j:-m-j)+"px, 0px, 0) scale("+1/T+", "+1/M+")"),n.transform("translate3d("+j+"px, "+A+"px, 0) scale("+T+", "+M+")"),e?n.transitionEnd(function(){G()}):G(),c.addClass("page-with-card-opened"),n[0].detachEventHandlers=function(){s.off("resize",I),o.touch&&s.params.card.swipeToClose&&(s.off("touchstart:passive",J),s.off("touchmove:active",K),s.off("touchend:passive",Q))},s.on("resize",I),o.touch&&s.params.card.swipeToClose&&(s.on("touchstart:passive",J),s.on("touchmove:active",K),s.on("touchend:passive",Q))}}}function F(){d=!0}function G(){n.addClass("card-opened"),n.removeClass("card-opening"),n.trigger("card:opened"),s.emit("cardOpened",n[0])}function I(){var a;n.removeClass("card-transitioning"),b=n[0].offsetWidth,C=n[0].offsetHeight,x=c[0].offsetWidth,k=c[0].offsetHeight,w=v[0].offsetWidth||x,O=v[0].offsetHeight||k,T=w/b,M=O/C,n.transform("translate3d(0px, 0px, 0) scale(1)"),H=n.offset(),m=H.left-(x-w)/2,s.rtl&&(m-=n[0].scrollLeft),u=H.top-(k-O)/2,E=w-b-m,D=O-C-u,s.rtl&&(m=(a=[E,m])[0],E=a[1]),j=(E-m)/2,A=(D-u)/2,n.transform("translate3d("+j+"px, "+A+"px, 0) scale("+T+", "+M+")"),g.css({width:w+"px",height:O+"px"}).transform("translate3d("+(s.rtl?m+j:-m-j)+"px, 0px, 0) scale("+1/T+", "+1/M+")")}function J(a){r(a.target).closest(n).length&&n.hasClass("card-opened")&&(W=g.scrollTop(),q=!0,P=a.targetTouches[0].pageX,y=a.targetTouches[0].pageY,N=void 0,$=!1,Y=!1)}function K(a){if(q){if(z=a.targetTouches[0].pageX,L=a.targetTouches[0].pageY,void 0===N&&(N=!!(N||Math.abs(L-y)>Math.abs(z-P))),Y||$||(!N&&a.targetTouches[0].clientX<=50?Y=!0:$=!0),!Y&&!$||$&&0!==W)return q=!0,void(B=!0);B||n.removeClass("card-transitioning"),B=!0,((X=$?Math.max((L-y)/150,0):Math.max((z-P)/(b/2),0))>0&&$||Y)&&($&&s.device.ios&&(g.css("-webkit-overflow-scrolling","auto"),g.scrollTop(0)),a.preventDefault()),X>1&&(X=Math.pow(X,.3)),X>($?1.3:1.1)?(q=!1,B=!1,s.card.close(n)):n.transform("translate3d("+j+"px, "+A+"px, 0) scale("+T*(1-.2*X)+", "+M*(1-.2*X)+")")}}function Q(){q&&B&&(q=!1,B=!1,s.device.ios&&g.css("-webkit-overflow-scrolling",""),X>=.8?s.card.close(n):n.addClass("card-transitioning").transform("translate3d("+j+"px, "+A+"px, 0) scale("+T+", "+M+")"))}},close:function(a,e){void 0===a&&(a=".card-expandable.card-opened"),void 0===e&&(e=!0);var t=this,o=r(a).eq(0);if(o&&o.length&&o.hasClass("card-opened")&&!o.hasClass("card-opening")&&!o.hasClass("card-closing")){var s,n,d,c=o.children(".card-content"),i=o.parents(".page").eq(0);if(i.length)t.params.card.backrop&&(d=o.parents(".page-content").find(".card-backdrop")),t.params.card.hideNavbarOnOpen&&((s=i.children(".navbar")).length||i[0].f7Page&&(s=i[0].f7Page.$navbarEl),s&&s.length&&t.navbar.show(s,e)),t.params.card.hideToolbarOnOpen&&((n=i.children(".toolbar")).length||(n=i.parents(".view").children(".toolbar")),n.length||(n=i.parents(".views").children(".toolbar")),n&&n.length&&t.toolbar.show(n,e)),i.removeClass("page-with-card-opened"),d&&d.length&&d.removeClass("card-backdrop-in").addClass("card-backdrop-out"),o.removeClass("card-opened card-transitioning"),e?o.addClass("card-closing"):o.addClass("card-no-transition"),o.transform(""),o.trigger("card:close"),t.emit("cardClose",o[0]),c.css({width:"",height:""}).transform("").scrollTop(0,e?300:0),e?c.transitionEnd(function(){l()}):l(),o[0].detachEventHandlers&&(o[0].detachEventHandlers(),delete o[0].detachEventHandlers)}function l(){o.removeClass("card-closing card-no-transition"),o.trigger("card:closed"),o.find(".card-expandable-size").remove(),t.emit("cardClosed",o[0])}},toggle:function(a,e){void 0===a&&(a=".card-expandable");var t=r(a).eq(0);t.length&&(t.hasClass("card-opened")?this.card.close(t,e):this.card.open(t,e))}}),n={name:"card",params:{card:{hideNavbarOnOpen:!0,hideToolbarOnOpen:!0,swipeToClose:!0,closeByBackdropClick:!0,backrop:!0}},create:function(){t.extend(this,{card:{open:s.open.bind(this),close:s.close.bind(this),toggle:s.toggle.bind(this)}})},clicks:{".card-close":function(a,e){this.card.close(e.card)},".card-open":function(a,e){this.card.open(e.card)},".card-expandable":function(a,e,t){a.hasClass("card-opened")||a.hasClass("card-opening")||a.hasClass("card-closing")||r(t.target).closest(".card-prevent-open").length||this.card.open(a)},".card-backdrop-in":function(){var a=!1;this.params.card.closeByBackdropClick&&(a=!0);var e=r(".card-opened");e.length&&("true"===e.attr("data-close-on-backdrop-click")?a=!0:"false"===e.attr("data-close-on-backdrop-click")&&(a=!1),a&&this.card.close(e))}}};if(e){if(a.prototype.modules&&a.prototype.modules[n.name])return;a.use(n),a.instance&&(a.instance.useModuleParams(n,a.instance.params),a.instance.useModule(n))}return n}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
