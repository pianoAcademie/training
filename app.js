// ── ÉTAT DU JEU ──
const etat = {
  theme: null,
  mode: 'examen',         // 'examen' | 'libre' | 'apercu' | 'examen_note'
  niveauActuel: 1,
  questionIndex: 0,
  totalQuestions: 10,
  bonnesReponses: 0,
  mauvaiesReponses: 0,
  questionsVues: { 1: [], 2: [], 3: [] },
  questionCourante: null,
  reponduA: false,
  tempsDebut: null,
  xpGagneSession: 0,
  questionsFixees: null,  // liste fixe pour examen_note
  reponsesExamen: [],     // suivi des réponses pour analyse
  focusNiveau: null       // niveau recommandé d'après le dernier examen noté
};

// ── PRÉNOM ÉLÈVE ──
let prenomEleve = localStorage.getItem('mathentrain_prenom') || '';

function validerPrenom() {
  const input = document.getElementById('input-prenom');
  const prenom = input.value.trim();
  const erreur = document.getElementById('erreur-prenom');
  if (!prenom) {
    input.classList.add('erreur');
    erreur.style.display = 'block';
    input.focus();
    return;
  }
  input.classList.remove('erreur');
  erreur.style.display = 'none';
  prenomEleve = prenom;
  localStorage.setItem('mathentrain_prenom', prenom);
  afficherEcran('ecran-landing');
  mettreAJourHeader();
  mettreAJourBtnProfil();
}

function mettreAJourHeader() {
  const sous = document.getElementById('header-sous-titre');
  if (sous && prenomEleve) {
    sous.textContent = `Bonjour ${prenomEleve} ! Entraîne-toi à ton rythme 🎯`;
  }
}

function mettreAJourBtnProfil() {
  const btn    = document.getElementById('btn-profil');
  const avatar = document.getElementById('profil-avatar');
  if (!btn || !avatar) return;
  if (prenomEleve) {
    btn.style.display = 'flex';
    avatar.textContent = prenomEleve.charAt(0).toUpperCase();
  } else {
    btn.style.display = 'none';
  }
}

// ── PANNEAU PROFIL ──
function ouvrirProfil() {
  const panel = document.getElementById('profil-panel');
  panel.classList.add('ouvert');

  document.getElementById('profil-input-prenom').value   = prenomEleve;
  document.getElementById('profil-avatar-grand').textContent = prenomEleve.charAt(0).toUpperCase();
  document.getElementById('profil-nom-affiche').textContent  = prenomEleve;

  const xpData    = chargerXP();
  const totalXP   = Object.values(xpData).reduce((a, b) => a + b, 0);
  const palier    = getPalier(totalXP);
  const nbChapitres = Object.keys(xpData).filter(k => xpData[k] > 0).length;

  document.getElementById('profil-xp-total').textContent    = totalXP + ' XP';
  document.getElementById('profil-palier').textContent      = palier.emoji + ' ' + palier.label;
  document.getElementById('profil-nb-chapitres').textContent = nbChapitres;
}

function fermerProfil() {
  document.getElementById('profil-panel').classList.remove('ouvert');
}

function sauvegarderProfil() {
  const input   = document.getElementById('profil-input-prenom');
  const nouveau = input.value.trim();
  if (!nouveau) { input.style.borderColor = '#ef4444'; return; }
  input.style.borderColor = '';
  prenomEleve = nouveau;
  localStorage.setItem('mathentrain_prenom', nouveau);
  mettreAJourHeader();
  mettreAJourBtnProfil();
  fermerProfil();
}

function reinitialiserProgression() {
  if (!confirm(`Réinitialiser toute la progression de ${prenomEleve} ? Cette action est irréversible.`)) return;
  localStorage.removeItem('mathentrain_xp');
  fermerProfil();
  renderAccueil();
}

// ── PROFS VIRTUELS ──
const PROFS = [
  {
    id: 'none', nom: 'Solo', emoji: '🎧', couleur: '#64748b',
    description: 'Pas de commentaire',
    correct: [], incorrect: [], timeout: []
  },
  {
    id: 'dubois', nom: 'M. Dubois', emoji: '😤', couleur: '#7c3aed',
    description: 'Le sarcastique classique',
    correct: [
      'C\'était de la chance, profites-en.',
      'Même toi tu y arrives parfois.',
      'Tiens, bonne réponse. Encadre-la.',
      'Ne préviens pas tes parents trop vite.',
      'Bien... pour une fois.',
      'Je ne félicite pas, mais c\'est noté.',
      'Tu aurais pu trouver plus vite, non ?',
      'Correct. Ça ne durera pas.'
    ],
    incorrect: [
      'C\'est exactement ce que je pensais.',
      'Tu es sûr d\'être au bon cours ?',
      'J\'espère que tu es meilleur en sport.',
      'Fascinant. Complètement faux.',
      'On recommence depuis le début, peut-être ?',
      'Je ne suis pas surpris, va.',
      'C\'est une réponse audacieuse. Et fausse.',
      'Tu as cherché la pire réponse et tu l\'as trouvée.'
    ],
    timeout: [
      'Tu lisais ou tu rêvais ?',
      'Même la tortue répond plus vite.',
      'Le temps, ça se gère. Apparemment pas pour toi.',
      'Ce n\'est pas une exposition de peinture ici.'
    ]
  },
  {
    id: 'bruno', nom: 'Coach Bruno', emoji: '💪', couleur: '#dc2626',
    description: 'Le coach qui crie',
    correct: [
      'COUP DE BOL ! Recommence et prouve-le !',
      'Chance de débutant ! J\'ai l\'œil sur toi !',
      'Bof, mon arrière-grand-mère aurait trouvé.',
      'C\'est tout ?! Mon chien fait pareil !',
      'BIEN ! Mais ne te relâche pas !',
      'Allez, encore ! Et cette fois fais-le BIEN !'
    ],
    incorrect: [
      'T\'APPELLES ÇA JOUER ?!',
      'Mon maillot de bain transpire mieux que ça !',
      'REJEU ! Et cette fois concentre-toi !',
      'NOOOON ! C\'était pas ça ! Du tout !',
      'Même en regardant la réponse t\'aurais raté !',
      'C\'est une HONTE ! Vingt pompes !'
    ],
    timeout: [
      'T\'AS OUBLIÉ DE COURIR ?!',
      'C\'est pas du foot, là, BOUGE !',
      'TEMPS ! T\'es grillé ! Honte à toi !',
      'TU DORMAIS ?! Debout !'
    ]
  },
  {
    id: 'aria', nom: 'ARIA', emoji: '🤖', couleur: '#0d9488',
    description: 'L\'IA condescendante',
    correct: [
      'Résultat : correct. Probabilité de fluke : 61%. Mérite : discutable.',
      'Réponse correcte détectée. Ne vous en félicitez pas.',
      'Correct. Ce n\'était pourtant pas difficile.',
      'Données validées. L\'exception confirme la règle.',
      'Réponse acceptable. Pour un humain.',
      'Correct. Probabilité de répéter cette performance : 34%.'
    ],
    incorrect: [
      'Erreur confirmée. Niveau actuel : sous-optimal.',
      'Analyse : réponse incorrecte. Ce n\'est pas surprenant.',
      'Données traitées. Conclusion : révision nécessaire.',
      'Réponse invalide. Recommandation : recommencer depuis zéro.',
      'Erreur critique. Niveau : catastrophique. Bonne journée.',
      'Résultat négatif. Comme prévu par mes algorithmes.'
    ],
    timeout: [
      'Délai dépassé. Performance : sous-humaine.',
      'Timeout détecté. Vitesse de traitement : insuffisante.',
      'Temps écoulé. Recommandation : réviser la matière et le concept de temps.',
      'Délai expiré. Mon processeur est attristé.'
    ]
  }
];

let profActuel = localStorage.getItem('mathentrain_prof') || 'none';

function choisirProf(id) {
  profActuel = id;
  localStorage.setItem('mathentrain_prof', id);
  renderProfSelector();
}

function renderProfSelector() {
  const zone = document.getElementById('prof-selector');
  if (!zone) return;
  zone.innerHTML = '';
  PROFS.forEach(prof => {
    const btn = document.createElement('button');
    btn.className = 'prof-btn' + (prof.id === profActuel ? ' actif' : '');
    btn.style.setProperty('--pc', prof.couleur);
    btn.innerHTML = `
      <span class="prof-btn-emoji">${prof.emoji}</span>
      <span class="prof-btn-nom">${prof.nom}</span>
      <span class="prof-btn-desc">${prof.description}</span>
    `;
    btn.onclick = () => choisirProf(prof.id);
    zone.appendChild(btn);
  });
}

function afficherMessageProf(type) {
  const prof = PROFS.find(p => p.id === profActuel);
  const bulle = document.getElementById('prof-bulle');
  if (!prof || prof.id === 'none' || prof[type].length === 0) {
    bulle.style.display = 'none';
    return;
  }
  const msgs = prof[type];
  const msg  = msgs[Math.floor(Math.random() * msgs.length)];
  document.getElementById('prof-bulle-avatar').textContent = prof.emoji;
  document.getElementById('prof-bulle-nom').textContent    = prof.nom;
  document.getElementById('prof-bulle-msg').textContent    = '« ' + msg + ' »';
  bulle.style.setProperty('--pc', prof.couleur);
  bulle.style.display = 'flex';
  // reset animation
  bulle.classList.remove('prof-bulle-anim');
  void bulle.offsetWidth;
  bulle.classList.add('prof-bulle-anim');
}

