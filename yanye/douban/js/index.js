

$(function(){

(function(){
const navColor = ['#000','#278dce','#f37f00','#0f959d','#9ad6c4','#000','#529200','#e85205']

//设置导航颜色
$('.jq_nav_li>li').each((index,item)=>{
	$(item).css({'color' : navColor[index]});
})	

/*电影获取数据*/
$.ajax({
	async:'false',
	url:'https://api.douban.com//v2/movie/in_theaters?count=10',
	dataType:'jsonp',
	json:'db',
	jsonCllback:'callback',
	success: (data)=>{
	$('#jq_movie_ry').text(data.title);
	var movieList = '';
	$.each(data.subjects,(i,e)=>{
		movieList+=`<li>`;
		movieList+=`<a href="${e.alt}">`;
		movieList+=`<img src="${e.images.medium}" height="150" width="100" alt="e.title">`;
		movieList+=`</a>`;
		movieList+=`<a href="${e.alt}" id="m_ry_name">${e.title}</a>`;
		movieList+=`<p class="item${i}"></p>`;
		movieList+=`<a href="#" class="btn">选座购票</a>`;
		movieList+=`</li>`;
		
	});
	console.log();

	$('#jq_movie_right_ul').append(movieList);
	},
	error: (e)=>{
		$('#jq_movie_right_ul').text('数据获取失败');
	}

})


/*读书频道新书的数据*/
$.ajax({
	url:'https://api.douban.com/v2/book/search?q=%E6%96%B0%E4%B9%A6&count=4&fields=id,title,url,images,author',
	dataType:'jsonp',	
	success:(data)=>{
		var bookList='';
		$.each(data.books,(i,e)=>{
			bookList+=`<li>`;
			bookList+=`<div>`;
			bookList+=`<a href="#">`;
			bookList+=`<img src="${e.images.medium}" height="145" width="100" alt="${e.title}">`;
			bookList+=`</a>`;
			bookList+=`</div>`;
			bookList+=`<a href="#" >${e.title}</a>`;
			bookList+=`<p>${e.author}</p>`;
			bookList+=`<a href="#" class="btn">免费试读</a>`;
			bookList+=`</li>`;
		})
		$('#jq_book_left_content').append(bookList);
          },
	error:(e)=>{
		$('#jq_book_left_content').text('数据获取失败');
	}
})
/*读书频道原创的数据*/
	$.ajax({
		url:'https://api.douban.com/v2/book/search?q=%E5%8E%9F%E5%88%9B&count=4&fields=id,title,url,images,author,price,tags',
		dataType:'jsonp',
		success:(data)=>{
			var bookList2='';
			$.each(data.books,(i,e)=>{
				bookList2+=`<li>`;
				bookList2+=`<div>`;
				bookList2+=`<a href="#">`;
				bookList2+=`<img src="${e.images.medium}" height="145" width="100" alt="${e.title}">`;
				bookList2+=`</a>`;
				bookList2+=`</div>`;
				bookList2+=`<a href="#">${e.title}</a>`;
				bookList2+=`<p>〔加〕天宫雁</p>`;
				bookList2+=`<p class="qian">5.99元</p>`;
				bookList2+=`<a href="#" class="btn">免费试读</a>`;
				bookList2+=`</li>`;
			})
			$('#yuanchuang_ul').html(bookList2)
		},
		error:(e)=>{
			$('#yuanchuang_ul').text('数据获取失败')
		}
	})

	/*音乐频道碟的数据*/
	$.ajax({
		url:'https://api.douban.com//v2/music/search?q=%E7%A2%9F&count=8',
		dataType:'jsonp',
		success:(data)=>{
			var musicList ='';
			$.each(data.musics,(i,e)=>{
				musicList+=`<li>`;
				musicList+=` <div><a href="" title="">`;
				musicList+=` <img src="${e.image}" alt="${e.title}" width="80px" height="80px">`;
				musicList+=`</a></div>`;
				musicList+=`<a href="#">${e.title}</a>`;
				musicList+=`<a href="#">${e.tags[0].name}</a>`;
				musicList+=` <p href="#">评分${e.rating.average}</p>`;
				musicList+=`</li>`;
		
			})
			$('#jq_m_l_c').html(musicList)
		},
		error:(e)=>{
			$('#jq_m_l_c').text('获取失败')
		}
	});



	/*音乐频道热门歌曲的数据*/
	$.ajax({
		url:'https://api.douban.com//v2/music/search?q=%E7%83%AD%E9%97%A8%E6%AD%8C%E6%9B%B2&count=8',
		dataType:'jsonp',
		success:(data)=>{
			var musicList2 ='';
			$.each(data.musics,(i,e)=>{
				musicList2+=`<li>`;
				musicList2+=`<a href="#">`;
				musicList2+=`<img src="${e.image}" height="80" width="80" alt="${e.title}">`;
				musicList2+=`</a>`;
				musicList2+=`<p>${e.title}</p>`;
				musicList2+=`</li>`;
			})
			$('#jq_r_m').html(musicList2)
		
		},
		error:(e)=>{
			
		}
	});
	

})();



	
})
