import{S as w,i as V,s as q,w as C,k as g,e as _,t as x,x as I,m as k,X as j,c as u,a as m,h as $,d as a,b as c,y as A,g as E,M as n,q as L,o as M,B as T,v as Y,Y as H,E as D}from"../../../chunks/index-5eb3cc7f.js";import{E as N}from"../../../chunks/experiment_card-befa17fa.js";import{g as R}from"../../../chunks/utils-4fc137b3.js";import{R as X}from"../../../chunks/RunPython-55a787c0.js";import"../../../chunks/singletons-d1fb5791.js";function z(v){let e;return{c(){e=_("div"),this.h()},l(t){e=u(t,"DIV",{slot:!0,id:!0,class:!0}),m(e).forEach(a),this.h()},h(){c(e,"slot","py_slot"),c(e,"id","chart"),c(e,"class","flex items-center justify-center h-full")},m(t,o){E(t,e,o)},p:D,d(t){t&&a(e)}}}function F(v){let e,t,o,d,l,y,p,s,r,i;return{c(){e=_("article"),t=_("h2"),o=x("Bokeh"),d=g(),l=_("p"),y=x("Default example from PyScript Docs."),p=g(),s=_("p"),r=_("a"),i=x("View source"),this.h()},l(h){e=u(h,"ARTICLE",{slot:!0,class:!0});var f=m(e);t=u(f,"H2",{class:!0});var b=m(t);o=$(b,"Bokeh"),b.forEach(a),d=k(f),l=u(f,"P",{});var P=m(l);y=$(P,"Default example from PyScript Docs."),P.forEach(a),p=k(f),s=u(f,"P",{class:!0});var S=m(s);r=u(S,"A",{class:!0,href:!0,target:!0});var B=m(r);i=$(B,"View source"),B.forEach(a),S.forEach(a),f.forEach(a),this.h()},h(){c(t,"class","text-xl font-extrabold mb-5"),c(r,"class","text-sky-500"),c(r,"href",R("py/bokeh_index.py")),c(r,"target","_blank"),c(s,"class","mt-6"),c(e,"slot","content_slot"),c(e,"class","mb-10")},m(h,f){E(h,e,f),n(e,t),n(t,o),n(e,d),n(e,l),n(l,y),n(e,p),n(e,s),n(s,r),n(r,i)},p:D,d(h){h&&a(e)}}}function G(v){let e,t,o,d,l,y,p;return e=new N({props:{props:v[0],$$slots:{content_slot:[F],py_slot:[z]},$$scope:{ctx:v}}}),{c(){C(e.$$.fragment),t=g(),o=_("script"),d=x(`Bokeh.set_log_level("info");\r
  `),l=_("py-env"),y=x("- bokeh"),this.h()},l(s){I(e.$$.fragment,s),t=k(s);const r=j('[data-svelte="svelte-35t31t"]',document.head);o=u(r,"SCRIPT",{type:!0});var i=m(o);d=$(i,`Bokeh.set_log_level("info");\r
  `),i.forEach(a),l=u(r,"PY-ENV",{});var h=m(l);y=$(h,"- bokeh"),h.forEach(a),r.forEach(a),this.h()},h(){c(o,"type","text/javascript")},m(s,r){A(e,s,r),E(s,t,r),n(document.head,o),n(o,d),n(document.head,l),n(l,y),p=!0},p(s,[r]){const i={};r&4&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){p||(L(e.$$.fragment,s),p=!0)},o(s){M(e.$$.fragment,s),p=!1},d(s){T(e,s),s&&a(t),a(o),a(l)}}}function J(v){const e={nextPage:"e/bokeh/1",previousPage:"e/interop/"};let t;return Y(()=>{t||(t=X(),t.runScript(R("py/bokeh_index.py"),"script_gutter",!1))}),H(()=>{t&&t.destroy()}),[e]}class Z extends w{constructor(e){super(),V(this,e,J,G,q,{})}}export{Z as default};