import{F as r,P as e,v as t,x as n,X as s,S as p}from"./entry.GSUHCPc6.js";var o=`
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,v={root:"p-avatar-group p-component"},c=r.extend({name:"avatargroup",css:o,classes:v}),l={name:"BaseAvatarGroup",extends:e,style:c,provide:function(){return{$parentInstance:this}}},i={name:"AvatarGroup",extends:l};function u(a,d,m,g,$,f){return t(),n("div",p({class:a.cx("root")},a.ptm("root"),{"data-pc-name":"avatargroup"}),[s(a.$slots,"default")],16)}i.render=u;export{i as default};
