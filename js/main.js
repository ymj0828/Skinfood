const con2data = {
	'스킨케어':{
    사진:['1-1','1-2','1-3','1-4','1-5','1-6','1-7','1-8','1-9','1-10','1-11','1-12'],
		상품명:['★02/23 순차출고★[당근패드]캐롯 카로틴 카밍 워터 패드 (250g, 60매)','[미나리패드]판토테닉 워터파슬리 클리어 패드 (250g, 60매)','로열허니 프로폴리스 인리치 에센스 (50ml)','[미나리에센스]여드름적합, 판토테닉 워터 파슬리 사일런스 에센스 (50ml)','로열허니 프로폴리스 인리치 멀티 밤(9g)','[당근크림] 캐롯 카로틴 릴리프 크림 (70ml)','[미나리패드 리필]판토테닉 워터파슬리 클리어 패드 리필(30매)','[미나리 토너]여드름적합, 판토테닉 워터 파슬리 토너 (300ml)','로열허니 프로폴리스 인리치 에멀전 (160ml)','[단독SET+증정] 골드 캐비어 이엑스 토너+크림+아이세럼','로열허니 프로폴리스 인리치 크림 미스트(120ml)','흑석류 에너지 세럼 (52ml)'],
    기존가:['₩ 26,000','₩ 26,000','₩ 32,000','₩ 28,000','₩ 22,000','₩ 32,000','₩ 13,000','₩ 24,000','₩ 26,000','₩ 99,000','₩ 22,000','₩ 32,000'],
		판매가:['₩ 16,900','₩ 16,900','₩ 20,800','₩ 18,200','₩ 14,300','₩ 20,800','₩ 8,450','₩ 14,400','₩ 15,600','₩ 74,250','₩ 13,200','₩ 19,200'],
		평점:['5','4.9','5','4.9','4.9','4.9','5','4.9','5','5','4.9','4.9',],
		리뷰수:['점 (9,996)','점 (778)','점 (18,677)','점 (1,266)','점 (72)','점 (1,543)','점 (45)','점 (383)','점 (334)','점 (341)','점 (111)','점 (779)']
	},
	"마스크":{
    사진:['2-1','2-2','2-3','2-4','2-5','2-6','2-7','2-8','2-9','2-10','2-11','2-12'],
    상품명:['[긴급진정] 판토테닉 워터 파슬리 마스크(미나리 마스크)(24ml)','[꿀광보습] 로열허니 프로폴리스 인리치 마스크(30ml)','[수분진정] 캐롯 카로틴 마스크(당근 마스크)(27ml)','[수분생기] 수비드 마스크시트(브로콜리) (18g)','이지 드레싱 마스크 시트, 파슬리 워터 (28g)','이지 드레싱 마스크 시트, 코코넛 젤리 (37g)','레몬 딜 버터 푸드마스크 120g','블랙슈가 퍼펙트 에센셜 스크럽 2X (210g)','라이스 데일리 브라이트닝 마스크 워시오프(210g)','블랙슈가 마스크 워시오프 (100g)','라이스 마스크 워시오프 (100g)','에그 화이트 포어 마스크 (125g)'],
		기존가:['₩ 3,000','₩ 3,000','₩ 3,000','','','','₩ 15,000','₩ 19,000','₩ 19,000','₩ 10,000','₩ 10,000','₩ 10,000',],
    판매가:['₩ 2,100','₩ 2,100','₩ 1,950','₩ 1,100','₩ 3,000','₩ 3,000','₩ 9,750','₩ 12,350','₩ 12,350','₩ 7,000','₩ 7,000','₩ 7,000'],
		평점:['4.9','5','5','4.9','4.7','4.9','4.9','4.9','4.8','4.9','4.8','4.9'],
		리뷰수:['점 (51)','점 (51)','점 (107)','점 (235)','점 (23)','점 (11)','점 (51)','점 (855)','점 (209)','점 (1,150)','점 (144)','점 (145)',]
	},
	"선": {

	},
	"클렌징": {

	},
	"바디": {

	}
};


