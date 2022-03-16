$(document).ready(() => {
    $('#shuffle').click(
        function(){
            shuffling()
            $('#results').remove();
        }
    );

})

function shuffling() {
    var shuffleTab = getShuffleTab()

    $("#shuffled").empty()
    $("#ordered").empty()

    shuffleTab.forEach(i =>{
        $(`<img id='${i}' src='${i}.png'>`).appendTo("#shuffled"); $(`#${i}`).click(
            function(event){
                toggleDiv(this)
                checkVictory()
            })
    })
}

function toggleDiv(element){ 
    if (element.parentNode.id == 'shuffled'){
        $(element).appendTo('#ordered');
    } else {
        $(element).appendTo('#ordered');
    }
}

function getShuffleTab() {
    var randomTable = []
    while (randomTable.length < 6) {
        var rdNumber = Math.trunc(Math.random() * 7)
        if (!randomTable.includes(rdNumber) && rdNumber > 0){
            randomTable.push(rdNumber)
        }
    }
    return randomTable;
}

function checkVictory() {
    var imgNodeList = document.querySelector('#ordered').childNodes;
    // $('#results').remove();
    if (imgNodeList.length == 6) {
        var counter = 1;
        imgNodeList.forEach(element => {
            if (element.id.replace('arc', '') == counter) {
                counter++
            }
        });
        if (counter == 7) {
            $('<h1 id="results">You winner hoe/h1>').appendTo("body");
        } else {
            $('<h1 id="results">Guess who just lost?</h1>').appendTo("body");
        }
    }
}