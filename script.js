$(document).ready(function(){

    var url = ["https://www.theworksautocenter.com/wp-content/uploads/2020/05/car-wash-near-me-3.jpg"]

    $("#alan").css("background-image", "url(" + url + ")");
    
    $("#bookNow").hide();
    $("#socialMedia").hide();
    $("#meetAlan").hide();
    
    $("#book-now").on("click", function(){
        $("#bookNow").css("display","block");
        $("#socialMedia").hide();
        $("#meetAlan").hide();
    })
    $("#social-media").on("click", function(){
        $("#socialMedia").css("display","block");
        $("#bookNow").hide();
        $("#meetAlan").hide();
    })
    $("#meet-alan").on("click", function(){
        $("#meetAlan").css("display","block");
        $("#bookNow").hide();
        $("#socialMedia").hide();
    })
    
 });