import{s as y}from"./index.esm.Xj4PDfmi.js";import{L as h,U as v,ao as P,W as w,X as O,Y as S,t as i,v as c,x as d,a3 as s,a4 as j,$ as a,a8 as g,a0 as u,z as I,A as B,ad as D,a7 as E,y as K,a5 as C,af as L,ae as k,a6 as N}from"./entry.IaLjdpt2.js";var A=`
@layer primevue {
    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .p-panel-title {
        line-height: 1;
    }

    .p-panel-header-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }
}
`,z={root:function(t){var n=t.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",icons:"p-panel-icons",toggler:"p-panel-header-icon p-panel-toggler p-link",toggleablecontent:"p-toggleable-content",content:"p-panel-content",footer:"p-panel-footer"},V=h.extend({name:"panel",css:A,classes:z}),M={name:"BasePanel",extends:O,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:V,provide:function(){return{$parentInstance:this}}},R={name:"Panel",extends:M,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{ariaId:function(){return v()},buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:P,MinusIcon:y},directives:{ripple:w}};function p(e){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(r){T(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function T(e,t,n){return t=U(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e){var t=q(e,"string");return p(t)=="symbol"?t:String(t)}function q(e,t){if(p(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(p(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var W=["id"],X=["id","aria-label","aria-controls","aria-expanded"],Y=["id","aria-labelledby"];function $(e,t,n,r,l,o){var b=S("ripple");return i(),c("div",a({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"panel"}),[d("div",a({class:e.cx("header")},e.ptm("header")),[s(e.$slots,"header",{id:o.ariaId+"_header",class:j(e.cx("title"))},function(){return[e.header?(i(),c("span",a({key:0,id:o.ariaId+"_header",class:e.cx("title")},e.ptm("title")),K(e.header),17,W)):u("",!0)]}),d("div",a({class:e.cx("icons")},e.ptm("icons")),[s(e.$slots,"icons"),e.toggleable?g((i(),c("button",a({key:0,id:o.ariaId+"_header",type:"button",role:"button",class:e.cx("toggler"),"aria-label":o.buttonAriaLabel,"aria-controls":o.ariaId+"_content","aria-expanded":!l.d_collapsed,onClick:t[0]||(t[0]=function(){return o.toggle&&o.toggle.apply(o,arguments)}),onKeydown:t[1]||(t[1]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)})},m(m({},e.toggleButtonProps),e.ptm("toggler"))),[s(e.$slots,"togglericon",{collapsed:l.d_collapsed},function(){return[(i(),C(N(l.d_collapsed?"PlusIcon":"MinusIcon"),L(k(e.ptm("togglericon"))),null,16))]})],16,X)),[[b]]):u("",!0)],16)],16),I(E,a({name:"p-toggleable-content"},e.ptm("transition")),{default:B(function(){return[g(d("div",a({id:o.ariaId+"_content",class:e.cx("toggleablecontent"),role:"region","aria-labelledby":o.ariaId+"_header"},e.ptm("toggleablecontent")),[d("div",a({class:e.cx("content")},e.ptm("content")),[s(e.$slots,"default")],16),e.$slots.footer?(i(),c("div",a({key:0,class:e.cx("footer")},e.ptm("footer")),[s(e.$slots,"footer")],16)):u("",!0)],16,Y),[[D,!l.d_collapsed]])]}),_:3},16)],16)}R.render=$;export{R as default};