(function($) {
    let themeToggler = document.getElementById('theme-toggler');
    themeToggler.onclick = () => {
        themeToggler.classList.toggle('fa-sun');

        if (themeToggler.classList.contains('fa-sun')) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    };

    $(document).ready(function(){
        $('#show-pwd').click(function(){
            // if($(this).hasClass('checked')){
            //     $(this).removeClass('checked');
            //     $(this).children("i").removeClass('fa-eye');
            //     $(this).children("i").addClass('fa-eye-slash');
            // }else{
                //     $(this).addClass('checked');
                //     $(this).children("i").addClass('fa-eye');
                // }
            $(this).toggleClass('checked');
            $(this).children("i").toggleClass('fa-eye-slash');
            $(this).hasClass('checked') ? $('#password').attr('type', 'text') : $('#password').attr('type', 'password');
        });
    });
})(jQuery);