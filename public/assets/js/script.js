$(document).ready(function(){
    $("#register").click(function (){
        // $("#registerID").css("display", "block");
        $("#registerInfo").css("display", "block");
        $("#regButton").css("display", "block");
    });

    $("#firstLogin").click(function (){
        $("#registerInfo").css("display", "block");
        $("#loginButton").css("display", "block");
    });

    $("#adminLogin").click(function (){
        $("#opportunityInfo").css("display", "block");
    });


    // $("#submit").click(function (){
    //     const data={};
               
    //     data.english = $('#english').is(':checked') ? true : false;
    //     data.french = $('#french').is(':checked') ? true : false;
    //     data.chinese = $('#chinese').is(':checked') ? true : false;
    //     data.spanish = $('#spanish').is(':checked') ? true : false;
    //     data.facebook = $('#facebook').is(':checked') ? true : false;
    //     data.microsoft = $('#microsoft').is(':checked') ? true : false;
    //     data.grant = $('#grant').is(':checked') ? true : false;
    //     data.webDev = $('#webDev').is(':checked') ? true : false;
    //     data.minimal = $('#minimal').is(':checked') ? true : false;
    //     data.moderate = $('#moderate').is(':checked') ? true : false;
    //     data.significant = $('#significant').is(':checked') ? true : false;
      
    // //if JSON.stringify(data) doesn't work, just send data
    //     $.ajax({
    //         type: "POST",
    //         url: "/volunteer",
    //         data: JSON.stringify(data),
    //       });
          
    //     window.location.href = "results.html";
    //     return false;
    // });
    // $("#submitAdmin").click(function (){
    //     $("#submitted").css("display", "block");
        
    //     const data={};
               
    //     data.english = $('#english').is(':checked') ? true : false;
    //     data.french = $('#french').is(':checked') ? true : false;
    //     data.chinese = $('#chinese').is(':checked') ? true : false;
    //     data.spanish = $('#spanish').is(':checked') ? true : false;
    //     data.facebook = $('#facebook').is(':checked') ? true : false;
    //     data.microsoft = $('#microsoft').is(':checked') ? true : false;
    //     data.grant = $('#grant').is(':checked') ? true : false;
    //     data.webDev = $('#webDev').is(':checked') ? true : false;
      
    // //if JSON.stringify(data) doesn't work, just send data
    //     $.ajax({
    //         type: "POST",
    //         url: "/opportunities",
    //         data: JSON.stringify(data),
    //       });
          
        
    //     return false;

        

    // })
});

