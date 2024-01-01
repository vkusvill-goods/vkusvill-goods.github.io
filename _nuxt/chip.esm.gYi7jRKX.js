import{s as d}from"./index.esm.bW5di9rs.js";import{L as u,X as v,t as i,v as l,a3 as c,a0 as r,$ as a,a5 as t,a6 as p,y}from"./entry.IaLjdpt2.js";var h=`
@layer primevue {
    .p-chip {
        display: inline-flex;
        align-items: center;
    }

    .p-chip-text {
        line-height: 1.5;
    }

    .p-chip-icon.pi {
        line-height: 1.5;
    }

    .p-chip-remove-icon {
        line-height: 1.5;
        cursor: pointer;
    }

    .p-chip img {
        border-radius: 50%;
    }
}
`,f={root:function(n){var s=n.props;return["p-chip p-component",{"p-chip-image":s.image!=null}]},icon:"p-chip-icon",label:"p-chip-text",removeIcon:"p-chip-remove-icon"},b=u.extend({name:"chip",css:h,classes:f}),g={name:"BaseChip",extends:v,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:b,provide:function(){return{$parentInstance:this}}},k={name:"Chip",extends:g,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(n){(n.key==="Enter"||n.key==="Backspace")&&this.close(n)},close:function(n){this.visible=!1,this.$emit("remove",n)}},components:{TimesCircleIcon:d}},C=["aria-label"],w=["src"];function I(e,n,s,K,m,o){return m.visible?(i(),l("div",a({key:0,class:e.cx("root"),"aria-label":e.label},e.ptm("root"),{"data-pc-name":"chip"}),[c(e.$slots,"default",{},function(){return[e.image?(i(),l("img",a({key:0,src:e.image},e.ptm("image")),null,16,w)):e.$slots.icon?(i(),t(p(e.$slots.icon),a({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(i(),l("span",a({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):r("",!0),e.label?(i(),l("div",a({key:3,class:e.cx("label")},e.ptm("label")),y(e.label),17)):r("",!0)]}),e.removable?c(e.$slots,"removeicon",{key:0,onClick:o.close,onKeydown:o.onKeydown,removeCallback:o.close,keydownCallback:o.onKeydown},function(){return[(i(),t(p(e.removeIcon?"span":"TimesCircleIcon"),a({tabindex:"0",class:[e.cx("removeIcon"),e.removeIcon],onClick:o.close,onKeydown:o.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):r("",!0)],16,C)):r("",!0)}k.render=I;export{k as default};
