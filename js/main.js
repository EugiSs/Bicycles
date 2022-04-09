// ? $('.wrapper').addClass('loaded');

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector("img")) {
			ibg[i].style.backgroundImage =
				"url('" + ibg[i].querySelector("img").getAttribute("src") + "')";
		}
	}
}
ibg();

// нужно для бургер меню
$(".icon-menu").click(function (event) {
	$(this).toggleClass("active");
	$(".menu__body").toggleClass("active");
	$("body").toggleClass("lock");
});

// слайдер
if ($(".slider__body").length > 0) {
	new Swiper(".slider", {
		loop: true,
		autoHeight: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
}

// форма
$(document).ready(function () {
	$(".input").each((_, item) => {
		$(item).attr("placeholder", $(item).data("value"));
	});
	$("body").on("click", ".input", function () {
		$(this).attr("placeholder", "");
		$(this).addClass("focus");
	});
	$("body").on("blur", ".input", function () {
		if ($(this).val() === "") {
			$(this).attr("placeholder", $(this).data("value"));
		}
	});

	$(".subscribe__form").on("submit", function () {
		if (!validate(".input")) {
			return false;
		}
	});
});

function validateEmail(email) {
	let str =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	return str.test(String(email).toLowerCase());
}

function validate(input) {
	if (validateEmail($(input).val())) {
		return true;
	} else {
		$(input).addClass("error");
		return false;
	}
}

//

