import{L as o,X as n,t as s,v as l,x as a,a3 as t,$ as r}from"./entry.IaLjdpt2.js";var p=`
@layer primevue {
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .p-toolbar-group-start,
    .p-toolbar-group-center,
    .p-toolbar-group-end {
        display: flex;
        align-items: center;
    }

    .p-toolbar-group-left,
    .p-toolbar-group-right {
        display: flex;
        align-items: center;
    }
}
`,i={root:"p-toolbar p-component",start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},d=o.extend({name:"toolbar",css:p,classes:i}),b={name:"BaseToolbar",extends:n,props:{ariaLabelledby:{type:String,default:null}},style:d,provide:function(){return{$parentInstance:this}}},c={name:"Toolbar",extends:b},u=["aria-labelledby"];function g(e,m,v,y,f,$){return s(),l("div",r({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptm("root"),{"data-pc-name":"toolbar"}),[a("div",r({class:e.cx("start")},e.ptm("start")),[t(e.$slots,"start")],16),a("div",r({class:e.cx("center")},e.ptm("center")),[t(e.$slots,"center")],16),a("div",r({class:e.cx("end")},e.ptm("end")),[t(e.$slots,"end")],16)],16,u)}c.render=g;export{c as default};
