initQuickView();var product={},currentLinkQuickView="",option1="",option2="";function setButtonNavQuickview(){$("#quickview-nav-button a").hide(),$("#quickview-nav-button a").attr("data-index","");var i=$(currentLinkQuickView).closest(".slide").find("a.quick-view");if(i.length>0){for(var e=0,t=0;t<i.length;t++)if($(i[t]).data("handle")==$(currentLinkQuickView).data("handle")){e=t;break}e<i.length-1&&($("#quickview-nav-button .btn-next-product").show(),$("#quickview-nav-button .btn-next-product").attr("data-index",e+1)),e>0&&($("#quickview-nav-button .btn-previous-product").show(),$("#quickview-nav-button .btn-previous-product").attr("data-index",e-1))}$("#quickview-nav-button a").click((function(){$("#quickview-nav-button a").hide();var i=parseInt($(this).data("index"));if(!isNaN(i)&&i>=0){var e=$(currentLinkQuickView).closest(".slide").find("a.quick-view");e.length>0&&i<e.length&&$(e[i]).trigger("click")}}))}function initQuickView(){$(document).on("click","#thumblist_quickview li",(function(){changeImageQuickView($(this).find("img:first-child"),".product-featured-image-quickview"),$(this).parent().parent().find("li").removeClass("active"),$(this).addClass("active")})),$(document).on("click",".quick-view",(function(i){if($(window).width()>1025){i.preventDefault();var e=$(this).data("handle");return currentLinkQuickView=$(this),Bizweb.getProduct(e,(function(i){var e=$("#quickview-modal").html();$(".quick-view-product").html(e);var t=$(".quick-view-product");if(null!=i.summary&&""!=i.summary)var a=i.summary;else t.find(".rte").html("Thông tin sản phẩm đang cập nhật");var n=Bizweb.resizeImage(i.featured_image,"large");null==n&&(n="https://bizweb.dktcdn.net/thumb/grande/assets/themes_support/noimage.gif"),setButtonNavQuickview(),null!=n&&t.find(".view_full_size img").attr("src",n),i.price<1&&i.variants.length<2?(t.find(".price").html("Liên hệ"),t.find("del").html(""),t.find("#quick-view-product form").hide(),t.find(".prices").html('<span class="price h2">Liên hệ</span>'),t.find(".add_to_cart_detail span").html("Liên hệ")):(t.find("#quick-view-product form").show(),t.find(".price").html(Bizweb.formatMoney(i.price,"{{amount_no_decimals_with_comma_separator}}₫"))),t.find(".product-item").attr("id","product-"+i.id),t.find(".qv-link").attr("href",i.url),t.find(".variants").attr("id","product-actions-"+i.id),t.find(".variants select").attr("id","product-select-"+i.id),t.find(".qwp-name").html('<a class="text2line" href="'+i.url+'" title="'+i.name+'">'+i.name+"</a>"),t.find(".reviews_qv .text_revi").html('<a href="'+i.url+'" title="Đánh giá '+i.name+'"><i class="fa fa-edit"></i>&nbsp;Đánh giá</a>'),t.find(".bizweb-product-reviews-badge").attr("data-id",i.id),i.vendor?t.find(".vend-qv .vendor_").append("<span>Thương hiệu: </span>"+i.vendor):t.find(".vend-qv .vendor_").append("<span>Thương hiệu: </span>Đang cập nhật"),i.available?(i.variants[0].inventory_management,t.find(".vend-qv .soluong1").html("Còn hàng")):t.find(".vend-qv .soluong1").html("Hết hàng"),i.variants[0].sku?t.find(".product-sku").append("<b>Mã sản phẩm: </b>"+i.variants[0].sku):t.find(".product-sku").append("<b>Mã sản phẩm: </b>Không có"),t.find(".product-description .rte").html(a),t.find(".view-more").attr("href",i.url),i.compare_at_price_max>i.price?(t.find(".old-price").html(Bizweb.formatMoney(i.compare_at_price_max,"{{amount_no_decimals_with_comma_separator}}₫")).show(),t.find(".price").addClass("sale-price")):(t.find(".old-price").html(""),t.find(".price").removeClass("sale-price")),i.available?(quickViewVariantsSwatch(i,t),$(".quick-view-product .quantity_wanted_p").show(),i.variants.length>1?$("#quick-view-product form").show():i.price<1?$("#quick-view-product form").hide():($("#quick-view-product form").show(),$(".input_qty_qv_").show())):($(".quick-view-product form").show(),$(".quick-view-product .quantity_wanted_p").show(),quickViewVariantsSwatch(i,t),i.price<1?$("#quick-view-product form").hide():$("#quick-view-product form").show(),$(".soluong_qv").hide(),t.find(".add_to_cart_detail").text("Hết hàng").addClass("disabled").attr("disabled","disabled"),i.variants.length>1?t.find("select, .dec, .inc, .variants label").show():t.find("select, .dec, .inc, .variants label").hide()),t.find(".more_info_block .page-product-heading li:first, .more_info_block .tab-content section:first").addClass("active"),$("#quick-view-product").modal(),$(".view_scroll_spacer").removeClass("hidden"),loadQuickViewSlider(i,t),setTimeout((function(){$(".view_full_size .img-product #product-featured-image-quickview").attr("src")==$("#thumbs_list_quickview .owl-item li").find("img").attr("src")&&$("#thumbs_list_quickview .owl-item li").first().addClass("active")}),2e3),$(".quick-view").fadeIn(500),$(".quick-view .total-price").length>0&&$(".quick-view input[name=quantity]").on("change",updatePricingQuickView),updatePricingQuickView(),$(".js-qty__adjust").on("click",(function(){var i=$(this),e=(i.data("id"),i.siblings(".js-qty__num")),t=parseInt(e.val().replace(/\D/g,""));t=validateQty(t);i.hasClass("js-qty__adjust--plus")?t+=1:(t-=1)<=1&&(t=1),e.val(t),updatePricingQuickView()})),$(".js-qty__num").on("change",(function(){updatePricingQuickView()}))})),document.querySelector(".quantity_wanted_p input").addEventListener("input",(function(){var i=this.value.match(/^\d+$/);null===i&&(this.value=""),0==i&&(this.value=1)}),!1),!1}}))}function loadQuickViewSlider(e,t){productImage();var a=$(".loading-imgquickview"),n=Bizweb.resizeImage(e.featured_image,"large");if(t.find(".quickview-featured-image").append('<a href="'+e.url+'"><img src="'+n+'" title="'+e.title+'"/><div style="height: 100%; width: 100%; top:0; left:0 z-index: 2000; position: absolute; display: none; background: url('+window.loading_url+') 50% 50% no-repeat;"></div></a>'),e.images.length>1){$(".thumbs_quickview").addClass("thumbs_list_quickview");var r=t.find(".more-view-wrapper ul");for(i in e.images){var o=Bizweb.resizeImage(e.images[i],"large"),d=(Bizweb.resizeImage(e.images[i],"large"),'<li><a href="javascript:void(0)" data-imageid="'+e.id+'"" data-zoom-image="'+o+'" ><img src="'+o+'" alt="Office World" style="max-width:120px; max-height:120px;" /></a></li>');r.append(d)}r.find("a").click((function(){var i=t.find("#product-featured-image-quickview");i.attr("src")!=$(this).attr("data-image")&&(i.attr("src",$(this).attr("data-image")),a.show(),i.load((function(i){a.hide(),$(this).unbind("load"),a.hide()})))})),r.owlCarousel({navigation:!0,nav:!0,navText:!1,items:4,margin:0,itemsDesktop:[1199,4],itemsDesktopSmall:[979,4],itemsTablet:[768,4],itemsTabletSmall:[540,3],itemsMobile:[360,3]}).css("visibility","visible")}else $(".thumbs_quickview").removeClass("thumbs_list_quickview"),t.find(".quickview-more-views").remove(),t.find(".quickview-more-view-wrapper-jcarousel").remove()}function quickViewVariantsSwatch(i,e){var t='<input type="hidden" name="id" value="'+i.id+'">';if(e.find("form.variants").append(t),i.variants.length>1){for(var a=0;a<i.variants.length;a++){var n='<option value="'+(d=i.variants[a]).id+'">'+d.title+"</option>";e.find("form.variants > select").append(n)}var r="product-select-"+i.id;new Bizweb.OptionSelectors(r,{product:i,onVariantSelected:selectCallbackQuickView}),1==i.options.length&&e.find(".selector-wrapper:eq(0)").prepend("<label>"+i.options[0].name+"</label>");for(var o="",d=0;d<i.options.length;d++){o+='<div class="swatch clearfix" data-option-index="'+d+'">',o+='<div class="header">'+i.options[d].name+": </div>";var c=!1;/Color|Colour|Màu/i.test(i.options[d].name)&&(c=!0);for(var s=new Array,l=0;l<i.variants.length;l++){var u=i.variants[l],v=u.options[d],p=awe_convertVietnamese(v),m="swatch-"+d+"-"+p;s.indexOf(v)<0&&(null!=u.featured_image?o+='<div data-image="'+u.featured_image.src+'" data-value="'+v+'" class="swatch-element '+(c?"color ":" ")+p+(u.available?" available ":" soldout ")+'">':o+='<div  data-value="'+v+'" class="swatch-element '+(c?"color ":" ")+p+(u.available?" available ":" soldout ")+'">',c&&(o+='<div class="tooltip">'+v+"</div>"),o+='<input id="'+m+'" type="radio" name="option-'+d+'" value="'+v+'" '+(0==l?" checked ":"")+(u.available," />"),c?(u.featured_image,o+='<label for="'+m+'" class="'+p+'" style="background-color: '+p+'"></label>'):o+='<label for="'+m+'">'+v+"</label>",o+="</div>",u.available,s.push(v))}o+="</div>"}e.find("form.variants > select").after(o);var f=[],h=[],w=[],k=[];e.find(".swatch :radio").change((function(){var i=$(this).closest(".swatch").attr("data-option-index"),e=$(this).val();$(this).closest("form").find(".single-option-selector").eq(i).val(e).trigger("change");for(var t=$(".quickview-product select[name=id]").val(),a=!1,n=0;n<k.length;n++)if(k[n]==t){var r=parseInt($(".quickview-product input[name=quantity]").val()),o=h[n]*r,d=Bizweb.formatMoney(h[n],window.money_format),c=Bizweb.formatMoney(o,window.money_format);$(".quickview-product .price").html();$(".quickview-product .total-price span").html(c),$(".quickview-product .price").html(d),currency(),w[n]&&$(".quickview-product .featured-image img").attr("src",w[n])}for(n=0;n<f.length;n++)if(f[n]==t)a=!0;1==a&&($(".quickview-product .btn-addToCart").attr("disabled","disabled"),$(".quickview-product .btn-addToCart").removeAttr("disabled"))})),e.find("form.variants .selector-wrapper label").each((function(e,t){$(this).html(i.options[e].name)}))}else{e.find("form.variants > select").remove();var g='<input type="hidden" name="variantId" value="'+i.variants[0].id+'">';e.find("form.variants").append(g)}}function productImage(){$("#thumblist").owlCarousel({navigation:!0,items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,4],itemsTablet:[768,3],itemsTabletSmall:[540,4],itemsMobile:[360,4]}),$.prototype.fancybox&&$("li:visible .fancybox, .fancybox.shown").fancybox({hideOnContentClick:!0,openEffect:"elastic",closeEffect:"elastic"})}function updatePricingQuickView(){}function validate(i){var e=i||window.event,t=e.keyCode||e.which;t=String.fromCharCode(t);/[0-9]|\./.test(t)||(e.returnValue=!1,e.preventDefault&&e.preventDefault())}$(document).on("click",".quickview-close, #quick-view-product .quickview-overlay, .fancybox-overlay",(function(i){$("#quick-view-product").fadeOut(0),awe_hidePopup(),$("#quick-view-product").modal("hide")})),$(document).on("click",".fix_add_to_cart",(function(i){i.preventDefault(),$("#quick-view-product").modal("hide");var e=$(this).parents("form");$.ajax({type:"POST",url:"/cart/add.js",async:!1,data:e.serialize(),dataType:"json",error:addToCartFail,beforeSend:function(){},success:addToCartSuccess,cache:!1})}));