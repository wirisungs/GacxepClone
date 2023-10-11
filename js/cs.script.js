!function(t){function a(){}for(var e,i="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(",");e=i.pop();)t[e]=t[e]||a}(function(){try{return console.log(),window.console}catch(t){return window.console={}}}());var GLOBAL={common:{init:function(){$(".add_to_cart").bind("click",addToCart)}},templateIndex:{init:function(){}},templateProduct:{init:function(){}},templateCart:{init:function(){}}},UTIL={fire:function(t,a,e){var i=GLOBAL;a=void 0===a?"init":a,""!==t&&i[t]&&"function"==typeof i[t][a]&&i[t][a](e)},loadEvents:function(){var t=document.body.id;UTIL.fire("common"),$.each(document.body.className.split(/\s+/),(function(a,e){UTIL.fire(e),UTIL.fire(e,t)}))}};function addToCart(t){void 0!==t&&t.preventDefault();var a=$(this).parents("form");$.ajax({type:"POST",url:"/cart/add.js",async:!1,data:a.serialize(),dataType:"json",error:addToCartFail,beforeSend:function(){},success:addToCartSuccess,cache:!1})}function addToCartSuccess(t,a,e){$.ajax({type:"GET",url:"/cart.js",async:!1,cache:!1,dataType:"json",success:function(t){awe.hidePopup(".loading"),Bizweb.updateCartFromForm(t,".top-cart-content .mini-products-list"),Bizweb.updateCartPopupForm(t,"#popup-cart-desktop .tbody-popup")}});var i=t.url,n=(t.product_id,t.name),o=t.variant_id,r=$(".item-name a").map((function(){return $(this).text()})).get();$(".title-popup-cart .cart-popup-name").html('<a href="'+i+' title="'+n+'">'+n+"</a> ");var d=r,s=($.inArray(n,d),"");if(s=null==Bizweb.resizeImage(t.image,"small")||"null"==Bizweb.resizeImage(t.image,"small")||""==Bizweb.resizeImage(t.image,"small")?"https://bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif":Bizweb.resizeImage(t.image,"small"),$(".item-info > p:contains("+o+")").html('<span class="add_sus" style="color:#7b8395;"><i style="margin-right:5px; color:#43b743; font-size:13px;" class="fa fa-check" aria-hidden="true"></i>Sản phẩm vừa thêm!</span>'),$(window).width()>768)$("#popup-cart").modal();else{$("#myModal").html("");var c='<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position: relative; z-index: 9;opacity: 1;color: #fff;"><span aria-hidden="true">×</span></button><h4 class="modal-title"><span><i class="fa fa-check" aria-hidden="true"></i></span>Thêm vào giỏ hàng thành công</h4></div><div class="modal-body"><div class="media"><div class="media-left"><div class="thumb-1x1"><img width="70px" src="'+s+'" alt="'+t.title+'"></div></div><div class="media-body"><div class="product-title">'+t.name+'</div><div class="product-new-price"><span>'+t.price.formatMoney(0)+' đ</span></div></div></div><button class="btn btn-block btn-outline-red" data-dismiss="modal">Tiếp tục mua hàng</button><a href="/checkout" class="btn btn-block btn-red button_gradient">Tiến hành thanh toán</a></div></div></div>';$("#myModal").html(c),$("#myModal").modal(),clearTimeout($("#myModal").data("hideInterval")),$("#myModal").data("hideInterval",setTimeout((function(){$("#myModal").modal("hide")}),5e3))}}function addToCartFail(t,a,e){$.parseJSON(t.responseText).description}function updateQuantity(t,a){var e=a;$.ajax({type:"POST",url:"/cart/change.js",data:{quantity:t,variantId:a},dataType:"json",success:function(t,a){Bizweb.onCartUpdateClick(t,e)},error:function(t,a){Bizweb.onError(t,a)}})}function removeItemCart(t){var a=t;$.ajax({type:"POST",url:"/cart/change.js",data:{quantity:0,variantId:t},dataType:"json",success:function(t,e){Bizweb.onCartRemoveClick(t,a),$(".productid-"+a).remove(),"0"==$(".tbody-popup>div").length&&$("#popup-cart").modal("hide"),"0"==$(".list-item-cart>li").length&&$(".mini-products-list").html('<div class="no-item"><p>Không có sản phẩm nào trong giỏ hàng.</p></div>'),"0"==$(".cart-tbody>div").length&&($(".page_cart").remove(),$(".header-cart-content").remove(),$(".cart_desktop_page ").html('<p class="hidden-xs-down">Không có sản phẩm nào trong giỏ hàng. Quay lại <a href="/">cửa hàng</a> để tiếp tục mua sắm.</p>'),$(".title_cart_mobile").html('<p class="hidden-xs-down">Không có sản phẩm nào. Quay lại <a href="/">cửa hàng</a> để tiếp tục mua sắm.</p>'))},error:function(t,a){Bizweb.onError(t,a)}})}$(document).ready(UTIL.loadEvents),Number.prototype.formatMoney=function(t,a,e){var i=this,n=(t=isNaN(t=Math.abs(t))?2:t,a=null==a?".":a,e=null==e?".":e,i<0?"-":""),o=parseInt(i=Math.abs(+i||0).toFixed(t))+"",r=(r=o.length)>3?r%3:0;return n+(r?o.substr(0,r)+e:"")+o.substr(r).replace(/(\d{3})(?=\d)/g,"$1"+e)+(t?a+Math.abs(i-o).toFixed(t).slice(2):"")},$(document).on("click",".remove-item-cart",(function(){removeItemCart($(this).attr("data-id"))})),$(document).on("click",".items-count",(function(){$(this).parent().children(".items-count").prop("disabled",!0);$(this);var t=$(this).parent().find(".variantID").val();updateQuantity($(this).parent().children(".number-sidebar").val(),t)})),$(document).on("change",".number-sidebar",(function(){var t=$(this).parent().children(".variantID").val();updateQuantity($(this).val(),t)}));