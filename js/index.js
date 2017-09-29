;(function(){

	/*网易云音乐隐藏*/
	$('#my_music > .close').on('click',()=>{
		$('#my_music').hide();
	});
	/*网易云音乐显示*/
	$('#jq_wangyiyun').on('click',()=>{
		$('#my_music').show()
	})


/*===========关闭页面==================*/
	$("#jq_my_iframe .close").on('click',()=>{
		$('#jq_my_iframe').hide();
	});
/*===========最大化==================*/
$("#jq_my_iframe .lag").on('click',()=>{
		var height = $('body').height();
		$('#jq_my_iframe .window').css({
			padding:0,
			top:0,
		});
		$('#jq_my_iframe .window_conten iframe').css('height',height)

});
/*===========还原==================*/
$("#jq_my_iframe .start").on('click',()=>{
		$('#jq_window').css({
			padding:'0 50px',
			'top':'50px',
		});
		$('#jq_my_iframe .window_conten iframe').css('height','470px')
});

	/*添加豆瓣页面*/
	$("#jq_douban").on('click',()=>{
		$('#jq_my_iframe .window_conten').html($('<iframe src="yanye/douban/index.html" frameborder="0" width="100%" height="470px"></iframe>'));
		$('#jq_my_iframe .toll_title').text("豆瓣");
		$('#jq_my_iframe').show();
	})
	
	/*添加微金所页面*/
	$("#jq_weijinsuo").on('click',()=>{
		$('#jq_my_iframe .window_conten').html($('<iframe src="yanye/weijinsuo/index.html" frameborder="0" width="100%" height="470px"></iframe>'));
		$('#jq_my_iframe .toll_title').text("微金所");
		$('#jq_my_iframe').show();
	})
	/*添加百度页面*/
	$("#jq_baidu").on('click',()=>{
		$('#jq_my_iframe .window_conten').html($('<iframe src="https://image.baidu.com/" frameborder="0" width="100%" height="470px"></iframe>'));
		$('#jq_my_iframe .toll_title').text("baidu");
		$('#jq_my_iframe').show();
	})
	/*添加简历页面*/
	$("#jq_jianli").on('click',()=>{
		$('#jq_my_iframe .window_conten').html($('<iframe src="yanye/resume/index.html" frameborder="0" width="100%" height="470px"></iframe>'));
		$('#jq_my_iframe .toll_title').text("求职简历");
		$('#jq_my_iframe').show();
	})
	/*添加流星雨页面*/
	$("#jq_liuxingyu").on('click',()=>{
		$('#jq_my_iframe .window_conten').html($('<iframe src="yanye/luxingyu/index.html" frameborder="0" width="100%" height="470px"></iframe>'));
		$('#jq_my_iframe .toll_title').text("一起来看流星雨");
		$('#jq_my_iframe').show();
	})
	/*用户离开了*/
	var s = $("#jq_likai").on('click',()=>{
		$('#jq_likai_content').show();
	})
	/*回来了*/
	$('#jq_likai_content').on('click',()=>{
		$('#jq_likai_content').hide();
	})
	/*添加压扁小鸟页面*/
	$("#jq_ybxn").on('click',()=>{
		$('#jq_my_iframe .window_conten').html($('<iframe src="://play.h5.gamedog.cn/ybxn/" frameborder="0" width="100%" height="470px"></iframe>'));
		$('#jq_my_iframe .toll_title').text("压扁小鸟");
		$('#jq_my_iframe').show();

	})
	/*添加常用网站页面*/
	$("#jq_cywz").on('click',()=>{
		$('#jq_my_iframe .window_conten').html($('<iframe src=" " frameborder="0" width="100%" height="470px"></iframe>')).css('background','#fff');
		$('#jq_my_iframe .toll_title').text("常用网址");
		$('#jq_my_iframe').show();
	});
 	/*==========右键========*/
 	$('.sss').on('mousedown',(e)=>{
 		/*阻止系统默认默认*/
 		$(document).bind("contextmenu",function(e){
 			 return false;
   		 });
 		/*显示桌面背景*/
 		var div = $('#window_bg_img');
 		if (3 == e.which) {
 			
 			if (div.is(':hidden')) {
 				div.css({
 				position:'absolute',
 				top:e.pageY,
 				left:e.pageX,
 				display:'block',
 				});	
 			}
 		}else{   /*关闭桌面背景*/
 			div.hide()
 		}
 	});
 	/*更换桌面背景*/
	$('#window_bg_img > ul').on('click','li',function(){
 		
 		$('body').css({
 			background:`url('img/bg${$(this).data('list')}.jpg')`
 		})
 	});







 	





















	/*显示下边的时间*/
	setInterval(()=>{
	var date = new Date();
	/*获取小时值*/
	var h = date.getHours() > 10 ? date.getHours():'0'+date.getHours();
	var m = date.getMinutes() > 10 ? date.getMinutes():'0'+date.getMinutes();
	var s = date.getSeconds() > 10 ? date.getSeconds():'0'+date.getSeconds();
	$('#window_data >p').text(`${h}:${m}:${s}`);
	},1000)

	








}

	
)();

	
	