function S(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(B)}function I(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function st(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function U(t){return Object.keys(t).length===0}function W(t,...n){if(t==null)return S;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(W(n,e))}function at(t,n,e,i){if(t){const c=L(t,n,e,i);return t[0](c)}}function L(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],u=Math.max(n.dirty.length,c.length);for(let o=0;o<u;o+=1)s[o]=n.dirty[o]|c[o];return s}return n.dirty|c}return n.dirty}function dt(t,n,e,i,c,s){if(c){const u=L(n,e,i,s);t.p(u,c)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let E=!1;function G(){E=!0}function J(){E=!1}function K(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const l=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=l?c+1:K(1,c,g=>n[e[g]].claim_order,l))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],u=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);o>=r;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);s.reverse(),u.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<u.length;r++){for(;l<s.length&&u[r].claim_order>=s[l].claim_order;)l++;const a=l<s.length?s[l]:null;t.insertBefore(u[r],a)}}function R(t,n){if(E){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){E&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function yt(){return j(" ")}function gt(){return j("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function xt(t,n,e){n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:Z(t,n,e)}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,c=!1){nt(t);const s=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function P(t,n,e,i){return O(t,c=>c.nodeName===n,c=>{const s=[];for(let u=0;u<c.attributes.length;u++){const o=c.attributes[u];e[o.name]||s.push(o.name)}s.forEach(u=>c.removeAttribute(u))},()=>i(n))}function $t(t,n,e){return P(t,n,e,X)}function wt(t,n,e){return P(t,n,e,Y)}function et(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function Et(t){return et(t," ")}function vt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n){t.value=n==null?"":n}function At(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Nt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function m(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function St(t){d().$$.before_update.push(t)}function jt(t){d().$$.on_mount.push(t)}function Ct(t){d().$$.after_update.push(t)}function qt(t){d().$$.on_destroy.push(t)}function Mt(t,n){return d().$$.context.set(t,n),n}function Tt(t){return d().$$.context.get(t)}const h=[],T=[],$=[],k=[],D=Promise.resolve();let A=!1;function z(){A||(A=!0,D.then(F))}function Bt(){return z(),D}function N(t){$.push(t)}function Lt(t){k.push(t)}const v=new Set;let x=0;function F(){const t=p;do{for(;x<h.length;){const n=h[x];x++,m(n),it(n.$$)}for(m(null),h.length=0,x=0;T.length;)T.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];v.has(e)||(v.add(e),e())}$.length=0}while(h.length);for(;k.length;)k.pop()();A=!1,v.clear(),m(t)}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const w=new Set;let _;function Ot(){_={r:0,c:[],p:_}}function Pt(){_.r||y(_.c),_=_.p}function rt(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Dt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function zt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const u=t[s],o=n[s];if(o){for(const r in u)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[s]=o}else for(const r in u)c[r]=1}for(const u in i)u in e||(e[u]=void 0);return e}function Ft(t){return typeof t=="object"&&t!==null?t:{}}function Ht(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function It(t){t&&t.c()}function Ut(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:u,after_update:o}=t.$$;c&&c.m(n,e),i||N(()=>{const r=s.map(B).filter(I);u?u.push(...r):y(r),t.$$.on_mount=[]}),o.forEach(N)}function ut(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Wt(t,n,e,i,c,s,u,o=[-1]){const r=p;m(t);const l=t.$$={fragment:null,ctx:null,props:s,update:S,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};u&&u(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,g,...C)=>{const q=C.length?C[0]:g;return l.ctx&&c(l.ctx[f],l.ctx[f]=q)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](q),a&&ot(t,f)),g}):[],l.update(),a=!0,y(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){G();const f=tt(n.target);l.fragment&&l.fragment.l(f),f.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),J(),F()}m(r)}class Gt{$destroy(){ut(this,1),this.$destroy=S}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!U(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ft as A,ut as B,H as C,Bt as D,S as E,St as F,T as G,Tt as H,Lt as I,Y as J,wt as K,st as L,R as M,bt as N,pt as O,y as P,ft as Q,Ht as R,Gt as S,at as T,dt as U,ht as V,_t as W,qt as X,Nt as Y,kt as Z,xt as _,tt as a,Z as b,$t as c,V as d,X as e,At as f,mt as g,et as h,Wt as i,vt as j,yt as k,gt as l,Et as m,Ot as n,Dt as o,Pt as p,rt as q,Mt as r,lt as s,j as t,Ct as u,jt as v,It as w,Ut as x,ct as y,zt as z};
