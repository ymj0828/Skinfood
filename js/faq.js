$(() => {

	const gnb = document.querySelector('.gnb')
	const gnb_2depth = document.querySelectorAll('.gnb_2depth')
	const gnb_first_li = document.querySelectorAll('.gnb_first>li')
	const not_gnb_first = document.querySelectorAll('.gnb_2depth:not(.gnb_first)')
	const smenu_wrap = document.querySelector('.smenu_wrap')
	let window_width


	gnb_2depth.forEach(function(ele){
	
		gnb.addEventListener('mouseenter', function(){
			smenu_wrap.style.display='block'
			ele.style.display='block'
		})
		gnb.addEventListener('mouseleave', function(){
			smenu_wrap.style.display='none'
			ele.style.display='none'
		})
		smenu_wrap.addEventListener('mouseenter', function(){
			smenu_wrap.style.display='block'
			ele.style.display='block'
		})
		smenu_wrap.addEventListener('mouseleave', function(){
			smenu_wrap.style.display='none'
			ele.style.display='none'
		})

	})
		

	$(window).on('load resize', function() { 		
		window_width = window.innerWidth
	})
	

	gnb_first_li.forEach(function(gnb_first_li_ele){
		
		gnb_first_li_ele.addEventListener('mouseenter', function(){

			if(this.contains(this.children[1])){
				this.classList.add('on')
				this.children[1].style.width = window_width - this.children[1].getBoundingClientRect().left - 37 + 'px'
				
				if(this == gnb_first_li[3]){
					this.children[1].style.height = 468 + 'px'
					smenu_wrap.style.height = 482 + 'px'
				}
				
				not_gnb_first.forEach(function(not_gnb_first_ele){
					not_gnb_first_ele.style.display = 'none'
				})
			}
		})
		
		gnb_first_li_ele.addEventListener('mouseleave', function(){

			if(this.contains(this.children[1])){
				this.classList.remove('on')
				smenu_wrap.style.height = 260 + 'px'

				not_gnb_first.forEach(function(not_gnb_first_ele){
					not_gnb_first_ele.style.display = 'block'
				})
			}
		})
	})



	const board_li = $('.board_list li')
	const board_answer = $('.board_answer')


	board_li.each((board_li_num_click, board_li_ele_click)=>{
		board_li_ele_click.addEventListener('click', function(){

			board_answer.each((num, board_answer_ele)=>{
				$(board_answer_ele).slideUp(300)
			})
			console.log($(board_answer[board_li_num_click]).css('display') == 'block')
			if($(board_answer[board_li_num_click]).css('display') == 'block') return

			$(board_answer[board_li_num_click]).slideDown(300)


		})

	})







});