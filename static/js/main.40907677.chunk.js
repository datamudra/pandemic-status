(this.webpackJsonpmdash=this.webpackJsonpmdash||[]).push([[0],{158:function(e,t,a){},271:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),s=a.n(i),c=a(11),r=a.n(c),o=(a(158),a(15)),l=a(58),d=a(21),j=a(57),b=a(340),h=a(64),x=a(325),m=a(338),u=a(321),O=a(346),p=a(319),f=a(13),g=a(337),v=a(331),y=a(344),w=a(343),C=a(273),k=a(328),I=a(327),N=a(335),S=a(336),D=a(139),T=a.n(D),A=a(135),U=a.n(A),E=a(137),L=a.n(E),z=a(136),P=a.n(z),R=a(138),W=a.n(R),B=a(43),_=a(339),H=a(329),K=a(330),M=a(347),q=a(332),F=a(29),V=a.n(F),Q=a(134),Y=a.n(Q),J=a(133),G=a.n(J),Z=a(132),X=a.n(Z),$=a(143),ee=a(127),te={legend:{position:"right",display:!1},title:{display:!1},scales:{yAxes:[{type:"linear",display:!0,position:"left",id:"yx1",ticks:{beginAtZero:!0,autoSkip:!0,maxTicksLimit:4}},{type:"linear",display:!1,position:"right",id:"yx2",gridLines:{drawOnArea:!1},ticks:{beginAtZero:!0,autoSkip:!0,maxTicksLimit:4}}],xAxes:[{type:"time",ticks:{autoSkip:!0,maxTicksLimit:4}}]}},ae=function(e){var t=e.labs,a=e.datal,i=e.datar,s={labels:t,datasets:[{label:e.locl,data:a,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)",yAxisID:"yx1"},{label:e.locr,data:i,fill:!1,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgba(54, 162, 235, 0.2)",yAxisID:"yx1"}]};return Object(n.jsx)(ee.a,{data:s,options:te})},ne=Object(p.a)((function(){return{paper:{textAlign:"center"},details:{backgroundColor:"#6c757d10"}}})),ie=function(e){var t=e.l,a=e.r,i=e.m,s=ne();return Object(n.jsxs)(u.a,{container:!0,direction:"row",spacing:1,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{align:"center",children:"Numbers are totals per million population"})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsxs)($.a,{className:s.paper,elevation:3,children:[Object(n.jsx)(h.a,{component:"p",align:"center",children:"Confirmed Cases"}),Object(n.jsx)(ae,{labs:i.dts,datal:t.tmn,datar:a.tmn,locl:t.loc,locr:a.loc,tit:"Covid 19 New Cases"})]})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsxs)($.a,{className:s.paper,elevation:3,children:[Object(n.jsx)(h.a,{component:"p",align:"center",children:"Deaths"}),Object(n.jsx)(ae,{labs:i.dts,datal:t.tmd,datar:a.tmd,locl:t.loc,locr:a.loc,tit:"Covid 19 Deaths"})]})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsxs)($.a,{className:s.paper,elevation:3,children:[Object(n.jsx)(h.a,{component:"p",align:"center",children:"Vaccinations (Country Level)"}),Object(n.jsx)(ae,{labs:i.dts,datal:t.tmv,datar:a.tmv,locl:t.l1,locr:a.l1,tit:"Covid 19 Tests"})]})})]})},se=a(323),ce=a(324),re=new Intl.NumberFormat("en-US",{maximumFractionDigits:1,minimumFractionDigits:0}),oe=Object(p.a)((function(e){return{root:{padding:0,"&:last-child":{paddingBottom:0}},lrow:{textAlign:"center",backgroundColor:"#fbe5e7",color:"#ff6384",fontSize:18},mrow:{textAlign:"center"},rrow:{textAlign:"center",backgroundColor:"#f4f6ff",color:"#36a2eb",fontSize:18},title:{fontSize:25,textAlign:"center"},rdc:{color:"#36a2eb",fontSize:11,fontWeight:"bold"},ldc:{color:"#ff6384",fontSize:11,fontWeight:"bold"},arrow:{fontSize:10}}})),le=function(e){var t=e.d,a=e.dc,i=oe();return Object(n.jsx)(b.a,{component:"span",className:i[a],children:Object(n.jsx)(b.a,{component:"span",className:i.arrow,children:t>0?"\u25b2"+Math.abs(t)+"%":t<0?"\u25bc"+Math.abs(t)+"%":""})})},de=function(e){var t=e.t,a=e.ll,i=e.rl,s=e.rs,c=e.ls,r=e.rd,o=e.ld,l=e.isd,d=e.isp,j=void 0!==d&&d,b=oe();return Object(n.jsx)("div",{children:Object(n.jsx)(se.a,{children:Object(n.jsx)(ce.a,{className:b.root,children:Object(n.jsxs)(u.a,{container:!0,direction:"row",children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)($.a,{className:b.mrow,variant:"outlined",square:!0,children:Object(n.jsx)(h.a,{children:t})})}),Object(n.jsxs)(u.a,{container:!0,className:b.lrow,children:[Object(n.jsx)(u.a,{item:!0,xs:6,children:Object(n.jsx)($.a,{className:b.lrow,variant:"outlined",square:!0,children:Object(n.jsx)(h.a,{children:a})})}),Object(n.jsx)(u.a,{item:!0,xs:6,children:Object(n.jsx)($.a,{className:b.lrow,variant:"outlined",square:!0,children:Object(n.jsxs)(h.a,{children:[c<0?"No data":re.format(c)," ",j&c>0?"%":"","  ",l&c>0?Object(n.jsx)(le,{className:b.ld,d:o,dc:"ldc"}):""]})})})]}),Object(n.jsxs)(u.a,{container:!0,className:b.rrow,children:[Object(n.jsx)(u.a,{item:!0,xs:6,children:Object(n.jsx)($.a,{className:b.rrow,variant:"outlined",square:!0,children:Object(n.jsx)(h.a,{children:i})})}),Object(n.jsx)(u.a,{item:!0,xs:6,children:Object(n.jsx)($.a,{className:b.rrow,variant:"outlined",square:!0,children:Object(n.jsxs)(h.a,{children:[s<0?"No data":re.format(s)," ",j&s>0?"%":""," ",l&s>0?Object(n.jsx)(le,{className:b.rd,d:r,dc:"rdc"}):""]})})})]})]})})})})},je=function(e){var t=e.l,a=e.r;return Object(n.jsxs)(u.a,{container:!0,direction:"row",spacing:1,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{align:"center",children:"Numbers are totals per million population"})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Confirmed Cases",ll:t.loc,rl:a.loc,rs:a.amn,ls:t.amn,isd:!1})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Deaths",ll:t.loc,rl:a.loc,rs:a.amd,ls:t.amd,isd:!1})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Tests",ll:t.tlv,rl:a.tlv,rs:0==a.amt?-1:a.amt,ls:0==t.amt?-1:t.amt,isd:!1})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Vaccinations",ll:t.l1,rl:a.l1,rs:0==a.amv?-1:a.amv,ls:0==t.amv?-1:t.amv,isd:!1})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Deathrate",ll:t.loc,rl:a.loc,rs:a.adr,ls:t.adr,isd:!1,isp:!0})})]})},be=a(130),he=a.n(be),xe=function(e){var t=e.l,a=e.r,i=e.m;return Object(n.jsxs)(u.a,{container:!0,spacing:0,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{align:"center",children:"Numbers are totals per million population"})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsxs)(h.a,{align:"center",gutterBottom:!0,children:["7 day time period (",i.wr,")"]})}),Object(n.jsxs)(u.a,{container:!0,direction:"row",spacing:1,children:[Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Confirmed Cases",ll:t.loc,rl:a.loc,rs:a.wmn,ls:t.wmn,ld:t.wdn,rd:a.wdn,isd:!0})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Deaths",ll:t.loc,rl:a.loc,rs:a.wmd,ls:t.wmd,ld:t.wdd,rd:a.wdd,isd:!0})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Tests",ll:t.tlv,rl:a.tlv,rs:0===a.wmt?-1:a.wmt,ls:0===t.wmt?-1:t.wmt,ld:t.wdt,rd:a.wdt,isd:!0})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Vaccinations",ll:t.l1,rl:a.l1,rs:0===a.wmv?-1:a.wmv,ls:0===t.wmv?-1:t.wmv,ld:t.wdv,rd:a.wdv,isd:!0})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{component:"div",align:"center",children:Object(n.jsx)(O.a,{icon:Object(n.jsx)(he.a,{}),label:i.ut,variant:"outlined"})})})]})]})},me=a(341),ue=a(326),Oe=function(e){var t=e.l,a=e.r;return Object(n.jsxs)(u.a,{container:!0,direction:"row",spacing:1,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{align:"center",children:"Country level demographic data"})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Population Aged Over 65 years",ll:t.l1,rl:a.l1,rs:a.p65,ls:t.p65,isd:!1,isp:!0})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Population Aged Over 70 years",ll:t.l1,rl:a.l1,rs:a.p70,ls:t.p70,isd:!1,isp:!0})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Hospital Beds Per Thousand People",ll:t.l1,rl:a.l1,rs:a.hos,ls:t.hos,isd:!1})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Life Expectancy",ll:t.l1,rl:a.l1,rs:a.exp,ls:t.exp,isd:!1})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Total Population",ll:t.loc,rl:a.loc,rs:a.pop,ls:t.pop,isd:!1})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Population Density",ll:t.l1,rl:a.l1,rs:a.ppd,ls:t.ppd,isd:!1,isb:!0})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(de,{t:"Median Age",ll:t.l1,rl:a.l1,rs:a.med,ls:t.med,isd:!1})})]})};function pe(e){var t=e.children,a=e.value,i=e.index,s=Object(j.a)(e,["children","value","index"]);return Object(n.jsx)("div",Object(d.a)(Object(d.a)({role:"tabpanel",hidden:a!==i,id:"full-width-tabpanel-".concat(i),"aria-labelledby":"full-width-tab-".concat(i)},s),{},{children:a===i&&Object(n.jsx)(b.a,{p:3,children:Object(n.jsxs)(h.a,{component:"div",children:[" ",t]})})}))}function fe(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-tabs-".concat(e)}}var ge=Object(p.a)((function(e){return{tabsu:{borderBottom:"1px solid #9e9e9e"}}})),ve=["thisweek","3weeks","history","people"],ye=function(e){var t=e.left,a=e.right,i=e.meta,c=ge(),r=Object(f.a)(),l=s.a.useState(0),j=Object(o.a)(l,2),b=j[0],h=j[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(x.a,{position:"static",color:"transparent",elevation:0,children:Object(n.jsxs)(me.a,{className:c.tabsu,value:b,onChange:function(e,t){h(t),B.a.pageview(ve[t])},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full tabs",children:[Object(n.jsx)(ue.a,Object(d.a)({label:"This Week"},fe(0))),Object(n.jsx)(ue.a,Object(d.a)({label:"3 Week Trends"},fe(1))),Object(n.jsx)(ue.a,Object(d.a)({label:"Full History"},fe(2))),Object(n.jsx)(ue.a,Object(d.a)({label:"The People"},fe(3)))]})}),Object(n.jsx)(pe,{value:b,index:0,dir:r.direction,children:Object(n.jsx)(xe,{l:t,r:a,m:i})}),Object(n.jsx)(pe,{value:b,index:1,dir:r.direction,children:Object(n.jsx)(ie,{l:t,r:a,m:i})}),Object(n.jsx)(pe,{value:b,index:2,dir:r.direction,children:Object(n.jsx)(je,{l:t,r:a,m:i})}),Object(n.jsx)(pe,{value:b,index:3,dir:r.direction,children:Object(n.jsx)(Oe,{l:t,r:a,m:i})})]})},we=a(131),Ce=a(348),ke=a(140);var Ie=function(e,t,a){for(var n=Object(i.useState)(a),s=Object(o.a)(n,2),c=s[0],r=s[1],l=arguments.length,b=new Array(l>3?l-3:0),h=3;h<l;h++)b[h-3]=arguments[h];var x=ke.a.apply(void 0,[e,t,c].concat(b)),m=x.data,u=x.isValidating,O=x.error,p=Object(j.a)(x,["data","isValidating","error"]);return Object(Ce.a)((function(){r(Object(we.a)(c,(function(e){e.initialData=m})))}),[m]),Object(d.a)(Object(d.a)({},p),{},{isValidating:u,error:O,data:m})},Ne=a(141),Se="https://raw.githubusercontent.com/datamudra/api/master/data",De=Object(p.a)((function(e){return{chipRow:{padding:7},drawRow:{padding:8},closeRow:{padding:4},chipR:{backgroundColor:"#f4f6ff",color:"#36a2eb"},chipL:{backgroundColor:"#fbe5e7",color:"#ff6384"},chipD:{fontSize:18},lItemEven:{backgroundColor:"#f8f8f0"}}})),Te=function(e){var t=e.L_KEY,a=e.R_KEY,i=e.setL_KEY,c=e.setR_KEY,r=De(),l="Choose from list",d=s.a.useState(l),j=Object(o.a)(d,2),b=j[0],x=j[1],m=s.a.useState(!1),p=Object(o.a)(m,2),f=p[0],g=p[1],w=s.a.useState(""),C=Object(o.a)(w,2),k=C[0],N=C[1],S=s.a.useState(!0),D=Object(o.a)(S,2),T=D[0],A=D[1],U=s.a.useState([]),E=Object(o.a)(U,2),L=E[0],z=E[1],P=function(e){return fetch(e).then((function(e){return e.json()}))},R=Ie("".concat(Se,"/").concat(a,".json"),P,{revalidateOnMount:!0,refreshInterval:1e5}).data,W=Ie("".concat(Se,"/").concat(t,".json"),P,{revalidateOnMount:!0,refreshInterval:1e5}).data,F=Ie("".concat(Se,"/mdata.json"),P,{revalidateOnMount:!0,refreshInterval:1e5}).data,Q=Ie("".concat(Se,"/locs.json"),P,{revalidateOnMount:!0,refreshInterval:1e5}).data,J=function(e,t){A(t),$(e,!0),console.log("isleft="+t)},Z=L.filter((function(e){return e.toLowerCase().includes(k.toLowerCase())})),$=function(e,t){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&(console.log("Toggle d1 fulllist len="+L.length+" LOCS="+typeof Q),N(""),0===L.length&&"undefined"!=typeof Q&&(console.log("Toggle d2 setting fullList"),z(Object.keys(Q))),g(t))},ee=function(e){var t=e.index,a=e.style;return t%2?Object(n.jsx)(I.a,{className:r.lItemEven,alignItems:"center",button:!0,divider:!0,onClick:function(e){return x(Z[t])},style:a,children:Object(n.jsxs)(u.a,{container:!0,justify:"center",children:[Object(n.jsx)(u.a,{item:!0,xs:2}),Z[t],Object(n.jsx)(u.a,{item:!0,xs:2})]})},Q[Z[t]]):Object(n.jsx)(I.a,{alignItems:"center",button:!0,divider:!0,onClick:function(e){return x(Z[t])},style:a,children:Object(n.jsxs)(u.a,{container:!0,justify:"center",children:[Object(n.jsx)(u.a,{item:!0,xs:2}),Z[t],Object(n.jsx)(u.a,{item:!0,xs:2})]})},Q[Z[t]])},te=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(Ne.a,{role:"presentation",height:200,itemCount:Z.length,itemSize:40,width:"100%",children:ee})})},ae=Object(n.jsxs)(y.a,{anchor:"bottom",open:f,onClose:function(e){return $(e,!1)},children:[Object(n.jsxs)(u.a,{container:!0,direction:"row",justify:"space-evenly",spacing:2,className:r.drawRow,alignItems:"center",children:[Object(n.jsx)(u.a,{item:!0,xs:8,children:Object(n.jsx)(_.a,{id:"filter",label:"Type to filter list",variant:"outlined",onChange:function(e){N(e.target.value)},size:"small",InputProps:{endAdornment:Object(n.jsx)(H.a,{position:"end",children:Object(n.jsx)(X.a,{})})}})}),Object(n.jsx)(u.a,{item:!0,xs:4,children:Object(n.jsx)(u.a,{container:!0,direction:"row",justify:"flex-end",spacing:1,children:Object(n.jsx)(K.a,{color:"default",onClick:function(e){return t=Q[b],console.log(t),T?i(t):c(t),x(l),$(!1),void B.a.pageview("Search/"+b);var t},startIcon:Object(n.jsx)(G.a,{}),children:"APPLY"})})})]}),Object(n.jsx)(u.a,{container:!0,direction:"row",justify:"center",className:r.drawRow,children:Object(n.jsx)(O.a,{className:r.chipD,size:"medium",color:"primary",label:b})}),Object(n.jsx)(v.a,{}),Object(n.jsx)(te,{}),Object(n.jsx)(v.a,{}),Object(n.jsx)(u.a,{container:!0,direction:"row",justify:"flex-end",className:r.closeRow,children:Object(n.jsx)(K.a,{color:"default",onClick:function(e){return x("Choose from list"),void g(!1)},startIcon:Object(n.jsx)(Y.a,{}),children:"CLOSE"})})]});return W&&R&&F?Object(n.jsxs)("span",{children:[Object(n.jsxs)(u.a,{container:!0,direction:"row",justify:"center",className:r.chipRow,children:[Object(n.jsx)(O.a,{className:r.chipL,avatar:Object(n.jsx)(M.a,{variant:"square",src:"0"===W.iso?"/pandemic-status/flags/0l.png":"/pandemic-status"+"/flags/".concat(W.iso,".png")}),label:W.loc,variant:"outlined",clickable:!0,onClick:function(e){return J(e,!0)},onDelete:function(e){return J(e,!0)},deleteIcon:Object(n.jsx)(V.a,{})}),Object(n.jsx)(u.a,{item:!0,xs:1,children:Object(n.jsx)(h.a,{align:"center",children:"vs"})}),Object(n.jsx)(O.a,{className:r.chipR,avatar:Object(n.jsx)(M.a,{variant:"square",src:"0"===R.iso?"/pandemic-status/flags/0r.png":"/pandemic-status"+"/flags/".concat(R.iso,".png")}),label:R.loc,variant:"outlined",clickable:!0,onClick:function(e){return J(e,!1)},onDelete:function(e){return J(e,!1)},deleteIcon:Object(n.jsx)(V.a,{})})]}),ae,Object(n.jsx)(u.a,{container:!0,direction:"row",children:Object(n.jsxs)(u.a,{item:!0,xs:12,children:[Object(n.jsx)(ye,{left:W,right:R,meta:F}),Object(n.jsx)("br",{})]})})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)(q.a,{})," "]})},Ae=a(345),Ue=a(333),Ee=a(334),Le=a(87),ze=a.n(Le),Pe=Object(p.a)((function(e){return{hl1:{fontSize:e.typography.pxToRem(15),flexBasis:"95%",flexShrink:0},hl2:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,flexGrow:2,textAlign:"right"},root:{justifyContent:"flex-end"},width:"100%"}})),Re=function(){var e=Pe(),t=s.a.useState(!1),a=Object(o.a)(t,2),i=a[0],c=a[1],r=function(e){return function(t,a){c(!!a&&e)}};return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsxs)(Ae.a,{expanded:1===i,onChange:r(1),children:[Object(n.jsx)(Ue.a,{className:e.root,expandIcon:Object(n.jsx)(V.a,{}),"aria-controls":"p1bh-content",id:"p1bh-header",children:Object(n.jsx)(h.a,{className:e.hl1,children:"Q Why this website? "})}),Object(n.jsx)(Ee.a,{children:"Unless you are an accountant, you might not particularly like looking at a page of figures. Despite this fact, the onset of the pandemic has forced many of us to resort to looking at figures of tests, new cases, active cases, recoveries, positivity rates, death rates and the like. Never before has so many of the general public resorted to data visualisations and statistical breakdowns. We don't even need to talk about those logarithmic charts - nearly half of the people who see them reportedly can't make heads nor tails of them! Confronted with such a wide variety of data visualisations and statistical analysis has, even for the most numerate amongst us, resulted in a wave of confusion, misinformation, leaving many of us more frustrated and disempowered than before. The aim of this website is to clear away some of that confusion and instead provide simple comparative analysis of two geographic locations of your choosing. Perhaps you need to travel to another place for work and need to check the situation there first, or more likely you want to see how things are with some friends and family scattered around the globe. In both cases this website is for you."})]}),Object(n.jsxs)(Ae.a,{expanded:2===i,onChange:r(2),children:[Object(n.jsx)(Ue.a,{expandIcon:Object(n.jsx)(V.a,{}),"aria-controls":"p2bh-content",id:"p2bh-header",children:Object(n.jsx)(h.a,{className:e.hl1,children:"Q Who are you?"})}),Object(n.jsx)(Ee.a,{children:Object(n.jsx)(h.a,{children:"I am a concerned individual who like many others have been trying to cope with the impact that coronavirus has had on us all. Having a background in computer science with many years experience building information systems that turn raw data into useful information, this is a project to showcase how to cut through confusion with simple but clear analysis."})})]}),Object(n.jsxs)(Ae.a,{expanded:3===i,onChange:r(3),children:[Object(n.jsx)(Ue.a,{expandIcon:Object(n.jsx)(V.a,{}),"aria-controls":"p3bh-content",id:"p3bh-header",children:Object(n.jsx)(h.a,{className:e.hl1,children:"Q Where do the numbers come from?"})}),Object(n.jsx)(Ee.a,{children:Object(n.jsx)(h.a,{children:"The data is updated daily from freely available feeds from a number of reputable data sources. Daily data feeds from Johns Hopkins University in the United States, the Our World in Data project at Oxford University and the Covid19India.org crowdsourced project in India. I have written algorithms that automatically combine this data and transform it in a way that allows the simple presentation of information you can see displayed. Click the Data Source menu item for more details of the sources."})})]}),Object(n.jsxs)(Ae.a,{expanded:4===i,onChange:r(4),children:[Object(n.jsx)(Ue.a,{expandIcon:Object(n.jsx)(V.a,{}),"aria-controls":"p4bh-content",id:"p4bh-header",children:Object(n.jsx)(h.a,{className:e.hl1,children:"Q Why totals by population and not actual numbers?"})}),Object(n.jsx)(Ee.a,{children:Object(n.jsxs)(u.a,{container:!0,direction:"column",children:[Object(n.jsx)(h.a,{children:"When you are comparing the pandemic situation in two different locations, if you focus on the actual case numbers it can be misleading. Whilst every case is pertinent and tragic at a personal level, when you are performing comparative analysis it is more beneficial to focus on the prevalence of the problem to come to a clear picture of the difference between locations.  The prevalence is reflected by the number of incidents by the population as a whole."}),Object(n.jsx)(h.a,{children:"For instance 100,000 cases in India compared to 100,000 cases in the United Kingdom is vastly different in terms of the population affected. India has a population of 1,380,004,385 compared to the UK's population of 67,886,004. In India the figure of 100,000 cases would only represent approximately 0.007% of the population or about 72 cases per million people. In contrast, 100,000 cases in the UK would represent 1.47% of the population or 14730 cases per million people. In this example despite each country having equal case loads the situation in the UK would in fact be over 200 times worse in terms of the population affected."}),Object(n.jsx)(h.a,{children:"It is for these reasons that we have shown the figures on this site as cases per million people. This allows us to compare locations with widely divergent populations. Comparing locations by actual figures are fair only if the locations have comparable populations."}),Object(n.jsx)(h.a,{children:"If you wish to see actual case figures you can find them easily on the John Hopkins University Site for US and global figures, or at Covid19india.org for detailed Indian figures. In contrast the Our World in Data website defaults to a view showing figures by population but you can also  opt to see actual figures there."})]})})]}),Object(n.jsxs)(Ae.a,{expanded:5===i,onChange:r(5),children:[Object(n.jsx)(Ue.a,{expandIcon:Object(n.jsx)(V.a,{}),"aria-controls":"p4bh-content",id:"p4bh-header",children:Object(n.jsx)(h.a,{className:e.hl1,children:"Q Are the figures accurate?"})}),Object(n.jsx)(Ee.a,{children:Object(n.jsx)(h.a,{children:"The data I am using is the same data that informs governments and media houses across the globe. The collection of this data is the result of a monumental effort involving the co-operation of hundreds of people all over the globe. If you look closely you will surely find some inconsistencies in the figures. Use these numbers with discretion, they are meant only as a guide. Millions of people have had coronavirus and have not been tested at all. Testing varies widely across the world. I have chosen to use a minimal set of statistics that are most reliable. Some figures like case recoveries and active cases are omitted as their definitions are neither consistent nor accurate."})})]}),Object(n.jsxs)(Ae.a,{expanded:6===i,onChange:r(6),children:[Object(n.jsx)(Ue.a,{expandIcon:Object(n.jsx)(V.a,{}),"aria-controls":"p4bh-content",id:"p4bh-header",children:Object(n.jsx)(h.a,{className:e.hl1,children:"Q What locations are available?"})}),Object(n.jsx)(Ee.a,{children:Object(n.jsxs)(u.a,{container:!0,direction:"column",children:[Object(n.jsx)(h.a,{children:"1. United States - all states and counties - data sourced from John Hopkins University"}),Object(n.jsx)(h.a,{children:"2. India - all states and districts - data sourced from covid19India.org"}),Object(n.jsx)(h.a,{children:"3. All other countries - country level plus regional breakdown if available -  data sourced from John Hopkins University"})]})})]}),Object(n.jsxs)(Ae.a,{expanded:7===i,onChange:r(7),children:[Object(n.jsx)(Ue.a,{expandIcon:Object(n.jsx)(V.a,{}),"aria-controls":"p4bh-content",id:"p4bh-header",children:Object(n.jsx)(h.a,{className:e.hl1,children:"Q Can I help?"})}),Object(n.jsx)(Ee.a,{children:Object(n.jsxs)(h.a,{children:["I have initially chosen to provide this website freely, without pushing advertising. The site advocates user privacy, and other than counting anonymous page visits we do not collect or manipulate any of your data in any way. You can connect with me by email with any feedback.",Object(n.jsx)("a",{href:"mailto:hello@datamudra.com",className:e.hl1,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(ze.a,{fontSize:"small"})})]})})]})]})},We=Object(p.a)((function(e){return{hl1:{fontSize:e.typography.pxToRem(15),flexBasis:"95%",flexShrink:0},root:{justifyContent:"flex-end"},cardR:{textAlign:"center"},width:"100%"}})),Be=function(){var e=We();return Object(n.jsxs)(u.a,{container:!0,spacing:1,className:e.root,direction:"row",justify:"center",children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{component:"div",align:"center",children:Object(n.jsx)(O.a,{label:"Data Is refreshed daily from:",variant:"outlined",size:"small"})})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(se.a,{raised:!0,children:Object(n.jsx)(ce.a,{children:Object(n.jsxs)(u.a,{container:!0,direction:"column",alignItems:"center",spacing:2,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(O.a,{avatar:Object(n.jsx)(M.a,{variant:"square",src:"/pandemic-status/flags/US.png"}),label:"Johns Hopkins University",variant:"outlined",size:"small"})}),Object(n.jsxs)(h.a,{variant:"body2",children:["The\xa0",Object(n.jsx)("a",{href:"https://github.com/CSSEGISandData/COVID-19",target:"_blank",rel:"noopener noreferrer",children:"COVID-19 Data Repository"}),"\xa0 by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University."]})]})})})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(se.a,{raised:!0,children:Object(n.jsx)(ce.a,{children:Object(n.jsxs)(u.a,{container:!0,direction:"column",alignItems:"center",spacing:2,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(O.a,{avatar:Object(n.jsx)(M.a,{variant:"square",src:"/pandemic-status/flags/IN.png"}),label:"Covid-19 India Org",size:"small",variant:"outlined"})}),Object(n.jsxs)(h.a,{variant:"body2",children:[" The \xa0",Object(n.jsx)("a",{href:"https://api.covid19india.org",target:"_blank",rel:"noopener noreferrer",children:"COVID-19 India Org data repository"}),"\xa0 from the covid19india Data Operations Group."]})]})})})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(se.a,{raised:!0,children:Object(n.jsx)(ce.a,{children:Object(n.jsxs)(u.a,{container:!0,direction:"column",alignItems:"center",spacing:2,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(O.a,{avatar:Object(n.jsx)(M.a,{variant:"square",src:"/pandemic-status/flags/GB.png"}),label:"Our World In Data",size:"small",variant:"outlined"})}),Object(n.jsxs)(h.a,{variant:"body2",children:["The\xa0",Object(n.jsx)("a",{href:"https://api.covid19india.org",target:"_blank",rel:"noopener noreferrer",children:"Our World In Data (OWID) data repository"})," \xa0  from the University of Oxford."]}),Object(n.jsx)(h.a,{variant:"body2",children:"The OWID testing dataset is sourced from:"}),Object(n.jsxs)(h.a,{variant:"body2",children:["Hasell, J., Mathieu, E., Beltekian, D. et al.\xa0",Object(n.jsx)("a",{href:"https://doi.org/10.1038/s41597-020-00688-8",target:"_blank",rel:"noopener noreferrer",children:"A cross-country database of COVID-19 testing"}),". Sci Data 7, 345 (2020)."]})]})})})}),Object(n.jsxs)(u.a,{item:!0,xs:12,children:[Object(n.jsx)(h.a,{component:"div",variant:"body2",align:"center",children:"Data cited above has been freely released under a \xa0"}),Object(n.jsx)(h.a,{variant:"body2",align:"center",children:Object(n.jsx)("a",{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer",children:"creative commons 4.0 license"})})]})]})},_e=Object(p.a)((function(){return{aPage:{textAlign:"center"}}})),He=function(){var e=_e();return Object(n.jsxs)("div",{className:e.aPage,children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"/pandemic-status/logos.png",alt:"Datamudra",width:"170"})}),Object(n.jsx)(h.a,{children:'"Clarity through simple facts"'}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"mailto:hello@datamudra.com",className:"mail",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(ze.a,{})}),Object(n.jsx)(h.a,{children:"Email for queries or feedback"})]})};function Ke(e){var t=e.children,a=e.sidx,i=e.idx,s=Object(j.a)(e,["children","sidx","idx"]);return Object(n.jsx)("div",Object(d.a)(Object(d.a)({role:"tabpanel",hidden:a!==i,id:"p-tbi-".concat(i),"aria-labelledby":"p-tb-".concat(i)},s),{},{children:a===i&&Object(n.jsx)(b.a,{p:1,children:Object(n.jsx)(h.a,{component:"div",children:t})})}))}var Me=Object(p.a)((function(e){return{root:{display:"flex",flexGrow:1},barTit:{fontWeight:900,textAlign:"center"},drawer:Object(l.a)({},e.breakpoints.up("md"),{width:qe,flexShrink:0}),barChip:{borderColor:"#fbe5e7",color:"white"},appBar:Object(l.a)({},e.breakpoints.up("md"),{width:"calc(100% - ".concat(qe,"px)"),marginLeft:qe}),tBar:{justifyContent:"space-between"},menuButton:Object(l.a)({marginRight:e.spacing(2)},e.breakpoints.up("md"),{display:"none"}),content:{flexGrow:1,padding:e.spacing(0)},toolbar:e.mixins.toolbar,drawerPaper:{width:qe}}})),qe=180,Fe=["home","datasources","FAQ","contact"],Ve=function(e){var t=e.window,a=Me(),c=Object(f.a)(),r=s.a.useState(!1),l=Object(o.a)(r,2),d=l[0],j=l[1],b=s.a.useState("20001"),p=Object(o.a)(b,2),D=p[0],A=p[1],E=s.a.useState("20002"),z=Object(o.a)(E,2),R=z[0],_=z[1],H=function(){j(!d)},K=s.a.useState(0),M=Object(o.a)(K,2),q=M[0],F=M[1],V=function(e,t){F(t),B.a.pageview(Fe[t]),d&&H()},Q=Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{}),Object(n.jsx)("img",{src:"/pandemic-status/logos.png",alt:"Datamudra",width:"170"}),Object(n.jsx)(v.a,{}),Object(n.jsxs)(k.a,{children:[Object(n.jsxs)(I.a,{button:!0,selected:0===q,onClick:function(e){return V(0,0)},children:[Object(n.jsx)(N.a,{children:Object(n.jsx)(U.a,{})}),Object(n.jsx)(S.a,{primary:"Home"})]},"Home"),Object(n.jsxs)(I.a,{button:!0,selected:1===q,onClick:function(e){return V(0,1)},children:[Object(n.jsx)(N.a,{children:Object(n.jsx)(P.a,{})}),Object(n.jsx)(S.a,{primary:"Data Sources"})]},"Data Sources"),Object(n.jsxs)(I.a,{button:!0,selected:2===q,onClick:function(e){return V(0,2)},children:[Object(n.jsx)(N.a,{children:Object(n.jsx)(L.a,{})}),Object(n.jsx)(S.a,{primary:"FAQ"})]},"FAQ"),Object(n.jsxs)(I.a,{button:!0,selected:3===q,onClick:function(e){return V(0,3)},children:[Object(n.jsx)(N.a,{children:Object(n.jsx)(W.a,{})}),Object(n.jsx)(S.a,{primary:"Contact"})]},"Contact")]}),Object(n.jsx)(v.a,{})]}),Y=void 0!==t?function(){return t().document.body}:void 0;return Object(i.useEffect)((function(){B.a.initialize("UA-188843494-1"),console.log("called GA UA-188843494-1"),B.a.pageview(Fe[0])}),[]),Object(n.jsxs)("div",{className:a.root,children:[Object(n.jsx)(g.a,{}),Object(n.jsx)(x.a,{position:"fixed",className:a.appBar,children:Object(n.jsx)(m.a,{className:a.tBar,children:Object(n.jsxs)(u.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",children:[Object(n.jsxs)(u.a,{item:!0,xs:11,md:12,children:[Object(n.jsx)(h.a,{className:a.barTit,variant:"caption",display:"block",children:"COVID-19 STATUS : CHECK AND COMPARE"}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{component:"div",align:"center",children:Object(n.jsx)(O.a,{className:a.barChip,label:"Choose from over 4500 global locations",variant:"outlined",size:"small"})})})]}),Object(n.jsx)(u.a,{item:!0,xs:1,children:Object(n.jsx)(C.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:H,className:a.menuButton,children:Object(n.jsx)(T.a,{})})})]})})}),Object(n.jsxs)("nav",{className:a.drawer,"aria-label":"app pgs",children:[Object(n.jsx)(w.a,{mdUp:!0,implementation:"css",children:Object(n.jsx)(y.a,{container:Y,variant:"temporary",anchor:"rtl"===c.direction?"right":"left",open:d,onClose:H,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0},children:Q})}),Object(n.jsx)(w.a,{smDown:!0,implementation:"css",children:Object(n.jsx)(y.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0,children:Q})})]}),Object(n.jsxs)("div",{className:a.content,children:[Object(n.jsxs)(Ke,{sidx:q,idx:0,children:[Object(n.jsx)("div",{className:a.toolbar}),Object(n.jsx)(Te,{L_KEY:D,R_KEY:R,setL_KEY:A,setR_KEY:_})]}),Object(n.jsxs)(Ke,{sidx:q,idx:1,children:[Object(n.jsx)("div",{className:a.toolbar}),Object(n.jsx)(Be,{})]}),Object(n.jsxs)(Ke,{sidx:q,idx:2,children:[Object(n.jsx)("div",{className:a.toolbar}),Object(n.jsx)(Re,{})]}),Object(n.jsxs)(Ke,{sidx:q,idx:3,children:[Object(n.jsx)("div",{className:a.toolbar}),Object(n.jsx)(He,{})]})]})]})},Qe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,351)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};a(270);r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(Ve,{})}),document.getElementById("root")),Qe()}},[[271,1,2]]]);
//# sourceMappingURL=main.40907677.chunk.js.map