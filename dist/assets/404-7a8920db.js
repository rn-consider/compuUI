import{d as r,m as e,o as s,c as t,f as o,t as a,e as n,w as i,a as u,k as l,q as m,u as c,s as p,i as d}from"./index-97d55404.js";import{E as f}from"./el-button-88ca4579.js";import"./use-form-item-a415b70d.js";import"./constants-ed284e4b.js";const v={class:"flex justify-center"},x={class:"text-center"},g=["src"],y={class:"text-14px text-[var(--el-color-info)]"},T={class:"mt-20px"},b=r({__name:"Error",props:{type:e.string.validate((r=>["404","500","403"].includes(r))).def("404")},emits:["errorClick"],setup(r,{emit:e}){const c=r,{t:p}=l(),d={404:{url:"/assets/404-1759fece.svg",message:p("error.pageError"),buttonText:p("error.returnToHome")},500:{url:"/assets/500-8fda557c.svg",message:p("error.networkError"),buttonText:p("error.returnToHome")},403:{url:"/assets/403-af24f6bf.svg",message:p("error.noPermission"),buttonText:p("error.returnToHome")}},b=()=>{e("errorClick",c.type)};return(e,l)=>(s(),t("div",v,[o("div",x,[o("img",{width:"350",src:d[r.type].url,alt:""},null,8,g),o("div",y,a(d[r.type].message),1),o("div",T,[n(u(f),{type:"primary",onClick:b},{default:i((()=>[m(a(d[r.type].buttonText),1)])),_:1})])])]))}}),k=r({__name:"404",setup(r){const{push:e}=c(),t=p(),o=()=>{var r;e(null==(r=t.addRouters[0])?void 0:r.path)};return(r,e)=>(s(),d(u(b),{onErrorClick:o}))}});export{k as default};