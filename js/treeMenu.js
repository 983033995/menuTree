/**
 * 树状结构导航菜单
 * 可编辑参数：state、childrenState、rootCloseIcon、rootOpenIcon、childCloseIcon、childOpenIcon、onlyState、indicatrix
 * 菜单图标默认采用font-awesome字体图标
 * 作者：ZHT
 * 邮箱：983033995@qq.com
 * 编辑时间：2017-12-04
 * **/
(function($){
	$.fn.menuTree = function(options){
		var defaults = {
			state: true,				//二级菜单默认关闭状态（false为打开状态）
			childrenState: true,		//三级菜单默认关闭状态（false为打开状态）
			rootCloseIcon: '<i class="icon-folder-close"></i>',			//一级菜单的关闭图标
			rootOpenIcon: '<i class="icon-folder-open"></i>',			//一级菜单的打开图标
			childCloseIcon: '<i class="icon-folder-close-alt"></i>',	//二级菜单的关闭图标
			childOpenIcon: '<i class="icon-folder-open-alt"></i>',		//二级菜单的打开图标
			onlyState: true,				//设置子菜单是否能同时展开（false为只能展开一个子菜单）
			indicatrix: true,				//指示线（true为有指示线）
			
		}
		var opt = $.extend(defaults,options);
		return this.each(function(k,v){
			if(opt.state == true){
				$(v).find(".sandwich").hide();
				$(v).children(".sark").find("span.icon_area").html(opt.rootCloseIcon);
				$(v).find(".sark").toggle(function(){
					$(this).find("span.icon_area").html(opt.rootOpenIcon);
					$(v).find(".sandwich").stop(true,false).slideToggle();
				},function(){
					$(this).find("span.icon_area").html(opt.rootCloseIcon);
					$(v).find(".sandwich").stop(true,false).slideToggle();
				});	
			}else{
				$(v).children(".sark").find("span.icon_area").html(opt.rootOpenIcon);
				$(v).find(".sark").toggle(function(){
					$(this).find("span.icon_area").html(opt.rootCloseIcon);
					$(v).find(".sandwich").stop(true,false).slideToggle();
				},function(){
					$(this).find("span.icon_area").html(opt.rootOpenIcon);
					$(v).find(".sandwich").stop(true,false).slideToggle();
				});	
			};
			
			if(opt.childrenState == true){
				$(v).children(".sandwich").find("span.icon_area").html(opt.childCloseIcon);
				$(v).children(".sandwich").find("dd").hide();
				$(v).find(".sandwich dl dt").toggle(function(){
					if(opt.onlyState == false){
						$(v).children(".sandwich").find("dd").slideUp();
						$(v).children(".sandwich").find("span.icon_area").html(opt.childCloseIcon);
					}
					if($(this).next("dd").css('display') == "none"){
						$(this).find("span.icon_area").html(opt.childOpenIcon);
					}else{
						$(this).find("span.icon_area").html(opt.childCloseIcon);
					}								
					$(this).next("dd").stop(true,false).slideToggle();
				},function(){
					if(opt.onlyState == false){
						$(v).children(".sandwich").find("dd").slideUp();		
						$(v).children(".sandwich").find("span.icon_area").html(opt.childCloseIcon);
					}
					if($(this).next("dd").css('display') == "none"){
						$(this).find("span.icon_area").html(opt.childOpenIcon);
					}else{
						$(this).find("span.icon_area").html(opt.childCloseIcon);
					}								
					$(this).next("dd").stop(true,false).slideToggle();
				});								
			}else{
				$(v).children(".sandwich").find("span.icon_area").html(opt.childOpenIcon);
				$(v).find(".sandwich dl dt").toggle(function(){
					if(opt.onlyState == false){
						$(v).children(".sandwich").find("dd").slideUp();
						$(v).children(".sandwich").find("span.icon_area").html(opt.childCloseIcon);
					}
					if($(this).next("dd").css('display') == "none"){
						$(this).find("span.icon_area").html(opt.childOpenIcon);
					}else{
						$(this).find("span.icon_area").html(opt.childCloseIcon);
					}								
					$(this).next("dd").stop(true,false).slideToggle();
				},function(){
					if(opt.onlyState == false){
						$(v).children(".sandwich").find("dd").slideUp();
						$(v).children(".sandwich").find("span.icon_area").html(opt.childCloseIcon);
					}
					if($(this).next("dd").css('display') == "none"){
						$(this).find("span.icon_area").html(opt.childOpenIcon);
					}else{
						$(this).find("span.icon_area").html(opt.childCloseIcon);
					}								
					$(this).next("dd").stop(true,false).slideToggle();
				});								
			};
			
			if(opt.indicatrix == true){
				var s_line = "<span class='vertical_line'></span>";
				var h_line = "<span class='dash'></span>";
				var s_line1 = "<span class='vertical_line1'></span>";
				var h_line1 = "<span class='dash1'></span>";
				var s = $(v).children(".sandwich").find("dl").index();

				$(v).find(".sandwich").append(s_line);
				$(v).children(".sandwich").find("dt").append(h_line);
				$(v).children(".sandwich").children("dl").find("dd").append(s_line1);
				$(v).children(".sandwich").children("dl").find("dd").children("div").append(h_line1);
				$(v).children(".sandwich").find("dt").click(function(){
					$(v).find(".vertical_line").height("100%");
				})
				if(opt.onlyState == false){
					var h = $(v).children(".sandwich").height();
					$(v).children(".sandwich").find("dt").eq(s).click(function(){
						$(v).find(".vertical_line").height(h);
					})
				}else{
					$(v).children(".sandwich").find("dt").click(function(){
						setTimeout(function(){
							if($(v).children(".sandwich").find("dt").eq(s).next("dd").css("display") == "block"){
								var h = $(v).children(".sandwich").height();
								var dd_h = $(v).children(".sandwich").find("dt").eq(s).next("dd").height();
								$(v).find(".vertical_line").height(h-dd_h);
							}							
						},500);
					})
				}
				
			}
		});
	}
})(jQuery)

