(function () {

    'use strict';
	
    function LikeAndBookmarkChecker()
    {
        var cookies = document.cookie.split(';');

        var likeCookies = [];
        var j = 0;
        for (var i = 0; i < cookies.length; i++) {
            if (cookies[i].match("Like"))
                likeCookies[j++] = cookies[i];
        }

        for (var i = 0; i < likeCookies.length; i++) {
            var currentLike = likeCookies[i].split("_")[1];
            var blogId = currentLike.split("=")[0];
            $("#heart_" + blogId).attr("class", "fa fa-lg fa-heart");
            $("#heart_" + blogId).attr("style", "color:red");
        }

        var bookmarkCookie = [];
        var k = 0;
        for (var i = 0; i < cookies.length; i++) {
            if (cookies[i].match("Bookmark_")) {               
                bookmarkCookie[k++] = cookies[i];
            }
        }
        
        for (var i = 0; i < bookmarkCookie.length; i++) {
            var blogId = bookmarkCookie[i].split("_")[1];
			var flag = bookmarkCookie[i].split("=")[1];
			if(flag == 'true')
			{
				$("#bookmark_" + blogId).attr("class", "fa fa-lg fa-bookmark");
				$("#bookmark_" + blogId).attr("style", "color:blue");
			}
        }
    }

    LikeAndBookmarkChecker();

    setInterval(function ()
    {
        LikeAndBookmarkChecker();
    }, 500);


	//Dark mode Snippets
	function getCookie(cname) {
	  var name = cname + "=";
	  var decodedCookie = decodeURIComponent(document.cookie);
	  var ca = decodedCookie.split(';');
	  for (var i = 0; i < ca.length; i++) {
		  var c = ca[i];
		  while (c.charAt(0) == ' ') {
			  c = c.substring(1);
		  }
		  if (c.indexOf(name) == 0) {
			  return c.substring(name.length, c.length);
		  }
	  }
	  return "";
	}

	function darkModeToggler(mode)
	{
	  if(mode)
	  {
		var body = document.body;
		body.classList.add("dark-mode");
		var totalHeadings = document.getElementsByClassName('fh5co_magna');
		console.log(totalHeadings.length);
		for (let index = 0; index < totalHeadings.length; index++) {
		  (totalHeadings[index]).style.color = "#fff";
		  console.log(totalHeadings[index]);
		}
	  }
	  else
	  {
		var body = document.body;
		body.classList.remove("dark-mode");
	  }
	}


	document.getElementById('mode').addEventListener("onClick", function(){
		alert("clicked");
		var mode = document.getElementById('mode').checked;
		if(mode==true)
		{
		document.cookie = "darkmode=true";
		darkModeToggler(true);
		}
		else 
		{
		document.cookie = "darkmode=false";
		darkModeToggler(false);
		}
	})


    $("#selectedCategory li").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
        // console.log("clicked", selText);
    });

    $("#BlogPage button").click(function (event) {
        
        var id = $(this).attr('id');
        // console.log("called by blogs",id);
        $("#categoryX").load('/Blogs/CategoryXLoader?category=' + id);

    });

	$(".fh5co_tags_all button").click(function (event) {
		var id = $(this).attr('id');
		// console.log(id);
		$("#categoryX").load('/Home/CategoryXLoader?category=' + id);
		
	});

	var owlCarousel = function(){

		

		$("#owl-demo").owlCarousel({
			loop: false,
			rewind : true,
			dots:false,
			autoPlay: 3000, //Set AutoPlay to 3 seconds
			nav: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 5
				}
			}

		});

		$("#owl-demo1").owlCarousel({
			loop: true,
			dots: false,
			margin:10,
			autoPlay: 3000, //Set AutoPlay to 3 seconds
			nav: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}

		});

		$("#owl-demo3").owlCarousel({
			loop: false,
			rewind: true,
			dots: false,
			margin: 10,
			autoPlay: 2000, //Set AutoPlay to 3 seconds
			nav: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items: 1
		});

        $("#owl-demo4").owlCarousel({
            loop: false,
            rewind: true,
            dots: false,
            margin: 10,
            autoPlay: 2000, //Set AutoPlay to 3 seconds
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            items: 1
        });

		

	};



	var videos = function() {


		$(document).ready(function () {
			$('#play-video').on('click', function (ev) {
				$(".fh5co_hide").fadeOut();
				$("#video")[0].src += "&autoplay=1";
				ev.preventDefault();

			});
		});

		$(document).ready(function () {
			if (parseInt(screen.width) > 500) {
				$("#firstCard").attr("class", "fh5co_suceefh5co_height");              
			}
			else {
				$("#firstCard").attr("class", "fh5co_suceefh5co_height_2");
			}
		});


		$(document).ready(function () {
			$('#play-video_2').on('click', function (ev) {
				$(".fh5co_hide_2").fadeOut();
				$("#video_2")[0].src += "&autoplay=1";
				ev.preventDefault();

			});
		});

		$(document).ready(function () {
			$('#play-video_3').on('click', function (ev) {
				$(".fh5co_hide_3").fadeOut();
				$("#video_3")[0].src += "&autoplay=1";
				ev.preventDefault();

			});
		});


		$(document).ready(function () {
			$('#play-video_4').on('click', function (ev) {
				$(".fh5co_hide_4").fadeOut();
				$("#video_4")[0].src += "&autoplay=1";
				ev.preventDefault();

			});
		});
	};

	var googleTranslateFormStyling = function() {
		$(window).on('load', function () {
			$('.goog-te-combo').addClass('form-control');
		});
	};


	var contentWayPoint = function() {
		var i = 0;

		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
		// }, { offset: '90%'} );
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'swing');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	
	$(function(){
		owlCarousel();
		videos();
		contentWayPoint();
		goToTop();
		googleTranslateFormStyling();
	});

}());
function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}