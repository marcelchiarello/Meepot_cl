#!/bin/bash

echo "🔥 Meepot - Firebase Setup Completo"
echo "===================================="
echo ""
echo "Questo script configura Firebase per Meepot"
echo ""

# Step 1: Login
echo "📋 Step 1: Login a Firebase"
echo "Esegui: firebase login"
echo ""
echo "Se sei già loggato, premi ENTER per continuare..."
read

# Step 2: Verify project
echo "📋 Step 2: Verifica progetto"
firebase use meepotcl

if [ $? -ne 0 ]; then
    echo "❌ Progetto non trovato. Assicurati di avere accesso a 'meepotcl'"
    exit 1
fi

echo "✅ Progetto meepotcl configurato!"
echo ""

# Step 3: Install dependencies
echo "📋 Step 3: Installazione dipendenze"
echo "Assicurati di essere nella directory del progetto..."
npm install

# Step 4: Create .env.local
echo ""
echo "📋 Step 4: Configurazione variabili d'ambiente"
if [ ! -f .env.local ]; then
    echo "Creazione .env.local da template..."
    cp .env.example .env.local
    echo "✅ .env.local creato!"
    echo ""
    echo "⚠️  IMPORTANTE: Genera un NEXTAUTH_SECRET sicuro:"
    echo "   openssl rand -base64 32"
    echo ""
    echo "Poi aggiorna .env.local con il valore generato"
else
    echo "✅ .env.local già presente"
fi

echo ""
echo "📋 Step 5: Deploy Firestore Rules e Storage Rules"
firebase deploy --only firestore:rules,storage:rules

echo ""
echo "🎉 Setup completato!"
echo ""
echo "Prossimi passi:"
echo "1. Configura Authentication in Firebase Console:"
echo "   https://console.firebase.google.com/project/meepotcl/authentication"
echo ""
echo "2. Abilita i metodi di autenticazione:"
echo "   - Email/Password"
echo "   - Google (opzionale)"
echo ""
echo "3. Esegui il deployment:"
echo "   ./deploy.sh"
echo ""