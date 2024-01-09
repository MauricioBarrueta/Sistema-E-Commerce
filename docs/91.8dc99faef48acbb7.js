"use strict";(self.webpackChunkAngularDesdeCero=self.webpackChunkAngularDesdeCero||[]).push([[91],{1091:(K,m,o)=>{o.r(m),o.d(m,{CheckoutModule:()=>G});var u=o(9808),g=o(4100),p=o(8505),v=o(3900),A=o(4986),T=o(7272),h=o(5698),M=o(4482),y=o(5403),O=o(5032),S=o(4004),b=o(5577);function C(n,r){return r?e=>(0,T.z)(r.pipe((0,h.q)(1),function D(){return(0,M.e)((n,r)=>{n.subscribe(new y.Q(r,O.Z))})}()),e.pipe(C(n))):(0,b.z)((e,i)=>n(e,i).pipe((0,h.q)(1),function x(n){return(0,S.U)(()=>n)}(e)))}var k=o(5963),t=o(5e3),F=o(520);let J=(()=>{class n{constructor(e){this.http=e,this.apiURL="http://localhost:3000"}getStores(){return this.http.get(`${this.apiURL}/stores`)}saveOrder(e){return this.http.post(`${this.apiURL}/orders`,e)}saveDetailsOrder(e){return this.http.post(`${this.apiURL}/detailsOrders`,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(F.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var f=o(1632),q=o(3354),c=o(3075),d=o(4106),P=o(7531),Z=o(9814),N=o(1761),I=o(508);function E(n,r){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.ALo(10,"currency"),t.qZA(),t.qZA()),2&n){const e=r.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.cant),t.xp6(2),t.Oqu(t.lcZ(7,4,e.price)),t.xp6(3),t.Oqu(t.lcZ(10,6,e.cant*e.price))}}let Q=(()=>{class n{constructor(e){this.shoppingCartService=e,this.total$=this.shoppingCartService.totalAction$,this.cart$=this.shoppingCartService.cartAction$}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.G))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-details"]],decls:23,vars:8,consts:[[1,"container_table"],[1,"table"],[4,"ngFor","ngForOf"],[1,"container_total"],[1,"total"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"table",1),t.TgZ(2,"thead"),t.TgZ(3,"tr"),t.TgZ(4,"th"),t._uU(5," Item "),t.qZA(),t.TgZ(6,"th"),t._uU(7," Cantidad "),t.qZA(),t.TgZ(8,"th"),t._uU(9," Precio por unidad "),t.qZA(),t.TgZ(10,"th"),t._uU(11," Subtotal "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"tbody"),t.YNc(13,E,11,8,"tr",2),t.ALo(14,"async"),t.qZA(),t.qZA(),t.TgZ(15,"div",3),t.TgZ(16,"p",4),t.TgZ(17,"strong"),t._uU(18,"Total: "),t.TgZ(19,"span"),t._uU(20),t.ALo(21,"currency"),t.ALo(22,"async"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(13),t.Q6J("ngForOf",t.lcZ(14,2,i.cart$)),t.xp6(7),t.Oqu(t.lcZ(21,4,t.lcZ(22,6,i.total$))))},directives:[u.sg],pipes:[u.Ov,u.H9],styles:[".container_table[_ngcontent-%COMP%]{width:90%;margin:0 4%}table[_ngcontent-%COMP%]{font-size:1.2rem}th[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;padding:1rem;text-align:left}td[_ngcontent-%COMP%]{background-color:#eee;padding:1rem}.container_total[_ngcontent-%COMP%]{margin-top:1rem}.total[_ngcontent-%COMP%]{color:#000;font-size:1.5rem}"]}),n})();var $=o(7423);function L(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre es requerido "),t.qZA())}function Y(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"mat-form-field",3),t.TgZ(2,"input",13,14),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().model.shippingAddress=a}),t.qZA(),t.qZA(),t.TgZ(4,"mat-form-field",3),t.TgZ(5,"input",15,16),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().model.city=a}),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngModel",e.model.shippingAddress),t.xp6(3),t.Q6J("ngModel",e.model.city)}}function z(n,r){if(1&n&&(t.TgZ(0,"mat-option",20),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e),t.xp6(1),t.AsE(" ",e.name," - ",e.openingHours," ")}}function H(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"mat-form-field",3),t.TgZ(1,"mat-label"),t._uU(2," Selecci\xf3name "),t.qZA(),t.TgZ(3,"mat-select",17,18),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().model.store=a}),t.YNc(5,z,2,3,"mat-option",19),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.model.store),t.xp6(2),t.Q6J("ngForOf",e.stores)}}const R=[{path:"",component:(()=>{class n{constructor(e,i,a,s){this.dataService=e,this.shoppingCartService=i,this.productService=a,this.router=s,this.model={name:"",store:"",shippingAddress:"",city:""},this.isDelivery=!0,this.cart=[],this.stores=[],this.checkCartIsEmpty()}ngOnInit(){this.getStore(),this.getDataCart(),this.prepareDetails()}onPickupOrDelivery(e){this.isDelivery=e}getStore(){this.dataService.getStores().pipe((0,p.b)(e=>this.stores=e)).subscribe()}onSubmit({value:e}){const i=Object.assign(Object.assign({},e),{date:this.getCurrentDate,isDelivery:this.isDelivery});this.dataService.saveOrder(i).pipe((0,p.b)(a=>console.log("Orden: ",a)),(0,v.w)(({id:a})=>{const s=this.prepareDetails();return this.dataService.saveDetailsOrder({details:s,orderId:a})}),(0,p.b)(()=>this.router.navigate(["/checkout/thankyou-page"])),function U(n,r=A.z){const e=(0,k.H)(n,r);return C(()=>e)}(2e3),(0,p.b)(()=>this.shoppingCartService.resetCart())).subscribe()}prepareDetails(){const e=[];return this.cart.forEach(i=>{const{id:a,name:s,cant:l,stock:W}=i;this.productService.updateStock(a,W-l).pipe((0,p.b)(()=>e.push({productId:a,productName:s,cant:l}))).subscribe()}),e}getDataCart(){this.shoppingCartService.cartAction$.pipe((0,p.b)(e=>this.cart=e)).subscribe()}getCurrentDate(){return(new Date).toLocaleDateString()}checkCartIsEmpty(){this.shoppingCartService.cartAction$.pipe((0,p.b)(e=>{Array.isArray(e)&&!e.length&&this.router.navigate(["/products"])})).subscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(J),t.Y36(f.G),t.Y36(q.s),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-checkout"]],decls:21,vars:5,consts:[[1,"container"],[1,"form","item"],["checkoutForm","ngForm"],[1,"form__element"],["matInput","","placeholder","Nombre","required","","name","Name",3,"ngModel","ngModelChange"],["name","ngModel"],[4,"ngIf"],["value","pickup",3,"change"],["value","delivery","checked","",3,"change"],[4,"ngIf","ngIfElse"],["showStores",""],[1,"container__button"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["matInput","","placeholder","Direcci\xf3n de env\xedo","name","shippingAddress",3,"ngModel","ngModelChange"],["shippingAddress","ngModel"],["matInput","","placeholder","Ciudad","name","city",3,"ngModel","ngModelChange"],["city","ngModel"],["name","store",3,"ngModel","ngModelChange"],["store","ngModel"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,i){if(1&e){const a=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"form",1,2),t.TgZ(3,"mat-form-field",3),t.TgZ(4,"input",4,5),t.NdJ("ngModelChange",function(l){return i.model.name=l}),t.qZA(),t.YNc(6,L,2,0,"mat-error",6),t.qZA(),t.TgZ(7,"mat-radio-group",3),t.TgZ(8,"p"),t._uU(9,"Escoge una opci\xf3n:"),t.qZA(),t.TgZ(10,"mat-radio-button",7),t.NdJ("change",function(){return i.onPickupOrDelivery(!1)}),t._uU(11," Pickup "),t.qZA(),t.TgZ(12,"mat-radio-button",8),t.NdJ("change",function(){return i.onPickupOrDelivery(!0)}),t._uU(13," Delivery "),t.qZA(),t.qZA(),t.YNc(14,Y,7,2,"ng-container",9),t.YNc(15,H,6,2,"ng-template",null,10,t.W1O),t.qZA(),t.qZA(),t._UZ(17,"app-details"),t.TgZ(18,"div",11),t.TgZ(19,"button",12),t.NdJ("click",function(){t.CHM(a);const l=t.MAs(2);return i.onSubmit(l)}),t._uU(20," Checkout "),t.qZA(),t.qZA()}if(2&e){const a=t.MAs(2),s=t.MAs(5),l=t.MAs(16);t.xp6(4),t.Q6J("ngModel",i.model.name),t.xp6(2),t.Q6J("ngIf",!s.valid||s.pristine),t.xp6(8),t.Q6J("ngIf",i.isDelivery)("ngIfElse",l),t.xp6(5),t.Q6J("disabled",!a.form.valid)}},directives:[c._Y,c.JL,c.F,d.KE,P.Nt,c.Fj,c.Q7,c.JJ,c.On,u.O5,d.TO,Z.VQ,Z.U0,d.hX,N.gD,u.sg,I.ey,Q,$.lW],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1rem 5rem}.item[_ngcontent-%COMP%]{flex:1 1 auto}.form[_ngcontent-%COMP%]{width:100%}.form__element[_ngcontent-%COMP%]{padding:5px 0 25px 2px;width:100%;margin-bottom:.5rem}button[_ngcontent-%COMP%]{width:100%}.container__button[_ngcontent-%COMP%]{margin:0 auto;display:block;width:40%;margin-top:4rem}"]}),n})()},{path:"thankyou-page",loadChildren:()=>o.e(776).then(o.bind(o,6776)).then(n=>n.ThankyouPageModule)}];let j=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(R)],g.Bz]}),n})();var B=o(3806);let G=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.ez,j,c.u5,B.q]]}),n})()}}]);