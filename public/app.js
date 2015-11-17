function readURL(input) {
    if (input.files && input.files[0]) {
        var img = $('#profile');
        var reader = new FileReader();
        
        reader.onload = function (e) {
            img.attr('src', e.target.result);
            img.addClass('watermark') 
            $(document).watermark()

        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$(function() {
    $('#profile').toggle();
    var bool = false;
    $('#imgInp').change(function(){
        if (!bool) {
            $('#profile').toggle();
            bool = true;
        }
        readURL(this);

    });
})