$(() => {

  const catitem = $('.catitem li')
  const catcont = document.querySelector('.catcont')
	
  const txt1 = document.querySelectorAll('.catcont .txt1')
	
  
  catitem.each((num, ele)=>{
		console.log(ele)
		ele.addEventListener('click', function(){
			
			if(ele.classList.contains('on')) return;
			
			catitem.each((num,ele2)=>{
				$(ele2).removeClass('on')
			});
      $(ele).addClass('on');
			$('.catcont').slick('slickRemove', null, null, true); 
			// $('#slider-div').slick("unslick")

			console.log(ele)
      const text = ele.children[1].innerText

			console.log(text)

			
			con2data[text].사진.forEach((b, a)=>{
				
				console.log(a)

				$('.catcont').slick('slickAdd',`
				<div>
				<div>
				<li>
				<div class='img'>
				<img src="./images/content4_${con2data[text].사진[a]}.jpg" alt="">
				</div>
				<div class='txt'>
				<div class="txt1">${con2data[text].상품명[a]}</div>
				<div class="txt2">${con2data[text].기존가[a]}</div>
				<div class="txt3">${con2data[text].판매가[a]}</div>
				<div class="txt4">${con2data[text].평점[a]}</div>
				<div class="txt5">${con2data[text].리뷰수[a]}</div>
				</div>
				</li>
				</div>
				</div>
				`);
				// let crli = document.createElement('li')
				// let crdivimg = document.createElement('div')
				// let crimg = document.createElement('img')
				// let crtxt = document.createElement('div')
				// let crtxt1 = document.createElement('div')
				// let crtxt2 = document.createElement('div')
				// let crtxt3 = document.createElement('div')
				// let crtxt4 = document.createElement('div')
				// let crtxt5 = document.createElement('div')
				
				// crdivimg.classList.add('img')
				// crtxt.classList.add('txt')
				// crtxt1.classList.add('txt1')
				// crtxt2.classList.add('txt2')
				// crtxt3.classList.add('txt3')
				// crtxt4.classList.add('txt4')
				// crtxt5.classList.add('txt5')

				// crdivimg.appendChild(crimg)
				// crli.appendChild(crdivimg)
				// crtxt.appendChild(crtxt1)
				// crtxt.appendChild(crtxt2)
				// crtxt.appendChild(crtxt3)
				// crtxt.appendChild(crtxt4)
				// crtxt.appendChild(crtxt5)
				// crli.appendChild(crtxt)
				// catcont.appendChild(crli)

			// const img = $('.catcont li .img img')
			// const txt1 = document.querySelectorAll('.catcont li .txt .txt1')
			// const txt2 = document.querySelectorAll('.catcont li .txt .txt2')
			// const txt3 = document.querySelectorAll('.catcont li .txt .txt3')
			// const txt4 = document.querySelectorAll('.catcont li .txt .txt4')
			// const txt5 = document.querySelectorAll('.catcont li .txt .txt5')
			
			// console.log(img)

			// img[a].src = `./images/content4_${con2data[text].사진[a]}.jpg`
			// txt1[a].innerText = `${con2data[text].상품명[a]}`

				// console.log(li.length)
				// console.log(con2data[text].사진.length)

			})
		// 	$('.catcont').slick({
		// 		infinite:true,
		// 		slidesToShow:4,
		// 		slidesToScroll:4,
		// 		dots:true
		// })
		var slider = $('.slider');  	
		var slickOptions = { 		
				infinite: true, 		
			 slidesToShow: 1, 		
			 slidesToScroll: 1, 		
			 dots:true, 		
			 arrows:true 	
			};  	
		$(window).on('load resize', function() { 		
				if($(window).width() < 767) { 			
						slider.slick('unslick'); 		
				}else{ 			
						slider.not('.slick-initialized').slick(slickOptions); 		
				} 
		})
		
	})
		
		
  })
	
	
	
	
	
	$('.drgSlide').slick({
		infinite:true,
		slidesToShow:2,
		slidesToScroll:1,
		dots:true
	})
	$('.popcont').slick({
		infinite:true,
		slidesToShow:4,
		slidesToScroll:4,
		dots:true
	})
	
	$('.catcont').slick({
		infinite:true,
		slidesToShow:4,
		slidesToScroll:4,
		dots:true
})
	
	
	
	
	
});