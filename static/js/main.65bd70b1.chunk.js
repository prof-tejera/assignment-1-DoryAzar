(this["webpackJsonpassignment-1"]=this["webpackJsonpassignment-1"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var i,a,r,s,o,c,l=n(1),u=n.n(l),p=n(26),d=n.n(p),b=(n(35),n(21)),j=n(6),h=n(2),f=n(3),O=n(5),m=n(4),v=(n(36),n(0)),g=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(v.jsx)("div",{className:"container",children:e})}}]),n}(l.Component),x=g,y=n(11),C=n(12),S=C.a.div(i||(i=Object(y.a)(["\n  width: 90%;\n  margin: 2rem;\n  min-width: 35rem;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n  margin-bottom: 10rem;\n\n"]))),N=C.a.div(a||(a=Object(y.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 3rem;\n  box-shadow: 0.8rem 0.8rem 1.4rem var(--bgLight-2), -0.2rem -0.2rem 1.8rem var(--tint);\n  transition: transform 1s;\n  transform-style: preserve-3d;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n  padding: 2rem;\n"]))),k=C.a.div(r||(r=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  font-size: 2rem;\n"]))),D=C.a.div(s||(s=Object(y.a)(["\n  margin: 4rem 0;\n"]))),T=C.a.table(o||(o=Object(y.a)([""]))),V=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(S,{children:[Object(v.jsx)(k,{children:this.props.title}),Object(v.jsx)(D,{children:this.props.component}),Object(v.jsx)(N,{children:Object(v.jsx)(T,{children:Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Prop"}),Object(v.jsx)("th",{children:"Description"}),Object(v.jsx)("th",{children:"Type"}),Object(v.jsx)("th",{children:"Default value"})]},1),this.props.propDocs.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.prop}),Object(v.jsx)("td",{children:e.description}),Object(v.jsx)("td",{children:e.type}),Object(v.jsx)("td",{children:Object(v.jsx)("code",{children:e.defaultValue})})]},t)}))]})})})]})}}]),n}(l.Component),I=V,_=(n(42),function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isStarted,n=void 0!==t&&t,i=e.value,a=void 0===i?"00:00:00":i,r=e.status,s=void 0===r?"":r;return Object(v.jsxs)("div",{className:"display_circular",children:[Object(v.jsxs)("div",{className:"marker",children:[s&&Object(v.jsx)("p",{className:"header",children:s}),Object(v.jsx)("p",{className:"value",children:a})]}),!!n&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"display_circular_back-1"}),Object(v.jsx)("div",{className:"display_circular_back-2"})]})]})}}]),n}(l.Component)),w=_,B=n(14),A=n(20),F=(n(43),n(17)),M=n.n(F),R=["id","value","isIconButton","iconName","classifiers","iconVisible","children"],q=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.value,i=void 0===n?"":n,a=e.isIconButton,r=void 0!==a&&a,s=e.iconName,o=void 0===s?"":s,c=e.classifiers,l=void 0===c?"btn_primary":c,u=e.iconVisible,p=void 0===u||u,d=e.children,b=Object(A.a)(e,R),j=[{icon_btn:r,btn:!r}],h=[{show:p,hide:!p}];return Object(v.jsxs)("div",Object(B.a)(Object(B.a)({id:t,value:i,className:M()(j,l)},b),{},{children:[r&&Object(v.jsx)("ion-icon",{value:i,class:M()(h),name:o}),!r&&d]}))}}]),n}(l.Component),E=q,L=(n(44),function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).handleChange=function(e){var t=e.target.value||i.state.tabSelected;i.setState({tabSelected:t}),i.props.onChange&&i.props.onChange(e.target.value)},i.state={tabSelected:e.tabItems?e.tabItems[0]:""},i}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=this.props.tabItems,n=void 0===t?[]:t;return Object(v.jsx)("div",{className:"btn_bar",children:Object(v.jsxs)("div",{className:"tab_control",children:[n.length<=4&&n.map((function(t,n){return Object(v.jsxs)(l.Fragment,{children:[Object(v.jsx)("input",{type:"radio",name:"radio"+(n+1),value:t,id:"tab-"+(n+1),checked:e.state.tabSelected===t,onChange:e.handleChange}),Object(v.jsx)("label",{htmlFor:"tab-"+(n+1),className:"tab_control_"+(n+1),children:Object(v.jsx)("p",{children:t})})]},n)})),Object(v.jsx)("div",{className:"tab_control_color"})]})})}}]),n}(l.Component)),P=n(19),H=(n(45),function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.side,n=void 0===t?"front":t,i=e.children,a=[Object(P.a)({},"panel_face_".concat(n),!!n)];return Object(v.jsx)("div",{className:M()(a),children:i})}}]),n}(l.Component)),z=H,G=(n(46),function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=void 0===t?"":t,i=e.children;return Object(v.jsx)("div",{className:"panel",children:Object(v.jsx)("div",{className:"panel_inner",id:n,children:i})})}}]),n}(l.Component)),J=G,X=(n(47),["label","placeholder"]),Y=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(e){var i,a;return Object(h.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({value:e.target.value}),a.props.onChange&&a.props.onChange(e)},a.state={value:null!==(i=e.value)&&void 0!==i?i:""},a}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.placeholder,i=Object(A.a)(e,X);return Object(v.jsx)(v.Fragment,{children:t&&Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("label",{className:"settings-label",children:t}),Object(v.jsx)("input",Object(B.a)(Object(B.a)({},i),{},{value:this.state.value,placeholder:n,onChange:this.handleChange}))]})})}}]),n}(l.Component),K=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).toggleCount=function(e){i.setState({timerCounting:!i.state.timerCounting}),i.props.onChange&&i.props.onChange(e)},i.flipSide=function(){i.setState({isFrontSide:!i.state.isFrontSide});var e=document.querySelector("#timer_panel");e&&e.classList.toggle("is-flipped")},i.saveSettings=function(e){console.log(e.target)},i.reset=function(e){i.setState({counter:i.props.startTime||"00:00:00"}),console.log("reset")},i.state={timerCounting:!1,isFrontSide:!0,statusMessage:e.statusMessage||"",counter:e.startTime||"00:00:00"},i}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props.settings,t=void 0===e?null:e;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(z,{side:"front",children:[Object(v.jsx)(w,{isStarted:this.state.timerCounting,status:this.state.statusMessage,value:this.state.counter}),Object(v.jsxs)("div",{className:"btn_bar",children:[this.state.timerCounting&&Object(v.jsx)(E,{id:"pause_btn",value:"pause",classifiers:"primary",isIconButton:!0,onClick:this.toggleCount,iconName:"pause"}),!this.state.timerCounting&&Object(v.jsx)(E,{id:"start_btn",value:"start",classifiers:"primary",isIconButton:!0,onClick:this.toggleCount,iconName:"play"}),Object(v.jsx)(E,{id:"reset_btn",value:"reset",classifiers:"primary",isIconButton:!0,onClick:this.reset,iconName:"refresh-outline"}),t&&Object(v.jsx)(E,{id:"settings_btn",value:"settings",classifiers:"secondary",isIconButton:!0,onClick:this.flipSide,iconName:"settings"})]})]}),Object(v.jsxs)(z,{side:"back",children:[Object(v.jsx)("h1",{children:"Settings"}),t&&Object(v.jsx)("div",{className:"settings-form",children:t.map((function(e,t){return Object(v.jsx)(Y,{label:e.label,placeholder:e.placeholder,value:e.value,id:"settings".concat(t)},t)}))}),Object(v.jsxs)("div",{className:"btn_bar",children:[Object(v.jsx)(E,{id:"back_btn",value:"back",isIconButton:!0,onClick:this.flipSide,iconName:"arrow-back-outline"}),Object(v.jsx)(E,{onClick:this.saveSettings,children:"Save"})]})]})]})}}]),n}(l.Component),Q=C.a.div(c||(c=Object(y.a)(["\n  font-size: 2rem;\n"]))),U=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).flip=function(){var e=document.querySelector("#testcard");e&&e.classList.toggle("is-flipped")},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Q,{children:"Documentation"}),Object(v.jsx)(I,{title:"Generic Timer",component:Object(v.jsx)(J,{children:Object(v.jsx)(K,{})}),propDocs:[{prop:"settings",description:"Collection that defines the allowed settings for a timer",type:"array of objects - [{label: 'label1', value: 'value1', placeholder: 'placeholder1'}, {...}]",defaultValue:"Optional. Default: []"},{prop:"statusMessage",description:"Status message that can be used for rounds/rest",type:"string",defaultValue:"Optional. Default: None"},{prop:"startTime",description:"Starting time for the timer",type:"string",defaultValue:"Optional. Default: 00:00:00"},{prop:"onChange",description:"Event handler for capturing values input on change",type:"func",defaultValue:"Optional. Default: None"}]}),Object(v.jsx)(I,{title:"Circular Display ",component:Object(v.jsx)(w,{isStarted:!0,status:"Status Text",value:"00:10:00"}),propDocs:[{prop:"isStarted",description:"Animates the circular display",type:"bool",defaultValue:"Optional. Default: false"},{prop:"status",description:"Status message that can be used for rounds/rest",type:"string",defaultValue:"Optional. Default: None"},{prop:"value",description:"Value to be displayed",type:"string",defaultValue:"Optional. Default: 00:00:00"}]}),Object(v.jsx)(I,{title:"Button ",component:Object(v.jsx)(E,{onClick:function(){return console.log("test")},children:"Text Button"}),propDocs:[{prop:"id",description:"Identifier for the button",type:"string",defaultValue:"Optional. Default: None"},{prop:"value",description:"Identifier for the action useful to identify the event",type:"string",defaultValue:"Optional. Default: None"},{prop:"isIconButton",description:"Creates an icon button",type:"boolean",defaultValue:"Optional. Default: false"},{prop:"iconName",description:"Name of the icon taken from ion icons. Applicable only when isIconButton is true",type:"string",defaultValue:"Optional. Default: None"},{prop:"iconVisible",description:"Sets the visibility of the icon in an Icon Button. Applicable only when isIconButton is true",type:"bool",defaultValue:"Optional. Default: true"},{prop:"classifiers",description:"CSS classes to append additional styles",type:"string",defaultValue:"Optional. Default: 'btn_primary' for text buttons. Possible values for icon buttons: 'primary', 'secondary'"},{prop:"onClick",description:"Event handler for clicking on a button",type:"function",defaultValue:"Required. Default: None"}]}),Object(v.jsx)(I,{title:"Button (with Icon configuration)",component:Object(v.jsx)(E,{id:"settings_btn",value:"settings",classifiers:"secondary",isIconButton:!0,onClick:function(){return console.log("icon button")},iconName:"settings"}),propDocs:[{prop:"id",description:"Identifier for the button",type:"string",defaultValue:"Optional. Default: None"},{prop:"value",description:"Identifier for the action useful to identify the event",type:"string",defaultValue:"Optional. Default: None"},{prop:"isIconButton",description:"Creates an icon button",type:"boolean",defaultValue:"Optional. Default: false"},{prop:"iconName",description:"Name of the icon taken from ion icons. Applicable only when isIconButton is true",type:"string",defaultValue:"Optional. Default: None"},{prop:"iconVisible",description:"Sets the visibility of the icon in an Icon Button. Applicable only when isIconButton is true",type:"bool",defaultValue:"Optional. Default: true"},{prop:"classifiers",description:"CSS classes to append additional styles",type:"string",defaultValue:"Optional. Default: 'btn_primary' for text buttons. Possible values for icon buttons: 'primary', 'secondary'"},{prop:"onClick",description:"Event handler for clicking on a button",type:"function",defaultValue:"Required. Default: None"}]}),Object(v.jsx)(I,{title:"Tabs ",component:Object(v.jsx)(L,{tabItems:["Tab 1","Tab 2","Tab 3","Tab 4"]}),propDocs:[{prop:"tabItems",description:"Array of tab labels. Max 4 tabs. If more, the control will not render",type:"Array of strings",defaultValue:"Optional. Default: []"},{prop:"onChange",description:"Event handler for capturing the selected tab",type:"func",defaultValue:"Optional. Default: None"}]}),Object(v.jsx)(I,{title:"Card ",component:Object(v.jsxs)(J,{id:"testcard",children:[Object(v.jsxs)(z,{side:"front",children:["front side",Object(v.jsx)(E,{onClick:this.flip,children:"Flip"})]}),Object(v.jsxs)(z,{side:"back",children:["back side",Object(v.jsx)(E,{onClick:this.flip,children:"Flip Again"})]})]}),propDocs:[{prop:"side",description:"Card container that flips using css. \n                Two Cards (front and back) need to be defined in order for flipping to work",type:"string",defaultValue:"Optional. Default: 'front'. Possible values: 'front' |  'back'"},{prop:"Children Nodes",description:"Accepts any React and HTML valid nodes. \n                An event within a child element of the card could trigger the flipping.\n                The event handler should query the id of Panel container and apply toggle('is-flipped') to\n                the queried element",type:"node",defaultValue:"Optional. Default: None"}]}),Object(v.jsx)(I,{title:"Panel ",component:Object(v.jsx)(J,{children:"Content goes here"}),propDocs:[{prop:"id",description:"Identifier for the panel that will allow flipping the cards",type:"string",defaultValue:"Optional. Default: None"},{prop:"Children Nodes",description:"Accepts any React and HTML valid nodes",type:"node",defaultValue:"Optional. Default: None"}]}),Object(v.jsx)(I,{title:"Container ",component:"Generic Empty Container",propDocs:[{prop:"Children Nodes",description:"Accepts any React and HTML valid nodes",type:"node",defaultValue:"Optional. Default: None"}]})]})}}]),n}(l.Component),W=U,Z=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsx)(K,{settings:[{label:"Start Time",value:"00:00:00",placeholder:"Start the timer at this time"},{label:"Stop Time",value:"00:30:00",placeholder:"Stop the timer at this time"}]})}}]),n}(l.Component),$=Z,ee=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsx)(K,{startTime:"00:30:00",settings:[{label:"Start Time",value:"00:30:00",placeholder:"Start the timer at this time"},{label:"Stop Time",value:"00:00:00",placeholder:"Stop the timer at this time"},{label:"Another setting",placeholder:"TBD"}]})}}]),n}(l.Component),te=ee,ne=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsx)(K,{statusMessage:"Round 1 of 2",startTime:"00:20:10",settings:[{label:"Start Time",value:"00:20:10",placeholder:"Start the timer at this time"},{label:"Stop Time",value:"00:00:00",placeholder:"Stop the timer at this time"},{label:"Rounds",value:"2",placeholder:"Stops after that many rounds"}]})}}]),n}(l.Component),ie=ne,ae=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsx)(K,{statusMessage:"Round 1 of 2",startTime:"00:45:00",settings:[{label:"Start Time",value:"00:45:00",placeholder:"Start the timer at this time"},{label:"Stop Time",value:"00:00:00",placeholder:"Stop the timer at this time"},{label:"Rest Time",value:"00:10:00",placeholder:"Timer will rest for that duration"},{label:"Rounds",value:"2",placeholder:"Stops after that many rounds"}]})}}]),n}(l.Component),re=ae;function se(e,t){return t.find((function(t){return t.title===e})).C}var oe=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).handleChange=function(e){i.setState({selectedTimer:e})},i.state={selectedTimer:"Stopwatch"},i}return Object(f.a)(n,[{key:"render",value:function(){var e,t,n=[{title:"Stopwatch",C:Object(v.jsx)($,{})},{title:"Countdown",C:Object(v.jsx)(te,{})},{title:"XY",C:Object(v.jsx)(ie,{})},{title:"Tabata",C:Object(v.jsx)(re,{})}];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(L,{tabItems:(e=n,t="title",e.map((function(e){return e[t]}))),onChange:this.handleChange}),Object(v.jsx)(J,{id:"timer_panel",children:se(this.state.selectedTimer,n)})]})}}]),n}(l.Component);var ce=function(){return Object(v.jsxs)(b.a,{children:[Object(v.jsx)("nav",{className:"navigation",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(b.b,{to:"/",children:"Timers"})},1),Object(v.jsx)("li",{children:Object(v.jsx)(b.b,{to:"/docs",children:"Documentation"})},2)]})}),Object(v.jsx)("br",{}),Object(v.jsx)(x,{children:Object(v.jsxs)(j.c,{children:[Object(v.jsx)(j.a,{path:"/docs",children:Object(v.jsx)(W,{})}),Object(v.jsx)(j.a,{path:"/",children:Object(v.jsx)(oe,{})})]})})]})};d.a.render(Object(v.jsx)(u.a.StrictMode,{children:Object(v.jsx)(ce,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.65bd70b1.chunk.js.map