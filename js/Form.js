class Form {

    constructor() {

    }

    display() {
        var title = createElement('H2');
        title.html("CAR RACING GAME");
        title.position(130,0);

        var input = createInput("NAME");
        var button = createButton("PLAY");
        var greeting = createElement('H3');

        input.position(130,160);
        button.position(250,200);

        button.mousePressed(function() {
            input.hide();
            button.hide();

            var name = input.value();
            PlayerCount++;
            player.updateName(name);
            player.updateCount(PlayerCount);

            greeting.html("Welcome " + name);
            greeting.position(130,160);
        });
    }
}