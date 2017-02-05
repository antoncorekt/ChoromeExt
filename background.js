/**
 * Created by Anton on 04.02.2017.
 */

$(function() {
    $('#background-color').colorpicker({
        color: '#AA3399',
    });
});
$(document).ready(function(){
    var onOffBut = document.getElementById("on-off-button");
    $(onOffBut).click(function()
    {
        var ArrowId = $(this).attr('id');
        if (ArrowId == 'on-off-button') 
        {
            $(onOffBut).html("Выключить");
            $(this).attr('id','off-on-button');
        } 
        else 
        {
            $(onOffBut).html('Включить');
            $(this).attr('id','on-off-button');
        }
        
    });

    var onOffAdvBut = document.getElementById("on-off-adv-button");
    $(onOffAdvBut).click(function()
    {
        var ArrowId = $(this).attr('id');
        if (ArrowId == 'on-off-adv-button') 
        {
            $(onOffAdvBut).html("Выключить");
            $(this).attr('id','off-on-adv-button');
        } 
        else 
        {
            $(onOffAdvBut).html('Включить');
            $(this).attr('id','on-off-adv-button');
        }
        
    });
});