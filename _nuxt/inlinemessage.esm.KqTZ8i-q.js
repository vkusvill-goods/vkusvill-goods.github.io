import{F as l,ab as c,P as p,v as a,x as m,X as r,y as u,S as i,_ as d,$ as f,C as v}from"./entry.GSUHCPc6.js";import{s as g,a as y}from"./index.esm.bTkVdw6R.js";import{s as $}from"./index.esm.ZtxDj5v0.js";var h=`
@layer primevue {
    .p-inline-message {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: top;
    }
    
    .p-inline-message-icon {
        flex-shrink: 0;
    }

    .p-inline-message-icon-only .p-inline-message-text {
        visibility: hidden;
        width: 0;
    }

    .p-fluid .p-inline-message {
        display: flex;
    }
}
`,x={root:function(n){var s=n.props,t=n.instance;return["p-inline-message p-component p-inline-message-"+s.severity,{"p-inline-message-icon-only":!t.$slots.default}]},icon:function(n){var s=n.props;return["p-inline-message-icon",s.icon]},text:"p-inline-message-text"},B=l.extend({name:"inlinemessage",css:h,classes:x}),S={name:"BaseInlineMessage",extends:p,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:B,provide:function(){return{$parentInstance:this}}},k={name:"InlineMessage",extends:S,timeout:null,data:function(){return{visible:!0}},mounted:function(){var n=this;this.sticky||setTimeout(function(){n.visible=!1},this.life)},computed:{iconComponent:function(){return{info:g,success:c,warn:y,error:$}[this.severity]}}};function C(e,n,s,t,b,o){return a(),m("div",i({role:"alert","aria-live":"assertive","aria-atomic":"true",class:e.cx("root")},e.ptm("root")),[r(e.$slots,"icon",{},function(){return[(a(),d(f(e.icon?"span":o.iconComponent),i({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),u("span",i({class:e.cx("text")},e.ptm("text")),[r(e.$slots,"default",{},function(){return[v(" ")]})],16)],16)}k.render=C;export{k as default};
