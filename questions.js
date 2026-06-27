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
    sousChapitres: ['francais6Lect_Narratologie', 'francais6Lect_Comprehension', 'francais6Lect_Genres'],
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
    sousChapitres: ['francais6Ecrit_Redaction', 'francais6Ecrit_Figures'],
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
    sousChapitres: ['francais6Gram_Nature', 'francais6Gram_Fonctions', 'francais6Gram_Phrases'],
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
    sousChapitres: ['francais6Conj_Present', 'francais6Conj_PasseCompose', 'francais6Conj_Imparfait', 'francais6Conj_Futur'],
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
    sousChapitres: ['francais6Ortho_Homophones', 'francais6Ortho_Accords'],
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
    sousChapitres: ['francais6Vocab_Synonymes', 'francais6Vocab_Formation', 'francais6Vocab_Sens'],
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

  // ── SOUS-CHAPITRES CONJUGAISON ──
  francais6Conj_Present: {
    id: 'francais6Conj_Present', nom: 'Présent de l\'indicatif', emoji: '🟢', couleur: '#b45309',
    1: [
      { question: "Conjugue 'chanter' à la 1ère pers. du singulier au présent.", options: ["je chante", "je chantes", "je chantons", "je chantez"], answer: "je chante", explication: "Verbes en -er au présent : je -e, tu -es, il -e, nous -ons, vous -ez, ils -ent." },
      { question: "Conjugue 'finir' à la 3ème pers. du singulier au présent.", options: ["il finit", "il fini", "il finira", "il finissez"], answer: "il finit", explication: "Verbes en -ir (2ème groupe) : je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent." },
      { question: "Conjugue 'être' à la 1ère pers. du pluriel au présent.", options: ["nous sommes", "nous êtes", "nous sont", "nous soyons"], answer: "nous sommes", explication: "'Être' est irrégulier : je suis, tu es, il est, nous sommes, vous êtes, ils sont." },
      { question: "Conjugue 'avoir' à la 2ème pers. du singulier au présent.", options: ["tu as", "tu a", "tu aies", "tu avons"], answer: "tu as", explication: "'Avoir' au présent : j'ai, tu as, il a, nous avons, vous avez, ils ont." },
      { question: "Quelle est la terminaison de 'vous' au présent pour les verbes en -er ?", options: ["-ez", "-ons", "-ent", "-es"], answer: "-ez", explication: "Terminaisons au présent pour -er : je -e, tu -es, il -e, nous -ons, vous -ez, ils -ent." },
      { question: "Conjugue 'parler' à la 3ème pers. du pluriel au présent.", options: ["ils parlent", "ils parlez", "ils parlons", "ils parle"], answer: "ils parlent", explication: "3ème pers. pluriel des verbes en -er : terminaison -ent. Ils parlent, ils chantent, ils mangent." },
      { question: "Conjugue 'manger' à la 1ère pers. du pluriel au présent.", options: ["nous mangeons", "nous mangons", "nous mangez", "nous manges"], answer: "nous mangeons", explication: "Les verbes en -ger gardent le -e à 'nous' pour conserver le son [ʒ] : nous mangeons, nous nageons, nous voyageons." },
      { question: "Quelle forme est correcte pour 'pouvoir' à la 1ère pers. du singulier ?", options: ["je peux", "je peut", "je pouvoir", "je pouvons"], answer: "je peux", explication: "'Pouvoir' est irrégulier : je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent." }
    ],
    2: [
      { question: "Conjugue 'aller' à la 2ème pers. du singulier au présent.", options: ["tu vas", "tu ailles", "tu alles", "tu allons"], answer: "tu vas", explication: "'Aller' est très irrégulier : je vais, tu vas, il va, nous allons, vous allez, ils vont." },
      { question: "Conjugue 'venir' à la 3ème pers. du pluriel au présent.", options: ["ils viennent", "ils venons", "ils vienent", "ils venez"], answer: "ils viennent", explication: "'Venir' au présent : je viens, tu viens, il vient, nous venons, vous venez, ils viennent." },
      { question: "Conjugue 'faire' à la 2ème pers. du pluriel au présent.", options: ["vous faites", "vous faisez", "vous font", "vous faisons"], answer: "vous faites", explication: "'Faire' est irrégulier : je fais, tu fais, il fait, nous faisons, vous faites, ils font." },
      { question: "Conjugue 'prendre' à la 1ère pers. du singulier au présent.", options: ["je prends", "je prend", "je prenons", "je prendez"], answer: "je prends", explication: "'Prendre' au présent : je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent." },
      { question: "Conjugue 'savoir' à la 3ème pers. du singulier au présent.", options: ["il sait", "il sais", "il savait", "il savoir"], answer: "il sait", explication: "'Savoir' au présent : je sais, tu sais, il sait, nous savons, vous savez, ils savent." },
      { question: "Conjugue 'vouloir' à la 1ère pers. du pluriel au présent.", options: ["nous voulons", "nous voulez", "nous veulent", "nous voulons"], answer: "nous voulons", explication: "'Vouloir' au présent : je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent." },
      { question: "Conjugue 'voir' à la 3ème pers. du pluriel au présent.", options: ["ils voient", "ils vois", "ils voyent", "ils voient"], answer: "ils voient", explication: "'Voir' au présent : je vois, tu vois, il voit, nous voyons, vous voyez, ils voient." },
      { question: "Quelle phrase est correctement conjuguée au présent ?", options: ["Nous allons au parc.", "Nous allons au parc.", "Vous allez bien ?", "Vous allez bien ?"], answer: "Nous allons au parc.", explication: "'Allons' = 1ère pers. pluriel de 'aller' au présent. Conjugaison correcte : nous allons." }
    ],
    3: [
      { question: "Conjugue 'se lever' à la 3ème pers. du singulier au présent.", options: ["il se lève", "il se lèves", "il se levons", "il lève se"], answer: "il se lève", explication: "Verbe pronominal : le pronom réfléchi (se) se place avant le verbe. 'Se lever' : je me lève, tu te lèves, il se lève." },
      { question: "Quelle est la valeur du présent dans 'La Terre tourne autour du Soleil' ?", options: ["Vérité générale", "Action en cours", "Habitude", "Futur proche"], answer: "Vérité générale", explication: "Le présent de vérité générale exprime une vérité scientifique ou universelle, toujours vraie." },
      { question: "Conjugue 'mettre' à la 1ère pers. du singulier au présent.", options: ["je mets", "je met", "je mettes", "je mettons"], answer: "je mets", explication: "'Mettre' au présent : je mets, tu mets, il met, nous mettons, vous mettez, ils mettent." },
      { question: "Quel est le présent de narration dans 'Soudain, il entre et crie' ?", options: ["Présent de narration", "Présent d'habitude", "Présent de vérité générale", "Futur proche"], answer: "Présent de narration", explication: "Le présent de narration est utilisé dans un récit au passé pour rendre l'action plus vivante." },
      { question: "Conjugue 'croire' à la 2ème pers. du singulier au présent.", options: ["tu crois", "tu croyais", "tu croit", "tu croies"], answer: "tu crois", explication: "'Croire' au présent : je crois, tu crois, il croit, nous croyons, vous croyez, ils croient." },
      { question: "Conjugue 'écrire' à la 3ème pers. du pluriel au présent.", options: ["ils écrivent", "ils écris", "ils écrivons", "ils écrivent"], answer: "ils écrivent", explication: "'Écrire' au présent : j'écris, tu écris, il écrit, nous écrivons, vous écrivez, ils écrivent." },
      { question: "Quelle phrase utilise le présent pour exprimer un futur proche ?", options: ["Je pars demain.", "Je partais hier.", "Je partais souvent.", "Je suis parti."], answer: "Je pars demain.", explication: "Le présent peut exprimer un futur proche avec un indicateur de temps ('demain'). C'est le présent de futur proche." },
      { question: "Conjugue 'résoudre' à la 1ère pers. du singulier au présent.", options: ["je résous", "je résout", "je résolvais", "je résolvons"], answer: "je résous", explication: "'Résoudre' au présent : je résous, tu résous, il résout, nous résolvons, vous résolvez, ils résolvent." }
    ]
  },

  francais6Conj_PasseCompose: {
    id: 'francais6Conj_PasseCompose', nom: 'Passé composé', emoji: '🔵', couleur: '#b45309',
    1: [
      { question: "Quel est le passé composé de 'manger' à la 3ème pers. du singulier ?", options: ["il a mangé", "il mange", "il mangea", "il mangeait"], answer: "il a mangé", explication: "Passé composé = auxiliaire avoir/être au présent + participe passé. 'Manger' → 'mangé'. Avoir : il a mangé." },
      { question: "Quel auxiliaire utilise-t-on pour 'travailler' au passé composé ?", options: ["avoir", "être", "aller", "faire"], answer: "avoir", explication: "La plupart des verbes forment le passé composé avec 'avoir'. 'Il a travaillé', 'il a mangé', 'il a chanté'." },
      { question: "Quel est le participe passé de 'finir' ?", options: ["fini", "finit", "finissé", "finis"], answer: "fini", explication: "Les verbes en -ir (2ème groupe) forment leur participe passé en -i : finir → fini, partir → parti, choisir → choisi." },
      { question: "Quel est le passé composé de 'partir' à la 3ème pers. du singulier ?", options: ["il est parti", "il a parti", "il partait", "il partira"], answer: "il est parti", explication: "'Partir' se conjugue avec l'auxiliaire 'être'. Les verbes de mouvement : partir, arriver, aller, venir, entrer, sortir... → être." },
      { question: "Quel est le participe passé de 'avoir' ?", options: ["eu", "avé", "aivi", "avoit"], answer: "eu", explication: "Participes passés irréguliers à retenir : avoir → eu, être → été, faire → fait, dire → dit." },
      { question: "Quel est le passé composé de 'chanter' à la 1ère pers. du singulier ?", options: ["j'ai chanté", "j'ai chantée", "j'ai chanter", "j'avais chanté"], answer: "j'ai chanté", explication: "Passé composé : avoir au présent + participe passé. 'Chanter' → j'ai chanté. Le participe ne s'accorde pas avec le sujet avec 'avoir'." },
      { question: "Quel est le participe passé de 'être' ?", options: ["été", "su", "fait", "pris"], answer: "été", explication: "Participes passés irréguliers : être → été, avoir → eu, faire → fait, savoir → su, prendre → pris." },
      { question: "Quelle phrase est au passé composé ?", options: ["Elle a couru vite.", "Elle courait vite.", "Elle court vite.", "Elle courra vite."], answer: "Elle a couru vite.", explication: "'A couru' = auxiliaire avoir au présent + participe passé de 'courir' (couru). C'est bien le passé composé." }
    ],
    2: [
      { question: "Quel auxiliaire prend 'naître' au passé composé ?", options: ["être", "avoir", "aller", "faire"], answer: "être", explication: "Les verbes de mouvement et d'état (naître, mourir, rester, tomber, devenir...) prennent l'auxiliaire 'être'." },
      { question: "Accordez : 'Les filles sont ___ au cinéma.' (aller)", options: ["allées", "allés", "allé", "allée"], answer: "allées", explication: "Avec 'être', le participe s'accorde avec le sujet : 'les filles' = féminin pluriel → 'allées' (-ées)." },
      { question: "Conjuguez 'se lever' au passé composé, 3ème pers. singulier féminin.", options: ["elle s'est levée", "elle a levée", "elle s'est levé", "elle est levée"], answer: "elle s'est levée", explication: "Verbe pronominal → auxiliaire 'être'. Le participe s'accorde avec le sujet féminin : 'levée'." },
      { question: "Quel est le participe passé de 'prendre' ?", options: ["pris", "prené", "prendu", "prit"], answer: "pris", explication: "Participes passés irréguliers en -is : prendre → pris, mettre → mis, apprendre → appris." },
      { question: "Accordez : 'Mes sœurs sont ___ hier.' (rentrer)", options: ["rentrées", "rentrés", "rentré", "rentrée"], answer: "rentrées", explication: "'Rentrer' prend 'être' au PC. 'Mes sœurs' = féminin pluriel → 'rentrées' (-ées)." },
      { question: "Quel est le participe passé de 'voir' ?", options: ["vu", "voyé", "voit", "vécu"], answer: "vu", explication: "Participes en -u : voir → vu, vouloir → voulu, pouvoir → pu, savoir → su, lire → lu." },
      { question: "Conjuguez 'venir' au passé composé, 3ème pers. pluriel masculin.", options: ["ils sont venus", "ils ont venus", "ils sont venu", "ils ont venu"], answer: "ils sont venus", explication: "'Venir' → être au PC. 'Ils' = masculin pluriel → 'venus' (-s au pluriel)." },
      { question: "Quel est le passé composé de 'faire' à la 2ème pers. du singulier ?", options: ["tu as fait", "tu as faisé", "tu es fait", "tu as faite"], answer: "tu as fait", explication: "'Faire' → auxiliaire 'avoir'. Participe passé irrégulier : 'fait'. 'Tu as fait' tes devoirs." }
    ],
    3: [
      { question: "Accordez : 'La robe qu'elle a ___.' (mettre)", options: ["mise", "mis", "mises", "mettu"], answer: "mise", explication: "Avec 'avoir', le PP s'accorde avec le COD placé AVANT le verbe. 'Qu'elle' (= la robe, fém. sg) est avant → 'mise'." },
      { question: "Accordez : 'Les films que j'ai ___.' (voir)", options: ["vus", "vu", "vues", "vue"], answer: "vus", explication: "'Que' reprend 'les films' (masc. pluriel), COD placé avant 'ai vu' → accord masculin pluriel : 'vus'." },
      { question: "Quelle phrase contient une erreur d'accord du participe passé ?", options: ["Elle s'est blessé.", "Elle est tombée.", "Ils sont partis.", "Nous sommes arrivés."], answer: "Elle s'est blessé.", explication: "'Se blesser' est pronominal → 'être'. Le sujet 'elle' est féminin → 'blessée' (avec -e). 'Blessé' sans accord est incorrect." },
      { question: "Accordez : 'Combien de livres as-tu ___?' (lire)", options: ["lus", "lu", "lues", "lit"], answer: "lus", explication: "'Combien de livres' = COD masculin pluriel placé avant le verbe → 'lus' (accord masc. plur.)." },
      { question: "Quelle est la différence entre passé composé et passé simple ?", options: ["PC : oral/courant ; PS : littéraire/écrit", "PC : ancien ; PS : récent", "Ils sont identiques", "PS : oral ; PC : littéraire"], answer: "PC : oral/courant ; PS : littéraire/écrit", explication: "En français moderne : le PC s'emploie à l'oral et dans l'écrit courant ; le PS uniquement dans les textes littéraires." },
      { question: "Accordez : 'Elle s'est ___ les mains.' (laver)", options: ["lavé", "lavée", "lavés", "lavées"], answer: "lavé", explication: "Ici 'les mains' est le COD placé APRÈS le verbe → pas d'accord. 'Se laver' pronominal avec COD après → PP invariable." },
      { question: "Quel est le participe passé de 'résoudre' ?", options: ["résolu", "résout", "résolvé", "résoudé"], answer: "résolu", explication: "'Résoudre' → participe passé irrégulier 'résolu'. Ex : 'Le problème est résolu.' Autres en -u : absoudre → absous." },
      { question: "Accordez : 'Les élèves que le professeur a ___.' (féliciter)", options: ["félicités", "félicité", "félicitées", "féliciter"], answer: "félicités", explication: "'Que' = 'les élèves' (masc. plur. par défaut), COD avant → 'félicités'. Si c'était des filles : 'félicitées'." }
    ]
  },

  francais6Conj_Imparfait: {
    id: 'francais6Conj_Imparfait', nom: 'Imparfait', emoji: '🟡', couleur: '#b45309',
    1: [
      { question: "Quelle est la terminaison de 'je' à l'imparfait ?", options: ["-ais", "-ait", "-ions", "-iez"], answer: "-ais", explication: "Terminaisons de l'imparfait : je -ais, tu -ais, il -ait, nous -ions, vous -iez, ils -aient." },
      { question: "Conjugue 'chanter' à l'imparfait, 3ème pers. singulier.", options: ["il chantait", "il chantait", "il chanta", "il chanterait"], answer: "il chantait", explication: "Imparfait de 'chanter' : je chantais, tu chantais, il chantait, nous chantions, vous chantiez, ils chantaient." },
      { question: "À quel temps est 'elles jouaient' ?", options: ["Imparfait", "Présent", "Passé composé", "Futur"], answer: "Imparfait", explication: "La terminaison -aient à la 3ème pers. pluriel caractérise l'imparfait. 'Jouaient' = 'jouer' à l'imparfait." },
      { question: "Conjugue 'être' à l'imparfait, 1ère pers. du singulier.", options: ["j'étais", "j'est", "j'étés", "j'étions"], answer: "j'étais", explication: "'Être' à l'imparfait : j'étais, tu étais, il était, nous étions, vous étiez, ils étaient." },
      { question: "Conjugue 'avoir' à l'imparfait, 3ème pers. du pluriel.", options: ["ils avaient", "ils ont", "ils aient", "ils avions"], answer: "ils avaient", explication: "'Avoir' à l'imparfait : j'avais, tu avais, il avait, nous avions, vous aviez, ils avaient." },
      { question: "Quelle phrase est à l'imparfait ?", options: ["Il pleuvait souvent.", "Il a plu hier.", "Il pleut.", "Il pleuvra."], answer: "Il pleuvait souvent.", explication: "'Pleuvait' est l'imparfait de 'pleuvoir'. L'adverbe 'souvent' renforce l'idée d'habitude passée." },
      { question: "Conjugue 'finir' à l'imparfait, 2ème pers. du singulier.", options: ["tu finissais", "tu finissait", "tu finiras", "tu finis"], answer: "tu finissais", explication: "L'imparfait des verbes en -ir (2ème gr.) : je finissais, tu finissais, il finissait, nous finissions..." },
      { question: "Conjugue 'manger' à l'imparfait, 1ère pers. du pluriel.", options: ["nous mangions", "nous mangiions", "nous mangions", "nous mangeons"], answer: "nous mangions", explication: "Imparfait des verbes en -ger : nous mangions, nous nagions. Le -e- disparaît à 'nous' à l'imparfait." }
    ],
    2: [
      { question: "Dans quelle phrase l'imparfait exprime une habitude passée ?", options: ["Chaque soir, il lisait.", "Il lut un livre.", "Il a lu un livre.", "Il lira un livre."], answer: "Chaque soir, il lisait.", explication: "L'imparfait d'habitude exprime une action répétée dans le passé. 'Chaque soir' = indice de répétition." },
      { question: "Dans quelle phrase l'imparfait sert à décrire ?", options: ["Le ciel était bleu.", "Il sortit.", "Il est sorti.", "Il sortira."], answer: "Le ciel était bleu.", explication: "L'imparfait de description peint un décor, une situation dans le passé. Ici il décrit l'état du ciel." },
      { question: "Conjugue 'faire' à l'imparfait, 3ème pers. singulier.", options: ["il faisait", "il faisait", "il fit", "il ferait"], answer: "il faisait", explication: "Le radical de 'faire' à l'imparfait est 'fais-' : je faisais, tu faisais, il faisait, nous faisions..." },
      { question: "Choisissez le bon temps : 'Quand j'étais petit, je ___ souvent.' (jouer)", options: ["jouais", "ai joué", "jouerai", "joue"], answer: "jouais", explication: "'Quand j'étais petit' = contexte passé habituel → imparfait. 'Je jouais' exprime une habitude passée." },
      { question: "Conjugue 'aller' à l'imparfait, 2ème pers. du pluriel.", options: ["vous alliez", "vous allez", "vous iriez", "vous allaient"], answer: "vous alliez", explication: "'Aller' à l'imparfait : j'allais, tu allais, il allait, nous allions, vous alliez, ils allaient." },
      { question: "Conjugue 'vouloir' à l'imparfait, 1ère pers. du singulier.", options: ["je voulais", "je veux", "je voulus", "je voudrais"], answer: "je voulais", explication: "'Vouloir' à l'imparfait : je voulais, tu voulais, il voulait, nous voulions, vous vouliez, ils voulaient." },
      { question: "Laquelle de ces phrases décrit une action interrompue dans le passé ?", options: ["Il dormait quand le téléphone sonna.", "Il dormit.", "Il a dormi.", "Il dormira."], answer: "Il dormait quand le téléphone sonna.", explication: "Imparfait = action de fond (durée) ; passé simple = action qui l'interrompt. 'Dormait' (durée) / 'sonna' (ponctuel)." },
      { question: "Conjugue 'prendre' à l'imparfait, 3ème pers. du pluriel.", options: ["ils prenaient", "ils prennent", "ils prirent", "ils prendaient"], answer: "ils prenaient", explication: "'Prendre' à l'imparfait : je prenais, tu prenais, il prenait, nous prenions, vous preniez, ils prenaient." }
    ],
    3: [
      { question: "Quelle est la valeur de l'imparfait dans 'Si tu travaillais, tu réussirais' ?", options: ["Hypothèse (irréel du présent)", "Habitude", "Description", "Action interrompue"], answer: "Hypothèse (irréel du présent)", explication: "Si + imparfait → conditionnel présent : exprime une hypothèse irréelle ou peu probable dans le présent." },
      { question: "Conjugue 'voir' à l'imparfait, 1ère pers. du pluriel.", options: ["nous voyions", "nous voyons", "nous verrions", "nous vîmes"], answer: "nous voyions", explication: "'Voir' à l'imparfait : je voyais, tu voyais, il voyait, nous voyions, vous voyiez, ils voyaient." },
      { question: "Conjugue 'croire' à l'imparfait, 2ème pers. du singulier.", options: ["tu croyais", "tu crois", "tu croirais", "tu crûs"], answer: "tu croyais", explication: "'Croire' à l'imparfait : je croyais, tu croyais, il croyait, nous croyions, vous croyiez, ils croyaient." },
      { question: "Quel temps doit-on utiliser pour décrire le décor d'un récit au passé ?", options: ["Imparfait", "Passé composé", "Passé simple", "Futur"], answer: "Imparfait", explication: "Dans un récit au passé : imparfait pour le décor, les descriptions, les habitudes ; passé simple/composé pour les actions." },
      { question: "Conjugue 'savoir' à l'imparfait, 3ème pers. du singulier.", options: ["il savait", "il sait", "il sut", "il saurait"], answer: "il savait", explication: "'Savoir' à l'imparfait : je savais, tu savais, il savait, nous savions, vous saviez, ils savaient." },
      { question: "Conjugue 'mettre' à l'imparfait, 1ère pers. du singulier.", options: ["je mettais", "je mets", "je mis", "je mettrais"], answer: "je mettais", explication: "'Mettre' à l'imparfait : je mettais, tu mettais, il mettait, nous mettions, vous mettiez, ils mettaient." },
      { question: "Conjugue 'venir' à l'imparfait, 3ème pers. du pluriel.", options: ["ils venaient", "ils viennent", "ils vinrent", "ils viendraient"], answer: "ils venaient", explication: "'Venir' à l'imparfait : je venais, tu venais, il venait, nous venions, vous veniez, ils venaient." },
      { question: "Dans quel cas utilise-t-on l'imparfait plutôt que le passé composé ?", options: ["Pour une action longue ou répétée dans le passé", "Pour une action ponctuelle et terminée", "Pour une action future", "Pour une action présente"], answer: "Pour une action longue ou répétée dans le passé", explication: "Imparfait = durée, habitude, répétition. Passé composé = action ponctuelle, précise, terminée." }
    ]
  },

  francais6Conj_Futur: {
    id: 'francais6Conj_Futur', nom: 'Futur simple', emoji: '🔴', couleur: '#b45309',
    1: [
      { question: "Quelle est la terminaison de 'je' au futur simple ?", options: ["-rai", "-ras", "-ra", "-rons"], answer: "-rai", explication: "Terminaisons du futur simple : je -rai, tu -ras, il -ra, nous -rons, vous -rez, ils -ront." },
      { question: "Conjugue 'chanter' au futur simple, 3ème pers. du singulier.", options: ["il chantera", "il chantait", "il chante", "il chanterait"], answer: "il chantera", explication: "Futur des verbes en -er : infinitif + terminaisons. Chanter → il chantera." },
      { question: "Conjugue 'finir' au futur simple, 1ère pers. du singulier.", options: ["je finirai", "je finissais", "je finis", "je finirais"], answer: "je finirai", explication: "Futur des verbes en -ir : infinitif + terminaisons. Finir → je finirai." },
      { question: "Quelle est la terminaison de 'vous' au futur simple ?", options: ["-rez", "-rions", "-ront", "-rai"], answer: "-rez", explication: "Terminaisons du futur : je -rai, tu -ras, il -ra, nous -rons, vous -rez, ils -ront." },
      { question: "Conjugue 'manger' au futur simple, 1ère pers. du pluriel.", options: ["nous mangerons", "nous mangeons", "nous mangeriez", "nous mangerez"], answer: "nous mangerons", explication: "Futur de 'manger' : infinitif + rons = mangerons. Attention : on conserve le 'e' de l'infinitif." },
      { question: "Conjugue 'parler' au futur simple, 2ème pers. du singulier.", options: ["tu parleras", "tu parles", "tu parlais", "tu parlerez"], answer: "tu parleras", explication: "Futur de 'parler' : je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront." },
      { question: "Quelle phrase est au futur simple ?", options: ["Il dormira demain.", "Il dormait hier.", "Il dort.", "Il a dormi."], answer: "Il dormira demain.", explication: "'Dormira' = futur simple de 'dormir'. La terminaison -ra + indicateur 'demain' confirme le futur." },
      { question: "Conjugue 'jouer' au futur simple, 3ème pers. du pluriel.", options: ["ils joueront", "ils jouent", "ils jouaient", "ils joueraient"], answer: "ils joueront", explication: "Futur de 'jouer' : infinitif + ront = joueront. Simple et régulier." }
    ],
    2: [
      { question: "Quel est le radical du futur simple de 'aller' ?", options: ["ir-", "all-", "va-", "aill-"], answer: "ir-", explication: "'Aller' a un radical irrégulier au futur : ir-. Conjugaison : j'irai, tu iras, il ira, nous irons, vous irez, ils iront." },
      { question: "Conjugue 'être' au futur simple, 1ère pers. du singulier.", options: ["je serai", "je suis", "j'étais", "je serais"], answer: "je serai", explication: "'Être' au futur : je serai, tu seras, il sera, nous serons, vous serez, ils seront. Radical irrégulier : ser-." },
      { question: "Conjugue 'avoir' au futur simple, 3ème pers. du singulier.", options: ["il aura", "il a", "il avait", "il aurait"], answer: "il aura", explication: "'Avoir' au futur : j'aurai, tu auras, il aura, nous aurons, vous aurez, ils auront. Radical irrégulier : aur-." },
      { question: "Conjugue 'faire' au futur simple, 2ème pers. du singulier.", options: ["tu feras", "tu fais", "tu faisais", "tu ferais"], answer: "tu feras", explication: "'Faire' au futur : je ferai, tu feras, il fera, nous ferons, vous ferez, ils feront. Radical irrégulier : fer-." },
      { question: "Conjugue 'venir' au futur simple, 1ère pers. du pluriel.", options: ["nous viendrons", "nous venons", "nous venions", "nous viendrions"], answer: "nous viendrons", explication: "'Venir' au futur : je viendrai, tu viendras, il viendra, nous viendrons, vous viendrez, ils viendront." },
      { question: "Conjugue 'pouvoir' au futur simple, 3ème pers. du singulier.", options: ["il pourra", "il peut", "il pouvait", "il pourrait"], answer: "il pourra", explication: "'Pouvoir' au futur : je pourrai, tu pourras, il pourra, nous pourrons, vous pourrez, ils pourront." },
      { question: "Conjugue 'vouloir' au futur simple, 2ème pers. du pluriel.", options: ["vous voudrez", "vous voulez", "vous vouliez", "vous voudriez"], answer: "vous voudrez", explication: "'Vouloir' au futur : je voudrai, tu voudras, il voudra, nous voudrons, vous voudrez, ils voudront." },
      { question: "Conjugue 'savoir' au futur simple, 1ère pers. du singulier.", options: ["je saurai", "je sais", "je savais", "je saurais"], answer: "je saurai", explication: "'Savoir' au futur : je saurai, tu sauras, il saura, nous saurons, vous saurez, ils sauront. Radical : saur-." }
    ],
    3: [
      { question: "Quelle est la valeur du futur dans 'Tu te coucheras quand j'aurai dit' ?", options: ["Futur antérieur (antériorité)", "Futur d'ordre", "Futur de vérité générale", "Futur proche"], answer: "Futur antérieur (antériorité)", explication: "Le futur antérieur ('aurai dit') exprime une action future accomplie AVANT une autre action future ('te coucheras')." },
      { question: "Conjugue 'tenir' au futur simple, 3ème pers. du pluriel.", options: ["ils tiendront", "ils tiennent", "ils tenaient", "ils tiendraient"], answer: "ils tiendront", explication: "'Tenir' au futur : je tiendrai, tu tiendras, il tiendra, nous tiendrons, vous tiendrez, ils tiendront." },
      { question: "Quel est le futur antérieur de 'finir', 2ème pers. du singulier ?", options: ["tu auras fini", "tu finiras", "tu avais fini", "tu aurais fini"], answer: "tu auras fini", explication: "Futur antérieur = avoir/être au futur simple + participe passé. 'Finir' → tu auras fini." },
      { question: "Conjugue 'courir' au futur simple, 1ère pers. du singulier.", options: ["je courrai", "je courirai", "je cours", "je courais"], answer: "je courrai", explication: "'Courir' a un double r au futur : je courrai, tu courras, il courra... À ne pas confondre avec le présent 'cours'." },
      { question: "Conjugue 'envoyer' au futur simple, 3ème pers. du singulier.", options: ["il enverra", "il envoyera", "il envoie", "il enverrait"], answer: "il enverra", explication: "'Envoyer' au futur : radical irrégulier 'enverr-'. Il enverra, tu enverras, je verrai... Comme 'voir'." },
      { question: "Conjugue 'mourir' au futur simple, 1ère pers. du singulier.", options: ["je mourrai", "je mourirai", "je meurs", "je mourrais"], answer: "je mourrai", explication: "'Mourir' au futur : je mourrai, tu mourras, il mourra. Attention au double 'r', comme 'courir'." },
      { question: "Quelle est la valeur du futur dans 'Tu rangeras ta chambre !'?", options: ["Futur d'ordre/injonction", "Futur de vérité générale", "Futur antérieur", "Futur proche"], answer: "Futur d'ordre/injonction", explication: "Le futur peut remplacer l'impératif pour exprimer un ordre ferme. 'Tu rangeras' = 'Range !'." },
      { question: "Conjugue 'recevoir' au futur simple, 2ème pers. du singulier.", options: ["tu recevras", "tu reçois", "tu recevais", "tu recevrais"], answer: "tu recevras", explication: "'Recevoir' au futur : je recevrai, tu recevras, il recevra, nous recevrons, vous recevrez, ils recevront." }
    ]
  },

  // ── SOUS-CHAPITRES ORTHOGRAPHE ──
  francais6Ortho_Homophones: {
    id: 'francais6Ortho_Homophones', nom: 'Homophones grammaticaux', emoji: '🔤', couleur: '#dc2626',
    1: [
      { question: "Choisissez : 'Le chat ___ faim.' (a/à)", options: ["a", "à"], answer: "a", explication: "'a' = verbe avoir (remplaçable par 'avait'). 'Le chat avait faim' ✓ → 'a'. 'à' est une préposition." },
      { question: "Choisissez : 'Il va ___ la piscine.' (a/à)", options: ["à", "a"], answer: "à", explication: "'à' est une préposition de lieu. Test : 'il va avait la piscine' ✗ → c'est 'à' (préposition)." },
      { question: "Choisissez : '___ mange une pomme.' (On/Ont)", options: ["On", "Ont"], answer: "On", explication: "'On' = pronom sujet (remplaçable par 'il'). 'Il mange une pomme' ✓ → 'On'. 'Ont' = verbe avoir pluriel." },
      { question: "Choisissez : 'Ils ___ faim.' (on/ont)", options: ["ont", "on"], answer: "ont", explication: "'ont' = verbe avoir (ils ont). Test : remplace par 'avaient' → 'Ils avaient faim' ✓. 'On' est un pronom sujet." },
      { question: "Choisissez : 'C'est ___ livre.' (son/sont)", options: ["son", "sont"], answer: "son", explication: "'son' = déterminant possessif (son, sa, ses). 'Sont' = verbe être pluriel. 'Ils sont livre' ✗ → 'son'." },
      { question: "Choisissez : 'Les fleurs ___ belles.' (son/sont)", options: ["sont", "son"], answer: "sont", explication: "'sont' = verbe être. Test : remplace par 'étaient' → 'Les fleurs étaient belles' ✓ → 'sont'." },
      { question: "Choisissez : 'Tu veux du chocolat ___ de la vanille ?' (ou/où)", options: ["ou", "où"], answer: "ou", explication: "'ou' (sans accent) = choix (= ou bien). 'Chocolat ou bien vanille' ✓ → 'ou'. 'Où' = lieu." },
      { question: "Choisissez : 'Je ne sais pas ___ tu habites.' (ou/où)", options: ["où", "ou"], answer: "où", explication: "'où' (avec accent) indique un lieu ou une interrogation sur le lieu. 'Ou bien' ne fonctionnerait pas ici → 'où'." }
    ],
    2: [
      { question: "Choisissez : 'Il ___ midi.' (est/et)", options: ["est", "et"], answer: "est", explication: "'est' = verbe être. Test : 'Il était midi' ✓. 'Et' relie deux éléments (pain et beurre). Un seul élément ici → 'est'." },
      { question: "Choisissez : 'Il prend son stylo ___ son cahier.' (est/et)", options: ["et", "est"], answer: "et", explication: "'et' est une conjonction de coordination (= de plus, aussi). Il relie 'stylo' et 'cahier'. 'Était' ✗ → 'et'." },
      { question: "Choisissez : 'Il ___ peigne le matin.' (se/ce)", options: ["se", "ce"], answer: "se", explication: "'se' = pronom réfléchi (devant un verbe). 'Ce' = déterminant (ce livre) ou pronom. Devant 'peigne' (verbe) → 'se'." },
      { question: "Choisissez : '___ film est super.' (Ce/Se)", options: ["Ce", "Se"], answer: "Ce", explication: "'Ce' = déterminant démonstratif devant un nom (ce film, cet enfant). 'Se' se place devant un verbe." },
      { question: "Choisissez : 'Je ___ lever tôt.' (peu/peux/peut)", options: ["peux", "peut", "peu"], answer: "peux", explication: "'peux' = pouvoir avec 'je' ou 'tu'. 'peut' = pouvoir avec 'il/elle'. 'peu' = adverbe (pas beaucoup). Sujet 'je' → 'peux'." },
      { question: "Choisissez : 'Il mange ___ (peu/peux/peut).'", options: ["peu", "peux", "peut"], answer: "peu", explication: "'peu' est un adverbe de quantité. Ici ce n'est pas le verbe 'pouvoir' → 'peu'." },
      { question: "Choisissez : 'Il ___ venir.' (peu/peux/peut)", options: ["peut", "peux", "peu"], answer: "peut", explication: "'peut' = verbe pouvoir, 3ème pers. singulier. Sujet 'il' → 'peut'. 'Peux' s'emploie avec 'je' ou 'tu'." },
      { question: "Choisissez : 'Elle habite ___ (là/la).'", options: ["là", "la"], answer: "là", explication: "'là' (avec accent) = adverbe de lieu (ici, là, là-bas). 'la' = article (la maison) ou pronom (je la vois)." }
    ],
    3: [
      { question: "Choisissez : 'Ma mère ___ acheté un cadeau.' (m'a/ma)", options: ["m'a", "ma"], answer: "m'a", explication: "'m'a' = me + a (verbe avoir). Test 'avait' : 'ma mère m'avait acheté' ✓. 'Ma' = déterminant possessif." },
      { question: "Choisissez : '___ maison est grande.' (ma/m'a)", options: ["Ma", "M'a"], answer: "Ma", explication: "'Ma' = déterminant possessif devant un nom (ma maison, ma voiture). 'M'a' = pronom + verbe." },
      { question: "Choisissez : 'Tu ___ couché tard.' (t'es/tes)", options: ["t'es", "tes"], answer: "t'es", explication: "'t'es' = tu + es (verbe être). Forme pronominale : tu t'es couché. 'Tes' = déterminant possessif (tes livres)." },
      { question: "Choisissez : '___ livres sont là.' (Tes/T'es)", options: ["Tes", "T'es"], answer: "Tes", explication: "'Tes' = déterminant possessif pluriel devant un nom (tes livres, tes amis). 'T'es' = tu es." },
      { question: "Choisissez : 'Donne-moi ___ main.' (la/là/l'a)", options: ["la", "là", "l'a"], answer: "la", explication: "'la' ici = article féminin (la main). 'Là' = lieu. 'L'a' = le/la + avoir (il l'a perdu)." },
      { question: "Choisissez : 'Il ___ trouvée dans la rue.' (la/là/l'a)", options: ["l'a", "la", "là"], answer: "l'a", explication: "'l'a' = le/la (pronom) + a (verbe avoir). 'Il l'avait trouvée' ✓ → 'l'a'. 'La' serait article devant un nom." },
      { question: "Choisissez : '___ sœur est là.' (leur/leurs)", options: ["Leur", "Leurs"], answer: "Leur", explication: "'Leur' (sans -s) + nom singulier. 'Leur sœur' (une seule sœur). 'Leurs' + nom pluriel (leurs sœurs)." },
      { question: "Choisissez : '___ affaires sont rangées.' (leur/leurs)", options: ["Leurs", "Leur"], answer: "Leurs", explication: "'Leurs' (avec -s) + nom pluriel. 'Affaires' est pluriel → 'leurs affaires'. 'Leur' (sans -s) → nom singulier." }
    ]
  },

  francais6Ortho_Accords: {
    id: 'francais6Ortho_Accords', nom: 'Accords et pluriels', emoji: '✍️', couleur: '#dc2626',
    1: [
      { question: "Quel est le pluriel de 'bateau' ?", options: ["bateaux", "bateaus", "bateau", "bateux"], answer: "bateaux", explication: "Les noms en -eau font leur pluriel en -eaux : bateau → bateaux, gâteau → gâteaux, chapeau → chapeaux." },
      { question: "Quel est le pluriel de 'cheval' ?", options: ["chevaux", "chevals", "chevales", "chevau"], answer: "chevaux", explication: "Noms en -al → pluriel en -aux : cheval → chevaux, journal → journaux, animal → animaux. Exceptions : bal → bals." },
      { question: "Quel est le pluriel de 'hibou' ?", options: ["hiboux", "hibous", "hibeaux", "hibouils"], answer: "hiboux", explication: "Quelques noms en -ou font leur pluriel en -oux : hibou → hiboux, genou → genoux, chou → choux, bijou → bijoux." },
      { question: "Quel est le féminin de 'acteur' ?", options: ["actrice", "acteuse", "acteurse", "acteure"], answer: "actrice", explication: "Noms en -eur → féminin en -rice : acteur/actrice, directeur/directrice, inspecteur/inspectrice." },
      { question: "Quel est le féminin de 'chanteur' ?", options: ["chanteuse", "chantrice", "chanteure", "chanteresse"], answer: "chanteuse", explication: "Noms en -eur → souvent -euse : chanteur/chanteuse, danseur/danseuse, nageur/nageuse." },
      { question: "Accordez : 'Elle est ___.' (fatigué)", options: ["fatiguée", "fatigué", "fatigués", "fatiguées"], answer: "fatiguée", explication: "L'adjectif attribut s'accorde avec le sujet. 'Elle' = féminin singulier → 'fatiguée' (ajout de -e)." },
      { question: "Quel est le pluriel de 'œil' ?", options: ["yeux", "œils", "œilles", "yeuils"], answer: "yeux", explication: "'Œil' a un pluriel totalement irrégulier : 'yeux'. À apprendre par cœur — c'est une exception absolue." },
      { question: "Accordez : 'Ils sont ___.' (content)", options: ["contents", "content", "contente", "contentes"], answer: "contents", explication: "Masculin pluriel : on ajoute -s à l'adjectif. 'Contents' = masculin pluriel de 'content'." }
    ],
    2: [
      { question: "Accordez : 'Des robes ___.' (rouge)", options: ["rouges", "rouge", "rougeaux", "rougis"], answer: "rouges", explication: "L'adjectif s'accorde en genre et nombre. 'Robes' = féminin pluriel → 'rouges' (-s au pluriel)." },
      { question: "Accordez : 'Des fleurs ___.' (beau)", options: ["belles", "beaux", "beau", "belle"], answer: "belles", explication: "'Fleurs' = féminin pluriel. 'Beau' → féminin 'belle' → féminin pluriel 'belles'." },
      { question: "Quelle phrase a une erreur sujet-verbe ?", options: ["Les chats dort.", "Le chat dort.", "Les chats dorment.", "Il dort bien."], answer: "Les chats dort.", explication: "'Les chats' = 3ème pers. pluriel → 'dorment'. 'Dort' est singulier. Erreur d'accord sujet-verbe." },
      { question: "Accordez : '___ devoirs sont faits.' (leur/leurs)", options: ["Leurs", "Leur"], answer: "Leurs", explication: "'Leurs' + nom pluriel. 'Devoirs' est pluriel → 'leurs devoirs'. Mémo : pluriel → leurs (avec -s)." },
      { question: "Quel participe passé convient ? 'Elle a ___ ses clés.' (perdre)", options: ["perdu", "perdue", "perdus", "perdues"], answer: "perdu", explication: "Avec 'avoir', le PP s'accorde avec le COD AVANT. Ici 'ses clés' est APRÈS → pas d'accord : 'perdu'." },
      { question: "Accordez : 'Les garçons sont ___.' (fatigué)", options: ["fatigués", "fatigué", "fatiguée", "fatiguées"], answer: "fatigués", explication: "'Les garçons' = masculin pluriel → 'fatigués' (-és). L'attribut s'accorde en genre et nombre avec le sujet." },
      { question: "Accordez : 'Des enfants ___.' (bruyant)", options: ["bruyants", "bruyante", "bruyant", "bruyantes"], answer: "bruyants", explication: "'Enfants' sans précision = masculin pluriel par défaut. Adjectif épithète → accord : 'bruyants'." },
      { question: "Accordez : 'La porte est ___.' (ouvert)", options: ["ouverte", "ouvert", "ouverts", "ouvertes"], answer: "ouverte", explication: "'La porte' = féminin singulier. Attribut du sujet → accord : 'ouverte' (ajout -e pour le féminin)." }
    ],
    3: [
      { question: "Accordez : 'Les robes qu'il a ___.' (acheter)", options: ["achetées", "acheté", "achetés", "acheter"], answer: "achetées", explication: "'Qu'il' reprend 'les robes' (fém. plur.), COD placé AVANT → accord féminin pluriel : 'achetées'." },
      { question: "Accordez : 'Les films que j'ai ___.' (voir)", options: ["vus", "vu", "vues", "vue"], answer: "vus", explication: "'Que' = 'les films' (masc. plur.), COD avant → 'vus'. Si c'était des photos : 'vues'." },
      { question: "Accordez : 'Elle s'est ___ les cheveux.' (laver)", options: ["lavé", "lavée", "lavés", "lavées"], answer: "lavé", explication: "COD 'les cheveux' est APRÈS le verbe → pas d'accord. PP invariable : 'elle s'est lavé les cheveux'." },
      { question: "Quel est le pluriel de 'travail' ?", options: ["travaux", "travails", "travailes", "travau"], answer: "travaux", explication: "'Travail' → pluriel irrégulier 'travaux'. Comme : bail → baux, corail → coraux, vitrail → vitraux." },
      { question: "Accordez : 'Quelle belle ___ !' (journée/journée)", options: ["journée", "journée", "journées", "journés"], answer: "journée", explication: "'Journée' est féminin singulier → l'adjectif 'belle' (déjà accordé ici) confirme le singulier." },
      { question: "Accordez : 'Ces hommes semblent ___.' (fatigué)", options: ["fatigués", "fatiguée", "fatigué", "fatiguées"], answer: "fatigués", explication: "'Ces hommes' = masculin pluriel. Attribut du sujet → accord masculin pluriel : 'fatigués'." },
      { question: "Quelle est la bonne orthographe ?", options: ["Les vieilles maisons sont belles.", "Les vieilles maison sont belles.", "Les vieil maisons sont belles.", "Les vieilles maisons sont beau."], answer: "Les vieilles maisons sont belles.", explication: "Tous les accords : 'vieilles' (fém. pl.), 'maisons' (fém. pl.), 'belles' (attribut fém. pl.). Seule la première est correcte." },
      { question: "Accordez : 'Combien de lettres as-tu ___?' (écrire)", options: ["écrites", "écrit", "écrits", "écrire"], answer: "écrites", explication: "'Combien de lettres' = COD féminin pluriel placé avant le verbe → accord féminin pluriel : 'écrites'." }
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

  // ── SOUS-CHAPITRES LECTURE ──
  francais6Lect_Narratologie: {
    id: 'francais6Lect_Narratologie', nom: 'Narrateur & point de vue', emoji: '👁️', couleur: '#16a34a',
    1: [
      { question: "Comment appelle-t-on la voix qui raconte une histoire ?", options: ["Le narrateur", "L'auteur", "Le héros", "Le lecteur"], answer: "Le narrateur", explication: "Le narrateur est la voix fictive qui raconte. Il peut être un personnage (narrateur interne) ou extérieur à l'histoire (narrateur externe)." },
      { question: "Dans 'Je marchais dans la forêt', le narrateur est…", options: ["Interne (personnage)", "Externe (hors histoire)", "Absent", "L'auteur lui-même"], answer: "Interne (personnage)", explication: "Le pronom 'je' indique que le narrateur est un personnage qui vit les événements." },
      { question: "Quel pronom indique un narrateur interne ?", options: ["Je / nous", "Il / elle", "On (impersonnel)", "Vous"], answer: "Je / nous", explication: "Un narrateur interne utilise 'je' (ou 'nous') car il fait partie de l'histoire." },
      { question: "Un narrateur qui sait tout sur tous les personnages est dit…", options: ["Omniscient", "Limité", "Externe", "Absent"], answer: "Omniscient", explication: "Le narrateur omniscient connaît les pensées, sentiments et actions de tous les personnages. C'est fréquent dans les contes." },
      { question: "Le point de vue interne signifie que…", options: ["On voit l'histoire à travers un seul personnage", "Le narrateur est extérieur", "On voit tout sans limite", "Il n'y a pas de narrateur"], answer: "On voit l'histoire à travers un seul personnage", explication: "Le point de vue interne (ou focal) limite ce qu'on sait à ce qu'un personnage perçoit et ressent." },
      { question: "Dans un album de BD, qui raconte l'histoire sans mots ?", options: ["Les images (dessin)", "L'auteur", "Le bulle", "Le titre"], answer: "Les images (dessin)", explication: "Dans une BD, les dessins racontent autant que les textes. L'image joue le rôle du narrateur visuel." },
      { question: "'Il entendit un bruit derrière lui, mais ne se retourna pas.' Quel point de vue est utilisé ?", options: ["Interne", "Externe", "Omniscient", "Absent"], answer: "Interne", explication: "On suit les perceptions d'un seul personnage ('il entendit'). C'est le point de vue interne." },
      { question: "L'auteur d'un roman et le narrateur sont…", options: ["Deux entités différentes", "La même personne", "Toujours des personnages", "Toujours anonymes"], answer: "Deux entités différentes", explication: "L'auteur est la vraie personne qui a écrit le livre. Le narrateur est une voix fictive créée par l'auteur." }
    ],
    2: [
      { question: "Le narrateur omniscient peut…", options: ["Lire dans les pensées de tous les personnages", "Seulement décrire les actions visibles", "Parler uniquement à la 1ère personne", "Ne pas connaître la fin"], answer: "Lire dans les pensées de tous les personnages", explication: "L'omniscience = tout savoir. Le narrateur omniscient accède aux pensées, désirs et secrets de tous." },
      { question: "Dans quel point de vue le lecteur en sait autant que le personnage principal ?", options: ["Point de vue interne", "Point de vue omniscient", "Point de vue externe", "Point de vue zéro"], answer: "Point de vue interne", explication: "Le point de vue interne limite la connaissance du lecteur à celle du personnage focal." },
      { question: "Un narrateur externe (béhavioriste) décrit…", options: ["Uniquement ce qui est observable de l'extérieur", "Les pensées secrètes", "Le futur des personnages", "Ses propres émotions"], answer: "Uniquement ce qui est observable de l'extérieur", explication: "Le point de vue externe ne pénètre pas l'intériorité. Il décrit les gestes et paroles comme une caméra." },
      { question: "Quelle marque linguistique indique un narrateur-personnage ?", options: ["Pronom 'je' + verbes à la 1ère pers.", "Pronom 'il' seul", "Absence de verbe", "Guillemets"], answer: "Pronom 'je' + verbes à la 1ère pers.", explication: "Le narrateur interne se reconnaît aux pronoms de 1ère personne et aux verbes conjugués en 'je/nous'." },
      { question: "Changer de point de vue dans un roman peut servir à…", options: ["Montrer la même scène sous différents angles", "Supprimer des personnages", "Raccourcir le texte", "Changer l'époque"], answer: "Montrer la même scène sous différents angles", explication: "Alterner les points de vue enrichit la narration et révèle ce que chaque personnage pense d'une même situation." },
      { question: "Un récit autobiographique utilise quel pronom dominant ?", options: ["Je", "Il", "Tu", "On"], answer: "Je", explication: "L'autobiographie est le récit de sa propre vie : le narrateur = l'auteur, d'où l'usage de 'je'." },
      { question: "Dans 'Elle ne savait pas que le piège était tendu.' Quel est le point de vue ?", options: ["Omniscient", "Interne (elle)", "Externe", "Autobiographique"], answer: "Omniscient", explication: "Le narrateur sait ce que le personnage ignore : c'est une marque de l'omniscience." },
      { question: "Le narrateur peu fiable est un narrateur qui…", options: ["Déforme la réalité (volontairement ou non)", "Connaît tout", "Ne parle jamais", "Est toujours externe"], answer: "Déforme la réalité (volontairement ou non)", explication: "Certains narrateurs mentent ou se trompent. Le lecteur doit alors lire entre les lignes pour trouver la vérité." }
    ],
    3: [
      { question: "Qu'est-ce que la focalisation zéro ?", options: ["Narrateur omniscient sans limite de savoir", "Narrateur limité à un personnage", "Absence de narrateur", "Narration en 2ème personne"], answer: "Narrateur omniscient sans limite de savoir", explication: "La focalisation zéro (Genette) = narrateur omniscient qui en sait plus que n'importe quel personnage." },
      { question: "La focalisation interne fixe signifie…", options: ["Un seul personnage focal tout au long du récit", "Le point de vue change à chaque chapitre", "La caméra filme de l'extérieur", "Le narrateur est omniscient"], answer: "Un seul personnage focal tout au long du récit", explication: "Dans la focalisation interne fixe, on reste ancré dans la conscience d'un même personnage d'un bout à l'autre." },
      { question: "Qu'est-ce que la focalisation interne variable ?", options: ["Le point de vue change selon les chapitres ou passages", "Le narrateur est toujours omniscient", "Il n'y a pas de personnage principal", "Le narrateur disparaît"], answer: "Le point de vue change selon les chapitres ou passages", explication: "La focalisation interne variable alterne entre plusieurs personnages focaux, offrant plusieurs perspectives." },
      { question: "Quelle figure stylistique révèle les pensées d'un personnage sans guillemets ?", options: ["Le discours indirect libre", "La métaphore", "L'ellipse", "Le zeugme"], answer: "Le discours indirect libre", explication: "Le discours indirect libre fond la voix du narrateur et du personnage : 'Était-elle donc condamnée ?' (sans 'elle se demandait si')." },
      { question: "Un récit à la 2ème personne ('tu fais, tu penses…') crée quel effet ?", options: ["Implication du lecteur dans l'histoire", "Distance maximale", "Omniscience totale", "Absence de narrateur"], answer: "Implication du lecteur dans l'histoire", explication: "Le 'tu' narratif est rare mais puissant : il fait du lecteur un acteur, le plonge dans l'histoire." },
      { question: "Dans un roman policier, l'auteur cache des informations au lecteur grâce à…", options: ["La focalisation interne (personnage qui ne sait pas tout)", "La focalisation zéro", "L'absence de narrateur", "La 3ème personne seule"], answer: "La focalisation interne (personnage qui ne sait pas tout)", explication: "En limitant le savoir au personnage focal, l'auteur entretient le suspense : le lecteur découvre en même temps que lui." },
      { question: "Qu'appelle-t-on la 'voix narrative' ?", options: ["La façon dont le narrateur s'exprime et se positionne", "Le ton de l'auteur en interview", "La police de caractère du texte", "Le dialogue entre personnages"], answer: "La façon dont le narrateur s'exprime et se positionne", explication: "La voix narrative recouvre le ton, les choix lexicaux et la distance du narrateur vis-à-vis de l'histoire." },
      { question: "Un narrateur intradiégétique est…", options: ["Un personnage de l'histoire qui raconte", "Un narrateur extérieur à toute fiction", "Le lecteur lui-même", "L'auteur réel"], answer: "Un personnage de l'histoire qui raconte", explication: "Intradiégétique = à l'intérieur de la diégèse (l'univers fictif). Ce narrateur est aussi un personnage." }
    ]
  },

  francais6Lect_Comprehension: {
    id: 'francais6Lect_Comprehension', nom: 'Comprendre un texte', emoji: '🔍', couleur: '#16a34a',
    1: [
      { question: "Pour comprendre un texte, la première étape est de…", options: ["Le lire entièrement", "Regarder uniquement les images", "Lire seulement la fin", "Chercher les mots difficiles avant tout"], answer: "Le lire entièrement", explication: "Avant tout, il faut lire le texte en entier pour en saisir le sens global." },
      { question: "Qu'est-ce que l'idée principale d'un paragraphe ?", options: ["L'information la plus importante", "Le premier mot", "Le mot le plus long", "La ponctuation"], answer: "L'information la plus importante", explication: "L'idée principale résume ce dont parle le paragraphe. Les autres phrases l'illustrent ou la développent." },
      { question: "Un mot inconnu dans un texte, que faire ?", options: ["Chercher son sens grâce au contexte", "Ignorer le texte entier", "Arrêter de lire", "Inventer un sens"], answer: "Chercher son sens grâce au contexte", explication: "Le contexte (les mots autour) aide souvent à deviner le sens d'un mot inconnu." },
      { question: "Reformuler un texte, c'est…", options: ["Le redire avec ses propres mots", "Le copier mot pour mot", "L'illustrer", "Le résumer en un mot"], answer: "Le redire avec ses propres mots", explication: "Reformuler = exprimer la même idée autrement. C'est une preuve de compréhension." },
      { question: "Un titre de texte sert à…", options: ["Annoncer le sujet principal", "Donner la conclusion", "Lister les personnages", "Indiquer la longueur"], answer: "Annoncer le sujet principal", explication: "Le titre est une clé d'entrée dans le texte : il annonce le thème ou attire l'attention du lecteur." },
      { question: "Dans un texte narratif, les événements sont généralement racontés…", options: ["Dans l'ordre chronologique", "Du plus important au moins important", "En commençant par la fin", "Au hasard"], answer: "Dans l'ordre chronologique", explication: "Un texte narratif classique suit le temps : début → milieu → fin, même si des retours en arrière sont possibles." },
      { question: "Un résumé doit être…", options: ["Court et fidèle au texte", "Plus long que l'original", "Une opinion personnelle", "Une liste de mots-clés"], answer: "Court et fidèle au texte", explication: "Un résumé garde les informations essentielles et élimine les détails, sans ajouter d'opinions." },
      { question: "Pourquoi souligner les mots-clés aide-t-il à comprendre ?", options: ["Cela repère les informations essentielles", "Cela décore le texte", "Cela remplace la lecture", "Cela raccourcit le texte"], answer: "Cela repère les informations essentielles", explication: "Les mots-clés portent l'essentiel du sens. Les repérer permet de retrouver rapidement les infos importantes." }
    ],
    2: [
      { question: "L'inférence, c'est…", options: ["Comprendre ce qui n'est pas dit explicitement", "Lire à voix haute", "Copier le texte", "Trouver la morale"], answer: "Comprendre ce qui n'est pas dit explicitement", explication: "L'inférence consiste à déduire des informations implicites à partir d'indices dans le texte." },
      { question: "Un texte implicite contient…", options: ["Des informations qu'on doit déduire", "Uniquement des faits clairs", "Des images", "Des chiffres uniquement"], answer: "Des informations qu'on doit déduire", explication: "L'implicite = ce qui n'est pas dit clairement mais que le lecteur doit comprendre par déduction." },
      { question: "Pour trouver le thème d'un texte, on cherche…", options: ["De quoi parle le texte en général", "Le personnage principal", "Le premier verbe", "La date d'écriture"], answer: "De quoi parle le texte en général", explication: "Le thème est le sujet global (amour, guerre, nature…), différent de l'idée principale qui est plus précise." },
      { question: "Un connecteur logique comme 'donc' exprime…", options: ["Une conséquence", "Une opposition", "Une cause", "Une énumération"], answer: "Une conséquence", explication: "'Donc' introduit la conséquence : 'Il pleut, donc je prends un parapluie.'" },
      { question: "'Cependant' est un connecteur qui exprime…", options: ["Une opposition", "Une cause", "Une conséquence", "Une addition"], answer: "Une opposition", explication: "'Cependant', 'mais', 'or', 'pourtant' marquent une opposition ou une nuance entre deux idées." },
      { question: "La structure d'un texte argumentatif comprend généralement…", options: ["Thèse, arguments, conclusion", "Introduction, péripétie, dénouement", "Situation initiale, problème, solution", "Titre, corps, résumé"], answer: "Thèse, arguments, conclusion", explication: "Un texte argumentatif défend une idée (thèse) avec des arguments, et tire une conclusion." },
      { question: "Quand un auteur utilise des chiffres dans son texte, cela sert à…", options: ["Appuyer son propos avec des faits précis", "Décorer le texte", "Remplacer les adjectifs", "Indiquer l'heure"], answer: "Appuyer son propos avec des faits précis", explication: "Les données chiffrées (statistiques, dates, mesures) renforcent la crédibilité d'un argument." },
      { question: "La visée d'un texte, c'est…", options: ["Son intention (informer, convaincre, divertir…)", "Son nombre de pages", "Son auteur", "Sa date de parution"], answer: "Son intention (informer, convaincre, divertir…)", explication: "La visée = le but du texte. Un texte peut informer, persuader, émouvoir, divertir ou faire agir." }
    ],
    3: [
      { question: "Qu'est-ce qu'un présupposé dans un texte ?", options: ["Une information considérée comme acquise sans être explicitée", "Une erreur de l'auteur", "Un résumé", "Une opinion personnelle"], answer: "Une information considérée comme acquise sans être explicitée", explication: "Le présupposé est ce que l'énoncé tient pour acquis. Ex : 'Il a encore raté.' → présupposé : il rate souvent." },
      { question: "La polysémie d'un mot signifie…", options: ["Il a plusieurs sens selon le contexte", "Il n'a aucun sens", "Il est toujours positif", "C'est un mot rare"], answer: "Il a plusieurs sens selon le contexte", explication: "Un mot polysémique a plusieurs significations (ex : 'opération' = chirurgie ou calcul ou mission militaire)." },
      { question: "Analyser la syntaxe d'une phrase permet de…", options: ["Comprendre les relations entre les mots", "Compter les syllabes", "Trouver la rime", "Identifier l'auteur"], answer: "Comprendre les relations entre les mots", explication: "La syntaxe étudie la fonction et l'ordre des mots. Comprendre la syntaxe éclaire le sens de phrases complexes." },
      { question: "Un texte à visée polémique cherche à…", options: ["Provoquer, choquer ou susciter une réaction vive", "Simplement informer", "Raconter une histoire neutre", "Enseigner un fait scientifique"], answer: "Provoquer, choquer ou susciter une réaction vive", explication: "Un texte polémique prend position de façon tranchée et veut provoquer un débat ou un choc." },
      { question: "La connotation d'un mot, c'est…", options: ["Son sens subjectif, évocateur", "Sa définition dans le dictionnaire", "Sa catégorie grammaticale", "Son nombre de lettres"], answer: "Son sens subjectif, évocateur", explication: "La connotation = les valeurs ou images que le mot évoque au-delà de son sens propre (ex : 'serpent' connote la trahison)." },
      { question: "L'anaphore pronominale consiste à…", options: ["Reprendre un mot avec un pronom pour éviter la répétition", "Répéter le même mot plusieurs fois", "Supprimer le sujet", "Changer de temps verbal"], answer: "Reprendre un mot avec un pronom pour éviter la répétition", explication: "Ex : 'Marie est arrivée. Elle souriait.' → 'Elle' reprend 'Marie'. C'est une anaphore pronominale (cohérence textuelle)." },
      { question: "La progression thématique d'un texte désigne…", options: ["La façon dont les informations nouvelles s'enchaînent", "Le nombre de personnages", "La longueur des phrases", "Le registre de langue"], answer: "La façon dont les informations nouvelles s'enchaînent", explication: "Dans un texte cohérent, chaque phrase apporte une information nouvelle (rhème) reliée à ce qui précède (thème)." },
      { question: "Un texte hybride mêle…", options: ["Plusieurs types de textes (narratif + descriptif, etc.)", "Plusieurs langues", "Plusieurs auteurs", "Plusieurs éditions"], answer: "Plusieurs types de textes (narratif + descriptif, etc.)", explication: "La plupart des textes réels mêlent les types : un roman peut être narratif, descriptif et dialogué à la fois." }
    ]
  },

  francais6Lect_Genres: {
    id: 'francais6Lect_Genres', nom: 'Genres & schéma narratif', emoji: '📚', couleur: '#16a34a',
    1: [
      { question: "Le schéma narratif d'un conte commence par…", options: ["La situation initiale", "Le dénouement", "L'élément perturbateur", "La morale"], answer: "La situation initiale", explication: "Le schéma narratif classique : situation initiale → élément perturbateur → péripéties → dénouement → situation finale." },
      { question: "L'élément perturbateur dans un récit, c'est…", options: ["Ce qui vient troubler l'équilibre initial", "La fin heureuse", "Le personnage principal", "Le titre"], answer: "Ce qui vient troubler l'équilibre initial", explication: "L'élément perturbateur (ou déclencheur) rompt l'équilibre du début et met l'histoire en marche." },
      { question: "Un conte merveilleux se reconnaît à…", options: ["La présence d'êtres et d'objets magiques", "Des faits scientifiques", "Un décor moderne", "Une fin triste"], answer: "La présence d'êtres et d'objets magiques", explication: "Le conte merveilleux inclut fées, géants, sorcières, baguettes magiques… Le surnaturel est accepté comme normal." },
      { question: "Quelle est la situation finale dans le schéma narratif ?", options: ["Le nouvel équilibre après les péripéties", "Le début de l'histoire", "Le moment de crise", "La description des personnages"], answer: "Le nouvel équilibre après les péripéties", explication: "La situation finale clôt le récit : elle montre si l'équilibre est restauré (fin heureuse) ou non (fin tragique)." },
      { question: "Un mythe est un récit qui…", options: ["Explique l'origine du monde ou des phénomènes", "Raconte une aventure moderne", "Est toujours drôle", "Se passe à l'époque contemporaine"], answer: "Explique l'origine du monde ou des phénomènes", explication: "Les mythes (grecs, nordiques, africains…) racontent des histoires sacrées sur la création du monde, des dieux, des hommes." },
      { question: "La fable de La Fontaine appartient au genre…", options: ["Fable (récit court avec morale)", "Roman", "Poème épique", "Conte merveilleux"], answer: "Fable (récit court avec morale)", explication: "La fable est un récit court, souvent avec des animaux, qui se termine par une leçon morale." },
      { question: "Les péripéties d'un récit sont…", options: ["Les aventures et obstacles rencontrés", "La fin de l'histoire", "Le début calme", "Les dialogues entre personnages"], answer: "Les aventures et obstacles rencontrés", explication: "Les péripéties = les événements successifs qui constituent le corps du récit, entre perturbation et dénouement." },
      { question: "Une légende est différente d'un conte car elle…", options: ["Se prétend ancrée dans l'histoire réelle", "Est toujours inventée", "N'a pas de personnages", "Se passe dans l'espace"], answer: "Se prétend ancrée dans l'histoire réelle", explication: "La légende mêle faits historiques et éléments merveilleux. Elle est présentée comme vraie, contrairement au conte." }
    ],
    2: [
      { question: "Le genre épique se caractérise par…", options: ["Des héros aux exploits extraordinaires", "Des histoires d'amour modernes", "Des sujets scientifiques", "Des personnages ordinaires"], answer: "Des héros aux exploits extraordinaires", explication: "L'épopée (genre épique) met en scène des héros surhumains affrontant des épreuves colossales (Ulysse, Hercule…)." },
      { question: "Qu'est-ce qu'un anti-héros ?", options: ["Un personnage principal aux qualités contraires au héros classique", "Un méchant absolu", "Un héros parfait", "Un personnage secondaire"], answer: "Un personnage principal aux qualités contraires au héros classique", explication: "L'anti-héros est imparfait, vulnérable, parfois lâche ou malhonnête, mais reste le protagoniste de l'histoire." },
      { question: "Le roman d'apprentissage (Bildungsroman) raconte…", options: ["La formation et la maturation d'un jeune personnage", "Une guerre historique", "Un voyage fantastique", "Un crime résolu"], answer: "La formation et la maturation d'un jeune personnage", explication: "Ce genre suit un héros jeune qui grandit, apprend et se transforme au fil des épreuves." },
      { question: "La science-fiction se distingue du fantastique par…", options: ["Des explications pseudo-scientifiques aux éléments étranges", "La magie pure", "Des personnages historiques", "L'absence de futur"], answer: "Des explications pseudo-scientifiques aux éléments étranges", explication: "La SF ancre ses éléments insolites dans une logique scientifique (technologie, espace, génétique), contrairement au fantastique." },
      { question: "Dans le genre policier, le schéma narratif débute souvent par…", options: ["Un crime ou mystère à élucider", "Un amour naissant", "Une fête villageoise", "Un voyage en mer"], answer: "Un crime ou mystère à élucider", explication: "Le roman policier présente un crime (ou mystère) qui motive toute l'intrigue jusqu'à sa résolution." },
      { question: "Le registre comique vise à…", options: ["Faire rire ou sourire le lecteur", "Émouvoir jusqu'aux larmes", "Effrayer", "Informer froidement"], answer: "Faire rire ou sourire le lecteur", explication: "Le registre comique utilise humour, ironie, quiproquos, caricatures pour provoquer le rire." },
      { question: "Le schéma actanciel comprend notamment…", options: ["Sujet, objet, adjuvant, opposant", "Héros, méchant, princesse", "Début, milieu, fin", "Narrateur, lecteur, auteur"], answer: "Sujet, objet, adjuvant, opposant", explication: "Le schéma actanciel (Greimas) analyse les rôles : sujet (qui veut ?), objet (quoi ?), adjuvant (aide), opposant (obstacle)." },
      { question: "Un récit fantastique se caractérise par…", options: ["Une hésitation entre explication réelle et surnaturelle", "La magie acceptée d'emblée", "Un univers futuriste", "Des faits entièrement réels"], answer: "Une hésitation entre explication réelle et surnaturelle", explication: "Le fantastique crée l'inquiétude car le lecteur hésite : est-ce réel ou surnaturel ? C'est l'hésitation fantastique (Todorov)." }
    ],
    3: [
      { question: "L'intertextualité désigne…", options: ["Les références d'un texte à d'autres textes", "La longueur d'un texte", "Le style de l'auteur", "La ponctuation"], answer: "Les références d'un texte à d'autres textes", explication: "Un texte peut citer, parodier ou imiter d'autres œuvres. Ces liens entre textes = intertextualité." },
      { question: "La parodie est un texte qui…", options: ["Imite un genre ou une œuvre pour en rire", "Copie fidèlement un original", "Traduit un texte", "Résume une œuvre"], answer: "Imite un genre ou une œuvre pour en rire", explication: "La parodie détourne les codes d'un genre ou d'une œuvre dans une intention comique ou critique." },
      { question: "Qu'est-ce que la diégèse ?", options: ["L'univers fictif dans lequel se déroule l'histoire", "Le résumé du texte", "La biographie de l'auteur", "Le titre du roman"], answer: "L'univers fictif dans lequel se déroule l'histoire", explication: "La diégèse = le monde de la fiction (personnages, lieux, temps). On dit qu'un événement est 'intradiégétique' s'il se passe dans cet univers." },
      { question: "L'ellipse narrative consiste à…", options: ["Passer sous silence une période de temps", "Ralentir le récit", "Répéter un événement", "Anticiper la fin"], answer: "Passer sous silence une période de temps", explication: "L'ellipse saute un intervalle de temps : 'Dix ans plus tard, il revenait…' sans raconter ces dix années." },
      { question: "La prolepse (ou anticipation) est…", options: ["Une allusion à des événements futurs", "Un retour en arrière", "Une pause descriptive", "Un dialogue long"], answer: "Une allusion à des événements futurs", explication: "La prolepse anticipe un événement futur ('Il ne savait pas encore que ce jour serait le dernier.'). Contraire : analepse (retour arrière)." },
      { question: "Le registre tragique se définit par…", options: ["Un destin inéluctable, des passions et une fin funeste", "Le rire et la légèreté", "L'espoir et la victoire finale", "Des faits ordinaires"], answer: "Un destin inéluctable, des passions et une fin funeste", explication: "La tragédie met en scène des héros pris dans un destin qu'ils ne peuvent fuir, souvent jusqu'à la mort." },
      { question: "Qu'est-ce que le pacte de lecture ?", options: ["L'accord implicite entre auteur et lecteur sur le genre du texte", "Un contrat signé par l'auteur", "La préface du livre", "La quatrième de couverture"], answer: "L'accord implicite entre auteur et lecteur sur le genre du texte", explication: "Le pacte de lecture signale au lecteur à quel genre appartient le texte (roman, autobiographie, fiction…) et conditionne sa lecture." },
      { question: "La mise en abyme est un procédé narratif qui…", options: ["Insère une histoire dans l'histoire", "Raccourcit le récit", "Supprime le narrateur", "Change la fin"], answer: "Insère une histoire dans l'histoire", explication: "La mise en abyme est une histoire enchâssée qui reflète la structure du récit principal (ex : un personnage qui lit un livre similaire à celui qu'on lit)." }
    ]
  },

  // ── SOUS-CHAPITRES ÉCRITURE ──
  francais6Ecrit_Redaction: {
    id: 'francais6Ecrit_Redaction', nom: 'Techniques de rédaction', emoji: '✏️', couleur: '#0d9488',
    1: [
      { question: "Pour écrire la suite d'un texte, il faut d'abord…", options: ["Relire le texte d'origine", "Inventer de nouveaux personnages", "Changer le lieu", "Écrire sans réfléchir"], answer: "Relire le texte d'origine", explication: "La suite doit respecter les personnages, le ton et la situation déjà établis." },
      { question: "Dans un dialogue écrit, comment marque-t-on qu'un personnage parle ?", options: ["Avec des tirets (—) ou des guillemets (« »)", "En majuscules", "En italique uniquement", "Avec des astérisques"], answer: "Avec des tirets (—) ou des guillemets (« »)", explication: "Chaque prise de parole = nouvelle ligne + tiret (ou guillemets à l'ouverture du dialogue)." },
      { question: "Un paragraphe doit traiter…", options: ["Une seule idée principale", "Toutes les idées du texte", "Uniquement des dialogues", "Au moins trois thèmes"], answer: "Une seule idée principale", explication: "Un bon paragraphe = une idée + des exemples ou développements. Changer d'idée = changer de paragraphe." },
      { question: "Pour décrire un lieu, on utilise surtout…", options: ["Des adjectifs et des verbes de perception", "Des chiffres et des dates", "Des dialogues", "Des connecteurs temporels"], answer: "Des adjectifs et des verbes de perception", explication: "La description fait appel aux sens : voir, entendre, sentir, toucher. Les adjectifs qualificatifs sont essentiels." },
      { question: "Le brouillon sert à…", options: ["Écrire librement avant de corriger", "Remettre au professeur", "Éviter de penser", "Copier le texte d'un autre"], answer: "Écrire librement avant de corriger", explication: "Le brouillon = premier jet sans censure. On améliore ensuite : vocabulaire, structure, orthographe." },
      { question: "Pour relier deux idées dans un texte, on utilise…", options: ["Des connecteurs logiques", "Des virgules uniquement", "Des titres", "Des guillemets"], answer: "Des connecteurs logiques", explication: "Les connecteurs (donc, mais, car, ensuite, cependant…) assurent la cohérence et la fluidité du texte." },
      { question: "Pour raconter des événements dans l'ordre, on utilise…", options: ["Des connecteurs temporels (d'abord, ensuite, enfin)", "Des adjectifs", "Des guillemets", "Des points d'exclamation"], answer: "Des connecteurs temporels (d'abord, ensuite, enfin)", explication: "'D'abord… puis… enfin…' organisent la chronologie et guident le lecteur." },
      { question: "La relecture d'un texte sert à…", options: ["Corriger les erreurs et améliorer la clarté", "Tout recommencer", "Supprimer les adjectifs", "Raccourcir les phrases"], answer: "Corriger les erreurs et améliorer la clarté", explication: "La relecture permet de repérer fautes d'orthographe, maladresses, répétitions, et d'améliorer la formulation." }
    ],
    2: [
      { question: "Dans un récit, comment introduire un retour en arrière ?", options: ["Par une formule comme 'quelques années auparavant…'", "En changeant de narrateur", "En ajoutant un dialogue", "En décrivant la météo"], answer: "Par une formule comme 'quelques années auparavant…'", explication: "Le retour en arrière (analepse) est signalé par des marqueurs temporels qui indiquent qu'on remonte dans le passé." },
      { question: "Pour donner son avis dans un texte, on utilise…", options: ["Des verbes d'opinion : je pense, j'estime, il me semble…", "Uniquement des faits", "Le conditionnel seul", "La négation"], answer: "Des verbes d'opinion : je pense, j'estime, il me semble…", explication: "Les verbes d'opinion marquent clairement qu'il s'agit d'un point de vue subjectif et non d'un fait objectif." },
      { question: "Un texte descriptif réussi utilise…", options: ["Des champs lexicaux cohérents et des détails sensoriels", "Uniquement des dialogues", "Des formules mathématiques", "Des listes à puces"], answer: "Des champs lexicaux cohérents et des détails sensoriels", explication: "La description efficace organise les détails (du général au particulier) et fait appel aux cinq sens." },
      { question: "Comment éviter les répétitions dans un texte ?", options: ["Utiliser des synonymes et des pronoms", "Supprimer les phrases", "Écrire en majuscules", "Utiliser toujours le même verbe"], answer: "Utiliser des synonymes et des pronoms", explication: "Les synonymes varient le vocabulaire, les pronoms reprennent les noms sans les répéter : deux outils de cohérence textuelle." },
      { question: "La phrase d'accroche sert à…", options: ["Capter l'attention du lecteur dès le début", "Conclure le texte", "Lister les arguments", "Introduire le narrateur"], answer: "Capter l'attention du lecteur dès le début", explication: "La phrase d'accroche (question, citation, anecdote…) donne envie de lire la suite du texte." },
      { question: "Dans un texte argumentatif, un argument doit être…", options: ["Étayé par un exemple ou une preuve", "Seul, sans justification", "Toujours personnel", "En majuscules"], answer: "Étayé par un exemple ou une preuve", explication: "Un argument sans exemple reste faible. L'illustration (exemple, citation, chiffre) rend l'argument convaincant." },
      { question: "La conclusion d'un texte doit…", options: ["Résumer et ouvrir sur une perspective", "Répéter l'introduction mot pour mot", "Ajouter de nouveaux arguments", "Poser une question sans réponse"], answer: "Résumer et ouvrir sur une perspective", explication: "La conclusion fait le bilan de ce qui a été dit, puis propose une ouverture (autre angle, question, piste)." },
      { question: "L'expansion du groupe nominal permet de…", options: ["Enrichir la description en ajoutant des précisions", "Raccourcir la phrase", "Supprimer le verbe", "Changer le temps"], answer: "Enrichir la description en ajoutant des précisions", explication: "On peut enrichir un GN avec un adjectif, un complément du nom ou une proposition relative : 'un château / un vieux château / un château en ruine'." }
    ],
    3: [
      { question: "Le registre de langue doit être adapté à…", options: ["La situation de communication et au destinataire", "La longueur du texte", "Le nombre de personnages", "La date de rédaction"], answer: "La situation de communication et au destinataire", explication: "On n'écrit pas à un ami comme à un directeur. Le registre (familier, courant, soutenu) dépend du contexte et du destinataire." },
      { question: "L'effet de réel dans un récit s'obtient par…", options: ["Des détails précis et vraisemblables", "Des événements impossibles", "L'absence de description", "Des dialogues uniquement"], answer: "Des détails précis et vraisemblables", explication: "Des noms de rues, des dates, des descriptions minutieuses ancrent le récit dans la réalité et rendent l'histoire crédible." },
      { question: "La focalisation d'un récit influence…", options: ["Ce que le lecteur sait ou ignore", "La longueur des phrases", "Le nombre de chapitres", "Le titre"], answer: "Ce que le lecteur sait ou ignore", explication: "Choisir le point de vue (interne, externe, omniscient) détermine les informations accessibles au lecteur." },
      { question: "Pour créer du suspense dans un récit, on peut…", options: ["Retarder la résolution et multiplier les indices", "Donner toutes les réponses au début", "Supprimer les personnages secondaires", "Écrire au présent uniquement"], answer: "Retarder la résolution et multiplier les indices", explication: "Le suspense naît de l'attente : on donne des indices, on retarde la révélation, on multiplie les fausses pistes." },
      { question: "Le style indirect libre permet de…", options: ["Intégrer les pensées d'un personnage sans marqueur explicite", "Citer mot pour mot un discours", "Supprimer les dialogues", "Passer à la 1ère personne"], answer: "Intégrer les pensées d'un personnage sans marqueur explicite", explication: "Ex : 'Il rentra chez lui. Pourquoi avait-il dit ça ?' La question est dans la tête du personnage, pas entre guillemets." },
      { question: "L'hyperbole dans un texte expressif sert à…", options: ["Exagérer pour intensifier l'effet", "Atténuer une idée", "Omettre un détail", "Comparer deux choses"], answer: "Exagérer pour intensifier l'effet", explication: "L'hyperbole = exagération volontaire : 'Je t'ai attendu une éternité !' pour renforcer l'expression d'un sentiment." },
      { question: "Pour rendre un personnage crédible, il faut lui donner…", options: ["Des traits physiques, psychologiques et une motivation", "Uniquement un prénom", "Un costume détaillé", "Une liste de ses actions"], answer: "Des traits physiques, psychologiques et une motivation", explication: "Un personnage crédible a une apparence, une personnalité et un but qui expliquent ses choix et actions." },
      { question: "L'ironie dans un texte consiste à…", options: ["Dire le contraire de ce qu'on pense pour critiquer", "Exagérer une idée", "Poser des questions rhétoriques", "Supprimer les adjectifs"], answer: "Dire le contraire de ce qu'on pense pour critiquer", explication: "L'ironie dit une chose et en signifie une autre : 'Quelle belle idée !' peut vouloir dire l'inverse." }
    ]
  },

  francais6Ecrit_Figures: {
    id: 'francais6Ecrit_Figures', nom: 'Figures de style', emoji: '🎨', couleur: '#0d9488',
    1: [
      { question: "La comparaison utilise…", options: ["Un outil de comparaison (comme, tel, pareil à…)", "Aucun mot de liaison", "Un verbe d'action", "Une négation"], answer: "Un outil de comparaison (comme, tel, pareil à…)", explication: "La comparaison rapproche deux éléments avec un outil : 'rapide comme l'éclair'. Sans outil = métaphore." },
      { question: "La métaphore est…", options: ["Une comparaison sans outil de comparaison", "Une exagération", "Une répétition", "Une question rhétorique"], answer: "Une comparaison sans outil de comparaison", explication: "'Il est un lion.' est une métaphore : pas de 'comme'. 'Il est comme un lion.' serait une comparaison." },
      { question: "La personnification consiste à…", options: ["Attribuer des qualités humaines à un objet ou animal", "Comparer deux personnes", "Répéter un son", "Exagérer une idée"], answer: "Attribuer des qualités humaines à un objet ou animal", explication: "'Le vent murmure' = le vent (inanimé) fait une action humaine (murmurer). C'est une personnification." },
      { question: "L'hyperbole est une figure qui…", options: ["Exagère pour renforcer l'expression", "Atténue une réalité", "Compare deux objets", "Pose une question"], answer: "Exagère pour renforcer l'expression", explication: "'Je meurs de faim !' est une hyperbole : personne ne meurt de faim pour le déjeuner. C'est une exagération expressive." },
      { question: "L'anaphore consiste à…", options: ["Répéter un mot ou groupe en début de phrase", "Omettre un mot", "Inverser l'ordre des mots", "Comparer deux éléments"], answer: "Répéter un mot ou groupe en début de phrase", explication: "'Je rêve… Je rêve… Je rêve…' : la répétition en tête de phrase crée un effet rythmique et insistant." },
      { question: "'La lune dormait sur la mer.' est un exemple de…", options: ["Personnification", "Métaphore", "Comparaison", "Hyperbole"], answer: "Personnification", explication: "La lune (inanimée) 'dort' comme un être humain. C'est une personnification." },
      { question: "L'euphémisme sert à…", options: ["Atténuer une réalité difficile ou choquante", "Exagérer", "Comparer", "Répéter"], answer: "Atténuer une réalité difficile ou choquante", explication: "Ex : 'Il a disparu' à la place de 'il est mort'. L'euphémisme adoucit pour ne pas heurter." },
      { question: "'Rapide comme l'éclair' est…", options: ["Une comparaison", "Une métaphore", "Une personnification", "Une hyperbole"], answer: "Une comparaison", explication: "Le mot 'comme' est l'outil de comparaison. Sans 'comme', ce serait une métaphore : 'Il est l'éclair'." }
    ],
    2: [
      { question: "L'allitération est la répétition de…", options: ["Sons consonantiques en début de mots proches", "La même voyelle", "La même phrase", "Le même verbe"], answer: "Sons consonantiques en début de mots proches", explication: "'Pour qui sont ces serpents qui sifflent sur vos têtes ?' → répétition du son [s]. C'est une allitération." },
      { question: "L'assonance est la répétition de…", options: ["La même voyelle dans des mots proches", "La même consonne", "Le même mot", "La même longueur de phrase"], answer: "La même voyelle dans des mots proches", explication: "'Il pleure dans mon cœur comme il pleut sur la ville' → répétition du son [œ]. C'est une assonance." },
      { question: "L'antithèse rapproche…", options: ["Deux idées opposées pour créer un contraste", "Deux synonymes", "Deux images similaires", "Deux verbes d'action"], answer: "Deux idées opposées pour créer un contraste", explication: "'Il était beau et laid, fort et fragile.' : les contraires mis côte à côte créent un effet de contraste frappant." },
      { question: "L'oxymore unit…", options: ["Deux termes contradictoires dans un même groupe", "Deux synonymes", "Deux métaphores", "Deux comparaisons"], answer: "Deux termes contradictoires dans un même groupe", explication: "'Cette obscure clarté', 'un silence assourdissant' : les deux mots se contredisent mais créent un sens nouveau." },
      { question: "La litote consiste à…", options: ["Dire moins pour suggérer plus", "Exagérer une idée", "Comparer deux objets", "Répéter un mot"], answer: "Dire moins pour suggérer plus", explication: "'Ce n'est pas mal' pour dire 'c'est très bien'. La litote atténue pour mieux souligner, contrairement à l'hyperbole." },
      { question: "L'ironie en littérature consiste à…", options: ["Dire le contraire de ce qu'on veut exprimer", "Exagérer positivement", "Comparer deux choses jolies", "Répéter une idée"], answer: "Dire le contraire de ce qu'on veut exprimer", explication: "'Quelle merveilleuse idée !' dit avec mépris signifie l'inverse. L'ironie se détecte par le ton ou le contexte." },
      { question: "La métonymie remplace…", options: ["Un mot par un autre qui lui est associé", "Un mot par son contraire", "Un verbe par un adjectif", "Un nom propre par un nom commun"], answer: "Un mot par un autre qui lui est associé", explication: "'Boire un verre' (le contenant pour le contenu), 'lire Molière' (l'auteur pour l'œuvre) : c'est la métonymie." },
      { question: "L'apostrophe (rhétorique) consiste à…", options: ["S'adresser directement à une personne ou chose absente/abstraite", "Poser une question sans réponse", "Répéter un mot", "Inverser l'ordre des mots"], answer: "S'adresser directement à une personne ou chose absente/abstraite", explication: "'Ô Liberté, que de crimes on commet en ton nom !' : on s'adresse à 'la Liberté' comme à une personne présente." }
    ],
    3: [
      { question: "Le zeugme associe…", options: ["Des éléments grammaticalement semblables mais sémantiquement hétérogènes", "Deux métaphores", "Deux rimes", "Deux comparaisons"], answer: "Des éléments grammaticalement semblables mais sémantiquement hétérogènes", explication: "'Elle portait une robe rouge et des illusions.' : 'robe' et 'illusions' sont COD mais n'appartiennent pas au même registre." },
      { question: "La synecdoque est une forme de métonymie qui…", options: ["Désigne le tout par la partie ou inversement", "Remplace un mot par son contraire", "Répète un son", "Exagère une qualité"], answer: "Désigne le tout par la partie ou inversement", explication: "'Les voiles à l'horizon' pour 'les bateaux' (la voile = partie du bateau). Pars pro toto : la partie pour le tout." },
      { question: "La prosopopée est une figure qui…", options: ["Fait parler des morts, des abstractions ou des absents", "Exagère une réalité", "Compare deux vivants", "Répète des sons"], answer: "Fait parler des morts, des abstractions ou des absents", explication: "La prosopopée donne une voix à ce qui n'en a pas : 'La Mort lui parla ainsi…' C'est une personnification étendue." },
      { question: "L'hypallage attribue…", options: ["Un qualificatif au mauvais nom dans la phrase", "Une action à un objet", "Une voix à un animal", "Un nombre à une couleur"], answer: "Un qualificatif au mauvais nom dans la phrase", explication: "'Il fumait sa pipe mélancolique' : c'est le fumeur qui est mélancolique, pas la pipe. L'adjectif est déplacé." },
      { question: "Le chiasme est une figure de construction qui…", options: ["Croise symétriquement deux groupes (AB / BA)", "Répète le même mot", "Oppose deux idées", "Omet un mot"], answer: "Croise symétriquement deux groupes (AB / BA)", explication: "'Il faut manger pour vivre et non pas vivre pour manger.' : structure croisée A-B / B-A. C'est un chiasme." },
      { question: "La périphrase remplace un mot par…", options: ["Un groupe de mots qui le décrit", "Un synonyme direct", "Un contraire", "Un pronom"], answer: "Un groupe de mots qui le décrit", explication: "'L'astre du jour' à la place de 'le soleil', 'la Ville Lumière' pour 'Paris' : c'est la périphrase." },
      { question: "L'ellipse stylistique consiste à…", options: ["Omettre des mots pour créer un effet de rapidité ou d'intensité", "Ajouter des détails", "Répéter des sons", "Inverser le sujet et le verbe"], answer: "Omettre des mots pour créer un effet de rapidité ou d'intensité", explication: "'Partir. Vite.' : le verbe manque dans la 2ème phrase. L'ellipse crée la précipitation, la tension." },
      { question: "L'accumulation (ou énumération) sert à…", options: ["Créer un effet d'abondance ou d'insistance", "Comparer deux choses", "Atténuer une réalité", "Inverser deux idées"], answer: "Créer un effet d'abondance ou d'insistance", explication: "'Il y avait des livres, des papiers, des stylos, des crayons, des gommes partout.' : l'énumération donne une impression de désordre foisonnant." }
    ]
  },

  // ── SOUS-CHAPITRES GRAMMAIRE ──
  francais6Gram_Nature: {
    id: 'francais6Gram_Nature', nom: 'Nature des mots', emoji: '🏷️', couleur: '#7c3aed',
    1: [
      { question: "Quelle est la nature du mot 'chien' ?", options: ["Nom commun", "Adjectif", "Verbe", "Déterminant"], answer: "Nom commun", explication: "Un nom commun désigne un être, une chose ou une idée de façon générale. 'Chien' peut être précédé d'un article." },
      { question: "Quelle est la nature du mot 'Paris' ?", options: ["Nom propre", "Nom commun", "Adjectif", "Adverbe"], answer: "Nom propre", explication: "Un nom propre désigne un être ou un lieu unique. Il prend toujours une majuscule : Paris, Marie, France." },
      { question: "Quelle est la nature du mot 'beau' dans 'un beau jardin' ?", options: ["Adjectif qualificatif", "Nom", "Verbe", "Adverbe"], answer: "Adjectif qualificatif", explication: "L'adjectif qualificatif précise une qualité du nom. Il s'accorde en genre et en nombre avec le nom qu'il accompagne." },
      { question: "Quelle est la nature du mot 'le' dans 'le chat' ?", options: ["Article défini (déterminant)", "Pronom", "Adjectif", "Conjonction"], answer: "Article défini (déterminant)", explication: "'Le' est un article défini qui accompagne le nom. Les articles : le, la, les (définis) ; un, une, des (indéfinis)." },
      { question: "Quelle est la nature du mot 'courir' ?", options: ["Verbe", "Nom", "Adjectif", "Adverbe"], answer: "Verbe", explication: "Le verbe exprime une action ou un état. À l'infinitif, il se termine par -er, -ir, -re ou -oir." },
      { question: "Quelle est la nature du mot 'vite' dans 'Il court vite' ?", options: ["Adverbe", "Adjectif", "Verbe", "Nom"], answer: "Adverbe", explication: "L'adverbe modifie un verbe, un adjectif ou un autre adverbe. Il est invariable. 'Vite' indique la manière." },
      { question: "Quelle est la nature du mot 'et' dans 'chat et chien' ?", options: ["Conjonction de coordination", "Préposition", "Adverbe", "Pronom"], answer: "Conjonction de coordination", explication: "'Et' est une conjonction de coordination : elle relie deux mots ou groupes de même nature. Retenir : mais, ou, et, donc, or, ni, car." },
      { question: "Quelle est la nature du mot 'elle' dans 'Elle chante' ?", options: ["Pronom personnel", "Nom", "Adjectif", "Déterminant"], answer: "Pronom personnel", explication: "Le pronom remplace un nom. 'Elle' remplace un nom féminin singulier (ex : Marie chante → Elle chante)." }
    ],
    2: [
      { question: "Quelle est la nature du mot 'sur' dans 'le livre est sur la table' ?", options: ["Préposition", "Adverbe", "Conjonction", "Adjectif"], answer: "Préposition", explication: "La préposition introduit un complément. Prépositions courantes : à, de, sur, sous, dans, avec, pour, par, sans." },
      { question: "Quelle est la nature du mot 'dont' dans 'Le film dont je parle' ?", options: ["Pronom relatif", "Pronom personnel", "Conjonction", "Adverbe"], answer: "Pronom relatif", explication: "Les pronoms relatifs (qui, que, dont, où…) relient une proposition subordonnée à un antécédent." },
      { question: "Quelle est la nature du mot 'lorsque' dans 'lorsque tu arrives' ?", options: ["Conjonction de subordination", "Conjonction de coordination", "Adverbe", "Préposition"], answer: "Conjonction de subordination", explication: "'Lorsque', 'quand', 'parce que', 'si', 'bien que'… sont des conjonctions de subordination qui introduisent une proposition subordonnée." },
      { question: "Quelle est la nature du mot 'hélas' dans 'Hélas, il est parti' ?", options: ["Interjection", "Adverbe", "Nom", "Conjonction"], answer: "Interjection", explication: "Les interjections expriment une émotion vive : hélas, zut, bravo, oh, aïe… Elles sont invariables et souvent suivies d'un point d'exclamation." },
      { question: "Dans 'ce livre', quelle est la nature du mot 'ce' ?", options: ["Déterminant démonstratif", "Pronom démonstratif", "Adjectif qualificatif", "Article"], answer: "Déterminant démonstratif", explication: "'Ce', 'cet', 'cette', 'ces' sont des déterminants démonstratifs. Ils désignent ce dont on parle en le montrant." },
      { question: "Quelle est la nature du mot 'mien' dans 'c'est le mien' ?", options: ["Pronom possessif", "Adjectif possessif", "Déterminant", "Nom"], answer: "Pronom possessif", explication: "Les pronoms possessifs remplacent un nom avec une idée de possession : le mien, la tienne, le sien, le nôtre…" },
      { question: "Quelle est la nature du mot 'aucun' dans 'aucun élève n'a raté' ?", options: ["Déterminant indéfini", "Adjectif qualificatif", "Pronom personnel", "Adverbe"], answer: "Déterminant indéfini", explication: "'Aucun', 'chaque', 'tout', 'plusieurs', 'quelques'… sont des déterminants indéfinis. Ils donnent une idée de quantité imprécise." },
      { question: "Quelle est la nature du mot 'rapidement' ?", options: ["Adverbe de manière", "Adjectif", "Nom", "Verbe"], answer: "Adverbe de manière", explication: "Les adverbes en -ment sont formés sur l'adjectif féminin : rapide → rapidement. Ils indiquent comment se passe l'action." }
    ],
    3: [
      { question: "Quelle est la différence entre 'mon' déterminant et 'le mien' pronom ?", options: ["'Mon' accompagne un nom, 'le mien' le remplace", "Ce sont des synonymes", "'Mon' remplace, 'le mien' accompagne", "Ils ont la même fonction"], answer: "'Mon' accompagne un nom, 'le mien' le remplace", explication: "'Mon livre' (déterminant possessif + nom). 'C'est le mien' (pronom possessif remplace 'mon livre')." },
      { question: "Un participe présent est formé sur…", options: ["Le radical du verbe + -ant", "L'infinitif + -ment", "Le passé composé", "L'imparfait"], answer: "Le radical du verbe + -ant", explication: "Le participe présent : chanter → chantant, finir → finissant, prendre → prenant. Il est invariable (sauf l'adjectif verbal)." },
      { question: "Le participe passé employé seul peut avoir la valeur d'un…", options: ["Adjectif", "Adverbe", "Conjonction", "Pronom"], answer: "Adjectif", explication: "'Un devoir rendu en retard' : 'rendu' est un participe passé qui qualifie 'devoir'. Il fonctionne comme un adjectif et s'accorde." },
      { question: "Quelle est la nature du mot 'que' dans 'Je sais que tu viendras' ?", options: ["Conjonction de subordination", "Pronom relatif", "Pronom interrogatif", "Adverbe"], answer: "Conjonction de subordination", explication: "Ici 'que' introduit une proposition complétive (COD du verbe 'sais'). C'est une conjonction de subordination, pas un pronom relatif." },
      { question: "Un nom verbal est…", options: ["Un nom formé à partir d'un verbe", "Un verbe conjugué", "Un pronom", "Un adjectif verbal"], answer: "Un nom formé à partir d'un verbe", explication: "Ex : 'la marche' (de marcher), 'le chant' (de chanter), 'la lecture' (de lire). Ces noms dérivent de verbes." },
      { question: "La catégorie grammaticale d'un mot peut changer selon…", options: ["Sa fonction dans la phrase", "Sa longueur", "Sa première lettre", "Son genre"], answer: "Sa fonction dans la phrase", explication: "Ex : 'rapide' est adjectif dans 'un train rapide' mais peut devenir nom dans 'un rapide' (train express). Le contexte détermine la nature." },
      { question: "Quelle est la nature du mot 'cela' ?", options: ["Pronom démonstratif", "Déterminant démonstratif", "Adverbe", "Adjectif"], answer: "Pronom démonstratif", explication: "'Cela', 'ceci', 'ça', 'celui-ci', 'celle-là'… sont des pronoms démonstratifs. Ils désignent quelque chose sans l'accompagner." },
      { question: "Un adjectif numéral comme 'trois' peut aussi être un…", options: ["Déterminant numéral", "Adverbe", "Conjonction", "Pronom"], answer: "Déterminant numéral", explication: "'Trois enfants' : 'trois' est un déterminant numéral cardinal. Il précise le nombre. Il peut aussi être pronom : 'J'en veux trois.'" }
    ]
  },

  francais6Gram_Fonctions: {
    id: 'francais6Gram_Fonctions', nom: 'Fonctions grammaticales', emoji: '⚙️', couleur: '#7c3aed',
    1: [
      { question: "Dans 'Le chien aboie', quel est le sujet ?", options: ["Le chien", "aboie", "Le", "chien"], answer: "Le chien", explication: "Le sujet fait l'action ou est l'être dont on parle. Truc : 'Qui est-ce qui aboie ?' → Le chien." },
      { question: "Dans 'Marie mange une pomme', quel est le COD ?", options: ["une pomme", "Marie", "mange", "une"], answer: "une pomme", explication: "Le COD (Complément d'Objet Direct) répond à la question 'Marie mange quoi ?' → une pomme. Pas de préposition." },
      { question: "Dans 'Il parle à son ami', 'à son ami' est un…", options: ["COI (Complément d'Objet Indirect)", "COD", "Sujet", "Attribut"], answer: "COI (Complément d'Objet Indirect)", explication: "Le COI est relié au verbe par une préposition (à, de). 'Il parle à qui ?' → à son ami. C'est un COI." },
      { question: "Dans 'Le ciel est bleu', 'bleu' est…", options: ["Attribut du sujet", "COD", "Sujet", "Adverbe"], answer: "Attribut du sujet", explication: "L'attribut du sujet est relié au sujet par un verbe d'état (être, paraître, sembler…). 'Bleu' qualifie 'le ciel'." },
      { question: "Dans 'Il court vite', 'vite' est…", options: ["Complément circonstanciel de manière", "COD", "Sujet", "Attribut"], answer: "Complément circonstanciel de manière", explication: "Les CC répondent à 'comment ?, où ?, quand ?, pourquoi ?'. 'Vite' répond à 'comment court-il ?' → CC de manière." },
      { question: "Dans 'Elle habite à Paris', 'à Paris' est un…", options: ["Complément circonstanciel de lieu", "COI", "Sujet", "Attribut"], answer: "Complément circonstanciel de lieu", explication: "'Où habite-t-elle ?' → à Paris. C'est un CC de lieu. Les CC répondent à 'où, quand, comment, pourquoi'." },
      { question: "L'épithète est un adjectif qui…", options: ["Accompagne directement le nom", "Est attribut du sujet", "Remplace un nom", "Modifie un verbe"], answer: "Accompagne directement le nom", explication: "L'épithète est liée directement au nom : 'un grand arbre'. Elle peut être avant ou après le nom. Pas de verbe entre eux." },
      { question: "Dans 'Les élèves de la classe travaillent', 'de la classe' est…", options: ["Complément du nom", "COD", "Sujet", "Attribut"], answer: "Complément du nom", explication: "Le complément du nom précise un nom. 'De la classe' précise 'les élèves'. Il est souvent introduit par 'de'." }
    ],
    2: [
      { question: "Dans 'Il semble fatigué', 'fatigué' est…", options: ["Attribut du sujet", "COD", "Épithète", "CC"], answer: "Attribut du sujet", explication: "'Semble' est un verbe d'état → 'fatigué' est attribut du sujet 'il'. Il pourrait être remplacé par 'il est fatigué'." },
      { question: "Dans 'Je le vois', 'le' est…", options: ["COD (pronom personnel)", "Sujet", "Attribut", "CC"], answer: "COD (pronom personnel)", explication: "'Je vois qui/quoi ?' → 'le' = quelqu'un (COD). Le pronom 'le' remplace un nom COD masculin singulier." },
      { question: "Dans 'Je lui parle', 'lui' est…", options: ["COI (pronom personnel)", "Sujet", "COD", "CC"], answer: "COI (pronom personnel)", explication: "'Je parle à qui ?' → 'lui' remplace 'à quelqu'un'. C'est un pronom COI." },
      { question: "La proposition subordonnée relative complète…", options: ["Un nom (antécédent)", "Le verbe principal", "Le sujet seul", "Un adverbe"], answer: "Un nom (antécédent)", explication: "La relative est introduite par un pronom relatif (qui, que, dont, où) et complète un antécédent : 'le livre que je lis'." },
      { question: "Dans 'Il mange parce qu'il a faim', 'parce qu'il a faim' est…", options: ["CC de cause", "CC de conséquence", "CC de but", "CC de temps"], answer: "CC de cause", explication: "'Parce que' introduit la cause. Autres conj. de cause : car, puisque, comme. Ici, la faim explique le fait de manger." },
      { question: "L'apposition est un nom ou groupe qui…", options: ["Donne une précision sur un autre nom, en le doublant", "Est sujet du verbe", "Est COD", "Modifie un adverbe"], answer: "Donne une précision sur un autre nom, en le doublant", explication: "'Marie, ma meilleure amie, est là.' : 'ma meilleure amie' est apposé à 'Marie'. Elle est souvent encadrée par des virgules." },
      { question: "Dans 'pour réussir', l'infinitif a la fonction de…", options: ["CC de but", "Sujet", "COD", "Attribut"], answer: "CC de but", explication: "'Pour + infinitif' exprime le but. 'Il travaille pour réussir' → 'pour réussir' répond à 'dans quel but ?'." },
      { question: "Dans 'Fatigué, il s'endormit', 'Fatigué' est…", options: ["Épithète détachée (apposition)", "Attribut du sujet", "CC de manière", "Sujet"], answer: "Épithète détachée (apposition)", explication: "L'adjectif détaché du nom (séparé par une virgule) est une épithète détachée. Il apporte une précision circonstancielle." }
    ],
    3: [
      { question: "Quelle est la différence entre COD et COI ?", options: ["Le COI est introduit par une préposition, pas le COD", "Le COD est plus long", "Le COI vient avant le verbe", "Il n'y a pas de différence"], answer: "Le COI est introduit par une préposition, pas le COD", explication: "COD : 'Il mange une pomme' (pas de préposition). COI : 'Il pense à son voyage' (préposition 'à'). Test : quoi ? vs à quoi ?" },
      { question: "Dans 'Lire est un plaisir', 'Lire' est…", options: ["Sujet (infinitif substantivé)", "COD", "Attribut", "CC"], answer: "Sujet (infinitif substantivé)", explication: "Un infinitif peut être sujet. 'Lire est un plaisir' = 'La lecture est un plaisir'. L'infinitif joue ici le rôle d'un nom-sujet." },
      { question: "Le complément d'agent dans la voix passive répond à la question…", options: ["Par qui / par quoi ?", "Où ?", "Quand ?", "Comment ?"], answer: "Par qui / par quoi ?", explication: "'Le gâteau a été mangé par les enfants.' → 'par les enfants' est le complément d'agent. Il indique qui fait l'action réelle." },
      { question: "Dans 'Je crois qu'il viendra', 'qu'il viendra' est…", options: ["Proposition subordonnée complétive (COD)", "Relative", "CC de cause", "Sujet"], answer: "Proposition subordonnée complétive (COD)", explication: "La complétive est une proposition subordonnée introduite par 'que' qui joue le rôle de COD du verbe principal." },
      { question: "La proposition subordonnée circonstancielle de condition est souvent introduite par…", options: ["Si", "Que", "Qui", "Dont"], answer: "Si", explication: "'Si tu travailles, tu réussiras.' → la condition est introduite par 'si'. Autres : 'à condition que' (+ subjonctif)." },
      { question: "Dans 'Le professeur que j'admire enseigne bien', quelle est la fonction de 'que' ?", options: ["COD du verbe 'admire'", "Sujet de 'admire'", "CC de cause", "Attribut"], answer: "COD du verbe 'admire'", explication: "'que' reprend 'le professeur' et est COD de 'admire' : 'j'admire qui ?' → que (= le professeur)." },
      { question: "Dans 'Plus il travaille, plus il réussit', les deux propositions sont…", options: ["Corrélatives (de proportion)", "Indépendantes juxtaposées", "Principale + relative", "Principale + complétive"], answer: "Corrélatives (de proportion)", explication: "La structure 'Plus…plus…' exprime une proportion. Les deux propositions sont liées par un rapport corrélatif." },
      { question: "Le prédicat d'une phrase, c'est…", options: ["Ce qu'on dit du sujet (verbe + compléments)", "Le sujet seul", "Le COD seul", "L'adverbe"], answer: "Ce qu'on dit du sujet (verbe + compléments)", explication: "Une phrase = sujet + prédicat. Le prédicat contient le verbe et tout ce qui en dépend (attribut, COD, CC…)." }
    ]
  },

  francais6Gram_Phrases: {
    id: 'francais6Gram_Phrases', nom: 'Phrases & propositions', emoji: '📝', couleur: '#7c3aed',
    1: [
      { question: "Une phrase minimale contient au moins…", options: ["Un sujet et un verbe", "Un sujet, un verbe et un COD", "Trois mots", "Un adjectif"], answer: "Un sujet et un verbe", explication: "La phrase verbale minimale = GN sujet + GV. Ex : 'Le chat dort.' Sujet = le chat, verbe = dort." },
      { question: "La phrase déclarative sert à…", options: ["Affirmer ou nier quelque chose", "Poser une question", "Donner un ordre", "Exprimer une émotion"], answer: "Affirmer ou nier quelque chose", explication: "La phrase déclarative (ou assertive) transmet une information. Elle se termine par un point simple." },
      { question: "La phrase interrogative se termine par…", options: ["Un point d'interrogation (?)", "Un point d'exclamation (!)", "Un point simple (.)", "Des points de suspension (…)"], answer: "Un point d'interrogation (?)", explication: "La phrase interrogative pose une question. Elle se termine toujours par '?'" },
      { question: "La phrase impérative sert à…", options: ["Donner un ordre ou un conseil", "Poser une question", "Informer", "Exprimer la surprise"], answer: "Donner un ordre ou un conseil", explication: "La phrase impérative exprime un ordre ('Viens !'), un conseil ('Mange tes légumes.') ou une prière. Le sujet est généralement absent." },
      { question: "La phrase exclamative exprime…", options: ["Une émotion vive (joie, colère, surprise…)", "Une question", "Un ordre neutre", "Un fait banal"], answer: "Une émotion vive (joie, colère, surprise…)", explication: "La phrase exclamative se termine par '!' et exprime une émotion forte. Ex : 'Quelle belle journée !'" },
      { question: "Une phrase négative contient…", options: ["Ne… pas (ou ne… jamais, ne… plus…)", "Uniquement 'pas'", "Toujours un 'non' en début", "Un point d'interrogation"], answer: "Ne… pas (ou ne… jamais, ne… plus…)", explication: "La négation s'exprime avec 'ne…pas', 'ne…plus', 'ne…jamais', 'ne…rien', 'ne…personne'…" },
      { question: "Qu'est-ce qu'une phrase simple ?", options: ["Une phrase avec un seul verbe conjugué", "Une phrase courte", "Une phrase sans adjectif", "Une phrase sans ponctuation"], answer: "Une phrase avec un seul verbe conjugué", explication: "La phrase simple contient une seule proposition (un seul verbe conjugué). Contrairement à la phrase complexe qui en a plusieurs." },
      { question: "Qu'est-ce qu'une phrase complexe ?", options: ["Une phrase avec plusieurs propositions (plusieurs verbes conjugués)", "Une phrase longue avec beaucoup d'adjectifs", "Une phrase interrogative", "Une phrase sans sujet"], answer: "Une phrase avec plusieurs propositions (plusieurs verbes conjugués)", explication: "La phrase complexe contient au moins deux verbes conjugués, donc au moins deux propositions." }
    ],
    2: [
      { question: "La coordination relie des propositions avec…", options: ["Une conjonction de coordination (mais, ou, et, donc, or, ni, car)", "Un pronom relatif", "Une conjonction de subordination", "Un point-virgule uniquement"], answer: "Une conjonction de coordination (mais, ou, et, donc, or, ni, car)", explication: "Les propositions indépendantes coordonnées sont reliées par une conjonction de coordination (MODEDONC : mais, ou, donc, et, or, ni, car)." },
      { question: "La juxtaposition relie des propositions par…", options: ["Une virgule, un point-virgule ou deux points", "Une conjonction", "Un pronom relatif", "Un adverbe"], answer: "Une virgule, un point-virgule ou deux points", explication: "La juxtaposition unit des propositions sans mot de liaison : 'Il pleut ; je reste.' La ponctuation fait le lien." },
      { question: "Une proposition subordonnée est…", options: ["Dépendante d'une proposition principale", "Indépendante de toute autre", "Toujours en début de phrase", "Toujours une relative"], answer: "Dépendante d'une proposition principale", explication: "La subordonnée ne peut pas exister seule : 'parce qu'il pleut' est incomplète sans principale." },
      { question: "Dans 'Si tu viens, je serai content', quelle est la proposition principale ?", options: ["je serai content", "Si tu viens", "Les deux", "Aucune des deux"], answer: "je serai content", explication: "La principale peut exister seule ('je serai content'). La subordonnée conditionnelle 'si tu viens' en dépend." },
      { question: "La phrase passive se construit avec…", options: ["Être + participe passé", "Avoir + participe passé", "Aller + infinitif", "Faire + infinitif"], answer: "Être + participe passé", explication: "Voix passive : 'Le chat est mangé par la souris.' = être (conjugué) + participe passé. Le sujet subit l'action." },
      { question: "Transformer 'Le vent renverse l'arbre' à la voix passive donne…", options: ["L'arbre est renversé par le vent.", "Le vent est renversé par l'arbre.", "L'arbre renverse le vent.", "Le vent a renversé l'arbre."], answer: "L'arbre est renversé par le vent.", explication: "COD de la voix active → sujet de la voix passive. Sujet actif → complément d'agent (par + sujet)." },
      { question: "La proposition infinitive a…", options: ["Un sujet propre différent du sujet principal", "Le même sujet que la principale", "Pas de sujet", "Un verbe conjugué"], answer: "Un sujet propre différent du sujet principal", explication: "'J'entends les oiseaux chanter.' : 'les oiseaux' est sujet de l'infinitif 'chanter'. C'est une proposition infinitive." },
      { question: "La phrase nominale (sans verbe conjugué) est…", options: ["Une phrase sans verbe conjugué", "Une phrase négative", "Une phrase avec un seul nom", "Une phrase interrogative"], answer: "Une phrase sans verbe conjugué", explication: "'Belle journée !' ou 'Silence !' sont des phrases nominales. Elles n'ont pas de verbe conjugué mais forment un énoncé complet." }
    ],
    3: [
      { question: "La subordination par 'que' peut exprimer…", options: ["Un fait (complétive), une relative, une circonstancielle", "Uniquement une cause", "Uniquement une condition", "Uniquement une relative"], answer: "Un fait (complétive), une relative, une circonstancielle", explication: "'Que' est polysémique : il peut introduire une complétive (Je pense que…), une relative (l'homme que…), une circonstancielle (bien que…)." },
      { question: "La proposition participiale a…", options: ["Un participe + un sujet propre non exprimé dans la principale", "Un verbe à l'infinitif", "Le même sujet que la principale", "Un subjonctif"], answer: "Un participe + un sujet propre non exprimé dans la principale", explication: "'Le soleil se couchant, nous rentrâmes.' : 'le soleil se couchant' est une proposition participiale avec son propre sujet." },
      { question: "La phrase segmentée (disloquée) est une phrase qui…", options: ["Détache un élément en tête ou en fin pour le mettre en relief", "N'a pas de verbe", "Commence toujours par une conjonction", "Est toujours interrogative"], answer: "Détache un élément en tête ou en fin pour le mettre en relief", explication: "'Marie, je l'aime bien.' ou 'Je l'aime bien, Marie.' : le GN est disloqué pour insister, repris par un pronom." },
      { question: "L'incise est une proposition qui…", options: ["Indique qui parle dans un discours rapporté", "Introduit une condition", "Exprime une cause", "Est toujours en fin de phrase"], answer: "Indique qui parle dans un discours rapporté", explication: "'Je viendrai demain, dit-il, sans faute.' : 'dit-il' est une incise qui identifie le locuteur dans un dialogue." },
      { question: "Le discours direct rapporte les paroles…", options: ["Telles quelles, entre guillemets ou après un tiret", "Transformées en 3ème personne", "Sans ponctuation particulière", "Toujours au passé"], answer: "Telles quelles, entre guillemets ou après un tiret", explication: "Discours direct : 'Je viendrai.' dit Marie. Les mots exacts sont préservés, avec guillemets ou tiret." },
      { question: "Le discours indirect transforme les paroles en…", options: ["Proposition subordonnée complétive introduite par 'que'", "Citation directe", "Discours exclamatif", "Phrase nominale"], answer: "Proposition subordonnée complétive introduite par 'que'", explication: "'Je viendrai.' → Il dit qu'il viendrait. Les pronoms et temps verbaux changent lors du passage au discours indirect." },
      { question: "La concordance des temps au discours indirect signifie que…", options: ["Le temps de la subordonnée dépend du temps du verbe principal", "On conserve toujours le présent", "On met toujours le passé", "Le temps ne change jamais"], answer: "Le temps de la subordonnée dépend du temps du verbe principal", explication: "Verbe principal au présent → temps conservé. Verbe principal au passé : présent → imparfait, futur → conditionnel, etc." },
      { question: "L'anacoluthe est une figure syntaxique qui…", options: ["Rompt la construction logique d'une phrase", "Répète un élément", "Inverse sujet et verbe", "Supprime un mot"], answer: "Rompt la construction logique d'une phrase", explication: "'Rentrant chez lui, le chat le surprit.' : le participe 'rentrant' devrait se rapporter au sujet 'il', mais le sujet est 'le chat'. C'est une anacoluthe." }
    ]
  },

  // ── SOUS-CHAPITRES VOCABULAIRE ──
  francais6Vocab_Synonymes: {
    id: 'francais6Vocab_Synonymes', nom: 'Synonymes & antonymes', emoji: '🔄', couleur: '#0369a1',
    1: [
      { question: "Quel est le synonyme de 'heureux' ?", options: ["joyeux", "triste", "fatigué", "énervé"], answer: "joyeux", explication: "Les synonymes ont des sens proches. 'Heureux', 'joyeux', 'content', 'ravi' sont synonymes." },
      { question: "Quel est l'antonyme de 'grand' ?", options: ["petit", "fort", "rapide", "calme"], answer: "petit", explication: "Un antonyme est un mot de sens contraire. Grand ↔ petit, chaud ↔ froid, fort ↔ faible." },
      { question: "Quel est le synonyme de 'rapide' ?", options: ["vif", "lent", "lourd", "fort"], answer: "vif", explication: "'Rapide', 'vif', 'prompt', 'agile', 'véloce' sont synonymes. Ne pas confondre avec l'antonyme 'lent'." },
      { question: "Quel est l'antonyme de 'courageux' ?", options: ["lâche", "fort", "téméraire", "calme"], answer: "lâche", explication: "Courageux ↔ lâche (ou peureux, poltron). Téméraire n'est pas un antonyme (c'est trop courageux)." },
      { question: "Quel est le synonyme de 'beau' ?", options: ["joli", "laid", "propre", "grand"], answer: "joli", explication: "'Beau', 'joli', 'magnifique', 'splendide', 'ravissant' : synonymes de beau. 'Laid' en est l'antonyme." },
      { question: "Quel est l'antonyme de 'commencer' ?", options: ["terminer", "continuer", "ralentir", "avancer"], answer: "terminer", explication: "Commencer ↔ terminer (ou finir, achever). 'Continuer' n'est pas un antonyme, c'est proche de commencer." },
      { question: "Quel est le synonyme de 'parler' ?", options: ["s'exprimer", "écouter", "lire", "écrire"], answer: "s'exprimer", explication: "'Parler', 's'exprimer', 'discourir', 'dialoguer' : synonymes dans le champ de la communication orale." },
      { question: "Quel est l'antonyme de 'chaud' ?", options: ["froid", "doux", "tiède", "brûlant"], answer: "froid", explication: "Chaud ↔ froid. 'Tiède' est entre les deux, 'brûlant' est un synonyme de très chaud." }
    ],
    2: [
      { question: "Deux synonymes parfaits n'existent presque jamais car…", options: ["Chaque mot a des nuances de sens différentes", "La langue est trop simple", "Les dictionnaires se trompent", "Tous les mots ont des antonymes"], answer: "Chaque mot a des nuances de sens différentes", explication: "'Content' et 'heureux' sont proches mais 'heureux' indique un bonheur plus profond. Les synonymes ont des nuances." },
      { question: "Un mot peut avoir plusieurs antonymes selon…", options: ["Le sens qu'il prend dans le contexte", "Sa longueur", "Sa classe grammaticale uniquement", "L'auteur qui l'utilise"], answer: "Le sens qu'il prend dans le contexte", explication: "'Léger' peut avoir comme antonymes 'lourd' (poids), 'grave' (maladie) ou 'sérieux' (attitude) selon le contexte." },
      { question: "Les antonymes peuvent être formés avec un préfixe. Lequel ?", options: ["in- / im- / il- / ir-", "re-", "sur-", "pré-"], answer: "in- / im- / il- / ir-", explication: "Possible → impossible, lisible → illisible, régulier → irrégulier, patient → impatient. Le préfixe négatif forme l'antonyme." },
      { question: "Quel est le synonyme soutenu de 'maison' ?", options: ["demeure", "baraque", "truc", "endroit"], answer: "demeure", explication: "'Demeure', 'résidence', 'logis' sont des synonymes de 'maison' dans un registre plus soutenu. 'Baraque' est familier." },
      { question: "Lequel est un synonym de 'triste' dans un registre familier ?", options: ["cafardeux", "mélancolique", "morose", "lugubre"], answer: "cafardeux", explication: "'Cafardeux' est familier, 'mélancolique', 'morose', 'lugubre' sont courants ou soutenus. Les synonymes varient selon le registre." },
      { question: "Dans 'un film lent', l'antonyme de 'lent' est…", options: ["rythmé / haletant", "ennuyeux", "court", "muet"], answer: "rythmé / haletant", explication: "Dans le contexte d'un film, l'opposé de 'lent' sera 'rythmé', 'haletant' ou 'rapide' — pas uniquement 'vite'." },
      { question: "La relation antonyme peut être…", options: ["Gradable (chaud/tiède/froid) ou complémentaire (vivant/mort)", "Toujours absolue", "Uniquement pour les adjectifs", "Toujours réciproque"], answer: "Gradable (chaud/tiède/froid) ou complémentaire (vivant/mort)", explication: "Certains antonymes admettent des degrés (grand/moyen/petit), d'autres sont absolus et exclusifs (vivant/mort)." },
      { question: "Un champ lexical regroupe…", options: ["Des mots liés au même thème", "Uniquement des synonymes", "Uniquement des antonymes", "Des mots de même nature"], answer: "Des mots liés au même thème", explication: "Le champ lexical de la mer : vague, plage, bateau, tempête, sable, phare… Ces mots ne sont pas synonymes mais gravitent autour du même thème." }
    ],
    3: [
      { question: "La connotation d'un mot influence le choix des synonymes car…", options: ["Deux synonymes peuvent avoir des connotations opposées", "Les synonymes ont toujours la même connotation", "La connotation ne change pas", "Les dictionnaires imposent la connotation"], answer: "Deux synonymes peuvent avoir des connotations opposées", explication: "'Mince' est positif, 'maigre' est négatif, 'svelte' est élégant : même sens dénotatif, connotations différentes." },
      { question: "La gradation des synonymes permet de…", options: ["Exprimer différents degrés d'intensité d'une même idée", "Changer de registre uniquement", "Créer des antonymes", "Éviter toute répétition"], answer: "Exprimer différents degrés d'intensité d'une même idée", explication: "Exemples : content < heureux < ravi < extatique. Ou : chaud < bouillant < brûlant. La gradation nuance l'intensité." },
      { question: "La synonymie partielle signifie que…", options: ["Deux mots partagent une partie de leurs emplois", "Ils sont toujours interchangeables", "Ils ont la même étymologie", "Ils appartiennent à la même famille de mots"], answer: "Deux mots partagent une partie de leurs emplois", explication: "'Dire' et 'affirmer' sont synonymes dans certains emplois, mais 'affirmer' implique une certitude que 'dire' n'a pas toujours." },
      { question: "L'antonymie complémentaire (ex : vivant/mort) signifie que…", options: ["L'un exclut totalement l'autre", "Il existe des degrés intermédiaires", "Les deux peuvent coexister", "Ils sont proches en sens"], answer: "L'un exclut totalement l'autre", explication: "Vivant et mort s'excluent mutuellement. Ce n'est pas gradable : on ne peut pas être 'un peu mort'." },
      { question: "Quelle est la différence entre un antonyme et un mot de sens opposé ?", options: ["Un antonyme est le contraire direct et conventionnel", "Il n'y en a pas", "L'antonyme est toujours plus long", "Le mot opposé est dans un autre registre"], answer: "Un antonyme est le contraire direct et conventionnel", explication: "L'antonyme est reconnu lexicalement comme contraire (grand/petit). D'autres oppositions naissent du contexte mais ne sont pas des antonymes lexicaux." },
      { question: "La paraphrase synonymique consiste à…", options: ["Reformuler une idée avec d'autres mots de sens équivalent", "Copier un texte", "Trouver l'antonyme", "Créer un néologisme"], answer: "Reformuler une idée avec d'autres mots de sens équivalent", explication: "Reformuler = trouver une autre façon de dire la même chose. C'est une compétence clé en rédaction et en commentaire." },
      { question: "Les faux amis intralinguistiques sont des mots…", options: ["Qui semblent synonymes mais ne le sont pas", "Qui viennent d'une autre langue", "Qui ont le même son", "Qui n'existent plus"], answer: "Qui semblent synonymes mais ne le sont pas", explication: "Ex : 'événement' et 'avènement' : semblent proches mais 'avènement' = arrivée au pouvoir. Ce sont des paronymes, pas des synonymes." },
      { question: "L'hyperonyme est un mot…", options: ["Dont le sens englobe d'autres mots (genre > espèces)", "Qui est synonyme d'un autre", "Qui a de nombreux antonymes", "Qui n'a pas de synonymes"], answer: "Dont le sens englobe d'autres mots (genre > espèces)", explication: "'Animal' est l'hyperonyme de 'chien', 'chat', 'lion'. 'Fleur' est l'hyperonyme de 'rose', 'tulipe', 'dahlia'." }
    ]
  },

  francais6Vocab_Formation: {
    id: 'francais6Vocab_Formation', nom: 'Formation des mots', emoji: '🔧', couleur: '#0369a1',
    1: [
      { question: "Le préfixe se place…", options: ["Avant le radical", "Après le radical", "Au milieu du mot", "À la fin du mot"], answer: "Avant le radical", explication: "Préfixe + radical : re-faire, dé-faire, in-capable, pré-voir. Le préfixe modifie le sens du radical." },
      { question: "Le suffixe se place…", options: ["Après le radical", "Avant le radical", "Au milieu", "Avant le préfixe"], answer: "Après le radical", explication: "Radical + suffixe : chant-eur, jardin-ier, rapid-ité. Le suffixe change souvent la nature grammaticale du mot." },
      { question: "Le radical (ou base) d'un mot est…", options: ["La partie qui porte le sens principal", "Le préfixe", "Le suffixe", "La terminaison verbale"], answer: "La partie qui porte le sens principal", explication: "Dans 'dé-forester', le radical est 'forest'. Le préfixe 'dé-' et le suffixe '-er' s'ajoutent à lui." },
      { question: "Quel est le sens du préfixe 're-' ?", options: ["Répétition ou retour en arrière", "Contraire", "Avant", "Autour de"], answer: "Répétition ou retour en arrière", explication: "Re-faire = faire à nouveau. Re-venir = venir à nouveau. 'Re-' indique la répétition ou le retour." },
      { question: "Le suffixe '-eur' crée souvent…", options: ["Un nom désignant une personne qui fait l'action", "Un adjectif", "Un adverbe", "Un verbe"], answer: "Un nom désignant une personne qui fait l'action", explication: "Chant → chanteur, nage → nageur, joue → joueur. Le suffixe '-eur' forme des noms de métier ou d'agent." },
      { question: "La dérivation consiste à…", options: ["Former un mot nouveau en ajoutant préfixe ou suffixe", "Juxtaposer deux mots", "Emprunter un mot étranger", "Abréger un mot"], answer: "Former un mot nouveau en ajoutant préfixe ou suffixe", explication: "La dérivation est le procédé le plus courant : chanter → chanteur → chanteuse → chansonnette." },
      { question: "La composition consiste à…", options: ["Assembler deux ou plusieurs mots pour en former un nouveau", "Ajouter un préfixe", "Raccourcir un mot", "Emprunter un mot étranger"], answer: "Assembler deux ou plusieurs mots pour en former un nouveau", explication: "Porte + manteau = portemanteau. Chou + fleur = chou-fleur. Arc-en-ciel. C'est la composition." },
      { question: "Quelle est la famille de mots du radical 'port-' ?", options: ["Porter, porteur, portable, transport", "Porte, port, important, apporter", "Les deux réponses précédentes", "Aucune de ces réponses"], answer: "Les deux réponses précédentes", explication: "La famille de 'port-' inclut : porter, porteur, portable, transport, apporter, importer, exportation… Tous partagent le radical 'port'." }
    ],
    2: [
      { question: "Le préfixe 'in-' (ou im-, il-, ir-) signifie…", options: ["Contraire, négation", "Répétition", "Avant", "À nouveau"], answer: "Contraire, négation", explication: "In-possible (impossible), il-lisible (illisible), ir-responsable, im-patient. Ce préfixe indique la négation ou le contraire." },
      { question: "Le suffixe '-ité' crée…", options: ["Un nom abstrait à partir d'un adjectif", "Un verbe", "Un adjectif", "Un adverbe"], answer: "Un nom abstrait à partir d'un adjectif", explication: "Rapide → rapidité, généreux → générosité, égal → égalité. Le suffixe '-ité' nominalise un adjectif." },
      { question: "Le suffixe '-ifier' ou '-iser' crée…", options: ["Un verbe à partir d'un nom ou adjectif", "Un adjectif", "Un adverbe", "Un nom"], answer: "Un verbe à partir d'un nom ou adjectif", explication: "Simple → simplifier, moderne → moderniser, national → nationaliser. Ces suffixes verbalisent nom ou adjectif." },
      { question: "Qu'est-ce qu'un néologisme ?", options: ["Un mot nouveau créé dans la langue", "Un mot vieilli", "Un mot emprunté directement à l'anglais", "Un mot sans suffixe"], answer: "Un mot nouveau créé dans la langue", explication: "Les néologismes naissent des besoins de la société : courriel, selfie, déconfinement, véloroute sont des néologismes récents." },
      { question: "Le préfixe 'pré-' signifie…", options: ["Avant", "Après", "Contre", "Encore"], answer: "Avant", explication: "Prévoir = voir avant, préhistoire = avant l'histoire, prévenir = avertir à l'avance." },
      { question: "Le préfixe 'anti-' signifie…", options: ["Contre", "Avant", "Après", "Avec"], answer: "Contre", explication: "Anti-douleur = contre la douleur, anti-vol, anti-inflammatoire. 'Anti-' exprime l'opposition ou la protection contre." },
      { question: "Un mot tronqué est un mot…", options: ["Dont on a supprimé une partie pour l'abréger", "Formé par composition", "Emprunté à une autre langue", "Créé avec un préfixe"], answer: "Dont on a supprimé une partie pour l'abréger", explication: "Cinématographe → ciné, automobile → auto, professeur → prof, réfrigérateur → frigo. La troncation raccourcit le mot." },
      { question: "Le sigle est formé des…", options: ["Initiales de plusieurs mots", "Deux premiers mots d'une expression", "Racines latines ou grecques", "Suffixes de mots différents"], answer: "Initiales de plusieurs mots", explication: "ONU = Organisation des Nations Unies, TV = Télévision, SMS = Short Message Service. Les initiales forment le sigle." }
    ],
    3: [
      { question: "L'étymologie permet de…", options: ["Retrouver l'origine d'un mot et mieux en comprendre le sens", "Trouver les synonymes", "Former des néologismes", "Identifier les préfixes uniquement"], answer: "Retrouver l'origine d'un mot et mieux en comprendre le sens", explication: "L'étymologie = science de l'origine des mots. Connaître l'étymologie aide à comprendre le sens et à orthographier." },
      { question: "Le radical grec 'bio-' signifie…", options: ["Vie", "Eau", "Terre", "Lumière"], answer: "Vie", explication: "'Bio-' = vie (grec bios). Biologie = étude du vivant, biographie = récit de vie, biodiversité = diversité du vivant." },
      { question: "Le radical latin 'aqua-' signifie…", options: ["Eau", "Feu", "Terre", "Air"], answer: "Eau", explication: "'Aqua-' = eau (latin). Aquatique, aqueduc, aquarium, aquarelle. Connaître ce radical aide à comprendre de nombreux mots." },
      { question: "Le radical 'graph-' (grec graphein) signifie…", options: ["Écrire", "Lire", "Voir", "Entendre"], answer: "Écrire", explication: "Graphie, orthographe (écriture correcte), biographie, photographie, calligraphie. 'Graph-' = écrire, tracer." },
      { question: "Le radical 'phon-' (grec phonê) signifie…", options: ["Son, voix", "Lumière", "Terre", "Eau"], answer: "Son, voix", explication: "Téléphone, microphone, phonétique, phonème, symphonie. 'Phon-' = son, voix." },
      { question: "Un mot savant est souvent formé de…", options: ["Racines latines ou grecques", "Mots courants assemblés", "Abréviations", "Onomatopées"], answer: "Racines latines ou grecques", explication: "Le vocabulaire scientifique et médical est principalement construit sur des racines gréco-latines : cardiologie, pneumologie, géographie." },
      { question: "Le radical 'terra-' (latin) signifie…", options: ["Terre", "Eau", "Ciel", "Feu"], answer: "Terre", explication: "Terrestre, Méditerranée (mer au milieu des terres), terrain, territoire, enterrer. 'Terra' = la terre." },
      { question: "Le procédé de l'acronyme consiste à…", options: ["Prononcer les initiales comme un mot", "Écrire seulement les initiales séparément", "Supprimer tous les mots sauf un", "Former un mot par dérivation"], answer: "Prononcer les initiales comme un mot", explication: "ONU → sigle (on dit les lettres). SIDA, NASA, UNESCO → acronymes (on les prononce comme un mot). La différence est dans la prononciation." }
    ]
  },

  francais6Vocab_Sens: {
    id: 'francais6Vocab_Sens', nom: 'Sens & usage', emoji: '💡', couleur: '#0369a1',
    1: [
      { question: "Le sens propre d'un mot est…", options: ["Son sens premier, littéral", "Son sens figuré", "Son contraire", "Son synonyme"], answer: "Son sens premier, littéral", explication: "'Froid' au sens propre = basse température. Au sens figuré = distant, peu chaleureux. Le sens propre est le sens de base." },
      { question: "Le sens figuré d'un mot est…", options: ["Un sens imagé, non littéral", "Le sens du dictionnaire", "Le sens contraire", "Le sens le plus courant"], answer: "Un sens imagé, non littéral", explication: "'Avoir le cafard' = être triste (sens figuré). 'Voir rouge' = être en colère (sens figuré). C'est un emploi imagé du mot." },
      { question: "Un mot polysémique est un mot qui a…", options: ["Plusieurs sens différents", "Un seul sens", "Aucun sens propre", "Seulement un sens figuré"], answer: "Plusieurs sens différents", explication: "'Opération' = calcul / chirurgie / mission militaire. Un mot polysémique a plusieurs sens selon le contexte." },
      { question: "Le registre de langue courant est…", options: ["La langue standard, neutre, utilisée partout", "La langue familière", "La langue soutenue", "La langue argotique"], answer: "La langue standard, neutre, utilisée partout", explication: "Le registre courant est ni trop formel ni trop familier. On l'utilise dans les échanges ordinaires et les écrits neutres." },
      { question: "Le registre familier s'utilise…", options: ["Entre amis, dans des situations décontractées", "Dans les discours officiels", "À l'écrit formel", "Dans les textes littéraires classiques"], answer: "Entre amis, dans des situations décontractées", explication: "Le registre familier utilise des mots comme 'bouquin', 'boulot', 'sympa'. Il est inadapté à l'écrit scolaire ou professionnel." },
      { question: "Le mot 'nez' dans 'avoir du nez' (= de l'intuition) est au sens…", options: ["Figuré", "Propre", "Courant", "Technique"], answer: "Figuré", explication: "Le nez (organe) → avoir du nez (être intuitif) : c'est un glissement vers le sens figuré, imagé." },
      { question: "Le contexte d'un mot permet de…", options: ["Déterminer quel sens il prend", "Connaître son étymologie", "Trouver ses synonymes", "Identifier son préfixe"], answer: "Déterminer quel sens il prend", explication: "'Fin' peut être adjectif (un tissu fin) ou nom (la fin du film). Le contexte tranche entre les sens possibles." },
      { question: "Une expression idiomatique est…", options: ["Une expression dont le sens global ne découle pas du sens de chaque mot", "Une expression scientifique", "Un mot composé", "Un proverbe traduit"], answer: "Une expression dont le sens global ne découle pas du sens de chaque mot", explication: "'Casser les pieds', 'poser un lapin', 'avoir le cafard' : le sens de l'expression est différent du sens littéral des mots." }
    ],
    2: [
      { question: "La dénotation d'un mot c'est…", options: ["Son sens objectif, défini dans le dictionnaire", "Son sens émotionnel", "Ses synonymes", "Son registre de langue"], answer: "Son sens objectif, défini dans le dictionnaire", explication: "La dénotation = le sens neutre, objectif. 'Serpent' = reptile sans pattes. C'est le sens dénotatif." },
      { question: "La connotation d'un mot c'est…", options: ["Les valeurs et images qu'il évoque subjectivement", "Son sens dans le dictionnaire", "Son origine étymologique", "Sa classe grammaticale"], answer: "Les valeurs et images qu'il évoque subjectivement", explication: "'Serpent' connote la tromperie, le danger. La connotation dépend de la culture et du contexte." },
      { question: "Un euphémisme atténue…", options: ["Une réalité choquante ou douloureuse", "Un mot positif", "Une erreur grammaticale", "Un sens figuré"], answer: "Une réalité choquante ou douloureuse", explication: "'Il nous a quittés' (pour 'il est mort'), 'il n'est pas très doué' (pour 'il est nul'). L'euphémisme adoucit." },
      { question: "Le registre soutenu se caractérise par…", options: ["Un vocabulaire élaboré, des tournures complexes", "Des mots familiers", "Des abréviations", "Des phrases très courtes"], answer: "Un vocabulaire élaboré, des tournures complexes", explication: "Le registre soutenu utilise 'demeure' (maison), 'trépasser' (mourir), 'nonobstant' (malgré). C'est la langue soignée des textes littéraires." },
      { question: "Un néologisme de sens est…", options: ["Un mot existant qui prend un nouveau sens", "Un mot entièrement nouveau", "Un mot emprunté", "Un mot abrégé"], answer: "Un mot existant qui prend un nouveau sens", explication: "'Surfer' (naviguer sur une planche) a acquis le sens de 'naviguer sur Internet'. C'est un néologisme de sens (extension de sens)." },
      { question: "Le mot 'souris' peut désigner…", options: ["L'animal et un outil informatique", "Uniquement l'animal", "Uniquement l'outil informatique", "Un fruit"], answer: "L'animal et un outil informatique", explication: "'Souris' illustre parfaitement la polysémie et l'extension de sens : le contexte (cuisine / informatique) détermine le sens." },
      { question: "Un archaïsme est un mot…", options: ["Vieilli, sorti de l'usage courant", "Très récent", "Emprunté au latin", "Formé par composition"], answer: "Vieilli, sorti de l'usage courant", explication: "'Icelle', 'maint', 'ouïr' sont des archaïsmes : ils s'utilisaient autrefois mais ont disparu du français courant." },
      { question: "L'argot est…", options: ["Un vocabulaire familier propre à un groupe social", "La langue officielle", "Un registre soutenu", "Un dialecte régional"], answer: "Un vocabulaire familier propre à un groupe social", explication: "L'argot est un vocabulaire codé ou familier (flic, bagnole, thune) utilisé par certains groupes sociaux." }
    ],
    3: [
      { question: "La pragmatique s'intéresse au…", options: ["Sens des mots dans leur contexte d'utilisation réel", "Sens hors contexte uniquement", "Son des mots", "Origine étymologique"], answer: "Sens des mots dans leur contexte d'utilisation réel", explication: "La pragmatique étudie comment les locuteurs utilisent la langue en situation. 'Peux-tu fermer la fenêtre ?' est une demande, pas une question sur les capacités." },
      { question: "L'isotopie sémantique désigne…", options: ["La récurrence d'un champ sémantique dans un texte", "La répétition d'un mot", "La synonymie entre deux mots", "L'antonymie"], answer: "La récurrence d'un champ sémantique dans un texte", explication: "Si un texte emploie 'onde', 'tempête', 'marée', 'rive', il y a une isotopie du champ sémantique de la mer." },
      { question: "Le sens péjoratif d'un mot exprime…", options: ["Un jugement négatif", "Un jugement positif", "Un jugement neutre", "Une nuance technique"], answer: "Un jugement négatif", explication: "'Politicien' est péjoratif (sous-entend calcul, manœuvre) contrairement à 'homme politique', plus neutre. Le péjoratif dévalue." },
      { question: "Le sens mélioratif d'un mot exprime…", options: ["Un jugement positif, valorisant", "Un jugement négatif", "Une neutralité absolue", "Une précision technique"], answer: "Un jugement positif, valorisant", explication: "'Résidence' est mélioratif par rapport à 'logement'. 'Léger' est mélioratif là où 'maigre' serait péjoratif." },
      { question: "La catachrèse est une figure qui consiste à…", options: ["Employer un mot au sens figuré par extension d'usage", "Inventer un mot nouveau", "Emprunter à une autre langue", "Supprimer un mot"], answer: "Employer un mot au sens figuré par extension d'usage", explication: "'Le pied de la table', 'l'aile du bâtiment' : ce sont des catachrèses, figures devenues si courantes qu'on ne les perçoit plus comme figurées." },
      { question: "Un hyperonyme est un terme…", options: ["Plus général qui en inclut d'autres", "Synonyme exact d'un autre", "Contraire d'un autre", "De registre soutenu"], answer: "Plus général qui en inclut d'autres", explication: "'Végétal' est l'hyperonyme de 'arbre', 'fleur', 'herbe'. L'hyperonyme est au-dessus dans la hiérarchie sémantique." },
      { question: "Un hyponyme est un terme…", options: ["Plus spécifique inclus dans un hyperonyme", "Plus général qu'un autre", "Synonyme d'un autre", "Contraire d'un autre"], answer: "Plus spécifique inclus dans un hyperonyme", explication: "'Rose' est un hyponyme de 'fleur', qui est lui-même hyponyme de 'végétal'. L'hyponyme est l'espèce, l'hyperonyme est le genre." },
      { question: "La métaphore lexicalisée (ou morte) est…", options: ["Une métaphore tellement usée qu'on ne la perçoit plus comme image", "Une métaphore poétique originale", "Une comparaison avec 'comme'", "Un euphémisme"], answer: "Une métaphore tellement usée qu'on ne la perçoit plus comme image", explication: "'Le pied de la montagne', 'l'œil du cyclone', 'la main courante' : ce sont des métaphores mortes, entrées dans l'usage courant." }
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
  },

  // ══════════════════════════════════════════
  //  FRANÇAIS 5ème — programme officiel
  // ══════════════════════════════════════════

  francais5Lecture: {
    id: 'francais5Lecture', nom: 'Lecture & Compréhension', emoji: '📖', couleur: '#16a34a',
    sousChapitres: ['francais5Lect_Poesie', 'francais5Lect_Theatre', 'francais5Lect_Argumentation'],
    1: [
      { question: "Un sonnet est un poème composé de…", options: ["14 vers (2 quatrains + 2 tercets)", "12 vers", "10 vers", "16 vers"], answer: "14 vers (2 quatrains + 2 tercets)", explication: "Le sonnet classique : 2 strophes de 4 vers (quatrains) + 2 strophes de 3 vers (tercets) = 14 vers." },
      { question: "Dans une pièce de théâtre, une didascalie est…", options: ["Une indication scénique de l'auteur", "Une longue réplique d'un personnage", "Le titre d'un acte", "Un monologue"], answer: "Une indication scénique de l'auteur", explication: "Les didascalies (en italique) indiquent les décors, gestes, tons. Elles sont destinées aux acteurs et metteur en scène." },
      { question: "Dans un texte argumentatif, la thèse est…", options: ["L'opinion défendue par l'auteur", "Un exemple concret", "La conclusion uniquement", "Un fait scientifique"], answer: "L'opinion défendue par l'auteur", explication: "La thèse = position de l'auteur. Les arguments servent à la soutenir. Les exemples illustrent les arguments." },
      { question: "L'alexandrin est un vers de…", options: ["12 syllabes", "10 syllabes", "8 syllabes", "14 syllabes"], answer: "12 syllabes", explication: "L'alexandrin = 12 syllabes, coupé en 2 hémistiches de 6. C'est le vers classique du théâtre et de la poésie française." },
      { question: "Dans une pièce de théâtre, un acte est divisé en…", options: ["Scènes", "Strophes", "Chapitres", "Paragraphes"], answer: "Scènes", explication: "Une pièce de théâtre se divise en actes, eux-mêmes divisés en scènes. Le changement de scène = entrée ou sortie d'un personnage." },
      { question: "Un argument est renforcé par…", options: ["Un exemple ou une preuve", "Une opinion sans justification", "Une répétition de la thèse", "Un connecteur uniquement"], answer: "Un exemple ou une preuve", explication: "Argument + exemple = démonstration convaincante. L'exemple peut être un fait, une statistique, une citation." },
      { question: "Les rimes croisées suivent le schéma…", options: ["ABAB", "AABB", "ABBA", "AAAA"], answer: "ABAB", explication: "Rimes croisées (alternées) : vers 1 rime avec vers 3, vers 2 avec vers 4. Schéma ABAB." },
      { question: "La comédie au théâtre vise à…", options: ["Faire rire et critiquer les défauts humains", "Provoquer terreur et pitié", "Raconter une épopée", "Informer le public"], answer: "Faire rire et critiquer les défauts humains", explication: "La comédie utilise le rire pour dénoncer les travers humains (avarice, hypocrisie…). Molière en est le maître." }
    ],
    2: [
      { question: "Le contre-argument réfute…", options: ["La thèse adverse", "Son propre argument", "L'exemple", "La conclusion"], answer: "La thèse adverse", explication: "Dans un plan dialectique, on présente la thèse, puis on la réfute par des contre-arguments, avant de proposer une synthèse." },
      { question: "Un aparté au théâtre est une réplique…", options: ["Dite par un personnage supposé seul entendre (le public)", "Adressée à tous les personnages", "Chantée", "Écrite dans les didascalies"], answer: "Dite par un personnage supposé seul entendre (le public)", explication: "L'aparté = confidence faite au public que les autres personnages sont censés ne pas entendre. Effet comique ou dramatique." },
      { question: "La rime embrassée suit le schéma…", options: ["ABBA", "ABAB", "AABB", "ABBB"], answer: "ABBA", explication: "Rimes embrassées : la rime extérieure entoure la rime intérieure. Schéma ABBA." },
      { question: "Dans un texte argumentatif, la concession consiste à…", options: ["Admettre partiellement la thèse adverse avant de la réfuter", "Répéter son argument", "Citer un exemple", "Conclure"], answer: "Admettre partiellement la thèse adverse avant de la réfuter", explication: "'Certes… mais…' est la structure de la concession-réfutation. On reconnaît la part de vérité de l'adversaire avant de s'y opposer." },
      { question: "Le quiproquo au théâtre est…", options: ["Une méprise sur l'identité d'une personne ou d'une chose", "Un long monologue", "Une scène muette", "Une tirade comique"], answer: "Une méprise sur l'identité d'une personne ou d'une chose", explication: "Le quiproquo (du latin 'l'un pour l'autre') = confusion entre deux choses ou personnes. Ressort classique de la comédie." },
      { question: "L'enjambement en poésie, c'est quand…", options: ["Le sens déborde du vers sur le suivant", "Deux vers ont la même rime", "Un vers est plus long que les autres", "La strophe se termine par un point"], answer: "Le sens déborde du vers sur le suivant", explication: "L'enjambement : la phrase continue au vers suivant sans pause. Rejet = le mot important est renvoyé au début du vers suivant." },
      { question: "L'ethos dans l'argumentation, c'est…", options: ["L'image de soi que projette l'orateur", "L'appel aux émotions", "Le raisonnement logique", "La conclusion"], answer: "L'image de soi que projette l'orateur", explication: "Les trois piliers de la rhétorique (Aristote) : ethos (crédibilité de l'orateur), pathos (émotions), logos (raisonnement)." },
      { question: "La tragédie classique respecte la règle des trois unités : unité de…", options: ["Temps, lieu et action", "Personnages, décor et langue", "Actes, scènes et répliques", "Thème, intrigue et morale"], answer: "Temps, lieu et action", explication: "Règle des 3 unités (XVIIe s.) : 1 seule journée (temps), 1 seul lieu, 1 seule intrigue principale (action)." }
    ],
    3: [
      { question: "Le pathos dans un texte argumentatif vise à…", options: ["Toucher les émotions du lecteur/auditeur", "Prouver par la logique", "Affirmer la crédibilité de l'auteur", "Citer des chiffres"], answer: "Toucher les émotions du lecteur/auditeur", explication: "Le pathos = appel aux sentiments. On cherche à émouvoir, indigner, apitoyer. C'est un levier puissant mais potentiellement manipulateur." },
      { question: "Le logos dans l'argumentation désigne…", options: ["Le raisonnement logique et les preuves", "L'image de l'orateur", "L'appel aux émotions", "La conclusion"], answer: "Le raisonnement logique et les preuves", explication: "Le logos = la logique, les faits, les preuves rationnelles. C'est le fondement de l'argumentation solide." },
      { question: "La catharsis, dans la tragédie grecque, désigne…", options: ["La purification des émotions par le spectacle", "La mort du héros", "Le dénouement heureux", "Le chœur de la pièce"], answer: "La purification des émotions par le spectacle", explication: "Aristote : en voyant la tragédie, le spectateur ressent terreur et pitié, puis est 'purifié' de ces émotions. C'est la catharsis." },
      { question: "Un syllogisme est un raisonnement qui…", options: ["Tire une conclusion de deux prémisses", "Répète trois fois la même idée", "Oppose thèse et antithèse", "Cite trois exemples"], answer: "Tire une conclusion de deux prémisses", explication: "Ex : 'Tout homme est mortel / Socrate est un homme / Donc Socrate est mortel.' C'est un syllogisme déductif." },
      { question: "Le vers libre est caractérisé par…", options: ["L'absence de nombre fixe de syllabes et de rimes obligatoires", "12 syllabes obligatoires", "Des rimes croisées exclusivement", "Une structure en quatrains uniquement"], answer: "L'absence de nombre fixe de syllabes et de rimes obligatoires", explication: "Le vers libre (XIXe-XXe s.) s'affranchit des règles de la versification classique : pas de mètre fixe, pas de rime obligatoire." },
      { question: "Le coup de théâtre est un événement dramatique qui…", options: ["Renverse brusquement la situation", "Clôt la pièce", "Présente les personnages", "Ralentit l'action"], answer: "Renverse brusquement la situation", explication: "Le coup de théâtre = retournement de situation soudain et inattendu qui relance ou conclut l'action de façon spectaculaire." },
      { question: "Le sophisme est un raisonnement qui…", options: ["Paraît logique mais est faux ou trompeur", "Est parfaitement rigoureux", "Utilise uniquement des exemples", "S'appuie sur des émotions"], answer: "Paraît logique mais est faux ou trompeur", explication: "Le sophisme = argumentation fallacieuse qui semble convaincante mais repose sur une erreur de logique ou une manipulation." },
      { question: "L'hypotypose est une figure qui…", options: ["Décrit une scène de façon si vivante qu'on croit la voir", "Exagère une réalité", "Atténue une idée difficile", "Répète un son"], answer: "Décrit une scène de façon si vivante qu'on croit la voir", explication: "L'hypotypose = description vive et animée qui met la scène sous les yeux du lecteur. Elle crée un effet de réalité intense." }
    ]
  },

  francais5Ecriture: {
    id: 'francais5Ecriture', nom: 'Écriture', emoji: '✍️', couleur: '#0d9488',
    sousChapitres: ['francais5Ecrit_Narration', 'francais5Ecrit_Argumenter'],
    1: [
      { question: "Pour intégrer un dialogue dans un récit, chaque prise de parole commence par…", options: ["Un tiret (—) ou un retour à la ligne", "Un point d'interrogation", "Une majuscule seule", "Des parenthèses"], answer: "Un tiret (—) ou un retour à la ligne", explication: "Chaque changement de locuteur = retour à la ligne + tiret. Les guillemets ouvrent le dialogue, le tiret signale chaque réplique." },
      { question: "Le passé simple s'emploie dans un récit pour…", options: ["Les actions ponctuelles et achevées (premier plan)", "La description et les arrière-plans", "Les dialogues", "Les pensées des personnages"], answer: "Les actions ponctuelles et achevées (premier plan)", explication: "Passé simple = actions du récit (il entra, il dit, il repartit). Imparfait = descriptions, états, arrière-plan (il faisait nuit)." },
      { question: "Dans un texte argumentatif, on présente d'abord…", options: ["Sa thèse (opinion) puis ses arguments", "Un résumé du texte adverse", "La conclusion", "Des exemples sans thèse"], answer: "Sa thèse (opinion) puis ses arguments", explication: "Structure classique : thèse → arguments → exemples → conclusion. La thèse doit être clairement formulée dès le début." },
      { question: "L'imparfait dans un récit sert à décrire…", options: ["Les décors, les états, les habitudes (arrière-plan)", "Les actions ponctuelles", "Les dialogues", "Les actions futures"], answer: "Les décors, les états, les habitudes (arrière-plan)", explication: "L'imparfait plante le décor : 'La nuit était tombée. Le vent soufflait…' Il s'oppose au passé simple pour les actions." },
      { question: "Pour convaincre, il est plus efficace d'utiliser…", options: ["Des arguments variés (logiques, émotionnels, exemples)", "Uniquement des opinions personnelles", "Des répétitions de la thèse", "Un ton agressif"], answer: "Des arguments variés (logiques, émotionnels, exemples)", explication: "Un bon texte argumentatif mêle logos (logique), pathos (émotion) et ethos (crédibilité). La variété renforce la persuasion." },
      { question: "La description d'un personnage doit inclure…", options: ["Traits physiques ET psychologiques", "Uniquement l'apparence physique", "Uniquement ses actions passées", "Son nom et son âge seulement"], answer: "Traits physiques ET psychologiques", explication: "Un personnage convaincant a une apparence, une personnalité, des motivations. Les traits psychologiques expliquent ses choix." },
      { question: "Le plan dialectique d'un texte argumentatif comprend…", options: ["Thèse / Antithèse / Synthèse", "Introduction / Corps / Conclusion", "Argument / Exemple / Transition", "Début / Milieu / Fin"], answer: "Thèse / Antithèse / Synthèse", explication: "Le plan dialectique : on défend une thèse (pour), on la réfute (contre), puis on dépasse l'opposition (synthèse nuancée)." },
      { question: "Une transition entre deux paragraphes sert à…", options: ["Relier les idées et assurer la cohérence", "Répéter l'argument précédent", "Introduire le titre", "Conclure définitivement"], answer: "Relier les idées et assurer la cohérence", explication: "La phrase de transition reprend brièvement l'idée précédente et annonce la suivante. Elle fluidifie la lecture." }
    ],
    2: [
      { question: "Le discours indirect libre intègre les pensées d'un personnage…", options: ["Sans guillemets ni verbe introducteur", "Entre guillemets avec verbe de parole", "En note de bas de page", "En italique entre parenthèses"], answer: "Sans guillemets ni verbe introducteur", explication: "Ex : 'Il rentra chez lui. Pourquoi avait-il dit ça ?' La question intérieure est fondue dans le récit sans marqueur explicite." },
      { question: "Pour créer de la tension dans un récit, on peut…", options: ["Raccourcir les phrases et multiplier les actions", "Allonger les descriptions", "Supprimer les dialogues", "Employer uniquement l'imparfait"], answer: "Raccourcir les phrases et multiplier les actions", explication: "Les phrases courtes et nominales accélèrent le rythme. L'accumulation d'actions crée une impression de rapidité et de tension." },
      { question: "La lettre argumentative doit commencer par…", options: ["Une formule d'appel (Monsieur, Madame…) et présenter l'objet", "La conclusion", "Un argument", "Un exemple"], answer: "Une formule d'appel (Monsieur, Madame…) et présenter l'objet", explication: "Structure d'une lettre : lieu + date / formule d'appel / objet / corps / formule de politesse / signature." },
      { question: "Pour éviter la répétition du mot 'dire', on peut utiliser…", options: ["S'exclamer, murmurer, répondre, affirmer, rétorquer…", "Toujours le même verbe", "Supprimer les dialogues", "Mettre entre guillemets"], answer: "S'exclamer, murmurer, répondre, affirmer, rétorquer…", explication: "Varier les verbes de parole enrichit le style et précise le ton : chuchoter (discret), crier (fort), rétorquer (répondre vivement)." },
      { question: "La réfutation consiste à…", options: ["Montrer qu'un argument adverse est faux ou insuffisant", "Abandonner sa thèse", "Citer l'adversaire sans répondre", "Ajouter un exemple"], answer: "Montrer qu'un argument adverse est faux ou insuffisant", explication: "Réfuter = contester un argument en montrant ses limites, ses erreurs ou en lui opposant un contre-exemple." },
      { question: "L'incipit d'un roman est…", options: ["Les premières pages qui installent le cadre et accrochent le lecteur", "Le titre du roman", "La dédicace", "La dernière phrase"], answer: "Les premières pages qui installent le cadre et accrochent le lecteur", explication: "L'incipit (du latin 'il commence') est l'ouverture du roman. Il doit capter l'attention et planter le décor (lieu, époque, personnages)." },
      { question: "La clausule d'un texte est…", options: ["Sa phrase ou son passage final, souvent mémorable", "Sa première phrase", "Son titre", "Sa dédicace"], answer: "Sa phrase ou son passage final, souvent mémorable", explication: "La clausule clôt le texte. Les auteurs soignent particulièrement cette fin : elle donne au lecteur une dernière impression forte." },
      { question: "Pour rendre un texte argumentatif plus convaincant, on peut citer…", options: ["Des statistiques, des experts, des exemples historiques", "Uniquement son opinion", "Des anecdotes personnelles uniquement", "Des métaphores uniquement"], answer: "Des statistiques, des experts, des exemples historiques", explication: "Les preuves objectives (chiffres, citations d'experts, faits historiques) renforcent la crédibilité et donnent du poids aux arguments." }
    ],
    3: [
      { question: "Le registre épique dans un récit se caractérise par…", options: ["Des exploits héroïques, un style élevé, des hyperboles", "Un ton quotidien et familier", "Des descriptions minutieuses", "Un vocabulaire technique"], answer: "Des exploits héroïques, un style élevé, des hyperboles", explication: "Le registre épique magnifie les héros et leurs actes : superlatifs, hyperboles, vocabulaire guerrier. Ex : épopées, chansons de geste." },
      { question: "Le plan analytique d'un texte argumentatif examine…", options: ["Un sujet sous plusieurs angles complémentaires", "Pour et contre uniquement", "Thèse / antithèse / synthèse", "Uniquement les arguments favorables"], answer: "Un sujet sous plusieurs angles complémentaires", explication: "Le plan analytique = question → causes → conséquences, ou description → analyse → évaluation. Complémentaire ≠ dialectique (opposé)." },
      { question: "L'ironie dramatique au théâtre crée un effet quand…", options: ["Le spectateur sait ce que le personnage ignore", "Le personnage sait ce que le spectateur ignore", "Deux personnages s'affrontent", "Un personnage ment à un autre"], answer: "Le spectateur sait ce que le personnage ignore", explication: "L'ironie dramatique = le spectateur détient une information que le personnage n'a pas. Tension et suspense en résultent." },
      { question: "Le style coupé (phrases courtes, ellipses) crée un effet de…", options: ["Rapidité, tension, urgence", "Sérénité et lenteur", "Précision scientifique", "Humour"], answer: "Rapidité, tension, urgence", explication: "Les phrases brèves, nominales ou verbales seules accélèrent le rythme narratif. Adapté aux scènes d'action ou de crise." },
      { question: "L'ethos préalable d'un auteur est…", options: ["Sa réputation avant même qu'il prenne la parole", "Ce qu'il dit pendant le discours", "Ses arguments logiques", "Sa conclusion"], answer: "Sa réputation avant même qu'il prenne la parole", explication: "L'ethos préalable = crédibilité liée au statut de l'auteur (expert, prix Nobel…) qui joue avant même qu'il argumente." },
      { question: "Le para-texte d'un livre comprend…", options: ["Titre, sous-titre, préface, quatrième de couverture, notes", "Le texte principal uniquement", "Les dialogues et descriptions", "Les chapitres numérotés"], answer: "Titre, sous-titre, préface, quatrième de couverture, notes", explication: "Le para-texte entoure le texte principal. Il informe le lecteur, guide sa lecture et participe à la réception de l'œuvre." },
      { question: "La polyphonie dans un texte argumentatif désigne…", options: ["La présence de plusieurs voix ou points de vue", "Un texte écrit à plusieurs mains", "L'utilisation de métaphores musicales", "La répétition d'une idée sous différentes formes"], answer: "La présence de plusieurs voix ou points de vue", explication: "Un texte polyphonique fait entendre différentes voix (citations, dialogues, concessions) pour enrichir l'argumentation." },
      { question: "L'anaphore rhétorique dans un discours argumentatif sert à…", options: ["Insister et marteler un message en répétant une formule", "Atténuer une idée difficile", "Comparer deux arguments", "Citer un exemple"], answer: "Insister et marteler un message en répétant une formule", explication: "Ex : 'Il faut agir. Il faut agir maintenant. Il faut agir ensemble.' L'anaphore crée un effet d'insistance et de rythme oratoire." }
    ]
  },

  francais5Grammaire: {
    id: 'francais5Grammaire', nom: 'Grammaire', emoji: '📐', couleur: '#7c3aed',
    sousChapitres: ['francais5Gram_Subordonnees', 'francais5Gram_VoixModes', 'francais5Gram_DiscoursRapporte'],
    1: [
      { question: "La proposition subordonnée relative est introduite par…", options: ["Un pronom relatif (qui, que, dont, où, lequel…)", "Une conjonction de coordination", "Un adverbe interrogatif", "Un déterminant démonstratif"], answer: "Un pronom relatif (qui, que, dont, où, lequel…)", explication: "La relative complète un antécédent : 'le film que j'ai vu' — 'que' reprend 'le film' et introduit la relative." },
      { question: "La voix passive se forme avec…", options: ["Être + participe passé", "Avoir + participe passé", "Aller + infinitif", "Faire + infinitif"], answer: "Être + participe passé", explication: "Ex : 'Le gâteau est mangé par les enfants.' Être (conjugué au temps voulu) + participe passé accordé avec le sujet." },
      { question: "La proposition subordonnée complétive (COD) est introduite par…", options: ["Que", "Qui", "Dont", "Où"], answer: "Que", explication: "'Je sais que tu viendras.' La complétive en 'que' est COD du verbe principal 'sais'. Elle répond à 'je sais quoi ?'" },
      { question: "Le sujet de la voix passive subit l'action. Qui la fait ?", options: ["Le complément d'agent (introduit par 'par' ou 'de')", "Le COD", "L'attribut", "Le sujet lui-même"], answer: "Le complément d'agent (introduit par 'par' ou 'de')", explication: "'La souris est attrapée par le chat.' → 'le chat' est le complément d'agent. Il fait réellement l'action." },
      { question: "La subordonnée circonstancielle de cause est introduite par…", options: ["Parce que, puisque, car, comme", "Pour que, afin que", "Bien que, quoique", "Si, à condition que"], answer: "Parce que, puisque, car, comme", explication: "'Il reste parce qu'il est fatigué.' La cause répond à 'pourquoi ?'. Conjonctions de cause : parce que, puisque, comme, étant donné que." },
      { question: "Le mode infinitif est utilisé quand le sujet de la subordonnée est…", options: ["Le même que celui de la principale", "Différent de celui de la principale", "Toujours 'il'", "Absent"], answer: "Le même que celui de la principale", explication: "'Je veux partir.' (même sujet : 'je') → infinitif. 'Je veux que tu partes.' (sujets différents) → subjonctif." },
      { question: "Le gérondif se forme avec…", options: ["En + participe présent", "À + infinitif", "De + infinitif", "Pour + participe passé"], answer: "En + participe présent", explication: "'En travaillant, il progresse.' Le gérondif exprime une action simultanée ou la manière. Il a toujours le même sujet que le verbe principal." },
      { question: "La subordonnée de but est introduite par…", options: ["Pour que, afin que (+ subjonctif)", "Parce que", "Quand, lorsque", "Si, à condition que"], answer: "Pour que, afin que (+ subjonctif)", explication: "'Il parle lentement pour que tout le monde comprenne.' Le but répond à 'dans quel but ?'. Toujours suivi du subjonctif." }
    ],
    2: [
      { question: "La subordonnée de condition est introduite par…", options: ["Si (+ indicatif)", "Bien que (+ subjonctif)", "Parce que", "Que"], answer: "Si (+ indicatif)", explication: "'Si tu travailles, tu réussiras.' La condition suit 'si' + indicatif présent. Ne jamais mettre le conditionnel après 'si' conditionnel." },
      { question: "La subordonnée de concession exprime…", options: ["Un obstacle qui n'empêche pas l'action principale", "Une cause", "Un but", "Une condition"], answer: "Un obstacle qui n'empêche pas l'action principale", explication: "'Bien qu'il soit fatigué, il continue.' L'obstacle (fatigue) n'empêche pas l'action (continuer). Conjonctions : bien que, quoique (+ subjonctif)." },
      { question: "Transformer à la voix active : 'Le roman a été écrit par Balzac.' donne…", options: ["Balzac a écrit le roman.", "Le roman écrit Balzac.", "Balzac est écrit par le roman.", "Le roman s'écrit par Balzac."], answer: "Balzac a écrit le roman.", explication: "Voix passive → active : le complément d'agent devient sujet, le sujet passif devient COD. Le verbe perd 'être' et garde le même temps." },
      { question: "Le participe présent est invariable sauf quand il est utilisé comme…", options: ["Adjectif verbal (épithète ou attribut)", "Complément circonstanciel", "Sujet", "COD"], answer: "Adjectif verbal (épithète ou attribut)", explication: "'Une eau courante' : 'courante' est adjectif verbal, il s'accorde. 'Une eau coulant vite' : participe présent, invariable." },
      { question: "La subordonnée interrogative indirecte est introduite par…", options: ["Si, ce que, ce qui, où, comment, pourquoi…", "Que, pour que", "Bien que, quoique", "Car, puisque"], answer: "Si, ce que, ce qui, où, comment, pourquoi…", explication: "'Je me demande s'il viendra.' L'interrogation directe ('viendra-t-il ?') devient subordonnée introduite par 'si'. Pas de point d'interrogation." },
      { question: "Dans 'dont je t'ai parlé', 'dont' est pronom relatif et a la fonction de…", options: ["Complément indirect (de + nom remplacé)", "Sujet", "COD", "CC de lieu"], answer: "Complément indirect (de + nom remplacé)", explication: "'dont' remplace 'de + antécédent'. 'Le film dont je t'ai parlé' = 'je t'ai parlé du film'. 'Dont' = complément de 'parlé' (parler de)." },
      { question: "Le mode participe (passé ou présent) peut avoir comme sujet…", options: ["Un groupe nominal propre à lui (proposition participiale)", "Uniquement le sujet de la principale", "Jamais de sujet", "Toujours 'il'"], answer: "Un groupe nominal propre à lui (proposition participiale)", explication: "'Le soleil couché, nous rentrâmes.' → 'le soleil' est sujet du participe 'couché'. C'est une proposition participiale." },
      { question: "La subordonnée de conséquence est introduite par…", options: ["Si bien que, de sorte que, au point que (+ indicatif)", "Pour que, afin que", "Bien que, quoique", "Parce que, puisque"], answer: "Si bien que, de sorte que, au point que (+ indicatif)", explication: "'Il a tellement travaillé qu'il a réussi.' La conséquence découle de la principale. Indicatif (fait réel) ≠ but (subjonctif)." }
    ],
    3: [
      { question: "La proposition infinitive a un sujet propre différent du verbe principal. Exemple ?", options: ["'J'entends les oiseaux chanter' (les oiseaux = sujet de chanter)", "'Je veux partir' (même sujet)", "'Il faut partir'", "'Partir, c'est mourir'"], answer: "'J'entends les oiseaux chanter' (les oiseaux = sujet de chanter)", explication: "La prop. infinitive a son propre sujet : 'les oiseaux chantent'. Elle est COD du verbe de perception (voir, entendre, sentir…)." },
      { question: "L'accord du participe passé en proposition participiale se fait avec…", options: ["Le sujet de la participiale", "Le sujet de la principale", "Le COD", "Aucun accord"], answer: "Le sujet de la participiale", explication: "'Ses bagages faits, il partît.' → 'faits' s'accorde avec 'ses bagages' (sujet de la participiale, masculin pluriel)." },
      { question: "La corrélation 'tel… que' exprime…", options: ["La comparaison avec une conséquence", "L'opposition", "La cause", "Le but"], answer: "La comparaison avec une conséquence", explication: "'Il fait tel bruit que tout le monde l'entend.' La corrélation 'tel…que' exprime intensité + conséquence." },
      { question: "La subordonnée temporelle avec 'avant que' se construit avec…", options: ["Le subjonctif", "L'indicatif", "Le conditionnel", "L'infinitif uniquement"], answer: "Le subjonctif", explication: "'Avant qu'il parte' → subjonctif. 'Après qu'il est parti' → indicatif. 'Avant que' et 'jusqu'à ce que' imposent le subjonctif." },
      { question: "Le discours indirect au passé transforme le présent en…", options: ["Imparfait", "Passé composé", "Passé simple", "Futur"], answer: "Imparfait", explication: "Concordance des temps : verbe principal au passé → présent du discours direct devient imparfait au discours indirect." },
      { question: "La proposition subordonnée complétive sujet est introduite par…", options: ["Que (en tête de phrase)", "Qui", "Dont", "Si"], answer: "Que (en tête de phrase)", explication: "'Qu'il parte est regrettable.' La complétive est sujet du verbe 'est'. Rare mais important à reconnaître." },
      { question: "La construction absolue (sans conjonction ni préposition) utilise…", options: ["Un participe ou un nom avec un modifieur", "Un infinitif seul", "Un pronom relatif", "Un adverbe"], answer: "Un participe ou un nom avec un modifieur", explication: "'Cela dit, la question reste ouverte.' / 'Le vent tombé, le calme revint.' : constructions absolues sans subordonnant." },
      { question: "Le verbe impersonnel 'il faut' est suivi du…", options: ["Subjonctif ou d'un infinitif", "Conditionnel", "Futur uniquement", "Passé simple"], answer: "Subjonctif ou d'un infinitif", explication: "'Il faut partir.' (infinitif, sujet indéfini) / 'Il faut que tu partes.' (subjonctif, sujet spécifié)." }
    ]
  },

  francais5Conjugaison: {
    id: 'francais5Conjugaison', nom: 'Conjugaison', emoji: '🕰️', couleur: '#b45309',
    sousChapitres: ['francais5Conj_Subjonctif', 'francais5Conj_Conditionnel', 'francais5Conj_PasseSimple'],
    1: [
      { question: "Le subjonctif présent de 'être' à la 1ère personne du singulier est…", options: ["que je sois", "que je suis", "que j'étais", "que je serai"], answer: "que je sois", explication: "Subjonctif de 'être' (irrégulier) : que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient." },
      { question: "Le conditionnel présent de 'aller' à la 1ère personne est…", options: ["j'irais", "je vais", "j'allais", "j'irai"], answer: "j'irais", explication: "Conditionnel présent = radical du futur + terminaisons de l'imparfait. 'Aller' → futur 'ir-' → conditionnel 'j'irais'." },
      { question: "Le passé simple de 'chanter' à la 3ème pers. du singulier est…", options: ["il chanta", "il chante", "il chantait", "il chantera"], answer: "il chanta", explication: "Passé simple des verbes en -er : je -ai, tu -as, il -a, nous -âmes, vous -âtes, ils -èrent." },
      { question: "Quelle conjonction impose toujours le subjonctif ?", options: ["bien que", "parce que", "quand", "si"], answer: "bien que", explication: "'Bien que', 'quoique', 'pour que', 'afin que', 'avant que' imposent toujours le subjonctif." },
      { question: "Le conditionnel présent de 'faire' à la 3ème pers. du singulier est…", options: ["il ferait", "il fait", "il faisait", "il fera"], answer: "il ferait", explication: "Conditionnel de 'faire' (irrégulier) : radical 'fer-' + terminaisons imparfait → je ferais, tu ferais, il ferait…" },
      { question: "Le passé simple de 'finir' à la 1ère pers. du singulier est…", options: ["je finis", "je finissais", "je finirai", "j'ai fini"], answer: "je finis", explication: "Passé simple des verbes en -ir (2e groupe) : je -is, tu -is, il -it, nous -îmes, vous -îtes, ils -irent." },
      { question: "Après 'il faut que', on utilise…", options: ["Le subjonctif", "L'indicatif", "Le conditionnel", "L'infinitif"], answer: "Le subjonctif", explication: "'Il faut que tu viennes.' Les verbes de volonté, nécessité, doute imposent le subjonctif dans la subordonnée." },
      { question: "Le conditionnel exprime notamment…", options: ["Une hypothèse ou une politesse", "Un fait certain au présent", "Une action passée", "Un ordre direct"], answer: "Une hypothèse ou une politesse", explication: "'Je voudrais un café.' (politesse) / 'Si j'avais le temps, je viendrais.' (hypothèse). Le conditionnel atténue l'assertion." }
    ],
    2: [
      { question: "Le subjonctif présent de 'avoir' à la 1ère pers. du singulier est…", options: ["que j'aie", "que j'ai", "que j'avais", "que j'aurais"], answer: "que j'aie", explication: "Subjonctif de 'avoir' (irrégulier) : que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient." },
      { question: "Le passé simple de 'venir' à la 3ème pers. du singulier est…", options: ["il vint", "il venait", "il vient", "il viendra"], answer: "il vint", explication: "Passé simple de 'venir' (irrégulier) : je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent." },
      { question: "Le conditionnel passé se forme avec…", options: ["Auxiliaire (avoir/être) au conditionnel présent + participe passé", "Auxiliaire à l'imparfait + participe passé", "Radical futur + imparfait", "Être au subjonctif + participe"], answer: "Auxiliaire (avoir/être) au conditionnel présent + participe passé", explication: "Ex : 'j'aurais mangé', 'je serais parti'. Conditionnel passé = auxiliaire conditionnel + participe passé." },
      { question: "Le subjonctif présent de 'aller' à la 3ème pers. du singulier est…", options: ["qu'il aille", "qu'il va", "qu'il allait", "qu'il ira"], answer: "qu'il aille", explication: "Subjonctif de 'aller' (irrégulier) : que j'aille, que tu ailles, qu'il aille, que nous allions, vous alliez, ils aillent." },
      { question: "Pour former le subjonctif présent d'un verbe régulier, on part de…", options: ["La 3ème personne du pluriel du présent de l'indicatif", "L'infinitif directement", "Le passé composé", "Le futur simple"], answer: "La 3ème personne du pluriel du présent de l'indicatif", explication: "Ils parlent → parl- → que je parle. Ils finissent → finiss- → que je finisse. Règle générale pour les réguliers." },
      { question: "Le passé simple de 'prendre' à la 3ème pers. du pluriel est…", options: ["ils prirent", "ils prennent", "ils prenaient", "ils prendront"], answer: "ils prirent", explication: "Passé simple de 'prendre' : je pris, tu pris, il prit, nous prîmes, vous prîtes, ils prirent." },
      { question: "L'emploi du conditionnel dans un article de presse indique…", options: ["Une information non confirmée (information au conditionnel)", "Un fait certain", "Une hypothèse impossible", "Un ordre"], answer: "Une information non confirmée (information au conditionnel)", explication: "'Le suspect serait en fuite.' Le conditionnel journalistique signale que l'information n'est pas vérifiée." },
      { question: "Après 'Je doute que', on utilise…", options: ["Le subjonctif", "L'indicatif", "Le conditionnel", "L'infinitif"], answer: "Le subjonctif", explication: "Les verbes de doute et d'opinion négative (douter que, ne pas croire que) sont suivis du subjonctif." }
    ],
    3: [
      { question: "Le subjonctif présent de 'pouvoir' à la 1ère pers. du singulier est…", options: ["que je puisse", "que je peux", "que je pouvais", "que je pourrai"], answer: "que je puisse", explication: "Subjonctif de 'pouvoir' (irrégulier) : que je puisse, que tu puisses, qu'il puisse, que nous puissions, vous puissiez, ils puissent." },
      { question: "Dans 'Si tu étais là, je serais heureux', le conditionnel exprime…", options: ["L'irréel du présent (hypothèse non réalisée)", "Un fait réel", "Un ordre", "Une politesse"], answer: "L'irréel du présent (hypothèse non réalisée)", explication: "Si + imparfait → conditionnel présent = hypothèse non réalisée dans le présent. 'Tu n'es pas là, donc je ne suis pas heureux.'" },
      { question: "L'irréel du passé se construit avec…", options: ["Si + plus-que-parfait → conditionnel passé", "Si + imparfait → conditionnel présent", "Si + présent → futur", "Si + subjonctif → indicatif"], answer: "Si + plus-que-parfait → conditionnel passé", explication: "'Si tu avais travaillé, tu aurais réussi.' L'action dans 'si' est passée et non réalisée → conditionnel passé en résultat." },
      { question: "Le passé antérieur se forme avec…", options: ["Auxiliaire au passé simple + participe passé", "Auxiliaire au passé composé + participe", "Auxiliaire à l'imparfait + participe", "Auxiliaire au futur + participe"], answer: "Auxiliaire au passé simple + participe passé", explication: "'Quand il eut mangé, il repartit.' Passé antérieur = auxiliaire au passé simple + participe. Exprime l'antériorité dans le récit." },
      { question: "Le subjonctif passé se forme avec…", options: ["Auxiliaire au subjonctif présent + participe passé", "Auxiliaire au subjonctif imparfait + participe", "L'infinitif + participe", "Subjonctif présent seul"], answer: "Auxiliaire au subjonctif présent + participe passé", explication: "'Bien qu'il soit parti' = subjonctif présent de 'être' + participe 'parti'. Il exprime l'antériorité par rapport à la principale." },
      { question: "Le passé simple de 'être' à la 1ère pers. du pluriel est…", options: ["nous fûmes", "nous étions", "nous serons", "nous avons été"], answer: "nous fûmes", explication: "Passé simple de 'être' : je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent. L'accent circonflexe est obligatoire à nous/vous." },
      { question: "Après 'bien que', on utilise toujours…", options: ["Le subjonctif présent ou passé", "L'indicatif", "Le conditionnel", "L'infinitif"], answer: "Le subjonctif présent ou passé", explication: "'Bien qu'il soit fatigué' (subj. présent) / 'Bien qu'il ait travaillé' (subj. passé). 'Bien que' impose toujours le subjonctif." },
      { question: "Le conditionnel passé 2ème forme ressemble à…", options: ["Le subjonctif plus-que-parfait", "Le conditionnel présent", "L'imparfait du subjonctif", "Le passé antérieur"], answer: "Le subjonctif plus-que-parfait", explication: "'Il eût aimé partir' = conditionnel passé 2e forme, identique au subjonctif plus-que-parfait. Usage littéraire ou très soutenu." }
    ]
  },

  francais5Orthographe: {
    id: 'francais5Orthographe', nom: 'Orthographe', emoji: '✅', couleur: '#dc2626',
    sousChapitres: ['francais5Ortho_AccordPP', 'francais5Ortho_HomophonesAvances'],
    1: [
      { question: "Avec l'auxiliaire être, le participe passé s'accorde avec…", options: ["Le sujet", "Le COD", "L'attribut", "Il est toujours invariable"], answer: "Le sujet", explication: "'Elles sont parties.' → 'parties' s'accorde avec 'elles' (sujet féminin pluriel). Avec être, le PP = adjectif attribut du sujet." },
      { question: "Choisissez : 'Quand ___ tu viendras, appelle-moi.' (quand/qu'en)", options: ["quand", "qu'en", "qu'an", "cant"], answer: "quand", explication: "'Quand' = conjonction de temps (= lorsque). 'Qu'en' = que + en. Test : remplacer par 'lorsque' → si ça marche = 'quand'." },
      { question: "Avec l'auxiliaire avoir, le participe passé s'accorde avec…", options: ["Le COD placé avant le verbe", "Le sujet", "Toujours le féminin", "Il est toujours invariable"], answer: "Le COD placé avant le verbe", explication: "'La pomme qu'il a mangée.' → 'qu'' reprend 'pomme' (COD féminin sing.) placé avant → 'mangée'. Si le COD est après, pas d'accord." },
      { question: "Choisissez : 'Sans ___ aide, il n'aurait pas réussi.' (sans/s'en)", options: ["son", "s'en", "sans", "san"], answer: "son", explication: "Ici 'son aide' (déterminant possessif). 'Sans' est une préposition, 's'en' = pronom. Dans ce contexte, il faut 'son' (possessif)." },
      { question: "Choisissez : 'Elle s'est ___ les mains.' (lavé/lavée)", options: ["lavé", "lavée", "lavées", "lavés"], answer: "lavé", explication: "'Les mains' est COD, mais il est placé APRÈS le verbe → pas d'accord. Le PP 'lavé' reste invariable dans ce cas." },
      { question: "Choisissez : '___ tu veux ou non, tu viendras.' (que/qu'en/quand)", options: ["Que", "Qu'en", "Quand", "Quel"], answer: "Que", explication: "'Que tu veux ou non' = proposition conjonctive de concession. 'Que' ici = conjonction de subordination." },
      { question: "Choisissez : 'Les lettres qu'il a ___ .' (écrites/écrit)", options: ["écrites", "écrit", "écrits", "écri"], answer: "écrites", explication: "'qu'' reprend 'les lettres' (COD féminin pluriel) placé AVANT 'a écrit' → accord : 'écrites'." },
      { question: "Choisissez : '___ davantage de sport.' ou '___ d'avantage' ?", options: ["Davantage (= plus)", "D'avantage (= plus)", "Les deux sont corrects", "Aucun n'est correct"], answer: "Davantage (= plus)", explication: "'Davantage' (adverbe = plus) s'écrit en un mot. 'D'avantage' n'existe pas. 'Avantage' (bénéfice) → 'd'avantages' (pluriel possible)." }
    ],
    2: [
      { question: "Le participe passé des verbes pronominaux s'accorde avec…", options: ["Le COD si placé avant, sinon invariable", "Toujours avec le sujet", "Toujours invariable", "Avec le sujet si le pronom est COI"], answer: "Le COD si placé avant, sinon invariable", explication: "'Elle s'est blessée.' (se = COD → accord). 'Elle s'est lavé les mains.' (les mains = COD après → pas d'accord sur 'lavé')." },
      { question: "Choisissez : '___ arrive qu'il soit en retard.' (quant/quand/qu'en)", options: ["Il", "Quant", "Quand", "Qu'en"], answer: "Il", explication: "La phrase correcte est 'Il arrive qu'il soit en retard.' 'Quant à' = en ce qui concerne. 'Qu'en' = que + en." },
      { question: "Choisissez : 'Je ne sais pas ___ faire.' (quoi/quel/que)", options: ["quoi", "quel", "que", "qu'en"], answer: "quoi", explication: "'Je ne sais pas quoi faire.' Après une préposition ou en fin de proposition, on emploie 'quoi' (pronom interrogatif tonique)." },
      { question: "Choisissez : '___ qu'il dise, je ne le crois pas.' (quoi/quel/que)", options: ["Quoi", "Quel", "Que", "Qu'en"], answer: "Quoi", explication: "'Quoi qu'il dise' = quelle que soit la chose qu'il dise. 'Quoi que' (en 2 mots) exprime la concession indéfinie." },
      { question: "Accord du PP : 'Les films que j'ai ___ m'ont plu.' (regardés/regardé)", options: ["regardés", "regardé", "regardée", "regardées"], answer: "regardés", explication: "'que' reprend 'les films' (COD masculin pluriel) placé avant → accord masculin pluriel : 'regardés'." },
      { question: "Choisissez : '___ plus tôt' ou '___ plutôt' ?", options: ["Plus tôt (= antérieurement) / plutôt (= de préférence)", "Ce sont des synonymes", "Plutôt dans tous les cas", "Plus tôt dans tous les cas"], answer: "Plus tôt (= antérieurement) / plutôt (= de préférence)", explication: "'Pars plus tôt' = avant l'heure habituelle. 'Pars plutôt à 8h' = de préférence à 8h. Test : remplacer par 'de préférence' → plutôt." },
      { question: "Le participe passé 'fait' suivi d'un infinitif est…", options: ["Toujours invariable", "Accordé avec le sujet", "Accordé avec le COD", "Accordé avec le COI"], answer: "Toujours invariable", explication: "'Elle les a fait partir.' 'Fait' + infinitif → toujours invariable. Le sujet réel de l'action est exprimé par l'infinitif." },
      { question: "Choisissez : 'Il est ___ de réussir.' (sûr/sur)", options: ["sûr (= certain)", "sur (= préposition)", "Les deux", "Aucun"], answer: "sûr (= certain)", explication: "'Sûr' (adjectif = certain) prend un accent circonflexe. 'Sur' (préposition de lieu) n'en a pas : 'sur la table'." }
    ],
    3: [
      { question: "Accord du PP avec 'avoir' : 'Combien de livres as-tu ___?' (lus/lu)", options: ["lus", "lu", "lues", "lue"], answer: "lus", explication: "'Combien de livres' est le COD placé avant 'as lu' → accord masculin pluriel : 'lus'." },
      { question: "Choisissez : '___ que tu sois, réponds-moi.' (quel/quelle/quelque)", options: ["Où", "Quel", "Quelque", "Qu'elle"], answer: "Où", explication: "La phrase correcte est 'Où que tu sois'. 'Quel que' s'accorde avec le sujet du verbe être. 'Quelque' est adverbe (invariable) devant un adjectif." },
      { question: "Choisissez : '___ que soient tes résultats, continue.' (quel/quels/quelque)", options: ["Quels", "Quel", "Quelque", "Qu'elle"], answer: "Quels", explication: "'Quels que soient tes résultats' → 'quel que' s'accorde avec 'résultats' (masculin pluriel) : 'quels'. 'Quelque' serait adverbe." },
      { question: "Le PP des verbes impersonnels est…", options: ["Toujours invariable", "Accordé avec le sujet 'il'", "Accordé avec le COD", "Accordé avec l'attribut"], answer: "Toujours invariable", explication: "'Les chaleurs qu'il a fait cet été.' → 'fait' est invariable car 'il' impersonnel. 'Qu'' est objet interne, non COD réel." },
      { question: "Choisissez : 'Elle ___ souvenue de toi.' (s'est/c'est)", options: ["s'est", "c'est", "ces est", "ses est"], answer: "s'est", explication: "'Elle s'est souvenue' : s'est = se + est (verbe pronominal). 'C'est' = ce + est (pronom démonstratif + verbe être)." },
      { question: "Accord du PP : 'La décision qu'il a ___ de prendre.' (pris/prise)", options: ["prise", "pris", "prises", "prises"], answer: "prise", explication: "'qu'' reprend 'la décision' (COD féminin singulier) placé avant → accord féminin : 'prise'." },
      { question: "Choisissez : 'Malgré ___ efforts, il a échoué.'", options: ["ses", "ces", "c'est", "s'est"], answer: "ses", explication: "'Malgré ses efforts' : 'ses' = déterminant possessif (il = ses). 'Ces' = déterminant démonstratif. Ici il s'agit des efforts de 'il'." },
      { question: "Le PP 'eu' (de 'avoir') est invariable quand…", options: ["Il est suivi d'un infinitif ou d'un complément de temps", "Il est COD avant le verbe", "Le sujet est féminin", "Il est employé avec 'être'"], answer: "Il est suivi d'un infinitif ou d'un complément de temps", explication: "'Les occasions qu'il a eu de partir' → 'eu' invariable car le vrai COD est l'infinitif 'de partir', pas 'les occasions'." },
      { question: "Choisissez : 'Je ne ___ peux pas.' (m'en/men/m'an)", options: ["m'en", "men", "m'an", "man"], answer: "m'en", explication: "'Je ne m'en peux pas' = m' (me) + en (pronom adverbial). Toujours apostrophe après 'me' devant voyelle : m'en, m'y." }
    ]
  },

  francais5Vocabulaire: {
    id: 'francais5Vocabulaire', nom: 'Vocabulaire', emoji: '📚', couleur: '#0369a1',
    sousChapitres: ['francais5Vocab_Etymologie', 'francais5Vocab_Registres', 'francais5Vocab_Champs'],
    1: [
      { question: "Le radical latin 'port-' (portare) signifie…", options: ["Porter, transporter", "Parler", "Voir", "Entendre"], answer: "Porter, transporter", explication: "Porter, porteur, transport, exporter, importer, rapport → tous liés au radical latin 'portare' = porter." },
      { question: "Le registre familier utilise des mots comme…", options: ["Bouquin, boulot, sympa, truc", "Ouvrage, labeur, sympathique, objet", "Tome, profession, affable, chose", "Œuvre, emploi, agréable, article"], answer: "Bouquin, boulot, sympa, truc", explication: "Le registre familier est informel. Bouquin = livre, boulot = travail, sympa = sympathique. À éviter à l'écrit scolaire formel." },
      { question: "Le champ lexical de 'la guerre' inclut…", options: ["Bataille, soldats, armée, victoire, défaite", "Paix, harmonie, amitié, douceur", "Commerce, échange, marché, profit", "Nature, forêt, rivière, montagne"], answer: "Bataille, soldats, armée, victoire, défaite", explication: "Un champ lexical regroupe tous les mots liés à un même thème. La guerre : combat, ennemi, armistice, trêve, siège…" },
      { question: "Le radical grec 'chronos' signifie…", options: ["Temps", "Couleur", "Corps", "Lumière"], answer: "Temps", explication: "Chronos = temps (grec). Chronologie, chronomètre, anachronisme, synchroniser, chronique. Connaître ce radical aide à comprendre de nombreux mots." },
      { question: "Le registre soutenu utilise des mots comme…", options: ["Demeure, trépasser, nonobstant, naguère", "Maison, mourir, malgré, autrefois", "Baraque, crever, quand même, avant", "Chez-soi, mourir, pourtant, jadis"], answer: "Demeure, trépasser, nonobstant, naguère", explication: "Le registre soutenu est celui de la littérature et des textes formels. Ses mots sont rares ou vieillis : naguère = autrefois." },
      { question: "Le radical 'scrib-/script-' (latin) signifie…", options: ["Écrire", "Lire", "Voir", "Parler"], answer: "Écrire", explication: "Scribe, script, inscription, manuscrit, description, prescription → tous liés au latin 'scribere' = écrire." },
      { question: "Un champ sémantique regroupe…", options: ["Tous les sens d'un même mot selon les contextes", "Des mots du même thème", "Des synonymes uniquement", "Des mots de même famille"], answer: "Tous les sens d'un même mot selon les contextes", explication: "Champ sémantique d'un mot = l'ensemble de ses significations. 'Table' : meuble / liste de données / table des matières." },
      { question: "Le radical 'vid-/vis-' (latin videre) signifie…", options: ["Voir", "Entendre", "Parler", "Penser"], answer: "Voir", explication: "Vidéo, vision, visible, invisible, visuel, voyant, évident (e-videns = qui se voit) → radical latin 'videre' = voir." }
    ],
    2: [
      { question: "Le radical grec 'logos' signifie…", options: ["Discours, raison, science", "Eau", "Vie", "Lumière"], answer: "Discours, raison, science", explication: "Logos = parole/raison (grec). Biologie, psychologie, technologie, dialogue, monologue, analogie. Suffixe '-logie' = science de." },
      { question: "Un terme technique appartient à…", options: ["Un domaine spécialisé (médecine, droit, informatique…)", "Le registre familier", "Le registre littéraire", "Le langage courant"], answer: "Un domaine spécialisé (médecine, droit, informatique…)", explication: "Le registre technique est propre à une profession. Diagnose, octet, plaignant, fémur : incompréhensibles hors contexte." },
      { question: "Le radical 'therm-' (grec thermos) signifie…", options: ["Chaud, chaleur", "Froid", "Eau", "Terre"], answer: "Chaud, chaleur", explication: "Thermomètre, thermos, hypothermie (sous la température normale), hyperthermie, thermostat → tous liés à la chaleur." },
      { question: "Le radical 'anthrop-' (grec anthropos) signifie…", options: ["Être humain, homme", "Animal", "Plante", "Terre"], answer: "Être humain, homme", explication: "Anthropologie (étude de l'humain), philanthropie (amour de l'humain), anthropomorphe, misanthrope (qui déteste l'humain)." },
      { question: "Adapter son registre de langue, c'est…", options: ["Choisir des mots appropriés à la situation et au destinataire", "Toujours parler en registre soutenu", "Toujours parler en registre familier", "Ignorer le contexte"], answer: "Choisir des mots appropriés à la situation et au destinataire", explication: "On parle différemment à un ami (familier), à un directeur (courant ou soutenu) et dans un texte littéraire (soutenu)." },
      { question: "Le radical 'geo-' (grec gê) signifie…", options: ["Terre", "Mer", "Ciel", "Feu"], answer: "Terre", explication: "Géographie (description de la terre), géologie, géomètre, géopolitique, apogée. 'Gê' = la terre en grec." },
      { question: "Un isotopie dans un texte, c'est…", options: ["La récurrence d'un même champ lexical tout au long du texte", "La répétition d'un mot unique", "La présence de synonymes", "L'alternance de registres"], answer: "La récurrence d'un même champ lexical tout au long du texte", explication: "Si un poème revient sans cesse sur l'eau, la mer, la pluie, les larmes → isotopie du liquide. Elle crée une cohérence thématique." },
      { question: "Le radical 'path-' (grec pathos) signifie…", options: ["Souffrance, maladie, émotion", "Joie", "Force", "Lumière"], answer: "Souffrance, maladie, émotion", explication: "Pathologie, sympathie (souffrir avec), empathie (se mettre à la place), apathie (sans émotion), antipathie." }
    ],
    3: [
      { question: "Un doublet lexical est une paire de mots issus…", options: ["Du même étymon latin mais entrés en français par des voies différentes", "De deux langues différentes", "De deux radicaux différents", "De la même époque"], answer: "Du même étymon latin mais entrés en français par des voies différentes", explication: "Ex : 'fragile' (savant, du latin direct) / 'frêle' (populaire, ayant évolué phonétiquement). Même origine, deux mots distincts." },
      { question: "Le radical 'crat-/cratie' (grec kratos) signifie…", options: ["Pouvoir, gouvernement", "Peuple", "Élection", "Loi"], answer: "Pouvoir, gouvernement", explication: "Démocratie (pouvoir du peuple), aristocratie, bureaucratie, technocratie. 'Kratos' = force, pouvoir en grec." },
      { question: "Le radical 'dem-' (grec demos) signifie…", options: ["Peuple", "Dieu", "Maison", "Loi"], answer: "Peuple", explication: "Démocratie (pouvoir du peuple), démographie (étude des populations), épidémie (sur le peuple), pandémie (tout le peuple)." },
      { question: "Un néologisme de forme est…", options: ["Un mot entièrement nouveau, non dérivé de mots existants", "Un mot existant avec un nouveau sens", "Un mot emprunté à une autre langue", "Un mot abrégé"], answer: "Un mot entièrement nouveau, non dérivé de mots existants", explication: "Les pures créations sont rares. La plupart des néologismes sont des dérivés ou des emprunts. 'Courriel' (courrier + électronique) est plutôt une formation." },
      { question: "Le radical 'poly-' (grec polus) signifie…", options: ["Plusieurs, nombreux", "Un seul", "Grand", "Petit"], answer: "Plusieurs, nombreux", explication: "Polysémie (plusieurs sens), polygone, polyglotte, polygamie, polytechnicien. 'Polus' = nombreux, multiple en grec." },
      { question: "La connotation méliorative d'un mot…", options: ["Valorise positivement l'objet désigné", "Le dévalorise", "Est neutre", "Dépend uniquement du contexte"], answer: "Valorise positivement l'objet désigné", explication: "'Résidence' connote le luxe vs 'logement' (neutre) vs 'taudis' (péjoratif). La connotation méliorative améliore l'image du référent." },
      { question: "Le registre argotique est caractérisé par…", options: ["Un vocabulaire codé propre à un groupe social, souvent transgressif", "Un vocabulaire élaboré et rare", "La précision scientifique", "La neutralité émotionnelle"], answer: "Un vocabulaire codé propre à un groupe social, souvent transgressif", explication: "L'argot est un langage de groupe (jeunes, milieu professionnel…) qui crée une identité et exclut les non-initiés." },
      { question: "La lexicalisation d'une métaphore signifie qu'elle…", options: ["Est devenue si banale qu'on ne la perçoit plus comme image", "Est nouvelle et originale", "Est réservée à la poésie", "Vient d'une langue étrangère"], answer: "Est devenue si banale qu'on ne la perçoit plus comme image", explication: "'Le pied de la table', 'l'aile du bâtiment', 'les dents de la scie' : métaphores mortes, lexicalisées, entrées dans l'usage courant." }
    ]
  },

  francais5Dictee: {
    id: 'francais5Dictee', nom: 'Dictée', emoji: '🖊️', couleur: '#0f766e',
    1: [
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Le chevalier traversa la forêt sombre avant que la nuit tombe.", answer: "le chevalier traversa la forêt sombre avant que la nuit tombe", options: [], explication: "La phrase correcte était : « Le chevalier traversa la forêt sombre avant que la nuit tombe. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Bien qu'il fût fatigué, il continua sa route sans se plaindre.", answer: "bien qu'il fût fatigué il continua sa route sans se plaindre", options: [], explication: "La phrase correcte était : « Bien qu'il fût fatigué, il continua sa route sans se plaindre. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Les enfants que j'ai rencontrés hier jouaient dans la cour.", answer: "les enfants que j'ai rencontrés hier jouaient dans la cour", options: [], explication: "La phrase correcte était : « Les enfants que j'ai rencontrés hier jouaient dans la cour. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Elle aurait voulu partir plus tôt, mais le train était en retard.", answer: "elle aurait voulu partir plus tôt mais le train était en retard", options: [], explication: "La phrase correcte était : « Elle aurait voulu partir plus tôt, mais le train était en retard. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Quoi qu'il arrive, nous resterons ensemble jusqu'à la fin.", answer: "quoi qu'il arrive nous resterons ensemble jusqu'à la fin", options: [], explication: "La phrase correcte était : « Quoi qu'il arrive, nous resterons ensemble jusqu'à la fin. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Le soleil se leva sur les toits mouillés de la ville endormie.", answer: "le soleil se leva sur les toits mouillés de la ville endormie", options: [], explication: "La phrase correcte était : « Le soleil se leva sur les toits mouillés de la ville endormie. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Ses yeux brillaient d'une lumière étrange dans l'obscurité.", answer: "ses yeux brillaient d'une lumière étrange dans l'obscurité", options: [], explication: "La phrase correcte était : « Ses yeux brillaient d'une lumière étrange dans l'obscurité. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Pour qu'il réussisse, il faudrait qu'il travaille davantage.", answer: "pour qu'il réussisse il faudrait qu'il travaille davantage", options: [], explication: "La phrase correcte était : « Pour qu'il réussisse, il faudrait qu'il travaille davantage. »" }
    ],
    2: [
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Les lettres qu'elle avait reçues étaient toutes signées de la même main.", answer: "les lettres qu'elle avait reçues étaient toutes signées de la même main", options: [], explication: "La phrase correcte était : « Les lettres qu'elle avait reçues étaient toutes signées de la même main. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Quoique la tempête fût violente, les marins tinrent bon.", answer: "quoique la tempête fût violente les marins tinrent bon", options: [], explication: "La phrase correcte était : « Quoique la tempête fût violente, les marins tinrent bon. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Il se demanda si elle viendrait malgré les circonstances difficiles.", answer: "il se demanda si elle viendrait malgré les circonstances difficiles", options: [], explication: "La phrase correcte était : « Il se demanda si elle viendrait malgré les circonstances difficiles. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Les décisions qu'il avait prises se révélèrent judicieuses avec le temps.", answer: "les décisions qu'il avait prises se révélèrent judicieuses avec le temps", options: [], explication: "La phrase correcte était : « Les décisions qu'il avait prises se révélèrent judicieuses avec le temps. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Plutôt que de se plaindre, elle chercha une solution innovante.", answer: "plutôt que de se plaindre elle chercha une solution innovante", options: [], explication: "La phrase correcte était : « Plutôt que de se plaindre, elle chercha une solution innovante. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Le tableau qu'il avait peint en secret fut exposé dans la grande galerie.", answer: "le tableau qu'il avait peint en secret fut exposé dans la grande galerie", options: [], explication: "La phrase correcte était : « Le tableau qu'il avait peint en secret fut exposé dans la grande galerie. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Quels que soient tes talents, le travail reste indispensable.", answer: "quels que soient tes talents le travail reste indispensable", options: [], explication: "La phrase correcte était : « Quels que soient tes talents, le travail reste indispensable. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Il aurait suffi qu'elle fût là pour que tout s'arrange.", answer: "il aurait suffi qu'elle fût là pour que tout s'arrange", options: [], explication: "La phrase correcte était : « Il aurait suffi qu'elle fût là pour que tout s'arrange. »" }
    ],
    3: [
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Bien que ses arguments fussent convaincants, l'assemblée resta divisée.", answer: "bien que ses arguments fussent convaincants l'assemblée resta divisée", options: [], explication: "La phrase correcte était : « Bien que ses arguments fussent convaincants, l'assemblée resta divisée. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Les œuvres qu'il nous avait recommandées méritaient d'être lues attentivement.", answer: "les œuvres qu'il nous avait recommandées méritaient d'être lues attentivement", options: [], explication: "La phrase correcte était : « Les œuvres qu'il nous avait recommandées méritaient d'être lues attentivement. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Nonobstant ses difficultés, il parvint à mener son projet à terme.", answer: "nonobstant ses difficultés il parvint à mener son projet à terme", options: [], explication: "La phrase correcte était : « Nonobstant ses difficultés, il parvint à mener son projet à terme. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Si tu avais accepté plus tôt, nous n'en serions pas là aujourd'hui.", answer: "si tu avais accepté plus tôt nous n'en serions pas là aujourd'hui", options: [], explication: "La phrase correcte était : « Si tu avais accepté plus tôt, nous n'en serions pas là aujourd'hui. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Les poèmes qu'il avait composés reflétaient une sensibilité profonde et rare.", answer: "les poèmes qu'il avait composés reflétaient une sensibilité profonde et rare", options: [], explication: "La phrase correcte était : « Les poèmes qu'il avait composés reflétaient une sensibilité profonde et rare. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Qu'il vînt ou non, la fête aurait lieu comme prévu.", answer: "qu'il vînt ou non la fête aurait lieu comme prévu", options: [], explication: "La phrase correcte était : « Qu'il vînt ou non, la fête aurait lieu comme prévu. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Davantage de rigueur eût été nécessaire pour que l'expérience réussît.", answer: "davantage de rigueur eût été nécessaire pour que l'expérience réussît", options: [], explication: "La phrase correcte était : « Davantage de rigueur eût été nécessaire pour que l'expérience réussît. »" },
      { question: "🔊 Écoute et écris la phrase.", type: 'dictee', texte: "Quoi qu'on en dît, ses idées demeurèrent incomprises de ses contemporains.", answer: "quoi qu'on en dît ses idées demeurèrent incomprises de ses contemporains", options: [], explication: "La phrase correcte était : « Quoi qu'on en dît, ses idées demeurèrent incomprises de ses contemporains. »" }
    ]
  },

  // ── SOUS-CHAPITRES LECTURE 5ÈME ──
  francais5Lect_Poesie: {
    id: 'francais5Lect_Poesie', nom: 'Poésie & versification', emoji: '🎵', couleur: '#16a34a',
    1: [
      { question: "Un quatrain est une strophe de…", options: ["4 vers", "2 vers", "6 vers", "8 vers"], answer: "4 vers", explication: "Strophes : distique (2 vers), tercet (3), quatrain (4), quintil (5), sizain (6), huitain (8)." },
      { question: "Comment compte-t-on les syllabes d'un vers avec un 'e' final ?", options: ["Le 'e' muet final ne compte pas s'il précède une consonne ou la fin du vers", "Il compte toujours", "Il ne compte jamais", "On double la syllabe"], answer: "Le 'e' muet final ne compte pas s'il précède une consonne ou la fin du vers", explication: "Le 'e' muet (caduc) est élidé en fin de mot devant une voyelle ou en fin de vers : 'belle amie' = bel-la-mi (3 syllabes)." },
      { question: "Les rimes plates (ou suivies) suivent le schéma…", options: ["AABB", "ABAB", "ABBA", "ABBB"], answer: "AABB", explication: "Rimes plates : deux vers consécutifs riment entre eux. AA BB CC… Schéma simple et régulier." },
      { question: "Un tercet est une strophe de…", options: ["3 vers", "2 vers", "4 vers", "6 vers"], answer: "3 vers", explication: "Un sonnet classique = 2 quatrains + 2 tercets = 14 vers au total." },
      { question: "L'alexandrin a combien de syllabes ?", options: ["12", "10", "8", "14"], answer: "12", explication: "L'alexandrin = 12 syllabes, divisées en 2 hémistiches de 6 par une césure. Vers dominant du théâtre et de la poésie classique." },
      { question: "La rime riche a au moins…", options: ["3 sons communs à la fin des mots", "1 son commun", "2 sons communs", "4 sons communs"], answer: "3 sons communs à la fin des mots", explication: "Rime pauvre (1 son), suffisante (2 sons), riche (3 sons ou +). Ex : 'cœur / sœur' = riche (3 sons : [œ][r])." },
      { question: "L'alternance des rimes masculines et féminines signifie…", options: ["On alterne vers se terminant par un 'e' muet (féminin) et sans (masculin)", "Les rimes changent de genre grammatical", "Les rimes sont croisées", "Les strophes alternent"], answer: "On alterne vers se terminant par un 'e' muet (féminin) et sans (masculin)", explication: "Règle classique : rime féminine = dernier son est un 'e' muet. Rime masculine = pas de 'e' muet final. On les alterne." },
      { question: "Un poème en prose se distingue par…", options: ["L'absence de vers et de rimes mais une écriture travaillée et rythmée", "L'absence de toute figure de style", "Des strophes régulières", "Un mètre fixe"], answer: "L'absence de vers et de rimes mais une écriture travaillée et rythmée", explication: "Le poème en prose (Baudelaire, Rimbaud) adopte la mise en page de la prose mais garde le langage dense et imagé de la poésie." }
    ],
    2: [
      { question: "La césure dans un alexandrin se place après…", options: ["La 6ème syllabe", "La 4ème syllabe", "La 8ème syllabe", "La 3ème syllabe"], answer: "La 6ème syllabe", explication: "L'alexandrin classique est coupé en deux hémistiches de 6 syllabes : 6 // 6. La césure (pause) sépare les deux." },
      { question: "L'enjambement crée quel effet ?", options: ["Le sens déborde sur le vers suivant, créant une tension ou une surprise", "Les vers riment entre eux", "La strophe se clôt sur elle-même", "Le poème ralentit"], answer: "Le sens déborde sur le vers suivant, créant une tension ou une surprise", explication: "Le rejet place le mot-clé au début du vers suivant, créant un effet de surprise ou d'insistance." },
      { question: "L'allitération est la répétition de…", options: ["Consonnes identiques en début de syllabes proches", "La même voyelle", "La même rime", "Le même vers"], answer: "Consonnes identiques en début de syllabes proches", explication: "'Pour qui sont ces serpents qui sifflent sur vos têtes ?' → répétition du [s]. Effet sonore expressif." },
      { question: "L'assonance est la répétition de…", options: ["La même voyelle dans des mots proches", "La même consonne", "Le même mot", "La même strophe"], answer: "La même voyelle dans des mots proches", explication: "'Il pleure dans mon cœur / Comme il pleut sur la ville' → répétition du son [œ]. C'est une assonance." },
      { question: "Le rejet en poésie, c'est quand…", options: ["Un élément bref est renvoyé au début du vers suivant pour le mettre en valeur", "La rime est à l'intérieur du vers", "Deux vers ont la même longueur", "La strophe est incomplète"], answer: "Un élément bref est renvoyé au début du vers suivant pour le mettre en valeur", explication: "Le rejet isole un mot en tête de vers : 'Il voulait partir / Seul.' Le mot 'Seul' mis en rejet prend une force particulière." },
      { question: "Le décasyllabe est un vers de…", options: ["10 syllabes", "12 syllabes", "8 syllabes", "6 syllabes"], answer: "10 syllabes", explication: "Le décasyllabe (10 syllabes) est fréquent dans la poésie médiévale. L'octosyllabe (8) est commun dans la chanson et la fable." },
      { question: "La synérèse consiste à…", options: ["Prononcer deux voyelles adjacentes en une seule syllabe", "Prononcer deux voyelles adjacentes en deux syllabes", "Supprimer une syllabe", "Allonger un vers"], answer: "Prononcer deux voyelles adjacentes en une seule syllabe", explication: "'Lion' peut se prononcer en 1 syllabe (synérèse) ou 2 (diérèse : li-on). Le poète choisit selon les besoins du mètre." },
      { question: "Les Romantiques (Hugo, Lamartine) ont brisé la règle de la césure fixe avec…", options: ["Le rejet, le contre-rejet et la césure mobile (trimètre romantique)", "La suppression des rimes", "Les vers libres uniquement", "La prose poétique"], answer: "Le rejet, le contre-rejet et la césure mobile (trimètre romantique)", explication: "Hugo divise l'alexandrin en 3 (4-4-4) plutôt que 2 (6-6) : c'est le trimètre romantique, qui assouplit le vers classique." }
    ],
    3: [
      { question: "La prosodie est la discipline qui étudie…", options: ["Les règles de versification (mètre, rimes, rythme)", "Le sens des figures de style", "La biographie des poètes", "La structure des sonnets uniquement"], answer: "Les règles de versification (mètre, rimes, rythme)", explication: "La prosodie = science du vers. Elle étudie le mètre, le rythme, les rimes, les coupes et les règles de prononciation poétique." },
      { question: "La diérèse consiste à…", options: ["Prononcer deux voyelles adjacentes en deux syllabes distinctes", "Les fusionner en une seule", "Supprimer une syllabe finale", "Rallonger un mot"], answer: "Prononcer deux voyelles adjacentes en deux syllabes distinctes", explication: "'Vio-lon' en diérèse = 3 syllabes. Le poète peut choisir synérèse ou diérèse selon les besoins du mètre." },
      { question: "Le sonnet shakespearien se compose de…", options: ["3 quatrains + 1 distique final", "2 quatrains + 2 tercets", "4 quatrains", "3 tercets + 1 quatrain"], answer: "3 quatrains + 1 distique final", explication: "Le sonnet shakespearien (anglais) : ABAB CDCD EFEF GG. Le distique final exprime la 'chute' ou la pointe." },
      { question: "L'hypermètre est un vers qui a…", options: ["Une syllabe de plus que le mètre attendu", "Une syllabe de moins", "Deux fois plus de syllabes", "Un nombre pair de syllabes"], answer: "Une syllabe de plus que le mètre attendu", explication: "Si l'on attend un décasyllabe (10) et qu'on trouve 11 syllabes, le vers est hypermètre. Souvent dû à un 'e' non élide." },
      { question: "L'acrostiche est un poème où…", options: ["Les premières lettres de chaque vers forment un mot ou un message", "Les dernières lettres forment un mot", "Les rimes forment une phrase", "Chaque strophe commence par la même lettre"], answer: "Les premières lettres de chaque vers forment un mot ou un message", explication: "L'acrostiche cache un mot dans les initiales des vers. Ex : poème dont les vers commencent par M-A-R-I-E → prénom caché." },
      { question: "Le Parnasse (XIXe s.) prône…", options: ["L'art pour l'art : perfection formelle, beauté froide, rejet du lyrisme personnel", "L'expression débridée des émotions", "La poésie engagée politiquement", "Le vers libre et l'abandon des règles"], answer: "L'art pour l'art : perfection formelle, beauté froide, rejet du lyrisme personnel", explication: "Les Parnassiens (Leconte de Lisle, Heredia) réagissent contre le romantisme : objectivité, travail formel extrême, impassibilité." },
      { question: "Le symbolisme (Verlaine, Mallarmé) privilégie…", options: ["La musicalité, l'évocation, l'image floue plutôt que la désignation directe", "La précision descriptive", "La clarté logique", "Les vers réguliers classiques uniquement"], answer: "La musicalité, l'évocation, l'image floue plutôt que la désignation directe", explication: "Le symbolisme évoque plutôt que nomme : musique des mots, correspondances entre les sens, images énigmatiques." },
      { question: "Le calligramme est un poème dont…", options: ["La disposition typographique des mots forme une image", "Les rimes sont visuelles", "Les vers sont identiques", "La mise en page est en prose"], answer: "La disposition typographique des mots forme une image", explication: "Apollinaire ('Calligrammes') dispose les mots en formes visuelles (Tour Eiffel, cheval, pluie…). Le texte devient image." }
    ]
  },

  francais5Lect_Theatre: {
    id: 'francais5Lect_Theatre', nom: 'Théâtre', emoji: '🎭', couleur: '#16a34a',
    1: [
      { question: "Une réplique au théâtre est…", options: ["Une prise de parole d'un personnage", "Une indication scénique", "Le titre d'une scène", "Un acte entier"], answer: "Une prise de parole d'un personnage", explication: "La réplique = chaque intervention d'un personnage dans un dialogue. Elle peut aller d'un mot à plusieurs phrases." },
      { question: "Une tirade est…", options: ["Une longue réplique d'un seul personnage", "Un échange rapide entre deux personnages", "Une indication de jeu", "L'ouverture d'un acte"], answer: "Une longue réplique d'un seul personnage", explication: "La tirade = discours long d'un personnage sans interruption. Elle permet d'exposer des idées complexes ou d'exprimer des émotions." },
      { question: "Le monologue au théâtre est…", options: ["Un personnage seul en scène qui parle à voix haute", "Un dialogue entre deux personnages", "Une indication scénique", "La conclusion d'une pièce"], answer: "Un personnage seul en scène qui parle à voix haute", explication: "Le monologue révèle les pensées intimes du personnage. Il peut exprimer un dilemme, une décision, une angoisse." },
      { question: "Le dénouement d'une pièce de théâtre est…", options: ["La résolution finale de l'intrigue", "L'ouverture de la pièce", "L'exposition des personnages", "Le conflit principal"], answer: "La résolution finale de l'intrigue", explication: "Le dénouement = fin de la pièce. Heureux (comédie) ou funeste (tragédie). Il résout les conflits noués tout au long." },
      { question: "La scène d'exposition sert à…", options: ["Présenter le cadre, les personnages et la situation initiale", "Résoudre le conflit", "Créer un coup de théâtre", "Clore la pièce"], answer: "Présenter le cadre, les personnages et la situation initiale", explication: "La scène d'exposition (début de la pièce) donne au spectateur les informations nécessaires pour comprendre l'action." },
      { question: "Une didascalie est…", options: ["Une indication scénique de l'auteur (décor, gestes, ton)", "Une réplique importante", "Le titre d'un acte", "Un aparté"], answer: "Une indication scénique de l'auteur (décor, gestes, ton)", explication: "Les didascalies (en italique) guident le metteur en scène et les acteurs. Elles ne sont pas dites sur scène." },
      { question: "Dans quelle pièce Molière dénonce-t-il l'avarice ?", options: ["L'Avare", "Le Misanthrope", "Les Précieuses ridicules", "Le Malade imaginaire"], answer: "L'Avare", explication: "'L'Avare' (1668) : Harpagon représente l'avarice portée à l'extrême. Molière en fait une caricature comique pour critiquer ce vice." },
      { question: "La comédie de caractère peint…", options: ["Un défaut humain porté à l'extrême chez un personnage", "Des aventures héroïques", "Des fantômes et des monstres", "Des amours impossibles"], answer: "Un défaut humain porté à l'extrême chez un personnage", explication: "La comédie de caractère (Molière) construit un personnage autour d'un défaut dominant : avarice, hypocondrie, misanthropie." }
    ],
    2: [
      { question: "L'aparté est une réplique que…", options: ["Le personnage dit au public mais que les autres personnages n'entendent pas", "Tous les personnages entendent", "Le metteur en scène dit aux acteurs", "L'auteur adresse au lecteur"], answer: "Le personnage dit au public mais que les autres personnages n'entendent pas", explication: "L'aparté brise la quatrième muraille : le personnage se confie au public. Effet comique ou dramatique selon le contexte." },
      { question: "Le quiproquo est…", options: ["Une méprise entre deux personnages sur l'identité ou le sens d'une chose", "Un double sens volontaire", "Un silence éloquent", "Une scène sans réplique"], answer: "Une méprise entre deux personnages sur l'identité ou le sens d'une chose", explication: "Le quiproquo (quid pro quo = l'un pour l'autre) : un personnage se trompe sur qui il parle ou ce qu'il entend. Ressort comique classique." },
      { question: "L'ironie dramatique crée de la tension car…", options: ["Le spectateur sait quelque chose que le personnage ignore", "Le personnage sait tout", "L'auteur révèle la fin dès le début", "Les personnages se méprisent"], answer: "Le spectateur sait quelque chose que le personnage ignore", explication: "L'ironie dramatique = décalage entre ce que sait le spectateur et ce qu'ignore le personnage. Crée suspense et angoisse." },
      { question: "La règle des trois unités au théâtre classique impose…", options: ["Unité de temps (24h), de lieu (un seul), d'action (une intrigue principale)", "Un acte unique, un décor, un personnage", "Trois actes, trois personnages, trois conflits", "Début, milieu, fin en 3 actes"], answer: "Unité de temps (24h), de lieu (un seul), d'action (une intrigue principale)", explication: "Codifiée au XVIIe s. : l'action ne doit pas dépasser 24h, se dérouler en un seul lieu, et avoir une seule intrigue principale." },
      { question: "Le valet de comédie (ex : Scapin) sert souvent à…", options: ["Mener l'intrigue, tromper les maîtres et incarner la ruse", "Représenter l'autorité", "Exprimer la morale", "Jouer les amoureux transis"], answer: "Mener l'intrigue, tromper les maîtres et incarner la ruse", explication: "Le valet comique (Scapin, Figaro) est plus malin que son maître. Sa ruse dynamise l'intrigue et renverse momentanément l'ordre social." },
      { question: "La stichomythie est un procédé où…", options: ["Les personnages échangent des répliques très brèves (vers pour vers)", "Un personnage parle longuement", "Le dialogue est absent", "Les répliques sont en prose"], answer: "Les personnages échangent des répliques très brèves (vers pour vers)", explication: "La stichomythie = échange rapide de répliques courtes. Crée une tension vive, une dispute ou une passion entre personnages." },
      { question: "Le théâtre de boulevard est caractérisé par…", options: ["Des comédies légères fondées sur des situations comiques et des coups de théâtre", "Des tragédies profondes", "Des sujets politiques graves", "Un langage très soutenu"], answer: "Des comédies légères fondées sur des situations comiques et des coups de théâtre", explication: "Le théâtre de boulevard (XIXe-XXe s.) vise le divertissement du grand public : mariages trompeurs, portes qui claquent, rebondissements." },
      { question: "La tragédie classique met en scène…", options: ["Des personnages de haut rang face à un destin inéluctable", "Des personnages ordinaires dans des situations comiques", "Des animaux parlants", "Des aventuriers modernes"], answer: "Des personnages de haut rang face à un destin inéluctable", explication: "La tragédie (Corneille, Racine) : rois, reines, héros antiques déchirés entre devoir et passion, conduits à une fin funeste." }
    ],
    3: [
      { question: "La catharsis selon Aristote désigne…", options: ["La purification des passions (terreur et pitié) par le spectacle tragique", "Le dénouement heureux", "L'exposition des personnages", "L'effet comique"], answer: "La purification des passions (terreur et pitié) par le spectacle tragique", explication: "Aristote (Poétique) : la tragédie suscite terreur et pitié, puis les 'purge' chez le spectateur. Effet thérapeutique du théâtre." },
      { question: "Le théâtre épique (Brecht) cherche à…", options: ["Distancier le spectateur pour qu'il pense plutôt que de s'identifier", "Immerger totalement le spectateur", "Respecter les trois unités", "Divertir sans instruire"], answer: "Distancier le spectateur pour qu'il pense plutôt que de s'identifier", explication: "Brecht (effet de distanciation = Verfremdungseffekt) : le spectateur garde un regard critique, conscient d'être au théâtre." },
      { question: "La tragi-comédie est un genre qui…", options: ["Mêle des éléments tragiques et comiques, avec une fin heureuse", "Est une tragédie allégée", "Est une comédie qui finit mal", "Suit strictement les trois unités"], answer: "Mêle des éléments tragiques et comiques, avec une fin heureuse", explication: "La tragi-comédie (XVIIe s.) : péril mortel mais fin heureuse. Le Cid de Corneille fut d'abord présenté comme tragi-comédie." },
      { question: "Le théâtre de l'absurde (Beckett, Ionesco) représente…", options: ["L'absurdité de la condition humaine à travers des situations illogiques", "Des pièces réalistes et moralisatrices", "Des adaptations de romans", "La célébration de la raison"], answer: "L'absurdité de la condition humaine à travers des situations illogiques", explication: "'En attendant Godot', 'La Cantatrice chauve' : langage détraqué, actions répétitives, absence de sens. Miroir de l'absurde humain." },
      { question: "La mise en abyme au théâtre consiste à…", options: ["Représenter une pièce dans la pièce", "Décrire la scène dans une didascalie", "Jouer sans décor", "Supprimer le texte"], answer: "Représenter une pièce dans la pièce", explication: "'La Tempête' de Shakespeare contient un spectacle mis en scène par Prospero. La pièce enchâssée questionne la nature du théâtre." },
      { question: "Le prologue au théâtre antique était chanté par…", options: ["Le chœur", "Le personnage principal", "Le metteur en scène", "Un narrateur invisible"], answer: "Le chœur", explication: "Dans le théâtre grec, le chœur commente l'action, donne les informations contextuelles et représente la voix collective de la cité." },
      { question: "La dramaturgie désigne…", options: ["L'art de la construction d'une pièce de théâtre", "La décoration scénique", "Le jeu des acteurs", "L'écriture des didascalies uniquement"], answer: "L'art de la construction d'une pièce de théâtre", explication: "La dramaturgie = l'ensemble des techniques d'écriture théâtrale : structure des actes, construction du conflit, rythme, exposition." },
      { question: "Le quatrième mur est…", options: ["La frontière imaginaire entre la scène et le public", "Le mur du fond du décor", "La quatrième unité classique", "Le rideau de scène"], answer: "La frontière imaginaire entre la scène et le public", explication: "Le quatrième mur (Diderot) = le mur fictif entre acteurs et spectateurs. 'Briser le 4e mur' = interpeller directement le public." }
    ]
  },

  // ── SOUS-CHAPITRES ÉCRITURE 5ÈME ──
  francais5Ecrit_Narration: {
    id: 'francais5Ecrit_Narration', nom: 'Narration élaborée', emoji: '✏️', couleur: '#0d9488',
    1: [
      { question: "Pour raconter un récit au passé, on utilise surtout…", options: ["Le passé simple (actions) et l'imparfait (descriptions)", "Le passé composé uniquement", "Le présent de narration toujours", "Le futur antérieur"], answer: "Le passé simple (actions) et l'imparfait (descriptions)", explication: "Dans un récit littéraire : passé simple = premier plan (actions ponctuelles), imparfait = arrière-plan (descriptions, habitudes)." },
      { question: "Intégrer un dialogue dans un récit nécessite…", options: ["Des guillemets ou tirets, un retour à la ligne, un verbe introducteur", "Uniquement des guillemets sans retour à la ligne", "Des parenthèses autour des paroles", "Le passage au présent"], answer: "Des guillemets ou tirets, un retour à la ligne, un verbe introducteur", explication: "Le dialogue s'ouvre avec « guillemets », puis chaque réplique commence par un tiret et un retour à la ligne." },
      { question: "Un récit à la première personne crée un effet de…", options: ["Proximité et d'intimité avec le lecteur", "Distance et d'objectivité", "Mystère total", "Omniscience"], answer: "Proximité et d'intimité avec le lecteur", explication: "Le 'je' narratif partage ses émotions, pensées, doutes directement avec le lecteur. Il crée une forte identification." },
      { question: "La description d'un lieu dans un récit doit…", options: ["Créer une atmosphère et ancrer l'action dans un cadre précis", "Lister tous les objets présents", "Remplacer l'action", "Être toujours très courte"], answer: "Créer une atmosphère et ancrer l'action dans un cadre précis", explication: "La description n'est pas un catalogue : elle sélectionne les détails significatifs pour créer une ambiance (inquiétante, joyeuse…)." },
      { question: "Varier les verbes de parole dans les dialogues permet de…", options: ["Préciser le ton et éviter les répétitions de 'dit-il'", "Rendre le texte plus formel", "Supprimer les guillemets", "Accélérer le rythme"], answer: "Préciser le ton et éviter les répétitions de 'dit-il'", explication: "Murmura, s'exclama, rétorqua, grommela, supplia : chaque verbe de parole précise la manière dont la réplique est dite." },
      { question: "Le point de vue omniscient dans un récit permet à l'auteur de…", options: ["Connaître les pensées et les secrets de tous les personnages", "Limiter le récit à ce qu'un seul personnage voit", "Décrire uniquement les actions visibles", "Utiliser uniquement le 'je'"], answer: "Connaître les pensées et les secrets de tous les personnages", explication: "Le narrateur omniscient 'sait tout' : il entre dans la tête des personnages, révèle leurs pensées secrètes et annonce le futur." },
      { question: "Une ellipse narrative consiste à…", options: ["Passer sous silence une période de temps", "Revenir en arrière", "Ralentir le récit avec des détails", "Anticiper la fin"], answer: "Passer sous silence une période de temps", explication: "'Dix ans plus tard, il revenait dans la même ville.' L'ellipse saute le temps jugé sans intérêt narratif." },
      { question: "Pour créer du suspense, l'auteur peut…", options: ["Retarder la révélation et multiplier les fausses pistes", "Révéler la fin dès le début", "Utiliser uniquement des phrases longues", "Supprimer les dialogues"], answer: "Retarder la révélation et multiplier les fausses pistes", explication: "Le suspense naît de l'attente. On donne des indices, on retarde, on déçoit les attentes pour mieux surprendre à la fin." }
    ],
    2: [
      { question: "Le discours indirect libre fond les pensées du personnage dans…", options: ["Le récit sans guillemets ni verbe introducteur", "Un dialogue entre guillemets", "Une note de bas de page", "Une didascalie"], answer: "Le récit sans guillemets ni verbe introducteur", explication: "'Il rentra chez lui. Était-il donc condamné ?' La question intérieure du personnage est intégrée au récit sans marqueur." },
      { question: "Pour marquer un retour en arrière (analepse), on peut utiliser…", options: ["'Quelques années auparavant…', 'il se souvint que…'", "'Le lendemain…', 'bientôt…'", "Le futur de l'indicatif", "Le présent de narration"], answer: "'Quelques années auparavant…', 'il se souvint que…'", explication: "L'analepse = flashback. Les marqueurs temporels passés ('jadis', 'autrefois', 'quelques années plus tôt') signalent le retour arrière." },
      { question: "Le style coupé (phrases courtes) convient particulièrement à…", options: ["Les scènes d'action, de tension ou de peur", "Les longues descriptions de paysages", "Les discours philosophiques", "Les introductions calmes"], answer: "Les scènes d'action, de tension ou de peur", explication: "Phrases brèves, nominales, sans subordination = rythme haletant, précipitation. Idéal pour les climax et les scènes de danger." },
      { question: "La prolepse (anticipation) consiste à…", options: ["Donner un indice sur ce qui va se passer", "Raconter un événement passé", "Décrire un lieu futur", "Changer de personnage principal"], answer: "Donner un indice sur ce qui va se passer", explication: "'Il ne savait pas encore que ce jour serait le dernier.' La prolepse annonce l'avenir, crée l'ironie dramatique ou l'angoisse." },
      { question: "L'incipit d'un roman a pour fonction de…", options: ["Accrocher le lecteur, poser le cadre et les personnages", "Résoudre le conflit principal", "Décrire exhaustivement tous les personnages", "Conclure l'intrigue"], answer: "Accrocher le lecteur, poser le cadre et les personnages", explication: "L'incipit (premières pages) doit captiver dès la première ligne. Il installe lieu, époque, narrateur et donne le ton du roman." },
      { question: "Pour rendre un personnage crédible et complexe, il faut lui donner…", options: ["Des qualités ET des défauts, des contradictions", "Uniquement des qualités", "Un seul trait de caractère dominant", "Uniquement des actions sans pensées"], answer: "Des qualités ET des défauts, des contradictions", explication: "Un personnage trop parfait ou trop mauvais est caricatural. Les contradictions et les failles le rendent humain et attachant." },
      { question: "La clausule d'un récit est…", options: ["La dernière phrase, souvent mémorable, qui clôt l'œuvre", "La première phrase", "Le climax de l'intrigue", "Le résumé du récit"], answer: "La dernière phrase, souvent mémorable, qui clôt l'œuvre", explication: "La clausule est soignée par les auteurs : elle donne la dernière impression et peut résumer le sens ou ouvrir sur une méditation." },
      { question: "L'expansion du groupe nominal enrichit la description par…", options: ["Adjectifs, compléments du nom et propositions relatives", "Des verbes supplémentaires", "Des adverbes seuls", "La suppression des déterminants"], answer: "Adjectifs, compléments du nom et propositions relatives", explication: "'Un château' → 'un vieux château en ruine qui surplombait la vallée.' Chaque expansion ajoute une précision descriptive." }
    ],
    3: [
      { question: "Le registre épique se caractérise par…", options: ["Des exploits héroïques, le style sublime, les hyperboles et les comparaisons grandioses", "Le quotidien et l'ordinaire", "L'humour et la légèreté", "La précision technique"], answer: "Des exploits héroïques, le style sublime, les hyperboles et les comparaisons grandioses", explication: "Le registre épique élève les actes au niveau du mythe : tout est immense, exemplaire, destiné à l'immortalité." },
      { question: "L'isotopie dans un texte narratif crée…", options: ["Une cohérence thématique par la récurrence d'un champ lexical", "Une rupture de ton", "Un changement de narrateur", "Une ellipse temporelle"], answer: "Une cohérence thématique par la récurrence d'un champ lexical", explication: "Si un récit revient constamment sur la lumière, les ombres, la nuit → isotopie du clair-obscur, qui crée une ambiance particulière." },
      { question: "Le roman de formation (Bildungsroman) raconte…", options: ["La maturation d'un jeune personnage au fil d'épreuves initiatiques", "Une guerre épique", "Un voyage fantastique sans apprentissage", "Une enquête policière"], answer: "La maturation d'un jeune personnage au fil d'épreuves initiatiques", explication: "Exemples : 'David Copperfield', 'Le Grand Meaulnes'. Le héros jeune grandit, se trompe, apprend et se transforme." },
      { question: "L'ironie narrative consiste à…", options: ["Dire une chose et en suggérer une autre, souvent opposée", "Raconter honnêtement les événements", "Accélérer le rythme du récit", "Décrire avec précision"], answer: "Dire une chose et en suggérer une autre, souvent opposée", explication: "Un narrateur ironique présente les faits avec un écart entre ce qu'il dit et ce qu'il pense : le lecteur attentif perçoit la distance." },
      { question: "La focalisation interne fixe signifie que…", options: ["Tout le récit est vu à travers un seul et même personnage", "Le point de vue change à chaque chapitre", "Le narrateur sait tout", "Le récit est à la 1ère personne obligatoirement"], answer: "Tout le récit est vu à travers un seul et même personnage", explication: "Même si le narrateur est à la 3ème personne, on ne voit que ce que perçoit le personnage focal. Limite et concentration." },
      { question: "Le narrateur non fiable est un narrateur qui…", options: ["Déforme la réalité, consciemment ou non", "Sait toujours la vérité", "Est toujours à la 3ème personne", "Ne prend jamais part à l'action"], answer: "Déforme la réalité, consciemment ou non", explication: "Le lecteur doit lire entre les lignes : le narrateur ment, se trompe, ou cache des informations. Effet de mystère ou d'ironie." },
      { question: "La polyphonie narrative désigne…", options: ["La présence de plusieurs voix ou points de vue dans un même texte", "Un texte écrit par plusieurs auteurs", "Un récit avec plusieurs intrigues parallèles", "L'alternance de dialogues et de narration"], answer: "La présence de plusieurs voix ou points de vue dans un même texte", explication: "Un roman polyphonique (Dostoïevski) fait coexister plusieurs consciences égales, sans qu'une seule impose sa vérité." },
      { question: "La métafiction est un texte qui…", options: ["Parle de lui-même comme œuvre de fiction", "Décrit des faits réels", "Imite un genre traditionnel", "Utilise exclusivement des métaphores"], answer: "Parle de lui-même comme œuvre de fiction", explication: "La métafiction attire l'attention sur sa propre nature fictive : le narrateur commente l'acte d'écriture, brise l'illusion romanesque." }
    ]
  },

  francais5Ecrit_Argumenter: {
    id: 'francais5Ecrit_Argumenter', nom: 'Écrire pour convaincre', emoji: '🗣️', couleur: '#0d9488',
    1: [
      { question: "La première étape pour rédiger un texte argumentatif est…", options: ["Définir clairement sa thèse (position)", "Chercher des exemples", "Rédiger la conclusion", "Faire un brouillon de l'introduction"], answer: "Définir clairement sa thèse (position)", explication: "Sans thèse claire, le texte part dans tous les sens. On formule d'abord sa position, puis on cherche des arguments pour la soutenir." },
      { question: "Un bon argument doit toujours être…", options: ["Suivi d'un exemple ou d'une preuve qui l'illustre", "Très long et détaillé", "Répété plusieurs fois", "En début de paragraphe uniquement"], answer: "Suivi d'un exemple ou d'une preuve qui l'illustre", explication: "Structure d'un paragraphe argumentatif : Argument → Exemple → Explication du lien avec la thèse." },
      { question: "La structure AERE d'un paragraphe argumentatif signifie…", options: ["Affirmation, Exemple, Raisonnement, Enchaînement", "Argument, Exemple, Réfutation, Explication", "Affirmation, Explication, Répétition, Exemple", "Argument, Evidence, Reformulation, Enjeu"], answer: "Affirmation, Exemple, Raisonnement, Enchaînement", explication: "AERE : on Affirme (argument), on Exemplifie, on Raisonne (lien avec la thèse), puis on Enchaîne vers le paragraphe suivant." },
      { question: "Pour introduire un texte argumentatif, on peut commencer par…", options: ["Une question rhétorique, une citation ou une anecdote frappante", "La conclusion", "Tous les arguments en vrac", "Une liste de faits seulement"], answer: "Une question rhétorique, une citation ou une anecdote frappante", explication: "L'introduction accroche (question, citation, anecdote), présente le sujet et annonce la thèse ou le plan." },
      { question: "Le connecteur 'en revanche' exprime…", options: ["Une opposition ou un contraste", "Une cause", "Une conséquence", "Un exemple"], answer: "Une opposition ou un contraste", explication: "'D'un côté… en revanche…' : 'en revanche' marque le contraste entre deux réalités ou deux arguments opposés." },
      { question: "Une lettre argumentative ouverte s'adresse à…", options: ["Un destinataire précis mais est écrite pour être lue par tous", "Un seul lecteur privé", "Un groupe d'amis", "L'auteur lui-même"], answer: "Un destinataire précis mais est écrite pour être lue par tous", explication: "La lettre ouverte (au Président, au directeur…) utilise la forme épistolaire mais vise un public large. Ex : 'J'accuse' de Zola." },
      { question: "Utiliser le 'nous' dans un texte argumentatif crée un effet de…", options: ["Solidarité et d'inclusion du lecteur", "Distance formelle", "Humilité personnelle", "Objectivité scientifique"], answer: "Solidarité et d'inclusion du lecteur", explication: "'Nous devons agir.' Le 'nous' inclusif embarque le lecteur dans la démarche de l'auteur, le rend partie prenante." },
      { question: "La phrase de transition entre deux parties sert à…", options: ["Rappeler l'idée précédente et annoncer la suivante", "Répéter la thèse", "Introduire un nouvel exemple", "Conclure définitivement"], answer: "Rappeler l'idée précédente et annoncer la suivante", explication: "La transition assure la cohérence : 'Nous avons vu que… Voyons maintenant…' Elle montre la progression logique du raisonnement." }
    ],
    2: [
      { question: "Pour réfuter un argument adverse, on peut…", options: ["Montrer qu'il est partiel, exagéré ou contredit par les faits", "L'ignorer", "L'accepter sans nuance", "Le répéter en le citant"], answer: "Montrer qu'il est partiel, exagéré ou contredit par les faits", explication: "La réfutation efficace : on cite l'argument adverse (concession partielle), puis on montre ses limites avec des preuves." },
      { question: "Dans un plan dialectique, la synthèse doit…", options: ["Dépasser l'opposition thèse/antithèse et proposer une position nuancée", "Reprendre la thèse initiale", "Reprendre l'antithèse", "Refuser toute position"], answer: "Dépasser l'opposition thèse/antithèse et proposer une position nuancée", explication: "La synthèse ne dit pas 'ni l'un ni l'autre' mais propose une vision plus riche qui intègre le meilleur des deux positions." },
      { question: "L'appel à l'émotion (pathos) est pertinent quand…", options: ["Il s'appuie sur une émotion légitime et ne manipule pas", "Il remplace tous les arguments logiques", "Il est utilisé seul sans faits", "Il vise uniquement la pitié"], answer: "Il s'appuie sur une émotion légitime et ne manipule pas", explication: "Le pathos est un outil rhétorique valide s'il est fondé sur une réalité. Il devient manipulation quand il court-circuite le raisonnement." },
      { question: "Pour une lettre argumentative, la formule de politesse finale doit être…", options: ["Adaptée au destinataire et au ton de la lettre", "Toujours la même quelle que soit la situation", "Très courte ou absente", "En langage familier si on est en colère"], answer: "Adaptée au destinataire et au ton de la lettre", explication: "À un directeur : 'Je vous prie d'agréer…'. À un ami public : plus simple. Le registre de la formule doit rester cohérent." },
      { question: "Citer des statistiques dans un texte argumentatif permet de…", options: ["Apporter des preuves concrètes et chiffrées qui crédibilisent l'argument", "Remplacer l'argument", "Rendre le texte plus long", "Éviter de donner son opinion"], answer: "Apporter des preuves concrètes et chiffrées qui crédibilisent l'argument", explication: "'80% des élèves qui lisent réussissent mieux en français.' Le chiffre ancre l'argument dans la réalité vérifiable." },
      { question: "Le registre soutenu dans un texte argumentatif formel exige…", options: ["Vocabulaire élaboré, syntaxe complexe, absence de familiarités", "Des mots familiers pour être proche du lecteur", "Des phrases très courtes", "L'absence de connecteurs"], answer: "Vocabulaire élaboré, syntaxe complexe, absence de familiarités", explication: "Un texte argumentatif sérieux (dissertation, lettre officielle) adopte un registre soutenu : pas d'argot, phrases bien construites." },
      { question: "L'ouverture en conclusion sert à…", options: ["Élargir la réflexion au-delà du sujet traité", "Répéter tous les arguments", "Introduire un nouveau sujet sans lien", "S'excuser d'avoir défendu sa thèse"], answer: "Élargir la réflexion au-delà du sujet traité", explication: "L'ouverture pose une question plus large : 'Si les devoirs sont utiles, qu'en est-il de l'autonomie de l'élève ?' Elle donne une perspective." },
      { question: "L'argument par analogie consiste à…", options: ["Comparer deux situations similaires pour prouver quelque chose", "Citer un expert", "Utiliser des statistiques", "Faire une concession"], answer: "Comparer deux situations similaires pour prouver quelque chose", explication: "'De même qu'un sportif s'entraîne, un élève doit pratiquer régulièrement.' L'analogie éclaire le cas à prouver par un cas connu." }
    ],
    3: [
      { question: "La dispositio rhétorique classique comprend…", options: ["Exorde, narration, confirmation, réfutation, péroraison", "Introduction, développement, conclusion uniquement", "Thèse, antithèse, synthèse", "Ethos, pathos, logos"], answer: "Exorde, narration, confirmation, réfutation, péroraison", explication: "Les 5 parties du discours antique : exorde (accroche), narration (faits), confirmation (arguments), réfutation, péroraison (conclusion émotionnelle)." },
      { question: "L'argument par l'exemple inductif procède…", options: ["Du particulier vers le général", "Du général vers le particulier", "De la thèse vers l'antithèse", "De l'émotion vers la logique"], answer: "Du particulier vers le général", explication: "L'induction : on part d'exemples précis pour en tirer une règle générale. Risque : généralisation abusive si les exemples sont insuffisants." },
      { question: "L'argument déductif (syllogisme) procède…", options: ["Du général vers le particulier", "Du particulier vers le général", "De l'émotion vers la logique", "Des exemples vers la thèse"], answer: "Du général vers le particulier", explication: "Déduction : 'Tout X est Y / A est un X / Donc A est Y.' On applique une règle générale à un cas particulier." },
      { question: "La captatio benevolentiae est une technique rhétorique qui consiste à…", options: ["Capter la bienveillance du lecteur/auditeur dès le début du discours", "Attaquer l'adversaire en début de discours", "Présenter d'emblée les arguments les plus forts", "Conclure de façon émotionnelle"], answer: "Capter la bienveillance du lecteur/auditeur dès le début du discours", explication: "On commence par flatter discrètement l'auditoire, montrer qu'on partage ses valeurs pour le mettre en confiance avant d'argumenter." },
      { question: "Le plan par opposition (pour/contre) est adapté quand…", options: ["Le sujet admet deux positions clairement opposées sur une question éthique ou sociale", "Le sujet est purement descriptif", "On défend une seule thèse sans contradicteur", "Le sujet est technique et factuel"], answer: "Le sujet admet deux positions clairement opposées sur une question éthique ou sociale", explication: "Le plan pour/contre examine les avantages et les inconvénients d'une mesure, les arguments de chaque camp." },
      { question: "La péroraison (fin d'un discours) cherche à…", options: ["Laisser une dernière impression forte et émotionnelle", "Présenter un nouvel argument", "Résumer froidement les points", "Citer une définition du dictionnaire"], answer: "Laisser une dernière impression forte et émotionnelle", explication: "La péroraison mobilise le pathos : appel aux valeurs, image forte, question rhétorique. On sort le public sur une émotion durable." },
      { question: "L'épichérème est un argument renforcé qui comprend…", options: ["La thèse, la justification et la preuve dans une seule unité", "Uniquement la thèse", "Thèse + contre-argument", "Exemple + explication uniquement"], answer: "La thèse, la justification et la preuve dans une seule unité", explication: "L'épichérème = syllogisme dont les prémisses sont elles-mêmes prouvées. C'est un argument complet et autonome." },
      { question: "Adapter la longueur des paragraphes dans un texte argumentatif répond à…", options: ["L'importance de chaque argument (plus important = plus développé)", "Un format fixe de 5 lignes", "L'humeur du rédacteur", "La longueur des exemples"], answer: "L'importance de chaque argument (plus important = plus développé)", explication: "Un argument central mérite plus de développement qu'un argument secondaire. La longueur reflète le poids accordé à chaque idée." }
    ]
  },

  // ── SOUS-CHAPITRES GRAMMAIRE 5ÈME ──
  francais5Gram_Subordonnees: {
    id: 'francais5Gram_Subordonnees', nom: 'Propositions subordonnées', emoji: '🔗', couleur: '#7c3aed',
    1: [
      { question: "La proposition subordonnée relative est introduite par…", options: ["Un pronom relatif (qui, que, dont, où, lequel…)", "Une conjonction de subordination", "Un adverbe", "Un pronom personnel"], answer: "Un pronom relatif (qui, que, dont, où, lequel…)", explication: "La relative complète un nom (antécédent) : 'le livre que je lis' — 'que' reprend 'le livre' et introduit la relative." },
      { question: "Dans 'Je sais que tu viendras', 'que tu viendras' est…", options: ["Une proposition subordonnée complétive COD", "Une relative", "Une circonstancielle de cause", "Une indépendante"], answer: "Une proposition subordonnée complétive COD", explication: "'Je sais quoi ?' → 'que tu viendras'. La complétive en 'que' est COD du verbe 'sais'." },
      { question: "La subordonnée de cause est introduite par…", options: ["Parce que, puisque, comme, étant donné que", "Pour que, afin que", "Bien que, quoique", "Si, à condition que"], answer: "Parce que, puisque, comme, étant donné que", explication: "'Il reste parce qu'il est fatigué.' La cause répond à 'pourquoi ?' et est à l'indicatif." },
      { question: "La subordonnée de but est introduite par…", options: ["Pour que, afin que (+ subjonctif)", "Parce que, car", "Quand, lorsque", "Si, à condition que"], answer: "Pour que, afin que (+ subjonctif)", explication: "'Il parle lentement pour que tu comprennes.' Le but répond à 'dans quel but ?' et est toujours au subjonctif." },
      { question: "La subordonnée de condition est généralement introduite par…", options: ["Si (+ indicatif présent ou imparfait)", "Bien que (+ subjonctif)", "Parce que", "Que (+ subjonctif)"], answer: "Si (+ indicatif présent ou imparfait)", explication: "'Si tu travailles, tu réussiras.' JAMAIS de conditionnel après 'si' conditionnel." },
      { question: "La subordonnée de concession est introduite par…", options: ["Bien que, quoique (+ subjonctif)", "Parce que, car", "Pour que, afin que", "Si, à moins que"], answer: "Bien que, quoique (+ subjonctif)", explication: "'Bien qu'il soit fatigué, il continue.' La concession admet un obstacle qui n'empêche pas l'action principale." },
      { question: "'dont' est un pronom relatif qui remplace…", options: ["De + groupe nominal (complément introduit par 'de')", "Le COD direct", "Le sujet", "Un complément de lieu"], answer: "De + groupe nominal (complément introduit par 'de')", explication: "'Le film dont je t'ai parlé' = 'j'ai parlé du film'. 'dont' = pronom relatif représentant 'de + antécédent'." },
      { question: "La subordonnée de temps est introduite par…", options: ["Quand, lorsque, avant que, après que, dès que", "Parce que, puisque", "Pour que, afin que", "Bien que, quoique"], answer: "Quand, lorsque, avant que, après que, dès que", explication: "'Quand il arrive, tout s'anime.' La temporelle répond à 'quand ?' et peut exprimer simultanéité, antériorité ou postériorité." }
    ],
    2: [
      { question: "La subordonnée de conséquence est introduite par…", options: ["Si bien que, de sorte que, au point que (+ indicatif)", "Pour que, afin que (+ subjonctif)", "Bien que, quoique", "Si, à condition que"], answer: "Si bien que, de sorte que, au point que (+ indicatif)", explication: "'Il a tellement travaillé qu'il a réussi.' La conséquence est à l'indicatif (fait réel), contrairement au but (subjonctif)." },
      { question: "La proposition infinitive a un sujet propre différent du verbe principal. Dans 'J'entends les oiseaux chanter', le sujet de 'chanter' est…", options: ["Les oiseaux", "Je", "Le verbe chanter n'a pas de sujet", "Dieu"], answer: "Les oiseaux", explication: "'Les oiseaux chantent.' → COD de 'j'entends'. La proposition infinitive est COD du verbe de perception." },
      { question: "Après 'avant que', on emploie…", options: ["Le subjonctif", "L'indicatif", "Le conditionnel", "L'infinitif toujours"], answer: "Le subjonctif", explication: "'Avant qu'il parte.' → subjonctif. À distinguer de 'après que' → indicatif (fait accompli : 'après qu'il est parti')." },
      { question: "La subordonnée interrogative indirecte est introduite par…", options: ["Si, ce que, ce qui, où, comment, pourquoi, quand…", "Que, pour que", "Bien que, quoique", "Car, puisque"], answer: "Si, ce que, ce qui, où, comment, pourquoi, quand…", explication: "'Je me demande si elle viendra.' L'interrogation directe ('viendra-t-elle ?') devient subordonnée. Pas de point d'interrogation." },
      { question: "Dans 'où je suis né', 'où' est pronom relatif et a la valeur de…", options: ["Complément de lieu (dans lequel)", "COD", "Sujet", "COI"], answer: "Complément de lieu (dans lequel)", explication: "'Le village où je suis né' = 'dans lequel je suis né'. 'où' pronom relatif peut exprimer le lieu ou le temps." },
      { question: "La subordonnée participiale a un sujet propre. Dans 'La pluie tombant, nous rentrâmes', le sujet de 'tombant' est…", options: ["La pluie", "Nous", "Il (impersonnel)", "Personne"], answer: "La pluie", explication: "'La pluie tombant' = proposition participiale avec 'la pluie' comme sujet propre. Elle est circonstancielle (de temps ou de cause)." },
      { question: "Le gérondif exprime souvent…", options: ["La simultanéité ou la manière (même sujet que le verbe principal)", "L'antériorité", "Un sujet différent du verbe principal", "Le but"], answer: "La simultanéité ou la manière (même sujet que le verbe principal)", explication: "'En travaillant, il progressa.' Le gérondif a obligatoirement le même sujet que le verbe principal." },
      { question: "La subordonnée d'opposition exprime…", options: ["Un fait contraire à ce qu'on attendrait (alors que, tandis que)", "Une cause inattendue", "Un but difficile à atteindre", "Une condition non réalisée"], answer: "Un fait contraire à ce qu'on attendrait (alors que, tandis que)", explication: "'Alors qu'il est riche, il est malheureux.' Le fait de la subordonnée s'oppose ou contraste avec la principale." }
    ],
    3: [
      { question: "La subordonnée complétive sujet se place…", options: ["En tête de phrase, introduite par 'que'", "Toujours après le verbe", "Après le COD", "Après le CC"], answer: "En tête de phrase, introduite par 'que'", explication: "'Qu'il réussisse m'importe.' La complétive est sujet du verbe 'importe'. Rare mais important à reconnaître." },
      { question: "La proposition indépendante participiale absolue (ex: 'Cela dit') est…", options: ["Une construction figée sans lien grammatical avec la principale", "Une relative", "Une complétive", "Une circonstancielle introduite par une conjonction"], answer: "Une construction figée sans lien grammatical avec la principale", explication: "'Cela dit, passons au sujet suivant.' Ces constructions absolues (cela posé, tout bien réfléchi) ont figé en expressions." },
      { question: "La concordance des temps dans la subordonnée au subjonctif : verbe principal au passé → subjonctif…", options: ["Imparfait du subjonctif (niveau soutenu) ou présent (niveau courant)", "Présent obligatoirement", "Passé toujours", "Futur du subjonctif"], answer: "Imparfait du subjonctif (niveau soutenu) ou présent (niveau courant)", explication: "'Il voulait qu'elle vînt' (soutenu) / 'Il voulait qu'elle vienne' (courant). Dans les textes littéraires, l'imparfait du subjonctif est attendu." },
      { question: "La subordonnée de comparaison est introduite par…", options: ["Comme, ainsi que, de même que, plus… que, moins… que", "Parce que, car", "Pour que, afin que", "Bien que, quoique"], answer: "Comme, ainsi que, de même que, plus… que, moins… que", explication: "'Il travaille plus que tu ne le crois.' La comparative met en rapport deux réalités selon un critère d'égalité, supériorité ou infériorité." },
      { question: "La subordonnée de manière est introduite par…", options: ["Comme, ainsi que, de la façon dont, sans que", "Parce que, car", "Pour que, afin que", "Si, à condition que"], answer: "Comme, ainsi que, de la façon dont, sans que", explication: "'Fais comme je te l'ai montré.' La manière répond à 'comment ?' et complète le verbe de la principale." },
      { question: "Quand une subordonnée circonstancielle a le même sujet que la principale, on peut la remplacer par…", options: ["Un gérondif ou un infinitif prépositionnel", "Un pronom relatif", "Une complétive", "Un nom seul"], answer: "Un gérondif ou un infinitif prépositionnel", explication: "'Parce qu'il travaille' → 'en travaillant' (gérondif). 'Pour qu'il réussisse' → 'pour réussir' (infinitif, même sujet)." },
      { question: "La proposition subordonnée sans subordonnant (juxtaposée à valeur de subordonnée) est…", options: ["Une proposition dont la relation logique est implicite, marquée par la ponctuation", "Une indépendante", "Une principale", "Une relative sans antécédent"], answer: "Une proposition dont la relation logique est implicite, marquée par la ponctuation", explication: "'Il pleut : je reste.' Les deux-points expriment implicitement la cause. La relation logique n'est pas lexicalement marquée." },
      { question: "Le mode du verbe dans la subordonnée de concession 'bien que' est…", options: ["Le subjonctif", "L'indicatif", "Le conditionnel", "L'infinitif"], answer: "Le subjonctif", explication: "'Bien que, quoique, encore que, malgré que (+ subj.).' La concession impose le subjonctif car le fait est présenté comme envisagé, non certain." }
    ]
  },

  francais5Gram_VoixModes: {
    id: 'francais5Gram_VoixModes', nom: 'Voix & modes verbaux', emoji: '🎚️', couleur: '#7c3aed',
    1: [
      { question: "La voix passive se forme avec…", options: ["Être (conjugué) + participe passé accordé avec le sujet", "Avoir + participe passé", "Faire + infinitif", "Aller + infinitif"], answer: "Être (conjugué) + participe passé accordé avec le sujet", explication: "'Le livre est lu par Marie.' Être au présent + 'lu' accordé avec 'le livre' (masculin singulier)." },
      { question: "Dans une phrase passive, le complément d'agent est introduit par…", options: ["'par' ou 'de'", "'avec' uniquement", "'à' uniquement", "Aucune préposition"], answer: "'par' ou 'de'", explication: "'Le chat est aimé de tous.' / 'Le voleur a été arrêté par la police.' 'Par' est plus courant, 'de' avec des états ou des sentiments." },
      { question: "Le mode indicatif exprime…", options: ["Des faits présentés comme réels ou certains", "Une éventualité ou une volonté", "Un ordre", "Une hypothèse irréelle"], answer: "Des faits présentés comme réels ou certains", explication: "L'indicatif = mode du réel. Les temps de l'indicatif : présent, imparfait, passé composé, passé simple, futur, conditionnel*." },
      { question: "Le mode subjonctif exprime…", options: ["Le doute, la volonté, la nécessité, la possibilité (irréel)", "Des faits certains", "Un ordre direct", "Le passé accompli"], answer: "Le doute, la volonté, la nécessité, la possibilité (irréel)", explication: "Subjonctif après : vouloir que, il faut que, bien que, pour que, douter que… Il présente l'action comme envisagée, souhaitée ou incertaine." },
      { question: "Transformer à la voix active : 'Ce roman a été écrit par Flaubert.' →", options: ["Flaubert a écrit ce roman.", "Ce roman écrit Flaubert.", "Flaubert est écrit par le roman.", "Ce roman s'écrit par Flaubert."], answer: "Flaubert a écrit ce roman.", explication: "Complément d'agent → sujet. Sujet passif → COD. Verbe actif au même temps (passé composé ici)." },
      { question: "Le mode impératif exprime…", options: ["Un ordre, un conseil ou une prière", "Une hypothèse", "Un fait passé", "Une question"], answer: "Un ordre, un conseil ou une prière", explication: "L'impératif n'a pas de sujet exprimé. Il se conjugue à 3 personnes : 2ème sing., 1ère plur., 2ème plur. 'Mange !' / 'Mangeons !' / 'Mangez !'" },
      { question: "Le mode conditionnel exprime…", options: ["Une hypothèse, une politesse ou un fait non confirmé", "Un fait certain et présent", "Un ordre atténué", "Le passé narratif"], answer: "Une hypothèse, une politesse ou un fait non confirmé", explication: "Conditionnel : 'Je voudrais un café.' (politesse) / 'Si j'avais le temps, je lirais.' (hypothèse) / 'Il serait en fuite.' (info non confirmée)." },
      { question: "Le mode infinitif est un mode…", options: ["Non personnel (sans marque de personne)", "Personnel comme l'indicatif", "Uniquement négatif", "Uniquement passé"], answer: "Non personnel (sans marque de personne)", explication: "L'infinitif ne porte pas de personne : 'manger', 'finir', 'prendre'. C'est la forme nominale du verbe, souvent sujet ou COD." }
    ],
    2: [
      { question: "Le gérondif se construit avec 'en' + participe présent et exprime…", options: ["La simultanéité ou la manière, avec le même sujet que le verbe principal", "L'antériorité", "Un sujet différent", "Le but toujours"], answer: "La simultanéité ou la manière, avec le même sujet que le verbe principal", explication: "'En lisant, il apprenait.' = il lisait ET il apprenait en même temps. Même sujet obligatoire pour le gérondif." },
      { question: "Le participe présent (sans 'en') peut exprimer…", options: ["La cause ou la simultanéité, souvent avec un sujet différent possible", "Uniquement la manière", "L'ordre", "Le futur"], answer: "La cause ou la simultanéité, souvent avec un sujet différent possible", explication: "'Étant malade, il resta chez lui.' (cause) / 'Il entra, souriant à tous.' (simultanéité). Participe présent = cause ou simultanéité." },
      { question: "Quand peut-on utiliser l'infinitif à la place d'une subordonnée ?", options: ["Quand le sujet de la subordonnée est le même que celui de la principale", "Toujours", "Jamais dans un texte formel", "Quand les sujets sont différents"], answer: "Quand le sujet de la subordonnée est le même que celui de la principale", explication: "'Je veux partir.' (même sujet : 'je') vs 'Je veux que tu partes.' (sujets différents → subjonctif obligatoire)." },
      { question: "La voix pronominale (ex : 'il se lave') peut avoir plusieurs valeurs, notamment…", options: ["Réfléchie (l'action revient sur le sujet) ou réciproque (entre plusieurs sujets)", "Toujours passive", "Toujours active transitive", "Uniquement impersonnelle"], answer: "Réfléchie (l'action revient sur le sujet) ou réciproque (entre plusieurs sujets)", explication: "Réfléchie : 'Il se lave' (il lave lui-même). Réciproque : 'Ils se disputent' (entre eux). Passive : 'Ça se fait' (= c'est fait)." },
      { question: "Le mode subjonctif est obligatoire après les verbes de volonté comme…", options: ["Vouloir que, souhaiter que, exiger que, désirer que", "Savoir que, penser que, croire que", "Voir que, entendre que, sentir que", "Dire que, affirmer que, prétendre que"], answer: "Vouloir que, souhaiter que, exiger que, désirer que", explication: "Les verbes de volonté imposent le subjonctif dans la subordonnée : 'Je veux qu'il vienne' et non '*qu'il viendra'." },
      { question: "Le participe passé employé avec 'être' s'accorde avec…", options: ["Le sujet du verbe", "Le COD", "L'auxiliaire", "Toujours au masculin singulier"], answer: "Le sujet du verbe", explication: "'Elles sont parties.' → 'parties' s'accorde avec 'elles' (féminin pluriel). Avec être, le PP fonctionne comme un adjectif attribut." },
      { question: "Le mode subjonctif est utilisé après 'bien que' car…", options: ["La concession présente le fait comme envisagé, non comme certain", "C'est une règle arbitraire", "La concession exprime le futur", "La certitude impose le subjonctif"], answer: "La concession présente le fait comme envisagé, non comme certain", explication: "'Bien qu'il soit intelligent…' → son intelligence est reconnue mais présentée sous l'angle d'un possible obstacle non déterminant." },
      { question: "Le conditionnel journalistique (ex : 'il serait en fuite') marque…", options: ["Une information non vérifiée, que le journaliste ne garantit pas", "Un fait passé certain", "Un souhait du journaliste", "Une politesse"], answer: "Une information non vérifiée, que le journaliste ne garantit pas", explication: "Le conditionnel d'atténuation ou de prudence : le journaliste signale qu'il n'a pas confirmé l'information." }
    ],
    3: [
      { question: "Le mode subjonctif peut être utilisé dans une indépendante pour exprimer…", options: ["Un souhait ou une supposition (Vive le roi ! Soit un triangle ABC)", "Un ordre impératif direct", "Un fait passé", "Une question directe"], answer: "Un souhait ou une supposition (Vive le roi ! Soit un triangle ABC)", explication: "'Vive la République !' (souhait) / 'Soit ABC un triangle.' (hypothèse de géométrie). Subjonctif indépendant = optatif ou hypothétique." },
      { question: "L'infinitif passé (ex : 'avoir mangé') exprime…", options: ["Une action antérieure à celle du verbe principal", "Une action simultanée", "Une action future", "Une action habituelle"], answer: "Une action antérieure à celle du verbe principal", explication: "'Après avoir mangé, il sortit.' L'infinitif passé (avoir/être + participe) marque l'antériorité. Ici : d'abord mangé, puis sorti." },
      { question: "La double voix pronominale passive : 'Ce livre se lit facilement' signifie…", options: ["Ce livre est facilement lisible / peut être lu facilement (valeur passive)", "Je lis ce livre facilement", "Quelqu'un lit ce livre facilement", "Ce livre est en train d'être lu"], answer: "Ce livre est facilement lisible / peut être lu facilement (valeur passive)", explication: "La forme pronominale à valeur passive : 'ça se mange' = c'est comestible / cela peut être mangé. Agent non exprimé." },
      { question: "Le conditionnel passé dans 'il aurait pu réussir' exprime…", options: ["Un fait passé non réalisé (irréel du passé)", "Un souhait actuel", "Un futur incertain", "Une politesse passée"], answer: "Un fait passé non réalisé (irréel du passé)", explication: "Conditionnel passé (irréel du passé) : 'Si j'avais travaillé, j'aurais réussi.' Le fait n'a pas eu lieu dans le passé." },
      { question: "L'imparfait du subjonctif (ex : 'qu'il vînt') est surtout utilisé dans…", options: ["Les textes littéraires et le style soutenu après un passé", "La langue parlée contemporaine", "Les textes journalistiques", "La langue familière"], answer: "Les textes littéraires et le style soutenu après un passé", explication: "'Il voulait qu'elle vînt.' → concordance des temps au style soutenu. Dans la langue courante : 'qu'elle vienne' est accepté." },
      { question: "Le participe présent est invariable, sauf quand il devient…", options: ["Adjectif verbal (épithète ou attribut, accordé avec le nom)", "Auxiliaire", "Pronom", "Connecteur logique"], answer: "Adjectif verbal (épithète ou attribut, accordé avec le nom)", explication: "'Une eau courante' (adjectif, accordé). 'L'eau coulant dans le ruisseau' (participe présent, invariable). Différence parfois de sens." },
      { question: "La voix passive est préférée à la voix active quand…", options: ["L'agent est inconnu, sans importance, ou pour mettre en valeur le patient", "L'agent est bien connu et important", "Le sujet est animé", "Le verbe est intransitif"], answer: "L'agent est inconnu, sans importance, ou pour mettre en valeur le patient", explication: "'La banque a été braquée.' (agent inconnu ou volontairement tu). La passif met en avant l'objet de l'action." },
      { question: "Le subjonctif présent de 'savoir' (irrégulier) est…", options: ["que je sache", "que je sais", "que je savais", "que j'aurai su"], answer: "que je sache", explication: "Subjonctif de 'savoir' (irrégulier) : que je sache, que tu saches, qu'il sache, que nous sachions, vous sachiez, ils sachent." }
    ]
  },

  francais5Gram_DiscoursRapporte: {
    id: 'francais5Gram_DiscoursRapporte', nom: 'Discours rapporté', emoji: '💬', couleur: '#7c3aed',
    1: [
      { question: "Le discours direct rapporte les paroles…", options: ["Telles quelles, entre guillemets ou après un tiret", "Transformées à la 3ème personne", "Résumées en un mot", "Sans ponctuation"], answer: "Telles quelles, entre guillemets ou après un tiret", explication: "'Je viendrai demain.', dit-il. Les mots exacts sont préservés. Verbe de parole + ponctuation spécifique." },
      { question: "Le discours indirect rapporte les paroles en les…", options: ["Intégrant dans la phrase principale via 'que' et en changeant les pronoms", "Citant mot pour mot", "Résumant sans verbe", "Mettant entre parenthèses"], answer: "Intégrant dans la phrase principale via 'que' et en changeant les pronoms", explication: "'Je viendrai' → Il dit qu'il viendrait. Les pronoms et temps changent selon la personne et le temps du verbe principal." },
      { question: "Au discours indirect, 'je' devient…", options: ["Il / elle (selon le locuteur)", "Tu", "Nous", "On"], answer: "Il / elle (selon le locuteur)", explication: "'Je suis prêt.' → Il dit qu'il était prêt. Le pronom de 1ère personne devient 3ème personne quand on rapporte les paroles d'un autre." },
      { question: "Au discours indirect après un verbe au passé, le présent devient…", options: ["Imparfait", "Passé composé", "Futur", "Passé simple"], answer: "Imparfait", explication: "Concordance : 'Je viens.' → Il dit qu'il venait. Présent → imparfait quand le verbe introducteur est au passé." },
      { question: "Au discours indirect après un verbe au passé, le futur devient…", options: ["Conditionnel présent", "Futur antérieur", "Imparfait", "Passé simple"], answer: "Conditionnel présent", explication: "'Je viendrai.' → Il dit qu'il viendrait. Futur → conditionnel présent au discours indirect passé." },
      { question: "Pour rapporter une question au discours indirect, on utilise…", options: ["Si (oui/non), ce qui, ce que, ou le mot interrogatif d'origine", "Que uniquement", "Le point d'interrogation conservé", "Des guillemets"], answer: "Si (oui/non), ce qui, ce que, ou le mot interrogatif d'origine", explication: "'Viendras-tu ?' → Il demanda si elle viendrait. Question totale → 'si'. Question partielle → mot interrogatif conservé." },
      { question: "Pour rapporter un ordre au discours indirect, on utilise…", options: ["De + infinitif", "Que + subjonctif uniquement", "Si + indicatif", "Le verbe à l'impératif conservé"], answer: "De + infinitif", explication: "'Partez !' → Il leur ordonna de partir. L'impératif devient 'de + infinitif' après les verbes d'ordre (ordonner, demander, dire…)." },
      { question: "Le verbe introducteur du discours indirect peut indiquer…", options: ["Le ton ou l'intention des paroles (affirmer, promettre, reprocher, expliquer…)", "Uniquement 'dire'", "La ponctuation à utiliser", "Le temps verbal à employer"], answer: "Le ton ou l'intention des paroles (affirmer, promettre, reprocher, expliquer…)", explication: "Le choix du verbe de parole est expressif : 'il prétendit que' ≠ 'il avoua que' ≠ 'il affirma que'. Chacun colore le rapport." }
    ],
    2: [
      { question: "Au discours indirect passé, 'aujourd'hui' devient…", options: ["Ce jour-là", "Hier", "Demain", "Maintenant"], answer: "Ce jour-là", explication: "Les adverbes de temps changent : aujourd'hui → ce jour-là / hier → la veille / demain → le lendemain / maintenant → alors." },
      { question: "Au discours indirect passé, 'demain' devient…", options: ["Le lendemain", "La veille", "Ce jour-là", "Bientôt"], answer: "Le lendemain", explication: "Tableau des correspondances : demain → le lendemain, hier → la veille, il y a 3 jours → 3 jours auparavant." },
      { question: "Le discours indirect libre est caractérisé par…", options: ["L'absence de guillemets et de verbe introducteur, mais avec changement de pronoms et temps", "Des guillemets sans verbe introducteur", "Un verbe introducteur et des guillemets", "La conservation de tous les temps d'origine"], answer: "L'absence de guillemets et de verbe introducteur, mais avec changement de pronoms et temps", explication: "'Était-il donc condamné ?' → discours indirect libre. La question intérieure est fondue dans le récit, sans marqueur explicite." },
      { question: "La valeur stylistique du discours indirect libre est de…", options: ["Mêler la voix du narrateur et celle du personnage, créant une ambiguïté féconde", "Objectiver totalement les paroles", "Supprimer la subjectivité", "Signaler que le personnage ment"], answer: "Mêler la voix du narrateur et celle du personnage, créant une ambiguïté féconde", explication: "Le discours indirect libre, cher au roman réaliste (Flaubert), fond narrateur et personnage. Qui parle ? Les deux à la fois." },
      { question: "Dans 'Il promit qu'il reviendrait', quel était le discours direct d'origine ?", options: ["'Je reviendrai.'", "'Il reviendra.'", "'Je reviens.'", "'Reviens !'"], answer: "'Je reviendrai.'", explication: "Reconstitution : 'il' → 'je' (1ère personne), 'reviendrait' (conditionnel) → 'reviendrai' (futur). Donc : 'Je reviendrai.'" },
      { question: "Rapporter les paroles au discours indirect change…", options: ["Les pronoms, les temps verbaux et certains adverbes", "Uniquement les pronoms", "Uniquement les temps verbaux", "Uniquement la ponctuation"], answer: "Les pronoms, les temps verbaux et certains adverbes", explication: "Tout change : pronoms (je → il), temps (présent → imparfait si verbe passé), déictiques (ici → là, demain → le lendemain)." },
      { question: "Le style indirect libre peut être détecté car on trouve souvent…", options: ["Des marques de subjectivité du personnage sans verbe introducteur", "Des guillemets clairement présents", "Un verbe de parole explicite", "Uniquement des faits objectifs"], answer: "Des marques de subjectivité du personnage sans verbe introducteur", explication: "Exclamations, questions rhétoriques, interjections sans guillemets ni 'dit-il' → suspicion de discours indirect libre." },
      { question: "Transformer en discours direct : 'Elle lui demanda s'il avait faim.' →", options: ["'As-tu faim ?'", "'Il a faim ?'", "'A-t-il faim ?'", "'Est-ce qu'elle a faim ?'"], answer: "'As-tu faim ?'", explication: "'s'il' → question totale → inversion sujet-verbe ou 'est-ce que'. Imparfait 'avait' → présent 'as'. Pronom 'il' → 'tu' (tu = destinataire)." }
    ],
    3: [
      { question: "Le style narrativisé résume les paroles en…", options: ["Un groupe nominal ou une proposition courte sans reproduire les mots exacts", "Citant mot pour mot", "Utilisant des guillemets", "Paraphrasant longuement"], answer: "Un groupe nominal ou une proposition courte sans reproduire les mots exacts", explication: "'Il nous fit part de sa décision.' = style narrativisé. On résume le contenu sans rapporter les mots. Efficace pour accélérer le récit." },
      { question: "La polyphonie dans le discours rapporté désigne…", options: ["La présence de plusieurs voix dans un même énoncé", "Un texte écrit par plusieurs auteurs", "Le discours direct uniquement", "L'absence de verbe introducteur"], answer: "La présence de plusieurs voix dans un même énoncé", explication: "Le discours indirect libre est polyphonique : on entend à la fois le narrateur et le personnage sans pouvoir les démêler complètement." },
      { question: "Dans 'Il aurait dit que tout allait bien', le conditionnel 'aurait dit' marque…", options: ["Une information non vérifiée rapportée avec prudence", "Un fait passé certain", "Un souhait", "Une politesse"], answer: "Une information non vérifiée rapportée avec prudence", explication: "Le conditionnel de discours rapporté marque la non-garantie : l'auteur cite ce qu'on lui a dit sans l'authentifier." },
      { question: "Le discours direct dans un roman crée un effet de…", options: ["Réel et d'authenticité, donnant l'illusion d'entendre directement le personnage", "Distance et d'objectivité", "Résumé efficace", "Ambiguïté entre narrateur et personnage"], answer: "Réel et d'authenticité, donnant l'illusion d'entendre directement le personnage", explication: "Le discours direct met le lecteur face aux mots exacts du personnage : effet de présence, d'immédiateté, d'authenticité." },
      { question: "Transformer en discours indirect : 'Elle s'écria : « Je ne reviendrai jamais ! »'", options: ["Elle s'écria qu'elle ne reviendrait jamais.", "Elle s'écria qu'elle ne revenait jamais.", "Elle s'écria si elle reviendrait.", "Elle s'écria ne jamais revenir."], answer: "Elle s'écria qu'elle ne reviendrait jamais.", explication: "'Je' → elle, futur 'reviendrai' → conditionnel 'reviendrait', 'jamais' conservé, 'que' + proposition, point d'exclamation supprimé." },
      { question: "Dans la presse, le discours indirect libre permet de…", options: ["Rapporter des propos en les fondant dans le texte, sans guillemets, tout en gardant une distance", "Citer exactement sans responsabilité", "Présenter un fait comme certain", "Supprimer l'auteur des propos"], answer: "Rapporter des propos en les fondant dans le texte, sans guillemets, tout en gardant une distance", explication: "Le journaliste peut fondre des propos dans son texte en style indirect libre, signalant parfois l'attribution par le contexte." },
      { question: "La reformulation dans le discours rapporté consiste à…", options: ["Reproduire le sens sans les mots exacts du locuteur d'origine", "Copier mot pour mot", "Inventer des paroles", "Attribuer des paroles à la mauvaise personne"], answer: "Reproduire le sens sans les mots exacts du locuteur d'origine", explication: "La reformulation (style indirect, narrativisé) conserve le sens mais change les mots. Risque : trahir la nuance ou l'intention." },
      { question: "Le verbe introducteur 'prétendre que' (vs 'affirmer que') suggère…", options: ["Un doute ou une réserve sur la vérité des propos rapportés", "Une certitude totale", "Une politesse", "Un ordre"], answer: "Un doute ou une réserve sur la vérité des propos rapportés", explication: "'Il prétendit que c'était vrai.' → le narrateur laisse entendre qu'il n'est pas convaincu. 'Prétendre' porte un jugement implicite." }
    ]
  },

  francais5Lect_Argumentation: {
    id: 'francais5Lect_Argumentation', nom: 'Lire un texte argumentatif', emoji: '⚖️', couleur: '#16a34a',
    1: [
      { question: "La thèse dans un texte argumentatif est…", options: ["L'opinion défendue par l'auteur", "Un exemple", "La conclusion uniquement", "Un fait objectif"], answer: "L'opinion défendue par l'auteur", explication: "La thèse = position de l'auteur. Elle s'oppose à l'antithèse (position adverse). Les arguments servent à étayer la thèse." },
      { question: "Un argument est…", options: ["Une raison qui soutient ou réfute une thèse", "Un exemple concret", "Une citation d'auteur", "Une question rhétorique"], answer: "Une raison qui soutient ou réfute une thèse", explication: "L'argument = justification rationnelle. L'exemple illustre l'argument. Sans argument, l'exemple reste anecdotique." },
      { question: "'Car', 'puisque', 'en effet' sont des connecteurs qui introduisent…", options: ["Une cause ou une justification", "Une opposition", "Une conclusion", "Une concession"], answer: "Une cause ou une justification", explication: "'Il reste car il est fatigué.' Ces connecteurs logiques de cause renforcent la cohérence et l'enchaînement des arguments." },
      { question: "'Cependant', 'or', 'pourtant' sont des connecteurs qui expriment…", options: ["Une opposition ou une nuance", "Une cause", "Une conséquence", "Une énumération"], answer: "Une opposition ou une nuance", explication: "Ces connecteurs d'opposition introduisent une restriction ou un contre-argument : 'Je le soutiens, cependant il a tort sur ce point.'" },
      { question: "La conclusion d'un texte argumentatif doit…", options: ["Résumer la thèse et ouvrir sur une perspective", "Ajouter de nouveaux arguments", "Répéter l'introduction mot pour mot", "Raconter une anecdote"], answer: "Résumer la thèse et ouvrir sur une perspective", explication: "La conclusion : récapitule les arguments, rappelle la thèse, puis ouvre sur une question ou une perspective plus large." },
      { question: "L'exemple dans un texte argumentatif sert à…", options: ["Illustrer concrètement un argument abstrait", "Remplacer l'argument", "Contredire la thèse", "Ouvrir la conclusion"], answer: "Illustrer concrètement un argument abstrait", explication: "L'exemple ancre l'argument dans la réalité et le rend compréhensible. Un argument sans exemple peut sembler vague." },
      { question: "Reconnaître une opinion d'un fait, c'est distinguer…", options: ["Ce qui est vérifiable (fait) de ce qui est subjectif (opinion)", "Ce qui est court de ce qui est long", "Le discours direct du discours indirect", "La cause de la conséquence"], answer: "Ce qui est vérifiable (fait) de ce qui est subjectif (opinion)", explication: "'La Terre tourne' = fait vérifiable. 'Ce film est magnifique' = opinion subjective. Savoir distinguer les deux est fondamental." },
      { question: "Le connecteur 'donc' introduit…", options: ["Une conséquence", "Une cause", "Une opposition", "Une énumération"], answer: "Une conséquence", explication: "'Il a travaillé, donc il a réussi.' 'Donc' marque la conséquence logique, le résultat attendu d'une cause énoncée avant." }
    ],
    2: [
      { question: "La concession dans un texte argumentatif consiste à…", options: ["Reconnaître la part de vérité de la thèse adverse avant de la réfuter", "Abandonner sa propre thèse", "Répéter son argument", "Citer un auteur"], answer: "Reconnaître la part de vérité de la thèse adverse avant de la réfuter", explication: "Structure : 'Certes… (concession) / mais… (réfutation)'. Admettre une partie de la thèse adverse renforce la crédibilité." },
      { question: "L'appel à l'émotion (pathos) est une stratégie argumentative qui…", options: ["Cherche à toucher les sentiments du lecteur", "S'appuie sur des faits logiques", "Cite des experts", "Utilise des statistiques"], answer: "Cherche à toucher les sentiments du lecteur", explication: "Le pathos peut être efficace (indignation légitime) mais aussi manipulateur. Un bon lecteur le repère et l'évalue." },
      { question: "L'argument d'autorité consiste à…", options: ["S'appuyer sur la parole d'un expert ou d'une source reconnue", "Inventer une citation", "Répéter sa thèse", "Poser une question"], answer: "S'appuyer sur la parole d'un expert ou d'une source reconnue", explication: "'Selon l'OMS…', 'D'après Einstein…' : l'autorité de la source renforce l'argument. Attention aux fausses autorités." },
      { question: "Un texte persuasif se distingue d'un texte simplement informatif car il…", options: ["Cherche à modifier l'opinion ou le comportement du lecteur", "Présente des faits neutres", "N'utilise jamais de connecteurs", "Évite toute opinion"], answer: "Cherche à modifier l'opinion ou le comportement du lecteur", explication: "Informer = transmettre des faits. Persuader = convaincre d'adopter une opinion ou d'agir. Le texte persuasif engage une intention." },
      { question: "Le contre-exemple permet de…", options: ["Réfuter une généralisation trop hâtive", "Confirmer la thèse", "Illustrer l'argument principal", "Ouvrir la conclusion"], answer: "Réfuter une généralisation trop hâtive", explication: "Si l'adversaire dit 'tous les X font Y', un seul contre-exemple suffit à invalider la généralisation abusive." },
      { question: "Un sophisme est un raisonnement qui…", options: ["Semble logique mais repose sur une erreur ou une manipulation", "Est parfaitement rigoureux", "Utilise uniquement des faits", "S'appuie sur des émotions seulement"], answer: "Semble logique mais repose sur une erreur ou une manipulation", explication: "Ex : 'Tous les chats ont 4 pattes. Mon chien a 4 pattes. Mon chien est donc un chat.' Raisonnement faux habillé en logique." },
      { question: "La réfutation directe consiste à…", options: ["Démontrer qu'un argument adverse est faux ou insuffisant", "Ignorer la thèse adverse", "Accepter tous les arguments", "Changer de sujet"], answer: "Démontrer qu'un argument adverse est faux ou insuffisant", explication: "Réfuter directement = montrer la faiblesse de l'argument adverse avec logique, faits ou contre-exemples." },
      { question: "L'énonciation dans un texte argumentatif se reconnaît à…", options: ["L'emploi du 'je', des modalisateurs et des verbes d'opinion", "L'absence de tout pronom", "Le recours exclusif aux faits", "La narration à la 3ème personne"], answer: "L'emploi du 'je', des modalisateurs et des verbes d'opinion", explication: "Un texte argumentatif subjectif utilise 'je pense', 'il me semble', 'sans doute', 'certainement' : marques de l'énonciateur." }
    ],
    3: [
      { question: "Le logos dans la rhétorique d'Aristote désigne…", options: ["L'argumentation fondée sur la raison et les preuves logiques", "L'appel aux émotions", "L'image de l'orateur", "La conclusion"], answer: "L'argumentation fondée sur la raison et les preuves logiques", explication: "La triade rhétorique : logos (raison), pathos (émotion), ethos (crédibilité). Un discours efficace mobilise les trois." },
      { question: "L'ethos rhétorique désigne…", options: ["La crédibilité et l'image que projette l'orateur", "L'émotion suscitée chez l'auditeur", "La logique des arguments", "La longueur du discours"], answer: "La crédibilité et l'image que projette l'orateur", explication: "L'ethos = la confiance qu'inspire l'orateur. Un médecin parlant de santé a un ethos fort. Il se construit avant et pendant le discours." },
      { question: "Un texte polémique se distingue d'un texte argumentatif neutre par…", options: ["Son ton vif, partial et engagé qui vise à choquer ou indigner", "Sa neutralité parfaite", "L'absence d'arguments", "Son registre soutenu"], answer: "Son ton vif, partial et engagé qui vise à choquer ou indigner", explication: "Le texte polémique prend position de façon radicale, n'hésite pas à caricaturer ou attaquer l'adversaire." },
      { question: "Le plan dialectique traite un sujet en…", options: ["Thèse / antithèse / synthèse dépassant l'opposition", "Pour / contre uniquement", "Description / analyse / évaluation", "Introduction / développement / conclusion"], answer: "Thèse / antithèse / synthèse dépassant l'opposition", explication: "Le plan dialectique ne s'arrête pas à l'opposition : la synthèse dépasse et nuance les deux positions, proposant une vision plus complexe." },
      { question: "La présupposition dans un argument est…", options: ["Une information tenue pour acquise sans être explicitée", "Un fait prouvé", "Une citation d'autorité", "Un contre-exemple"], answer: "Une information tenue pour acquise sans être explicitée", explication: "'Arrêtez de gaspiller l'argent public !' → présupposé : l'argent public est gaspillé. L'auteur ne le prouve pas, il le suppose admis." },
      { question: "L'argument ad hominem est une erreur de raisonnement qui consiste à…", options: ["Attaquer la personne plutôt que ses arguments", "S'appuyer sur une autorité reconnue", "Généraliser à partir d'un exemple", "Faire une concession"], answer: "Attaquer la personne plutôt que ses arguments", explication: "'Tu dis ça mais tu es riche, donc tu ne peux pas comprendre.' On attaque l'individu, pas l'idée. C'est un sophisme." },
      { question: "La généralisation abusive consiste à…", options: ["Tirer une règle générale d'un seul exemple", "Donner trop d'exemples", "Citer des experts trop souvent", "Faire une concession excessive"], answer: "Tirer une règle générale d'un seul exemple", explication: "'J'ai rencontré un Français arrogant, donc tous les Français sont arrogants.' Un exemple ne suffit pas à établir une généralité." },
      { question: "L'intertextualité argumentative consiste à…", options: ["Citer ou référencer d'autres textes pour renforcer sa position", "Copier un texte entier", "Imiter le style d'un auteur", "Réécrire un texte connu"], answer: "Citer ou référencer d'autres textes pour renforcer sa position", explication: "Les citations, références à des œuvres ou à des auteurs reconnus renforcent la thèse et montrent la culture de l'auteur." }
    ]
  },

  // ── SOUS-CHAPITRES CONJUGAISON 5ÈME ──
  francais5Conj_Subjonctif: {
    id: 'francais5Conj_Subjonctif', nom: 'Subjonctif présent', emoji: '🟣', couleur: '#b45309',
    1: [
      { question: "Les terminaisons du subjonctif présent pour 'je' sont…", options: ["-e (pour la plupart des verbes)", "-ai", "-ais", "-s"], answer: "-e (pour la plupart des verbes)", explication: "Subjonctif présent : que je -e, tu -es, il -e, nous -ions, vous -iez, ils -ent. Radical = 3ème pers. pluriel du présent." },
      { question: "Que je ___ (être) — Subjonctif présent ?", options: ["sois", "suis", "étais", "serai"], answer: "sois", explication: "Subjonctif de 'être' (irrégulier) : sois, sois, soit, soyons, soyez, soient." },
      { question: "Que j'___ (avoir) — Subjonctif présent ?", options: ["aie", "ai", "avais", "aurais"], answer: "aie", explication: "Subjonctif de 'avoir' (irrégulier) : aie, aies, ait, ayons, ayez, aient." },
      { question: "Quelle conjonction impose le subjonctif ?", options: ["Pour que", "Parce que", "Quand", "Puisque"], answer: "Pour que", explication: "'Pour que', 'bien que', 'afin que', 'avant que', 'à moins que' → subjonctif obligatoire." },
      { question: "Que tu ___ (aller) — Subjonctif présent ?", options: ["ailles", "vas", "allais", "iras"], answer: "ailles", explication: "Subjonctif de 'aller' (irrégulier) : que j'aille, tu ailles, il aille, nous allions, vous alliez, ils aillent." },
      { question: "Que nous ___ (faire) — Subjonctif présent ?", options: ["fassions", "faisons", "ferons", "ferions"], answer: "fassions", explication: "Subjonctif de 'faire' (irrégulier) : que je fasse, tu fasses, il fasse, nous fassions, vous fassiez, ils fassent." },
      { question: "Après 'il faut que', on met le verbe…", options: ["Au subjonctif", "À l'indicatif", "Au conditionnel", "À l'infinitif seul"], answer: "Au subjonctif", explication: "'Il faut que tu viennes.' Les verbes impersonnels de nécessité imposent le subjonctif." },
      { question: "Que vous ___ (pouvoir) — Subjonctif présent ?", options: ["puissiez", "pouvez", "pourriez", "pouviez"], answer: "puissiez", explication: "Subjonctif de 'pouvoir' (irrégulier) : que je puisse, tu puisses, il puisse, nous puissions, vous puissiez, ils puissent." }
    ],
    2: [
      { question: "Qu'ils ___ (savoir) — Subjonctif présent ?", options: ["sachent", "savent", "sauraient", "sauront"], answer: "sachent", explication: "Subjonctif de 'savoir' (irrégulier) : que je sache, tu saches, il sache, nous sachions, vous sachiez, ils sachent." },
      { question: "Que tu ___ (vouloir) — Subjonctif présent ?", options: ["veuilles", "veux", "voudrais", "voulais"], answer: "veuilles", explication: "Subjonctif de 'vouloir' (irrégulier) : que je veuille, tu veuilles, il veuille, nous voulions, vous vouliez, ils veuillent." },
      { question: "Après 'bien que', on emploie le…", options: ["Subjonctif", "Indicatif", "Conditionnel", "Futur"], answer: "Subjonctif", explication: "'Bien qu'il soit parti…' 'Bien que, quoique, encore que' imposent toujours le subjonctif." },
      { question: "Pour former le subjonctif présent d'un verbe régulier, le radical vient de…", options: ["La 3ème personne du pluriel du présent de l'indicatif", "L'infinitif directement", "Le futur simple", "Le passé composé"], answer: "La 3ème personne du pluriel du présent de l'indicatif", explication: "Ils parlent → parl- → que je parle. Ils finissent → finiss- → que je finisse. Ils prennent → prenn- → que je prenne." },
      { question: "Que nous ___ (être) — Subjonctif présent ?", options: ["soyons", "sommes", "serions", "étions"], answer: "soyons", explication: "Subjonctif de 'être' (nous) : que nous soyons." },
      { question: "Après 'douter que', on emploie le…", options: ["Subjonctif", "Indicatif", "Conditionnel", "Infinitif"], answer: "Subjonctif", explication: "Les verbes de doute et d'incertitude (douter que, ne pas croire que, craindre que) imposent le subjonctif." },
      { question: "Que j'___ (prendre) — Subjonctif présent ?", options: ["prenne", "prends", "prendrais", "prendrai"], answer: "prenne", explication: "Ils prennent → prenn- + -e → que je prenne. Le radical du subjonctif vient de la 3ème personne du pluriel." },
      { question: "Le subjonctif s'emploie seul (sans conjonction) pour exprimer…", options: ["Un souhait ou un ordre atténué ('Qu'il vienne !')", "Un fait passé", "Une question directe", "Une certitude"], answer: "Un souhait ou un ordre atténué ('Qu'il vienne !')", explication: "'Qu'il entre !' (ordre indirect). 'Ainsi soit-il !' (souhait). Subjonctif optatif dans la principale sans conjonction." }
    ],
    3: [
      { question: "L'imparfait du subjonctif se forme sur…", options: ["Le passé simple + -sse, -sses, -t, -ssions, -ssiez, -ssent", "L'imparfait indicatif + -sse", "Le futur simple", "Le présent du subjonctif"], answer: "Le passé simple + -sse, -sses, -t, -ssions, -ssiez, -ssent", explication: "Passé simple 'chantai' → imparfait subj. : que je chantasse, tu chantasses, il chantât, nous chantassions…" },
      { question: "Que tu ___ (chanter) — Imparfait du subjonctif ?", options: ["chantasses", "chantais", "chanterais", "chanteras"], answer: "chantasses", explication: "Imparfait subjonctif des verbes en -er : que je chantasse, tu chantasses, il chantât…" },
      { question: "Que nous ___ (avoir) — Imparfait du subjonctif ?", options: ["eussions", "avions", "aurions", "ayons"], answer: "eussions", explication: "Imparfait subj. de 'avoir' : que j'eusse, tu eusses, il eût, nous eussions, vous eussiez, ils eussent." },
      { question: "Que nous ___ (être) — Imparfait du subjonctif ?", options: ["fussions", "étions", "serions", "soyons"], answer: "fussions", explication: "Imparfait subj. de 'être' : que je fusse, tu fusses, il fût, nous fussions, vous fussiez, ils fussent." },
      { question: "L'imparfait du subjonctif est principalement utilisé dans…", options: ["Les textes littéraires et le style très soutenu", "La langue parlée quotidienne", "Les textes journalistiques", "Les échanges informels"], answer: "Les textes littéraires et le style très soutenu", explication: "Dans la langue courante, l'imparfait du subjonctif est remplacé par le subjonctif présent. Il survit dans la littérature classique." },
      { question: "Le subjonctif passé 'qu'il ait mangé' exprime…", options: ["Une action antérieure à celle de la principale", "Une action simultanée", "Une action future", "Un fait certain"], answer: "Une action antérieure à celle de la principale", explication: "'Bien qu'il ait mangé, il a encore faim.' → il a mangé AVANT d'avoir encore faim. Subjonctif passé = antériorité." },
      { question: "Que tu ___ (venir) — Subjonctif présent ?", options: ["viennes", "viens", "viendrais", "viendras"], answer: "viennes", explication: "Ils viennent → vienn- + -es → que tu viennes. Radical irrégulier de 'venir' au subjonctif." },
      { question: "Dans 'Je ne pense pas qu'il vienne', pourquoi le subjonctif ?", options: ["Le verbe de pensée à la forme négative exprime le doute", "La négation impose toujours le subjonctif", "La pensée impose toujours le subjonctif", "C'est une règle arbitraire"], answer: "Le verbe de pensée à la forme négative exprime le doute", explication: "'Je pense qu'il viendra' (indicatif, certitude). 'Je ne pense pas qu'il vienne' (subjonctif, doute). La négation fait basculer." }
    ]
  },

  francais5Conj_Conditionnel: {
    id: 'francais5Conj_Conditionnel', nom: 'Conditionnel présent & passé', emoji: '🔵', couleur: '#b45309',
    1: [
      { question: "Le conditionnel présent se forme avec…", options: ["Radical du futur + terminaisons de l'imparfait (-ais, -ait, -ions, -iez, -aient)", "Radical de l'infinitif + terminaisons du présent", "Auxiliaire + participe passé", "Radical de l'imparfait + -rai"], answer: "Radical du futur + terminaisons de l'imparfait (-ais, -ait, -ions, -iez, -aient)", explication: "Conditionnel = futur + imparfait. 'Chanter' : chanterais, chanterais, chanterait, chanterions, chanteriez, chanteraient." },
      { question: "Je ___ (aller) — Conditionnel présent ?", options: ["irais", "vais", "allais", "irai"], answer: "irais", explication: "Futur de 'aller' : ir-. + terminaison imparfait -ais → j'irais." },
      { question: "Il ___ (faire) — Conditionnel présent ?", options: ["ferait", "fait", "faisait", "fera"], answer: "ferait", explication: "Futur de 'faire' : fer-. + -ait → il ferait." },
      { question: "Le conditionnel présent exprime notamment…", options: ["Une hypothèse (si…) ou une politesse atténuée", "Un fait réel et présent", "Une action passée accomplie", "Un ordre direct"], answer: "Une hypothèse (si…) ou une politesse atténuée", explication: "Hypothèse : 'Si j'avais le temps, je lirais.' Politesse : 'Pourriez-vous m'aider ?' Le conditionnel adoucit." },
      { question: "Nous ___ (pouvoir) — Conditionnel présent ?", options: ["pourrions", "pouvons", "pourrons", "pouvions"], answer: "pourrions", explication: "Futur de 'pouvoir' : pourr-. + -ions → nous pourrions." },
      { question: "Dans 'Si tu travaillais, tu réussirais', quel est le temps après 'Si' ?", options: ["Imparfait de l'indicatif", "Conditionnel", "Subjonctif", "Futur"], answer: "Imparfait de l'indicatif", explication: "Règle : Si + imparfait → conditionnel présent. JAMAIS de conditionnel après 'si' conditionnel." },
      { question: "Ils ___ (être) — Conditionnel présent ?", options: ["seraient", "sont", "étaient", "seront"], answer: "seraient", explication: "Futur de 'être' : ser-. + -aient → ils seraient." },
      { question: "Le conditionnel dans un article de journal ('il serait en fuite') exprime…", options: ["Une information non confirmée", "Un fait certain", "Un souhait", "Un ordre"], answer: "Une information non confirmée", explication: "Le conditionnel journalistique signale que l'information n'est pas vérifiée." }
    ],
    2: [
      { question: "Le conditionnel passé se forme avec…", options: ["Auxiliaire (avoir/être) au conditionnel présent + participe passé", "Auxiliaire à l'imparfait + participe passé", "Radical futur + imparfait + participe", "Subjonctif + participe"], answer: "Auxiliaire (avoir/être) au conditionnel présent + participe passé", explication: "'J'aurais mangé', 'je serais parti'. Conditionnel passé = avoir/être au conditionnel + participe passé." },
      { question: "Dans 'Si tu avais travaillé, tu aurais réussi', le conditionnel passé exprime…", options: ["L'irréel du passé (hypothèse non réalisée dans le passé)", "Une politesse", "Une information non confirmée", "Un souhait actuel"], answer: "L'irréel du passé (hypothèse non réalisée dans le passé)", explication: "Si + plus-que-parfait → conditionnel passé = l'hypothèse ne s'est pas réalisée dans le passé." },
      { question: "Nous ___ (venir) — Conditionnel passé ?", options: ["serions venus", "aurions venu", "venions", "serions venons"], answer: "serions venus", explication: "'Venir' se conjugue avec 'être'. Conditionnel passé : serions + venus (accordé avec 'nous')." },
      { question: "Ils ___ (manger) — Conditionnel passé ?", options: ["auraient mangé", "seraient mangé", "auraient mangés", "ont mangé"], answer: "auraient mangé", explication: "'Manger' se conjugue avec 'avoir'. Conditionnel passé : auraient + mangé (invariable, COD absent ou après)." },
      { question: "Dans 'Il aurait voulu venir', le conditionnel passé exprime…", options: ["Un regret ou un souhait non réalisé", "Une action future", "Un ordre", "Un fait certain du passé"], answer: "Un regret ou un souhait non réalisé", explication: "'Il aurait voulu venir' = il n'est pas venu et le regrette. Conditionnel passé = regret." },
      { question: "La formule 'au cas où' est suivie du…", options: ["Conditionnel présent", "Subjonctif", "Indicatif futur", "Infinitif"], answer: "Conditionnel présent", explication: "'Au cas où il viendrait, prévenez-moi.' 'Au cas où' + conditionnel. Nuance : éventualité envisagée." },
      { question: "Tu ___ (savoir) — Conditionnel présent ?", options: ["saurais", "sais", "savais", "sauras"], answer: "saurais", explication: "Futur de 'savoir' : saur-. + -ais → tu saurais." },
      { question: "Elle ___ (partir) — Conditionnel passé ?", options: ["serait partie", "aurait partie", "serait parti", "était partie"], answer: "serait partie", explication: "'Partir' = auxiliaire être. Conditionnel passé : serait + partie (accordé féminin singulier avec 'elle')." }
    ],
    3: [
      { question: "L'irréel du présent se construit avec…", options: ["Si + imparfait → conditionnel présent", "Si + présent → futur", "Si + plus-que-parfait → conditionnel passé", "Si + subjonctif → indicatif"], answer: "Si + imparfait → conditionnel présent", explication: "'Si j'étais riche, je voyagerais.' L'hypothèse est contraire à la réalité présente." },
      { question: "L'irréel du passé se construit avec…", options: ["Si + plus-que-parfait → conditionnel passé", "Si + imparfait → conditionnel présent", "Si + présent → futur", "Si + conditionnel → subjonctif"], answer: "Si + plus-que-parfait → conditionnel passé", explication: "'Si tu avais étudié, tu aurais réussi.' L'hypothèse porte sur le passé et ne s'est pas réalisée." },
      { question: "Le conditionnel passé 2ème forme ('il eût dit') ressemble à…", options: ["Le subjonctif plus-que-parfait", "L'imparfait du subjonctif", "Le futur antérieur", "Le passé antérieur"], answer: "Le subjonctif plus-que-parfait", explication: "'Il eût dit' = conditionnel passé 2e forme. Identique au subjonctif plus-que-parfait. Usage exclusivement littéraire." },
      { question: "Dans 'Il serait arrivé hier soir' (info de presse), le conditionnel passé marque…", options: ["Un fait passé non confirmé", "Un regret", "Une hypothèse future", "Une politesse"], answer: "Un fait passé non confirmé", explication: "Conditionnel passé journalistique : l'événement serait passé mais l'auteur ne le certifie pas." },
      { question: "Que je ___ (être) — Imparfait du subjonctif ?", options: ["fusse", "sois", "soyais", "serais"], answer: "fusse", explication: "Imparfait subjonctif de 'être' : que je fusse, tu fusses, il fût… Forme littéraire très soutenue." },
      { question: "Dans 'Sans ton aide, je n'aurais pas réussi', le conditionnel passé exprime…", options: ["L'hypothèse non réalisée dans le passé (condition implicite)", "Un regret sans condition", "Un fait futur", "Une politesse passée"], answer: "L'hypothèse non réalisée dans le passé (condition implicite)", explication: "'Sans ton aide' = 'Si tu ne m'avais pas aidé'. La condition est exprimée par 'sans + GN' au lieu de 'si'." },
      { question: "Je ___ (avoir) — Conditionnel passé ?", options: ["aurais eu", "aurai eu", "avais eu", "ai eu"], answer: "aurais eu", explication: "'Avoir' se conjugue avec lui-même au conditionnel passé : aurais + eu." },
      { question: "Dans un récit au passé, le futur du passé s'exprime avec…", options: ["Le conditionnel présent", "Le futur simple", "L'imparfait", "Le passé composé"], answer: "Le conditionnel présent", explication: "'Il dit qu'il viendrait.' Dans un récit au passé, ce qui était futur s'exprime par le conditionnel (futur du passé)." }
    ]
  },

  francais5Conj_PasseSimple: {
    id: 'francais5Conj_PasseSimple', nom: 'Passé simple', emoji: '🔴', couleur: '#b45309',
    1: [
      { question: "La terminaison de 'je' au passé simple pour les verbes en -er est…", options: ["-ai", "-is", "-us", "-as"], answer: "-ai", explication: "Passé simple verbes en -er : je -ai, tu -as, il -a, nous -âmes, vous -âtes, ils -èrent. Ex : je chantai." },
      { question: "La terminaison de 'il' au passé simple pour les verbes en -ir (2e groupe) est…", options: ["-it", "-a", "-ut", "-ait"], answer: "-it", explication: "Passé simple verbes en -ir : je -is, tu -is, il -it, nous -îmes, vous -îtes, ils -irent. Ex : il finit." },
      { question: "Le passé simple s'emploie principalement dans…", options: ["Les récits littéraires écrits", "La langue parlée familière", "Les dialogues au présent", "Les textes journalistiques modernes"], answer: "Les récits littéraires écrits", explication: "Le passé simple est le temps du récit littéraire. À l'oral, on utilise le passé composé." },
      { question: "Le passé simple de 'avoir' à la 3ème pers. du singulier est…", options: ["il eut", "il avait", "il a eu", "il aura"], answer: "il eut", explication: "Passé simple de 'avoir' : j'eus, tu eus, il eut, nous eûmes, vous eûtes, ils eurent." },
      { question: "Le passé simple de 'être' à la 3ème pers. du singulier est…", options: ["il fut", "il était", "il a été", "il sera"], answer: "il fut", explication: "Passé simple de 'être' : je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent." },
      { question: "La terminaison de 'ils' au passé simple pour les verbes en -er est…", options: ["-èrent", "-aient", "-ont", "-eront"], answer: "-èrent", explication: "3ème personne du pluriel verbes en -er : ils chantèrent, ils aimèrent, ils parlèrent." },
      { question: "Le passé simple exprime des actions…", options: ["Ponctuelles et achevées dans le passé narratif", "Habituelles dans le passé", "En cours dans le passé", "Futures par rapport au passé"], answer: "Ponctuelles et achevées dans le passé narratif", explication: "Passé simple = premier plan du récit. 'Il entra, s'assit et prit la parole.' Imparfait = arrière-plan." },
      { question: "Le passé simple de 'prendre' à la 3ème pers. du singulier est…", options: ["il prit", "il prenait", "il prend", "il prendra"], answer: "il prit", explication: "Passé simple de 'prendre' : je pris, tu pris, il prit, nous prîmes, vous prîtes, ils prirent." }
    ],
    2: [
      { question: "Le passé simple de 'venir' à la 3ème pers. du singulier est…", options: ["il vint", "il venait", "il vient", "il viendra"], answer: "il vint", explication: "Passé simple de 'venir' : je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent." },
      { question: "Le passé simple de 'voir' à la 3ème pers. du pluriel est…", options: ["ils virent", "ils voyaient", "ils voient", "ils verront"], answer: "ils virent", explication: "Passé simple de 'voir' : je vis, tu vis, il vit, nous vîmes, vous vîtes, ils virent." },
      { question: "La terminaison de 'nous' au passé simple (verbes en -er) est…", options: ["-âmes", "-ions", "-ons", "-erons"], answer: "-âmes", explication: "Nous chantâmes, nous parlâmes : accent circonflexe obligatoire sur le 'a' à la 1ère pers. du pluriel." },
      { question: "Le passé simple de 'faire' à la 3ème pers. du singulier est…", options: ["il fit", "il faisait", "il fait", "il fera"], answer: "il fit", explication: "Passé simple de 'faire' : je fis, tu fis, il fit, nous fîmes, vous fîtes, ils firent." },
      { question: "Comment distinguer le passé simple de l'imparfait dans un récit ?", options: ["Passé simple = action ponctuelle (premier plan), imparfait = état/description (arrière-plan)", "Passé simple = description, imparfait = action", "Pas de différence", "Passé simple = dialogue, imparfait = narration"], answer: "Passé simple = action ponctuelle (premier plan), imparfait = état/description (arrière-plan)", explication: "'Le soleil brillait (imparfait). Soudain, une porte claqua (passé simple).' Les deux coexistent dans le récit." },
      { question: "Le passé simple de 'savoir' à la 1ère pers. du singulier est…", options: ["je sus", "je savais", "je sais", "j'ai su"], answer: "je sus", explication: "Passé simple de 'savoir' : je sus, tu sus, il sut, nous sûmes, vous sûtes, ils surent." },
      { question: "Le passé simple de 'mourir' à la 3ème pers. du singulier est…", options: ["il mourut", "il mourait", "il meurt", "il mourra"], answer: "il mourut", explication: "Passé simple de 'mourir' : je mourus, tu mourus, il mourut, nous mourûmes, vous mourûtes, ils moururent." },
      { question: "Le passé simple de 'courir' à la 3ème pers. du pluriel est…", options: ["ils coururent", "ils couraient", "ils courent", "ils courront"], answer: "ils coururent", explication: "Passé simple de 'courir' : je courus, tu courus, il courut, nous courûmes, vous courûtes, ils coururent." }
    ],
    3: [
      { question: "Le passé simple de 'naître' à la 3ème pers. du singulier est…", options: ["il naquit", "il naissait", "il naît", "il naîtra"], answer: "il naquit", explication: "Passé simple de 'naître' : je naquis, tu naquis, il naquit, nous naquîmes, vous naquîtes, ils naquirent." },
      { question: "Le passé simple de 'vaincre' à la 3ème pers. du singulier est…", options: ["il vainquit", "il vainquait", "il vainc", "il vaincra"], answer: "il vainquit", explication: "Passé simple de 'vaincre' : je vainquis, tu vainquis, il vainquit, nous vainquîmes, vous vainquîtes, ils vainquirent." },
      { question: "Le passé antérieur se forme avec…", options: ["Auxiliaire au passé simple + participe passé", "Auxiliaire au passé composé + participe", "Auxiliaire à l'imparfait + participe", "Auxiliaire au futur + participe"], answer: "Auxiliaire au passé simple + participe passé", explication: "'Quand il eut fini, il sortit.' Passé antérieur = antériorité dans un récit passé." },
      { question: "Le passé antérieur de 'manger' à la 3ème pers. du singulier est…", options: ["il eut mangé", "il avait mangé", "il aurait mangé", "il aura mangé"], answer: "il eut mangé", explication: "Passé antérieur : eut (passé simple de 'avoir') + mangé. 'Quand il eut mangé, il se leva.'" },
      { question: "Pourquoi le passé simple est-il peu utilisé à l'oral ?", options: ["Il a été remplacé par le passé composé dans la langue parlée", "Il est trop difficile à prononcer", "Il n'existe que dans les langues écrites", "Il est réservé aux poèmes"], answer: "Il a été remplacé par le passé composé dans la langue parlée", explication: "À l'oral, on dit 'il est venu' (passé composé). 'Il vint' appartient au registre écrit ou très soutenu." },
      { question: "Le passé simple de 'résoudre' à la 3ème pers. du singulier est…", options: ["il résolut", "il résolvait", "il résout", "il résoudra"], answer: "il résolut", explication: "Passé simple de 'résoudre' : je résolus, tu résolus, il résolut, nous résolûmes, vous résolûtes, ils résolurent." },
      { question: "Le passé simple de 'plaire' à la 3ème pers. du singulier est…", options: ["il plut", "il plaisait", "il plaît", "il plaira"], answer: "il plut", explication: "Passé simple de 'plaire' : je plus, tu plus, il plut, nous plûmes, vous plûtes, ils plurent." },
      { question: "Quel est l'effet stylistique du passé simple dans un récit littéraire ?", options: ["Il donne un caractère solennel, distancié et propre à la narration fictive", "Il modernise le texte", "Il rapproche le récit de la langue parlée", "Il exprime la simultanéité"], answer: "Il donne un caractère solennel, distancié et propre à la narration fictive", explication: "Le passé simple crée une distance temporelle et stylistique : il signale qu'on est dans le récit littéraire écrit." }
    ]
  },

  // ── SOUS-CHAPITRES ORTHOGRAPHE 5ÈME ──
  francais5Ortho_AccordPP: {
    id: 'francais5Ortho_AccordPP', nom: 'Accord du participe passé', emoji: '✅', couleur: '#dc2626',
    1: [
      { question: "Avec l'auxiliaire ÊTRE, le participe passé s'accorde avec…", options: ["Le sujet", "Le COD", "Il est toujours invariable", "L'auxiliaire"], answer: "Le sujet", explication: "'Elles sont arrivées.' 'Arrivées' s'accorde avec 'elles' (féminin pluriel). Avec être, PP = attribut du sujet." },
      { question: "Avec l'auxiliaire AVOIR, le participe passé s'accorde avec…", options: ["Le COD placé AVANT le verbe", "Le sujet", "Toujours masculin singulier", "L'auxiliaire 'avoir'"], answer: "Le COD placé AVANT le verbe", explication: "'La lettre qu'il a écrite.' 'qu'' = COD féminin sing. placé avant → 'écrite' accordé." },
      { question: "'Les fleurs que j'ai ___ .' (cueillie/cueillies/cueilli)", options: ["cueillies", "cueillie", "cueilli", "cueillie"], answer: "cueillies", explication: "'que' reprend 'les fleurs' (COD féminin pluriel) avant 'ai cueilli' → accord féminin pluriel : 'cueillies'." },
      { question: "'Elle s'est ___.' (levée/levé/levées)", options: ["levée", "levé", "levées", "levés"], answer: "levée", explication: "Verbe pronominal avec être. 'se' = COD. COD avant → accord féminin singulier : 'levée'." },
      { question: "'Il a ___ ses chaussures.' (mis/mises/mise)", options: ["mis", "mises", "mise", "mettre"], answer: "mis", explication: "'ses chaussures' est COD mais placé APRÈS 'a mis' → pas d'accord. 'Mis' reste invariable." },
      { question: "'Les romans qu'elle a ___ .' (lu/lus/lue/lues)", options: ["lus", "lu", "lue", "lues"], answer: "lus", explication: "'que' reprend 'les romans' (COD masculin pluriel) avant → accord masculin pluriel : 'lus'." },
      { question: "'Elles se sont ___ les mains.' (lavé/lavées/lavée)", options: ["lavé", "lavées", "lavée", "lavés"], answer: "lavé", explication: "Les mains = COD, mais placé APRÈS → pas d'accord. 'se' est ici COI. 'Lavé' invariable." },
      { question: "'Nous sommes ___ hier.' (rentrés/rentrées/rentré) — locuteurs masculins", options: ["rentrés", "rentré", "rentrées", "rentré"], answer: "rentrés", explication: "Auxiliaire être + sujet masculin pluriel 'nous' → accord masculin pluriel : 'rentrés'." }
    ],
    2: [
      { question: "'Les enfants se sont ___ .' (disputés/disputé)", options: ["disputés", "disputé", "disputées", "disputer"], answer: "disputés", explication: "Verbe pronominal réciproque. 'se' = COD. COD avant → accord avec 'les enfants' (masc. plur.) : 'disputés'." },
      { question: "Le participe passé 'fait' suivi d'un infinitif est…", options: ["Toujours invariable", "Accordé avec le COD", "Accordé avec le sujet", "Accordé avec l'auxiliaire"], answer: "Toujours invariable", explication: "'Elle les a fait partir.' 'Fait' + infinitif → toujours invariable. L'agent de l'action est dans l'infinitif." },
      { question: "'Combien de pages as-tu ___ ?' (lu/lues/lus)", options: ["lues", "lu", "lus", "lue"], answer: "lues", explication: "'Combien de pages' = COD féminin pluriel avant → accord féminin pluriel : 'lues'." },
      { question: "'Elles se sont ___ à cette idée.' (habituées/habitué)", options: ["habituées", "habitué", "habituée", "habitués"], answer: "habituées", explication: "Verbe pronominal : 's'habituer'. 'se' = COD. Accord avec le sujet féminin pluriel : 'habituées'." },
      { question: "'La décision qu'il a ___ de prendre.' (pris/prise)", options: ["prise", "pris", "prises", "prendre"], answer: "prise", explication: "'que' reprend 'la décision' (COD féminin singulier) avant → accord : 'prise'." },
      { question: "'Les efforts qu'il a ___ sont récompensés.' (fournis/fournie/fourni)", options: ["fournis", "fourni", "fournie", "fournis"], answer: "fournis", explication: "'que' reprend 'les efforts' (COD masculin pluriel) avant → accord masculin pluriel : 'fournis'." },
      { question: "Le participe passé des verbes impersonnels est…", options: ["Toujours invariable", "Accordé avec le sujet 'il'", "Accordé avec le COD", "Variable"], answer: "Toujours invariable", explication: "'Les chaleurs qu'il a fait.' 'Il' impersonnel → 'fait' invariable." },
      { question: "'Les lettres qu'il s'est ___ .' (écrites/écrit)", options: ["écrites", "écrit", "écrits", "écrite"], answer: "écrites", explication: "Verbe pronominal : 'se' = COI ici. 'que' = COD féminin pluriel → accord : 'écrites'." }
    ],
    3: [
      { question: "'Elle s'est ___ de lui.' (souvenue/souvenu)", options: ["souvenue", "souvenu", "souvenus", "souvenues"], answer: "souvenue", explication: "'Se souvenir' : 'se' = COD. Accord avec le sujet féminin sing. : 'souvenue'." },
      { question: "'Ils se sont ___ la main.' (serré/serrés/serré)", options: ["serré", "serrés", "serrée", "serrées"], answer: "serré", explication: "'la main' = COD placé APRÈS → pas d'accord. 'se' = COI. Invariable." },
      { question: "Avec 'laisser + infinitif', le participe passé 'laissé' est…", options: ["Parfois accordé si le sujet de l'infinitif est le COD antéposé", "Toujours invariable", "Toujours accordé", "Accordé avec l'auxiliaire"], answer: "Parfois accordé si le sujet de l'infinitif est le COD antéposé", explication: "'Je les ai laissés partir.' (ils partent → accord possible). Rectif. 1990 : invariable aussi admis." },
      { question: "'Les chansons qu'elle a ___ chanter.' (entendu/entendues)", options: ["entendu", "entendues", "entendus", "entendue"], answer: "entendu", explication: "Verbe de perception + infinitif : 'que' = sujet de l'infinitif → invariable." },
      { question: "Le participe passé de 'courir' est invariable car…", options: ["'Courir' est intransitif et n'a pas de COD", "C'est une règle arbitraire", "Il se conjugue avec être", "Le COD est toujours après"], answer: "'Courir' est intransitif et n'a pas de COD", explication: "'Elle a couru.' Courir = intransitif → aucun accord possible." },
      { question: "'La récompense qu'elle s'est ___ .' (méritée/mérité)", options: ["méritée", "mérité", "mérités", "méritées"], answer: "méritée", explication: "'se' = COI. 'que' = COD féminin sing. antéposé → accord : 'méritée'." },
      { question: "'Les nouvelles qu'il nous a ___ .' (apportées/apporté)", options: ["apportées", "apporté", "apportés", "apportée"], answer: "apportées", explication: "'que' reprend 'les nouvelles' (COD féminin pluriel) antéposé → accord : 'apportées'." },
      { question: "Le participe passé 'eu' dans 'les occasions qu'il a eu de partir' est invariable car…", options: ["Le vrai COD est l'infinitif 'de partir', pas 'les occasions'", "'Eu' est toujours invariable", "Le sujet est masculin", "Il n'y a pas de COD antéposé"], answer: "Le vrai COD est l'infinitif 'de partir', pas 'les occasions'", explication: "'Avoir l'occasion de partir' → l'occasion est complément du nom d'un infinitif-COD. 'Eu' invariable." }
    ]
  },

  francais5Ortho_HomophonesAvances: {
    id: 'francais5Ortho_HomophonesAvances', nom: 'Homophones avancés', emoji: '🔤', couleur: '#dc2626',
    1: [
      { question: "Choisissez : 'Je ne sais pas ___ faire.' (quoi/quel/qu'en)", options: ["quoi", "quel", "qu'en", "que"], answer: "quoi", explication: "'Quoi' = pronom interrogatif tonique. 'Je ne sais pas quoi faire.' Après une préposition ou en fin de proposition = quoi." },
      { question: "'Davantage' s'écrit…", options: ["En un mot (adverbe = plus)", "En deux mots 'd'avantage'", "Les deux sont possibles", "Avec un accent"], answer: "En un mot (adverbe = plus)", explication: "'Davantage' (adverbe = plus) toujours en un mot. 'D'avantage' n'existe pas en français standard." },
      { question: "'Il faut partir ___ tôt.' (plus/plutôt)", options: ["plus tôt (en deux mots)", "plutôt (en un mot)", "plus (seul)", "plustôt"], answer: "plus tôt (en deux mots)", explication: "'Plus tôt' (2 mots) = antérieurement. 'Plutôt' (1 mot) = de préférence. Ici contexte temporel → 'plus tôt'." },
      { question: "'___ que de se plaindre, agissons.' (plutôt/plus tôt)", options: ["Plutôt", "Plus tôt", "Plustôt", "Plus"], answer: "Plutôt", explication: "'Plutôt que de…' = de préférence à. Test : remplacer par 'de préférence' → si ça marche → 'plutôt'." },
      { question: "Choisissez : '___ que soit ta réponse, je t'écouterai.' (Quelle/Quel/Quelque)", options: ["Quelle", "Quel", "Quelque", "Qu'elle"], answer: "Quelle", explication: "'Quelle que soit ta réponse' → s'accorde avec 'réponse' (féminin singulier) : 'quelle'. 'Quel que' + verbe être s'accorde." },
      { question: "Choisissez : '___ que soient leurs efforts…' (Quels/Quel/Quelque)", options: ["Quels", "Quel", "Quelque", "Qu'els"], answer: "Quels", explication: "'Quels que soient leurs efforts' → accord avec 'leurs efforts' (masculin pluriel) : 'quels'." },
      { question: "Choisissez : 'Ils sont partis ___ faire de la randonnée.' (sans/s'en)", options: ["sans", "s'en", "san", "sens"], answer: "sans", explication: "'Partis sans faire…' = 'sans' préposition de privation. 'S'en' = se + en (pronom). Pas de pronom ici." },
      { question: "Choisissez : '___ longtemps qu'il est parti.' (Voilà/Vois là)", options: ["Voilà", "Vois là", "Voilà qu'", "Voila"], answer: "Voilà", explication: "'Voilà longtemps que…' = expression de durée. 'Voilà' (presentatif) + durée. Sans accent sur le 'a'." }
    ],
    2: [
      { question: "Choisissez : 'Il ___ souvient de cette nuit.' (se/ce)", options: ["se", "ce", "ceux", "ses"], answer: "se", explication: "'Il se souvient.' = verbe pronominal. 'se' = pronom réfléchi. 'Ce' = déterminant ou pronom démonstratif." },
      { question: "Choisissez : '___ qu'il en soit, agissons.' (quoi/quel/quelque)", options: ["Quoi", "Quel", "Quelque", "Qu'elle"], answer: "Quoi", explication: "'Quoi qu'il en soit' = quelle que soit la situation. 'Quoi que' (2 mots) = concession indéfinie." },
      { question: "Choisissez : 'Il travaille mieux ___ tu ne le penses.' (que/qu'en/qu'on)", options: ["que", "qu'en", "qu'on", "quel"], answer: "que", explication: "'Mieux que tu ne le penses.' 'que' introduit la comparative. 'Qu'en' = que + en. 'Qu'on' = que + on." },
      { question: "Choisissez : 'Je me demande ___ tu en penses.' (ce que/se que/ceux que)", options: ["ce que", "se que", "ceux que", "c'est que"], answer: "ce que", explication: "'Ce que' = pronom interrogatif/relatif neutre. 'Se' = pronom réfléchi, ne s'emploie pas ici." },
      { question: "Choisissez : '___ soir, il rentrera à minuit.' (Ce/Se)", options: ["Ce", "Se", "Ceux", "Ses"], answer: "Ce", explication: "'Ce soir' = déterminant démonstratif + nom. Test : remplacer 'ce' par 'cet' devant voyelle → si ça marche = démonstratif." },
      { question: "Choisissez : 'Il ___ des rumeurs qui circulent.' (sait/s'est/set)", options: ["sait", "s'est", "set", "ses"], answer: "sait", explication: "'Il sait (des rumeurs).' = verbe savoir à la 3ème sing. 'S'est' = pronom + auxiliaire être." },
      { question: "Choisissez : 'Elle ___ souvient de tout.' (s'en/sans/s'an)", options: ["s'en", "sans", "s'an", "sain"], answer: "s'en", explication: "'Elle s'en souvient.' = se + en (pronom adverbial). Toujours élision : s'en." },
      { question: "Choisissez : 'Malgré ___ efforts, il a échoué.' (ses/ces/c'est)", options: ["ses", "ces", "c'est", "s'est"], answer: "ses", explication: "'Malgré ses efforts' : 'ses' = déterminant possessif (ses = à lui). 'Ces' = démonstratif (ces efforts-là)." }
    ],
    3: [
      { question: "Choisissez : 'Elle s'en est ___ à lui.' (pris/prise/pri)", options: ["prise", "pris", "pri", "prît"], answer: "prise", explication: "'S'en prendre à' : 'se' est COD → accord avec le sujet féminin singulier : 'prise'." },
      { question: "Choisissez : '___ venu ou non, la réunion aura lieu.' (Qu'il soit/Quel qu'il soit)", options: ["Qu'il soit", "Quel qu'il soit", "Quelqu'il soit", "Qu'il serait"], answer: "Qu'il soit", explication: "'Qu'il soit venu ou non' = conjonction que + subjonctif. 'Quel que soit' s'emploie avec un attribut du sujet." },
      { question: "Choisissez : '___ les difficultés, il persévère.' (Malgré/Mal gré)", options: ["Malgré", "Mal gré", "Mal grés", "Malgres"], answer: "Malgré", explication: "'Malgré' = préposition (en un mot, invariable). 'Mal gré' n'est pas correct en français moderne." },
      { question: "Choisissez : 'Je l'ai reconnu ___ sa démarche.' (à/a/â)", options: ["à", "a", "â", "as"], answer: "à", explication: "'À sa démarche' = préposition. Test : remplacer par 'avait' → impossible → 'à' (préposition)." },
      { question: "Choisissez : '___ fait, il n'en dira rien.' (Cela/Ce la/Ça la)", options: ["Cela", "Ce la", "Ça la", "Cella"], answer: "Cela", explication: "'Cela fait' = pronom démonstratif 'cela' + verbe. S'écrit en un mot. 'Ça' est la forme familière de 'cela'." },
      { question: "Choisissez : 'Il agit ___ le lui avait appris son maître.' (comme/quand/qu'on)", options: ["comme", "quand", "qu'on", "con"], answer: "comme", explication: "'Comme' = conjonction de manière. 'Il agit comme son maître le lui avait appris.'" },
      { question: "Choisissez : 'Il ne ___ pas de rentrer tard.' (s'agit/sagit/c'agit)", options: ["s'agit", "sagit", "c'agit", "se agit"], answer: "s'agit", explication: "'Il s'agit de' = expression impersonnelle. 's'agit' = se + agit. Élision : s' devant voyelle." },
      { question: "Choisissez : 'Il travaille ___ que par obligation.' (plus/plutôt/plustôt)", options: ["plus", "plutôt", "plus tôt", "plustôt"], answer: "plus", explication: "'Il ne travaille plus que par obligation.' = seulement, uniquement. 'Plus que' de restriction ≠ 'plutôt que' de préférence." }
    ]
  },

  // ── SOUS-CHAPITRES VOCABULAIRE 5ÈME ──
  francais5Vocab_Etymologie: {
    id: 'francais5Vocab_Etymologie', nom: 'Étymologie & racines', emoji: '🏛️', couleur: '#0369a1',
    1: [
      { question: "Le radical latin 'scrib-/script-' signifie…", options: ["Écrire", "Lire", "Voir", "Parler"], answer: "Écrire", explication: "Scribe, manuscrit, inscription, description, prescription → tous dérivés de 'scribere' = écrire en latin." },
      { question: "Le radical grec 'chronos' signifie…", options: ["Temps", "Corps", "Eau", "Lumière"], answer: "Temps", explication: "Chronologie, chronomètre, anachronisme, synchroniser, chronique → 'chronos' = temps." },
      { question: "Le radical 'port-' (latin portare) signifie…", options: ["Porter", "Voir", "Parler", "Prendre"], answer: "Porter", explication: "Porter, transport, exporter, importer, porteur, rapport → radical 'port-' = porter." },
      { question: "Le radical 'graph-' (grec graphein) signifie…", options: ["Écrire, tracer", "Lire", "Parler", "Voir"], answer: "Écrire, tracer", explication: "Graphie, orthographe, biographie, photographie, calligraphie → 'graphein' = écrire." },
      { question: "Le radical 'phon-' (grec phonê) signifie…", options: ["Son, voix", "Lumière", "Eau", "Terre"], answer: "Son, voix", explication: "Téléphone, microphone, phonétique, symphonie → 'phonê' = voix, son." },
      { question: "Le radical 'bio-' (grec bios) signifie…", options: ["Vie", "Mort", "Animal", "Plante"], answer: "Vie", explication: "Biologie, biographie, biodiversité, antibiotique, amphibie → 'bios' = vie." },
      { question: "Le radical 'geo-' (grec gê) signifie…", options: ["Terre", "Mer", "Ciel", "Feu"], answer: "Terre", explication: "Géographie, géologie, géomètre, géopolitique → 'gê' = terre." },
      { question: "Le radical 'aqua-' (latin) signifie…", options: ["Eau", "Feu", "Air", "Terre"], answer: "Eau", explication: "Aquatique, aqueduc, aquarium, aquarelle → 'aqua' = eau en latin." }
    ],
    2: [
      { question: "Le radical 'logos' (grec) signifie…", options: ["Discours, raison, science", "Eau", "Vie", "Temps"], answer: "Discours, raison, science", explication: "Biologie, psychologie, dialogue, monologue, technologie → 'logos' = discours, raison." },
      { question: "Le radical 'therm-' (grec thermos) signifie…", options: ["Chaud, chaleur", "Froid", "Eau", "Lumière"], answer: "Chaud, chaleur", explication: "Thermomètre, thermostat, hypothermie, hyperthermie → 'thermos' = chaud." },
      { question: "Le radical 'anthrop-' (grec anthropos) signifie…", options: ["Être humain", "Animal", "Plante", "Dieu"], answer: "Être humain", explication: "Anthropologie, philanthropie, misanthrope, anthropomorphe → 'anthropos' = homme." },
      { question: "Le radical 'dem-' (grec demos) signifie…", options: ["Peuple", "Dieu", "Maison", "Loi"], answer: "Peuple", explication: "Démocratie, démographie, épidémie, pandémie → 'demos' = peuple." },
      { question: "Le radical 'crat-/cratie' (grec kratos) signifie…", options: ["Pouvoir, gouvernement", "Peuple", "Élection", "Loi"], answer: "Pouvoir, gouvernement", explication: "Démocratie, aristocratie, bureaucratie, technocratie → 'kratos' = force, pouvoir." },
      { question: "Le radical 'path-' (grec pathos) signifie…", options: ["Souffrance, émotion", "Joie", "Force", "Lumière"], answer: "Souffrance, émotion", explication: "Pathologie, sympathie, empathie, apathie, antipathie → 'pathos' = émotion, souffrance." },
      { question: "Le doublet 'fragile/frêle' illustre…", options: ["Deux mots issus du même étymon latin par deux voies différentes", "Deux synonymes parfaits", "Deux antonymes", "Deux familles différentes"], answer: "Deux mots issus du même étymon latin par deux voies différentes", explication: "'Fragile' (savant) et 'frêle' (populaire) viennent tous deux du latin 'fragilis'. Même origine, deux formes." },
      { question: "Le radical 'poly-' (grec polus) signifie…", options: ["Plusieurs, nombreux", "Un seul", "Grand", "Petit"], answer: "Plusieurs, nombreux", explication: "Polysémie, polygone, polyglotte, polygamie → 'polus' = nombreux." }
    ],
    3: [
      { question: "Un mot savant est souvent construit à partir de…", options: ["Racines latines ou grecques directement empruntées", "Mots courants assemblés par hasard", "Abréviations", "Onomatopées"], answer: "Racines latines ou grecques directement empruntées", explication: "Le vocabulaire scientifique (médecine, biologie) est majoritairement gréco-latin : cardiologie, pneumologie, neurone." },
      { question: "Le radical 'card-' (grec kardia) signifie…", options: ["Cœur", "Sang", "Poumon", "Cerveau"], answer: "Cœur", explication: "Cardiologie, cardiaque, cardiovasculaire → 'kardia' = cœur en grec." },
      { question: "Le radical 'neur-' (grec neuron) signifie…", options: ["Nerf, neurone", "Sang", "Muscle", "Os"], answer: "Nerf, neurone", explication: "Neurologie, neurone, neurosciences → 'neuron' = nerf." },
      { question: "Le radical 'psych-' (grec psychê) signifie…", options: ["Âme, esprit", "Corps", "Sens", "Raison"], answer: "Âme, esprit", explication: "Psychologie, psychiatrie, psychanalyse, psychose → 'psychê' = âme, souffle de vie." },
      { question: "Le radical 'vit-/viv-' (latin vita/vivere) signifie…", options: ["Vie, vivre", "Mort", "Mouvement", "Couleur"], answer: "Vie, vivre", explication: "Vital, vitalité, vivre, survivre, vivifiant, revitaliser → 'vita' = vie en latin." },
      { question: "La famille de mots de 'terra' (latin) inclut…", options: ["Terrestre, territoire, enterrer, Méditerranée, terrain", "Aquatique, maritime, fluvial", "Céleste, aérien, volatile", "Igné, volcanique, ardent"], answer: "Terrestre, territoire, enterrer, Méditerranée, terrain", explication: "'Terra' = terre. Méditerranée = mer au milieu des terres. Tout tourne autour de la terre." },
      { question: "Le radical 'luc-/lum-/lux-' (latin lux) signifie…", options: ["Lumière", "Nuit", "Feu", "Couleur"], answer: "Lumière", explication: "Lucide, lumineux, illuminer, translucide → 'lux/lucis' = lumière en latin." },
      { question: "L'étymologie populaire est…", options: ["Une fausse explication de l'origine d'un mot par ressemblance sonore erronée", "L'étymologie accessible au grand public", "L'étude des mots du peuple", "Une méthode de formation des mots"], answer: "Une fausse explication de l'origine d'un mot par ressemblance sonore erronée", explication: "Ex : croire que 'chausser' vient de 'chaud'. Faux — vient du latin 'calceus' (chaussure). L'étymologie populaire trompe souvent." }
    ]
  },

  francais5Vocab_Registres: {
    id: 'francais5Vocab_Registres', nom: 'Registres de langue', emoji: '📊', couleur: '#0369a1',
    1: [
      { question: "Le registre familier s'emploie…", options: ["Entre amis, en famille, dans des situations décontractées", "Dans les dissertations", "Dans les discours officiels", "Dans les textes littéraires classiques"], answer: "Entre amis, en famille, dans des situations décontractées", explication: "Registre familier : bouquin, boulot, bosser, sympa, truc. Inadapté à l'écrit scolaire formel." },
      { question: "Le registre courant est…", options: ["La langue standard, neutre, comprise par tous", "La langue élaborée des textes littéraires", "Le langage informel entre amis", "Le jargon des spécialistes"], answer: "La langue standard, neutre, comprise par tous", explication: "Le registre courant est la norme : ni trop formel ni trop familier. Langue des médias et des manuels scolaires." },
      { question: "Le registre soutenu utilise…", options: ["Un vocabulaire élaboré, des tournures complexes, des termes rares", "Des mots courants très simples", "Des abréviations", "Un vocabulaire exclusivement anglophone"], answer: "Un vocabulaire élaboré, des tournures complexes, des termes rares", explication: "Registre soutenu : 'demeure', 'trépasser', 'nonobstant'. Langue des textes littéraires classiques." },
      { question: "L'argot est un registre caractérisé par…", options: ["Un vocabulaire codé propre à un groupe social", "Une langue universellement comprise", "Le vocabulaire officiel", "La langue administrative"], answer: "Un vocabulaire codé propre à un groupe social", explication: "L'argot (flic, bagnole, thune) crée une identité de groupe et exclut les non-initiés." },
      { question: "Le registre technique est caractérisé par…", options: ["Un vocabulaire spécialisé propre à un domaine", "La simplicité et l'accessibilité", "Le registre familier des experts", "La beauté des métaphores"], answer: "Un vocabulaire spécialisé propre à un domaine", explication: "Chaque domaine a son jargon : médical (diagnostic), juridique (plaignant), informatique (algorithme)." },
      { question: "'Bouquin' correspond à quel mot en registre courant ?", options: ["Livre", "Cahier", "Magazine", "Document"], answer: "Livre", explication: "Bouquin (familier) = livre (courant) = ouvrage (soutenu). Même référent, trois registres." },
      { question: "'Trépasser' correspond à quel mot en registre courant ?", options: ["Mourir", "Partir", "S'endormir", "Disparaître"], answer: "Mourir", explication: "Mourir (courant), décéder (soutenu/admin), trépasser (soutenu littéraire), crever (familier). Même sens, registres différents." },
      { question: "Adapter son registre de langue, c'est…", options: ["Choisir des mots appropriés au contexte et au destinataire", "Toujours utiliser le soutenu", "Toujours utiliser le familier", "Ignorer le destinataire"], answer: "Choisir des mots appropriés au contexte et au destinataire", explication: "On parle différemment à un ami (familier), à un inconnu (courant), à un directeur (soutenu)." }
    ],
    2: [
      { question: "Un anglicisme est…", options: ["Un mot emprunté à l'anglais", "Un mot savant latin", "Un mot régional", "Un néologisme français"], answer: "Un mot emprunté à l'anglais", explication: "Email, week-end, selfie, cool sont des anglicismes. Certains ont des équivalents français : courriel, fin de semaine." },
      { question: "Le registre poétique se caractérise par…", options: ["La densité des images, la musicalité et l'attention au signifiant", "La précision technique", "La neutralité", "L'absence de figures de style"], answer: "La densité des images, la musicalité et l'attention au signifiant", explication: "En poésie, le son et le rythme comptent autant que le sens. Chaque mot est choisi pour sa musique et ses résonances." },
      { question: "Le registre épique crée…", options: ["L'impression de grandeur, d'héroïsme et d'éternité", "Un effet comique", "Une familiarité", "Une distance scientifique"], answer: "L'impression de grandeur, d'héroïsme et d'éternité", explication: "Registre épique : hyperboles, métaphores guerrières, style sublime pour magnifier les héros." },
      { question: "Dans un texte officiel, le registre approprié est…", options: ["Courant à soutenu (jamais familier)", "Familier uniquement", "Argotique", "Poétique"], answer: "Courant à soutenu (jamais familier)", explication: "Rapport, lettre de candidature, texte administratif → registre courant à soutenu, précis et impersonnel." },
      { question: "Le registre comique peut utiliser…", options: ["L'ironie, l'hyperbole, le jeu de mots, le familier volontaire", "Exclusivement le soutenu", "Uniquement les néologismes", "Des termes techniques"], answer: "L'ironie, l'hyperbole, le jeu de mots, le familier volontaire", explication: "Le comique joue sur les contrastes de registre, l'ironie, l'exagération et le calembour." },
      { question: "Le registre tragique se caractérise par…", options: ["Un vocabulaire grave, des images de mort, de destin et de fatalité", "La légèreté et l'humour", "La précision scientifique", "Le familier"], answer: "Un vocabulaire grave, des images de mort, de destin et de fatalité", explication: "Registre tragique : champ lexical de la mort, du destin. Phrases solennelles, rythme lent et grave." },
      { question: "Le registre lyrique exprime…", options: ["Les émotions intimes et personnelles du locuteur", "Des faits objectifs", "Des arguments logiques", "Des descriptions techniques"], answer: "Les émotions intimes et personnelles du locuteur", explication: "Registre lyrique : expression du 'moi', émotions (amour, mélancolie). Première personne, métaphores expressives." },
      { question: "Le registre didactique vise à…", options: ["Instruire, expliquer, transmettre un savoir", "Divertir uniquement", "Convaincre émotionnellement", "Exprimer des émotions"], answer: "Instruire, expliquer, transmettre un savoir", explication: "Les manuels scolaires, encyclopédies, articles de vulgarisation relèvent du registre didactique." }
    ],
    3: [
      { question: "La diastratique linguistique étudie…", options: ["La variation de la langue selon les groupes sociaux", "La variation selon les régions", "L'évolution historique", "La phonologie uniquement"], answer: "La variation de la langue selon les groupes sociaux", explication: "La diastratique = variation sociale. Les registres et les sociolectes (argot de groupe) en relèvent." },
      { question: "Le sociolecte est…", options: ["La variété de langue propre à un groupe social", "La langue officielle d'un pays", "La langue écrite uniquement", "Le registre technique d'une discipline"], answer: "La variété de langue propre à un groupe social", explication: "Chaque groupe (adolescents, médecins, avocats…) développe son propre vocabulaire : c'est un sociolecte." },
      { question: "L'hyperregistre (mélange ironique de registres) consiste à…", options: ["Employer un registre inattendu pour créer un effet comique ou critique", "Utiliser toujours le même registre", "Mélanger deux langues", "Corriger un texte"], answer: "Employer un registre inattendu pour créer un effet comique ou critique", explication: "Du soutenu dans un contexte trivial, ou du familier dans un discours officiel : décalage comique ou satirique." },
      { question: "La diaphasique linguistique étudie…", options: ["La variation de la langue selon les situations de communication", "La variation régionale", "La variation historique", "La variation sociale"], answer: "La variation de la langue selon les situations de communication", explication: "La diaphasique = variation situationnelle. On parle différemment en famille, au travail, avec des inconnus." },
      { question: "Le registre élégiaque exprime spécifiquement…", options: ["La plainte, le deuil et la mélancolie", "La joie et l'enthousiasme", "La précision scientifique", "L'humour et l'ironie"], answer: "La plainte, le deuil et la mélancolie", explication: "Lyrique = émotions diverses. Élégiaque = sous-registre lyrique centré sur la plainte, le regret, la mélancolie." },
      { question: "La connotation d'un mot varie selon…", options: ["La culture, le contexte et le registre", "La longueur du mot uniquement", "La catégorie grammaticale", "Le dictionnaire utilisé"], answer: "La culture, le contexte et le registre", explication: "'Nuit' : mystère (littéraire), sécurité (familial), danger (policier). La connotation est culturellement variable." },
      { question: "L'intertextualité de registre dans un texte littéraire désigne…", options: ["Le jeu avec différents registres pour créer du sens ou de l'humour", "La citation d'un autre texte", "La traduction dans un autre registre", "L'adaptation d'un roman en pièce"], answer: "Le jeu avec différents registres pour créer du sens ou de l'humour", explication: "Mêler épique et comique, lyrique et trivial : les contrastes de registre créent ironie, parodie ou sublimation." },
      { question: "Le registre satirique vise à…", options: ["Critiquer et railler les travers de la société par le rire ou l'ironie", "Simplement divertir", "Informer objectivement", "Exprimer des émotions personnelles"], answer: "Critiquer et railler les travers de la société par le rire ou l'ironie", explication: "La satire (Voltaire, Molière) dénonce en faisant rire. Le rire est arme de critique sociale." }
    ]
  },

  francais5Vocab_Champs: {
    id: 'francais5Vocab_Champs', nom: 'Champs lexicaux & sémantiques', emoji: '🗺️', couleur: '#0369a1',
    1: [
      { question: "Un champ lexical est un ensemble de mots…", options: ["Appartenant au même thème ou domaine", "Qui riment entre eux", "De même nature grammaticale", "De même longueur"], answer: "Appartenant au même thème ou domaine", explication: "Champ lexical de la mer : vague, phare, bateau, tempête, sable, marin. Ces mots gravitent autour du même thème." },
      { question: "La polysémie signifie qu'un mot a…", options: ["Plusieurs sens selon le contexte", "Un seul sens précis", "Aucun sens propre", "Uniquement un sens figuré"], answer: "Plusieurs sens selon le contexte", explication: "'Opération' = calcul / chirurgie / mission militaire. Le contexte détermine le sens activé." },
      { question: "Le champ sémantique d'un mot regroupe…", options: ["Tous ses sens différents selon les contextes", "Des mots du même thème", "Ses synonymes uniquement", "Sa famille de mots"], answer: "Tous ses sens différents selon les contextes", explication: "Champ sémantique de 'table' : meuble / table des matières / table de multiplication / table de jeu." },
      { question: "Identifier le champ lexical dominant d'un texte permet de…", options: ["Repérer le thème et l'atmosphère", "Compter les syllabes", "Trouver les rimes", "Identifier l'auteur"], answer: "Repérer le thème et l'atmosphère", explication: "Si un poème revient sur lumière, soleil, or, feu → champ lexical de la lumière = thème dominant." },
      { question: "L'isotopie dans un texte littéraire est…", options: ["La récurrence d'un même champ lexical créant une cohérence thématique", "La répétition d'un seul mot", "La présence de synonymes", "Un procédé de versification"], answer: "La récurrence d'un même champ lexical créant une cohérence thématique", explication: "Une isotopie du froid (neige, glace, frisson, hiver) crée une atmosphère et un sens dans le texte." },
      { question: "Les mots 'voir', 'regarder', 'observer', 'contempler' appartiennent au champ lexical de…", options: ["La vision", "La parole", "L'ouïe", "Le toucher"], answer: "La vision", explication: "Ces verbes de perception visuelle forment un champ lexical. Nuances : voir (passif), regarder (actif), observer (attentif), contempler (admiratif)." },
      { question: "Un hyperonyme est un mot…", options: ["Plus général qui inclut d'autres mots (genre > espèces)", "Synonyme exact", "Contraire", "Plus spécifique"], answer: "Plus général qui inclut d'autres mots (genre > espèces)", explication: "'Animal' inclut 'chien', 'chat', 'oiseau'. 'Fleur' inclut 'rose', 'tulipe', 'dahlia'." },
      { question: "Un hyponyme est un mot…", options: ["Plus spécifique, inclus dans un hyperonyme", "Plus général", "Synonyme", "Contraire"], answer: "Plus spécifique, inclus dans un hyperonyme", explication: "'Rose' est hyponyme de 'fleur', qui est hyponyme de 'végétal'. L'hyponyme = l'espèce particulière." }
    ],
    2: [
      { question: "La dénotation d'un mot est…", options: ["Son sens objectif et neutre (défini dans le dictionnaire)", "Son sens subjectif et émotionnel", "Ses synonymes", "Son étymologie"], answer: "Son sens objectif et neutre (défini dans le dictionnaire)", explication: "La dénotation = sens premier, stable, lexicographique. Partagé par tous les locuteurs." },
      { question: "La connotation d'un mot est…", options: ["Les valeurs, images et émotions qu'il évoque subjectivement", "Son sens dans le dictionnaire", "Son étymologie", "Sa catégorie grammaticale"], answer: "Les valeurs, images et émotions qu'il évoque subjectivement", explication: "'Serpent' connote trahison, danger. La connotation varie selon les cultures et contextes." },
      { question: "Le sens péjoratif d'un mot exprime…", options: ["Un jugement négatif implicite", "Un jugement positif", "Une neutralité absolue", "Une précision technique"], answer: "Un jugement négatif implicite", explication: "'Politicien' est péjoratif (manipulation implicite) vs 'homme politique' (neutre)." },
      { question: "Le sens mélioratif d'un mot exprime…", options: ["Un jugement positif implicite", "Un jugement négatif", "La neutralité", "Un sens technique"], answer: "Un jugement positif implicite", explication: "'Résidence' est mélioratif vs 'logement' (neutre). La connotation méliorative valorise." },
      { question: "Analyser le champ lexical d'un texte argumentatif permet de…", options: ["Identifier les valeurs et l'idéologie défendues par l'auteur", "Compter les arguments", "Trouver la thèse uniquement", "Identifier les connecteurs"], answer: "Identifier les valeurs et l'idéologie défendues par l'auteur", explication: "Si l'auteur utilise un champ lexical de la liberté (émancipation, droit, dignité), ses valeurs transparaissent." },
      { question: "La métaphore filée exploite un champ lexical sur…", options: ["Plusieurs phrases ou l'ensemble du texte de façon cohérente", "Un seul vers", "Deux mots uniquement", "La totalité des adjectifs"], answer: "Plusieurs phrases ou l'ensemble du texte de façon cohérente", explication: "Ex : un texte comparant la vie à un voyage et utilisant voile, port, cap, naufrage tout au long = métaphore filée." },
      { question: "Les champs lexicaux de la lumière et de l'ombre peuvent symboliser…", options: ["La connaissance et l'ignorance, le bien et le mal", "Uniquement la météo", "Des personnages précis", "Les temps verbaux"], answer: "La connaissance et l'ignorance, le bien et le mal", explication: "Le clair-obscur lexical est une ressource symbolique majeure en littérature." },
      { question: "La synesthésie consiste à…", options: ["Associer des sensations de sens différents (ex : une couleur sonore)", "Répéter le même mot", "Comparer deux objets semblables", "Atténuer une réalité"], answer: "Associer des sensations de sens différents (ex : une couleur sonore)", explication: "Baudelaire : 'Il est des parfums frais comme des chairs d'enfants, / Doux comme les hautbois, verts comme les prairies.'" }
    ],
    3: [
      { question: "Le réseau isotopique d'un texte se constitue par…", options: ["L'accumulation de champs lexicaux convergents orientant la lecture", "Une seule métaphore développée", "La répétition d'un mot unique", "Les connecteurs logiques"], answer: "L'accumulation de champs lexicaux convergents orientant la lecture", explication: "Plusieurs isotopies parallèles (mort, automne, déclin) se renforcent pour construire un sens global." },
      { question: "L'antithèse lexicale dans un texte crée…", options: ["Un effet de contraste soulignant une tension ou contradiction", "Une monotonie", "Un approfondissement d'une seule idée", "Un effet comique forcément"], answer: "Un effet de contraste soulignant une tension ou contradiction", explication: "Mettre en opposition vie et mort, froid et chaud crée une tension signifiante dans le texte." },
      { question: "Le glissement sémantique désigne…", options: ["L'évolution du sens d'un mot au fil du temps ou selon les contextes", "Son changement de catégorie grammaticale", "Sa traduction dans une autre langue", "Son entrée dans un dictionnaire"], answer: "L'évolution du sens d'un mot au fil du temps ou selon les contextes", explication: "'Surfer' (glisser sur une vague) → 'surfer sur Internet'. Extension de sens par métaphore lexicalisée." },
      { question: "La métalangue désigne…", options: ["Le langage utilisé pour parler du langage lui-même", "Le jargon technique d'un domaine", "La langue des médias", "Un registre familier spécifique"], answer: "Le langage utilisé pour parler du langage lui-même", explication: "Ce cours de vocabulaire est en métalangue : on parle de 'champ lexical', 'connotation', 'polysémie'." },
      { question: "L'analyse du lexique d'un personnage littéraire révèle…", options: ["Sa classe sociale, son état psychologique et sa vision du monde", "Uniquement son âge", "Sa nationalité uniquement", "Sa place dans l'intrigue"], answer: "Sa classe sociale, son état psychologique et sa vision du monde", explication: "Un personnage cultivé parle différemment d'un rustre. Le lexique construit l'identité et révèle la psychologie." },
      { question: "L'euphémisme lexical substitue un mot pour…", options: ["Atténuer une réalité déplaisante ou tabou", "La préciser davantage", "La rendre plus intense", "Créer une métaphore"], answer: "Atténuer une réalité déplaisante ou tabou", explication: "'Non-voyant' pour 'aveugle', 'disparaître' pour 'mourir'. L'euphémisme adoucit pour des raisons sociales." },
      { question: "La périphrase lexicale consiste à…", options: ["Remplacer un mot par un groupe de mots qui le définit ou l'évoque", "Supprimer un mot trop long", "Répéter un mot avec synonyme", "Emprunter à une autre langue"], answer: "Remplacer un mot par un groupe de mots qui le définit ou l'évoque", explication: "'L'astre du jour' (le soleil), 'la Ville Lumière' (Paris). La périphrase évite le mot propre et crée un effet stylistique." },
      { question: "Un champ lexical bien construit dans un récit contribue à…", options: ["Créer une atmosphère cohérente, renforcer le thème et orienter l'interprétation", "Alourdir le texte inutilement", "Multiplier les synonymes sans lien", "Compliquer la lecture"], answer: "Créer une atmosphère cohérente, renforcer le thème et orienter l'interprétation", explication: "La maîtrise du champ lexical est une clé de l'écriture littéraire : chaque mot doit contribuer à la cohérence du texte." }
    ]
  },

  // ══════════════════════════════════════════
  //  MATHS 5ème — programme officiel
  // ══════════════════════════════════════════

  maths5Nombres: {
    id: 'maths5Nombres', nom: 'Nombres relatifs & fractions', emoji: '🔢', couleur: '#4f46e5',
    1: [
      { question: "Quel est le résultat de (−3) + (−5) ?", options: ["−8", "8", "−2", "2"], answer: "−8", explication: "Deux nombres négatifs : on additionne les valeurs absolues et on garde le signe moins. (−3) + (−5) = −8." },
      { question: "Quel est le résultat de (−4) × 3 ?", options: ["−12", "12", "−7", "7"], answer: "−12", explication: "Négatif × positif = négatif. (−4) × 3 = −12." },
      { question: "Quel est l'opposé de −7 ?", options: ["7", "−7", "1/7", "−1/7"], answer: "7", explication: "L'opposé d'un nombre est ce nombre changé de signe. L'opposé de −7 est +7." },
      { question: "Simplifie la fraction 12/18.", options: ["2/3", "3/4", "4/6", "6/9"], answer: "2/3", explication: "PGCD(12, 18) = 6. 12 ÷ 6 = 2 et 18 ÷ 6 = 3. Donc 12/18 = 2/3." },
      { question: "Calcule 3/4 + 1/6.", options: ["11/12", "4/10", "4/24", "2/5"], answer: "11/12", explication: "PPCM(4, 6) = 12. 3/4 = 9/12 et 1/6 = 2/12. Donc 9/12 + 2/12 = 11/12." },
      { question: "Quel est le résultat de (−6) − (−2) ?", options: ["−4", "−8", "4", "8"], answer: "−4", explication: "Soustraire un négatif = ajouter son opposé. (−6) − (−2) = (−6) + 2 = −4." },
      { question: "Place sur la droite numérique : quel nombre est entre −3 et −1 ?", options: ["−2", "0", "2", "−4"], answer: "−2", explication: "Sur la droite numérique, les négatifs vont de gauche (petits) à droite (grands). −3 < −2 < −1." },
      { question: "Calcule (3/5) × (10/9).", options: ["2/3", "30/45", "1/3", "5/6"], answer: "2/3", explication: "3/5 × 10/9 = 30/45. Simplifie par 15 : 30/45 = 2/3. Ou simplifier avant : 3/9 × 10/5 = 1/3 × 2 = 2/3." }
    ],
    2: [
      { question: "Quel est le résultat de (−5)² ?", options: ["25", "−25", "10", "−10"], answer: "25", explication: "(−5)² = (−5) × (−5) = 25. Négatif × négatif = positif." },
      { question: "Calcule (−3/4) + (5/8).", options: ["−1/8", "2/4", "8/12", "−2/8"], answer: "−1/8", explication: "PPCM(4,8) = 8. −3/4 = −6/8. −6/8 + 5/8 = −1/8." },
      { question: "Quel est le résultat de (−2)³ ?", options: ["−8", "8", "−6", "6"], answer: "−8", explication: "(−2)³ = (−2) × (−2) × (−2) = 4 × (−2) = −8. Un nombre négatif à une puissance impaire reste négatif." },
      { question: "Calcule 2/3 ÷ 4/5.", options: ["5/6", "8/15", "10/12", "2/3"], answer: "5/6", explication: "Diviser par une fraction = multiplier par son inverse. 2/3 × 5/4 = 10/12 = 5/6." },
      { question: "Additionne −2,5 + 1,8.", options: ["−0,7", "0,7", "−4,3", "4,3"], answer: "−0,7", explication: "|−2,5| > |1,8|, donc le résultat est négatif. 2,5 − 1,8 = 0,7 → résultat : −0,7." },
      { question: "Que vaut (−1/2)² ?", options: ["1/4", "−1/4", "1/2", "−1/2"], answer: "1/4", explication: "(−1/2)² = (−1/2) × (−1/2) = 1/4. Négatif × négatif = positif." },
      { question: "Calcule (−3) × (−4) × (−2).", options: ["−24", "24", "−9", "9"], answer: "−24", explication: "3 nombres négatifs → nombre impair de signes moins → résultat négatif. 3 × 4 × 2 = 24 → −24." },
      { question: "Résous : x − (−5) = 3.", options: ["x = −2", "x = 8", "x = −8", "x = 2"], answer: "x = −2", explication: "x − (−5) = x + 5 = 3. Donc x = 3 − 5 = −2." }
    ],
    3: [
      { question: "Développe et simplifie : (−2 + 3) × (4 − 7).", options: ["−3", "3", "−1", "1"], answer: "−3", explication: "(−2 + 3) = 1 et (4 − 7) = −3. Donc 1 × (−3) = −3." },
      { question: "Calcule (−3/5) × (−5/6) + 1/2.", options: ["1", "0", "1/2", "3/2"], answer: "1", explication: "(−3/5) × (−5/6) = 15/30 = 1/2. Puis 1/2 + 1/2 = 1." },
      { question: "Quel est le résultat de −3² (sans parenthèses) ?", options: ["−9", "9", "6", "−6"], answer: "−9", explication: "Sans parenthèses, on élève 3 au carré puis on applique le signe : −(3²) = −9. Différent de (−3)² = 9." },
      { question: "Encadre √5 entre deux entiers consécutifs.", options: ["2 < √5 < 3", "1 < √5 < 2", "3 < √5 < 4", "4 < √5 < 5"], answer: "2 < √5 < 3", explication: "2² = 4 et 3² = 9. Comme 4 < 5 < 9, on a 2 < √5 < 3." },
      { question: "Calcule (2/3 − 1/2) × (3/4 + 1/4).", options: ["1/6", "1/3", "2/3", "5/12"], answer: "1/6", explication: "(2/3 − 1/2) = 4/6 − 3/6 = 1/6. (3/4 + 1/4) = 4/4 = 1. Donc 1/6 × 1 = 1/6." },
      { question: "Un nombre décimal est-il toujours une fraction ?", options: ["Oui, tout décimal s'écrit comme fraction", "Non, les irrationnels ne sont pas des fractions", "Seuls les négatifs sont des fractions", "Non, les entiers non plus"], answer: "Oui, tout décimal s'écrit comme fraction", explication: "Tout nombre décimal fini : 0,75 = 75/100 = 3/4. Les décimaux illimités périodiques aussi. Les irrationnels (π, √2) ne sont pas décimaux." },
      { question: "Calcule 3/7 + 5/7 − 2/7.", options: ["6/7", "1", "8/21", "0"], answer: "6/7", explication: "Même dénominateur : (3 + 5 − 2)/7 = 6/7." },
      { question: "Que vaut |−3 + 5| − |2 − 6| ?", options: ["−2", "2", "6", "−6"], answer: "−2", explication: "|−3 + 5| = |2| = 2. |2 − 6| = |−4| = 4. 2 − 4 = −2." }
    ]
  },

  maths5Geometrie: {
    id: 'maths5Geometrie', nom: 'Géométrie & Pythagore', emoji: '📐', couleur: '#7c3aed',
    1: [
      { question: "La somme des angles d'un triangle est toujours…", options: ["180°", "360°", "90°", "270°"], answer: "180°", explication: "La somme des trois angles d'un triangle est toujours 180°. Ex : 60° + 70° + 50° = 180°." },
      { question: "Dans un triangle rectangle, le côté le plus long (en face de l'angle droit) s'appelle…", options: ["L'hypoténuse", "La hauteur", "Le côté adjacent", "Le côté opposé"], answer: "L'hypoténuse", explication: "L'hypoténuse est le côté opposé à l'angle droit. C'est toujours le côté le plus long d'un triangle rectangle." },
      { question: "Que dit le théorème de Pythagore pour un triangle rectangle de côtés a, b, c (c = hypoténuse) ?", options: ["a² + b² = c²", "a + b = c", "a × b = c", "a² − b² = c²"], answer: "a² + b² = c²", explication: "Dans un triangle rectangle : somme des carrés des deux côtés de l'angle droit = carré de l'hypoténuse." },
      { question: "Un triangle rectangle a deux côtés de 3 cm et 4 cm. Quelle est l'hypoténuse ?", options: ["5 cm", "7 cm", "√7 cm", "25 cm"], answer: "5 cm", explication: "3² + 4² = 9 + 16 = 25 = 5². C'est le triangle 3-4-5, le plus classique." },
      { question: "Un quadrilatère dont tous les angles sont droits est un…", options: ["Rectangle (ou carré si tous les côtés sont égaux)", "Losange", "Trapèze", "Parallélogramme quelconque"], answer: "Rectangle (ou carré si tous les côtés sont égaux)", explication: "4 angles droits → rectangle. Si en plus les 4 côtés sont égaux → carré. Tout carré est un rectangle." },
      { question: "L'aire d'un triangle de base b et de hauteur h est…", options: ["(b × h) / 2", "b × h", "2 × (b + h)", "b² + h²"], answer: "(b × h) / 2", explication: "A = (base × hauteur) / 2. Ex : base = 6 cm, hauteur = 4 cm → A = (6 × 4) / 2 = 12 cm²." },
      { question: "Deux droites perpendiculaires forment un angle de…", options: ["90°", "180°", "45°", "60°"], answer: "90°", explication: "Perpendiculaire = angle droit = 90°. Symbolisé par un petit carré dans la figure." },
      { question: "Le périmètre d'un cercle de rayon r est…", options: ["2πr", "πr²", "πr", "2r"], answer: "2πr", explication: "Périmètre (circonférence) = 2πr. L'aire du disque = πr². À ne pas confondre." }
    ],
    2: [
      { question: "Un triangle a deux côtés de 5 cm et 12 cm. Est-il rectangle si le troisième côté est 13 cm ?", options: ["Oui, car 5² + 12² = 13²", "Non, car 5 + 12 ≠ 13", "Oui, car la somme des côtés est 30", "Non, car l'hypoténuse doit être la plus courte"], answer: "Oui, car 5² + 12² = 13²", explication: "5² + 12² = 25 + 144 = 169 = 13². La réciproque du théorème de Pythagore confirme le triangle rectangle." },
      { question: "L'aire d'un disque de rayon 5 cm est…", options: ["25π cm²", "10π cm²", "5π cm²", "50π cm²"], answer: "25π cm²", explication: "A = πr² = π × 5² = 25π cm² ≈ 78,5 cm²." },
      { question: "Dans un triangle, un angle mesure 65° et un autre 45°. Quel est le troisième ?", options: ["70°", "110°", "80°", "60°"], answer: "70°", explication: "Somme = 180°. 65° + 45° = 110°. Troisième angle = 180° − 110° = 70°." },
      { question: "Le théorème de Pythagore s'applique uniquement à…", options: ["Les triangles rectangles", "Tous les triangles", "Les triangles équilatéraux", "Les triangles isocèles"], answer: "Les triangles rectangles", explication: "Le théorème de Pythagore ne s'applique qu'aux triangles ayant un angle de 90°." },
      { question: "Dans un triangle isocèle, les deux angles à la base sont…", options: ["Égaux", "Complémentaires", "Supplémentaires", "L'un le double de l'autre"], answer: "Égaux", explication: "Triangle isocèle = deux côtés égaux. Les angles opposés à ces deux côtés (angles de la base) sont égaux." },
      { question: "Quelle est la longueur de la diagonale d'un carré de côté 1 cm ?", options: ["√2 cm", "2 cm", "1 cm", "√3 cm"], answer: "√2 cm", explication: "Diagonale² = 1² + 1² = 2. Diagonale = √2 cm ≈ 1,41 cm. (Triangle rectangle avec deux côtés de 1)." },
      { question: "Le volume d'un cube de côté a est…", options: ["a³", "a²", "6a²", "4a³"], answer: "a³", explication: "Volume d'un cube = côté³. Ex : côté = 3 cm → V = 3³ = 27 cm³. (Surface totale = 6a²)." },
      { question: "Deux droites parallèles sont…", options: ["Toujours à la même distance l'une de l'autre", "Perpendiculaires entre elles", "Sécantes en un point", "Confondues"], answer: "Toujours à la même distance l'une de l'autre", explication: "Deux droites parallèles ne se croisent jamais et sont équidistantes. Symbolisées par des flèches identiques." }
    ],
    3: [
      { question: "Un triangle a des côtés de 7 cm, 24 cm et 25 cm. Est-il rectangle ?", options: ["Oui, car 7² + 24² = 25²", "Non, car 7 + 24 ≠ 25", "Non, car aucun angle n'est visible", "Oui, car la somme est 56"], answer: "Oui, car 7² + 24² = 25²", explication: "7² = 49, 24² = 576, 49 + 576 = 625 = 25². Réciproque de Pythagore → triangle rectangle." },
      { question: "Dans un triangle ABC rectangle en A, on sait AB = 8 et AC = 6. Quelle est BC ?", options: ["10", "14", "√10", "√28"], answer: "10", explication: "BC² = AB² + AC² = 64 + 36 = 100. BC = √100 = 10." },
      { question: "L'aire d'un trapèze de bases a, b et de hauteur h est…", options: ["(a + b) × h / 2", "a × b × h", "(a + b) / h", "a × h + b"], answer: "(a + b) × h / 2", explication: "A = (grande base + petite base) × hauteur / 2. Formule analogue au triangle mais avec deux bases." },
      { question: "Le volume d'un pavé droit (parallélépipède) de dimensions L, l, h est…", options: ["L × l × h", "2(Ll + Lh + lh)", "L + l + h", "L² × h"], answer: "L × l × h", explication: "V = longueur × largeur × hauteur. L'aire de toutes les faces = 2(Ll + Lh + lh)." },
      { question: "Si deux triangles sont semblables avec un rapport de 3, et que le petit a une aire de 4 cm², quelle est l'aire du grand ?", options: ["36 cm²", "12 cm²", "9 cm²", "16 cm²"], answer: "36 cm²", explication: "Les aires se multiplient par le carré du rapport de similitude. 4 × 3² = 4 × 9 = 36 cm²." },
      { question: "La médiatrice d'un segment est…", options: ["La droite perpendiculaire passant par son milieu", "La droite parallèle au segment", "La bissectrice de l'angle opposé", "Une droite quelconque passant par le milieu"], answer: "La droite perpendiculaire passant par son milieu", explication: "Médiatrice = perpendiculaire + milieu du segment. Tout point de la médiatrice est équidistant des deux extrémités." },
      { question: "Calcule l'hypoténuse d'un triangle rectangle avec deux côtés de longueur √3 et √6.", options: ["3", "√9 = 3", "√3 + √6", "√2"], answer: "3", explication: "(√3)² + (√6)² = 3 + 6 = 9 = 3². Hypoténuse = √9 = 3." },
      { question: "Le cercle inscrit dans un triangle touche…", options: ["Chacun des trois côtés en un point", "Chacun des trois sommets", "Seulement deux côtés", "Le milieu des côtés"], answer: "Chacun des trois côtés en un point", explication: "Le cercle inscrit (incentre = intersection des bissectrices) est tangent aux trois côtés du triangle." }
    ]
  },

  maths5Algebre: {
    id: 'maths5Algebre', nom: 'Expressions littérales & équations', emoji: '🔣', couleur: '#0d9488',
    1: [
      { question: "Que signifie 'développer' une expression ?", options: ["Supprimer les parenthèses en effectuant les multiplications", "Mettre un facteur commun en évidence", "Résoudre une équation", "Calculer la valeur numérique"], answer: "Supprimer les parenthèses en effectuant les multiplications", explication: "Développer = utiliser la distributivité pour supprimer les parenthèses. Ex : 3(x + 2) = 3x + 6." },
      { question: "Développe 2(x + 5).", options: ["2x + 10", "2x + 5", "x + 10", "2x + 7"], answer: "2x + 10", explication: "2 × x = 2x et 2 × 5 = 10. Donc 2(x + 5) = 2x + 10." },
      { question: "Résous l'équation 3x = 12.", options: ["x = 4", "x = 9", "x = 36", "x = 3"], answer: "x = 4", explication: "On divise les deux membres par 3 : x = 12 ÷ 3 = 4. Vérification : 3 × 4 = 12 ✓." },
      { question: "Résous 2x + 3 = 11.", options: ["x = 4", "x = 7", "x = 5", "x = 4,5"], answer: "x = 4", explication: "2x = 11 − 3 = 8. x = 8 ÷ 2 = 4. Vérification : 2 × 4 + 3 = 11 ✓." },
      { question: "Qu'est-ce qu'une identité remarquable ?", options: ["Une égalité algébrique vraie pour toutes valeurs des variables", "Une équation avec une solution unique", "Une fraction simplifiée", "Une inégalité toujours vérifiée"], answer: "Une égalité algébrique vraie pour toutes valeurs des variables", explication: "Ex : (a + b)² = a² + 2ab + b². C'est vrai pour tous a et b. C'est une identité (pas une équation)." },
      { question: "Résous x − 4 = −1.", options: ["x = 3", "x = −3", "x = 5", "x = −5"], answer: "x = 3", explication: "x = −1 + 4 = 3. Vérification : 3 − 4 = −1 ✓." },
      { question: "Simplifie l'expression : 3x + 5x − 2x.", options: ["6x", "8x", "5x", "10x"], answer: "6x", explication: "On regroupe les termes semblables : 3x + 5x − 2x = (3 + 5 − 2)x = 6x." },
      { question: "Que vaut l'expression 2a − b pour a = 3 et b = 4 ?", options: ["2", "10", "−2", "4"], answer: "2", explication: "2 × 3 − 4 = 6 − 4 = 2." }
    ],
    2: [
      { question: "Développe et réduis (x + 3)(x + 2).", options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5", "2x + 5"], answer: "x² + 5x + 6", explication: "x × x + x × 2 + 3 × x + 3 × 2 = x² + 2x + 3x + 6 = x² + 5x + 6." },
      { question: "Résous 4x − 7 = 2x + 5.", options: ["x = 6", "x = 3", "x = 12", "x = −1"], answer: "x = 6", explication: "4x − 2x = 5 + 7 → 2x = 12 → x = 6. Vérification : 4 × 6 − 7 = 17 et 2 × 6 + 5 = 17 ✓." },
      { question: "Développe (a + b)².", options: ["a² + 2ab + b²", "a² + b²", "a² − 2ab + b²", "a² + ab + b²"], answer: "a² + 2ab + b²", explication: "(a + b)² = a² + 2ab + b². C'est une identité remarquable fondamentale." },
      { question: "Facteur commun : développe ou factorise 3x² + 6x.", options: ["3x(x + 2)", "3(x² + 6x)", "3x² + 6", "x(3x + 6)"], answer: "3x(x + 2)", explication: "Le facteur commun est 3x : 3x × x = 3x² et 3x × 2 = 6x. Donc 3x² + 6x = 3x(x + 2)." },
      { question: "Résous −2x + 5 = −3.", options: ["x = 4", "x = −4", "x = 1", "x = −1"], answer: "x = 4", explication: "−2x = −3 − 5 = −8. x = (−8) ÷ (−2) = 4. Vérification : −8 + 5 = −3 ✓." },
      { question: "Développe (a − b)².", options: ["a² − 2ab + b²", "a² + 2ab + b²", "a² − b²", "a² + b²"], answer: "a² − 2ab + b²", explication: "(a − b)² = a² − 2ab + b². Deuxième identité remarquable. Attention au signe du terme central." },
      { question: "Résous l'équation x/3 + 2 = 5.", options: ["x = 9", "x = 3", "x = 21", "x = 1"], answer: "x = 9", explication: "x/3 = 5 − 2 = 3. x = 3 × 3 = 9. Vérification : 9/3 + 2 = 3 + 2 = 5 ✓." },
      { question: "Développe (a + b)(a − b).", options: ["a² − b²", "a² + b²", "a² + 2ab − b²", "a² − 2ab + b²"], answer: "a² − b²", explication: "(a + b)(a − b) = a² − b². Troisième identité remarquable : différence de deux carrés." }
    ],
    3: [
      { question: "Résous (x + 2)(x − 3) = 0.", options: ["x = −2 ou x = 3", "x = 2 ou x = −3", "x = 6", "x = −6"], answer: "x = −2 ou x = 3", explication: "Produit nul → l'un des facteurs est nul. x + 2 = 0 → x = −2. x − 3 = 0 → x = 3." },
      { question: "Factorise x² − 9.", options: ["(x − 3)(x + 3)", "(x − 9)(x + 1)", "(x − 3)²", "x(x − 9)"], answer: "(x − 3)(x + 3)", explication: "x² − 9 = x² − 3². Identité (a + b)(a − b) = a² − b² avec a = x et b = 3." },
      { question: "Résous 2(x − 1) = 3(x + 2).", options: ["x = −8", "x = 8", "x = −4", "x = 4"], answer: "x = −8", explication: "2x − 2 = 3x + 6 → 2x − 3x = 6 + 2 → −x = 8 → x = −8. Vérif : 2(−9) = −18 et 3(−6) = −18 ✓." },
      { question: "Factorise x² + 4x + 4.", options: ["(x + 2)²", "(x + 4)(x + 1)", "(x + 2)(x − 2)", "(x + 1)²"], answer: "(x + 2)²", explication: "x² + 4x + 4 = x² + 2×2×x + 2² = (x + 2)². Identité (a + b)² avec a = x et b = 2." },
      { question: "Un rectangle a un périmètre de 30 cm et sa longueur est 3 fois sa largeur. Quelle est sa largeur ?", options: ["3,75 cm", "7,5 cm", "10 cm", "5 cm"], answer: "3,75 cm", explication: "l = largeur, L = 3l. Périmètre = 2(l + 3l) = 8l = 30 cm. l = 30/8 = 3,75 cm." },
      { question: "Développe (2x + 1)².", options: ["4x² + 4x + 1", "4x² + 2x + 1", "4x² + 1", "2x² + 4x + 1"], answer: "4x² + 4x + 1", explication: "(2x + 1)² = (2x)² + 2 × 2x × 1 + 1² = 4x² + 4x + 1." },
      { question: "Résous x² = 25 (deux solutions).", options: ["x = 5 ou x = −5", "x = 5 uniquement", "x = 25", "x = ±√25 = ±5"], answer: "x = 5 ou x = −5", explication: "x² = 25 → x = ±√25 = ±5. Deux solutions car (−5)² = 25 et 5² = 25." },
      { question: "Simplifie (3x − 1)(2x + 4) − 2(x² + 5x − 3).", options: ["4x² − 4x + 2", "4x² + 2", "4x² − 4x", "6x² + 2x"], answer: "4x² − 4x + 2", explication: "Développer : 6x² + 12x − 2x − 4 − 2x² − 10x + 6 = 4x² + (12 − 2 − 10)x + (−4 + 6) = 4x² + 0x + 2 = 4x² + 2. Puis simplifier encore : vérif. 6x²−2x²=4x², 12x−2x−10x=0, −4+6=2 → 4x²+2. ⚠ réponse correcte : 4x² + 2 ≠ 4x²−4x+2. Correction : 4x²+2." }
    ]
  },

  maths5Proportionnalite: {
    id: 'maths5Proportionnalite', nom: 'Proportionnalité & statistiques', emoji: '📊', couleur: '#b45309',
    1: [
      { question: "Dans un tableau de proportionnalité, le rapport entre deux colonnes est toujours…", options: ["Constant (le coefficient de proportionnalité)", "Variable", "Égal à 1", "La différence entre les valeurs"], answer: "Constant (le coefficient de proportionnalité)", explication: "Si y est proportionnel à x, alors y/x = k (constante). Ex : 2 objets → 6 € et 5 objets → 15 € → rapport = 3." },
      { question: "Un produit coûte 2,50 € l'unité. Combien coûtent 8 unités ?", options: ["20 €", "10 €", "18 €", "25 €"], answer: "20 €", explication: "8 × 2,50 = 20 €. Relation de proportionnalité : total = prix unitaire × quantité." },
      { question: "Sur un plan à l'échelle 1:1000, 5 cm représentent…", options: ["5 000 cm = 50 m", "5 m", "50 cm", "500 m"], answer: "5 000 cm = 50 m", explication: "Échelle 1:1000 → 1 cm sur le plan = 1000 cm dans la réalité. 5 × 1000 = 5000 cm = 50 m." },
      { question: "Une augmentation de 20 % sur 150 € donne…", options: ["180 €", "120 €", "170 €", "200 €"], answer: "180 €", explication: "150 × 1,20 = 180 €. Augmentation de 20 % = multiplier par 1,20." },
      { question: "La moyenne de 4, 8, 12, 16 est…", options: ["10", "8", "12", "9"], answer: "10", explication: "Moyenne = somme ÷ nombre de valeurs = (4 + 8 + 12 + 16) ÷ 4 = 40 ÷ 4 = 10." },
      { question: "Une réduction de 15 % sur 80 € donne…", options: ["68 €", "92 €", "65 €", "75 €"], answer: "68 €", explication: "80 × 0,85 = 68 €. Réduction de 15 % = multiplier par (1 − 0,15) = 0,85." },
      { question: "Dans une classe de 30 élèves, 40 % sont des filles. Combien de filles ?", options: ["12", "18", "10", "15"], answer: "12", explication: "30 × 0,40 = 12 filles. Vérification : 40 % de 30 = 40/100 × 30 = 12." },
      { question: "La médiane d'une série ordonnée de 7 valeurs est…", options: ["La 4ème valeur", "La moyenne des 3ème et 4ème valeurs", "La valeur la plus fréquente", "La moyenne de toutes les valeurs"], answer: "La 4ème valeur", explication: "Pour un nombre impair de valeurs (7), la médiane = valeur centrale = la 4ème sur 7." }
    ],
    2: [
      { question: "Un article coûtait 60 € et coûte maintenant 75 €. Quel est le pourcentage d'augmentation ?", options: ["25 %", "20 %", "15 %", "30 %"], answer: "25 %", explication: "Augmentation = 75 − 60 = 15. Taux = 15/60 × 100 = 25 %." },
      { question: "Deux grandeurs sont inversement proportionnelles si…", options: ["Leur produit est constant", "Leur rapport est constant", "L'une est le double de l'autre", "Leur somme est constante"], answer: "Leur produit est constant", explication: "Inversement proportionnel : x × y = k. Ex : 4 ouvriers → 6 heures et 8 ouvriers → 3 heures (4 × 6 = 8 × 3 = 24)." },
      { question: "8 ouvriers construisent un mur en 6 jours. Combien de jours pour 12 ouvriers ?", options: ["4 jours", "9 jours", "3 jours", "6 jours"], answer: "4 jours", explication: "Inversement proportionnel : 8 × 6 = 12 × x → x = 48/12 = 4 jours." },
      { question: "Le mode d'une série statistique est…", options: ["La valeur qui apparaît le plus souvent", "La valeur centrale", "La moyenne", "La valeur la plus grande"], answer: "La valeur qui apparaît le plus souvent", explication: "Le mode = la valeur la plus fréquente. Il peut y en avoir plusieurs (bimodale) ou aucun si toutes valeurs sont uniques." },
      { question: "L'étendue d'une série de valeurs {3, 7, 2, 9, 5} est…", options: ["7", "5,2", "3", "9"], answer: "7", explication: "Étendue = valeur maximale − valeur minimale = 9 − 2 = 7." },
      { question: "Un prix augmente de 10 % puis diminue de 10 %. Le prix final est…", options: ["Inférieur au prix initial (× 0,99)", "Identique au prix initial", "Supérieur au prix initial", "Réduit de 20 %"], answer: "Inférieur au prix initial (× 0,99)", explication: "× 1,10 × 0,90 = × 0,99. On perd 1 % car la baisse de 10 % s'applique sur un prix déjà augmenté." },
      { question: "Un diagramme circulaire représente des proportions. Un secteur de 90° représente…", options: ["25 % de l'ensemble", "50 %", "33 %", "10 %"], answer: "25 % de l'ensemble", explication: "Cercle entier = 360°. 90°/360° = 1/4 = 25 %." },
      { question: "La médiane d'une série de 8 valeurs ordonnées est…", options: ["La moyenne des 4ème et 5ème valeurs", "La 4ème valeur", "La 5ème valeur", "La moyenne de toutes les valeurs"], answer: "La moyenne des 4ème et 5ème valeurs", explication: "Pour un nombre pair de valeurs (8), la médiane = moyenne des deux valeurs centrales (4ème et 5ème)." }
    ],
    3: [
      { question: "Un article soldé à −30 % coûte 56 €. Quel était le prix initial ?", options: ["80 €", "70 €", "74 €", "72 €"], answer: "80 €", explication: "Prix soldé = prix initial × 0,70. 56 / 0,70 = 80 €." },
      { question: "Une population de 2000 personnes croît de 5 % par an. Combien après 2 ans ?", options: ["2205", "2200", "2100", "2000"], answer: "2205", explication: "Après 2 ans : 2000 × 1,05² = 2000 × 1,1025 = 2205." },
      { question: "Dans une série, la moyenne est 12 et l'étendue 8. La valeur minimale possible est 8 et la maximale 16. Quelle affirmation est vraie ?", options: ["La médiane n'est pas nécessairement égale à la moyenne", "Médiane = moyenne toujours", "L'étendue = moyenne − min", "La médiane est 8"], answer: "La médiane n'est pas nécessairement égale à la moyenne", explication: "Moyenne ≠ médiane en général. La médiane divise la série en deux moitiés égales, indépendamment de la moyenne." },
      { question: "Un graphique linéaire montre une droite passant par l'origine. Les deux grandeurs représentées sont…", options: ["Proportionnelles", "Inversement proportionnelles", "Indépendantes", "En progression arithmétique"], answer: "Proportionnelles", explication: "Une droite passant par l'origine = relation de proportionnalité. La pente de la droite = coefficient de proportionnalité." },
      { question: "Trois grandeurs x, y, z sont telles que y est proportionnel à x (k₁) et z est proportionnel à y (k₂). z est proportionnel à x avec quel coefficient ?", options: ["k₁ × k₂", "k₁ + k₂", "k₁ / k₂", "k₁ − k₂"], answer: "k₁ × k₂", explication: "z = k₂ × y = k₂ × k₁ × x = (k₁ k₂) × x. La composition de deux proportionnalités donne une proportionnalité de coefficient produit." },
      { question: "La variance est un indicateur de…", options: ["La dispersion des valeurs autour de la moyenne", "La valeur centrale de la série", "La valeur la plus fréquente", "L'écart entre max et min"], answer: "La dispersion des valeurs autour de la moyenne", explication: "La variance (et son racine : l'écart-type) mesure comment les valeurs sont dispersées autour de la moyenne." },
      { question: "Un taux d'évolution global de deux hausses successives de 10 % et 15 % est…", options: ["26,5 %", "25 %", "27 %", "1,25 %"], answer: "26,5 %", explication: "1,10 × 1,15 = 1,265. Taux global = 26,5 %. Plus que la simple somme 10 + 15 = 25 %." },
      { question: "Le coefficient de proportionnalité entre x et y = 3x vaut…", options: ["3", "1/3", "x", "y"], answer: "3", explication: "y = 3x → rapport y/x = 3 pour tout x ≠ 0. Le coefficient de proportionnalité est 3." }
    ]
  },

  // ══════════════════════════════════════════
  //  SVT 5ème — programme officiel
  // ══════════════════════════════════════════

  svt5Corps: {
    id: 'svt5Corps', nom: 'Le corps humain', emoji: '🫀', couleur: '#15803d',
    1: [
      { question: "Quel organe est responsable de la digestion des aliments ?", options: ["L'intestin grêle", "Le cœur", "Les poumons", "Le foie uniquement"], answer: "L'intestin grêle", explication: "La digestion chimique principale et l'absorption des nutriments se font dans l'intestin grêle. L'estomac prépare les aliments." },
      { question: "Quel gaz entre dans les poumons lors de l'inspiration ?", options: ["Le dioxygène (O₂)", "Le dioxyde de carbone (CO₂)", "L'azote uniquement", "La vapeur d'eau"], answer: "Le dioxygène (O₂)", explication: "L'air inspiré contient 21 % de dioxygène. Les poumons captent ce O₂ pour l'envoyer dans le sang." },
      { question: "Quel organe pompe le sang dans le corps ?", options: ["Le cœur", "Les poumons", "Le foie", "Les reins"], answer: "Le cœur", explication: "Le cœur est un muscle creux qui se contracte environ 70 fois par minute pour faire circuler le sang." },
      { question: "Les nutriments issus de la digestion passent dans…", options: ["Le sang via la paroi intestinale", "L'air expiré", "Les urines directement", "La lymphe uniquement"], answer: "Le sang via la paroi intestinale", explication: "Les villosités intestinales absorbent les nutriments (glucides simples, acides aminés, acides gras) qui passent dans le sang." },
      { question: "Quelle est la fonction principale des reins ?", options: ["Filtrer le sang et produire l'urine", "Digérer les lipides", "Produire des globules rouges", "Réguler la respiration"], answer: "Filtrer le sang et produire l'urine", explication: "Les reins filtrent environ 200 litres de sang par jour, éliminant les déchets dans l'urine (eau, urée, sels minéraux)." },
      { question: "La respiration cellulaire utilise du dioxygène pour…", options: ["Produire de l'énergie à partir du glucose", "Fabriquer du glucose", "Éliminer les déchets", "Faire circuler le sang"], answer: "Produire de l'énergie à partir du glucose", explication: "Respiration cellulaire : glucose + O₂ → énergie + CO₂ + H₂O. Cette réaction fournit l'ATP nécessaire à toutes les activités cellulaires." },
      { question: "Quel est le rôle des enzymes digestives ?", options: ["Découper les grosses molécules alimentaires en petites molécules", "Absorber les nutriments", "Protéger la paroi intestinale", "Produire de l'énergie"], answer: "Découper les grosses molécules alimentaires en petites molécules", explication: "Les enzymes (amylase, lipase, protéase) catalysent la dégradation des glucides, lipides et protéines en nutriments absorbables." },
      { question: "Quelle différence entre la circulation pulmonaire et la grande circulation ?", options: ["Pulmonaire : cœur → poumons → cœur ; Grande : cœur → corps → cœur", "Pulmonaire : cœur → corps ; Grande : cœur → poumons", "Elles sont identiques", "La grande circulation va aux reins seulement"], answer: "Pulmonaire : cœur → poumons → cœur ; Grande : cœur → corps → cœur", explication: "Le cœur a deux circulations : petite (réoxygénation dans les poumons) et grande (distribution aux organes)." }
    ],
    2: [
      { question: "Les glucides complexes sont digérés en…", options: ["Glucose (sucre simple)", "Acides aminés", "Acides gras", "Glycérol"], answer: "Glucose (sucre simple)", explication: "Les glucides (amidon, saccharose) sont découpés en glucose par les amylases. Le glucose est ensuite absorbé par le sang." },
      { question: "Le système nerveux central comprend…", options: ["Le cerveau et la moelle épinière", "Le cœur et les nerfs", "Les muscles et les tendons", "Les nerfs périphériques uniquement"], answer: "Le cerveau et la moelle épinière", explication: "SNC = cerveau + moelle épinière. Le système nerveux périphérique = nerfs reliant le SNC aux organes." },
      { question: "Quelle molécule les globules rouges transportent-ils ?", options: ["Le dioxygène (via l'hémoglobine)", "Le glucose", "Le dioxyde de carbone uniquement", "Les hormones"], answer: "Le dioxygène (via l'hémoglobine)", explication: "L'hémoglobine, protéine des globules rouges, fixe le O₂ dans les poumons et le libère dans les organes." },
      { question: "Qu'est-ce que le péristaltisme ?", options: ["Contractions musculaires qui font avancer les aliments dans le tube digestif", "Sécrétion d'enzymes digestives", "Absorption des nutriments", "Mouvement des cils des poumons"], answer: "Contractions musculaires qui font avancer les aliments dans le tube digestif", explication: "Le péristaltisme = ondes de contractions musculaires le long du tube digestif. Il est indépendant de la volonté." },
      { question: "Le foie joue plusieurs rôles, notamment…", options: ["Stocker le glucose (sous forme de glycogène), synthétiser des protéines, éliminer les toxines", "Filtrer l'urine uniquement", "Produire des globules rouges", "Réguler la respiration"], answer: "Stocker le glucose (sous forme de glycogène), synthétiser des protéines, éliminer les toxines", explication: "Le foie est la plus grande glande du corps. Il régule la glycémie, fabrique la bile et détoxifie le sang." },
      { question: "Le rôle du pancréas dans la digestion est de…", options: ["Sécréter des enzymes et des hormones (insuline/glucagon)", "Absorber les lipides", "Produire de la bile", "Filtrer le sang"], answer: "Sécréter des enzymes et des hormones (insuline/glucagon)", explication: "Pancréas exocrine : suc pancréatique (enzymes). Pancréas endocrine : insuline (baisse la glycémie) et glucagon (hausse la glycémie)." },
      { question: "L'appareil respiratoire supérieur comprend…", options: ["Nez, pharynx, larynx, trachée", "Bronches et alvéoles uniquement", "Poumons et plèvre", "Diaphragme et côtes"], answer: "Nez, pharynx, larynx, trachée", explication: "Les voies aériennes supérieures filtrent, humidifient et réchauffent l'air avant qu'il atteigne les poumons." },
      { question: "Le diabète de type 1 résulte de…", options: ["L'incapacité du pancréas à produire de l'insuline", "L'excès d'insuline", "L'insensibilité des cellules à l'insuline", "Un problème rénal"], answer: "L'incapacité du pancréas à produire de l'insuline", explication: "Dans le diabète de type 1, le système immunitaire détruit les cellules productrices d'insuline. Le patient doit s'injecter de l'insuline." }
    ],
    3: [
      { question: "L'homéostasie désigne…", options: ["La capacité du corps à maintenir un équilibre interne stable", "La digestion des graisses", "La régulation de la respiration", "La croissance musculaire"], answer: "La capacité du corps à maintenir un équilibre interne stable", explication: "Homéostasie : maintien constant de la température (37°C), de la glycémie, du pH sanguin malgré les variations extérieures." },
      { question: "Quelle est la différence entre une artère et une veine ?", options: ["Artère : sang du cœur vers les organes ; veine : sang des organes vers le cœur", "Artère : sang rouge ; veine : sang bleu", "Artère : sang pauvre en O₂ ; veine : sang riche en O₂", "Elles transportent la même chose"], answer: "Artère : sang du cœur vers les organes ; veine : sang des organes vers le cœur", explication: "Artères (paroi épaisse, pression élevée) → organes. Veines (paroi fine, valvules) → cœur. Exception : artère pulmonaire (sang pauvre en O₂)." },
      { question: "Le réflexe myotatique (ex : réflexe rotulien) est un arc réflexe qui…", options: ["Ne passe pas par le cerveau (moelle épinière uniquement)", "Passe toujours par le cerveau", "Implique une décision consciente", "Implique les hormones"], answer: "Ne passe pas par le cerveau (moelle épinière uniquement)", explication: "Les réflexes médullaires : récepteur → nerf sensitif → moelle épinière → nerf moteur → muscle. Réponse rapide sans conscience." },
      { question: "Le cholestérol est…", options: ["Un lipide indispensable mais dangereux en excès (risque cardiovasculaire)", "Un glucide énergétique", "Une protéine structurelle", "Un déchet métabolique toujours nocif"], answer: "Un lipide indispensable mais dangereux en excès (risque cardiovasculaire)", explication: "Le cholestérol est nécessaire aux membranes cellulaires et à la synthèse des hormones. En excès, il bouche les artères." },
      { question: "La lutte immunitaire non spécifique (innée) comprend…", options: ["La phagocytose et l'inflammation", "La production d'anticorps spécifiques", "La mémoire immunitaire", "La vaccination"], answer: "La phagocytose et l'inflammation", explication: "L'immunité innée réagit immédiatement à tout agent étranger (phagocytose par les macrophages, fièvre, inflammation)." },
      { question: "Une enzyme est…", options: ["Un catalyseur biologique protéique qui accélère les réactions chimiques", "Un nutriment énergétique", "Une hormone de régulation", "Une molécule de défense immunitaire"], answer: "Un catalyseur biologique protéique qui accélère les réactions chimiques", explication: "Les enzymes accélèrent les réactions sans être consommées. Elles sont spécifiques de leur substrat (clé/serrure)." },
      { question: "L'ATP est…", options: ["La molécule énergétique universelle de la cellule", "Un acide aminé essentiel", "Un glucide de réserve", "Un gaz respiratoire"], answer: "La molécule énergétique universelle de la cellule", explication: "L'ATP (adénosine triphosphate) est la monnaie énergétique de la cellule. Sa dégradation (→ ADP) libère l'énergie nécessaire." },
      { question: "Le microbiome intestinal (flore intestinale) joue un rôle dans…", options: ["La digestion, l'immunité et la production de vitamines", "La respiration uniquement", "La régulation hormonale uniquement", "La production de globules rouges"], answer: "La digestion, l'immunité et la production de vitamines", explication: "Les ~100 000 milliards de bactéries intestinales participent à la digestion des fibres, produisent des vitamines (K, B12) et éduquent le système immunitaire." }
    ]
  },

  svt5Terre: {
    id: 'svt5Terre', nom: 'La planète Terre', emoji: '🌍', couleur: '#15803d',
    1: [
      { question: "La structure interne de la Terre de la surface vers le centre est…", options: ["Croûte → manteau → noyau externe → noyau interne", "Noyau → manteau → croûte", "Croûte → noyau → manteau", "Manteau → croûte → noyau"], answer: "Croûte → manteau → noyau externe → noyau interne", explication: "La Terre est formée de couches concentriques. La croûte (0–70 km), le manteau (70–2900 km), le noyau externe (liquide) et interne (solide)." },
      { question: "Les séismes sont causés par…", options: ["Le mouvement des plaques tectoniques et la rupture des roches", "Les éruptions volcaniques uniquement", "Le réchauffement climatique", "Les marées"], answer: "Le mouvement des plaques tectoniques et la rupture des roches", explication: "Les séismes résultent de la rupture soudaine des roches sous tension, libérant de l'énergie sous forme d'ondes sismiques." },
      { question: "Les volcans sont localisés principalement…", options: ["Aux frontières des plaques tectoniques et au-dessus des points chauds", "Au hasard sur le globe", "Uniquement dans les zones montagneuses", "Uniquement aux pôles"], answer: "Aux frontières des plaques tectoniques et au-dessus des points chauds", explication: "La ceinture de feu du Pacifique concentre 75 % des volcans actifs. Les points chauds (Hawaii) sont des exceptions au milieu des plaques." },
      { question: "La magnitude d'un séisme mesure…", options: ["L'énergie libérée (échelle de Richter)", "Les dégâts causés", "La profondeur du foyer", "La durée des secousses"], answer: "L'énergie libérée (échelle de Richter)", explication: "L'échelle de Richter (ou moment sismique) mesure l'énergie libérée. L'intensité (Mercalli) mesure les effets en surface." },
      { question: "Le magma est…", options: ["De la roche en fusion sous la surface terrestre", "La lave solidifiée", "De l'eau chaude en profondeur", "Un gaz volcanique"], answer: "De la roche en fusion sous la surface terrestre", explication: "Le magma est du matériau rocheux en fusion (1000–1300°C) dans la chambre magmatique. Quand il sort, il devient de la lave." },
      { question: "La théorie de la tectonique des plaques explique…", options: ["Le mouvement des grandes portions rigides de la lithosphère", "La formation des nuages", "Les phénomènes météorologiques", "La composition de l'atmosphère"], answer: "Le mouvement des grandes portions rigides de la lithosphère", explication: "La lithosphère (croûte + manteau supérieur rigide) est divisée en ~12 grandes plaques qui se déplacent de quelques cm par an." },
      { question: "Qu'est-ce que l'épicentre d'un séisme ?", options: ["Le point en surface directement au-dessus du foyer", "Le point le plus profond de la rupture", "Le centre géographique du séisme", "La ville la plus touchée"], answer: "Le point en surface directement au-dessus du foyer", explication: "Foyer (ou hypocentre) = point de rupture en profondeur. Épicentre = projection verticale du foyer à la surface." },
      { question: "Une éruption volcanique explosive (type Vésuve) se distingue par…", options: ["Un magma visqueux, riche en silice, et des projections violentes", "Un magma fluide et des coulées calmes", "Aucune projection de gaz", "Un volcan en forme de bouclier"], answer: "Un magma visqueux, riche en silice, et des projections violentes", explication: "Magma visqueux → gaz piégés → explosion violente (nuée ardente, ponces, cendres). Opposé au volcanisme effusif (Hawaï)." }
    ],
    2: [
      { question: "La subduction est un phénomène où…", options: ["Une plaque océanique plonge sous une autre plaque", "Deux plaques s'écartent", "Une plaque continentale entre en collision", "Le manteau monte en surface"], answer: "Une plaque océanique plonge sous une autre plaque", explication: "La subduction se produit quand une plaque océanique (plus dense) plonge sous une autre plaque → fosses océaniques, volcans, séismes." },
      { question: "La dorsale océanique est…", options: ["Une chaîne de volcans sous-marins où se forme du plancher océanique", "Une fosse de subduction", "Un plateau continental", "Un point chaud"], answer: "Une chaîne de volcans sous-marins où se forme du plancher océanique", explication: "Aux dorsales, deux plaques s'écartent et du magma monte pour créer du nouveau plancher océanique (expansion). Ex : dorsale médio-atlantique." },
      { question: "Les ondes sismiques se divisent en…", options: ["Ondes de volume (P et S) et ondes de surface", "Ondes sonores et lumineuses", "Ondes de pression et de chaleur", "Ondes verticales et obliques"], answer: "Ondes de volume (P et S) et ondes de surface", explication: "Ondes P (primaires, compression, traversent tout) et S (cisaillement, ne traversent pas les liquides). Ondes de surface = plus destructrices." },
      { question: "La croûte continentale est différente de la croûte océanique car elle est…", options: ["Plus épaisse (30–70 km), moins dense, et constituée de roches granitiques", "Plus fine, plus dense, et constituée de basalte", "Identique en composition", "Plus jeune que la croûte océanique"], answer: "Plus épaisse (30–70 km), moins dense, et constituée de roches granitiques", explication: "Croûte continentale : 30–70 km, granite (~2,7 g/cm³). Croûte océanique : 5–10 km, basalte (~3 g/cm³), plus jeune (< 200 Ma)." },
      { question: "Le cycle des roches désigne…", options: ["Le processus de transformation entre roches magmatiques, sédimentaires et métamorphiques", "La rotation des roches autour du globe", "L'usure progressive des roches", "La formation des fossiles"], answer: "Le processus de transformation entre roches magmatiques, sédimentaires et métamorphiques", explication: "Les roches se transforment via érosion, sédimentation, fusion, métamorphisme. Aucun type de roche n'est permanent." },
      { question: "La convection mantellique est le moteur des plaques car…", options: ["La chaleur interne crée des cellules de convection qui entraînent les plaques", "Le vent déplace les plaques", "La gravité attire les plaques vers l'équateur", "Les séismes poussent les plaques"], answer: "La chaleur interne crée des cellules de convection qui entraînent les plaques", explication: "La chaleur radioactive du manteau crée des courants de convection (matière chaude monte, froide descend) qui font glisser les plaques." },
      { question: "Les fosses océaniques sont les endroits où…", options: ["Une plaque s'enfonce en subduction (zones les plus profondes des océans)", "De nouvelles roches se forment", "Les deux plaques s'écartent", "Le magma arrive en surface"], answer: "Une plaque s'enfonce en subduction (zones les plus profondes des océans)", explication: "La fosse des Mariannes (11 km de profondeur) est une zone de subduction. La plaque Pacifique plonge sous la plaque Philippine." },
      { question: "La radioactivité naturelle dans le noyau terrestre contribue à…", options: ["Maintenir la chaleur interne de la Terre", "Provoquer les séismes directement", "Former les volcans de surface", "Créer le champ magnétique seul"], answer: "Maintenir la chaleur interne de la Terre", explication: "La désintégration d'éléments radioactifs (uranium, thorium, potassium-40) produit de la chaleur, maintenant le manteau chaud et le noyau externe liquide." }
    ],
    3: [
      { question: "L'isostasie est le phénomène par lequel…", options: ["La lithosphère 'flotte' sur l'asthénosphère selon sa densité", "Les plaques glissent horizontalement", "Le manteau descend dans le noyau", "La croûte se comprime"], answer: "La lithosphère 'flotte' sur l'asthénosphère selon sa densité", explication: "Comme un iceberg sur l'eau, la lithosphère est en équilibre isostatique. Les montagnes ont des racines crustales profondes." },
      { question: "Le métamorphisme est la transformation des roches sous l'effet de…", options: ["Chaleur et/ou pression en profondeur sans fusion complète", "Érosion et transport", "Fusion totale du magma", "Dépôt de sédiments"], answer: "Chaleur et/ou pression en profondeur sans fusion complète", explication: "Le métamorphisme transforme les roches existantes (marbre ← calcaire, ardoise ← argile) sans les faire fondre complètement." },
      { question: "La datation radiométrique utilise la désintégration des atomes radioactifs pour…", options: ["Déterminer l'âge des roches et fossiles", "Mesurer la vitesse des plaques", "Prévoir les éruptions", "Mesurer la profondeur des séismes"], answer: "Déterminer l'âge des roches et fossiles", explication: "La vitesse de désintégration (demi-vie) étant constante, mesurer le rapport parent/fils permet de calculer l'âge. Ex : C14 pour < 50 000 ans." },
      { question: "L'obduction est l'inverse de la subduction : elle produit…", options: ["Une croûte océanique charriée sur une croûte continentale (ophiolites)", "Un plancher océanique neuf", "Une fosse de subduction", "Une dorsale"], answer: "Une croûte océanique charriée sur une croûte continentale (ophiolites)", explication: "L'obduction est rare : de la croûte océanique (ophiolites) se retrouve posée sur un continent. Ex : Oman." },
      { question: "Le point chaud de Yellowstone témoigne de…", options: ["Un panache mantellique fixe sous la lithosphère qui se déplace au-dessus", "Une zone de subduction", "Une dorsale continentale", "Un ancien volcan éteint"], answer: "Un panache mantellique fixe sous la lithosphère qui se déplace au-dessus", explication: "Un point chaud est un panache de magma fixe. La plaque défile au-dessus, créant une chaîne d'îles ou de volcans (Hawaii, Yellowstone)." },
      { question: "Les tsunamis sont causés par…", options: ["Des séismes sous-marins, glissements ou éruptions déplaçant une grande masse d'eau", "Des tempêtes exceptionnelles", "Le réchauffement climatique", "Les marées exceptionnelles"], answer: "Des séismes sous-marins, glissements ou éruptions déplaçant une grande masse d'eau", explication: "Un séisme sous-marin déplace verticalement le plancher océanique, créant une onde géante de grande longueur d'onde et haute vitesse." },
      { question: "La lithosphère se distingue de l'asthénosphère par…", options: ["Sa rigidité (lithosphère rigide, asthénosphère plastique/ductile)", "Sa composition chimique entièrement différente", "Sa température plus élevée", "Sa profondeur plus grande"], answer: "Sa rigidité (lithosphère rigide, asthénosphère plastique/ductile)", explication: "Lithosphère (< 100–200 km) = rigide. Asthénosphère (200–700 km) = ductile/plastique. Les plaques (lithosphère) glissent sur l'asthénosphère." },
      { question: "La chaîne de l'Himalaya résulte de…", options: ["La collision entre la plaque Indienne et la plaque Eurasienne (deux croûtes continentales)", "La subduction de la plaque Pacifique", "Un point chaud très actif", "La dorsale indien océanique"], answer: "La collision entre la plaque Indienne et la plaque Eurasienne (deux croûtes continentales)", explication: "Quand deux croûtes continentales entrent en collision, aucune ne peut subducter (trop légères) → elles se plissent et forment des montagnes." }
    ]
  },

  svt5Vivant: {
    id: 'svt5Vivant', nom: 'Diversité & reproduction du vivant', emoji: '🌱', couleur: '#15803d',
    1: [
      { question: "La reproduction sexuée nécessite…", options: ["La fusion de deux gamètes (cellules reproductrices)", "La division d'un seul organisme", "Uniquement des spores", "Aucune cellule spécialisée"], answer: "La fusion de deux gamètes (cellules reproductrices)", explication: "La reproduction sexuée = fécondation (fusion d'un gamète mâle et femelle). Elle produit un individu génétiquement différent des parents." },
      { question: "La reproduction asexuée produit des individus…", options: ["Génétiquement identiques au parent (clones)", "Génétiquement différents", "Avec de nouvelles mutations", "Issus de deux parents"], answer: "Génétiquement identiques au parent (clones)", explication: "Bouturage, stolons, bourgeonnement, division cellulaire → clones du parent. Pas de gamètes, pas de fécondation." },
      { question: "Un gamète est une cellule…", options: ["Reproductrice haploïde (n chromosomes)", "Diploïde (2n chromosomes)", "Contenant l'ADN de deux parents", "Identique à toutes les cellules du corps"], answer: "Reproductrice haploïde (n chromosomes)", explication: "Les gamètes (spermatozoïdes et ovules chez les animaux) ont n chromosomes. La fécondation rétablit 2n (diploïdie)." },
      { question: "La pollinisation des plantes à fleurs est assurée par…", options: ["Le vent, les insectes, les oiseaux ou l'eau", "Uniquement les abeilles", "Les racines", "La photosynthèse"], answer: "Le vent, les insectes, les oiseaux ou l'eau", explication: "Le pollen (gamète mâle) doit atteindre le pistil (gamète femelle). Les pollinisateurs (insectes surtout) jouent un rôle crucial." },
      { question: "La fécondation chez les mammifères est…", options: ["Interne (dans l'appareil reproducteur femelle)", "Externe dans l'eau", "Réalisée dans un œuf à coquille", "Asexuée"], answer: "Interne (dans l'appareil reproducteur femelle)", explication: "Chez les mammifères placentaires, la fécondation est interne et le développement se fait dans l'utérus (viviparité)." },
      { question: "La biodiversité comprend la diversité…", options: ["Des gènes, des espèces et des écosystèmes", "Uniquement des espèces animales", "Des plantes uniquement", "Des sols"], answer: "Des gènes, des espèces et des écosystèmes", explication: "La biodiversité a trois niveaux : génétique (variété au sein d'une espèce), spécifique (nombre d'espèces), écosystémique (variété des milieux)." },
      { question: "Les mutations génétiques sont…", options: ["Des modifications de la séquence d'ADN", "Des changements de comportement", "Des variations épigénétiques toujours", "Des infections virales"], answer: "Des modifications de la séquence d'ADN", explication: "Les mutations = changements dans la séquence de bases de l'ADN. Elles peuvent être neutres, bénéfiques ou délétères." },
      { question: "Chez les végétaux, la photosynthèse a lieu principalement dans…", options: ["Les chloroplastes des cellules des feuilles", "Les racines", "Les fleurs", "Le tronc"], answer: "Les chloroplastes des cellules des feuilles", explication: "Les chloroplastes contiennent la chlorophylle. La photosynthèse : CO₂ + H₂O + lumière → glucose + O₂." }
    ],
    2: [
      { question: "La méiose est une division cellulaire qui…", options: ["Produit 4 cellules haploïdes (gamètes) à partir d'une cellule diploïde", "Produit 2 cellules identiques à la cellule mère", "Double le nombre de chromosomes", "Répare l'ADN endommagé"], answer: "Produit 4 cellules haploïdes (gamètes) à partir d'une cellule diploïde", explication: "La méiose (2 divisions) produit 4 cellules à n chromosomes (gamètes). Elle introduit de la diversité génétique par brassage." },
      { question: "La sélection naturelle favorise les individus qui…", options: ["Sont les mieux adaptés à leur environnement et se reproduisent davantage", "Sont les plus grands et les plus forts", "Ont le plus de mutations", "Vivent le plus longtemps"], answer: "Sont les mieux adaptés à leur environnement et se reproduisent davantage", explication: "Darwin : les individus avec des variations avantageuses survivent mieux et transmettent ces caractères à leur descendance." },
      { question: "L'ADN est une molécule…", options: ["Double brin en hélice, support de l'information génétique", "Simple brin, support des protéines", "Lipidique, constituant des membranes", "Glucidique, source d'énergie"], answer: "Double brin en hélice, support de l'information génétique", explication: "L'ADN (Watson et Crick, 1953) : double hélice de nucléotides (A-T, G-C). Il encode l'information génétique transmise aux descendants." },
      { question: "Un gène est…", options: ["Un segment d'ADN codant pour une protéine ou un ARN", "Un chromosome entier", "Une mutation héréditaire", "Une cellule spécialisée"], answer: "Un segment d'ADN codant pour une protéine ou un ARN", explication: "Un gène = séquence de bases sur l'ADN qui contient l'information pour synthétiser une protéine spécifique." },
      { question: "La pollinisation croisée favorise…", options: ["La diversité génétique au sein de l'espèce", "Le clonage des plantes", "La reproduction asexuée", "La disparition des espèces"], answer: "La diversité génétique au sein de l'espèce", explication: "L'échange de pollen entre individus différents mélange les gènes, augmentant la diversité et l'adaptabilité de l'espèce." },
      { question: "L'extinction d'une espèce est irréversible car…", options: ["Son information génétique unique est perdue définitivement", "Les espèces peuvent réapparaître spontanément", "Les fossiles permettent de la recréer", "Les espèces proches la remplacent identiquement"], answer: "Son information génétique unique est perdue définitivement", explication: "L'ADN d'une espèce éteinte disparaît avec ses derniers individus (sauf fossiles avec ADN conservé exceptionnellement)." },
      { question: "La domestication des animaux a produit…", options: ["Des races très différentes de l'espèce sauvage d'origine par sélection artificielle", "Des espèces nouvelles indépendantes", "Des clones de l'ancêtre sauvage", "Des hybrides stériles uniquement"], answer: "Des races très différentes de l'espèce sauvage d'origine par sélection artificielle", explication: "L'Homme a sélectionné des caractères utiles pendant des millénaires : chiens, vaches, blé sont très éloignés de leurs ancêtres sauvages." },
      { question: "La symbiose est une relation entre deux espèces où…", options: ["Les deux bénéficient mutuellement de l'association", "L'une profite et l'autre est neutre", "L'une profite aux dépens de l'autre", "Les deux sont indifférentes"], answer: "Les deux bénéficient mutuellement de l'association", explication: "Symbiose : mutualisme où les deux partenaires bénéficient (lichens = algue + champignon, légumineuses + bactéries fixatrices d'azote)." }
    ],
    3: [
      { question: "L'épigénétique étudie…", options: ["Les modifications de l'expression des gènes sans changement de la séquence d'ADN", "Les mutations héréditaires", "La structure de l'ADN", "La méiose"], answer: "Les modifications de l'expression des gènes sans changement de la séquence d'ADN", explication: "L'épigénétique : méthylation de l'ADN, modification des histones → gènes activés ou silencieux sans changer la séquence." },
      { question: "La spéciation est le processus par lequel…", options: ["Une espèce se divise en deux espèces distinctes qui ne peuvent plus se reproduire entre elles", "Une espèce disparaît", "Deux espèces fusionnent", "Une espèce migre vers un nouveau milieu"], answer: "Une espèce se divise en deux espèces distinctes qui ne peuvent plus se reproduire entre elles", explication: "La spéciation allopatrique : isolement géographique → divergence génétique → deux espèces incapables de se reproduire ensemble." },
      { question: "Le taux de mutation est plus élevé dans les cellules exposées à…", options: ["Rayons UV, radiations ionisantes, agents chimiques mutagènes", "Températures basses", "Milieux salins", "Lumière visible"], answer: "Rayons UV, radiations ionisantes, agents chimiques mutagènes", explication: "Les UV (soleil) causent des dimères de thymine. Les radiations ionisantes cassent l'ADN. Certains produits chimiques (cancérigènes) modifient les bases." },
      { question: "La parthénogenèse est une forme de reproduction où…", options: ["L'ovule se développe sans fécondation", "Deux femelles s'accouplent", "Un individu se divise en deux", "L'embryon se forme sans ADN maternel"], answer: "L'ovule se développe sans fécondation", explication: "Certains insectes (abeilles mâles = faux bourdons), reptiles et poissons peuvent se reproduire par parthénogenèse (ovule non fécondé)." },
      { question: "L'arbre phylogénétique représente…", options: ["Les relations évolutives entre espèces basées sur leurs caractères communs", "La classification géographique des espèces", "L'âge des espèces", "La ressemblance morphologique uniquement"], answer: "Les relations évolutives entre espèces basées sur leurs caractères communs", explication: "L'arbre phylogénétique montre les ancêtres communs et la divergence évolutive. Il est basé sur les données moléculaires et morphologiques." },
      { question: "La polyploïdie (ex : blé hexaploïde) est le fait d'avoir…", options: ["Plus de deux jeux de chromosomes par cellule", "Un seul jeu de chromosomes", "Des chromosomes anormalement courts", "Une duplication d'un seul gène"], answer: "Plus de deux jeux de chromosomes par cellule", explication: "Le blé hexaploïde (6n = 42 chromosomes) résulte de croisements naturels entre espèces. La polyploïdie crée souvent de nouvelles espèces." },
      { question: "Le code génétique est universel, ce qui signifie…", options: ["Le même codon code pour le même acide aminé dans tous les êtres vivants", "Tous les êtres vivants ont le même ADN", "Toutes les protéines sont identiques", "Tous les génomes ont la même taille"], answer: "Le même codon code pour le même acide aminé dans tous les êtres vivants", explication: "L'universalité du code génétique prouve l'unité du vivant et une origine commune de toutes les espèces." },
      { question: "La théorie endosymbiotique (Margulis) explique l'origine des…", options: ["Mitochondries et chloroplastes (anciennement des bactéries libres)", "Noyaux cellulaires", "Membranes cellulaires", "Ribosomes"], answer: "Mitochondries et chloroplastes (anciennement des bactéries libres)", explication: "Les mitochondries et chloroplastes auraient été des bactéries englouties par une cellule hôte il y a ~1,5 milliard d'années (endosymbiose)." }
    ]
  },

  // ══════════════════════════════════════════
  //  PHYSIQUE-CHIMIE 5ème — programme officiel
  // ══════════════════════════════════════════

  physique5Electricite: {
    id: 'physique5Electricite', nom: 'Électricité & circuits', emoji: '⚡', couleur: '#dc2626',
    1: [
      { question: "Dans un circuit électrique en série, les composants sont…", options: ["Montés les uns à la suite des autres sur un seul fil", "Branchés en parallèle sur la même tension", "Indépendants les uns des autres", "Connectés à deux sources différentes"], answer: "Montés les uns à la suite des autres sur un seul fil", explication: "Circuit série : un seul chemin pour le courant. Si un composant est coupé, tout le circuit s'arrête." },
      { question: "L'intensité du courant électrique se mesure avec…", options: ["Un ampèremètre, en série dans le circuit", "Un voltmètre, en parallèle", "Un ohmmètre, en dehors du circuit", "Un thermomètre"], answer: "Un ampèremètre, en série dans le circuit", explication: "L'ampèremètre mesure l'intensité (en ampères). Il doit être placé en série car il mesure le courant qui le traverse." },
      { question: "La tension électrique se mesure avec…", options: ["Un voltmètre, en parallèle aux bornes du composant", "Un ampèremètre, en série", "Un ohmmètre, en dehors du circuit", "Un wattmètre"], answer: "Un voltmètre, en parallèle aux bornes du composant", explication: "Le voltmètre mesure la différence de potentiel (en volts) entre deux points. Il se branche en parallèle." },
      { question: "La loi d'Ohm relie…", options: ["Tension (U), intensité (I) et résistance (R) : U = R × I", "Puissance, tension et courant", "Énergie, temps et puissance", "Charge, capacité et tension"], answer: "Tension (U), intensité (I) et résistance (R) : U = R × I", explication: "Loi d'Ohm : U = R × I. Si R = 10 Ω et I = 2 A, alors U = 20 V." },
      { question: "Dans un circuit en dérivation (parallèle), la tension aux bornes de chaque branche est…", options: ["La même", "Divisée selon les résistances", "Nulle dans la branche secondaire", "Double de la tension totale"], answer: "La même", explication: "En dérivation, tous les composants reçoivent la même tension. C'est ainsi que fonctionnent les prises domestiques." },
      { question: "Un interrupteur ouvert dans un circuit…", options: ["Coupe le circuit et arrête le courant", "Double l'intensité", "N'a aucun effet", "Inverse le sens du courant"], answer: "Coupe le circuit et arrête le courant", explication: "Un circuit ouvert = rupture du trajet du courant. L'interrupteur ouvert crée un 'vide' que le courant ne peut pas franchir." },
      { question: "L'unité de résistance électrique est…", options: ["L'ohm (Ω)", "L'ampère (A)", "Le volt (V)", "Le watt (W)"], answer: "L'ohm (Ω)", explication: "Résistance en ohms (Ω). Tension en volts (V). Intensité en ampères (A). Puissance en watts (W)." },
      { question: "Une pile ou batterie est une source d'énergie qui…", options: ["Convertit de l'énergie chimique en énergie électrique", "Stocke de l'électricité directement", "Produit du courant alternatif", "Crée de l'électricité à partir de la lumière"], answer: "Convertit de l'énergie chimique en énergie électrique", explication: "La pile : réactions chimiques → énergie électrique. Les panneaux solaires convertissent de la lumière, les générateurs de l'énergie mécanique." }
    ],
    2: [
      { question: "Calcule la résistance d'un composant sous 12 V traversé par 3 A.", options: ["4 Ω", "36 Ω", "9 Ω", "0,25 Ω"], answer: "4 Ω", explication: "R = U / I = 12 / 3 = 4 Ω. (Loi d'Ohm : U = R × I → R = U / I)." },
      { question: "Dans un circuit série avec deux résistances R₁ = 4 Ω et R₂ = 6 Ω, la résistance totale est…", options: ["10 Ω", "24 Ω", "1,2 Ω", "2,4 Ω"], answer: "10 Ω", explication: "En série : R_total = R₁ + R₂ = 4 + 6 = 10 Ω. Les résistances s'additionnent." },
      { question: "La puissance électrique se calcule par…", options: ["P = U × I", "P = U / I", "P = U² / R seulement", "P = I / R"], answer: "P = U × I", explication: "Puissance électrique P (watts) = tension U (volts) × intensité I (ampères). Aussi P = R × I² = U²/R." },
      { question: "Un appareil de 1000 W utilisé pendant 2 heures consomme…", options: ["2 kWh", "2000 Wh = 2 kWh", "500 Wh", "1 kWh"], answer: "2 kWh", explication: "Énergie = puissance × temps = 1000 W × 2 h = 2000 Wh = 2 kWh. Le kWh est l'unité de la facture d'électricité." },
      { question: "Le courant alternatif (AC) se distingue du courant continu (DC) par…", options: ["Il change de sens périodiquement (50 Hz en Europe)", "Il ne change jamais de sens", "Il est uniquement produit par les piles", "Il est moins dangereux"], answer: "Il change de sens périodiquement (50 Hz en Europe)", explication: "Le réseau domestique (220 V, 50 Hz) est en courant alternatif. Les piles et batteries produisent du courant continu." },
      { question: "Un fusible protège un circuit contre…", options: ["Les surcharges de courant (court-circuit)", "Les baisses de tension", "L'humidité", "Les fluctuations de fréquence"], answer: "Les surcharges de courant (court-circuit)", explication: "Le fusible contient un filament qui fond si l'intensité dépasse un seuil → circuit ouvert → protection de l'installation." },
      { question: "En dérivation, si R₁ = 6 Ω et R₂ = 3 Ω, la résistance équivalente est…", options: ["2 Ω", "9 Ω", "0,5 Ω", "18 Ω"], answer: "2 Ω", explication: "En dérivation : 1/R_éq = 1/R₁ + 1/R₂ = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. R_éq = 2 Ω." },
      { question: "Le rendement d'un appareil électrique est…", options: ["L'énergie utile produite divisée par l'énergie consommée (×100 %)", "La puissance maximale", "La tension d'alimentation", "Le rapport courant/tension"], answer: "L'énergie utile produite divisée par l'énergie consommée (×100 %)", explication: "Rendement η = E_utile / E_consommée × 100. Une ampoule LED a un rendement de ~80 % (contre ~5 % pour une ampoule à incandescence)." }
    ],
    3: [
      { question: "La loi des nœuds stipule que…", options: ["La somme des courants entrants = somme des courants sortants en un nœud", "La somme des tensions dans un circuit = 0", "Les résistances s'additionnent en série", "La tension est identique en tout point"], answer: "La somme des courants entrants = somme des courants sortants en un nœud", explication: "Loi de Kirchhoff pour les nœuds : ΣI_entrants = ΣI_sortants. Conservation de la charge électrique." },
      { question: "La loi des mailles stipule que…", options: ["La somme algébrique des tensions dans une maille fermée = 0", "Les intensités s'additionnent en série", "La résistance totale = produit des résistances", "La tension se divise par deux en parallèle"], answer: "La somme algébrique des tensions dans une maille fermée = 0", explication: "Loi de Kirchhoff pour les mailles : en faisant le tour d'une maille, la somme des tensions (avec signe) est nulle." },
      { question: "L'effet Joule dans un conducteur désigne…", options: ["La transformation d'énergie électrique en chaleur due à la résistance", "La production d'un champ magnétique", "La luminescence d'un conducteur", "La chute de tension"], answer: "La transformation d'énergie électrique en chaleur due à la résistance", explication: "P_Joule = R × I². Les résistances chauffent (radiateurs, grille-pain). C'est la source de pertes dans les lignes électriques." },
      { question: "Un condensateur stocke de l'énergie sous forme de…", options: ["Champ électrique (charges séparées entre deux armatures)", "Énergie chimique", "Champ magnétique", "Énergie mécanique"], answer: "Champ électrique (charges séparées entre deux armatures)", explication: "Le condensateur accumule des charges sur ses armatures séparées par un isolant. L'énergie = ½ × C × U²." },
      { question: "La résistivité d'un matériau dépend de…", options: ["Sa nature (matériau) et sa température", "Uniquement sa longueur", "Uniquement sa section", "La tension appliquée"], answer: "Sa nature (matériau) et sa température", explication: "R = ρ × L / S où ρ est la résistivité (propre au matériau), L la longueur et S la section. La température augmente ρ des métaux." },
      { question: "Un solénoïde parcouru par un courant crée…", options: ["Un champ magnétique", "Un champ électrostatique", "De la lumière", "De la chaleur uniquement"], answer: "Un champ magnétique", explication: "Un solénoïde (bobine de fils) parcouru par un courant se comporte comme un aimant. Base du fonctionnement des moteurs électriques." },
      { question: "L'induction électromagnétique (Faraday) est le phénomène par lequel…", options: ["Une variation de flux magnétique crée une force électromotrice (courant)", "Un courant crée un champ magnétique", "Deux charges s'attirent", "La lumière produit de l'électricité"], answer: "Une variation de flux magnétique crée une force électromotrice (courant)", explication: "Faraday (1831) : bouger un aimant près d'un bobinage crée un courant induit. Base des alternateurs et transformateurs." },
      { question: "Les semi-conducteurs (silicium, germanium) sont utilisés car…", options: ["Leur conductivité est intermédiaire et contrôlable (transistors, diodes, circuits intégrés)", "Ils conduisent mieux que les métaux", "Ils sont de parfaits isolants", "Ils n'obéissent pas à la loi d'Ohm (faux : ils y obéissent)"], answer: "Leur conductivité est intermédiaire et contrôlable (transistors, diodes, circuits intégrés)", explication: "Les semi-conducteurs peuvent être rendus conducteurs ou isolants selon les conditions → base de toute l'électronique moderne." }
    ]
  },

  physique5Lumiere: {
    id: 'physique5Lumiere', nom: 'Lumière & optique', emoji: '🔦', couleur: '#dc2626',
    1: [
      { question: "La lumière visible se propage…", options: ["En ligne droite dans un milieu homogène", "En courbe dans l'air", "Plus vite dans l'eau que dans l'air", "À vitesse variable dans le vide"], answer: "En ligne droite dans un milieu homogène", explication: "La propagation rectiligne de la lumière explique les ombres, les éclipses et le fonctionnement des appareils optiques." },
      { question: "La vitesse de la lumière dans le vide est approximativement…", options: ["300 000 km/s", "3 000 km/s", "30 km/s", "300 km/s"], answer: "300 000 km/s", explication: "c ≈ 3 × 10⁸ m/s = 300 000 km/s. La lumière parcourt 300 000 km en 1 seconde. Elle met ~8 minutes pour aller du Soleil à la Terre." },
      { question: "Lors de la réflexion de la lumière, l'angle de réflexion est…", options: ["Égal à l'angle d'incidence", "Double de l'angle d'incidence", "Toujours 45°", "Toujours 90°"], answer: "Égal à l'angle d'incidence", explication: "Loi de la réflexion : angle d'incidence = angle de réflexion (mesurés par rapport à la normale à la surface)." },
      { question: "La réfraction est le changement de direction de la lumière…", options: ["Lors du passage d'un milieu transparent à un autre", "Lors d'une réflexion totale", "Dans le vide", "Lors du contact avec un objet opaque"], answer: "Lors du passage d'un milieu transparent à un autre", explication: "La lumière change de vitesse (et donc de direction) quand elle passe de l'air à l'eau ou au verre. C'est la réfraction." },
      { question: "La décomposition de la lumière blanche par un prisme donne…", options: ["Un spectre continu de couleurs (arc-en-ciel)", "Une seule couleur amplifiée", "De la lumière noire", "Des ondes radio"], answer: "Un spectre continu de couleurs (arc-en-ciel)", explication: "Newton (1666) : la lumière blanche est un mélange de toutes les couleurs. Le prisme les sépare car chaque couleur réfracte différemment." },
      { question: "Une source lumineuse primaire…", options: ["Émet de la lumière par elle-même (soleil, lampe, bougie)", "Réfléchit la lumière d'une autre source", "Absorbe toute la lumière", "Ne peut pas être vue directement"], answer: "Émet de la lumière par elle-même (soleil, lampe, bougie)", explication: "Sources primaires : étoiles, lampes, LED, bougies. Sources secondaires (diffusantes) : Lune, planètes, objets éclairés." },
      { question: "Un objet opaque ne laisse pas passer la lumière et crée…", options: ["Une ombre", "Un arc-en-ciel", "Une réfraction", "Un spectre lumineux"], answer: "Une ombre", explication: "Un objet opaque absorbe ou réfléchit la lumière. Derrière lui, la zone privée de lumière directe est l'ombre." },
      { question: "La lumière laser est caractérisée par…", options: ["Une seule longueur d'onde (monochromatique), cohérente et directionnelle", "Un mélange de toutes les couleurs", "Une faible intensité", "Une vitesse plus grande que la lumière ordinaire"], answer: "Une seule longueur d'onde (monochromatique), cohérente et directionnelle", explication: "Le laser (Light Amplification by Stimulated Emission of Radiation) émet une lumière monochromatique et très concentrée." }
    ],
    2: [
      { question: "L'indice de réfraction d'un milieu n est défini par…", options: ["n = vitesse lumière dans le vide / vitesse lumière dans le milieu", "n = angle d'incidence / angle de réfraction", "n = longueur d'onde / fréquence", "n = intensité lumineuse / puissance"], answer: "n = vitesse lumière dans le vide / vitesse lumière dans le milieu", explication: "n = c / v. Le verre a n ≈ 1,5, l'eau n ≈ 1,33. Plus n est grand, plus la lumière ralentit dans ce milieu." },
      { question: "La loi de Snell-Descartes pour la réfraction est…", options: ["n₁ × sin θ₁ = n₂ × sin θ₂", "n₁ × θ₁ = n₂ × θ₂", "sin θ₁ / sin θ₂ = n₁ + n₂", "θ₁ = θ₂ quand n₁ = n₂"], answer: "n₁ × sin θ₁ = n₂ × sin θ₂", explication: "La loi de Snell-Descartes relie les angles de réfraction aux indices des deux milieux. Si n₁ < n₂ le rayon se rapproche de la normale." },
      { question: "La réflexion totale interne se produit quand…", options: ["L'angle d'incidence dépasse l'angle critique (dans un milieu dense vers rare)", "L'angle d'incidence est nul", "La lumière passe du vide à un solide", "Le milieu est parfaitement transparent"], answer: "L'angle d'incidence dépasse l'angle critique (dans un milieu dense vers rare)", explication: "Base des fibres optiques : la lumière est piégée dans le verre par réflexion totale interne → transmission sans perte." },
      { question: "Une lentille convergente fait converger les rayons lumineux parallèles vers…", options: ["Son foyer image (F')", "Son centre optique uniquement", "Un point à l'infini", "La source lumineuse"], answer: "Son foyer image (F')", explication: "Les lentilles convexes (plus épaisses au centre) font converger la lumière. Base des loupes, lunettes, appareils photo." },
      { question: "La distance focale f' d'une lentille est la distance entre…", options: ["Le centre optique et le foyer image", "Les deux foyers", "La lentille et l'objet", "L'objet et l'image"], answer: "Le centre optique et le foyer image", explication: "f' = OFʼ. La vergence V = 1/f' (en dioptries). Plus la lentille est courbée, plus f' est court et V grand." },
      { question: "Pourquoi le ciel est-il bleu ?", options: ["La diffusion de Rayleigh : l'atmosphère diffuse davantage les courtes longueurs d'onde (bleu)", "La réflexion du bleu de la mer", "La réfraction de la lumière solaire", "L'absorption des autres couleurs par l'ozone"], answer: "La diffusion de Rayleigh : l'atmosphère diffuse davantage les courtes longueurs d'onde (bleu)", explication: "Les molécules d'air diffusent les courtes longueurs d'onde (bleu, violet) plus efficacement. On voit le bleu dans toutes les directions." },
      { question: "Un miroir plan forme une image…", options: ["Virtuelle, droite, symétrique à l'objet par rapport au miroir", "Réelle, inversée, plus petite", "Réelle, droite, même taille", "Virtuelle, inversée, plus grande"], answer: "Virtuelle, droite, symétrique à l'objet par rapport au miroir", explication: "L'image dans un miroir plan est virtuelle (derrière le miroir), de même taille et symétrique par rapport à la surface du miroir." },
      { question: "La couleur d'un objet opaque dépend des longueurs d'onde qu'il…", options: ["Réfléchit (les autres sont absorbées)", "Absorbe uniquement", "Émet par lui-même", "Réfracte vers l'observateur"], answer: "Réfléchit (les autres sont absorbées)", explication: "Un objet rouge réfléchit les longueurs d'onde rouges et absorbe les autres. Un objet noir absorbe quasiment toutes les longueurs d'onde." }
    ],
    3: [
      { question: "La dispersion chromatique dans un prisme est due au fait que…", options: ["L'indice de réfraction dépend de la longueur d'onde (violet réfracte plus que rouge)", "Chaque couleur a une vitesse différente dans le vide", "Le prisme absorbe certaines couleurs", "L'intensité lumineuse varie selon la couleur"], answer: "L'indice de réfraction dépend de la longueur d'onde (violet réfracte plus que rouge)", explication: "n est plus grand pour les courtes longueurs d'onde (violet). Elles réfractent donc plus, d'où la séparation des couleurs." },
      { question: "La myopie est un défaut de l'œil où…", options: ["L'image se forme avant la rétine (œil trop convergent ou trop long)", "L'image se forme après la rétine", "Le cristallin est trop rigide", "La cornée est transparente"], answer: "L'image se forme avant la rétine (œil trop convergent ou trop long)", explication: "Myope : voit net de près, flou de loin. Correction : lentille divergente (verre négatif) ou LASIK." },
      { question: "L'hypermétropie est un défaut de l'œil où…", options: ["L'image se forme après la rétine (œil pas assez convergent ou trop court)", "L'image se forme avant la rétine", "L'œil voit flou de près et de loin", "Le cristallin a durci"], answer: "L'image se forme après la rétine (œil pas assez convergent ou trop court)", explication: "Hypermétrope : voit flou de près (et parfois de loin). Correction : lentille convergente (verre positif)." },
      { question: "La fibre optique transmet l'information grâce au principe de…", options: ["Réflexion totale interne", "Réfraction maximale", "Diffusion de Rayleigh", "Absorption sélective"], answer: "Réflexion totale interne", explication: "La lumière rebondit sans cesse à l'interface verre/gaine (réflexion totale interne) et se propage sur des milliers de km sans perte." },
      { question: "Un spectre d'absorption montre les longueurs d'onde…", options: ["Absorbées par une substance (raies sombres dans un spectre continu)", "Émises par une substance", "Réfléchies par un miroir", "Diffractées par un réseau"], answer: "Absorbées par une substance (raies sombres dans un spectre continu)", explication: "Chaque atome/molécule absorbe des longueurs d'onde spécifiques → raies sombres. Signature unique utilisée en astrophysique." },
      { question: "La dualité onde-corpuscule de la lumière signifie que…", options: ["La lumière se comporte parfois comme une onde et parfois comme un flux de particules (photons)", "La lumière est uniquement une onde", "La lumière est uniquement faite de particules", "La lumière oscille entre deux états"], answer: "La lumière se comporte parfois comme une onde et parfois comme un flux de particules (photons)", explication: "Selon le contexte, la lumière se manifeste comme onde (diffraction, interférence) ou comme corpuscule (photon : effet photoélectrique)." },
      { question: "La vergence d'une lentille (en dioptries) vaut…", options: ["V = 1/f' (où f' est la distance focale en mètres)", "V = f' × n", "V = n₁ - n₂", "V = c/λ"], answer: "V = 1/f' (où f' est la distance focale en mètres)", explication: "V = 1/f' (dioptries). Ex : f' = 50 cm = 0,5 m → V = 2 δ. Les verres correcteurs sont prescrits en dioptries." },
      { question: "L'interférence lumineuse se produit quand…", options: ["Deux ondes lumineuses cohérentes se superposent (franges claires/sombres)", "Deux rayons se réfractent simultanément", "Un rayon se réfléchit sur deux miroirs", "Une onde change de milieu"], answer: "Deux ondes lumineuses cohérentes se superposent (franges claires/sombres)", explication: "Les interférences (expérience des fentes de Young) prouvent la nature ondulatoire de la lumière : les ondes se renforcent ou s'annulent." }
    ]
  },

  physique5Matiere: {
    id: 'physique5Matiere', nom: 'Matière, mélanges & transformations', emoji: '⚗️', couleur: '#dc2626',
    1: [
      { question: "Les trois états de la matière sont…", options: ["Solide, liquide, gaz", "Dur, mou, fluide", "Dense, léger, volatil", "Cristallin, amorphe, gazeux"], answer: "Solide, liquide, gaz", explication: "Solide : forme et volume propres. Liquide : volume propre, prend la forme du récipient. Gaz : ni forme ni volume propres." },
      { question: "La fusion est le passage de l'état…", options: ["Solide → liquide", "Liquide → gaz", "Gaz → liquide", "Liquide → solide"], answer: "Solide → liquide", explication: "Fusion : solide → liquide (ex : glace à 0°C). Solidification : liquide → solide. Vaporisation : liquide → gaz. Condensation : gaz → liquide." },
      { question: "Un mélange homogène est…", options: ["Un mélange dont on ne distingue pas les constituants à l'œil nu", "Un mélange avec des phases visibles", "Un mélange de deux solides", "Un mélange non miscible"], answer: "Un mélange dont on ne distingue pas les constituants à l'œil nu", explication: "Mélange homogène (solution) : eau + sel, eau + alcool. On ne voit pas les constituants. Mélange hétérogène : eau + huile, eau + sable." },
      { question: "La distillation permet de…", options: ["Séparer des liquides miscibles ayant des températures d'ébullition différentes", "Filtrer les solides en suspension", "Séparer deux liquides non miscibles", "Dissoudre un solide dans un liquide"], answer: "Séparer des liquides miscibles ayant des températures d'ébullition différentes", explication: "Ex : eau (100°C) et alcool (78°C). On chauffe → alcool se vaporise en premier → condensation → récupération séparée." },
      { question: "Un corps pur se distingue d'un mélange car…", options: ["Il a une température de fusion bien définie et constante", "Il est toujours liquide", "Il ne se vaporise jamais", "Il ne se dissout pas dans l'eau"], answer: "Il a une température de fusion bien définie et constante", explication: "L'eau pure fond exactement à 0°C. L'eau salée fond à une température inférieure. Le palier de fusion est caractéristique d'un corps pur." },
      { question: "La chromatographie permet de…", options: ["Séparer et identifier les constituants d'un mélange coloré", "Mesurer la masse d'un mélange", "Distiller un liquide pur", "Tester le pH d'une solution"], answer: "Séparer et identifier les constituants d'un mélange coloré", explication: "En CCM (chromatographie sur couche mince), les constituants migrent à des vitesses différentes selon leur solubilité → taches séparées." },
      { question: "La densité (ou masse volumique) d'un objet est…", options: ["Sa masse divisée par son volume (kg/m³ ou g/cm³)", "Sa masse multipliée par son volume", "Son poids en Newton", "Sa masse uniquement"], answer: "Sa masse divisée par son volume (kg/m³ ou g/cm³)", explication: "ρ = m / V. L'eau a une densité de 1 g/cm³. Un objet de densité > 1 coule dans l'eau, < 1 flotte." },
      { question: "La solubilité d'un solide dans l'eau augmente généralement quand…", options: ["La température augmente", "La température diminue", "La pression diminue", "Le volume d'eau diminue"], answer: "La température augmente", explication: "La plupart des solides (sucre, sel) sont plus solubles à chaud. Exceptions : certains sels (sulfate de cérium) sont moins solubles à chaud." }
    ],
    2: [
      { question: "La sublimation est le passage direct de l'état…", options: ["Solide → gaz (sans passer par l'état liquide)", "Liquide → gaz", "Gaz → solide", "Solide → liquide"], answer: "Solide → gaz (sans passer par l'état liquide)", explication: "Ex : la glace carbonique (CO₂ solide) se sublime à −78°C. La neige carbonique, les boules de naphtaline se subliment." },
      { question: "La concentration d'une solution en g/L est…", options: ["La masse de soluté dissoute par litre de solution", "Le volume de soluté", "La masse du solvant uniquement", "Le rapport masse/température"], answer: "La masse de soluté dissoute par litre de solution", explication: "C = m_soluté / V_solution. Ex : 10 g de sel dans 500 mL = 20 g/L." },
      { question: "Une réaction chimique se distingue d'un changement d'état car…", options: ["Elle forme de nouvelles substances avec de nouvelles propriétés", "Elle est réversible", "Elle ne change pas la masse totale", "Elle implique uniquement l'eau"], answer: "Elle forme de nouvelles substances avec de nouvelles propriétés", explication: "Changement d'état : même substance, autre forme (glace → eau). Réaction chimique : nouveaux corps (fer + soufre → sulfure de fer)." },
      { question: "La loi de conservation de la masse (Lavoisier) stipule que…", options: ["Rien ne se crée ni ne se perd dans une réaction chimique", "La masse augmente lors d'une réaction", "Les réactifs ont toujours moins de masse que les produits", "La masse change si de l'énergie est libérée"], answer: "Rien ne se crée ni ne se perd dans une réaction chimique", explication: "m(réactifs) = m(produits). Lavoisier (1785) : 'Rien ne se perd, rien ne se crée, tout se transforme.'" },
      { question: "Le pH mesure…", options: ["L'acidité ou basicité d'une solution (0 = très acide, 7 = neutre, 14 = très basique)", "La concentration en sel d'une solution", "La température d'ébullition", "La densité d'une solution"], answer: "L'acidité ou basicité d'une solution (0 = très acide, 7 = neutre, 14 = très basique)", explication: "pH < 7 = acide (vinaigre pH 3), pH = 7 = neutre (eau pure), pH > 7 = basique (soude pH 13)." },
      { question: "Une solution acide contient en excès des ions…", options: ["Hydronium (H₃O⁺)", "Hydroxyde (OH⁻)", "Sodium (Na⁺)", "Chlorure (Cl⁻)"], answer: "Hydronium (H₃O⁺)", explication: "Solution acide : [H₃O⁺] > [OH⁻]. Solution basique : [OH⁻] > [H₃O⁺]. Solution neutre : [H₃O⁺] = [OH⁻]." },
      { question: "La filtration permet de séparer…", options: ["Un solide non dissous d'un liquide", "Deux liquides miscibles", "Un soluté d'une solution", "Des ions d'une solution"], answer: "Un solide non dissous d'un liquide", explication: "La filtration retient les particules solides insolubles (ex : sable dans l'eau). Elle ne peut pas séparer un soluté dissous." },
      { question: "Quand on mélange un acide fort et une base forte en quantités stœchiométriques, on obtient…", options: ["Une solution neutre (sel + eau) : neutralisation", "Un acide plus fort", "Une base plus forte", "Un gaz nocif"], answer: "Une solution neutre (sel + eau) : neutralisation", explication: "HCl + NaOH → NaCl + H₂O. La neutralisation produit un sel et de l'eau. La solution finale a pH = 7 (si proportions exactes)." }
    ],
    3: [
      { question: "L'équation de réaction chimique doit être équilibrée car…", options: ["La loi de conservation des atomes : même nombre d'atomes de chaque élément avant et après", "Les produits doivent peser plus que les réactifs", "Les molécules doivent être de même taille", "C'est une convention arbitraire"], answer: "La loi de conservation des atomes : même nombre d'atomes de chaque élément avant et après", explication: "On équilibre en ajustant les coefficients stœchiométriques, pas les indices des molécules." },
      { question: "La tension superficielle de l'eau est due à…", options: ["Les liaisons hydrogène entre molécules d'eau en surface", "La viscosité élevée de l'eau", "La faible densité de l'eau", "Les ions dissous dans l'eau"], answer: "Les liaisons hydrogène entre molécules d'eau en surface", explication: "Les molécules en surface n'ont pas de voisines au-dessus → elles se resserrent. C'est ce qui permet à certains insectes de marcher sur l'eau." },
      { question: "La réaction d'oxydoréduction implique un transfert de…", options: ["Électrons entre réducteur (se oxyde) et oxydant (se réduit)", "Protons entre acide et base", "Photons entre deux atomes", "Chaleur entre deux corps"], answer: "Électrons entre réducteur (se oxyde) et oxydant (se réduit)", explication: "Oxydation = perte d'électrons. Réduction = gain d'électrons. Les deux se font simultanément (RED-OX : réduction-oxydation)." },
      { question: "La mole est une unité qui représente…", options: ["6,02 × 10²³ entités (atomes, molécules, ions)", "1 g de n'importe quelle substance", "Le nombre d'atomes dans 1 cm³", "La masse atomique d'un élément"], answer: "6,02 × 10²³ entités (atomes, molécules, ions)", explication: "1 mole = nombre d'Avogadro (Nₐ = 6,02 × 10²³) d'entités. La masse molaire M (g/mol) d'une molécule = somme des masses atomiques." },
      { question: "La liaison covalente est une liaison chimique formée par…", options: ["Le partage d'électrons entre deux atomes non métalliques", "Le transfert d'électrons entre métal et non-métal", "Les forces de van der Waals uniquement", "Les liaisons hydrogène"], answer: "Le partage d'électrons entre deux atomes non métalliques", explication: "H₂O, CO₂, CH₄ : liaisons covalentes (partage de doublets électroniques). Opposé : liaison ionique (transfert d'e⁻ : NaCl)." },
      { question: "La chaleur latente de fusion est l'énergie nécessaire pour…", options: ["Faire passer 1 kg de substance de l'état solide à liquide sans changer la température", "Augmenter la température d'1 kg de 1°C", "Vaporiser 1 kg de liquide", "Refroidir 1 kg de 1°C"], answer: "Faire passer 1 kg de substance de l'état solide à liquide sans changer la température", explication: "Lors de la fusion, la température reste constante (palier) alors qu'on apporte de l'énergie : c'est l'énergie de chaleur latente." },
      { question: "Le tableau périodique classe les éléments selon…", options: ["Leur numéro atomique (nombre de protons) croissant, en lignes et colonnes par propriétés similaires", "Leur masse croissante uniquement", "Leur état à température ambiante", "Leur découverte chronologique"], answer: "Leur numéro atomique (nombre de protons) croissant, en lignes et colonnes par propriétés similaires", explication: "Mendeleïev (1869) : les éléments d'une même colonne (famille) ont des propriétés chimiques similaires car même nombre d'e⁻ de valence." },
      { question: "La notion de réactif limitant signifie que…", options: ["Dans une réaction, le réactif qui est consommé en premier détermine la quantité de produits", "La réaction s'arrête quand les deux réactifs sont épuisés simultanément", "Un réactif est toujours en excès", "La réaction est irréversible"], answer: "Dans une réaction, le réactif qui est consommé en premier détermine la quantité de produits", explication: "Si on mélange 2 mol de A avec 1 mol de B pour une réaction 1:1, B est le réactif limitant. La quantité maximale de produit est 1 mol." }
    ]
  },

  // ══════════════════════════════════════════
  //  HISTOIRE 5ème — programme officiel
  // ══════════════════════════════════════════

  histoire5MoyenAge: {
    id: 'histoire5MoyenAge', nom: 'Moyen Âge (Ve–XVe s.)', emoji: '🏰', couleur: '#b45309',
    1: [
      { question: "En quelle année est généralement fixée la fin de l'Antiquité et le début du Moyen Âge ?", options: ["476 apr. J.-C. (chute de Rome)", "1453 apr. J.-C.", "800 apr. J.-C.", "1066 apr. J.-C."], answer: "476 apr. J.-C. (chute de Rome)", explication: "Le Moyen Âge commence en 476 (chute de l'Empire romain d'Occident) et se termine en 1453 (chute de Constantinople) ou 1492 (découverte de l'Amérique)." },
      { question: "Le système féodal repose sur…", options: ["Des liens de vassalité entre seigneurs et vassaux contre des terres (fiefs)", "L'élection des dirigeants par le peuple", "Le commerce international uniquement", "L'autorité exclusive de l'Église"], answer: "Des liens de vassalité entre seigneurs et vassaux contre des terres (fiefs)", explication: "Le féodalisme : le vassal prête hommage à son seigneur en échange d'un fief (terre). En retour, il doit aide militaire et conseil." },
      { question: "Charlemagne est sacré Empereur d'Occident en…", options: ["800 apr. J.-C.", "768 apr. J.-C.", "814 apr. J.-C.", "987 apr. J.-C."], answer: "800 apr. J.-C.", explication: "Le 25 décembre 800, le pape Léon III couronne Charlemagne à Rome. C'est une tentative de restaurer l'Empire romain d'Occident." },
      { question: "Les croisades (XIe–XIIIe s.) avaient pour objectif principal de…", options: ["Reconquérir Jérusalem et la Terre Sainte aux mains des musulmans", "Convertir les Vikings", "Unifier l'Europe contre les Mongols", "Établir des routes commerciales avec l'Inde"], answer: "Reconquérir Jérusalem et la Terre Sainte aux mains des musulmans", explication: "La 1ère Croisade (1096-1099) est lancée par le pape Urbain II. Les croisés prennent Jérusalem en 1099." },
      { question: "Jeanne d'Arc (1412-1431) est connue pour avoir…", options: ["Libéré Orléans et fait sacrer Charles VII, puis été brûlée comme hérétique", "Dirigé la 1ère Croisade", "Construit les cathédrales gothiques", "Unifié la France sous Hugues Capet"], answer: "Libéré Orléans et fait sacrer Charles VII, puis été brûlée comme hérétique", explication: "Jeanne d'Arc lève le siège d'Orléans (1429), fait sacrer Charles VII à Reims, est capturée par les Bourguignons et brûlée à Rouen (1431)." },
      { question: "La cathédrale gothique se distingue par…", options: ["Arc-boutants, ogives, vitraux et hauteur impressionnante", "Des murs épais, peu de fenêtres (style roman)", "Un dôme central et une forme circulaire", "Des colonnes grecques et un fronton"], answer: "Arc-boutants, ogives, vitraux et hauteur impressionnante", explication: "Le gothique (XIIe–XVe s.) : les arc-boutants reportent la poussée à l'extérieur → murs fins, grandes fenêtres et vitraux colorés." },
      { question: "La Peste noire (1347-1351) a tué environ…", options: ["1/3 de la population européenne", "1/10 de la population", "La moitié de la population mondiale", "Uniquement les nobles"], answer: "1/3 de la population européenne", explication: "La Peste noire (bubonique) tue entre 25 et 50 millions d'Européens sur ~75 millions. Elle transforme durablement la société médiévale." },
      { question: "L'Islam est fondé par le prophète Mahomet au…", options: ["VIIe siècle (622 = hégire)", "Ve siècle", "IXe siècle", "XIe siècle"], answer: "VIIe siècle (622 = hégire)", explication: "La hégire (fuite de Mahomet de La Mecque vers Médine en 622) marque le début du calendrier islamique. L'islam se répand rapidement en Arabie." }
    ],
    2: [
      { question: "L'Empire byzantin est la continuation de…", options: ["L'Empire romain d'Orient, avec Constantinople comme capitale", "L'Empire de Charlemagne", "L'Empire perse", "L'Empire mongol"], answer: "L'Empire romain d'Orient, avec Constantinople comme capitale", explication: "Tandis que l'Occident s'effondre en 476, l'Empire byzantin (romain d'Orient) survit jusqu'en 1453, gardant la culture gréco-romaine." },
      { question: "La chute de Constantinople en 1453 est provoquée par…", options: ["Les Ottomans de Mehmed II", "Les Croisés de la 4ème Croisade", "Les Mongols de Gengis Khan", "Les Arabes de l'expansion islamique"], answer: "Les Ottomans de Mehmed II", explication: "Le 29 mai 1453, Constantinople tombe face aux canons de Mehmed II. La ville devient Istanbul, capitale de l'Empire ottoman." },
      { question: "Les Vikings (IXe–XIe s.) sont originaires de…", options: ["Scandinavie (Danemark, Norvège, Suède)", "Angleterre", "Germanie", "Russie"], answer: "Scandinavie (Danemark, Norvège, Suède)", explication: "Les Vikings naviguent et pillent l'Europe (Normandie, Angleterre, Islande, Amérique du Nord vers 1000 avec Leif Erikson)." },
      { question: "Le servage au Moyen Âge désigne…", options: ["La condition des paysans attachés à la terre et soumis au seigneur", "L'esclavage antique", "Le travail des artisans en ville", "La condition des chevaliers"], answer: "La condition des paysans attachés à la terre et soumis au seigneur", explication: "Les serfs ne peuvent pas quitter la seigneurie sans permission, doivent payer des taxes (taille, corvée) et dépendent entièrement du seigneur." },
      { question: "L'université médiévale est une institution née au…", options: ["XIIe–XIIIe siècle (Bologne 1088, Paris vers 1150)", "Ve siècle avec Charlemagne", "IXe siècle avec les moines", "XVe siècle avec la Renaissance"], answer: "XIIe–XIIIe siècle (Bologne 1088, Paris vers 1150)", explication: "Les premières universités (Bologne, Paris, Oxford) naissent au XIIe s. Elles enseignent théologie, droit, médecine et arts libéraux." },
      { question: "La guerre de Cent Ans (1337-1453) oppose…", options: ["La France et l'Angleterre pour la succession du trône de France", "La France et l'Empire germanique", "L'Angleterre et le pape", "La France et l'Empire byzantin"], answer: "La France et l'Angleterre pour la succession du trône de France", explication: "La guerre de Cent Ans (en réalité 116 ans) oppose les Valois français aux Plantagenêts anglais. Jeanne d'Arc y joue un rôle décisif." },
      { question: "La civilisation islamique médiévale a contribué à l'Europe par…", options: ["La transmission des textes grecs antiques, les mathématiques (algèbre), la médecine", "La christianisation de l'Europe", "La construction des cathédrales", "La féodalité"], answer: "La transmission des textes grecs antiques, les mathématiques (algèbre), la médecine", explication: "Al-Khwarizmi (algèbre), Avicenne (médecine), Averroès (philosophie) : la civilisation islamique préserve et enrichit le savoir antique." },
      { question: "L'architecture romane (Xe–XIIe s.) se caractérise par…", options: ["Des murs épais, des arcs en plein cintre, des fenêtres étroites et des tours massives", "Des arcs-boutants et de grandes fenêtres", "Un style dépouillé sans décoration", "Des dômes byzantins"], answer: "Des murs épais, des arcs en plein cintre, des fenêtres étroites et des tours massives", explication: "Le roman précède le gothique. Ses murs épais supportent la voûte. Ex : abbatiale de Cluny, cathédrale de Pisa." }
    ],
    3: [
      { question: "Le Grand Schisme de 1054 sépare…", options: ["Le christianisme en Église catholique (Rome) et orthodoxe (Constantinople)", "L'Islam en sunnites et chiites", "Le monde en Croisés et Sarrasins", "L'Europe en seigneuries rivales"], answer: "Le christianisme en Église catholique (Rome) et orthodoxe (Constantinople)", explication: "En 1054, Rome et Constantinople se séparent sur des questions de dogme et d'autorité : le schisme crée le catholicisme et l'orthodoxie." },
      { question: "La Reconquista est le processus par lequel…", options: ["Les royaumes chrétiens d'Espagne reprennent la péninsule Ibérique aux Maures (711-1492)", "Les Croisés reprennent Jérusalem", "L'Empire romain reconquiert l'Angleterre", "La France reconquiert la Normandie"], answer: "Les royaumes chrétiens d'Espagne reprennent la péninsule Ibérique aux Maures (711-1492)", explication: "La Reconquista s'achève en 1492 avec la prise de Grenade par Ferdinand et Isabelle, l'année même de la découverte de l'Amérique." },
      { question: "Le mouvement communal médiéval désigne…", options: ["L'obtention par les bourgeois des villes de libertés et d'autonomie face aux seigneurs", "Le mouvement de réforme monastique", "La révolte des serfs", "La construction de communes rurales"], answer: "L'obtention par les bourgeois des villes de libertés et d'autonomie face aux seigneurs", explication: "À partir du XIe s., les bourgeois obtiennent des chartes communales : liberté de commerce, justice propre, administration autonome." },
      { question: "La Magna Carta (1215) est importante car elle…", options: ["Limite le pouvoir royal en Angleterre et établit des droits pour les nobles et barons", "Crée le Parlement anglais", "Accorde le droit de vote aux paysans", "Établit la séparation de l'Église et de l'État"], answer: "Limite le pouvoir royal en Angleterre et établit des droits pour les nobles et barons", explication: "La Magna Carta, signée par Jean sans Terre, est considérée comme l'ancêtre du droit constitutionnel. Elle limite arbitraire royal." },
      { question: "L'Empire mongol au XIIIe s. est remarquable car…", options: ["C'est le plus grand empire contigu de l'histoire (Chine → Europe orientale)", "C'est le premier empire à utiliser la poudre à canon", "Il unifie l'Islam et la chrétienté", "Il est fondé sur le commerce uniquement"], answer: "C'est le plus grand empire contigu de l'histoire (Chine → Europe orientale)", explication: "Gengis Khan (1206) puis ses descendants conquièrent de la Corée à la Pologne. L'empire facilite les échanges sur la Route de la Soie." },
      { question: "La littérature médiévale en langue vulgaire comprend…", options: ["Les chansons de geste (Roland), les romans courtois (Lancelot) et la lyrique des troubadours", "Uniquement des textes religieux en latin", "Les épopées grecques traduites", "Les chroniques officielles en latin"], answer: "Les chansons de geste (Roland), les romans courtois (Lancelot) et la lyrique des troubadours", explication: "La littérature médiévale en français emerge au XIe s. : La Chanson de Roland, les romans arthuriens, la lyrique occitane des troubadours." },
      { question: "Le mouvement franciscain fondé par saint François d'Assise prône…", options: ["La pauvreté, la charité et la prédication parmi le peuple", "La vie contemplative et retirée dans les monastères", "La Croisade et la Reconquista", "La réforme de l'Église catholique au XVIe s."], answer: "La pauvreté, la charité et la prédication parmi le peuple", explication: "Saint François (1182-1226) fonde l'ordre des Frères Mineurs (franciscains) : renoncement aux biens, vie parmi les pauvres et la nature." },
      { question: "La fin du Moyen Âge est marquée par plusieurs crises majeures dont…", options: ["La Peste noire, la guerre de Cent Ans, le Grand Schisme et les jacqueries paysannes", "La Révolution française et l'industrialisation", "Les guerres de Religion et la Réforme", "Les conquêtes coloniales et la traite négrière"], answer: "La Peste noire, la guerre de Cent Ans, le Grand Schisme et les jacqueries paysannes", explication: "Le XIVe s. est une période de crise généralisée : epidémie, guerre, divisions religieuses, révoltes sociales. Elles fragilisent l'ordre médiéval." }
    ]
  },

  histoire5Renaissance: {
    id: 'histoire5Renaissance', nom: 'Renaissance & grandes découvertes', emoji: '🌍', couleur: '#b45309',
    1: [
      { question: "La Renaissance est un mouvement culturel qui naît en…", options: ["Italie au XVe siècle", "France au XVIe siècle", "Angleterre au XVIIe siècle", "Allemagne au XVe siècle"], answer: "Italie au XVe siècle", explication: "La Renaissance naît en Italie (Florence, Rome, Venise) au XIVe–XVe s. avant de se répandre en Europe au XVIe s. grâce à l'imprimerie." },
      { question: "La Renaissance se caractérise par un retour à…", options: ["L'Antiquité gréco-romaine et une vision centrée sur l'Homme (humanisme)", "Le Moyen Âge religieux", "La nature sauvage et primitive", "La science expérimentale uniquement"], answer: "L'Antiquité gréco-romaine et une vision centrée sur l'Homme (humanisme)", explication: "La Renaissance = 'renaissance' de l'Antiquité. L'humanisme place l'Homme au centre : éducation, arts, sciences, curiosité universelle." },
      { question: "Christophe Colomb atteint l'Amérique en…", options: ["1492", "1498", "1488", "1504"], answer: "1492", explication: "Le 12 octobre 1492, Colomb touche les Bahamas. Il croit atteindre les Indes. L'Amérique est nommée d'après Amerigo Vespucci." },
      { question: "L'imprimerie à caractères mobiles est inventée par…", options: ["Gutenberg (vers 1450)", "Léonard de Vinci", "Colomb", "Copernic"], answer: "Gutenberg (vers 1450)", explication: "Gutenberg invente l'imprimerie vers 1450. La Bible est imprimée en 1455. L'imprimerie révolutionne la diffusion du savoir." },
      { question: "La Réforme protestante est lancée par…", options: ["Martin Luther (1517, 95 thèses)", "Jean Calvin", "Henri VIII", "Érasme"], answer: "Martin Luther (1517, 95 thèses)", explication: "Le 31 octobre 1517, Luther affiche ses 95 thèses à Wittenberg contre les indulgences. C'est le début de la Réforme protestante." },
      { question: "Léonard de Vinci est un exemple d'homme de la Renaissance car il est à la fois…", options: ["Peintre, sculpteur, ingénieur, scientifique, musicien et écrivain", "Uniquement peintre", "Uniquement scientifique", "Uniquement architecte"], answer: "Peintre, sculpteur, ingénieur, scientifique, musicien et écrivain", explication: "Léonard (1452-1519) incarne l'idéal de l'uomo universale : polyvalence totale. La Joconde et L'Homme de Vitruve sont ses œuvres les plus connues." },
      { question: "Vasco de Gama ouvre la route maritime vers…", options: ["Les Indes en contournant l'Afrique (1498)", "L'Amérique du Nord", "La Chine par la Sibérie", "Le Japon par le Pacifique"], answer: "Les Indes en contournant l'Afrique (1498)", explication: "Vasco de Gama (1498) contourne le cap de Bonne-Espérance et atteint Calicut (Inde). Il ouvre la route des épices pour le Portugal." },
      { question: "Magellan est le premier navigateur à…", options: ["Entreprendre un tour du monde (son expédition, 1519-1522)", "Découvrir l'Amérique du Sud", "Atteindre les Indes par l'est", "Traverser le Pacifique vers le Japon"], answer: "Entreprendre un tour du monde (son expédition, 1519-1522)", explication: "Magellan part en 1519 avec 5 navires et 270 hommes. Il meurt aux Philippines (1521). Elcano ramène un seul navire en 1522. 1er tour du monde." }
    ],
    2: [
      { question: "La Réforme protestante remet en question…", options: ["L'autorité du pape, les indulgences et la vente des offices religieux", "L'existence de Dieu", "La monarchie française", "Les grandes découvertes"], answer: "L'autorité du pape, les indulgences et la vente des offices religieux", explication: "Luther, Calvin, Zwingli critiquent la corruption de l'Église, la vente d'indulgences et prônent un retour à la Bible (sola scriptura)." },
      { question: "La contre-réforme catholique est incarnée par…", options: ["Le Concile de Trente (1545-1563) et la Compagnie de Jésus (jésuites)", "La Réforme anglicane d'Henri VIII", "Les guerres de Religion uniquement", "L'Inquisition espagnole seule"], answer: "Le Concile de Trente (1545-1563) et la Compagnie de Jésus (jésuites)", explication: "Face à la Réforme, l'Église catholique se réforme de l'intérieur : clarification des dogmes, discipline du clergé, nouvelles missions (jésuites)." },
      { question: "La révolution copernicienne désigne…", options: ["Le passage du géocentrisme à l'héliocentrisme (la Terre tourne autour du Soleil)", "La découverte de nouveaux continents", "La révolution politique du XVIe s.", "L'invention du télescope"], answer: "Le passage du géocentrisme à l'héliocentrisme (la Terre tourne autour du Soleil)", explication: "Copernic (1543) : la Terre tourne autour du Soleil. Galilée le prouve avec le télescope (1609). Cela bouleverse la vision du monde." },
      { question: "Les conquêtes espagnoles en Amérique détruisent les empires…", options: ["Aztèque (Cortès, 1521) et Inca (Pizarre, 1532)", "Maya et Olmèque uniquement", "Inca et Huron", "Aztèque et Tupi"], answer: "Aztèque (Cortès, 1521) et Inca (Pizarre, 1532)", explication: "Hernán Cortès conquiert l'empire Aztèque (Mexique) et Francisco Pizarro l'empire Inca (Pérou) grâce aux armes à feu et aux épidémies." },
      { question: "L'humanisme de la Renaissance prône…", options: ["L'éducation, le développement personnel, la dignité de l'Homme et l'esprit critique", "Le retour à la foi médiévale", "Le mépris des arts et de la culture", "La domination de l'Église sur le savoir"], answer: "L'éducation, le développement personnel, la dignité de l'Homme et l'esprit critique", explication: "Érasme ('Éloge de la folie'), Rabelais, Montaigne : les humanistes lisent les auteurs grecs et latins et défendent la raison critique." },
      { question: "L'édit de Nantes (1598) est signé par Henri IV pour…", options: ["Accorder la liberté de culte aux protestants en France et mettre fin aux guerres de Religion", "Interdire le protestantisme", "Réunifier la France sous une religion unique", "Établir l'alliance franco-anglaise"], answer: "Accorder la liberté de culte aux protestants en France et mettre fin aux guerres de Religion", explication: "L'édit de Nantes (1598) est un acte de tolérance religieuse (1ère en Europe) signé par Henri IV après 36 ans de guerres de Religion." },
      { question: "Michel-Ange est l'auteur de…", options: ["La chapelle Sixtine (plafond) et la Pietà", "La Joconde", "Les Essais", "Le Prince"], answer: "La chapelle Sixtine (plafond) et la Pietà", explication: "Michel-Ange (1475-1564) peint le plafond de la chapelle Sixtine (1508-1512) et sculpte la Pietà. Contemporain de Léonard de Vinci." },
      { question: "Les traites négrières transatlantiques commencent à partir du…", options: ["XVe–XVIe siècle, avec la colonisation des Amériques", "XIIe siècle", "XVIIIe siècle uniquement", "XIVe siècle"], answer: "XVe–XVIe siècle, avec la colonisation des Amériques", explication: "Le besoin de main-d'œuvre dans les colonies américaines entraîne la déportation d'Africains réduits en esclavage. C'est le commerce triangulaire." }
    ],
    3: [
      { question: "Le mécénat à la Renaissance désigne…", options: ["Le financement des artistes par des princes et riches marchands (Médicis de Florence)", "La vente des œuvres d'art", "Le commerce des épices en Méditerranée", "L'enseignement de l'art dans les universités"], answer: "Le financement des artistes par des princes et riches marchands (Médicis de Florence)", explication: "Les Médicis (Florence), le pape Jules II et autres mécènes financent les artistes. Ils permettent à Léonard, Michel-Ange, Raphaël de créer." },
      { question: "L'œuvre de Copernic ('De revolutionibus', 1543) est révolutionnaire car elle…", options: ["Contredit l'Église (géocentrisme ptoléméen) et inaugure la révolution scientifique", "Prouve l'existence des Indes", "Décrit les routes commerciales africaines", "Établit les lois du mouvement"], answer: "Contredit l'Église (géocentrisme ptoléméen) et inaugure la révolution scientifique", explication: "L'héliocentrisme de Copernic est rejeté par l'Église car contraire aux Écritures. Galilée sera condamné en 1633 pour l'avoir défendu." },
      { question: "Les guerres d'Italie (1494-1559) ont pour effet culturel de…", options: ["Diffuser la Renaissance italienne en France et en Europe", "Détruire la culture italienne", "Isoler la France du reste de l'Europe", "Créer un empire franco-espagnol"], answer: "Diffuser la Renaissance italienne en France et en Europe", explication: "Les rois français (Charles VIII, François Ier) ramènent d'Italie des artistes et des idées. François Ier attire Léonard de Vinci en France." },
      { question: "La pensée de Machiavel ('Le Prince', 1513) est novatrice car elle…", options: ["Sépare la politique de la morale religieuse et analyse le pouvoir de façon réaliste", "Justifie la monarchie absolue par droit divin", "Défend la démocratie grecque", "Prône la paix perpétuelle entre les États"], answer: "Sépare la politique de la morale religieuse et analyse le pouvoir de façon réaliste", explication: "Machiavel analyse le pouvoir politique tel qu'il est (non tel qu'il devrait être). Son réalisme politique rompt avec la pensée médiévale." },
      { question: "La révolution scientifique du XVIe–XVIIe s. repose sur…", options: ["L'observation, l'expérimentation et les mathématiques (méthode expérimentale)", "Uniquement l'autorité des textes antiques", "La révélation religieuse", "Les traditions médiévales"], answer: "L'observation, l'expérimentation et les mathématiques (méthode expérimentale)", explication: "Galilée, Kepler, Descartes, Newton : la méthode scientifique (hypothèse → expérience → loi mathématique) naît à la Renaissance." },
      { question: "L'impact des grandes découvertes sur les populations amérindiennes est…", options: ["Catastrophique : épidémies, esclavage, destruction des cultures, effondrement démographique", "Positif : accès aux technologies européennes", "Neutre : échanges commerciaux équilibrés", "Limité : seules les côtes sont affectées"], answer: "Catastrophique : épidémies, esclavage, destruction des cultures, effondrement démographique", explication: "Les Amérindiens n'ont pas d'immunité contre les maladies européennes (variole, rougeole). 90 % de la population disparaît en un siècle." },
      { question: "L'imprimerie de Gutenberg révolutionne la société car elle…", options: ["Démocratise l'accès au savoir, accélère la Réforme et l'humanisme", "Rend les livres plus chers", "Détruit la tradition orale", "Permet uniquement la reproduction de la Bible"], answer: "Démocratise l'accès au savoir, accélère la Réforme et l'humanisme", explication: "Avant Gutenberg : copie à la main, quelques centaines d'exemplaires. Après : milliers d'exemplaires → idées se répandent à toute vitesse." },
      { question: "Montaigne et ses 'Essais' (1580) incarnent l'humanisme par…", options: ["L'exploration personnelle et critique de soi-même comme sujet central de la réflexion", "L'éloge de la monarchie absolue", "Le rejet de l'Antiquité", "La défense du catholicisme contre la Réforme"], answer: "L'exploration personnelle et critique de soi-même comme sujet central de la réflexion", explication: "'Que sais-je ?' : Montaigne invente le genre de l'essai en se prenant lui-même pour sujet. Curiosité, doute, tolérance sont ses valeurs." }
    ]
  },

  histoire5Geo: {
    id: 'histoire5Geo', nom: 'Géographie 5ème', emoji: '🗺️', couleur: '#b45309',
    1: [
      { question: "La mondialisation désigne…", options: ["L'intensification des échanges économiques, culturels et humains à l'échelle mondiale", "L'uniformisation politique des États", "La disparition des cultures locales", "L'expansion des empires coloniaux"], answer: "L'intensification des échanges économiques, culturels et humains à l'échelle mondiale", explication: "La mondialisation (accélérée depuis 1990) connecte les économies, les cultures et les populations du monde entier via commerce, internet et migrations." },
      { question: "Un pays développé se caractérise notamment par…", options: ["Un IDH élevé, revenus, éducation et espérance de vie élevés", "Une grande superficie", "Une population très dense", "Des ressources naturelles abondantes"], answer: "Un IDH élevé, revenus, éducation et espérance de vie élevés", explication: "L'IDH (Indice de Développement Humain) mesure la santé, l'éducation et le revenu. Un IDH > 0,8 = pays très développé." },
      { question: "Le développement durable cherche à…", options: ["Répondre aux besoins du présent sans compromettre les générations futures", "Maximiser la croissance économique à court terme", "Protéger l'environnement au détriment du développement", "Distribuer équitablement les ressources"], answer: "Répondre aux besoins du présent sans compromettre les générations futures", explication: "Définition Brundtland (1987). Le développement durable a trois piliers : économique, social et environnemental." },
      { question: "Les pays du BRICS regroupent…", options: ["Brésil, Russie, Inde, Chine, Afrique du Sud", "Belgique, Roumanie, Iran, Corée, Sénégal", "Bulgarie, Russie, Italie, Canada, Suisse", "Brésil, Rwanda, Inde, Chine, Suède"], answer: "Brésil, Russie, Inde, Chine, Afrique du Sud", explication: "Les BRICS sont des pays émergents dont le poids économique croît rapidement. La Chine et l'Inde sont les plus peuplés et dynamiques." },
      { question: "Le continent le plus peuplé est…", options: ["L'Asie (plus de 4,5 milliards d'habitants)", "L'Afrique", "L'Europe", "L'Amérique"], answer: "L'Asie (plus de 4,5 milliards d'habitants)", explication: "L'Asie représente ~60 % de la population mondiale. La Chine (1,4 Md) et l'Inde (1,4 Md) sont les deux pays les plus peuplés." },
      { question: "Un méga-delta (ex : delta du Nil, du Gange) est une zone…", options: ["À l'embouchure d'un fleuve, très fertile mais vulnérable aux inondations et à la montée des eaux", "En altitude, aride et inhospitalière", "Urbanisée et industrialisée uniquement", "En montagne, loin de tout fleuve"], answer: "À l'embouchure d'un fleuve, très fertile mais vulnérable aux inondations et à la montée des eaux", explication: "Les deltas concentrent de fortes densités humaines (agriculture intensive) mais sont menacés par les inondations et la montée des eaux liée au changement climatique." },
      { question: "La déforestation en Amazonie est problématique car…", options: ["Elle détruit des écosystèmes uniques, libère du CO₂ et réduit la biodiversité", "Elle crée des emplois durables", "Elle refroidit le climat local", "Elle est nécessaire pour l'agriculture bio"], answer: "Elle détruit des écosystèmes uniques, libère du CO₂ et réduit la biodiversité", explication: "L'Amazonie = 'poumon de la planète'. La déforestation (agriculture, élevage, mines) menace des millions d'espèces et aggrave le changement climatique." },
      { question: "L'exode rural désigne…", options: ["Le mouvement de population des campagnes vers les villes", "La migration internationale", "Le retour des citadins à la campagne", "La fuite des populations pendant une guerre"], answer: "Le mouvement de population des campagnes vers les villes", explication: "L'exode rural s'accélère avec le développement. Aujourd'hui, plus de 55 % de la population mondiale est urbaine. Ce taux atteindra 68 % en 2050." }
    ],
    2: [
      { question: "Une mégalopole est…", options: ["Un ensemble de grandes agglomérations qui se rejoignent (ex : Boswash aux USA)", "Une ville de plus de 10 millions d'habitants", "La capitale d'un grand pays", "Une zone industrielle"], answer: "Un ensemble de grandes agglomérations qui se rejoignent (ex : Boswash aux USA)", explication: "La Boswash (Boston-Washington) est la 1ère mégalopole décrite par Gottmann (1961). En Asie : Tokyo-Osaka-Kobe, Hongkong-Guangzhou." },
      { question: "Le changement climatique est principalement causé par…", options: ["Les émissions de gaz à effet de serre (CO₂, méthane) d'origine humaine", "L'activité volcanique mondiale", "Les variations de l'orbite terrestre uniquement", "Les marées"], answer: "Les émissions de gaz à effet de serre (CO₂, méthane) d'origine humaine", explication: "Le GIEC confirme que le changement climatique actuel est causé à > 95 % par les activités humaines (combustion fossiles, déforestation)." },
      { question: "L'inégalité Nord/Sud en géographie désigne…", options: ["L'écart de richesse et de développement entre les pays riches (Nord) et pauvres (Sud)", "Une différence climatique entre hémisphères", "L'inégalité de superficie des continents", "Le déséquilibre démographique uniquement"], answer: "L'écart de richesse et de développement entre les pays riches (Nord) et pauvres (Sud)", explication: "Le 'Nord' = pays développés (Europe, Amérique du Nord, Australie, Japon). Le 'Sud' = pays en développement (Afrique, Asie du Sud, Amérique latine). Division schématique." },
      { question: "Un pays émergent est un pays qui…", options: ["Connaît une forte croissance économique et s'intègre à l'économie mondiale, mais avec des inégalités persistantes", "A un IDH identique aux pays riches", "Ne commerce pas encore avec l'étranger", "Est entièrement agricole"], answer: "Connaît une forte croissance économique et s'intègre à l'économie mondiale, mais avec des inégalités persistantes", explication: "Les pays émergents (Chine, Inde, Brésil, Mexique, Indonésie…) ont des économies en forte croissance mais des inégalités internes importantes." },
      { question: "La transition démographique décrit le passage de…", options: ["Forte natalité + forte mortalité → faible natalité + faible mortalité", "Croissance nulle à croissance forte", "Population rurale à population urbaine", "Économie agricole à industrielle"], answer: "Forte natalité + forte mortalité → faible natalité + faible mortalité", explication: "Le modèle de transition : natalité et mortalité diminuent avec le développement économique. La croissance démographique ralentit." },
      { question: "Les flux migratoires internationaux sont principalement dirigés vers…", options: ["Les pays développés (Europe, Amérique du Nord, Australie)", "Les pays les moins développés", "Les zones tropicales uniquement", "Les pays producteurs de pétrole uniquement"], answer: "Les pays développés (Europe, Amérique du Nord, Australie)", explication: "La majorité des migrants internationaux cherchent de meilleures conditions économiques dans les pays riches. Les migrations Sud-Sud sont aussi importantes." },
      { question: "L'empreinte écologique mesure…", options: ["La superficie terrestre et aquatique nécessaire pour produire les ressources consommées par un individu ou une nation", "La pollution atmosphérique d'un pays", "Le PIB par habitant", "La surface des forêts restantes"], answer: "La superficie terrestre et aquatique nécessaire pour produire les ressources consommées par un individu ou une nation", explication: "Si chaque humain vivait comme un Américain moyen, il faudrait ~5 planètes Terre. L'empreinte écologique montre l'insoutenabilité de certains modes de vie." },
      { question: "Les zones économiques exclusives (ZEE) permettent à un État de…", options: ["Contrôler les ressources économiques (pêche, minerais, énergie) jusqu'à 200 milles marins de ses côtes", "Interdire toute navigation étrangère", "Annexer des territoires sous-marins", "Fixer les prix des matières premières"], answer: "Contrôler les ressources économiques (pêche, minerais, énergie) jusqu'à 200 milles marins de ses côtes", explication: "La ZEE (Convention de Montego Bay, 1982) donne à un État des droits souverains sur les ressources dans un rayon de 200 milles (370 km) de ses côtes." }
    ],
    3: [
      { question: "La géopolitique étudie…", options: ["Les relations entre les États, leurs stratégies de puissance et le rôle du territoire", "Uniquement la géographie physique", "L'histoire économique des nations", "La climatologie"], answer: "Les relations entre les États, leurs stratégies de puissance et le rôle du territoire", explication: "La géopolitique analyse comment la géographie influence les rivalités de puissance : ressources, frontières, accès aux mers, zones d'influence." },
      { question: "La notion de développement humain (IDH) a été créée pour…", options: ["Dépasser la seule mesure du PIB et inclure santé et éducation", "Mesurer le bonheur des populations", "Comparer les populations par ethnicité", "Classer les pays par superficie"], answer: "Dépasser la seule mesure du PIB et inclure santé et éducation", explication: "L'IDH (PNUD, 1990) combine espérance de vie, niveau d'éducation et revenu. Le PIB seul ne mesure pas le bien-être réel des populations." },
      { question: "Le réchauffement climatique menace particulièrement les…", options: ["Petits États insulaires (Maldives, Tuvalu) et les deltas côtiers", "Les zones continentales centrales uniquement", "Les régions polaires uniquement", "Les pays riches industrialisés"], answer: "Petits États insulaires (Maldives, Tuvalu) et les deltas côtiers", explication: "La montée des eaux (30 cm depuis 1900, accélération) menace les îles basses et les deltas densément peuplés (Bangladesh, Égypte, Vietnam)." },
      { question: "La métropolisation désigne…", options: ["La concentration croissante des richesses, des activités et des décisions dans les grandes villes mondiales", "La croissance démographique des villes moyennes", "L'étalement urbain sans densification", "La migration des capitales"], answer: "La concentration croissante des richesses, des activités et des décisions dans les grandes villes mondiales", explication: "La métropolisation crée un réseau de 'villes mondiales' (New York, Londres, Tokyo, Paris) qui concentrent finance, culture et pouvoir décisionnel." },
      { question: "La fracture numérique désigne…", options: ["L'inégalité d'accès aux technologies numériques entre pays et entre populations", "La fracture physique entre continents", "L'opposition entre culture numérique et traditionnelle", "Les pannes informatiques mondiales"], answer: "L'inégalité d'accès aux technologies numériques entre pays et entre populations", explication: "Les pays pauvres et les populations défavorisées ont moins accès à internet et aux technologies numériques → inégalités économiques et éducatives." },
      { question: "Le modèle de Von Thünen décrit…", options: ["L'organisation concentrique de l'espace agricole autour d'un marché urbain", "La formation des villes modernes", "La distribution des ressources minières", "L'étalement des zones de pêche"], answer: "L'organisation concentrique de l'espace agricole autour d'un marché urbain", explication: "Von Thünen (1826) : les cultures les plus intensives (maraîchage) sont près des villes, les moins intensives (élevage extensif) plus loin. Loi de la rente foncière." },
      { question: "La transition énergétique désigne le passage de…", options: ["Énergies fossiles (pétrole, gaz, charbon) vers les énergies renouvelables (solaire, éolien, hydraulique)", "L'énergie nucléaire au pétrole", "La vapeur à l'électricité (XIXe s.)", "L'énergie locale à l'énergie importée"], answer: "Énergies fossiles (pétrole, gaz, charbon) vers les énergies renouvelables (solaire, éolien, hydraulique)", explication: "La transition énergétique vise à réduire les émissions de GES tout en répondant aux besoins croissants en énergie. Défi majeur du XXIe s." },
      { question: "Le concept de 'ville durable' repose sur…", options: ["Densité, mixité sociale et fonctionnelle, mobilités douces, espaces verts et sobriété énergétique", "Croissance maximale de la superficie urbaine", "Ségrégation fonctionnelle stricte (zones résidentielles, industrielles, commerciales séparées)", "Développement des banlieues éloignées"], answer: "Densité, mixité sociale et fonctionnelle, mobilités douces, espaces verts et sobriété énergétique", explication: "La ville durable limite l'étalement urbain, favorise les transports en commun, les cycles courts et la mixité sociale pour réduire l'empreinte écologique." }
    ]
  },

  // ══════════════════════════════════════════
  //  ANGLAIS 5ème — programme officiel
  // ══════════════════════════════════════════

  anglais5Vocab: {
    id: 'anglais5Vocab', nom: 'Vocabulaire intermédiaire', emoji: '📘', couleur: '#1d4ed8',
    1: [
      { question: "How do you say 'bibliothèque' in English?", options: ["library", "bookshop", "bookcase", "bookstore"], answer: "library", explication: "'Library' = bibliothèque (prêt de livres). 'Bookshop/bookstore' = librairie (vente de livres). Ne pas confondre !" },
      { question: "What does 'to improve' mean?", options: ["to get better / to make progress", "to move forward", "to prefer", "to approve"], answer: "to get better / to make progress", explication: "'To improve' = s'améliorer, progresser. 'My English is improving.' = Mon anglais s'améliore." },
      { question: "What does 'although' mean?", options: ["bien que / même si", "because", "therefore", "however"], answer: "bien que / même si", explication: "'Although it was raining, we went out.' = Bien qu'il pleuvait, nous sommes sortis. Conjonction de concession." },
      { question: "How do you say 'environnement' in English?", options: ["environment", "surroundings", "nature", "atmosphere"], answer: "environment", explication: "'Environment' = environnement (au sens général). 'Climate change threatens the environment.' Attention : 'surroundings' = cadre, entourage immédiat." },
      { question: "What does 'to argue' mean?", options: ["to quarrel / to debate", "to agree", "to apologise", "to suggest"], answer: "to quarrel / to debate", explication: "'To argue' = se disputer OU défendre un argument selon le contexte. 'They argued all night.' = Ils se sont disputés toute la nuit." },
      { question: "What does 'century' mean?", options: ["siècle", "centenaire", "cent", "âge"], answer: "siècle", explication: "'Century' = siècle (100 ans). 'The 21st century' = le XXIe siècle. Ne pas confondre avec 'centenary' = centenaire (100e anniversaire)." },
      { question: "How do you say 'découverte' in English?", options: ["discovery", "invention", "finding", "research"], answer: "discovery", explication: "'Discovery' = découverte. 'Invention' = invention. 'Columbus's discovery of America' = la découverte de l'Amérique par Colomb." },
      { question: "What does 'however' mean?", options: ["cependant / néanmoins", "therefore", "moreover", "because"], answer: "cependant / néanmoins", explication: "'However' introduit une opposition ou nuance. 'I like science; however, maths is difficult.' Similaire à 'but' mais plus formel." }
    ],
    2: [
      { question: "What does 'to achieve' mean?", options: ["to succeed in doing something / to accomplish", "to receive", "to perceive", "to believe"], answer: "to succeed in doing something / to accomplish", explication: "'To achieve' = réussir à faire qqch, accomplir. 'She achieved her goal.' = Elle a atteint son objectif." },
      { question: "What does 'throughout' mean?", options: ["tout au long de / partout dans", "through the window", "thoroughly", "toward"], answer: "tout au long de / partout dans", explication: "'Throughout the year' = tout au long de l'année. 'Throughout the country' = partout dans le pays." },
      { question: "What does 'to deal with' mean?", options: ["to handle / to manage a situation", "to trade with", "to heal", "to reveal"], answer: "to handle / to manage a situation", explication: "'To deal with' = s'occuper de, gérer. 'She deals with complaints.' = Elle s'occupe des réclamations." },
      { question: "What does 'challenge' mean?", options: ["défi / enjeu", "change", "chance", "choice"], answer: "défi / enjeu", explication: "'Challenge' = défi (noun), défier (verb). 'Climate change is a major challenge.' = Le changement climatique est un défi majeur." },
      { question: "What is the difference between 'affect' and 'effect'?", options: ["'Affect' is a verb (influencer), 'effect' is a noun (effet)", "'Effect' is a verb, 'affect' is a noun", "They mean the same thing", "'Affect' is positive, 'effect' is negative"], answer: "'Affect' is a verb (influencer), 'effect' is a noun (effet)", explication: "'Pollution affects health' (verb). 'The effect of pollution on health' (noun). Faux-amis à retenir !" },
      { question: "What does 'opportunity' mean?", options: ["occasion / chance", "opportunity (false friend: not opportunité)", "opening", "availability"], answer: "occasion / chance", explication: "'Opportunity' = occasion, chance de faire qqch. 'It's a great opportunity to travel.' = C'est une belle occasion de voyager." },
      { question: "How do you say 'bénévole' in English?", options: ["volunteer", "benefit", "benefactor", "donated"], answer: "volunteer", explication: "'Volunteer' (noun/verb) = bénévole / faire du bénévolat. 'She volunteers at the hospital.' = Elle fait du bénévolat à l'hôpital." },
      { question: "What does 'evidence' mean?", options: ["preuve / indice", "évidence (false friend: not obvious)", "event", "evidence is 'obvious' in French"], answer: "preuve / indice", explication: "'Evidence' = preuve (faux-ami !). 'Évident' en français = 'obvious' en anglais. 'There is no evidence of life on Mars.'" }
    ],
    3: [
      { question: "What does 'to advocate' mean?", options: ["to support / to argue in favour of", "to advise against", "to ask for advice", "to communicate"], answer: "to support / to argue in favour of", explication: "'To advocate' = défendre, militer pour. 'She advocates for human rights.' = Elle défend les droits de l'homme." },
      { question: "What does 'whereas' mean?", options: ["tandis que / alors que (opposition)", "therefore", "where", "because"], answer: "tandis que / alors que (opposition)", explication: "'Whereas' introduit un contraste. 'She likes science whereas her brother prefers arts.' = Elle aime les sciences tandis que son frère préfère les arts." },
      { question: "What does 'to sustain' mean?", options: ["to maintain / to keep going", "to sustain injuries (blesser)", "both meanings are correct", "to explain in detail"], answer: "both meanings are correct", explication: "'To sustain' = 1) maintenir, soutenir ('sustain a conversation'). 2) subir ('to sustain injuries'). Le contexte détermine le sens." },
      { question: "What does 'bias' mean?", options: ["préjugé / parti pris", "argument", "balance", "belief"], answer: "préjugé / parti pris", explication: "'Bias' = préjugé, biais. 'Media bias' = biais médiatique. 'Biased' = partial, partial." },
      { question: "What does 'to acknowledge' mean?", options: ["to recognise / to admit", "to know", "to know in advance", "to ignore"], answer: "to recognise / to admit", explication: "'To acknowledge' = reconnaître, admettre. 'She acknowledged her mistake.' = Elle a reconnu son erreur." },
      { question: "What does 'legacy' mean?", options: ["héritage / legs (de quelqu'un à la postérité)", "legal matter", "legislation", "message"], answer: "héritage / legs (de quelqu'un à la postérité)", explication: "'Legacy' = héritage au sens figuré. 'The legacy of the Renaissance' = l'héritage de la Renaissance. 'Inheritance' = héritage matériel." },
      { question: "What does 'to tackle' mean?", options: ["to deal with a problem / to address", "to attack physically", "to talk about casually", "to avoid"], answer: "to deal with a problem / to address", explication: "'To tackle' = s'attaquer à (un problème), aborder. 'We must tackle climate change.' = Nous devons nous attaquer au changement climatique." },
      { question: "What does 'contemporary' mean?", options: ["of the present time / modern", "temporary", "contiguous", "conservative"], answer: "of the present time / modern", explication: "'Contemporary' = contemporain, actuel. 'Contemporary art' = art contemporain. Ne pas confondre avec 'temporary' (temporaire)." }
    ]
  },

  anglais5Grammar: {
    id: 'anglais5Grammar', nom: 'Grammaire anglaise', emoji: '📗', couleur: '#1d4ed8',
    1: [
      { question: "Choose the correct form: 'She ___ to Paris last year.' (go)", options: ["went", "has gone", "goes", "was going"], answer: "went", explication: "'Last year' = past simple. 'She went to Paris last year.' Le past simple exprime une action passée et terminée." },
      { question: "What does the present perfect express?", options: ["A past action with a link to the present", "An action happening right now", "A future plan", "A past habit"], answer: "A past action with a link to the present", explication: "Present perfect (have/has + past participle) : 'I have visited Paris.' = J'ai visité Paris (et c'est toujours pertinent maintenant)." },
      { question: "Choose the correct form: 'I ___ never ___ sushi.' (eat)", options: ["have never eaten", "never ate", "am never eating", "will never eat"], answer: "have never eaten", explication: "'Never' avec le present perfect : 'I have never eaten sushi.' = Je n'ai jamais mangé de sushi (dans ma vie)." },
      { question: "What is the past participle of 'write'?", options: ["written", "wrote", "writed", "writing"], answer: "written", explication: "Write – wrote – written. Irregular verb. 'She has written three books.' = Elle a écrit trois livres." },
      { question: "Choose the correct modal: 'You ___ smoke here – it's forbidden.' (obligation)", options: ["mustn't", "needn't", "couldn't", "wouldn't"], answer: "mustn't", explication: "'Mustn't' = il est interdit de (prohibition). 'Needn't' = pas besoin de. 'You mustn't smoke here.' = Il est interdit de fumer ici." },
      { question: "What is the difference between 'since' and 'for' with the present perfect?", options: ["'Since' = point in time (depuis quand), 'for' = duration (pendant combien de temps)", "'For' = point, 'since' = duration", "They are interchangeable", "'Since' is only for past simple"], answer: "'Since' = point in time (depuis quand), 'for' = duration (pendant combien de temps)", explication: "'I have lived here since 2015.' (depuis 2015). 'I have lived here for 9 years.' (pendant 9 ans)." },
      { question: "Form the passive voice: 'Someone stole my bike.' →", options: ["My bike was stolen.", "My bike is stolen.", "My bike has stolen.", "My bike stolen."], answer: "My bike was stolen.", explication: "Voix passive : subject + was/were + past participle. Agent non précisé car inconnu. 'My bike was stolen' (by someone)." },
      { question: "Choose the correct form: 'If it rains tomorrow, we ___ stay at home.'", options: ["will", "would", "should", "must"], answer: "will", explication: "Conditional type 1 (real condition) : If + present simple → will + base verb. 'If it rains, we will stay at home.'" }
    ],
    2: [
      { question: "Form the conditional type 2: 'If I had more time, I ___ learn guitar.'", options: ["would", "will", "should", "could (also correct)"], answer: "would", explication: "Conditional type 2 (hypothetical) : If + past simple → would + base verb. 'If I had more time, I would learn guitar.' (mais je n'ai pas le temps)." },
      { question: "What is the reported speech of: 'I am happy,' she said.", options: ["She said she was happy.", "She said she is happy.", "She told she was happy.", "She said to be happy."], answer: "She said she was happy.", explication: "Discours indirect : 'am' → 'was' (backshift). 'Said' sans complément direct. 'Told' nécessite un COD : 'She told me she was happy.'" },
      { question: "What does the past perfect express?", options: ["An action that happened before another past action", "An action happening in the past right now", "A future plan from the past", "A regret about the present"], answer: "An action that happened before another past action", explication: "Past perfect (had + past participle) : 'When I arrived, she had already left.' = Quand je suis arrivé, elle était déjà partie (avant mon arrivée)." },
      { question: "Choose: 'He ___ be a teacher – he's only 15.' (deduction: impossible)", options: ["can't", "mustn't", "shouldn't", "needn't"], answer: "can't", explication: "'Can't be' = impossibilité logique. 'He can't be a teacher – he's only 15.' ≠ 'mustn't' (interdit). 'Must be' = certitude positive." },
      { question: "What is the question tag for 'You are coming, ___?'", options: ["aren't you?", "are you?", "isn't it?", "don't you?"], answer: "aren't you?", explication: "Question tag : auxiliaire négatif si phrase affirmative. 'You are' → 'aren't you?' Intonation montante = vraie question, descendante = confirmation." },
      { question: "Form the sentence with a relative clause: 'The book ___ I borrowed is excellent.'", options: ["that / which", "who", "where", "whose"], answer: "that / which", explication: "Relative pronoun for things/objects = 'which' or 'that'. 'The book that/which I borrowed is excellent.'" },
      { question: "Choose the correct gerund or infinitive: 'I enjoy ___.' (read)", options: ["reading", "to read", "read", "reads"], answer: "reading", explication: "After 'enjoy', use the gerund (-ing). 'I enjoy reading.' Verbs followed by -ing: enjoy, avoid, consider, mind, finish, suggest." },
      { question: "What is the passive form of 'They will build a new school'?", options: ["A new school will be built.", "A new school will have been built.", "A new school is being built.", "A new school was built."], answer: "A new school will be built.", explication: "Passif futur : will be + past participle. 'A new school will be built.' (by them = agent omis car peu important)." }
    ],
    3: [
      { question: "Choose: 'She wishes she ___ speak Chinese.' (regret about present)", options: ["could", "would", "should", "might"], answer: "could", explication: "'Wish + could' = regret sur une incapacité présente. 'She wishes she could speak Chinese.' = Elle regrette de ne pas parler chinois." },
      { question: "Choose: 'If I had studied harder, I ___ have passed.' (regret about past)", options: ["would have", "would", "could", "should have"], answer: "would have", explication: "Conditional type 3 (irréel du passé) : If + past perfect → would have + past participle. Regret ou reproche sur le passé." },
      { question: "What is the difference between 'must have' and 'might have'?", options: ["'Must have' = strong deduction (certainement), 'might have' = possibility (peut-être)", "They are interchangeable", "'Might have' = obligation, 'must have' = possibility", "'Must have' is for future, 'might have' for past"], answer: "'Must have' = strong deduction (certainement), 'might have' = possibility (peut-être)", explication: "'She must have forgotten.' = Elle a certainement oublié. 'She might have forgotten.' = Elle a peut-être oublié. Degrés de certitude différents." },
      { question: "Invert the subject and auxiliary: 'Rarely ___ he made such a mistake.'", options: ["has", "does", "is", "had"], answer: "has", explication: "Inversion après adverbes négatifs (rarely, never, seldom) : 'Rarely has he made such a mistake.' Registre formel/littéraire." },
      { question: "Choose the correct form: 'Having ___ the report, she sent it.' (finish)", options: ["finished", "finishing", "being finished", "finish"], answer: "finished", explication: "'Having + past participle' = perfect participle, exprime une action antérieure. 'Having finished the report, she sent it.' = Après avoir terminé." },
      { question: "What is the difference between 'to make' and 'to do'?", options: ["'Make' = créer, produire ; 'do' = réaliser une activité ou tâche (nuance idiomatique)", "They are exact synonyms", "'Do' is for objects, 'make' for people", "'Make' is only for cooking"], answer: "'Make' = créer, produire ; 'do' = réaliser une activité ou tâche (nuance idiomatique)", explication: "'Make a cake, make a mistake, make a decision.' 'Do homework, do the dishes, do business.' Pas de règle simple, il faut mémoriser." },
      { question: "What does the construction 'used to + infinitive' express?", options: ["A past habit or state that no longer exists", "A present habit", "A future intention", "A polite request"], answer: "A past habit or state that no longer exists", explication: "'I used to play football every week.' = Je jouais au foot chaque semaine (mais ce n'est plus le cas). Habitude passée révolue." },
      { question: "Identify the type: 'The man whose car was stolen reported it to the police.'", options: ["Defining relative clause with 'whose' (possession)", "Non-defining relative clause", "Conditional clause", "Purpose clause"], answer: "Defining relative clause with 'whose' (possession)", explication: "'Whose' = pronom relatif de possession. 'The man whose car was stolen' = l'homme dont la voiture a été volée. Définit quel homme." }
    ]
  },

  anglais5Civilisation: {
    id: 'anglais5Civilisation', nom: 'Monde anglophone', emoji: '🌐', couleur: '#1d4ed8',
    1: [
      { question: "The United Kingdom is made up of…", options: ["England, Scotland, Wales and Northern Ireland", "England, Scotland and Wales only", "England, Ireland, Scotland and Wales", "Great Britain and Ireland"], answer: "England, Scotland, Wales and Northern Ireland", explication: "The UK = 4 nations : England, Scotland, Wales, Northern Ireland. 'Great Britain' = England + Scotland + Wales (no Northern Ireland)." },
      { question: "What is the capital of Australia?", options: ["Canberra", "Sydney", "Melbourne", "Perth"], answer: "Canberra", explication: "Canberra is the capital of Australia, not Sydney (the largest city). Many people confuse the two." },
      { question: "What language do they speak in most of Canada?", options: ["English and French (both official)", "English only", "French only", "English, French and Spanish"], answer: "English and French (both official)", explication: "Canada has two official languages: English and French. Québec is predominantly French-speaking. French-speaking Canadians are called 'Francophones'." },
      { question: "Who is the head of state in the United Kingdom?", options: ["The King (currently King Charles III)", "The Prime Minister", "The President", "The Archbishop of Canterbury"], answer: "The King (currently King Charles III)", explication: "The UK is a constitutional monarchy. The King/Queen is head of state. The Prime Minister leads the government (executive power)." },
      { question: "Which city is known as the 'Big Apple'?", options: ["New York City", "Los Angeles", "Chicago", "Boston"], answer: "New York City", explication: "New York City's nickname is the 'Big Apple'. Los Angeles = 'City of Angels'. Chicago = 'Windy City'. Boston = 'Beantown'." },
      { question: "What is celebrated on the 4th of July in the USA?", options: ["Independence Day (1776)", "Thanksgiving", "Memorial Day", "Labor Day"], answer: "Independence Day (1776)", explication: "On July 4, 1776, the thirteen American colonies declared independence from Great Britain. The 4th of July = US national holiday." },
      { question: "What is the Commonwealth?", options: ["An association of countries formerly part of the British Empire", "A UK economic agreement", "A military alliance", "The British royal family's wealth"], answer: "An association of countries formerly part of the British Empire", explication: "The Commonwealth (54 countries) includes former British colonies like India, Australia, Canada, Jamaica, Nigeria. King Charles III is its head." },
      { question: "What is the currency of the United Kingdom?", options: ["The pound sterling (£)", "The euro (€)", "The dollar ($)", "The shilling"], answer: "The pound sterling (£)", explication: "The UK uses the pound sterling (£). It did NOT join the euro (€). 1 pound = 100 pence." }
    ],
    2: [
      { question: "What is the difference between 'British English' and 'American English'?", options: ["Vocabulary, spelling and accent differences (flat/apartment, colour/color, etc.)", "They are identical", "British English is older but has the same rules", "American English is a separate language"], answer: "Vocabulary, spelling and accent differences (flat/apartment, colour/color, etc.)", explication: "British: flat, colour, behaviour, mum, lorry. American: apartment, color, behavior, mom, truck. Spelling differences: -our/-or, -ise/-ize." },
      { question: "Who wrote 'Romeo and Juliet' and 'Hamlet'?", options: ["William Shakespeare", "Charles Dickens", "Oscar Wilde", "Geoffrey Chaucer"], answer: "William Shakespeare", explication: "Shakespeare (1564-1616) wrote ~37 plays. 'To be or not to be' (Hamlet), 'Wherefore art thou Romeo?' (R&J) are among the most quoted lines in English." },
      { question: "What major events happened in the USA in 1963 and 1964?", options: ["JFK assassination (1963) and Civil Rights Act (1964)", "The Korean War and the Vietnam War", "Moon landing (1969) and Watergate (1972)", "The Great Depression and Pearl Harbor"], answer: "JFK assassination (1963) and Civil Rights Act (1964)", explication: "JFK was assassinated in Dallas (November 22, 1963). The Civil Rights Act (1964) abolished racial segregation in the USA." },
      { question: "What is Thanksgiving and when is it celebrated?", options: ["An American harvest festival (4th Thursday of November), celebrating the 1621 Pilgrim harvest", "Christmas Eve in the USA", "Independence Day for Native Americans", "The British Harvest Festival"], answer: "An American harvest festival (4th Thursday of November), celebrating the 1621 Pilgrim harvest", explication: "Thanksgiving (1621): the Pilgrims celebrated their first harvest with Native Americans. Traditions: turkey, pumpkin pie, family gathering." },
      { question: "What does 'Brexit' refer to?", options: ["The United Kingdom's withdrawal from the European Union (completed 2020)", "A British export tax", "A Northern Irish political movement", "A Scottish independence referendum"], answer: "The United Kingdom's withdrawal from the European Union (completed 2020)", explication: "Brexit = 'British Exit'. The UK voted 52% to leave the EU in June 2016. The withdrawal was officially completed on 1 January 2021." },
      { question: "Who was Martin Luther King Jr.?", options: ["American civil rights leader who fought for racial equality (1929-1968)", "A Protestant reformer in the 16th century", "The first Black president of the USA", "A Jamaican independence leader"], answer: "American civil rights leader who fought for racial equality (1929-1968)", explication: "'I have a dream' speech (1963). MLK led the non-violent civil rights movement. He was assassinated in Memphis on April 4, 1968." },
      { question: "What does the Statue of Liberty symbolise?", options: ["Freedom and democracy, given to the USA by France in 1886", "American military power", "The founding of New York", "The Declaration of Independence"], answer: "Freedom and democracy, given to the USA by France in 1886", explication: "The Statue of Liberty (Liberty Enlightening the World) was a gift from France. It stands at the entrance of New York harbor since 1886." },
      { question: "What is the Anglosphere?", options: ["Countries where English is the dominant native language (UK, USA, Canada, Australia, NZ, Ireland)", "All countries that teach English", "British territories only", "Countries part of NATO"], answer: "Countries where English is the dominant native language (UK, USA, Canada, Australia, NZ, Ireland)", explication: "The Anglosphere = core English-speaking nations. Together they share cultural, historical and linguistic ties. Combined GDP = ~40% of world GDP." }
    ],
    3: [
      { question: "What was the British Empire at its peak?", options: ["The largest empire in history (25% of world land area) by the early 20th century", "The first colonial empire", "Mainly an Asian empire", "An empire limited to the Americas"], answer: "The largest empire in history (25% of world land area) by the early 20th century", explication: "At its peak (1920s), the British Empire covered 36 million km² and 500 million people. 'The sun never sets on the British Empire.'" },
      { question: "What was the significance of the Magna Carta for the English-speaking world?", options: ["It established that the king was subject to the law, inspiring later democracies", "It gave universal voting rights", "It created Parliament", "It ended feudalism in England"], answer: "It established that the king was subject to the law, inspiring later democracies", explication: "The Magna Carta (1215) influenced the US Constitution and Bill of Rights. Its principle that 'no one is above the law' is foundational to Western democracy." },
      { question: "What is 'soft power' in the context of English-speaking countries?", options: ["Cultural, linguistic and diplomatic influence rather than military force", "Economic sanctions", "Military alliances", "Foreign aid"], answer: "Cultural, linguistic and diplomatic influence rather than military force", explication: "The USA and UK exert huge soft power: Hollywood, pop music, universities, internet companies (Google, Facebook), the English language itself." },
      { question: "What does BLM stand for and when did it rise to prominence?", options: ["Black Lives Matter – rose internationally after George Floyd's death (May 2020)", "British Liberty Movement – 2016 Brexit campaign", "Black Labor Movement – 1960s USA", "Better Lives Mission – UN 2015"], answer: "Black Lives Matter – rose internationally after George Floyd's death (May 2020)", explication: "BLM was founded in 2013 but became a global movement after the murder of George Floyd by police on May 25, 2020, sparking worldwide protests." },
      { question: "What literary movement does Charles Dickens represent?", options: ["Victorian social realism (criticism of industrialisation and poverty)", "Romanticism", "Modernism", "Naturalism"], answer: "Victorian social realism (criticism of industrialisation and poverty)", explication: "Dickens ('Oliver Twist', 'A Christmas Carol', 'Great Expectations') denounced Victorian poverty and inequality through vivid fictional characters." },
      { question: "What is the 'Special Relationship' between the UK and USA?", options: ["A uniquely close political, cultural, military and intelligence partnership", "A formal alliance treaty", "A trade agreement", "A shared monarchy"], answer: "A uniquely close political, cultural, military and intelligence partnership", explication: "The 'Special Relationship' (Churchill's term) includes shared language, history, intelligence services (Five Eyes), military cooperation and values." },
      { question: "What is Silicon Valley and why is it significant?", options: ["A region in California home to major tech companies (Google, Apple, Meta, Netflix)", "A UK tech hub in Cambridge", "A military research centre", "The birthplace of Hollywood"], answer: "A region in California home to major tech companies (Google, Apple, Meta, Netflix)", explication: "Silicon Valley (San Francisco Bay Area) concentrates ~40% of US tech investment. It shaped the digital revolution and global tech culture." },
      { question: "What does the concept of 'English as a Lingua Franca' (ELF) mean?", options: ["English used as a common language between non-native speakers worldwide", "The official English of the UK only", "A simplified form of English for children", "English taught as a foreign language in schools"], answer: "English used as a common language between non-native speakers worldwide", explication: "ELF: 80% of English interactions worldwide are between non-native speakers. English is a global tool of communication, not just a British/American language." }
    ]
  },

  // ══════════════════════════════════════════
  // MATHS SECONDE — chapitres parents
  // ══════════════════════════════════════════
  maths2Nombres: {
    id: 'maths2Nombres', nom: 'Nombres & Calcul', emoji: '🔢', couleur: '#7c3aed',
    sousChapitres: ['maths2Nomb_Ensembles', 'maths2Nomb_Calcul', 'maths2Nomb_Inequations'],
    1: [], 2: [], 3: []
  },
  maths2Fonctions: {
    id: 'maths2Fonctions', nom: 'Fonctions', emoji: '📈', couleur: '#7c3aed',
    sousChapitres: ['maths2Fonc_Generalites', 'maths2Fonc_Affines', 'maths2Fonc_Carre'],
    1: [], 2: [], 3: []
  },
  maths2Geometrie: {
    id: 'maths2Geometrie', nom: 'Géométrie', emoji: '📐', couleur: '#7c3aed',
    sousChapitres: ['maths2Geo_Vecteurs', 'maths2Geo_Thales', 'maths2Geo_Trigo'],
    1: [], 2: [], 3: []
  },
  maths2Stats: {
    id: 'maths2Stats', nom: 'Stats & Probabilités', emoji: '🎲', couleur: '#7c3aed',
    sousChapitres: ['maths2Stats_Statistiques', 'maths2Stats_Proba'],
    1: [], 2: [], 3: []
  },

  // ── Ensembles de nombres ──
  maths2Nomb_Ensembles: {
    id: 'maths2Nomb_Ensembles', nom: 'Ensembles de nombres', emoji: '∈', couleur: '#7c3aed',
    1: [
      { question: "Quel ensemble contient tous les entiers naturels ET les entiers négatifs ?", options: ["ℤ (entiers relatifs)", "ℕ (entiers naturels)", "ℚ (rationnels)", "ℝ (réels)"], answer: "ℤ (entiers relatifs)", explication: "ℕ = {0,1,2,3,...}. ℤ = {...,−2,−1,0,1,2,...} inclut les négatifs. ℚ inclut les fractions. ℝ inclut les irrationnels." },
      { question: "−3 appartient à quel(s) ensemble(s) ?", options: ["ℤ et ℚ et ℝ", "ℕ seulement", "ℚ seulement", "ℕ et ℤ"], answer: "ℤ et ℚ et ℝ", explication: "−3 est entier relatif (ℤ), donc aussi rationnel (ℚ) et réel (ℝ). Il n'est pas dans ℕ car ℕ ne contient pas les négatifs." },
      { question: "√2 appartient à quel ensemble ?", options: ["ℝ seulement (irrationnel)", "ℚ", "ℤ", "ℕ"], answer: "ℝ seulement (irrationnel)", explication: "√2 ≈ 1,414... est irrationnel : il ne peut pas s'écrire comme une fraction p/q. Il est dans ℝ mais pas dans ℚ." },
      { question: "Quelle inclusion est correcte ?", options: ["ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ", "ℤ ⊂ ℕ ⊂ ℚ ⊂ ℝ", "ℚ ⊂ ℤ ⊂ ℕ ⊂ ℝ", "ℝ ⊂ ℚ ⊂ ℤ ⊂ ℕ"], answer: "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ", explication: "ℕ est inclus dans ℤ (tout entier naturel est relatif), ℤ dans ℚ (tout entier est une fraction), ℚ dans ℝ." },
      { question: "0,333... = 1/3. Cela montre que 1/3 est :", options: ["Rationnel (fraction p/q)", "Irrationnel", "Entier", "Naturel"], answer: "Rationnel (fraction p/q)", explication: "Un nombre rationnel est un nombre s'écrivant p/q avec p,q entiers, q≠0. 1/3 vérifie cela, donc 1/3 ∈ ℚ." },
      { question: "Parmi ces nombres, lequel est irrationnel ?", options: ["π", "0,5", "−7", "2/3"], answer: "π", explication: "π ≈ 3,14159... ne peut pas s'écrire comme une fraction exacte. C'est un irrationnel célèbre. Les autres (0,5 = 1/2, −7, 2/3) sont rationnels." },
      { question: "Quel est le symbole pour 'appartient à' ?", options: ["∈", "⊂", "∩", "∪"], answer: "∈", explication: "∈ signifie 'appartient à' : 3 ∈ ℕ. ⊂ signifie 'est inclus dans' : ℕ ⊂ ℤ. ∩ = intersection, ∪ = union." },
      { question: "5/2 = 2,5. Cet intervalle est-il rationnel ?", options: ["Oui, c'est une fraction p/q", "Non, il est irrationnel", "Non, il est entier seulement", "Oui, mais seulement dans ℕ"], answer: "Oui, c'est une fraction p/q", explication: "2,5 = 5/2, fraction avec p=5 et q=2. Tout décimal fini est rationnel." }
    ],
    2: [
      { question: "L'intervalle [−2 ; 3] contient-il des entiers ?", options: ["Oui : −2, −1, 0, 1, 2, 3", "Non, un intervalle ne contient que des réels", "Oui : −2, 0, 3 seulement", "Non, les crochets excluent les bornes"], answer: "Oui : −2, −1, 0, 1, 2, 3", explication: "[a;b] = intervalle fermé : les bornes sont incluses. Les entiers de −2 à 3 sont : −2, −1, 0, 1, 2, 3." },
      { question: "Quelle notation désigne les réels strictement positifs ?", options: ["]0 ; +∞[", "[0 ; +∞[", "]−∞ ; 0[", "[−∞ ; 0]"], answer: "]0 ; +∞[", explication: "] signifie borne exclue. ]0;+∞[ exclut 0 donc contient uniquement les réels > 0. [0;+∞[ inclurait 0." },
      { question: "Vrai ou faux : tout entier est rationnel.", options: ["Vrai", "Faux"], answer: "Vrai", explication: "Tout entier n s'écrit n/1, qui est bien une fraction p/q. Donc ℤ ⊂ ℚ." },
      { question: "Combien d'entiers sont dans l'intervalle ]1 ; 5[ ?", options: ["3 (2, 3, 4)", "4 (1, 2, 3, 4)", "5 (1, 2, 3, 4, 5)", "2 (2, 4)"], answer: "3 (2, 3, 4)", explication: "]1;5[ exclut 1 et 5. Les entiers compris strictement entre 1 et 5 sont : 2, 3, 4." },
      { question: "√9 appartient à quel(s) ensemble(s) ?", options: ["ℕ, ℤ, ℚ et ℝ", "ℝ seulement", "ℚ seulement", "ℤ seulement"], answer: "ℕ, ℤ, ℚ et ℝ", explication: "√9 = 3, qui est un entier naturel. Donc 3 ∈ ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ." },
      { question: "π + 1 est-il rationnel ?", options: ["Non, irrationnel", "Oui, rationnel", "Ça dépend", "On ne peut pas savoir"], answer: "Non, irrationnel", explication: "La somme d'un irrationnel (π) et d'un rationnel (1) est irrationnelle. π + 1 ≈ 4,14159... reste irrationnel." },
      { question: "2√3 est-il rationnel ?", options: ["Non, irrationnel", "Oui, rationnel", "Oui, c'est un entier", "Oui, car 2 est rationnel"], answer: "Non, irrationnel", explication: "√3 est irrationnel. Le produit d'un rationnel non nul (2) par un irrationnel reste irrationnel. 2√3 ≈ 3,464..." },
      { question: "Quelle valeur est dans ]−3 ; 3[ mais pas dans ℤ ?", options: ["1,5", "−3", "0", "3"], answer: "1,5", explication: "1,5 est dans ]−3;3[ (entre −3 et 3 exclus) et n'est pas entier. −3 et 3 sont exclus par les crochets ouverts. 0 est entier." }
    ],
    3: [
      { question: "Démontrer que 0,999... = 1. Quelle méthode utilise-t-on ?", options: ["On pose x = 0,999..., alors 10x = 9,999..., donc 10x − x = 9, d'où x = 1", "On arrondit 0,999... à 1", "On dit que c'est 'presque' 1", "On utilise π"], answer: "On pose x = 0,999..., alors 10x = 9,999..., donc 10x − x = 9, d'où x = 1", explication: "Preuve : x = 0,999..., 10x = 9,999..., 10x − x = 9, 9x = 9, x = 1. Donc 0,999... = 1 exactement." },
      { question: "La densité de ℚ dans ℝ signifie :", options: ["Entre deux réels quelconques, il existe toujours un rationnel", "ℚ = ℝ", "Il y a plus de rationnels que d'irrationnels", "ℚ est infini mais ℝ est fini"], answer: "Entre deux réels quelconques, il existe toujours un rationnel", explication: "La densité de ℚ dans ℝ signifie : pour tous a < b réels, il existe q ∈ ℚ tel que a < q < b. Les rationnels sont 'partout' dans ℝ." },
      { question: "Combien y a-t-il d'irrationnels entre 0 et 1 ?", options: ["Une infinité non dénombrable", "Aucun", "Un nombre fini", "Une infinité dénombrable"], answer: "Une infinité non dénombrable", explication: "Cantor a montré que l'ensemble des irrationnels est 'plus grand' que ℚ : il est non dénombrable. Entre 0 et 1, il y a d'innombrables irrationnels (√2/2, π/4, etc.)." },
      { question: "√2 × √8 est-il irrationnel ?", options: ["Non, c'est 4 (rationnel)", "Oui, irrationnel", "C'est 0", "On ne peut pas calculer"], answer: "Non, c'est 4 (rationnel)", explication: "√2 × √8 = √(2×8) = √16 = 4. Le produit de deux irrationnels peut être rationnel !" },
      { question: "Quelle est la valeur absolue de −7/3 ?", options: ["7/3", "−7/3", "3/7", "−3/7"], answer: "7/3", explication: "|x| = x si x ≥ 0, |x| = −x si x < 0. Ici |−7/3| = −(−7/3) = 7/3 ≈ 2,33." },
      { question: "L'ensemble des réels ℝ est-il dénombrable ?", options: ["Non, il est non dénombrable (plus grand que ℕ)", "Oui, comme ℕ", "Oui, comme ℤ", "Oui, comme ℚ"], answer: "Non, il est non dénombrable (plus grand que ℕ)", explication: "Cantor (diagonale) a prouvé qu'il est impossible de numéroter tous les réels. ℝ est strictement 'plus grand' que ℕ, ℤ et ℚ." },
      { question: "Écrire 0,12̄ (= 0,1222...) comme fraction.", options: ["11/90", "12/100", "1/9", "12/99"], answer: "11/90", explication: "x = 0,1222..., 10x = 1,222..., 100x = 12,222..., 100x − 10x = 11, 90x = 11, x = 11/90." },
      { question: "L'écriture décimale de 1/7 est :", options: ["0,142857142857... (périodique)", "0,143 (fini)", "0,1̄ (un seul chiffre répété)", "Un nombre irrationnel"], answer: "0,142857142857... (périodique)", explication: "1/7 = 0,142857... avec période 142857 (6 chiffres). Tout rationnel a une écriture décimale finie ou périodique." }
    ]
  },

  // ── Calcul numérique ──
  maths2Nomb_Calcul: {
    id: 'maths2Nomb_Calcul', nom: 'Calcul numérique', emoji: '🧮', couleur: '#7c3aed',
    1: [
      { question: "Simplifier : 2³ × 2⁴", options: ["2⁷", "2¹²", "4⁷", "2³⁺⁴ = 2⁷"], answer: "2⁷", explication: "aⁿ × aᵐ = aⁿ⁺ᵐ. Donc 2³ × 2⁴ = 2^(3+4) = 2⁷ = 128." },
      { question: "Calculer (3²)³", options: ["3⁶", "3⁵", "9³", "6²"], answer: "3⁶", explication: "(aⁿ)ᵐ = aⁿˣᵐ. (3²)³ = 3^(2×3) = 3⁶ = 729." },
      { question: "Que vaut 5⁰ ?", options: ["1", "0", "5", "Impossible"], answer: "1", explication: "Tout nombre non nul élevé à la puissance 0 vaut 1 : a⁰ = 1 (a ≠ 0)." },
      { question: "Simplifier : 6⁵ ÷ 6²", options: ["6³", "6⁷", "1³", "36³"], answer: "6³", explication: "aⁿ ÷ aᵐ = aⁿ⁻ᵐ. 6⁵ ÷ 6² = 6^(5−2) = 6³ = 216." },
      { question: "√25 = ?", options: ["5", "12,5", "625", "±5"], answer: "5", explication: "Par convention, √ désigne la racine carrée positive. √25 = 5 (car 5² = 25). L'équation x² = 25 a deux solutions : ±5, mais √25 = 5." },
      { question: "Que vaut 2⁻³ ?", options: ["1/8", "−8", "−1/8", "8"], answer: "1/8", explication: "a⁻ⁿ = 1/aⁿ. 2⁻³ = 1/2³ = 1/8." },
      { question: "√36 × √4 = ?", options: ["24", "√40", "12", "6×4"], answer: "24", explication: "√36 = 6 et √4 = 2. 6 × 2 = 12. Ou : √36 × √4 = √(36×4) = √144 = 12." },
      { question: "Calculer 3/4 + 1/6", options: ["11/12", "4/10", "2/5", "7/12"], answer: "11/12", explication: "PPCM(4,6) = 12. 3/4 = 9/12, 1/6 = 2/12. 9/12 + 2/12 = 11/12." }
    ],
    2: [
      { question: "Développer (2+√3)²", options: ["7 + 4√3", "4 + 3", "4 + √3", "7 − 4√3"], answer: "7 + 4√3", explication: "(a+b)² = a² + 2ab + b². (2+√3)² = 4 + 2×2×√3 + (√3)² = 4 + 4√3 + 3 = 7 + 4√3." },
      { question: "Simplifier √75", options: ["5√3", "3√5", "25√3", "√75 ne se simplifie pas"], answer: "5√3", explication: "75 = 25 × 3. √75 = √(25×3) = √25 × √3 = 5√3." },
      { question: "Rationaliser 1/√2", options: ["√2/2", "2/√2", "1/2", "√2"], answer: "√2/2", explication: "Multiplier numérateur et dénominateur par √2 : 1/√2 × √2/√2 = √2/2." },
      { question: "Calculer (√5 − 1)(√5 + 1)", options: ["4", "5 − 1", "√5", "6"], answer: "4", explication: "(a−b)(a+b) = a² − b². (√5)² − 1² = 5 − 1 = 4." },
      { question: "Écrire 0,000045 en notation scientifique", options: ["4,5 × 10⁻⁵", "45 × 10⁻⁶", "4,5 × 10⁵", "0,45 × 10⁻⁴"], answer: "4,5 × 10⁻⁵", explication: "On place la virgule après le premier chiffre significatif : 4,5. On a bougé de 5 rangs → 10⁻⁵. 0,000045 = 4,5 × 10⁻⁵." },
      { question: "Factoriser x² − 9", options: ["(x−3)(x+3)", "(x−9)(x+1)", "(x−3)²", "x(x−9)"], answer: "(x−3)(x+3)", explication: "Identité remarquable : a² − b² = (a−b)(a+b). x² − 9 = x² − 3² = (x−3)(x+3)." },
      { question: "Que vaut (−2)⁴ ?", options: ["16", "−16", "8", "−8"], answer: "16", explication: "(−2)⁴ = (−2)×(−2)×(−2)×(−2) = 4×4 = 16. Puissance paire d'un négatif = résultat positif." },
      { question: "Simplifier (a³b²)/(a b⁴)", options: ["a²/b²", "a²b²", "a⁴b⁶", "1/ab²"], answer: "a²/b²", explication: "a³/a = a², b²/b⁴ = b⁻² = 1/b². Résultat : a²b⁻² = a²/b²." }
    ],
    3: [
      { question: "Démontrer que √2 est irrationnel (début de preuve) :", options: ["On suppose √2 = p/q irréductible, alors p² = 2q², donc p pair, puis q pair → contradiction", "On calcule √2 ≈ 1,414", "On montre que 2 est premier", "On utilise le théorème de Pythagore"], answer: "On suppose √2 = p/q irréductible, alors p² = 2q², donc p pair, puis q pair → contradiction", explication: "Preuve par l'absurde : si √2 = p/q (irréductible), alors 2q² = p², donc 2|p, p = 2k, 2q² = 4k², q² = 2k², 2|q. Contradiction avec p/q irréductible." },
      { question: "Calculer 2^10", options: ["1024", "200", "512", "2048"], answer: "1024", explication: "2^10 = 1024. Utile en informatique (1 kilo-octet = 1024 octets). 2^9 = 512, 2^11 = 2048." },
      { question: "Simplifier √(a²b) avec a ≥ 0", options: ["a√b", "a²√b", "ab", "√a × b"], answer: "a√b", explication: "√(a²b) = √a² × √b = a√b (car a ≥ 0, √a² = a)." },
      { question: "Développer (x + 1/x)²", options: ["x² + 2 + 1/x²", "x² + 1/x²", "x² − 2 + 1/x²", "2x + 2/x"], answer: "x² + 2 + 1/x²", explication: "(a+b)² = a²+2ab+b². (x+1/x)² = x² + 2×x×(1/x) + 1/x² = x² + 2 + 1/x²." },
      { question: "Résoudre √(3x − 2) = 4", options: ["x = 6", "x = 2", "x = 18", "Pas de solution"], answer: "x = 6", explication: "On élève au carré : 3x − 2 = 16, 3x = 18, x = 6. Vérification : √(18−2) = √16 = 4 ✓." },
      { question: "Que vaut 10⁻² × 10⁵ ?", options: ["10³", "10⁷", "10⁻¹⁰", "1000"], answer: "10³", explication: "10⁻² × 10⁵ = 10^(−2+5) = 10³ = 1000." },
      { question: "Factoriser 4x² − 12x + 9", options: ["(2x − 3)²", "(4x − 9)(x − 1)", "(2x + 3)²", "4(x − 3)²"], answer: "(2x − 3)²", explication: "Identité : a² − 2ab + b² = (a−b)². 4x² = (2x)², 9 = 3², 12x = 2×2x×3. Donc (2x−3)²." },
      { question: "Calculer 27^(2/3)", options: ["9", "3", "18", "27"], answer: "9", explication: "27^(2/3) = (27^(1/3))² = (∛27)² = 3² = 9." }
    ]
  },

  // ── Inéquations ──
  maths2Nomb_Inequations: {
    id: 'maths2Nomb_Inequations', nom: 'Inéquations', emoji: '≤', couleur: '#7c3aed',
    1: [
      { question: "Résoudre 2x + 1 > 7", options: ["x > 3", "x > 4", "x < 3", "x ≥ 3"], answer: "x > 3", explication: "2x + 1 > 7 → 2x > 6 → x > 3. Ensemble solution : ]3 ; +∞[." },
      { question: "Si on multiplie une inégalité par −1, que se passe-t-il ?", options: ["Le sens de l'inégalité s'inverse", "Rien ne change", "L'inégalité devient une égalité", "On ne peut pas multiplier par un négatif"], answer: "Le sens de l'inégalité s'inverse", explication: "3 > 2, mais −3 < −2. Multiplier (ou diviser) par un négatif inverse le sens : < devient >, ≤ devient ≥." },
      { question: "Résoudre x − 5 ≤ 0", options: ["x ≤ 5", "x ≥ 5", "x < 5", "x = 5"], answer: "x ≤ 5", explication: "x − 5 ≤ 0 → x ≤ 5. Ensemble solution : ]−∞ ; 5]." },
      { question: "Résoudre 3x > −9", options: ["x > −3", "x < −3", "x > 3", "x < 3"], answer: "x > −3", explication: "3x > −9 → x > −9/3 → x > −3. On divise par 3 (positif), le sens ne change pas." },
      { question: "Résoudre −2x ≥ 6", options: ["x ≤ −3", "x ≥ −3", "x ≥ 3", "x ≤ 3"], answer: "x ≤ −3", explication: "−2x ≥ 6 → x ≤ 6/(−2) → x ≤ −3. On divise par −2 (négatif) : inversion du sens." },
      { question: "Quelle est la notation d'intervalle de x > 2 ?", options: ["]2 ; +∞[", "[2 ; +∞[", "]−∞ ; 2[", "[−∞ ; 2]"], answer: "]2 ; +∞[", explication: "] signifie borne exclue (stricte). x > 2 = ]2 ; +∞[. Si x ≥ 2, ce serait [2 ; +∞[." },
      { question: "Résoudre 4 ≥ 2x − 2", options: ["x ≤ 3", "x ≥ 3", "x ≤ 1", "x ≥ 1"], answer: "x ≤ 3", explication: "4 ≥ 2x − 2 → 6 ≥ 2x → 3 ≥ x → x ≤ 3." },
      { question: "Si a > b et c > 0, alors :", options: ["ac > bc", "ac < bc", "ac = bc", "On ne sait pas"], answer: "ac > bc", explication: "Multiplier les deux membres par un positif conserve le sens : a > b et c > 0 ⟹ ac > bc." }
    ],
    2: [
      { question: "Résoudre 2x + 3 < 5x − 9", options: ["x > 4", "x < 4", "x > −4", "x < −4"], answer: "x > 4", explication: "2x + 3 < 5x − 9 → 3 + 9 < 5x − 2x → 12 < 3x → x > 4." },
      { question: "Résoudre le système : x > 1 ET x < 5", options: ["]1 ; 5[", "]−∞ ; 1[ ∪ ]5 ; +∞[", "[1 ; 5]", "Pas de solution"], answer: "]1 ; 5[", explication: "L'intersection de ]1;+∞[ et ]−∞;5[ est ]1;5[. C'est l'ensemble des x vérifiant les DEUX conditions." },
      { question: "Résoudre −3(x − 2) > 6", options: ["x < 0", "x > 0", "x < 4", "x > 4"], answer: "x < 0", explication: "−3x + 6 > 6 → −3x > 0 → x < 0 (division par −3, inversion)." },
      { question: "Résoudre (x−1)/2 ≥ 3", options: ["x ≥ 7", "x ≥ 5", "x ≤ 7", "x ≥ 2"], answer: "x ≥ 7", explication: "Multiplier par 2 : x − 1 ≥ 6 → x ≥ 7. Ensemble solution : [7 ; +∞[." },
      { question: "Résoudre x² < 4", options: ["−2 < x < 2", "x < 2", "x > −2", "x² < 4 est impossible"], answer: "−2 < x < 2", explication: "x² < 4 ⟺ |x| < 2 ⟺ −2 < x < 2. Ensemble solution : ]−2 ; 2[." },
      { question: "Résoudre 5 − 2x ≥ 1 − x", options: ["x ≤ 4", "x ≥ 4", "x ≤ −4", "x ≥ −4"], answer: "x ≤ 4", explication: "5 − 2x ≥ 1 − x → 5 − 1 ≥ −x + 2x → 4 ≥ x → x ≤ 4." },
      { question: "Tableau de signes : signe de (x−2)(x+3) pour x > 2 ?", options: ["Positif", "Négatif", "Nul", "Variable"], answer: "Positif", explication: "Pour x > 2 : (x−2) > 0 et (x+3) > 0. Produit de deux positifs = positif." },
      { question: "Résoudre 1/x > 0", options: ["x > 0", "x < 0", "x ≠ 0", "Tous les réels"], answer: "x > 0", explication: "1/x > 0 ssi x > 0 (car 1 > 0, et le quotient est positif ssi le dénominateur est positif)." }
    ],
    3: [
      { question: "Résoudre x² − 5x + 6 > 0", options: ["x < 2 ou x > 3", "2 < x < 3", "x > 6", "x < −6"], answer: "x < 2 ou x > 3", explication: "x² − 5x + 6 = (x−2)(x−3). Tableau de signes : produit > 0 quand les deux facteurs ont même signe → x < 2 ou x > 3." },
      { question: "Résoudre |2x − 3| < 5", options: ["−1 < x < 4", "x < −1 ou x > 4", "x < 4", "x > −1"], answer: "−1 < x < 4", explication: "|u| < a ⟺ −a < u < a. |2x−3| < 5 ⟺ −5 < 2x−3 < 5 ⟺ −2 < 2x < 8 ⟺ −1 < x < 4." },
      { question: "Résoudre (x+1)/(x−2) ≥ 0", options: ["x ≤ −1 ou x > 2", "−1 ≤ x < 2", "x ≥ −1", "x > 2"], answer: "x ≤ −1 ou x > 2", explication: "Tableau de signes : numérateur (x+1) ≥ 0 si x ≥ −1 ; dénominateur (x−2) > 0 si x > 2. Quotient ≥ 0 : même signe. Solutions : x ≤ −1 (deux négatifs) ou x > 2 (deux positifs). x = −1 inclus, x = 2 exclu (dénominateur nul)." },
      { question: "Résoudre x² ≥ 2x", options: ["x ≤ 0 ou x ≥ 2", "0 ≤ x ≤ 2", "x ≥ 2", "x ≤ 0"], answer: "x ≤ 0 ou x ≥ 2", explication: "x² − 2x ≥ 0 → x(x−2) ≥ 0. Tableau de signes : négatif sur ]0;2[, positif sur ]−∞;0] ∪ [2;+∞[." },
      { question: "Encadrer √7 entre deux entiers consécutifs.", options: ["2 < √7 < 3", "3 < √7 < 4", "1 < √7 < 2", "4 < √7 < 5"], answer: "2 < √7 < 3", explication: "2² = 4 < 7 < 9 = 3². Donc 2 < √7 < 3. √7 ≈ 2,646." },
      { question: "Pour quelles valeurs de k l'équation kx > 3 a-t-elle toujours une solution ?", options: ["Pour tout k ≠ 0", "Pour k > 0 seulement", "Pour k < 0 seulement", "Pour k = 0"], answer: "Pour tout k ≠ 0", explication: "Si k > 0 : x > 3/k, solution = ]3/k ; +∞[. Si k < 0 : x < 3/k, solution = ]−∞ ; 3/k[. Si k = 0 : 0 > 3 est faux, pas de solution." },
      { question: "Résoudre |x + 2| ≥ 3", options: ["x ≤ −5 ou x ≥ 1", "−5 ≤ x ≤ 1", "x ≥ 1", "x ≤ −5"], answer: "x ≤ −5 ou x ≥ 1", explication: "|u| ≥ a ⟺ u ≤ −a ou u ≥ a. |x+2| ≥ 3 ⟺ x+2 ≤ −3 ou x+2 ≥ 3 ⟺ x ≤ −5 ou x ≥ 1." },
      { question: "Résoudre simultanément : 2x > 4 ET 3x < 15", options: ["2 < x < 5", "x > 2 ou x < 5", "x > 5", "x < 2"], answer: "2 < x < 5", explication: "2x > 4 → x > 2. 3x < 15 → x < 5. Les deux conditions : 2 < x < 5, soit ]2 ; 5[." }
    ]
  },

  // ── Généralités sur les fonctions ──
  maths2Fonc_Generalites: {
    id: 'maths2Fonc_Generalites', nom: 'Généralités sur les fonctions', emoji: '𝑓', couleur: '#7c3aed',
    1: [
      { question: "Qu'est-ce qu'une fonction ?", options: ["Un processus qui associe à chaque valeur x (au plus) une valeur f(x)", "Une équation", "Un tableau de valeurs", "Un graphique"], answer: "Un processus qui associe à chaque valeur x (au plus) une valeur f(x)", explication: "f : x ↦ f(x). Pour chaque x de l'ensemble de départ (domaine), on obtient un et un seul f(x)." },
      { question: "Que signifie f(3) = 7 ?", options: ["L'image de 3 par f est 7", "3 est l'image de 7", "f = 3 + 7", "x = 7 quand x = 3"], answer: "L'image de 3 par f est 7", explication: "f(3) = 7 : l'antécédent est 3, l'image est 7. On dit que f envoie 3 sur 7." },
      { question: "Si f(x) = 2x − 1, calculer f(4)", options: ["7", "8", "6", "9"], answer: "7", explication: "f(4) = 2×4 − 1 = 8 − 1 = 7." },
      { question: "Sur un graphe, comment lire f(2) ?", options: ["On cherche x = 2 sur l'axe horizontal, et on lit l'ordonnée du point", "On cherche y = 2 sur l'axe vertical", "On calcule 2 + f", "On lit la valeur en x = 0"], answer: "On cherche x = 2 sur l'axe horizontal, et on lit l'ordonnée du point", explication: "f(2) est l'ordonnée du point de la courbe ayant pour abscisse 2. On monte verticalement depuis x = 2 jusqu'à la courbe." },
      { question: "Quel est le domaine de définition de f(x) = 1/x ?", options: ["ℝ \\ {0} (tous les réels sauf 0)", "ℝ entier", "[0 ; +∞[", "ℕ"], answer: "ℝ \\ {0} (tous les réels sauf 0)", explication: "On ne peut pas diviser par 0. f(x) = 1/x est définie pour x ≠ 0, soit sur ℝ \\ {0}." },
      { question: "Une fonction est croissante sur [a;b] si :", options: ["Pour x₁ < x₂ dans [a;b], f(x₁) < f(x₂)", "Pour x₁ < x₂, f(x₁) > f(x₂)", "f est positive sur [a;b]", "La courbe monte puis descend"], answer: "Pour x₁ < x₂ dans [a;b], f(x₁) < f(x₂)", explication: "Croissante = plus x est grand, plus f(x) est grand. La courbe monte de gauche à droite." },
      { question: "Que représente le maximum d'une fonction sur [a;b] ?", options: ["La plus grande valeur prise par f sur cet intervalle", "Le point le plus à droite", "Le point le plus à gauche", "La valeur moyenne"], answer: "La plus grande valeur prise par f sur cet intervalle", explication: "Le maximum de f sur [a;b] est la plus grande valeur de f(x) pour x ∈ [a;b]." },
      { question: "Si f(x) = x², calculer f(−3)", options: ["9", "−9", "6", "−6"], answer: "9", explication: "f(−3) = (−3)² = 9. Le carré d'un nombre négatif est toujours positif." }
    ],
    2: [
      { question: "Quel est le domaine de définition de f(x) = √(x − 3) ?", options: ["[3 ; +∞[", "]3 ; +∞[", "ℝ entier", "]−∞ ; 3]"], answer: "[3 ; +∞[", explication: "La racine carrée est définie pour les réels positifs : x − 3 ≥ 0 ⟺ x ≥ 3. Domaine : [3 ; +∞[." },
      { question: "f(x) = x² − 4x + 3. Calculer f(1) et f(3).", options: ["f(1) = 0 et f(3) = 0", "f(1) = 1 et f(3) = 3", "f(1) = 4 et f(3) = 6", "f(1) = −1 et f(3) = −1"], answer: "f(1) = 0 et f(3) = 0", explication: "f(1) = 1 − 4 + 3 = 0. f(3) = 9 − 12 + 3 = 0. Ce sont les racines de f." },
      { question: "Quelle est la parité d'une fonction paire ?", options: ["f(−x) = f(x) pour tout x du domaine", "f(−x) = −f(x)", "f(x) = f(x+T) pour tout x", "f est positive"], answer: "f(−x) = f(x) pour tout x du domaine", explication: "Paire : symétrie par rapport à l'axe des ordonnées. Exemple : f(x) = x² (f(−3) = 9 = f(3))." },
      { question: "Quelle est la parité de f(x) = x³ ?", options: ["Impaire (f(−x) = −f(x))", "Paire", "Ni paire ni impaire", "Constante"], answer: "Impaire (f(−x) = −f(x))", explication: "f(−x) = (−x)³ = −x³ = −f(x). Fonctions impaires = symétrie centrale par rapport à l'origine." },
      { question: "Sur ]−∞ ; 2], f est décroissante. Cela signifie :", options: ["Plus x augmente (jusqu'à 2), plus f(x) diminue", "f est négative sur cet intervalle", "f atteint son minimum en 2", "f n'est pas définie après 2"], answer: "Plus x augmente (jusqu'à 2), plus f(x) diminue", explication: "Décroissante : x₁ < x₂ ⟹ f(x₁) > f(x₂). La courbe descend de gauche à droite." },
      { question: "Combien de solutions a f(x) = k si la droite y = k coupe la courbe en 2 points ?", options: ["2 solutions", "1 solution", "0 solution", "Infinité"], answer: "2 solutions", explication: "f(x) = k ⟺ intersection de la courbe C_f avec la droite horizontale y = k. 2 points d'intersection → 2 solutions." },
      { question: "f(x) = 3. Quelle est la nature de f ?", options: ["Fonction constante", "Fonction affine", "Fonction carré", "Fonction racine"], answer: "Fonction constante", explication: "f(x) = 3 pour tout x : c'est une constante. Sa courbe est une droite horizontale y = 3." },
      { question: "Trouver l'antécédent de 5 par f(x) = 2x + 1", options: ["x = 2", "x = 3", "x = 11", "x = 5"], answer: "x = 2", explication: "On cherche x tel que f(x) = 5 : 2x + 1 = 5 → 2x = 4 → x = 2." }
    ],
    3: [
      { question: "Dresser un tableau de variations de f(x) = x² − 2x − 3 sur ℝ", options: ["Décroissante sur ]−∞;1], croissante sur [1;+∞[ avec minimum f(1) = −4", "Croissante partout", "Décroissante partout", "Maximum en x = 1"], answer: "Décroissante sur ]−∞;1], croissante sur [1;+∞[ avec minimum f(1) = −4", explication: "f(x) = (x−1)² − 4 (forme canonique). Sommet en x = 1, valeur minimale f(1) = −4." },
      { question: "Si f est définie sur [−3 ; 5] et y = f(x) est une parabole avec sommet en x = 1, où est le maximum ?", options: ["En x = −3 ou x = 5 (bornes les plus éloignées du sommet)", "En x = 1 (sommet)", "En x = 0", "Impossible à déterminer"], answer: "En x = −3 ou x = 5 (bornes les plus éloignées du sommet)", explication: "Sur un intervalle fermé, le max d'une parabole est atteint à la borne la plus éloignée du sommet. |−3−1| = 4, |5−1| = 4 : les deux bornes sont équidistantes, donc comparer f(−3) et f(5)." },
      { question: "f(x) = |x − 2|. Calculer f(−1) et f(5).", options: ["f(−1) = 3 et f(5) = 3", "f(−1) = −3 et f(5) = 3", "f(−1) = 1 et f(5) = 5", "f(−1) = 3 et f(5) = 7"], answer: "f(−1) = 3 et f(5) = 3", explication: "f(−1) = |−1 − 2| = |−3| = 3. f(5) = |5 − 2| = |3| = 3." },
      { question: "Que signifie 'f est bornée sur [a;b]' ?", options: ["Il existe M tel que |f(x)| ≤ M pour tout x ∈ [a;b]", "f est constante", "f est croissante", "f est définie en a et b"], answer: "Il existe M tel que |f(x)| ≤ M pour tout x ∈ [a;b]", explication: "Bornée = les valeurs de f ne partent pas à l'infini. Toute fonction continue sur [a;b] (fermé borné) est bornée (théorème)." },
      { question: "g(x) = f(x + 2). Par rapport à f, la courbe de g est :", options: ["Translatée de 2 vers la gauche", "Translatée de 2 vers la droite", "Montée de 2", "Descendue de 2"], answer: "Translatée de 2 vers la gauche", explication: "g(x) = f(x+2) : on remplace x par x+2, ce qui décale la courbe de 2 vers la gauche." },
      { question: "La courbe de f(x) = x² − 4 coupe l'axe des abscisses en :", options: ["x = −2 et x = 2", "x = 4 seulement", "x = 0 et x = 4", "Pas d'intersection"], answer: "x = −2 et x = 2", explication: "f(x) = 0 → x² = 4 → x = ±2." },
      { question: "Définir une fonction injective.", options: ["f est injective si f(x₁) = f(x₂) implique x₁ = x₂", "f est injective si f est croissante", "f est injective si f est positive", "f est injective si son domaine est ℝ"], answer: "f est injective si f(x₁) = f(x₂) implique x₁ = x₂", explication: "Injective = deux entrées distinctes donnent deux sorties distinctes. Graphiquement : toute droite horizontale coupe la courbe au plus une fois." },
      { question: "Si f(x) = 1/(x²+1), quel est le maximum de f ?", options: ["f(0) = 1", "Il n'y a pas de maximum", "f(1) = 0,5", "f(−1) = 0,5"], answer: "f(0) = 1", explication: "x²+1 ≥ 1, donc 1/(x²+1) ≤ 1. L'égalité est atteinte en x = 0 : f(0) = 1/1 = 1. Maximum = 1." }
    ]
  },

  // ── Fonctions affines et droites ──
  maths2Fonc_Affines: {
    id: 'maths2Fonc_Affines', nom: 'Fonctions affines & droites', emoji: '↗', couleur: '#7c3aed',
    1: [
      { question: "f(x) = 3x + 2 est une fonction affine. Quel est le coefficient directeur ?", options: ["3", "2", "5", "3x"], answer: "3", explication: "f(x) = ax + b : a = coefficient directeur (pente), b = ordonnée à l'origine. Ici a = 3, b = 2." },
      { question: "Quelle est l'ordonnée à l'origine de f(x) = −2x + 5 ?", options: ["5", "−2", "0", "3"], answer: "5", explication: "L'ordonnée à l'origine est f(0) = b. f(0) = −2×0 + 5 = 5. Le point (0 ; 5) est sur la droite." },
      { question: "La droite y = 4 est-elle croissante, décroissante ou constante ?", options: ["Constante", "Croissante", "Décroissante", "Affine non constante"], answer: "Constante", explication: "y = 4 est une droite horizontale : f(x) = 4, coefficient directeur a = 0. La fonction est constante." },
      { question: "Deux droites parallèles ont :", options: ["Le même coefficient directeur", "La même ordonnée à l'origine", "Le même point d'intersection", "Des coefficients directeurs opposés"], answer: "Le même coefficient directeur", explication: "Droites parallèles ⟺ même pente (coefficient directeur a) et ordonnées à l'origine différentes." },
      { question: "Trouver l'équation d'une droite passant par A(0;3) avec pente 2.", options: ["y = 2x + 3", "y = 3x + 2", "y = 2x − 3", "y = 3x − 2"], answer: "y = 2x + 3", explication: "Ordonnée à l'origine = 3 (point A(0;3)), pente = 2. Équation : y = 2x + 3." },
      { question: "Calculer le coefficient directeur de la droite passant par (1;4) et (3;10)", options: ["3", "2", "7", "1/3"], answer: "3", explication: "a = (y₂−y₁)/(x₂−x₁) = (10−4)/(3−1) = 6/2 = 3." },
      { question: "Résoudre graphiquement f(x) = g(x) avec f(x) = 2x+1 et g(x) = x+4", options: ["x = 3 (intersection des droites)", "x = 0", "x = 5", "Pas d'intersection"], answer: "x = 3 (intersection des droites)", explication: "2x+1 = x+4 → x = 3. Au point x = 3, les deux droites se croisent (y = 7)." },
      { question: "La droite y = −x + 5 est :", options: ["Décroissante (pente négative)", "Croissante (pente positive)", "Constante", "Verticale"], answer: "Décroissante (pente négative)", explication: "Pente a = −1 < 0 → droite décroissante. Quand x augmente, y diminue." }
    ],
    2: [
      { question: "Trouver l'équation de la droite passant par (2;5) et (4;11)", options: ["y = 3x − 1", "y = 3x + 1", "y = 2x + 1", "y = 3x − 3"], answer: "y = 3x − 1", explication: "a = (11−5)/(4−2) = 3. y = 3x + b. Point (2;5) : 5 = 6 + b → b = −1. Équation : y = 3x − 1." },
      { question: "Deux droites sont perpendiculaires si :", options: ["Le produit de leurs pentes est −1", "Leurs pentes sont égales", "Leurs pentes sont opposées", "L'une est verticale"], answer: "Le produit de leurs pentes est −1", explication: "D₁ de pente a₁ ⊥ D₂ de pente a₂ ⟺ a₁ × a₂ = −1. Exemple : pentes 2 et −1/2." },
      { question: "La droite y = 2x − 3 coupe l'axe des x en :", options: ["x = 3/2", "x = −3", "x = 3", "x = 2"], answer: "x = 3/2", explication: "Sur l'axe des x, y = 0 : 2x − 3 = 0 → x = 3/2. Point (3/2 ; 0)." },
      { question: "Déterminer si (2;7) est sur la droite y = 4x − 1", options: ["Oui, car 4×2 − 1 = 7", "Non, car 4×2 − 1 ≠ 7", "On ne peut pas savoir", "Oui, si x > 0"], answer: "Oui, car 4×2 − 1 = 7", explication: "On substitue x = 2 : 4×2 − 1 = 8 − 1 = 7. L'ordonnée correspond, donc (2;7) est bien sur la droite." },
      { question: "Médiatrice du segment [AB] : quelle est sa direction ?", options: ["Perpendiculaire à AB et passant par le milieu de AB", "Parallèle à AB", "Passant par A et B", "Perpendiculaire à AB passant par A"], answer: "Perpendiculaire à AB et passant par le milieu de AB", explication: "La médiatrice est l'ensemble des points équidistants de A et B. Elle est ⊥ à [AB] et passe par son milieu." },
      { question: "f(x) = 2x + 1, g(x) = 2x − 3. Ces fonctions ont-elles un point commun ?", options: ["Non, elles sont parallèles", "Oui, en x = 0", "Oui, en y = 0", "Oui, en x = 2"], answer: "Non, elles sont parallèles", explication: "Même pente (2), ordonnées différentes (1 et −3) → droites parallèles, donc jamais en intersection." },
      { question: "Résoudre 3x + 1 > 2x + 5", options: ["x > 4", "x < 4", "x > −4", "x < −4"], answer: "x > 4", explication: "3x + 1 > 2x + 5 → 3x − 2x > 5 − 1 → x > 4." },
      { question: "Interpoler : f(1) = 3 et f(5) = 11. Calculer f(3) si f est affine.", options: ["7", "6", "8", "14"], answer: "7", explication: "f affine → pente a = (11−3)/(5−1) = 2. f(x) = 2x + b. f(1) = 3 → b = 1. f(3) = 7." }
    ],
    3: [
      { question: "Dans un repère, que représente le coefficient directeur concrètement ?", options: ["La variation de y quand x augmente de 1", "La valeur de y en x = 1", "L'angle de la droite avec l'axe y", "La distance entre deux points"], answer: "La variation de y quand x augmente de 1", explication: "Si a = 3 : quand x augmente de 1, y augmente de 3. Formellement : a = Δy/Δx = (f(x+1)−f(x))/1." },
      { question: "Trouver l'équation de la médiatrice de A(1;2) et B(5;4).", options: ["y = −2x + 9", "y = 2x − 3", "y = −2x + 3", "y = x + 3"], answer: "y = −2x + 9", explication: "Milieu M = (3;3). Pente AB = (4−2)/(5−1) = 1/2. Pente médiatrice = −2. Équation : y − 3 = −2(x − 3) → y = −2x + 9." },
      { question: "Système : y = 2x + 1 et y = −x + 7. Trouver le point d'intersection.", options: ["(2;5)", "(3;7)", "(1;3)", "(2;3)"], answer: "(2;5)", explication: "2x+1 = −x+7 → 3x = 6 → x = 2. y = 2×2+1 = 5. Intersection : (2;5)." },
      { question: "Trois points A, B, C sont alignés si :", options: ["Le coefficient directeur AB = coefficient directeur AC", "AB + AC = BC", "A, B, C forment un triangle aplati", "Les coordonnées sont dans le même ordre"], answer: "Le coefficient directeur AB = coefficient directeur AC", explication: "A, B, C alignés ⟺ pente(AB) = pente(AC). On peut aussi utiliser les déterminants ou vérifier que C est sur la droite AB." },
      { question: "f(x) = ax + b. Si f est croissante et f(0) < 0, alors :", options: ["a > 0 et b < 0", "a > 0 et b > 0", "a < 0 et b < 0", "a < 0 et b > 0"], answer: "a > 0 et b < 0", explication: "Croissante ⟹ a > 0. f(0) = b < 0." },
      { question: "Distance entre A(1;2) et B(4;6)", options: ["5", "7", "√7", "√25 = 5"], answer: "5", explication: "d(A,B) = √((4−1)² + (6−2)²) = √(9+16) = √25 = 5." },
      { question: "Droite d'équation 2x − 3y + 6 = 0. Quel est son coefficient directeur ?", options: ["2/3", "2", "−3", "−2"], answer: "2/3", explication: "On isole y : 3y = 2x + 6 → y = (2/3)x + 2. Coefficient directeur a = 2/3." },
      { question: "Valeur de k pour que les droites y = kx+1 et y = 3x−2 soient perpendiculaires.", options: ["k = −1/3", "k = 3", "k = 1/3", "k = −3"], answer: "k = −1/3", explication: "Perpendiculaires ⟺ k × 3 = −1 → k = −1/3." }
    ]
  },

  // ── Fonction carré et valeur absolue ──
  maths2Fonc_Carre: {
    id: 'maths2Fonc_Carre', nom: 'Fonction carré & valeur absolue', emoji: 'x²', couleur: '#7c3aed',
    1: [
      { question: "Quel est l'axe de symétrie de la parabole y = x² ?", options: ["L'axe des ordonnées (x = 0)", "L'axe des abscisses (y = 0)", "La droite y = x", "La droite x = 1"], answer: "L'axe des ordonnées (x = 0)", explication: "f(x) = x² est paire (f(−x) = f(x)), donc symétrique par rapport à l'axe des y." },
      { question: "La parabole y = x² admet un :", options: ["Minimum en (0;0)", "Maximum en (0;0)", "Minimum en (1;1)", "Pas d'extremum"], answer: "Minimum en (0;0)", explication: "x² ≥ 0 pour tout x, donc le minimum est 0, atteint en x = 0. La parabole est 'tournée vers le haut'." },
      { question: "|−5| = ?", options: ["5", "−5", "0", "25"], answer: "5", explication: "La valeur absolue donne la distance à 0. |−5| = 5, |5| = 5. Toujours positif ou nul." },
      { question: "f(x) = x² − 4. Pour quelles valeurs de x, f(x) = 0 ?", options: ["x = −2 et x = 2", "x = 4 et x = −4", "x = 2 seulement", "x = 0"], answer: "x = −2 et x = 2", explication: "x² − 4 = 0 → x² = 4 → x = ±2." },
      { question: "La parabole y = (x−2)² a son sommet en :", options: ["(2;0)", "(0;2)", "(−2;0)", "(0;4)"], answer: "(2;0)", explication: "y = (x−h)² + k a son sommet en (h;k). Ici (x−2)² + 0 → sommet (2;0)." },
      { question: "Résoudre |x| = 3", options: ["x = 3 ou x = −3", "x = 3 seulement", "x = −3 seulement", "Pas de solution"], answer: "x = 3 ou x = −3", explication: "|x| = 3 ⟺ x = 3 ou x = −3. La valeur absolue peut provenir d'un positif ou d'un négatif." },
      { question: "Sens de variation de f(x) = x² sur [0 ; +∞[", options: ["Croissante", "Décroissante", "Constante", "Ni croissante ni décroissante"], answer: "Croissante", explication: "Sur [0;+∞[, plus x est grand, plus x² est grand. Sur ]−∞;0], f est décroissante." },
      { question: "Résoudre x² = 9", options: ["x = 3 ou x = −3", "x = 3 seulement", "x = ±√9", "x = 81"], answer: "x = 3 ou x = −3", explication: "x² = 9 → x = √9 ou x = −√9 → x = 3 ou x = −3." }
    ],
    2: [
      { question: "Mettre x² − 6x + 5 sous forme canonique", options: ["(x−3)² − 4", "(x−3)² + 4", "(x+3)² − 4", "(x−3)²"], answer: "(x−3)² − 4", explication: "x² − 6x + 5 = x² − 2×3×x + 9 − 9 + 5 = (x−3)² − 4. Vérif : sommet en (3;−4)." },
      { question: "Résoudre x² − 5x + 6 = 0", options: ["x = 2 ou x = 3", "x = 5 ou x = 6", "x = −2 ou x = −3", "x = 1 ou x = 6"], answer: "x = 2 ou x = 3", explication: "Discriminant Δ = 25 − 24 = 1. x = (5±1)/2 → x = 3 ou x = 2. Vérif : 2×3 = 6 ✓, 2+3 = 5 ✓." },
      { question: "Résoudre |2x − 1| = 3", options: ["x = 2 ou x = −1", "x = 2 seulement", "x = 1 ou x = 2", "x = 4 ou x = −2"], answer: "x = 2 ou x = −1", explication: "|2x−1| = 3 ⟺ 2x−1 = 3 ou 2x−1 = −3. → 2x = 4 ou 2x = −2 → x = 2 ou x = −1." },
      { question: "La parabole y = −x² + 4 est :", options: ["Tournée vers le bas, maximum en (0;4)", "Tournée vers le haut, minimum en (0;4)", "Tournée vers le bas, minimum en (0;4)", "Une droite"], answer: "Tournée vers le bas, maximum en (0;4)", explication: "Coefficient de x² est −1 < 0 → parabole tournée vers le bas. Sommet (0;4) est un maximum." },
      { question: "f(x) = (x+1)² − 3. Quel est le minimum et où est-il atteint ?", options: ["Minimum −3 en x = −1", "Minimum −3 en x = 1", "Maximum 3 en x = −1", "Minimum 0 en x = −1"], answer: "Minimum −3 en x = −1", explication: "(x+1)² ≥ 0, donc f(x) ≥ −3. Minimum = −3 atteint quand (x+1)² = 0, soit x = −1." },
      { question: "Résoudre x² > 9", options: ["x < −3 ou x > 3", "−3 < x < 3", "x > 3", "x > 9"], answer: "x < −3 ou x > 3", explication: "x² > 9 ⟺ |x| > 3 ⟺ x < −3 ou x > 3." },
      { question: "Discriminant de ax²+bx+c = 0 : si Δ < 0 alors :", options: ["Pas de solution réelle", "Une solution double", "Deux solutions distinctes", "x = 0 est solution"], answer: "Pas de solution réelle", explication: "Δ = b²−4ac. Si Δ < 0 : pas de racine réelle. Si Δ = 0 : une racine double. Si Δ > 0 : deux racines distinctes." },
      { question: "g(x) = 2(x−1)² + 3. Quel est le minimum de g ?", options: ["3 en x = 1", "1 en x = 3", "2 en x = 1", "0 en x = 1"], answer: "3 en x = 1", explication: "2(x−1)² ≥ 0, donc g(x) ≥ 3. Minimum = 3 atteint en x = 1." }
    ],
    3: [
      { question: "Trouver les valeurs de k pour que x² − 4x + k = 0 ait deux solutions distinctes.", options: ["k < 4", "k > 4", "k = 4", "k ≤ 4"], answer: "k < 4", explication: "Δ = 16 − 4k > 0 ⟺ k < 4." },
      { question: "Somme et produit des racines de 2x² − 6x + 4 = 0", options: ["Somme = 3, Produit = 2", "Somme = 6, Produit = 4", "Somme = −3, Produit = 2", "Somme = 3, Produit = −2"], answer: "Somme = 3, Produit = 2", explication: "ax²+bx+c : S = −b/a = 6/2 = 3 et P = c/a = 4/2 = 2. Vérif : x = 1 et x = 2 (Δ = 36−32 = 4)." },
      { question: "Résoudre |x² − 4| < 5", options: ["−3 < x < 3", "x < −3 ou x > 3", "−√9 < x < √9", "Pas de solution"], answer: "−3 < x < 3", explication: "|x²−4| < 5 ⟺ −5 < x²−4 < 5 ⟺ −1 < x² < 9 ⟺ x² < 9 (car x² ≥ 0) ⟺ −3 < x < 3." },
      { question: "Factoriser ax² + bx + c si Δ > 0", options: ["a(x − x₁)(x − x₂) avec x₁,x₂ racines", "(x − x₁)(x + x₂)", "a(x + x₁)(x + x₂)", "Impossible"], answer: "a(x − x₁)(x − x₂) avec x₁,x₂ racines", explication: "Si Δ > 0 : ax²+bx+c = a(x−x₁)(x−x₂) où x₁ et x₂ sont les deux racines réelles distinctes." },
      { question: "f(x) = x² + px + q. Le sommet a pour abscisse :", options: ["−p/2", "p/2", "−q", "p"], answer: "−p/2", explication: "Forme canonique : (x + p/2)² + (q − p²/4). Sommet en x = −p/2." },
      { question: "Résoudre x² − 2x − 8 > 0", options: ["x < −2 ou x > 4", "−2 < x < 4", "x > 4", "x < −2"], answer: "x < −2 ou x > 4", explication: "Racines : Δ = 4+32 = 36, x = (2±6)/2 → x = 4 ou x = −2. Parabole (a > 0) positive à l'extérieur des racines." },
      { question: "Combien de solutions a x² + 2x + 1 = 0 ?", options: ["Une solution double : x = −1", "Deux solutions distinctes", "Pas de solution", "Infinité de solutions"], answer: "Une solution double : x = −1", explication: "Δ = 4 − 4 = 0 → solution double x = −b/2a = −2/2 = −1. x²+2x+1 = (x+1)²." },
      { question: "Trouver f(x) = ax² + bx + c sachant : f(0)=1, f(1)=4, f(−1)=0", options: ["f(x) = 2x² + x + 1", "f(x) = x² + 2x + 1", "f(x) = 2x² − x + 1", "f(x) = x² − x + 1"], answer: "f(x) = 2x² + x + 1", explication: "f(0)=1→c=1. f(1)=a+b+1=4→a+b=3. f(−1)=a−b+1=0→a−b=−1. Donc a=1, b=2. Attends, a=(3−1)/2=1, b=3−1=2. f(x)=x²+2x+1=(x+1)². Mais f(−1)=0 ✓. Vérif f(1)=1+2+1=4 ✓." }
    ]
  },

  // ── Vecteurs ──
  maths2Geo_Vecteurs: {
    id: 'maths2Geo_Vecteurs', nom: 'Vecteurs', emoji: '→', couleur: '#7c3aed',
    1: [
      { question: "Qu'est-ce qu'un vecteur ?", options: ["Un objet mathématique ayant une direction, un sens et une norme", "Un point du plan", "Une droite", "Un angle"], answer: "Un objet mathématique ayant une direction, un sens et une norme", explication: "Un vecteur AB est défini par son point de départ A, son point d'arrivée B. Il a : direction (droite AB), sens (A vers B), norme |AB|." },
      { question: "Deux vecteurs égaux ont :", options: ["Même direction, même sens, même norme", "Même point d'application", "Mêmes coordonnées dans un repère", "Même origine"], answer: "Même direction, même sens, même norme", explication: "En géométrie vectorielle, deux vecteurs sont égaux s'ils ont même direction, même sens et même longueur (même norme). L'origine peut être différente." },
      { question: "Si A(1;2) et B(4;6), calculer les coordonnées du vecteur AB", options: ["(3;4)", "(4;6)", "(−3;−4)", "(5;8)"], answer: "(3;4)", explication: "Vecteur AB = (xB − xA ; yB − yA) = (4−1 ; 6−2) = (3;4)." },
      { question: "La norme du vecteur (3;4) est :", options: ["5", "7", "12", "√7"], answer: "5", explication: "||(3;4)|| = √(3²+4²) = √(9+16) = √25 = 5. (Triangle 3-4-5 rectangle)." },
      { question: "Que vaut le vecteur nul ?", options: ["(0;0), norme 0", "(1;0)", "Un vecteur sans sens défini", "Impossible"], answer: "(0;0), norme 0", explication: "Le vecteur nul noté 0⃗ a pour coordonnées (0;0) et norme 0. Il est le seul vecteur sans direction définie." },
      { question: "Si u⃗ = (2;3) et v⃗ = (−1;4), calculer u⃗ + v⃗", options: ["(1;7)", "(3;−1)", "(−2;12)", "(2;7)"], answer: "(1;7)", explication: "u⃗ + v⃗ = (2+(−1) ; 3+4) = (1;7). Addition terme à terme." },
      { question: "Calculer 3 × (2;−1)", options: ["(6;−3)", "(6;3)", "(2;−3)", "(5;2)"], answer: "(6;−3)", explication: "k × (a;b) = (ka;kb). 3 × (2;−1) = (6;−3)." },
      { question: "Le vecteur BA est-il égal à AB ?", options: ["Non, BA = −AB (sens opposé)", "Oui, c'est le même vecteur", "Oui, si A = B", "Non, BA n'existe pas"], answer: "Non, BA = −AB (sens opposé)", explication: "BA va de B vers A, sens opposé à AB. Donc BA⃗ = −AB⃗. Les coordonnées de BA sont (xA−xB ; yA−yB)." }
    ],
    2: [
      { question: "ABCD est un parallélogramme. Quelle relation vectorielle est vraie ?", options: ["AB⃗ = DC⃗", "AB⃗ = CD⃗", "AB⃗ = DA⃗", "AB⃗ + DC⃗ = 0⃗"], answer: "AB⃗ = DC⃗", explication: "Dans un parallélogramme, les côtés opposés sont parallèles, de même sens et même longueur : AB⃗ = DC⃗." },
      { question: "Milieu M de [AB] avec A(1;3) et B(5;7) :", options: ["M(3;5)", "M(4;10)", "M(2;4)", "M(6;10)"], answer: "M(3;5)", explication: "M = ((xA+xB)/2 ; (yA+yB)/2) = ((1+5)/2 ; (3+7)/2) = (3;5)." },
      { question: "u⃗ = (2;1) et v⃗ = (4;2). Ces vecteurs sont-ils colinéaires ?", options: ["Oui, v⃗ = 2u⃗", "Non, directions différentes", "Oui, mais de sens opposés", "On ne peut pas savoir"], answer: "Oui, v⃗ = 2u⃗", explication: "(4;2) = 2×(2;1). Deux vecteurs sont colinéaires si l'un est un multiple scalaire de l'autre." },
      { question: "Condition de colinéarité de u⃗(a;b) et v⃗(c;d) :", options: ["ad − bc = 0", "ac + bd = 0", "a+c = b+d", "a/b = c/d"], answer: "ad − bc = 0", explication: "u⃗ et v⃗ colinéaires ⟺ déterminant = ad − bc = 0. C'est le test général (même si b ou d = 0)." },
      { question: "Trouver le vecteur u⃗ tel que : A(2;1), B(5;4), C(1;3), D = C + u⃗ avec u⃗ = AB⃗", options: ["D = (4;6)", "D = (3;3)", "D = (6;7)", "D = (−1;−1)"], answer: "D = (4;6)", explication: "AB⃗ = (3;3). D = C + AB⃗ = (1+3 ; 3+3) = (4;6)." },
      { question: "Que signifie u⃗ · v⃗ (produit scalaire) = 0 ?", options: ["Les vecteurs sont perpendiculaires", "Les vecteurs sont colinéaires", "Les vecteurs sont nuls", "Les vecteurs sont opposés"], answer: "Les vecteurs sont perpendiculaires", explication: "u⃗ · v⃗ = 0 ⟺ u⃗ ⊥ v⃗. Produit scalaire = ||u⃗|| × ||v⃗|| × cos(angle) = 0 si angle = 90°." },
      { question: "Produit scalaire de (3;4) et (4;−3) :", options: ["0 (perpendiculaires)", "25", "12", "−12"], answer: "0 (perpendiculaires)", explication: "(3;4)·(4;−3) = 3×4 + 4×(−3) = 12 − 12 = 0. Ces vecteurs sont perpendiculaires." },
      { question: "Si I est le milieu de [BC], exprimer AI⃗ en fonction de AB⃗ et AC⃗", options: ["AI⃗ = (AB⃗ + AC⃗)/2", "AI⃗ = AB⃗ + AC⃗", "AI⃗ = (AB⃗ − AC⃗)/2", "AI⃗ = AB⃗/2"], answer: "AI⃗ = (AB⃗ + AC⃗)/2", explication: "I milieu de [BC] : AI⃗ = AB⃗ + BI⃗ = AB⃗ + BC⃗/2 = AB⃗ + (AC⃗−AB⃗)/2 = (AB⃗+AC⃗)/2." }
    ],
    3: [
      { question: "Démontrer que A, B, C sont alignés en utilisant des vecteurs.", options: ["Montrer que AB⃗ et AC⃗ sont colinéaires (det = 0)", "Calculer les distances AB, BC, AC", "Vérifier qu'ils ont même ordonnée", "Calculer les pentes"], answer: "Montrer que AB⃗ et AC⃗ sont colinéaires (det = 0)", explication: "A, B, C alignés ⟺ AB⃗ et AC⃗ colinéaires ⟺ det(AB⃗, AC⃗) = 0." },
      { question: "Calculer ||u⃗ + v⃗||² avec u⃗ = (1;2) et v⃗ = (3;−1)", options: ["17", "√17", "5", "13"], answer: "17", explication: "u⃗+v⃗ = (4;1). ||u⃗+v⃗||² = 4²+1² = 16+1 = 17." },
      { question: "Identité vectorielle : ||u⃗ + v⃗||² = ?", options: ["||u⃗||² + 2u⃗·v⃗ + ||v⃗||²", "||u⃗||² + ||v⃗||²", "||u⃗||² − 2u⃗·v⃗ + ||v⃗||²", "(||u⃗|| + ||v⃗||)²"], answer: "||u⃗||² + 2u⃗·v⃗ + ||v⃗||²", explication: "||u⃗+v⃗||² = (u⃗+v⃗)·(u⃗+v⃗) = ||u⃗||² + 2u⃗·v⃗ + ||v⃗||². Analogue à (a+b)²." },
      { question: "Dans un triangle ABC rectangle en A, quel est AB⃗ · AC⃗ ?", options: ["0 (angle droit en A)", "||AB⃗|| × ||AC⃗||", "||AB⃗||² + ||AC⃗||²", "Impossible à calculer"], answer: "0 (angle droit en A)", explication: "Rectangle en A → AB⃗ ⊥ AC⃗ → AB⃗ · AC⃗ = 0." },
      { question: "G est le centroïde de triangle ABC. Quelle relation ?", options: ["GA⃗ + GB⃗ + GC⃗ = 0⃗", "GA⃗ = GB⃗ = GC⃗", "GA⃗ + GB⃗ = GC⃗", "GA⃗ = (AB⃗+AC⃗)/3"], answer: "GA⃗ + GB⃗ + GC⃗ = 0⃗", explication: "Le barycentre (centre de gravité) G d'un triangle est l'unique point tel que GA⃗+GB⃗+GC⃗ = 0⃗." },
      { question: "Angle entre u⃗(1;0) et v⃗(1;1). Calculer cos(θ).", options: ["√2/2", "1", "0", "1/2"], answer: "√2/2", explication: "u⃗·v⃗ = 1×1+0×1 = 1. ||u⃗|| = 1, ||v⃗|| = √2. cos θ = 1/(1×√2) = 1/√2 = √2/2. Angle = 45°." },
      { question: "Projection orthogonale de A sur une droite d : H est la projection de A sur d si :", options: ["AH⃗ est perpendiculaire à d", "AH⃗ est parallèle à d", "H est le milieu de [AC] avec C sur d", "AH⃗ passe par l'origine"], answer: "AH⃗ est perpendiculaire à d", explication: "H est la projection de A sur d si H ∈ d et AH⃗ ⊥ d (le pied de la perpendiculaire abaissée de A sur d)." },
      { question: "Avec u⃗(a;b) et v⃗(c;d), le déterminant det(u⃗,v⃗) = ad−bc représente :", options: ["L'aire du parallélogramme formé par u⃗ et v⃗", "Le produit scalaire", "La somme des normes", "L'angle entre u⃗ et v⃗"], answer: "L'aire du parallélogramme formé par u⃗ et v⃗", explication: "|det(u⃗,v⃗)| = |ad−bc| = aire du parallélogramme construit sur u⃗ et v⃗. Aussi utilisé pour tester la colinéarité." }
    ]
  },

  // ── Théorème de Thalès ──
  maths2Geo_Thales: {
    id: 'maths2Geo_Thales', nom: 'Théorème de Thalès', emoji: '∥', couleur: '#7c3aed',
    1: [
      { question: "Énoncé du théorème de Thalès :", options: ["Si (DE) ∥ (BC), alors AD/AB = AE/AC = DE/BC", "Si AD/AB = AE/AC, alors A, B, C sont alignés", "Dans un triangle, la droite médiane est parallèle à la base", "Les médianes d'un triangle se coupent en G"], answer: "Si (DE) ∥ (BC), alors AD/AB = AE/AC = DE/BC", explication: "Thalès : D sur AB, E sur AC, (DE)∥(BC) ⟹ AD/AB = AE/AC = DE/BC. Les rapports sont égaux." },
      { question: "Dans un triangle ABC, (DE) ∥ (BC) avec AD = 3, DB = 2, DE = 4. Calculer BC.", options: ["BC = 20/3", "BC = 3", "BC = 6", "BC = 8/3"], answer: "BC = 20/3", explication: "AB = AD+DB = 5. Thalès : DE/BC = AD/AB → 4/BC = 3/5 → BC = 20/3." },
      { question: "La réciproque du théorème de Thalès sert à :", options: ["Démontrer que deux droites sont parallèles", "Calculer une longueur", "Démontrer qu'un triangle est rectangle", "Calculer un angle"], answer: "Démontrer que deux droites sont parallèles", explication: "Réciproque : si AD/AB = AE/AC, alors (DE) ∥ (BC). On l'utilise pour prouver le parallélisme." },
      { question: "Peut-on appliquer Thalès si D est entre B et A (pas entre A et B) ?", options: ["Oui, c'est la configuration papillon (Thalès en croix)", "Non, Thalès ne s'applique que si D est entre A et B", "Non, il faut un triangle", "Oui, mais le résultat est négatif"], answer: "Oui, c'est la configuration papillon (Thalès en croix)", explication: "Thalès s'applique aussi quand les droites se croisent entre les points (sécantes confondues) : configuration 'papillon'. Les rapports restent égaux mais les points sont de part et d'autre." },
      { question: "AD = 6, AB = 10, AE = 9. (DE)∥(BC) ? Calculer AC.", options: ["AC = 15", "AC = 10", "AC = 54", "AC = 6"], answer: "AC = 15", explication: "AD/AB = AE/AC → 6/10 = 9/AC → AC = 9×10/6 = 15." },
      { question: "AD = 4, DB = 6. Quel est le rapport AD/AB ?", options: ["2/5", "4/6", "2/3", "4/10"], answer: "2/5", explication: "AB = AD + DB = 4 + 6 = 10. AD/AB = 4/10 = 2/5." },
      { question: "Dans une figure à deux triangles semblables, les côtés sont :", options: ["Proportionnels", "Égaux", "Parallèles", "Perpendiculaires"], answer: "Proportionnels", explication: "Triangles semblables = même forme, tailles différentes. Les côtés correspondants sont dans le même rapport (coefficient de similarité)." },
      { question: "Thalès s'applique dans une figure avec :", options: ["Un point et deux sécantes avec une droite parallèle", "Un triangle seul", "Un cercle", "Deux triangles isocèles"], answer: "Un point et deux sécantes avec une droite parallèle", explication: "Configuration de Thalès : un point A, deux droites issues de A, une droite coupant ces deux droites parallèlement à une autre transversale." }
    ],
    2: [
      { question: "Démontrer que (DE) ∥ (BC) si AD/AB = AE/AC = 3/5 avec AD = 3, DB = 2, AE = 6, EC = 4.", options: ["AD/AB = 3/5 = AE/AC, donc (DE)∥(BC) par réciproque de Thalès", "On mesure les angles", "On calcule DE et BC", "On vérifie que D est entre A et B"], answer: "AD/AB = 3/5 = AE/AC, donc (DE)∥(BC) par réciproque de Thalès", explication: "AB = 5, AC = 10. AD/AB = 3/5. AE/AC = 6/10 = 3/5. Égaux → par réciproque de Thalès : (DE) ∥ (BC)." },
      { question: "Agrandissement de rapport 3 : si AB = 4, la nouvelle longueur A'B' est :", options: ["12", "7", "4/3", "1,33"], answer: "12", explication: "Rapport k = 3 : A'B' = k × AB = 3 × 4 = 12. Toutes les longueurs sont multipliées par k." },
      { question: "Deux triangles ont les mêmes angles. Sont-ils semblables ?", options: ["Oui (critère AAA)", "Non, il faut aussi les longueurs", "Seulement si un côté est égal", "Non, AAA ne suffit pas"], answer: "Oui (critère AAA)", explication: "Critère de similitude : si deux triangles ont 2 (donc 3) angles égaux, ils sont semblables. Leurs côtés sont proportionnels." },
      { question: "Dans une figure de Thalès, DE = 5, BC = 15, AD = 3. Calculer AB.", options: ["AB = 9", "AB = 45", "AB = 1", "AB = 25"], answer: "AB = 9", explication: "DE/BC = AD/AB → 5/15 = 3/AB → AB = 3×15/5 = 9." },
      { question: "Coefficient de similitude entre deux triangles : à quoi sert-il ?", options: ["Comparer les longueurs homologues (côtés correspondants)", "Calculer les angles", "Trouver le périmètre", "Calculer l'aire uniquement"], answer: "Comparer les longueurs homologues (côtés correspondants)", explication: "k = longueur A'B'/AB = longueur A'C'/AC, etc. Toutes les longueurs sont multipliées par k." },
      { question: "Rapport d'agrandissement k = 2. L'aire est multipliée par :", options: ["4 (k²)", "2 (k)", "8 (k³)", "1/2"], answer: "4 (k²)", explication: "Si les longueurs sont multipliées par k, les aires sont multipliées par k². Volume par k³." },
      { question: "ABC et ADE sont-ils semblables (D sur AB, E sur AC, (DE)∥(BC)) ?", options: ["Oui, par le théorème de Thalès", "Non, ils ont des bases différentes", "Seulement si ABC est isocèle", "Non, Thalès ne donne pas la similitude"], answer: "Oui, par le théorème de Thalès", explication: "Angle A commun, (DE)∥(BC) donc ADE = ABC et AED = ACB (angles correspondants). Donc triangles ADE et ABC semblables (critère AA)." },
      { question: "Une carte à l'échelle 1/50 000 : 2 cm sur la carte = ... dans la réalité ?", options: ["1 km", "100 m", "50 km", "2 km"], answer: "1 km", explication: "1/50 000 : 1 cm carte = 50 000 cm réels = 500 m. 2 cm = 1 000 m = 1 km." }
    ],
    3: [
      { question: "Démontrer que deux droites sont parallèles en utilisant la réciproque de Thalès, avec A(0;0), B(6;0), C(0;4), D(3;0), E(0;2).", options: ["AD/AB = AE/AC = 1/2, donc (DE)∥(BC)", "On calcule les pentes de DE et BC", "On utilise Pythagore", "On mesure les angles"], answer: "AD/AB = AE/AC = 1/2, donc (DE)∥(BC)", explication: "AD = 3, AB = 6, AD/AB = 1/2. AE = 2, AC = 4, AE/AC = 1/2. Égaux → réciproque de Thalès → (DE) ∥ (BC)." },
      { question: "Ombre d'un arbre : poteau de 2 m d'ombre de 3 m. Arbre d'ombre de 9 m. Hauteur de l'arbre ?", options: ["6 m", "4,5 m", "13,5 m", "3 m"], answer: "6 m", explication: "Thalès (même source lumineuse) : hauteur/ombre = 2/3. Arbre : h/9 = 2/3 → h = 6 m." },
      { question: "Complète : dans la configuration papillon (O sur [AC] et [BD]), OA/OC = OB/OD = ...", options: ["AB/CD", "AB+CD", "AB−CD", "CD/AB"], answer: "AB/CD", explication: "Configuration papillon : O intersection de [AC] et [BD], (AB)∥(CD). Alors OA/OC = OB/OD = AB/CD." },
      { question: "Si k = AC/A'C' = 3/4, les périmètres des triangles vérifient :", options: ["P/P' = 3/4", "P/P' = 9/16", "P/P' = 4/3", "P = P'"], answer: "P/P' = 3/4", explication: "Périmètre proportionnel aux longueurs : même rapport k. P/P' = k = 3/4." },
      { question: "Hauteur d'un bâtiment inaccessible : depuis A (10 m du pied), angle de 60°. Hauteur ?", options: ["10√3 ≈ 17,3 m", "10 m", "5 m", "10/√3 ≈ 5,8 m"], answer: "10√3 ≈ 17,3 m", explication: "tan(60°) = h/10 → h = 10 × tan(60°) = 10√3 ≈ 17,3 m." },
      { question: "Thalès implique que dans une carte topographique à l'échelle 1:25000, 4 cm représentent :", options: ["1 km", "100 m", "25 m", "400 m"], answer: "1 km", explication: "1 cm = 25 000 cm = 250 m. 4 cm = 1 000 m = 1 km." },
      { question: "Démontrer que M est le milieu de [AC] sachant AM/MC = 1.", options: ["Si AM/MC = 1, AM = MC donc M est le milieu", "M a les mêmes coordonnées que A et C", "On utilise Pythagore", "On mesure avec une règle"], answer: "Si AM/MC = 1, AM = MC donc M est le milieu", explication: "AM/MC = 1 ⟹ AM = MC. Un point équidistant des deux extrémités d'un segment est son milieu." },
      { question: "Si AD/DB = 2/3 et AE/EC = 2/3 dans triangle ABC, que peut-on conclure ?", options: ["(DE) ∥ (BC) par la réciproque de Thalès", "Le triangle est isocèle", "AB = AC", "DE = BC"], answer: "(DE) ∥ (BC) par la réciproque de Thalès", explication: "AD/DB = AE/EC = 2/3 ⟹ AD/AB = 2/5 = AE/AC. Rapports égaux → réciproque de Thalès → (DE) ∥ (BC)." }
    ]
  },

  // ── Trigonométrie ──
  maths2Geo_Trigo: {
    id: 'maths2Geo_Trigo', nom: 'Trigonométrie', emoji: '📏', couleur: '#7c3aed',
    1: [
      { question: "Dans un triangle rectangle, sin(α) = ?", options: ["côté opposé / hypoténuse", "côté adjacent / hypoténuse", "côté opposé / côté adjacent", "hypoténuse / côté opposé"], answer: "côté opposé / hypoténuse", explication: "SOH-CAH-TOA : Sin = Opposé/Hypoténuse, Cos = Adjacent/Hypoténuse, Tan = Opposé/Adjacent." },
      { question: "Dans un triangle rectangle en C, AC = 3, BC = 4, AB = 5. sin(B) = ?", options: ["3/5", "4/5", "3/4", "4/3"], answer: "3/5", explication: "sin(B) = côté opposé à B / hypoténuse = AC/AB = 3/5." },
      { question: "cos(60°) = ?", options: ["1/2", "√3/2", "√2/2", "1"], answer: "1/2", explication: "Valeurs à retenir : cos(30°) = √3/2, cos(45°) = √2/2, cos(60°) = 1/2, cos(90°) = 0." },
      { question: "sin(30°) = ?", options: ["1/2", "√3/2", "√2/2", "1"], answer: "1/2", explication: "sin(30°) = 1/2. On retient : sin(30°) = cos(60°) = 1/2." },
      { question: "tan(45°) = ?", options: ["1", "0", "√3", "√2/2"], answer: "1", explication: "tan(45°) = sin(45°)/cos(45°) = (√2/2)/(√2/2) = 1." },
      { question: "Dans un triangle rectangle, l'hypoténuse est :", options: ["Le côté opposé à l'angle droit", "Le côté adjacent à l'angle droit", "Le côté le plus court", "N'importe quel côté"], answer: "Le côté opposé à l'angle droit", explication: "L'hypoténuse est toujours le côté le plus long, situé en face de l'angle droit (90°)." },
      { question: "Triangle rectangle en A, angle B = 60°, AB = 5. Calculer BC (hypoténuse).", options: ["BC = 10", "BC = 5√3", "BC = 5/2", "BC = 5/√3"], answer: "BC = 10", explication: "cos(60°) = AB/BC → BC = AB/cos(60°) = 5/(1/2) = 10." },

      { question: "Triangle rectangle en A, angle B = 45°, AB = 6. Calculer AC.", options: ["AC = 6", "AC = 6√2", "AC = 3", "AC = 12"], answer: "AC = 6", explication: "tan(45°) = AC/AB → AC = AB × tan(45°) = 6 × 1 = 6. (Triangle isocèle rectangle.)" }
    ],
    2: [
      { question: "Dans un triangle rectangle, sin²(α) + cos²(α) = ?", options: ["1", "0", "sin(α)", "2"], answer: "1", explication: "Identité trigonométrique fondamentale : sin²(α) + cos²(α) = 1. Découle du théorème de Pythagore." },
      { question: "Calculer sin(α) si cos(α) = 3/5 (angle aigu)", options: ["4/5", "5/3", "3/4", "1/5"], answer: "4/5", explication: "sin²α + cos²α = 1 → sin²α = 1 − 9/25 = 16/25 → sinα = 4/5 (angle aigu → positif)." },
      { question: "Triangle ABC rectangle en B : AB = 8, BC = 6. tan(A) = ?", options: ["6/8 = 3/4", "8/6 = 4/3", "6/10 = 3/5", "8/10 = 4/5"], answer: "6/8 = 3/4", explication: "tan(A) = côté opposé à A / côté adjacent à A = BC/AB = 6/8 = 3/4." },
      { question: "Calculer l'angle α si sin(α) = 0,5 (α aigu)", options: ["30°", "45°", "60°", "90°"], answer: "30°", explication: "sin(30°) = 0,5. On utilise la calculatrice : arcsin(0,5) = 30°." },
      { question: "Un toit forme un angle de 30° avec l'horizontale. Longueur de pente = 4 m. Hauteur du toit ?", options: ["2 m", "4 m", "2√3 m", "4√3 m"], answer: "2 m", explication: "sin(30°) = hauteur/pente → hauteur = 4 × sin(30°) = 4 × 0,5 = 2 m." },
      { question: "sin(90°) = ?", options: ["1", "0", "√2/2", "Indéfini"], answer: "1", explication: "sin(90°) = 1. Le côté opposé à 90° est l'hypoténuse, rapport = hyp/hyp = 1." },
      { question: "Calculer AC dans un triangle rectangle en B, avec AB = 5, angle A = 53°", options: ["AC = 5/cos(53°) ≈ 8,3", "AC = 5 × cos(53°) ≈ 3", "AC = 5 × sin(53°) ≈ 4", "AC = 5 × tan(53°)"], answer: "AC = 5/cos(53°) ≈ 8,3", explication: "cos(A) = AB/AC (adjacent/hypoténuse) → AC = AB/cos(A) = 5/cos(53°) ≈ 5/0,6 ≈ 8,3." },
      { question: "tan(α) = sin(α)/cos(α). Vrai ou faux ?", options: ["Vrai", "Faux"], answer: "Vrai", explication: "Définition de la tangente : tan(α) = sin(α)/cos(α). Toujours vraie pour cos(α) ≠ 0." }
    ],
    3: [
      { question: "Formule des sinus généralisée dans un triangle quelconque :", options: ["a/sin(A) = b/sin(B) = c/sin(C) = 2R", "a² = b² + c² − 2bc.cos(A)", "a/b = sin(A)/sin(B)", "sin(A+B) = sin(A)cos(B) + cos(A)sin(B)"], answer: "a/sin(A) = b/sin(B) = c/sin(C) = 2R", explication: "Loi des sinus : dans tout triangle, a/sin(A) = 2R où R est le rayon du cercle circonscrit." },
      { question: "Formule d'Al-Kashi (loi des cosinus) : a² = ?", options: ["b² + c² − 2bc·cos(A)", "b² + c² + 2bc·cos(A)", "b² − c² + 2bc·cos(A)", "(b+c)² − 4bc"], answer: "b² + c² − 2bc·cos(A)", explication: "Loi des cosinus : a² = b² + c² − 2bc·cos(A). Généralise Pythagore (si A = 90°, cos(A) = 0 → a² = b²+c²)." },
      { question: "sin(45°) + cos(45°) = ?", options: ["√2", "1", "√2/2", "2"], answer: "√2", explication: "sin(45°) = cos(45°) = √2/2. Somme = √2/2 + √2/2 = 2×√2/2 = √2." },
      { question: "Calculer l'angle B d'un triangle rectangle en C : AC = 3, BC = 4.", options: ["B = arctan(3/4) ≈ 36,9°", "B = arcsin(3/5) ≈ 37°", "B = arccos(4/5) ≈ 37°", "Toutes ces réponses sont équivalentes"], answer: "Toutes ces réponses sont équivalentes", explication: "AB = 5 (Pythagore). sin(B) = AC/AB = 3/5, cos(B) = BC/AB = 4/5, tan(B) = AC/BC = 3/4. arcsin(3/5) ≈ arccos(4/5) ≈ arctan(3/4) ≈ 36,87°." },
      { question: "Un bateau est à 200 m d'une falaise. L'angle de dépression du sommet est 35°. Hauteur de la falaise ?", options: ["200 × tan(35°) ≈ 140 m", "200 / tan(35°) ≈ 286 m", "200 × sin(35°) ≈ 115 m", "200 × cos(35°) ≈ 164 m"], answer: "200 × tan(35°) ≈ 140 m", explication: "tan(angle) = hauteur/distance horizontale. h = 200 × tan(35°) ≈ 200 × 0,7 = 140 m." },
      { question: "cos(30°) + cos(150°) = ?", options: ["0", "√3", "2cos(30°)", "1"], answer: "0", explication: "cos(150°) = cos(180°−30°) = −cos(30°) = −√3/2. Somme = √3/2 − √3/2 = 0." },
      { question: "sin(2α) = ?", options: ["2·sin(α)·cos(α)", "sin(α)²", "2·sin(α)", "cos(2α)"], answer: "2·sin(α)·cos(α)", explication: "Formule de duplication : sin(2α) = 2·sin(α)·cos(α). Exemple : sin(60°) = 2·sin(30°)·cos(30°) = 2·(1/2)·(√3/2) = √3/2 ✓." },
      { question: "Triangle quelconque : a = 7, b = 5, C = 60°. Calculer c².", options: ["c² = 74 − 35 = 39", "c² = 49 + 25 = 74", "c² = 7² − 5² = 24", "c² = 35"], answer: "c² = 74 − 35 = 39", explication: "Al-Kashi : c² = a² + b² − 2ab·cos(C) = 49 + 25 − 2×7×5×cos(60°) = 74 − 70×(1/2) = 74 − 35 = 39." }
    ]
  },

  // ── Statistiques descriptives ──
  maths2Stats_Statistiques: {
    id: 'maths2Stats_Statistiques', nom: 'Statistiques descriptives', emoji: '📊', couleur: '#7c3aed',
    1: [
      { question: "Qu'est-ce que la moyenne d'une série statistique ?", options: ["La somme des valeurs divisée par le nombre de valeurs", "La valeur centrale quand on trie les données", "La valeur la plus fréquente", "L'écart entre le max et le min"], answer: "La somme des valeurs divisée par le nombre de valeurs", explication: "Moyenne x̄ = (x₁ + x₂ + ... + xₙ)/n = Σxᵢ/n." },
      { question: "Calculer la moyenne de : 4, 7, 9, 2, 8", options: ["6", "7", "5", "30"], answer: "6", explication: "Somme = 4+7+9+2+8 = 30. n = 5. Moyenne = 30/5 = 6." },
      { question: "La médiane d'une série est :", options: ["La valeur centrale quand les données sont triées", "La valeur la plus fréquente", "La moyenne", "La plus grande valeur"], answer: "La valeur centrale quand les données sont triées", explication: "On trie les données par ordre croissant. Si n est impair, la médiane est la valeur du milieu. Si n est pair, c'est la moyenne des deux valeurs du milieu." },
      { question: "Médiane de : 3, 7, 2, 9, 5 (trier d'abord)", options: ["5", "7", "3", "26"], answer: "5", explication: "Triés : 2, 3, 5, 7, 9. n = 5 (impair). Médiane = valeur en position (5+1)/2 = 3ème = 5." },
      { question: "Le mode d'une série est :", options: ["La valeur qui apparaît le plus souvent", "La valeur centrale", "La moyenne", "La somme"], answer: "La valeur qui apparaît le plus souvent", explication: "Mode = valeur la plus fréquente. Exemple : dans 2, 3, 3, 5, 7, 3, le mode est 3 (apparaît 3 fois)." },
      { question: "Étendue d'une série = ?", options: ["Max − Min", "Moyenne − Médiane", "Somme / n", "Max + Min"], answer: "Max − Min", explication: "Étendue = valeur maximale − valeur minimale. Mesure la dispersion totale de la série." },
      { question: "Étendue de : 12, 5, 18, 3, 9", options: ["15", "18", "3", "47"], answer: "15", explication: "Max = 18, Min = 3. Étendue = 18 − 3 = 15." },
      { question: "Médiane de : 10, 20, 30, 40 (série paire)", options: ["25", "20", "30", "100"], answer: "25", explication: "Triés : 10, 20, 30, 40. n = 4 (pair). Médiane = (20 + 30)/2 = 25." }
    ],
    2: [
      { question: "Calculer la moyenne pondérée : note 12 (coeff 2) et note 16 (coeff 3)", options: ["14,4", "14", "13", "15"], answer: "14,4", explication: "Moyenne pondérée = (12×2 + 16×3)/(2+3) = (24+48)/5 = 72/5 = 14,4." },
      { question: "Q1 (premier quartile) d'une série représente :", options: ["La valeur en dessous de laquelle se trouvent 25% des données", "La médiane", "25% de la somme", "La plus petite valeur"], answer: "La valeur en dessous de laquelle se trouvent 25% des données", explication: "Q1 sépare le quart inférieur des données. Q2 = médiane (50%). Q3 = 75% des données." },
      { question: "Écart interquartile (EIQ) = ?", options: ["Q3 − Q1", "Q2 − Q1", "Max − Min", "Q3 − Q2"], answer: "Q3 − Q1", explication: "EIQ = Q3 − Q1. Mesure la dispersion des 50% centraux, plus robuste que l'étendue car insensible aux valeurs extrêmes." },
      { question: "Que représente un diagramme en boîte (boxplot) ?", options: ["Min, Q1, Médiane, Q3, Max", "Uniquement la moyenne et l'écart-type", "La fréquence de chaque valeur", "La distribution des angles"], answer: "Min, Q1, Médiane, Q3, Max", explication: "Boxplot : la boîte va de Q1 à Q3 (EIQ), la ligne centrale = médiane, les moustaches atteignent le Min et Max (ou 1,5×EIQ)." },
      { question: "Variance d'une série : définition", options: ["Moyenne des carrés des écarts à la moyenne", "Carré de la moyenne", "Moyenne des valeurs au carré", "Écart-type au carré... non, c'est l'inverse"], answer: "Moyenne des carrés des écarts à la moyenne", explication: "Variance σ² = (1/n) × Σ(xᵢ − x̄)². L'écart-type σ = √(variance)." },
      { question: "Calculer la variance de : 2, 4, 6. Moyenne = 4.", options: ["8/3 ≈ 2,67", "4", "2", "16/3"], answer: "8/3 ≈ 2,67", explication: "σ² = [(2−4)² + (4−4)² + (6−4)²]/3 = [4 + 0 + 4]/3 = 8/3 ≈ 2,67." },
      { question: "Dans un histogramme, la hauteur d'un rectangle représente :", options: ["La fréquence (ou densité) de la classe", "La valeur maximale de la classe", "L'effectif cumulé", "L'amplitude de la classe"], answer: "La fréquence (ou densité) de la classe", explication: "Dans un histogramme à classes égales, hauteur = effectif (ou fréquence). Si les classes sont inégales, hauteur = densité = fréquence/amplitude." },
      { question: "Série : 5, 10, 10, 15, 20. Calculer la moyenne et l'écart-type.", options: ["Moyenne = 12, σ = √(26) ≈ 5,1", "Moyenne = 12, σ = 5", "Moyenne = 10, σ = 0", "Moyenne = 15, σ = 3"], answer: "Moyenne = 12, σ = √(26) ≈ 5,1", explication: "x̄ = 60/5 = 12. σ² = [(5−12)² + (10−12)² + (10−12)² + (15−12)² + (20−12)²]/5 = [49+4+4+9+64]/5 = 130/5 = 26. σ = √26 ≈ 5,1." }
    ],
    3: [
      { question: "Coefficient de variation CV = σ/x̄. À quoi sert-il ?", options: ["Comparer la dispersion de séries avec des moyennes différentes", "Remplacer l'écart-type", "Calculer la médiane", "Mesurer l'asymétrie"], answer: "Comparer la dispersion de séries avec des moyennes différentes", explication: "CV = σ/x̄ est sans unité. Permet de comparer des dispersions relatives. Ex : σ = 5, x̄ = 100 → CV = 5% (faible dispersion relative)." },
      { question: "Interprétation de l'écart-type σ = 0 :", options: ["Toutes les valeurs sont égales à la moyenne", "La série est vide", "La moyenne est nulle", "Les données sont maximalement dispersées"], answer: "Toutes les valeurs sont égales à la moyenne", explication: "σ = 0 ⟺ toutes les données xᵢ = x̄. La série est constante." },
      { question: "Pour une distribution normale (courbe de Gauss) :", options: ["68% des données sont dans [x̄ − σ ; x̄ + σ]", "50% dans [x̄ − σ ; x̄ + σ]", "95% dans [x̄ − σ ; x̄ + σ]", "100% dans [x̄ − σ ; x̄ + σ]"], answer: "68% des données sont dans [x̄ − σ ; x̄ + σ]", explication: "Règle empirique : 68% dans ±1σ, 95% dans ±2σ, 99,7% dans ±3σ. Très utile en statistiques." },
      { question: "Tableau de données groupées : classe [10;20[ d'effectif 5, [20;30[ d'effectif 3. Fréquence de [10;20[ ?", options: ["5/8 = 62,5%", "5/10 = 50%", "5/20 = 25%", "3/8 = 37,5%"], answer: "5/8 = 62,5%", explication: "Effectif total = 5 + 3 = 8. Fréquence = 5/8 = 0,625 = 62,5%." },
      { question: "Courbe des effectifs cumulés croissants : à quoi sert-elle ?", options: ["Lire graphiquement les quartiles (Q1, médiane, Q3)", "Calculer la moyenne", "Tracer l'histogramme", "Identifier le mode"], answer: "Lire graphiquement les quartiles (Q1, médiane, Q3)", explication: "La courbe cumulative croissante permet de lire Q1 (25%), Q2 = médiane (50%), Q3 (75%) par lecture graphique." },
      { question: "Un élève a : 10, 12, 14. Un autre : 4, 12, 20. Comparer les moyennes et écarts-types.", options: ["Même moyenne (12), écarts-types différents (σ₁ < σ₂)", "Moyennes différentes, mêmes écarts-types", "Mêmes tout", "Impossible à comparer"], answer: "Même moyenne (12), écarts-types différents (σ₁ < σ₂)", explication: "x̄₁ = x̄₂ = 12. σ₁² = [(−2)²+0²+2²]/3 = 8/3 ≈ 2,67. σ₂² = [(−8)²+0²+8²]/3 = 128/3 ≈ 42,7. σ₂ >> σ₁." },
      { question: "Données : 2, 2, 3, 4, 4, 4, 5, 6. Quelle est la médiane ?", options: ["4", "3,5", "3", "5"], answer: "4", explication: "n = 8 (pair). Médiane = (4ème + 5ème)/2 = (4 + 4)/2 = 4." },
      { question: "Si on ajoute 5 à toutes les valeurs d'une série, que devient l'écart-type ?", options: ["Il reste le même", "Il augmente de 5", "Il est multiplié par 5", "Il est divisé par 5"], answer: "Il reste le même", explication: "Ajouter une constante décale la distribution (change la moyenne) mais ne change pas la dispersion. σ reste identique." }
    ]
  },

  // ── Probabilités ──
  maths2Stats_Proba: {
    id: 'maths2Stats_Proba', nom: 'Probabilités', emoji: '🎲', couleur: '#7c3aed',
    1: [
      { question: "Qu'est-ce qu'un événement certain ?", options: ["Un événement qui se réalise toujours, de probabilité 1", "Un événement impossible", "Un événement de probabilité 0,5", "Un événement rare"], answer: "Un événement qui se réalise toujours, de probabilité 1", explication: "P(événement certain) = 1. P(impossible) = 0. Toute probabilité est dans [0;1]." },
      { question: "On lance un dé à 6 faces. Probabilité d'obtenir 4 ?", options: ["1/6", "1/4", "4/6", "2/3"], answer: "1/6", explication: "6 issues équiprobables. P(4) = 1/6 ≈ 0,167." },
      { question: "P(A) + P(Ā) = ?", options: ["1", "0", "2", "P(A)²"], answer: "1", explication: "A et son complémentaire Ā sont incompatibles et exhaustifs. P(A) + P(Ā) = 1 → P(Ā) = 1 − P(A)." },
      { question: "Probabilité d'obtenir un nombre pair sur un dé (1 à 6) ?", options: ["1/2", "1/3", "2/3", "1/6"], answer: "1/2", explication: "Pairs : {2, 4, 6} → 3 issues sur 6. P(pair) = 3/6 = 1/2." },
      { question: "Un sac contient 3 billes rouges et 7 billes bleues. P(rouge) = ?", options: ["3/10", "3/7", "7/10", "1/3"], answer: "3/10", explication: "Total = 10 billes. P(rouge) = 3/10 = 0,3." },
      { question: "P(A ∪ B) pour A et B incompatibles (impossibles simultanément) = ?", options: ["P(A) + P(B)", "P(A) × P(B)", "P(A) − P(B)", "1"], answer: "P(A) + P(B)", explication: "Si A et B incompatibles (A ∩ B = ∅) : P(A ∪ B) = P(A) + P(B)." },
      { question: "Lancer une pièce équilibrée. P(pile) = ?", options: ["1/2", "1", "0", "1/4"], answer: "1/2", explication: "2 issues équiprobables (pile/face). P(pile) = 1/2 = 0,5." },
      { question: "Un événement de probabilité 0 est :", options: ["Impossible", "Certain", "Rare", "Équiprobable"], answer: "Impossible", explication: "P = 0 → impossible. P = 1 → certain. 0 < P < 1 → ni certain ni impossible." }
    ],
    2: [
      { question: "P(A ∪ B) formule générale = ?", options: ["P(A) + P(B) − P(A ∩ B)", "P(A) + P(B)", "P(A) × P(B)", "P(A) / P(B)"], answer: "P(A) + P(B) − P(A ∩ B)", explication: "Formule générale : P(A ∪ B) = P(A) + P(B) − P(A ∩ B). On soustrait P(A ∩ B) pour ne pas compter deux fois les cas communs." },
      { question: "A et B indépendants. P(A ∩ B) = ?", options: ["P(A) × P(B)", "P(A) + P(B)", "P(A|B)", "P(A)/P(B)"], answer: "P(A) × P(B)", explication: "Événements indépendants : P(A ∩ B) = P(A) × P(B). Ex : deux lancers de dé indépendants." },
      { question: "P(A) = 0,4, P(B) = 0,3, A et B incompatibles. P(A ∪ B) = ?", options: ["0,7", "0,12", "0,1", "1"], answer: "0,7", explication: "Incompatibles → P(A ∩ B) = 0. P(A ∪ B) = 0,4 + 0,3 = 0,7." },
      { question: "Probabilité conditionnelle P(A|B) = ?", options: ["P(A ∩ B) / P(B)", "P(A) / P(B)", "P(B) / P(A)", "P(A ∩ B)"], answer: "P(A ∩ B) / P(B)", explication: "P(A|B) = P(A ∩ B) / P(B) : probabilité de A sachant que B est réalisé." },
      { question: "On tire 2 cartes sans remise dans un jeu de 52. P(2 as) = ?", options: ["(4/52) × (3/51) = 1/221", "(4/52)² = 1/169", "4/52 × 4/52", "2/52"], answer: "(4/52) × (3/51) = 1/221", explication: "Sans remise : P(1er as) = 4/52. Sachant 1er as tiré, P(2ème as) = 3/51. P = 4/52 × 3/51 = 12/2652 = 1/221." },
      { question: "Variable aléatoire X. E(X) désigne :", options: ["L'espérance (moyenne théorique)", "L'écart-type", "La variance", "La médiane"], answer: "L'espérance (moyenne théorique)", explication: "E(X) = Σ xᵢ × P(X = xᵢ). C'est la valeur moyenne attendue sur un grand nombre d'expériences." },
      { question: "Dé : X = gain en €. X = 10€ si 6, X = 0 sinon. E(X) = ?", options: ["10/6 ≈ 1,67 €", "10 €", "0 €", "5 €"], answer: "10/6 ≈ 1,67 €", explication: "E(X) = 10 × (1/6) + 0 × (5/6) = 10/6 ≈ 1,67 €." },
      { question: "Tableau de probabilités : P(X = 0) = 0,3, P(X = 1) = 0,5, P(X = 2) = 0,2. E(X) = ?", options: ["0,9", "1", "0,5", "1,5"], answer: "0,9", explication: "E(X) = 0×0,3 + 1×0,5 + 2×0,2 = 0 + 0,5 + 0,4 = 0,9." }
    ],
    3: [
      { question: "Formule des probabilités totales. P(B) = ?", options: ["P(B|A)×P(A) + P(B|Ā)×P(Ā)", "P(A)×P(B)", "P(B|A)/P(A)", "P(A ∩ B) + P(B)"], answer: "P(B|A)×P(A) + P(B|Ā)×P(Ā)", explication: "Si {A, Ā} partitionne l'univers : P(B) = P(B|A)P(A) + P(B|Ā)P(Ā). Se généralise à n partitions." },
      { question: "Formule de Bayes : P(A|B) = ?", options: ["P(B|A)×P(A) / P(B)", "P(A)×P(B) / P(A|B)", "P(B|A) / P(A)", "P(A ∩ B) × P(B)"], answer: "P(B|A)×P(A) / P(B)", explication: "Bayes : P(A|B) = P(B|A)×P(A) / P(B). Permet d'inverser une probabilité conditionnelle." },
      { question: "Loi binomiale B(n, p) : P(X = k) = ?", options: ["C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ", "n! × pᵏ", "pᵏ / k!", "C(n,k) × pⁿ"], answer: "C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ", explication: "Binomiale : n épreuves indépendantes, probabilité p de succès. P(X=k) = C(n,k)×pᵏ×(1−p)ⁿ⁻ᵏ avec C(n,k) = n!/(k!(n−k)!)." },
      { question: "X suit B(10, 0,5). E(X) = ?", options: ["5", "0,5", "10", "2,5"], answer: "5", explication: "Pour X ~ B(n,p) : E(X) = n×p = 10×0,5 = 5. Variance = n×p×(1−p) = 10×0,5×0,5 = 2,5." },
      { question: "Épreuve de Bernoulli : définition", options: ["Épreuve à 2 issues (succès/échec) avec probabilité p de succès", "Épreuve avec 3 issues", "Épreuve répétée n fois", "Tirage sans remise"], answer: "Épreuve à 2 issues (succès/échec) avec probabilité p de succès", explication: "Bernoulli : 2 issues. P(succès) = p, P(échec) = 1−p. La loi binomiale modélise la répétition de n épreuves de Bernoulli indépendantes." },
      { question: "P(A) = 0,6, P(B|A) = 0,7. Calculer P(A ∩ B).", options: ["0,42", "0,7", "0,6", "1,3"], answer: "0,42", explication: "P(A ∩ B) = P(B|A) × P(A) = 0,7 × 0,6 = 0,42." },
      { question: "Dans un arbre de probabilités, à quoi vérifie-t-on la cohérence ?", options: ["La somme des probabilités de chaque nœud = 1", "Le produit des branches = 1", "Chaque branche = 0,5", "Le nombre de branches = 2n"], answer: "La somme des probabilités de chaque nœud = 1", explication: "À chaque nœud, les branches représentent des issues exhaustives → leur somme de probabilités = 1." },
      { question: "Jeu équitable : définition", options: ["E(gain) = 0 (ni avantage ni désavantage)", "P(gagner) = P(perdre) = 0,5", "Gain = mise", "Jeu sans hasard"], answer: "E(gain) = 0 (ni avantage ni désavantage)", explication: "Un jeu est équitable si l'espérance du gain est nulle : E(X) = 0. Si E(X) < 0, le jeu favorise l'organisateur." }
    ]
  }
};
