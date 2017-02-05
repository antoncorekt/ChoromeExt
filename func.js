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
            document.getElementById('submit').disabled=true;
        }
        
    });

    //button of advertising 
    var onOffAdvBut = document.getElementById("on-off-adv-button");
    $(onOffAdvBut).click(function()
    {
        var ArrowId = $(this).attr('id');
        if (ArrowId == 'on-off-adv-button') 
        {
            $(onOffAdvBut).html("Выключить");
            $(this).attr('id','off-on-adv-button');
            localStorage.setItem("onOffAdvBut", "false");
        } 
        else 
        {
            $(onOffAdvBut).html('Включить');
            $(this).attr('id','on-off-adv-button');
            localStorage.setItem("onOffAdvBut", "true");
        }
        
    });
});