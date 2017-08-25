(function($) {

    $(document).ready(function() {
        $.fn.datepicker.setDefaults({ startDate: true, language: 'es-ES', format: 'd-mm-yyyy' })
        var formAdmin = $('.muelle-form')
        formAdmin.find('#date').mask('00/00/0000')
        formAdmin.find('#ton').mask('000.000.000.000.000', { reverse: true })
        $('[data-toggle="datepicker"]').datepicker()
    })

    $(".content-form").on("click", ".moreInfo", function(ev) {
        
        var content = $(this).parents(".bar-unity")   
        var subForm = content.find(".completeform")
        $(".completeform").removeClass("actived")
        $(".bar-unity").removeClass("actived")
        
        if (subForm.hasClass('hiden')) {
            $(".bar-unity").addClass("blured")
            content.removeClass("blured").addClass("actived")  
            subForm.addClass('actived').removeClass('hiden')
        } else {
            $(".bar-unity").removeClass("blured")
            content.removeClass("actived")
            subForm.addClass('hiden').removeClass('actived')
        }
    })

    $("#submit").click(function(ev) {
        ev.preventDefault()

        var num = $(".bar-unity").length
        console.log(num)

    })

    $("#addField").click(function(ev) {

        var num = $(".bar-unity").length
        console.log(num)
        if (num >= 12) {
            alert("no pueden haber mas de 12 barcos")
        } else {
            $.ajax({
                type: "POST",
                url: "/wp-admin/admin-ajax.php",
                data: { 'action': 'addFieldForm' },
                success: function(msg) {
                    $(".content-form").append(msg)
                },
                error: function(msg) {
                    console.log(msg.statusText);
                }
            })
        }
    })
    
    $(".content-form").on("click", ".delete", function(ev) {

        var num = $(".bar-unity").length
        console.log(num)
        if (num >= 12) {
            alert("No pueden haber más de 12 barcos")
        } else {
            $.ajax({
                type: "POST",
                url: "/wp-admin/admin-ajax.php",
                data: { 'action': 'addFieldForm' },
                success: function(msg) {
                    $(".content-form").append(msg)
                },
                error: function(msg) {
                    console.log(msg.statusText);
                }
            })
        }
    })
})(jQuery);