"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{164:function(e,t,r){var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=r(7294),n=(a=l)&&a.__esModule?a:{default:a},i=r(5237);var d={left:[i.RibbonStyle.leftStyle,i.RibbonStyleWrapper.leftStyle],right:[i.RibbonStyle.rightStyle,i.RibbonStyleWrapper.rightStyle],"left-bottom":[i.RibbonStyle.leftBottomStyle,i.RibbonStyleWrapper.leftBottomStyle],"right-bottom":[i.RibbonStyle.rightBottomStyle,i.RibbonStyleWrapper.rightBottomStyle]},c={red:i.RibbonStyle.redColor,orange:i.RibbonStyle.orangeColor,black:i.RibbonStyle.blackColor,green:i.RibbonStyle.greenColor};t.Z=r.g.RibbonStyle=function(e){var t=e.position,r=void 0===t?"right":t,a=e.href,l=e.target,s=e.color,b=void 0===s?"red":s,p=e.className,g=void 0===p?"":p,m=e.children,f=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["position","href","target","color","className","children"]),h=d[r]||[i.RibbonStyle.rightStyle,i.RibbonStyleWrapper.rightStyle],u=c[b]||i.RibbonStyle.redColor;h[0]===i.RibbonStyle.rightStyle&&(r="right");var y=o({},i.RibbonStyle.baseStyle,h[0],u),S=o({},i.RibbonStyleWrapper.baseStyle,h[1]);return n.default.createElement("div",o({},f,{className:"github-fork-ribbon-wrapper "+r+" "+g,style:S}),n.default.createElement("div",{className:"github-fork-ribbon",style:y},n.default.createElement("a",{href:a,target:l,style:i.RibbonStyle.urlStyle,rel:"noopener"},m)))}},5237:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.RibbonStyle={baseStyle:{position:"absolute",padding:"2px 0",backgroundColor:"#a00",backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))",WebkitBoxShadow:"0 2px 3px 0 rgba(0, 0, 0, 0.5)",MozBoxShadow:"0 2px 3px 0 rgba(0, 0, 0, 0.5)",boxShadow:"0 2px 3px 0 rgba(0, 0, 0, 0.5)",font:'700 13px "Helvetica Neue", Helvetica, Arial, sans-serif',zIndex:"9999",pointerEvents:"auto"},urlStyle:{color:"#fff",textDecoration:"none",textShadow:"0 -1px rgba(0, 0, 0, 0.5)",textAlign:"center",width:"200px",lineHeight:"20px",display:"inline-block",padding:"2px 0",borderWidth:"1px 0",borderStyle:"dashed",borderColor:"rgba(255, 255, 255, 0.7)"},redColor:{backgroundColor:"#a00"},orangeColor:{backgroundColor:"#f80"},blackColor:{backgroundColor:"#333"},greenColor:{backgroundColor:"#090"},leftStyle:{top:"42px",left:"-43px",WebkitTransform:"rotate(-45deg)",MozTransform:"rotate(-45deg)",msTransform:"rotate(-45deg)",OTransform:"rotate(-45deg)",transform:"rotate(-45deg)"},rightStyle:{top:"42px",right:"-43px",WebkitTransform:"rotate(45deg)",MozTransform:"rotate(45deg)",msTransform:"rotate(45deg)",OTransform:"rotate(45deg)",transform:"rotate(45deg)"},leftBottomStyle:{top:"80px",left:"-43px",WebkitTransform:"rotate(45deg)",MozTransform:"rotate(45deg)",msTransform:"rotate(45deg)",OTransform:"rotate(45deg)",transform:"rotate(45deg)"},rightBottomStyle:{top:"80px",right:"-43px",WebkitTransform:"rotate(-45deg)",MozTransform:"rotate(-45deg)",msTransform:"rotate(-45deg)",OTransform:"rotate(-45deg)",transform:"rotate(-45deg)"}},t.RibbonStyleWrapper={baseStyle:{width:"150px",height:"150px",position:"absolute",overflow:"hidden",top:0,zIndex:"9999",pointerEvents:"none"},fixedStyle:{position:"fixed"},leftStyle:{left:0},rightStyle:{right:0},leftBottomStyle:{position:"fixed",top:"inherit",bottom:0,left:0},rightBottomStyle:{position:"fixed",top:"inherit",bottom:0,right:0}}},3623:function(e,t,r){r.d(t,{Z:function(){return y}});var a=r(7462),o=r(6010),l=r(7294),n=r(8459),i=r(8935),d=r(2519),c=r(2248),s=r(5150),b=r(5517),p=r(727);function g(e){var t=e.children,r=e.className,n=e.content,s=(0,o.Z)("sub header",r),b=(0,i.Z)(g,e),p=(0,d.Z)(g,e);return l.createElement(p,(0,a.Z)({},b,{className:s}),c.kK(t)?n:t)}g.handledProps=["as","children","className","content"],g.propTypes={},g.create=(0,p.u5)(g,(function(e){return{content:e}}));var m=g;function f(e){var t=e.children,r=e.className,n=e.content,s=(0,o.Z)("content",r),b=(0,i.Z)(f,e),p=(0,d.Z)(f,e);return l.createElement(p,(0,a.Z)({},b,{className:s}),c.kK(t)?n:t)}f.handledProps=["as","children","className","content"],f.propTypes={};var h=f;function u(e){var t=e.attached,r=e.block,p=e.children,g=e.className,f=e.color,y=e.content,S=e.disabled,v=e.dividing,x=e.floated,k=e.icon,Z=e.image,G=e.inverted,N=e.size,R=e.sub,T=e.subheader,C=e.textAlign,z=(0,o.Z)("ui",f,N,(0,n.lG)(r,"block"),(0,n.lG)(S,"disabled"),(0,n.lG)(v,"dividing"),(0,n.cD)(x,"floated"),(0,n.lG)(!0===k,"icon"),(0,n.lG)(!0===Z,"image"),(0,n.lG)(G,"inverted"),(0,n.lG)(R,"sub"),(0,n.sU)(t,"attached"),(0,n.X4)(C),"header",g),E=(0,i.Z)(u,e),W=(0,d.Z)(u,e);if(!c.kK(p))return l.createElement(W,(0,a.Z)({},E,{className:z}),p);var w=s.Z.create(k,{autoGenerateKey:!1}),O=b.Z.create(Z,{autoGenerateKey:!1}),B=m.create(T,{autoGenerateKey:!1});return w||O?l.createElement(W,(0,a.Z)({},E,{className:z}),w||O,(y||B)&&l.createElement(h,null,y,B)):l.createElement(W,(0,a.Z)({},E,{className:z}),y,B)}u.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],u.propTypes={},u.Content=h,u.Subheader=m;var y=u},4623:function(e,t,r){r.d(t,{Z:function(){return f}});var a=r(7462),o=r(6010),l=r(7294),n=r(8459),i=r(8935),d=r(2519),c=r(2248);function s(e){var t=e.children,r=e.className,b=e.compact,p=e.content,g=e.horizontal,m=e.piled,f=e.raised,h=e.size,u=e.stacked,y=(0,o.Z)("ui",h,(0,n.lG)(b,"compact"),(0,n.lG)(g,"horizontal"),(0,n.lG)(m,"piled"),(0,n.lG)(f,"raised"),(0,n.lG)(u,"stacked"),"segments",r),S=(0,i.Z)(s,e),v=(0,d.Z)(s,e);return l.createElement(v,(0,a.Z)({},S,{className:y}),c.kK(t)?p:t)}s.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"],s.propTypes={};var b=s;function p(e){var t=e.children,r=e.className,n=e.content,s=(0,o.Z)("inline",r),b=(0,i.Z)(p,e),g=(0,d.Z)(p,e);return l.createElement(g,(0,a.Z)({},b,{className:s}),c.kK(t)?n:t)}p.handledProps=["as","children","className","content"],p.propTypes={};var g=p;function m(e){var t=e.attached,r=e.basic,s=e.children,b=e.circular,p=e.className,g=e.clearing,f=e.color,h=e.compact,u=e.content,y=e.disabled,S=e.floated,v=e.inverted,x=e.loading,k=e.placeholder,Z=e.padded,G=e.piled,N=e.raised,R=e.secondary,T=e.size,C=e.stacked,z=e.tertiary,E=e.textAlign,W=e.vertical,w=(0,o.Z)("ui",f,T,(0,n.lG)(r,"basic"),(0,n.lG)(b,"circular"),(0,n.lG)(g,"clearing"),(0,n.lG)(h,"compact"),(0,n.lG)(y,"disabled"),(0,n.lG)(v,"inverted"),(0,n.lG)(x,"loading"),(0,n.lG)(k,"placeholder"),(0,n.lG)(G,"piled"),(0,n.lG)(N,"raised"),(0,n.lG)(R,"secondary"),(0,n.lG)(C,"stacked"),(0,n.lG)(z,"tertiary"),(0,n.lG)(W,"vertical"),(0,n.sU)(t,"attached"),(0,n.sU)(Z,"padded"),(0,n.X4)(E),(0,n.cD)(S,"floated"),"segment",p),O=(0,i.Z)(m,e),B=(0,d.Z)(m,e);return l.createElement(B,(0,a.Z)({},O,{className:w}),c.kK(s)?u:s)}m.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"],m.Group=b,m.Inline=g,m.propTypes={};var f=m}}]);