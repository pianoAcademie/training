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
  fbSauvegarder('prenom', prenom);
  if (fbAuth.currentUser) fbAuth.currentUser.updateProfile({ displayName: prenom });
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
  const btn = document.getElementById('btn-profil');
  if (!btn) return;
  btn.style.display = prenomEleve ? 'flex' : 'none';
  mettreAJourAvatarUI();
}

function mettreAJourAvatarUI() {
  const url = localStorage.getItem('mathentrain_avatar');
  const spanAvatar = document.getElementById('profil-avatar');
  if (spanAvatar) {
    spanAvatar.innerHTML = url
      ? `<img src="${url}" class="profil-avatar-img" alt="">`
      : (prenomEleve ? prenomEleve.charAt(0).toUpperCase() : '?');
  }
  const grand = document.getElementById('profil-avatar-grand');
  if (grand) {
    if (url) {
      grand.innerHTML = `<img src="${url}" class="profil-avatar-grand-img" alt="">`;
      grand.style.cssText += ';padding:0;overflow:hidden';
    } else {
      grand.textContent = prenomEleve ? prenomEleve.charAt(0).toUpperCase() : '?';
      grand.style.padding = '';
      grand.style.overflow = '';
    }
  }
  const supprBtn = document.getElementById('profil-avatar-suppr');
  if (supprBtn) supprBtn.style.display = url ? '' : 'none';
}

// ── PANNEAU PROFIL ──
function ouvrirProfil() {
  const panel = document.getElementById('profil-panel');
  panel.classList.add('ouvert');

  document.getElementById('profil-input-prenom').value   = prenomEleve;
  document.getElementById('profil-nom-affiche').textContent = prenomEleve;
  mettreAJourAvatarUI();

  const xpData    = chargerXP();
  const totalXP   = Object.values(xpData).reduce((a, b) => a + b, 0);
  const palier    = getPalier(totalXP);
  const nbChapitres = Object.keys(xpData).filter(k => xpData[k] > 0).length;

  document.getElementById('profil-xp-total').textContent    = totalXP + ' XP';
  document.getElementById('profil-palier').textContent      = palier.emoji + ' ' + palier.label;
  document.getElementById('profil-nb-chapitres').textContent = nbChapitres;

  ['email','mdp','avatar','identifiant'].forEach(t => {
    const b = document.getElementById(`profil-${t}-body`);
    if (b) b.style.display = 'none';
  });

  const isEmailUser = fbAuth.currentUser?.providerData.some(p => p.providerId === 'password');
  document.getElementById('profil-section-email').style.display = isEmailUser ? '' : 'none';
  document.getElementById('profil-section-mdp').style.display   = isEmailUser ? '' : 'none';
  ['profil-msg-email','profil-msg-mdp','profil-msg-identifiant'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.style.display = 'none'; el.style.color = ''; }
  });

  // Montrer la section identifiant seulement si l'utilisateur n'en a pas encore
  const hasIdentifiant = !!localStorage.getItem('mathentrain_identifiant');
  const secId = document.getElementById('profil-section-identifiant');
  if (secId) secId.style.display = (isEmailUser && !hasIdentifiant) ? '' : 'none';
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
  fbSauvegarder('prenom', nouveau);
  if (fbAuth.currentUser) fbAuth.currentUser.updateProfile({ displayName: nouveau });
  mettreAJourHeader();
  mettreAJourBtnProfil();
  fermerProfil();
}

function reinitialiserProgression() {
  fermerProfil();
  document.getElementById('modal-reset-prenom').textContent = prenomEleve || 'cet élève';
  document.getElementById('modal-reset').style.display = 'flex';
}

function fermerModalReset() {
  document.getElementById('modal-reset').style.display = 'none';
}

function confirmerReset() {
  fermerModalReset();
  localStorage.removeItem('mathentrain_xp');
  fbSupprimerProgression();
  renderAccueil();
}

