(this.webpackJsonpprinter=this.webpackJsonpprinter||[]).push([[0],{100:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:r)(i,o),i.onload||n(i,o),a.appendChild(i)}},101:function(e,t,n){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.createReactPlayer=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=y();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(2)),a=f(n(96)),i=f(n(103)),u=f(n(97)),l=n(98),c=n(89),s=f(n(104));function f(e){return e&&e.__esModule?e:{default:e}}function y(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return y=function(){return e},e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function v(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=(0,o.lazy)((function(){return n.e(7).then(n.t.bind(null,117,7))})),T="undefined"!==typeof window&&window.document,j="undefined"!==typeof e&&e.window&&e.window.document,E=Object.keys(l.propTypes),M=T||j?o.Suspense:function(){return null},R=[];t.createReactPlayer=function(e,t){var n,r;return r=n=function(n){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(b,n);var r,f,y,p=w(b);function b(){var n;m(this,b);for(var r=arguments.length,u=new Array(r),f=0;f<r;f++)u[f]=arguments[f];return A(_(n=p.call.apply(p,[this].concat(u))),"state",{showPreview:!!n.props.light}),A(_(n),"references",{wrapper:function(e){n.wrapper=e},player:function(e){n.player=e}}),A(_(n),"handleClickPreview",(function(e){n.setState({showPreview:!1}),n.props.onClickPreview(e)})),A(_(n),"showPreview",(function(){n.setState({showPreview:!0})})),A(_(n),"getDuration",(function(){return n.player?n.player.getDuration():null})),A(_(n),"getCurrentTime",(function(){return n.player?n.player.getCurrentTime():null})),A(_(n),"getSecondsLoaded",(function(){return n.player?n.player.getSecondsLoaded():null})),A(_(n),"getInternalPlayer",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return n.player?n.player.getInternalPlayer(e):null})),A(_(n),"seekTo",(function(e,t){if(!n.player)return null;n.player.seekTo(e,t)})),A(_(n),"handleReady",(function(){n.props.onReady(_(n))})),A(_(n),"getActivePlayer",(0,i.default)((function(n){for(var r=0,o=[].concat(R,v(e));r<o.length;r++){var a=o[r];if(a.canPlay(n))return a}return t||null}))),A(_(n),"getConfig",(0,i.default)((function(e,t){var r=n.props.config;return a.default.all([l.defaultProps.config,l.defaultProps.config[t]||{},r,r[t]||{}])}))),A(_(n),"getAttributes",(0,i.default)((function(e){return(0,c.omit)(n.props,E)}))),A(_(n),"renderActivePlayer",(function(e){if(!e)return null;var t=n.getActivePlayer(e);if(!t)return null;var r=n.getConfig(e,t.key);return o.default.createElement(s.default,h({},n.props,{key:t.key,ref:n.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:n.handleReady}))})),n}return r=b,f=[{key:"shouldComponentUpdate",value:function(e,t){return!(0,u.default)(this.props,e)||!(0,u.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e){var t=this.props.light;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}},{key:"renderPreview",value:function(e){if(!e)return null;var t=this.props,n=t.light,r=t.playIcon,a=t.previewTabIndex;return o.default.createElement(k,{url:e,light:n,playIcon:r,previewTabIndex:a,onClick:this.handleClickPreview})}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.style,r=e.width,a=e.height,i=e.fallback,u=e.wrapper,l=this.state.showPreview,c=this.getAttributes(t);return o.default.createElement(u,h({ref:this.references.wrapper,style:d(d({},n),{},{width:r,height:a})},c),o.default.createElement(M,{fallback:i},l?this.renderPreview(t):this.renderActivePlayer(t)))}}],f&&g(r.prototype,f),y&&g(r,y),b}(o.Component),A(n,"displayName","ReactPlayer"),A(n,"propTypes",l.propTypes),A(n,"defaultProps",l.defaultProps),A(n,"addCustomPlayer",(function(e){R.push(e)})),A(n,"removeCustomPlayers",(function(){R.length=0})),A(n,"canPlay",(function(t){for(var n=0,r=[].concat(R,v(e));n<r.length;n++){if(r[n].canPlay(t))return!0}return!1})),A(n,"canEnablePIP",(function(t){for(var n=0,r=[].concat(R,v(e));n<r.length;n++){var o=r[n];if(o.canEnablePIP&&o.canEnablePIP(t))return!0}return!1})),r}}).call(this,n(102))},102:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},103:function(e,t,n){"use strict";n.r(t);var r=Number.isNaN||function(e){return"number"===typeof e&&e!==e};function o(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(o=e[n],a=t[n],!(o===a||r(o)&&r(a)))return!1;var o,a;return!0}t.default=function(e,t){var n;void 0===t&&(t=o);var r,a=[],i=!1;return function(){for(var o=[],u=0;u<arguments.length;u++)o[u]=arguments[u];return i&&n===this&&t(o,a)||(r=e.apply(this,o),i=!0,n=this,a=o),r}}},104:function(e,t,n){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(2)),i=(o=n(97))&&o.__esModule?o:{default:o},u=n(98);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(u,e);var t,n,r,o=p(u);function u(){var e;s(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(h(e=o.call.apply(o,[this].concat(n))),"mounted",!1),b(h(e),"isReady",!1),b(h(e),"isPlaying",!1),b(h(e),"isLoading",!0),b(h(e),"loadOnReady",null),b(h(e),"startOnPlay",!0),b(h(e),"seekOnPlay",null),b(h(e),"onDurationCalled",!1),b(h(e),"handlePlayerMount",(function(t){e.player=t,e.player.load(e.props.url),e.progress()})),b(h(e),"getInternalPlayer",(function(t){return e.player?e.player[t]:null})),b(h(e),"progress",(function(){if(e.props.url&&e.player&&e.isReady){var t=e.getCurrentTime()||0,n=e.getSecondsLoaded(),r=e.getDuration();if(r){var o={playedSeconds:t,played:t/r};null!==n&&(o.loadedSeconds=n,o.loaded=n/r),o.playedSeconds===e.prevPlayed&&o.loadedSeconds===e.prevLoaded||e.props.onProgress(o),e.prevPlayed=o.playedSeconds,e.prevLoaded=o.loadedSeconds}}e.progressTimeout=setTimeout(e.progress,e.props.progressFrequency||e.props.progressInterval)})),b(h(e),"handleReady",(function(){if(e.mounted){e.isReady=!0,e.isLoading=!1;var t=e.props,n=t.onReady,r=t.playing,o=t.volume,a=t.muted;n(),a||null===o||e.player.setVolume(o),e.loadOnReady?(e.player.load(e.loadOnReady,!0),e.loadOnReady=null):r&&e.player.play(),e.handleDurationCheck()}})),b(h(e),"handlePlay",(function(){e.isPlaying=!0,e.isLoading=!1;var t=e.props,n=t.onStart,r=t.onPlay,o=t.playbackRate;e.startOnPlay&&(e.player.setPlaybackRate&&1!==o&&e.player.setPlaybackRate(o),n(),e.startOnPlay=!1),r(),e.seekOnPlay&&(e.seekTo(e.seekOnPlay),e.seekOnPlay=null),e.handleDurationCheck()})),b(h(e),"handlePause",(function(t){e.isPlaying=!1,e.isLoading||e.props.onPause(t)})),b(h(e),"handleEnded",(function(){var t=e.props,n=t.activePlayer,r=t.loop,o=t.onEnded;n.loopOnEnded&&r&&e.seekTo(0),r||(e.isPlaying=!1,o())})),b(h(e),"handleError",(function(){var t;e.isLoading=!1,(t=e.props).onError.apply(t,arguments)})),b(h(e),"handleDurationCheck",(function(){clearTimeout(e.durationCheckTimeout);var t=e.getDuration();t?e.onDurationCalled||(e.props.onDuration(t),e.onDurationCalled=!0):e.durationCheckTimeout=setTimeout(e.handleDurationCheck,100)})),b(h(e),"handleLoaded",(function(){e.isLoading=!1})),e}return t=u,n=[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.player){var n=this.props,r=n.url,o=n.playing,a=n.volume,u=n.muted,l=n.playbackRate,c=n.pip,s=n.loop,f=n.activePlayer;if(!(0,i.default)(e.url,r)){if(this.isLoading&&!f.forceLoad)return console.warn("ReactPlayer: the attempt to load ".concat(r," is being deferred until the player has loaded")),void(this.loadOnReady=r);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}e.playing||!o||this.isPlaying||this.player.play(),e.playing&&!o&&this.isPlaying&&this.player.pause(),!e.pip&&c&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!c&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==a&&null!==a&&this.player.setVolume(a),e.muted!==u&&(u?this.player.mute():(this.player.unmute(),null!==a&&setTimeout((function(){return t.player.setVolume(a)})))),e.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l),e.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}}},{key:"getDuration",value:function(){return this.isReady?this.player.getDuration():null}},{key:"getCurrentTime",value:function(){return this.isReady?this.player.getCurrentTime():null}},{key:"getSecondsLoaded",value:function(){return this.isReady?this.player.getSecondsLoaded():null}},{key:"seekTo",value:function(e,t){var n=this;if(!this.isReady&&0!==e)return this.seekOnPlay=e,void setTimeout((function(){n.seekOnPlay=null}),5e3);if(t?"fraction"===t:e>0&&e<1){var r=this.player.getDuration();return r?void this.player.seekTo(r*e):void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e)}},{key:"render",value:function(){var e=this.props.activePlayer;return e?a.default.createElement(e,c({},this.props,{onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError})):null}}],n&&f(t.prototype,n),r&&f(t,r),u}(a.Component);t.default=m,b(m,"displayName","Player"),b(m,"propTypes",u.propTypes),b(m,"defaultProps",u.defaultProps)},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseStartTime=function(e){return y(e,l)},t.parseEndTime=function(e){return y(e,c)},t.randomString=function(){return Math.random().toString(36).substr(2,5)},t.queryString=function(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")},t.getSDK=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.default,i=p(t);if(i&&o(i))return Promise.resolve(i);return new Promise((function(r,o){if(d[e])d[e].push({resolve:r,reject:o});else{d[e]=[{resolve:r,reject:o}];var i=function(t){d[e].forEach((function(e){return e.resolve(t)}))};if(n){var u=window[n];window[n]=function(){u&&u(),i(p(t))}}a(e,(function(r){r?(d[e].forEach((function(e){return e.reject(r)})),d[e]=null):n||i(p(t))}))}}))},t.getConfig=function(e,t){return(0,o.default)(t.config,e.config)},t.omit=function(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=(t=[]).concat.apply(t,r),i={},u=Object.keys(e),l=0,c=u;l<c.length;l++){var s=c[l];-1===a.indexOf(s)&&(i[s]=e[s])}return i},t.callPlayer=function(e){var t;if(!this.player||!this.player[e]){var n="ReactPlayer: ".concat(this.constructor.displayName," player could not call %c").concat(e,"%c \u2013 ");return this.player?this.player[e]||(n+="The method was not available"):n+="The player was not available",console.warn(n,"font-weight: bold",""),null}for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return(t=this.player)[e].apply(t,o)},t.isMediaStream=function(e){return"undefined"!==typeof window&&"undefined"!==typeof window.MediaStream&&e instanceof window.MediaStream},t.isBlobUrl=function(e){return/^blob:/.test(e)},t.supportsWebKitPresentationMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("video"),t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"===typeof e.webkitSetPresentationMode&&t};var r=a(n(100)),o=a(n(96));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=/[?&#](?:start|t)=([0-9hms]+)/,c=/[?&#]end=([0-9hms]+)/,s=/(\d+)(h|m|s)/g,f=/^\d+$/;function y(e,t){if(!(e instanceof Array)){var n=e.match(t);if(n){var r=n[1];if(r.match(s))return function(e){var t=0,n=s.exec(e);for(;null!==n;){var r=i(n,3),o=r[1],a=r[2];"h"===a&&(t+=60*parseInt(o,10)*60),"m"===a&&(t+=60*parseInt(o,10)),"s"===a&&(t+=parseInt(o,10)),n=s.exec(e)}return t}(r);if(f.test(r))return parseInt(r)}}}function p(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}var d={}},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canPlay=t.FLV_EXTENSIONS=t.DASH_EXTENSIONS=t.HLS_EXTENSIONS=t.VIDEO_EXTENSIONS=t.AUDIO_EXTENSIONS=t.MATCH_URL_KALTURA=t.MATCH_URL_VIDYARD=t.MATCH_URL_MIXCLOUD=t.MATCH_URL_DAILYMOTION=t.MATCH_URL_TWITCH_CHANNEL=t.MATCH_URL_TWITCH_VIDEO=t.MATCH_URL_WISTIA=t.MATCH_URL_STREAMABLE=t.MATCH_URL_FACEBOOK_WATCH=t.MATCH_URL_FACEBOOK=t.MATCH_URL_VIMEO=t.MATCH_URL_SOUNDCLOUD=t.MATCH_URL_YOUTUBE=void 0;var r=n(89);function o(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){l=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;t.MATCH_URL_YOUTUBE=i;var u=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/;t.MATCH_URL_SOUNDCLOUD=u;var l=/vimeo\.com\/.+/;t.MATCH_URL_VIMEO=l;var c=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;t.MATCH_URL_FACEBOOK=c;var s=/^https?:\/\/fb\.watch\/.+$/;t.MATCH_URL_FACEBOOK_WATCH=s;var f=/streamable\.com\/([a-z0-9]+)$/;t.MATCH_URL_STREAMABLE=f;var y=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;t.MATCH_URL_WISTIA=y;var p=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;t.MATCH_URL_TWITCH_VIDEO=p;var d=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;t.MATCH_URL_TWITCH_CHANNEL=d;var h=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;t.MATCH_URL_DAILYMOTION=h;var v=/mixcloud\.com\/([^/]+\/[^/]+)/;t.MATCH_URL_MIXCLOUD=v;var b=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-]+)/;t.MATCH_URL_VIDYARD=b;var m=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_]+)$/;t.MATCH_URL_KALTURA=m;var g=/\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;t.AUDIO_EXTENSIONS=g;var P=/\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;t.VIDEO_EXTENSIONS=P;var w=/\.(m3u8)($|\?)/i;t.HLS_EXTENSIONS=w;var O=/\.(mpd)($|\?)/i;t.DASH_EXTENSIONS=O;var _=/\.(flv)($|\?)/i;t.FLV_EXTENSIONS=_;var S={youtube:function(e){return e instanceof Array?e.every((function(e){return i.test(e)})):i.test(e)},soundcloud:function(e){return u.test(e)&&!g.test(e)},vimeo:function(e){return l.test(e)&&!P.test(e)&&!w.test(e)},facebook:function(e){return c.test(e)||s.test(e)},streamable:function(e){return f.test(e)},wistia:function(e){return y.test(e)},twitch:function(e){return p.test(e)||d.test(e)},dailymotion:function(e){return h.test(e)},mixcloud:function(e){return v.test(e)},vidyard:function(e){return b.test(e)},kaltura:function(e){return m.test(e)},file:function e(t){if(t instanceof Array){var n,a=o(t);try{for(a.s();!(n=a.n()).done;){var i=n.value;if("string"===typeof i&&e(i))return!0;if(e(i.src))return!0}}catch(u){a.e(u)}finally{a.f()}return!1}return!(!(0,r.isMediaStream)(t)&&!(0,r.isBlobUrl)(t))||(g.test(t)||P.test(t)||w.test(t)||O.test(t)||_.test(t))}};t.canPlay=S},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(99))&&r.__esModule?r:{default:r},a=n(101);var i=o.default[o.default.length-1],u=(0,a.createReactPlayer)(o.default,i);t.default=u},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u}));var r=n(0);function o(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"}}]})(e)}function a(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}}]})(e)}function i(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"}}]})(e)}function u(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"}}]})(e)}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i}));var r=n(0);function o(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}},{tag:"path",attr:{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}}]})(e)}function a(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}},{tag:"path",attr:{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"}}]})(e)}function i(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}},{tag:"line",attr:{x1:"23",y1:"9",x2:"17",y2:"15"}},{tag:"line",attr:{x1:"17",y1:"9",x2:"23",y2:"15"}}]})(e)}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M290 236.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0 0 13.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 0 0 0 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 0 0-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"}}]})(e)}},96:function(e,t,n){"use strict";var r=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function i(e,t,n){return e.concat(t).map((function(e){return a(e,n)}))}function u(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function l(e,t){try{return t in e}catch(n){return!1}}function c(e,t,n){var r={};return n.isMergeableObject(e)&&u(e).forEach((function(t){r[t]=a(e[t],n)})),u(t).forEach((function(o){(function(e,t){return l(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(l(e,o)&&n.isMergeableObject(t[o])?r[o]=function(e,t){if(!t.customMerge)return s;var n=t.customMerge(e);return"function"===typeof n?n:s}(o,n)(e[o],t[o],n):r[o]=a(t[o],n))})),r}function s(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||i,n.isMergeableObject=n.isMergeableObject||r,n.cloneUnlessOtherwiseSpecified=a;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):c(e,t,n):a(t,n)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return s(e,n,t)}),{})};var f=s;e.exports=f},97:function(e,t){var n="undefined"!==typeof Element,r="function"===typeof Map,o="function"===typeof Set,a="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var u,l,c,s;if(Array.isArray(e)){if((u=e.length)!=t.length)return!1;for(l=u;0!==l--;)if(!i(e[l],t[l]))return!1;return!0}if(r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!t.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],t.get(l.value[0])))return!1;return!0}if(o&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!t.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((u=e.length)!=t.length)return!1;for(l=u;0!==l--;)if(e[l]!==t[l])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((u=(c=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(l=u;0!==l--;)if(!Object.prototype.hasOwnProperty.call(t,c[l]))return!1;if(n&&e instanceof Element)return!1;for(l=u;0!==l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!i(e[c[l]],t[c[l]]))return!1;return!0}return e!==e&&t!==t}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultProps=t.propTypes=void 0;var r,o=(r=n(5))&&r.__esModule?r:{default:r};var a=o.default.string,i=o.default.bool,u=o.default.number,l=o.default.array,c=o.default.oneOfType,s=o.default.shape,f=o.default.object,y=o.default.func,p=o.default.node,d={url:c([a,l,f]),playing:i,loop:i,controls:i,volume:u,muted:i,playbackRate:u,width:c([a,u]),height:c([a,u]),style:f,progressInterval:u,playsinline:i,pip:i,stopOnUnmount:i,light:c([i,a]),playIcon:p,previewTabIndex:u,fallback:p,wrapper:c([a,y,s({render:y.isRequired})]),config:s({soundcloud:s({options:f}),youtube:s({playerVars:f,embedOptions:f,onUnstarted:y}),facebook:s({appId:a,version:a,playerId:a,attributes:f}),dailymotion:s({params:f}),vimeo:s({playerOptions:f}),file:s({attributes:f,tracks:l,forceVideo:i,forceAudio:i,forceHLS:i,forceDASH:i,forceFLV:i,hlsOptions:f,hlsVersion:a,dashVersion:a,flvVersion:a}),wistia:s({options:f,playerId:a,customControls:l}),mixcloud:s({options:f}),twitch:s({options:f,playerId:a}),vidyard:s({options:f})}),onReady:y,onStart:y,onPlay:y,onPause:y,onBuffer:y,onBufferEnd:y,onEnded:y,onError:y,onDuration:y,onSeek:y,onProgress:y,onClickPreview:y,onEnablePIP:y,onDisablePIP:y};t.propTypes=d;var h=function(){},v={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:h},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1}},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"0.14.16",dashVersion:"3.1.3",flvVersion:"1.5.0"},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:h,onStart:h,onPlay:h,onPause:h,onBuffer:h,onBufferEnd:h,onEnded:h,onError:h,onDuration:h,onSeek:h,onProgress:h,onClickPreview:h,onEnablePIP:h,onDisablePIP:h};t.defaultProps=v},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2),o=n(89),a=n(90),i=[{key:"youtube",name:"YouTube",canPlay:a.canPlay.youtube,lazyPlayer:(0,r.lazy)((function(){return n.e(14).then(n.t.bind(null,105,7))}))},{key:"soundcloud",name:"SoundCloud",canPlay:a.canPlay.soundcloud,lazyPlayer:(0,r.lazy)((function(){return n.e(8).then(n.t.bind(null,106,7))}))},{key:"vimeo",name:"Vimeo",canPlay:a.canPlay.vimeo,lazyPlayer:(0,r.lazy)((function(){return n.e(12).then(n.t.bind(null,107,7))}))},{key:"facebook",name:"Facebook",canPlay:a.canPlay.facebook,lazyPlayer:(0,r.lazy)((function(){return n.e(3).then(n.t.bind(null,108,7))}))},{key:"streamable",name:"Streamable",canPlay:a.canPlay.streamable,lazyPlayer:(0,r.lazy)((function(){return n.e(9).then(n.t.bind(null,109,7))}))},{key:"wistia",name:"Wistia",canPlay:a.canPlay.wistia,lazyPlayer:(0,r.lazy)((function(){return n.e(13).then(n.t.bind(null,110,7))}))},{key:"twitch",name:"Twitch",canPlay:a.canPlay.twitch,lazyPlayer:(0,r.lazy)((function(){return n.e(10).then(n.t.bind(null,111,7))}))},{key:"dailymotion",name:"DailyMotion",canPlay:a.canPlay.dailymotion,lazyPlayer:(0,r.lazy)((function(){return n.e(2).then(n.t.bind(null,112,7))}))},{key:"mixcloud",name:"Mixcloud",canPlay:a.canPlay.mixcloud,lazyPlayer:(0,r.lazy)((function(){return n.e(6).then(n.t.bind(null,113,7))}))},{key:"vidyard",name:"Vidyard",canPlay:a.canPlay.vidyard,lazyPlayer:(0,r.lazy)((function(){return n.e(11).then(n.t.bind(null,114,7))}))},{key:"kaltura",name:"Kaltura",canPlay:a.canPlay.kaltura,lazyPlayer:(0,r.lazy)((function(){return n.e(5).then(n.t.bind(null,115,7))}))},{key:"file",name:"FilePlayer",canPlay:a.canPlay.file,canEnablePIP:function(e){return a.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,o.supportsWebKitPresentationMode)())&&!a.AUDIO_EXTENSIONS.test(e)},lazyPlayer:(0,r.lazy)((function(){return n.e(4).then(n.t.bind(null,116,7))}))}];t.default=i}}]);
//# sourceMappingURL=0.17088173.chunk.js.map