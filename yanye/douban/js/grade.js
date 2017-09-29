;(function($, window, document,undefined){
	/*定义grade构造函数*/
		var Grade = function(e,op){
		this.e = $(e),
		this.defaults = {
			'color':'red',
			'fs10':10,
			'size':'30px',
		},
		// 保护 变量
		this.options = $.extend({},this.defaults,op);
	};
	/*定义grade方法*/
	Grade.prototype = {
		grade:function(){
			var ele = '';
			ele+='<div class="item1">☆☆☆☆☆</div>';
			ele+='<div class="item2">★★★★★</div>';
			this.e.css({
				'position':'relative',
				'display':'inline-block',
				'line-height':this.options.size,
				'overflow':'hidden',
				'font-size':this.options.size,
				'width':parseInt(this.options.size) * 5 - parseInt(this.options.size) + 'px',
				'height':this.options.size,
			});
			/*包裹的盒子添加元素*/
			this.e.append(ele);
			var fswd =  0;
			fswd = this.e.children('div:eq(0)').width() / 10 * this.options.fs10;
			/*五角星位置*/
			this.e.children('div').css({
				'position': 'absolute',
				'left': 0,
				'top':0,
			});
			/*拿到实心五角的div 元素*/
				this.e.children('div:eq(1)').css({
				'overflow': 'hidden',
				'color': this.options.color,
				'width': fswd +'px',
				});
		}
	};
	//在插件中使用grade对象
	$.fn.grade = function(options) {
   	 //创建grade的实体
   	 var grade = new Grade(this, options);
    	//调用其方法
    	return grade.grade();
}
})(jQuery, window, document);