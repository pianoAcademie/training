// ── FICHES DE RÉVISION ──
// Chaque thème → tableau de points à savoir
// Chaque point → { titre, corps (HTML), astuce? }
const fichesRevision = {

  // ── MATHS COLLÈGE ──
  fractions: [
    {
      titre: "Lire une fraction",
      corps: `<p>Une fraction <strong>a/b</strong> se lit « a sur b ».</p>
<ul><li><strong>Numérateur</strong> (a) : la partie du tout qu'on prend.</li>
<li><strong>Dénominateur</strong> (b) : le nombre total de parts égales.</li></ul>`,
      exemple: "3/4 → on prend 3 parts sur 4 au total.",
      astuce: "Le dénominateur est en bas (il tient la maison debout !)"
    },
    {
      titre: "Comparer des fractions",
      corps: `<p>Même dénominateur → le plus grand numérateur est le plus grand.</p>
<p>Dénominateurs différents → réduis au même dénominateur d'abord.</p>`,
      exemple: "3/4 > 2/4 car 3 > 2. Pour 1/2 vs 1/3 : 3/6 > 2/6 donc 1/2 > 1/3.",
      astuce: "Multiplie en croix pour comparer : a/b vs c/d → compare a×d et b×c."
    },
    {
      titre: "Simplifier une fraction",
      corps: `<p>Divise numérateur et dénominateur par leur PGCD (plus grand commun diviseur).</p>`,
      exemple: "6/8 : PGCD(6,8) = 2 → 6÷2 / 8÷2 = <strong>3/4</strong>.",
      astuce: "Continue à diviser par 2, 3, 5… tant que c'est possible."
    },
    {
      titre: "Additionner / Soustraire (même dénominateur)",
      corps: `<p>Même dénominateur : additionne ou soustrait uniquement les numérateurs.</p>`,
      exemple: "3/7 + 2/7 = <strong>5/7</strong>. &nbsp; 5/9 − 2/9 = <strong>3/9 = 1/3</strong>.",
      astuce: "Le dénominateur ne change pas !"
    },
    {
      titre: "Fraction et nombre décimal",
      corps: `<p>Divise le numérateur par le dénominateur pour obtenir le décimal.</p>`,
      exemple: "3/4 = 3 ÷ 4 = <strong>0,75</strong>. &nbsp; 1/5 = <strong>0,2</strong>.",
      astuce: "1/2 = 0,5 &nbsp;|&nbsp; 1/4 = 0,25 &nbsp;|&nbsp; 3/4 = 0,75 → à mémoriser !"
    }
  ],

  pourcentages: [
    {
      titre: "Calculer un pourcentage d'un nombre",
      corps: `<p>p % de N = (p × N) ÷ 100</p>`,
      exemple: "20 % de 150 = (20 × 150) ÷ 100 = <strong>30</strong>.",
      astuce: "Pour 10 % : divise par 10. Pour 50 % : divise par 2."
    },
    {
      titre: "Trouver le pourcentage",
      corps: `<p>Quel % représente A par rapport à B ? → (A ÷ B) × 100</p>`,
      exemple: "30 sur 120 → (30 ÷ 120) × 100 = <strong>25 %</strong>.",
      astuce: "Pense à la règle de trois."
    },
    {
      titre: "Augmentation en %",
      corps: `<p>Nouvelle valeur = ancienne × (1 + taux/100)</p>`,
      exemple: "+15 % sur 80 → 80 × 1,15 = <strong>92</strong>.",
      astuce: "Coefficient multiplicateur : +20 % → ×1,2 &nbsp;|&nbsp; +5 % → ×1,05"
    },
    {
      titre: "Réduction en %",
      corps: `<p>Nouvelle valeur = ancienne × (1 − taux/100)</p>`,
      exemple: "−25 % sur 200 → 200 × 0,75 = <strong>150</strong>.",
      astuce: "−30 % → ×0,7 &nbsp;|&nbsp; −10 % → ×0,9"
    },
    {
      titre: "Évolution en % (taux de variation)",
      corps: `<p>Taux = (valeur finale − valeur initiale) ÷ valeur initiale × 100</p>`,
      exemple: "De 80 à 100 → (100−80) ÷ 80 × 100 = <strong>+25 %</strong>.",
      astuce: "Résultat positif = hausse, négatif = baisse."
    }
  ],

  equations: [
    {
      titre: "Principe d'équivalence",
      corps: `<p>On peut faire la même opération des deux côtés du signe = sans changer la solution.</p>`,
      exemple: "x + 5 = 12 → x = 12 − 5 = <strong>7</strong>.",
      astuce: "Pense à une balance : tout ce qu'on fait d'un côté, on le fait de l'autre."
    },
    {
      titre: "Résoudre une équation du 1er degré",
      corps: `<ol><li>Développe et réduis.</li><li>Mets les x d'un côté, les nombres de l'autre.</li><li>Divise par le coefficient de x.</li></ol>`,
      exemple: "3x − 4 = 11 → 3x = 15 → x = <strong>5</strong>.",
      astuce: "Vérifie en remplaçant : 3×5−4 = 11 ✓"
    },
    {
      titre: "Développer et réduire",
      corps: `<p>k(a + b) = ka + kb &nbsp; (distributivité)</p>
<p>Termes semblables : même partie littérale → on additionne les coefficients.</p>`,
      exemple: "2(x+3) + x = 2x + 6 + x = <strong>3x + 6</strong>.",
      astuce: "Attention aux signes quand on développe avec un «−» !"
    },
    {
      titre: "Inéquation (1er degré)",
      corps: `<p>Comme une équation, mais on multiplie/divise par un négatif → on retourne le signe !</p>`,
      exemple: "−2x < 6 → x > <strong>−3</strong> (signe retourné car ÷ par −2).",
      astuce: "< devient > si on change le signe des deux membres."
    }
  ],

  geometrie: [
    {
      titre: "Périmètre des figures",
      corps: `<ul>
<li>Carré : 4 × côté</li>
<li>Rectangle : 2 × (L + l)</li>
<li>Cercle : 2πr (ou πd)</li>
<li>Triangle : somme des 3 côtés</li></ul>`,
      exemple: "Cercle r = 5 cm : P = 2 × π × 5 ≈ <strong>31,4 cm</strong>.",
      astuce: "π ≈ 3,14 ou utilise la touche π de ta calculatrice."
    },
    {
      titre: "Aire des figures",
      corps: `<ul>
<li>Carré : côté²</li>
<li>Rectangle : L × l</li>
<li>Triangle : (base × hauteur) ÷ 2</li>
<li>Disque : πr²</li>
<li>Trapèze : (a + b) × h ÷ 2</li></ul>`,
      exemple: "Triangle base 6, hauteur 4 → A = (6×4)÷2 = <strong>12 cm²</strong>.",
      astuce: "Les unités d'aire sont carrées : cm², m²…"
    },
    {
      titre: "Théorème de Pythagore",
      corps: `<p>Dans un triangle rectangle, le carré de l'hypoténuse = somme des carrés des deux autres côtés.</p>
<p><strong>c² = a² + b²</strong></p>`,
      exemple: "a = 3, b = 4 → c = √(9 + 16) = √25 = <strong>5</strong>.",
      astuce: "L'hypoténuse est TOUJOURS en face de l'angle droit."
    },
    {
      titre: "Angles",
      corps: `<ul>
<li>Angle nul : 0°</li>
<li>Angle droit : 90°</li>
<li>Angle plat : 180°</li>
<li>Angle plein : 360°</li>
<li>Dans un triangle : somme = 180°</li></ul>`,
      exemple: "Triangle avec angles 50° et 70° → 3ème angle = 180−50−70 = <strong>60°</strong>.",
      astuce: "Angles alternes-internes : égaux quand les droites sont parallèles."
    },
    {
      titre: "Volume des solides",
      corps: `<ul>
<li>Cube : côté³</li>
<li>Pavé : L × l × h</li>
<li>Cylindre : πr² × h</li>
<li>Cône : (πr² × h) ÷ 3</li>
<li>Sphère : (4/3)πr³</li></ul>`,
      exemple: "Pavé 4×3×2 → V = <strong>24 cm³</strong>.",
      astuce: "Les unités de volume sont cubes : cm³, m³, L (1 L = 1 dm³)."
    }
  ],

  // ── FRANÇAIS ──
  francais: [
    {
      titre: "Nature des mots (classe grammaticale)",
      corps: `<ul>
<li>Nom (commun / propre)</li>
<li>Verbe (action, état)</li>
<li>Adjectif (qualifie le nom)</li>
<li>Adverbe (modifie verbe, adj, autre adverbe)</li>
<li>Préposition (à, de, pour, dans…)</li>
<li>Conjonction (mais, ou, et, donc, or, ni, car)</li></ul>`,
      exemple: "« Le petit chat dort. » → le (art.), petit (adj.), chat (nom), dort (verbe).",
      astuce: "Pour trouver la nature : cherche ce que le mot EST, pas ce qu'il FAIT."
    },
    {
      titre: "Fonctions grammaticales",
      corps: `<ul>
<li>Sujet : fait l'action (Qui est-ce qui ?)</li>
<li>COD : complément direct (Quoi ? Qui ?)</li>
<li>COI : complément indirect (À qui ? De quoi ?)</li>
<li>Attribut du sujet : après être, paraître…</li>
<li>Épithète : adjectif lié directement au nom</li></ul>`,
      exemple: "« Marie mange une pomme. » → Marie = sujet, pomme = COD.",
      astuce: "Pour trouver la fonction : cherche ce que le mot FAIT dans la phrase."
    },
    {
      titre: "Accord du verbe avec le sujet",
      corps: `<p>Le verbe s'accorde en nombre et en personne avec son sujet.</p>`,
      exemple: "Elles chantent. / Il chante. / Vous chantez.",
      astuce: "Attention aux sujets inversés : « Où courent les enfants ? »"
    },
    {
      titre: "Accord de l'adjectif",
      corps: `<p>L'adjectif s'accorde en genre et en nombre avec le nom qu'il qualifie.</p>`,
      exemple: "Des robes <em>belles</em>. Un garçon <em>grand</em>. Des livres <em>intéressants</em>.",
      astuce: "Si un adjectif qualifie plusieurs noms dont un masculin → masculin pluriel."
    },
    {
      titre: "Figures de style essentielles",
      corps: `<ul>
<li><strong>Comparaison</strong> : comme, tel, pareil à…</li>
<li><strong>Métaphore</strong> : comparaison sans outil (A est B)</li>
<li><strong>Personnification</strong> : on prête des qualités humaines à une chose</li>
<li><strong>Hyperbole</strong> : exagération</li>
<li><strong>Allitération</strong> : répétition de consonnes</li></ul>`,
      exemple: "« Il pleure comme la pluie » (comparaison) / « La lune est une amie » (métaphore).",
      astuce: "Métaphore = comparaison SANS comme / tel."
    }
  ],

  francaisConjugaison: [
    {
      titre: "Présent de l'indicatif",
      corps: `<p>Radical + terminaisons. Groupes 1 (-er) : -e, -es, -e, -ons, -ez, -ent.</p>`,
      exemple: "Chanter → je chante, tu chantes, il chante, nous chantons, vous chantez, ils chantent.",
      astuce: "Verbes irréguliers : être, avoir, aller, faire → à mémoriser !"
    },
    {
      titre: "Passé composé",
      corps: `<p>Auxiliaire (avoir ou être) au présent + participe passé.</p>
<p>Être : verbes de mouvement (aller, venir, partir…) + pronominaux.</p>`,
      exemple: "J'ai mangé. / Elle est partie. / Ils se sont levés.",
      astuce: "Avec ÊTRE : accord du PP avec le sujet. Avec AVOIR : accord avec COD si avant."
    },
    {
      titre: "Imparfait",
      corps: `<p>Radical de nous au présent + -ais, -ais, -ait, -ions, -iez, -aient.</p>`,
      exemple: "Finir → nous finissons → je finissais, tu finissais, il finissait…",
      astuce: "Exception : être → j'étais (radical irr.). Toujours -aient à la 3ème pers. pl."
    },
    {
      titre: "Futur simple",
      corps: `<p>Infinitif (verbes en -re : enlève le -e final) + -ai, -as, -a, -ons, -ez, -ont.</p>`,
      exemple: "Partir → je partirai. Prendre → je prendrai. Être → je serai.",
      astuce: "Irréguliers : aller → j'irai, avoir → j'aurai, être → je serai, faire → je ferai."
    },
    {
      titre: "Accord du participe passé",
      corps: `<ul>
<li>Avec ÊTRE : s'accorde avec le sujet.</li>
<li>Avec AVOIR : s'accorde avec le COD si placé AVANT le verbe.</li>
<li>Verbes pronominaux : cas particuliers.</li></ul>`,
      exemple: "La lettre qu'il a écrit<strong>e</strong>. (COD « lettre » avant → accord).",
      astuce: "Pose la question : « Écrit quoi / qui ? » Avant le verbe → accord !"
    }
  ],

  // ── SVT ──
  svt: [
    {
      titre: "La cellule — unité du vivant",
      corps: `<ul>
<li>Membrane plasmique : enveloppe la cellule.</li>
<li>Cytoplasme : milieu intérieur.</li>
<li>Noyau : contient l'ADN (information génétique).</li>
<li>Mitochondries : production d'énergie.</li></ul>`,
      exemple: "Cellule végétale = cellule animale + paroi cellulosique + chloroplastes + vacuole.",
      astuce: "Toute cellule vient d'une cellule préexistante (théorie cellulaire)."
    },
    {
      titre: "La digestion",
      corps: `<p>Trajet : bouche → œsophage → estomac → intestin grêle → gros intestin → anus.</p>
<p>Enzymes = protéines qui découpent les grosses molécules en petites.</p>`,
      exemple: "Amidon → glucose (ptyaline dans la salive puis pancréas). Protéines → acides aminés.",
      astuce: "L'intestin grêle = lieu principal d'ABSORPTION (villosités)."
    },
    {
      titre: "La photosynthèse",
      corps: `<p>CO₂ + H₂O + lumière → glucose + O₂ (dans les chloroplastes).</p>`,
      exemple: "Les feuilles = usines à sucre qui fabriquent de la matière organique à partir de matière minérale.",
      astuce: "Mémo : lumière IN → sucre OUT + oxygène OUT."
    },
    {
      titre: "La reproduction",
      corps: `<ul>
<li>Sexuée : gamètes mâle + femelle → reproduction à variations.</li>
<li>Asexuée : bouturage, clonage → copies identiques.</li></ul>`,
      exemple: "Fécondation : spermatozoïde + ovule → zygote → embryon.",
      astuce: "Méiose = division qui crée des gamètes à n chromosomes (moitié)."
    },
    {
      titre: "Chaînes alimentaires",
      corps: `<p>Producteur → consommateur 1 → consommateur 2 → décomposeur.</p>`,
      exemple: "Herbe → lapin → renard → bactéries du sol.",
      astuce: "L'énergie diminue à chaque niveau (seulement 10 % transmis)."
    }
  ],

  svtEcologie: [
    {
      titre: "Écosystème",
      corps: `<p>Ensemble formé par un milieu de vie (biotope) + les êtres vivants qui y habitent (biocénose).</p>`,
      exemple: "Une forêt = ses arbres, animaux, champignons + le sol, l'eau, la lumière.",
      astuce: "Biocénose × biotope = écosystème."
    },
    {
      titre: "Flux d'énergie et de matière",
      corps: `<p>Seuls 10 % de l'énergie passe d'un niveau trophique au suivant. La matière se recycle via les décomposeurs.</p>`,
      exemple: "100 kg d'herbe → 10 kg de lapins → 1 kg de renard.",
      astuce: "Moins il y a de niveaux, moins on perd d'énergie (régime végétarien plus efficace)."
    },
    {
      titre: "Biodiversité",
      corps: `<p>Diversité des gènes, des espèces et des écosystèmes. Elle garantit la résilience des milieux.</p>`,
      exemple: "La disparition des abeilles menacerait la pollinisation de 80 % des plantes à fleurs.",
      astuce: "Espèce menacée ≠ espèce disparue. UICN classe les espèces par niveau de menace."
    },
    {
      titre: "Impact humain sur les écosystèmes",
      corps: `<ul><li>Déforestation, pollution, surpêche, espèces invasives, changement climatique.</li></ul>`,
      exemple: "La disparition des forêts tropicales → libération de CO₂ stocké + perte d'habitat.",
      astuce: "Les services écosystémiques : eau potable, air pur, sol fertile → fournis gratuitement par la nature."
    }
  ],

  svtGenetique: [
    {
      titre: "ADN et gènes",
      corps: `<p>L'ADN est la molécule qui porte l'information génétique. Un gène = séquence d'ADN codant une protéine.</p>`,
      exemple: "L'ADN humain contient ~20 000 gènes répartis sur 46 chromosomes (23 paires).",
      astuce: "ADN → ARN → protéine (dogme central de la biologie)."
    },
    {
      titre: "Chromosome et caryotype",
      corps: `<p>Humain : 46 chromosomes (23 paires). XY = homme, XX = femme.</p>`,
      exemple: "Trisomie 21 : 3 exemplaires du chromosome 21 au lieu de 2.",
      astuce: "Diploïde (2n) dans les cellules du corps ; haploïde (n) dans les gamètes."
    },
    {
      titre: "Mitose vs Méiose",
      corps: `<ul>
<li>Mitose : cellule → 2 cellules identiques (croissance, réparation).</li>
<li>Méiose : cellule → 4 cellules à n chromosomes (gamètes).</li></ul>`,
      exemple: "Mitose : peau, os, muscles. Méiose : testicules, ovaires.",
      astuce: "Méiose = réduction du nombre de chromosomes de moitié."
    },
    {
      titre: "Mutation et variabilité",
      corps: `<p>Mutation = modification de la séquence d'ADN. Peut être spontanée ou induite (UV, chimiques).</p>`,
      exemple: "Une mutation dans un gène de croissance peut provoquer un cancer.",
      astuce: "La majorité des mutations sont silencieuses (sans effet visible)."
    }
  ],

  // ── PHYSIQUE-CHIMIE ──
  physiqueChimie: [
    {
      titre: "Atome et molécule",
      corps: `<p>Atome = noyau (protons + neutrons) + électrons. Molécule = assemblage d'atomes.</p>`,
      exemple: "H₂O : 2 atomes H + 1 atome O. CO₂ : 1 atome C + 2 atomes O.",
      astuce: "Numéro atomique Z = nombre de protons. Masse atomique A = protons + neutrons."
    },
    {
      titre: "États de la matière",
      corps: `<ul>
<li>Solide : forme propre, volume fixe.</li>
<li>Liquide : forme du récipient, volume fixe.</li>
<li>Gaz : forme et volume du récipient.</li></ul>`,
      exemple: "Eau : glace (solide) → eau liquide → vapeur (gaz).",
      astuce: "Changements d'état : fusion, solidification, vaporisation, liquéfaction, sublimation."
    },
    {
      titre: "Les réactions chimiques",
      corps: `<p>Réactifs → Produits (loi de conservation de la masse).</p>`,
      exemple: "CH₄ + 2O₂ → CO₂ + 2H₂O (combustion du méthane).",
      astuce: "Équilibre l'équation : même nombre d'atomes de chaque côté."
    },
    {
      titre: "Électricité — circuit",
      corps: `<ul>
<li>Loi d'Ohm : U = R × I (tension = résistance × courant).</li>
<li>Série : même courant, tensions s'additionnent.</li>
<li>Parallèle : même tension, courants s'additionnent.</li></ul>`,
      exemple: "R = 10 Ω, I = 2 A → U = 20 V.",
      astuce: "U en Volts, I en Ampères, R en Ohms."
    },
    {
      titre: "Forces et mouvement",
      corps: `<ul>
<li>Poids = m × g (g ≈ 10 N/kg sur Terre).</li>
<li>Loi d'inertie : sans force nette, objet en mouvement uniforme.</li></ul>`,
      exemple: "Masse 5 kg → Poids = 5 × 10 = <strong>50 N</strong>.",
      astuce: "Masse (kg) ≠ Poids (N). La masse ne change pas sur la Lune, mais le poids oui !"
    }
  ],

  chimie: [
    {
      titre: "Classification périodique",
      corps: `<p>Éléments classés par numéro atomique Z croissant. Période = ligne, groupe = colonne.</p>`,
      exemple: "Métaux alcalins (groupe 1) : Li, Na, K… très réactifs avec l'eau.",
      astuce: "Même groupe → mêmes propriétés chimiques (même nombre d'électrons de valence)."
    },
    {
      titre: "Liaisons chimiques",
      corps: `<ul>
<li>Liaison covalente : partage d'électrons (molécules).</li>
<li>Liaison ionique : transfert d'électrons (solides salins).</li>
<li>Liaison métallique : électrons délocalisés.</li></ul>`,
      exemple: "NaCl : Na⁺ + Cl⁻ (liaison ionique). H₂O : liaison covalente O-H.",
      astuce: "Électronégativité grande → attire les électrons (ex : F, O, N)."
    },
    {
      titre: "Acides et bases",
      corps: `<p>Acide : donne H⁺. Base : accepte H⁺ (ou donne OH⁻). pH : 0 (acide fort) → 7 (neutre) → 14 (base forte).</p>`,
      exemple: "HCl : acide fort. NaOH : base forte. Eau pure : pH = 7.",
      astuce: "pH < 7 → acide. pH > 7 → basique. pH = 7 → neutre."
    },
    {
      titre: "Oxydation-Réduction",
      corps: `<p>Oxydation = perte d'électrons. Réduction = gain d'électrons. Toujours en paires (REDOX).</p>`,
      exemple: "Zn → Zn²⁺ + 2e⁻ (oxydation). Cu²⁺ + 2e⁻ → Cu (réduction).",
      astuce: "OILRIG : Oxidation Is Loss, Reduction Is Gain."
    }
  ],

  physiqueEnergie: [
    {
      titre: "Formes d'énergie",
      corps: `<ul>
<li>Cinétique : énergie du mouvement Ec = ½mv²</li>
<li>Potentielle : énergie de position Ep = mgh</li>
<li>Thermique, chimique, électrique, lumineuse…</li></ul>`,
      exemple: "Balle au sol : Ep = 0, Ec max. Balle au sommet : Ep max, Ec = 0.",
      astuce: "Conservation de l'énergie : somme Ec + Ep = constante (sans frottements)."
    },
    {
      titre: "Puissance et énergie électrique",
      corps: `<p>P = U × I (Watts). Énergie = P × t (joules ou kWh).</p>`,
      exemple: "Ampoule 60 W pendant 2 h → E = 60 × 7200 = 432 000 J = 0,12 kWh.",
      astuce: "1 kWh = 3 600 000 J. Sur ta facture EDF, c'est en kWh."
    },
    {
      titre: "Ondes et lumière",
      corps: `<p>Lumière : onde électromagnétique, v = 3×10⁸ m/s dans le vide. Spectre visible : 400–700 nm.</p>`,
      exemple: "Arc-en-ciel : décomposition de la lumière blanche par un prisme (réfraction).",
      astuce: "ROYGBIV : Rouge Orange Jaune Vert Bleu Indigo Violet."
    }
  ],

  // ── HISTOIRE ──
  histoire: [
    {
      titre: "Périodes de l'histoire",
      corps: `<ul>
<li>Préhistoire : avant l'écriture (−3,5 millions → −3500 av. J.‑C.)</li>
<li>Antiquité : −3500 av. J.‑C. → 476 ap. J.‑C.</li>
<li>Moyen Âge : 476 → 1492</li>
<li>Époque moderne : 1492 → 1789</li>
<li>Époque contemporaine : 1789 → aujourd'hui</li></ul>`,
      exemple: "Chute de Rome = 476. Découverte Amérique = 1492. Révolution française = 1789.",
      astuce: "Retiens les dates-charnières qui délimitent les périodes !"
    },
    {
      titre: "La Révolution française (1789)",
      corps: `<ul>
<li>Causes : inégalités, faillite de l'État, idées des Lumières.</li>
<li>Étapes : États généraux → prise de la Bastille → Déclaration des droits → Terreur → Directoire.</li></ul>`,
      exemple: "14 juillet 1789 : prise de la Bastille. 26 août 1789 : Déclaration des droits de l'Homme.",
      astuce: "Liberté, Égalité, Fraternité = devise née de la Révolution."
    },
    {
      titre: "Les deux guerres mondiales",
      corps: `<ul>
<li>1ère GM (1914‑1918) : tranchées, Verdun, traité de Versailles.</li>
<li>2ème GM (1939‑1945) : nazisme, Shoah, Débarquement, bombe atomique.</li></ul>`,
      exemple: "Armistice 11/11/1918 à 11h. Fin 2ème GM : 8 mai 1945 (Europe), 2 sept. 1945 (Japon).",
      astuce: "11/11/1918 → « onze, onze, onze » facile à mémoriser !"
    },
    {
      titre: "La construction européenne",
      corps: `<p>1957 : traité de Rome → CEE. 1992 : traité de Maastricht → UE. 2002 : euro.</p>`,
      exemple: "27 pays membres de l'UE. Parlement européen siège à Strasbourg et Bruxelles.",
      astuce: "UE = paix + marché commun + monnaie unique (pour certains membres)."
    }
  ],

  histoireAncienne: [
    {
      titre: "La Mésopotamie et l'Égypte",
      corps: `<p>Premières civilisations : écriture cunéiforme (Sumer ~3500 av. J.‑C.), hiéroglyphes (Égypte ~3100 av. J.‑C.).</p>`,
      exemple: "Code de Hammurabi (~1750 av. J.‑C.) = un des premiers codes de lois écrits.",
      astuce: "Mésopotamie = « entre les fleuves » (Tigre + Euphrate) → actuel Irak."
    },
    {
      titre: "La Grèce antique",
      corps: `<ul>
<li>Cité-état (polis) : Athènes (démocratie), Sparte (oligarchie militaire).</li>
<li>Philosophes : Socrate, Platon, Aristote.</li>
<li>Guerres médiques : Marathon (490), Salamine (480).</li></ul>`,
      exemple: "Périclès (Vème s. av. J.‑C.) : âge d'or d'Athènes, construction du Parthénon.",
      astuce: "Démocratie vient du grec « demos » (peuple) + « kratos » (pouvoir)."
    },
    {
      titre: "Rome antique",
      corps: `<ul>
<li>Royauté → République → Empire.</li>
<li>Jules César → Octave Auguste (1er emperor, 27 av. J.‑C.).</li>
<li>Chute de l'Empire romain d'Occident : 476 ap. J.‑C.</li></ul>`,
      exemple: "SPQR = Senatus PopulusQue Romanus. Le Sénat gouverne la République.",
      astuce: "Nos mois juillet (Julius) et août (Augustus) viennent de César et Auguste !"
    }
  ],

  histoireModerne: [
    {
      titre: "La Renaissance (XVe-XVIe s.)",
      corps: `<p>Redécouverte de l'Antiquité, humanisme, grandes découvertes, imprimerie (Gutenberg ~1450).</p>`,
      exemple: "1492 : Christophe Colomb arrive en Amérique. Léonard de Vinci : La Joconde (~1503).",
      astuce: "Humanisme = l'Homme au centre de la réflexion (vs Dieu au Moyen Âge)."
    },
    {
      titre: "Les Réformes religieuses",
      corps: `<p>Luther (1517) → protestantisme. Calvin → calvinisme. Henri VIII → anglicanisme.</p>`,
      exemple: "95 Thèses de Luther (1517) → fracture du christianisme occidental.",
      astuce: "Contre-Réforme = réponse catholique au protestantisme (Concile de Trente 1545)."
    },
    {
      titre: "La Révolution industrielle (XIXe s.)",
      corps: `<p>Angleterre 1780 puis Europe : machine à vapeur, charbon, usines, chemin de fer, prolétariat.</p>`,
      exemple: "1825 : 1er chemin de fer (Angleterre). Marx publie le Manifeste communiste en 1848.",
      astuce: "Exode rural → villes surpeuplées → conditions de travail difficiles → mouvements ouvriers."
    }
  ],

  // ── ANGLAIS ──
  anglaisVocab: [
    {
      titre: "Les temps essentiels",
      corps: `<ul>
<li>Present simple : habitude (I go / He goes)</li>
<li>Present continuous : action en cours (I am going)</li>
<li>Past simple : action passée terminée (I went)</li>
<li>Future will/going to : prévision / intention</li></ul>`,
      exemple: "I go to school every day. / I am reading now. / I went yesterday.",
      astuce: "3ème personne singulier au présent → ajoute -s ou -es (He plays)."
    },
    {
      titre: "Vocabulaire thématique clé",
      corps: `<ul>
<li>Corps humain, famille, école, ville, nourriture, vêtements, transports.</li>
<li>Verbes irréguliers : go/went, be/was, have/had, do/did, see/saw…</li></ul>`,
      exemple: "go → went → gone. take → took → taken.",
      astuce: "Apprends les verbes irréguliers par groupes de sons similaires."
    },
    {
      titre: "Questions en anglais",
      corps: `<p>Do / Does / Did + sujet + verbe base. Ou: WH-word + auxiliaire + sujet + verbe.</p>`,
      exemple: "Do you like pizza? / Where do you live? / What did she say?",
      astuce: "Never put two verbs in a row without an auxiliary!"
    },
    {
      titre: "Articles a / an / the",
      corps: `<ul>
<li><em>a</em> : devant consonne (a cat).</li>
<li><em>an</em> : devant voyelle (an apple).</li>
<li><em>the</em> : chose déjà connue, unique.</li>
<li>Pas d'article : généralité (Dogs are loyal).</li></ul>`,
      exemple: "I saw a dog. The dog was big.",
      astuce: "a/an = pour parler d'une chose pour la 1ère fois. the = on sait de quoi on parle."
    }
  ],

  anglais: [
    {
      titre: "Prétérit simple vs Present Perfect",
      corps: `<ul>
<li>Past simple : date précise, passé révolu (I saw her yesterday).</li>
<li>Present perfect : résultat dans le présent, expérience (I have seen it → toujours vrai).</li></ul>`,
      exemple: "I lived in Paris for 3 years (2010-2013). / I have lived in Paris (j'y vis encore).",
      astuce: "already, just, ever, never, yet → souvent avec le present perfect."
    },
    {
      titre: "Conditionnel",
      corps: `<ul>
<li>Type 1 (possible) : If + present, will + base.</li>
<li>Type 2 (hypothétique) : If + past, would + base.</li>
<li>Type 3 (irréel passé) : If + past perfect, would have + PP.</li></ul>`,
      exemple: "If it rains, I will stay. / If I were rich, I would travel.",
      astuce: "Were à toutes les personnes dans les type 2 (formelle) : If I were…"
    },
    {
      titre: "Voix passive",
      corps: `<p>Sujet + to be (conjugué) + participe passé (+ by + agent).</p>`,
      exemple: "Active: She wrote the book. Passive: The book was written by her.",
      astuce: "Le complément d'objet actif devient le sujet passif."
    },
    {
      titre: "Modaux",
      corps: `<ul>
<li>can/could : capacité, possibilité.</li>
<li>must/have to : obligation.</li>
<li>should : conseil.</li>
<li>may/might : probabilité faible.</li></ul>`,
      exemple: "You must study. / You should sleep early. / It might rain.",
      astuce: "Après un modal : toujours base verbale (sans -s, sans to)."
    }
  ],

  anglasCivilisation: [
    {
      titre: "Le Royaume-Uni",
      corps: `<p>4 nations : Angleterre, Écosse, Pays de Galles, Irlande du Nord. Capitale : Londres. Monarchie constitutionnelle.</p>`,
      exemple: "Le Parlement siège à Westminster. Big Ben / Tower of London / Buckingham Palace.",
      astuce: "UK ≠ Angleterre. UK = England + Scotland + Wales + Northern Ireland."
    },
    {
      titre: "Les États-Unis",
      corps: `<p>50 états. Capitale : Washington D.C. Système fédéral : Président + Congrès (Sénat + Chambre des représentants).</p>`,
      exemple: "Indépendance : 4 juillet 1776. Constitution : 1787. Premier président : George Washington.",
      astuce: "Stars & Stripes : 50 étoiles (50 états) + 13 rayures (13 colonies d'origine)."
    },
    {
      titre: "Fêtes et traditions anglophones",
      corps: `<ul>
<li>Halloween (31 oct.) : origine irlandaise / celtique.</li>
<li>Thanksgiving (4ème jeudi nov., USA) : tradition des pèlerins du Mayflower.</li>
<li>Guy Fawkes Night (5 nov., UK) : complot des poudres 1605.</li></ul>`,
      exemple: "Trick or treat → Halloween. Turkey → Thanksgiving.",
      astuce: "Beaucoup de fêtes américaines ont des racines européennes (surtout irlandaises)."
    }
  ],

  // ── MATHS 6ème ──
  maths6Nombres: [
    {
      titre: "Nombres entiers et décimaux",
      corps: `<p>Entier : 0, 1, 2, 3… Décimal : 3,14 | 0,5… Rangées : milliers, centaines, dizaines, unités | dixièmes, centièmes…</p>`,
      exemple: "Dans 4 728,36 : 4 milliers, 7 centaines, 2 dizaines, 8 unités, 3 dixièmes, 6 centièmes.",
      astuce: "Pour comparer des décimaux : aligne les virgules et compare chiffre par chiffre."
    },
    {
      titre: "Multiples et diviseurs",
      corps: `<p>a est multiple de b si a = b × k. Diviseur : b divise a sans reste.</p>`,
      exemple: "Multiples de 6 : 6, 12, 18, 24… Diviseurs de 12 : 1, 2, 3, 4, 6, 12.",
      astuce: "Critères de divisibilité : par 2 (pair), par 3 (somme chiffres divisible par 3), par 5 (finit par 0 ou 5)."
    },
    {
      titre: "Priorité des opérations",
      corps: `<p>1. Parenthèses. 2. Multiplication / Division (de gauche à droite). 3. Addition / Soustraction.</p>`,
      exemple: "3 + 4 × 2 = 3 + 8 = <strong>11</strong> (pas 14).",
      astuce: "PEMDAS ou BODMAS : mémo pour se souvenir de l'ordre."
    }
  ],

  maths6Geometrie: [
    {
      titre: "Figures planes",
      corps: `<ul>
<li>Triangle : 3 côtés. Carré : 4 côtés égaux, 4 angles droits. Rectangle : 4 angles droits.</li>
<li>Cercle : tous les points à même distance du centre (rayon r).</li></ul>`,
      exemple: "Carré de côté 5 → périmètre = 20, aire = 25.",
      astuce: "Diamètre = 2 × rayon. π ≈ 3,14."
    },
    {
      titre: "Droites et angles",
      corps: `<ul>
<li>Parallèles : ne se croisent jamais (//)</li>
<li>Perpendiculaires : angle droit (⊥)</li>
<li>Angles : aigu <90°, droit =90°, obtus 90-180°, plat =180°</li></ul>`,
      exemple: "Dans un rectangle, les côtés opposés sont parallèles et les angles sont droits.",
      astuce: "Droites perpendiculaires = forment un carré dans leur angle."
    }
  ],

  maths6Grandeurs: [
    {
      titre: "Unités de longueur",
      corps: `<p>km → hm → dam → m → dm → cm → mm. ×10 en allant vers la droite (plus petit).</p>`,
      exemple: "3,5 km = 3 500 m = 350 000 cm.",
      astuce: "Mnémo : « Kilo Hecto Deca Mètre Déci Centi Milli »."
    },
    {
      titre: "Unités de masse, contenance, durée",
      corps: `<ul>
<li>Masse : t → kg → g → mg. 1 kg = 1 000 g.</li>
<li>Contenance : kL → hL → daL → L → dL → cL → mL.</li>
<li>Durée : 1h = 60 min. 1 min = 60 s.</li></ul>`,
      exemple: "2,5 L = 25 dL = 250 cL = 2 500 mL.",
      astuce: "Les conversions de volume sont en ×1000 (pas ×100) pour les cubes !"
    }
  ],

  maths6Proportionnalite: [
    {
      titre: "Proportionnalité",
      corps: `<p>Deux quantités proportionnelles si leur rapport est constant : y = k × x.</p>`,
      exemple: "Prix = 3 × quantité. Tableau : 1→3, 2→6, 3→9 (coefficient k = 3).",
      astuce: "Vérifie : produits en croix égaux. 3/1 = 6/2 = 9/3 ✓"
    },
    {
      titre: "Règle de trois",
      corps: `<p>Si A → B, alors C → ? : réponse = B × C ÷ A.</p>`,
      exemple: "3 livres coûtent 12 €. 5 livres → 12 × 5 ÷ 3 = <strong>20 €</strong>.",
      astuce: "Pose toujours un tableau de proportionnalité pour ne pas te tromper."
    }
  ],

  // ── MATHS 5ème ──
  maths5Nombres: [
    {
      titre: "Nombres relatifs",
      corps: `<ul>
<li>Addition : même signe → additionne, signe du plus grand. Signes opposés → soustrait, signe du plus grand.</li>
<li>Multiplication : même signe → positif. Signes opposés → négatif.</li></ul>`,
      exemple: "(−3) + (−5) = −8. (−4) × 3 = −12. (−2) × (−6) = +12.",
      astuce: "Règle des signes : − × − = + &nbsp;|&nbsp; − × + = − &nbsp;|&nbsp; + × + = +"
    },
    {
      titre: "Fractions (opérations avancées)",
      corps: `<ul>
<li>Même dénominateur : additionne/soustrait les numérateurs.</li>
<li>Dénominateurs différents : réduis au même dénominateur (PPCM).</li>
<li>Multiplication : numérateur × numérateur / dénominateur × dénominateur.</li>
<li>Division : multiplie par l'inverse.</li></ul>`,
      exemple: "2/3 × 3/4 = 6/12 = 1/2. &nbsp; 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6.",
      astuce: "Pour diviser par une fraction : tu inverses et tu multiplies."
    },
    {
      titre: "Puissances",
      corps: `<p>aⁿ = a × a × … × a (n fois). a⁰ = 1. a¹ = a. a⁻ⁿ = 1/aⁿ.</p>`,
      exemple: "2³ = 8. 10² = 100. 3⁻² = 1/9.",
      astuce: "10ⁿ = 1 suivi de n zéros. 10⁻ⁿ = 0,0…01 (n−1 zéros après la virgule)."
    }
  ],

  maths5Geometrie: [
    {
      titre: "Symétrie centrale et axiale",
      corps: `<ul>
<li>Symétrie axiale : reflet par rapport à un axe (droite miroir).</li>
<li>Symétrie centrale : rotation de 180° autour d'un point (centre).</li></ul>`,
      exemple: "Le losange a une symétrie centrale par rapport à l'intersection de ses diagonales.",
      astuce: "Symétrie axiale = « effet miroir ». Symétrie centrale = « rotation 180° »."
    },
    {
      titre: "Triangles et constructions",
      corps: `<ul>
<li>Médiatrice d'un segment = axe de symétrie, perpendiculaire au milieu.</li>
<li>Bissectrice = droite qui coupe un angle en deux parties égales.</li></ul>`,
      exemple: "Le centre du cercle inscrit dans un triangle = intersection des 3 bissectrices.",
      astuce: "Cercle circonscrit (passe par les 3 sommets) = intersection des 3 médiatrices."
    }
  ],

  maths5Algebre: [
    {
      titre: "Calcul littéral",
      corps: `<p>Développer : k(a+b) = ka+kb. Factoriser : inverser. Réduire : regrouper les termes semblables.</p>`,
      exemple: "3(x+2) − 2(x−1) = 3x+6−2x+2 = <strong>x+8</strong>.",
      astuce: "Attention au signe − qui change le signe de chaque terme dans la parenthèse !"
    },
    {
      titre: "Équations du 1er degré",
      corps: `<p>Isoler l'inconnue en effectuant les mêmes opérations des deux côtés.</p>`,
      exemple: "2x − 3 = 7 → 2x = 10 → x = <strong>5</strong>.",
      astuce: "Vérifie toujours : remplace x par la solution dans l'équation."
    }
  ],

  maths5Proportionnalite: [
    {
      titre: "Vitesse, distance, durée",
      corps: `<p>d = v × t. On peut aussi calculer v = d/t et t = d/v.</p>`,
      exemple: "v = 90 km/h, t = 2 h → d = 90 × 2 = <strong>180 km</strong>.",
      astuce: "Triangle « DST » (Distance = Speed × Time) : cache la valeur à trouver."
    },
    {
      titre: "Échelle et agrandissement/réduction",
      corps: `<p>Échelle = distance réelle / distance sur plan. Coefficient d'agrandissement k : longueurs ×k, aires ×k².</p>`,
      exemple: "Échelle 1/25 000 : 4 cm sur la carte = 4 × 25 000 = 100 000 cm = <strong>1 km</strong>.",
      astuce: "Si k > 1 : agrandissement. Si 0 < k < 1 : réduction."
    }
  ],

  // ── MATHS SECONDE ──
  maths2Nomb_Ensembles: [
    {
      titre: "Ensembles de nombres",
      corps: `<p>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.</p><ul>
<li>ℕ : entiers naturels (0, 1, 2…)</li>
<li>ℤ : entiers relatifs (…−2, −1, 0, 1, 2…)</li>
<li>ℚ : rationnels (fractions p/q)</li>
<li>ℝ : réels (incluant irrationnels : √2, π…)</li></ul>`,
      exemple: "√2 ∈ ℝ mais √2 ∉ ℚ (irrationnel). 3/4 ∈ ℚ.",
      astuce: "Symboles : ∈ (appartient), ⊂ (inclus dans), ∩ (intersection), ∪ (union)."
    },
    {
      titre: "Intervalles",
      corps: `<ul>
<li>[a;b] : fermé (a et b inclus)</li>
<li>]a;b[ : ouvert (a et b exclus)</li>
<li>[a;+∞[ : demi-ouvert</li></ul>`,
      exemple: "x ∈ [2;5] ↔ 2 ≤ x ≤ 5. x ∈ ]−∞;3[ ↔ x < 3.",
      astuce: "Crochet vers l'intérieur [ ] = inclus. Crochet vers l'extérieur ] [ = exclu."
    }
  ],

  maths2Nomb_Calcul: [
    {
      titre: "Identités remarquables",
      corps: `<ul>
<li>(a+b)² = a² + 2ab + b²</li>
<li>(a−b)² = a² − 2ab + b²</li>
<li>(a+b)(a−b) = a² − b²</li></ul>`,
      exemple: "(x+3)² = x² + 6x + 9. (x−2)(x+2) = x² − 4.",
      astuce: "Reconnais le cas (a²−b²) = différence de carrés → factorisation rapide !"
    },
    {
      titre: "Racines carrées",
      corps: `<p>√a × √b = √(ab). √a / √b = √(a/b). √(a²) = |a|. (√a)² = a (si a ≥ 0).</p>`,
      exemple: "√12 = √(4×3) = 2√3. 3√2 + √2 = 4√2.",
      astuce: "Simplifie en cherchant les facteurs carrés parfaits : 4, 9, 16, 25…"
    }
  ],

  maths2Nomb_Eq1: [
    {
      titre: "Équation du 1er degré",
      corps: `<p>ax + b = 0 → x = −b/a (si a ≠ 0).</p>`,
      exemple: "3x − 6 = 0 → 3x = 6 → x = 2.",
      astuce: "Si a = 0 et b ≠ 0 : pas de solution. Si a = b = 0 : solution = ℝ."
    },
    {
      titre: "Inéquation du 1er degré",
      corps: `<p>ax + b < 0. Attention : si on divise par a < 0, le sens de l'inégalité s'inverse !</p>`,
      exemple: "−2x + 4 > 0 → −2x > −4 → x < 2 (signe retourné !).",
      astuce: "Toujours vérifier si tu multiplies/divises par un nombre négatif → inversion du signe."
    }
  ],

  maths2Fonc_Generalites: [
    {
      titre: "Notion de fonction",
      corps: `<p>f associe à tout x ∈ D_f un unique y = f(x). D_f = ensemble de définition.</p>`,
      exemple: "f(x) = 1/x : D_f = ℝ\\{0}. f(x) = √x : D_f = [0;+∞[.",
      astuce: "Le domaine exclut les valeurs qui rendent l'expression impossibles (division par 0, racine de négatif)."
    },
    {
      titre: "Sens de variation et tableau",
      corps: `<p>Croissante : f(a) < f(b) si a < b. Décroissante : f(a) > f(b) si a < b.</p>`,
      exemple: "f(x) = x² est décroissante sur ]−∞;0] et croissante sur [0;+∞[.",
      astuce: "Un tableau de variation montre les flèches ↗ (croissant) et ↘ (décroissant)."
    }
  ],

  maths2Fonc_Affines: [
    {
      titre: "Fonction affine f(x) = ax + b",
      corps: `<ul>
<li>a = pente (taux de variation, coefficient directeur).</li>
<li>b = ordonnée à l'origine (valeur en x=0).</li>
<li>Si a > 0 : croissante. a < 0 : décroissante. a = 0 : constante.</li></ul>`,
      exemple: "f(x) = 2x − 3 : pente 2, passe par (0, −3) et (1,5; 0).",
      astuce: "2 points suffisent pour tracer une droite."
    },
    {
      titre: "Droites dans un repère",
      corps: `<ul>
<li>Parallèles : même coefficient directeur a.</li>
<li>Perpendiculaires : a₁ × a₂ = −1.</li>
<li>Intersection : résoudre le système d'équations.</li></ul>`,
      exemple: "y = 2x + 1 et y = 2x − 3 : parallèles (a = 2 dans les deux).",
      astuce: "Coefficient directeur = (y₂−y₁)/(x₂−x₁) entre deux points de la droite."
    }
  ],

  maths2Fonc_Carre: [
    {
      titre: "Fonction carré f(x) = x²",
      corps: `<ul>
<li>Parabole symétrique par rapport à l'axe des ordonnées.</li>
<li>Sommet en (0;0). Décroissante sur ]−∞;0], croissante sur [0;+∞[.</li>
<li>Toujours positive ou nulle.</li></ul>`,
      exemple: "f(−3) = 9 = f(3). Le minimum est 0, atteint en x = 0.",
      astuce: "f(x) = (x−h)² + k : sommet en (h;k). Utile pour les formes canoniques."
    }
  ],

  maths2Geo_Vecteurs: [
    {
      titre: "Vecteur",
      corps: `<p>Vecteur AB : direction, sens, norme (longueur). Coordonnées : AB = (xB−xA ; yB−yA).</p>`,
      exemple: "A(1;2), B(4;6) → AB = (3;4). Norme = √(9+16) = 5.",
      astuce: "Deux vecteurs égaux : même direction, sens et norme (pas forcément même point de départ)."
    },
    {
      titre: "Opérations sur les vecteurs",
      corps: `<ul>
<li>Addition : u + v (règle du parallélogramme ou bout à bout).</li>
<li>Multiplication par un scalaire : k×u (même direction, longueur ×|k|).</li>
<li>Colinéaires : u et v colinéaires ↔ u = k×v.</li></ul>`,
      exemple: "u = (2;3), v = (1;−1) → u+v = (3;2). 2u = (4;6).",
      astuce: "A, B, C alignés ↔ AB et AC colinéaires."
    }
  ],

  maths2Geo_Repere: [
    {
      titre: "Repère orthonormé",
      corps: `<p>Origine O, axe des abscisses (x), axe des ordonnées (y). Milieu de AB : M = ((xA+xB)/2 ; (yA+yB)/2).</p>`,
      exemple: "A(2;4), B(6;2) → Milieu M = (4;3). Distance AB = √((6−2)²+(2−4)²) = √20 = 2√5.",
      astuce: "Distance AB = √(Δx² + Δy²). C'est Pythagore appliqué aux coordonnées !"
    }
  ],

  maths2Geo_Thales: [
    {
      titre: "Théorème de Thalès",
      corps: `<p>Si D droites parallèles coupent deux sécantes, les rapports des segments sont égaux.</p>
<p>MA/MB = MC/MD = AC/BD</p>`,
      exemple: "MA = 4, MB = 6, MC = 3 → MD = (6×3)/4 = 4,5.",
      astuce: "Vérifie que les droites sont bien parallèles avant d'appliquer Thalès !"
    },
    {
      titre: "Thalès réciproque",
      corps: `<p>Si MA/MB = MC/MD et M, A, B et M, C, D alignés dans le même ordre → AC // BD.</p>`,
      exemple: "Calcule les rapports : si égaux, les droites sont parallèles.",
      astuce: "La réciproque sert à PROUVER que deux droites sont parallèles."
    }
  ],

  maths2Geo_Trigo: [
    {
      titre: "Trigonométrie dans le triangle rectangle",
      corps: `<ul>
<li>cos α = Adjacent / Hypoténuse</li>
<li>sin α = Opposé / Hypoténuse</li>
<li>tan α = Opposé / Adjacent</li></ul>`,
      exemple: "Angle 30° : sin 30° = 0,5. cos 45° = √2/2 ≈ 0,707.",
      astuce: "SOH-CAH-TOA : Sinus=Opposé/Hyp, Cosinus=Adjacent/Hyp, Tangente=Opp/Adj."
    },
    {
      titre: "Valeurs remarquables",
      corps: `<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr><th>α</th><th>sin α</th><th>cos α</th><th>tan α</th></tr>
<tr><td>0°</td><td>0</td><td>1</td><td>0</td></tr>
<tr><td>30°</td><td>1/2</td><td>√3/2</td><td>1/√3</td></tr>
<tr><td>45°</td><td>√2/2</td><td>√2/2</td><td>1</td></tr>
<tr><td>60°</td><td>√3/2</td><td>1/2</td><td>√3</td></tr>
<tr><td>90°</td><td>1</td><td>0</td><td>—</td></tr></table>`,
      exemple: "Triangle rect. hyp. = 10, angle 30° → côté opposé = sin 30° × 10 = 5.",
      astuce: "Mémorise 0°, 30°, 45°, 60°, 90° — très souvent demandés en examen !"
    }
  ],

  maths2Stats_Statistiques: [
    {
      titre: "Indicateurs de position",
      corps: `<ul>
<li>Moyenne : somme des valeurs / effectif total.</li>
<li>Médiane : valeur centrale (50% en dessous, 50% au-dessus).</li>
<li>Mode : valeur la plus fréquente.</li></ul>`,
      exemple: "Série : 2, 4, 4, 5, 7 → Moyenne = 22/5 = 4,4. Médiane = 4. Mode = 4.",
      astuce: "La médiane est robuste aux valeurs extrêmes, pas la moyenne."
    },
    {
      titre: "Indicateurs de dispersion",
      corps: `<ul>
<li>Étendue : max − min.</li>
<li>Quartiles : Q1 (25%), Q2 = médiane (50%), Q3 (75%).</li>
<li>Écart interquartile : Q3 − Q1.</li></ul>`,
      exemple: "Série : 1, 3, 5, 7, 9. Étendue = 8. Q1 = 3. Q3 = 7. EIQ = 4.",
      astuce: "Boîte à moustaches : visualise Q1, médiane, Q3, min, max."
    }
  ],

  maths2Stats_Proba: [
    {
      titre: "Probabilités — définitions",
      corps: `<p>P(A) = nombre de cas favorables / nombre de cas possibles (si équiprobable).</p>
<p>0 ≤ P(A) ≤ 1. P(A) + P(Ā) = 1.</p>`,
      exemple: "Dé à 6 faces : P(pair) = 3/6 = 1/2. P(≥5) = 2/6 = 1/3.",
      astuce: "L'événement contraire de A : P(non A) = 1 − P(A)."
    },
    {
      titre: "Probabilités composées",
      corps: `<ul>
<li>P(A∪B) = P(A) + P(B) − P(A∩B).</li>
<li>Si A et B incompatibles : P(A∪B) = P(A) + P(B).</li>
<li>Si A et B indépendants : P(A∩B) = P(A) × P(B).</li></ul>`,
      exemple: "Pile 2 fois : P(PP) = 1/2 × 1/2 = 1/4 (indépendants).",
      astuce: "Arbre de probabilités : lit les branches pour calculer P(A∩B)."
    }
  ],

  // ── FRANÇAIS 6ème ──
  francais6Grammaire: [
    {
      titre: "Les classes de mots (6ème)",
      corps: `<ul>
<li>Nom, verbe, adjectif, article, pronom, adverbe, préposition, conjonction, interjection.</li></ul>`,
      exemple: "« Le grand chat noir dort. » → le (article), grand/noir (adj.), chat (nom), dort (verbe).",
      astuce: "Article défini : le/la/les/l'. Indéfini : un/une/des. Partitif : du/de la."
    },
    {
      titre: "Fonctions dans la phrase (6ème)",
      corps: `<ul>
<li>Sujet : fait l'action (Qui est-ce qui + verbe ?)</li>
<li>COD : Verbe + quoi/qui ? sans préposition.</li>
<li>COI : Verbe + à/de quoi ? avec préposition.</li>
<li>Complément circonstanciel : lieu, temps, manière.</li></ul>`,
      exemple: "Il mange une pomme → « une pomme » = COD. Il parle à Marie → « à Marie » = COI.",
      astuce: "CC peut être déplacé ou supprimé ; COD/COI non."
    }
  ],

  francais6Conjugaison: [
    {
      titre: "Conjugaison 6ème — temps principaux",
      corps: `<ul>
<li>Présent : action en cours ou habituelle.</li>
<li>Passé composé : action passée et terminée.</li>
<li>Imparfait : description, action répétée dans le passé.</li>
<li>Futur simple : action à venir.</li></ul>`,
      exemple: "Je mange (présent). J'ai mangé (passé composé). Je mangeais (imparfait). Je mangerai (futur).",
      astuce: "Imparfait = cadre / décor. Passé composé = action précise du récit."
    }
  ],

  francais6Orthographe: [
    {
      titre: "Homophones grammaticaux",
      corps: `<ul>
<li>a (verbe avoir) vs à (préposition)</li>
<li>on (pronom) vs ont (verbe avoir)</li>
<li>son (déterminant) vs sont (verbe être)</li>
<li>ce (déterminant/pronom) vs se (pronom réfléchi)</li></ul>`,
      exemple: "Il <em>a</em> un stylo (avoir). Il va <em>à</em> l'école (préposition).",
      astuce: "Remplace par « avait » : si ça marche → « a ». Sinon → « à »."
    },
    {
      titre: "Accord dans le groupe nominal",
      corps: `<p>Déterminant + Nom + Adjectif → s'accordent en genre et nombre.</p>`,
      exemple: "des fleurs <em>rouges</em> (fém. pl.). un livre <em>intéressant</em> (masc. sing.).",
      astuce: "Cherche le nom principal → détermine genre et nombre → accorde tout le groupe."
    }
  ],

  // Fallback générique pour tous les autres thèmes
  _default: [
    {
      titre: "Relis le cours",
      corps: `<p>Reprends ton cours sur ce thème et identifie les règles / définitions clés.</p>`,
      exemple: "",
      astuce: "Fais une liste des 5 points essentiels sur une feuille."
    },
    {
      titre: "Applique sur des exemples",
      corps: `<p>Pour chaque règle, cherche 2 ou 3 exemples concrets avant de faire des exercices.</p>`,
      exemple: "",
      astuce: "Commence par les exercices les plus simples, puis monte en difficulté."
    },
    {
      titre: "Teste-toi",
      corps: `<p>Utilise le mode Sur mesure pour cibler les niveaux où tu as des difficultés.</p>`,
      exemple: "",
      astuce: "Refais l'examen noté après avoir travaillé les points faibles !"
    }
  ]
};
