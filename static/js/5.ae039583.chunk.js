(this.webpackJsonpmdash=this.webpackJsonpmdash||[]).push([[5],{214:function(e,t,a){"use strict";var n=a(29),o=a(30);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(a(0)),r=(0,n(a(31)).default)(i.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}),"MailOutline");t.default=r},367:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a(19),i=a(0),r=a.n(i),s=a(36),c=a(126),d=a(1),l=a(81),h=a(80),u=a(62),p=a(82);var f=a(38),b=a(3),m=(a(59),a(4),a(5)),j=a(195),g=a(6),x=a(27),y=a(24),v=a(15),O=a(9),w=i.forwardRef((function(e,t){var a=e.children,n=e.classes,o=e.className,r=e.collapsedHeight,s=void 0===r?"0px":r,c=e.component,l=void 0===c?"div":c,h=e.disableStrictModeCompat,u=void 0!==h&&h,p=e.in,g=e.onEnter,w=e.onEntered,k=e.onEntering,I=e.onExit,E=e.onExited,C=e.onExiting,R=e.style,N=e.timeout,T=void 0===N?x.b.standard:N,H=e.TransitionComponent,S=void 0===H?j.a:H,U=Object(b.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),D=Object(v.a)(),A=i.useRef(),B=i.useRef(null),M=i.useRef(),W="number"===typeof s?"".concat(s,"px"):s;i.useEffect((function(){return function(){clearTimeout(A.current)}}),[]);var J=D.unstable_strictMode&&!u,$=i.useRef(null),Q=Object(O.a)(t,J?$:void 0),P=function(e){return function(t,a){if(e){var n=J?[$.current,t]:[t,a],o=Object(f.a)(n,2),i=o[0],r=o[1];void 0===r?e(i):e(i,r)}}},z=P((function(e,t){e.style.height=W,g&&g(e,t)})),F=P((function(e,t){var a=B.current?B.current.clientHeight:0,n=Object(y.a)({style:R,timeout:T},{mode:"enter"}).duration;if("auto"===T){var o=D.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(o,"ms"),M.current=o}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),k&&k(e,t)})),L=P((function(e,t){e.style.height="auto",w&&w(e,t)})),q=P((function(e){var t=B.current?B.current.clientHeight:0;e.style.height="".concat(t,"px"),I&&I(e)})),V=P(E),K=P((function(e){var t=B.current?B.current.clientHeight:0,a=Object(y.a)({style:R,timeout:T},{mode:"exit"}).duration;if("auto"===T){var n=D.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),M.current=n}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height=W,C&&C(e)}));return i.createElement(S,Object(d.a)({in:p,onEnter:z,onEntered:L,onEntering:F,onExit:q,onExited:V,onExiting:K,addEndListener:function(e,t){var a=J?e:t;"auto"===T&&(A.current=setTimeout(a,M.current||0))},nodeRef:J?$:void 0,timeout:"auto"===T?null:T},U),(function(e,t){return i.createElement(l,Object(d.a)({className:Object(m.a)(n.container,o,{entered:n.entered,exited:!p&&"0px"===W&&n.hidden}[e]),style:Object(d.a)({minHeight:W},R),ref:Q},t),i.createElement("div",{className:n.wrapper,ref:B},i.createElement("div",{className:n.wrapperInner},a)))}))}));w.muiSupportAuto=!0;var k=Object(g.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(w),I=a(50);var E=i.createContext({}),C=a(61),R=i.forwardRef((function(e,t){var a,n=e.children,o=e.classes,r=e.className,s=e.defaultExpanded,c=void 0!==s&&s,j=e.disabled,g=void 0!==j&&j,x=e.expanded,y=e.onChange,v=e.square,O=void 0!==v&&v,w=e.TransitionComponent,R=void 0===w?k:w,N=e.TransitionProps,T=Object(b.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),H=Object(C.a)({controlled:x,default:c,name:"Accordion",state:"expanded"}),S=Object(f.a)(H,2),U=S[0],D=S[1],A=i.useCallback((function(e){D(!U),y&&y(e,!U)}),[U,y,D]),B=i.Children.toArray(n),M=(a=B,Object(l.a)(a)||Object(h.a)(a)||Object(u.a)(a)||Object(p.a)()),W=M[0],J=M.slice(1),$=i.useMemo((function(){return{expanded:U,disabled:g,toggle:A}}),[U,g,A]);return i.createElement(I.a,Object(d.a)({className:Object(m.a)(o.root,r,U&&o.expanded,g&&o.disabled,!O&&o.rounded),ref:t,square:O},T),i.createElement(E.Provider,{value:$},W),i.createElement(R,Object(d.a)({in:U,timeout:"auto"},N),i.createElement("div",{"aria-labelledby":W.props.id,id:W.props["aria-controls"],role:"region"},J)))})),N=Object(g.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(R),T=a(67),H=a(185),S=i.forwardRef((function(e,t){var a=e.children,n=e.classes,o=e.className,r=e.expandIcon,s=e.IconButtonProps,c=e.onBlur,l=e.onClick,h=e.onFocusVisible,u=Object(b.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),p=i.useState(!1),f=p[0],j=p[1],g=i.useContext(E),x=g.disabled,y=void 0!==x&&x,v=g.expanded,O=g.toggle;return i.createElement(T.a,Object(d.a)({focusRipple:!1,disableRipple:!0,disabled:y,component:"div","aria-expanded":v,className:Object(m.a)(n.root,o,y&&n.disabled,v&&n.expanded,f&&n.focused),onFocusVisible:function(e){j(!0),h&&h(e)},onBlur:function(e){j(!1),c&&c(e)},onClick:function(e){O&&O(e),l&&l(e)},ref:t},u),i.createElement("div",{className:Object(m.a)(n.content,v&&n.expanded)},a),r&&i.createElement(H.a,Object(d.a)({className:Object(m.a)(n.expandIcon,v&&n.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},s),r))})),U=Object(g.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(S),D=i.forwardRef((function(e,t){var a=e.classes,n=e.className,o=Object(b.a)(e,["classes","className"]);return i.createElement("div",Object(d.a)({className:Object(m.a)(a.root,n),ref:t},o))})),A=Object(g.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(D),B=a(72),M=a.n(B),W=a(45),J=a(214),$=a.n(J),Q=a(75),P=Object(c.a)((function(e){return{hl1:{fontSize:e.typography.pxToRem(15),flexBasis:"95%",flexShrink:0},hl2:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,flexGrow:2,textAlign:"right"},root:{justifyContent:"flex-end"},width:"100%"}}));t.default=function(){var e=P(),t=r.a.useState(!1),a=Object(o.a)(t,2),i=a[0],c=a[1],d=function(e){return function(t,a){c(!!a&&e)}};return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsxs)(Q.a,{children:[Object(n.jsx)("title",{children:"FAQ"}),Object(n.jsx)("meta",{name:"description",content:"Common queries about this website and the data"})]}),Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsxs)(N,{expanded:1===i,onChange:d(1),children:[Object(n.jsx)(U,{className:e.root,expandIcon:Object(n.jsx)(M.a,{}),"aria-controls":"p1bh-content",id:"p1bh-header",children:Object(n.jsx)(s.a,{className:e.hl1,children:"Q Why this website? "})}),Object(n.jsx)(A,{children:"Unless you are an accountant, you might not particularly like looking at a page of figures. Despite this fact, the onset of the pandemic has forced many of us to resort to looking at figures of tests, new cases, active cases, recoveries, positivity rates, death rates and the like. Never before has so many of the general public resorted to data visualisations and statistical breakdowns. We don't even need to talk about those logarithmic charts - nearly half of the people who see them reportedly can't make heads nor tails of them! Confronted with such a wide variety of data visualisations and statistical analysis has, even for the most numerate amongst us, resulted in a wave of confusion, misinformation, leaving many of us more frustrated and disempowered than before. The aim of this website is to clear away some of that confusion and instead provide simple comparative analysis of two geographic locations of your choosing. Perhaps you need to travel to another place for work and need to check the situation there first, or more likely you want to see how things are with some friends and family scattered around the globe. In both cases this website is for you."})]}),Object(n.jsxs)(N,{expanded:2===i,onChange:d(2),children:[Object(n.jsx)(U,{expandIcon:Object(n.jsx)(M.a,{}),"aria-controls":"p2bh-content",id:"p2bh-header",children:Object(n.jsx)(s.a,{className:e.hl1,children:"Q Who are you?"})}),Object(n.jsx)(A,{children:Object(n.jsx)(s.a,{children:"I am a concerned individual who like many others have been trying to cope with the impact that coronavirus has had on us all. Having a background in computer science with many years experience building information systems that turn raw data into useful information, this is a project to showcase how to cut through confusion with simple but clear analysis."})})]}),Object(n.jsxs)(N,{expanded:3===i,onChange:d(3),children:[Object(n.jsx)(U,{expandIcon:Object(n.jsx)(M.a,{}),"aria-controls":"p3bh-content",id:"p3bh-header",children:Object(n.jsx)(s.a,{className:e.hl1,children:"Q Where do the numbers come from?"})}),Object(n.jsx)(A,{children:Object(n.jsx)(s.a,{children:"The data is updated daily from freely available feeds from a number of reputable data sources. Daily data feeds from Johns Hopkins University in the United States, the Our World in Data project at Oxford University and figures for the Island of Jersey from the Government of Jersey Open Data Repository. I have written algorithms that automatically combine this data and transform it in a way that allows the simple presentation of information you can see displayed. Click the Data Source menu item for more details of the sources."})})]}),Object(n.jsxs)(N,{expanded:4===i,onChange:d(4),children:[Object(n.jsx)(U,{expandIcon:Object(n.jsx)(M.a,{}),"aria-controls":"p4bh-content",id:"p4bh-header",children:Object(n.jsx)(s.a,{className:e.hl1,children:"Q Why totals by population and not actual numbers?"})}),Object(n.jsx)(A,{children:Object(n.jsxs)(W.a,{container:!0,direction:"column",children:[Object(n.jsx)(s.a,{children:"When you are comparing the pandemic situation in two different locations, if you focus on the actual case numbers it can be misleading. Whilst every case is pertinent and tragic at a personal level, when you are performing comparative analysis it is more beneficial to focus on the prevalence of the problem to come to a clear picture of the difference between locations.  The prevalence is reflected by the number of incidents by the population as a whole."}),Object(n.jsx)(s.a,{children:"For instance 100,000 cases in India compared to 100,000 cases in the United Kingdom is vastly different in terms of the population affected. India has a population of 1,380,004,385 compared to the UK's population of 67,886,004. In India the figure of 100,000 cases would only represent approximately 0.007% of the population or about 72 cases per million people. In contrast, 100,000 cases in the UK would represent 1.47% of the population or 14730 cases per million people. In this example despite each country having equal case loads the situation in the UK would in fact be over 200 times worse in terms of the population affected."}),Object(n.jsx)(s.a,{children:"It is for these reasons that we have shown the figures on this site as cases per million people. This allows us to compare locations with widely divergent populations. Comparing locations by actual figures are fair only if the locations have comparable populations."}),Object(n.jsx)(s.a,{children:"If you wish to see actual case figures you can find them easily on the John Hopkins University Site for US and global figures, or at Covid19india.org for detailed Indian figures. In contrast the Our World in Data website defaults to a view showing figures by population but you can also  opt to see actual figures there."})]})})]}),Object(n.jsxs)(N,{expanded:5===i,onChange:d(5),children:[Object(n.jsx)(U,{expandIcon:Object(n.jsx)(M.a,{}),"aria-controls":"p4bh-content",id:"p4bh-header",children:Object(n.jsx)(s.a,{className:e.hl1,children:"Q Are the figures accurate?"})}),Object(n.jsx)(A,{children:Object(n.jsx)(s.a,{children:"The data I am using is the same data that informs governments and media houses across the globe. The collection of this data is the result of a monumental effort involving the co-operation of hundreds of people all over the globe. If you look closely you will surely find some inconsistencies in the figures. Use these numbers with discretion, they are meant only as a guide. Millions of people have had coronavirus and have not been tested at all. Testing varies widely across the world. I have chosen to use a minimal set of statistics that are most reliable. Some figures like case recoveries and active cases are omitted as their definitions are neither consistent nor accurate."})})]}),Object(n.jsxs)(N,{expanded:6===i,onChange:d(6),children:[Object(n.jsx)(U,{expandIcon:Object(n.jsx)(M.a,{}),"aria-controls":"p4bh-content",id:"p4bh-header",children:Object(n.jsx)(s.a,{className:e.hl1,children:"Q What locations are available?"})}),Object(n.jsx)(A,{children:Object(n.jsxs)(W.a,{container:!0,direction:"column",children:[Object(n.jsx)(s.a,{children:"1. United States - all states and counties - data sourced from John Hopkins University"}),Object(n.jsx)(s.a,{children:"2. Jersey - Island level aggregated data - sourced from opendata.gov.je"}),Object(n.jsx)(s.a,{children:"3. All other countries - country level plus regional breakdown if available -  data sourced from John Hopkins University"})]})})]}),Object(n.jsxs)(N,{expanded:7===i,onChange:d(7),children:[Object(n.jsx)(U,{expandIcon:Object(n.jsx)(M.a,{}),"aria-controls":"p4bh-content",id:"p4bh-header",children:Object(n.jsx)(s.a,{className:e.hl1,children:"Q Can I help?"})}),Object(n.jsx)(A,{children:Object(n.jsxs)(s.a,{children:["I have initially chosen to provide this website freely, without pushing advertising. The site advocates user privacy, and other than counting anonymous page visits we do not collect or manipulate any of your data in any way. You can connect with me by email with any feedback.",Object(n.jsx)("a",{href:"mailto:hello@datamudra.com",className:e.hl1,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)($.a,{fontSize:"small"})})]})})]})]})]})}}}]);
//# sourceMappingURL=5.ae039583.chunk.js.map