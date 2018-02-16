// Check off todo by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//delete todo on click
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    //stops bubbling
    event.stopPropagation();
});

$("input[type='text']").keypress("click",function(event){
    //if user pressed enter key
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +  "</li>");
    }
});

$(".fa-plus").on("click", function(){
    $("input type=['text']").fadeToggle();
})