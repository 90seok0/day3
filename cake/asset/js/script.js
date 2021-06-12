var feelings = [
	'happy',
	'sad',
	'thirsty',
	'creepy',
	'bored',
	'hungry',
	'horny',
	'nerveous',
	'thrilled',
	'weired',
	'terrified'
]

$('.candle').draggable();

// candle random height
var $candle = $('.candle');
var randomHt = $candle.css({ height: Math.floor(Math.random() * 100) });

$('.candle').each(function() {
	$(this).css({
		height: Math.floor((Math.random() * 10) + 5) + "vw",
		top: Math.floor(Math.random() * $(document).height()),
		left: Math.floor(Math.random() * $(document).width())
	});
});

var count = 0;
var timer = setInterval(function() {
	var feeling = feelings[Math.floor(Math.random() * feelings.length)];
	$('<a class="feeling" href="asset/img/image.jpeg" download="image.jpeg">' + feeling + '? </a>').css({
		'color': "white"
	}).appendTo("h1");

	count++;
	if(count == 200) clearInterval(timer);

}, 1000);

	
$(".candle").on("click mouseenter", function() {
	$(this).children().addClass("light");
	$(".cube").addClass("stop");
	$(".cube2").addClass("stop");
	$(".cube3").addClass("stop");
});


