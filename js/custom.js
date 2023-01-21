var ShreeGanesh=`[
	[
		{
			"icon":"<i class='fa-solid fa-phone'></i>",
			"num":"+91-7000339054",
			"sm":"<i class='fa-brands fa-facebook'></i>",
			"smLink":"https://www.facebook.com"
		},
		{
			"icon":"<i class='fa-solid fa-phone'></i>",
			"num":"+91-7415888088",
			"sm":"<i class='fa-brands fa-instagram'></i>",
			"smLink":"https://www.instagram.com"
		},
		{
			"icon":"<i class='fa-solid fa-envelope'></i>",
			"num":"shreegajmukhconstruction@gmail.com",
			"sm":"<i class='fa-brands fa-twitter'></i>",
			"smLink":"https://www.twitter.com"
		},
		{
			"sm":"<i class='fa-brands fa-linkedin'></i>",
			"smLink":"https://www.linkdin.com"
		},
		{
			"sm":"<i class='fa-brands fa-youtube'></i>",
			"smLink":"https://www.youtube.com"
		}
	],
	{
		"logo":"image/logo.png",
		"Attributes":["href","alt","target"],
		"AttributesValue":["index.html","logo","_blank"],
		"NAVTAB":["HOME","ABOUT","PROJECTS","GALLERY","VIDEOS","CONTACT"],	"NavLink":["home.html","about.html","projects.html","gallery.html","videos.html","contact.html"]
	},
	{
		"carousel":["image/slider1.png","image/slider2.png","image/slider3.png","image/slider4.png","image/slider5.png"],
		"alt":["slider1","slider2","slider3","slider4","slider5"]
	},
	[
		{
			"col1":"image/image1.jpg"
		},
		{
			"col2":["About US","We,<b> Shree Ganesh Homes </b>& <b>Gajmukh Construction </b>located at<b> Near Mangla Chowk , Siddh Shikhar Apartment Ring Rood No.2 , Bilaspur-Chhattisgarh</b>. Every efforts we make to improve the <b> buildings</b> of the city. When we incorporate playgrounds and swimming pools into our designs, it is not only to provide better facilities to our customers, but also better places for their children to play. We are always ready for your solution. Our every step is memorized to save your cost. Our <b> designs </b> never hurt the environment.",["Experiences","Happy client","Projects"]]
		}
	],
	{
		"heading":"Your Trusted and Assured <b class='color'>Builders and Developers</b>",
		"para":"Creative and resourceful labors to meet project deadlines effectively",
		"button":"Contact Us"
	},
	[
		{
			"heading":"Our<b class='color'>Projects</b>",
			"para":"Your Trusted and Assured Builders and Developers."
		},
		{
			"cardImg":["image/cardimg1.JPEG","image/cardimg2.JPEG","image/cardimg3.JPEG","image/cardimg4.JPEG"],
			"cardHeading":["Ekdanta Niwas","Shivay Homes","Ganesh Vihar","Shivay Nagar Phase 2"],
			"location":["Uslapur Hafa Bilaspur","Sakari Bilaspur","Akash Marg Mangla Chowk","Shivay Nagar Fase 2 Bilaspur"],
			"Area":["20*50=1000 Square feet","25*40=1000 Square feet","25*40=1000 Square feet","25*40=1000 Square feet"],
			"Build":["700 Square feet","700 Square feet","800 Square feet","800 Square feet"],
			"Price":["25,99,000/-","24,99,000/-","42,99,000/-","30,99,000/-"],
			"size":["2BHK","2BHK","2BHK","2BHK"],
			"plotPrice":["1200/Square feet","1300/Square feet","2750/Square feet","1500/Square feet"]
		}
	],
	{
			"heading":"Our<b class='color'>Banking Partners</b>",
			"para":"Your Trusted and Assured Builders and Developers.",	"carousel2":["image/carousel1.png","image/carousel2.png","image/carousel3.png","image/carousel4.png","image/carousel5.png"],
			"alt":["carousel1","carousel2","carousel3","carousel4","carousel5"]
	},
	[
		{
			"col1Heading":"image/logo.png",
			"col1Para":"We, Shree Ganesh Homes & Gajmukh Construction located at Near Mangla Chowk , Siddh Shikhar Apartment Ring Rood No.2 , Bilaspur-Chhattisgarh. Every efforts we make to improve the buildings of the city. When we incorporate playgrounds and swimming pools into our designs, it is not only to provide better facilities to our customers, but also better places for their children to play. We are always ready for your solution. Our every step is memorized to save your cost. Our designs never hurt the environment."
		},
		{
			"col2Heading":"Helpful Links"
		},
		{
			"col3Heading":"Projects",
			"col3Links":["Akdanta Nivash","Shivay Homes","Ganesh Vihar","Shivay Nagar Phase 2"]
		},
		{
			"col4Heading":"Contact us",
			"col4Icon":["Near Mangla Chowk , Siddh Shikhar Apartment Ring Road No.2 Bilaspur Chhattisgarh 495001","+91-7000339054","+91-7415888088","shreegajmukhconstruction@gmail.com"]
		}
	],
	{
		"copyright":"© 2022 Designed by shreeganeshhomes All Rights Reserved"
	}
]`;

