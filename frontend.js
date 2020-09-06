document.querySelector("#submit").onclick = function(e){
    e.preventDefault();

    var english="english"
    var spanish="spanish"
    var french = "french"
    var chinese ="chinese";

    isChecked(english), isChecked(spanish), isChecked(french), isChecked(chinese)

    var languages = {
       en:isChecked(english),
       es:isChecked(spanish),
       fr:isChecked(french),
       ch:isChecked(chinese)
    };

    postLang(languages)
    
}

    function isChecked(param){
        console.log({before:param})
        if($('#'+param).prop('checked')){
            param = true;
        }
        else{
            param = false;
        }
        console.log({after:param})
        return param;}
    
    function postLang(param){
        console.log(param)
        $.ajax({
        url:"http://localhost:3000/"/*whatever the route is*/,
        method:"POST",
        dataType:"json",
        data:param,
        /*look up the AJAX function documentation on jquery's website to figure out how to send languages as a JSON object*/
        success:function(){
            console.log("AJAX successful")
        }
        }) 
        }