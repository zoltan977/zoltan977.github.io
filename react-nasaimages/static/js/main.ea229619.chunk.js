(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{19:function(e,t,n){e.exports={ContentCard:"contentCard_ContentCard__17TWY",content:"contentCard_content__2FbbC",info:"contentCard_info__2mUk3",hide:"contentCard_hide__1ruxa",show:"contentCard_show__cuORa"}},23:function(e,t,n){e.exports={Home:"home_Home__2oLwk",dashboard:"home_dashboard__1Ioio",content:"home_content__1oxTg",cardContainer:"home_cardContainer__2Ye7E"}},31:function(e,t,n){e.exports={Popup:"popup_Popup__3ijCL",showPopup:"popup_showPopup__3Xh3Z",close:"popup_close__nDZf-"}},35:function(e,t,n){e.exports={Content:"content_Content__3fis_",isClickable:"content_isClickable__3vPwt"}},37:function(e,t,n){e.exports={App:"App_App__2av6F"}},38:function(e,t,n){e.exports={ToastMessage:"toastMessage_ToastMessage__1cmeV"}},39:function(e,t,n){e.exports={Gallery:"gallery_Gallery__2VhmG"}},40:function(e,t,n){e.exports={Item:"item_Item__312bi"}},41:function(e,t,n){e.exports={LoadingMask:"loadingMask_LoadingMask__2g6d9"}},42:function(e,t,n){e.exports={ErrorBoundary:"errorBoundary_ErrorBoundary__1hxhH"}},43:function(e,t,n){e.exports={Header:"navbar_Header__oOq0U",active:"navbar_active__3sBI5"}},53:function(e,t,n){},55:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(25),o=n.n(r),i=(n(53),n(54),n(55),n(37)),s=n.n(i),u=n(22),l=n(5),d=n(7),j=n(18),b=n.n(j),p=n(26),O=n(4),h=(n(57),n(23)),f=n.n(h),v=n(14),x=n.n(v),_=n(17),m=n(72),g=n(30);function C(e){var t,n,a,c,r;return(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.msg)||(null===(a=e.response)||void 0===a||null===(c=a.data)||void 0===c||null===(r=c.error)||void 0===r?void 0:r.message)||e.message||"Valami hiba t\xf6rt\xe9nt"}var k=n(38),y=n.n(k),S=n(2);function w(e){var t=e.error;return Object(S.jsxs)("div",{className:y.a.ToastMessage,children:[Object(S.jsx)("p",{children:"Server error message:"}),Object(S.jsx)("p",{children:C(t)})]})}var I=function(e){return console.log("errorResponseHandler error: ",e),g.b.error(Object(S.jsx)(w,{error:e})),Promise.reject(e)},P=m.a.create({baseURL:_.a.API_BASE_URL});P.interceptors.response.use((function(e){return e}),I),P.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)}));var N=P,E=n(19),D=n.n(E),M=n(35),L=n.n(M);function H(e){var t=e.data,n=e.isClickable,c=Object(a.useState)(null),r=Object(O.a)(c,2),o=r[0],i=r[1],s=Object(a.useState)(null),u=Object(O.a)(s,2),l=u[0],j=u[1];return t&&(null===t||void 0===t?void 0:t.title)&&(null===t||void 0===t?void 0:t.url)&&Object(S.jsx)("div",{className:L.a.Content,children:"video"===(null===t||void 0===t?void 0:t.media_type)?Object(S.jsx)("iframe",{className:x()(Object(d.a)({},L.a.isClickable,n)),title:t.title,src:"".concat(t.url,"?autoplay=1&mute=1")}):Object(S.jsx)("img",{alt:"",src:"".concat(t.url),style:l&&o&&{objectPosition:"calc(50% + ".concat(o.x-l.x,"px) calc(50% + ").concat(o.y-l.y,"px)")},onMouseDown:function(e){e.preventDefault(),j({x:e.clientX,y:e.clientY})},onMouseMove:function(e){i({x:e.clientX,y:e.clientY})},onMouseUp:function(e){j(null)}})})}function T(e){var t,n=e.data,c=Object(a.useState)(""),r=Object(O.a)(c,2),o=r[0],i=r[1];return(null===n||void 0===n?void 0:n.title)&&(null===n||void 0===n?void 0:n.url)?Object(S.jsxs)("div",{className:D.a.ContentCard,children:[Object(S.jsx)("h2",{onClick:function(e){return i((function(e){return function(e){return""===e?"show":"show"===e?"hide":"hide"===e?"show":void 0}(e)}))},children:null===n||void 0===n?void 0:n.title}),Object(S.jsxs)("div",{className:D.a.content,children:[Object(S.jsx)(H,{data:n,isClickable:!0}),Object(S.jsx)("p",{onTransitionEnd:function(e){e.stopPropagation(),"hide"===o&&i("")},className:x()(D.a.info,(t={},Object(d.a)(t,D.a.show,"show"===o),Object(d.a)(t,D.a.hide,"hide"===o),t)),children:null===n||void 0===n?void 0:n.explanation})]})]}):Object(S.jsx)("p",{children:null===n||void 0===n?void 0:n.explanation})}var A=n(47);function B(){var e,t=Object(a.useState)((new Date).toISOString().slice(0,10)),n=Object(O.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(null),i=Object(O.a)(o,2),s=i[0],u=i[1],l=Object(a.useState)(""),j=Object(O.a)(l,2),h=j[0],v=j[1],m=Object(a.useState)(!0),g=Object(O.a)(m,2),k=g[0],y=g[1],w=Object(a.useRef)(),I=function(){var e=Object(p.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=2;break}return e.abrupt("return");case 2:return v("flyOut"),e.prev=3,e.next=6,N.get("apod?date=".concat(c,"&api_key=").concat(_.a.API_KEY));case 6:n=e.sent,console.log("response: ",n),t=n.data,e.next=16;break;case 11:return e.prev=11,e.t0=e.catch(3),console.log("error: ",e.t0),u({title:"",url:"",explanation:C(e.t0)}),e.abrupt("return");case 16:u(t);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),P=function(e){var t=new Date(e),n=new Date(c);return y(t<n),"Invalid Date"===t.toString()?(new Date).toISOString().slice(0,10):t.toISOString().slice(0,10)},E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!h){var t=864e5,n=e?t:-1*t;r((function(e){var t=new Date(e).getTime();return P(t+n)}))}};return Object(a.useEffect)((function(){I()}),[c]),Object(S.jsxs)("div",{className:f.a.Home,style:{backgroundImage:'url("bkg.jpg")',backgroundSize:"cover"},children:[Object(S.jsxs)("div",{className:f.a.dashboard,children:[Object(S.jsx)("button",{onClick:function(){return E()},disabled:h,children:"-"}),Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{disabled:h,type:"date",value:c,onChange:function(e){return r(P(e.target.value))}}),Object(S.jsx)("button",{onClick:function(){return I()},disabled:h,children:"Set"})]}),Object(S.jsx)("button",{onClick:function(){return E(!0)},disabled:h,children:"+"})]}),Object(S.jsxs)("div",{className:f.a.content,children:[Object(S.jsx)("span",{onClick:function(){return E()},children:"\u21e6"}),Object(S.jsx)(A.a,{ref:w,className:x()(f.a.cardContainer,(e={},Object(d.a)(e,"animate__animated",h),Object(d.a)(e,"animate__faster",h),Object(d.a)(e,"animate__bounce".concat(k?"InRight":"InLeft"),"flyIn"===h),Object(d.a)(e,"animate__bounce".concat(k?"OutLeft":"OutRight"),"flyOut"===h),e)),onAnimationEnd:function(e){e.animationName.includes("Out")?v("flyIn"):v(""),w.current.updateSize({width:"70vw",height:"auto"})},children:Object(S.jsx)(T,{data:s})}),Object(S.jsx)("span",{onClick:function(){return E(!0)},children:"\u21e8"})]})]})}var R=n(39),F=n.n(R),Y=n(40),G=n.n(Y);function U(e){var t=e.imageData,n=e.setSelectedImage;return Object(S.jsx)("div",{className:G.a.Item,onClick:function(e){return n(t)},children:Object(S.jsx)(H,{data:t})})}var X=n(31),z=n.n(X);function V(e){var t=e.selectedImage,n=e.showPopup,a=e.setShowPopup,c=e.onPopupClosed;return Object(S.jsxs)("div",{onTransitionEnd:function(e){n||c()},className:x()(z.a.Popup,Object(d.a)({},z.a.showPopup,n)),children:[Object(S.jsx)("span",{className:z.a.close,onClick:function(e){return a(!1)},children:"X"}),Object(S.jsx)(T,{data:t})]})}var q=n(41),J=n.n(q);function K(){return Object(S.jsx)("div",{className:J.a.LoadingMask,children:Object(S.jsx)("img",{src:"loading.gif",alt:""})})}function Z(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),o=Object(O.a)(r,2),i=o[0],s=o[1],u=Object(a.useState)(!1),l=Object(O.a)(u,2),d=l[0],j=l[1],h=Object(a.useState)(!1),f=Object(O.a)(h,2),v=f[0],x=f[1];return Object(a.useEffect)((function(){i&&j(!0)}),[i]),Object(a.useEffect)((function(){(function(){var e=Object(p.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,N("apod?count=9&api_key=".concat(_.a.API_KEY));case 4:n=e.sent,t=n.data,x(!1),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),x(!1),e.abrupt("return");case 13:c(t);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(S.jsxs)("div",{className:F.a.Gallery,style:{backgroundImage:'url("bkg2.jpg")',backgroundSize:"cover"},children:[v&&Object(S.jsx)(K,{}),Object(S.jsx)(V,{selectedImage:i,showPopup:d,setShowPopup:j,onPopupClosed:function(){s(null)}}),n.map((function(e,t){return Object(S.jsx)(U,{imageData:e,setSelectedImage:s},t)}))]})}var W=n(11),Q=n(12),$=n(48),ee=n(46),te=n(42),ne=n.n(te),ae=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(e){var a;return Object(W.a)(this,n),(a=t.call(this,e)).state={error:null,errorInfo:null},a}return Object(Q.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?Object(S.jsx)("section",{className:ne.a.ErrorBoundary,children:Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:"Hopp\xe1 valami elromlott!"}),Object(S.jsxs)("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),Object(S.jsx)("br",{})]})]})}):this.props.children}}]),n}(c.a.Component),ce=n(43),re=n.n(ce);function oe(){return Object(S.jsxs)("header",{className:re.a.Header,children:[Object(S.jsx)(u.b,{to:"/",exact:!0,children:"Home"})," ","| ",Object(S.jsx)(u.b,{to:"/gallery",children:"Gallery"})]})}var ie=function(){return Object(S.jsxs)(ae,{children:[Object(S.jsx)(u.a,{children:Object(S.jsxs)("div",{className:s.a.App,children:[Object(S.jsx)(oe,{}),Object(S.jsxs)(l.d,{children:[Object(S.jsx)(l.b,{path:"/gallery",component:Z}),Object(S.jsx)(l.b,{exact:!0,path:"/",children:Object(S.jsx)(B,{})}),Object(S.jsx)(l.a,{to:"/"})]})]})}),Object(S.jsx)(g.a,{})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(ie,{})}),document.getElementById("root")),se()}},[[70,1,2]]]);
//# sourceMappingURL=main.ea229619.chunk.js.map