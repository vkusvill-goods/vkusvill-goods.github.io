import{F as v,J as b,ae as h,ax as P,P as g,i as O,Q as w,a1 as B,v as a,x as p,S as i,a9 as S,X as c,_ as u,B as j,$ as I,T as $}from"./entry.GSUHCPc6.js";var C=`
@layer primevue {
    .p-inplace .p-inplace-display {
        display: inline;
        cursor: pointer;
    }

    .p-inplace .p-inplace-content {
        display: inline;
    }

    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content {
        display: flex;
    }

    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {
        flex: 1 1 auto;
        width: 1%;
    }
}
`,D={root:function(t){var n=t.props;return["p-inplace p-component",{"p-inplace-closable":n.closable}]},display:function(t){var n=t.props;return["p-inplace-display",{"p-disabled":n.disabled}]},content:"p-inplace-content"},k=v.extend({name:"inplace",css:C,classes:D}),T={name:"BaseInplace",extends:g,props:{closable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},closeIcon:{type:String,default:void 0},displayProps:{type:null,default:null},closeButtonProps:{type:null,default:null}},style:k,provide:function(){return{$parentInstance:this}}},E={name:"Inplace",extends:T,emits:["open","close","update:active"],data:function(){return{d_active:this.active}},watch:{active:function(t){this.d_active=t}},methods:{open:function(t){this.disabled||(this.$emit("open",t),this.d_active=!0,this.$emit("update:active",!0))},close:function(t){var n=this;this.$emit("close",t),this.d_active=!1,this.$emit("update:active",!1),setTimeout(function(){n.$refs.display.focus()},0)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{IPButton:b,TimesIcon:h},directives:{focustrap:P}};function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function K(e,t,n){return t=A(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){var t=L(e,"string");return s(t)=="symbol"?t:String(t)}function L(e,t){if(s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var F=["tabindex"];function N(e,t,n,r,l,o){var y=O("IPButton"),m=w("focustrap");return B((a(),p("div",i({class:e.cx("root"),"aria-live":"polite"},e.ptm("root"),{"data-pc-name":"inplace"}),[l.d_active?(a(),p("div",i({key:1,class:e.cx("content")},e.ptm("content")),[c(e.$slots,"content"),e.closable?(a(),u(y,i({key:0,"aria-label":o.closeAriaLabel,onClick:o.close,unstyled:e.unstyled,pt:e.ptm("closeButton")},e.closeButtonProps),{icon:j(function(){return[c(e.$slots,"closeicon",{},function(){return[(a(),u(I(e.closeIcon?"span":"TimesIcon"),i({class:e.closeIcon},e.ptm("closeButton").icon,{"data-pc-section":"closebuttonicon"}),null,16,["class"]))]})]}),_:3},16,["aria-label","onClick","unstyled","pt"])):$("",!0)],16)):(a(),p("div",i({key:0,ref:"display",class:e.cx("display"),tabindex:e.$attrs.tabindex||"0",role:"button",onClick:t[0]||(t[0]=function(){return o.open&&o.open.apply(o,arguments)}),onKeydown:t[1]||(t[1]=S(function(){return o.open&&o.open.apply(o,arguments)},["enter"]))},f(f({},e.displayProps),e.ptm("display"))),[c(e.$slots,"display")],16,F))],16)),[[m]])}E.render=N;export{E as default};