var parsed=JSON.parse(ShreeGanesh);

var header=parsed[0];

var main=document.querySelector("main");

main.innerHTML+=`
	<header id="HEADER" class="bg-color">
		<div class="container">
			<div class="row py-1">
				<div class="col-md-6">
					<div id="headerCol1">
						<a href="#" class="text-decoration-none text-white mx-1">${header[0].icon} ${header[0].num}</a>
						<a href="#" class="text-decoration-none text-white mx-1">${header[1].icon} ${header[1].num}</a>
						<a href="#" class="text-decoration-none text-white mx-1">${header[2].icon} ${header[2].num}</a>
					</div>
				</div><!--end-column-->
				<div class="col-md-6">
					<div class="d-flex justify-content-end">
						<a href="${header[0].smLink}" class="text-decoration-none text-white mx-2">${header[0].sm}</a>
						<a href="${header[1].smLink}" class="text-decoration-none text-white mx-2">${header[1].sm}</a>
						<a href="${header[2].smLink}" class="text-decoration-none text-white mx-2">${header[2].sm}</a>
						<a href="${header[3].smLink}" class="text-decoration-none text-white mx-2">${header[3].sm}</a>
						<a href="${header[4].smLink}" class="text-decoration-none text-white mx-2">${header[4].sm}</a>
					</div>
				</div><!--end-column-->
			</div><!--end-row-->
		</div><!--end-container-->
	</header>
`;

var navbar=parsed[1];

var html="<nav id='NAV'></nav>";
HEADER.insertAdjacentHTML("afterend",html);

NAV.innerHTML+=`
	<div class="bg-color2">
		<div class="container">
			<div class="row py-1">
				<div class="col-md-3">
					<div>
						<img src="${navbar.logo}" ${navbar.Attributes[0]}="${navbar.AttributesValue[0]}"  ${navbar.Attributes[1]}="${navbar.AttributesValue[1]}"  ${navbar.Attributes[2]}="${navbar.AttributesValue[2]}"  height="98" width="146">
					</div>
				</div><!--end-column-->
				<div class="col-md-9 d-flex align-items-center justify-content-end">
					<div>
						<ul id="nav_ul" class="nav">
							
						</ul>
					</div>
				</div><!--end-column-->
			</div><!--end-row-->
		</div><!--end-container-->
	</div>
`;

navbar.NAVTAB.map((x,y)=>{
	nav_ul.innerHTML+=`
		<li class="nav-item"><a class="nav-link text-white fs-5 mx-2 nav_hover" href="${navbar.NavLink[y]}">${x}</a></li>
	`;
});

var carouselPart="<section id='sec1'></section>";
NAV.insertAdjacentHTML("afterend",carouselPart);

var slider=parsed[2];

sec1.innerHTML+=`
	<div>
		<div id="demo" class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="${slider.carousel[0]}" alt="${slider.alt[0]}" class="d-block w-100">
				</div>
				<div class="carousel-item">
					<img src="${slider.carousel[1]}" alt="${slider.alt[1]}" class="d-block w-100">
				</div>
				<div class="carousel-item">
					<img src="${slider.carousel[2]}" alt="${slider.alt[2]}" class="d-block w-100">
				</div>
				<div class="carousel-item">
					<img src="${slider.carousel[3]}" alt="${slider.alt[3]}" class="d-block w-100">
				</div>
				<div class="carousel-item">
					<img src="${slider.carousel[4]}" alt="${slider.alt[4]}" class="d-block w-100">
				</div>
			</div>
			<!-- Left and right controls/icons -->
			<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
				<span class="carousel-control-prev-icon"></span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
				<span class="carousel-control-next-icon"></span>
			</button>
		</div>
	</div>
`;

