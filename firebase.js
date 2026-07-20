// ── FIREBASE CONFIG ──
const firebaseConfig = {
  apiKey: "AIzaSyAeZBT1SJb5_xAeIS5u0bP1xxbbFX3kA4I",
  authDomain: "training-6cab9.firebaseapp.com",
  projectId: "training-6cab9",
  storageBucket: "training-6cab9.firebasestorage.app",
  messagingSenderId: "623252864316",
  appId: "1:623252864316:web:d2e18cc965ed3773913239"
};

firebase.initializeApp(firebaseConfig);
const fbAuth = firebase.auth();
const fbDb   = firebase.firestore();

// ── Auth ──
function fbConnexionEmail(email, mdp) {
  return fbAuth.signInWithEmailAndPassword(email, mdp);
}

async function fbInscriptionEmail(email, mdp, prenom, identifiant) {
  const cred = await fbAuth.createUserWithEmailAndPassword(email, mdp);
  await cred.user.updateProfile({ displayName: prenom });
  if (identifiant) {
    const id = identifiant.toLowerCase();
    await fbDb.collection('usernames').doc(id).set({ email, uid: cred.user.uid });
    await fbDb.collection('users').doc(cred.user.uid).set({ identifiant: id }, { merge: true });
  }
  return cred;
}

async function fbIdentifiantDisponible(identifiant) {
  const snap = await fbDb.collection('usernames').doc(identifiant.toLowerCase()).get();
  return !snap.exists;
}

async function fbGetEmailParIdentifiant(identifiant) {
  const snap = await fbDb.collection('usernames').doc(identifiant.toLowerCase()).get();
  return snap.exists ? snap.data().email : null;
}

function fbConnexionGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  return fbAuth.signInWithPopup(provider);
}

function fbDeconnexion() {
  return fbAuth.signOut();
}

// ── Firestore ──
function _fbDoc() {
  const uid = fbAuth.currentUser && fbAuth.currentUser.uid;
  return uid ? fbDb.collection('users').doc(uid) : null;
}

// Charge les données Firestore et les injecte dans localStorage
async function fbChargerEtSyncer() {
  const doc = _fbDoc();
  if (!doc) return;
  try {
    const snap = await doc.get();
    if (!snap.exists) return;
    const d = snap.data();
    if (d.avatar)           localStorage.setItem('mathentrain_avatar',           d.avatar);
    if (d.avatarOriginal)   localStorage.setItem('mathentrain_avatar_src',       d.avatarOriginal);
    if (d.identifiant)      localStorage.setItem('mathentrain_identifiant',      d.identifiant);
    if (d.prenom)           localStorage.setItem('mathentrain_prenom',          d.prenom);
    if (d.xp)               localStorage.setItem('mathentrain_xp',              typeof d.xp === 'string' ? d.xp : JSON.stringify(d.xp));
    if (d.chapitresCaches)  localStorage.setItem('mathentrain_chapitres_caches', typeof d.chapitresCaches === 'string' ? d.chapitresCaches : JSON.stringify(d.chapitresCaches));
    if (d.examPerfs) {
      Object.entries(d.examPerfs).forEach(([id, val]) => {
        localStorage.setItem('mathentrain_exam_perf_' + id, typeof val === 'string' ? val : JSON.stringify(val));
      });
    }
  } catch (e) { console.warn('[FB] chargement:', e); }
}

// Sauvegarde un champ dans Firestore (fire & forget)
function fbSauvegarder(champ, valeur) {
  const doc = _fbDoc();
  if (!doc) return;
  doc.set({ [champ]: valeur }, { merge: true }).catch(e => console.warn('[FB] sauvegarde:', e));
}

// Sauvegarde une perf d'examen dans Firestore
function fbSauvegarderExamPerf(themeId, valeur) {
  const doc = _fbDoc();
  if (!doc) return;
  doc.set({ examPerfs: { [themeId]: valeur } }, { merge: true })
     .catch(e => console.warn('[FB] examPerf:', e));
}

// Supprime les données de progression dans Firestore
function fbSupprimerProgression() {
  const doc = _fbDoc();
  if (!doc) return;
  doc.set({ xp: null, examPerfs: null }, { merge: true })
     .catch(e => console.warn('[FB] reset:', e));
}
