import{S as Me,i as Be,s as ze,e as u,t as o,k as q,c as d,a as h,h as n,d as r,m as T,b as i,P as Ne,g as S,F as t,n as be,j as Fe,G as Ge,x as ye,y as Ee,z as $e,r as qe,p as Te,C as ke}from"../chunks/index-cd4247d5.js";import{P as He}from"../chunks/Page-bb13bf4e.js";import{S as We}from"../chunks/Spacer-2bf833ec.js";function Je(_,e,c){const l=_.slice();return l[2]=e[c][0],l[3]=e[c][1],l}function Le(_){let e,c,l,v=_[2]+"",w,y,R,I=_[3]+"",b;return{c(){e=u("tr"),c=u("td"),l=u("code"),w=o(v),y=q(),R=u("td"),b=q(),this.h()},l(k){e=d(k,"TR",{class:!0});var E=h(e);c=d(E,"TD",{class:!0});var x=h(c);l=d(x,"CODE",{});var D=h(l);w=n(D,v),D.forEach(r),x.forEach(r),y=T(E),R=d(E,"TD",{class:!0});var $=h(R);$.forEach(r),b=T(E),E.forEach(r),this.h()},h(){i(c,"class","svelte-1re2d85"),Ne(c,"strong",_[2].endsWith(" *")),i(R,"class","svelte-1re2d85"),i(e,"class","svelte-1re2d85")},m(k,E){S(k,e,E),t(e,c),t(c,l),t(l,w),t(e,y),t(e,R),R.innerHTML=I,t(e,b)},p:be,d(k){k&&r(e)}}}function Xe(_){let e,c,l,v,w,y,R,I,b,k,E,x,D,$,z,N,C,F,A=_[1],g=[];for(let s=0;s<A.length;s+=1)g[s]=Le(Je(_,A,s));return{c(){e=u("h3"),c=o("The JSON Format"),l=q(),v=u("div"),w=u("pre"),y=u("code"),R=o(_[0]),I=q(),b=u("div"),k=u("table"),E=u("tbody");for(let s=0;s<g.length;s+=1)g[s].c();x=q(),D=u("p"),$=u("strong"),z=o("*: mandatory field"),N=q(),C=u("p"),F=o(`**: This is a free and completely sponsored event. Even though we want
        to try, we can not guarantee to be able to respect every dietary
        requirement`),this.h()},l(s){e=d(s,"H3",{class:!0});var j=h(e);c=n(j,"The JSON Format"),j.forEach(r),l=T(s),v=d(s,"DIV",{});var p=h(v);w=d(p,"PRE",{class:!0});var m=h(w);y=d(m,"CODE",{});var Y=h(y);R=n(Y,_[0]),Y.forEach(r),m.forEach(r),p.forEach(r),I=T(s),b=d(s,"DIV",{id:!0,class:!0});var J=h(b);k=d(J,"TABLE",{class:!0});var V=h(k);E=d(V,"TBODY",{});var K=h(E);for(let Z=0;Z<g.length;Z+=1)g[Z].l(K);K.forEach(r),V.forEach(r),x=T(J),D=d(J,"P",{class:!0});var M=h(D);$=d(M,"STRONG",{});var Q=h($);z=n(Q,"*: mandatory field"),Q.forEach(r),M.forEach(r),N=T(J),C=d(J,"P",{class:!0});var U=h(C);F=n(U,`**: This is a free and completely sponsored event. Even though we want
        to try, we can not guarantee to be able to respect every dietary
        requirement`),U.forEach(r),J.forEach(r),this.h()},h(){i(e,"class","svelte-1re2d85"),i(w,"class","svelte-1re2d85"),i(k,"class","svelte-1re2d85"),i(D,"class","svelte-1re2d85"),i(C,"class","svelte-1re2d85"),i(b,"id","table-wrapper"),i(b,"class","svelte-1re2d85")},m(s,j){S(s,e,j),t(e,c),S(s,l,j),S(s,v,j),t(v,w),t(w,y),t(y,R),S(s,I,j),S(s,b,j),t(b,k),t(k,E);for(let p=0;p<g.length;p+=1)g[p].m(E,null);t(b,x),t(b,D),t(D,$),t($,z),t(b,N),t(b,C),t(C,F)},p(s,[j]){if(j&1&&Fe(R,s[0]),j&2){A=s[1];let p;for(p=0;p<A.length;p+=1){const m=Je(s,A,p);g[p]?g[p].p(m,j):(g[p]=Le(m),g[p].c(),g[p].m(E,null))}for(;p<g.length;p+=1)g[p].d(1);g.length=A.length}},i:be,o:be,d(s){s&&r(e),s&&r(l),s&&r(v),s&&r(I),s&&r(b),Ge(g,s)}}}function Ye(_,e,c){let{template:l}=e;const v=[["name *","first name and last name or a nick name"],["company","A company"],["when.friday *","If you are attending on Friday (Boolean value)"],["when.saturday *","If you are attending on Saturday (Boolean value)"],["tags *","Share what you think is important, use at least one tag. (Array of strings)"],["vegan *","Just for planning: Let us know if you are a vegan** (Boolean value)"],["vegetarian *","Just for planning: Let us know if you are a vegetarian** (Boolean value)"],["allergies","Tell us if you have any special dietary requirements**"],["what_is_my_connection_to_javascript *","2-5 sentences about your experience with JavaScript or related technologies."],["what_can_i_contribute","1-3 sentences about what you would like to contribute to the BarCamp."],["tshirt **","We will have a limited number of t-shirts with the event and sponsor logos. If you want one: fit (W=women, M=Man) and size (S,M,L,XL,XXL), e.g. W-S or M-XL. If your registration is shortly before the event there might be no time to have a t-shirt produced for you, please be aware."],["twitter","Your Twitter handle <em>without</em> the leading <code>@</code>."]];return _.$$set=w=>{"template"in w&&c(0,l=w.template)},[l,v]}class Ve extends Me{constructor(e){super(),Be(this,e,Ye,Xe,ze,{template:0})}}function Ke(_){let e,c,l=" ",v,w,y,R,I=" ",b,k,E=" ",x,D,$,z,N,C,F,A,g,s,j,p,m,Y,J=" ",V,K,M,Q,U,Z=" ",ne,ie,L,fe,ce,je=" ",ue,de,G,he,ae,H,pe,re,P,me,Re=" ",ve,_e,W,ge,we,le,X,se,B,oe;return X=new We({props:{size:"s"}}),B=new Ve({props:{template:_[0]}}),{c(){e=u("p"),c=o(`To register for JSCraftCamp you have to add a json file with your name
        and some other information to our`),v=o(l),w=q(),y=u("a"),R=o(`GitHub Repository
        `),b=o(I),k=o(`
        via a`),x=o(E),D=q(),$=u("a"),z=o("Pull Request"),N=o(`
        . Registration is free of charge. Your json file should follow the
        naming scheme `),C=u("code"),F=o("$name_or_nickname.json"),A=o(` and must be placed
        in the folder `),g=u("code"),s=o("participants"),j=o(`. The structure of the file is
        described below.`),p=q(),m=u("p"),Y=o("To test if your json file is a valid registration you can run"),V=o(J),K=q(),M=u("code"),Q=o("npm test"),U=o(`
        (more details about this are in the`),ne=o(Z),ie=q(),L=u("a"),fe=o("README"),ce=o(`
        ). Invalid registrations will be rejected. If you need any help with
        registration, don't hesitate to contact one of the`),ue=o(je),de=q(),G=u("a"),he=o("team"),ae=q(),H=u("p"),pe=o(`Out of these files a page with information about all participants will
        be generated.`),re=q(),P=u("p"),me=o("To unregister please write another pull request or"),ve=o(Re),_e=q(),W=u("a"),ge=o("let us know"),we=o("."),le=q(),ye(X.$$.fragment),se=q(),ye(B.$$.fragment),this.h()},l(a){e=d(a,"P",{class:!0});var f=h(e);c=n(f,`To register for JSCraftCamp you have to add a json file with your name
        and some other information to our`),v=n(f,l),w=T(f),y=d(f,"A",{href:!0,rel:!0,target:!0,class:!0});var te=h(y);R=n(te,`GitHub Repository
        `),te.forEach(r),b=n(f,I),k=n(f,`
        via a`),x=n(f,E),D=T(f),$=d(f,"A",{href:!0,rel:!0,target:!0,class:!0});var Se=h($);z=n(Se,"Pull Request"),Se.forEach(r),N=n(f,`
        . Registration is free of charge. Your json file should follow the
        naming scheme `),C=d(f,"CODE",{});var De=h(C);F=n(De,"$name_or_nickname.json"),De.forEach(r),A=n(f,` and must be placed
        in the folder `),g=d(f,"CODE",{});var Oe=h(g);s=n(Oe,"participants"),Oe.forEach(r),j=n(f,`. The structure of the file is
        described below.`),f.forEach(r),p=T(a),m=d(a,"P",{class:!0});var O=h(m);Y=n(O,"To test if your json file is a valid registration you can run"),V=n(O,J),K=T(O),M=d(O,"CODE",{});var Ce=h(M);Q=n(Ce,"npm test"),Ce.forEach(r),U=n(O,`
        (more details about this are in the`),ne=n(O,Z),ie=T(O),L=d(O,"A",{href:!0,rel:!0,target:!0,class:!0});var Pe=h(L);fe=n(Pe,"README"),Pe.forEach(r),ce=n(O,`
        ). Invalid registrations will be rejected. If you need any help with
        registration, don't hesitate to contact one of the`),ue=n(O,je),de=T(O),G=d(O,"A",{href:!0,class:!0});var xe=h(G);he=n(xe,"team"),xe.forEach(r),O.forEach(r),ae=T(a),H=d(a,"P",{class:!0});var Ae=h(H);pe=n(Ae,`Out of these files a page with information about all participants will
        be generated.`),Ae.forEach(r),re=T(a),P=d(a,"P",{class:!0});var ee=h(P);me=n(ee,"To unregister please write another pull request or"),ve=n(ee,Re),_e=T(ee),W=d(ee,"A",{href:!0,class:!0});var Ie=h(W);ge=n(Ie,"let us know"),Ie.forEach(r),we=n(ee,"."),ee.forEach(r),le=T(a),Ee(X.$$.fragment,a),se=T(a),Ee(B.$$.fragment,a),this.h()},h(){i(y,"href","https://github.com/jscraftcamp/website"),i(y,"rel","noreferrer noopener"),i(y,"target","_blank"),i(y,"class","svelte-qfl24e"),i($,"href","http://stackoverflow.com/questions/14680711/how-to-do-a-github-pull-request"),i($,"rel","noreferrer noopener"),i($,"target","_blank"),i($,"class","svelte-qfl24e"),i(e,"class","svelte-qfl24e"),i(L,"href","https://github.com/jscraftcamp/website/blob/main/README.md"),i(L,"rel","noreferrer noopener"),i(L,"target","_blank"),i(L,"class","svelte-qfl24e"),i(G,"href","/theteam"),i(G,"class","svelte-qfl24e"),i(m,"class","svelte-qfl24e"),i(H,"class","svelte-qfl24e"),i(W,"href","mailto:team@jscraftcamp.org"),i(W,"class","svelte-qfl24e"),i(P,"class","svelte-qfl24e")},m(a,f){S(a,e,f),t(e,c),t(e,v),t(e,w),t(e,y),t(y,R),t(e,b),t(e,k),t(e,x),t(e,D),t(e,$),t($,z),t(e,N),t(e,C),t(C,F),t(e,A),t(e,g),t(g,s),t(e,j),S(a,p,f),S(a,m,f),t(m,Y),t(m,V),t(m,K),t(m,M),t(M,Q),t(m,U),t(m,ne),t(m,ie),t(m,L),t(L,fe),t(m,ce),t(m,ue),t(m,de),t(m,G),t(G,he),S(a,ae,f),S(a,H,f),t(H,pe),S(a,re,f),S(a,P,f),t(P,me),t(P,ve),t(P,_e),t(P,W),t(W,ge),t(P,we),S(a,le,f),$e(X,a,f),S(a,se,f),$e(B,a,f),oe=!0},p(a,f){const te={};f&1&&(te.template=a[0]),B.$set(te)},i(a){oe||(qe(X.$$.fragment,a),qe(B.$$.fragment,a),oe=!0)},o(a){Te(X.$$.fragment,a),Te(B.$$.fragment,a),oe=!1},d(a){a&&r(e),a&&r(p),a&&r(m),a&&r(ae),a&&r(H),a&&r(re),a&&r(P),a&&r(le),ke(X,a),a&&r(se),ke(B,a)}}}function Qe(_){let e,c;return e=new He({props:{headline:"Registration",$$slots:{default:[Ke]},$$scope:{ctx:_}}}),{c(){ye(e.$$.fragment)},l(l){Ee(e.$$.fragment,l)},m(l,v){$e(e,l,v),c=!0},p(l,[v]){const w={};v&3&&(w.$$scope={dirty:v,ctx:l}),e.$set(w)},i(l){c||(qe(e.$$.fragment,l),c=!0)},o(l){Te(e.$$.fragment,l),c=!1},d(l){ke(e,l)}}}function at({props:_}){return{props:_}}function Ue(_,e,c){let{template:l}=e;return _.$$set=v=>{"template"in v&&c(0,l=v.template)},[l]}class rt extends Me{constructor(e){super(),Be(this,e,Ue,Qe,ze,{template:0})}}export{rt as default,at as load};