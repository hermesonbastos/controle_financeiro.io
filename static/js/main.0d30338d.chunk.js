(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(26)},26:function(e,n,t){"use strict";t.r(n);var a,r,i,c,l,o,d,u,p,m,s,x,b,f,g,h,E,j,w,O,v,y,k=t(0),S=t.n(k),C=t(10),I=t(14),F=t(3),N=t(1),z=t(2),J=Object(z.a)(a||(a=Object(N.a)(["\n\n  * {\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: 'Poppins', sans-serif;\n    background-color: #f2f2f2;\n  }\n"]))),D=z.b.div(r||(r=Object(N.a)(["\n  display: flex;\n  padding: 100px;\n  align-items: center;\n  text-align: center;\n  background: black;\n\n  @media (max-width: 750px) {\n    padding: 50px 100px;\n  }\n"]))),L=z.b.h1(i||(i=Object(N.a)(["\n  margin: 0 auto;\n"]))),R=z.b.div(c||(c=Object(N.a)(["\n  margin: auto auto;\n  color: #fff;\n\n  @media (max-width: 750px) {\n    position: relative;\n    top: -15px;\n  }\n"]))),T=function(){return S.a.createElement(D,null,S.a.createElement(L,null,S.a.createElement(R,null,"Controle Financeiro")))},M=z.b.div(l||(l=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 5px 15px;\n  width: 30%;\n  box-shadow: 0px 0px 5px #d4d4d4;\n\n  @media (max-width: 750px) {\n    width: 20%;\n\n    p {\n      font-size: 12px;\n    }\n\n    span {\n      font-size: 20px;\n    }\n\n    svg {\n      display: none;\n    }\n  }\n\n  @media (max-width: 750px){\n    width: 20rem;\n  }\n"]))),$=z.b.header(o||(o=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  gap: 10px;\n  margin: 20px;\n  \n  svg {\n    width: 25px;\n    height: 25px;\n  }\n"]))),q=z.b.p(d||(d=Object(N.a)(["\n  font-size: 20px;\n"]))),A=z.b.span(u||(u=Object(N.a)(["\n  font-size: 30px;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]))),V=function(e){var n=e.title,t=e.Icon,a=e.value;return S.a.createElement(M,null,S.a.createElement($,null,S.a.createElement(q,null,n),S.a.createElement(t,null)),S.a.createElement(A,null,a))},P=z.b.div(p||(p=Object(N.a)(["\n  max-width: 1120px;\n  width: 98%;\n  margin: 0 auto;\n  display: flex;\n  gap: 20px;\n  margin-top: -40px;\n  justify-content: space-around;\n\n  @media (max-width: 750px){\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n  }\n"]))),B=t(4),G=function(e){var n=e.income,t=e.expense,a=e.total;return S.a.createElement(P,null,S.a.createElement(V,{title:"Entradas",Icon:B.c,value:n}),S.a.createElement(V,{title:"Sa\xeddas",Icon:B.b,value:t}),S.a.createElement(V,{title:"Total",Icon:B.a,value:a}))},H=z.b.tr(m||(m=Object(N.a)([""]))),K=z.b.td(s||(s=Object(N.a)(["\n  padding-top: 15px;\n  text-align: ",";\n  word-break: break-all;\n\n  svg {\n    width: 18px;\n    height: 18px;\n  }\n"])),function(e){return e.alignCenter?"center":"start"}),Q=function(e){var n=e.item,t=e.onDelete;return S.a.createElement(H,null,S.a.createElement(K,null,n.desc),S.a.createElement(K,null,n.amount),S.a.createElement(K,{alignCenter:!0},n.expense?S.a.createElement(B.b,{color:"red"}):S.a.createElement(B.c,{color:"green"})),S.a.createElement(K,{alignCenter:!0},S.a.createElement(B.d,{style:{cursor:"pointer"},onClick:function(){return t(n.id)}})))},U=z.b.table(x||(x=Object(N.a)(["\n  width: 98%;\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  max-width: 1120px;\n  margin: 20px auto;\n  box-shadow: 0px 0px 5px #d4d4d4;\n\n  @media (max-width: 750px) {\n    width: 22rem;\n  }\n"]))),W=z.b.thead(b||(b=Object(N.a)([""]))),X=z.b.tbody(f||(f=Object(N.a)([""]))),Y=z.b.tr(g||(g=Object(N.a)([""]))),Z=z.b.th(h||(h=Object(N.a)(["\n  border-bottom: inset;\n  padding-bottom: 5px;\n  text-align: ",";\n  width: ",";\n"])),function(e){return e.alignCenter?"center":"start"},function(e){return e.width?e.width+"%":"auto"}),_=function(e){var n=e.itens,t=e.setItens,a=function(e){var a=n.filter(function(n){return n.id!==e});t(a),localStorage.setItem("transactions",JSON.stringify(a))};return S.a.createElement(U,null,S.a.createElement(W,null,S.a.createElement(Y,null,S.a.createElement(Z,{width:40},"Descri\xe7\xe3o"),S.a.createElement(Z,{width:40},"Valor"),S.a.createElement(Z,{width:10,alignCenter:!0},"Tipo"),S.a.createElement(Z,{width:10}))),S.a.createElement(X,null,n.map(function(e,n){return S.a.createElement(Q,{key:n,item:e,onDelete:a})})))},ee=z.b.div(E||(E=Object(N.a)(["\n  max-width: 1120px;\n  margin: 20px auto;\n  box-shadow: 0px 0px 5px #d4d4d4;\n  width: 98%;\n  background-color: #fff;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-around;\n  padding: 15px 0px;\n  gap: 10px;\n\n  @media (max-width: 750px) {\n    display: grid;\n    width: 22rem;\n    padding-block: 30px;\n  }\n"]))),ne=z.b.div(j||(j=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),te=z.b.label(w||(w=Object(N.a)(["\n  margin: 6px 5px;\n"]))),ae=z.b.input(O||(O=Object(N.a)(["\n  outline: none;\n  border-radius: 5px;\n  padding: 5px 10px;\n  font-size: 15px;\n  border: 1px solid #ccc;\n"]))),re=z.b.div(v||(v=Object(N.a)(["\n  display: flex;\n  align-items: center;\n\n  input {\n    margin-left: 20px;\n    accent-color: black;\n    margin-top: 0;\n  }\n  \n  @media (max-width: 750px) {\n    margin: 10px;\n  }\n"]))),ie=z.b.button(y||(y=Object(N.a)(["\n  padding-inline: 10px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  color: white;\n  background-color: ",";\n  font-weight: bold;\n  text-transform: uppercase;\n\n  @media (max-width: 750px) {\n    justify-self: center;\n    padding: 10px 10px;\n    margin-top: 5px;\n    width: 10em;\n  }\n"])),function(e){return e.color?e.color:"#01da47"}),ce=function(e){var n=e.handleAdd,t=e.clearStorage,a=e.transactionsList,r=e.setTransactionsList,i=Object(k.useState)(""),c=Object(F.a)(i,2),l=c[0],o=c[1],d=Object(k.useState)(""),u=Object(F.a)(d,2),p=u[0],m=u[1],s=Object(k.useState)(!1),x=Object(F.a)(s,2),b=x[0],f=x[1];return S.a.createElement(S.a.Fragment,null,S.a.createElement(ee,null,S.a.createElement(ne,null,S.a.createElement(te,null,"Descri\xe7\xe3o:"),S.a.createElement(ae,{value:l,onChange:function(e){return o(e.target.value)}})),S.a.createElement(ne,null,S.a.createElement(te,null,"Valor:"),S.a.createElement(ae,{value:p,type:"number",onChange:function(e){return m(e.target.value)}})),S.a.createElement(re,null,S.a.createElement(ae,{type:"radio",defaultChecked:!0,id:"rIncome",name:"group1",onChange:function(){return f(!b)}}),S.a.createElement(te,{htmlFor:"rIncome"},"Entrada"),S.a.createElement(ae,{type:"radio",id:"rExpenses",name:"group1",onChange:function(){return f(!b)}}),S.a.createElement(te,{htmlFor:"rExpenses"},"Sa\xedda")),S.a.createElement(ie,{onClick:function(){if(l&&p)if(p<1)alert("O valor tem que ser positivo!");else{var e={id:Math.round(1e3*Math.random()),desc:l,amount:p,expense:b};n(e),o(""),m("")}else alert("Informe a descri\xe7\xe3o e o valor!")}},"adicionar"),S.a.createElement(ie,{color:"black",onClick:t},"limpar dados")),S.a.createElement(_,{itens:a,setItens:r}))},le=function(){var e=localStorage.getItem("transactions"),n=Object(k.useState)(e?JSON.parse(e):[]),t=Object(F.a)(n,2),a=t[0],r=t[1],i=Object(k.useState)(0),c=Object(F.a)(i,2),l=c[0],o=c[1],d=Object(k.useState)(0),u=Object(F.a)(d,2),p=u[0],m=u[1],s=Object(k.useState)(0),x=Object(F.a)(s,2),b=x[0],f=x[1];Object(k.useEffect)(function(){var e=a.filter(function(e){return e.expense}).map(function(e){return Number(e.amount)}),n=a.filter(function(e){return!e.expense}).map(function(e){return Number(e.amount)}),t=e.reduce(function(e,n){return e+n},0).toFixed(2),r=n.reduce(function(e,n){return e+n},0).toFixed(2),i=Math.abs(r-t).toFixed(2);o("R$ ".concat(r)),m("R$ ".concat(t)),f("".concat(Number(r)<Number(t)?"-":"","R$ ").concat(i))},[a]);return S.a.createElement(S.a.Fragment,null,S.a.createElement(T,null),S.a.createElement(G,{income:l,expense:p,total:b}),S.a.createElement(ce,{clearStorage:function(){r([]),localStorage.clear()},handleAdd:function(e){var n=[].concat(Object(I.a)(a),[e]);r(n),localStorage.setItem("transactions",JSON.stringify(n))},transactionsList:a,setTransactionsList:r}),S.a.createElement(J,null))};Object(C.createRoot)(document.querySelector("#root")).render(S.a.createElement(le,null))}},[[15,2,1]]]);
//# sourceMappingURL=main.0d30338d.chunk.js.map