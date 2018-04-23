# menuTree
自己写的jQuery树状菜单插件，本插件可以自定义二级菜单和三级菜单的默认展开或者收起状态、自定义菜单的图标样式（可以使用字体图标或者文本或者图片）、自定义菜单是否可以同时展开或者只能同时展开一个、可以自定义菜单层级指示线是否使用。

功能介绍：
1·支持到三级菜单

2·子菜单支持默认展开或者收起状态

3·可自定义菜单的展开和收起时的图标

4.支持设置子菜单是否能同时展开，或者只能一次展开一个

5.支持菜单指示线

6.我自己引用的是Font-Awesome的字体图标，可以根据自己的需求采用图片或者其它图标



调用方法：
$(".menu_f").menuTree({});      //.menu_f菜单元素的doom

其中下例参数是可自定义的：
			state: true,				//二级菜单默认关闭状态（false为打开状态）
			
			childrenState: true,		//三级菜单默认关闭状态（false为打开状态）
			
			rootCloseIcon: '<i class="icon-folder-close"></i>',			//一级菜单的关闭图标
			
			rootOpenIcon: '<i class="icon-folder-open"></i>',			//一级菜单的打开图标
			
			childCloseIcon: '<i class="icon-folder-close-alt"></i>',	//二级菜单的关闭图标
			
			childOpenIcon: '<i class="icon-folder-open-alt"></i>',		//二级菜单的打开图标
			
			onlyState: true,				//设置子菜单是否能同时展开（false为只能展开一个子菜单）
			
			indicatrix: true,				//指示线（true为有指示线）
			


演示地址：http://www.zhangheteng.com/download/treeMenu/index.html
