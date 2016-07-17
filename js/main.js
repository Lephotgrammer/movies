$("select").change(function(){
	console.log($("select").val())
	$(".movie").show();
	$(".movie").not("."+$("select").val()).hide(1000);
});
