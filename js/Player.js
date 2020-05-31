class Player {
    constructor() {

    }

    getCount() {
        var playerCountref = database1.ref('PlayerCount');
        playerCountref.on("value", function(data) {
            PlayerCount = data.val();
        });

    }

    updateCount(count) {
        database1.ref('/').update({PlayerCount:count});

    }

    updateName(name) {
        var playerNumber = "Player" + PlayerCount;
        database1.ref(playerNumber).set({name:name});
    }
}