// ── SYSTÈME XP ──
const XP_PAR_DIFFICULTE = { 1: 10, 2: 25, 3: 40 };

const PALIERS = [
  { min: 0,    niveau: 1, label: 'Débutant',  emoji: '🌱', couleur: '#64748b' },
  { min: 150,  niveau: 2, label: 'Apprenti',  emoji: '📖', couleur: '#3b82f6' },
  { min: 400,  niveau: 3, label: 'Confirmé',  emoji: '🎓', couleur: '#8b5cf6' },
  { min: 750,  niveau: 4, label: 'Expert',    emoji: '🏆', couleur: '#f59e0b' },
  { min: 1200, niveau: 5, label: 'Maître',    emoji: '👑', couleur: '#ef4444' }
];

function chargerXP() {
  try { return JSON.parse(localStorage.getItem('mathentrain_xp') || '{}'); }
  catch { return {}; }
}

function sauvegarderXP(data) {
  localStorage.setItem('mathentrain_xp', JSON.stringify(data));
}

function getXPTheme(theme) {
  return chargerXP()[theme] || 0;
}

function getPalier(xp) {
  let palier = PALIERS[0];
  for (const p of PALIERS) { if (xp >= p.min) palier = p; }
  return palier;
}

function getProchainPalier(xp) {
  for (const p of PALIERS) { if (xp < p.min) return p; }
  return null; // niveau max
}

function getPctXP(xp) {
  const actuel = getPalier(xp);
  const prochain = getProchainPalier(xp);
  if (!prochain) return 100;
  return Math.round(((xp - actuel.min) / (prochain.min - actuel.min)) * 100);
}

function ajouterXP(theme, gain) {
  const data = chargerXP();
  const avant = data[theme] || 0;
  const apres = avant + gain;
  data[theme] = apres;
  sauvegarderXP(data);
  return { avant, apres, gain, palierAvant: getPalier(avant), palierApres: getPalier(apres) };
}

function afficherGainXP(gain, vitesse, levelUp, palierApres) {
  // Badge flottant "+XP"
  const carte = document.querySelector('.carte-question');
  if (carte) {
    carte.style.position = 'relative';
    const el = document.createElement('div');
    el.className = 'xp-flottant';
    el.textContent = '+' + gain + ' XP' + (vitesse ? ' ' + vitesse : '');
    carte.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }

  // Notification level-up
  if (levelUp) {
    setTimeout(() => {
      document.getElementById('levelup-emoji').textContent = palierApres.emoji;
      document.getElementById('levelup-label').textContent = palierApres.label;
      const notif = document.getElementById('levelup-notif');
      notif.classList.add('visible');
      setTimeout(() => notif.classList.remove('visible'), 2800);
    }, 600);
  }
}

// ── XP AJUSTÉ AU TEMPS PAR QUESTION ──
function calculerXPQuestion(difficulte) {
  const base = XP_PAR_DIFFICULTE[difficulte];
  if (etat.mode !== 'examen' || tempsTotal <= 0) return { xp: base, vitesse: '' };
  const ratio = Math.max(0, tempsRestant) / tempsTotal;
  const xp = Math.round(base * (1 + ratio));
  let vitesse = '';
  if (ratio >= 0.75) vitesse = '⚡';
  else if (ratio >= 0.4) vitesse = '🕐';
  return { xp, vitesse, ratio };
}

// ── TEMPS DE SESSION ──
function formaterDuree(ms) {
  const totalSec = Math.floor(ms / 1000);
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  if (min === 0) return sec + 's';
  if (sec === 0) return min + 'min';
  return min + 'min ' + sec + 's';
}

// ── CHRONOMÈTRE ──
let tempsPersonnalise = 30; // durée choisie par l'élève (en secondes)
let timerInterval = null;
let tempsTotal = 30;
let tempsRestant = 30;

function changerTemps(delta) {
  tempsPersonnalise = Math.min(120, Math.max(5, tempsPersonnalise + delta));
  document.getElementById('chrono-valeur').textContent = tempsPersonnalise + 's';
}

function demarrerTimer(niveau) {
  arreterTimer();
  tempsTotal = tempsPersonnalise;
  tempsRestant = tempsTotal;
  mettreAJourTimer();
  timerInterval = setInterval(() => {
    tempsRestant--;
    mettreAJourTimer();
    if (tempsRestant <= 0) {
      arreterTimer();
      tempsEcoule();
    }
  }, 1000);
}

function arreterTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function mettreAJourTimer() {
  const secEl = document.getElementById('timer-secondes');
  const barreEl = document.getElementById('timer-barre');
  if (!secEl || !barreEl) return;

  secEl.textContent = tempsRestant + 's';
  const pct = (tempsRestant / tempsTotal) * 100;
  barreEl.style.width = pct + '%';

  if (pct > 50) {
    barreEl.className = 'timer-barre';
    secEl.className = 'timer-secondes';
  } else if (pct > 25) {
    barreEl.className = 'timer-barre moyen';
    secEl.className = 'timer-secondes';
  } else {
    barreEl.className = 'timer-barre urgent';
    secEl.className = 'timer-secondes urgence';
  }
}

function tempsEcoule() {
  if (etat.reponduA) return;
  etat.reponduA = true;
  etat.mauvaiesReponses++;
  document.getElementById('zone-passer').style.display = 'none';

  document.querySelectorAll('.btn-option').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === etat.questionCourante.answer) btn.classList.add('reveler');
  });

  const expli = document.getElementById('explication');
  expli.style.display = 'block';
  expli.className = 'boite-explication mauvaise';
  expli.innerHTML = `
    <strong>⏱ Temps écoulé !</strong>
    Bonne réponse : <strong>${etat.questionCourante.answer}</strong><br>
    ${etat.questionCourante.explication}
  `;

  // Message du prof virtuel (timeout)
  afficherMessageProf('timeout');

  // Suivi examen noté
  if (etat.mode === 'examen_note') {
    etat.reponsesExamen.push({ niveau: etat.niveauActuel, correct: false });
  }

  etat.niveauActuel = niveauApresReponse(false);
  etat.questionIndex++;

  const btnSuivant = document.getElementById('btn-suivant');
  btnSuivant.style.display = 'block';
  const finExamen     = etat.mode === 'examen'      && etat.questionIndex >= etat.totalQuestions;
  const finExamenNote = etat.mode === 'examen_note' && etat.questionIndex >= (etat.questionsFixees || []).length;
  btnSuivant.textContent = (finExamen || finExamenNote) ? 'Voir mes résultats →' : 'Question suivante →';
}

// ── NAVIGATION ──
function afficherEcran(id) {
  document.querySelectorAll('.ecran').forEach(e => e.classList.remove('actif'));
  document.getElementById(id).classList.add('actif');
}

// ── NIVEAU DE DÉPART SELON XP ──
function niveauDepartXP(theme) {
  const palier = getPalier(getXPTheme(theme));
  if (palier.niveau >= 4) return 3; // Expert/Maître → difficile
  if (palier.niveau >= 3) return 2; // Confirmé → moyen
  return 1;                         // Débutant/Apprenti → facile
}

// ── PLANCHER DE DIFFICULTÉ PAR CLASSE ──
const PLANCHER_CLASSE = { '6eme': 1, '5eme': 1, '4eme': 1, '3eme': 2 };

// ── PERF EXAMEN NOTÉ (localStorage) ──
function sauvegarderPerfExamen(themeId, parNiveau) {
  const data = {};
  [1, 2, 3].forEach(n => { if (parNiveau[n].t > 0) data[n] = parNiveau[n]; });
  localStorage.setItem('mathentrain_exam_perf_' + themeId, JSON.stringify({ data, ts: Date.now() }));
}

function chargerPerfExamen(themeId) {
  const raw = localStorage.getItem('mathentrain_exam_perf_' + themeId);
  return raw ? JSON.parse(raw) : null;
}

// Renvoie le niveau le plus bas où l'élève était faible (<50%), ou null si tout bon
function niveauFocusExamen(themeId) {
  const stored = chargerPerfExamen(themeId);
  if (!stored) return null;
  const data = stored.data;
  for (let n = 1; n <= 3; n++) {
    const s = data[n];
    if (s && s.t > 0 && s.b / s.t < 0.5) return n;
  }
  return null;
}

function niveauDepart(theme) {
  const parClasse = PLANCHER_CLASSE[niveauOuvert] || 1;
  const focus     = niveauFocusExamen(theme);
  if (focus !== null) {
    // Partir du niveau faible détecté par l'examen (jamais sous le plancher de classe)
    return Math.max(focus, parClasse);
  }
  const parXP = niveauDepartXP(theme);
  return Math.max(parXP, parClasse);
}

// ── CHOIX DU MODE ──
function choisirMode(mode) {
  etat.mode = mode;
  document.getElementById('btn-mode-examen').className = 'btn-mode' + (mode === 'examen' ? ' actif' : '');
  document.getElementById('btn-mode-libre').className  = 'btn-mode' + (mode === 'libre'  ? ' actif' : '');
  const picker = document.getElementById('chrono-picker');
  if (picker) picker.classList.toggle('visible', mode === 'examen');
}

