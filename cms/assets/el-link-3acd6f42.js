import{e as m,j as y,f as h,k as v,_ as b,w as C}from"./base-fea03ce8.js";import{d as u,N as E,o as a,c as i,W as r,w as _,Z as w,u as l,Y as t,S as c,P as d}from"./_plugin-vue_export-helper-33f8d7e1.js";const g=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:y}}),B={click:o=>o instanceof MouseEvent},L=["href"],P=u({name:"ElLink"}),S=u({...P,props:g,emits:B,setup(o,{emit:f}){const s=o,n=h("link"),p=E(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||f("click",e)}return(e,N)=>(a(),i("a",{class:c(l(p)),href:e.disabled||!e.href?void 0:e.href,onClick:k},[e.icon?(a(),r(l(v),{key:0},{default:_(()=>[(a(),r(w(e.icon)))]),_:1})):t("v-if",!0),e.$slots.default?(a(),i("span",{key:1,class:c(l(n).e("inner"))},[d(e.$slots,"default")],2)):t("v-if",!0),e.$slots.icon?d(e.$slots,"icon",{key:2}):t("v-if",!0)],10,L))}});var $=b(S,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const z=C($);export{z as E};