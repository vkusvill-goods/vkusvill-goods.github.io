import{L as S,ai as f,W as P,al as k,X as $,i as j,Y as B,t as i,a5 as u,A as C,$ as o,a3 as c,a6 as D,x as y,v as m,a8 as g,a0 as A,ad as T,a7 as E}from"./entry.IaLjdpt2.js";import{s as v,a as d}from"./index.esm.QD0vLwnw.js";import{s as b}from"./index.esm.bW5di9rs.js";var L=`
@layer primevue {
    .p-message-wrapper {
        display: flex;
        align-items: center;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-message-close.p-link {
        margin-left: auto;
        overflow: hidden;
        position: relative;
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.15s;
    }

    .p-message-leave-active .p-message-close {
        display: none;
    }
}
`,N={root:function(n){var t=n.props;return"p-message p-component p-message-"+t.severity},wrapper:"p-message-wrapper",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close p-link",closeIcon:"p-message-close-icon"},M=S.extend({name:"message",css:L,classes:N}),K={name:"BaseMessage",extends:$,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},life:{type:Number,default:3e3},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:M,provide:function(){return{$parentInstance:this}}},V={name:"Message",extends:K,emits:["close"],timeout:null,data:function(){return{visible:!0}},watch:{sticky:function(n){n||this.closeAfterDelay()}},mounted:function(){this.sticky||this.closeAfterDelay()},methods:{close:function(n){this.visible=!1,this.$emit("close",n)},closeAfterDelay:function(){var n=this;setTimeout(function(){n.visible=!1},this.life)}},computed:{iconComponent:function(){return{info:v,success:f,warn:d,error:b}[this.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:P},components:{TimesIcon:k,InfoCircleIcon:v,CheckIcon:f,ExclamationTriangleIcon:d,TimesCircleIcon:b}};function l(e){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l(e)}function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,s)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?h(Object(t),!0).forEach(function(s){z(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function z(e,n,t){return n=R(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e){var n=W(e,"string");return l(n)=="symbol"?n:String(n)}function W(e,n){if(l(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var s=t.call(e,n||"default");if(l(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var X=["aria-label"];function Y(e,n,t,s,p,a){var w=j("TimesIcon"),I=B("ripple");return i(),u(E,o({name:"p-message",appear:""},e.ptm("transition")),{default:C(function(){return[g(y("div",o({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("root"),{"data-pc-name":"message"}),[e.$slots.container?c(e.$slots,"container",{key:0,onClose:a.close,closeCallback:a.close}):(i(),m("div",o({key:1,class:e.cx("wrapper")},e.ptm("wrapper")),[c(e.$slots,"messageicon",{class:"p-message-icon"},function(){return[(i(),u(D(e.icon?"span":a.iconComponent),o({class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16,["class"]))]}),y("div",o({class:["p-message-text",e.cx("text")]},e.ptm("text")),[c(e.$slots,"default")],16),e.closable?g((i(),m("button",o({key:0,class:e.cx("closeButton"),"aria-label":a.closeAriaLabel,type:"button",onClick:n[0]||(n[0]=function(O){return a.close(O)})},r(r(r({},e.closeButtonProps),e.ptm("button")),e.ptm("closeButton"))),[c(e.$slots,"closeicon",{},function(){return[e.closeIcon?(i(),m("i",o({key:0,class:[e.cx("closeIcon"),e.closeIcon]},r(r({},e.ptm("buttonIcon")),e.ptm("closeIcon"))),null,16)):(i(),u(w,o({key:1,class:[e.cx("closeIcon"),e.closeIcon]},r(r({},e.ptm("buttonIcon")),e.ptm("closeIcon"))),null,16,["class"]))]})],16,X)),[[I]]):A("",!0)],16))],16),[[T,p.visible]])]}),_:3},16)}V.render=Y;export{V as default};
