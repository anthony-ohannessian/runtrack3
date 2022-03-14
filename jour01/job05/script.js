var joursemaines = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
var joursemainesLength = joursemaines.length

console.log(joursemaines)
console.log(joursemainesLength)

function afficherjourssemaines() {
    for (var i = 0; i < joursemainesLength; i++) {
        console.log(joursemaines[i])
    }
}

afficherjourssemaines()