// ── DÉMARRER UN THÈME ──
function choisirTheme(themeId) {
  etat.theme = themeId;
  const modeApercu = etat.mode === 'apercu';
  etat.niveauActuel = modeApercu ? 1 : niveauDepart(themeId);
  etat.focusNiveau  = (!modeApercu && etat.mode !== 'examen') ? niveauFocusExamen(themeId) : null;
  etat.questionIndex = 0;
  etat.bonnesReponses = 0;
  etat.mauvaiesReponses = 0;
  etat.questionsVues = { 1: [], 2: [], 3: [] };
  etat.reponduA = false;
  etat.xpGagneSession = 0;
  arreterTimer();

  const modeExamen = etat.mode === 'examen';

  document.getElementById('timer-zone').style.display             = modeExamen ? 'block' : 'none';
  document.getElementById('barre-progression-zone').style.display = modeExamen ? 'block' : 'none';
  document.getElementById('btn-terminer').style.display           = modeExamen ? 'none' : (modeApercu ? 'none' : 'inline-block');
  document.getElementById('zone-passer').style.display            = 'block';

  // Bouton retour selon le mode
  const btnRetour = document.getElementById('btn-retour-quiz');
  btnRetour.textContent = modeApercu ? '← Retour à l\'administration' : '← Choisir un autre thème';

  // Badge aperçu
  let badgeExist = document.getElementById('badge-apercu');
  if (modeApercu && !badgeExist) {
    const badge = document.createElement('div');
    badge.id = 'badge-apercu';
    badge.className = 'badge-apercu';
    badge.textContent = '👁 Mode aperçu — vous voyez le quiz comme un élève';
    document.getElementById('ecran-quiz').insertBefore(badge, document.getElementById('zone-passer'));
  } else if (!modeApercu && badgeExist) {
    badgeExist.remove();
  }

  etat.tempsDebut = Date.now();
  afficherEcran('ecran-quiz');
  poserQuestion();
}

// ── APERÇU ADMIN ──
function lancerPreview(themeId) {
  etat.mode = 'apercu';
  choisirTheme(themeId);
}

// ── DÉMARRER UN EXAMEN NOTÉ ──
function demarrerExamenNote(themeId) {
  etat.theme            = themeId;
  etat.mode             = 'examen_note';
  etat.questionIndex    = 0;
  etat.totalQuestions   = 10;
  etat.bonnesReponses   = 0;
  etat.mauvaiesReponses = 0;
  etat.questionsVues    = { 1: [], 2: [], 3: [] };
  etat.questionsFixees  = piocherQuestionsExamen(themeId);
  etat.reponsesExamen   = [];
  etat.reponduA         = false;
  etat.xpGagneSession   = 0;
  arreterTimer();

  document.getElementById('timer-zone').style.display             = 'none';
  document.getElementById('barre-progression-zone').style.display = 'block';
  document.getElementById('btn-terminer').style.display           = 'none';
  document.getElementById('zone-passer').style.display            = 'none';

  const btnRetour = document.getElementById('btn-retour-quiz');
  btnRetour.textContent = '← Choisir un autre thème';

  const badgeExist = document.getElementById('badge-apercu');
  if (badgeExist) badgeExist.remove();

  etat.tempsDebut = Date.now();
  afficherEcran('ecran-quiz');
  poserQuestion();
}

function passerQuestion() {
  if (etat.reponduA) return;
  arreterTimer();

  if (etat.mode === 'apercu') {
    etat.questionIndex++;
    poserQuestion();
    return;
  }

  // Pour les élèves : compte comme mauvaise réponse
  etat.reponduA = true;
  etat.mauvaiesReponses++;

  document.querySelectorAll('.btn-option').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === etat.questionCourante.answer) btn.classList.add('reveler');
  });

  const expli = document.getElementById('explication');
  expli.style.display = 'block';
  expli.className = 'boite-explication mauvaise';
  expli.innerHTML = `
    <strong>⏭ Question passée</strong>
    Bonne réponse : <strong>${etat.questionCourante.answer}</strong><br>
    ${etat.questionCourante.explication}
  `;

  etat.niveauActuel = niveauApresReponse(false);
  etat.questionIndex++;

  const btnSuivant = document.getElementById('btn-suivant');
  btnSuivant.style.display = 'block';
  const finExamen = etat.mode === 'examen' && etat.questionIndex >= etat.totalQuestions;
  btnSuivant.textContent = finExamen ? 'Voir mes résultats →' : 'Question suivante →';
}

function retourDepuisQuiz() {
  arreterTimer();
  if (etat.mode === 'apercu') {
    afficherEcran('ecran-admin');
  } else {
    afficherEcran('ecran-accueil');
  }
}

// ── LOGIQUE ADAPTATIVE ──
function piocherQuestion(niveau) {
  const pool = questionsBank[etat.theme][niveau];
  const dejaVues = etat.questionsVues[niveau];
  const disponibles = pool.filter((_, i) => !dejaVues.includes(i));

  // Si plus de questions à ce niveau, chercher aux niveaux adjacents
  if (disponibles.length === 0) {
    for (let delta of [1, -1, 2, -2]) {
      const niveauAlt = niveau + delta;
      if (niveauAlt >= 1 && niveauAlt <= 3) {
        const poolAlt = questionsBank[etat.theme][niveauAlt];
        const dispoAlt = poolAlt.filter((_, i) => !etat.questionsVues[niveauAlt].includes(i));
        if (dispoAlt.length > 0) {
          const idx = Math.floor(Math.random() * dispoAlt.length);
          const idxReel = poolAlt.indexOf(dispoAlt[idx]);
          etat.questionsVues[niveauAlt].push(idxReel);
          return { question: dispoAlt[idx], niveau: niveauAlt };
        }
      }
    }
    return null;
  }

  const idx = Math.floor(Math.random() * disponibles.length);
  const idxReel = pool.indexOf(disponibles[idx]);
  etat.questionsVues[niveau].push(idxReel);
  return { question: disponibles[idx], niveau };
}

function niveauApresReponse(correct) {
  if (correct) return Math.min(etat.niveauActuel + 1, 3);
  return Math.max(etat.niveauActuel - 1, 1);
}

// ── SÉLECTION DES QUESTIONS POUR L'EXAMEN NOTÉ ──
function piocherQuestionsExamen(themeId) {
  const theme = questionsBank[themeId];

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const pool1 = shuffle(theme[1] || []);
  const pool2 = shuffle(theme[2] || []);
  const pool3 = shuffle(theme[3] || []);

  const faciles = pool1.slice(0, 4).map(q => ({ question: q, niveau: 1 }));
  const moyens  = pool2.slice(0, 4).map(q => ({ question: q, niveau: 2 }));
  const durs    = pool3.slice(0, 2).map(q => ({ question: q, niveau: 3 }));

  // Ordre progressif : 2F 2M 2F 2M 2D
  return [
    ...faciles.slice(0, 2),
    ...moyens.slice(0, 2),
    ...faciles.slice(2, 4),
    ...moyens.slice(2, 4),
    ...durs
  ];
}

// ── AFFICHAGE QUESTION ──
function poserQuestion() {
  let resultat;

  if (etat.mode === 'examen_note') {
    if (etat.questionIndex >= etat.questionsFixees.length) {
      return afficherResultatsExamen();
    }
    resultat = etat.questionsFixees[etat.questionIndex];
  } else {
    resultat = piocherQuestion(etat.niveauActuel);
    if (!resultat) return afficherResultats();
  }

  etat.questionCourante = resultat.question;
  etat.niveauActuel = resultat.niveau;
  etat.reponduA = false;

  const themeData      = questionsBank[etat.theme];
  const modeExamen     = etat.mode === 'examen';
  const modeExamenNote = etat.mode === 'examen_note';
  const totalQuest     = modeExamenNote ? etat.questionsFixees.length : etat.totalQuestions;

  // Barre de progression
  if (modeExamen || modeExamenNote) {
    const pct = (etat.questionIndex / totalQuest) * 100;
    document.getElementById('barre-remplie').style.width = pct + '%';
  }

  document.getElementById('quiz-theme-nom').textContent = themeData.nom;
  document.getElementById('quiz-compteur').textContent = (modeExamen || modeExamenNote)
    ? `Question ${etat.questionIndex + 1} / ${totalQuest}`
    : `Question ${etat.questionIndex + 1}`;

  // Badge niveau
  const badge = document.getElementById('badge-niveau');
  const labels = { 1: '⭐ Niveau 1 — Facile', 2: '⭐⭐ Niveau 2 — Moyen', 3: '⭐⭐⭐ Niveau 3 — Difficile' };
  badge.textContent = labels[etat.niveauActuel];
  badge.className = 'badge-niveau niveau-' + etat.niveauActuel;

  // Bandeau focus examen (1ère question uniquement)
  let bandeauFocus = document.getElementById('bandeau-focus');
  if (etat.focusNiveau && etat.questionIndex === 0) {
    if (!bandeauFocus) {
      bandeauFocus = document.createElement('div');
      bandeauFocus.id = 'bandeau-focus';
      bandeauFocus.className = 'bandeau-focus';
      document.getElementById('badge-niveau').insertAdjacentElement('afterend', bandeauFocus);
    }
    bandeauFocus.innerHTML = `📊 D'après ton dernier examen, on commence par renforcer le <strong>${labels[etat.focusNiveau]}</strong>`;
    bandeauFocus.style.display = 'block';
  } else if (bandeauFocus) {
    bandeauFocus.style.display = 'none';
  }

  // Question
  document.getElementById('texte-question').textContent = etat.questionCourante.question;

  // Réinitialiser explication, bulle prof et bouton
  const expli = document.getElementById('explication');
  expli.style.display = 'none';
  expli.className = 'boite-explication';
  document.getElementById('prof-bulle').style.display = 'none';
  document.getElementById('btn-suivant').style.display = 'none';

  const estDictee = etat.questionCourante.type === 'dictee';

  // Zone dictée
  const zoneDictee = document.getElementById('zone-dictee');
  if (estDictee) {
    // Préparer la dictée
    dicteeTexte  = etat.questionCourante.texte;
    dicteeEcoute = false;
    document.getElementById('options').innerHTML = '';
    document.getElementById('dictee-input').value = '';
    document.getElementById('dictee-input').style.display = 'none';
    document.getElementById('dictee-input').disabled = false;
    document.getElementById('btn-valider-dictee').style.display = 'none';
    document.getElementById('dictee-resultat').innerHTML = '';
    document.getElementById('btn-ecouter').disabled = false;
    document.getElementById('btn-ecouter').textContent = '🔊 Écouter la phrase';
    zoneDictee.style.display = 'block';
  } else {
    zoneDictee.style.display = 'none';
    // Options mélangées
    const opts = [...etat.questionCourante.options].sort(() => Math.random() - 0.5);
    const conteneur = document.getElementById('options');
    conteneur.innerHTML = '';
    opts.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'btn-option';
      btn.textContent = opt;
      btn.onclick = () => repondre(opt, btn);
      conteneur.appendChild(btn);
    });
  }

  // Réafficher le bouton passer (pas en examen noté)
  document.getElementById('zone-passer').style.display = modeExamenNote ? 'none' : 'block';

  // Lancer le chrono en mode examen (pas en examen noté) — pas en dictée
  if (modeExamen && !estDictee) demarrerTimer(etat.niveauActuel);
}

