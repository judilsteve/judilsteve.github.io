(this["webpackJsonpportfolio-tracker"]=this["webpackJsonpportfolio-tracker"]||[]).push([[0],{160:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),c=n.n(i),l=n(210),o=n(74),s=n(20),u=n(8),j=n(186),d=n(190),b=n(161),h=n(192),O=n(162),f=n(193),v=n(194),x=n(195),g=n(220),p=n(204),m=n(205),y=n(191),S=n(196),C=n(197),w=n(206),k=n(207),P=n(211),A=n(21),U=n.n(A),M=n(126),I=n(125),D=n(16),N=n(101),T=n(113),Y=function(e){Object(M.a)(n,e);var t=Object(I.a)(n);function n(e,a){var r;Object(N.a)(this,n);var i=window.localStorage.getItem(e),c=null===i?a:JSON.parse(i);return(r=t.call(this,c)).watch((function(t){return window.localStorage.setItem(e,JSON.stringify(t))})),r}return n}(function(){function e(t){Object(N.a)(this,e),this.value=t,this.watchers=[]}return Object(T.a)(e,[{key:"watch",value:function(e){return this.watchers.push(e),this.watchers.length-1}},{key:"removeWatcher",value:function(e){this.watchers.splice(e,1)}},{key:"setValue",value:function(e){this.value=e;var t,n=Object(D.a)(this.watchers);try{for(n.s();!(t=n.n()).done;){(0,t.value)(e)}}catch(a){n.e(a)}finally{n.f()}}}]),e}());function E(e){var t=Object(a.useState)(e.value),n=Object(u.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){var t=e.watch(i);return function(){return e.removeWatcher(t)}}),[e]),[r,function(t){return e.setValue(t)}]}var F=new Y("parcels",[]),L=new Y("adjustments",[]),B=new Y("sales",[]),J=n(213),$=n(217),z=n(1);function W(){var e=E(F),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useMemo)((function(){return Object(J.a)(n,(function(e){return e.date}))}),[n]),c=Object(a.useMemo)((function(){var e,t=null===(e=Object($.a)(n,(function(e){return e.id})))||void 0===e?void 0:e.id;if(void 0===t)return"A";for(var a="A".charCodeAt(0)-1,r=0,i=0,c=t.length-1;c>=0;c--)r+=(t.charCodeAt(c)-a)*Math.pow(26,i++);for(var l=r+1,o="";l;){var s=(l-1)%26;o=String.fromCharCode(65+s)+o,l=Math.floor((l-s)/26)}return o}),[n]),l=Object(a.useState)(!1),o=Object(u.a)(l,2),g=o[0],p=o[1],m=g?Object(z.jsx)(_,{id:c,cancel:function(){return p(!1)},save:function(e){r([].concat(Object(s.a)(n),[e])),p(!1)}}):Object(z.jsx)(j.a,{children:Object(z.jsx)(d.a,{align:"right",colSpan:9,children:Object(z.jsx)(b.a,{onClick:function(){return p(!0)},children:Object(z.jsx)(y.a,{})})})}),w=Object(a.useState)([]),k=Object(u.a)(w,2),P=k[0],A=k[1],M=function(e){return A(P.filter((function(t){return t!==e})))},I=function(e){r([].concat(Object(s.a)(n.filter((function(t){return t.id!==e.id}))),[e])),M(e.id)};return Object(z.jsx)(h.a,{component:O.a,children:Object(z.jsxs)(f.a,{style:{minWidth:650},size:"small",children:[Object(z.jsx)(v.a,{children:Object(z.jsxs)(j.a,{children:[Object(z.jsx)(d.a,{children:"ID"}),Object(z.jsx)(d.a,{align:"right",children:"Date Acquired"}),Object(z.jsx)(d.a,{align:"right",children:"ASX Code"}),Object(z.jsx)(d.a,{align:"right",children:"Parcel Type"}),Object(z.jsx)(d.a,{align:"right",children:"Memo"}),Object(z.jsx)(d.a,{align:"right",children:"Units"}),Object(z.jsx)(d.a,{align:"right",children:"Unit Price ($/u)"}),Object(z.jsx)(d.a,{align:"right",children:"Brokerage ($)"}),Object(z.jsx)(d.a,{align:"right",children:"Actions"})]})}),Object(z.jsxs)(x.a,{children:[i.map((function(e){return P.includes(e.id)?Object(z.jsx)(_,{id:e.id,parcel:e,cancel:function(){return M(e.id)},save:I},e.id):Object(z.jsxs)(j.a,{children:[Object(z.jsx)(d.a,{component:"th",scope:"row",children:e.id}),Object(z.jsx)(d.a,{align:"right",children:U()(e.date).format("YYYY-MM-DD")}),Object(z.jsx)(d.a,{align:"right",children:e.asxCode}),Object(z.jsx)(d.a,{align:"right",children:e.isDrp?"Dividend Reinvestment":"Purchase"}),Object(z.jsx)(d.a,{align:"right",children:e.memo}),Object(z.jsx)(d.a,{align:"right",children:e.units}),Object(z.jsx)(d.a,{align:"right",children:e.unitPrice}),Object(z.jsx)(d.a,{align:"right",children:e.brokerage}),Object(z.jsxs)(d.a,{align:"right",children:[Object(z.jsx)(b.a,{size:"small",onClick:function(){return t=e.id,A([].concat(Object(s.a)(P),[t]));var t},children:Object(z.jsx)(S.a,{})}),Object(z.jsx)(b.a,{size:"small",onClick:function(){return r(n.filter((function(t){return t.id!==e.id})))},children:Object(z.jsx)(C.a,{})})]})]},e.id)})),m]})]})})}function _(e){var t=e.id,n=e.save,r=e.cancel,i=e.parcel,c=Object(a.useState)(null),l=Object(u.a)(c,2),o=l[0],s=l[1],h=Object(a.useState)(""),O=Object(u.a)(h,2),f=O[0],v=O[1],x=Object(a.useState)(!1),y=Object(u.a)(x,2),S=y[0],C=y[1],A=Object(a.useState)(""),U=Object(u.a)(A,2),M=U[0],I=U[1],D=Object(a.useState)(""),N=Object(u.a)(D,2),T=N[0],Y=N[1],E=Object(a.useState)(""),F=Object(u.a)(E,2),L=F[0],B=F[1],J=Object(a.useState)(""),$=Object(u.a)(J,2),W=$[0],_=$[1];Object(a.useEffect)((function(){var e,t,n,a,r,c,l;s(null!==(e=null===i||void 0===i?void 0:i.date)&&void 0!==e?e:null),v(null!==(t=null===i||void 0===i?void 0:i.asxCode)&&void 0!==t?t:""),C(null!==(n=null===i||void 0===i?void 0:i.isDrp)&&void 0!==n&&n),I(null!==(a=null===i||void 0===i?void 0:i.memo)&&void 0!==a?a:""),Y(null!==(r=null===i||void 0===i?void 0:i.units.toString())&&void 0!==r?r:""),B(null!==(c=null===i||void 0===i?void 0:i.unitPrice.toString())&&void 0!==c?c:""),_(null!==(l=null===i||void 0===i?void 0:i.brokerage.toString())&&void 0!==l?l:"")}),[i]);var G=T&&!isNaN(parseFloat(T))&&parseInt(T)===parseFloat(T),X=L&&!isNaN(parseFloat(L)),V=S||W&&!isNaN(parseFloat(W)),R=o&&f&&G&&X&&V;return Object(z.jsxs)(j.a,{children:[Object(z.jsx)(d.a,{component:"th",scope:"row",children:t}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(P.a,{disableToolbar:!0,variant:"inline",format:"YYYY-MM-DD",label:"Date",value:o,error:!o,onChange:function(e){return s(e.toJSON())}})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(g.a,{value:f,onChange:function(e){return v(e.target.value)},error:!f,label:"ASX Code"})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(p.a,{control:Object(z.jsx)(m.a,{value:S,onChange:function(){return C(!S)}}),label:"Dividend Reinvestment"})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(g.a,{value:M,onChange:function(e){return I(e.target.value)},label:"Memo"})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(g.a,{type:"number",value:T,onChange:function(e){return Y(e.target.value)},error:!G,label:"Units"})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(g.a,{type:"number",value:L,onChange:function(e){return B(e.target.value)},error:!X,label:"Unit Price ($/u)"})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(g.a,{type:"number",disabled:S,value:S?"0.00":W,onChange:function(e){return _(e.target.value)},error:!S&&!V,label:"Brokerage ($)"})}),Object(z.jsxs)(d.a,{align:"right",children:[Object(z.jsx)(b.a,{onClick:function(){return n({id:t,date:o,asxCode:f,isDrp:S,memo:M,units:parseInt(T),unitPrice:parseFloat(L),brokerage:S?0:parseFloat(W)})},disabled:!R,children:Object(z.jsx)(w.a,{})}),Object(z.jsx)(b.a,{onClick:r,children:Object(z.jsx)(k.a,{})})]})]})}var G=n(218),X=n(223),V=n(216),R=n(209),H=n(208),q=n(203),Q=n(222),K=n(214);function Z(e){var t=e.disabled,n=e.error,a=e.value,r=e.onChange,i=e.children,c=e.renderValue,l=e.multiple,o=e.id,s=e.label;return Object(z.jsxs)(q.a,{fullWidth:!0,children:[Object(z.jsx)(Q.a,{id:o,children:s}),Object(z.jsx)(K.a,{MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null},disabled:t,labelId:o,error:n,multiple:l,fullWidth:!0,value:a,onChange:r,renderValue:c,children:i})]})}function ee(e,t,n){switch(e.type){case"ACQUISITION":t[e.id]={id:e.id,date:e.date,memo:e.memo,asxCode:e.asxCode,remainingUnits:e.units,perUnitCostBase:(e.units*e.unitPrice+e.brokerage)/e.units};break;case"ADJUSTMENT":var a,r=0,i=Object(D.a)(e.applicableParcelIds);try{for(i.s();!(a=i.n()).done;){var c=a.value,l=t[c];if(l)r+=l.remainingUnits;else if(n)throw new Error("Adjustment ".concat(e.id," was applicable to non-existent parcel ").concat(c))}}catch(O){i.e(O)}finally{i.f()}var o,s=Object(D.a)(e.applicableParcelIds);try{for(s.s();!(o=s.n()).done;){var u=t[o.value];u&&(u.perUnitCostBase+=e.netAmount/r)}}catch(O){s.e(O)}finally{s.f()}break;case"SALE":var j,d=Object(D.a)(e.applicableParcels);try{for(d.s();!(j=d.n()).done;){var b=j.value,h=t[b.id];if(h)h.remainingUnits-=b.unitsSold;else if(n)throw new Error("Sale ".concat(e.id," was applicable to non-existent parcel ").concat(b.id))}}catch(O){d.e(O)}finally{d.f()}break;default:throw new Error("Unrecognised event type ".concat(e.type))}}function te(e,t,n,a){var r,i={},c=Object(D.a)(e);try{for(c.s();!(r=c.n()).done;){var l=r.value;if(l.id!==a){if(null!==t&&l.date>t)break;ee(l,i,n)}}}catch(o){c.e(o)}finally{c.f()}return i}function ne(e,t,n,r){return Object(a.useMemo)((function(){var a=te(e,t,n,r);return Object.values(a)}),[e,t,n,r])}var ae=n(215),re=n(49);function ie(){var e=E(F),t=Object(u.a)(e,1)[0],n=E(L),r=Object(u.a)(n,1)[0],i=E(B),c=Object(u.a)(i,1)[0];return Object(a.useMemo)((function(){return Object(J.a)([].concat(Object(s.a)(t.map((function(e){return Object(re.a)({type:"ACQUISITION"},e)}))),Object(s.a)(r.map((function(e){return Object(re.a)({type:"ADJUSTMENT"},e)}))),Object(s.a)(c.map((function(e){return Object(re.a)({type:"SALE"},e)})))),[function(e){return e.date},function(e){return"ACQUISITION"===e.type?1:"ADJUSTMENT"===e.type&&e.netAmount>0?2:"SALE"===e.type?3:4}])}),[t,r,c])}function ce(){var e=E(L),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useMemo)((function(){return Object(J.a)(n,(function(e){return e.date}))}),[n]),c=Object(a.useState)(!1),l=Object(u.a)(c,2),o=l[0],g=l[1],p=o?Object(z.jsx)(le,{cancel:function(){return g(!1)},save:function(e){r([].concat(Object(s.a)(n),[e])),g(!1)}}):Object(z.jsx)(j.a,{children:Object(z.jsx)(d.a,{align:"right",colSpan:6,children:Object(z.jsx)(b.a,{onClick:function(){return g(!0)},children:Object(z.jsx)(y.a,{})})})}),m=Object(a.useState)([]),w=Object(u.a)(m,2),k=w[0],P=w[1],A=function(e){return P(k.filter((function(t){return t!==e})))},M=function(e){r([].concat(Object(s.a)(n.filter((function(t){return t.id!==e.id}))),[e])),A(e.id)},I=ie(),N=Object(a.useMemo)((function(){var e,t=new Set,a=Object(D.a)(n);try{for(a.s();!(e=a.n()).done;){var r,i=e.value,c=te(I,i.date,!1),l=Object(D.a)(i.applicableParcelIds);try{for(l.s();!(r=l.n()).done;){var o=c[r.value];if(void 0===o||o.remainingUnits<=0){t.add(i.id);break}}}catch(s){l.e(s)}finally{l.f()}}}catch(s){a.e(s)}finally{a.f()}return t}),[I,n]);return Object(z.jsx)(h.a,{component:O.a,children:Object(z.jsxs)(f.a,{style:{minWidth:650},size:"small",children:[Object(z.jsx)(v.a,{children:Object(z.jsxs)(j.a,{children:[Object(z.jsx)(d.a,{}),Object(z.jsx)(d.a,{align:"right",children:"Date"}),Object(z.jsx)(d.a,{align:"right",children:"Applicable Parcels"}),Object(z.jsx)(d.a,{align:"right",children:"Memo"}),Object(z.jsx)(d.a,{align:"right",children:"Net Amount ($)"}),Object(z.jsx)(d.a,{align:"right",children:"Actions"})]})}),Object(z.jsxs)(x.a,{children:[i.map((function(e){return k.includes(e.id)?Object(z.jsx)(le,{id:e.id,adjustment:e,cancel:function(){return A(e.id)},save:M},e.id):Object(z.jsxs)(j.a,{children:[Object(z.jsx)(d.a,{children:N.has(e.id)?Object(z.jsx)(G.a,{title:"One or more applicable parcels do not exist or have been entirely sold before the adjustment date.",children:Object(z.jsx)(H.a,{color:"error"})}):Object(z.jsx)(z.Fragment,{})}),Object(z.jsx)(d.a,{align:"right",children:U()(e.date).format("YYYY-MM-DD")}),Object(z.jsx)(d.a,{align:"right",children:e.applicableParcelIds.join(", ")}),Object(z.jsx)(d.a,{align:"right",children:e.memo}),Object(z.jsx)(d.a,{align:"right",children:e.netAmount}),Object(z.jsxs)(d.a,{align:"right",children:[Object(z.jsx)(b.a,{size:"small",onClick:function(){return t=e.id,P([].concat(Object(s.a)(k),[t]));var t},children:Object(z.jsx)(S.a,{})}),Object(z.jsx)(b.a,{size:"small",onClick:function(){return r(n.filter((function(t){return t.id!==e.id})))},children:Object(z.jsx)(C.a,{})})]})]},e.id)})),p]})]})})}function le(e){var t=e.id,n=e.save,r=e.cancel,i=e.adjustment,c=Object(a.useState)(null),l=Object(u.a)(c,2),o=l[0],s=l[1],h=Object(a.useState)([]),O=Object(u.a)(h,2),f=O[0],v=O[1],x=Object(a.useState)(""),p=Object(u.a)(x,2),m=p[0],y=p[1],S=Object(a.useState)(""),C=Object(u.a)(S,2),A=C[0],M=C[1];Object(a.useEffect)((function(){var e,t,n,a;s(null!==(e=null===i||void 0===i?void 0:i.date)&&void 0!==e?e:null),v(null!==(t=null===i||void 0===i?void 0:i.applicableParcelIds)&&void 0!==t?t:[]),y(null!==(n=null===i||void 0===i?void 0:i.memo)&&void 0!==n?n:""),M(null!==(a=null===i||void 0===i?void 0:i.netAmount.toString())&&void 0!==a?a:"")}),[i]);var I=A&&!isNaN(parseFloat(A)),D=o&&f.length&&I,N=ne(ie(),o,!1);return Object(a.useEffect)((function(){v((function(e){return e.filter((function(e){return N.find((function(t){return t.id===e}))}))}))}),[N]),Object(z.jsxs)(j.a,{children:[Object(z.jsx)(d.a,{}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(P.a,{disableToolbar:!0,variant:"inline",format:"YYYY-MM-DD",label:"Date",value:o,error:!o,onChange:function(e){return s(e.toJSON())}})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(Z,{disabled:!o||!N.length,id:"applicable-parcel-select",label:"Applicable Parcels",error:!f.length,multiple:!0,value:f,onChange:function(e){return v(e.target.value)},renderValue:function(e){return e.join(", ")},children:N.map((function(e){return Object(z.jsxs)(X.a,{value:e.id,children:[Object(z.jsx)(V.a,{checked:f.includes(e.id)}),Object(z.jsx)(R.a,{primary:"".concat(e.id).concat(e.memo?": "+e.memo:""),secondary:"".concat(e.remainingUnits,"x ").concat(e.asxCode,", acquired ").concat(U()(e.date).format("YYYY-MM-DD"))})]},e.id)}))})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(g.a,{value:m,onChange:function(e){return y(e.target.value)},label:"Memo"})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(g.a,{type:"number",value:A,onChange:function(e){return M(e.target.value)},error:!I,label:"Net Amount ($)"})}),Object(z.jsxs)(d.a,{align:"right",children:[Object(z.jsx)(b.a,{onClick:function(){return n({id:null!==t&&void 0!==t?t:Object(ae.a)(),date:o,applicableParcelIds:f,memo:m,netAmount:parseFloat(A)})},disabled:!D,children:Object(z.jsx)(w.a,{})}),Object(z.jsx)(b.a,{onClick:r,children:Object(z.jsx)(k.a,{})})]})]})}var oe=n(103),se=n.n(oe),ue=n(121),je=n(199);function de(){var e=E(F),t=Object(u.a)(e,2),n=t[0],r=t[1],i=E(L),c=Object(u.a)(i,2),l=c[0],s=c[1],j=E(B),d=Object(u.a)(j,2),b=d[0],h=d[1],O=Object(a.useState)(null),f=Object(u.a)(O,2),v=f[0],x=f[1],g=Object(a.useState)(null),p=Object(u.a)(g,2),m=p[0],y=p[1],S=function(){var e=Object(ue.a)(se.a.mark((function e(t){var n;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("WARNING: Importing this file will completely and irreversibly replace any data currently entered. Continue?")){e.next=2;break}return e.abrupt("return");case 2:return x(null),y(null),e.prev=4,e.t0=JSON,e.next=8,t[0].text();case 8:e.t1=e.sent,n=e.t0.parse.call(e.t0,e.t1),e.next=16;break;case 12:throw e.prev=12,e.t2=e.catch(4),x("File was not valid JSON. Ensure that you have selected the correct file and try again."),e.t2;case 16:if(n.parcels&&n.adjustments&&n.sales){e.next=19;break}return x("File appears malformed. Ensure that you have selected the correct file and try again."),e.abrupt("return");case 19:r(n.parcels),s(n.adjustments),h(n.sales),y("Import successful"),setTimeout((function(){return y(null)}),3e4);case 24:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),C=Object(a.useRef)(null);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("input",{ref:C,onChange:function(e){return S(e.target.files)},accept:"application/json",style:{display:"none"},id:"import-file-input",type:"file"}),Object(z.jsx)("label",{htmlFor:"import-file-input",children:Object(z.jsx)(je.a,{onClick:function(){var e;return null===(e=C.current)||void 0===e?void 0:e.click()},variant:"contained",color:"primary",children:"Import Holdings"})}),Object(z.jsx)(je.a,{onClick:function(){var e=new Blob([JSON.stringify({parcels:n,adjustments:l,sales:b})]),t=URL.createObjectURL(e),a=document.createElement("a");a.href=t;var r=U()();a.download="Holdings_".concat(r.format("YYYY-MM-DD_Thh-mm-ss"),".json"),document.body.appendChild(a),a.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),document.body.removeChild(a)},style:{margin:10},variant:"contained",color:"primary",children:"Export Holdings"}),!v&&!m&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("br",{}),Object(z.jsx)(o.a,{color:"textSecondary",variant:"body2",children:"NOTE: Importing holdings will completely and irreversibly replace any data currently entered"})]}),v&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("br",{}),Object(z.jsx)(o.a,{color:"error",variant:"body2",children:v})]}),m&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("br",{}),Object(z.jsx)(o.a,{color:"textSecondary",variant:"body2",children:m})]})]})}function be(e,t,n){return n>0&&U()(e).diff(U()(t),"year",!0)>1&&(n/=2),n}function he(e){var t,n=0,a=0,r=Object(D.a)(e.applicableParcels);try{for(r.s();!(t=r.n()).done;){a+=t.value.unitsSold}}catch(s){r.e(s)}finally{r.f()}var i,c=Object(D.a)(e.applicableParcels);try{for(c.s();!(i=c.n()).done;){var l=i.value,o=e.unitPrice*l.unitsSold;o-=l.unitsSold*l.perUnitCostBase,o-=e.brokerage*(l.unitsSold/a),n+=be(e.date,l.date,o)}}catch(s){c.e(s)}finally{c.f()}return n}function Oe(){var e=E(B),t=Object(u.a)(e,2),n=t[0],r=t[1],i=ie(),c=Object(a.useMemo)((function(){var e,t=[],n={},a={},r=Object(D.a)(i);try{for(r.s();!(e=r.n()).done;){var c=e.value;if("SALE"===c.type){var l,o={errors:[],applicableParcels:[]},s=Object(D.a)(c.applicableParcels);try{for(s.s();!(l=s.n()).done;){var u,j=l.value,d=a[j.id];d?d.asxCode!==c.asxCode?o.errors.push("Parcel ".concat(j.id," has the wrong ASX Code")):d.remainingUnits<j.unitsSold&&o.errors.push("Parcel ".concat(j.id," does not have enough remaining units to complete sale")):o.errors.push("Parcel ".concat(j.id," did not exist at the sale date")),o.applicableParcels.push(Object(re.a)(Object(re.a)({},j),{},{unitsAvailable:null!==(u=null===d||void 0===d?void 0:d.remainingUnits)&&void 0!==u?u:"??"}))}}catch(b){s.e(b)}finally{s.f()}o.cgtLiability=o.errors.length?null:he({unitPrice:c.unitPrice,date:c.date,brokerage:c.brokerage,applicableParcels:o.applicableParcels.map((function(e){return{date:a[e.id].date,perUnitCostBase:a[e.id].perUnitCostBase,unitsSold:e.unitsSold}}))}),t.push(c),n[c.id]=o}ee(c,a,!1)}}catch(b){r.e(b)}finally{r.f()}return{orderedSales:t,saleDataLookup:n}}),[i]),l=c.orderedSales,g=c.saleDataLookup,p=Object(a.useState)(!1),m=Object(u.a)(p,2),w=m[0],k=m[1],P=w?Object(z.jsx)(fe,{cancel:function(){return k(!1)},save:function(e){r([].concat(Object(s.a)(n),[e])),k(!1)},allEventsOrdered:i}):Object(z.jsx)(j.a,{children:Object(z.jsx)(d.a,{align:"right",colSpan:9,children:Object(z.jsx)(b.a,{onClick:function(){return k(!0)},children:Object(z.jsx)(y.a,{})})})}),A=Object(a.useState)([]),M=Object(u.a)(A,2),I=M[0],N=M[1],T=function(e){return N(I.filter((function(t){return t!==e})))},Y=function(e){r([].concat(Object(s.a)(n.filter((function(t){return t.id!==e.id}))),[e])),T(e.id)};return Object(z.jsx)(h.a,{component:O.a,children:Object(z.jsxs)(f.a,{style:{minWidth:650},size:"small",children:[Object(z.jsx)(v.a,{children:Object(z.jsxs)(j.a,{children:[Object(z.jsx)(d.a,{}),Object(z.jsx)(d.a,{align:"right",children:"Date"}),Object(z.jsx)(d.a,{align:"right",children:"ASX Code"}),Object(z.jsx)(d.a,{align:"right",children:"Applicable Parcels"}),Object(z.jsx)(d.a,{align:"right",children:"Memo"}),Object(z.jsx)(d.a,{align:"right",children:"Unit Price ($/u)"}),Object(z.jsx)(d.a,{align:"right",children:"Brokerage ($)"}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(o.a,{variant:"body2",color:"primary",children:"CGT Liability ($)"})}),Object(z.jsx)(d.a,{align:"right",children:"Actions"})]})}),Object(z.jsxs)(x.a,{children:[l.map((function(e){var t,a;return I.includes(e.id)?Object(z.jsx)(fe,{id:e.id,sale:e,cancel:function(){return T(e.id)},save:Y,allEventsOrdered:i},e.id):Object(z.jsxs)(j.a,{children:[Object(z.jsx)(d.a,{children:g[e.id].errors.length?g[e.id].errors.map((function(e){return Object(z.jsx)(G.a,{title:e,children:Object(z.jsx)(H.a,{color:"error"})},e)})):Object(z.jsx)(z.Fragment,{})}),Object(z.jsx)(d.a,{align:"right",children:U()(e.date).format("YYYY-MM-DD")}),Object(z.jsx)(d.a,{align:"right",children:e.asxCode}),Object(z.jsx)(d.a,{align:"right",children:g[e.id].applicableParcels.map((function(e){return"".concat(e.id," (").concat(e.unitsSold,"/").concat(e.unitsAvailable,")")})).join(", ")}),Object(z.jsx)(d.a,{align:"right",children:e.memo}),Object(z.jsx)(d.a,{align:"right",children:e.unitPrice}),Object(z.jsx)(d.a,{align:"right",children:e.brokerage}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(o.a,{variant:"body2",color:"primary",children:null!==(t=null===(a=g[e.id].cgtLiability)||void 0===a?void 0:a.toFixed(4))&&void 0!==t?t:"??"})}),Object(z.jsxs)(d.a,{align:"right",children:[Object(z.jsx)(b.a,{size:"small",onClick:function(){return t=e.id,N([].concat(Object(s.a)(I),[t]));var t},children:Object(z.jsx)(S.a,{})}),Object(z.jsx)(b.a,{size:"small",onClick:function(){return r(n.filter((function(t){return t.id!==e.id})))},children:Object(z.jsx)(C.a,{})})]})]},e.id)})),P]})]})})}function fe(e){var t,n,r=e.id,i=e.save,c=e.cancel,l=e.sale,s=e.allEventsOrdered,h=Object(a.useState)(null),O=Object(u.a)(h,2),f=O[0],v=O[1],x=Object(a.useState)(""),p=Object(u.a)(x,2),m=p[0],y=p[1],S=Object(a.useState)([]),C=Object(u.a)(S,2),A=C[0],U=C[1],M=Object(a.useState)(""),I=Object(u.a)(M,2),N=I[0],T=I[1],Y=Object(a.useState)(""),E=Object(u.a)(Y,2),F=E[0],L=E[1],B=Object(a.useState)(""),$=Object(u.a)(B,2),W=$[0],_=$[1],G=Object(a.useState)({}),H=Object(u.a)(G,2),q=H[0],Q=H[1];Object(a.useEffect)((function(){var e,t,n,a,r,i,c;v(null!==(e=null===l||void 0===l?void 0:l.date)&&void 0!==e?e:null),y(null!==(t=null===l||void 0===l?void 0:l.asxCode)&&void 0!==t?t:""),U(null!==(n=null===l||void 0===l?void 0:l.applicableParcels.map((function(e){return e.id})))&&void 0!==n?n:[]),T(null!==(a=null===l||void 0===l?void 0:l.memo)&&void 0!==a?a:""),L(null!==(r=null===l||void 0===l?void 0:l.unitPrice.toString())&&void 0!==r?r:""),_(null!==(i=null===l||void 0===l?void 0:l.brokerage.toString())&&void 0!==i?i:"");var o,s={},u=Object(D.a)(null!==(c=null===l||void 0===l?void 0:l.applicableParcels)&&void 0!==c?c:[]);try{for(u.s();!(o=u.n()).done;){var j=o.value;s[j.id]=j.unitsSold.toString()}}catch(d){u.e(d)}finally{u.f()}Q(s)}),[l]);var K=ne(s,f,!1,r),ee=Object(a.useMemo)((function(){return m?K.filter((function(e){return e.asxCode===m})):K}),[K,m]),te=Object(a.useMemo)((function(){var e,t={},n=Object(D.a)(ee);try{for(n.s();!(e=n.n()).done;){var a=e.value;t[a.id]=a}}catch(r){n.e(r)}finally{n.f()}return t}),[ee]),ie=!A.find((function(e){return!ve(te[e],q[e])})),ce=F&&!isNaN(parseFloat(F)),le=W&&!isNaN(parseFloat(W)),oe=f&&A.length&&ce&&le&&m&&ie,se=ce&&f&&ie,ue=Object(a.useMemo)((function(){var e={};if(!se)return{};var t,n=parseFloat(F),a=Object(D.a)(ee);try{for(a.s();!(t=a.n()).done;){var r=t.value,i=n-r.perUnitCostBase;e[r.id]=be(f,r.date,i)}}catch(c){a.e(c)}finally{a.f()}return e}),[F,f,ee,se]),je=Object(a.useMemo)((function(){return Object(J.a)(ee,(function(e){return ue[e.id]}))}),[ee,ue]),de=null;se&&le&&(de=he({unitPrice:parseFloat(F),date:f,brokerage:parseFloat(W),applicableParcels:A.map((function(e){return{date:te[e].date,perUnitCostBase:te[e].perUnitCostBase,unitsSold:parseInt(q[e])}}))}));var Oe=Object(a.useCallback)((function(e){Q((function(t){var n,a={},r=Object(D.a)(e);try{for(r.s();!(n=r.n()).done;){var i,c=n.value;a[c]=null!==(i=t[c])&&void 0!==i?i:te[c].remainingUnits}}catch(l){r.e(l)}finally{r.f()}return a}))}),[te]);Object(a.useEffect)((function(){U((function(e){var t=e.filter((function(e){return je.find((function(t){return t.id===e}))}));return Oe(t),t}))}),[je,Oe]);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(j.a,{children:[Object(z.jsx)(d.a,{}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(P.a,{disableToolbar:!0,variant:"inline",format:"YYYY-MM-DD",label:"Date",value:f,error:!f,onChange:function(e){return v(e.toJSON())}})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(g.a,{value:m,onChange:function(e){return y(e.target.value)},label:"ASX Code",error:!m})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(Z,{disabled:!f||!je.length||!m,labelId:"applicable-parcel-select",label:"Applicable Parcels",error:!A.length,multiple:!0,fullWidth:!0,value:A,onChange:function(e){return t=e.target.value,U(t),void Oe(t);var t},renderValue:function(e){return e.map((function(e){return e})).join(", ")},children:je.map((function(e){var t,n;return Object(z.jsxs)(X.a,{value:e.id,children:[Object(z.jsx)(V.a,{checked:!!A.includes(e.id)}),Object(z.jsx)(R.a,{primary:"".concat(e.id).concat(e.memo?": "+e.memo:""),secondary:"".concat(e.remainingUnits," available, $").concat(null!==(t=null===(n=ue[e.id])||void 0===n?void 0:n.toFixed(4))&&void 0!==t?t:"??","/u CGT")})]},e.id)}))})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(g.a,{value:N,onChange:function(e){return T(e.target.value)},label:"Memo"})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(g.a,{type:"number",value:F,onChange:function(e){return L(e.target.value)},error:!ce,label:"Unit Price ($/u)"})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(g.a,{type:"number",value:W,onChange:function(e){return _(e.target.value)},error:!le,label:"Brokerage ($)"})}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsxs)(o.a,{variant:"body2",color:"primary",children:["Total: ",null!==(t=null===(n=de)||void 0===n?void 0:n.toFixed(4))&&void 0!==t?t:"??"]})}),Object(z.jsxs)(d.a,{align:"right",rowSpan:A.length+1,children:[Object(z.jsx)(b.a,{onClick:function(){return i({id:null!==r&&void 0!==r?r:Object(ae.a)(),date:f,asxCode:m,applicableParcels:A.map((function(e){return{id:e,unitsSold:parseInt(q[e])}})),memo:N,unitPrice:parseFloat(F),brokerage:parseFloat(W)})},disabled:!oe,children:Object(z.jsx)(w.a,{})}),Object(z.jsx)(b.a,{onClick:c,children:Object(z.jsx)(k.a,{})})]})]}),A.map((function(e){return Object(z.jsx)(xe,{parcel:te[e],perUnitCgtLiability:ue[e],unitsSold:q[e],setUnitsSold:function(t){return function(e,t){var n=Object(re.a)({},q);n[e]=t,Q(n)}(e,t)}},e)}))]})}function ve(e,t){var n;if(!t)return!1;var a=parseFloat(t);if(isNaN(a))return!1;var r=parseInt(t);return r===a&&(!(r>(null!==(n=null===e||void 0===e?void 0:e.remainingUnits)&&void 0!==n?n:0))&&!(r<=0))}function xe(e){var t,n,a,r=e.parcel,i=e.perUnitCgtLiability,c=e.unitsSold,l=e.setUnitsSold,s=ve(r,c),u=void 0!==i&&s?(i*parseInt(c)).toFixed(4):"??";return Object(z.jsxs)(j.a,{children:[Object(z.jsx)(d.a,{}),Object(z.jsx)(d.a,{}),Object(z.jsx)(d.a,{}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsx)(g.a,{type:"number",value:c,onChange:function(e){return l(e.target.value)},error:!s,label:"Units of ".concat(null!==(t=null===r||void 0===r?void 0:r.id)&&void 0!==t?t:"??"),helperText:"".concat(null!==(n=null===r||void 0===r?void 0:r.remainingUnits)&&void 0!==n?n:"??"," available")})}),Object(z.jsx)(d.a,{}),Object(z.jsx)(d.a,{}),Object(z.jsx)(d.a,{}),Object(z.jsx)(d.a,{align:"right",children:Object(z.jsxs)(o.a,{variant:"body2",color:"primary",children:[null!==(a=null===r||void 0===r?void 0:r.id)&&void 0!==a?a:"??",": ",u]})})]})}function ge(){return Object(z.jsxs)("form",{action:"https://www.paypal.com/donate",method:"post",target:"_top",children:[Object(z.jsx)("input",{type:"hidden",name:"business",value:"VT6UPHJXTK3N2"}),Object(z.jsx)("input",{type:"hidden",name:"no_recurring",value:"1"}),Object(z.jsx)("input",{type:"hidden",name:"item_name",value:"CGT Calculator Thankyou"}),Object(z.jsx)("input",{type:"hidden",name:"currency_code",value:"AUD"}),Object(z.jsx)("input",{type:"image",src:"https://www.paypalobjects.com/en_AU/i/btn/btn_donate_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}),Object(z.jsx)("img",{alt:"",border:"0",src:"https://www.paypal.com/en_AU/i/scr/pixel.gif",width:"1",height:"1"})]})}var pe=function(){var e="https://github.com/judilsteve/asx-cgt-calculator-optimiser";return Object(z.jsxs)(l.a,{maxWidth:"xl",children:[Object(z.jsx)("br",{}),Object(z.jsx)(o.a,{variant:"h2",children:"ASX CGT Calculator/Optimiser"}),Object(z.jsx)("br",{}),Object(z.jsxs)(o.a,{variant:"h6",children:["This is a simple calculator that helps with record-keeping for your ASX holdings, and calculation of CGT when selling.",Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),"All care has been taken to ensure that the calculations made here are correct and that they conform to ATO requirements (as at 2021-07-10). I trust this calculator enough to use it for record-keeping and CGT calculations of my own portfolio. However, I make no guarantee that the calculator is free from defects and accept no liability for any consequences incurred by you of issues herein. Always check any values calculated here against your own calculations.",Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),"If you find any issues with the calculator, please raise them ",Object(z.jsx)("a",{href:"".concat(e,"/issues"),children:"here"}),".",Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),"If you find this calculator useful, and you want to show your appreciation, you can use the donation link below to shout me a coffee.",Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),Object(z.jsx)(ge,{}),Object(z.jsx)("br",{}),"This calculator is a Single Page Application, or SPA. This means you can save the entire application to your computer right now (press Ctrl+S on your keyboard) so that you still have access too the calculator even if this website disappears from the internet.",Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),"This calculator is also free software licensed under the ",Object(z.jsx)("a",{href:"".concat(e,"/blob/master/LICENSE.md"),children:"Affero GPL"}),". You may view the source code ",Object(z.jsx)("a",{href:e,children:"here"}),". If you wish to use the source code as a basis for your own work, you may do so, but you must adhere to the terms of the original license if you distribute your work.",Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),"Portfolio data is auto-saved to your browser's local storage: Your data does not leave your computer. It is highly recommended that you export a backup of your portfolio data using the buttons below so that your records are not lost if uninstall your browser, clear the local storage, lose your laptop, etc."]}),Object(z.jsx)("br",{}),Object(z.jsx)(de,{}),Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),Object(z.jsx)(o.a,{variant:"h3",children:"Parcels"}),Object(z.jsx)("br",{}),Object(z.jsx)(o.a,{variant:"h6",children:"Enter details of all holdings (past and present) below, including dividend reinvestments."}),Object(z.jsx)("br",{}),Object(z.jsx)(W,{}),Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),Object(z.jsx)(o.a,{variant:"h3",children:"Cost Base Adjustments"}),Object(z.jsx)("br",{}),Object(z.jsx)(o.a,{variant:"h6",children:"Enter details of all cost base adjustments below (e.g. AMIT net adjustments from your annual tax statements)."}),Object(z.jsx)("br",{}),Object(z.jsx)(ce,{}),Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),Object(z.jsx)(o.a,{variant:"h3",children:"Sales"}),Object(z.jsx)("br",{}),Object(z.jsx)(o.a,{variant:"h6",children:"Enter details of all sale events below."}),Object(z.jsx)("br",{}),Object(z.jsx)(Oe,{}),Object(z.jsx)("div",{style:{height:"75vh"}})]})},me=n(19),ye=n(122);c.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(me.a,{utils:ye.a,children:Object(z.jsx)(pe,{})})}),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.5effe26f.chunk.js.map