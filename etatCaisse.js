const etatDeCaisse = {
  '1': 23,
  '2': 12,
  '5': 10,
  '10': 2,
  '20': 3
}

const achat = {
  montantAchat: 120,
  montantDonneParClient: 150
}

const retourMonnaie = (etatDeCaisse, achat) => {
  let monnaieARendre = achat.montantDonneParClient - achat.montantAchat
  const rendu = {}
  const valeurs = Object.keys(etatDeCaisse).map(Number).sort((a, b) => b - a)

  for (const valeur of valeurs) {
    if (monnaieARendre <= 0) break

    const dispo = etatDeCaisse[valeur]
    const maxPossible = Math.min(Math.floor(monnaieARendre / valeur), dispo)

    if (maxPossible > 0) {
      rendu[valeur] = maxPossible
      monnaieARendre -= valeur * maxPossible
    }
  }

  if (monnaieARendre > 0) {
    console.log("pas assez de monnaie dans la caisse")
    return null
  }

  return rendu
}

console.log(retourMonnaie(etatDeCaisse, achat))
