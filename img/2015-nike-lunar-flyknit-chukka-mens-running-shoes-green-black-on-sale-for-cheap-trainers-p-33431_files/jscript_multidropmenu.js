function dropmenu(){
$(" #nav ul ").css({display: "none"}); // Opera Fix
$(" #nav li").hover(function(){
$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
},function(){
$(this).find('ul:first').css({visibility: "hidden"});
});
}
function dropdiv(){
$(" #dropDiv ").css({display: "none"}); // Opera Fix
$(" #dropDivLink").hover(function(){
$('#dropDiv').css({visibility: "visible",display: "none"}).show(400);
},function(){
$('#dropDiv').css({visibility: "hidden"});
});
}
$(document).ready(function(){
dropmenu();
dropdiv();
});