// ── RÉPONSE ──
function repondre(choix, btnClique) {
  if (etat.reponduA) return;
  etat.reponduA = true;
  arreterTimer();
  document.getElementById('zone-passer').style.display = 'none';

  const correct = choix === etat.questionCourante.answer;

  // Colorer les options
  document.querySelectorAll('.btn-option').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === etat.questionCourante.answer) btn.classList.add('reveler');
  });

  if (correct) {
    btnClique.classList.add('correcte');
    etat.bonnesReponses++;
    const { xp: xpGain, vitesse } = calculerXPQuestion(etat.niveauActuel);
    const resultatXP = ajouterXP(etat.theme, xpGain);
    etat.xpGagneSession += xpGain;
    const levelUp = resultatXP.palierApres.niveau > resultatXP.palierAvant.niveau;
    afficherGainXP(xpGain, vitesse, levelUp, resultatXP.palierApres);
  } else {
    btnClique.classList.add('incorrecte');
    etat.mauvaiesReponses++;
  }

  // Explication
  const expli = document.getElementById('explication');
  expli.style.display = 'block';
  expli.className = 'boite-explication ' + (correct ? 'bonne' : 'mauvaise');
  expli.innerHTML = `
    <strong>${correct ? '✓ Bonne réponse !' : '✗ Mauvaise réponse'}</strong>
    ${etat.questionCourante.explication}
  `;

  // Message du prof virtuel
  afficherMessageProf(correct ? 'correct' : 'incorrect');

  // Suivi examen noté
  if (etat.mode === 'examen_note') {
    etat.reponsesExamen.push({ niveau: etat.niveauActuel, correct });
  }

  etat.niveauActuel = niveauApresReponse(correct);
  etat.questionIndex++;

  const btnSuivant = document.getElementById('btn-suivant');
  btnSuivant.style.display = 'block';
  const finExamen     = etat.mode === 'examen'      && etat.questionIndex >= etat.totalQuestions;
  const finExamenNote = etat.mode === 'examen_note' && etat.questionIndex >= (etat.questionsFixees || []).length;
  btnSuivant.textContent = (finExamen || finExamenNote) ? 'Voir mes résultats →' : 'Question suivante →';
}

// ── RÉSULTATS ──
function afficherResultats() {
  afficherEcran('ecran-resultat');

  const total = etat.bonnesReponses + etat.mauvaiesReponses;
  const pct = total > 0 ? Math.round((etat.bonnesReponses / total) * 100) : 0;

  document.getElementById('score-chiffre').textContent = pct + '%';
  document.getElementById('nb-bonnes').textContent = etat.bonnesReponses;
  document.getElementById('nb-mauvaises').textContent = etat.mauvaiesReponses;
  document.getElementById('temps-ecoule').textContent = etat.tempsDebut ? formaterDuree(Date.now() - etat.tempsDebut) : '—';

  const p = prenomEleve ? ` ${prenomEleve}` : '';
  let message, sousmsg;
  if (pct >= 80) {
    message = `Excellent travail${p} ! 🎉`;
    sousmsg = 'Tu maîtrises bien ce thème. Continue comme ça !';
  } else if (pct >= 60) {
    message = `Bien joué${p} !`;
    sousmsg = 'Tu progresses bien. Entraîne-toi encore pour consolider.';
  } else if (pct >= 40) {
    message = 'Pas mal, mais continue !';
    sousmsg = 'Certaines notions méritent d\'être revues. Réessaie !';
  } else {
    message = 'Il faut s\'entraîner davantage.';
    sousmsg = `Ne te décourage pas${p}, recommence pour progresser !`;
  }

  document.getElementById('message-resultat').textContent = message;
  document.getElementById('sous-message').textContent = sousmsg;
  document.getElementById('nom-theme-fin').textContent = questionsBank[etat.theme].nom;

  // ── Résumé vitesse session (mode examen) ──
  const vitesseZone = document.getElementById('vitesse-zone');
  vitesseZone.style.display = 'none';

  if (etat.mode === 'examen' && etat.tempsDebut && etat.bonnesReponses > 0) {
    const xpBase = Object.values(XP_PAR_DIFFICULTE).reduce((a,b) => a + b, 0); // max théorique indicatif
    const xpMoyParBonne = Math.round(etat.xpGagneSession / etat.bonnesReponses);
    const xpBaseRef = XP_PAR_DIFFICULTE[1]; // base niveau 1
    let vitesseLabel = '', vitesseDetail = '';
    if (xpMoyParBonne >= xpBaseRef * 1.7) { vitesseLabel = '⚡ Réponses très rapides !'; vitesseDetail = 'XP bonus ×2 sur la plupart des questions'; }
    else if (xpMoyParBonne >= xpBaseRef * 1.3) { vitesseLabel = '🕐 Bonne vitesse'; vitesseDetail = 'Tu as répondu dans les délais'; }
    else { vitesseLabel = '🐢 Réponses lentes'; vitesseDetail = 'Réponds plus vite pour gagner plus de XP'; }

    vitesseZone.style.display = 'flex';
    document.getElementById('vitesse-label').textContent = vitesseLabel;
    document.getElementById('vitesse-xp').textContent = vitesseDetail;
  }

  // ── XP résultats ──
  const xpActuel = getXPTheme(etat.theme);
  const palier = getPalier(xpActuel);
  const prochain = getProchainPalier(xpActuel);
  const pctXP = getPctXP(xpActuel);

  document.getElementById('xp-session-nb').textContent = etat.xpGagneSession;
  document.getElementById('xp-niveau-resultat').textContent =
    `${palier.emoji} ${questionsBank[etat.theme].nom} — Niveau ${palier.niveau} : ${palier.label}`;
  document.getElementById('xp-barre-resultat').style.width = pctXP + '%';
  document.getElementById('xp-barre-resultat').style.background = palier.couleur;
  document.getElementById('xp-progression-texte').textContent = prochain
    ? `${xpActuel} / ${prochain.min} XP → ${prochain.emoji} ${prochain.label}`
    : `${xpActuel} XP · Niveau maximum atteint 👑`;
}

// ── BOUTON SUIVANT — DISPATCHER ──
function btnSuivantClick() {
  if (etat.mode === 'examen_note' && etat.questionIndex >= (etat.questionsFixees || []).length) {
    afficherResultatsExamen();
  } else if (etat.mode === 'examen' && etat.questionIndex >= etat.totalQuestions) {
    afficherResultats();
  } else {
    poserQuestion();
  }
}

