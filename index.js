$(function() {

    $("button").click(function(event) {
        $("ul").append(
            "<li>" +
            ["cat", "dog", "rock"][Math.floor(Math.random()*3)] + "</li>"
        );
    });

    $('li').click(function(event) {
        this.remove();
    });

});