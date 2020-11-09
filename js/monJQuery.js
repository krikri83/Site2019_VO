$(function() {
    /******************************************
     ***   Animations du premier titre
     ***************************************/
    $("#grand1, #grand2").mouseover(function() {
        $(this).css("font-size", "28px");
    });
    $("#grand1, #grand2").mouseout(function() {
        $(this).css("font-size", "18px");
    });
    
   
    /******************************************
     ***   Animations de la première image
     ***************************************/
    $("#PlusDetail1").click(function() {
        $("#img1").animate({ width: 400, height: 300 }, "normal");
        $("#imgDescription1").show();
        $(this).hide();
    });

    $("article:a").click(function() {
        alert("bravo");
    });
   
    $("#lienFermer1").click(function() {
        $("#img1").animate({ width: 100, height: 100 }, "normal");
        $("#PlusDetail1").show();
        $("#imgDescription1").hide();
    });

    $("#PlusDetail2").click(function() {
        $("#img2").animate({ width: 400, height: 300 }, "normal");
        $("#imgDescription2").show();
        $(this).hide();
    });


    $("#lienFermer2").click(function() {
        $("#img2").hide();
        $("#imgDescription2").hide();
    });

    $("#PlusDetail3").click(function() {
        $("#img3").animate({ width: 400, height: 300 }, "normal");
        $("#imgDescription3").show();
        $(this).hide();
    });


    $("#lienFermer3").click(function() {
        $("#img3").hide();
        $("#imgDescription3").hide();
    });


    // $('table.monTab tr:nth-child(even)').addClass('style1');

    //  $('table.monTab tr:nth-child(odd)').addClass('style2');
});