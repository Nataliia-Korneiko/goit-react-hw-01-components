(this["webpackJsonpmodule-reack-02"]=this["webpackJsonpmodule-reack-02"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__3dzvr",description:"Profile_description__2GJPq",avatar:"Profile_avatar__aV4u5",stats:"Profile_stats__25zJx",stats__item:"Profile_stats__item__e_Px5"}},function(e,a,t){e.exports={friend__list:"FriendList_friend__list__3Sm0q",item:"FriendList_item__-lYix",status:"FriendList_status__3C5jV",avatar:"FriendList_avatar__2fiZr",statusActive:"FriendList_statusActive__3IJF8",statusInactive:"FriendList_statusInactive__HSw0J"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__2QFok",title:"Statistics_title__3PVIg",stat__list:"Statistics_stat__list__3ox6s"}},,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e,a,t){e.exports={transaction__history:"TransactionHistory_transaction__history__kRsmT"}},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),s=t.n(c),i=t(1),l=t.n(i),o=function(e){var a=e.title,t=e.value;return r.a.createElement("li",{className:l.a.stats__item},r.a.createElement("span",{className:l.a.label},a),r.a.createElement("span",{className:l.a.quantity},t))};o.defaultProps={value:0};var m=o,u=function(e){return r.a.createElement("div",{className:l.a.profile},r.a.createElement("div",{className:l.a.description},r.a.createElement("img",{src:e.user.avatar,alt:"user avatar",className:l.a.avatar}),r.a.createElement("p",{className:l.a.name},e.user.name),r.a.createElement("p",{className:l.a.tag},"@".concat(e.user.tag)),r.a.createElement("p",{className:l.a.location},e.user.location)),r.a.createElement("ul",{className:l.a.stats},r.a.createElement(m,{title:"Followers",value:e.user.stats.followers}),r.a.createElement(m,{title:"Views",value:e.user.stats.views}),r.a.createElement(m,{title:"Likes",value:e.user.stats.likes})))};u.defaultProps={name:"",tag:"",location:"",avatar:""};var d=u,p=t(6),f=t(3),_=t.n(f);function b(){var e=Math.round(255*Math.random()),a=Math.round(255*Math.random()),t=Math.round(255*Math.random());return"rgb(".concat(e,", ").concat(a,", ").concat(t,")")}var y=function(e){var a=e.title,t=e.stats;return r.a.createElement("section",{className:_.a.statistics},r.a.createElement("h2",{className:_.a.title},a),r.a.createElement("ul",{className:_.a.stat__list},t.map((function(e){return r.a.createElement("li",{key:e.id,className:_.a.item,style:{backgroundColor:b()}},r.a.createElement("span",{className:_.a.label},e.label),r.a.createElement("span",{className:_.a.percentage},"".concat(e.percentage,"%")))}))))};y.defaultProps={title:"Upload Stats"};var v=y,E=t(7),w=t(2),h=t.n(w),g=function(e){var a=e.avatar,t=e.name,n=e.isOnline;return r.a.createElement("li",{className:h.a.item},r.a.createElement("span",{className:"".concat(h.a.status," ").concat(n?h.a.statusActive:h.a.statusInactive)}),r.a.createElement("img",{className:h.a.avatar,src:a,alt:"",width:"48"}),r.a.createElement("p",{className:h.a.name},t))};g.defaultProps={avatar:"",name:"",isOnline:!0};var N=g,P=function(e){var a=e.friends;return r.a.createElement("ul",{className:h.a.friend__list},a.map((function(e){return r.a.createElement(N,{key:"el.id",avatar:e.avatar,name:e.name,isOnline:e.isOnline})})))},O=t(8),k=t(9),x=t.n(k),J=function(e){var a=e.items;return r.a.createElement("table",{className:x.a.transaction__history},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Currency"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.amount),r.a.createElement("td",null,e.currency))}))))};J.defaultProps={items:[]};var L=J,S=t(10),j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{user:p}),r.a.createElement(v,{stats:E}),r.a.createElement(P,{friends:O}),r.a.createElement(L,{items:S}))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.ec019938.chunk.js.map