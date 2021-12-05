(this["webpackJsonpportfolio-tracker"]=this["webpackJsonpportfolio-tracker"]||[]).push([[0],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),c=n.n(i),l=n(194),o=n(63),s=n(17),u=n(8),d=n(168),j=n(172),b=n(140),h=n(174),O=n(141),f=n(175),x=n(176),v=n(177),g=n(206),p=n(188),m=n(189),y=n(173),C=n(178),S=n(179),w=n(180),k=n(181),P=n(190),A=n(191),U=n(196),I=n(19),F=n.n(I),M=n(107),Y=n(106),D=n(14),N=n(81),T=n(94),E=function(){function e(t){Object(N.a)(this,e),this.value=t,this.watchers=[]}return Object(T.a)(e,[{key:"watch",value:function(e){return this.watchers.push(e),this.watchers.length-1}},{key:"removeWatcher",value:function(e){this.watchers.splice(e,1)}},{key:"setValue",value:function(e){this.value=e;var t,n=Object(D.a)(this.watchers);try{for(n.s();!(t=n.n()).done;){(0,t.value)(e)}}catch(a){n.e(a)}finally{n.f()}}}]),e}(),B=new E(!1),L=function(e){var t='WARNING: Changes could not be saved to your browser\'s local storage. Click "cancel" and export your holdings using the buttons at the top of the page or you WILL lose your work.';return(e||window.event).returnValue=t,t},$=!1;function z(){window.removeEventListener("beforeunload",L),$=!1}B.watch((function(e){e&&!$?(window.addEventListener("beforeunload",L),$=!0):!e&&$&&z()}));var J=function(e){Object(M.a)(n,e);var t=Object(Y.a)(n);function n(e,a){var r;Object(N.a)(this,n);var i=window.localStorage.getItem(e),c=null===i?a:JSON.parse(i);return(r=t.call(this,c)).watch((function(t){try{window.localStorage.setItem(e,JSON.stringify(t)),B.setValue(!1)}catch(n){console.error("Saving to local storage failed:"),console.error(n),B.setValue(!0)}})),r}return n}(E);function W(e){var t=Object(a.useState)(e.value),n=Object(u.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){var t=e.watch(i);return function(){return e.removeWatcher(t)}}),[e]),[r,function(t){return e.setValue(t)}]}var G=new J("parcels",[]),X=new J("adjustments",[]),V=new J("sales",[]),_=n(195),R=n(202);function H(e,t,n,a){switch(e.type){case"ACQUISITION":var r=(e.units*e.unitPrice+e.brokerage)/e.units;t[e.id]={id:e.id,date:e.date,memo:e.memo,asxCode:e.asxCode,remainingUnits:e.units,perUnitCostBase:r},null===a||void 0===a||a.push({parcelId:e.id,eventId:e.id,date:e.date,log:"Acquired Parcel ".concat(e.id," with initial cost base of $").concat(r.toFixed(4),"/u.")});break;case"ADJUSTMENT":var i,c=0,l=Object(D.a)(e.applicableParcelIds);try{for(l.s();!(i=l.n()).done;){var o=i.value,s=t[o];if(!s||s.asxCode!==e.asxCode||s.remainingUnits<=0){if(n)throw new Error("Adjustment ".concat(e.id," was applicable to invalid parcel ").concat(o.toFixed(4)))}else c+=s.remainingUnits}}catch(g){l.e(g)}finally{l.f()}if(c<=0)break;var u,d=Object(D.a)(e.applicableParcelIds);try{for(d.s();!(u=d.n()).done;){var j=u.value,b=t[j];if(b){var h=b.remainingUnits/c*100;b.perUnitCostBase+=e.netAmount/c,null===a||void 0===a||a.push({parcelId:j,eventId:e.id,date:e.date,log:"Applied ".concat(h.toFixed(2),"% of a $").concat(e.netAmount," adjustment. New cost base: $").concat(b.perUnitCostBase.toFixed(4),"/u.")})}}}catch(g){d.e(g)}finally{d.f()}break;case"SALE":var O,f=Object(D.a)(e.applicableParcels);try{for(f.s();!(O=f.n()).done;){var x=O.value,v=t[x.id];if(v)v.remainingUnits-=x.unitsSold,null===a||void 0===a||a.push({parcelId:v.id,eventId:e.id,date:e.date,log:"Sold ".concat(x.unitsSold," units. Remaining units: ").concat(v.remainingUnits)});else if(n)throw new Error("Sale ".concat(e.id," was applicable to non-existent parcel ").concat(x.id))}}catch(g){f.e(g)}finally{f.f()}break;default:throw new Error("Unrecognised event type ".concat(e.type))}}function q(e,t,n,a){var r,i={},c=Object(D.a)(e);try{for(c.s();!(r=c.n()).done;){var l=r.value;if(l.id!==a){if(null!==t&&l.date>t)break;H(l,i,n)}}}catch(o){c.e(o)}finally{c.f()}return i}function Q(e,t,n,r){return Object(a.useMemo)((function(){var a=q(e,t,n,r);return Object.values(a).filter((function(e){return e.remainingUnits>0}))}),[e,t,n,r])}var K=n(44);function Z(){var e=W(G),t=Object(u.a)(e,1)[0],n=W(X),r=Object(u.a)(n,1)[0],i=W(V),c=Object(u.a)(i,1)[0];return Object(a.useMemo)((function(){return Object(_.a)([].concat(Object(s.a)(t.map((function(e){return Object(K.a)({type:"ACQUISITION"},e)}))),Object(s.a)(r.map((function(e){return Object(K.a)({type:"ADJUSTMENT"},e)}))),Object(s.a)(c.map((function(e){return Object(K.a)({type:"SALE"},e)})))),[function(e){return e.date},function(e){return"ACQUISITION"===e.type?1:"ADJUSTMENT"===e.type&&e.netAmount>0?2:"SALE"===e.type?3:4}])}),[t,r,c])}var ee=n(1),te="A".charCodeAt(0);function ne(){var e=W(G),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useMemo)((function(){return Object(_.a)(n,(function(e){return e.date}))}),[n]),c=Object(a.useMemo)((function(){var e=Object(R.a)(n.map((function(e){return function(e){for(var t=0,n=0;n<e.length;n++)t*=26,t+=e.charCodeAt(n)-te+1;return t}(e.id)})));if(void 0===e)return"A";for(var t=e+1,a="";t;)a="".concat(String.fromCharCode(te+(t-1)%26)).concat(a),t=Math.floor((t-1)/26);return a}),[n]),l=Object(a.useState)(!1),o=Object(u.a)(l,2),g=o[0],p=o[1],m=g?Object(ee.jsx)(re,{id:c,cancel:function(){return p(!1)},save:function(e){r([].concat(Object(s.a)(n),[e])),p(!1)}}):Object(ee.jsx)(d.a,{children:Object(ee.jsx)(j.a,{align:"right",colSpan:9,children:Object(ee.jsx)(b.a,{onClick:function(){return p(!0)},children:Object(ee.jsx)(y.a,{})})})}),P=Object(a.useState)([]),A=Object(u.a)(P,2),U=A[0],I=A[1],M=function(e){return I(U.filter((function(t){return t!==e})))},Y=function(e){r([].concat(Object(s.a)(n.filter((function(t){return t.id!==e.id}))),[e])),M(e.id)},D=Object(a.useState)([]),N=Object(u.a)(D,2),T=N[0],E=N[1];return Object(ee.jsx)(h.a,{component:O.a,children:Object(ee.jsxs)(f.a,{style:{minWidth:650},size:"small",children:[Object(ee.jsx)(x.a,{children:Object(ee.jsxs)(d.a,{children:[Object(ee.jsx)(j.a,{children:"ID"}),Object(ee.jsx)(j.a,{align:"right",children:"Date Acquired"}),Object(ee.jsx)(j.a,{align:"right",children:"ASX Code"}),Object(ee.jsx)(j.a,{align:"right",children:"Parcel Type"}),Object(ee.jsx)(j.a,{align:"right",children:"Memo"}),Object(ee.jsx)(j.a,{align:"right",children:"Units"}),Object(ee.jsx)(j.a,{align:"right",children:"Unit Price ($/u)"}),Object(ee.jsx)(j.a,{align:"right",children:"Brokerage ($)"}),Object(ee.jsx)(j.a,{align:"right",children:"Actions"})]})}),Object(ee.jsxs)(v.a,{children:[i.map((function(e){return U.includes(e.id)?Object(ee.jsx)(re,{id:e.id,parcel:e,cancel:function(){return M(e.id)},save:Y},e.id):Object(ee.jsxs)(a.Fragment,{children:[Object(ee.jsxs)(d.a,{children:[Object(ee.jsx)(j.a,{component:"th",scope:"row",children:e.id}),Object(ee.jsx)(j.a,{align:"right",children:F()(e.date).format("YYYY-MM-DD")}),Object(ee.jsx)(j.a,{align:"right",children:e.asxCode}),Object(ee.jsx)(j.a,{align:"right",children:e.isDrp?"Dividend Reinvestment":"Purchase"}),Object(ee.jsx)(j.a,{align:"right",children:e.memo}),Object(ee.jsx)(j.a,{align:"right",children:e.units}),Object(ee.jsx)(j.a,{align:"right",children:e.unitPrice}),Object(ee.jsx)(j.a,{align:"right",children:e.brokerage}),Object(ee.jsxs)(j.a,{align:"right",children:[Object(ee.jsx)(b.a,{size:"small",onClick:function(){return t=e.id,T.includes(t)?E(T.filter((function(e){return e!==t}))):E([].concat(Object(s.a)(T),[t]));var t},children:T.includes(e.id)?Object(ee.jsx)(C.a,{}):Object(ee.jsx)(S.a,{})}),Object(ee.jsx)(b.a,{size:"small",onClick:function(){return t=e.id,I([].concat(Object(s.a)(U),[t]));var t},children:Object(ee.jsx)(w.a,{})}),Object(ee.jsx)(b.a,{size:"small",onClick:function(){return r(n.filter((function(t){return t.id!==e.id})))},children:Object(ee.jsx)(k.a,{})})]})]},e.id),T.includes(e.id)&&Object(ee.jsx)(ae,{parcelId:e.id})]},e.id)})),m]})]})})}function ae(e){var t=e.parcelId,n=Z(),r=Object(a.useMemo)((function(){return function(e){var t,n={},a=[],r=Object(D.a)(e);try{for(r.s();!(t=r.n()).done;)H(t.value,n,!1,a)}catch(i){r.e(i)}finally{r.f()}return a}(n).filter((function(e){return e.parcelId===t}))}),[n,t]);return Object(ee.jsx)(ee.Fragment,{children:r.map((function(e){return Object(ee.jsxs)(d.a,{children:[Object(ee.jsx)(j.a,{}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(o.a,{variant:"body2",color:"primary",children:F()(e.date).format("YYYY-MM-DD")})}),Object(ee.jsx)(j.a,{colSpan:6,align:"right",children:Object(ee.jsx)(o.a,{variant:"body2",color:"primary",children:e.log})}),Object(ee.jsx)(j.a,{})]},e.eventId)}))})}function re(e){var t=e.id,n=e.save,r=e.cancel,i=e.parcel,c=Object(a.useState)(null),l=Object(u.a)(c,2),o=l[0],s=l[1],h=Object(a.useState)(""),O=Object(u.a)(h,2),f=O[0],x=O[1],v=Object(a.useState)(!1),y=Object(u.a)(v,2),C=y[0],S=y[1],w=Object(a.useState)(""),k=Object(u.a)(w,2),I=k[0],F=k[1],M=Object(a.useState)(""),Y=Object(u.a)(M,2),D=Y[0],N=Y[1],T=Object(a.useState)(""),E=Object(u.a)(T,2),B=E[0],L=E[1],$=Object(a.useState)(""),z=Object(u.a)($,2),J=z[0],W=z[1];Object(a.useEffect)((function(){var e,t,n,a,r,c,l;s(null!==(e=null===i||void 0===i?void 0:i.date)&&void 0!==e?e:null),x(null!==(t=null===i||void 0===i?void 0:i.asxCode)&&void 0!==t?t:""),S(null!==(n=null===i||void 0===i?void 0:i.isDrp)&&void 0!==n&&n),F(null!==(a=null===i||void 0===i?void 0:i.memo)&&void 0!==a?a:""),N(null!==(r=null===i||void 0===i?void 0:i.units.toString())&&void 0!==r?r:""),L(null!==(c=null===i||void 0===i?void 0:i.unitPrice.toString())&&void 0!==c?c:""),W(null!==(l=null===i||void 0===i?void 0:i.brokerage.toString())&&void 0!==l?l:"")}),[i]);var G=D&&!isNaN(parseFloat(D))&&parseInt(D)===parseFloat(D),X=B&&!isNaN(parseFloat(B)),V=C||J&&!isNaN(parseFloat(J)),_=o&&f&&G&&X&&V;return Object(ee.jsxs)(d.a,{children:[Object(ee.jsx)(j.a,{component:"th",scope:"row",children:t}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(U.a,{disableToolbar:!0,variant:"inline",format:"YYYY-MM-DD",label:"Date",value:o,error:!o,onChange:function(e){return s(e.toJSON())}})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(g.a,{value:f,onChange:function(e){return x(e.target.value)},error:!f,label:"ASX Code"})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(p.a,{control:Object(ee.jsx)(m.a,{color:"primary",checked:C,onChange:function(){return S(!C)}}),label:"Dividend Reinvestment"})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(g.a,{value:I,onChange:function(e){return F(e.target.value)},label:"Memo"})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(g.a,{type:"number",value:D,onChange:function(e){return N(e.target.value)},error:!G,label:"Units"})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(g.a,{type:"number",value:B,onChange:function(e){return L(e.target.value)},error:!X,label:"Unit Price ($/u)"})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(g.a,{type:"number",disabled:C,value:C?"0.00":J,onChange:function(e){return W(e.target.value)},error:!C&&!V,label:"Brokerage ($)"})}),Object(ee.jsxs)(j.a,{align:"right",children:[Object(ee.jsx)(b.a,{onClick:function(){return n({id:t,date:o,asxCode:f,isDrp:C,memo:I,units:parseInt(D),unitPrice:parseFloat(B),brokerage:C?0:parseFloat(J)})},disabled:!_,children:Object(ee.jsx)(P.a,{})}),Object(ee.jsx)(b.a,{onClick:r,children:Object(ee.jsx)(A.a,{})})]})]})}var ie=n(203),ce=n(209),le=n(201),oe=n(193),se=n(192),ue=n(187),de=n(208),je=n(198);function be(e){var t=e.disabled,n=e.error,a=e.value,r=e.onChange,i=e.children,c=e.renderValue,l=e.multiple,o=e.id,s=e.label;return Object(ee.jsxs)(ue.a,{fullWidth:!0,children:[Object(ee.jsx)(de.a,{id:o,children:s}),Object(ee.jsx)(je.a,{MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null},disabled:t,labelId:o,error:n,multiple:l,fullWidth:!0,value:a,onChange:r,renderValue:c,children:i})]})}var he=n(200);function Oe(){var e=W(X),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useMemo)((function(){return Object(_.a)(n,(function(e){return e.date}))}),[n]),c=Object(a.useState)(!1),l=Object(u.a)(c,2),o=l[0],g=l[1],p=o?Object(ee.jsx)(xe,{cancel:function(){return g(!1)},save:function(e){r([].concat(Object(s.a)(n),[e])),g(!1)}}):Object(ee.jsx)(d.a,{children:Object(ee.jsx)(j.a,{align:"right",colSpan:7,children:Object(ee.jsx)(b.a,{onClick:function(){return g(!0)},children:Object(ee.jsx)(y.a,{})})})}),m=Object(a.useState)([]),P=Object(u.a)(m,2),A=P[0],U=P[1],I=function(e){return U(A.filter((function(t){return t!==e})))},M=function(e){r([].concat(Object(s.a)(n.filter((function(t){return t.id!==e.id}))),[e])),I(e.id)},Y=Z(),N=Object(a.useMemo)((function(){var e,t={},a=Object(D.a)(n);try{for(a.s();!(e=a.n()).done;){var r,i=e.value,c=[],l=q(Y,i.date,!1),o=Object(D.a)(i.applicableParcelIds);try{for(o.s();!(r=o.n()).done;){var s=r.value,u=l[s];void 0!==u?u.asxCode!==i.asxCode?c.push("Parcel ".concat(s," has the wrong ASX Code.")):u.remainingUnits<=0&&c.push("Parcel ".concat(s," was entirely sold before the adjustment date.")):c.push("Parcel ".concat(s," did not exist at the adjustment date."))}}catch(d){o.e(d)}finally{o.f()}t[i.id]=c}}catch(d){a.e(d)}finally{a.f()}return t}),[Y,n]),T=Object(a.useState)([]),E=Object(u.a)(T,2),B=E[0],L=E[1];return Object(ee.jsx)(h.a,{component:O.a,children:Object(ee.jsxs)(f.a,{style:{minWidth:650},size:"small",children:[Object(ee.jsx)(x.a,{children:Object(ee.jsxs)(d.a,{children:[Object(ee.jsx)(j.a,{}),Object(ee.jsx)(j.a,{align:"right",children:"Date"}),Object(ee.jsx)(j.a,{align:"right",children:"ASX Code"}),Object(ee.jsx)(j.a,{align:"right",children:"Applicable Parcels"}),Object(ee.jsx)(j.a,{align:"right",children:"Memo"}),Object(ee.jsx)(j.a,{align:"right",children:"Net Amount ($)"}),Object(ee.jsx)(j.a,{align:"right",children:"Actions"})]})}),Object(ee.jsxs)(v.a,{children:[i.map((function(e){return A.includes(e.id)?Object(ee.jsx)(xe,{id:e.id,adjustment:e,cancel:function(){return I(e.id)},save:M},e.id):Object(ee.jsxs)(a.Fragment,{children:[Object(ee.jsxs)(d.a,{children:[Object(ee.jsx)(j.a,{children:N[e.id].length?N[e.id].map((function(e){return Object(ee.jsx)(ie.a,{title:e,children:Object(ee.jsx)(se.a,{color:"error"})},e)})):Object(ee.jsx)(ee.Fragment,{})}),Object(ee.jsx)(j.a,{align:"right",children:F()(e.date).format("YYYY-MM-DD")}),Object(ee.jsx)(j.a,{align:"right",children:e.asxCode}),Object(ee.jsx)(j.a,{align:"right",children:e.applicableParcelIds.join(", ")}),Object(ee.jsx)(j.a,{align:"right",children:e.memo}),Object(ee.jsx)(j.a,{align:"right",children:e.netAmount}),Object(ee.jsxs)(j.a,{align:"right",children:[Object(ee.jsx)(b.a,{size:"small",onClick:function(){return t=e.id,B.includes(t)?L(B.filter((function(e){return e!==t}))):L([].concat(Object(s.a)(B),[t]));var t},children:B.includes(e.id)?Object(ee.jsx)(C.a,{}):Object(ee.jsx)(S.a,{})}),Object(ee.jsx)(b.a,{size:"small",onClick:function(){return t=e.id,U([].concat(Object(s.a)(A),[t]));var t},children:Object(ee.jsx)(w.a,{})}),Object(ee.jsx)(b.a,{size:"small",onClick:function(){return r(n.filter((function(t){return t.id!==e.id})))},children:Object(ee.jsx)(k.a,{})})]})]}),B.includes(e.id)&&Object(ee.jsx)(fe,{adjustment:e})]},e.id)})),p]})]})})}function fe(e){var t=e.adjustment,n=Z(),r=Object(a.useMemo)((function(){var e,a=q(n,t.date,!1,t.id),r=[],i=["Adjustment is invalid. Fix issues to see further information."],c=0,l=Object(D.a)(t.applicableParcelIds);try{for(l.s();!(e=l.n()).done;){var o=a[e.value];if(!o||o.asxCode!==t.asxCode||o.remainingUnits<0)return i;c+=o.remainingUnits}}catch(O){l.e(O)}finally{l.f()}if(c<=0)return i;r.push("Adjustment applies to a total of ".concat(c," units."));var s,u=Object(D.a)(t.applicableParcelIds);try{for(u.s();!(s=u.n()).done;){var d=a[s.value];if(!d||d.asxCode!==t.asxCode||d.remainingUnits<0)return i;var j=d.remainingUnits/c*100,b="".concat(j.toFixed(2),"% of adjustment applied to parcel ").concat(d.id," (").concat(d.remainingUnits," remaining units). "),h=d.perUnitCostBase+t.netAmount/c;b+="Cost base of parcel was ".concat(t.netAmount>0?"raised":"lowered"," from $").concat(d.perUnitCostBase.toFixed(4),"/u to $").concat(h.toFixed(4),"/u."),r.push(b)}}catch(O){u.e(O)}finally{u.f()}return r}),[n,t]);return Object(ee.jsx)(ee.Fragment,{children:r.map((function(e){return Object(ee.jsxs)(d.a,{children:[Object(ee.jsx)(j.a,{}),Object(ee.jsx)(j.a,{colSpan:5,align:"right",children:Object(ee.jsx)(o.a,{variant:"body2",color:"primary",children:e})}),Object(ee.jsx)(j.a,{})]},e)}))})}function xe(e){var t=e.id,n=e.save,r=e.cancel,i=e.adjustment,c=Object(a.useState)(null),l=Object(u.a)(c,2),o=l[0],s=l[1],h=Object(a.useState)(null),O=Object(u.a)(h,2),f=O[0],x=O[1],v=Object(a.useState)([]),p=Object(u.a)(v,2),m=p[0],y=p[1],C=Object(a.useState)(""),S=Object(u.a)(C,2),w=S[0],k=S[1],I=Object(a.useState)(""),M=Object(u.a)(I,2),Y=M[0],D=M[1];Object(a.useEffect)((function(){var e,t,n,a,r;s(null!==(e=null===i||void 0===i?void 0:i.date)&&void 0!==e?e:null),x(null!==(t=null===i||void 0===i?void 0:i.asxCode)&&void 0!==t?t:null),y(null!==(n=null===i||void 0===i?void 0:i.applicableParcelIds)&&void 0!==n?n:[]),k(null!==(a=null===i||void 0===i?void 0:i.memo)&&void 0!==a?a:""),D(null!==(r=null===i||void 0===i?void 0:i.netAmount.toString())&&void 0!==r?r:"")}),[i]);var N=Y&&!isNaN(parseFloat(Y)),T=o&&m.length&&N,E=Q(Z(),o,!1),B=Object(a.useMemo)((function(){return E.filter((function(e){return!f||e.asxCode===f}))}),[E,f]);return Object(a.useEffect)((function(){y((function(e){return e.filter((function(e){return B.find((function(t){return t.id===e&&(!f||t.asxCode===f)}))}))}))}),[B,f]),Object(ee.jsxs)(d.a,{children:[Object(ee.jsx)(j.a,{}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(U.a,{disableToolbar:!0,variant:"inline",format:"YYYY-MM-DD",label:"Date",value:o,error:!o,onChange:function(e){return s(e.toJSON())}})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(g.a,{value:f,onChange:function(e){return x(e.target.value)},label:"ASX Code"})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(be,{disabled:!o||!B.length,id:"applicable-parcel-select",label:"Applicable Parcels",error:!m.length,multiple:!0,value:m,onChange:function(e){return y(e.target.value)},renderValue:function(e){return e.join(", ")},children:B.map((function(e){return Object(ee.jsxs)(ce.a,{value:e.id,children:[Object(ee.jsx)(le.a,{color:"primary",checked:m.includes(e.id)}),Object(ee.jsx)(oe.a,{primary:"".concat(e.id).concat(e.memo?": "+e.memo:""),secondary:"".concat(e.remainingUnits,"x ").concat(e.asxCode,", acquired ").concat(F()(e.date).format("YYYY-MM-DD"))})]},e.id)}))})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(g.a,{value:w,onChange:function(e){return k(e.target.value)},label:"Memo"})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(g.a,{type:"number",value:Y,onChange:function(e){return D(e.target.value)},error:!N,label:"Net Amount ($)"})}),Object(ee.jsxs)(j.a,{align:"right",children:[Object(ee.jsx)(b.a,{onClick:function(){return n({id:null!==t&&void 0!==t?t:Object(he.a)(),date:o,asxCode:f,applicableParcelIds:m,memo:w,netAmount:parseFloat(Y)})},disabled:!T,children:Object(ee.jsx)(P.a,{})}),Object(ee.jsx)(b.a,{onClick:r,children:Object(ee.jsx)(A.a,{})})]})]})}var ve=n(83),ge=n.n(ve),pe=n(102),me=n(183);function ye(){var e=W(G),t=Object(u.a)(e,2),n=t[0],r=t[1],i=W(X),c=Object(u.a)(i,2),l=c[0],s=c[1],d=W(V),j=Object(u.a)(d,2),b=j[0],h=j[1],O=Object(a.useState)(null),f=Object(u.a)(O,2),x=f[0],v=f[1],g=Object(a.useState)(null),p=Object(u.a)(g,2),m=p[0],y=p[1],C=function(){var e=Object(pe.a)(ge.a.mark((function e(t){var n;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("WARNING: Importing this file will completely and irreversibly replace any data currently entered. Continue?")){e.next=2;break}return e.abrupt("return");case 2:return v(null),y(null),e.prev=4,e.t0=JSON,e.next=8,t[0].text();case 8:e.t1=e.sent,n=e.t0.parse.call(e.t0,e.t1),e.next=16;break;case 12:throw e.prev=12,e.t2=e.catch(4),v("File was not valid JSON. Ensure that you have selected the correct file and try again."),e.t2;case 16:if(n.parcels&&n.adjustments&&n.sales){e.next=19;break}return v("File appears malformed. Ensure that you have selected the correct file and try again."),e.abrupt("return");case 19:r(n.parcels),s(n.adjustments),h(n.sales),y("Import successful"),setTimeout((function(){return y(null)}),3e4);case 24:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),S=Object(a.useRef)(null);return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)("input",{ref:S,onChange:function(e){return C(e.target.files)},accept:"application/json",style:{display:"none"},id:"import-file-input",type:"file"}),Object(ee.jsx)("label",{htmlFor:"import-file-input",children:Object(ee.jsx)(me.a,{onClick:function(){var e;return null===(e=S.current)||void 0===e?void 0:e.click()},variant:"contained",color:"primary",children:"Import Holdings"})}),Object(ee.jsx)(me.a,{onClick:function(){var e=new Blob([JSON.stringify({parcels:n,adjustments:l,sales:b})]),t=URL.createObjectURL(e),a=document.createElement("a");a.href=t;var r=F()();a.download="Holdings_".concat(r.format("YYYY-MM-DD_THH-mm-ss"),".json"),document.body.appendChild(a),a.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),document.body.removeChild(a),z()},style:{margin:10},variant:"contained",color:"primary",children:"Export Holdings"}),!x&&!m&&Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)("br",{}),Object(ee.jsx)(o.a,{color:"textSecondary",variant:"body2",children:"NOTE: Importing holdings will completely and irreversibly replace any data currently entered"})]}),x&&Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)("br",{}),Object(ee.jsx)(o.a,{color:"error",variant:"body2",children:x})]}),m&&Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)("br",{}),Object(ee.jsx)(o.a,{color:"textSecondary",variant:"body2",children:m})]})]})}function Ce(e,t,n){return n>0&&F()(e).diff(F()(t),"year",!0)>1&&(n/=2),n}function Se(e){var t,n=0,a=0,r=Object(D.a)(e.applicableParcels);try{for(r.s();!(t=r.n()).done;){a+=t.value.unitsSold}}catch(s){r.e(s)}finally{r.f()}var i,c=Object(D.a)(e.applicableParcels);try{for(c.s();!(i=c.n()).done;){var l=i.value,o=e.unitPrice*l.unitsSold;o-=l.unitsSold*l.perUnitCostBase,o-=e.brokerage*(l.unitsSold/a),n+=Ce(e.date,l.date,o)}}catch(s){c.e(s)}finally{c.f()}return n}function we(){var e=W(V),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Z(),c=Object(a.useMemo)((function(){var e,t=[],n={},a={},r=Object(D.a)(i);try{for(r.s();!(e=r.n()).done;){var c=e.value;if("SALE"===c.type){var l,o={errors:[],applicableParcels:[]},s=Object(D.a)(c.applicableParcels);try{for(s.s();!(l=s.n()).done;){var u,d=l.value,j=a[d.id];j?j.asxCode!==c.asxCode?o.errors.push("Parcel ".concat(d.id," has the wrong ASX Code")):j.remainingUnits<d.unitsSold&&o.errors.push("Parcel ".concat(d.id," does not have enough remaining units to complete sale")):o.errors.push("Parcel ".concat(d.id," did not exist at the sale date")),o.applicableParcels.push(Object(K.a)(Object(K.a)({},d),{},{unitsAvailable:null!==(u=null===j||void 0===j?void 0:j.remainingUnits)&&void 0!==u?u:"??"}))}}catch(b){s.e(b)}finally{s.f()}o.cgtLiability=o.errors.length?null:Se({unitPrice:c.unitPrice,date:c.date,brokerage:c.brokerage,applicableParcels:o.applicableParcels.map((function(e){return{date:a[e.id].date,perUnitCostBase:a[e.id].perUnitCostBase,unitsSold:e.unitsSold}}))}),t.push(c),n[c.id]=o}H(c,a,!1)}}catch(b){r.e(b)}finally{r.f()}return{orderedSales:t,saleDataLookup:n}}),[i]),l=c.orderedSales,g=c.saleDataLookup,p=Object(a.useState)(!1),m=Object(u.a)(p,2),P=m[0],A=m[1],U=P?Object(ee.jsx)(Pe,{cancel:function(){return A(!1)},save:function(e){r([].concat(Object(s.a)(n),[e])),A(!1)},allEventsOrdered:i}):Object(ee.jsx)(d.a,{children:Object(ee.jsx)(j.a,{align:"right",colSpan:9,children:Object(ee.jsx)(b.a,{onClick:function(){return A(!0)},children:Object(ee.jsx)(y.a,{})})})}),I=Object(a.useState)([]),M=Object(u.a)(I,2),Y=M[0],N=M[1],T=function(e){return N(Y.filter((function(t){return t!==e})))},E=function(e){r([].concat(Object(s.a)(n.filter((function(t){return t.id!==e.id}))),[e])),T(e.id)},B=Object(a.useState)([]),L=Object(u.a)(B,2),$=L[0],z=L[1];return Object(ee.jsx)(h.a,{component:O.a,children:Object(ee.jsxs)(f.a,{style:{minWidth:650},size:"small",children:[Object(ee.jsx)(x.a,{children:Object(ee.jsxs)(d.a,{children:[Object(ee.jsx)(j.a,{}),Object(ee.jsx)(j.a,{align:"right",children:"Date"}),Object(ee.jsx)(j.a,{align:"right",children:"ASX Code"}),Object(ee.jsx)(j.a,{align:"right",children:"Applicable Parcels"}),Object(ee.jsx)(j.a,{align:"right",children:"Memo"}),Object(ee.jsx)(j.a,{align:"right",children:"Unit Price ($/u)"}),Object(ee.jsx)(j.a,{align:"right",children:"Brokerage ($)"}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(o.a,{variant:"body2",color:"primary",children:"CGT Liability ($)"})}),Object(ee.jsx)(j.a,{align:"right",children:"Actions"})]})}),Object(ee.jsxs)(v.a,{children:[l.map((function(e){var t,c;return Y.includes(e.id)?Object(ee.jsx)(Pe,{id:e.id,sale:e,cancel:function(){return T(e.id)},save:E,allEventsOrdered:i},e.id):Object(ee.jsxs)(a.Fragment,{children:[Object(ee.jsxs)(d.a,{children:[Object(ee.jsx)(j.a,{children:g[e.id].errors.length?g[e.id].errors.map((function(e){return Object(ee.jsx)(ie.a,{title:e,children:Object(ee.jsx)(se.a,{color:"error"})},e)})):Object(ee.jsx)(ee.Fragment,{})}),Object(ee.jsx)(j.a,{align:"right",children:F()(e.date).format("YYYY-MM-DD")}),Object(ee.jsx)(j.a,{align:"right",children:e.asxCode}),Object(ee.jsx)(j.a,{align:"right",children:g[e.id].applicableParcels.map((function(e){return"".concat(e.id," (").concat(e.unitsSold,"/").concat(e.unitsAvailable,")")})).join(", ")}),Object(ee.jsx)(j.a,{align:"right",children:e.memo}),Object(ee.jsx)(j.a,{align:"right",children:e.unitPrice}),Object(ee.jsx)(j.a,{align:"right",children:e.brokerage}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(o.a,{variant:"body2",color:"primary",children:null!==(t=null===(c=g[e.id].cgtLiability)||void 0===c?void 0:c.toFixed(4))&&void 0!==t?t:"??"})}),Object(ee.jsxs)(j.a,{align:"right",children:[Object(ee.jsx)(b.a,{size:"small",onClick:function(){return t=e.id,$.includes(t)?z($.filter((function(e){return e!==t}))):z([].concat(Object(s.a)($),[t]));var t},children:$.includes(e.id)?Object(ee.jsx)(C.a,{}):Object(ee.jsx)(S.a,{})}),Object(ee.jsx)(b.a,{size:"small",onClick:function(){return t=e.id,N([].concat(Object(s.a)(Y),[t]));var t},children:Object(ee.jsx)(w.a,{})}),Object(ee.jsx)(b.a,{size:"small",onClick:function(){return r(n.filter((function(t){return t.id!==e.id})))},children:Object(ee.jsx)(k.a,{})})]})]},e.id),$.includes(e.id)&&Object(ee.jsx)(ke,{sale:e})]},e.id)})),U]})]})})}function ke(e){var t=e.sale,n=Z(),r=Object(a.useMemo)((function(){var e,a=q(n,t.date,!1,t.id),r=[],i=["Sale is invalid. Fix issues to see further information."],c=0,l=Object(D.a)(t.applicableParcels);try{for(l.s();!(e=l.n()).done;){var o=e.value,s=a[o.id];if(!s||s.asxCode!==t.asxCode||o.unitsSold>s.remainingUnits)return i;c+=o.unitsSold}}catch(v){l.e(v)}finally{l.f()}if(c<=0)return i;r.push("Sale applies to a total of ".concat(c," units."));var u,d=Object(D.a)(t.applicableParcels);try{for(d.s();!(u=d.n()).done;){var j=u.value,b=a[j.id];if(!b||b.asxCode!==t.asxCode||j.unitsSold>b.remainingUnits)return i;var h="".concat(j.unitsSold,"x ").concat(b.id," ($").concat(b.perUnitCostBase.toFixed(4),"/u CB): "),O=j.unitsSold/c*100,f=b.perUnitCostBase+t.brokerage/c;h+="".concat(O.toFixed(2),"% of brokerage added to CB at sale date. Final CB $").concat(f.toFixed(4),"/u. ");var x=(t.unitPrice-f)*j.unitsSold;h+="Total capital gains: $".concat(x.toFixed(2)),F()(t.date).diff(F()(b.date),"year",!0)>1&&(x/=2,h+=", discounted by 50% since parcel was >1yr old"),h+=". Final CGT Liability: $".concat(x.toFixed(2),"."),r.push(h)}}catch(v){d.e(v)}finally{d.f()}return r}),[n,t]);return Object(ee.jsx)(ee.Fragment,{children:r.map((function(e){return Object(ee.jsxs)(d.a,{children:[Object(ee.jsx)(j.a,{}),Object(ee.jsx)(j.a,{colSpan:7,align:"right",children:Object(ee.jsx)(o.a,{variant:"body2",color:"primary",children:e})}),Object(ee.jsx)(j.a,{})]},e)}))})}function Pe(e){var t,n,r=e.id,i=e.save,c=e.cancel,l=e.sale,s=e.allEventsOrdered,h=Object(a.useState)(null),O=Object(u.a)(h,2),f=O[0],x=O[1],v=Object(a.useState)(""),p=Object(u.a)(v,2),m=p[0],y=p[1],C=Object(a.useState)([]),S=Object(u.a)(C,2),w=S[0],k=S[1],I=Object(a.useState)(""),F=Object(u.a)(I,2),M=F[0],Y=F[1],N=Object(a.useState)(""),T=Object(u.a)(N,2),E=T[0],B=T[1],L=Object(a.useState)(""),$=Object(u.a)(L,2),z=$[0],J=$[1],W=Object(a.useState)({}),G=Object(u.a)(W,2),X=G[0],V=G[1];Object(a.useEffect)((function(){var e,t,n,a,r,i,c;x(null!==(e=null===l||void 0===l?void 0:l.date)&&void 0!==e?e:null),y(null!==(t=null===l||void 0===l?void 0:l.asxCode)&&void 0!==t?t:""),k(null!==(n=null===l||void 0===l?void 0:l.applicableParcels.map((function(e){return e.id})))&&void 0!==n?n:[]),Y(null!==(a=null===l||void 0===l?void 0:l.memo)&&void 0!==a?a:""),B(null!==(r=null===l||void 0===l?void 0:l.unitPrice.toString())&&void 0!==r?r:""),J(null!==(i=null===l||void 0===l?void 0:l.brokerage.toString())&&void 0!==i?i:"");var o,s={},u=Object(D.a)(null!==(c=null===l||void 0===l?void 0:l.applicableParcels)&&void 0!==c?c:[]);try{for(u.s();!(o=u.n()).done;){var d=o.value;s[d.id]=d.unitsSold.toString()}}catch(j){u.e(j)}finally{u.f()}V(s)}),[l]);var R=Q(s,f,!1,r),H=Object(a.useMemo)((function(){return m?R.filter((function(e){return e.asxCode===m})):R}),[R,m]),q=Object(a.useMemo)((function(){var e,t={},n=Object(D.a)(H);try{for(n.s();!(e=n.n()).done;){var a=e.value;t[a.id]=a}}catch(r){n.e(r)}finally{n.f()}return t}),[H]),Z=!w.find((function(e){return!Ae(q[e],X[e])})),te=E&&!isNaN(parseFloat(E)),ne=z&&!isNaN(parseFloat(z)),ae=f&&w.length&&te&&ne&&m&&Z,re=te&&f&&Z,ie=Object(a.useMemo)((function(){var e={};if(!re)return{};var t,n=parseFloat(E),a=Object(D.a)(H);try{for(a.s();!(t=a.n()).done;){var r=t.value,i=n-r.perUnitCostBase;e[r.id]=Ce(f,r.date,i)}}catch(c){a.e(c)}finally{a.f()}return e}),[E,f,H,re]),se=Object(a.useMemo)((function(){return Object(_.a)(H,(function(e){return ie[e.id]}))}),[H,ie]),ue=null;re&&ne&&(ue=Se({unitPrice:parseFloat(E),date:f,brokerage:parseFloat(z),applicableParcels:w.map((function(e){return{date:q[e].date,perUnitCostBase:q[e].perUnitCostBase,unitsSold:parseInt(X[e])}}))}));var de=Object(a.useCallback)((function(e){V((function(t){var n,a={},r=Object(D.a)(e);try{for(r.s();!(n=r.n()).done;){var i,c=n.value;a[c]=null!==(i=t[c])&&void 0!==i?i:q[c].remainingUnits}}catch(l){r.e(l)}finally{r.f()}return a}))}),[q]);Object(a.useEffect)((function(){k((function(e){var t=e.filter((function(e){return se.find((function(t){return t.id===e}))}));return de(t),t}))}),[se,de]);return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)(d.a,{children:[Object(ee.jsx)(j.a,{}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(U.a,{disableToolbar:!0,variant:"inline",format:"YYYY-MM-DD",label:"Date",value:f,error:!f,onChange:function(e){return x(e.toJSON())}})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(g.a,{value:m,onChange:function(e){return y(e.target.value)},label:"ASX Code",error:!m})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(be,{disabled:!f||!se.length||!m,labelId:"applicable-parcel-select",label:"Applicable Parcels",error:!w.length,multiple:!0,fullWidth:!0,value:w,onChange:function(e){return t=e.target.value,k(t),void de(t);var t},renderValue:function(e){return e.map((function(e){return e})).join(", ")},children:se.map((function(e){var t,n;return Object(ee.jsxs)(ce.a,{value:e.id,children:[Object(ee.jsx)(le.a,{color:"primary",checked:!!w.includes(e.id)}),Object(ee.jsx)(oe.a,{primary:"".concat(e.id).concat(e.memo?": "+e.memo:""),secondary:"".concat(e.remainingUnits," available, $").concat(null!==(t=null===(n=ie[e.id])||void 0===n?void 0:n.toFixed(4))&&void 0!==t?t:"??","/u CGT")})]},e.id)}))})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(g.a,{value:M,onChange:function(e){return Y(e.target.value)},label:"Memo"})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(g.a,{type:"number",value:E,onChange:function(e){return B(e.target.value)},error:!te,label:"Unit Price ($/u)"})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(g.a,{type:"number",value:z,onChange:function(e){return J(e.target.value)},error:!ne,label:"Brokerage ($)"})}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsxs)(o.a,{variant:"body2",color:"primary",children:["Total: ",null!==(t=null===(n=ue)||void 0===n?void 0:n.toFixed(4))&&void 0!==t?t:"??"]})}),Object(ee.jsxs)(j.a,{align:"right",rowSpan:w.length+1,children:[Object(ee.jsx)(b.a,{onClick:function(){return i({id:null!==r&&void 0!==r?r:Object(he.a)(),date:f,asxCode:m,applicableParcels:w.map((function(e){return{id:e,unitsSold:parseInt(X[e])}})),memo:M,unitPrice:parseFloat(E),brokerage:parseFloat(z)})},disabled:!ae,children:Object(ee.jsx)(P.a,{})}),Object(ee.jsx)(b.a,{onClick:c,children:Object(ee.jsx)(A.a,{})})]})]}),w.map((function(e){return Object(ee.jsx)(Ue,{parcel:q[e],perUnitCgtLiability:ie[e],unitsSold:X[e],setUnitsSold:function(t){return function(e,t){var n=Object(K.a)({},X);n[e]=t,V(n)}(e,t)}},e)}))]})}function Ae(e,t){var n;if(!t)return!1;var a=parseFloat(t);if(isNaN(a))return!1;var r=parseInt(t);return r===a&&(!(r>(null!==(n=null===e||void 0===e?void 0:e.remainingUnits)&&void 0!==n?n:0))&&!(r<=0))}function Ue(e){var t,n,a,r=e.parcel,i=e.perUnitCgtLiability,c=e.unitsSold,l=e.setUnitsSold,s=Ae(r,c),u=void 0!==i&&s?(i*parseInt(c)).toFixed(4):"??";return Object(ee.jsxs)(d.a,{children:[Object(ee.jsx)(j.a,{}),Object(ee.jsx)(j.a,{}),Object(ee.jsx)(j.a,{}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsx)(g.a,{type:"number",value:c,onChange:function(e){return l(e.target.value)},error:!s,label:"Units of ".concat(null!==(t=null===r||void 0===r?void 0:r.id)&&void 0!==t?t:"??"),helperText:"".concat(null!==(n=null===r||void 0===r?void 0:r.remainingUnits)&&void 0!==n?n:"??"," available")})}),Object(ee.jsx)(j.a,{}),Object(ee.jsx)(j.a,{}),Object(ee.jsx)(j.a,{}),Object(ee.jsx)(j.a,{align:"right",children:Object(ee.jsxs)(o.a,{variant:"body2",color:"primary",children:[null!==(a=null===r||void 0===r?void 0:r.id)&&void 0!==a?a:"??",": ",u]})})]})}function Ie(){return Object(ee.jsxs)("form",{action:"https://www.paypal.com/donate",method:"post",target:"_top",children:[Object(ee.jsx)("input",{type:"hidden",name:"business",value:"VT6UPHJXTK3N2"}),Object(ee.jsx)("input",{type:"hidden",name:"no_recurring",value:"1"}),Object(ee.jsx)("input",{type:"hidden",name:"item_name",value:"CGT Calculator Thankyou"}),Object(ee.jsx)("input",{type:"hidden",name:"currency_code",value:"AUD"}),Object(ee.jsx)("input",{type:"image",src:"https://www.paypalobjects.com/en_AU/i/btn/btn_donate_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}),Object(ee.jsx)("img",{alt:"",border:"0",src:"https://www.paypal.com/en_AU/i/scr/pixel.gif",width:"1",height:"1"})]})}var Fe=n(204),Me=n(199);function Ye(){var e=W(B),t=Object(u.a)(e,1)[0],n=Object(a.useState)(!1),r=Object(u.a)(n,2),i=r[0],c=r[1],l=Object(a.useRef)(!0);Object(a.useEffect)((function(){l.current||c(!0),l.current=!1}),[t,l]);var o=function(){return c(!1)};return Object(ee.jsx)(Fe.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:i,onClose:o,autoHideDuration:t?null:6e3,color:t?"error":"primary",children:Object(ee.jsx)(Me.a,{severity:t?"warning":"success",onClose:o,variant:"filled",children:t?"Changes could not be saved to your browser's local storage. Storage may be full or disabled by private browsing modes. You MUST manually export your holdings using the buttons at the top of the page or you WILL lose your work.":"Changes saved to local storage successfully."})})}var De=function(){var e="https://github.com/judilsteve/asx-cgt-calculator-optimiser";return Object(ee.jsxs)(l.a,{maxWidth:"xl",children:[Object(ee.jsx)("br",{}),Object(ee.jsx)(o.a,{variant:"h2",children:"ASX CGT Calculator/Optimiser"}),Object(ee.jsx)("br",{}),Object(ee.jsxs)(o.a,{variant:"h6",children:["This is a simple calculator that helps with record-keeping for your ASX holdings, and calculation of CGT when selling.",Object(ee.jsx)("br",{}),Object(ee.jsx)("br",{}),"All care has been taken to ensure that the calculations made here are correct and that they conform to ATO requirements (as at 2021-07-10). I trust this calculator enough to use it for record-keeping and CGT calculations of my own portfolio. However, I make no guarantee that the calculator is free from defects and accept no liability for any consequences incurred by you of issues herein. Always check any values calculated here against your own calculations.",Object(ee.jsx)("br",{}),Object(ee.jsx)("br",{}),"If you find any issues with the calculator, please raise them ",Object(ee.jsx)("a",{href:"".concat(e,"/issues"),children:"here"}),".",Object(ee.jsx)("br",{}),Object(ee.jsx)("br",{}),"If you find this calculator useful, and you want to show your appreciation, you can use the donation link below to shout me a coffee.",Object(ee.jsx)("br",{}),Object(ee.jsx)("br",{}),Object(ee.jsx)(Ie,{}),Object(ee.jsx)("br",{}),"This calculator is a Single Page Application, or SPA. This means you can save the entire application to your computer right now (press Ctrl+S on your keyboard) so that you still have access to the calculator even if this website disappears from the internet.",Object(ee.jsx)("br",{}),Object(ee.jsx)("br",{}),"This calculator is also free software licensed under the ",Object(ee.jsx)("a",{href:"".concat(e,"/blob/master/COPYING.md"),children:"Affero GPL"}),". You may view the source code ",Object(ee.jsx)("a",{href:e,children:"here"}),". If you wish to use the source code as a basis for your own work, you may do so, but you must adhere to the terms of the original license if you distribute your work.",Object(ee.jsx)("br",{}),Object(ee.jsx)("br",{}),"Portfolio data is auto-saved to your browser's local storage: Your data does not leave your computer. It is highly recommended that you export a backup of your portfolio data using the buttons below so that your records are not lost if uninstall your browser, clear the local storage, lose your laptop, etc."]}),Object(ee.jsx)("br",{}),Object(ee.jsx)(ye,{}),Object(ee.jsx)("br",{}),Object(ee.jsx)("br",{}),Object(ee.jsx)(o.a,{variant:"h3",children:"Parcels"}),Object(ee.jsx)("br",{}),Object(ee.jsx)(o.a,{variant:"h6",children:"Enter details of all holdings (past and present) below, including dividend reinvestments."}),Object(ee.jsx)("br",{}),Object(ee.jsx)(ne,{}),Object(ee.jsx)("br",{}),Object(ee.jsx)("br",{}),Object(ee.jsx)(o.a,{variant:"h3",children:"Cost Base Adjustments"}),Object(ee.jsx)("br",{}),Object(ee.jsx)(o.a,{variant:"h6",children:"Enter details of all cost base adjustments below (e.g. AMIT net adjustments from your annual tax statements)."}),Object(ee.jsx)("br",{}),Object(ee.jsx)(Oe,{}),Object(ee.jsx)("br",{}),Object(ee.jsx)("br",{}),Object(ee.jsx)(o.a,{variant:"h3",children:"Sales"}),Object(ee.jsx)("br",{}),Object(ee.jsx)(o.a,{variant:"h6",children:"Enter details of all sale events below."}),Object(ee.jsx)("br",{}),Object(ee.jsx)(we,{}),Object(ee.jsx)("div",{style:{height:"75vh"}}),Object(ee.jsx)(Ye,{})]})},Ne=n(20),Te=n(103);c.a.render(Object(ee.jsx)(r.a.StrictMode,{children:Object(ee.jsx)(Ne.a,{utils:Te.a,children:Object(ee.jsx)(De,{})})}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.96ac8fdd.chunk.js.map