import{S as W,i as X,s as Z,a0 as se,a1 as le,m as T,h,n as a,b as C,C as b,A as L,k as E,q as ie,a as I,l as j,r as ae,c as R,u as Ee,a2 as Q,D as ue,G as U,H as A,v as G,w as V,x as H,I as D,g as je,t as N,d as qe,f as P,y as z,E as Te,P as ye,F as Ie,Q as Re}from"../../../chunks/index-401b77de.js";import{g as Le}from"../../../chunks/navigation-0043ce27.js";import{a as Ce}from"../../../chunks/index-6203779a.js";import"../../../chunks/singletons-5ba46942.js";function Fe(n){let e,t,u;return{c(){e=se("svg"),t=se("circle"),u=se("path"),this.h()},l(s){e=le(s,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0});var l=T(e);t=le(l,"circle",{class:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0}),T(t).forEach(h),u=le(l,"path",{class:!0,fill:!0,d:!0}),T(u).forEach(h),l.forEach(h),this.h()},h(){a(t,"class","opacity-25"),a(t,"cx","12"),a(t,"cy","12"),a(t,"r","10"),a(t,"stroke","currentColor"),a(t,"stroke-width","4"),a(u,"class","opacity-75"),a(u,"fill","currentColor"),a(u,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),a(e,"class","animate-spin h-5 w-5 text-white"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"fill","none"),a(e,"viewBox","0 0 24 24")},m(s,l){C(s,e,l),b(e,t),b(e,u)},p:L,i:L,o:L,d(s){s&&h(e)}}}class Ne extends W{constructor(e){super(),X(this,e,null,Fe,Z,{})}}function he(n){let e,t,u,s;return{c(){e=E("input"),this.h()},l(l){e=j(l,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),this.h()},h(){a(e,"class",t=`transistion duration-[250ms] outline-none rounded-sm self-start w-full max-w-full py-3 px-5 font-medium bg-white focus:drop-shadow-md md:flex-1 ${n[4]&&"h-32"}`),a(e,"type","text"),a(e,"name",n[1]),a(e,"id",n[1]),a(e,"placeholder",n[3]),e.required=n[5]},m(l,i){C(l,e,i),Q(e,n[0]),u||(s=ue(e,"input",n[6]),u=!0)},p(l,i){i&16&&t!==(t=`transistion duration-[250ms] outline-none rounded-sm self-start w-full max-w-full py-3 px-5 font-medium bg-white focus:drop-shadow-md md:flex-1 ${l[4]&&"h-32"}`)&&a(e,"class",t),i&2&&a(e,"name",l[1]),i&2&&a(e,"id",l[1]),i&8&&a(e,"placeholder",l[3]),i&32&&(e.required=l[5]),i&1&&e.value!==l[0]&&Q(e,l[0])},d(l){l&&h(e),u=!1,s()}}}function be(n){let e,t,u;return{c(){e=E("textarea"),this.h()},l(s){e=j(s,"TEXTAREA",{class:!0,name:!0,id:!0,placeholder:!0}),T(e).forEach(h),this.h()},h(){a(e,"class","transistion duration-[250ms] outline-none rounded-sm self-start w-full max-w-full py-3 px-5 bg-white focus:drop-shadow-md h-64 font-medium"),a(e,"name",n[1]),a(e,"id",n[1]),a(e,"placeholder",n[3]),e.required=n[5]},m(s,l){C(s,e,l),Q(e,n[0]),t||(u=ue(e,"input",n[7]),t=!0)},p(s,l){l&2&&a(e,"name",s[1]),l&2&&a(e,"id",s[1]),l&8&&a(e,"placeholder",s[3]),l&32&&(e.required=s[5]),l&1&&Q(e,s[0])},d(s){s&&h(e),t=!1,u()}}}function Pe(n){let e,t,u,s,l,i=!n[4]&&he(n),r=n[4]&&be(n);return{c(){e=E("div"),t=E("label"),u=ie(n[2]),s=I(),i&&i.c(),l=I(),r&&r.c(),this.h()},l(m){e=j(m,"DIV",{class:!0});var c=T(e);t=j(c,"LABEL",{class:!0,for:!0});var w=T(t);u=ae(w,n[2]),w.forEach(h),s=R(c),i&&i.l(c),l=R(c),r&&r.l(c),c.forEach(h),this.h()},h(){a(t,"class","self-start text-md font-semibold mb-1"),a(t,"for",n[1]),a(e,"class","flex flex-col mb-8 flex-1")},m(m,c){C(m,e,c),b(e,t),b(t,u),b(e,s),i&&i.m(e,null),b(e,l),r&&r.m(e,null)},p(m,[c]){c&4&&Ee(u,m[2]),c&2&&a(t,"for",m[1]),m[4]?i&&(i.d(1),i=null):i?i.p(m,c):(i=he(m),i.c(),i.m(e,l)),m[4]?r?r.p(m,c):(r=be(m),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:L,o:L,d(m){m&&h(e),i&&i.d(),r&&r.d()}}}function Ue(n,e,t){let{name:u,label:s,placeholder:l,value:i}=e,{isLongText:r=!1}=e,{isRequired:m=!1}=e;function c(){i=this.value,t(0,i)}function w(){i=this.value,t(0,i)}return n.$$set=_=>{"name"in _&&t(1,u=_.name),"label"in _&&t(2,s=_.label),"placeholder"in _&&t(3,l=_.placeholder),"value"in _&&t(0,i=_.value),"isLongText"in _&&t(4,r=_.isLongText),"isRequired"in _&&t(5,m=_.isRequired)},[i,u,s,l,r,m,c,w]}class J extends W{constructor(e){super(),X(this,e,Ue,Pe,Z,{name:1,label:2,placeholder:3,value:0,isLongText:4,isRequired:5})}}const Ae=""+new URL("../../../assets/send-icon-d7d5630c.svg",import.meta.url).href;function De(n){let e,t,u;return{c(){e=ie(`Send
			`),t=E("img"),this.h()},l(s){e=ae(s,`Send
			`),t=j(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){a(t,"class","scale-75"),ye(t.src,u=Ae)||a(t,"src",u),a(t,"alt","send icon")},m(s,l){C(s,e,l),C(s,t,l)},p:L,i:L,o:L,d(s){s&&h(e),s&&h(t)}}}function Me(n){let e,t,u;return e=new Ne({}),{c(){G(e.$$.fragment),t=ie(`
			Sending`)},l(s){V(e.$$.fragment,s),t=ae(s,`
			Sending`)},m(s,l){H(e,s,l),C(s,t,l),u=!0},p:L,i(s){u||(P(e.$$.fragment,s),u=!0)},o(s){N(e.$$.fragment,s),u=!1},d(s){z(e,s),s&&h(t)}}}function Be(n){let e,t,u,s,l,i,r,m,c,w,_,g,o,f,v,K,x,y,$,ee,q,k,S,Y,B,te,re;function ve(d){n[7](d)}let oe={label:"Your Name",name:"name",placeholder:"John Doe",isRequired:!0};n[0]!==void 0&&(oe.value=n[0]),c=new J({props:oe}),U.push(()=>A(c,"value",ve));function we(d){n[8](d)}let fe={label:"Your Email",name:"email",placeholder:"johndoe@gmail.com",isRequired:!0};n[1]!==void 0&&(fe.value=n[1]),g=new J({props:fe}),U.push(()=>A(g,"value",we));function ke(d){n[9](d)}let me={label:"Subject",name:"subject",placeholder:"Google Meet Get Together",isRequired:!0};n[2]!==void 0&&(me.value=n[2]),v=new J({props:me}),U.push(()=>A(v,"value",ke));function Se(d){n[10](d)}let ce={isLongText:!0,label:"Message",name:"message",placeholder:"Hi, Would you like to meet with Country Z to talk about our robots...",isRequired:!0};n[3]!==void 0&&(ce.value=n[3]),y=new J({props:ce}),U.push(()=>A(y,"value",Se));const de=[Me,De],F=[];function pe(d,p){return d[5]?0:1}return k=pe(n),S=F[k]=de[k](n),{c(){e=E("form"),t=E("input"),u=I(),s=E("input"),l=I(),i=E("input"),r=I(),m=E("div"),G(c.$$.fragment),_=I(),G(g.$$.fragment),f=I(),G(v.$$.fragment),x=I(),G(y.$$.fragment),ee=I(),q=E("button"),S.c(),this.h()},l(d){e=j(d,"FORM",{method:!0,class:!0});var p=T(e);t=j(p,"INPUT",{type:!0,name:!0}),u=R(p),s=j(p,"INPUT",{type:!0,name:!0}),l=R(p),i=j(p,"INPUT",{type:!0,name:!0}),r=R(p),m=j(p,"DIV",{class:!0});var M=T(m);V(c.$$.fragment,M),_=R(M),V(g.$$.fragment,M),M.forEach(h),f=R(p),V(v.$$.fragment,p),x=R(p),V(y.$$.fragment,p),ee=R(p),q=j(p,"BUTTON",{class:!0,type:!0});var O=T(q);S.l(O),O.forEach(h),p.forEach(h),this.h()},h(){a(t,"type","hidden"),a(t,"name","_next"),t.value="/contact/thanks",a(s,"type","hidden"),a(s,"name","_captcha"),s.value="false",a(i,"type","hidden"),a(i,"name","_subject"),i.value=n[2],a(m,"class","container w-full flex flex-col md:flex-row md:gap-2"),a(q,"class",Y=`mx-auto gap-2 flex transistion duration-[250ms] outline-none rounded-sm self-start max-w-full py-2 px-16 text-cornsilk   font-semibold   ${n[6]?"bg-bangladesh-green hover:bg-north-texas-green hover:scale-105 cursor-pointer":"bg-gray-500 cursor-not-allowed"}`),a(q,"type","submit"),a(e,"method","post"),a(e,"class","container flex flex-col w-full leading-[1.5] font-montserrat mb-8")},m(d,p){C(d,e,p),b(e,t),b(e,u),b(e,s),b(e,l),b(e,i),b(e,r),b(e,m),H(c,m,null),b(m,_),H(g,m,null),b(e,f),H(v,e,null),b(e,x),H(y,e,null),b(e,ee),b(e,q),F[k].m(q,null),B=!0,te||(re=ue(q,"click",Te(Ie(function(){Re(n[4])&&n[4].apply(this,arguments)}))),te=!0)},p(d,[p]){n=d,(!B||p&4)&&(i.value=n[2]);const M={};!w&&p&1&&(w=!0,M.value=n[0],D(()=>w=!1)),c.$set(M);const O={};!o&&p&2&&(o=!0,O.value=n[1],D(()=>o=!1)),g.$set(O);const _e={};!K&&p&4&&(K=!0,_e.value=n[2],D(()=>K=!1)),v.$set(_e);const ge={};!$&&p&8&&($=!0,ge.value=n[3],D(()=>$=!1)),y.$set(ge);let ne=k;k=pe(n),k===ne?F[k].p(n,p):(je(),N(F[ne],1,1,()=>{F[ne]=null}),qe(),S=F[k],S?S.p(n,p):(S=F[k]=de[k](n),S.c()),P(S,1),S.m(q,null)),(!B||p&64&&Y!==(Y=`mx-auto gap-2 flex transistion duration-[250ms] outline-none rounded-sm self-start max-w-full py-2 px-16 text-cornsilk   font-semibold   ${n[6]?"bg-bangladesh-green hover:bg-north-texas-green hover:scale-105 cursor-pointer":"bg-gray-500 cursor-not-allowed"}`))&&a(q,"class",Y)},i(d){B||(P(c.$$.fragment,d),P(g.$$.fragment,d),P(v.$$.fragment,d),P(y.$$.fragment,d),P(S),B=!0)},o(d){N(c.$$.fragment,d),N(g.$$.fragment,d),N(v.$$.fragment,d),N(y.$$.fragment,d),N(S),B=!1},d(d){d&&h(e),z(c),z(g),z(v),z(y),F[k].d(),te=!1,re()}}}function Ge(n,e,t){let{onSubmit:u}=e,{name:s,email:l,subject:i,message:r,isSending:m}=e,c=!1;function w(f){s=f,t(0,s)}function _(f){l=f,t(1,l)}function g(f){i=f,t(2,i)}function o(f){r=f,t(3,r)}return n.$$set=f=>{"onSubmit"in f&&t(4,u=f.onSubmit),"name"in f&&t(0,s=f.name),"email"in f&&t(1,l=f.email),"subject"in f&&t(2,i=f.subject),"message"in f&&t(3,r=f.message),"isSending"in f&&t(5,m=f.isSending)},n.$$.update=()=>{n.$$.dirty&15&&t(6,c=!!(s&&l&&i&&r))},[s,l,i,r,u,m,c,w,_,g,o]}class Ve extends W{constructor(e){super(),X(this,e,Ge,Be,Z,{onSubmit:4,name:0,email:1,subject:2,message:3,isSending:5})}}function He(n){let e,t,u,s,l,i,r;function m(o){n[6](o)}function c(o){n[7](o)}function w(o){n[8](o)}function _(o){n[9](o)}let g={isSending:n[0],onSubmit:n[5]};return n[1]!==void 0&&(g.email=n[1]),n[2]!==void 0&&(g.message=n[2]),n[3]!==void 0&&(g.name=n[3]),n[4]!==void 0&&(g.subject=n[4]),t=new Ve({props:g}),U.push(()=>A(t,"email",m)),U.push(()=>A(t,"message",c)),U.push(()=>A(t,"name",w)),U.push(()=>A(t,"subject",_)),{c(){e=E("div"),G(t.$$.fragment),this.h()},l(o){e=j(o,"DIV",{class:!0});var f=T(e);V(t.$$.fragment,f),f.forEach(h),this.h()},h(){a(e,"class","container mx-auto px-3 | xs:px-3 md:px-6")},m(o,f){C(o,e,f),H(t,e,null),r=!0},p(o,[f]){const v={};f&1&&(v.isSending=o[0]),!u&&f&2&&(u=!0,v.email=o[1],D(()=>u=!1)),!s&&f&4&&(s=!0,v.message=o[2],D(()=>s=!1)),!l&&f&8&&(l=!0,v.name=o[3],D(()=>l=!1)),!i&&f&16&&(i=!0,v.subject=o[4],D(()=>i=!1)),t.$set(v)},i(o){r||(P(t.$$.fragment,o),r=!0)},o(o){N(t.$$.fragment,o),r=!1},d(o){o&&h(e),z(t)}}}function ze(n,e,t){let u=!1,s,l,i,r;async function m(){t(0,u=!0),(await Ce.post("https://formsubmit.co/ajax/fc3952794181a9895bc3351b76ccd179",{name:i,email:s,subject:r,message:l})).data.success==="true"?Le("/contact/thanks"):alert("Error trying to send email. Try again later \u{1F614}"),t(0,u=!1)}function c(o){s=o,t(1,s)}function w(o){l=o,t(2,l)}function _(o){i=o,t(3,i)}function g(o){r=o,t(4,r)}return[u,s,l,i,r,m,c,w,_,g]}class We extends W{constructor(e){super(),X(this,e,ze,He,Z,{})}}export{We as default};
