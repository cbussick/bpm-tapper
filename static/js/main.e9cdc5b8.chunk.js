(this["webpackJsonpbpm-tapper"]=this["webpackJsonpbpm-tapper"]||[]).push([[0],{160:function(e,t,n){"use strict";n.r(t);var a,i=n(192),o=n(197),r=n(0),c=n.n(r),l=n(44),s=n.n(l),b=n(4),d=n(140),j=n(189),u=n(191),h=n(178),p=n(23),f=n(196),O=n(198),m=n(177),g=n(179),x=n(193),w=n(181),S=n(182),C=n(136),v=n(202),y=n(139),k=function(e){var t=Math.floor(e),n=Math.round(1e4*e),a=t.toString().length,i=n.toString().slice(a);return"".concat(t,".").concat(i||"0000")},M="linear(to-r, teal.300, blue.400)",z=n.p+"static/media/tap-sound.2fc7e0f6.wav",B=n(88),T=Object(p.a)(Object(p.a)({},B.theme),{},{config:Object(p.a)(Object(p.a)({},B.theme.config),{},{initialColorMode:"dark"})}),A=n(194),F=[],P=function(e){var t=Object(r.useRef)(null),n=Object(r.useState)(0),i=Object(b.a)(n,2),o=i[0],c=i[1],l=Object(r.useState)(!1),s=Object(b.a)(l,2),d=s[0],j=s[1],u=Object(A.a)(),h=Object(r.useCallback)((function(){d||j(!0),function(){var e=(new Date).getTime(),t=e-a;if(a){F.push(t);var n=0;F.forEach((function(e){n+=e})),n/=F.length,c(1e3/n*60)}a=e}(),e.playAudio&&function(){var e;t.current&&((null===(e=t.current)||void 0===e?void 0:e.paused)?t.current.play().catch((function(){})):t.current.currentTime=0)}();var n=e.rawBpmFontSize.substring(0,e.rawBpmFontSize.indexOf("rem")),i=+n+.05*parseInt(n,10),o="".concat(i,"rem");e.animationControls.start({fontSize:[e.rawBpmFontSize,o,e.rawBpmFontSize],transition:{duration:.3}}).catch((function(){}))}),[d,e.animationControls,e.playAudio,e.rawBpmFontSize]);return Object(r.useEffect)((function(){return window.addEventListener("keydown",h),function(){window.removeEventListener("keydown",h)}}),[h]),{isCalculating:d,copyBpmToClipboard:function(){var t=Math.floor(o),n=Math.round(1e4*o),a=t.toString().length,i=n.toString().slice(a),r="".concat(t,".").concat(i),c=e.showMilliseconds?r:Math.round(o).toString();navigator.clipboard.writeText(c).then((function(){u({title:"BPM Copied!",description:"The BPM were copied to your clipboard.",status:"info",duration:9e3,isClosable:!0})})).catch((function(){u({title:"Something went wrong.",description:"The BPM could not be copied to your clipboard.",status:"error",duration:9e3,isClosable:!0})}))},bpm:o,resetBpm:function(){a=0,F=[],j(!1),c(0)},audioTapRef:t,keyDownHandler:h}},E=n(6);var W=function(e){var t=Object(f.a)({base:!0,md:!1}),n=Object(v.a)(),a=Object(f.a)({base:"7xl",md:"8xl",lg:"9xl"}),i=T.fontSizes[a],o=Object(p.a)({animationControls:n,rawBpmFontSize:i},e),r=P(o),c=r.isCalculating,l=r.copyBpmToClipboard,s=r.bpm,b=r.resetBpm,d=r.audioTapRef,j=r.keyDownHandler;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(O.c,{spacing:3,onTouchStart:function(){j()},children:[Object(E.jsxs)(m.a,{in:!c,children:[Object(E.jsx)(h.a,{fontSize:{base:"md",md:"xl",lg:"2xl"},mb:3,children:"Tap any key to start \u2328\ufe0f"}),Object(E.jsxs)(h.a,{fontSize:{base:"xs",md:"sm",lg:"md"},children:["\ud83d\udca1 For example the ",Object(E.jsx)(g.a,{children:"Spacebar"})]})]}),Object(E.jsx)(x.a,{hasArrow:!0,label:"Click to copy",placement:"right",children:Object(E.jsxs)(w.a,{onClick:t?void 0:l,cursor:"copy",children:[Object(E.jsx)(w.c,{fontSize:a,bgGradient:M,bgClip:"text",children:Object(E.jsx)(y.a.span,{animate:n,children:e.showMilliseconds?k(s):Math.round(s)})}),Object(E.jsx)(w.b,{fontSize:{base:"lg",md:"xl",lg:"2xl"},children:"BPM"})]})}),Object(E.jsx)(S.a,{initialScale:.9,in:c,children:Object(E.jsx)(C.a,{colorScheme:"blue",variant:"outline",onMouseDown:function(e){return e.preventDefault()},onClick:c?b:void 0,cursor:c?void 0:"default",display:c?void 0:"none",children:"Reset"})})]}),Object(E.jsx)("audio",{ref:d,src:z})]})},D=n(183),G=n(184),I=function(){return Object(E.jsx)(D.a,{as:"footer",justify:"center",py:3,alignSelf:"flex-end",children:Object(E.jsx)(G.a,{href:"https://www.cbussick.dev/",target:"_blank",rel:"noopener noreferrer",bgGradient:M,bgClip:"text",fontWeight:"semibold",fontSize:{base:"md",md:"lg",lg:"xl"},children:"Made by Christopher Bussick"})})},R=n(186),H=n(195),V=n(185),_=n(188),J=n(190),L=n(201),q=n(38),K=n(203),N=n(55),Q=n(137),U=["isSmallViewport"],X=function(e){var t=Object(d.c)().toggleColorMode,n="Switch to ".concat(Object(d.d)("dark","light")," mode"),a=Object(d.d)(N.b,N.c),i=e.isSmallViewport,o=Object(Q.a)(e,U);return Object(E.jsx)(x.a,{hasArrow:!0,label:n,children:Object(E.jsx)(V.a,Object(p.a)({size:"md",fontSize:{base:"sm",md:"md",lg:"lg"},variant:i?"outline":"ghost",color:"current",onClick:t,icon:Object(E.jsx)(a,{}),"aria-label":n},o))})},Y="Repo on GitHub",Z=function(e){var t=Object(r.useState)(!1),n=Object(b.a)(t,2),a=n[0],i=n[1],o=e.playAudio?N.e:N.d,c="Turn volume ".concat(e.playAudio?"off":"on"),l=Object(f.a)({base:"md",lg:"lg"}),s=Object(f.a)({base:"md",lg:"lg"}),d=Object(f.a)({base:"lg"}),u=Object(f.a)({base:!0,md:!1}),h=Object(E.jsx)(R.a,{size:s,bgGradient:M,bgClip:"text",justifySelf:"center",whiteSpace:"nowrap",children:"BPM tapper"}),p=Object(E.jsx)(H.a,{isChecked:e.showMilliseconds,onChange:function(){return e.setShowMilliseconds((function(e){return!e}))},size:l,whiteSpace:"nowrap",children:"Show milliseconds"}),m=Object(E.jsx)(x.a,{hasArrow:!0,label:c,children:Object(E.jsx)(V.a,{variant:u?"outline":"ghost","aria-label":c,icon:Object(E.jsx)(o,{}),onClick:function(){return e.setPlayAudio((function(e){return!e}))},fontSize:d,ml:u?void 0:4})}),g=Object(E.jsx)(x.a,{hasArrow:!0,label:Y,children:u?Object(E.jsx)(C.a,{leftIcon:Object(E.jsx)(N.a,{}),colorScheme:"blue",variant:"link",fontWeight:"normal",as:G.a,href:"https://github.com/ChristopherBussick/bpm-tapper",target:"_blank",rel:"noopener noreferrer",children:Y}):Object(E.jsx)(V.a,{variant:"ghost","aria-label":Y,icon:Object(E.jsx)(N.a,{}),fontSize:d,as:G.a,href:"https://github.com/ChristopherBussick/bpm-tapper",target:"_blank",rel:"noopener noreferrer"})}),w=Object(E.jsx)(_.a,{order:-1,sx:{".hamburger-react":{WebkitTapHighlightColor:"transparent"}},children:Object(E.jsx)(K.a,{toggled:a,toggle:i,label:a?"Close menu":"Show menu",size:u?24:32,rounded:!0})});return Object(E.jsxs)(j.a,{as:"header",templateColumns:"repeat(3, 1fr)",gap:6,py:2,alignSelf:"flex-start",alignItems:"center",children:[!u&&Object(E.jsx)(J.a,{}),h,u?w:Object(E.jsxs)(D.a,{justifySelf:"flex-end",children:[p,m,g,Object(E.jsx)(X,{isSmallViewport:u})]}),Object(E.jsxs)(L.a,{isOpen:a,placement:"left",onClose:function(){return i(!1)},children:[Object(E.jsx)(q.g,{}),Object(E.jsxs)(L.b,{children:[Object(E.jsx)(q.c,{}),Object(E.jsx)(q.f,{borderBottomWidth:"1px",children:h}),Object(E.jsx)(q.b,{mt:2,children:Object(E.jsxs)(O.b,{spacing:4,alignItems:"flex-start",children:[p,Object(E.jsxs)(O.a,{children:[m,Object(E.jsx)(X,{isSmallViewport:u})]}),g]})}),Object(E.jsx)(q.e,{justifyContent:"flex-start",children:Object(E.jsx)(G.a,{href:"https://www.cbussick.dev/",target:"_blank",rel:"noopener noreferrer",bgGradient:M,bgClip:"text",fontWeight:"semibold",fontSize:{base:"md",md:"lg",lg:"xl"},children:"Made by Christopher Bussick"})})]})]})]})},$=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(!0),o=Object(b.a)(i,2),c=o[0],l=o[1],s=Object(d.c)().setColorMode;return Object(r.useEffect)((function(){"dark"===T.config.initialColorMode&&s("dark")}),[s]),Object(E.jsxs)(j.a,{templateColumns:"repeat(1fr, 3)",gap:6,textAlign:"center",height:"100vh",children:[Object(E.jsx)(Z,{showMilliseconds:n,setShowMilliseconds:a,playAudio:c,setPlayAudio:l}),Object(E.jsxs)(u.a,{maxW:"8xl",children:[Object(E.jsx)(h.a,{fontSize:{base:"lg",md:"3xl",lg:"4xl"},mb:9,children:"Tap along to any song to figure out its tempo! \ud83c\udfb5"}),Object(E.jsx)(W,{playAudio:c,showMilliseconds:n})]}),Object(E.jsx)(I,{})]})};s.a.render(Object(E.jsxs)(c.a.StrictMode,{children:[Object(E.jsx)(i.a,{initialColorMode:T.config.initialColorMode}),Object(E.jsx)(o.a,{theme:T,children:Object(E.jsx)($,{})})]}),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.e9cdc5b8.chunk.js.map