var about="<section id='sec2'></section>";
sec1.insertAdjacentHTML("afterend",about);

var About_Us=parsed[3];

sec2.innerHTML+=`
	<div class="bg-color3">
		<div class="container">
			<div class="row py-5">
				<div class="col-md-6">
					<div id="img1">
						<img src="${About_Us[0].col1}" alt="img1" height="406" width="608" class="rounded-35">
					</div>
				</div><!--end-column-->
				<div class="col-md-6">
					<div>
						<h3 class="color fw-bolder">${About_Us[1].col2[0]}</h3>
						<p class="py-2">${About_Us[1].col2[1]}</p>
						<div class="d-flex align-items-center justify-content-center" id="AboutUs">
							<div class="px-5">
								<span class="color fs-1 fw-bold">15</span>
								<span class="fw-bold">Y</span>
								<p class="fw-bolder">${About_Us[1].col2[2][0]}</p>
							</div>
							<div class="px-5">
								<span class="color fs-1 fw-bold">1200</span>
								<span class="fw-bold">+</span>
								<p class="fw-bolder">${About_Us[1].col2[2][1]}</p>
							</div>
							<div class="px-5">
								<span class="color fs-1 fw-bold">16</span>
								<span class="fw-bold">+</span>
								<p class="fw-bolder">${About_Us[1].col2[2][2]}</p>
							</div>
						</div>
					</div>
				</div><!--end-column-->
			</div><!--end-row-->
		</div><!--end-container-->
	</div>
`;

var SEC3="<section id='sec3'></section>";
sec2.insertAdjacentHTML("afterend",SEC3);

var section3=parsed[4];

sec3.innerHTML+=`
	<div class="bg-image">
		<div class="container p-5 text-center">
			<h2 class="text-white fs-1">${section3.heading}</h2>
			<p class="text-white fst-italic">${section3.para}</p>
			<a href="#" class="text-decoration-none text-white px-5 py-2 bg-color rounded-3">${section3.button}</a>
		</div><!--end-container-->
	</div>
`;

var SEC4="<section id='sec4'></section>";
sec3.insertAdjacentHTML("afterend",SEC4);

var section4=parsed[5];

sec4.innerHTML+=`
	<div class="bg-color3 p-5">
		<div class="container">
			<div class="text-center">
				<h2>${section4[0].heading}</h2>
				<p>${section4[0].para}</p>
			</div>
			<div class="py-2">
				<div class="row" id="card_row">
					
				</div><!--end-row-->
			</div>
		</div><!--end-container-->
	</div>
`;

section4[1].cardImg.map((x,y)=>{
	card_row.innerHTML+=`
		<div class="col-md-3">
			<div>
				<div class="card bg-color3 p-3 shadow-lg pb-5 card_border">
					<img class="card-img-top" src="${x}" alt="Card image" height="176" width="266">
					<div class="card-body p-0">
						<h4 class="card-title bg-color text-white text-center py-2 m-0">${section4[1].cardHeading[y]}</h4>
						<p class="card-text py-2 text-center"><i class="fa-solid fa-location-dot color"></i> ${section4[1].location[y]}</p>
						<p class="card-text border-danger border-bottom m-2 p-1"><b class="pe-5">Area</b> ${section4[1].Area[y]}</p>
						<p class="card-text border-danger border-bottom m-2 p-1 border-2"><b class="pe-5">Build</b> ${section4[1].Build[y]}</p>
						<p class="card-text border-danger border-bottom m-2 p-1 border-2 color fw-bold"><b class="pe-5">Price</b>${section4[1].Price[y]} </p>
						<p class="card-text border-danger border-bottom m-2 p-1"><b class="pe-5">Size</b>${section4[1].size[y]} </p>
						<p class="card-text border-danger border-bottom m-2 p-1"><b class="pe-5">PlotPrice</b>${section4[1].plotPrice[y]} </p>
						<a href="#" class="btn btn-primary bg-color text-white my-2">See Details</a>
					</div>
				</div>
			</div>
		</div><!--end-column-->
	`;
});

var SEC5="<section id='sec5'></section>";
sec4.insertAdjacentHTML("afterend",SEC5);

