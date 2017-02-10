//for resize Textarea when number of words is too much for view
$(document).ready(function(){
    jQuery.each(jQuery('textarea[data-autoresize]'), function() {
    var offset = this.offsetHeight - this.clientHeight;
 
    var resizeTextarea = function(el) {
        jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
    };
    jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
});});

$(document).ready(function(){
    //load plugin for input "color"
    $(function() {

       // console.log($('body').css('backgroundColor'));

        var colorPage = '#edeef0';
        //if color alredy exist in localStorage

        $('#background-color').colorpicker({
            color: colorPage,
        });
});

$('#color-picker').colorpicker().on('changeColor', function(ev) {
      //$(this).parent().find('.color').css("background-color", $(this).colorpicker('getValue', '#ffffff') );
      localStorage.setItem("color", ev.color.toHex());
});
});

//functions for change text in buttons by click
$(document).ready(function(){
    //array for localStorage
    var arrayURL = [];
    if(currentURL === undefined && localStorage.getItem('lastUrl') !=  undefined)
        currentURL = localStorage.getItem('lastUrl');
    else
        console.log("lasturl " + currentURL);

    if(localStorage.getItem('arrayOfURLRep') !==  undefined  && localStorage.getItem('arrayOfURLRep').length > 1){
        //get array of url
        var lStArray = localStorage.getItem('arrayOfURLRep');
        arrayURL = JSON.parse(lStArray);
    }

    //for main button
    var onOffBut = document.getElementById("on-off-button");
    var lStOnOffBut = localStorage.getItem('onOffBut');
    
    if(lStOnOffBut !==  undefined){
        if(lStOnOffBut === "true"){
            $(onOffBut).html("Выключить");
            $(onOffBut).val("true");
            $(onOffBut).addClass("btn btn-danger btn-sm");
            document.getElementById('on-off-adv-button').disabled=false;
            document.getElementById('submit').disabled=false;
            document.getElementById('on-off-rep-button').disabled=false;
        }
        else{
            $(onOffBut).html('Включить');
            $(onOffBut).val("false");    
           // $(onOffBut).addClass("btn btn-success btn-sm");       
        }        
    }
    
    $(onOffBut).click(function()
    {
        var ArrowId = $(this).attr('id');
        if ( $(this).val() == "false") 
        {
            $(onOffBut).html("Выключить");
            $(this).val("true"); 
            $(this).removeClass("btn btn-success btn-sm");
            $(this).addClass("btn btn-danger btn-sm");
            document.getElementById('on-off-adv-button').disabled=false;
            document.getElementById('submit').disabled=false;
            document.getElementById('on-off-rep-button').disabled=false;
            //because app is enabled
            localStorage.setItem("onOffBut", "true");
        } 
        else 
        {
            $(onOffBut).html('Включить');
            $(this).val("false");  
            $(this).removeClass("btn btn-danger btn-sm");
            $(this).addClass("btn btn-success btn-sm");
            //application off
            localStorage.setItem("onOffBut", "false");
            document.getElementById('on-off-adv-button').disabled=true;
            document.getElementById('on-off-rep-button').disabled=true;
            document.getElementById('submit').disabled=true;
        }
        
    });

    //button of advertising 
    var onOffAdvBut = document.getElementById("on-off-adv-button");
    var lStOnOffAdvBut = localStorage.getItem('onOffButAdv');

    if(lStOnOffBut !==  undefined){
        if(lStOnOffAdvBut === "true"){
            $(onOffAdvBut).html("Нет");
            $(onOffAdvBut).val("false");
            $(onOffAdvBut).addClass("btn btn-danger btn-sm");
        }
        else{
            $(onOffAdvBut).html('Да');
            $(onOffAdvBut).val("true");   
        }
    }

    $(onOffAdvBut).click(function()
    {
       if ( $(this).val() == "true")
        {
            $(onOffAdvBut).html("Нет");
            $(this).val("false");  
            $(this).removeClass("btn btn-success btn-sm");
            $(this).addClass("btn btn-danger btn-sm");
            localStorage.setItem("onOffButAdv", "true");
           
        } 
        else 
        {
            $(onOffAdvBut).html('Да');
            $(this).val("true");      
            $(this).removeClass("btn btn-danger btn-sm");
            $(this).addClass("btn btn-success btn-sm");
            localStorage.setItem("onOffButAdv", "false");
           
        }
    });

    //button of repost 
    var onOffRepBut = document.getElementById("on-off-rep-button");
    var index = arrayURL.indexOf(currentURL);
            //if this url already exists in localStorage
            if (index > -1) {
                //set text and value for button
                 $(onOffRepBut).html("Нет");
                 $(onOffRepBut).val("false");
                 $(onOffRepBut).addClass("btn btn-danger btn-sm");
            }
            //if this is new url
            else {
                console.log("no this url");
            }

    $(onOffRepBut).click(function()
    {
        if ($(this).val() == "true") 
        {
            $(onOffRepBut).html("Нет");
            $(this).val("false");
            $(this).removeClass("btn btn-success btn-sm");
            $(this).addClass("btn btn-danger btn-sm");
            console.log(currentURL);
            var index = arrayURL.indexOf(currentURL);
            //if delay of loading or this url already exists
            if (index > -1 || currentURL == undefined) {
                console.log(index);
            }
            //if this is new url
            else {
                arrayURL.push(currentURL);
            }
            localStorage.setItem("arrayOfURLRep", JSON.stringify(arrayURL));
        } 
        else 
        {
            $(onOffRepBut).html('Да');
            $(this).val("true");
            $(this).removeClass("btn btn-danger btn-sm");
            $(this).addClass("btn btn-success btn-sm");
            var index = arrayURL.indexOf(currentURL);
            console.log(index);
            //if this url exists
            if (index > -1) {
                //delete from array
                arrayURL.splice(index, 1);
            }
            //if this url doesn't exist in localStorage
            else {
                console.log("no el");
            }
            //set new array in localStorage
            localStorage.setItem("arrayOfURLRep", JSON.stringify(arrayURL));
            
        }
    });
});