// ── PROFS VIRTUELS ──
const PROFS = [
  {
    id: 'none', nom: 'Solo', emoji: '🎧', couleur: '#64748b',
    description: 'Pas de commentaire',
    pitch: 1.0, rate: 1.0,
    correct: [], incorrect: [], timeout: []
  },
  {
    id: 'dubois', nom: 'M. Dubois', emoji: '😤', couleur: '#7c3aed',
    description: 'Le sarcastique classique',
    pitch: 0.90, rate: 0.75,
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
    description: 'Le coach survitaminé',
    pitch: 1.05, rate: 1.0,
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
    pitch: 1.05, rate: 0.68,
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

let profActuel     = localStorage.getItem('mathentrain_prof') || 'none';
let voixProfActive = localStorage.getItem('mathentrain_voix_prof') !== 'false';

let _voixFR = null;
let _audioEnCours = null;

// Map message text → chemin MP3 pour les profs avec fichiers pré-générés
const _mp3Map = {};
function _indexerMp3(profId, tableau, prefixe) {
  tableau.forEach((msg, i) => {
    _mp3Map[msg] = `audio/${profId}/${profId}_${prefixe}${i + 1}.mp3`;
  });
}
const _dubois = PROFS.find(p => p.id === 'dubois');
if (_dubois) {
  _indexerMp3('dubois', _dubois.correct,   'c');
  _indexerMp3('dubois', _dubois.incorrect, 'i');
  _indexerMp3('dubois', _dubois.timeout,   't');
}
const _bruno = PROFS.find(p => p.id === 'bruno');
if (_bruno) {
  _indexerMp3('bruno', _bruno.correct,   'c');
  _indexerMp3('bruno', _bruno.incorrect, 'i');
  _indexerMp3('bruno', _bruno.timeout,   't');
}

function _chargerVoixFR() {
  const voix = window.speechSynthesis.getVoices();
  // Ordre de priorité : voix "Natural/Online" Microsoft (Windows 11) > Neural > Google > autres
  _voixFR = voix.find(v => v.lang === 'fr-FR' && /natural|online.*natural|naturelle/i.test(v.name))
         || voix.find(v => v.lang === 'fr-FR' && /neural/i.test(v.name))
         || voix.find(v => v.lang === 'fr-FR' && /google/i.test(v.name))
         || voix.find(v => v.lang === 'fr-FR' && /microsoft/i.test(v.name))
         || voix.find(v => v.lang === 'fr-FR' && !/espeak|sapi/i.test(v.name))
         || voix.find(v => v.lang.startsWith('fr'))
         || null;
}

function _stopAudio() {
  if (_audioEnCours) { _audioEnCours.pause(); _audioEnCours = null; }
  window.speechSynthesis && window.speechSynthesis.cancel();
}

function _parlerWebSpeech(msg, prof) {
  if (!window.speechSynthesis) return;
  if (!_voixFR) _chargerVoixFR();
  const fragments = msg.split(/(?<=[.!?,;…»])\s+/).filter(f => f.trim());
  const parties   = fragments.length > 1 ? fragments : [msg];
  parties.forEach(partie => {
    const u = new SpeechSynthesisUtterance(partie.trim());
    u.lang = 'fr-FR';
    if (_voixFR) u.voice = _voixFR;
    if (prof.id === 'aria') {
      u.pitch = prof.pitch ?? 1.0;
      u.rate  = prof.rate  ?? 0.85;
    } else {
      u.pitch = (prof.pitch ?? 1.0) + (Math.random() * 0.22 - 0.11);
      u.rate  = (prof.rate  ?? 0.85) + (Math.random() * 0.18 - 0.09);
    }
    window.speechSynthesis.speak(u);
  });
}

function parlerProf(msg, prof) {
  if (!voixProfActive) return;
  _stopAudio();
  const mp3 = _mp3Map[msg];
  if (mp3) {
    const audio = new Audio(mp3);
    _audioEnCours = audio;
    audio.play().catch(() => {
      _audioEnCours = null;
      _parlerWebSpeech(msg, prof);
    });
    return;
  }
  _parlerWebSpeech(msg, prof);
}

function toggleVoixProf() {
  voixProfActive = !voixProfActive;
  localStorage.setItem('mathentrain_voix_prof', voixProfActive);
  if (!voixProfActive) _stopAudio();
  renderProfSelector();
}

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

  // Bouton muet/voix (masqué si prof = Solo)
  if (profActuel !== 'none') {
    const btnVoix = document.createElement('button');
    btnVoix.className = 'btn-voix-prof' + (voixProfActive ? ' actif' : '');
    btnVoix.title = voixProfActive ? 'Couper la voix du prof' : 'Activer la voix du prof';
    btnVoix.innerHTML = voixProfActive ? '🔊 Voix activée' : '🔇 Voix coupée';
    btnVoix.onclick = toggleVoixProf;
    zone.appendChild(btnVoix);
  }
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
  parlerProf(msg, prof);
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
  const json = JSON.stringify(data);
  localStorage.setItem('mathentrain_xp', json);
  fbSauvegarder('xp', json);
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
const PLANCHER_CLASSE = { '6eme': 1, '5eme': 1, '4eme': 1, '3eme': 2, 'seconde': 2 };

// ── PERF EXAMEN NOTÉ (localStorage) ──
function sauvegarderPerfExamen(themeId, parNiveau) {
  const data = {};
  [1, 2, 3].forEach(n => { if (parNiveau[n].t > 0) data[n] = parNiveau[n]; });
  const json = JSON.stringify({ data, ts: Date.now() });
  localStorage.setItem('mathentrain_exam_perf_' + themeId, json);
  fbSauvegarderExamPerf(themeId, json);
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
      '6eme': ['maths6Nombres', 'maths6Geometrie', 'maths6Grandeurs', 'maths6Proportionnalite'],
      '5eme': ['maths5Nombres', 'maths5Geometrie', 'maths5Algebre', 'maths5Proportionnalite'],
      'seconde': ['maths2Nombres', 'maths2Geometrie', 'maths2Fonctions', 'maths2Stats', 'maths2Algo']
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
    chapitres: ['svt', 'svtEcologie', 'svtGenetique'],
    chapitresParNiveau: {
      '5eme': ['svt5Corps', 'svt5Terre', 'svt5Vivant']
    }
  },
  { id: 'physique', nom: 'Physique-Chimie', emoji: '⚗️', couleur: '#dc2626',
    chapitres: ['physiqueChimie', 'chimie', 'physiqueEnergie'],
    chapitresParNiveau: {
      '5eme': ['physique5Electricite', 'physique5Lumiere', 'physique5Matiere']
    }
  },
  { id: 'histoire', nom: 'Histoire',        emoji: '🏛️', couleur: '#b45309',
    chapitres: ['histoire', 'histoireAncienne', 'histoireModerne'],
    chapitresParNiveau: {
      '5eme': ['histoire5MoyenAge', 'histoire5Renaissance', 'histoire5Geo']
    }
  },
  { id: 'anglais',  nom: 'Anglais',         emoji: '💬', couleur: '#1d4ed8',
    chapitres: ['anglaisVocab', 'anglasCivilisation', 'anglais'],
    chapitresParNiveau: {
      '5eme': ['anglais5Vocab', 'anglais5Grammar', 'anglais5Civilisation']
    }
  },
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
  { id: 'seconde', nom: 'Seconde', emoji: '🔵', couleur: '#7c3aed',
    matieres: ['maths'] },
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
window.supprimerAvatar          = supprimerAvatar;
window.changerAvatarFichier     = changerAvatarFichier;
window.changerAvatarUrl         = changerAvatarUrl;
window.ouvrirCrop               = ouvrirCrop;
window.fermerCrop               = fermerCrop;
window.cropZoomChange           = cropZoomChange;
window.confirmerCrop            = confirmerCrop;
window.toggleProfilAccordeon    = toggleProfilAccordeon;
window.toggleMdpVisible         = toggleMdpVisible;
window.profilChangerEmail       = profilChangerEmail;
window.profilChangerMdp         = profilChangerMdp;
window.profilAjouterIdentifiant = profilAjouterIdentifiant;
window.fermerModalReset         = fermerModalReset;
window.confirmerReset           = confirmerReset;
window.authSwitchTab            = authSwitchTab;
window.authSoumettre            = authSoumettre;
window.authGoogle               = authGoogle;
window.authMdpOublie            = authMdpOublie;
window.seDeconnecter            = seDeconnecter;
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

// ── AVATAR ──
function sauvegarderAvatar(url) {
  if (url) localStorage.setItem('mathentrain_avatar', url);
  else     localStorage.removeItem('mathentrain_avatar');
  fbSauvegarder('avatar', url || null);
  mettreAJourAvatarUI();
}

function supprimerAvatar() {
  sauvegarderAvatar(null);
  document.getElementById('profil-avatar-body').style.display = 'none';
}

function changerAvatarFichier(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => ouvrirCrop(e.target.result);
  reader.readAsDataURL(file);
  input.value = '';
}

function changerAvatarUrl() {
  const url = document.getElementById('profil-avatar-url-input').value.trim();
  const msg = document.getElementById('profil-msg-avatar');
  if (!url) return;
  msg.textContent = 'Vérification…';
  msg.style.color = '#64748b';
  msg.style.display = '';
  const test = new Image();
  test.onload = function() {
    msg.style.display = 'none';
    document.getElementById('profil-avatar-url-input').value = '';
    ouvrirCrop(url);
  };
  test.onerror = function() {
    msg.textContent = "Cette URL ne fonctionne pas (image inaccessible ou bloquée). Essaie une autre URL ou utilise ta galerie.";
    msg.style.color = '#dc2626';
  };
  test.src = url;
}

// ── RECADRAGE PHOTO ──
const _CROP_VS = 260;
let _cropState = { x: 0, y: 0, scale: 1, minScale: 1, startX: 0, startY: 0, dragging: false, src: '' };

function ouvrirCrop(src) {
  _cropState.src = src;
  _cropState.x = 0; _cropState.y = 0; _cropState.scale = 1;
  _cropState.dragging = false;
  const img = document.getElementById('crop-img');
  const slider = document.getElementById('crop-zoom');
  img.onload = function() {
    const vs = _CROP_VS;
    const minS = Math.max(vs / img.naturalWidth, vs / img.naturalHeight);
    _cropState.minScale = minS;
    _cropState.scale = minS;
    slider.min = minS;
    slider.max = Math.max(minS * 4, 3);
    slider.value = minS;
    _cropState.x = (vs - img.naturalWidth  * minS) / 2;
    _cropState.y = (vs - img.naturalHeight * minS) / 2;
    _applyCropTransform();
  };
  img.src = src;
  document.getElementById('modal-crop').style.display = 'flex';
  document.getElementById('profil-avatar-body').style.display = 'none';
}

function fermerCrop() {
  document.getElementById('modal-crop').style.display = 'none';
}

function _clampCrop() {
  const vs = _CROP_VS, s = _cropState.scale;
  const img = document.getElementById('crop-img');
  _cropState.x = Math.min(0, Math.max(vs - img.naturalWidth  * s, _cropState.x));
  _cropState.y = Math.min(0, Math.max(vs - img.naturalHeight * s, _cropState.y));
}

function _applyCropTransform() {
  _clampCrop();
  const img = document.getElementById('crop-img');
  img.style.width  = img.naturalWidth  + 'px';
  img.style.height = img.naturalHeight + 'px';
  img.style.transform = `translate(${_cropState.x}px,${_cropState.y}px) scale(${_cropState.scale})`;
}

function cropZoomChange(newS) {
  const vs = _CROP_VS;
  const oldS = _cropState.scale;
  const cx = vs / 2, cy = vs / 2;
  _cropState.x = cx - (cx - _cropState.x) * (newS / oldS);
  _cropState.y = cy - (cy - _cropState.y) * (newS / oldS);
  _cropState.scale = newS;
  _applyCropTransform();
}

function confirmerCrop() {
  const img = document.getElementById('crop-img');
  const vs = _CROP_VS, s = _cropState.scale;
  const cropX = -_cropState.x / s;
  const cropY = -_cropState.y / s;
  const cropSize = vs / s;
  const canvas = document.createElement('canvas');
  canvas.width = 200; canvas.height = 200;
  try {
    canvas.getContext('2d').drawImage(img, cropX, cropY, cropSize, cropSize, 0, 0, 200, 200);
    sauvegarderAvatar(canvas.toDataURL('image/jpeg', 0.85));
  } catch(e) {
    sauvegarderAvatar(_cropState.src);
  }
  fermerCrop();
}

function _initCropDrag() {
  const vp = document.getElementById('crop-viewport');
  if (!vp) return;
  let lastPinchDist = null;

  vp.addEventListener('mousedown', e => {
    e.preventDefault();
    _cropState.dragging = true;
    _cropState.startX = e.clientX - _cropState.x;
    _cropState.startY = e.clientY - _cropState.y;
  });

  vp.addEventListener('touchstart', e => {
    if (e.touches.length === 1) {
      _cropState.dragging = true;
      _cropState.startX = e.touches[0].clientX - _cropState.x;
      _cropState.startY = e.touches[0].clientY - _cropState.y;
    } else if (e.touches.length === 2) {
      _cropState.dragging = false;
      lastPinchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    }
  }, { passive: true });

  window.addEventListener('mousemove', e => {
    if (!_cropState.dragging) return;
    _cropState.x = e.clientX - _cropState.startX;
    _cropState.y = e.clientY - _cropState.startY;
    _applyCropTransform();
  });

  window.addEventListener('touchmove', e => {
    if (e.touches.length === 1 && _cropState.dragging) {
      _cropState.x = e.touches[0].clientX - _cropState.startX;
      _cropState.y = e.touches[0].clientY - _cropState.startY;
      _applyCropTransform();
    } else if (e.touches.length === 2 && lastPinchDist !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const slider = document.getElementById('crop-zoom');
      const newS = Math.min(Math.max(_cropState.scale * (dist / lastPinchDist), _cropState.minScale), parseFloat(slider.max));
      cropZoomChange(newS);
      slider.value = newS;
      lastPinchDist = dist;
    }
  }, { passive: true });

  window.addEventListener('mouseup',  () => { _cropState.dragging = false; });
  window.addEventListener('touchend', () => { _cropState.dragging = false; lastPinchDist = null; });

  vp.addEventListener('wheel', e => {
    e.preventDefault();
    const slider = document.getElementById('crop-zoom');
    const delta = e.deltaY > 0 ? -0.08 : 0.08;
    const newS = Math.min(Math.max(_cropState.scale + delta, _cropState.minScale), parseFloat(slider.max));
    cropZoomChange(newS);
    slider.value = newS;
  }, { passive: false });
}

// ── OEIL MOT DE PASSE ──
const _SVG_EYE_OPEN = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
const _SVG_EYE_OFF  = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;

function toggleProfilAccordeon(type, btn) {
  const body = document.getElementById(`profil-${type}-body`);
  const open = body.style.display === 'none';
  body.style.display = open ? '' : 'none';
  btn.style.opacity = open ? '0.85' : '1';
}

function toggleMdpVisible(inputId, btnId) {
  const input = document.getElementById(inputId);
  const btn   = document.getElementById(btnId);
  const show  = input.type === 'password';
  input.type  = show ? 'text' : 'password';
  btn.innerHTML = show ? _SVG_EYE_OFF : _SVG_EYE_OPEN;
}

// ── PROFIL : CHANGER EMAIL / MDP ──
function _profilMsg(id, txt, ok) {
  const el = document.getElementById(id);
  el.textContent   = txt;
  el.style.color   = ok ? '#16a34a' : '#dc2626';
  el.style.display = '';
}

async function profilChangerEmail() {
  const newEmail = document.getElementById('profil-input-email').value.trim();
  const mdp      = document.getElementById('profil-mdp-pour-email').value;
  if (!newEmail || !mdp) { _profilMsg('profil-msg-email', 'Remplis les deux champs.', false); return; }
  const user = fbAuth.currentUser;
  try {
    const cred = firebase.auth.EmailAuthProvider.credential(user.email, mdp);
    await user.reauthenticateWithCredential(cred);
    await user.updateEmail(newEmail);
    _profilMsg('profil-msg-email', 'E-mail mis à jour !', true);
    document.getElementById('profil-input-email').value = '';
    document.getElementById('profil-mdp-pour-email').value = '';
  } catch(e) {
    _profilMsg('profil-msg-email', _authErreurFR(e.code), false);
  }
}

async function profilChangerMdp() {
  const actuel = document.getElementById('profil-mdp-actuel').value;
  const nouv   = document.getElementById('profil-mdp-nouveau').value;
  if (!actuel || !nouv) { _profilMsg('profil-msg-mdp', 'Remplis les deux champs.', false); return; }
  if (nouv.length < 6)  { _profilMsg('profil-msg-mdp', 'Le nouveau mot de passe doit faire au moins 6 caractères.', false); return; }
  const user = fbAuth.currentUser;
  try {
    const cred = firebase.auth.EmailAuthProvider.credential(user.email, actuel);
    await user.reauthenticateWithCredential(cred);
    await user.updatePassword(nouv);
    _profilMsg('profil-msg-mdp', 'Mot de passe mis à jour !', true);
    document.getElementById('profil-mdp-actuel').value  = '';
    document.getElementById('profil-mdp-nouveau').value = '';
  } catch(e) {
    _profilMsg('profil-msg-mdp', _authErreurFR(e.code), false);
  }
}

async function profilAjouterIdentifiant() {
  const identifiant = document.getElementById('profil-input-identifiant').value.trim();
  if (!identifiant) { _profilMsg('profil-msg-identifiant', 'Entre un identifiant.', false); return; }
  if (!/^[a-zA-Z0-9_-]{3,20}$/.test(identifiant)) {
    _profilMsg('profil-msg-identifiant', 'Identifiant invalide (3-20 caractères, lettres, chiffres, _ ou -).', false); return;
  }
  const dispo = await fbIdentifiantDisponible(identifiant);
  if (!dispo) { _profilMsg('profil-msg-identifiant', 'Cet identifiant est déjà pris.', false); return; }
  const user = fbAuth.currentUser;
  const id = identifiant.toLowerCase();
  await fbDb.collection('usernames').doc(id).set({ email: user.email, uid: user.uid });
  await fbDb.collection('users').doc(user.uid).set({ identifiant: id }, { merge: true });
  localStorage.setItem('mathentrain_identifiant', id);
  _profilMsg('profil-msg-identifiant', 'Identifiant enregistré !', true);
  document.getElementById('profil-input-identifiant').value = '';
  setTimeout(() => {
    document.getElementById('profil-section-identifiant').style.display = 'none';
  }, 1500);
}

// ── DÉCONNEXION ──
async function seDeconnecter() {
  fermerProfil();
  prenomEleve = '';
  localStorage.clear();
  await fbDeconnexion();
}

// ── AUTH SCREEN ──
let _authTab = 'connexion';

function authSwitchTab(tab) {
  _authTab = tab;
  document.getElementById('auth-tab-connexion').classList.toggle('actif', tab === 'connexion');
  document.getElementById('auth-tab-inscription').classList.toggle('actif', tab === 'inscription');
  document.getElementById('auth-prenom-zone').style.display = tab === 'inscription' ? '' : 'none';
  document.getElementById('auth-btn-submit').textContent = tab === 'connexion' ? 'Se connecter' : 'Créer mon compte';
  document.getElementById('auth-mdp').autocomplete = tab === 'connexion' ? 'current-password' : 'new-password';
  document.getElementById('auth-oubli-zone').style.display = tab === 'connexion' ? '' : 'none';
  document.getElementById('auth-erreur').style.display = 'none';
  document.getElementById('auth-erreur').style.color = '';
  const emailInput = document.getElementById('auth-email');
  emailInput.placeholder = tab === 'connexion' ? 'E-mail ou identifiant...' : 'Adresse e-mail...';
  emailInput.autocomplete = tab === 'connexion' ? 'username' : 'email';
  const hint = document.getElementById('auth-email-hint');
  if (hint) hint.style.display = tab === 'connexion' ? '' : 'none';
}

function _authErreurFR(code) {
  const m = {
    'auth/invalid-email':       'Adresse e-mail invalide.',
    'auth/user-not-found':      'Aucun compte avec cet e-mail.',
    'auth/wrong-password':      'Mot de passe incorrect.',
    'auth/invalid-credential':         'E-mail ou mot de passe incorrect.',
    'auth/invalid-login-credentials':  'E-mail ou mot de passe incorrect.',
    'auth/email-already-in-use':       'Un compte existe déjà avec cet e-mail.',
    'auth/weak-password':              'Le mot de passe doit faire au moins 6 caractères.',
    'auth/too-many-requests':          'Trop de tentatives. Réessaie plus tard.',
    'auth/popup-closed-by-user':       'Connexion Google annulée.',
    'auth/network-request-failed':     'Problème de connexion réseau.',
  };
  return m[code] || `Erreur : ${code}`;
}

async function authSoumettre() {
  const emailOuId = document.getElementById('auth-email').value.trim();
  const mdp       = document.getElementById('auth-mdp').value;
  const errEl     = document.getElementById('auth-erreur');
  const btn       = document.getElementById('auth-btn-submit');
  errEl.style.display = 'none';
  if (!emailOuId || !mdp) { errEl.textContent = 'Remplis tous les champs.'; errEl.style.display = ''; return; }
  btn.disabled = true; btn.textContent = '...';
  try {
    if (_authTab === 'connexion') {
      let email = emailOuId;
      if (!emailOuId.includes('@')) {
        email = await fbGetEmailParIdentifiant(emailOuId);
        if (!email) {
          errEl.textContent = 'Identifiant introuvable.';
          errEl.style.display = '';
          btn.disabled = false; btn.textContent = 'Se connecter';
          return;
        }
      }
      await fbConnexionEmail(email, mdp);
    } else {
      if (!emailOuId.includes('@')) { errEl.textContent = 'Entre une adresse e-mail valide.'; errEl.style.display = ''; btn.disabled = false; btn.textContent = 'Créer mon compte'; return; }
      const prenom      = document.getElementById('auth-prenom').value.trim();
      const identifiant = document.getElementById('auth-identifiant').value.trim();
      if (!prenom) { errEl.textContent = 'Entre ton prénom.'; errEl.style.display = ''; btn.disabled = false; btn.textContent = 'Créer mon compte'; return; }
      if (!identifiant) { errEl.textContent = 'Choisis un identifiant.'; errEl.style.display = ''; btn.disabled = false; btn.textContent = 'Créer mon compte'; return; }
      if (!/^[a-zA-Z0-9_-]{3,20}$/.test(identifiant)) {
        errEl.textContent = 'Identifiant invalide (3-20 caractères, lettres, chiffres, _ ou -).';
        errEl.style.display = ''; btn.disabled = false; btn.textContent = 'Créer mon compte'; return;
      }
      const dispo = await fbIdentifiantDisponible(identifiant);
      if (!dispo) { errEl.textContent = 'Cet identifiant est déjà pris. Choisis-en un autre.'; errEl.style.display = ''; btn.disabled = false; btn.textContent = 'Créer mon compte'; return; }
      await fbInscriptionEmail(emailOuId, mdp, prenom, identifiant);
    }
  } catch (e) {
    errEl.textContent = _authErreurFR(e.code); errEl.style.display = '';
    btn.disabled = false; btn.textContent = _authTab === 'connexion' ? 'Se connecter' : 'Créer mon compte';
  }
}

async function authMdpOublie() {
  let email   = document.getElementById('auth-email').value.trim();
  const errEl = document.getElementById('auth-erreur');
  if (!email) {
    errEl.textContent = 'Entre ton e-mail ou identifiant, puis clique sur "Mot de passe oublié ?".';
    errEl.style.display = '';
    return;
  }
  if (!email.includes('@')) {
    const found = await fbGetEmailParIdentifiant(email);
    if (!found) { errEl.textContent = 'Identifiant introuvable.'; errEl.style.display = ''; return; }
    email = found;
  }
  try {
    await fbAuth.sendPasswordResetEmail(email);
    errEl.style.color = '#16a34a';
    errEl.textContent = 'E-mail de réinitialisation envoyé ! Vérifie ta boîte mail.';
    errEl.style.display = '';
  } catch (e) {
    errEl.style.color = '';
    errEl.textContent = _authErreurFR(e.code);
    errEl.style.display = '';
  }
}

async function authGoogle() {
  document.getElementById('auth-erreur').style.display = 'none';
  try { await fbConnexionGoogle(); }
  catch (e) { const el = document.getElementById('auth-erreur'); el.textContent = _authErreurFR(e.code); el.style.display = ''; }
}

// ── INIT ACCUEIL ──
window.addEventListener('DOMContentLoaded', () => {
  _initCropDrag();
  initVoixFR();
  _chargerVoixFR();
  if (!_voixFR) window.speechSynthesis && window.speechSynthesis.addEventListener('voiceschanged', _chargerVoixFR, { once: true });
  renderAccueil();
  renderProfSelector();
  const picker = document.getElementById('chrono-picker');
  if (picker) picker.classList.add('visible');

  fbAuth.onAuthStateChanged(async user => {
    if (user) {
      await fbChargerEtSyncer();
      prenomEleve = user.displayName || localStorage.getItem('mathentrain_prenom') || '';
      if (!prenomEleve) {
        afficherEcran('ecran-prenom');
        setTimeout(() => document.getElementById('input-prenom')?.focus(), 150);
      } else {
        localStorage.setItem('mathentrain_prenom', prenomEleve);
        mettreAJourHeader();
        mettreAJourBtnProfil();
        afficherEcran('ecran-landing');
      }
    } else {
      prenomEleve = '';
      const btnP = document.getElementById('btn-profil');
      if (btnP) btnP.style.display = 'none';
      const sous = document.getElementById('header-sous-titre');
      if (sous) sous.textContent = "Entraîne-toi à ton rythme — les questions s'adaptent à ton niveau";
      afficherEcran('ecran-auth');
    }
  });
});
