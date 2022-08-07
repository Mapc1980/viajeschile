$(document).ready(function() {

    $("a").click(function(event) {
        var gato = this.hash
        
        $("html, body").animate(
            {

                scrollTop: $(gato).offset().top -70
            },
            800
        )

    })


})
