var aujd = new Date();
var annee = aujd.getFullYear();

console.log(aujd)
console.log(annee)

function bissextile(annee) {

    if ((0 === annee % 4) && (0 != annee % 100) || (0 === annee % 400)) {
        console.log(`${annee} est une année bissextile`);
    } else {
        console.log(`${annee} n'est une année bissextile`);
    }
}

bissextile(annee);