// ── RÉSULTATS EXAMEN NOTÉ ──
function afficherResultatsExamen() {
  afficherEcran('ecran-examen-resultat');

  const reponses = etat.reponsesExamen;
  const total    = reponses.length || 10;
  const bonnes   = reponses.filter(r => r.correct).length;
  const noteRaw  = (bonnes / total) * 20;
  const note     = Math.round(noteRaw * 10) / 10;

  // Mention
  let mention, mentionCouleur;
  if      (note >= 18) { mention = 'Très bien 🏆';   mentionCouleur = '#16a34a'; }
  else if (note >= 14) { mention = 'Bien 🎓';          mentionCouleur = '#4f46e5'; }
  else if (note >= 12) { mention = 'Assez bien 📖';   mentionCouleur = '#3b82f6'; }
  else if (note >= 10) { mention = 'Passable ✓';      mentionCouleur = '#f59e0b'; }
  else                 { mention = 'Insuffisant ✗';   mentionCouleur = '#ef4444'; }

  document.getElementById('exam-note-chiffre').textContent = note.toFixed(1);
  const mentionEl = document.getElementById('exam-mention');
  mentionEl.textContent  = mention;
  mentionEl.style.color  = mentionCouleur;
  document.getElementById('exam-theme-nom').textContent = questionsBank[etat.theme].nom;
  document.getElementById('exam-temps').textContent     = etat.tempsDebut
    ? formaterDuree(Date.now() - etat.tempsDebut) : '—';

  // Stats par niveau
  const parNiveau = { 1: { b: 0, t: 0 }, 2: { b: 0, t: 0 }, 3: { b: 0, t: 0 } };
  reponses.forEach(r => {
    parNiveau[r.niveau].t++;
    if (r.correct) parNiveau[r.niveau].b++;
  });

  const labelsNiv = { 1: '⭐ Facile', 2: '⭐⭐ Moyen', 3: '⭐⭐⭐ Difficile' };
  const statsHTML = [1, 2, 3].map(n => {
    const s = parNiveau[n];
    if (s.t === 0) return '';
    const pct = Math.round((s.b / s.t) * 100);
    const col = pct >= 50 ? '#22c55e' : '#ef4444';
    return `
      <div class="exam-stat-ligne">
        <span class="exam-stat-label">${labelsNiv[n]}</span>
        <div class="exam-stat-barre-fond">
          <div class="exam-stat-barre" style="width:${pct}%;background:${col}"></div>
        </div>
        <span class="exam-stat-score" style="color:${col}">${s.b}/${s.t}</span>
      </div>`;
  }).join('');
  document.getElementById('exam-stats-niveaux').innerHTML = statsHTML;

  // Points forts et faibles
  const forts = [], faibles = [];
  [1, 2, 3].forEach(n => {
    const s = parNiveau[n];
    if (s.t === 0) return;
    (s.b / s.t >= 0.5 ? forts : faibles).push(labelsNiv[n]);
  });

  document.getElementById('exam-points-forts').innerHTML = forts.length
    ? forts.map(f => `<span class="exam-tag fort">${f}</span>`).join('')
    : '<span class="exam-tag neutre">Aucun pour l\'instant</span>';

  document.getElementById('exam-points-faibles').innerHTML = faibles.length
    ? faibles.map(f => `<span class="exam-tag faible">${f}</span>`).join('')
    : '<span class="exam-tag neutre">Aucun — excellent résultat !</span>';

  // Sauvegarder la perf par niveau pour influencer les exercices libres
  sauvegarderPerfExamen(etat.theme, parNiveau);
}

function rejouer() {
  choisirTheme(etat.theme);
}

function retourAccueil() {
  chapitreOuvert     = null;
  sousChapitreOuvert = null;
  afficherEcran('ecran-accueil');
  renderAccueil();
}

// ── NAVIGATION LANDING ──
function allerEleveAccueil() {
  niveauOuvert  = null;
  matiereOuverte = null;
  afficherEcran('ecran-accueil');
  renderAccueil();
}

function allerAdminLogin() {
  document.getElementById('input-mdp').value = '';
  document.getElementById('erreur-mdp').style.display = 'none';
  afficherEcran('ecran-admin-login');
}

// ── ADMIN — AUTHENTIFICATION ──
const MOT_DE_PASSE_ADMIN = 'admin123';

function verifierMdp() {
  const saisi = document.getElementById('input-mdp').value;
  if (saisi === MOT_DE_PASSE_ADMIN) {
    afficherEcran('ecran-admin');
    construireAdminPanel();
  } else {
    document.getElementById('erreur-mdp').style.display = 'block';
    document.getElementById('input-mdp').value = '';
    document.getElementById('input-mdp').focus();
  }
}

function deconnecterAdmin() {
  afficherEcran('ecran-landing');
}

// ── ADMIN — PANEL ──
let adminNiveauOuvert   = null;
let adminMatiereOuverte = null;
let adminChapitreOuvert = null;

// ── VISIBILITÉ CHAPITRES (admin) ──
function chargerChapitresCaches() {
  const raw = localStorage.getItem('mathentrain_chapitres_caches');
  return raw ? JSON.parse(raw) : [];
}
function sauvegarderChapitresCaches(ids) {
  localStorage.setItem('mathentrain_chapitres_caches', JSON.stringify(ids));
}
function estChapitreCache(id) {
  return chargerChapitresCaches().includes(id);
}
function basculerVisibiliteChapitre(id) {
  const caches = chargerChapitresCaches();
  const idx = caches.indexOf(id);
  if (idx === -1) caches.push(id); else caches.splice(idx, 1);
  sauvegarderChapitresCaches(caches);
  renderAdminNav();
}

function construireAdminPanel() {
  adminNiveauOuvert   = null;
  adminMatiereOuverte = null;
  adminChapitreOuvert = null;
  renderAdminNav();
}

