function saldoRankeadas(vitorias, derrotas) {
    return vitorias - derrotas
}

function nivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro"
    } else if (vitorias <= 20) {
        return "Bronze"
    } else if (vitorias <= 50) {
        return "Prata"
    } else if (vitorias <= 80) {
        return "Ouro"
    } else if (vitorias <= 90) {
        return "Diamante"
    } else if (vitorias <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}

const vit = 60
const der = 10
const saldo = saldoRankeadas(vit, der)

console.log(`O Herói tem de saldo de ** ${saldo} ** está no nível de ** ${nivel(vit)} **`)
