import{S as L,i as R,s as b,w,x as k,y as T,q as S,o as H,B as q,e as p,c as u,a as f,d as c,V as h,g as P,E as v,t as $,k as B,h as g,m as C,b as E,J as s}from"../../chunks/index-ee947acd.js";import{E as M}from"../../chunks/experiment_card-7f393778.js";import"../../chunks/utils-4fc137b3.js";import"../../chunks/singletons-d1fb5791.js";function A(r){let t;return{c(){t=p("py-repl"),this.h()},l(e){t=u(e,"PY-REPL",{id:!0,"auto-generate":!0,class:!0,slot:!0}),f(t).forEach(c),this.h()},h(){h(t,"id","my-repl"),h(t,"auto-generate","true"),h(t,"class","w-full h-full"),h(t,"slot","py_slot")},m(e,o){P(e,t,o)},p:v,d(e){e&&c(t)}}}function I(r){let t,e,o,n,a,_,d,y;return{c(){t=p("article"),e=p("h2"),o=$("REPL"),n=B(),a=p("p"),_=$(`PyScript comes with a default REPL (read-evaluate-print-loop) html module\r
      that allows you to run python code form an HTML input.\r
      `),d=p("br"),y=$(`\r
      This is a pseudo notebook functionality that can make some interactive python code on the fly.`),this.h()},l(i){t=u(i,"ARTICLE",{slot:!0});var l=f(t);e=u(l,"H2",{class:!0});var x=f(e);o=g(x,"REPL"),x.forEach(c),n=C(l),a=u(l,"P",{});var m=f(a);_=g(m,`PyScript comes with a default REPL (read-evaluate-print-loop) html module\r
      that allows you to run python code form an HTML input.\r
      `),d=u(m,"BR",{}),y=g(m,`\r
      This is a pseudo notebook functionality that can make some interactive python code on the fly.`),m.forEach(c),l.forEach(c),this.h()},h(){E(e,"class","text-xl font-extrabold mb-5"),E(t,"slot","content_slot")},m(i,l){P(i,t,l),s(t,e),s(e,o),s(t,n),s(t,a),s(a,_),s(a,d),s(a,y)},p:v,d(i){i&&c(t)}}}function J(r){let t,e;return t=new M({props:{props:r[0],$$slots:{content_slot:[I],py_slot:[A]},$$scope:{ctx:r}}}),{c(){w(t.$$.fragment)},l(o){k(t.$$.fragment,o)},m(o,n){T(t,o,n),e=!0},p(o,[n]){const a={};n&2&&(a.$$scope={dirty:n,ctx:o}),t.$set(a)},i(o){e||(S(t.$$.fragment,o),e=!0)},o(o){H(t.$$.fragment,o),e=!1},d(o){q(t,o)}}}function V(r){return[{nextPage:"e/interop",previousPage:"/"}]}class F extends L{constructor(t){super(),R(this,t,V,J,b,{})}}export{F as default};