function renderAdminNav() {
  const breadcrumb = document.getElementById('admin-onglets');
  const contenu    = document.getElementById('admin-contenu');
  breadcrumb.innerHTML = '';
  contenu.innerHTML    = '';

  // ── Niveau 1 : NIVEAUX ──
  if (adminNiveauOuvert === null) {
    breadcrumb.innerHTML = '<span class="admin-bc-label">Choisissez un niveau scolaire</span>';

    const grille = document.createElement('div');
    grille.className = 'grille-niveaux';

    NIVEAUX.forEach(niv => {
      const carte = document.createElement('div');
      carte.className = 'carte-niveau';
      carte.style.setProperty('--c', niv.couleur);
      const nbMat = MATIERES.filter(m => niv.matieres.includes(m.id)).length;
      carte.innerHTML = `
        <span class="niveau-emoji">${niv.emoji}</span>
        <span class="niveau-label">${niv.nom}</span>
        <p class="niveau-nb">${nbMat} matière${nbMat > 1 ? 's' : ''}</p>
      `;
      carte.addEventListener('mouseenter', () => carte.style.borderColor = niv.couleur);
      carte.addEventListener('mouseleave', () => carte.style.borderColor = niv.couleur + '44');
      carte.onclick = () => { adminNiveauOuvert = niv.id; renderAdminNav(); };
      grille.appendChild(carte);
    });

    // Carte "Tous les chapitres"
    const carteTous = document.createElement('div');
    carteTous.className = 'carte-niveau';
    carteTous.style.setProperty('--c', '#64748b');
    carteTous.innerHTML = `
      <span class="niveau-emoji">📦</span>
      <span class="niveau-label">Tous les chapitres</span>
      <p class="niveau-nb">${Object.keys(questionsBank).length} chapitres</p>
    `;
    carteTous.addEventListener('mouseenter', () => carteTous.style.borderColor = '#64748b');
    carteTous.addEventListener('mouseleave', () => carteTous.style.borderColor = '#64748b44');
    carteTous.onclick = () => { adminNiveauOuvert = '__tous__'; renderAdminNav(); };
    grille.appendChild(carteTous);

    contenu.appendChild(grille);

  // ── Niveau 2 : MATIÈRES ou liste complète ──
  } else if (adminMatiereOuverte === null) {

    if (adminNiveauOuvert === '__tous__') {
      // Tous les chapitres en une grille directe
      breadcrumb.innerHTML = `
        <button class="admin-bc-btn" onclick="adminNiveauOuvert=null;renderAdminNav()">← Niveaux</button>
        <span class="admin-bc-sep">›</span>
        <span class="admin-bc-courant">Tous les chapitres</span>
      `;
      const grille = document.createElement('div');
      grille.className = 'grille-themes';
      Object.keys(questionsBank).forEach(id => {
        const th = questionsBank[id];
        const total = (th[1]?.length || 0) + (th[2]?.length || 0) + (th[3]?.length || 0);
        const carte = document.createElement('div');
        carte.className = 'carte-theme admin-carte-chapitre';
        carte.style.setProperty('--tc', th.couleur || '#4f46e5');
        carte.innerHTML = `
          <span class="theme-emoji">${th.emoji || '📄'}</span>
          <h3 class="theme-titre">${th.nom}</h3>
          <p class="theme-nb-questions">${total} questions</p>
        `;
        carte.onclick = () => { adminChapitreOuvert = id; adminMatiereOuverte = '__tous__'; renderAdminNav(); };
        grille.appendChild(carte);
      });
      contenu.appendChild(grille);

    } else {
      // Matières du niveau choisi
      const niv = NIVEAUX.find(n => n.id === adminNiveauOuvert);
      breadcrumb.innerHTML = `
        <button class="admin-bc-btn" onclick="adminNiveauOuvert=null;renderAdminNav()">← Niveaux</button>
        <span class="admin-bc-sep">›</span>
        <span class="admin-bc-courant">${niv.emoji} ${niv.nom}</span>
      `;
      const matieresFiltrees = MATIERES.filter(m => niv.matieres.includes(m.id));
      const grille = document.createElement('div');
      grille.className = 'grille-matieres';
      matieresFiltrees.forEach(mat => {
        const chaps = (mat.chapitresParNiveau && mat.chapitresParNiveau[adminNiveauOuvert]) || mat.chapitres;
        const carte = document.createElement('div');
        carte.className = 'carte-matiere';
        carte.style.setProperty('--mc', mat.couleur);
        carte.innerHTML = `
          <span class="matiere-emoji">${mat.emoji}</span>
          <h3 class="matiere-nom">${mat.nom}</h3>
          <p class="matiere-nb">${chaps.length} chapitre${chaps.length > 1 ? 's' : ''}</p>
        `;
        carte.addEventListener('mouseenter', () => carte.style.borderColor = mat.couleur);
        carte.addEventListener('mouseleave', () => carte.style.borderColor = mat.couleur + '44');
        carte.onclick = () => { adminMatiereOuverte = mat.id; renderAdminNav(); };
        grille.appendChild(carte);
      });
      contenu.appendChild(grille);
    }

  // ── Niveau 3 : CHAPITRES ──
  } else if (adminChapitreOuvert === null) {
    const niv = NIVEAUX.find(n => n.id === adminNiveauOuvert);
    const mat = MATIERES.find(m => m.id === adminMatiereOuverte);
    breadcrumb.innerHTML = `
      <button class="admin-bc-btn" onclick="adminNiveauOuvert=null;renderAdminNav()">← Niveaux</button>
      <span class="admin-bc-sep">›</span>
      <button class="admin-bc-btn" onclick="adminMatiereOuverte=null;renderAdminNav()">${niv.emoji} ${niv.nom}</button>
      <span class="admin-bc-sep">›</span>
      <span class="admin-bc-courant">${mat.emoji} ${mat.nom}</span>
    `;
    const chapitres = (mat.chapitresParNiveau && mat.chapitresParNiveau[adminNiveauOuvert]) || mat.chapitres;
    const grille = document.createElement('div');
    grille.className = 'grille-themes';
    chapitres.forEach(id => {
      const th = questionsBank[id];
      if (!th) return;
      const total = (th[1]?.length || 0) + (th[2]?.length || 0) + (th[3]?.length || 0);
      const cache = estChapitreCache(id);
      const carte = document.createElement('div');
      carte.className = 'carte-theme admin-carte-chapitre' + (cache ? ' chapitre-cache' : '');
      carte.style.setProperty('--tc', th.couleur || mat.couleur);
      carte.innerHTML = `
        <span class="theme-emoji">${th.emoji || mat.emoji}</span>
        <h3 class="theme-titre">${th.nom}</h3>
        <p class="theme-nb-questions">${total} questions · ${th[1]?.length || 0}F / ${th[2]?.length || 0}M / ${th[3]?.length || 0}D</p>
        <span class="chapitre-visibilite-badge">${cache ? '🙈 Caché aux élèves' : '👁 Visible'}</span>
      `;
      // Clic sur la carte → ouvrir le chapitre
      carte.onclick = () => { adminChapitreOuvert = id; renderAdminNav(); };
      // Bouton bascule visibilité (stoppe la propagation)
      const btnToggle = document.createElement('button');
      btnToggle.className = 'btn-toggle-visibilite';
      btnToggle.textContent = cache ? '✅ Afficher' : '🙈 Cacher';
      btnToggle.onclick = (e) => { e.stopPropagation(); basculerVisibiliteChapitre(id); };
      carte.appendChild(btnToggle);
      grille.appendChild(carte);
    });
    contenu.appendChild(grille);

  // ── Niveau 4 : QUESTIONS ──
  } else {
    const niv = adminNiveauOuvert === '__tous__' ? null : NIVEAUX.find(n => n.id === adminNiveauOuvert);
    const mat = adminMatiereOuverte === '__tous__' ? null : MATIERES.find(m => m.id === adminMatiereOuverte);
    const theme = questionsBank[adminChapitreOuvert];

    breadcrumb.innerHTML = `
      <button class="admin-bc-btn" onclick="adminNiveauOuvert=null;renderAdminNav()">← Niveaux</button>
      <span class="admin-bc-sep">›</span>
      ${niv ? `<button class="admin-bc-btn" onclick="adminMatiereOuverte=null;renderAdminNav()">${niv.emoji} ${niv.nom}</button><span class="admin-bc-sep">›</span>` : ''}
      ${mat ? `<button class="admin-bc-btn" onclick="adminChapitreOuvert=null;renderAdminNav()">${mat.emoji} ${mat.nom}</button><span class="admin-bc-sep">›</span>` : ''}
      <span class="admin-bc-courant">${theme.emoji || ''} ${theme.nom}</span>
      <button class="btn-apercu-admin" onclick="lancerPreview('${adminChapitreOuvert}')">👁 Prévisualiser</button>
    `;

    const labelsNiveau = {
      1: { label: '⭐ Niveau 1 — Facile', classe: 'niv-1' },
      2: { label: '⭐⭐ Niveau 2 — Moyen', classe: 'niv-2' },
      3: { label: '⭐⭐⭐ Niveau 3 — Difficile', classe: 'niv-3' }
    };

    [1, 2, 3].forEach(niv => {
      const questions = theme[niv] || [];
      const info = labelsNiveau[niv];
      const bloc = document.createElement('div');
      bloc.className = 'bloc-niveau';
      const header = document.createElement('div');
      header.className = 'bloc-niveau-header ' + info.classe;
      header.innerHTML = `${info.label}<span class="compteur-questions">${questions.length} question${questions.length > 1 ? 's' : ''}</span>`;
      bloc.appendChild(header);
      const liste = document.createElement('div');
      liste.className = 'liste-questions';
      questions.forEach((q, i) => {
        const ligne = document.createElement('div');
        ligne.className = 'ligne-question';
        ligne.innerHTML = `
          <span class="q-numero">${i + 1}.</span>
          <div class="q-corps">
            <div class="q-texte">${q.question}</div>
            <div class="q-options">
              ${(q.options || []).map(opt => `
                <span class="q-option ${opt === q.answer ? 'bonne-rep' : ''}">
                  ${opt === q.answer ? '✓ ' : ''}${opt}
                </span>
              `).join('')}
            </div>
            <div class="q-explication">${q.explication}</div>
          </div>
        `;
        liste.appendChild(ligne);
      });
      bloc.appendChild(liste);
      contenu.appendChild(bloc);
    });
  }
}

// ── HIÉRARCHIE : NIVEAUX → MATIÈRES → CHAPITRES ──
const MATIERES = [
  { id: 'maths',    nom: 'Mathématiques',  emoji: '📐', couleur: '#4f46e5',
    chapitres: ['fractions', 'pourcentages', 'equations', 'geometrie'],
    chapitresParNiveau: {
      '6eme': ['maths6Nombres', 'maths6Geometrie', 'maths6Grandeurs', 'maths6Proportionnalite']
    }
  },
  { id: 'francais', nom: 'Français',        emoji: '📝', couleur: '#16a34a',
    chapitres: ['francais', 'francaisConjugaison', 'francaisLitterature'],
    chapitresParNiveau: {
      '6eme': ['francais6Lecture', 'francais6Ecriture', 'francais6Grammaire', 'francais6Conjugaison', 'francais6Orthographe', 'francais6Vocabulaire', 'francais6Dictee'],
      '5eme': ['francais5Lecture', 'francais5Ecriture', 'francais5Grammaire', 'francais5Conjugaison', 'francais5Orthographe', 'francais5Vocabulaire', 'francais5Dictee']
    }
  },
  { id: 'svt',      nom: 'SVT',             emoji: '🌿', couleur: '#15803d',
    chapitres: ['svt', 'svtEcologie', 'svtGenetique'] },
  { id: 'physique', nom: 'Physique-Chimie', emoji: '⚗️', couleur: '#dc2626',
    chapitres: ['physiqueChimie', 'chimie', 'physiqueEnergie'] },
  { id: 'histoire', nom: 'Histoire',        emoji: '🏛️', couleur: '#b45309',
    chapitres: ['histoire', 'histoireAncienne', 'histoireModerne'] },
  { id: 'anglais',  nom: 'Anglais',         emoji: '💬', couleur: '#1d4ed8',
    chapitres: ['anglaisVocab', 'anglasCivilisation', 'anglais'] },
];

const NIVEAUX = [
  { id: '6eme', nom: '6ème', emoji: '📗', couleur: '#4f46e5',
    matieres: ['maths', 'francais', 'svt', 'histoire', 'anglais'] },
  { id: '5eme', nom: '5ème', emoji: '📘', couleur: '#0d9488',
    matieres: ['maths', 'francais', 'svt', 'physique', 'histoire', 'anglais'] },
  { id: '4eme', nom: '4ème', emoji: '📙', couleur: '#f59e0b',
    matieres: ['maths', 'francais', 'svt', 'physique', 'histoire', 'anglais'] },
  { id: '3eme', nom: '3ème', emoji: '📕', couleur: '#ef4444',
    matieres: ['maths', 'francais', 'svt', 'physique', 'histoire', 'anglais'] },
];

let niveauOuvert      = null;
let matiereOuverte    = null;
let chapitreOuvert    = null;
let sousChapitreOuvert = null; // ID effectif passé à choisirTheme (null = pas encore choisi)

