(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(64),s=n.n(o),l=(n(100),n(101),n(102),n(103),n(104),n(56)),c=n(15),u=n(11),i=(n(105),n(68)),m=n.n(i),f=n(163),p=n(160),d=n(154),E=n(164),v=n(161),b=n(165),g=n(72),y=n.n(g),j=n(73),h=n.n(j),_=function(e){var t=e.users,n=t.topUsers,a=t.lastUser,o=[].concat(Object(c.a)(n),[a]);return o[0]&&(o[0].color="#C9B037"),o[1]&&(o[1].color="#B4B4B4"),o[2]&&(o[2].color="#AD8A56"),o[3]&&(o[3].color=""),r.a.createElement("div",{className:m.a.tops},r.a.createElement(f.a,{sx:{width:"100%",bgcolor:"background.paper"}},o.map(function(e,t){return r.a.createElement(p.a,{key:t},r.a.createElement(d.a,null,r.a.createElement(E.a,null,""!==e.color?r.a.createElement(y.a,{sx:{color:e.color}}):r.a.createElement(h.a,null),"                            "),r.a.createElement(v.a,{target:"_blank",rel:"noreferrer",href:"https://www.tiktok.com/@".concat(e.username),style:{color:"white",fontSize:"1.4rem",fontWeight:"400"},underline:"hover"},e.username),r.a.createElement(b.a,{style:{display:"flex",justifyContent:"flex-end"},primary:e.points})))})))},O=n(74),k=n.n(O),w=function(e){var t=e.users;return r.a.createElement("div",{className:k.a.users},t.map(function(e,t){return r.a.createElement(p.a,{disablePadding:!0,key:t},r.a.createElement(d.a,null,r.a.createElement(b.a,null,e.username),r.a.createElement(b.a,{style:{display:"flex",justifyContent:"flex-end"},primary:0!==e.points&&e.points})))}))},x=n(75),C=n.n(x),P=n(158),U=function(e){var t=e.onAddUser,n=Object(a.useState)(""),o=Object(u.a)(n,2),s=o[0],l=o[1],c=Object(a.useState)(0),i=Object(u.a)(c,2),m=i[0],f=i[1],p=function(e){e.preventDefault(),t({username:s,points:m}),l(""),f(0)};return r.a.createElement("form",{className:C.a.forms,onSubmit:p},r.a.createElement("div",null,r.a.createElement(P.a,{value:s,onChange:function(e){var t=e.target;return l(t.value)},fullWidth:!0,margin:"dense",id:"username",label:"Usuario",variant:"outlined",onKeyPress:function(e){"Enter"===e.key&&p(e)}})),r.a.createElement("div",null,r.a.createElement(P.a,{type:"number",value:m,onChange:function(e){var t=e.target;return f(Number(t.value||"0"))},fullWidth:!0,margin:"dense",id:"points",label:"Puntos",variant:"outlined",onKeyPress:function(e){"Enter"===e.key&&p(e)}})))},S=n(76),A=n(159),B=n(157),F=Object(S.a)({palette:{mode:"dark"}});var N=function(){var e=Object(a.useState)([{username:"claudiodeviaje",points:1550,color:""},{username:"jose_maldo_guitar",points:1200,color:""},{username:"carlosdsassa",points:890,color:""},{username:"marianiits_",points:50,color:""},{username:"marianiits_",points:50,color:""}]),t=Object(u.a)(e,2),n=t[0],o=t[1];return r.a.createElement(A.a,{theme:F},r.a.createElement(B.a,null),r.a.createElement("div",{className:"App"},r.a.createElement(_,{users:function(){var e=Object(c.a)(n).sort(function(e,t){return t.points-e.points}).slice(0,3),t=e.reduce(function(e,t){return e+t.points},0);return{topUsers:e,totalPoints:t,lastUser:Object(l.a)({},n[0])}}()}),r.a.createElement(w,{users:n}),r.a.createElement(U,{onAddUser:function(e){o([Object(l.a)({},e,{color:""})].concat(Object(c.a)(n)))}})))},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null))),D()},68:function(e,t,n){e.exports={tops:"Tops_tops__2tIvn"}},74:function(e,t,n){e.exports={users:"Users_users__3AttP"}},75:function(e,t,n){e.exports={forms:"Form_forms__y1-x5"}},92:function(e,t,n){e.exports=n(111)}},[[92,1,2]]]);
//# sourceMappingURL=main.fb539fc0.chunk.js.map