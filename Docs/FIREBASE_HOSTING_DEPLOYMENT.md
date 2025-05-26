# Firebase Hosting Deployment Guide for Meepot

## 🚀 Deployment con Firebase Hosting

Firebase Hosting ora supporta Next.js nativamente con il framework-aware hosting.

## 📋 Prerequisiti

1. Firebase CLI installato (`npm install -g firebase-tools`)
2. Progetto Firebase configurato (meepotcl)
3. Autenticazione Firebase CLI

## 🔧 Setup Iniziale

### 1. Login a Firebase

```bash
firebase login
```

### 2. Verifica il progetto

```bash
firebase projects:list
```

Dovresti vedere `meepotcl` nella lista.

## 🚀 Deploy

### Deploy di produzione

```bash
# Build dell'applicazione
npm run build

# Deploy su Firebase Hosting
firebase deploy
```

### Deploy solo Hosting

```bash
firebase deploy --only hosting
```

### Deploy completo (Hosting + Firestore Rules + Storage Rules)

```bash
firebase deploy --only hosting,firestore,storage
```

## 🔑 Variabili d'Ambiente

### 1. Crea un file `.env.local` per sviluppo locale:

```bash
cp .env.example .env.local
```

### 2. Per produzione su Firebase

Le variabili pubbliche (`NEXT_PUBLIC_*`) sono già configurate nel codice.

Per le variabili server-side (come `NEXTAUTH_SECRET`), devi configurarle in Firebase Functions:

```bash
# Imposta NEXTAUTH_SECRET
firebase functions:config:set nextauth.secret="il-tuo-secret-generato"

# Imposta NEXTAUTH_URL
firebase functions:config:set nextauth.url="https://meepotcl.web.app"

# Se usi Google OAuth
firebase functions:config:set google.client_id="your-id" google.client_secret="your-secret"
```

### 3. Genera NEXTAUTH_SECRET

```bash
openssl rand -base64 32
```

## 📱 URLs del Progetto

Dopo il deploy, il tuo sito sarà disponibile su:

- https://meepotcl.web.app
- https://meepotcl.firebaseapp.com

## 🔐 Configurazione Firebase Console

1. **Authentication**:
   - Vai su [Firebase Console](https://console.firebase.google.com/project/meepotcl/authentication/providers)
   - Abilita Email/Password
   - Abilita Google (opzionale)
   - Aggiungi domini autorizzati: `meepotcl.web.app`, `meepotcl.firebaseapp.com`

2. **Firestore Database**:
   - Crea il database se non esiste
   - Le regole di sicurezza verranno deployate automaticamente

3. **Storage**:
   - Crea il bucket se non esiste
   - Le regole verranno deployate automaticamente

## 🧪 Test Locale

### Emulatori Firebase

```bash
# Avvia tutti gli emulatori
firebase emulators:start

# Solo hosting
firebase emulators:start --only hosting
```

L'app sarà disponibile su http://localhost:5000

## 📊 Monitoring

### Logs delle Functions

```bash
firebase functions:log
```

### Hosting Activity

Vai su Firebase Console → Hosting per vedere:
- Traffico
- Bandwidth usage
- Deployment history

## 🔄 Rollback

Se necessario, puoi fare rollback a una versione precedente:

1. Firebase Console → Hosting → Release history
2. Clicca sui tre puntini della versione desiderata
3. Seleziona "Rollback"

## 🚨 Troubleshooting

### Build fallisce

1. Verifica Node.js version (deve essere 18+)
2. Pulisci la cache: `rm -rf .next node_modules && npm install`
3. Controlla i logs: `firebase functions:log`

### 404 su routes

Firebase Hosting gestisce automaticamente il routing di Next.js. Se hai problemi:
1. Verifica che il deploy sia completo
2. Controlla la console per errori JavaScript

### Variabili d'ambiente non funzionano

1. Le variabili `NEXT_PUBLIC_*` devono essere nel codice al momento del build
2. Le variabili server-side devono essere in `functions:config`

## 🎯 Best Practices

1. **Sempre testa localmente** prima del deploy
2. **Usa preview channels** per test:
   ```bash
   firebase hosting:channel:deploy preview
   ```
3. **Monitora le performance** in Firebase Console
4. **Configura alerts** per errori critici

## 📚 Risorse

- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [Next.js on Firebase](https://firebase.google.com/docs/hosting/frameworks/nextjs)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)