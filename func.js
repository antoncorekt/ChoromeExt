//for resize Textarea when number of words is too much for view
$(document).ready(function(){
    jQuery.each(jQuery('textarea[data-autoresize]'), function() {
    var offset = this.offsetHeight - this.clientHeight;
 
    var resizeTextarea = function(el) {
        jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
    };
    jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
});});

//load plugin for input "color"
$(function() {
    $('#background-color').colorpicker({
        color: '#AA3399',
    });
});

//functions for change text in buttons by click
$(document).ready(function(){
    //array for localStorage
    var arrayURL = [];
    if(localStorage.getItem('arrayOfURLAdv') !=  undefined  && localStorage.getItem('arrayOfURLAdv').length > 1){
        //get array of url
        var lStArray = localStorage.getItem('arrayOfURLAdv');
        arrayURL = JSON.parse(lStArray);
    }

    //for main button
    var onOffBut = document.getElementById("on-off-button");
    $(onOffBut).click(function()
    {
        var ArrowId = $(this).attr('id');
        if (ArrowId == 'on-off-button') 
        {
            $(onOffBut).html("Выключить");
            $(this).attr('id','off-on-button');
            document.getElementById('on-off-adv-button').disabled=false;
            document.getElementById('submit').disabled=false;
            document.getElementById('on-off-rep-button').disabled=false;
            //because app is enabled
            localStorage.setItem("onOffBut", "true");
        } 
        else 
        {
            $(onOffBut).html('Включить');
            $(this).attr('id','on-off-button');
            //application off
            localStorage.setItem("onOffBut", "false");
            document.getElementById('on-off-adv-button').disabled=true;
            document.getElementById('on-off-rep-button').disabled=true;
            document.getElementById('submit').disabled=true;
        }
        
    });

    //button of advertising 
    var onOffAdvBut = document.getElementById("on-off-adv-button");
    $(onOffAdvBut).click(function()
    {
       if ( $(this).val() == "true")
        {
            $(onOffAdvBut).html("Выключить");
            $(this).val("false");
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
            localStorage.setItem("arrayOfURLAdv", JSON.stringify(arrayURL));
           
        } 
        else 
        {
            $(onOffAdvBut).html('Включить');
            $(this).val("true");
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
            localStorage.setItem("arrayOfURLAdv", JSON.stringify(arrayURL));
           
        }
    });

    //button of repost 
    var onOffRepBut = document.getElementById("on-off-rep-button");
    $(onOffRepBut).click(function()
    {
        if ($(this).val() == "true") 
        {
            $(onOffRepBut).html("Нет");
            $(this).val("false");
            localStorage.setItem("onOffRepBut", "false");
        } 
        else 
        {
            $(onOffRepBut).html('Да');
            $(this).val("true");
            localStorage.setItem("onOffRepBut", "true");
        }
    });
});