var section5=parsed[6];

sec5.innerHTML+=`
	<div class="bg-color3 py-5">
		<div class="container">
			<h2 class="text-center">${section5.heading}</h2>
			<p class="text-center">${section5.para}</p>
			<div class="d-flex align-items-center justify-content-center border border-success p-3 border-2">
				<div>
					<img src="${section5.carousel2[0]}" alt="partner1" height="130" width="130" class="mx-5">
					<img src="${section5.carousel2[1]}" alt="partner1" height="130" width="130" class="mx-5">
					<img src="${section5.carousel2[2]}" alt="partner1" height="130" width="130" class="mx-5">
					<img src="${section5.carousel2[3]}" alt="partner1" height="130" width="130" class="mx-5">
					<img src="${section5.carousel2[4]}" alt="partner1" height="130" width="130" class="mx-5">
				</div>
			</div><!--end-row-->
		</div><!--end-container-->
	</div>
`;

var FOOTER="<footer id='footer'></footer>";
sec5.insertAdjacentHTML("afterend",FOOTER);

var Footer=parsed[7];
var copy=parsed[8];

footer.innerHTML+=`
	<div class="bg-color2">
		<div class="container pt-5 pb-2">
			<div class="row">
				<div class="col-md-3">
					<div>
						<h2><img src="${Footer[0].col1Heading}" alt="logo" height="70" width="103"></h2>
						<p class="text-white text-justify">${Footer[0].col1Para}</p>
						<div class="">
							<a href="${header[0].smLink}" class="text-decoration-none text-white mx-2">${header[0].sm}</a>
							<a href="${header[1].smLink}" class="text-decoration-none text-white mx-2">${header[1].sm}</a>
							<a href="${header[2].smLink}" class="text-decoration-none text-white mx-2">${header[2].sm}</a>
							<a href="${header[3].smLink}" class="text-decoration-none text-white mx-2">${header[3].sm}</a>
							<a href="${header[4].smLink}" class="text-decoration-none text-white mx-2">${header[4].sm}</a>
						</div>
					</div>
				</div><!--end-column-->
				<div class="col-md-3">
					<div class="mx-2">
						<h2 class="text-white border-bottom border-success border-3 p-2">${Footer[1].col2Heading}</h2>
						<ul class="list-unstyled">
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-caret-right text-white"></i> ${navbar.NAVTAB[0]}</a></li>
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-caret-right text-white"></i> ${navbar.NAVTAB[1]}</a></li>
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-caret-right text-white"></i> ${navbar.NAVTAB[2]}</a></li>
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-caret-right text-white"></i> ${navbar.NAVTAB[3]}</a></li>
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-caret-right text-white"></i> ${navbar.NAVTAB[4]}</a></li>
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-caret-right text-white"></i> ${navbar.NAVTAB[5]}</a></li>
						</ul>
					</div>
				</div><!--end-column-->
				<div class="col-md-3">
					<div class="mx-2">
						<h2 class="text-white border-bottom border-success border-3 p-2">${Footer[2].col3Heading}</h2>
						<ul class="list-unstyled">
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-caret-right text-white"></i> ${Footer[2].col3Links[0]}</a></li>
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-caret-right text-white"></i> ${Footer[2].col3Links[1]}</a></li>
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-caret-right text-white"></i> ${Footer[2].col3Links[2]}</a></li>
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-caret-right text-white"></i> ${Footer[2].col3Links[3]}</a></li>
						</ul>
					</div>
				</div><!--end-column-->
				<div class="col-md-3">
					<div>
						<h2 class="text-white border-bottom border-success border-3 p-2">${Footer[3].col4Heading}</h2>
						<ul class="list-unstyled">
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-location-dot text-white"></i> ${Footer[3].col4Icon[0]}</a></li>
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-phone text-white"></i> ${Footer[3].col4Icon[1]}</a></li>
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-phone text-white"></i> ${Footer[3].col4Icon[2]}</a></li>
							<li class="my-2"><a class="text-decoration-none text-white" href="#"><i class="fa-solid fa-envelope text-white"></i> ${Footer[3].col4Icon[3]}</a></li>
						</ul>
					</div>
				</div><!--end-column-->
			</div><!--end-row-->
		</div><!--end-container-->
		<div class="border-top border-success">
			<p class="text-center text-white p-3">${copy.copyright}</p>
		</div>
	</div>
`;