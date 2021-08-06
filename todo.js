//Check of specific todos
$('ul').on("click","li",function() {
	$(this).toggleClass("completed");
});

//click on X to delete todo
$('ul').on("click","span"/*on is used to take child elements of the parent which will be added*/,function(e){//event object
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); //here this refers to parent
	});
	event.stopPropagation(); //to avoid parent's interruption
});

$("input[type='text']").keypress(function(e){//event object
	if(e.which === 13){ //which here is specifying the key
		//grabbing new todo
		var todoText= $(this).val();
		$(this).val("");
		//create a new Li
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})