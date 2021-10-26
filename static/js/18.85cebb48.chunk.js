(this.webpackJsonpprinter=this.webpackJsonpprinter||[]).push([[18],{124:function(n,e,t){"use strict";t.r(e);var a=t(95),r=t(3);e.default=function(){return Object(r.jsx)(a.a,{title:"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0440\u0430\u0432\u043a\u0430 \u0447\u043e\u0440\u043d\u0438\u043b\u0430\u043c\u0438 Epson",url:"refillment.mp4"})}},95:function(n,e,t){"use strict";var a,r,o,c=t(9),i=t(6),l=t(4),s=t(2),b=t(96),u=t.n(b),m=t(1),d=t(22),p=t.n(d),f=t(97),g=t(98),j=t(100),O=t(99),y=Object(m.a)(a||(a=Object(l.a)(['\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    background-color: rgba(0,0,0, .4);\n    transition: opacity .3s linear;\n\n    button\n    {\n        border: 0;\n        background-color: transparent;\n        cursor: pointer;\n        color: white;\n    }\n\n    > .player-controls__top\n    {\n        display: flex;\n        justify-content: space-between;\n        padding: 1em;\n\n        > .heading  \n        {\n            color: white;\n            margin: 0;  \n            font-size: 1rem;\n\n            @media (min-width: 600px) {\n                font-size: 1.5rem;\n            }\n        }\n    }\n\n    > .player-controls__middle\n    {\n        display: flex;\n        justify-content: center;\n\n        > .toggle-play\n        {\n            font-size: 2.5rem;\n\n            @media (min-width: 600px) {\n                font-size: 5rem;\n            }\n        }\n\n        > .rewind,\n        > .forward\n        {\n            font-size: 2rem;\n\n            @media (min-width: 600px) {\n                font-size: 4rem;\n            }\n        }\n    }\n\n    > .player-controls__bottom\n    {\n        display: flex;\n        align-items: center;\n\n        > .toggle-play\n        {\n            font-size: 1.5rem;\n            padding: 0;\n\n            @media (min-width: 600px) {\n                font-size: 2rem;\n            }\n        }\n\n        > .volume-range\n        {\n            cursor: pointer;\n            width: 20%;\n        }\n\n        > .rewind,\n        > .forward,\n        > .toggle-mute,\n        > .fullscreen\n        {\n            font-size: 1rem;\n\n            @media (min-width: 600px) {\n                font-size: 1.5rem;\n            }\n        }\n\n        > .fullscreen\n        {\n            position: relative;\n            width: 30px;\n            height: 100%;\n\n            > svg\n            {\n                position: absolute;\n                top: 22%;\n                left: .25em;\n\n                @media (min-width: 600px) {\n                    left: -.25em;\n                }\n            }\n        }\n\n        > .seekbar\n        {\n            display: flex;\n            justify-content: space-evenly;\n            align-items: center;\n            width: 100%;\n            height: 100%;\n\n            > .seekbar__range\n            {\n                --thumb-size: 1em;\n                --thumb-color: gray;\n                --before-width: 0%;\n                --before-color: darkgray;\n                --radius: .2em;\n\n                -webkit-appearance: none;\n                position: relative;\n                width: calc(100% - 12em);  \n                cursor: pointer;\n                height: .5em;\n                border-radius: var(--radius); \n                \n                &::-webkit-slider-thumb\n                {\n                    position: relative;\n                    z-index: 2;\n                    -webkit-appearance: none;\n                    height: var(--thumb-size);\n                    width: var(--thumb-size);\n                    background-color: var(--thumb-color);\n                    padding: 0;\n                    border-radius: 50%;\n                    transform: translateX(0em);\n\n                    &:hover\n                    {\n                        box-shadow: 0em 0em .1em #090909, 0em 0em .1em #0d0d0d;\n                    }\n                }\n\n                &::before\n                {\n                    position: absolute;\n                    content: " ";\n                    height: 100%;\n                    width: var(--before-width);\n                    background-color: var(--before-color);\n                    border-top-left-radius: var(--radius);\n                    border-bottom-left-radius: var(--radius);\n                }\n            }\n\n            > .seekbar__display-time\n            {\n                color: white;\n                font-size: .6rem;\n                margin-left: -1em;\n\n                @media (min-width: 600px) {\n                    font-size: 1rem;\n                }\n            }\n        }\n\n        > .playback-rate\n        {\n            position: relative;\n            font-size: 1.1rem;\n            margin-left: -1.8em;\n            margin-bottom: -.4em;\n\n            > .playback-rate__options\n            {\n                display: none;\n                position: absolute;\n                bottom: 1.5em;\n                left: calc(50% - 1em);\n                background-color: white;\n                border-radius: .3em;\n                overflow: hidden;\n\n                > div\n                {\n                    color: black;\n                    padding: .5em;\n                    font-size: clamp(.7rem, 2vw + .1em, 1rem);\n\n                    &::nth-of-type(1), \n                    &::nth-of-type(4) \n                    {\n                        border-radius: .3em;\n                    }\n\n                    &:hover,\n                    &.active\n                    {\n                        background-color: hsla(0, 0%, 0%, .2);\n                    }\n                }\n            }\n\n            &:focus\n            {\n                > svg\n                {\n                    transform: rotate(45deg);\n                    transition: transform .3s linear;\n                }\n\n                > .playback-rate__options\n                {\n                    display: block;\n\n                }\n            } \n        }\n    }\n']))),k=function(n,e){var t=n.togglePlay,a=n.isPlaying,r=n.muted,o=n.volume,c=n.toggleMute,i=n.setVolume,l=n.duration,b=n.played,u=n.onChange,d=n.onMouseDown,p=n.onMouseUp,k=n.displayTime,v=n.title,h=n.onMouseOver,w=n.rewindPlayer,C=n.forwardPlayer,_=n.toggleFullScreen,x=n.changeRate,N=n.playbackRate;return Object(m.b)(s.Fragment,null,Object(m.b)("div",{css:y,ref:e,className:"player-controls",onMouseOver:h},Object(m.b)("div",{className:"player-controls__top"},Object(m.b)("h2",{className:"heading"},v)),Object(m.b)("div",{className:"player-controls__middle"},Object(m.b)("button",{className:"rewind",onClick:w},Object(m.b)(f.d,null)),Object(m.b)("button",{className:"toggle-play",onClick:t},a?Object(m.b)(f.b,null):Object(m.b)(f.c,null)),Object(m.b)("button",{className:"forward",onClick:C},Object(m.b)(f.a,null))),Object(m.b)("div",{className:"player-controls__bottom"},Object(m.b)("button",{className:"rewind",onClick:w},Object(m.b)(f.d,null)),Object(m.b)("button",{className:"toggle-play",onClick:t},a?Object(m.b)(f.b,null):Object(m.b)(f.c,null)),Object(m.b)("button",{className:"forward",onClick:C},Object(m.b)(f.a,null)),Object(m.b)("button",{className:"toggle-mute",onClick:c},r?Object(m.b)(g.c,null):o>.5?Object(m.b)(g.b,null):Object(m.b)(g.a,null)),Object(m.b)("input",{className:"volume-range",id:"volume-range",type:"range",min:0,max:100,value:100*o,onChange:i}),Object(m.b)("div",{className:"seekbar"},Object(m.b)("input",{className:"seekbar__range",type:"range",min:0,max:l,value:b,onChange:u,onMouseDown:d,onMouseUp:p}),Object(m.b)("span",{className:"seekbar__display-time"},k)),Object(m.b)("button",{className:"playback-rate active"},Object(m.b)(O.a,null),Object(m.b)("div",{className:"playback-rate__options"},[2,1.5,1,.5].map((function(n,e){return Object(m.b)("div",{key:e,className:"".concat(n===N?"active":""),onClick:x.bind(null,n)},n.toFixed(1))})))),Object(m.b)("button",{className:"fullscreen",onClick:_},Object(m.b)(j.a,null)))))},v=Object(s.forwardRef)(k),h=Object(m.a)(r||(r=Object(l.a)(["\n    width: 175px;\n    padding: .37em;\n    cursor: pointer;\n    position: relative;\n\n    > img\n    {\n        width: 100%;\n    }\n\n    > span\n    {\n        position: absolute;\n        bottom: 1em;\n        left: calc(50% - 20px);\n        color: white;\n        text-shadow: .1em .1em .2em gray;\n    }\n"]))),w=function(n){var e=n.display,t=n.seekTo,a=n.img;return Object(m.b)("div",{css:h,className:"bookmark",onClick:t},Object(m.b)("img",{src:a,alt:""}),Object(m.b)("span",null,e))},C=Object(m.a)(o||(o=Object(l.a)(["\n    position: relative;\n"]))),_=0;e.a=function(n){var e=n.title,t=n.url,a=Object(s.useState)({playing:!1,volume:.5,muted:!1,played:0,seeking:!1,bookmarks:[],rate:1}),r=Object(i.a)(a,2),o=r[0],l=r[1],b=Object(s.useRef)(null),d=Object(s.useRef)(null),f=Object(s.useRef)(null),g=Object(s.useRef)(null);Object(s.useEffect)((function(){}),[]);var j=Object(s.useCallback)((function(){l((function(n){return Object(c.a)(Object(c.a)({},n),{},{playing:!n.playing})}))}),[]),O=Object(s.useCallback)((function(){l((function(n){return Object(c.a)(Object(c.a)({},n),{},{muted:!n.muted})}))}),[]),y=Object(s.useCallback)((function(n){var e=n.target.value;l((function(n){return Object(c.a)(Object(c.a)({},n),{},{volume:+e/100,muted:0===+e})}))}),[]),k=Object(s.useCallback)((function(n){if(g.current){var e=g.current.querySelector(".seekbar__range");e&&e.style.setProperty("--before-width","".concat(100*n.played,"%"))}_>3&&g.current&&(g.current.style.opacity="0",_=0),g.current&&"1"===g.current.style.opacity&&(_+=1),o.seeking||l((function(e){return Object(c.a)(Object(c.a)({},e),{},{played:n.playedSeconds})}))}),[o.seeking]),h=Object(s.useCallback)((function(){l((function(n){return Object(c.a)(Object(c.a)({},n),{},{seeking:!0})}))}),[]),x=Object(s.useCallback)((function(n){var e=n.target;e.style.setProperty("--before-width","".concat(+e.value/+e.max*100,"%")),l((function(n){return Object(c.a)(Object(c.a)({},n),{},{played:+e.value})}))}),[]),N=Object(s.useCallback)((function(n){var e=n.currentTarget;b.current&&(l((function(n){return Object(c.a)(Object(c.a)({},n),{},{seeking:!1})})),b.current.seekTo(+e.value))}),[]),z=Object(s.useCallback)((function(n){if(isNaN(n))return"00:00";var e=new Date(1e3*n),t=e.getUTCHours(),a=e.getUTCMinutes().toString().padStart(2,"0"),r=e.getUTCSeconds().toString().padStart(2,"0");return t?"".concat(t,":").concat(a,":").concat(r):"".concat(a,":").concat(r)}),[]),T=Object(s.useCallback)((function(){g.current&&(g.current.style.opacity="1",_=0)}),[]),M=Object(s.useCallback)((function(){b.current&&b.current.seekTo(b.current.getCurrentTime()-10)}),[]),P=Object(s.useCallback)((function(){b.current&&b.current.seekTo(b.current.getCurrentTime()+10)}),[]),R=Object(s.useCallback)((function(){p.a.isEnabled&&d.current&&p.a.toggle(d.current)}),[]),S=Object(s.useCallback)((function(n){l((function(e){return Object(c.a)(Object(c.a)({},e),{},{rate:n})}))}),[]),U=b.current?b.current.getDuration():0,D=b.current?b.current.getCurrentTime():0,F=z(U),E=z(D);return Object(m.b)("div",{className:"player wow animate__animated animate__backInUp",ref:d,css:C},Object(m.b)(u.a,{url:t,ref:b,width:"100%",playbackRate:o.rate,height:"100%",playing:o.playing,volume:o.volume,muted:o.muted,onProgress:k,config:{file:{attributes:{crossOrigin:"anonymous"}}}}),Object(m.b)(v,{ref:g,togglePlay:j,isPlaying:o.playing,muted:o.muted,volume:o.volume,toggleMute:O,setVolume:y,duration:U,played:o.played,onChange:x,onMouseDown:h,onMouseUp:N,displayTime:"".concat(E,"/").concat(F),title:e,onMouseOver:T,rewindPlayer:M,forwardPlayer:P,toggleFullScreen:R,changeRate:S,playbackRate:o.rate}),Object(m.b)("div",{style:{display:"flex",position:"absolute",overflow:"hidden",width:"100%"}},o.bookmarks.map((function(n,e){return Object(m.b)(w,{key:e,img:n.img,display:n.display,seekTo:function(){return b.current?b.current.seekTo(n.currentTime):null}})}))),Object(m.b)("canvas",{ref:f,style:{position:"absolute",backgroundColor:"transparent"}}))}}}]);
//# sourceMappingURL=18.85cebb48.chunk.js.map