function renderAccueil() {
  const grille     = document.getElementById('grille-themes');
  const breadcrumb = document.getElementById('breadcrumb-zone');
  const titre      = document.getElementById('accueil-titre');
  const sousTitre  = document.getElementById('accueil-sous-titre');
  grille.innerHTML    = '';
  breadcrumb.innerHTML = '';

  // ── Niveau 1 : NIVEAUX SCOLAIRES ──
  if (niveauOuvert === null) {
    breadcrumb.style.display = 'none';
    titre.textContent     = 'Choisis ton niveau';
    sousTitre.textContent = 'Sélectionne d\'abord ton mode d\'entraînement';
    grille.className      = 'grille-niveaux';

    NIVEAUX.forEach(niv => {
      const nb    = niv.matieres.length;
      const carte = document.createElement('div');
      carte.className = 'carte-niveau';
      carte.style.setProperty('--c', niv.couleur);
      carte.innerHTML = `
        <span class="niveau-emoji">${niv.emoji}</span>
        <span class="niveau-label">${niv.nom}</span>
        <p class="niveau-nb">${nb} matière${nb > 1 ? 's' : ''}</p>
      `;
      carte.addEventListener('mouseenter', () => carte.style.borderColor = niv.couleur);
      carte.addEventListener('mouseleave', () => carte.style.borderColor = niv.couleur + '44');
      carte.onclick = () => ouvrirNiveau(niv.id);
      grille.appendChild(carte);
    });

  // ── Niveau 2 : MATIÈRES (dossiers) ──
  } else if (matiereOuverte === null) {
    const niv = NIVEAUX.find(n => n.id === niveauOuvert);
    const matieresFiltrees = MATIERES.filter(m => niv.matieres.includes(m.id));

    breadcrumb.style.display = 'flex';
    breadcrumb.innerHTML = `
      <button class="breadcrumb-retour" onclick="retourNiveaux()">🎓 Tous les niveaux</button>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-courant">${niv.nom}</span>
    `;
    titre.textContent     = niv.nom;
    sousTitre.textContent = 'Choisis une matière';
    grille.className      = 'grille-matieres';

    matieresFiltrees.forEach(mat => {
      const chapitresAffichés = (mat.chapitresParNiveau && mat.chapitresParNiveau[niveauOuvert]) || mat.chapitres;
      const nb    = chapitresAffichés.length;
      const carte = document.createElement('div');
      carte.className = 'carte-matiere';
      carte.style.setProperty('--c', mat.couleur);
      carte.innerHTML = `
        <div class="matiere-onglet" style="background:${mat.couleur}"></div>
        <div class="matiere-corps">
          <span class="matiere-emoji">${mat.emoji}</span>
          <h3 class="matiere-nom">${mat.nom}</h3>
          <p class="matiere-nb">${nb} chapitre${nb > 1 ? 's' : ''}</p>
        </div>
      `;
      carte.addEventListener('mouseenter', () => carte.style.borderColor = mat.couleur);
      carte.addEventListener('mouseleave', () => carte.style.borderColor = mat.couleur + '44');
      carte.onclick = () => ouvrirMatiere(mat.id);
      grille.appendChild(carte);
    });

  // ── Niveau 3 : CHAPITRES (fichiers) ──
  } else if (chapitreOuvert === null) {
    const niv = NIVEAUX.find(n => n.id === niveauOuvert);
    const mat = MATIERES.find(m => m.id === matiereOuverte);

    breadcrumb.style.display = 'flex';
    breadcrumb.innerHTML = `
      <button class="breadcrumb-retour" onclick="retourNiveaux()">🎓 Tous les niveaux</button>
      <span class="breadcrumb-sep">›</span>
      <button class="breadcrumb-retour" onclick="retourMatieres()">${niv.nom}</button>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-courant">${mat.nom}</span>
    `;
    titre.textContent     = mat.nom;
    sousTitre.textContent = 'Choisis un chapitre à entraîner';
    grille.className      = 'grille-themes';

    const chapitres = ((mat.chapitresParNiveau && mat.chapitresParNiveau[niveauOuvert]) || mat.chapitres)
      .filter(id => !estChapitreCache(id));
    chapitres.forEach(themeId => {
      const theme = questionsBank[themeId];
      if (!theme) return;

      const xp     = getXPTheme(themeId);
      const palier = getPalier(xp);
      const pct    = getPctXP(xp);

      const carte = document.createElement('div');
      carte.className = 'carte-theme carte-chapitre';
      carte.style.borderColor = theme.couleur + '33';
      carte.innerHTML = `
        <span class="chapitre-icone">📄</span>
        <span class="emoji">${theme.emoji}</span>
        <h3>${theme.nom}</h3>
        <div class="xp-carte">
          <div class="xp-niveau-info">
            <span class="xp-niveau-badge">${palier.emoji} Niv.${palier.niveau} · ${palier.label}</span>
            <span class="xp-montant">${xp} XP</span>
          </div>
          <div class="xp-barre-fond">
            <div class="xp-barre" style="width:${pct}%; background:${palier.couleur}"></div>
          </div>
        </div>
      `;
      carte.addEventListener('mouseenter', () => carte.style.borderColor = theme.couleur);
      carte.addEventListener('mouseleave', () => carte.style.borderColor = theme.couleur + '33');
      carte.onclick = () => ouvrirChapitre(themeId);
      grille.appendChild(carte);
    });

  // ── Niveau 3.5 : SOUS-CHAPITRES ──
  } else if (sousChapitreOuvert === null && questionsBank[chapitreOuvert]?.sousChapitres?.length > 0) {
    const niv    = NIVEAUX.find(n => n.id === niveauOuvert);
    const mat    = MATIERES.find(m => m.id === matiereOuverte);
    const chap   = questionsBank[chapitreOuvert];

    breadcrumb.style.display = 'flex';
    breadcrumb.innerHTML = `
      <button class="breadcrumb-retour" onclick="retourNiveaux()">🎓 Tous les niveaux</button>
      <span class="breadcrumb-sep">›</span>
      <button class="breadcrumb-retour" onclick="retourMatieres()">${niv.nom}</button>
      <span class="breadcrumb-sep">›</span>
      <button class="breadcrumb-retour" onclick="retourChapitres()">${mat.nom}</button>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-courant">${chap.emoji} ${chap.nom}</span>
    `;
    titre.textContent     = chap.nom;
    sousTitre.textContent = 'Choisis un sous-chapitre ou entraîne-toi sur tout';
    grille.className      = 'grille-sous-chapitres';

    // Carte « Tout le chapitre »
    const carteTout = document.createElement('div');
    carteTout.className = 'carte-sous-chapitre carte-tout-chapitre';
    carteTout.style.setProperty('--sc', chap.couleur || '#4f46e5');
    const totalQ = (chap[1]?.length||0)+(chap[2]?.length||0)+(chap[3]?.length||0);
    carteTout.innerHTML = `
      <span class="sous-chap-emoji">📚</span>
      <h3 class="sous-chap-titre">Tout le chapitre</h3>
      <p class="sous-chap-desc">${totalQ} questions — tous les sujets mélangés</p>
    `;
    carteTout.onclick = () => ouvrirSousChapitre(chapitreOuvert);
    grille.appendChild(carteTout);

    // Cartes sous-chapitres
    chap.sousChapitres.forEach(scId => {
      const sc = questionsBank[scId];
      if (!sc) return;
      const nbQ = (sc[1]?.length||0)+(sc[2]?.length||0)+(sc[3]?.length||0);
      const carte = document.createElement('div');
      carte.className = 'carte-sous-chapitre';
      carte.style.setProperty('--sc', sc.couleur || chap.couleur || '#4f46e5');
      carte.innerHTML = `
        <span class="sous-chap-emoji">${sc.emoji}</span>
        <h3 class="sous-chap-titre">${sc.nom}</h3>
        <p class="sous-chap-desc">${nbQ} questions</p>
      `;
      carte.onclick = () => ouvrirSousChapitre(scId);
      grille.appendChild(carte);
    });

  // ── Niveau 4 : TYPE (Exercices | Examen noté) ──
  } else {
    const themeId = sousChapitreOuvert || chapitreOuvert;
    const niv   = NIVEAUX.find(n => n.id === niveauOuvert);
    const mat   = MATIERES.find(m => m.id === matiereOuverte);
    const chap  = questionsBank[chapitreOuvert];
    const theme = questionsBank[themeId];
    const estSousChapitre = sousChapitreOuvert && sousChapitreOuvert !== chapitreOuvert;

    breadcrumb.style.display = 'flex';
    breadcrumb.innerHTML = `
      <button class="breadcrumb-retour" onclick="retourNiveaux()">🎓 Tous les niveaux</button>
      <span class="breadcrumb-sep">›</span>
      <button class="breadcrumb-retour" onclick="retourMatieres()">${niv.nom}</button>
      <span class="breadcrumb-sep">›</span>
      <button class="breadcrumb-retour" onclick="retourChapitres()">${mat.nom}</button>
      <span class="breadcrumb-sep">›</span>
      ${estSousChapitre ? `<button class="breadcrumb-retour" onclick="retourSousChapitres()">${chap.emoji} ${chap.nom}</button><span class="breadcrumb-sep">›</span>` : ''}
      <span class="breadcrumb-courant">${theme.emoji} ${theme.nom}</span>
    `;
    titre.textContent     = theme.nom;
    sousTitre.textContent = 'Comment veux-tu travailler ?';
    grille.className      = 'grille-types';

    // Carte Exercices — avec recommandation si examen déjà fait
    const focus  = niveauFocusExamen(themeId);
    const perfEx = chargerPerfExamen(themeId);
    const labelsNivCourt = { 1: 'Facile ⭐', 2: 'Moyen ⭐⭐', 3: 'Difficile ⭐⭐⭐' };

    let badgeExHtml, descExHtml;
    if (focus !== null) {
      badgeExHtml = `<span class="type-badge" style="background:#fef9c3;color:#854d0e">🎯 Focus : ${labelsNivCourt[focus]}</span>`;
      descExHtml  = `<p class="type-desc">D'après ton dernier examen, commence par le <strong>${labelsNivCourt[focus]}</strong> pour renforcer tes points faibles</p>`;
    } else if (perfEx) {
      badgeExHtml = `<span class="type-badge" style="background:#dcfce7;color:#166534">✅ Examen réussi</span>`;
      descExHtml  = `<p class="type-desc">Ton examen montre de bons résultats — continue à progresser !</p>`;
    } else {
      badgeExHtml = `<span class="type-badge" style="background:#eef2ff;color:#4f46e5">Niveau auto-adapté</span>`;
      descExHtml  = `<p class="type-desc">Pratique adaptative — le niveau s'ajuste à chaque réponse</p>`;
    }

    const carteEx = document.createElement('div');
    carteEx.className = 'carte-type';
    carteEx.style.setProperty('--tc', '#4f46e5');
    carteEx.innerHTML = `
      <span class="type-emoji">📝</span>
      <h3 class="type-titre">Exercices libres</h3>
      ${descExHtml}
      ${badgeExHtml}
    `;
    carteEx.addEventListener('mouseenter', () => carteEx.style.borderColor = '#4f46e5');
    carteEx.addEventListener('mouseleave', () => carteEx.style.borderColor = '#4f46e5' + '33');
    carteEx.style.borderColor = '#4f46e5' + '33';
    carteEx.onclick = () => choisirTheme(themeId);

    const carteExam = document.createElement('div');
    carteExam.className = 'carte-type';
    carteExam.style.setProperty('--tc', '#dc2626');
    carteExam.innerHTML = `
      <span class="type-emoji">📋</span>
      <h3 class="type-titre">Examen noté</h3>
      <p class="type-desc">10 questions mixtes — facile, moyen, difficile</p>
      <span class="type-badge" style="background:#fef2f2;color:#dc2626">Note /20 + analyse</span>
    `;
    carteExam.addEventListener('mouseenter', () => carteExam.style.borderColor = '#dc2626');
    carteExam.addEventListener('mouseleave', () => carteExam.style.borderColor = '#dc2626' + '33');
    carteExam.style.borderColor = '#dc2626' + '33';
    carteExam.onclick = () => demarrerExamenNote(themeId);

    grille.appendChild(carteEx);
    grille.appendChild(carteExam);
  }
}

