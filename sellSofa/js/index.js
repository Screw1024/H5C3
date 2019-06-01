$(function(){
	// jquery的入口函数，可以配置fullpage组件
	$('.container').fullpage({
       sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
       verticalCentered:false,
       // fullpage默认是垂直居中靠左对齐的，改为原始的左上对齐
       navigation:true,
       // 默认页面右侧点击的导航栏不显示
       navigationPosition:'right',
       // 为什么没用不清楚
       
       afterLoad:function(link,index){
       	// link是导航链接，顶部导航栏，index是第几屏的索引，从1开始
          $('.section').eq(index-1).addClass('into');
          // 为加载完成之后的section添加一个into类名
       },

       onLeave:function(index,nextIndex,direction){
       	// 三个参数分别代表当前页面，和跳转的页面，最后是切换的方向
       	  if(index==2 && nextIndex==3){
             $('.section').eq(index-1).addClass('leaved');
             // 离开第二页进入第三页，添加leaved类名，并有回调函数
       	  }else if(index==3 && nextIndex==4){
       	  	 $('.section').eq(index-1).addClass('leaved');
       	  }else if(index==5 && nextIndex==6){
       	  	 $('.section').eq(index-1).addClass('leaved');
       	  	 $('.section6 .box').addClass('show');
       	  	 // 第五屏进入第六屏的时候，快递包裹做动画，添加一个类
       	  }else if(index==6 && nextIndex==7){
       	  	 $('.section7 .text').addClass('show');
       	  	 $('.section7 .star img').each(function(i,item){
                $(this).delay(i*350).fadeIn();
                // 用jq可以通过display控制显示和隐藏，而用animation只能通过opacity来操作
       	  	 });
       	  }
       },

       afterRender:function(){
       	// afterRender:是在页面渲染完毕之后，返回的回调函数
       	  $('.more').on('click',function(){
             $.fn.fullpage.moveSectionDown();
             // 点击更多切换到下一屏 $.fn后面添加自定义插件
       	  });

       	  $('.section4 .cart').on('transitionend',function(){
       	  	$('.section4 .address').show().find('img:last').fadeIn(1000);
       	  	$('.section4 .text').addClass('show');
       	  	// 给快递单上文字添加属性名
       	  });
       	  // jquery语句中，on()里面是‘transitionend’是表示过渡执行完，后面是回调处理函数

       	  $('.section8').on('mousemove',function(e){
       	  	$(this).find('.hand').css({
                left:e.clientX-200,
                top:e.clientY-150
                // 注意鼠标的位置不能在小手图片上面，不然点不到目标图片
       	  	});
       	  	// 将手图片的位置跟鼠标实际位置设置成一样的位置，达到移动的目的
       	  }).find('.again').on('click',function(){
                $('.into,.leaved,.show').removeClass('into').removeClass('leaved').removeClass('show');
                // 重置带有into类名，leaved和show的类名动画
                $('.content [style]').removeAttr('style');
                // style左右两边的括号，就是正则表达式，将所有类型的style属性筛选出来。

                $.fn.fullpage.moveTo(1);
                // moveTo()是fullpage插件提供的方法，跳到第一页。
       	  });
       },

       scrollingSpeed:1000
       // 两幅页面之间切换时间，默认是700毫秒，设为1s,方便计算同组动画时间
	});
});