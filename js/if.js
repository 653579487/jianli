(function(){
		var Html = function  (obj) {
		this.options = $.extend({},obj)
		console.log(this.options);
	};
	Html.prototype ={
		htm:function(){
		var bq ="";
		bq+=`<section id="jq_my_douban">`;
		bq+=`<div class="window">	`;
		bq+=`<div class="window_toll">`;
		bq+=`<div class="toll_title">${this.options.title}</div>`;
		bq+=`<ul class="toll_content">`;
		bq+=`<li>刷新</li>`;
		bq+=`<li>最大化</li>`;
		bq+=`<li>还原</li>`;
		bq+=`<li>关闭</li>`;
		bq+=`</ul>`;
		bq+=`</div>`;
		bq+=`<div class="window_conten">`;
		bq+=`<iframe src="${this.options.src}" iframeborder="0"></iframe>`;
		bq+=`</div>`;
		bq+=`</div>`;
		console.log(bq)
		}	
	}
	var html = new Html();
	})()