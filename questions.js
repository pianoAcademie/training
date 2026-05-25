const questionsBank = {
  fractions: {
    nom: "Fractions",
    emoji: "½",
    couleur: "#4f46e5",
    1: [
      {
        question: "Combien vaut 1/2 + 1/2 ?",
        options: ["1", "1/4", "2/4", "0"],
        answer: "1",
        explication: "1/2 + 1/2 = 2/2 = 1"
      },
      {
        question: "Quelle fraction est égale à 1/2 ?",
        options: ["2/4", "1/3", "3/4", "2/3"],
        answer: "2/4",
        explication: "2/4 = 1/2 car on divise numérateur et dénominateur par 2."
      },
      {
        question: "Combien vaut 3/4 − 1/4 ?",
        options: ["2/4", "2/8", "1/2", "1/4"],
        answer: "2/4",
        explication: "3/4 − 1/4 = 2/4 (même dénominateur, on soustrait les numérateurs)."
      },
      {
        question: "Quelle est la fraction la plus grande ?",
        options: ["3/4", "1/4", "2/4", "1/2"],
        answer: "3/4",
        explication: "Avec le même dénominateur 4, le plus grand numérateur donne la plus grande fraction."
      },
      {
        question: "Combien vaut 1/3 + 1/3 ?",
        options: ["2/3", "2/6", "1/6", "1/3"],
        answer: "2/3",
        explication: "1/3 + 1/3 = 2/3 (même dénominateur, on additionne les numérateurs)."
      },
      {
        question: "Quelle fraction est égale à 6/8 simplifiée ?",
        options: ["3/4", "2/3", "1/2", "4/6"],
        answer: "3/4",
        explication: "6/8 ÷ 2 = 3/4. On divise numérateur et dénominateur par 2."
      },
      {
        question: "Combien vaut 1/4 + 1/4 ?",
        options: ["1/2", "2/8", "1/8", "1/4"],
        answer: "1/2",
        explication: "1/4 + 1/4 = 2/4 = 1/2 (on simplifie par 2)."
      },
      {
        question: "Quelle fraction est égale à 1/3 ?",
        options: ["2/6", "2/5", "3/6", "1/6"],
        answer: "2/6",
        explication: "2/6 = 1/3 car on divise numérateur et dénominateur par 2."
      },
      {
        question: "Combien vaut 3/5 − 1/5 ?",
        options: ["2/5", "2/10", "4/5", "1/5"],
        answer: "2/5",
        explication: "3/5 − 1/5 = 2/5 (même dénominateur, on soustrait les numérateurs)."
      },
      {
        question: "La fraction 4/6 simplifiée est égale à ?",
        options: ["2/3", "1/2", "3/4", "4/3"],
        answer: "2/3",
        explication: "4/6 ÷ 2 = 2/3. On divise par le PGCD qui est 2."
      },
      {
        question: "Quelle fraction est la plus petite ?",
        options: ["1/4", "1/2", "3/4", "2/3"],
        answer: "1/4",
        explication: "Avec le dénominateur 4 commun : 1/4 < 2/4 (=1/2) < 3/4. Donc 1/4 est la plus petite."
      },
      {
        question: "2/8 est égal à ?",
        options: ["1/4", "1/2", "2/4", "1/3"],
        answer: "1/4",
        explication: "2/8 ÷ 2 = 1/4. On simplifie en divisant par 2."
      }
    ],
    2: [
      {
        question: "Combien vaut 1/2 + 1/3 ?",
        options: ["5/6", "2/5", "2/6", "3/5"],
        answer: "5/6",
        explication: "1/2 = 3/6 et 1/3 = 2/6. Donc 3/6 + 2/6 = 5/6."
      },
      {
        question: "Combien vaut 3/4 × 2/3 ?",
        options: ["1/2", "6/7", "5/7", "6/12"],
        answer: "1/2",
        explication: "3/4 × 2/3 = 6/12 = 1/2 (on simplifie en divisant par 6)."
      },
      {
        question: "Combien vaut 2/3 − 1/4 ?",
        options: ["5/12", "1/12", "1/3", "3/7"],
        answer: "5/12",
        explication: "2/3 = 8/12 et 1/4 = 3/12. Donc 8/12 − 3/12 = 5/12."
      },
      {
        question: "Quel est le résultat de 5/6 − 1/3 ?",
        options: ["1/2", "4/3", "2/6", "1/6"],
        answer: "1/2",
        explication: "1/3 = 2/6, donc 5/6 − 2/6 = 3/6 = 1/2."
      },
      {
        question: "Combien vaut 4/5 × 5/8 ?",
        options: ["1/2", "9/13", "20/40", "4/8"],
        answer: "1/2",
        explication: "4/5 × 5/8 = 20/40 = 1/2 (on simplifie par 20)."
      },
      {
        question: "Simplifie la fraction 15/25.",
        options: ["3/5", "5/8", "2/3", "1/2"],
        answer: "3/5",
        explication: "15/25 ÷ 5 = 3/5. Le PGCD de 15 et 25 est 5."
      },
      {
        question: "Combien vaut 1/3 + 1/4 ?",
        options: ["7/12", "2/7", "2/12", "4/12"],
        answer: "7/12",
        explication: "1/3 = 4/12 et 1/4 = 3/12. Donc 4/12 + 3/12 = 7/12."
      },
      {
        question: "Combien vaut 3/5 × 5/9 ?",
        options: ["1/3", "15/45", "8/14", "2/5"],
        answer: "1/3",
        explication: "3/5 × 5/9 = 15/45 = 1/3 (on simplifie par 15)."
      },
      {
        question: "Combien vaut 7/8 − 3/4 ?",
        options: ["1/8", "4/4", "1/2", "3/8"],
        answer: "1/8",
        explication: "3/4 = 6/8. Donc 7/8 − 6/8 = 1/8."
      },
      {
        question: "Simplifie 9/12.",
        options: ["3/4", "2/3", "1/3", "4/5"],
        answer: "3/4",
        explication: "9/12 ÷ 3 = 3/4. Le PGCD de 9 et 12 est 3."
      },
      {
        question: "Combien vaut 2/3 + 3/4 ?",
        options: ["17/12", "5/7", "5/12", "6/12"],
        answer: "17/12",
        explication: "2/3 = 8/12 et 3/4 = 9/12. Donc 8/12 + 9/12 = 17/12."
      },
      {
        question: "Combien vaut 5/6 × 3/10 ?",
        options: ["1/4", "15/60", "8/16", "1/3"],
        answer: "1/4",
        explication: "5/6 × 3/10 = 15/60 = 1/4 (on simplifie par 15)."
      }
    ],
    3: [
      {
        question: "Combien vaut (2/3 + 1/4) × 12 ?",
        options: ["11", "8", "9", "10"],
        answer: "11",
        explication: "2/3 + 1/4 = 8/12 + 3/12 = 11/12. Puis 11/12 × 12 = 11."
      },
      {
        question: "Combien vaut 3/4 ÷ 3/8 ?",
        options: ["2", "9/32", "1/2", "6/12"],
        answer: "2",
        explication: "Diviser par 3/8 = multiplier par 8/3. Donc 3/4 × 8/3 = 24/12 = 2."
      },
      {
        question: "Quelle est la valeur de 5/6 ÷ 5/12 ?",
        options: ["2", "25/72", "1/2", "10/18"],
        answer: "2",
        explication: "5/6 ÷ 5/12 = 5/6 × 12/5 = 60/30 = 2."
      },
      {
        question: "Combien vaut 1/2 + 2/3 + 3/4 ?",
        options: ["23/12", "6/9", "1", "11/6"],
        answer: "23/12",
        explication: "LCD = 12. 6/12 + 8/12 + 9/12 = 23/12."
      },
      {
        question: "Si 3/5 d'une classe = 18 élèves, combien y a-t-il d'élèves en tout ?",
        options: ["30", "25", "27", "36"],
        answer: "30",
        explication: "1/5 = 18 ÷ 3 = 6 élèves. Donc 5/5 = 6 × 5 = 30 élèves."
      },
      {
        question: "Simplifie : (3/4 − 1/6) ÷ (1/2 + 1/3)",
        options: ["7/10", "1/2", "5/6", "2/3"],
        answer: "7/10",
        explication: "3/4−1/6 = 9/12−2/12 = 7/12. 1/2+1/3 = 5/6. Donc 7/12 ÷ 5/6 = 7/12 × 6/5 = 42/60 = 7/10."
      },
      {
        question: "Combien vaut (1/2 + 1/3) × 6 ?",
        options: ["5", "3", "4", "6"],
        answer: "5",
        explication: "1/2 + 1/3 = 5/6. Puis 5/6 × 6 = 5."
      },
      {
        question: "Combien vaut 2/3 ÷ 4/9 ?",
        options: ["3/2", "8/27", "2/4", "1/2"],
        answer: "3/2",
        explication: "Diviser par 4/9 = multiplier par 9/4. Donc 2/3 × 9/4 = 18/12 = 3/2."
      },
      {
        question: "Combien vaut 3/4 + 5/6 − 1/3 ?",
        options: ["5/4", "7/12", "11/12", "4/3"],
        answer: "5/4",
        explication: "LCD = 12. 9/12 + 10/12 − 4/12 = 15/12 = 5/4."
      },
      {
        question: "Si 2/7 d'une classe représente 8 élèves, combien d'élèves y a-t-il en tout ?",
        options: ["28", "14", "32", "21"],
        answer: "28",
        explication: "1/7 = 8 ÷ 2 = 4 élèves. Donc 7/7 = 4 × 7 = 28 élèves."
      },
      {
        question: "Laquelle est la plus grande : 7/9 ou 5/7 ?",
        options: ["7/9", "5/7", "Elles sont égales", "Impossible à comparer"],
        answer: "7/9",
        explication: "7/9 ≈ 0,778 et 5/7 ≈ 0,714. Donc 7/9 > 5/7."
      },
      {
        question: "Combien vaut (5/6 − 1/4) ÷ (2/3 + 1/6) ?",
        options: ["7/10", "1", "5/7", "3/4"],
        answer: "7/10",
        explication: "5/6−1/4 = 10/12−3/12 = 7/12. 2/3+1/6 = 4/6+1/6 = 5/6. Donc 7/12 ÷ 5/6 = 7/12 × 6/5 = 7/10."
      }
    ]
  },

  pourcentages: {
    nom: "Pourcentages",
    emoji: "%",
    couleur: "#0891b2",
    1: [
      {
        question: "Combien vaut 50% de 100 ?",
        options: ["50", "25", "75", "10"],
        answer: "50",
        explication: "50% = 1/2, donc 50% de 100 = 100 ÷ 2 = 50."
      },
      {
        question: "Combien vaut 10% de 200 ?",
        options: ["20", "10", "50", "100"],
        answer: "20",
        explication: "10% = 1/10, donc 10% de 200 = 200 ÷ 10 = 20."
      },
      {
        question: "Combien vaut 25% de 80 ?",
        options: ["20", "25", "40", "15"],
        answer: "20",
        explication: "25% = 1/4, donc 25% de 80 = 80 ÷ 4 = 20."
      },
      {
        question: "Un article coûte 100€. Il est soldé à -20%. Quel est son prix ?",
        options: ["80€", "90€", "75€", "60€"],
        answer: "80€",
        explication: "20% de 100 = 20€. Prix après réduction = 100 − 20 = 80€."
      },
      {
        question: "Quelle fraction correspond à 75% ?",
        options: ["3/4", "2/3", "1/4", "7/10"],
        answer: "3/4",
        explication: "75% = 75/100 = 3/4 (on simplifie par 25)."
      },
      {
        question: "Combien vaut 100% de 350 ?",
        options: ["350", "35", "3500", "175"],
        answer: "350",
        explication: "100% d'un nombre, c'est le nombre lui-même."
      },
      {
        question: "Combien vaut 20% de 50 ?",
        options: ["10", "20", "5", "25"],
        answer: "10",
        explication: "20% = 1/5, donc 20% de 50 = 50 ÷ 5 = 10."
      },
      {
        question: "Combien vaut 30% de 100 ?",
        options: ["30", "3", "300", "13"],
        answer: "30",
        explication: "30% de 100 = 0,30 × 100 = 30."
      },
      {
        question: "Quelle fraction correspond à 50% ?",
        options: ["1/2", "1/4", "1/5", "2/3"],
        answer: "1/2",
        explication: "50% = 50/100 = 1/2."
      },
      {
        question: "Un article coûte 200€. Il est soldé à −50%. Quel est son prix ?",
        options: ["100€", "50€", "150€", "180€"],
        answer: "100€",
        explication: "50% de 200 = 100€. Prix après réduction = 200 − 100 = 100€."
      },
      {
        question: "Combien vaut 5% de 100 ?",
        options: ["5", "0,5", "50", "15"],
        answer: "5",
        explication: "5% de 100 = 0,05 × 100 = 5."
      },
      {
        question: "Quelle fraction correspond à 20% ?",
        options: ["1/5", "1/4", "1/2", "2/5"],
        answer: "1/5",
        explication: "20% = 20/100 = 1/5 (on simplifie par 20)."
      }
    ],
    2: [
      {
        question: "Un article à 60€ est augmenté de 15%. Quel est son nouveau prix ?",
        options: ["69€", "75€", "72€", "66€"],
        answer: "69€",
        explication: "15% de 60 = 9€. Nouveau prix = 60 + 9 = 69€."
      },
      {
        question: "Quel pourcentage représente 30 sur 120 ?",
        options: ["25%", "30%", "20%", "15%"],
        answer: "25%",
        explication: "30/120 = 1/4 = 25%."
      },
      {
        question: "Un produit passe de 80€ à 100€. Quelle est la hausse en % ?",
        options: ["25%", "20%", "30%", "15%"],
        answer: "25%",
        explication: "Hausse = 20€. Taux = 20/80 = 0,25 = 25%."
      },
      {
        question: "Combien vaut 35% de 260 ?",
        options: ["91", "85", "104", "78"],
        answer: "91",
        explication: "35% de 260 = 0,35 × 260 = 91."
      },
      {
        question: "Après une remise de 30%, un article coûte 140€. Quel était le prix initial ?",
        options: ["200€", "180€", "170€", "210€"],
        answer: "200€",
        explication: "140€ = 70% du prix initial. Prix initial = 140 ÷ 0,7 = 200€."
      },
      {
        question: "Quel est le résultat d'une augmentation de 20% suivie d'une baisse de 20% ?",
        options: ["−4%", "0%", "+4%", "−2%"],
        answer: "−4%",
        explication: "1,2 × 0,8 = 0,96, soit une baisse de 4% au total."
      },
      {
        question: "Un article à 80€ est augmenté de 25%. Quel est son nouveau prix ?",
        options: ["100€", "105€", "96€", "90€"],
        answer: "100€",
        explication: "25% de 80 = 20€. Nouveau prix = 80 + 20 = 100€."
      },
      {
        question: "Quel pourcentage représente 45 sur 180 ?",
        options: ["25%", "20%", "30%", "40%"],
        answer: "25%",
        explication: "45/180 = 1/4 = 25%."
      },
      {
        question: "Un produit passe de 200€ à 150€. Quelle est la baisse en % ?",
        options: ["25%", "33%", "20%", "30%"],
        answer: "25%",
        explication: "Baisse = 50€. Taux = 50/200 = 0,25 = 25%."
      },
      {
        question: "Combien vaut 42% de 300 ?",
        options: ["126", "142", "84", "104"],
        answer: "126",
        explication: "42% de 300 = 0,42 × 300 = 126."
      },
      {
        question: "Après une augmentation de 40%, un article coûte 112€. Quel était le prix initial ?",
        options: ["80€", "75€", "90€", "70€"],
        answer: "80€",
        explication: "112€ = 140% du prix initial. Prix initial = 112 ÷ 1,4 = 80€."
      },
      {
        question: "Quel est le résultat d'une hausse de 10% puis d'une autre hausse de 10% ?",
        options: ["+21%", "+20%", "+22%", "+10%"],
        answer: "+21%",
        explication: "1,1 × 1,1 = 1,21, soit une hausse totale de 21%."
      }
    ],
    3: [
      {
        question: "Un capital de 2000€ est placé à 3% par an. Combien après 3 ans (intérêts simples) ?",
        options: ["2180€", "2060€", "2200€", "2090€"],
        answer: "2180€",
        explication: "Intérêts = 2000 × 3% × 3 = 180€. Total = 2000 + 180 = 2180€."
      },
      {
        question: "Les prix ont augmenté de 5% en 2022 et de 3% en 2023. Quelle est la hausse totale ?",
        options: ["8,15%", "8%", "8,5%", "7,9%"],
        answer: "8,15%",
        explication: "1,05 × 1,03 = 1,0815, soit une hausse de 8,15%."
      },
      {
        question: "Un article est soldé 2 fois de suite à −10%. Quelle est la réduction totale ?",
        options: ["19%", "20%", "18%", "21%"],
        answer: "19%",
        explication: "0,9 × 0,9 = 0,81, donc une réduction de 19% au total."
      },
      {
        question: "Quel taux annuel fait doubler un capital en 10 ans (intérêts composés, approximatif) ?",
        options: ["7,2%", "10%", "5%", "12%"],
        answer: "7,2%",
        explication: "Règle des 72 : 72 ÷ 10 = 7,2%. C'est une approximation classique."
      },
      {
        question: "Un magasin applique une TVA de 20%. Un article hors taxe coûte 75€. Prix TTC ?",
        options: ["90€", "95€", "85€", "80€"],
        answer: "90€",
        explication: "75 × 1,20 = 90€."
      },
      {
        question: "Un produit passe de 150€ à 120€. Puis de 120€ à 150€. Ces variations sont-elles symétriques ?",
        options: ["Non, −20% puis +25%", "Oui, ±20%", "Non, −25% puis +20%", "Oui, ±25%"],
        answer: "Non, −20% puis +25%",
        explication: "−30/150 = −20%. +30/120 = +25%. Les pourcentages ne sont pas symétriques."
      },
      {
        question: "Un capital de 1500€ est placé à 4% par an pendant 2 ans (intérêts simples). Quel est le total ?",
        options: ["1620€", "1560€", "1680€", "1640€"],
        answer: "1620€",
        explication: "Intérêts = 1500 × 4% × 2 = 120€. Total = 1500 + 120 = 1620€."
      },
      {
        question: "Un article est soldé 2 fois de suite à −15%. Quelle est la réduction totale approximative ?",
        options: ["27,75%", "30%", "25%", "28,5%"],
        answer: "27,75%",
        explication: "0,85 × 0,85 = 0,7225, soit une réduction de 27,75% au total."
      },
      {
        question: "Un article hors taxe coûte 120€ avec une TVA de 20%. Quel est le prix TTC ?",
        options: ["144€", "140€", "148€", "150€"],
        answer: "144€",
        explication: "120 × 1,20 = 144€."
      },
      {
        question: "Les prix augmentent de 25% puis encore de 25%. Quelle est la hausse totale ?",
        options: ["56,25%", "50%", "62,5%", "52%"],
        answer: "56,25%",
        explication: "1,25 × 1,25 = 1,5625, soit une hausse de 56,25%."
      },
      {
        question: "Après une baisse de 20%, quel pourcentage faut-il appliquer pour retrouver le prix initial ?",
        options: ["+25%", "+20%", "+30%", "+15%"],
        answer: "+25%",
        explication: "Si 80€ = prix réduit, prix initial = 100€. 20/80 = 25%. Il faut augmenter de 25%."
      },
      {
        question: "Un investissement de 2000€ rapporte 5% composés par an. Quel est le capital après 2 ans ?",
        options: ["2205€", "2200€", "2100€", "2210€"],
        answer: "2205€",
        explication: "Année 1 : 2000 × 1,05 = 2100€. Année 2 : 2100 × 1,05 = 2205€."
      }
    ]
  },

  equations: {
    nom: "Équations",
    emoji: "x",
    couleur: "#059669",
    1: [
      {
        question: "Résous : x + 5 = 12",
        options: ["7", "17", "5", "6"],
        answer: "7",
        explication: "x = 12 − 5 = 7."
      },
      {
        question: "Résous : x − 3 = 9",
        options: ["12", "6", "3", "9"],
        answer: "12",
        explication: "x = 9 + 3 = 12."
      },
      {
        question: "Résous : 2x = 14",
        options: ["7", "12", "28", "6"],
        answer: "7",
        explication: "x = 14 ÷ 2 = 7."
      },
      {
        question: "Résous : x/4 = 3",
        options: ["12", "1", "7", "3"],
        answer: "12",
        explication: "x = 3 × 4 = 12."
      },
      {
        question: "Résous : 3x = 21",
        options: ["7", "18", "63", "24"],
        answer: "7",
        explication: "x = 21 ÷ 3 = 7."
      },
      {
        question: "Si x + x = 16, alors x vaut ?",
        options: ["8", "16", "4", "32"],
        answer: "8",
        explication: "2x = 16, donc x = 8."
      },
      {
        question: "Résous : x + 7 = 15",
        options: ["8", "22", "7", "6"],
        answer: "8",
        explication: "x = 15 − 7 = 8."
      },
      {
        question: "Résous : x − 4 = 8",
        options: ["12", "4", "2", "6"],
        answer: "12",
        explication: "x = 8 + 4 = 12."
      },
      {
        question: "Résous : 4x = 20",
        options: ["5", "16", "24", "80"],
        answer: "5",
        explication: "x = 20 ÷ 4 = 5."
      },
      {
        question: "Résous : x/3 = 4",
        options: ["12", "1", "7", "3"],
        answer: "12",
        explication: "x = 4 × 3 = 12."
      },
      {
        question: "Résous : x + 9 = 9",
        options: ["0", "9", "18", "1"],
        answer: "0",
        explication: "x = 9 − 9 = 0."
      },
      {
        question: "Résous : 5x = 45",
        options: ["9", "40", "225", "5"],
        answer: "9",
        explication: "x = 45 ÷ 5 = 9."
      }
    ],
    2: [
      {
        question: "Résous : 3x + 4 = 19",
        options: ["5", "7", "4", "6"],
        answer: "5",
        explication: "3x = 19 − 4 = 15, donc x = 15 ÷ 3 = 5."
      },
      {
        question: "Résous : 2x − 7 = 11",
        options: ["9", "2", "7", "4"],
        answer: "9",
        explication: "2x = 11 + 7 = 18, donc x = 9."
      },
      {
        question: "Résous : 5x + 2 = 3x + 10",
        options: ["4", "6", "3", "8"],
        answer: "4",
        explication: "5x − 3x = 10 − 2, donc 2x = 8, x = 4."
      },
      {
        question: "Résous : 4(x + 2) = 24",
        options: ["4", "8", "6", "5"],
        answer: "4",
        explication: "x + 2 = 24 ÷ 4 = 6, donc x = 4."
      },
      {
        question: "Résous : x/3 + 1 = 5",
        options: ["12", "4", "18", "15"],
        answer: "12",
        explication: "x/3 = 4, donc x = 12."
      },
      {
        question: "Résous : 7 − 2x = 1",
        options: ["3", "4", "−3", "6"],
        answer: "3",
        explication: "−2x = 1 − 7 = −6, donc x = 3."
      },
      {
        question: "Résous : 4x − 3 = 13",
        options: ["4", "10", "2,5", "5"],
        answer: "4",
        explication: "4x = 13 + 3 = 16, donc x = 16 ÷ 4 = 4."
      },
      {
        question: "Résous : 3x + 5 = 2x + 11",
        options: ["6", "16", "3", "8"],
        answer: "6",
        explication: "3x − 2x = 11 − 5, donc x = 6."
      },
      {
        question: "Résous : 6(x − 1) = 18",
        options: ["4", "3", "2", "5"],
        answer: "4",
        explication: "x − 1 = 18 ÷ 6 = 3, donc x = 4."
      },
      {
        question: "Résous : x/2 + 3 = 9",
        options: ["12", "6", "24", "3"],
        answer: "12",
        explication: "x/2 = 9 − 3 = 6, donc x = 12."
      },
      {
        question: "Résous : 8 − 3x = 2",
        options: ["2", "−2", "3", "6"],
        answer: "2",
        explication: "−3x = 2 − 8 = −6, donc x = 2."
      },
      {
        question: "Résous : 2(x + 4) = 3x − 1",
        options: ["9", "7", "3", "5"],
        answer: "9",
        explication: "2x + 8 = 3x − 1 → 8 + 1 = 3x − 2x → x = 9."
      }
    ],
    3: [
      {
        question: "Résous : (x + 3)/2 = (2x − 1)/3",
        options: ["11", "5", "7", "9"],
        answer: "11",
        explication: "3(x+3) = 2(2x−1) → 3x+9 = 4x−2 → x = 11."
      },
      {
        question: "Résous le système : x + y = 10 et x − y = 4",
        options: ["x=7, y=3", "x=6, y=4", "x=8, y=2", "x=5, y=5"],
        answer: "x=7, y=3",
        explication: "En additionnant : 2x = 14 → x = 7. Puis y = 10 − 7 = 3."
      },
      {
        question: "Résous : x² = 49",
        options: ["x = ±7", "x = 7", "x = −7", "x = ±49"],
        answer: "x = ±7",
        explication: "x² = 49 → x = 7 ou x = −7 (deux solutions)."
      },
      {
        question: "Résous : 2x² − 8 = 0",
        options: ["x = ±2", "x = 2", "x = 4", "x = ±4"],
        answer: "x = ±2",
        explication: "2x² = 8 → x² = 4 → x = 2 ou x = −2."
      },
      {
        question: "Résous le système : 2x + 3y = 12 et x + y = 5",
        options: ["x=3, y=2", "x=2, y=3", "x=4, y=1", "x=1, y=4"],
        answer: "x=3, y=2",
        explication: "De la 2e : x = 5−y. Dans la 1e : 2(5−y)+3y = 12 → 10+y = 12 → y = 2, x = 3."
      },
      {
        question: "Résous : 3(2x − 1) − 2(x + 4) = 5",
        options: ["3", "4", "2", "5"],
        answer: "4",
        explication: "6x − 3 − 2x − 8 = 5 → 4x − 11 = 5 → 4x = 16 → x = 4."
      },
      {
        question: "Résous : (x − 2)/3 = (x + 1)/4",
        options: ["11", "5", "−5", "7"],
        answer: "11",
        explication: "4(x−2) = 3(x+1) → 4x−8 = 3x+3 → x = 11."
      },
      {
        question: "Résous le système : 2x + y = 7 et x − y = 2",
        options: ["x=3, y=1", "x=2, y=3", "x=4, y=−1", "x=3, y=2"],
        answer: "x=3, y=1",
        explication: "En additionnant : 3x = 9 → x = 3. Puis y = 7 − 2×3 = 1."
      },
      {
        question: "Résous : x² − 16 = 0",
        options: ["x = ±4", "x = 4", "x = −4", "x = ±16"],
        answer: "x = ±4",
        explication: "x² = 16 → x = 4 ou x = −4 (deux solutions positives et négatives)."
      },
      {
        question: "Résous : 3x² = 75",
        options: ["x = ±5", "x = 5", "x = 25", "x = ±25"],
        answer: "x = ±5",
        explication: "x² = 75 ÷ 3 = 25 → x = 5 ou x = −5."
      },
      {
        question: "Résous le système : 3x − 2y = 8 et x + y = 6",
        options: ["x=4, y=2", "x=3, y=3", "x=2, y=4", "x=5, y=1"],
        answer: "x=4, y=2",
        explication: "De la 2e : x = 6−y. Dans la 1e : 3(6−y)−2y = 8 → 18−5y = 8 → y = 2, x = 4."
      },
      {
        question: "Résous : 5(x + 3) − 2(3x − 1) = 4",
        options: ["13", "3", "11", "5"],
        answer: "13",
        explication: "5x + 15 − 6x + 2 = 4 → −x + 17 = 4 → −x = −13 → x = 13."
      }
    ]
  },

  geometrie: {
    nom: "Géométrie",
    emoji: "△",
    couleur: "#dc2626",
    1: [
      {
        question: "Quel est le périmètre d'un carré de côté 5 cm ?",
        options: ["20 cm", "25 cm", "10 cm", "15 cm"],
        answer: "20 cm",
        explication: "Périmètre d'un carré = 4 × côté = 4 × 5 = 20 cm."
      },
      {
        question: "Quelle est l'aire d'un rectangle de 6 cm × 4 cm ?",
        options: ["24 cm²", "20 cm²", "10 cm²", "48 cm²"],
        answer: "24 cm²",
        explication: "Aire = longueur × largeur = 6 × 4 = 24 cm²."
      },
      {
        question: "Quel est le périmètre d'un rectangle de 8 cm × 3 cm ?",
        options: ["22 cm", "24 cm", "11 cm", "32 cm"],
        answer: "22 cm",
        explication: "Périmètre = 2 × (longueur + largeur) = 2 × (8 + 3) = 22 cm."
      },
      {
        question: "Quelle est l'aire d'un carré de côté 7 cm ?",
        options: ["49 cm²", "28 cm²", "14 cm²", "21 cm²"],
        answer: "49 cm²",
        explication: "Aire = côté² = 7² = 49 cm²."
      },
      {
        question: "Combien d'angles droits a un rectangle ?",
        options: ["4", "2", "1", "3"],
        answer: "4",
        explication: "Un rectangle a 4 angles droits (90° chacun)."
      },
      {
        question: "Quelle est l'aire d'un triangle de base 10 cm et de hauteur 6 cm ?",
        options: ["30 cm²", "60 cm²", "16 cm²", "20 cm²"],
        answer: "30 cm²",
        explication: "Aire triangle = (base × hauteur) / 2 = (10 × 6) / 2 = 30 cm²."
      },
      {
        question: "Quel est le périmètre d'un triangle équilatéral de côté 6 cm ?",
        options: ["18 cm", "12 cm", "36 cm", "6 cm"],
        answer: "18 cm",
        explication: "Périmètre = 3 × côté = 3 × 6 = 18 cm."
      },
      {
        question: "Quelle est l'aire d'un rectangle de 9 cm × 5 cm ?",
        options: ["45 cm²", "28 cm²", "14 cm²", "90 cm²"],
        answer: "45 cm²",
        explication: "Aire = longueur × largeur = 9 × 5 = 45 cm²."
      },
      {
        question: "Quel est le périmètre d'un carré de côté 3 cm ?",
        options: ["12 cm", "9 cm", "6 cm", "3 cm"],
        answer: "12 cm",
        explication: "Périmètre = 4 × côté = 4 × 3 = 12 cm."
      },
      {
        question: "Quelle est l'aire d'un carré de côté 4 cm ?",
        options: ["16 cm²", "8 cm²", "12 cm²", "4 cm²"],
        answer: "16 cm²",
        explication: "Aire = côté² = 4² = 16 cm²."
      },
      {
        question: "Combien de côtés a un hexagone ?",
        options: ["6", "5", "7", "8"],
        answer: "6",
        explication: "Un hexagone est un polygone à 6 côtés (hexa = six en grec)."
      },
      {
        question: "Quel est le périmètre d'un triangle avec des côtés de 3 cm, 4 cm et 5 cm ?",
        options: ["12 cm", "10 cm", "60 cm", "7 cm"],
        answer: "12 cm",
        explication: "Périmètre = somme de tous les côtés = 3 + 4 + 5 = 12 cm."
      }
    ],
    2: [
      {
        question: "Quelle est l'aire d'un disque de rayon 5 cm ? (π ≈ 3,14)",
        options: ["78,5 cm²", "31,4 cm²", "25 cm²", "15,7 cm²"],
        answer: "78,5 cm²",
        explication: "Aire = π × r² = 3,14 × 25 = 78,5 cm²."
      },
      {
        question: "Dans un triangle rectangle, les deux côtés de l'angle droit mesurent 3 et 4 cm. Quelle est l'hypoténuse ?",
        options: ["5 cm", "7 cm", "6 cm", "4,5 cm"],
        answer: "5 cm",
        explication: "Pythagore : c² = 3² + 4² = 9 + 16 = 25. Donc c = 5 cm."
      },
      {
        question: "Quel est le périmètre d'un cercle de rayon 4 cm ? (π ≈ 3,14)",
        options: ["25,12 cm", "50,24 cm", "12,56 cm", "16 cm"],
        answer: "25,12 cm",
        explication: "Périmètre = 2 × π × r = 2 × 3,14 × 4 = 25,12 cm."
      },
      {
        question: "Un trapèze a des bases de 6 cm et 10 cm, et une hauteur de 4 cm. Quelle est son aire ?",
        options: ["32 cm²", "24 cm²", "40 cm²", "16 cm²"],
        answer: "32 cm²",
        explication: "Aire = (grande base + petite base) × hauteur / 2 = (10+6) × 4 / 2 = 32 cm²."
      },
      {
        question: "La diagonale d'un carré de côté 1 vaut ?",
        options: ["√2", "2", "1", "√3"],
        answer: "√2",
        explication: "Pythagore : d² = 1² + 1² = 2, donc d = √2."
      },
      {
        question: "Un losange a ses diagonales qui mesurent 8 cm et 6 cm. Quelle est son aire ?",
        options: ["24 cm²", "48 cm²", "14 cm²", "12 cm²"],
        answer: "24 cm²",
        explication: "Aire losange = (d1 × d2) / 2 = (8 × 6) / 2 = 24 cm²."
      },
      {
        question: "Quel est le périmètre d'un cercle de rayon 7 cm ? (π ≈ 3,14)",
        options: ["43,96 cm", "21,98 cm", "153,86 cm", "14 cm"],
        answer: "43,96 cm",
        explication: "Périmètre = 2 × π × r = 2 × 3,14 × 7 = 43,96 cm."
      },
      {
        question: "Dans un triangle rectangle, les deux côtés de l'angle droit mesurent 6 et 8 cm. Quelle est l'hypoténuse ?",
        options: ["10 cm", "14 cm", "7 cm", "9 cm"],
        answer: "10 cm",
        explication: "Pythagore : c² = 6² + 8² = 36 + 64 = 100. Donc c = 10 cm."
      },
      {
        question: "Quelle est l'aire d'un disque de rayon 3 cm ? (π ≈ 3,14)",
        options: ["28,26 cm²", "18,84 cm²", "9 cm²", "56,52 cm²"],
        answer: "28,26 cm²",
        explication: "Aire = π × r² = 3,14 × 9 = 28,26 cm²."
      },
      {
        question: "Quelle est l'aire d'un triangle de base 12 cm et de hauteur 5 cm ?",
        options: ["30 cm²", "60 cm²", "17 cm²", "25 cm²"],
        answer: "30 cm²",
        explication: "Aire = (base × hauteur) / 2 = (12 × 5) / 2 = 30 cm²."
      },
      {
        question: "Un rectangle a une aire de 48 cm² et une largeur de 6 cm. Quelle est sa longueur ?",
        options: ["8 cm", "6 cm", "42 cm", "4 cm"],
        answer: "8 cm",
        explication: "Longueur = Aire ÷ largeur = 48 ÷ 6 = 8 cm."
      },
      {
        question: "Un losange a des diagonales de 10 cm et 4 cm. Quelle est son aire ?",
        options: ["20 cm²", "40 cm²", "14 cm²", "10 cm²"],
        answer: "20 cm²",
        explication: "Aire = (d1 × d2) / 2 = (10 × 4) / 2 = 20 cm²."
      }
    ],
    3: [
      {
        question: "Un cylindre a un rayon de 3 cm et une hauteur de 10 cm. Quel est son volume ? (π ≈ 3,14)",
        options: ["282,6 cm³", "94,2 cm³", "188,4 cm³", "141,3 cm³"],
        answer: "282,6 cm³",
        explication: "Volume = π × r² × h = 3,14 × 9 × 10 = 282,6 cm³."
      },
      {
        question: "Dans un triangle rectangle, l'hypoténuse mesure 13 cm et un côté 5 cm. Quel est l'autre côté ?",
        options: ["12 cm", "8 cm", "10 cm", "11 cm"],
        answer: "12 cm",
        explication: "Pythagore : a² = 13² − 5² = 169 − 25 = 144. Donc a = 12 cm."
      },
      {
        question: "Quelle est l'aire latérale d'un cylindre de rayon 4 cm et hauteur 5 cm ? (π ≈ 3,14)",
        options: ["125,6 cm²", "251,2 cm²", "62,8 cm²", "80 cm²"],
        answer: "125,6 cm²",
        explication: "Aire latérale = 2 × π × r × h = 2 × 3,14 × 4 × 5 = 125,6 cm²."
      },
      {
        question: "Un cône a un rayon de 6 cm et une hauteur de 8 cm. Quel est son volume ? (π ≈ 3,14)",
        options: ["301,44 cm³", "904,32 cm³", "150,72 cm³", "200,96 cm³"],
        answer: "301,44 cm³",
        explication: "Volume cône = (1/3) × π × r² × h = (1/3) × 3,14 × 36 × 8 = 301,44 cm³."
      },
      {
        question: "La somme des angles d'un polygone à 6 côtés est ?",
        options: ["720°", "360°", "540°", "1080°"],
        answer: "720°",
        explication: "Somme = (n − 2) × 180° = (6 − 2) × 180° = 720°."
      },
      {
        question: "Un rectangle a un périmètre de 36 cm et une largeur de 7 cm. Quelle est sa longueur ?",
        options: ["11 cm", "14 cm", "18 cm", "9 cm"],
        answer: "11 cm",
        explication: "Périmètre = 2(L + l) → 36 = 2(L + 7) → L + 7 = 18 → L = 11 cm."
      },
      {
        question: "Quelle est le volume d'une sphère de rayon 3 cm ? (π ≈ 3,14)",
        options: ["113,04 cm³", "75,36 cm³", "36 cm³", "150,72 cm³"],
        answer: "113,04 cm³",
        explication: "Volume sphère = (4/3) × π × r³ = (4/3) × 3,14 × 27 = 113,04 cm³."
      },
      {
        question: "Dans un triangle rectangle, l'hypoténuse mesure 17 cm et un côté 8 cm. Quel est l'autre côté ?",
        options: ["15 cm", "9 cm", "12 cm", "13 cm"],
        answer: "15 cm",
        explication: "Pythagore : a² = 17² − 8² = 289 − 64 = 225. Donc a = 15 cm."
      },
      {
        question: "Quelle est l'aire totale d'un cylindre de rayon 2 cm et hauteur 7 cm ? (π ≈ 3,14)",
        options: ["113,04 cm²", "87,92 cm²", "56,52 cm²", "100 cm²"],
        answer: "113,04 cm²",
        explication: "Aire totale = 2πr² + 2πrh = 2×3,14×4 + 2×3,14×2×7 = 25,12 + 87,92 = 113,04 cm²."
      },
      {
        question: "Quel est le volume d'une pyramide à base carrée de 6 cm de côté et de hauteur 4 cm ?",
        options: ["48 cm³", "144 cm³", "24 cm³", "72 cm³"],
        answer: "48 cm³",
        explication: "Volume = (1/3) × base² × hauteur = (1/3) × 36 × 4 = 48 cm³."
      },
      {
        question: "Quelle est la somme des angles d'un octogone ?",
        options: ["1080°", "720°", "540°", "1440°"],
        answer: "1080°",
        explication: "Somme = (n − 2) × 180° = (8 − 2) × 180° = 1080°."
      },
      {
        question: "Un triangle a des angles de 40° et 75°. Quel est le troisième angle ?",
        options: ["65°", "115°", "45°", "70°"],
        answer: "65°",
        explication: "La somme des angles d'un triangle = 180°. Donc 180° − 40° − 75° = 65°."
      }
    ]
  },

  francais: {
    nom: "Grammaire",
    emoji: "📝",
    couleur: "#9333ea",
    1: [
      {
        question: "Quel est le pluriel de 'cheval' ?",
        options: ["chevaux", "chevals", "chévaux", "chevaus"],
        answer: "chevaux",
        explication: "Cheval fait 'chevaux' au pluriel. C'est une exception : les mots en -al font souvent -aux."
      },
      {
        question: "Quel est le féminin de 'acteur' ?",
        options: ["actrice", "acteure", "acteuse", "acteuresse"],
        answer: "actrice",
        explication: "Acteur → actrice. Le suffixe -eur devient -rice pour certains mots."
      },
      {
        question: "Quel est le sujet dans 'Le chat mange la souris' ?",
        options: ["Le chat", "la souris", "mange", "Le chat mange"],
        answer: "Le chat",
        explication: "Le sujet est le groupe nominal qui fait l'action. Ici, c'est 'Le chat' qui mange."
      },
      {
        question: "Conjugue 'avoir' au présent : nous...",
        options: ["avons", "avez", "ont", "avions"],
        answer: "avons",
        explication: "Avoir au présent : j'ai, tu as, il a, nous avons, vous avez, ils ont."
      },
      {
        question: "Quel est le pluriel de 'œil' ?",
        options: ["yeux", "œils", "œiaux", "œiles"],
        answer: "yeux",
        explication: "Œil fait 'yeux' au pluriel. C'est une exception à retenir absolument."
      },
      {
        question: "'Maison' est-il masculin ou féminin ?",
        options: ["Féminin (une maison)", "Masculin (un maison)", "Les deux", "Ni l'un ni l'autre"],
        answer: "Féminin (une maison)",
        explication: "On dit 'une maison', donc c'est un nom féminin."
      },
      {
        question: "Quel est le contraire de 'rapide' ?",
        options: ["lent", "vite", "fort", "dur"],
        answer: "lent",
        explication: "L'antonyme (contraire) de 'rapide' est 'lent'."
      },
      {
        question: "Quel est le participe passé de 'prendre' ?",
        options: ["pris", "prendé", "prendu", "prend"],
        answer: "pris",
        explication: "Prendre → pris. C'est un verbe irrégulier à mémoriser."
      },
      {
        question: "Quel est le pluriel de 'bal' ?",
        options: ["bals", "baux", "bales", "baus"],
        answer: "bals",
        explication: "Bal fait 'bals' au pluriel — c'est une exception, contrairement à 'cheval → chevaux'."
      },
      {
        question: "'Il parle' — quel est le temps de ce verbe ?",
        options: ["Présent de l'indicatif", "Imparfait", "Futur", "Passé composé"],
        answer: "Présent de l'indicatif",
        explication: "'Parle' est la forme du présent de l'indicatif pour il/elle."
      },
      {
        question: "Quel est le féminin de 'prince' ?",
        options: ["princesse", "prince", "princes", "princeuse"],
        answer: "princesse",
        explication: "Prince → princesse. On ajoute le suffixe -esse."
      },
      {
        question: "Quelle lettre muette marque généralement le pluriel en français ?",
        options: ["s", "x", "z", "t"],
        answer: "s",
        explication: "En français, on ajoute généralement un -s muet pour former le pluriel."
      }
    ],
    2: [
      {
        question: "Dans 'Le chat mange la souris', quel est le COD ?",
        options: ["la souris", "Le chat", "mange", "Il n'y en a pas"],
        answer: "la souris",
        explication: "Le COD (complément d'objet direct) répond à la question 'qui ?' ou 'quoi ?' après le verbe. Ici : mange quoi ? → la souris."
      },
      {
        question: "Quel mode est utilisé dans 'Mange tes légumes !' ?",
        options: ["Impératif", "Indicatif", "Subjonctif", "Conditionnel"],
        answer: "Impératif",
        explication: "L'impératif exprime un ordre ou un conseil. Il n'y a pas de sujet exprimé."
      },
      {
        question: "Quelle figure de style est 'Il pleurait des rivières de larmes' ?",
        options: ["Hyperbole", "Métaphore", "Comparaison", "Litote"],
        answer: "Hyperbole",
        explication: "L'hyperbole est une exagération volontaire pour accentuer l'effet. Ici, 'rivières de larmes' exagère."
      },
      {
        question: "Quel est le temps de 'elle aurait chanté' ?",
        options: ["Conditionnel passé", "Futur antérieur", "Plus-que-parfait", "Subjonctif passé"],
        answer: "Conditionnel passé",
        explication: "Conditionnel passé = conditionnel de 'avoir/être' + participe passé. 'Aurait chanté' → conditionnel passé."
      },
      {
        question: "Accordez le participe : 'Les films que j'ai... (voir)'",
        options: ["vus", "vu", "vue", "vues"],
        answer: "vus",
        explication: "Le participe passé s'accorde avec le COD placé avant le verbe. 'Que' remplace 'les films' (masculin pluriel) → vus."
      },
      {
        question: "Dans 'Il court comme le vent', quelle figure de style ?",
        options: ["Comparaison", "Métaphore", "Personnification", "Oxymore"],
        answer: "Comparaison",
        explication: "La comparaison utilise un outil de comparaison ('comme', 'tel que'…). Ici : 'comme le vent'."
      },
      {
        question: "Quel est le sens de 'perspicace' ?",
        options: ["Qui comprend vite", "Qui est têtu", "Qui est gourmand", "Qui est lent"],
        answer: "Qui comprend vite",
        explication: "Perspicace vient du latin 'perspicax' : qui voit clairement. Quelqu'un de perspicace saisit les choses rapidement."
      },
      {
        question: "Quel est le mode dans 'Je doute qu'il vienne' ?",
        options: ["Subjonctif", "Indicatif", "Conditionnel", "Impératif"],
        answer: "Subjonctif",
        explication: "Après 'douter que', on emploie le subjonctif. Ici : 'vienne' est au subjonctif présent."
      },
      {
        question: "Quelle est la nature du mot 'rapidement' ?",
        options: ["Adverbe", "Adjectif", "Nom", "Verbe"],
        answer: "Adverbe",
        explication: "Les mots en -ment formés à partir d'un adjectif sont des adverbes de manière."
      },
      {
        question: "Quel est le temps de 'nous avions mangé' ?",
        options: ["Plus-que-parfait", "Imparfait", "Passé composé", "Passé antérieur"],
        answer: "Plus-que-parfait",
        explication: "Plus-que-parfait = imparfait de l'auxiliaire + participe passé. 'Avions mangé' → plus-que-parfait."
      },
      {
        question: "Quel est l'antonyme (contraire) de 'bénévole' ?",
        options: ["Salarié", "Gratuit", "Volontaire", "Généreux"],
        answer: "Salarié",
        explication: "Un bénévole travaille sans être payé. Son contraire est le salarié, qui reçoit une rémunération."
      },
      {
        question: "Qu'est-ce qu'un complément circonstanciel de lieu ?",
        options: ["Il indique où se passe l'action", "Il indique quand l'action a lieu", "Il désigne la personne qui fait l'action", "Il complète le sens du verbe directement"],
        answer: "Il indique où se passe l'action",
        explication: "Le CC de lieu répond à la question 'où ?'. Ex : 'Il joue dans le jardin' → 'dans le jardin' est CC de lieu."
      }
    ],
    3: [
      {
        question: "Qui a écrit 'Les Misérables' ?",
        options: ["Victor Hugo", "Émile Zola", "Gustave Flaubert", "Alexandre Dumas"],
        answer: "Victor Hugo",
        explication: "Victor Hugo a publié 'Les Misérables' en 1862. C'est un roman social majeur du XIXe siècle."
      },
      {
        question: "Un alexandrin a combien de syllabes ?",
        options: ["12", "8", "10", "14"],
        answer: "12",
        explication: "L'alexandrin est le vers le plus utilisé en poésie française classique. Il compte 12 syllabes."
      },
      {
        question: "Qui a écrit 'Le Petit Prince' ?",
        options: ["Antoine de Saint-Exupéry", "Jules Verne", "Arthur Rimbaud", "Marcel Proust"],
        answer: "Antoine de Saint-Exupéry",
        explication: "'Le Petit Prince' a été publié en 1943 par Antoine de Saint-Exupéry, aviateur et écrivain."
      },
      {
        question: "Qu'est-ce qu'une métaphore ?",
        options: ["Une comparaison sans outil de comparaison", "Une exagération", "Une opposition de contraires", "Une répétition"],
        answer: "Une comparaison sans outil de comparaison",
        explication: "La métaphore rapproche deux réalités sans 'comme' ni 'tel que'. Ex : 'Cette femme est un lion' (≠ 'comme un lion')."
      },
      {
        question: "Dans quel siècle a vécu Molière ?",
        options: ["XVIIe siècle", "XVIe siècle", "XVIIIe siècle", "XIXe siècle"],
        answer: "XVIIe siècle",
        explication: "Molière (1622-1673) est le grand dramaturge du XVIIe siècle, contemporain de Louis XIV."
      },
      {
        question: "Qu'est-ce qu'un oxymore ?",
        options: ["Association de deux termes contradictoires", "Exagération volontaire", "Comparaison avec 'comme'", "Répétition d'une idée"],
        answer: "Association de deux termes contradictoires",
        explication: "Un oxymore unit deux termes opposés. Ex : 'une obscure clarté', 'un silence assourdissant'."
      },
      {
        question: "Qui a écrit 'L'Étranger' (1942) ?",
        options: ["Albert Camus", "Jean-Paul Sartre", "André Gide", "Simone de Beauvoir"],
        answer: "Albert Camus",
        explication: "'L'Étranger' est le premier roman d'Albert Camus, publié en 1942, symbole de l'absurde."
      },
      {
        question: "Qu'est-ce que l'ironie ?",
        options: ["Dire le contraire de ce qu'on pense", "Exagérer un trait", "Répéter pour insister", "Comparer deux réalités"],
        answer: "Dire le contraire de ce qu'on pense",
        explication: "L'ironie consiste à exprimer l'opposé de ce qu'on veut dire pour se moquer ou critiquer."
      },
      {
        question: "Qui a écrit 'Phèdre' ?",
        options: ["Jean Racine", "Pierre Corneille", "Molière", "Victor Hugo"],
        answer: "Jean Racine",
        explication: "'Phèdre' (1677) est une tragédie de Jean Racine, l'un des grands auteurs classiques du XVIIe siècle."
      },
      {
        question: "Qu'est-ce qu'un sonnet ?",
        options: ["Poème de 14 vers en 2 quatrains et 2 tercets", "Poème de 12 vers", "Texte en prose rythmée", "Poème de 4 strophes de 4 vers"],
        answer: "Poème de 14 vers en 2 quatrains et 2 tercets",
        explication: "Le sonnet est une forme fixe : 2 quatrains (4 vers) + 2 tercets (3 vers) = 14 vers au total."
      },
      {
        question: "Qu'est-ce que le naturalisme en littérature ?",
        options: ["Courant qui applique la méthode scientifique à la littérature", "Courant centré sur la nature et les paysages", "Mouvement romantique du XVIIIe siècle", "Courant poétique du XXe siècle"],
        answer: "Courant qui applique la méthode scientifique à la littérature",
        explication: "Le naturalisme (Zola, XIXe s.) voulait étudier les hommes comme un scientifique : hérédité, milieu social, déterminisme."
      },
      {
        question: "Qu'est-ce qu'une analepse dans un récit ?",
        options: ["Un retour en arrière dans le temps", "Un saut vers le futur", "Une accélération du récit", "Une pause descriptive"],
        answer: "Un retour en arrière dans le temps",
        explication: "L'analepse (ou 'flashback') est une rupture chronologique qui ramène le récit à un moment passé."
      }
    ]
  },

  svt: {
    nom: "Biologie",
    emoji: "🔬",
    couleur: "#0d9488",
    1: [
      {
        question: "Quel organe pompe le sang dans le corps ?",
        options: ["Le cœur", "Les poumons", "Le foie", "Les reins"],
        answer: "Le cœur",
        explication: "Le cœur est un muscle qui bat environ 70 fois par minute et envoie le sang dans tout le corps."
      },
      {
        question: "Quelle est la fonction principale des poumons ?",
        options: ["Les échanges gazeux (O₂/CO₂)", "Filtrer le sang", "Digérer les aliments", "Produire des hormones"],
        answer: "Les échanges gazeux (O₂/CO₂)",
        explication: "Les poumons permettent d'absorber le dioxygène (O₂) et de rejeter le dioxyde de carbone (CO₂)."
      },
      {
        question: "Quel est le rôle principal des globules rouges ?",
        options: ["Transporter le dioxygène", "Combattre les infections", "Coaguler le sang", "Produire des enzymes"],
        answer: "Transporter le dioxygène",
        explication: "Les globules rouges contiennent de l'hémoglobine qui fixe et transporte le dioxygène vers les organes."
      },
      {
        question: "Quel gaz les plantes produisent-elles lors de la photosynthèse ?",
        options: ["Dioxygène (O₂)", "Dioxyde de carbone (CO₂)", "Azote (N₂)", "Vapeur d'eau"],
        answer: "Dioxygène (O₂)",
        explication: "Lors de la photosynthèse, les plantes absorbent CO₂ et rejettent O₂ grâce à l'énergie lumineuse."
      },
      {
        question: "Quel est le plus grand organe du corps humain ?",
        options: ["La peau", "Le foie", "Les poumons", "L'intestin grêle"],
        answer: "La peau",
        explication: "La peau est l'organe le plus étendu, avec une surface d'environ 1,5 à 2 m² chez l'adulte."
      },
      {
        question: "Combien de chromosomes possède une cellule humaine normale ?",
        options: ["46", "23", "48", "24"],
        answer: "46",
        explication: "Les cellules humaines contiennent 46 chromosomes, soit 23 paires (dont 1 paire de chromosomes sexuels)."
      },
      {
        question: "De quoi se nourrissent les herbivores ?",
        options: ["De végétaux uniquement", "De viande uniquement", "De végétaux et de viande", "De champignons"],
        answer: "De végétaux uniquement",
        explication: "Les herbivores (lapins, vaches, girafes…) ne mangent que des végétaux (herbes, feuilles, fruits)."
      },
      {
        question: "Quelle planète est la plus proche du Soleil ?",
        options: ["Mercure", "Vénus", "Mars", "La Terre"],
        answer: "Mercure",
        explication: "Mercure est la planète la plus proche du Soleil, à environ 58 millions de km."
      },
      {
        question: "Combien d'os compte le squelette d'un adulte ?",
        options: ["206", "300", "150", "250"],
        answer: "206",
        explication: "Un adulte possède 206 os. Les nourrissons en ont davantage car certains fusionnent en grandissant."
      },
      {
        question: "Quelle est la formule chimique de l'eau ?",
        options: ["H₂O", "CO₂", "NaCl", "H₂SO₄"],
        answer: "H₂O",
        explication: "L'eau est formée de 2 atomes d'hydrogène (H) et 1 atome d'oxygène (O) : H₂O."
      },
      {
        question: "Qu'est-ce qu'un producteur dans une chaîne alimentaire ?",
        options: ["Un végétal qui fabrique sa matière organique", "Un animal qui mange d'autres animaux", "Un décomposeur", "Un champignon"],
        answer: "Un végétal qui fabrique sa matière organique",
        explication: "Les producteurs sont les végétaux : ils fabriquent leur propre matière organique grâce à la photosynthèse."
      },
      {
        question: "Quel organe produit la bile pour digérer les graisses ?",
        options: ["Le foie", "Le pancréas", "L'estomac", "L'intestin grêle"],
        answer: "Le foie",
        explication: "Le foie produit la bile, stockée dans la vésicule biliaire, qui permet de digérer les lipides (graisses)."
      }
    ],
    2: [
      {
        question: "Qu'est-ce que la mitose ?",
        options: ["Division cellulaire qui produit 2 cellules identiques", "Division qui produit des gamètes", "Mort programmée d'une cellule", "Fusion de deux cellules"],
        answer: "Division cellulaire qui produit 2 cellules identiques",
        explication: "La mitose est la division cellulaire ordinaire. Elle donne 2 cellules filles génétiquement identiques à la cellule mère."
      },
      {
        question: "Quel est le rôle de l'ADN ?",
        options: ["Coder l'information génétique", "Transporter l'oxygène", "Produire de l'énergie", "Défendre contre les infections"],
        answer: "Coder l'information génétique",
        explication: "L'ADN (acide désoxyribonucléique) contient toute l'information génétique de l'organisme sous forme de gènes."
      },
      {
        question: "Quelle réaction se produit dans les mitochondries ?",
        options: ["La respiration cellulaire", "La photosynthèse", "La digestion", "La division cellulaire"],
        answer: "La respiration cellulaire",
        explication: "Les mitochondries sont le 'moteur' de la cellule : elles produisent de l'énergie (ATP) grâce à la respiration cellulaire."
      },
      {
        question: "Qu'est-ce qu'un écosystème ?",
        options: ["Ensemble d'êtres vivants et leur milieu de vie", "Un ensemble de végétaux uniquement", "Un réseau de rivières", "La couche d'ozone"],
        answer: "Ensemble d'êtres vivants et leur milieu de vie",
        explication: "Un écosystème regroupe la biocénose (les êtres vivants) et le biotope (le milieu non vivant) en interaction."
      },
      {
        question: "Quel organe produit l'insuline ?",
        options: ["Le pancréas", "Le foie", "Les reins", "La thyroïde"],
        answer: "Le pancréas",
        explication: "L'insuline est une hormone produite par le pancréas qui régule le taux de glucose dans le sang."
      },
      {
        question: "La formule de la photosynthèse est ?",
        options: ["CO₂ + H₂O + lumière → glucose + O₂", "O₂ + glucose → CO₂ + H₂O + énergie", "H₂O → H₂ + O₂", "CO₂ + O₂ → H₂O"],
        answer: "CO₂ + H₂O + lumière → glucose + O₂",
        explication: "La photosynthèse transforme le CO₂ et l'eau, grâce à la lumière, en glucose (énergie) et dioxygène."
      },
      {
        question: "Où sont situés les gènes dans la cellule ?",
        options: ["Dans les chromosomes, au sein du noyau", "Dans les mitochondries", "Dans la membrane cellulaire", "Dans le cytoplasme"],
        answer: "Dans les chromosomes, au sein du noyau",
        explication: "Les gènes sont des segments d'ADN. L'ADN est enroulé en chromosomes, situés dans le noyau de la cellule."
      },
      {
        question: "Qu'est-ce qu'une espèce en biologie ?",
        options: ["Ensemble d'individus capables de se reproduire entre eux", "Ensemble d'individus vivant au même endroit", "Groupe d'animaux de même taille", "Ensemble de plantes du même pays"],
        answer: "Ensemble d'individus capables de se reproduire entre eux",
        explication: "Une espèce regroupe des individus qui peuvent se reproduire ensemble et donner une descendance fertile."
      },
      {
        question: "Qu'est-ce que l'immunité acquise ?",
        options: ["La capacité à reconnaître et détruire un pathogène déjà rencontré", "La résistance naturelle sans contact préalable", "Une maladie auto-immune", "La résistance aux médicaments"],
        answer: "La capacité à reconnaître et détruire un pathogène déjà rencontré",
        explication: "L'immunité acquise (ou adaptative) se développe après un premier contact avec un pathogène grâce aux lymphocytes mémoire."
      },
      {
        question: "Qu'est-ce que la tectonique des plaques ?",
        options: ["Le mouvement lent des grandes plaques de l'écorce terrestre", "La composition chimique du manteau", "L'étude des tremblements de terre uniquement", "La formation des nuages"],
        answer: "Le mouvement lent des grandes plaques de l'écorce terrestre",
        explication: "La lithosphère est découpée en plaques qui se déplacent lentement (quelques cm/an), provoquant séismes et volcans."
      },
      {
        question: "Quel est le rôle du système nerveux central ?",
        options: ["Recevoir, traiter et transmettre les informations", "Produire des hormones", "Filtrer le sang", "Assurer la digestion"],
        answer: "Recevoir, traiter et transmettre les informations",
        explication: "Le cerveau et la moelle épinière reçoivent les informations sensorielles, les traitent et envoient des réponses motrices."
      },
      {
        question: "Qu'est-ce qu'une chaîne alimentaire ?",
        options: ["Une succession d'êtres vivants où chacun mange le précédent", "Un régime alimentaire équilibré", "Un circuit de distribution des aliments", "L'ensemble des producteurs d'un écosystème"],
        answer: "Une succession d'êtres vivants où chacun mange le précédent",
        explication: "Ex : herbe → lapin → renard. Chaque maillon mange le précédent et est mangé par le suivant."
      }
    ],
    3: [
      {
        question: "Qu'est-ce que la méiose ?",
        options: ["Division cellulaire qui produit 4 gamètes haploïdes", "Division qui produit 2 cellules identiques", "Mort cellulaire programmée", "Fusion de deux cellules"],
        answer: "Division cellulaire qui produit 4 gamètes haploïdes",
        explication: "La méiose produit 4 cellules (gamètes) avec la moitié des chromosomes (haploïdes, n=23 chez l'humain)."
      },
      {
        question: "Comment fonctionne la sélection naturelle ?",
        options: ["Les individus les mieux adaptés survivent et se reproduisent davantage", "Les individus les plus forts éliminent les plus faibles", "L'environnement choisit les individus à conserver", "Les espèces s'adaptent consciemment à leur milieu"],
        answer: "Les individus les mieux adaptés survivent et se reproduisent davantage",
        explication: "Darwin : les individus ayant des caractères favorables laissent plus de descendants. Ces caractères se répandent."
      },
      {
        question: "Qu'est-ce qu'une mutation génétique ?",
        options: ["Une modification de la séquence d'ADN", "Un changement de forme d'une cellule", "Une nouvelle maladie", "Un médicament"],
        answer: "Une modification de la séquence d'ADN",
        explication: "Une mutation est une erreur ou modification dans la séquence de bases de l'ADN. Elle peut être neutre, favorable ou néfaste."
      },
      {
        question: "Quel est le lien entre gène et protéine ?",
        options: ["Chaque gène code la fabrication d'une protéine", "Chaque protéine contient plusieurs gènes", "Les gènes détruisent les protéines inutiles", "Les protéines fabriquent les gènes"],
        answer: "Chaque gène code la fabrication d'une protéine",
        explication: "Un gène est une séquence d'ADN qui contient l'information pour fabriquer une protéine spécifique (via l'ARN)."
      },
      {
        question: "Qu'est-ce que l'effet de serre naturel ?",
        options: ["Rétention de la chaleur terrestre par certains gaz atmosphériques", "Destruction de la couche d'ozone", "Le réchauffement dû à l'industrie", "L'absorption du CO₂ par les océans"],
        answer: "Rétention de la chaleur terrestre par certains gaz atmosphériques",
        explication: "Les gaz à effet de serre (CO₂, H₂O, CH₄) retiennent la chaleur terrestre. Sans eux, la Terre serait à −18°C en moyenne."
      },
      {
        question: "Comment fonctionne la vaccination ?",
        options: ["Elle entraîne le système immunitaire à reconnaître un pathogène", "Elle détruit les bactéries directement", "Elle renforce les muscles", "Elle produit des antibiotiques"],
        answer: "Elle entraîne le système immunitaire à reconnaître un pathogène",
        explication: "Le vaccin introduit un antigène inoffensif. L'organisme fabrique des anticorps et des cellules mémoire pour réagir vite en cas d'infection réelle."
      },
      {
        question: "Quelle est la différence entre génotype et phénotype ?",
        options: ["Génotype = information génétique, phénotype = caractères observables", "Génotype = caractères visibles, phénotype = ADN", "Ce sont deux mots pour la même chose", "Génotype = gènes dominants, phénotype = gènes récessifs"],
        answer: "Génotype = information génétique, phénotype = caractères observables",
        explication: "Le génotype est la composition en allèles. Le phénotype est ce qu'on observe (couleur des yeux, groupe sanguin…)."
      },
      {
        question: "Qu'est-ce que la biodiversité ?",
        options: ["La diversité du vivant à tous les niveaux (gènes, espèces, écosystèmes)", "Le nombre total d'animaux sur Terre", "La variété des plantes uniquement", "La diversité des milieux non vivants"],
        answer: "La diversité du vivant à tous les niveaux (gènes, espèces, écosystèmes)",
        explication: "La biodiversité comprend la diversité génétique au sein d'une espèce, la diversité des espèces et la diversité des écosystèmes."
      },
      {
        question: "Qu'est-ce que la spéciation ?",
        options: ["Formation de nouvelles espèces au cours de l'évolution", "Extinction d'une espèce", "Reproduction asexuée", "Hybridation entre deux espèces"],
        answer: "Formation de nouvelles espèces au cours de l'évolution",
        explication: "La spéciation survient quand une population est isolée et diverge génétiquement jusqu'à ne plus pouvoir se reproduire avec la population d'origine."
      },
      {
        question: "Quel est le rôle des enzymes dans l'organisme ?",
        options: ["Accélérer les réactions chimiques", "Transporter l'oxygène", "Stocker l'énergie", "Synthétiser l'ADN uniquement"],
        answer: "Accélérer les réactions chimiques",
        explication: "Les enzymes sont des protéines catalyseurs : elles accélèrent considérablement les réactions chimiques sans être consommées."
      },
      {
        question: "Qu'est-ce que la dérive des continents ?",
        options: ["Le déplacement lent des continents sur le manteau terrestre", "L'érosion des côtes par la mer", "Le mouvement des courants océaniques", "La rotation de la Terre"],
        answer: "Le déplacement lent des continents sur le manteau terrestre",
        explication: "Proposée par Wegener (1912), la dérive des continents explique que les continents se sont séparés d'un supercontinent : la Pangée."
      },
      {
        question: "À quoi sert la chlorophylle dans une feuille ?",
        options: ["Absorber l'énergie lumineuse pour la photosynthèse", "Transporter l'eau dans la plante", "Stocker les glucides", "Défendre la plante contre les insectes"],
        answer: "Absorber l'énergie lumineuse pour la photosynthèse",
        explication: "La chlorophylle est le pigment vert des feuilles. Elle capte l'énergie de la lumière (notamment rouge et bleue) pour réaliser la photosynthèse."
      }
    ]
  },

  physiqueChimie: {
    nom: "Atomes & Matière",
    emoji: "⚗️",
    couleur: "#f97316",
    1: [
      {
        question: "Quelle est l'unité de mesure de la force ?",
        options: ["Newton (N)", "Kilogramme (kg)", "Joule (J)", "Watt (W)"],
        answer: "Newton (N)",
        explication: "La force se mesure en Newton (N), du nom du physicien Isaac Newton."
      },
      {
        question: "À quelle température l'eau bout-elle à pression normale ?",
        options: ["100 °C", "0 °C", "50 °C", "212 °C"],
        answer: "100 °C",
        explication: "L'eau pure bout à 100 °C (373 K) à la pression atmosphérique normale (1 atm)."
      },
      {
        question: "Quelle est la formule chimique du dioxyde de carbone ?",
        options: ["CO₂", "H₂O", "O₂", "CH₄"],
        answer: "CO₂",
        explication: "Le dioxyde de carbone est formé d'1 atome de carbone (C) et 2 atomes d'oxygène (O) : CO₂."
      },
      {
        question: "Un atome est composé de...",
        options: ["Protons, neutrons et électrons", "Protons et électrons uniquement", "Neutrons et électrons uniquement", "Molécules et atomes"],
        answer: "Protons, neutrons et électrons",
        explication: "Le noyau contient les protons (charge +) et neutrons (neutres). Les électrons (charge −) gravitent autour."
      },
      {
        question: "Quelle est la vitesse approximative de la lumière ?",
        options: ["300 000 km/s", "300 km/s", "3 000 km/s", "30 000 km/s"],
        answer: "300 000 km/s",
        explication: "La lumière se propage dans le vide à environ 300 000 km/s (3 × 10⁸ m/s)."
      },
      {
        question: "Que représente la formule NaCl ?",
        options: ["Le sel de cuisine (chlorure de sodium)", "L'eau oxygénée", "Le sucre", "Le bicarbonate de soude"],
        answer: "Le sel de cuisine (chlorure de sodium)",
        explication: "NaCl = sodium (Na) + chlore (Cl) = chlorure de sodium, c'est-à-dire le sel de table."
      },
      {
        question: "Quelle est l'unité de mesure de l'énergie ?",
        options: ["Joule (J)", "Newton (N)", "Watt (W)", "Volt (V)"],
        answer: "Joule (J)",
        explication: "L'énergie se mesure en Joule (J). 1 calorie ≈ 4,18 J."
      },
      {
        question: "Qu'est-ce que la masse volumique ?",
        options: ["La masse par unité de volume (kg/m³)", "Le poids d'un objet en kg", "Le volume d'un liquide en L", "La pression exercée sur une surface"],
        answer: "La masse par unité de volume (kg/m³)",
        explication: "ρ = m/V. La masse volumique de l'eau est 1 000 kg/m³ (ou 1 kg/L)."
      },
      {
        question: "Qu'est-ce que l'état gazeux d'une matière ?",
        options: ["Les molécules sont très éloignées et se déplacent librement", "Les molécules sont très proches et ordonnées", "Les molécules sont proches mais désordonnées", "Les molécules sont immobiles"],
        answer: "Les molécules sont très éloignées et se déplacent librement",
        explication: "Dans un gaz, les molécules sont très espacées, se déplacent rapidement et dans toutes les directions."
      },
      {
        question: "Quelle est l'unité de mesure de la tension électrique ?",
        options: ["Volt (V)", "Ampère (A)", "Ohm (Ω)", "Watt (W)"],
        answer: "Volt (V)",
        explication: "La tension (différence de potentiel) se mesure en Volt (V). La prise secteur en France délivre 230 V."
      },
      {
        question: "Qu'est-ce que la fusion en physique ?",
        options: ["Le passage de l'état solide à l'état liquide", "Le passage de l'état liquide à l'état gazeux", "Le passage de l'état gazeux à l'état liquide", "La décomposition chimique d'un corps"],
        answer: "Le passage de l'état solide à l'état liquide",
        explication: "La fusion est le changement d'état solide → liquide. Ex : la glace fond à 0 °C."
      },
      {
        question: "Quel est le symbole chimique du fer ?",
        options: ["Fe", "Fr", "Fo", "F"],
        answer: "Fe",
        explication: "Le fer a pour symbole Fe, du latin 'ferrum'. C'est l'élément chimique de numéro atomique 26."
      }
    ],
    2: [
      {
        question: "Un objet parcourt 150 km en 2 heures. Quelle est sa vitesse moyenne ?",
        options: ["75 km/h", "300 km/h", "50 km/h", "100 km/h"],
        answer: "75 km/h",
        explication: "v = d/t = 150 ÷ 2 = 75 km/h."
      },
      {
        question: "Quelle est la loi d'Ohm ?",
        options: ["U = R × I", "P = U × I", "E = mc²", "F = m × a"],
        answer: "U = R × I",
        explication: "La loi d'Ohm relie la tension U (V), la résistance R (Ω) et l'intensité I (A) : U = R × I."
      },
      {
        question: "Dans un circuit en série, si une ampoule grille...",
        options: ["Toutes les ampoules s'éteignent", "Les autres continuent de fonctionner", "L'intensité double dans les autres", "La tension diminue de moitié"],
        answer: "Toutes les ampoules s'éteignent",
        explication: "Dans un circuit en série, le courant suit un seul chemin. Si un composant est défaillant, le circuit est interrompu."
      },
      {
        question: "Un corps flotte sur l'eau si...",
        options: ["Sa masse volumique est inférieure à 1 000 kg/m³", "Sa masse est inférieure à 1 kg", "Son volume est inférieur à 1 L", "Sa masse volumique est supérieure à 1 000 kg/m³"],
        answer: "Sa masse volumique est inférieure à 1 000 kg/m³",
        explication: "Un corps flotte si sa masse volumique est inférieure à celle du liquide (ρ eau = 1 000 kg/m³)."
      },
      {
        question: "Quelle est la formule de la pression ?",
        options: ["P = F/S", "P = m × g", "P = U/R", "P = F × S"],
        answer: "P = F/S",
        explication: "La pression P (en Pa) est la force F (en N) exercée sur une surface S (en m²) : P = F/S."
      },
      {
        question: "Quelle est l'énergie cinétique d'un objet de 2 kg se déplaçant à 3 m/s ?",
        options: ["9 J", "6 J", "18 J", "3 J"],
        answer: "9 J",
        explication: "Ec = ½ × m × v² = ½ × 2 × 3² = ½ × 2 × 9 = 9 J."
      },
      {
        question: "Combien d'électrons peut contenir la couche électronique K (n=1) ?",
        options: ["2", "8", "18", "32"],
        answer: "2",
        explication: "La couche K (première couche) peut contenir au maximum 2 électrons. La couche L en contient 8."
      },
      {
        question: "Qu'est-ce que la réfraction de la lumière ?",
        options: ["Le changement de direction de la lumière en changeant de milieu", "La réflexion de la lumière sur un miroir", "L'absorption de la lumière par un corps opaque", "La décomposition de la lumière en couleurs"],
        answer: "Le changement de direction de la lumière en changeant de milieu",
        explication: "La réfraction se produit quand la lumière passe d'un milieu à un autre (ex : air → eau), changeant de vitesse et de direction."
      },
      {
        question: "Qu'est-ce qu'un acide selon la théorie de Brønsted ?",
        options: ["Un donneur de proton (H⁺)", "Un accepteur d'électrons", "Un corps qui rougit le pH", "Une base qui se dissout dans l'eau"],
        answer: "Un donneur de proton (H⁺)",
        explication: "Selon Brønsted-Lowry, un acide est une espèce chimique capable de céder un proton H⁺."
      },
      {
        question: "Qu'est-ce que l'oxydation en chimie ?",
        options: ["La perte d'électrons par une espèce", "Le gain d'électrons par une espèce", "La réaction avec l'oxygène uniquement", "La dissolution dans l'eau"],
        answer: "La perte d'électrons par une espèce",
        explication: "L'oxydation est une perte d'électrons. La réduction est un gain d'électrons. Moyen mnémotechnique : ROEL (Réduction = gain, Oxydation = perte)."
      },
      {
        question: "Quelle est l'unité de mesure de l'intensité du courant électrique ?",
        options: ["Ampère (A)", "Volt (V)", "Ohm (Ω)", "Watt (W)"],
        answer: "Ampère (A)",
        explication: "L'intensité du courant électrique se mesure en Ampère (A). Elle représente la quantité de charges qui passent par seconde."
      },
      {
        question: "La chaleur peut se transmettre par...",
        options: ["Conduction, convection et rayonnement", "Conduction uniquement", "Rayonnement uniquement", "Diffusion et osmose"],
        answer: "Conduction, convection et rayonnement",
        explication: "Conduction (contact direct), convection (mouvement de fluide), rayonnement (ondes électromagnétiques, ex : chaleur du Soleil)."
      }
    ],
    3: [
      {
        question: "Qu'est-ce que l'énergie mécanique totale ?",
        options: ["La somme de l'énergie cinétique et de l'énergie potentielle", "Uniquement l'énergie cinétique", "Uniquement l'énergie potentielle", "La différence entre Ec et Ep"],
        answer: "La somme de l'énergie cinétique et de l'énergie potentielle",
        explication: "Em = Ec + Ep. En l'absence de frottement, l'énergie mécanique se conserve."
      },
      {
        question: "Qu'est-ce que le pH ?",
        options: ["Une mesure de l'acidité ou basicité d'une solution", "La pression hydraulique d'un liquide", "La masse molaire d'une substance", "La concentration en sel"],
        answer: "Une mesure de l'acidité ou basicité d'une solution",
        explication: "Le pH varie de 0 à 14. pH < 7 : acide, pH = 7 : neutre, pH > 7 : basique."
      },
      {
        question: "Calcule la pression exercée par une force de 500 N sur une surface de 0,25 m².",
        options: ["2 000 Pa", "125 Pa", "500 Pa", "250 Pa"],
        answer: "2 000 Pa",
        explication: "P = F/S = 500/0,25 = 2 000 Pa."
      },
      {
        question: "Qu'est-ce qu'une réaction exothermique ?",
        options: ["Une réaction qui libère de la chaleur", "Une réaction qui absorbe de la chaleur", "Une réaction sans échange de chaleur", "Une réaction nucléaire uniquement"],
        answer: "Une réaction qui libère de la chaleur",
        explication: "Une réaction exothermique libère de l'énergie sous forme de chaleur. Ex : combustion, oxydation des métaux."
      },
      {
        question: "Quelle est la formule de l'énergie potentielle de pesanteur ?",
        options: ["Ep = m × g × h", "Ep = ½ × m × v²", "Ep = F × d", "Ep = P × V"],
        answer: "Ep = m × g × h",
        explication: "Ep = m × g × h (masse en kg, g ≈ 9,8 m/s², hauteur en m). Plus un objet est haut, plus son énergie potentielle est grande."
      },
      {
        question: "Comment calculer la puissance électrique ?",
        options: ["P = U × I", "P = R × I", "P = U / I", "P = U² / R"],
        answer: "P = U × I",
        explication: "La puissance P (en Watt) = tension U (V) × intensité I (A). Ex : une ampoule de 230V/0,5A a une puissance de 115 W."
      },
      {
        question: "La loi de conservation de l'énergie stipule que...",
        options: ["L'énergie ne se crée ni ne se détruit, elle se transforme", "L'énergie diminue toujours avec le temps", "On peut créer de l'énergie à partir de rien", "L'énergie ne peut se transformer qu'en chaleur"],
        answer: "L'énergie ne se crée ni ne se détruit, elle se transforme",
        explication: "C'est le premier principe de la thermodynamique. L'énergie totale d'un système isolé reste constante."
      },
      {
        question: "Qu'est-ce que la fission nucléaire ?",
        options: ["La division d'un noyau lourd en noyaux plus légers avec libération d'énergie", "La fusion de deux noyaux légers", "La désintégration radioactive naturelle", "La réaction chimique de l'uranium avec l'oxygène"],
        answer: "La division d'un noyau lourd en noyaux plus légers avec libération d'énergie",
        explication: "La fission nucléaire (ex : uranium) libère une énergie considérable. Elle est utilisée dans les centrales nucléaires."
      },
      {
        question: "Quelle est la deuxième loi de Newton (principe fondamental de la dynamique) ?",
        options: ["F = m × a", "P = F/S", "E = m × c²", "v = d/t"],
        answer: "F = m × a",
        explication: "La force F (N) appliquée à un objet de masse m (kg) lui donne une accélération a (m/s²) : F = m × a."
      },
      {
        question: "Un proton a une charge électrique...",
        options: ["Positive (+e)", "Négative (−e)", "Nulle", "Variable selon l'élément"],
        answer: "Positive (+e)",
        explication: "Le proton porte une charge élémentaire positive (+e = +1,6 × 10⁻¹⁹ C). L'électron porte −e, le neutron est neutre."
      },
      {
        question: "Qu'est-ce que la résistance électrique ?",
        options: ["L'opposition d'un conducteur au passage du courant électrique", "La quantité de courant qui passe", "La tension aux bornes d'un composant", "L'énergie consommée par un appareil"],
        answer: "L'opposition d'un conducteur au passage du courant électrique",
        explication: "La résistance R se mesure en Ohm (Ω). Elle dépend du matériau, de la longueur et de la section du conducteur."
      },
      {
        question: "Qu'est-ce que le numéro atomique Z d'un élément ?",
        options: ["Le nombre de protons dans le noyau", "Le nombre de neutrons", "La masse de l'atome", "Le nombre total de particules"],
        answer: "Le nombre de protons dans le noyau",
        explication: "Le numéro atomique Z est le nombre de protons dans le noyau. Il définit l'élément chimique. Ex : Z=6 → carbone."
      }
    ]
  },

  histoire: {
    nom: "Repères clés",
    emoji: "📜",
    couleur: "#b45309",
    1: [
      {
        question: "En quelle année a eu lieu la Révolution française ?",
        options: ["1789", "1799", "1776", "1815"],
        answer: "1789",
        explication: "La Révolution française commence en 1789 avec la prise de la Bastille le 14 juillet."
      },
      {
        question: "En quelle année s'est terminée la Première Guerre mondiale ?",
        options: ["1918", "1919", "1916", "1920"],
        answer: "1918",
        explication: "La Première Guerre mondiale s'est terminée le 11 novembre 1918 avec l'armistice."
      },
      {
        question: "Qui a découvert l'Amérique en 1492 ?",
        options: ["Christophe Colomb", "Vasco de Gama", "Marco Polo", "Magellan"],
        answer: "Christophe Colomb",
        explication: "Christophe Colomb atteint les Amériques le 12 octobre 1492 en cherchant une route vers les Indes."
      },
      {
        question: "En quelle année a débuté la Seconde Guerre mondiale ?",
        options: ["1939", "1940", "1938", "1941"],
        answer: "1939",
        explication: "La Seconde Guerre mondiale débute le 1er septembre 1939 avec l'invasion de la Pologne par l'Allemagne nazie."
      },
      {
        question: "Quel roi a fait construire le château de Versailles ?",
        options: ["Louis XIV", "Louis XIII", "Louis XVI", "Henri IV"],
        answer: "Louis XIV",
        explication: "Louis XIV, le 'Roi-Soleil', a transformé Versailles en résidence royale fastueuse à partir de 1661."
      },
      {
        question: "En quelle année est tombé le mur de Berlin ?",
        options: ["1989", "1991", "1987", "1985"],
        answer: "1989",
        explication: "Le mur de Berlin est tombé le 9 novembre 1989, symbolisant la fin de la Guerre froide."
      },
      {
        question: "Quel est le nom du premier homme à avoir marché sur la Lune ?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Youri Gagarine", "John Glenn"],
        answer: "Neil Armstrong",
        explication: "Neil Armstrong a marché sur la Lune le 21 juillet 1969 lors de la mission Apollo 11."
      },
      {
        question: "Quelles sont les trois couleurs du drapeau français ?",
        options: ["Bleu, blanc, rouge", "Rouge, blanc, vert", "Bleu, rouge, jaune", "Blanc, bleu, vert"],
        answer: "Bleu, blanc, rouge",
        explication: "Le drapeau tricolore français est bleu, blanc, rouge. Il est apparu lors de la Révolution française."
      },
      {
        question: "En quelle année la France a-t-elle aboli définitivement l'esclavage ?",
        options: ["1848", "1789", "1794", "1905"],
        answer: "1848",
        explication: "L'esclavage a été définitivement aboli en France en 1848, par le décret du gouvernement provisoire sous Victor Schoelcher."
      },
      {
        question: "Qui était Napoléon Bonaparte ?",
        options: ["Général devenu Empereur des Français", "Roi de France", "Président de la République", "Amiral de la flotte française"],
        answer: "Général devenu Empereur des Français",
        explication: "Napoléon Bonaparte (1769-1821) était général de la Révolution. Il devint Consul en 1799 puis Empereur des Français en 1804."
      },
      {
        question: "Quel empire a construit le Colisée à Rome ?",
        options: ["L'Empire romain", "L'Empire grec", "L'Empire byzantin", "L'Empire ottoman"],
        answer: "L'Empire romain",
        explication: "Le Colisée (Colosseum) a été construit à Rome entre 70 et 80 ap. J.-C. sous les empereurs Vespasien et Titus."
      },
      {
        question: "Quel événement marque la fin de la Seconde Guerre mondiale en Europe ?",
        options: ["La capitulation de l'Allemagne le 8 mai 1945", "Le débarquement du 6 juin 1944", "La conférence de Yalta", "La mort de Hitler"],
        answer: "La capitulation de l'Allemagne le 8 mai 1945",
        explication: "L'Allemagne nazie capitule le 8 mai 1945 (V-E Day). La guerre se termine en Asie le 2 septembre 1945."
      }
    ],
    2: [
      {
        question: "Quelles sont les trois valeurs de la devise de la République française ?",
        options: ["Liberté, Égalité, Fraternité", "Liberté, Justice, Fraternité", "Égalité, Laïcité, Fraternité", "Liberté, Démocratie, Solidarité"],
        answer: "Liberté, Égalité, Fraternité",
        explication: "'Liberté, Égalité, Fraternité' est la devise de la République française, née de la Révolution de 1789."
      },
      {
        question: "Qu'est-ce que la Shoah ?",
        options: ["Le génocide des Juifs d'Europe par les nazis (1939-1945)", "La politique de déportation des Tziganes", "La répression des Résistants français", "Un camp de travail soviétique"],
        answer: "Le génocide des Juifs d'Europe par les nazis (1939-1945)",
        explication: "La Shoah est le génocide de 6 millions de Juifs d'Europe, organisé par le régime nazi d'Adolf Hitler."
      },
      {
        question: "Quel traité a mis fin à la Première Guerre mondiale ?",
        options: ["Le traité de Versailles (1919)", "Le traité de Paris (1918)", "Le traité de Francfort", "Le traité de Westphalie"],
        answer: "Le traité de Versailles (1919)",
        explication: "Le traité de Versailles, signé le 28 juin 1919, impose de lourdes conditions à l'Allemagne vaincue."
      },
      {
        question: "Quand a été fondée la Ve République française ?",
        options: ["1958", "1946", "1871", "1944"],
        answer: "1958",
        explication: "La Ve République est fondée en 1958, avec l'adoption d'une nouvelle Constitution sous Charles de Gaulle."
      },
      {
        question: "Qu'est-ce que la guerre froide ?",
        options: ["Affrontement indirect entre les USA et l'URSS (1947-1991)", "Un conflit armé entre l'OTAN et le Pacte de Varsovie", "La Seconde Guerre mondiale vue de l'URSS", "Un conflit commercial entre pays européens"],
        answer: "Affrontement indirect entre les USA et l'URSS (1947-1991)",
        explication: "La guerre froide est une période de tension entre les deux superpuissances sans conflit armé direct, de 1947 à la chute de l'URSS en 1991."
      },
      {
        question: "Qui était Charlemagne ?",
        options: ["Roi des Francs couronné Empereur d'Occident en 800", "Premier roi de France", "Chef de la Révolution française", "Général romain conquérant les Gaules"],
        answer: "Roi des Francs couronné Empereur d'Occident en 800",
        explication: "Charlemagne (742-814) unifia une grande partie de l'Europe occidentale et fut couronné Empereur le 25 décembre 800 par le pape."
      },
      {
        question: "Qu'est-ce que le régime de Vichy (1940-1944) ?",
        options: ["Gouvernement français collaborant avec l'Allemagne nazie", "Gouvernement de la Résistance française", "Régime républicain de l'après-guerre", "Administration militaire alliée en France"],
        answer: "Gouvernement français collaborant avec l'Allemagne nazie",
        explication: "Sous le maréchal Pétain, le régime de Vichy collabora avec l'Allemagne nazie, notamment lors de la déportation des Juifs."
      },
      {
        question: "Quand a eu lieu le débarquement de Normandie ?",
        options: ["6 juin 1944", "1er septembre 1939", "8 mai 1945", "11 novembre 1918"],
        answer: "6 juin 1944",
        explication: "Le Débarquement (Opération Overlord) a eu lieu le 6 juin 1944. C'est l'une des plus grandes opérations militaires de l'histoire."
      },
      {
        question: "Qu'est-ce que la colonisation ?",
        options: ["Domination politique, économique et culturelle d'un territoire par une puissance étrangère", "L'immigration volontaire vers un nouveau pays", "Un accord commercial entre deux nations", "La construction de nouvelles villes"],
        answer: "Domination politique, économique et culturelle d'un territoire par une puissance étrangère",
        explication: "La colonisation européenne aux XIXe-XXe siècles a imposé la domination de pays d'Afrique, d'Asie et des Amériques."
      },
      {
        question: "Qu'est-ce que la Renaissance ?",
        options: ["Mouvement culturel et artistique des XVe-XVIe siècles redécouvrant l'Antiquité", "La période après la Révolution française", "Le renouveau de l'Église catholique", "La reconstruction après la Première Guerre mondiale"],
        answer: "Mouvement culturel et artistique des XVe-XVIe siècles redécouvrant l'Antiquité",
        explication: "La Renaissance débute en Italie au XVe s. (Léonard de Vinci, Michel-Ange) et se répand en Europe. Elle valorise l'humain et l'Antiquité."
      },
      {
        question: "Qu'est-ce que la décolonisation ?",
        options: ["Processus d'indépendance des colonies après 1945", "La politique coloniale du XIXe siècle", "La migration des Européens vers les colonies", "L'exploitation des ressources coloniales"],
        answer: "Processus d'indépendance des colonies après 1945",
        explication: "Après 1945, les peuples colonisés obtiennent progressivement leur indépendance, souvent après des luttes (Algérie, Viêt Nam…)."
      },
      {
        question: "Qu'est-ce que l'Humanisme à la Renaissance ?",
        options: ["Courant de pensée qui place l'être humain au centre de la réflexion", "Religion basée sur le respect de la nature", "Doctrine politique défendant les droits des pauvres", "Courant artistique centré sur le paysage"],
        answer: "Courant de pensée qui place l'être humain au centre de la réflexion",
        explication: "L'Humanisme (Érasme, Montaigne, Rabelais) valorise l'homme, la raison, l'éducation et redécouvre les textes antiques."
      }
    ],
    3: [
      {
        question: "Quelles sont les principales causes de la Première Guerre mondiale ?",
        options: ["Nationalisme, rivalités impériales, alliances et assassinat de François-Ferdinand", "Révolution russe, crise économique et disputes coloniales", "Rivalités commerciales et montée du socialisme", "Revendications territoriales franco-espagnoles"],
        answer: "Nationalisme, rivalités impériales, alliances et assassinat de François-Ferdinand",
        explication: "L'assassinat de l'archiduc François-Ferdinand en 1914 déclenche un jeu d'alliances. Les causes profondes : nationalisme, impérialisme, course aux armements."
      },
      {
        question: "Qu'est-ce qu'un régime totalitaire ?",
        options: ["Un régime où l'État contrôle tous les aspects de la vie publique et privée", "Un régime dictatorial fondé uniquement sur la violence", "Une démocratie à parti unique", "Un régime colonial répressif"],
        answer: "Un régime où l'État contrôle tous les aspects de la vie publique et privée",
        explication: "Le totalitarisme (nazisme, stalinisme, fascisme) se caractérise par un parti unique, la propagande, la terreur et le contrôle total de la société."
      },
      {
        question: "Qu'est-ce que le Plan Marshall (1947) ?",
        options: ["Aide économique américaine à la reconstruction de l'Europe après 1945", "Plan militaire de l'OTAN contre l'URSS", "Programme de reconstruction des villes françaises", "Accord commercial transatlantique"],
        answer: "Aide économique américaine à la reconstruction de l'Europe après 1945",
        explication: "Le Plan Marshall (1948-1952) a fourni 13 milliards de dollars aux pays européens pour leur reconstruction, renforçant l'influence américaine."
      },
      {
        question: "Quelles sont les principales conséquences du traité de Versailles (1919) ?",
        options: ["Humiliation de l'Allemagne, pertes territoriales et réparations — nourrissant les rancœurs", "Reconstruction rapide de l'Europe et paix durable", "Création de la SDN qui empêche la Seconde Guerre", "Réconciliation franco-allemande immédiate"],
        answer: "Humiliation de l'Allemagne, pertes territoriales et réparations — nourrissant les rancœurs",
        explication: "L'Allemagne perd des territoires, ses colonies, doit payer des réparations et admettre sa responsabilité. Ces conditions favorisent la montée du nazisme."
      },
      {
        question: "Qu'est-ce que la Résistance française pendant la Seconde Guerre mondiale ?",
        options: ["Mouvement clandestin qui combattait l'occupation nazie et le régime de Vichy", "L'armée régulière française restée en France", "Les partisans communistes uniquement", "Les soldats français en Angleterre exclusivement"],
        answer: "Mouvement clandestin qui combattait l'occupation nazie et le régime de Vichy",
        explication: "La Résistance intérieure (réseaux, maquis) et extérieure (France Libre de De Gaulle à Londres) ont combattu l'occupant par le renseignement, le sabotage et les armes."
      },
      {
        question: "Qu'est-ce que l'apartheid en Afrique du Sud ?",
        options: ["Système de ségrégation raciale légale (1948-1994)", "Guerre civile entre tribus africaines", "Politique coloniale britannique", "Mouvement de libération africain"],
        answer: "Système de ségrégation raciale légale (1948-1994)",
        explication: "L'apartheid séparait les Noirs et les Blancs par des lois. Nelson Mandela a lutté contre ce système et est devenu président en 1994."
      },
      {
        question: "Quel est le rôle de l'ONU, fondée en 1945 ?",
        options: ["Maintien de la paix et de la sécurité internationales", "Diriger l'économie mondiale", "Gouverner les pays en voie de développement", "Remplacer les États souverains"],
        answer: "Maintien de la paix et de la sécurité internationales",
        explication: "L'ONU (Organisation des Nations Unies) est créée en 1945 pour prévenir les guerres, défendre les droits humains et favoriser le développement."
      },
      {
        question: "Comment s'est terminé l'Empire romain d'Occident ?",
        options: ["En 476 avec la déposition du dernier empereur par un chef barbare", "En 395 avec la division de l'Empire", "En 410 avec le sac de Rome par les Wisigoths", "En 565 avec la mort de Justinien"],
        answer: "En 476 avec la déposition du dernier empereur par un chef barbare",
        explication: "En 476, Odoacre, chef hérule, dépose Romulus Augustule. C'est la date conventionnelle de la fin de l'Empire romain d'Occident."
      },
      {
        question: "Qu'est-ce que la politique de Staline en URSS (années 1930) ?",
        options: ["Collectivisation forcée, industrialisation rapide et Grande Terreur (purges)", "Libéralisation économique et ouverture vers l'Occident", "Retour à l'économie de marché et élections libres", "Démilitarisation et désarmement"],
        answer: "Collectivisation forcée, industrialisation rapide et Grande Terreur (purges)",
        explication: "Staline imposa la collectivisation des terres, l'industrialisation forcée et fit éliminer ses opposants lors des Grandes Purges (1936-1938)."
      },
      {
        question: "Quelles sont les causes de la Seconde Guerre mondiale ?",
        options: ["Montée du nazisme, crise économique de 1929, faiblesses du traité de Versailles et politique d'apaisement", "Rivalités coloniales et volonté de revanche française", "Révolution communiste mondiale et opposition des démocraties", "Conflits religieux et culturels en Europe centrale"],
        answer: "Montée du nazisme, crise économique de 1929, faiblesses du traité de Versailles et politique d'apaisement",
        explication: "La crise de 1929 favorise les extrémismes. Hitler exploite l'humiliation du traité de Versailles. L'apaisement des démocraties face aux agressions nazies encourage Hitler."
      },
      {
        question: "Qu'est-ce que la Déclaration des droits de l'Homme et du Citoyen (1789) ?",
        options: ["Texte fondateur proclamant les droits naturels et imprescriptibles de tout être humain", "Constitution de la Première République", "Accord entre le roi et l'Assemblée", "Charte des droits des soldats révolutionnaires"],
        answer: "Texte fondateur proclamant les droits naturels et imprescriptibles de tout être humain",
        explication: "Adoptée le 26 août 1789, la DDHC proclame la liberté, l'égalité, la souveraineté nationale et la séparation des pouvoirs."
      },
      {
        question: "Qu'est-ce que la Révolution industrielle (XIXe siècle) ?",
        options: ["Transformation profonde des modes de production grâce à la machine à vapeur et au charbon", "Révolution politique dans les usines", "Industrialisation agricole du Moyen Âge", "Mouvement artistique célébrant les ouvriers"],
        answer: "Transformation profonde des modes de production grâce à la machine à vapeur et au charbon",
        explication: "Née en Angleterre au XVIIIe s., la révolution industrielle transforme les sociétés : urbanisation, travail en usine, chemin de fer, essor du capitalisme."
      }
    ]
  },

  francaisConjugaison: {
    nom: "Conjugaison",
    emoji: "✏️",
    couleur: "#a855f7",
    1: [
      { question: "Conjugue 'être' au présent : je...", options: ["suis", "es", "été", "soit"], answer: "suis", explication: "Être au présent : je suis, tu es, il est, nous sommes, vous êtes, ils sont." },
      { question: "Conjugue 'avoir' au présent : ils...", options: ["ont", "avez", "ont eu", "aient"], answer: "ont", explication: "Avoir au présent : j'ai, tu as, il a, nous avons, vous avez, ils ont." },
      { question: "Conjugue 'aller' au présent : tu...", options: ["vas", "ailles", "allais", "es allé"], answer: "vas", explication: "Aller est très irrégulier : je vais, tu vas, il va, nous allons, vous allez, ils vont." },
      { question: "Conjugue 'faire' au présent : nous...", options: ["faisons", "faisez", "faisons fait", "ferons"], answer: "faisons", explication: "Faire au présent : je fais, tu fais, il fait, nous faisons, vous faites, ils font." },
      { question: "Conjugue 'venir' au présent : elle...", options: ["vient", "viens", "vienne", "est venue"], answer: "vient", explication: "Venir au présent : je viens, tu viens, il/elle vient, nous venons, vous venez, ils viennent." },
      { question: "Conjugue 'pouvoir' au présent : vous...", options: ["pouvez", "peuvent", "puvez", "pouviez"], answer: "pouvez", explication: "Pouvoir au présent : je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent." }
    ],
    2: [
      { question: "Conjugue 'finir' au passé composé : il...", options: ["a fini", "est fini", "finissait", "avait fini"], answer: "a fini", explication: "Finir → participe passé 'fini'. Auxiliaire avoir. Il a fini." },
      { question: "Conjugue 'partir' à l'imparfait : nous...", options: ["partions", "partons", "sommes partis", "partîmes"], answer: "partions", explication: "Imparfait : radical du présent (nous partons → part-) + -ions → nous partions." },
      { question: "Conjugue 'vouloir' au futur simple : je...", options: ["voudrai", "voulrai", "veux", "voudras"], answer: "voudrai", explication: "Vouloir est irrégulier au futur : je voudrai, tu voudras, il voudra…" },
      { question: "Conjugue 'savoir' au subjonctif présent : que tu...", options: ["saches", "saies", "saves", "sais"], answer: "saches", explication: "Savoir au subjonctif : que je sache, que tu saches, qu'il sache…" },
      { question: "Conjugue 'prendre' à l'impératif présent (2e personne du singulier)", options: ["prends", "prend", "prendre", "pris"], answer: "prends", explication: "À l'impératif, les verbes en -re gardent le -s à la 2e pers. du singulier : prends !" },
      { question: "Conjugue 'être' au conditionnel présent : nous...", options: ["serions", "soyons", "étions", "aurions été"], answer: "serions", explication: "Conditionnel présent = futur simple + terminaisons imparfait. Être → ser- + -ions → serions." }
    ],
    3: [
      { question: "Conjugue 'aller' au plus-que-parfait : j'...", options: ["étais allé(e)", "avais allé", "suis allé(e)", "irai"], answer: "étais allé(e)", explication: "Plus-que-parfait = auxiliaire à l'imparfait + participe passé. Aller → être. J'étais allé(e)." },
      { question: "Conjugue 'voir' au passé simple : il...", options: ["vit", "vut", "voyait", "a vu"], answer: "vit", explication: "Voir au passé simple : je vis, tu vis, il vit, nous vîmes… Passé simple littéraire, à connaître." },
      { question: "Quelle est la différence entre passé composé et imparfait ?", options: ["PC = action ponctuelle terminée ; imparfait = état ou habitude", "PC = passé lointain ; imparfait = passé récent", "Ils sont interchangeables", "PC = action longue ; imparfait = action courte"], answer: "PC = action ponctuelle terminée ; imparfait = état ou habitude", explication: "Ex : 'Il pleuvait (imparfait) quand je suis sorti (PC).' L'imparfait décrit le contexte, le PC l'action principale." },
      { question: "Quel auxiliaire prend 'tomber' au passé composé ?", options: ["être", "avoir", "les deux", "aucun"], answer: "être", explication: "Les verbes de mouvement ou de changement d'état (tomber, partir, venir…) se conjuguent avec être." },
      { question: "Conjugue 'pouvoir' au conditionnel passé : il...", options: ["aurait pu", "aurait pû", "pourrait", "avait pu"], answer: "aurait pu", explication: "Conditionnel passé = conditionnel présent de l'auxiliaire + participe passé. Il aurait pu." },
      { question: "Conjugue 'écrire' au passé simple : nous...", options: ["écrivîmes", "écrivâmes", "écrivions", "avons écrit"], answer: "écrivîmes", explication: "Écrire au passé simple : j'écrivis, tu écrivis, il écrivit, nous écrivîmes, vous écrivîtes, ils écrivirent." }
    ]
  },

  francaisLitterature: {
    nom: "Littérature",
    emoji: "📚",
    couleur: "#c026d3",
    1: [
      { question: "Qui a écrit 'Le Cid' (1637) ?", options: ["Pierre Corneille", "Jean Racine", "Molière", "Victor Hugo"], answer: "Pierre Corneille", explication: "'Le Cid' est une tragicomédie de Pierre Corneille, chef-d'œuvre du théâtre classique français." },
      { question: "Quel est le genre de 'Les Misérables' ?", options: ["Roman", "Pièce de théâtre", "Poème", "Nouvelle"], answer: "Roman", explication: "'Les Misérables' (1862) est un roman fleuve de Victor Hugo, symbole du réalisme social." },
      { question: "Qu'est-ce qu'une fable ?", options: ["Court récit avec une morale, souvent avec des animaux", "Poème épique sur les héros", "Roman d'aventures", "Pièce comique"], answer: "Court récit avec une morale, souvent avec des animaux", explication: "La fable illustre une leçon de vie (morale) à travers un récit bref, souvent mettant en scène des animaux." },
      { question: "Qui a écrit les fables les plus célèbres en français ?", options: ["Jean de La Fontaine", "Victor Hugo", "Molière", "Racine"], answer: "Jean de La Fontaine", explication: "Jean de La Fontaine (1621-1695) a écrit les 'Fables', recueil de 240 textes inspirés d'Ésope et Phèdre." },
      { question: "Quel est le genre de 'Phèdre' de Racine ?", options: ["Tragédie", "Comédie", "Roman", "Épopée"], answer: "Tragédie", explication: "'Phèdre' (1677) est une tragédie en cinq actes. Elle met en scène la passion destructrice de Phèdre pour son beau-fils." },
      { question: "Qu'est-ce qu'une autobiographie ?", options: ["Récit de sa propre vie écrit par soi-même", "Biographie écrite par un autre auteur", "Roman dont le héros ressemble à l'auteur", "Journal intime fictif"], answer: "Récit de sa propre vie écrit par soi-même", explication: "Autobiographie = autos (soi) + bios (vie) + graphein (écrire). L'auteur raconte sa propre histoire. Ex : 'Les Confessions' de Rousseau." }
    ],
    2: [
      { question: "Qu'est-ce que le classicisme littéraire (XVIIe s.) ?", options: ["Courant valorisant l'ordre, la raison et l'imitation de l'Antiquité", "Courant qui célèbre les émotions et la nature", "Mouvement d'avant-garde refusant toute règle", "Courant réaliste du XIXe siècle"], answer: "Courant valorisant l'ordre, la raison et l'imitation de l'Antiquité", explication: "Le classicisme (Racine, Molière, Corneille, La Fontaine) suit des règles strictes : unités de temps, lieu, action, bienséance." },
      { question: "Qu'est-ce que le romantisme (XIXe s.) ?", options: ["Courant valorisant les émotions, la nature et le 'moi'", "Courant scientifique appliqué à la littérature", "Retour aux formes classiques antiques", "Mouvement célébrant le progrès industriel"], answer: "Courant valorisant les émotions, la nature et le 'moi'", explication: "Le romantisme (Hugo, Lamartine, Vigny, Musset) s'oppose à la raison classique. Il célèbre la sensibilité, la nature, les ruines, l'exotisme." },
      { question: "Qui a écrit 'Germinal' (1885) ?", options: ["Émile Zola", "Gustave Flaubert", "Honoré de Balzac", "Stendhal"], answer: "Émile Zola", explication: "'Germinal' est un roman naturaliste d'Émile Zola sur la condition des mineurs. Il fait partie du cycle des Rougon-Macquart." },
      { question: "Qu'est-ce qu'une tragédie classique ?", options: ["Pièce en 5 actes, personnages nobles, fin malheureuse", "Comédie avec un dénouement triste", "Roman sentimental", "Épopée en vers"], answer: "Pièce en 5 actes, personnages nobles, fin malheureuse", explication: "La tragédie classique obéit à la règle des 3 unités (temps, lieu, action) et à la bienséance. Les héros sont nobles et finissent tragiquement." },
      { question: "Qui a écrit 'Les Fleurs du Mal' (1857) ?", options: ["Charles Baudelaire", "Paul Verlaine", "Arthur Rimbaud", "Stéphane Mallarmé"], answer: "Charles Baudelaire", explication: "'Les Fleurs du Mal' est le recueil majeur de Charles Baudelaire. Condamné à sa parution, il est aujourd'hui un chef-d'œuvre de la poésie symboliste." },
      { question: "Qu'est-ce qu'un roman réaliste ?", options: ["Roman représentant fidèlement la réalité sociale", "Roman d'aventures fantastiques", "Roman centré sur les sentiments intimes", "Roman à thèse moraliste"], answer: "Roman représentant fidèlement la réalité sociale", explication: "Le réalisme (Balzac, Flaubert, Stendhal) vise à décrire la société telle qu'elle est, sans idéalisation." }
    ],
    3: [
      { question: "Qui a écrit 'À la recherche du temps perdu' (1913-1927) ?", options: ["Marcel Proust", "André Gide", "Paul Valéry", "Colette"], answer: "Marcel Proust", explication: "Ce roman-fleuve en 7 volumes explore la mémoire et le temps. La 'madeleine de Proust' en est l'image la plus célèbre." },
      { question: "Qu'est-ce que l'existentialisme littéraire ?", options: ["Courant centré sur la liberté humaine et la responsabilité (Sartre, Camus)", "Mouvement naturaliste du XIXe siècle", "Courant poétique du XVIIe siècle", "Roman psychologique du XIVe siècle"], answer: "Courant centré sur la liberté humaine et la responsabilité (Sartre, Camus)", explication: "L'existentialisme (années 40-50) affirme que 'l'existence précède l'essence' : l'homme se définit par ses choix." },
      { question: "Qu'est-ce que le théâtre de l'absurde ?", options: ["Courant montrant l'absurdité de la condition humaine (Beckett, Ionesco)", "Théâtre comique du XVIIe siècle", "Théâtre politique engagé", "Théâtre réaliste du XIXe siècle"], answer: "Courant montrant l'absurdité de la condition humaine (Beckett, Ionesco)", explication: "'En attendant Godot' (Beckett) et 'La Cantatrice chauve' (Ionesco) illustrent l'absurde : personnages sans but, langage déréglé." },
      { question: "Qu'est-ce que l'intertextualité ?", options: ["Relations entre un texte et d'autres textes (citation, imitation, transformation)", "L'étude du contexte historique d'un texte", "La traduction d'un texte dans une autre langue", "L'influence d'un texte sur son lecteur"], answer: "Relations entre un texte et d'autres textes (citation, imitation, transformation)", explication: "Tout texte est en dialogue avec d'autres : il peut citer, parodier, transformer des œuvres antérieures." },
      { question: "Qui a écrit 'Le Rouge et le Noir' (1830) ?", options: ["Stendhal", "Balzac", "Flaubert", "Zola"], answer: "Stendhal", explication: "'Le Rouge et le Noir' de Stendhal raconte l'ascension sociale de Julien Sorel. Roman réaliste et psychologique précurseur." },
      { question: "Qu'est-ce que le Nouveau Roman (années 50-60) ?", options: ["Courant remettant en cause le roman traditionnel (personnage, intrigue, narrateur)", "Courant réaliste renouvelé après la guerre", "Retour au roman classique du XVIIe siècle", "Roman autobiographique contemporain"], answer: "Courant remettant en cause le roman traditionnel (personnage, intrigue, narrateur)", explication: "Robbe-Grillet, Simon, Sarraute rejettent les codes du roman : plus de héros, d'intrigue claire, de psychologie traditionnelle." }
    ]
  },

  svtEcologie: {
    nom: "Écosystèmes",
    emoji: "🌿",
    couleur: "#16a34a",
    1: [
      { question: "Qu'est-ce qu'un prédateur ?", options: ["Animal qui chasse et mange d'autres animaux", "Animal mangé par d'autres", "Animal qui se nourrit de plantes", "Animal décomposeur"], answer: "Animal qui chasse et mange d'autres animaux", explication: "Un prédateur est un consommateur qui capture et consomme des proies vivantes. Ex : le lion, l'aigle, le requin." },
      { question: "Que sont les décomposeurs dans un écosystème ?", options: ["Êtres qui dégradent la matière organique morte", "Animaux qui mangent les producteurs", "Plantes carnivores", "Parasites des prédateurs"], answer: "Êtres qui dégradent la matière organique morte", explication: "Les décomposeurs (bactéries, champignons) minéralisent la matière organique morte et la restituent au sol sous forme de sels minéraux." },
      { question: "Quel gaz est principalement responsable du réchauffement climatique actuel ?", options: ["Dioxyde de carbone (CO₂)", "Dioxygène (O₂)", "Azote (N₂)", "Argon (Ar)"], answer: "Dioxyde de carbone (CO₂)", explication: "Le CO₂ est le principal gaz à effet de serre d'origine humaine, émis par la combustion des énergies fossiles." },
      { question: "Qu'est-ce que la biodiversité ?", options: ["La diversité de tous les êtres vivants sur Terre", "Le nombre total d'espèces connues", "La diversité des milieux naturels uniquement", "La résistance des espèces aux maladies"], answer: "La diversité de tous les êtres vivants sur Terre", explication: "La biodiversité comprend la diversité génétique, des espèces et des écosystèmes." },
      { question: "Qu'est-ce qu'une forêt primaire ?", options: ["Forêt non modifiée par l'homme, à l'état naturel", "Forêt replantée après une coupe", "Forêt gérée par les forestiers", "Forêt tropicale uniquement"], answer: "Forêt non modifiée par l'homme, à l'état naturel", explication: "Une forêt primaire (ou vierge) n'a jamais été exploitée. Elle abrite une biodiversité exceptionnelle." },
      { question: "Qu'est-ce qu'une espèce invasive ?", options: ["Espèce introduite qui perturbe l'écosystème d'accueil", "Espèce en voie de disparition", "Espèce endémique d'une région", "Espèce protégée par la loi"], answer: "Espèce introduite qui perturbe l'écosystème d'accueil", explication: "Les espèces invasives (ex : frelon asiatique, jussie) concurrencent les espèces locales et peuvent déséquilibrer les écosystèmes." }
    ],
    2: [
      { question: "Qu'est-ce qu'un réseau trophique ?", options: ["L'ensemble des chaînes alimentaires d'un écosystème", "Une seule chaîne proie-prédateur", "Le cycle des nutriments dans le sol", "La hiérarchie entre les espèces"], answer: "L'ensemble des chaînes alimentaires d'un écosystème", explication: "Le réseau trophique montre toutes les relations alimentaires entre espèces d'un écosystème. Il est plus complexe qu'une simple chaîne." },
      { question: "Quel est le premier maillon de toute chaîne alimentaire ?", options: ["Un producteur (végétal photosynthétique)", "Un consommateur primaire", "Un décomposeur", "Un prédateur"], answer: "Un producteur (végétal photosynthétique)", explication: "Les producteurs (plantes, algues) fabriquent de la matière organique grâce à la photosynthèse. Ils sont à la base de toutes les chaînes alimentaires." },
      { question: "Qu'est-ce que l'eutrophisation d'un lac ?", options: ["Pollution par excès de nutriments entraînant une prolifération d'algues", "Assèchement progressif d'un plan d'eau", "Augmentation de la salinité d'un lac", "Disparition des poissons due au froid"], answer: "Pollution par excès de nutriments entraînant une prolifération d'algues", explication: "L'excès de nitrates et phosphates (engrais, eaux usées) favorise les algues qui épuisent l'oxygène et étouffent la vie aquatique." },
      { question: "Quel est le rôle des pollinisateurs dans les écosystèmes ?", options: ["Ils permettent la reproduction des plantes à fleurs", "Ils décomposent la matière organique", "Ils régulent les populations de prédateurs", "Ils produisent du miel uniquement"], answer: "Ils permettent la reproduction des plantes à fleurs", explication: "Les abeilles, papillons et autres pollinisateurs transportent le pollen entre fleurs, rendant possible la fécondation et la production de fruits/graines." },
      { question: "Comment la déforestation contribue-t-elle au réchauffement climatique ?", options: ["Les forêts stockent du carbone ; les détruire libère du CO₂", "Les forêts refroidissent le sol en le couvrant", "La déforestation détruit uniquement la biodiversité locale", "Les arbres absorbent la chaleur solaire"], answer: "Les forêts stockent du carbone ; les détruire libère du CO₂", explication: "Les arbres stockent le carbone dans leur bois. Quand on les brûle ou les coupe, ce CO₂ est libéré dans l'atmosphère." },
      { question: "Qu'est-ce que la fragmentation des habitats ?", options: ["Division d'un habitat en petits îlots isolés, nuisant aux espèces", "Destruction totale d'un écosystème", "Protection de corridors écologiques", "Création de réserves naturelles"], answer: "Division d'un habitat en petits îlots isolés, nuisant aux espèces", explication: "Les routes, villes et cultures fragmentent les habitats. Les animaux ne peuvent plus se déplacer, ce qui diminue la diversité génétique." }
    ],
    3: [
      { question: "Qu'est-ce que la capacité de charge (K) d'un écosystème ?", options: ["Le nombre maximal d'individus qu'un milieu peut supporter durablement", "La vitesse de croissance d'une population", "La quantité d'énergie produite par les producteurs", "La résistance d'un écosystème aux espèces invasives"], answer: "Le nombre maximal d'individus qu'un milieu peut supporter durablement", explication: "Au-delà de K, les ressources s'épuisent et la population décline. C'est une limite naturelle de tout écosystème." },
      { question: "Qu'est-ce que la résilience d'un écosystème ?", options: ["Sa capacité à retrouver son équilibre après une perturbation", "Sa résistance aux invasions d'espèces étrangères", "Sa productivité primaire nette", "Le nombre d'espèces qu'il contient"], answer: "Sa capacité à retrouver son équilibre après une perturbation", explication: "Un écosystème résilient se 'répare' après un incendie, une sécheresse ou une pollution. La biodiversité renforce la résilience." },
      { question: "Qu'est-ce qu'une niche écologique ?", options: ["L'ensemble des ressources et conditions utilisées par une espèce", "L'habitat physique d'une espèce", "Le régime alimentaire d'un animal", "La zone géographique d'une espèce"], answer: "L'ensemble des ressources et conditions utilisées par une espèce", explication: "La niche écologique décrit le 'rôle' d'une espèce : ce qu'elle mange, quand elle est active, comment elle interagit avec les autres." },
      { question: "Comment les océans régulent-ils le climat ?", options: ["Ils absorbent CO₂ et chaleur, régulent température et précipitations", "Ils produisent l'O₂ nécessaire à la respiration", "Ils filtrent les polluants atmosphériques", "Ils n'ont aucun effet sur le climat terrestre"], answer: "Ils absorbent CO₂ et chaleur, régulent température et précipitations", explication: "Les océans absorbent ~30% du CO₂ et ~90% de la chaleur excédentaire. Ils jouent un rôle tampon majeur dans le changement climatique." },
      { question: "Qu'est-ce que le cycle du carbone ?", options: ["Circulation du carbone entre atmosphère, vivants, sols et océans", "Réaction chimique du CO₂ avec l'eau", "Processus de photosynthèse uniquement", "Décomposition des matières organiques"], answer: "Circulation du carbone entre atmosphère, vivants, sols et océans", explication: "Le carbone circule en permanence : CO₂ atmosphérique → photosynthèse → matière vivante → respiration/décomposition → CO₂." },
      { question: "Qu'est-ce qu'un service écosystémique ?", options: ["Bénéfice que l'humanité tire des écosystèmes (eau pure, pollinisation, régulation du climat)", "Protection légale d'un espace naturel", "Étude scientifique d'un écosystème", "Intervention humaine dans un écosystème"], answer: "Bénéfice que l'humanité tire des écosystèmes (eau pure, pollinisation, régulation du climat)", explication: "On distingue services d'approvisionnement (nourriture, eau), de régulation (climat, pollinisation) et culturels (loisirs, bien-être)." }
    ]
  },

  svtGenetique: {
    nom: "Génétique",
    emoji: "🧬",
    couleur: "#0891b2",
    1: [
      { question: "Quelle est la forme de l'ADN ?", options: ["Double hélice", "Simple brin linéaire", "Cercle fermé uniquement", "Sphère"], answer: "Double hélice", explication: "L'ADN a une structure en double hélice, découverte par Watson et Crick en 1953 grâce aux travaux de Rosalind Franklin." },
      { question: "Où se trouve l'ADN dans la cellule ?", options: ["Dans le noyau (enroulé en chromosomes)", "Dans les mitochondries uniquement", "Dans le cytoplasme librement", "Dans la membrane cellulaire"], answer: "Dans le noyau (enroulé en chromosomes)", explication: "L'ADN nucléaire est enroulé autour de protéines (histones) formant la chromatine, elle-même condensée en chromosomes lors de la division." },
      { question: "Qu'est-ce qu'un gène ?", options: ["Séquence d'ADN codant une protéine", "Un chromosome complet", "Une cellule reproductrice", "Un brin d'ARN"], answer: "Séquence d'ADN codant une protéine", explication: "Un gène est une séquence spécifique de nucléotides sur l'ADN qui contient l'information pour fabriquer une protéine." },
      { question: "Combien de chromosomes contient une cellule sexuelle humaine (gamète) ?", options: ["23", "46", "48", "24"], answer: "23", explication: "Les gamètes (spermatozoïdes et ovules) sont haploïdes : ils contiennent 23 chromosomes. À la fécondation, l'œuf reçoit 23+23 = 46 chromosomes." },
      { question: "Qu'est-ce qu'une cellule eucaryote ?", options: ["Cellule avec un noyau délimité par une membrane", "Cellule sans noyau (bactérie)", "Cellule végétale uniquement", "Cellule capable de se diviser"], answer: "Cellule avec un noyau délimité par une membrane", explication: "Les cellules eucaryotes (animaux, végétaux, champignons) ont un noyau. Les procaryotes (bactéries) n'en ont pas." },
      { question: "Qu'est-ce qu'une mutation ?", options: ["Modification de la séquence d'ADN", "Division d'une cellule en deux", "Fusion de deux cellules", "Copie exacte de l'ADN"], answer: "Modification de la séquence d'ADN", explication: "Une mutation est un changement dans la séquence de bases de l'ADN. Elle peut être neutre, bénéfique ou nocive, et peut être héritée." }
    ],
    2: [
      { question: "Qu'est-ce qu'un allèle ?", options: ["Forme alternative d'un gène", "Copie d'un chromosome entier", "Protéine codée par un gène", "Segment non codant de l'ADN"], answer: "Forme alternative d'un gène", explication: "Un gène existe en plusieurs versions (allèles). Ex : le gène de la couleur des yeux a un allèle 'marron' et un allèle 'bleu'." },
      { question: "Qu'est-ce qu'un gène dominant ?", options: ["Gène dont l'allèle s'exprime même en un seul exemplaire", "Gène présent sur le chromosome X uniquement", "Gène qui code une protéine essentielle", "Gène hérité du père uniquement"], answer: "Gène dont l'allèle s'exprime même en un seul exemplaire", explication: "Un allèle dominant masque l'allèle récessif. Il suffit d'un exemplaire pour que le caractère soit exprimé (phénotype visible)." },
      { question: "Quel est le rôle de l'ARN messager ?", options: ["Copier l'info de l'ADN pour la transporter vers les ribosomes", "Stocker l'information génétique à long terme", "Construire les protéines directement", "Réparer les erreurs de l'ADN"], answer: "Copier l'info de l'ADN pour la transporter vers les ribosomes", explication: "La transcription : ADN → ARNm. L'ARNm sort du noyau et se fixe sur les ribosomes pour être traduit en protéine." },
      { question: "Qu'est-ce que la traduction en biologie moléculaire ?", options: ["Synthèse d'une protéine à partir de l'ARNm par les ribosomes", "Copie de l'ADN en ARN", "Duplication de l'ADN avant la division", "Dégradation des protéines inutiles"], answer: "Synthèse d'une protéine à partir de l'ARNm par les ribosomes", explication: "La traduction : ARNm + ribosomes → protéine. Chaque triplet de bases (codon) code un acide aminé." },
      { question: "Deux parents porteurs (Aa × Aa) : quelle proportion d'enfants sera atteinte par la maladie récessive (aa) ?", options: ["1/4 (25%)", "1/2 (50%)", "3/4 (75%)", "0%"], answer: "1/4 (25%)", explication: "Croisement Aa × Aa → AA (1/4), Aa (2/4), aa (1/4). Seul aa est atteint si la maladie est récessive." },
      { question: "Qu'est-ce que la recombinaison génétique ?", options: ["Échange de segments entre chromosomes homologues lors de la méiose", "Mutation aléatoire lors de la réplication", "Fusion de deux gamètes", "Division cellulaire ordinaire"], answer: "Échange de segments entre chromosomes homologues lors de la méiose", explication: "Le crossing-over pendant la méiose crée de nouvelles combinaisons d'allèles, augmentant la variabilité génétique." }
    ],
    3: [
      { question: "Qu'est-ce que l'épigénétique ?", options: ["Modifications de l'expression des gènes sans changer la séquence d'ADN", "Étude des mutations héréditaires", "Analyse du génome complet d'un individu", "Transmission des caractères acquis selon Lamarck"], answer: "Modifications de l'expression des gènes sans changer la séquence d'ADN", explication: "L'épigénétique étudie comment l'environnement (alimentation, stress…) peut activer ou désactiver des gènes sans modifier l'ADN." },
      { question: "Comment fonctionne CRISPR-Cas9 ?", options: ["Outil qui coupe l'ADN à un endroit précis pour modifier un gène", "Méthode de séquençage de l'ADN", "Technique de clonage animal", "Virus modifié pour injecter de l'ADN"], answer: "Outil qui coupe l'ADN à un endroit précis pour modifier un gène", explication: "CRISPR-Cas9 est une 'paire de ciseaux moléculaires' guidée par un ARN vers une séquence précise d'ADN. Révolution en biotechnologie." },
      { question: "Quelle est la différence entre mitose et méiose ?", options: ["Mitose → 2 cellules diploïdes identiques ; méiose → 4 cellules haploïdes différentes", "Mitose → gamètes ; méiose → cellules somatiques", "Mitose → 4 cellules ; méiose → 2 cellules", "Elles produisent toutes deux des cellules identiques"], answer: "Mitose → 2 cellules diploïdes identiques ; méiose → 4 cellules haploïdes différentes", explication: "Mitose (division ordinaire) : 2 cellules filles à 46 chromosomes. Méiose (gamètes) : 4 cellules à 23 chromosomes avec brassage génétique." },
      { question: "Comment une maladie génétique récessive liée à l'X se transmet-elle ?", options: ["Les femmes sont souvent conductrices, les hommes sont plus souvent atteints", "Seules les femmes sont atteintes", "La maladie ne touche que les personnes de groupe sanguin O", "Elle se transmet uniquement de père en fils"], answer: "Les femmes sont souvent conductrices, les hommes sont plus souvent atteints", explication: "Ex : hémophilie. Les femmes (XX) peuvent avoir un allèle sain compensatoire. Les hommes (XY) n'ont qu'un X : si l'allèle est muté, ils sont malades." },
      { question: "Qu'est-ce que la PCR (réaction en chaîne par polymérase) ?", options: ["Technique permettant d'amplifier un fragment d'ADN en millions de copies", "Méthode de séquençage génomique complet", "Test de compatibilité entre donneurs d'organes", "Technique de modification génétique"], answer: "Technique permettant d'amplifier un fragment d'ADN en millions de copies", explication: "La PCR copie un segment d'ADN des millions de fois. Utilisée en médecine (tests Covid), en criminologie (ADN), et en recherche." },
      { question: "Qu'est-ce que le séquençage du génome ?", options: ["Détermination de l'ordre de toutes les bases d'ADN d'un organisme", "Cartographie des chromosomes", "Identification des gènes actifs dans une cellule", "Comptage des chromosomes d'une cellule"], answer: "Détermination de l'ordre de toutes les bases d'ADN d'un organisme", explication: "Le génome humain (3 milliards de paires de bases) a été entièrement séquencé en 2003. Cela ouvre la voie à la médecine personnalisée." }
    ]
  },

  chimie: {
    nom: "Chimie",
    emoji: "🧪",
    couleur: "#ea580c",
    1: [
      { question: "Quel est le symbole chimique de l'or ?", options: ["Au", "Or", "Go", "Ag"], answer: "Au", explication: "Au vient du latin 'aurum'. L'or est l'élément numéro 79 du tableau périodique." },
      { question: "Quel est le symbole chimique de l'argent ?", options: ["Ag", "Ar", "Si", "Ag"], answer: "Ag", explication: "Ag vient du latin 'argentum'. L'argent est l'élément numéro 47." },
      { question: "Quelle est la formule chimique du méthane ?", options: ["CH₄", "CO₂", "C₂H₆", "H₂O"], answer: "CH₄", explication: "Le méthane est le principal composant du gaz naturel. 1 atome de carbone + 4 atomes d'hydrogène = CH₄." },
      { question: "Qu'est-ce qu'une molécule ?", options: ["Assemblage d'atomes liés par des liaisons chimiques", "Un atome isolé chargé", "Un proton et un électron associés", "Un groupe d'ions"], answer: "Assemblage d'atomes liés par des liaisons chimiques", explication: "Une molécule est un ensemble d'atomes liés chimiquement. Ex : H₂O (2 H + 1 O), CO₂ (1 C + 2 O)." },
      { question: "Quel est le symbole chimique du sodium ?", options: ["Na", "So", "Sm", "Sn"], answer: "Na", explication: "Na vient du latin 'natrium'. Le sodium est l'élément numéro 11, métal alcalin très réactif." },
      { question: "Combien d'éléments compte le tableau périodique ?", options: ["118", "92", "100", "110"], answer: "118", explication: "Le tableau périodique actuel compte 118 éléments, dont les derniers ont été synthétisés en laboratoire." }
    ],
    2: [
      { question: "Qu'est-ce qu'un ion ?", options: ["Atome ou molécule ayant perdu ou gagné des électrons (chargé)", "Atome au niveau d'énergie le plus bas", "Molécule neutre de grande taille", "Noyau atomique isolé"], answer: "Atome ou molécule ayant perdu ou gagné des électrons (chargé)", explication: "Ion positif (cation) = perte d'électrons. Ion négatif (anion) = gain d'électrons. Ex : Na⁺, Cl⁻." },
      { question: "Quelle est la différence entre réaction exothermique et endothermique ?", options: ["Exo = libère de la chaleur ; endo = absorbe de la chaleur", "Exo = absorbe ; endo = libère", "Les deux libèrent de l'énergie", "Dépend du solvant utilisé"], answer: "Exo = libère de la chaleur ; endo = absorbe de la chaleur", explication: "Exothermique : combustion, dissolution de NaOH dans l'eau. Endothermique : dissolution de NH₄NO₃, photosynthèse." },
      { question: "Comment équilibrer l'équation : H₂ + O₂ → H₂O ?", options: ["2H₂ + O₂ → 2H₂O", "H₂ + O₂ → H₂O₂", "H₂ + O → H₂O", "2H₂ + 2O₂ → 2H₂O"], answer: "2H₂ + O₂ → 2H₂O", explication: "La loi de conservation de la matière exige le même nombre d'atomes de chaque côté. 4H + 2O → 4H + 2O. ✓" },
      { question: "Qu'est-ce qu'un sel en chimie ?", options: ["Composé ionique formé par neutralisation d'un acide par une base", "Molécule organique sucrée", "Métal dissous dans l'eau", "Acide faible en solution"], answer: "Composé ionique formé par neutralisation d'un acide par une base", explication: "Acide + base → sel + eau. Ex : HCl + NaOH → NaCl + H₂O. Le sel de cuisine (NaCl) est un exemple." },
      { question: "Qu'est-ce que la valence d'un élément ?", options: ["Le nombre de liaisons que l'atome peut former", "Le nombre de protons dans le noyau", "La masse de l'atome en g/mol", "Le numéro de la colonne dans le tableau périodique"], answer: "Le nombre de liaisons que l'atome peut former", explication: "La valence dépend des électrons de valence. Ex : le carbone a une valence de 4 (il peut former 4 liaisons)." },
      { question: "Qu'est-ce qu'une solution saturée ?", options: ["Solution qui ne peut plus dissoudre davantage de soluté", "Solution très concentrée en acide", "Solution dont le pH est neutre (7)", "Mélange de deux liquides non miscibles"], answer: "Solution qui ne peut plus dissoudre davantage de soluté", explication: "Quand on a dissous le maximum de soluté possible à une température donnée, la solution est saturée. Ajouter plus ne dissout pas." }
    ],
    3: [
      { question: "Qu'est-ce que l'électronégativité ?", options: ["Tendance d'un atome à attirer les électrons d'une liaison vers lui", "Charge électrique totale d'un ion", "Nombre d'électrons sur la couche externe", "Force de répulsion entre deux anions"], answer: "Tendance d'un atome à attirer les électrons d'une liaison vers lui", explication: "L'électronégativité croît de gauche à droite et de bas en haut dans le tableau périodique. Le fluor est le plus électronégatif." },
      { question: "Qu'est-ce que la règle de l'octet ?", options: ["Les atomes tendent à avoir 8 électrons sur leur couche externe", "Les molécules ont toujours 8 atomes", "Un atome a 8 électrons dans son noyau", "Les ions ont une charge de ±8"], answer: "Les atomes tendent à avoir 8 électrons sur leur couche externe", explication: "Les atomes forment des liaisons pour compléter leur couche externe à 8 électrons (comme les gaz nobles). Exception : H (2 électrons)." },
      { question: "Qu'est-ce qu'une réaction d'oxydo-réduction ?", options: ["Réaction avec transfert d'électrons entre oxydant et réducteur", "Réaction de formation d'un oxyde uniquement", "Réaction avec le dioxygène exclusivement", "Réaction acido-basique en milieu aqueux"], answer: "Réaction avec transfert d'électrons entre oxydant et réducteur", explication: "L'oxydant prend les électrons (se réduit), le réducteur les donne (s'oxyde). Ex : Zn + 2H⁺ → Zn²⁺ + H₂ (Zn est oxydé)." },
      { question: "Qu'est-ce que la concentration molaire ?", options: ["Nombre de moles de soluté par litre de solution (mol/L)", "Masse de soluté en grammes dans 100 mL", "Rapport entre volume et masse d'une solution", "Nombre de particules dans un solide"], answer: "Nombre de moles de soluté par litre de solution (mol/L)", explication: "c = n/V (mol/L). Ex : 0,5 mol de NaCl dans 2 L → c = 0,5/2 = 0,25 mol/L." },
      { question: "Quelle est la formule de l'acide sulfurique ?", options: ["H₂SO₄", "H₂S", "SO₃", "HSO₄"], answer: "H₂SO₄", explication: "L'acide sulfurique (H₂SO₄) est un acide fort très corrosif, utilisé dans les batteries et l'industrie chimique." },
      { question: "Qu'est-ce qu'un polymère ?", options: ["Grande molécule formée de la répétition d'un motif (monomère)", "Atome de grande masse molaire", "Composé chimique avec plusieurs noyaux", "Mélange de plusieurs acides"], answer: "Grande molécule formée de la répétition d'un motif (monomère)", explication: "Les plastiques, protéines et ADN sont des polymères. Ex : le polyéthylène (-CH₂-CH₂-)n, formé par répétition du monomère éthylène." }
    ]
  },

  physiqueEnergie: {
    nom: "Énergie",
    emoji: "⚡",
    couleur: "#d97706",
    1: [
      { question: "En quelle unité mesure-t-on l'énergie ?", options: ["Joule (J)", "Newton (N)", "Watt (W)", "Pascal (Pa)"], answer: "Joule (J)", explication: "L'énergie se mesure en Joule (J). 1 kWh (kilowattheure) = 3 600 000 J." },
      { question: "Qu'est-ce qu'une énergie renouvelable ?", options: ["Énergie issue de sources naturellement reconstituées", "Énergie très abondante dans le sous-sol", "Énergie qui ne produit aucun déchet", "Énergie moins chère que les fossiles"], answer: "Énergie issue de sources naturellement reconstituées", explication: "Solaire, éolien, hydraulique, biomasse sont des énergies renouvelables car leurs sources se reconstituent naturellement." },
      { question: "Quelle transformation d'énergie réalise un panneau solaire ?", options: ["Lumineuse → électrique", "Thermique → mécanique", "Chimique → électrique", "Électrique → lumineuse"], answer: "Lumineuse → électrique", explication: "Les panneaux photovoltaïques convertissent l'énergie lumineuse du soleil en énergie électrique grâce à l'effet photoélectrique." },
      { question: "Qu'est-ce que la puissance en physique ?", options: ["Énergie transférée par unité de temps (J/s = W)", "Force appliquée sur une surface", "Vitesse maximale d'un objet", "Résistance d'un matériau à la déformation"], answer: "Énergie transférée par unité de temps (J/s = W)", explication: "P = E/t. La puissance se mesure en Watt (W) = Joule par seconde. Une ampoule de 60 W consomme 60 J chaque seconde." },
      { question: "Quelles sont les formes d'énergie ?", options: ["Cinétique, potentielle, thermique, chimique, électrique, lumineuse", "Mécanique et électrique uniquement", "Fossile, nucléaire et renouvelable", "Chaleur et travail uniquement"], answer: "Cinétique, potentielle, thermique, chimique, électrique, lumineuse", explication: "L'énergie peut prendre de nombreuses formes et se transformer de l'une à l'autre (conservation de l'énergie)." },
      { question: "Qu'est-ce que l'énergie chimique ?", options: ["Énergie stockée dans les liaisons chimiques", "Énergie produite par une réaction nucléaire", "Chaleur dégagée par un moteur", "Énergie des particules en mouvement"], answer: "Énergie stockée dans les liaisons chimiques", explication: "Les aliments, le pétrole et les batteries stockent l'énergie chimique dans leurs liaisons. Elle se libère lors des réactions chimiques." }
    ],
    2: [
      { question: "Un objet de 5 kg monte de 3 m. Quelle est la variation d'énergie potentielle ? (g = 10 m/s²)", options: ["150 J", "50 J", "15 J", "500 J"], answer: "150 J", explication: "ΔEp = m × g × Δh = 5 × 10 × 3 = 150 J." },
      { question: "Qu'est-ce que le rendement d'une machine ?", options: ["η = énergie utile / énergie totale consommée × 100%", "η = puissance / vitesse", "η = force × déplacement", "η = tension / intensité"], answer: "η = énergie utile / énergie totale consommée × 100%", explication: "Le rendement est toujours < 100% car une partie de l'énergie est perdue (chaleur, frottements). η = Eu/Ec." },
      { question: "Calcule la puissance si l'énergie consommée est 600 J en 2 minutes.", options: ["5 W", "300 W", "1 200 W", "0,3 W"], answer: "5 W", explication: "P = E/t = 600 J / (2 × 60 s) = 600/120 = 5 W." },
      { question: "Qu'est-ce que la chaleur massique d'un matériau ?", options: ["Énergie nécessaire pour élever 1 kg de ce matériau de 1°C", "Chaleur maximale qu'il peut stocker", "Sa conductivité thermique", "Sa résistance à la chaleur"], answer: "Énergie nécessaire pour élever 1 kg de ce matériau de 1°C", explication: "Q = m × c × ΔT. La chaleur massique de l'eau est 4 180 J/(kg·°C) — une des plus élevées, ce qui en fait un excellent caloporteur." },
      { question: "Dans une centrale thermique, comment l'énergie est-elle transformée ?", options: ["Chimique/nucléaire → thermique → mécanique → électrique", "Électrique → thermique → chimique", "Mécanique → électrique → thermique", "Solaire → électrique directement"], answer: "Chimique/nucléaire → thermique → mécanique → électrique", explication: "Combustion ou fission → chaleur → vapeur → turbine (énergie mécanique) → alternateur (énergie électrique)." },
      { question: "Quelle est la formule de la puissance électrique ?", options: ["P = U × I", "P = R × I", "P = U / I", "P = U × R"], answer: "P = U × I", explication: "Puissance P (W) = tension U (V) × intensité I (A). Ex : un appareil 230V / 5A consomme 230 × 5 = 1 150 W." }
    ],
    3: [
      { question: "Qu'est-ce que le premier principe de la thermodynamique ?", options: ["L'énergie d'un système isolé se conserve (elle ne se crée ni ne se détruit)", "La chaleur se transfère toujours du froid vers le chaud", "L'entropie d'un système isolé augmente toujours", "Un moteur parfait peut avoir un rendement de 100%"], answer: "L'énergie d'un système isolé se conserve (elle ne se crée ni ne se détruit)", explication: "1er principe : ΔU = W + Q. L'énergie interne d'un système ne varie que par échange de travail ou de chaleur avec l'extérieur." },
      { question: "Qu'est-ce que le second principe de la thermodynamique ?", options: ["La chaleur se transfère spontanément du chaud vers le froid ; l'entropie augmente", "L'énergie se conserve dans tout processus", "Tout moteur a un rendement de 100% théoriquement", "L'énergie peut se créer à partir du néant"], answer: "La chaleur se transfère spontanément du chaud vers le froid ; l'entropie augmente", explication: "2e principe : les processus naturels sont irréversibles. Un café chaud refroidit spontanément — jamais l'inverse." },
      { question: "Une résistance de 50 Ω est traversée par 2 A pendant 5 min. Quelle énergie dissipe-t-elle ?", options: ["60 000 J", "500 J", "200 J", "150 J"], answer: "60 000 J", explication: "P = R × I² = 50 × 4 = 200 W. E = P × t = 200 × (5 × 60) = 200 × 300 = 60 000 J." },
      { question: "Comment fonctionne une centrale nucléaire ?", options: ["Fission de noyaux → chaleur → vapeur → turbine → électricité", "Fusion de noyaux légers directement en électricité", "Combustion d'uranium → gaz → turbine", "Réaction chimique de l'uranium avec l'eau"], answer: "Fission de noyaux → chaleur → vapeur → turbine → électricité", explication: "La fission de l'uranium libère une chaleur intense qui vaporise l'eau. La vapeur fait tourner une turbine couplée à un alternateur." },
      { question: "Qu'est-ce que l'énergie de liaison d'un noyau ?", options: ["Énergie nécessaire pour séparer complètement les nucléons du noyau", "Énergie libérée lors d'une réaction chimique", "Énergie cinétique des électrons", "Énergie potentielle gravitationnelle du noyau"], answer: "Énergie nécessaire pour séparer complètement les nucléons du noyau", explication: "Plus l'énergie de liaison par nucléon est grande, plus le noyau est stable. La fission et la fusion libèrent de l'énergie en allant vers des noyaux plus stables." },
      { question: "Quelle est la formule d'Einstein reliant masse et énergie ?", options: ["E = mc²", "E = mv²/2", "E = mgh", "E = Pt"], answer: "E = mc²", explication: "E = mc² (Einstein, 1905) : une masse m est équivalente à une énergie E = mc². c = 3×10⁸ m/s. Base de l'énergie nucléaire." }
    ]
  },

  histoireAncienne: {
    nom: "Antiquité & Moyen Âge",
    emoji: "🏛️",
    couleur: "#92400e",
    1: [
      { question: "Comment s'appelait le gouvernement d'Athènes au Ve s. av. J.-C. ?", options: ["Démocratie", "Monarchie", "Oligarchie", "Théocratie"], answer: "Démocratie", explication: "Athènes invente la démocratie directe au Ve s. av. J.-C. Les citoyens (hommes libres) votent directement les lois à l'Assemblée (Ecclésia)." },
      { question: "En quelle année Rome a-t-elle été fondée selon la tradition ?", options: ["753 av. J.-C.", "509 av. J.-C.", "44 av. J.-C.", "27 av. J.-C."], answer: "753 av. J.-C.", explication: "Selon la tradition, Rome fut fondée par Romulus en 753 av. J.-C. La République romaine naît en 509 av. J.-C." },
      { question: "Qui était Jules César ?", options: ["Général et homme politique romain", "Premier Empereur de Rome", "Philosophe grec", "Roi d'Égypte"], answer: "Général et homme politique romain", explication: "Jules César (100-44 av. J.-C.) conquit la Gaule, traversa le Rubicon et devint dictateur. Il fut assassiné aux Ides de mars 44 av. J.-C." },
      { question: "Qu'est-ce que la féodalité au Moyen Âge ?", options: ["Système politique basé sur des liens de vassalité entre seigneurs", "Gouvernement des prêtres", "Organisation des guildes marchandes", "Alliance entre royaumes chrétiens"], answer: "Système politique basé sur des liens de vassalité entre seigneurs", explication: "La féodalité organise la société médiévale : le vassal jure fidélité à son seigneur en échange d'une terre (fief) et d'une protection." },
      { question: "Qui fut le premier roi des Francs baptisé chrétien ?", options: ["Clovis (vers 496)", "Charlemagne (800)", "Louis XIV (XVIIe s.)", "Pépin le Bref (751)"], answer: "Clovis (vers 496)", explication: "Le baptême de Clovis (vers 496) marque une alliance entre la royauté franque et l'Église. Il fonde la première France chrétienne." },
      { question: "Quelle est la date de la chute de Constantinople ?", options: ["1453", "1066", "1348", "1492"], answer: "1453", explication: "Constantinople tombe le 29 mai 1453 sous les coups du sultan ottoman Mehmet II. C'est la fin de l'Empire romain d'Orient (byzantin)." }
    ],
    2: [
      { question: "Quelles sont les grandes réalisations de la Grèce antique ?", options: ["Démocratie, philosophie, théâtre, Jeux olympiques, architecture", "Imprimerie, boussole et papier", "Algèbre, astronomie et droit civil", "Aqueducs, routes et légions militaires"], answer: "Démocratie, philosophie, théâtre, Jeux olympiques, architecture", explication: "La Grèce antique nous a transmis la démocratie, la philosophie (Socrate, Platon, Aristote), le théâtre (tragédie, comédie) et les Jeux olympiques." },
      { question: "Qu'est-ce que la Magna Carta (1215) ?", options: ["Charte limitant le pouvoir du roi d'Angleterre", "Loi fondamentale de l'Église catholique", "Traité de paix entre France et Angleterre", "Premier code de loi romain"], answer: "Charte limitant le pouvoir du roi d'Angleterre", explication: "Signée par Jean sans Terre en 1215, la Magna Carta garantit des droits aux nobles et à l'Église. Elle est un ancêtre du constitutionnalisme." },
      { question: "Qu'est-ce que la Reconquista ?", options: ["Reconquête de la péninsule ibérique par les chrétiens (711-1492)", "Croisade vers Jérusalem", "Reconquête de Constantinople par Byzance", "Guerre entre la France et l'Espagne"], answer: "Reconquête de la péninsule ibérique par les chrétiens (711-1492)", explication: "Les Maures (Arabes) conquièrent l'Espagne en 711. La Reconquista prend fin en 1492 quand Grenade (dernier royaume maure) tombe." },
      { question: "Qu'est-ce que la Peste noire (1347-1351) ?", options: ["Épidémie de peste qui tua environ 1/3 de la population européenne", "Grande famine qui dévasta l'Europe médiévale", "Guerre civile en France au XIVe siècle", "Éruption volcanique catastrophique en Islande"], answer: "Épidémie de peste qui tua environ 1/3 de la population européenne", explication: "La Peste noire (1347-1351) est l'une des pires catastrophes de l'histoire humaine. Elle a profondément marqué la société et la culture médiévales." },
      { question: "Qu'est-ce qu'une croisade ?", options: ["Expédition militaire chrétienne vers la Terre Sainte (XIe-XIIIe s.)", "Guerre entre rois chrétiens en Europe", "Reconversion forcée des hérétiques", "Alliance militaire entre chevaliers et marchands"], answer: "Expédition militaire chrétienne vers la Terre Sainte (XIe-XIIIe s.)", explication: "8 croisades entre 1095 et 1270. Objectif : libérer Jérusalem des musulmans. Résultats mitigés mais échanges culturels importants." },
      { question: "Qu'est-ce que le schisme de 1054 ?", options: ["Rupture entre l'Église catholique romaine et l'Église orthodoxe orientale", "Scission au sein du protestantisme", "Conflit entre le pape et l'Empereur germanique", "Révolte des cathares contre Rome"], answer: "Rupture entre l'Église catholique romaine et l'Église orthodoxe orientale", explication: "En 1054, le pape et le patriarche de Constantinople s'excommunient mutuellement. L'Église chrétienne se divise en catholique (Rome) et orthodoxe (Constantinople)." }
    ],
    3: [
      { question: "Quelles sont les causes de la chute de la République romaine ?", options: ["Guerres civiles, concentration du pouvoir, crise des institutions républicaines", "Invasion des barbares et déclin économique", "Épidémies et catastrophes naturelles", "Révoltes des esclaves et paysans ruinés"], answer: "Guerres civiles, concentration du pouvoir, crise des institutions républicaines", explication: "Sylla, Marius, Pompée, César se disputent Rome. La République ne peut gérer un empire aussi vaste. Auguste finit par instaurer le Principat." },
      { question: "Comment Alexandre le Grand a-t-il diffusé la culture grecque ?", options: ["Conquête d'un empire de la Grèce à l'Inde et fondation de villes grecques", "Échanges commerciaux pacifiques avec l'Orient", "Traductions en grec de textes orientaux", "Alliance matrimoniale avec les dynasties orientales"], answer: "Conquête d'un empire de la Grèce à l'Inde et fondation de villes grecques", explication: "Alexandre (356-323 av. J.-C.) conquit un empire immense. Il fonda des villes (Alexandrie) et diffusa la langue, l'art et la philosophie grecques : c'est l'hellénisme." },
      { question: "Qu'est-ce que la Renaissance carolingienne ?", options: ["Renouveau culturel sous Charlemagne : écoles, manuscrits, réformes", "Résurgence de l'art romain au Xe siècle", "Développement commercial des villes au XIe siècle", "Réforme de l'Église par le pape Grégoire VII"], answer: "Renouveau culturel sous Charlemagne : écoles, manuscrits, réformes", explication: "Charlemagne crée des écoles dans les monastères, standardise l'écriture (minuscule carolingienne) et attire des érudits à sa cour (Alcuin)." },
      { question: "Comment expliquer la fragmentation politique de l'Europe médiévale ?", options: ["La féodalité crée des loyautés locales plus fortes que le pouvoir royal", "Les épidémies détruisent les structures politiques centrales", "L'Église contrôle tous les royaumes", "L'absence de routes empêche toute unité politique"], answer: "La féodalité crée des loyautés locales plus fortes que le pouvoir royal", explication: "Le roi dépend de ses vassaux pour lever des armées et percevoir des impôts. Ces derniers ont souvent plus de pouvoir réel dans leurs fiefs." },
      { question: "Quel fut l'impact des Croisades sur les échanges entre Orient et Occident ?", options: ["Diffusion de savoirs, épices, arts et techniques de l'Orient vers l'Occident", "Isolation totale de l'Europe chrétienne", "Domination économique de l'Occident sur l'Orient", "Conversion massive des musulmans au christianisme"], answer: "Diffusion de savoirs, épices, arts et techniques de l'Orient vers l'Occident", explication: "Les croisés rapportent mathématiques arabes, médecine, épices, soieries. Les contacts commerciaux enrichissent l'Europe médiévale." },
      { question: "Qu'est-ce que le droit romain et pourquoi est-il important ?", options: ["Code de lois systématique qui est la base de nombreux droits européens actuels", "Ensemble de coutumes orales transmises par les légions", "Droit exclusivement militaire de l'Empire romain", "Réglementation religieuse de la vie romaine"], answer: "Code de lois systématique qui est la base de nombreux droits européens actuels", explication: "Le droit romain (Corpus Juris Civilis de Justinien, 534) a influencé le droit français, italien, espagnol et de nombreux autres systèmes juridiques modernes." }
    ]
  },

  histoireModerne: {
    nom: "Époque Moderne",
    emoji: "⚜️",
    couleur: "#ca8a04",
    1: [
      { question: "Qu'est-ce que la Réforme protestante (XVIe s.) ?", options: ["Mouvement religieux remettant en cause l'autorité du pape", "Réforme de l'armée française", "Modernisation de l'économie européenne", "Mouvement artistique de la Renaissance"], answer: "Mouvement religieux remettant en cause l'autorité du pape", explication: "Martin Luther (1517) et Calvin lancent la Réforme, critiquant la corruption de l'Église et la vente des indulgences. Naissance du protestantisme." },
      { question: "Qu'est-ce que l'absolutisme monarchique ?", options: ["Régime où le roi exerce un pouvoir sans partage ni contrôle", "Démocratie avec un roi symbolique", "Gouvernement partagé entre le roi et le Parlement", "Monarchie limitée par une constitution"], answer: "Régime où le roi exerce un pouvoir sans partage ni contrôle", explication: "Louis XIV incarne l'absolutisme : 'L'État c'est moi'. Le roi gouverne seul, sans rendre compte à personne sauf à Dieu." },
      { question: "En quelle année est publiée la Déclaration d'indépendance américaine ?", options: ["1776", "1789", "1783", "1763"], answer: "1776", explication: "La Déclaration d'indépendance des États-Unis est adoptée le 4 juillet 1776. Elle proclame les droits naturels de l'homme (liberté, égalité)." },
      { question: "Qu'est-ce que l'Édit de Nantes (1598) ?", options: ["Édit accordant la liberté de culte aux protestants en France", "Traité de paix entre France et Espagne", "Édit créant la première académie française", "Loi abolissant la torture en France"], answer: "Édit accordant la liberté de culte aux protestants en France", explication: "Henri IV signe l'Édit de Nantes en 1598 pour mettre fin aux guerres de Religion. Il est révoqué par Louis XIV en 1685." },
      { question: "Qu'est-ce que les Lumières (XVIIIe s.) ?", options: ["Mouvement intellectuel valorisant la raison, la liberté et les sciences", "Courant artistique romantique", "Révolution industrielle anglaise", "Mouvement religieux de réforme catholique"], answer: "Mouvement intellectuel valorisant la raison, la liberté et les sciences", explication: "Les philosophes des Lumières (Voltaire, Rousseau, Montesquieu, Diderot) critiquent l'absolutisme, l'Église et défendent les droits naturels." },
      { question: "Quand débute la Révolution française ?", options: ["1789", "1793", "1799", "1804"], answer: "1789", explication: "La Révolution française commence en 1789 avec la réunion des États généraux, la prise de la Bastille (14 juillet) et la Déclaration des droits de l'Homme." }
    ],
    2: [
      { question: "Quelles sont les causes de la Réforme protestante ?", options: ["Corruption de l'Église, vente des indulgences, diffusion de la Bible grâce à l'imprimerie", "Rivalités commerciales entre marchands et clergé", "Révoltes paysannes contre les seigneurs", "Influence de la philosophie grecque antique"], answer: "Corruption de l'Église, vente des indulgences, diffusion de la Bible grâce à l'imprimerie", explication: "Luther affiche ses 95 thèses en 1517. L'imprimerie de Gutenberg permet la diffusion rapide de ses idées et de la Bible en langues nationales." },
      { question: "Qu'est-ce que le mercantilisme ?", options: ["Doctrine économique visant à enrichir l'État par les exportations et les colonies", "Libéralisme économique fondé sur le libre-échange", "Économie planifiée par l'État", "Système d'échanges basé sur le troc"], answer: "Doctrine économique visant à enrichir l'État par les exportations et les colonies", explication: "Le mercantilisme (XVIe-XVIIIe s.) : accumuler l'or en exportant plus qu'on n'importe et exploiter les colonies. Dominant avant le libéralisme d'Adam Smith." },
      { question: "Qu'est-ce que la Terreur (1793-1794) ?", options: ["Période de la Révolution marquée par des exécutions massives sous Robespierre", "Attaques des armées étrangères contre la France révolutionnaire", "Révolte des royalistes contre la République", "Période de famine due aux guerres révolutionnaires"], answer: "Période de la Révolution marquée par des exécutions massives sous Robespierre", explication: "Le Comité de salut public, dominé par Robespierre, fait guillotiner ses ennemis (16 000 morts). La Terreur prend fin avec sa chute le 9 Thermidor." },
      { question: "Qu'est-ce que le Code Napoléon (1804) ?", options: ["Code civil unifiant les lois françaises, encore base du droit dans de nombreux pays", "Constitution de la République française", "Code militaire des armées napoléoniennes", "Traité de commerce entre la France et l'Espagne"], answer: "Code civil unifiant les lois françaises, encore base du droit dans de nombreux pays", explication: "Le Code civil (1804) unifie le droit français (mettre fin aux coutumes locales), garantit la propriété privée. Il influence des dizaines de pays." },
      { question: "Quelles sont les causes de la Révolution française ?", options: ["Crise financière, injustices sociales des 3 ordres, idées des Lumières", "Défaite militaire contre l'Angleterre", "Invasion de la France par des armées étrangères", "Révolte paysanne contre la féodalité uniquement"], answer: "Crise financière, injustices sociales des 3 ordres, idées des Lumières", explication: "La France est en faillite (guerres d'Amérique). La société des 3 ordres (clergé, noblesse, Tiers État) est profondément injuste. Les Lumières ont préparé les esprits." },
      { question: "Qu'est-ce que le Congrès de Vienne (1815) ?", options: ["Congrès réorganisant l'Europe après Napoléon, restaurant les monarchies", "Traité de paix signé après la Première Guerre mondiale", "Alliance entre grandes puissances contre la France", "Premier parlement européen"], answer: "Congrès réorganisant l'Europe après Napoléon, restaurant les monarchies", explication: "Le Congrès de Vienne (1814-1815) redessine l'Europe selon le principe de légitimité monarchique et crée la Sainte-Alliance pour maintenir l'ordre." }
    ],
    3: [
      { question: "Comment l'imprimerie de Gutenberg a-t-elle transformé la société ?", options: ["Diffusion rapide des idées, alphabétisation, remise en cause des autorités", "Appauvrissement des copistes monastiques uniquement", "Développement exclusif des textes religieux", "Uniformisation des langues européennes"], answer: "Diffusion rapide des idées, alphabétisation, remise en cause des autorités", explication: "L'imprimerie (vers 1450) révolutionne la communication : livres moins chers, Réforme protestante possible, diffusion des Lumières, naissance de l'opinion publique." },
      { question: "Quelles sont les conséquences du Traité de Westphalie (1648) ?", options: ["Fin des guerres de religion, naissance du concept d'États souverains", "Unification de l'Allemagne sous un seul prince", "Partage de l'Europe entre France et Espagne", "Fin de la domination ottomane en Europe"], answer: "Fin des guerres de religion, naissance du concept d'États souverains", explication: "Westphalie (1648) met fin à la Guerre de Trente Ans. Il pose les bases du droit international : souveraineté des États, non-ingérence." },
      { question: "Comment expliquer l'expansion coloniale européenne au XVIe s. ?", options: ["Recherche de routes commerciales, ressources, rivalités entre puissances, évangélisation", "Surpopulation de l'Europe nécessitant de nouvelles terres", "Découverte de l'Amérique comme un accident de navigation", "Influence des idées humanistes sur l'exploration"], answer: "Recherche de routes commerciales, ressources, rivalités entre puissances, évangélisation", explication: "Portugal, Espagne, puis France, Angleterre et Hollande cherchent des routes vers les Indes, des métaux précieux (Amérique) et des âmes à convertir." },
      { question: "Quel est l'apport de la Révolution française au droit constitutionnel mondial ?", options: ["Souveraineté nationale, séparation des pouvoirs, droits individuels, laïcité", "Monarchie constitutionnelle uniquement", "Suffrage universel immédiat dans toute l'Europe", "Création du droit international humanitaire"], answer: "Souveraineté nationale, séparation des pouvoirs, droits individuels, laïcité", explication: "La DDHC (1789), les constitutions révolutionnaires et les idées de Montesquieu et Rousseau ont influencé les démocraties du monde entier." },
      { question: "Comment la Révolution industrielle a-t-elle transformé les structures sociales ?", options: ["Émergence du prolétariat, urbanisation, nouvelles inégalités, essor du capitalisme", "Amélioration immédiate des conditions de vie des ouvriers", "Retour à l'agriculture et déclin des villes", "Égalisation des classes sociales"], answer: "Émergence du prolétariat, urbanisation, nouvelles inégalités, essor du capitalisme", explication: "La mécanisation crée une classe ouvrière (prolétariat) dans des villes surpeuplées aux conditions dures. Elle génère aussi la bourgeoisie industrielle et le capitalisme." },
      { question: "Pourquoi la Révolution américaine a-t-elle inspiré la Révolution française ?", options: ["Elle prouve que des colons peuvent renverser un régime oppressif et créer une démocratie", "Elle finança directement la Révolution française", "Les soldats américains participèrent à la prise de la Bastille", "Les Lumières américaines précèdent les Lumières françaises"], answer: "Elle prouve que des colons peuvent renverser un régime oppressif et créer une démocratie", explication: "La victoire américaine (1776-1783) et la Déclaration d'indépendance inspirent les révolutionnaires français. Lafayette combat pour les deux révolutions." }
    ]
  },

  anglaisVocab: {
    nom: "Vocabulaire",
    emoji: "📖",
    couleur: "#2563eb",
    1: [
      { question: "Comment dit-on 'travailler' en anglais ?", options: ["to work", "to walk", "to want", "to wake"], answer: "to work", explication: "'To work' = travailler. To walk = marcher, to want = vouloir, to wake = se réveiller." },
      { question: "Que signifie 'beautiful' ?", options: ["beau / belle", "utile", "fort", "courageux"], answer: "beau / belle", explication: "'Beautiful' = beau, magnifique. Synonymes : pretty, lovely, gorgeous (de moins en moins formel)." },
      { question: "Comment dit-on 'livre' en anglais ?", options: ["book", "look", "cook", "hook"], answer: "book", explication: "'Book' = livre. Look = regard/regarder, cook = cuisiner, hook = crochet." },
      { question: "Que signifie 'difficult' ?", options: ["difficile", "différent", "délicieux", "dangereux"], answer: "difficile", explication: "'Difficult' = difficile. Synonym : hard, challenging. Antonym : easy." },
      { question: "Comment dit-on 'ami(e)' en anglais ?", options: ["friend", "fiend", "freed", "front"], answer: "friend", explication: "'Friend' = ami(e). Ne pas confondre avec 'fiend' (démon) qui se prononce différemment." },
      { question: "Que signifie 'to remember' ?", options: ["se souvenir de", "rappeler quelqu'un", "retourner", "remarquer"], answer: "se souvenir de", explication: "'To remember' = se souvenir de quelque chose. 'To remind someone' = rappeler quelque chose à quelqu'un." }
    ],
    2: [
      { question: "Que signifie 'outstanding' ?", options: ["remarquable, exceptionnel", "en attente", "à l'extérieur", "hors de portée"], answer: "remarquable, exceptionnel", explication: "'Outstanding' peut signifier 'non payé' (dette) mais aussi 'remarquable' dans le contexte d'une performance ou qualité." },
      { question: "Quelle est la différence entre 'journey' et 'trip' ?", options: ["journey = le trajet en lui-même ; trip = déplacement complet (aller-retour)", "journey = voyage en avion ; trip = voyage en voiture", "Ce sont des synonymes parfaits", "journey = court ; trip = long"], answer: "journey = le trajet en lui-même ; trip = déplacement complet (aller-retour)", explication: "Journey se concentre sur le trajet lui-même. Trip inclut la destination et le retour. Ex : the journey was long / a business trip." },
      { question: "Que signifie 'to cope with' ?", options: ["faire face à, gérer une difficulté", "copier quelque chose", "se plaindre de", "coopérer avec"], answer: "faire face à, gérer une difficulté", explication: "'To cope with' = gérer, surmonter. Ex : 'She copes with stress by exercising.' (Elle gère son stress en faisant du sport.)" },
      { question: "Que signifie 'throughout' ?", options: ["tout au long de, partout dans", "à travers rapidement", "par le passé", "dehors"], answer: "tout au long de, partout dans", explication: "'Throughout' s'utilise avec le temps (throughout the year = toute l'année) ou l'espace (throughout the country = dans tout le pays)." },
      { question: "Que signifie 'to be aware of' ?", options: ["être conscient de, être au courant de", "faire attention à (en gardant ses distances)", "avoir peur de", "se méfier de"], answer: "être conscient de, être au courant de", explication: "'To be aware of' = être conscient, informé. Ex : 'Are you aware of the risks?' (Es-tu conscient des risques?)" },
      { question: "Que signifie 'genuine' ?", options: ["authentique, véritable, sincère", "génial", "généreux", "gentil"], answer: "authentique, véritable, sincère", explication: "'Genuine' = authentique. Ex : 'a genuine smile' (un sourire sincère), 'genuine leather' (cuir véritable)." }
    ],
    3: [
      { question: "Que signifie 'ubiquitous' ?", options: ["omniprésent, que l'on trouve partout", "unique en son genre", "ambigu, difficile à définir", "urgent, pressant"], answer: "omniprésent, que l'on trouve partout", explication: "'Ubiquitous' = présent partout en même temps. Ex : 'Smartphones are ubiquitous.' (Les smartphones sont omniprésents.)" },
      { question: "Comment distinguer 'to raise' et 'to rise' ?", options: ["raise = lever quelque chose (transitif) ; rise = monter soi-même (intransitif)", "raise = monter ; rise = faire monter quelque chose", "Ils sont synonymes", "raise = passé, rise = présent"], answer: "raise = lever quelque chose (transitif) ; rise = monter soi-même (intransitif)", explication: "Raise needs an object: 'Raise your hand.' Rise does not: 'The sun rises.' (Se lever/monter sans objet direct.)" },
      { question: "Que signifie 'ambivalent' ?", options: ["avoir des sentiments contradictoires sur quelque chose", "très ambitieux", "clairement pour ou contre", "indifférent et détaché"], answer: "avoir des sentiments contradictoires sur quelque chose", explication: "'Ambivalent' = tiraillé entre deux sentiments opposés. Ex : 'I feel ambivalent about moving abroad.' (Je suis partagé sur l'idée de partir à l'étranger.)" },
      { question: "Que signifie 'to be at odds with' ?", options: ["être en désaccord ou en contradiction avec", "être en accord parfait avec", "être éloigné de", "se battre contre"], answer: "être en désaccord ou en contradiction avec", explication: "'At odds with' = en conflit, en contradiction. Ex : 'His actions are at odds with his words.' (Ses actes contredisent ses paroles.)" },
      { question: "Que signifie 'compelling' ?", options: ["convaincant, captivant, irrésistible", "obligatoire par la loi", "complexe et confus", "rapide et efficace"], answer: "convaincant, captivant, irrésistible", explication: "'Compelling' = qui captive l'attention ou convainc facilement. Ex : 'a compelling argument' (un argument convaincant), 'a compelling story' (histoire captivante)." },
      { question: "Quelle nuance y a-t-il entre 'to say' et 'to tell' ?", options: ["say = énoncer des mots ; tell = communiquer une info à quelqu'un (+ objet indirect)", "say s'utilise avec les chiffres, tell avec les mots", "tell est plus formel que say", "Ils sont parfaitement interchangeables"], answer: "say = énoncer des mots ; tell = communiquer une info à quelqu'un (+ objet indirect)", explication: "Say : 'She said hello.' Tell needs an indirect object: 'She told me the truth.' (On dit quelque chose, on dit à quelqu'un.)" }
    ]
  },

  anglasCivilisation: {
    nom: "Civilisation",
    emoji: "🌍",
    couleur: "#1e40af",
    1: [
      { question: "Quelle est la capitale du Royaume-Uni ?", options: ["Londres (London)", "Birmingham", "Manchester", "Édimbourg"], answer: "Londres (London)", explication: "Londres est la capitale et la plus grande ville du Royaume-Uni, avec environ 9 millions d'habitants." },
      { question: "Quelle est la monnaie utilisée au Royaume-Uni ?", options: ["La livre sterling (£)", "L'euro (€)", "Le dollar ($)", "Le franc britannique"], answer: "La livre sterling (£)", explication: "Le Royaume-Uni n'a pas adopté l'euro. Il utilise la livre sterling (£), divisée en 100 pence." },
      { question: "Quel est le drapeau du Royaume-Uni ?", options: ["L'Union Jack", "La Croix de Saint-Georges", "L'Union Flag", "Le Royal Standard"], answer: "L'Union Jack", explication: "L'Union Jack combine la Croix de Saint-Georges (Angleterre), la Croix de Saint-André (Écosse) et la Croix de Saint-Patrick (Irlande)." },
      { question: "Quelle est la capitale de l'Australie ?", options: ["Canberra", "Sydney", "Melbourne", "Brisbane"], answer: "Canberra", explication: "Canberra est la capitale de l'Australie — souvent confondue avec Sydney qui est la plus grande ville." },
      { question: "Quels pays forment le Royaume-Uni ?", options: ["Angleterre, Écosse, Pays de Galles, Irlande du Nord", "Angleterre, Écosse, Irlande, Pays de Galles", "Grande-Bretagne, Irlande et Écosse", "Angleterre, Écosse et Pays de Galles uniquement"], answer: "Angleterre, Écosse, Pays de Galles, Irlande du Nord", explication: "Le Royaume-Uni (United Kingdom) = Angleterre + Écosse + Pays de Galles + Irlande du Nord. La Grande-Bretagne = Angleterre + Écosse + Pays de Galles." },
      { question: "Quel est le surnom du drapeau américain ?", options: ["Stars and Stripes", "Union Jack", "Old Glory", "Star-Spangled Banner"], answer: "Stars and Stripes", explication: "Le drapeau américain est surnommé 'Stars and Stripes' (étoiles et rayures). Il est aussi appelé 'Old Glory' ou 'Star-Spangled Banner'." }
    ],
    2: [
      { question: "Qu'est-ce que le Commonwealth ?", options: ["Association d'États ayant eu des liens avec l'Empire britannique", "Alliance militaire des pays anglophones", "Zone de libre-échange entre pays anglophones", "Organisation des Nations unies anglophones"], answer: "Association d'États ayant eu des liens avec l'Empire britannique", explication: "Le Commonwealth of Nations (54 membres) regroupe d'anciennes colonies britanniques. Le Royaume-Uni n'a pas d'autorité sur eux." },
      { question: "Qu'est-ce que le mouvement des droits civiques américain (années 50-60) ?", options: ["Mouvement pour l'égalité raciale, mené par Martin Luther King et d'autres", "Révolution socialiste aux États-Unis", "Mouvement de libération des femmes", "Lutte des ouvriers contre les industriels"], answer: "Mouvement pour l'égalité raciale, mené par Martin Luther King et d'autres", explication: "Le mouvement des droits civiques obtient le Civil Rights Act (1964) et le Voting Rights Act (1965), mettant fin à la ségrégation légale." },
      { question: "Qu'est-ce que la 'Special Relationship' entre les USA et le Royaume-Uni ?", options: ["Alliance privilégiée politique, militaire et culturelle depuis la 2e Guerre mondiale", "Accord de libre-échange bilatéral exclusif", "Relations diplomatiques ordinaires entre deux pays alliés", "Alliance linguistique et culturelle uniquement"], answer: "Alliance privilégiée politique, militaire et culturelle depuis la 2e Guerre mondiale", explication: "Churchill et Roosevelt cimentent cette relation pendant la Seconde Guerre mondiale. Elle perdure dans l'OTAN, le partage du renseignement et la coopération militaire." },
      { question: "Comment fonctionne le système parlementaire britannique ?", options: ["Parlement bicaméral + Premier ministre issu de la majorité + monarque symbolique", "Président élu au suffrage universel direct", "Parlement unique avec un Premier ministre présidentiel", "Système fédéral avec 4 parlements indépendants"], answer: "Parlement bicaméral + Premier ministre issu de la majorité + monarque symbolique", explication: "Westminster : Chambre des communes (élue) + Chambre des lords (non élue). Le Premier ministre est le chef de la majorité aux Communes." },
      { question: "Qu'est-ce que le Brexit ?", options: ["Sortie du Royaume-Uni de l'Union européenne (référendum 2016, effectif 2020)", "Adhésion du Royaume-Uni à l'Union européenne", "Réforme constitutionnelle britannique de 2016", "Alliance commerciale entre le Royaume-Uni et les USA"], answer: "Sortie du Royaume-Uni de l'Union européenne (référendum 2016, effectif 2020)", explication: "Le 23 juin 2016, 52% des Britanniques votent pour quitter l'UE. La sortie est effective le 31 janvier 2020." },
      { question: "Quel a été le rôle des États-Unis dans la Première Guerre mondiale ?", options: ["Entrée en guerre en 1917, renforts décisifs qui changent l'issue du conflit", "Participation dès 1914 aux côtés des Alliés", "Maintien d'une neutralité totale jusqu'en 1918", "Soutien financier uniquement sans troupes combattantes"], answer: "Entrée en guerre en 1917, renforts décisifs qui changent l'issue du conflit", explication: "Les États-Unis entrent en guerre en avril 1917 après les attaques sous-marines allemandes. Leurs 2 millions de soldats renforcent les Alliés épuisés." }
    ],
    3: [
      { question: "Quelles sont les grandes étapes de l'Empire britannique ?", options: ["XVIe s. : premières colonies → XIXe s. : empire mondial → XXe s. : décolonisation", "XVIIe s. : début → XVIIIe s. : apogée → XIXe s. : fin", "XVe s. : découverte de l'Amérique → XVIe s. : apogée → XVIIe s. : déclin", "XVIIIe s. : début → XIXe s. : apogée → 1918 : fin"], answer: "XVIe s. : premières colonies → XIXe s. : empire mondial → XXe s. : décolonisation", explication: "Au XIXe s., l'Empire britannique couvrait 1/4 de la planète ('le soleil ne se couche jamais'). La décolonisation s'accélère après 1945." },
      { question: "Qu'est-ce que l'American Dream ?", options: ["Idéal que tout individu peut réussir socialement grâce au travail et à la liberté", "Rêve de voir l'Amérique dominer le monde", "Politique étrangère américaine de prospérité mondiale", "Mythe du Far West et de la conquête de l'Ouest"], answer: "Idéal que tout individu peut réussir socialement grâce au travail et à la liberté", explication: "L'American Dream (James Truslow Adams, 1931) est l'idéal méritocratique : peu importe ses origines, on peut réussir en travaillant dur." },
      { question: "Comment fonctionne le système politique américain ?", options: ["République fédérale avec séparation des pouvoirs (exécutif, législatif, judiciaire) et deux partis dominants", "Démocratie directe avec référendums fréquents", "Monarchie constitutionnelle avec président symbolique", "Système parlementaire à la britannique"], answer: "République fédérale avec séparation des pouvoirs (exécutif, législatif, judiciaire) et deux partis dominants", explication: "Président (exécutif) + Congrès (Sénat + Chambre des représentants) + Cour Suprême. Les partis républicain et démocrate dominent depuis 1860." },
      { question: "Quelles tensions existent au sein du Royaume-Uni entre ses nations ?", options: ["Mouvements indépendantistes en Écosse et en Irlande du Nord, différences culturelles", "Conflit armé entre l'Angleterre et le Pays de Galles", "Revendications économiques des régions industrielles", "Tensions religieuses entre anglicans et catholiques uniquement"], answer: "Mouvements indépendantistes en Écosse et en Irlande du Nord, différences culturelles", explication: "Le SNP veut l'indépendance de l'Écosse (référendum 2014 : 55% non). En Irlande du Nord, la question de la réunification avec l'Irlande reste vive." },
      { question: "Quel est l'impact culturel mondial de la langue anglaise ?", options: ["Première langue mondiale des affaires, sciences, internet et diplomatie", "Langue officielle de plus de 100 pays souverains", "Langue parlée uniquement dans les pays du Commonwealth", "Langue internationale uniquement depuis la Seconde Guerre mondiale"], answer: "Première langue mondiale des affaires, sciences, internet et diplomatie", explication: "L'anglais est parlé par ~1,5 milliard de personnes (natifs + non-natifs). Il est la langue de la science (80% des publications), d'internet et des échanges internationaux." },
      { question: "Pourquoi la Révolution américaine a-t-elle une importance mondiale ?", options: ["Première démocratie moderne prouvant qu'on peut renverser un empire et se gouverner soi-même", "Elle crée le premier empire économique mondial", "Elle marque la fin du colonialisme européen dans le monde entier", "Elle inspire uniquement la Révolution française"], answer: "Première démocratie moderne prouvant qu'on peut renverser un empire et se gouverner soi-même", explication: "La Déclaration d'indépendance (1776) et la Constitution américaine (1787) inspirent des révolutions et mouvements démocratiques dans le monde entier jusqu'à aujourd'hui." }
    ]
  },

  anglais: {
    nom: "Bases",
    emoji: "💬",
    couleur: "#1d4ed8",
    1: [
      {
        question: "Comment dit-on 'chien' en anglais ?",
        options: ["dog", "cat", "bird", "cow"],
        answer: "dog",
        explication: "'Dog' signifie 'chien'. Cat = chat, bird = oiseau, cow = vache."
      },
      {
        question: "Quel est le passé simple de 'go' ?",
        options: ["went", "goed", "gone", "go"],
        answer: "went",
        explication: "'Go' est un verbe irrégulier. Son passé simple est 'went' (ex : I went to school yesterday)."
      },
      {
        question: "Quel est le pluriel irrégulier de 'child' ?",
        options: ["children", "childs", "childes", "childrens"],
        answer: "children",
        explication: "'Child' fait 'children' au pluriel. C'est un pluriel irrégulier à mémoriser."
      },
      {
        question: "Comment dit-on 'merci' en anglais ?",
        options: ["Thank you", "Please", "Sorry", "Hello"],
        answer: "Thank you",
        explication: "'Thank you' signifie 'merci'. 'Please' = s'il vous plaît, 'Sorry' = désolé."
      },
      {
        question: "Complète : 'She ___ a teacher.'",
        options: ["is", "are", "am", "be"],
        answer: "is",
        explication: "Avec 'she/he/it', on utilise 'is' au présent du verbe 'to be'."
      },
      {
        question: "Quelle est la traduction de 'happy' ?",
        options: ["heureux/heureuse", "fatigué", "triste", "fâché"],
        answer: "heureux/heureuse",
        explication: "'Happy' signifie 'heureux/heureuse'. Sad = triste, tired = fatigué, angry = fâché."
      },
      {
        question: "Quel est le contraire de 'big' ?",
        options: ["small", "tall", "fast", "cold"],
        answer: "small",
        explication: "L'antonyme de 'big' (grand) est 'small' (petit). Tall = grand en hauteur, fast = rapide."
      },
      {
        question: "Comment dit-on 'nous avons' en anglais ?",
        options: ["we have", "we are", "we do", "we had"],
        answer: "we have",
        explication: "'We have' = nous avons. 'Have' est l'auxiliaire et le verbe 'avoir' en anglais."
      },
      {
        question: "Complète : 'They ___ (play) football every day.'",
        options: ["play", "plays", "played", "playing"],
        answer: "play",
        explication: "Au présent simple avec 'they', on utilise la base verbale sans -s : 'They play'."
      },
      {
        question: "Comment dit-on 'maintenant' en anglais ?",
        options: ["now", "soon", "already", "yet"],
        answer: "now",
        explication: "'Now' signifie 'maintenant'. Soon = bientôt, already = déjà, yet = encore/déjà."
      },
      {
        question: "Quelle est la traduction de 'I am hungry' ?",
        options: ["J'ai faim", "Je suis fatigué", "J'ai soif", "Je suis heureux"],
        answer: "J'ai faim",
        explication: "En anglais, on dit 'I am hungry' (litt. 'je suis affamé') pour 'j'ai faim'."
      },
      {
        question: "Quel est le passé simple de 'eat' ?",
        options: ["ate", "eated", "eaten", "eat"],
        answer: "ate",
        explication: "'Eat' est irrégulier : passé simple 'ate', participe passé 'eaten'. Ex : She ate an apple."
      }
    ],
    2: [
      {
        question: "Complète au passé simple : 'She ___ (go) to school yesterday.'",
        options: ["went", "goes", "gone", "going"],
        answer: "went",
        explication: "'Went' est le passé simple irrégulier de 'go'. 'Yesterday' indique le passé."
      },
      {
        question: "Que signifie 'although' ?",
        options: ["Bien que / même si", "Parce que", "Donc", "Si"],
        answer: "Bien que / même si",
        explication: "'Although' introduit une concession. Ex : Although it was raining, we went out. (Bien qu'il pleuvait, nous sommes sortis.)"
      },
      {
        question: "Quelle est la différence entre 'since' et 'for' ?",
        options: ["Since = point de départ, for = durée", "Since = durée, for = point de départ", "Ils sont synonymes", "Since = futur, for = passé"],
        answer: "Since = point de départ, for = durée",
        explication: "Since + point dans le temps (since 2020), for + durée (for 3 years). Ex : I've lived here since 2020 / for 4 years."
      },
      {
        question: "Complète : 'If I ___ rich, I would buy a car.' (hypothèse irréelle au présent)",
        options: ["were", "am", "was", "will be"],
        answer: "were",
        explication: "Dans le conditionnel 2 (hypothèse irréelle), on utilise 'were' pour toutes les personnes (même si/I/he/she)."
      },
      {
        question: "Que signifie 'to take after someone' ?",
        options: ["Ressembler à quelqu'un", "Prendre soin de quelqu'un", "Courir après quelqu'un", "Imiter quelqu'un"],
        answer: "Ressembler à quelqu'un",
        explication: "'To take after' = ressembler à (physiquement ou caractère). Ex : She takes after her mother."
      },
      {
        question: "Quel temps est 'She has been living here for 5 years' ?",
        options: ["Present perfect continuous", "Present simple", "Past perfect", "Present perfect"],
        answer: "Present perfect continuous",
        explication: "Have/has been + V-ing = present perfect continuous. Il exprime une action commencée dans le passé et toujours en cours."
      },
      {
        question: "Comment formuler correctement une question indirecte ?",
        options: ["'Can you tell me where he lives?' (sans inversion)", "'Can you tell me where does he live?'", "'Can you tell me where lives he?'", "'Can you tell me where he is living?'"],
        answer: "'Can you tell me where he lives?' (sans inversion)",
        explication: "Dans une question indirecte, l'ordre des mots est celui d'une affirmative (pas d'inversion sujet-verbe)."
      },
      {
        question: "Que signifie 'however' ?",
        options: ["Cependant / néanmoins", "De plus", "Donc", "Par conséquent"],
        answer: "Cependant / néanmoins",
        explication: "'However' exprime une opposition. Ex : I was tired. However, I kept working. (J'étais fatigué. Cependant, j'ai continué.)"
      },
      {
        question: "Mets au discours indirect : He said 'I am tired.'",
        options: ["He said he was tired.", "He said he is tired.", "He said I was tired.", "He said that I am tired."],
        answer: "He said he was tired.",
        explication: "Au discours indirect, le présent devient le passé. 'I am' → 'he was'. On utilise 'he' à la place de 'I'."
      },
      {
        question: "Complète : 'By tomorrow, she ___ (finish) her project.'",
        options: ["will have finished", "will finish", "has finished", "will be finishing"],
        answer: "will have finished",
        explication: "'By tomorrow' indique une action accomplie avant un moment futur → futur antérieur = will have + participe passé."
      },
      {
        question: "Quelle est la forme passive de 'The teacher corrects the tests' ?",
        options: ["The tests are corrected by the teacher.", "The tests have corrected by the teacher.", "The tests is corrected by the teacher.", "The teacher is corrected the tests."],
        answer: "The tests are corrected by the teacher.",
        explication: "Passif = sujet + be + participe passé + by + agent. 'Tests' est pluriel → 'are corrected'."
      },
      {
        question: "Que signifie 'to be fed up with something' ?",
        options: ["En avoir assez de quelque chose", "Être nourri par quelque chose", "Être occupé avec quelque chose", "Être fier de quelque chose"],
        answer: "En avoir assez de quelque chose",
        explication: "'To be fed up with' = en avoir marre de, être fatigué de. Ex : I'm fed up with waiting. (J'en ai marre d'attendre.)"
      }
    ],
    3: [
      {
        question: "Quelle est la différence entre 'will' et 'going to' pour le futur ?",
        options: ["Will = décision spontanée ou prédiction, going to = intention ou plan prévu", "Will = plan prévu, going to = décision soudaine", "Ils sont toujours interchangeables", "Will = certitude, going to = doute"],
        answer: "Will = décision spontanée ou prédiction, going to = intention ou plan prévu",
        explication: "Ex : 'I'll have the salad' (décision au moment) vs 'I'm going to study medicine' (plan déjà décidé)."
      },
      {
        question: "Dans 'Had she known, she would have helped', quel conditionnel est utilisé ?",
        options: ["Conditionnel type 3 (hypothèse irréelle dans le passé)", "Conditionnel type 1", "Conditionnel type 2", "Conditionnel mixte"],
        answer: "Conditionnel type 3 (hypothèse irréelle dans le passé)",
        explication: "Type 3 : If + past perfect, would have + pp. Exprime une hypothèse irréelle dans le passé. 'Had she known' = if she had known."
      },
      {
        question: "Que signifie 'epitome' ?",
        options: ["L'exemple parfait, l'incarnation d'une qualité", "Un résumé de texte", "Une erreur typique", "Un défaut caractéristique"],
        answer: "L'exemple parfait, l'incarnation d'une qualité",
        explication: "'Epitome' (prononcé i-PIT-uh-mee) = parfait exemple. Ex : She is the epitome of kindness. (Elle est la bonté incarnée.)"
      },
      {
        question: "Quelle est la différence entre 'lay' et 'lie' ?",
        options: ["Lay = poser quelque chose (transitif), lie = s'allonger (intransitif)", "Lay = s'allonger, lie = mentir uniquement", "Ils sont synonymes", "Lay = passé de lie"],
        answer: "Lay = poser quelque chose (transitif), lie = s'allonger (intransitif)",
        explication: "Lay (transitif) : to lay something down (poser). Lie (intransitif) : to lie down (s'allonger). Piège : passé de 'lie' = 'lay'."
      },
      {
        question: "Complète : 'The book, ___ I told you about, is amazing.'",
        options: ["which", "who", "whom", "that"],
        answer: "which",
        explication: "'Which' est utilisé pour les choses dans les propositions relatives non-restrictives (avec virgules). 'Who/whom' pour les personnes."
      },
      {
        question: "Qu'est-ce qu'un 'gerund' en anglais ?",
        options: ["La forme en -ing utilisée comme nom", "Un verbe au passé progressif", "Un infinitif sans 'to'", "Un adjectif verbal"],
        answer: "La forme en -ing utilisée comme nom",
        explication: "Le gérondif = V-ing comme sujet ou objet. Ex : 'Swimming is fun.' / 'I enjoy reading.' (gérondifs en gras)."
      },
      {
        question: "Quelle est la différence entre 'affect' et 'effect' ?",
        options: ["Affect = verbe (influencer), effect = nom (résultat)", "Affect = nom, effect = verbe", "Ils sont synonymes", "Affect est plus fort qu'effect"],
        answer: "Affect = verbe (influencer), effect = nom (résultat)",
        explication: "'The cold affects my mood' (verbe). 'The effect of cold on my mood is negative' (nom). Mnémotechnique : AVENU (Affect = Verb, Effect = Noun Usually)."
      },
      {
        question: "Que signifie l'expression 'It's a double-edged sword' ?",
        options: ["C'est quelque chose qui a des avantages et des inconvénients", "C'est une situation très dangereuse", "C'est une décision facile à prendre", "C'est un problème sans solution"],
        answer: "C'est quelque chose qui a des avantages et des inconvénients",
        explication: "Une 'double-edged sword' (épée à double tranchant) représente quelque chose qui peut être utile et nuisible à la fois."
      },
      {
        question: "Comment exprimer un regret sur le passé en anglais ?",
        options: ["I wish I had studied harder. / If only I had known.", "I wish I studied harder.", "I regret that I will study harder.", "If I would have known..."],
        answer: "I wish I had studied harder. / If only I had known.",
        explication: "Pour exprimer un regret sur le passé : 'I wish' + past perfect. Ex : I wish I had listened. (J'aurais aimé écouter.)"
      },
      {
        question: "Dans quel type de proposition utilise-t-on le subjonctif en anglais ?",
        options: ["Après suggest, recommend, insist, demand, require", "Après les verbes d'état (be, seem)", "Dans toutes les propositions au futur", "Après 'although' et 'however'"],
        answer: "Après suggest, recommend, insist, demand, require",
        explication: "Ex : 'I suggest that he be present.' / 'The doctor recommended that she rest.' (subjonctif présent = base verbale)."
      },
      {
        question: "Que signifie 'nevertheless' ?",
        options: ["Néanmoins / malgré tout", "De ce fait", "En d'autres termes", "À vrai dire"],
        answer: "Néanmoins / malgré tout",
        explication: "'Nevertheless' exprime une concession forte. Ex : The task was difficult. Nevertheless, she completed it. (Néanmoins, elle l'a terminée.)"
      },
      {
        question: "Comment distinguer 'few' et 'a few' ?",
        options: ["Few = presque aucun (négatif), a few = quelques-uns (positif)", "Few = beaucoup, a few = peu", "Ils sont identiques", "Few s'utilise avec les indénombrables"],
        answer: "Few = presque aucun (négatif), a few = quelques-uns (positif)",
        explication: "'Few friends came' (presque personne, déception). 'A few friends came' (quelques-uns, c'est positif). Même règle pour 'little/a little'."
      }
    ]
  },

  // ══════════════════════════════════════════
  //  MATHS 6ème — programme officiel
  // ══════════════════════════════════════════

  maths6Nombres: {
    nom: "Nombres & calculs",
    emoji: "🔢",
    couleur: "#4f46e5",
    1: [
      { question: "Quel est le résultat de 46 + 37 ?", options: ["83", "73", "84", "93"], answer: "83", explication: "46 + 37 : on additionne les unités (6+7=13, on retient 1) puis les dizaines (4+3+1=8), ce qui donne 83." },
      { question: "Combien vaut 9 × 7 ?", options: ["63", "54", "72", "56"], answer: "63", explication: "9 × 7 = 63. Astuce : 10 × 7 − 7 = 70 − 7 = 63." },
      { question: "Quel est le chiffre des centaines dans 5 347 ?", options: ["3", "5", "4", "7"], answer: "3", explication: "Dans 5 347 : 5 = milliers, 3 = centaines, 4 = dizaines, 7 = unités. Le chiffre des centaines est 3." },
      { question: "Calcule 3,2 + 1,5.", options: ["4,7", "4,8", "5,2", "4,17"], answer: "4,7", explication: "3,2 + 1,5 : on aligne les virgules et on additionne : 3 + 1 = 4 et 2 + 5 = 7 dixièmes, soit 4,7." },
      { question: "Lequel est le plus grand : 2,5 ou 2,05 ?", options: ["2,5", "2,05", "Ils sont égaux", "On ne peut pas comparer"], answer: "2,5", explication: "2,5 = 2,50. En comparant les dixièmes : 5 > 0, donc 2,5 > 2,05." },
      { question: "Quel est l'opposé de −4 ?", options: ["+4", "−4", "4/1", "0"], answer: "+4", explication: "L'opposé d'un nombre est le nombre qui lui est symétrique par rapport à 0. L'opposé de −4 est +4." },
      { question: "Donne l'ordre de grandeur à la dizaine près de 63.", options: ["60", "70", "65", "6"], answer: "60", explication: "63 est entre 60 et 70. Son chiffre des unités est 3 < 5, donc on arrondit à la dizaine inférieure : 60." },
      { question: "Combien font 100 − 43 ?", options: ["57", "67", "47", "63"], answer: "57", explication: "100 − 43 = 57. Astuce : 43 + 57 = 100. On peut vérifier : 43 + 50 = 93, + 7 = 100 ✓" }
    ],
    2: [
      { question: "Calcule 4,7 × 3.", options: ["14,1", "12,1", "14,7", "12,7"], answer: "14,1", explication: "4,7 × 3 : d'abord 47 × 3 = 141, puis on replace la virgule : 14,1." },
      { question: "Quel entier est situé entre −5 et −3 ?", options: ["−4", "−6", "−2", "+4"], answer: "−4", explication: "Sur la droite des nombres, entre −5 et −3 se trouve −4. Plus on va à gauche, plus le nombre est petit." },
      { question: "Classe dans l'ordre croissant : −2, +3, 0, −1. Quel est le plus grand ?", options: ["+3", "0", "−1", "−2"], answer: "+3", explication: "Dans l'ordre croissant : −2 < −1 < 0 < +3. Le plus grand est +3. Les positifs sont toujours plus grands que les négatifs." },
      { question: "Calcule 6,04 − 2,8.", options: ["3,24", "3,34", "4,24", "3,24"], answer: "3,24", explication: "6,04 − 2,8 = 6,04 − 2,80 = 3,24. On aligne les virgules : 6,04 − 2,80 = 3,24." },
      { question: "Un article coûte 12,50 €. On paie avec 20 €. Quelle est la monnaie rendue ?", options: ["7,50 €", "8,50 €", "7 €", "8 €"], answer: "7,50 €", explication: "20 − 12,50 = 7,50 €. On peut calculer : 12,50 + 7,50 = 20 ✓" },
      { question: "Quel est le double de 3,5 ?", options: ["7", "6,5", "7,5", "6"], answer: "7", explication: "Le double de 3,5 = 3,5 × 2 = 7. Ou : 3 × 2 + 0,5 × 2 = 6 + 1 = 7." },
      { question: "Donne l'ordre de grandeur à la centaine près de 4 730.", options: ["4 700", "4 800", "5 000", "4 000"], answer: "4 700", explication: "4 730 : le chiffre des dizaines est 3 < 5, donc on arrondit à la centaine inférieure : 4 700." },
      { question: "Calcule 50 − 23 + 14.", options: ["41", "27", "87", "37"], answer: "41", explication: "On opère de gauche à droite : 50 − 23 = 27, puis 27 + 14 = 41." }
    ],
    3: [
      { question: "Un thermomètre indique −8°C la nuit et +4°C le jour. Quelle est l'amplitude de variation ?", options: ["12°C", "4°C", "8°C", "−4°C"], answer: "12°C", explication: "L'amplitude = valeur max − valeur min = +4 − (−8) = 4 + 8 = 12°C." },
      { question: "Quel est le plus grand parmi : −0,5 ; −2 ; +0,1 ; −3 ?", options: ["+0,1", "−0,5", "−2", "−3"], answer: "+0,1", explication: "Tout positif est supérieur à tout négatif. Ici +0,1 est le seul positif, donc c'est le plus grand." },
      { question: "Calcule 2,5 × 4 + 1,8.", options: ["11,8", "10,8", "16,8", "11,2"], answer: "11,8", explication: "En respectant la priorité des opérations : d'abord 2,5 × 4 = 10, puis 10 + 1,8 = 11,8." },
      { question: "Un nombre décimal multiplié par 10 donne 37. Quel est ce nombre ?", options: ["3,7", "370", "0,37", "37,0"], answer: "3,7", explication: "Multiplier par 10 déplace la virgule d'un rang vers la droite. Donc le nombre est 37 ÷ 10 = 3,7." },
      { question: "Un compte bancaire affiche −35 €. On y dépose 50 €. Quel est le nouveau solde ?", options: ["15 €", "−85 €", "85 €", "−15 €"], answer: "15 €", explication: "−35 + 50 = +15 €. Le solde est positif car le dépôt (50 €) dépasse le découvert (35 €)." },
      { question: "Combien de fois 0,25 est-il contenu dans 3 ?", options: ["12", "4", "0,75", "8"], answer: "12", explication: "3 ÷ 0,25 = 3 × 4 = 12. (diviser par 0,25 revient à multiplier par 4 car 1/0,25 = 4)" },
      { question: "Quel est le quotient de 45,6 ÷ 8 ?", options: ["5,7", "4,7", "6,7", "5,6"], answer: "5,7", explication: "456 ÷ 8 = 57. On replace la virgule : 45,6 ÷ 8 = 5,7." },
      { question: "Classe dans l'ordre décroissant : +2, −4, +0,5, −1. Quel est le deuxième ?", options: ["+0,5", "+2", "−1", "−4"], answer: "+0,5", explication: "Ordre décroissant : +2 > +0,5 > −1 > −4. Le deuxième est donc +0,5." }
    ]
  },

  maths6Geometrie: {
    nom: "Géométrie",
    emoji: "📐",
    couleur: "#7c3aed",
    1: [
      { question: "Combien de côtés a un quadrilatère ?", options: ["4", "3", "5", "6"], answer: "4", explication: "'Quadri' vient du latin 'quattuor' (quatre). Un quadrilatère a 4 côtés. Exemples : carré, rectangle, losange." },
      { question: "Un angle droit mesure combien de degrés ?", options: ["90°", "180°", "45°", "360°"], answer: "90°", explication: "Un angle droit mesure exactement 90°. Il est symbolisé par un petit carré dans le coin de l'angle." },
      { question: "Quel est le périmètre d'un carré de côté 5 cm ?", options: ["20 cm", "25 cm", "10 cm", "15 cm"], answer: "20 cm", explication: "Le périmètre d'un carré = 4 × côté = 4 × 5 = 20 cm." },
      { question: "Quel est le périmètre d'un rectangle de longueur 6 cm et largeur 4 cm ?", options: ["20 cm", "24 cm", "10 cm", "48 cm"], answer: "20 cm", explication: "Périmètre d'un rectangle = 2 × (longueur + largeur) = 2 × (6 + 4) = 2 × 10 = 20 cm." },
      { question: "Comment appelle-t-on un triangle qui a trois côtés égaux ?", options: ["Équilatéral", "Isocèle", "Rectangle", "Scalène"], answer: "Équilatéral", explication: "'Équilatéral' vient de 'equi' (égal) et 'lateral' (côté). Les 3 côtés sont égaux et les 3 angles font 60° chacun." },
      { question: "Comment appelle-t-on deux droites qui ne se croisent jamais ?", options: ["Parallèles", "Perpendiculaires", "Sécantes", "Concourantes"], answer: "Parallèles", explication: "Deux droites parallèles sont dans le même plan et ne se croisent jamais, quelle que soit leur extension." },
      { question: "Combien d'axes de symétrie a un carré ?", options: ["4", "2", "1", "8"], answer: "4", explication: "Un carré a 4 axes de symétrie : 2 passant par les milieux des côtés opposés et 2 passant par les sommets opposés." },
      { question: "Quel est le nom du point au centre d'un cercle ?", options: ["Centre", "Sommet", "Foyer", "Origine"], answer: "Centre", explication: "Le centre d'un cercle est le point équidistant de tous les points du cercle. La distance centre-cercle est le rayon." }
    ],
    2: [
      { question: "Quelle est l'aire d'un rectangle de 8 cm × 5 cm ?", options: ["40 cm²", "26 cm²", "13 cm²", "80 cm²"], answer: "40 cm²", explication: "Aire d'un rectangle = longueur × largeur = 8 × 5 = 40 cm²." },
      { question: "Quelle est l'aire d'un triangle de base 6 cm et de hauteur 4 cm ?", options: ["12 cm²", "24 cm²", "10 cm²", "14 cm²"], answer: "12 cm²", explication: "Aire d'un triangle = (base × hauteur) ÷ 2 = (6 × 4) ÷ 2 = 24 ÷ 2 = 12 cm²." },
      { question: "Un triangle a des côtés de 5 cm, 7 cm et 4 cm. Quel est son périmètre ?", options: ["16 cm", "14 cm", "18 cm", "140 cm²"], answer: "16 cm", explication: "Périmètre = somme de tous les côtés = 5 + 7 + 4 = 16 cm." },
      { question: "Un carré a un périmètre de 28 cm. Quelle est la longueur de son côté ?", options: ["7 cm", "14 cm", "4 cm", "28 cm"], answer: "7 cm", explication: "Périmètre = 4 × côté, donc côté = périmètre ÷ 4 = 28 ÷ 4 = 7 cm." },
      { question: "Comment appelle-t-on un triangle qui a exactement deux côtés égaux ?", options: ["Isocèle", "Équilatéral", "Rectangle", "Scalène"], answer: "Isocèle", explication: "Un triangle isocèle a exactement deux côtés de même longueur. Il a aussi deux angles égaux (à la base)." },
      { question: "Quel est le périmètre d'un cercle de rayon 5 cm ? (π ≈ 3,14)", options: ["31,4 cm", "78,5 cm", "15,7 cm", "25 cm"], answer: "31,4 cm", explication: "Périmètre (circonférence) d'un cercle = 2 × π × rayon = 2 × 3,14 × 5 = 31,4 cm." },
      { question: "Si D1 ⊥ D2 et D2 ⊥ D3, alors D1 et D3 sont...", options: ["Parallèles", "Perpendiculaires", "Sécantes", "Confondues"], answer: "Parallèles", explication: "Si D1 ⊥ D2 et D2 ⊥ D3, alors D1 // D3. Deux droites perpendiculaires à une même droite sont parallèles entre elles." },
      { question: "L'axe de symétrie d'un triangle isocèle passe par...", options: ["Le sommet principal et le milieu de la base", "Les deux sommets égaux", "La base uniquement", "L'extérieur du triangle"], answer: "Le sommet principal et le milieu de la base", explication: "L'axe de symétrie d'un triangle isocèle est la médiatrice de la base : il passe par le sommet principal (angle différent) et le milieu de la base." }
    ],
    3: [
      { question: "Un rectangle a une aire de 54 cm² et une longueur de 9 cm. Quelle est sa largeur ?", options: ["6 cm", "5 cm", "7 cm", "45 cm"], answer: "6 cm", explication: "Aire = longueur × largeur → largeur = aire ÷ longueur = 54 ÷ 9 = 6 cm." },
      { question: "Quelle est l'aire d'un disque de rayon 3 cm ? (π ≈ 3,14)", options: ["28,26 cm²", "18,84 cm²", "9,42 cm²", "56,52 cm²"], answer: "28,26 cm²", explication: "Aire d'un disque = π × rayon² = 3,14 × 3² = 3,14 × 9 = 28,26 cm²." },
      { question: "Un triangle isocèle a un périmètre de 25 cm. Sa base mesure 7 cm. Quelle est la longueur d'un côté égal ?", options: ["9 cm", "8 cm", "18 cm", "6 cm"], answer: "9 cm", explication: "Périmètre = base + 2 × côté égal → 2 × côté = 25 − 7 = 18 → côté = 9 cm." },
      { question: "La circonférence d'un cercle est 62,8 cm. Quel est son rayon ? (π ≈ 3,14)", options: ["10 cm", "20 cm", "5 cm", "31,4 cm"], answer: "10 cm", explication: "Circonférence = 2 × π × r → r = 62,8 ÷ (2 × 3,14) = 62,8 ÷ 6,28 = 10 cm." },
      { question: "Un terrain carré a une aire de 64 m². Quel est son périmètre ?", options: ["32 m", "16 m", "256 m", "8 m"], answer: "32 m", explication: "Aire = côté² → côté = √64 = 8 m. Périmètre = 4 × 8 = 32 m." },
      { question: "Combien d'axes de symétrie a un rectangle (non carré) ?", options: ["2", "4", "1", "0"], answer: "2", explication: "Un rectangle non carré a 2 axes de symétrie : un horizontal (milieux des côtés latéraux) et un vertical (milieux des côtés horizontaux)." },
      { question: "Quelle est l'aire d'un triangle rectangle de côtés 3 cm, 4 cm et 5 cm ?", options: ["6 cm²", "12 cm²", "7,5 cm²", "10 cm²"], answer: "6 cm²", explication: "Dans un triangle rectangle, les deux côtés de l'angle droit sont la base et la hauteur. Aire = (3 × 4) ÷ 2 = 12 ÷ 2 = 6 cm²." },
      { question: "Un carré et un rectangle ont la même aire de 36 cm². Le rectangle a une longueur de 9 cm. Quelle est sa largeur ?", options: ["4 cm", "6 cm", "3 cm", "27 cm"], answer: "4 cm", explication: "Aire rectangle = longueur × largeur → largeur = 36 ÷ 9 = 4 cm. (Le carré aurait un côté de √36 = 6 cm.)" }
    ]
  },

  maths6Grandeurs: {
    nom: "Grandeurs & mesures",
    emoji: "📏",
    couleur: "#0d9488",
    1: [
      { question: "Combien de centimètres y a-t-il dans 1 mètre ?", options: ["100 cm", "10 cm", "1 000 cm", "1 cm"], answer: "100 cm", explication: "1 m = 100 cm. Le préfixe 'centi' signifie centième : 1 cm = 1/100 m." },
      { question: "Combien de millimètres dans 1 centimètre ?", options: ["10 mm", "100 mm", "1 mm", "1 000 mm"], answer: "10 mm", explication: "1 cm = 10 mm. Le préfixe 'milli' signifie millième : 1 mm = 1/1 000 m = 1/10 cm." },
      { question: "Convertis 3 km en mètres.", options: ["3 000 m", "300 m", "30 m", "30 000 m"], answer: "3 000 m", explication: "1 km = 1 000 m, donc 3 km = 3 × 1 000 = 3 000 m." },
      { question: "Combien de minutes dans 1 heure ?", options: ["60 min", "100 min", "24 min", "3 600 min"], answer: "60 min", explication: "1 heure = 60 minutes. Et 1 minute = 60 secondes, donc 1 heure = 3 600 secondes." },
      { question: "Combien de grammes dans 1 kilogramme ?", options: ["1 000 g", "100 g", "10 g", "10 000 g"], answer: "1 000 g", explication: "Le préfixe 'kilo' signifie mille. 1 kg = 1 000 g." },
      { question: "Convertis 500 cm en mètres.", options: ["5 m", "50 m", "0,5 m", "500 m"], answer: "5 m", explication: "500 cm ÷ 100 = 5 m. (On divise par 100 pour passer des cm aux m.)" },
      { question: "Combien de centilitres dans 1 litre ?", options: ["100 cL", "10 cL", "1 000 cL", "1 cL"], answer: "100 cL", explication: "1 L = 100 cL. Le préfixe 'centi' signifie centième : 1 cL = 1/100 L." },
      { question: "Combien de secondes dans 1 minute ?", options: ["60 s", "100 s", "24 s", "3 600 s"], answer: "60 s", explication: "1 minute = 60 secondes. C'est une unité de mesure du temps basée sur le système sexagésimal (base 60)." }
    ],
    2: [
      { question: "Convertis 3,5 km en mètres.", options: ["3 500 m", "350 m", "35 m", "3,5 m"], answer: "3 500 m", explication: "3,5 km × 1 000 = 3 500 m. (Multiplier par 1 000 revient à décaler la virgule de 3 rangs vers la droite.)" },
      { question: "Un rectangle de 20 cm × 15 cm. Quelle est son aire en cm² ?", options: ["300 cm²", "70 cm²", "35 cm²", "600 cm²"], answer: "300 cm²", explication: "Aire = longueur × largeur = 20 × 15 = 300 cm²." },
      { question: "Convertis 2 h 30 min en minutes.", options: ["150 min", "230 min", "130 min", "2,5 min"], answer: "150 min", explication: "2 h = 2 × 60 = 120 min. 120 + 30 = 150 min." },
      { question: "Convertis 4 500 g en kilogrammes.", options: ["4,5 kg", "45 kg", "0,45 kg", "450 kg"], answer: "4,5 kg", explication: "4 500 g ÷ 1 000 = 4,5 kg. (On divise par 1 000 pour passer des g aux kg.)" },
      { question: "Un pavé droit mesure 4 cm × 3 cm × 5 cm. Quel est son volume ?", options: ["60 cm³", "47 cm³", "12 cm³", "120 cm³"], answer: "60 cm³", explication: "Volume d'un pavé droit = longueur × largeur × hauteur = 4 × 3 × 5 = 60 cm³." },
      { question: "Une piscine de 10 m × 5 m × 2 m. Quel est son volume en m³ ?", options: ["100 m³", "17 m³", "50 m³", "200 m³"], answer: "100 m³", explication: "Volume = 10 × 5 × 2 = 100 m³." },
      { question: "Convertis 1 h 45 min en minutes.", options: ["105 min", "145 min", "75 min", "60 min"], answer: "105 min", explication: "1 h = 60 min. 60 + 45 = 105 min." },
      { question: "Un cube a une arête de 4 cm. Quel est son volume ?", options: ["64 cm³", "48 cm³", "16 cm³", "12 cm³"], answer: "64 cm³", explication: "Volume d'un cube = arête³ = 4 × 4 × 4 = 64 cm³." }
    ],
    3: [
      { question: "Quelle est l'aire d'un disque de diamètre 10 cm ? (π ≈ 3,14)", options: ["78,5 cm²", "31,4 cm²", "314 cm²", "157 cm²"], answer: "78,5 cm²", explication: "Diamètre = 10 cm → rayon = 5 cm. Aire = π × r² = 3,14 × 25 = 78,5 cm²." },
      { question: "Un cube a un volume de 27 cm³. Quelle est la longueur de son arête ?", options: ["3 cm", "9 cm", "27 cm", "6 cm"], answer: "3 cm", explication: "Volume du cube = arête³ = 27 → arête = ∛27 = 3 cm. (3 × 3 × 3 = 27 ✓)" },
      { question: "Un aquarium de 50 cm × 30 cm × 40 cm est rempli aux 3/4. Quel volume d'eau contient-il (en litres) ?", options: ["45 L", "60 L", "54 L", "75 L"], answer: "45 L", explication: "Volume total = 50 × 30 × 40 = 60 000 cm³ = 60 L. Rempli aux 3/4 : 60 × 3/4 = 45 L." },
      { question: "Convertis 2,5 m² en dm².", options: ["250 dm²", "25 dm²", "2 500 dm²", "0,25 dm²"], answer: "250 dm²", explication: "1 m = 10 dm, donc 1 m² = 10 × 10 = 100 dm². Ainsi 2,5 m² = 2,5 × 100 = 250 dm²." },
      { question: "Un train parcourt 120 km en 1 h 30 min. Quelle est sa vitesse en km/h ?", options: ["80 km/h", "120 km/h", "60 km/h", "90 km/h"], answer: "80 km/h", explication: "1 h 30 min = 1,5 h. Vitesse = distance ÷ temps = 120 ÷ 1,5 = 80 km/h." },
      { question: "Le périmètre d'un disque est 62,8 cm. Quel est son rayon ? (π ≈ 3,14)", options: ["10 cm", "20 cm", "5 cm", "31,4 cm"], answer: "10 cm", explication: "Périmètre = 2 × π × r → r = 62,8 ÷ (2 × 3,14) = 62,8 ÷ 6,28 = 10 cm." },
      { question: "Un réservoir rectangulaire de 80 cm × 50 cm × 60 cm. Quel est son volume en litres ?", options: ["240 L", "24 L", "2 400 L", "190 L"], answer: "240 L", explication: "Volume = 80 × 50 × 60 = 240 000 cm³. Or 1 L = 1 000 cm³, donc 240 000 ÷ 1 000 = 240 L." },
      { question: "Convertis 3 600 s en heures.", options: ["1 h", "6 h", "0,6 h", "36 h"], answer: "1 h", explication: "1 min = 60 s, 1 h = 60 min = 3 600 s. Donc 3 600 s = 1 h." }
    ]
  },

  maths6Proportionnalite: {
    nom: "Proportionnalité",
    emoji: "📊",
    couleur: "#b45309",
    1: [
      { question: "3 cahiers coûtent 9 €. Combien coûte 1 cahier ?", options: ["3 €", "6 €", "12 €", "27 €"], answer: "3 €", explication: "9 ÷ 3 = 3 €. Le coefficient de proportionnalité est 3 : prix = 3 × nombre de cahiers." },
      { question: "Le coefficient de proportionnalité entre 2 et 10 est...", options: ["5", "8", "2", "20"], answer: "5", explication: "2 × ? = 10 → ? = 10 ÷ 2 = 5. On dit que 2 et 10 sont proportionnels avec un coefficient 5." },
      { question: "Si 5 kg de farine coûtent 10 €, combien coûtent 2 kg ?", options: ["4 €", "5 €", "8 €", "20 €"], answer: "4 €", explication: "1 kg coûte 10 ÷ 5 = 2 €. Donc 2 kg coûtent 2 × 2 = 4 €." },
      { question: "Dans un tableau de proportionnalité : 1 → 6, 4 → ?", options: ["24", "10", "7", "4"], answer: "24", explication: "Le coefficient est 6 (car 1 × 6 = 6). Donc 4 → 4 × 6 = 24." },
      { question: "Un robinet remplit 12 L en 3 min. Combien de litres en 1 min ?", options: ["4 L", "9 L", "15 L", "36 L"], answer: "4 L", explication: "12 ÷ 3 = 4 L par minute. C'est une situation de proportionnalité entre le temps et le volume." },
      { question: "Sur une carte : 1 cm = 5 km. Que représentent 3 cm ?", options: ["15 km", "8 km", "3 km", "53 km"], answer: "15 km", explication: "3 cm × 5 = 15 km. C'est une proportionnalité entre la distance sur la carte et la distance réelle." },
      { question: "Un cycliste roule à 15 km/h. En 2 h, il parcourt...", options: ["30 km", "17 km", "7,5 km", "13 km"], answer: "30 km", explication: "Distance = vitesse × temps = 15 × 2 = 30 km. La distance est proportionnelle au temps à vitesse constante." },
      { question: "Une recette pour 4 personnes demande 200 g de farine. Pour 8 personnes ?", options: ["400 g", "100 g", "800 g", "600 g"], answer: "400 g", explication: "Pour 8 personnes (= 2 × 4), il faut 2 × 200 = 400 g. La quantité est proportionnelle au nombre de personnes." }
    ],
    2: [
      { question: "Une voiture roule à 90 km/h. En 2,5 h, quelle distance parcourt-elle ?", options: ["225 km", "92,5 km", "180 km", "250 km"], answer: "225 km", explication: "Distance = vitesse × temps = 90 × 2,5 = 225 km." },
      { question: "Le prix de 7 m de tissu est 42 €. Quel est le prix de 5 m ?", options: ["30 €", "35 €", "28 €", "21 €"], answer: "30 €", explication: "1 m coûte 42 ÷ 7 = 6 €. Donc 5 m coûtent 5 × 6 = 30 €." },
      { question: "Un robinet remplit 30 L en 6 min. Combien de temps pour remplir 45 L ?", options: ["9 min", "7 min", "12 min", "15 min"], answer: "9 min", explication: "Débit = 30 ÷ 6 = 5 L/min. Temps pour 45 L : 45 ÷ 5 = 9 min." },
      { question: "Une recette pour 6 personnes demande 300 g de sucre. Pour 4 personnes ?", options: ["200 g", "250 g", "150 g", "450 g"], answer: "200 g", explication: "Pour 1 personne : 300 ÷ 6 = 50 g. Pour 4 personnes : 4 × 50 = 200 g." },
      { question: "Sur une carte à l'échelle 1/50 000, 2 cm représentent combien de km ?", options: ["1 km", "2 km", "10 km", "100 km"], answer: "1 km", explication: "2 cm × 50 000 = 100 000 cm = 1 000 m = 1 km." },
      { question: "Tableau de proportionnalité : 4 → 14, 6 → ?", options: ["21", "18", "24", "12"], answer: "21", explication: "Coefficient = 14 ÷ 4 = 3,5. Donc 6 → 6 × 3,5 = 21." },
      { question: "Un train parcourt 180 km en 2 h. Quelle est sa vitesse ?", options: ["90 km/h", "178 km/h", "360 km/h", "60 km/h"], answer: "90 km/h", explication: "Vitesse = distance ÷ temps = 180 ÷ 2 = 90 km/h." },
      { question: "Dans une classe, 60 % des 30 élèves sont des filles. Combien de filles y a-t-il ?", options: ["18", "12", "20", "6"], answer: "18", explication: "60 % de 30 = 60 ÷ 100 × 30 = 0,6 × 30 = 18 filles." }
    ],
    3: [
      { question: "Sur une carte à l'échelle 1/200 000, deux villes sont distantes de 4,5 cm. Quelle est leur distance réelle (en km) ?", options: ["9 km", "45 km", "90 km", "4,5 km"], answer: "9 km", explication: "4,5 cm × 200 000 = 900 000 cm = 9 000 m = 9 km." },
      { question: "Dans un sac : 4 billes rouges, 3 bleues, 3 vertes. Quelle est la probabilité de tirer une bille bleue ?", options: ["3/10", "3/7", "1/3", "4/10"], answer: "3/10", explication: "Total = 4 + 3 + 3 = 10 billes. Probabilité bille bleue = 3/10." },
      { question: "Une recette pour 5 personnes demande 150 g de beurre. Pour 8 personnes ?", options: ["240 g", "200 g", "300 g", "120 g"], answer: "240 g", explication: "Pour 1 personne : 150 ÷ 5 = 30 g. Pour 8 : 8 × 30 = 240 g." },
      { question: "Le coefficient de proportionnalité prix/quantité est 2,5 €/kg. Combien coûtent 6,4 kg ?", options: ["16 €", "8,9 €", "12,8 €", "6,4 €"], answer: "16 €", explication: "Prix = coefficient × quantité = 2,5 × 6,4 = 16 €." },
      { question: "Dans un sac : 5 billes rouges et 15 billes bleues. Quelle est la probabilité de tirer une bille rouge ?", options: ["1/4", "1/5", "5/15", "1/3"], answer: "1/4", explication: "Total = 5 + 15 = 20 billes. P(rouge) = 5/20 = 1/4." },
      { question: "Une voiture consomme 7 L aux 100 km. Pour 350 km, combien de litres ?", options: ["24,5 L", "35 L", "70 L", "20 L"], answer: "24,5 L", explication: "Consommation proportionnelle : 7 L / 100 km → 7 × 3,5 = 24,5 L pour 350 km." },
      { question: "x et y sont proportionnels. Si x=4 donne y=10 et x=6 donne y=15, quel est le coefficient ?", options: ["2,5", "4", "6", "1,5"], answer: "2,5", explication: "Coefficient = y ÷ x = 10 ÷ 4 = 2,5 (vérification : 15 ÷ 6 = 2,5 ✓). Les deux valeurs donnent bien le même coefficient, c'est donc une proportionnalité." },
      { question: "Un article soldé perd 20 € sur un prix initial de 80 €. Quel pourcentage de réduction est appliqué ?", options: ["25 %", "20 %", "15 %", "40 %"], answer: "25 %", explication: "Taux = (réduction ÷ prix initial) × 100 = (20 ÷ 80) × 100 = 0,25 × 100 = 25 %." }
    ]
  },

  // ══ FRANÇAIS 6ÈME ══

  francais6Lecture: {
    id: 'francais6Lecture', nom: 'Lecture & Compréhension', emoji: '📖', couleur: '#16a34a',
    1: [
      { question: "Dans un récit, comment appelle-t-on la personne qui raconte l'histoire ?", options: ["Le narrateur", "L'auteur", "Le héros", "Le lecteur"], answer: "Le narrateur", explication: "Le narrateur est la voix qui raconte. Il peut être un personnage (narr. interne) ou extérieur à l'histoire (narr. externe). L'auteur, lui, est la vraie personne qui a écrit le livre." },
      { question: "Quel élément ne fait PAS partie du cadre d'un récit ?", options: ["La morale", "Le lieu", "Le temps", "Les personnages"], answer: "La morale", explication: "Le cadre d'un récit = lieu + temps + personnages. La morale est un message ou une leçon, pas un élément du cadre." },
      { question: "Pour trouver le sens d'un mot inconnu dans un texte, que fait-on en priorité ?", options: ["On s'aide des mots autour (contexte)", "On ferme le livre", "On passe le mot", "On relit depuis le début"], answer: "On s'aide des mots autour (contexte)", explication: "Le contexte (les phrases et mots autour) donne des indices précieux pour deviner le sens d'un mot sans dictionnaire." },
      { question: "\"Il était une fois une princesse...\" — quel type de texte commence ainsi ?", options: ["Un conte", "Un article de journal", "Une recette", "Une lettre"], answer: "Un conte", explication: "\"Il était une fois\" est la formule d'ouverture typique du conte, un genre narratif fictif qui met en scène des personnages dans un monde souvent merveilleux." },
      { question: "Dans un récit au passé, quels sont les deux temps principaux ?", options: ["L'imparfait et le passé simple", "Le futur et le conditionnel", "Le présent et le futur", "Le subjonctif et l'impératif"], answer: "L'imparfait et le passé simple", explication: "Le passé simple exprime les actions principales (ponctuelles). L'imparfait exprime les descriptions et les actions de fond (durée, habitude)." },
      { question: "Qu'est-ce qu'un personnage fictif ?", options: ["Un personnage inventé par l'auteur", "Une personne réelle", "Un animal sauvage", "Un lieu imaginaire"], answer: "Un personnage inventé par l'auteur", explication: "Fictif vient de \"fiction\" : le personnage n'existe que dans l'histoire. Il s'oppose au personnage historique (réel)." },
      { question: "Résumer un texte, c'est…", options: ["Raconter l'essentiel en peu de mots", "Recopier le texte", "Inventer une suite", "Écrire son opinion"], answer: "Raconter l'essentiel en peu de mots", explication: "Un résumé reformule les idées principales de façon concise. On n'y met ni détails, ni exemples, ni opinion personnelle." },
      { question: "Quel type de mots indique le lieu dans un texte ?", options: ["Là-bas, ici, dans la forêt", "Hier, demain, autrefois", "Car, donc, puis", "Très, beaucoup, jamais"], answer: "Là-bas, ici, dans la forêt", explication: "Les indicateurs de lieu (là, ici, là-bas, au château, dans la forêt…) situent l'action dans l'espace." }
    ],
    2: [
      { question: "Qu'est-ce qu'un narrateur omniscient ?", options: ["Un narrateur qui connaît tout des personnages", "Un narrateur qui ne sait rien", "Un personnage qui raconte en 'je'", "Un narrateur qui observe sans savoir"], answer: "Un narrateur qui connaît tout des personnages", explication: "L'omniscient (= qui sait tout) connaît pensées, sentiments et actions de TOUS les personnages. Il raconte généralement à la 3ème personne." },
      { question: "Qu'est-ce que le schéma narratif ?", options: ["La structure d'un récit en 5 étapes", "Le résumé d'un texte", "La liste des personnages", "Les temps verbaux du récit"], answer: "La structure d'un récit en 5 étapes", explication: "Le schéma narratif : ① situation initiale → ② élément perturbateur → ③ péripéties → ④ élément de résolution → ⑤ situation finale." },
      { question: "Comment repère-t-on un texte fictif ?", options: ["Il invente des événements et des personnages imaginaires", "Il est toujours plus long qu'un texte réel", "Il n'a jamais de personnages", "Il est toujours en vers"], answer: "Il invente des événements et des personnages imaginaires", explication: "Un texte fictif (conte, roman, fable…) crée une réalité inventée. Un texte documentaire ou un article relate des faits vrais." },
      { question: "Le point de vue interne dans un récit, c'est…", options: ["On découvre l'histoire à travers les yeux d'un personnage", "Le narrateur connaît tout", "Le récit est au présent uniquement", "Le narrateur est l'auteur lui-même"], answer: "On découvre l'histoire à travers les yeux d'un personnage", explication: "Avec le point de vue interne, le lecteur accède aux pensées et sensations d'UN seul personnage. Le narrateur ne sait pas plus que ce personnage." },
      { question: "Que signifie 'implicite' dans un texte ?", options: ["Ce qui est sous-entendu, pas dit directement", "Ce qui est écrit clairement", "Le titre du texte", "Le résumé final"], answer: "Ce qui est sous-entendu, pas dit directement", explication: "L'implicite se déduit du contexte sans être écrit. Ex : si un personnage tremble, on comprend implicitement qu'il a peur." },
      { question: "Un champ lexical, c'est…", options: ["Un ensemble de mots liés au même thème", "Le vocabulaire difficile d'un texte", "Les synonymes d'un mot", "La liste des verbes"], answer: "Un ensemble de mots liés au même thème", explication: "Ex : 'tempête, vague, naufrage, marée, bateau' → champ lexical de la mer. Le champ lexical dominant révèle le thème principal." },
      { question: "La situation initiale d'un récit présente…", options: ["Le contexte de départ avant le problème", "Le moment le plus intense", "La fin de l'histoire", "Le problème principal"], answer: "Le contexte de départ avant le problème", explication: "La situation initiale = l'état stable au début : personnages, lieu, époque présentés. Tout est calme avant que quelque chose ne vienne tout perturber." },
      { question: "Pour identifier le thème principal d'un texte, on cherche…", options: ["Le champ lexical le plus présent", "Les mots les plus longs", "Le nombre de dialogues", "Le personnage le plus cité"], answer: "Le champ lexical le plus présent", explication: "Le champ lexical dominant révèle le thème : si on trouve beaucoup de mots liés à la guerre, c'est probablement le thème central." }
    ],
    3: [
      { question: "Quelle est la différence entre point de vue interne et point de vue omniscient ?", options: ["Interne : pensées d'un seul perso ; Omniscient : pensées de tous", "Interne : récit à la 1ère pers. ; Omniscient : à la 3ème seulement", "Interne : texte fictif ; Omniscient : texte réel", "Ils sont identiques"], answer: "Interne : pensées d'un seul perso ; Omniscient : pensées de tous", explication: "Point de vue interne : accès aux pensées d'UN seul personnage. Omniscient (focalisation zéro) : accès aux pensées de TOUS." },
      { question: "Qu'est-ce qu'une analepse dans un récit ?", options: ["Un retour en arrière pour raconter un événement passé", "Une anticipation sur la suite", "Un personnage secondaire", "Un résumé en fin de chapitre"], answer: "Un retour en arrière pour raconter un événement passé", explication: "L'analepse (ou 'flashback') interrompt le récit pour raconter un événement antérieur. Elle éclaire souvent le présent de l'histoire." },
      { question: "Qu'est-ce que la focalisation zéro ?", options: ["Un narrateur omniscient qui sait tout sur tous", "Un récit sans narrateur", "Un texte sans personnages", "Un narrateur qui ne dit rien"], answer: "Un narrateur omniscient qui sait tout sur tous", explication: "Focalisation zéro = le narrateur en sait plus que TOUS les personnages. Il a accès à toutes les pensées et peut même connaître l'avenir." },
      { question: "Comment distinguer récit réaliste et récit merveilleux ?", options: ["Réaliste : ancré dans la réalité ; Merveilleux : magie acceptée comme normale", "Réaliste : vrai ; Merveilleux : toujours un conte", "Réaliste : plus long ; Merveilleux : plus court", "Ils se distinguent uniquement par le temps verbal"], answer: "Réaliste : ancré dans la réalité ; Merveilleux : magie acceptée comme normale", explication: "Récit réaliste : vraisemblable, monde ordinaire. Récit merveilleux : éléments magiques présentés comme naturels (fées, dragons, sortilèges)." },
      { question: "En quoi l'auteur et le narrateur sont-ils différents ?", options: ["L'auteur écrit le livre ; le narrateur est une voix fictive créée par l'auteur", "L'auteur est toujours dans l'histoire", "Le narrateur est toujours omniscient", "Il n'y a pas de différence"], answer: "L'auteur écrit le livre ; le narrateur est une voix fictive créée par l'auteur", explication: "L'auteur = personne réelle qui écrit. Le narrateur = voix fictive à l'intérieur du texte. Victor Hugo ≠ Jean Valjean (son narrateur dans Les Misérables)." },
      { question: "Qu'est-ce que l'ironie dans un texte ?", options: ["Dire le contraire de ce qu'on pense pour créer un effet comique ou critique", "Exagérer un trait de caractère", "Comparer deux éléments", "Répéter un mot pour insister"], answer: "Dire le contraire de ce qu'on pense pour créer un effet comique ou critique", explication: "L'ironie consiste à écrire l'opposé de sa pensée. Ex : dire 'Quel beau temps !' sous une pluie torrentielle." },
      { question: "Comment un auteur crée-t-il du suspense ?", options: ["En retardant la résolution et en multipliant les obstacles", "En racontant tout dès le début", "En terminant l'histoire rapidement", "En utilisant beaucoup d'adjectifs"], answer: "En retardant la résolution et en multipliant les obstacles", explication: "Le suspense naît du retard : obstacles, rebondissements, fausses pistes, questions sans réponse immédiate. Le lecteur veut savoir la suite." },
      { question: "Qu'est-ce qu'une ellipse narrative ?", options: ["Un saut dans le temps qui passe sous silence une période", "Un retour en arrière", "Une répétition d'un événement", "Un personnage absent de l'histoire"], answer: "Un saut dans le temps qui passe sous silence une période", explication: "L'ellipse = le narrateur passe sous silence une période. Ex : 'Dix ans plus tard...' Contrairement à l'analepse, on avance dans le temps." }
    ]
  },

  francais6Ecriture: {
    id: 'francais6Ecriture', nom: 'Écriture', emoji: '✍️', couleur: '#0d9488',
    1: [
      { question: "Pour écrire la suite d'un texte, il faut d'abord…", options: ["Relire le texte pour respecter personnages et situation", "Inventer de nouveaux personnages", "Changer le temps du récit", "Écrire n'importe quoi"], answer: "Relire le texte pour respecter personnages et situation", explication: "La suite d'un texte doit être cohérente : mêmes personnages, même ton, même lieu. Il faut s'appuyer sur ce qui est déjà écrit." },
      { question: "Dans un dialogue écrit, comment signale-t-on qu'un personnage parle ?", options: ["Avec des tirets (—) ou des guillemets (« »)", "En mettant tout en majuscules", "En changeant de chapitre", "Avec des points de suspension"], answer: "Avec des tirets (—) ou des guillemets (« »)", explication: "Le dialogue utilise les guillemets ou les tirets pour indiquer les prises de parole. Chaque changement de locuteur = retour à la ligne + tiret." },
      { question: "Qu'est-ce que la 'chute' d'une histoire courte ?", options: ["La fin surprenante ou inattendue", "Le début de l'histoire", "Le moment le plus intense", "La description du lieu"], answer: "La fin surprenante ou inattendue", explication: "La chute est la fin d'un texte court (nouvelle, blague littéraire), souvent un twist ou une révélation qui donne tout son sens à ce qui précède." },
      { question: "Pour décrire un personnage, on présente d'abord…", options: ["Son apparence physique, puis son caractère", "La fin de l'histoire", "Son nom de famille uniquement", "Ses ennemis"], answer: "Son apparence physique, puis son caractère", explication: "Une description de personnage part souvent du physique (ce qu'on voit) vers le caractère (sa personnalité). On peut aussi intégrer sa façon de parler." },
      { question: "Pour rédiger un résumé, on écrit…", options: ["Les idées principales, sans les détails ni les exemples", "Tout le texte mot pour mot", "Uniquement la fin du texte", "Son opinion personnelle"], answer: "Les idées principales, sans les détails ni les exemples", explication: "Un résumé = reformulation courte et fidèle des idées essentielles. On supprime les exemples, les détails et on ne donne pas son avis." },
      { question: "Un récit d'aventure nécessite absolument…", options: ["Un héros face à un danger ou un défi", "Un dialogue très long", "Un résumé à la fin", "Une description de la pluie"], answer: "Un héros face à un danger ou un défi", explication: "L'aventure implique un héros actif qui doit surmonter des obstacles, des dangers ou des défis. L'action est au cœur du récit." },
      { question: "Quand on change le narrateur d'un texte (de 'je' à 'il'), il faut modifier…", options: ["Les pronoms et les formes verbales", "Seulement le début du texte", "Le titre uniquement", "Les dialogues uniquement"], answer: "Les pronoms et les formes verbales", explication: "Changer le narrateur implique de changer TOUS les pronoms (je → il/elle), les adjectifs possessifs (mon → son) et parfois les verbes." },
      { question: "Pour écrire un conte, quelle formule d'ouverture est la plus courante ?", options: ["Il était une fois…", "Bonjour !", "Hier matin…", "À mon avis…"], answer: "Il était une fois…", explication: "'Il était une fois' situe dans un temps indéfini et imaginaire. C'est la formule typique du conte qui transporte le lecteur dans un monde merveilleux." }
    ],
    2: [
      { question: "Quelle est la différence entre un récit à la 1ère et à la 3ème personne ?", options: ["1ère : narrateur personnage ('je') ; 3ème : narrateur extérieur ('il/elle')", "1ère : texte court ; 3ème : texte long", "1ère : fictif ; 3ème : réel", "1ère : présent ; 3ème : passé toujours"], answer: "1ère : narrateur personnage ('je') ; 3ème : narrateur extérieur ('il/elle')", explication: "1ère personne : intimité, subjectivité, le lecteur est dans la tête du narrateur. 3ème personne : plus de distance et de recul sur l'action." },
      { question: "Pourquoi utiliser des verbes d'action précis et variés dans un récit ?", options: ["Pour rendre le récit vivant et dynamique", "Pour allonger le texte", "Pour décrire les lieux", "Pour éviter les dialogues"], answer: "Pour rendre le récit vivant et dynamique", explication: "Des verbes précis (bondir, murmurer, s'élancer, frissonner) rendent l'action vivante et évitent la monotonie. 'Faire', 'aller', 'dire' sont trop vagues." },
      { question: "Comment rendre un dialogue réaliste ?", options: ["Adapter le langage au personnage et varier les verbes introducteurs", "Écrire tous les dialogues en majuscules", "Supprimer la ponctuation", "Faire parler tous les personnages pareil"], answer: "Adapter le langage au personnage et varier les verbes introducteurs", explication: "Un bon dialogue reflète la personnalité. Les verbes variés (murmura, s'exclama, répondit, bredouilla) remplacent avantageusement la répétition de 'dit'." },
      { question: "À quoi servent les 'expansions du nom' dans une description ?", options: ["Enrichir et préciser la description du nom", "Résumer le texte", "Remplacer le verbe", "Changer le temps du récit"], answer: "Enrichir et préciser la description du nom", explication: "Les expansions (adjectifs, compléments du nom, propositions relatives) précisent et enrichissent le nom. Ex : 'une vieille maison de pierre aux volets fermés'." },
      { question: "Pourquoi l'imparfait est-il le temps de la description dans un récit au passé ?", options: ["Il exprime la durée et l'aspect inachevé, parfait pour les états", "Il est plus simple que le passé simple", "Il s'emploie toujours après 'et'", "Il remplace le passé simple dans tous les cas"], answer: "Il exprime la durée et l'aspect inachevé, parfait pour les états", explication: "Imparfait = action en cours, habitude, état (durée). Passé simple = action ponctuelle, achevée. Récit : passé simple pour les événements, imparfait pour le décor." },
      { question: "Comment enrichir une description de lieu ?", options: ["Faire appel aux 5 sens et utiliser des comparaisons", "Lister les objets présents", "Écrire en dialogue", "N'utiliser que des adjectifs de couleur"], answer: "Faire appel aux 5 sens et utiliser des comparaisons", explication: "Une bonne description mobilise vue, ouïe, odorat, toucher et goût. Les comparaisons et métaphores rendent l'image plus forte." },
      { question: "La structure d'un conte classique suit…", options: ["Situation stable → perturbation → quête → résolution → nouvel état", "Problème → solution → introduction", "Introduction → développement → conclusion", "Personnages → lieu → morale"], answer: "Situation stable → perturbation → quête → résolution → nouvel état", explication: "Le schéma narratif du conte : état initial stable → un problème surgit → le héros part en quête → il résout le problème → nouvel équilibre." },
      { question: "Pour transformer une phrase affirmative en phrase interrogative, on peut…", options: ["Inverser sujet-verbe ou ajouter 'est-ce que'", "Ajouter un point d'exclamation", "Supprimer le verbe", "Mettre la phrase au passé"], answer: "Inverser sujet-verbe ou ajouter 'est-ce que'", explication: "Ex : 'Il vient.' → 'Vient-il ?' (inversion) ou 'Est-ce qu'il vient ?' (tournure interrogative). À l'oral, la montée de voix suffit aussi." }
    ],
    3: [
      { question: "Quelle figure de style compare deux éléments avec 'comme' ou 'tel' ?", options: ["La comparaison", "La métaphore", "La personnification", "L'hyperbole"], answer: "La comparaison", explication: "Comparaison : outil de comparaison explicite ('comme', 'tel', 'pareil à'). Métaphore : comparaison sans outil ('le vent est une bête'). La personnification donne des traits humains à un non-humain." },
      { question: "Qu'est-ce que la personnification ?", options: ["Donner des caractéristiques humaines à un objet ou un animal", "Exagérer les qualités d'un personnage", "Comparer deux choses avec 'comme'", "Répéter un mot pour insister"], answer: "Donner des caractéristiques humaines à un objet ou un animal", explication: "Personnification : 'Le vent gémissait', 'La forêt s'éveillait'. On attribue des actions, sentiments ou paroles humains à ce qui ne l'est pas." },
      { question: "Qu'est-ce que l'hyperbole ?", options: ["Une exagération pour renforcer l'effet", "Une comparaison avec 'comme'", "Un retour en arrière dans le récit", "Une figure de style qui dit le contraire"], answer: "Une exagération pour renforcer l'effet", explication: "L'hyperbole exagère pour impressionner. Ex : 'Je meurs de faim', 'Il y avait un million de personnes'. Ce n'est pas littéral, c'est pour l'effet." },
      { question: "Comment créer un effet de surprise à la fin d'un texte ?", options: ["Retenir une information clé jusqu'au dernier moment", "Tout annoncer dès le début", "Écrire un long dialogue", "Répéter le début du texte"], answer: "Retenir une information clé jusqu'au dernier moment", explication: "La chute efficace repose sur un retournement ou une révélation tardive qui oblige le lecteur à relire tout le texte différemment." },
      { question: "Qu'est-ce que la cohérence textuelle ?", options: ["La progression logique et la cohérence des temps verbaux", "L'utilisation de nombreux adjectifs", "La longueur des phrases", "Le nombre de chapitres"], answer: "La progression logique et la cohérence des temps verbaux", explication: "Un texte cohérent : chaque phrase découle logiquement de la précédente, les temps sont constants et les personnages restent les mêmes." },
      { question: "Quelle est la focalisation dans l'écriture narrative ?", options: ["Le choix du point de vue pour raconter l'histoire", "La façon d'écrire les dialogues", "Le nombre de personnages", "Le temps du récit"], answer: "Le choix du point de vue pour raconter l'histoire", explication: "Focalisation zéro (omniscient), interne (un personnage), externe (observateur sans accès aux pensées). Ce choix influence tout ce que sait le lecteur." },
      { question: "Comment gérer la progression temporelle dans un récit long ?", options: ["Utiliser des connecteurs temporels et maintenir la cohérence des temps", "Changer de temps à chaque paragraphe", "Répéter les dates", "Écrire toujours au présent"], answer: "Utiliser des connecteurs temporels et maintenir la cohérence des temps", explication: "Les connecteurs (ensuite, le lendemain, trois ans plus tard…) balisent le temps. La constance des temps verbaux évite la confusion." },
      { question: "Pour quoi sert une métaphore dans un texte ?", options: ["Créer une image forte en identifiant deux réalités sans outil de comparaison", "Raconter un événement passé", "Introduire un dialogue", "Résumer un paragraphe"], answer: "Créer une image forte en identifiant deux réalités sans outil de comparaison", explication: "Métaphore : 'La vie est un voyage' (pas de 'comme'). Plus forte que la comparaison, elle fusionne les deux réalités et frappe l'imagination." }
    ]
  },

  francais6Grammaire: {
    id: 'francais6Grammaire', nom: 'Grammaire', emoji: '📐', couleur: '#7c3aed',
    1: [
      { question: "Dans 'Le chat dort sur le canapé', quel est le sujet du verbe 'dort' ?", options: ["Le chat", "dort", "le canapé", "sur"], answer: "Le chat", explication: "Le sujet est le mot (ou groupe) qui fait l'action ou dont on parle. Astuce : pose la question 'Qui est-ce qui dort ?' → Le chat." },
      { question: "Quelle est la nature du mot 'rapide' dans 'un vélo rapide' ?", options: ["Un adjectif qualificatif", "Un nom", "Un verbe", "Un déterminant"], answer: "Un adjectif qualificatif", explication: "Un adjectif qualificatif donne une information sur un nom. Ici, 'rapide' qualifie le nom 'vélo'. Il s'accorde avec lui." },
      { question: "Quel est le déterminant dans 'une belle maison' ?", options: ["une", "belle", "maison", "une belle"], answer: "une", explication: "Le déterminant se place avant le nom pour l'introduire. 'Une' est un article indéfini féminin singulier qui introduit 'maison'." },
      { question: "Dans 'Les oiseaux chantent dans les arbres', quel est le verbe ?", options: ["chantent", "Les", "oiseaux", "arbres"], answer: "chantent", explication: "Le verbe exprime une action ou un état. 'Chantent' est l'action réalisée par les oiseaux. On le reconnaît car il se conjugue." },
      { question: "Quelle est la nature du mot 'dans' dans 'il joue dans le jardin' ?", options: ["Une préposition", "Un verbe", "Un adjectif", "Un nom"], answer: "Une préposition", explication: "Les prépositions (dans, sur, avec, de, pour, par…) relient des mots entre eux. Ici, 'dans' relie 'joue' à 'le jardin'." },
      { question: "Dans 'Marie mange une pomme', quel groupe est COD ?", options: ["une pomme", "Marie", "mange", "une"], answer: "une pomme", explication: "COD = Complément d'Objet Direct. Question : 'Marie mange QUOI ?' → une pomme. Il se place directement après le verbe, sans préposition." },
      { question: "Laquelle de ces phrases est à la forme négative ?", options: ["Il ne mange pas.", "Il mange une pizza.", "Il a mangé.", "Mange ta soupe !"], answer: "Il ne mange pas.", explication: "La forme négative encadre le verbe avec 'ne...pas', 'ne...plus', 'ne...jamais', 'ne...rien', etc." },
      { question: "Comment appelle-t-on les mots comme 'le', 'la', 'les', 'un', 'une', 'des' ?", options: ["Des déterminants", "Des pronoms", "Des adjectifs", "Des conjonctions"], answer: "Des déterminants", explication: "Les déterminants introduisent et précèdent le nom. Les articles (le, la, les, un, une, des) sont les déterminants les plus courants." }
    ],
    2: [
      { question: "Dans 'Paul offre un cadeau à sa sœur', quel est le COI ?", options: ["à sa sœur", "un cadeau", "Paul", "offre"], answer: "à sa sœur", explication: "COI = Complément d'Objet Indirect. Question : 'Paul offre À QUI ?' → à sa sœur. Il est toujours introduit par une préposition (à, de)." },
      { question: "Quelle phrase contient un attribut du sujet ?", options: ["Le ciel est bleu.", "Le chat mange.", "Paul court vite.", "Elle lit un livre."], answer: "Le ciel est bleu.", explication: "L'attribut du sujet suit un verbe d'état (être, paraître, sembler, devenir…) et qualifie le sujet. 'Bleu' est attribut de 'le ciel'." },
      { question: "Quelle est la proposition subordonnée dans 'Je sais que tu viendras' ?", options: ["que tu viendras", "Je sais", "Je", "tu viendras"], answer: "que tu viendras", explication: "La proposition subordonnée dépend de la principale. Introduite par 'que', elle ne peut pas exister seule : 'que tu viendras' n'a pas de sens seul." },
      { question: "Comment transformer 'Le chien mange l'os' à la voix passive ?", options: ["L'os est mangé par le chien.", "L'os mange le chien.", "Le chien est mangé.", "L'os a mangé le chien."], answer: "L'os est mangé par le chien.", explication: "Voix passive : le COD devient sujet, le verbe prend l'auxiliaire 'être' + participe passé accordé, l'ancien sujet devient complément d'agent ('par')." },
      { question: "Dans 'La voiture rouge roule vite', quelle est la fonction de 'rouge' ?", options: ["Épithète du nom 'voiture'", "Attribut du sujet", "COD", "Sujet"], answer: "Épithète du nom 'voiture'", explication: "Un adjectif est épithète quand il est placé directement à côté du nom (sans verbe entre les deux). Ici 'rouge' est collé à 'voiture'." },
      { question: "Quelle phrase contient une proposition subordonnée relative ?", options: ["Le livre que je lis est passionnant.", "Je sais que tu viendras.", "Il part parce qu'il est fatigué.", "Quand il pleut, je reste."], answer: "Le livre que je lis est passionnant.", explication: "La subordonnée relative est introduite par un pronom relatif (qui, que, dont, où…) et complète un nom. 'que je lis' complète 'le livre'." },
      { question: "Quelle est la nature et la fonction de 'dont' dans 'le film dont je parle' ?", options: ["Pronom relatif, COI de 'parle'", "Conjonction introduisant une subordonnée", "Adverbe, complément de lieu", "Déterminant, complément du nom"], answer: "Pronom relatif, COI de 'parle'", explication: "'Dont' est un pronom relatif qui représente 'de + le film'. 'Parler de quelque chose' → 'dont' est le COI du verbe 'parler'." },
      { question: "Comment appelle-t-on la proposition 'Il part' dans 'Il part parce qu'il est fatigué' ?", options: ["La proposition principale", "La proposition subordonnée", "La proposition indépendante", "La proposition relative"], answer: "La proposition principale", explication: "La principale peut exister seule et a un sens complet : 'Il part' fonctionne seul. La subordonnée 'parce qu'il est fatigué' en dépend." }
    ],
    3: [
      { question: "Quelle est la différence entre COD et COI ?", options: ["COD : sans préposition ; COI : avec 'à' ou 'de'", "COD est un verbe, COI un nom", "COD précède le sujet, COI suit le verbe", "Ils sont identiques"], answer: "COD : sans préposition ; COI : avec 'à' ou 'de'", explication: "COD : répond à 'quoi/qui' sans préposition ('mange une pomme'). COI : répond à 'à quoi/de quoi' avec préposition ('parle à Marie', 'se souvient de lui')." },
      { question: "Dans 'Il semble fatigué', quelle est la nature et fonction de 'fatigué' ?", options: ["Adjectif, attribut du sujet", "Verbe, COD", "Nom, sujet", "Adverbe, complément"], answer: "Adjectif, attribut du sujet", explication: "'Fatigué' est un adjectif qualificatif. Après le verbe d'état 'sembler', il est attribut du sujet 'Il'. Il s'accorde avec le sujet." },
      { question: "Comment analyse-t-on 'rapidement' dans 'Il court rapidement' ?", options: ["Adverbe de manière, complément circonstanciel de manière", "Adjectif, attribut du sujet", "Nom, COD", "Préposition, complément de lieu"], answer: "Adverbe de manière, complément circonstanciel de manière", explication: "'Rapidement' est un adverbe (invariable, souvent en -ment). Il précise la manière dont l'action se déroule. C'est un complément circonstanciel." },
      { question: "Dans 'Quand il fait beau, nous sortons', quelle est la nature de 'Quand il fait beau' ?", options: ["Subordonnée circonstancielle de temps", "Subordonnée relative", "Subordonnée complétive", "Proposition indépendante"], answer: "Subordonnée circonstancielle de temps", explication: "Introduite par 'quand', cette proposition indique à quel moment l'action principale se produit. C'est une circonstancielle de temps." },
      { question: "Dans 'Le professeur explique la leçon aux élèves', combien y a-t-il de compléments d'objet ?", options: ["2 : un COD et un COI", "1 : un COD seulement", "3 : deux COD et un COI", "0 : aucun complément"], answer: "2 : un COD et un COI", explication: "COD : 'la leçon' (explique quoi ?). COI : 'aux élèves' (explique à qui ?). Deux compléments essentiels liés au verbe 'expliquer'." },
      { question: "Quelle phrase est correctement transformée à la voix passive ?", options: ["La chanson a été écrite par Léa.", "La chanson écrit Léa.", "Léa a été écrite par la chanson.", "La chanson écrite Léa."], answer: "La chanson a été écrite par Léa.", explication: "Voix active : 'Léa a écrit la chanson.' → Voix passive : 'La chanson a été écrite par Léa.' Auxiliaire être + participe passé accordé." },
      { question: "Quelle est la fonction de 'parce qu'il est malade' dans 'Il reste parce qu'il est malade' ?", options: ["Subordonnée circonstancielle de cause", "Subordonnée relative", "Subordonnée complétive", "Principale"], answer: "Subordonnée circonstancielle de cause", explication: "Introduite par 'parce que', cette proposition explique la raison de l'action principale. C'est une circonstancielle de cause." },
      { question: "Dans 'Je veux que tu viennes', à quel mode est 'viennes' ?", options: ["Subjonctif présent", "Indicatif présent", "Conditionnel présent", "Impératif"], answer: "Subjonctif présent", explication: "'Vouloir que' est suivi du subjonctif. 'Viennes' est la conjugaison de 'venir' au subjonctif présent : que je vienne, que tu viennes…" }
    ]
  },

  francais6Conjugaison: {
    id: 'francais6Conjugaison', nom: 'Conjugaison', emoji: '🕰️', couleur: '#b45309',
    1: [
      { question: "Conjugue 'chanter' à la 1ère personne du singulier au présent.", options: ["je chante", "je chantes", "je chantez", "je chantons"], answer: "je chante", explication: "Les verbes en -er font 'je ...-e' au présent. Les terminaisons : -e, -es, -e, -ons, -ez, -ent." },
      { question: "À quel temps est conjugué 'il mangera' ?", options: ["Futur simple", "Présent", "Imparfait", "Passé composé"], answer: "Futur simple", explication: "La terminaison -ra à la 3ème pers. du singulier caractérise le futur simple. Futur de 'manger' : je mangerai, tu mangeras, il mangera…" },
      { question: "Conjugue 'être' à la 3ème personne du pluriel au présent.", options: ["ils sont", "ils êtes", "ils est", "ils seront"], answer: "ils sont", explication: "'Être' est irrégulier au présent : je suis, tu es, il est, nous sommes, vous êtes, ils sont." },
      { question: "À quel temps est conjugué 'elles jouaient' ?", options: ["Imparfait", "Présent", "Futur", "Passé composé"], answer: "Imparfait", explication: "La terminaison -aient (3ème pers. pluriel) caractérise l'imparfait. Imparfait de 'jouer' : je jouais, tu jouais, il jouait, nous jouions, vous jouiez, ils jouaient." },
      { question: "Quelle phrase contient un verbe au passé composé ?", options: ["Il a mangé une pomme.", "Il mangeait une pomme.", "Il mange une pomme.", "Il mangera une pomme."], answer: "Il a mangé une pomme.", explication: "Le passé composé = auxiliaire (avoir ou être) au présent + participe passé. Ici : 'a' (avoir, présent) + 'mangé' (participe passé)." },
      { question: "Conjugue 'avoir' à la 1ère personne du singulier au présent.", options: ["j'ai", "j'avoir", "j'as", "j'avons"], answer: "j'ai", explication: "'Avoir' est irrégulier : j'ai, tu as, il a, nous avons, vous avez, ils ont. À apprendre par cœur !" },
      { question: "Quelle est la terminaison de la 2ème personne du pluriel au présent pour les verbes en -er ?", options: ["-ez", "-ons", "-ent", "-es"], answer: "-ez", explication: "Au présent, les verbes en -er : je -e, tu -es, il/elle -e, nous -ons, vous -ez, ils/elles -ent." },
      { question: "Quel est l'infinitif du verbe dans 'nous finissons' ?", options: ["finir", "finissons", "finir", "fini"], answer: "finir", explication: "L'infinitif est la forme de base, non conjuguée. 'Nous finissons' est la conjugaison de 'finir' (2ème groupe) au présent." }
    ],
    2: [
      { question: "Quel auxiliaire utilise-t-on au passé composé pour le verbe 'partir' ?", options: ["être", "avoir", "aller", "faire"], answer: "être", explication: "Les verbes de mouvement et les verbes pronominaux utilisent 'être' au passé composé : il est parti, nous sommes arrivés, elle s'est levée." },
      { question: "Conjugue 'se lever' au passé composé — elle (féminin singulier).", options: ["elle s'est levée", "elle a levée", "elle est levée", "elle s'est levé"], answer: "elle s'est levée", explication: "Verbe pronominal → auxiliaire être. Le participe passé s'accorde avec le sujet féminin : levée (fém. sing.)." },
      { question: "À quel mode est conjugué 'Mange tes légumes !' ?", options: ["Impératif", "Indicatif", "Subjonctif", "Infinitif"], answer: "Impératif", explication: "L'impératif exprime un ordre, un conseil, une demande. Il n'a pas de sujet exprimé. Formes : mange ! (tu), mangeons ! (nous), mangez ! (vous)." },
      { question: "Conjugue 'aller' au futur simple à la 1ère personne du pluriel.", options: ["nous irons", "nous allons", "nous allerons", "nous allions"], answer: "nous irons", explication: "'Aller' a un radical irrégulier au futur : ir-. Futur : j'irai, tu iras, il ira, nous irons, vous irez, ils iront." },
      { question: "Quelle est la règle d'accord du participe passé avec 'avoir' ?", options: ["Il s'accorde avec le COD placé AVANT le verbe", "Il s'accorde toujours avec le sujet", "Il est toujours invariable", "Il s'accorde avec l'auxiliaire"], answer: "Il s'accorde avec le COD placé AVANT le verbe", explication: "Ex : 'Les fleurs qu'il a cueillies' → 'cueillies' s'accorde avec 'les fleurs' (COD fém. plur. placé avant). Si le COD est après : pas d'accord." },
      { question: "À quel temps/mode correspond 'qu'il soit' ?", options: ["Subjonctif présent", "Indicatif présent", "Impératif", "Futur simple"], answer: "Subjonctif présent", explication: "'Soit' est la conjugaison de 'être' au subjonctif présent, 3ème pers. sg. Le subjonctif suit souvent 'que' + verbe de volonté, doute, sentiment." },
      { question: "Conjugue 'venir' au passé composé, 3ème personne du pluriel masculin.", options: ["ils sont venus", "ils ont venus", "ils sont venu", "ils ont venu"], answer: "ils sont venus", explication: "'Venir' utilise l'auxiliaire 'être'. Participe passé 'venu' s'accorde avec le sujet masculin pluriel : 'venus'." },
      { question: "Complète : 'Il faut que tu ___ tes devoirs.' (faire)", options: ["fasses", "fais", "fera", "fait"], answer: "fasses", explication: "Après 'il faut que', on utilise le subjonctif. Subjonctif de 'faire' : que je fasse, que tu fasses, qu'il fasse, que nous fassions…" }
    ],
    3: [
      { question: "Quelle est la différence d'emploi entre passé composé et passé simple ?", options: ["PC : langue courante et parlée ; PS : récit littéraire écrit", "PC : actions très anciennes ; PS : actions récentes", "Ils s'emploient de la même façon", "PS : langue parlée ; PC : récit littéraire"], answer: "PC : langue courante et parlée ; PS : récit littéraire écrit", explication: "En français moderne, le passé simple s'emploie dans les textes littéraires. À l'oral et dans l'écrit courant, on utilise le passé composé." },
      { question: "Conjugue 'craindre' au passé simple, 3ème personne du pluriel.", options: ["ils craignirent", "ils craignèrent", "ils craindèrent", "ils craigniront"], answer: "ils craignirent", explication: "Les verbes en -indre font leur passé simple en -ignis, -ignis, -ignit, -ignîmes, -ignîtes, -ignirent. Craindre → ils craignirent." },
      { question: "Dans 'Si tu travaillais, tu réussirais', quels temps sont utilisés ?", options: ["Imparfait + conditionnel présent", "Présent + futur", "Passé composé + futur", "Subjonctif + conditionnel"], answer: "Imparfait + conditionnel présent", explication: "Hypothèse irréelle au présent : Si + imparfait → conditionnel présent. Ex : 'Si j'avais de l'argent (imp.), j'achèterais (cond.) une voiture.'" },
      { question: "À quoi sert le plus-que-parfait ?", options: ["Exprimer une action passée AVANT une autre action passée", "Exprimer une action future", "Exprimer un ordre", "Exprimer un souhait"], answer: "Exprimer une action passée AVANT une autre action passée", explication: "Le plus-que-parfait (avait mangé, était parti) = antériorité dans le passé. Ex : 'Il avait fini (PQP) quand je suis arrivé (PC).'" },
      { question: "Quel est le participe passé de 'résoudre' ?", options: ["résolu", "résout", "résolvé", "résoudé"], answer: "résolu", explication: "'Résoudre' → participe passé irrégulier : 'résolu'. Ex : 'Le problème est résolu.' À ne pas confondre avec 'résout' (3ème pers. présent)." },
      { question: "Conjugue 'recevoir' au subjonctif présent, 2ème personne du singulier.", options: ["que tu reçoives", "que tu reçois", "que tu recevras", "que tu reçoive"], answer: "que tu reçoives", explication: "'Recevoir' au subjonctif : que je reçoive, que tu reçoives, qu'il reçoive, que nous recevions, que vous receviez, qu'ils reçoivent." },
      { question: "Quelle est la différence entre 'il fit' et 'il a fait' ?", options: ["'il fit' = passé simple (littéraire) ; 'il a fait' = passé composé (courant)", "'il fit' = futur ; 'il a fait' = présent", "Ils sont identiques", "'il fit' est incorrect en français"], answer: "'il fit' = passé simple (littéraire) ; 'il a fait' = passé composé (courant)", explication: "'Fit' est le passé simple de 'faire' (3ème sg). Réservé à l'écrit littéraire. 'A fait' est le passé composé, utilisé dans la langue courante." },
      { question: "Conjugue 'savoir' au conditionnel présent, 1ère personne du singulier.", options: ["je saurais", "je savais", "je saurai", "je sache"], answer: "je saurais", explication: "Conditionnel présent de 'savoir' : je saurais, tu saurais, il saurait, nous saurions, vous sauriez, ils sauraient. Le radical est 'saur-'." }
    ]
  },

  francais6Orthographe: {
    id: 'francais6Orthographe', nom: 'Orthographe', emoji: '✅', couleur: '#dc2626',
    1: [
      { question: "Choisissez : 'Le professeur ___ expliqué la leçon.'", options: ["a", "à"], answer: "a", explication: "'a' = verbe avoir. Test : remplace par 'avait' → 'Le professeur avait expliqué' ✓. 'à' est une préposition (ne peut pas être remplacé par 'avait')." },
      { question: "Choisissez : 'Il va ___ l'école à pied.'", options: ["à", "a"], answer: "à", explication: "'à' est ici une préposition de lieu. Test : si on peut remplacer par 'avait', c'est le verbe 'a'. Ici 'avait l'école' ✗ → préposition 'à'." },
      { question: "Choisissez : '___ mange des fruits ici.'", options: ["On", "Ont"], answer: "On", explication: "'On' = pronom sujet (= il). Test : remplace par 'il' → 'Il mange des fruits' ✓. 'Ont' = verbe avoir 3ème pers. pluriel (ils ont)." },
      { question: "Choisissez : 'Les élèves ___ bien travaillé.'", options: ["ont", "on"], answer: "ont", explication: "'ont' = verbe avoir. Test : remplace par 'avaient' → 'Les élèves avaient bien travaillé' ✓. 'On' est un pronom sujet (remplaçable par 'il')." },
      { question: "Choisissez : 'Il prend ___ manteau.'", options: ["son", "sont"], answer: "son", explication: "'son' = déterminant possessif (son/sa/ses). Test : 'ils sont manteau' ✗ → c'est bien 'son'. 'Sont' = verbe être 3ème pers. pluriel." },
      { question: "Choisissez : 'Les oiseaux ___ dans les arbres.'", options: ["sont", "son"], answer: "sont", explication: "'sont' = verbe être. Test : remplace par 'étaient' → 'Les oiseaux étaient dans les arbres' ✓. 'Son' est un déterminant possessif." },
      { question: "Choisissez : 'Tu veux du thé ___ du café ?'", options: ["ou", "où"], answer: "ou", explication: "'ou' (sans accent) = choix (= ou bien). Test : 'thé ou bien café' ✓ → 'ou'. 'Où' (avec accent) indique un lieu." },
      { question: "Choisissez : 'Je ne sais pas ___ il est parti.'", options: ["où", "ou"], answer: "où", explication: "'où' indique un lieu ou une interrogation sur le lieu. Test : 'ou bien' ne fonctionnerait pas → 'où' avec accent." },
      { question: "Choisissez : 'Il ___ peigne chaque matin.'", options: ["se", "ce"], answer: "se", explication: "'se' est un pronom réfléchi (devant un verbe). 'ce' est un déterminant (ce livre) ou pronom (c'est). Devant 'peigne' (verbe) → 'se'." },
      { question: "Choisissez : 'Le ciel ___ nuageux aujourd'hui.'", options: ["est", "et"], answer: "est", explication: "'est' = verbe être (3ème pers. sing.). Test : remplace par 'était' → 'Le ciel était nuageux' ✓. 'Et' est une conjonction de coordination (= de plus, aussi)." },
      { question: "Choisissez : 'J'ai pris mon sac ___ mon manteau.'", options: ["et", "est"], answer: "et", explication: "'et' est une conjonction (= de plus). Test : si on peut remplacer par 'était', c'est 'est'. Ici 'était mon manteau' ✗ → conjonction 'et'." },
      { question: "Quel est le pluriel de 'cheval' ?", options: ["chevaux", "chevals", "chevales", "chevau"], answer: "chevaux", explication: "Certains noms en -al font leur pluriel en -aux : cheval → chevaux, journal → journaux, animal → animaux. Exception : bal → bals, festival → festivals." },
      { question: "Quel est le pluriel de 'bateau' ?", options: ["bateaux", "bateaus", "bateau", "bateaux"], answer: "bateaux", explication: "Les noms en -eau font leur pluriel en -eaux : bateau → bateaux, gâteau → gâteaux, chapeau → chapeaux. On ajoute -x, pas -s." },
      { question: "Quel est le féminin de 'acteur' ?", options: ["actrice", "acteuse", "acteure", "acteurse"], answer: "actrice", explication: "Le féminin de 'acteur' est 'actrice'. Certains noms en -eur font leur féminin en -rice : acteur/actrice, directeur/directrice, inspecteur/inspectrice." },
      { question: "Choisissez : 'Je ___ lever tôt demain.' (peu/peux/peut)", options: ["peux", "peut", "peu"], answer: "peux", explication: "'peux' = verbe pouvoir (1ère ou 2ème pers. sing.). 'peut' = pouvoir 3ème pers. sing. 'peu' = adverbe (= pas beaucoup). Ici, sujet 'je' → 'peux'." },
      { question: "Choisissez : 'Il ___ venir avec nous.' (peu/peux/peut)", options: ["peut", "peux", "peu"], answer: "peut", explication: "'peut' = verbe pouvoir 3ème pers. sing. Sujet 'il' → 'peut'. 'Peux' s'emploie avec 'je' ou 'tu'. 'Peu' est un adverbe (quantité)." },
      { question: "Choisissez : 'Elle mange ___ (peu/peux/peut).'", options: ["peu", "peux", "peut"], answer: "peu", explication: "'peu' est un adverbe de quantité (= pas beaucoup). Ici il ne s'agit pas du verbe pouvoir → 'peu'. Test : on ne peut pas dire 'elle mange pouvoir'." },
      { question: "Quel est le féminin de 'beau' ?", options: ["belle", "beau", "beaux", "beaute"], answer: "belle", explication: "Le féminin de 'beau' est 'belle'. Formes : beau (masc. sg), bel (devant voyelle), belle (fém.), beaux (masc. pl), belles (fém. pl)." },
      { question: "Choisissez : '___ chien est gentil.' (ce/se)", options: ["Ce", "Se"], answer: "Ce", explication: "'Ce' = déterminant démonstratif devant un nom (ce chien, cet enfant, cette maison). 'Se' = pronom réfléchi devant un verbe (se lever, se laver)." },
      { question: "Choisissez : 'Elle ___ coiffe devant le miroir.' (ce/se)", options: ["se", "ce"], answer: "se", explication: "'se' = pronom réfléchi devant un verbe (se coiffer, se regarder). 'ce' = déterminant ou pronom devant un nom ou 'c'est'. Ici devant 'coiffe' (verbe) → 'se'." },
      { question: "Quel est le pluriel de 'œil' ?", options: ["yeux", "œils", "œilles", "yeuils"], answer: "yeux", explication: "'Œil' a un pluriel irrégulier : 'yeux'. C'est l'un des pluriels les plus irréguliers du français, à apprendre par cœur." },
      { question: "Choisissez : 'Mes ___ sont dans mon sac.' (affaires)", options: ["affaires", "affaire"], answer: "affaires", explication: "Le mot 'affaires' (au sens de 'effets personnels') s'emploie généralement au pluriel : 'mes affaires, tes affaires'. Ici le contexte (mes) confirme le pluriel." },
      { question: "Quel est le féminin de 'chanteur' ?", options: ["chanteuse", "chanteure", "chantrice", "chanteresse"], answer: "chanteuse", explication: "Le féminin de 'chanteur' est 'chanteuse'. Beaucoup de noms en -eur font leur féminin en -euse : chanteur/chanteuse, danseur/danseuse, nageur/nageuse." },
      { question: "Choisissez : 'Il habite ___ (là/la/l'a).' ", options: ["là", "la", "l'a"], answer: "là", explication: "'là' (avec accent) = adverbe de lieu (ici, là, là-bas). 'la' = article ou pronom féminin. 'l'a' = le/la + avoir (il l'a vu). Un lieu → 'là'." }
    ],
    2: [
      { question: "Accordez l'adjectif : 'Elle a acheté des robes ___ (rouge).'", options: ["rouges", "rouge", "rougis", "rougeaux"], answer: "rouges", explication: "L'adjectif s'accorde en genre et en nombre avec le nom. 'Robes' = féminin pluriel → 'rouges'. On ajoute -s à l'adjectif au pluriel." },
      { question: "Choisissez : 'Les filles sont ___ au cinéma.' (aller)", options: ["allées", "allés", "allé", "allée"], answer: "allées", explication: "Avec l'auxiliaire 'être', le participe passé s'accorde avec le sujet. 'Les filles' = féminin pluriel → 'allées' (-ées)." },
      { question: "Quelle phrase contient une erreur d'accord sujet-verbe ?", options: ["Les chats dort.", "Le chat dort.", "Les chats dorment.", "Le chat a dormi."], answer: "Les chats dort.", explication: "'Les chats' = 3ème pers. pluriel → il faut 'dorment'. 'Dort' est la forme 3ème pers. singulier." },
      { question: "Accordez : 'Des fleurs ___ (beau) ornaient la table.'", options: ["belles", "beaux", "beau", "belle"], answer: "belles", explication: "'Fleurs' = féminin pluriel → beau → belle → belles. 'Beaux' est le pluriel masculin. 'Belle' est le féminin singulier." },
      { question: "Choisissez : '___ devoirs sont faits.' (leur/leurs)", options: ["Leurs", "Leur"], answer: "Leurs", explication: "'Leurs' (avec -s) précède un nom pluriel. 'Devoirs' est pluriel → 'leurs devoirs'. 'Leur' (sans -s) précède un nom singulier." },
      { question: "Accordez l'adjectif : 'Les garçons sont ___ (fatigué).'", options: ["fatigués", "fatiguée", "fatigué", "fatiguées"], answer: "fatigués", explication: "'Les garçons' = masculin pluriel → 'fatigués' (-és). Règle : adjectif attribut s'accorde avec le sujet en genre et nombre." },
      { question: "Choisissez : 'C'___ une belle journée.' (est/et)", options: ["est", "et"], answer: "est", explication: "'C'est' = 'cela est'. 'est' = verbe être. Test : remplace par 'était' → 'C'était une belle journée' ✓. 'Et' est une conjonction, pas un verbe." },
      { question: "Accordez : 'La porte ___ (ouvert) depuis ce matin.'", options: ["ouverte", "ouvert", "ouverts", "ouvertes"], answer: "ouverte", explication: "'La porte' = féminin singulier. Attribut du sujet → accord : 'ouverte' (fém. sing.). Le -e final du féminin est très souvent la seule différence." },
      { question: "Quelle phrase est correctement accordée ?", options: ["Les vieilles maisons sont belles.", "Les vieilles maison sont belles.", "Les vieil maisons sont belles.", "Les vieilles maisons sont beau."], answer: "Les vieilles maisons sont belles.", explication: "Tous les accords : vieilles (fém. pl), maisons (fém. pl), belles (fém. pl, attribut du sujet). Les autres options contiennent des erreurs d'accord." },
      { question: "Choisissez : 'Ma mère ___ acheté un cadeau.' (m'a/ma)", options: ["m'a", "ma"], answer: "m'a", explication: "'m'a' = me + a (verbe avoir). Test : remplace par 'm'avait' → 'ma mère m'avait acheté' ✓. 'Ma' est un déterminant possessif (ma mère, ma maison)." },
      { question: "Accordez : 'Ces enfants sont ___ (intelligent).'", options: ["intelligents", "intelligentes", "intelligent", "intelligente"], answer: "intelligents", explication: "'Ces enfants' peut être masc. ou fém., mais sans indication contraire, on accorde au masculin pluriel : 'intelligents'. Si c'étaient des filles : 'intelligentes'." },
      { question: "Choisissez : '___ sacs sont lourds.' (leurs/leur)", options: ["Leurs", "Leur"], answer: "Leurs", explication: "'Leurs' + nom pluriel. 'Sacs' est pluriel → 'leurs sacs'. Moyen mémo : si on peut mettre 'leur propre', c'est sans -s ; si 'leurs propres' → avec -s." },
      { question: "Quel participe passé convient ? 'Elle a ___ ses clés.' (perdre)", options: ["perdu", "perdue", "perdus", "perdues"], answer: "perdu", explication: "Avec 'avoir', le participe s'accorde uniquement avec le COD placé AVANT le verbe. Ici le COD 'ses clés' est APRÈS → pas d'accord : 'perdu'." },
      { question: "Accordez : 'Des enfants ___ (bruyant) jouaient dans la cour.'", options: ["bruyants", "bruyante", "bruyant", "bruyantes"], answer: "bruyants", explication: "'Des enfants' est masculin pluriel (sans indication contraire). L'adjectif épithète s'accorde : bruyant → bruyants (+s au pluriel masc.)." },
      { question: "Choisissez : 'Tu ___ venu(e) hier ?' (t'es/tes)", options: ["t'es", "tes"], answer: "t'es", explication: "'t'es' = tu + es (verbe être). 'Tu t'es levé' = tu es levé (forme pronominale). 'Tes' est un déterminant possessif (tes livres, tes amis)." },
      { question: "Choisissez la bonne orthographe : 'Il ___ midi.' (est/et)", options: ["est", "et"], answer: "est", explication: "'Il est midi' → 'est' = verbe être. Test : 'Il était midi' ✓. 'Et' relie deux éléments (pain et beurre). Ici on a un seul élément → 'est'." },
      { question: "Accordez : 'La ___ (nouveau) élève est timide.'", options: ["nouvelle", "nouveau", "nouvelles", "nouvel"], answer: "nouvelle", explication: "'élève' féminin singulier ici → 'nouvelle'. Formes : nouveau (masc. sg), nouvel (devant voyelle masc.), nouvelle (fém.), nouveaux (masc. pl), nouvelles (fém. pl)." },
      { question: "Choisissez : 'Les enfants ___ (s'est/se sont) couchés tôt.'", options: ["se sont", "s'est"], answer: "se sont", explication: "'Les enfants' = pluriel → auxiliaire être au pluriel : 'se sont'. 'S'est' (= se + est) s'emploie avec un sujet singulier (il s'est couché)." },
      { question: "Quelle est la bonne orthographe du pluriel ? 'un genou / des ___'", options: ["genoux", "genous", "genouz", "genoux"], answer: "genoux", explication: "Les noms en -ou prennent généralement -s au pluriel, mais 7 exceptions prennent -x : bijou, caillou, chou, genou, hibou, joujou, pou → genou/genoux." },
      { question: "Accordez : 'Elles ___ (partir) en vacances hier.' (être)", options: ["sont parties", "ont parties", "sont partis", "ont partis"], answer: "sont parties", explication: "'Partir' se conjugue avec 'être'. Sujet féminin pluriel 'elles' → participe passé féminin pluriel : 'parties'. Auxiliaire au pluriel → 'sont'." },
      { question: "Choisissez : 'Il y ___ beaucoup de monde.' (a/à)", options: ["a", "à"], answer: "a", explication: "'Il y a' = expression figée avec le verbe avoir (= il existe). Test : 'il y avait beaucoup de monde' ✓. 'À' est une préposition, pas le verbe." },
      { question: "Accordez : '___ (quel) heure est-il ?'", options: ["Quelle", "Quel", "Quels", "Quelles"], answer: "Quelle", explication: "'Quel' s'accorde avec le nom qui suit. 'Heure' = féminin singulier → 'quelle'. Formes : quel (masc. sg), quelle (fém. sg), quels (masc. pl), quelles (fém. pl)." },
      { question: "Choisissez : 'Les résultats ___ bons cette année.' (sont/son)", options: ["sont", "son"], answer: "sont", explication: "'sont' = verbe être (3ème pers. pluriel). Test : remplace par 'étaient' → 'Les résultats étaient bons' ✓. 'Son' est un déterminant possessif." },
      { question: "Accordez : 'Une ___ (beau) histoire.' ", options: ["belle", "beau", "bel", "beaux"], answer: "belle", explication: "'Histoire' = féminin singulier → 'belle'. 'Beau' devant un nom masculin commençant par une consonne (un beau garçon). 'Bel' devant une voyelle masc. (un bel homme)." }
    ],
    3: [
      { question: "Choisissez : 'La robe ___ il parle est magnifique.' (dont/d'ont)", options: ["dont", "d'ont"], answer: "dont", explication: "'Dont' est un pronom relatif invariable. 'D'ont' n'existe pas. 'Dont' = de + lequel/laquelle : la robe de laquelle il parle → dont il parle." },
      { question: "Accordez le participe passé : 'Les lettres que j'ai ___ (écrire).'", options: ["écrites", "écrit", "écrits", "écrite"], answer: "écrites", explication: "Le COD 'que' (= les lettres, fém. plur.) est AVANT le verbe avoir → accord du participe : 'écrites' (fém. plur.)." },
      { question: "Quelle phrase utilise correctement 'quel/quelle/qu'elle' ?", options: ["Quelle belle journée !", "Qu'elle belle journée !", "Quel belle journée !", "Quelles belle journée !"], answer: "Quelle belle journée !", explication: "'Quel(le)' s'accorde avec le nom. 'Journée' = féminin singulier → 'quelle'. 'Qu'elle' = 'que + elle', sens totalement différent." },
      { question: "Accordez : '___ (tout) les filles sont venues.'", options: ["Toutes", "Tout", "Tous", "Toute"], answer: "Toutes", explication: "'Tout' déterminant s'accorde. 'Les filles' = féminin pluriel → 'toutes'. Formes : tout (m.sg), toute (f.sg), tous (m.pl), toutes (f.pl)." },
      { question: "Quelle phrase est correctement orthographiée ?", options: ["Elle s'est rendu compte de son erreur.", "Elle s'est rendue compte de son erreur.", "Elle ce sont rendu compte.", "Elle s'est rendu comptes."], answer: "Elle s'est rendu compte de son erreur.", explication: "'Se rendre compte' est une locution figée : 'rendu' est invariable car le COD n'est pas avant le verbe." },
      { question: "Accordez le participe passé : 'Les filles que j'ai ___ (rencontrer).'", options: ["rencontrées", "rencontré", "rencontrés", "rencontrée"], answer: "rencontrées", explication: "COD 'que' (= les filles, fém. plur.) est AVANT 'ai' → accord : 'rencontrées' (fém. plur. = -ées)." },
      { question: "Choisissez : 'Il ___ est allé, ___ il est revenu.' (y… puis)", options: ["y, puis", "i, puit", "y, puit", "i, puis"], answer: "y, puis", explication: "'y' = pronom de lieu (= là-bas). 'puis' = adverbe de temps (= ensuite). 'Puit' et 'i' n'existent pas comme adverbes." },
      { question: "Choisissez : 'Vingt et ___ élèves ont réussi.' (un/une)", options: ["un", "une"], answer: "un", explication: "On accorde 'un/une' avec le nom. 'Élèves' est masculin (ou peut être des deux genres, mais 'élève' utilisé sans article est masc. par défaut) → 'un'." },
      { question: "Accordez : 'Elle ___ (se lever) très tôt ce matin.'", options: ["s'est levée", "s'est levé", "c'est levée", "s'est leva"], answer: "s'est levée", explication: "'Se lever' → auxiliaire être. Sujet 'elle' = féminin singulier → participe passé féminin : 'levée'. 'C'est' est une autre construction." },
      { question: "Choisissez : '___ (c'est/s'est) une bonne idée.'", options: ["C'est", "S'est"], answer: "C'est", explication: "'C'est' = 'cela est' (présentatif). 'S'est' = pronom 'se' + verbe être (il s'est blessé). Ici on présente une idée → présentatif 'c'est'." },
      { question: "Accordez : 'Les devoirs ___ (fini) depuis longtemps.'", options: ["finis", "fini", "finies", "finie"], answer: "finis", explication: "'Les devoirs' = masculin pluriel. Attribut du sujet : 'finis' (masc. pl). Participe passé utilisé comme adjectif → accord avec le sujet." },
      { question: "Choisissez : 'Ils ___ (ce/se) sont battus pour rien.'", options: ["se", "ce"], answer: "se", explication: "'Se' = pronom réfléchi devant un verbe (se battre). 'Ce' = déterminant démonstratif ou pronom devant un nom ou 'c'est'. Ici devant 'sont battus' (verbe) → 'se'." },
      { question: "Accordez : 'La solution ___ (proposé) par le groupe est bonne.'", options: ["proposée", "proposé", "proposés", "proposées"], answer: "proposée", explication: "'La solution' = féminin singulier. Le participe passé fonctionne ici comme un adjectif épithète → accord : 'proposée' (-ée, fém. sing.)." },
      { question: "Choisissez la bonne orthographe : 'Il ___ allé au cinéma.' (s'est/c'est)", options: ["s'est", "c'est"], answer: "s'est", explication: "'Il s'est allé' — attention, ici 's'est' n'est pas correct avec 'aller' (on dit 'il est allé'). Mais dans 'il s'est blessé', 's'est' = se + est (verbe être). Dans ce contexte, c'est la forme pronominale → 's'est'." },
      { question: "Choisissez : '___ (quand/qu'en) il pleut, je lis.'", options: ["Quand", "Qu'en"], answer: "Quand", explication: "'Quand' = conjonction de temps (= lorsque). 'Qu'en' = 'que + en' (ex : qu'en penses-tu ?). Ici on introduit une condition temporelle → 'quand'." },
      { question: "Accordez : 'Les résultats ___ (obtenu) sont excellents.'", options: ["obtenus", "obtenu", "obtenue", "obtenues"], answer: "obtenus", explication: "'Les résultats' = masculin pluriel. Participe passé utilisé comme adjectif épithète → accord : 'obtenus' (masc. pl = -us)." },
      { question: "Quelle orthographe est correcte pour le pluriel de 'travail' ?", options: ["travaux", "travails", "travaulx", "travaix"], answer: "travaux", explication: "'Travail' fait son pluriel en 'travaux' (comme vitrail/vitraux, corail/coraux). Ce sont des pluriels irréguliers à apprendre par cœur." },
      { question: "Accordez : 'La décision ___ (pris) hier est annulée.'", options: ["prise", "pris", "prises", "prit"], answer: "prise", explication: "'La décision' = féminin singulier. 'Pris' comme adjectif épithète → accord : 'prise' (-e au féminin). Ne pas confondre avec 'il prit' (passé simple)." },
      { question: "Choisissez : 'Elle ___ (leur/leurs) a écrit une lettre.'", options: ["leur", "leurs"], answer: "leur", explication: "Pronom COI 'leur' (= à eux/elles) est invariable : il ne prend jamais de -s. 'Leurs' (avec -s) est uniquement le déterminant possessif devant un nom pluriel." },
      { question: "Accordez : 'Même ___ professeurs se trompent parfois.' (les/ses)", options: ["les", "ses"], answer: "les", explication: "Ici 'même' a le sens de 'y compris' → il précède l'article défini 'les'. 'Ses' serait un déterminant possessif, hors contexte." },
      { question: "Choisissez : 'Les fleurs ___ il m'a offert(es) sont fanées.' (que/qui)", options: ["qu'", "qui"], answer: "qu'", explication: "'Que/qu'' = pronom relatif COD (on peut retrouver le COD). 'Qui' = pronom relatif sujet. Ici 'les fleurs' est COD de 'offert' → 'qu'' (= que il m'a offert)." },
      { question: "Accordez : 'Les robes ___ (acheté) sont magnifiques.' (participe)", options: ["achetées", "acheté", "achetés", "achetée"], answer: "achetées", explication: "'Les robes' = féminin pluriel. Participe passé adjectif épithète → accord : 'achetées' (-ées, fém. plur.)." },
      { question: "Choisissez : 'Je me demande ___ il pense.' (ce que/ce qu')", options: ["ce qu'", "ce que"], answer: "ce qu'", explication: "'Ce que/ce qu'' introduit une proposition. Devant 'il' (voyelle), on élide : 'ce qu'il pense'. 'Ce que' s'emploie devant une consonne : 'ce que tu veux'." },
      { question: "Accordez : '___ (tout) à fait, tu as raison.'", options: ["Tout", "Toute", "Tous", "Toutes"], answer: "Tout", explication: "'Tout à fait' est une locution adverbiale figée : 'tout' est invariable ici. On ne dit pas 'toute à fait'. De même : 'tout de suite', 'tout d'abord'." }
    ]
  },

  francais6Vocabulaire: {
    id: 'francais6Vocabulaire', nom: 'Vocabulaire', emoji: '📚', couleur: '#0369a1',
    1: [
      { question: "Quel est le synonyme de 'heureux' ?", options: ["joyeux", "triste", "fatigué", "énervé"], answer: "joyeux", explication: "Un synonyme est un mot de sens proche. 'Heureux', 'joyeux', 'content', 'ravi', 'satisfait' sont synonymes. Attention : ils ne s'emploient pas toujours dans les mêmes contextes." },
      { question: "Quel est l'antonyme (contraire) de 'rapide' ?", options: ["lent", "vite", "rapidos", "prompt"], answer: "lent", explication: "Un antonyme est un mot de sens contraire. Antonymes de 'rapide' : lent, lentement (adverbe). Ne pas confondre antonyme (contraire) et synonyme (proche)." },
      { question: "Quel préfixe signifie 'contre' ou 'en face de' ?", options: ["anti-", "pré-", "re-", "sur-"], answer: "anti-", explication: "'Anti-' signifie 'contre' : antidote (contre le poison), antibiotique (contre les bactéries), antisocial. 'Pré-' = avant, 're-' = à nouveau, 'sur-' = au-dessus." },
      { question: "Que signifie le préfixe 'pré-' dans 'préhistoire' ?", options: ["Avant", "Après", "Contre", "En dehors de"], answer: "Avant", explication: "'Pré-' signifie 'avant' : préhistoire (avant l'histoire écrite), préavis, préfixe (ce qui est fixé avant). Contraire : 'post-' (après)." },
      { question: "Quel est le sens figuré de 'il a un cœur de pierre' ?", options: ["Il est insensible et sans pitié", "Il a une maladie cardiaque", "Il est très courageux", "Il aime les pierres précieuses"], answer: "Il est insensible et sans pitié", explication: "Le sens figuré est un sens imagé, non littéral. 'Cœur de pierre' = cœur dur, sans émotions. Au sens propre, 'pierre' est un matériau minéral." },
      { question: "Trouvez un mot de la même famille que 'jardin'.", options: ["jardinier", "jarre", "jarden", "gardin"], answer: "jardinier", explication: "La famille d'un mot regroupe les mots formés sur la même racine. Famille de 'jardin' : jardinier, jardinage, jardiner, jardinet." },
      { question: "Quel suffixe permet de former un nom de métier à partir d'un verbe ?", options: ["-eur / -eur", "-ment", "-able", "-tion"], answer: "-eur / -eur", explication: "Le suffixe '-eur' forme des noms de métier ou d'agent : chant-eur, nag-eur, danc-eur, programm-eur. '-tion' forme des noms d'action, '-ment' aussi." },
      { question: "Dans 'il pleut des cordes', quel est le sens ?", options: ["Il pleut très fort", "Il y a des cordes partout", "Le temps est nuageux", "Il fait froid"], answer: "Il pleut très fort", explication: "C'est une expression idiomatique (sens figuré) : 'pleuvoir des cordes' = pleuvoir très abondamment. Au sens propre, 'cordes' = fils tressés." }
    ],
    2: [
      { question: "Identifiez le champ lexical dominant : 'épée, bouclier, bataille, chevalier, armure, conquête'.", options: ["La guerre et la chevalerie", "La cuisine", "La nature", "La musique"], answer: "La guerre et la chevalerie", explication: "Tous ces mots appartiennent au domaine de la guerre médiévale et de la chevalerie. C'est donc le champ lexical dominant de cette liste." },
      { question: "Quel est le sens du préfixe 'inter-' dans 'international' ?", options: ["Entre, parmi", "Contre", "Au-dessus", "À nouveau"], answer: "Entre, parmi", explication: "'Inter-' = entre, parmi : international (entre nations), interdire (mettre une loi entre), interclasse (entre les classes). À ne pas confondre avec 'intra-' (à l'intérieur)." },
      { question: "Quel suffixe donne un sens 'qui peut être' (possibilité) ?", options: ["-able / -ible", "-eur", "-tion", "-iste"], answer: "-able / -ible", explication: "'-able'/'-ible' = qui peut être : lisible (qui peut être lu), mangeable (qui peut être mangé), invisible (qui ne peut pas être vu)." },
      { question: "Quelle phrase utilise 'brillant' au sens figuré ?", options: ["C'est un élève brillant.", "Le soleil brille dans le ciel.", "Cette étoile est brillante.", "Le métal est brillant."], answer: "C'est un élève brillant.", explication: "Au sens figuré, 'brillant' qualifie quelqu'un d'intelligent et talentueux. Aux autres exemples, 'briller/brillant' est au sens propre (émettre de la lumière)." },
      { question: "Que signifie 'dénouer' si l'on connaît le préfixe 'dé-' ?", options: ["Défaire un nœud", "Faire un nœud", "Attacher à nouveau", "Couper un fil"], answer: "Défaire un nœud", explication: "'Dé-' = action inverse : dénouer (défaire le nœud), décoller (enlever ce qui est collé), découdre (défaire ce qui est cousu)." },
      { question: "Quel est l'antonyme de 'généreux' ?", options: ["avare", "gentil", "courageux", "honnête"], answer: "avare", explication: "'Avare' (qui garde tout pour soi) est l'antonyme de 'généreux' (qui donne facilement). 'Gentil' et 'honnête' sont des qualités différentes." },
      { question: "Quelle est la définition d'un mot 'polysémique' ?", options: ["Un mot qui a plusieurs sens", "Un mot qui n'a qu'un seul sens", "Un mot emprunté à une autre langue", "Un mot ancien qui n'est plus utilisé"], answer: "Un mot qui a plusieurs sens", explication: "'Polysémique' vient de 'poly' (plusieurs) + 'sème' (sens). Ex : 'vol' = action de voler (avion) OU action de dérober. C'est le contexte qui précise le sens." },
      { question: "Trouvez le mot de la même famille qui désigne l'action : 'lecture'.", options: ["lire", "lecteur", "lisible", "illisible"], answer: "lire", explication: "'Lire' est le verbe de la famille de 'lecture'. La famille comprend : lire, lecture, lecteur, lisible, relire, illisible, liseur." }
    ],
    3: [
      { question: "Qu'est-ce qu'un euphémisme ?", options: ["Une façon adoucie de dire quelque chose de difficile", "Une exagération pour impressionner", "Un mot de sens contraire", "Une comparaison avec 'comme'"], answer: "Une façon adoucie de dire quelque chose de difficile", explication: "L'euphémisme atténue une réalité dure. Ex : 'il nous a quittés' pour 'il est mort'. Contraire : la litote (dire moins pour suggérer plus) et l'hyperbole (exagérer)." },
      { question: "Que signifie 'péjoratif' ?", options: ["Qui donne un sens négatif ou dévalorisé", "Qui donne un sens positif", "Qui appartient à plusieurs langues", "Qui est inventé par l'auteur"], answer: "Qui donne un sens négatif ou dévalorisé", explication: "Un mot péjoratif a une connotation négative. Ex : 'gamin' (péjoratif de 'enfant'), 'bonhomme' (péjoratif de 'homme'). Contraire : mélioratif (positif)." },
      { question: "Quelle est la différence entre sens dénoté et sens connoté ?", options: ["Dénoté : sens objectif du dictionnaire ; Connoté : sens subjectif et affectif", "Dénoté : sens figuré ; Connoté : sens propre", "Ils sont identiques", "Dénoté : sens négatif ; Connoté : sens positif"], answer: "Dénoté : sens objectif du dictionnaire ; Connoté : sens subjectif et affectif", explication: "Le sens dénoté = définition neutre et objective. Le sens connoté = ce que le mot évoque selon le contexte et la culture. Ex : 'rose' (fleur) / 'rose' (romantisme, féminité)." },
      { question: "Qu'est-ce qu'un mot 'générique' ?", options: ["Un mot qui désigne une catégorie générale", "Un mot précis et spécifique", "Un mot d'une autre langue", "Un mot inventé"], answer: "Un mot qui désigne une catégorie générale", explication: "'Animal' est générique par rapport à 'chien'. 'Arbre' est générique par rapport à 'chêne'. Le générique englobe les mots spécifiques (hyponymes)." },
      { question: "Qu'est-ce qu'une périphrase ?", options: ["Un groupe de mots qui remplace un seul mot", "Un mot avec un préfixe", "Un antonyme renforcé", "Un synonyme exact"], answer: "Un groupe de mots qui remplace un seul mot", explication: "La périphrase exprime en plusieurs mots ce qu'on pourrait dire en un seul. Ex : 'l'astre du jour' pour 'le soleil', 'le roi des animaux' pour 'le lion'." },
      { question: "Le préfixe 'homo-' signifie…", options: ["Même, semblable", "Contre", "Au-delà", "Sans"], answer: "Même, semblable", explication: "'Homo-' = même : homonyme (même nom), homophone (même son), homogène (même nature). Ne pas confondre avec 'hétéro-' (différent)." },
      { question: "Qu'est-ce qu'une locution idiomatique ?", options: ["Une expression dont le sens est différent du sens des mots pris séparément", "Un mot composé de deux noms", "Un verbe pronominal", "Un mot d'origine latine"], answer: "Une expression dont le sens est différent du sens des mots pris séparément", explication: "Ex : 'casser les pieds' = ennuyer (pas réellement casser des pieds), 'avoir le cafard' = être triste. Le sens global ≠ somme des sens des mots." },
      { question: "Quel est l'intrus dans ce champ lexical de la mer : 'vague, marée, tempête, sommet, naufrage' ?", options: ["sommet", "vague", "marée", "naufrage"], answer: "sommet", explication: "'Sommet' appartient au champ lexical de la montagne, pas de la mer. Les autres mots (vague, marée, tempête, naufrage) sont bien liés à la mer." }
    ]
  },

  francais6Dictee: {
    id: 'francais6Dictee', nom: 'Dictée', emoji: '🖊️', couleur: '#0f766e',
    1: [
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Le chat dort sur le canapé.", answer: "le chat dort sur le canapé", options: [], explication: "La phrase correcte était : « Le chat dort sur le canapé. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "La fille mange une pomme rouge.", answer: "la fille mange une pomme rouge", options: [], explication: "La phrase correcte était : « La fille mange une pomme rouge. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Le soleil brille dans le ciel bleu.", answer: "le soleil brille dans le ciel bleu", options: [], explication: "La phrase correcte était : « Le soleil brille dans le ciel bleu. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Les enfants jouent dans le jardin.", answer: "les enfants jouent dans le jardin", options: [], explication: "La phrase correcte était : « Les enfants jouent dans le jardin. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Mon chien aime courir dans la forêt.", answer: "mon chien aime courir dans la forêt", options: [], explication: "La phrase correcte était : « Mon chien aime courir dans la forêt. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "La maîtresse écrit au tableau noir.", answer: "la maîtresse écrit au tableau noir", options: [], explication: "La phrase correcte était : « La maîtresse écrit au tableau noir. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Le petit garçon lit un livre.", answer: "le petit garçon lit un livre", options: [], explication: "La phrase correcte était : « Le petit garçon lit un livre. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Les oiseaux chantent dans les arbres.", answer: "les oiseaux chantent dans les arbres", options: [], explication: "La phrase correcte était : « Les oiseaux chantent dans les arbres. »" }
    ],
    2: [
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Le renard roux traversa la forêt en silence.", answer: "le renard roux traversa la forêt en silence", options: [], explication: "La phrase correcte était : « Le renard roux traversa la forêt en silence. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Hier, nous avons mangé une délicieuse tarte aux pommes.", answer: "hier nous avons mangé une délicieuse tarte aux pommes", options: [], explication: "La phrase correcte était : « Hier, nous avons mangé une délicieuse tarte aux pommes. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Les élèves travaillent sérieusement pendant la récréation.", answer: "les élèves travaillent sérieusement pendant la récréation", options: [], explication: "La phrase correcte était : « Les élèves travaillent sérieusement pendant la récréation. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Ma sœur et moi aimons regarder les étoiles.", answer: "ma sœur et moi aimons regarder les étoiles", options: [], explication: "La phrase correcte était : « Ma sœur et moi aimons regarder les étoiles. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Le vieux château se dressait au sommet de la colline.", answer: "le vieux château se dressait au sommet de la colline", options: [], explication: "La phrase correcte était : « Le vieux château se dressait au sommet de la colline. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Elle a trouvé un beau bouquet de fleurs dans le pré.", answer: "elle a trouvé un beau bouquet de fleurs dans le pré", options: [], explication: "La phrase correcte était : « Elle a trouvé un beau bouquet de fleurs dans le pré. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Les marchands vendent leurs légumes sur la place du village.", answer: "les marchands vendent leurs légumes sur la place du village", options: [], explication: "La phrase correcte était : « Les marchands vendent leurs légumes sur la place du village. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Il pleuvait fort quand nous sommes sortis de l'école.", answer: "il pleuvait fort quand nous sommes sortis de l'école", options: [], explication: "La phrase correcte était : « Il pleuvait fort quand nous sommes sortis de l'école. »" }
    ],
    3: [
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Les chevaliers courageux défendaient le royaume contre les envahisseurs.", answer: "les chevaliers courageux défendaient le royaume contre les envahisseurs", options: [], explication: "La phrase correcte était : « Les chevaliers courageux défendaient le royaume contre les envahisseurs. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Bien qu'il fût épuisé, le coureur termina la course avec courage.", answer: "bien qu'il fût épuisé le coureur termina la course avec courage", options: [], explication: "La phrase correcte était : « Bien qu'il fût épuisé, le coureur termina la course avec courage. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "La bibliothécaire rangea soigneusement les livres sur les étagères.", answer: "la bibliothécaire rangea soigneusement les livres sur les étagères", options: [], explication: "La phrase correcte était : « La bibliothécaire rangea soigneusement les livres sur les étagères. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Les scientifiques ont découvert une espèce d'insecte inconnue en Amazonie.", answer: "les scientifiques ont découvert une espèce d'insecte inconnue en amazonie", options: [], explication: "La phrase correcte était : « Les scientifiques ont découvert une espèce d'insecte inconnue en Amazonie. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Depuis son enfance, elle rêvait de parcourir les mers du monde entier.", answer: "depuis son enfance elle rêvait de parcourir les mers du monde entier", options: [], explication: "La phrase correcte était : « Depuis son enfance, elle rêvait de parcourir les mers du monde entier. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Les feuilles des arbres prennent des teintes orangées à l'automne.", answer: "les feuilles des arbres prennent des teintes orangées à l'automne", options: [], explication: "La phrase correcte était : « Les feuilles des arbres prennent des teintes orangées à l'automne. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Le directeur félicita chaleureusement les élèves pour leurs résultats excellents.", answer: "le directeur félicita chaleureusement les élèves pour leurs résultats excellents", options: [], explication: "La phrase correcte était : « Le directeur félicita chaleureusement les élèves pour leurs résultats excellents. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Malgré l'orage, les pêcheurs sortirent en mer dès l'aube.", answer: "malgré l'orage les pêcheurs sortirent en mer dès l'aube", options: [], explication: "La phrase correcte était : « Malgré l'orage, les pêcheurs sortirent en mer dès l'aube. »" }
    ]
  },

  francais6Oral: {
    id: 'francais6Oral', nom: 'Oral', emoji: '🎤', couleur: '#7c3aed',
    1: [
      { question: "🎤 Répète à voix haute : 'Le renard roux traversa la forêt en silence.'", type: 'oral', keywords: ['renard', 'traversa', 'forêt', 'silence'], minKeywords: 2, options: [], answer: '__oral__', explication: "Il fallait prononcer clairement : le renard (animal), traversa (action passée), la forêt (lieu), en silence (manière)." },
      { question: "🎤 Cite à voix haute trois couleurs différentes.", type: 'oral', keywords: ['rouge', 'bleu', 'vert', 'jaune', 'noir', 'blanc', 'rose', 'orange', 'violet', 'marron', 'gris', 'beige'], minKeywords: 3, options: [], answer: '__oral__', explication: "Il fallait citer au moins trois couleurs : rouge, bleu, vert, jaune, noir, blanc, rose, orange, violet, marron…" },
      { question: "🎤 Dis à voix haute une phrase complète avec le mot 'bibliothèque'.", type: 'oral', keywords: ['bibliothèque'], minKeywords: 1, options: [], answer: '__oral__', explication: "Il fallait former une phrase correcte contenant le mot 'bibliothèque'. Ex : 'Je vais à la bibliothèque pour emprunter un livre.'" },
      { question: "🎤 Récite les jours de la semaine dans l'ordre.", type: 'oral', keywords: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'], minKeywords: 5, options: [], answer: '__oral__', explication: "Il fallait réciter dans l'ordre : lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche." },
      { question: "🎤 Répète : 'Le soleil brille dans le ciel bleu et les oiseaux chantent.'", type: 'oral', keywords: ['soleil', 'brille', 'ciel', 'oiseaux', 'chantent'], minKeywords: 3, options: [], answer: '__oral__', explication: "Il fallait prononcer clairement les mots-clés : soleil, brille, ciel, oiseaux, chantent." },
      { question: "🎤 Dis à voix haute trois animaux de la forêt.", type: 'oral', keywords: ['renard', 'loup', 'cerf', 'chevreuil', 'sanglier', 'lapin', 'écureuil', 'hibou', 'chouette', 'biche', 'ours', 'blaireau'], minKeywords: 2, options: [], answer: '__oral__', explication: "Il fallait nommer au moins deux animaux de la forêt : renard, loup, cerf, sanglier, lapin, écureuil, hibou…" },
      { question: "🎤 Répète cette phrase et remplace le nom : 'Le chat dort sur le canapé.'", type: 'oral', keywords: ['dort', 'canapé', 'chien', 'hamster', 'lapin', 'souris', 'oiseau', 'chat'], minKeywords: 2, options: [], answer: '__oral__', explication: "Il fallait garder la structure 'X dort sur le canapé' en changeant l'animal (chien, hamster, lapin…) ou répéter avec 'le chat'." },
      { question: "🎤 Dis à voix haute le mois de ta naissance et la saison qui correspond.", type: 'oral', keywords: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre', 'printemps', 'été', 'automne', 'hiver'], minKeywords: 2, options: [], answer: '__oral__', explication: "Il fallait citer un mois et sa saison : mars → printemps, juillet → été, novembre → automne, janvier → hiver." }
    ],
    2: [
      { question: "🎤 Explique à voix haute ce qu'est un nom commun. Donne un exemple.", type: 'oral', keywords: ['nom', 'commun', 'désigne', 'chose', 'personne', 'animal', 'exemple'], minKeywords: 3, options: [], answer: '__oral__', explication: "Un nom commun désigne une réalité générale (personne, animal, chose). Ex : 'chien', 'maison', 'enfant'. Il s'oppose au nom propre." },
      { question: "🎤 Donne un synonyme du mot 'courageux' et utilise-le dans une phrase.", type: 'oral', keywords: ['brave', 'vaillant', 'intrépide', 'audacieux', 'valeureux', 'héroïque', 'téméraire'], minKeywords: 1, options: [], answer: '__oral__', explication: "Synonymes de 'courageux' : brave, vaillant, intrépide, audacieux, valeureux, héroïque. Il fallait utiliser l'un d'eux dans une phrase." },
      { question: "🎤 Décris ton animal préféré en deux phrases à l'oral.", type: 'oral', keywords: ['il', 'elle', 'est', 'a', 'mange', 'vit', 'aime', 'peut', 'son', 'ses'], minKeywords: 3, options: [], answer: '__oral__', explication: "Il fallait construire deux phrases correctes décrivant l'animal : apparence, comportement, habitat, alimentation." },
      { question: "🎤 Explique la différence entre 'ou' et 'où' à l'oral.", type: 'oral', keywords: ['ou', 'où', 'choix', 'lieu', 'accent', 'préposition', 'ou bien', 'endroit'], minKeywords: 2, options: [], answer: '__oral__', explication: "'Ou' (sans accent) = choix (ou bien). 'Où' (avec accent) = lieu (là où, l'endroit où). On distingue par la substitution : 'ou bien' fonctionne → 'ou'." },
      { question: "🎤 Raconte en 2-3 phrases ce que tu as fait ce matin.", type: 'oral', keywords: ['matin', 'je', 'me', 'suis', 'ai', 'levé', 'mangé', 'école', 'petit', 'déjeuner'], minKeywords: 3, options: [], answer: '__oral__', explication: "Il fallait construire 2-3 phrases cohérentes au passé composé racontant tes actions du matin." },
      { question: "🎤 Présente ton livre ou film préféré en 3 phrases.", type: 'oral', keywords: ['livre', 'film', 'histoire', 'personnage', 'auteur', 'réalisateur', 'raconte', 'aime', 'parce'], minKeywords: 3, options: [], answer: '__oral__', explication: "Il fallait présenter l'œuvre (titre, auteur/réalisateur), résumer brièvement l'histoire et expliquer pourquoi tu l'aimes." },
      { question: "🎤 Forme une phrase avec un sujet, un verbe et un complément d'objet direct.", type: 'oral', keywords: ['mange', 'lis', 'prend', 'regarde', 'écoute', 'joue', 'fait', 'voit', 'aime', 'préfère'], minKeywords: 1, options: [], answer: '__oral__', explication: "Ex : 'La fille mange une pomme.' Sujet = 'la fille', verbe = 'mange', COD = 'une pomme' (mange quoi ?). Le COD répond à 'qui/quoi' après le verbe." },
      { question: "🎤 Récite un vers d'un poème que tu connais.", type: 'oral', keywords: ['fleur', 'soleil', 'mer', 'nuit', 'jour', 'vent', 'ciel', 'belle', 'beau', 'amour', 'vie', 'monde', 'cœur', 'temps', 'lumière'], minKeywords: 2, options: [], answer: '__oral__', explication: "Il fallait réciter au moins un vers d'un poème connu, en articulant clairement et en respectant le rythme." }
    ],
    3: [
      { question: "🎤 Explique à l'oral ce qu'est le schéma narratif. Cite au moins 3 étapes.", type: 'oral', keywords: ['situation', 'initiale', 'perturbateur', 'péripétie', 'résolution', 'finale', 'problème', 'héros', 'étape'], minKeywords: 3, options: [], answer: '__oral__', explication: "Le schéma narratif : situation initiale → élément perturbateur → péripéties → résolution → situation finale. Il fallait citer au moins 3 de ces 5 étapes." },
      { question: "🎤 Explique la différence entre imparfait et passé simple avec un exemple.", type: 'oral', keywords: ['imparfait', 'passé simple', 'action', 'description', 'durée', 'ponctuelle', 'récit', 'habitude'], minKeywords: 3, options: [], answer: '__oral__', explication: "Imparfait = durée, habitude, description (il chantait). Passé simple = action ponctuelle et achevée dans le récit (il chanta)." },
      { question: "🎤 Improvise un dialogue de deux répliques entre deux personnages de ton choix.", type: 'oral', keywords: ['dit', 'répondit', 'demanda', 'bonjour', 'comment', 'je', 'tu', 'nous', 'allons', 'voulez'], minKeywords: 3, options: [], answer: '__oral__', explication: "Il fallait construire un échange cohérent de deux répliques avec des verbes de parole (dit, répondit, demanda) et un contenu logique." },
      { question: "🎤 Défends à l'oral ton opinion sur ce sujet : 'Les devoirs à la maison sont-ils utiles ?'", type: 'oral', keywords: ['devoirs', 'utiles', 'parce', 'permet', 'aider', 'apprendre', 'réviser', 'mais', 'cependant', 'opinion'], minKeywords: 3, options: [], answer: '__oral__', explication: "Il fallait prendre position et l'argumenter : 'Je pense que les devoirs sont utiles parce que…' ou 'Je ne pense pas que… car…'" },
      { question: "🎤 Donne trois homophones et explique brièvement leur différence.", type: 'oral', keywords: ['a', 'à', 'ou', 'où', 'son', 'sont', 'est', 'et', 'on', 'ont', 'ce', 'se'], minKeywords: 4, options: [], answer: '__oral__', explication: "Homophones : a/à, ou/où, son/sont, est/et, on/ont, ce/se. Il fallait citer 3 paires et expliquer (ex : 'a' = verbe avoir, 'à' = préposition)." },
      { question: "🎤 Explique à l'oral ce qu'est une métaphore et donne un exemple.", type: 'oral', keywords: ['métaphore', 'comparaison', 'comme', 'image', 'sens', 'figuré', 'sans'], minKeywords: 2, options: [], answer: '__oral__', explication: "La métaphore compare deux réalités SANS outil de comparaison. Ex : 'la vie est un voyage' (pas de 'comme'). Elle crée une image forte." },
      { question: "🎤 Récite un poème court (4 vers minimum) en articulant clairement.", type: 'oral', keywords: ['ver', 'vers', 'rime', 'strophe', 'poème', 'il', 'la', 'le', 'dans', 'sur', 'fleur', 'nuit', 'jour', 'ciel', 'mer'], minKeywords: 4, options: [], answer: '__oral__', explication: "Il fallait réciter au moins 4 vers d'un poème en articulant clairement, en respectant le rythme et les rimes." },
      { question: "🎤 Présente oralement un personnage littéraire que tu as étudié.", type: 'oral', keywords: ['personnage', 'roman', 'conte', 'il', 'elle', 'est', 'a', 'représente', 'symbolise', 'auteur', 'livre', 'histoire'], minKeywords: 4, options: [], answer: '__oral__', explication: "Il fallait présenter un personnage littéraire : qui il est, dans quel œuvre il apparaît, ses caractéristiques et ce qu'il représente." }
    ]
  }
};