function ouvrirNiveau(id) {
  niveauOuvert       = id;
  matiereOuverte     = null;
  chapitreOuvert     = null;
  sousChapitreOuvert = null;
  renderAccueil();
}

function ouvrirMatiere(id) {
  matiereOuverte     = id;
  chapitreOuvert     = null;
  sousChapitreOuvert = null;
  renderAccueil();
}

function ouvrirChapitre(id) {
  chapitreOuvert     = id;
  sousChapitreOuvert = null;
  renderAccueil();
}

function ouvrirSousChapitre(id) {
  sousChapitreOuvert = id;
  renderAccueil();
}

function retourNiveaux() {
  niveauOuvert       = null;
  matiereOuverte     = null;
  chapitreOuvert     = null;
  sousChapitreOuvert = null;
  renderAccueil();
}

function retourMatieres() {
  matiereOuverte     = null;
  chapitreOuvert     = null;
  sousChapitreOuvert = null;
  renderAccueil();
}

function retourChapitres() {
  chapitreOuvert     = null;
  sousChapitreOuvert = null;
  renderAccueil();
}

function retourSousChapitres() {
  sousChapitreOuvert = null;
  renderAccueil();
}

function retourChapitresDepuisExamen() {
  chapitreOuvert     = null;
  sousChapitreOuvert = null;
  afficherEcran('ecran-accueil');
  renderAccueil();
}

// ── DICTÉE ──
let dicteeTexte  = null;
let dicteeVoix   = null;
let dicteeEcoute = false;

function initVoixFR() {
  const charger = () => {
    const voix = window.speechSynthesis.getVoices();
    dicteeVoix = voix.find(v => v.lang === 'fr-FR')
              || voix.find(v => v.lang.startsWith('fr'))
              || null;
  };
  charger();
  if (!dicteeVoix) window.speechSynthesis.addEventListener('voiceschanged', charger, { once: true });
}

function lireDictee() {
  if (!dicteeTexte) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(dicteeTexte);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.82;
  if (dicteeVoix) utterance.voice = dicteeVoix;
  const btn = document.getElementById('btn-ecouter');
  btn.disabled = true;
  btn.textContent = '⏳ Lecture en cours…';
  utterance.onend = () => {
    btn.disabled = false;
    btn.textContent = '🔊 Réécouter';
    if (!dicteeEcoute) {
      dicteeEcoute = true;
      document.getElementById('dictee-input').style.display = 'block';
      document.getElementById('btn-valider-dictee').style.display = 'inline-block';
      document.getElementById('dictee-input').focus();
    }
  };
  window.speechSynthesis.speak(utterance);
}

function normaliserTexte(t) {
  return t.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s']/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function validerDictee() {
  if (etat.reponduA) return;
  const input = document.getElementById('dictee-input');
  const texteEleve  = normaliserTexte(input.value);
  const texteCorect = normaliserTexte(etat.questionCourante.answer);
  const motsEleve   = texteEleve.split(' ');
  const motsCorect  = texteCorect.split(' ');

  let corrects = 0;
  const html = motsCorect.map((mot, i) => {
    const ok = motsEleve[i] === mot;
    if (ok) corrects++;
    return `<span class="dictee-mot ${ok ? 'correct' : 'incorrect'}">${mot}</span>`;
  }).join(' ');

  document.getElementById('dictee-resultat').innerHTML = html;
  document.getElementById('dictee-input').disabled = true;
  document.getElementById('btn-valider-dictee').style.display = 'none';

  const correct = corrects / motsCorect.length >= 0.8;
  repondreDictee(correct, corrects, motsCorect.length);
}

function repondreDictee(correct, corrects, total) {
  if (etat.reponduA) return;
  etat.reponduA = true;
  arreterTimer();
  document.getElementById('zone-passer').style.display = 'none';

  if (correct) {
    etat.bonnesReponses++;
    const { xp: xpGain, vitesse } = calculerXPQuestion(etat.niveauActuel);
    const resultatXP = ajouterXP(etat.theme, xpGain);
    etat.xpGagneSession += xpGain;
    const levelUp = resultatXP.palierApres.niveau > resultatXP.palierAvant.niveau;
    afficherGainXP(xpGain, vitesse, levelUp, resultatXP.palierApres);
  } else {
    etat.mauvaiesReponses++;
  }

  // Explication
  const expli = document.getElementById('explication');
  expli.style.display = 'block';
  expli.className = 'boite-explication ' + (correct ? 'bonne' : 'mauvaise');
  expli.innerHTML = `
    <strong>${correct ? `✓ Bonne dictée ! (${corrects}/${total} mots)` : `✗ À améliorer (${corrects}/${total} mots)`}</strong>
    ${etat.questionCourante.explication}
  `;

  // Message du prof virtuel
  afficherMessageProf(correct ? 'correct' : 'incorrect');

  // Suivi examen noté
  if (etat.mode === 'examen_note') {
    etat.reponsesExamen.push({ niveau: etat.niveauActuel, correct });
  }

  etat.niveauActuel = niveauApresReponse(correct);
  etat.questionIndex++;

  const btnSuivant = document.getElementById('btn-suivant');
  btnSuivant.style.display = 'block';
  const finExamen     = etat.mode === 'examen'      && etat.questionIndex >= etat.totalQuestions;
  const finExamenNote = etat.mode === 'examen_note' && etat.questionIndex >= (etat.questionsFixees || []).length;
  btnSuivant.textContent = (finExamen || finExamenNote) ? 'Voir mes résultats →' : 'Question suivante →';
}

// ── EXPOSITION GLOBALE (compatibilité Safari / navigateurs stricts) ──
// Fonctions appelées via onclick="..." dans le HTML ou dans des chaînes template
window.validerPrenom            = validerPrenom;
window.ouvrirProfil             = ouvrirProfil;
window.fermerProfil             = fermerProfil;
window.sauvegarderProfil        = sauvegarderProfil;
window.reinitialiserProgression = reinitialiserProgression;
window.allerEleveAccueil        = allerEleveAccueil;
window.allerAdminLogin          = allerAdminLogin;
window.afficherEcran            = afficherEcran;
window.choisirMode              = choisirMode;
window.changerTemps             = changerTemps;
window.retourDepuisQuiz         = retourDepuisQuiz;
window.afficherResultats        = afficherResultats;
window.passerQuestion           = passerQuestion;
window.btnSuivantClick          = btnSuivantClick;
window.rejouer                  = rejouer;
window.retourAccueil            = retourAccueil;
window.demarrerExamenNote       = demarrerExamenNote;
window.retourChapitresDepuisExamen = retourChapitresDepuisExamen;
window.verifierMdp              = verifierMdp;
window.deconnecterAdmin         = deconnecterAdmin;
window.renderAdminNav           = renderAdminNav;
window.lancerPreview            = lancerPreview;
window.retourNiveaux            = retourNiveaux;
window.retourMatieres           = retourMatieres;
window.retourChapitres          = retourChapitres;
window.lireDictee               = lireDictee;
window.validerDictee            = validerDictee;
window.basculerVisibiliteChapitre = basculerVisibiliteChapitre;
window.ouvrirSousChapitre         = ouvrirSousChapitre;
window.retourSousChapitres        = retourSousChapitres;

// ── INIT ACCUEIL ──
window.addEventListener('DOMContentLoaded', () => {
  initVoixFR();
  renderAccueil();
  renderProfSelector();
  // Afficher le picker chrono (Mode Chrono actif par défaut)
  const picker = document.getElementById('chrono-picker');
  if (picker) picker.classList.add('visible');

  // Écran prénom : sauter si déjà connu
  if (prenomEleve) {
    afficherEcran('ecran-landing');
    mettreAJourHeader();
    mettreAJourBtnProfil();
  } else {
    afficherEcran('ecran-prenom');
    setTimeout(() => document.getElementById('input-prenom')?.focus(), 150);
  }
});
