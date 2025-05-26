#!/bin/bash

echo "🚀 Meepot - Firebase Hosting Deployment Script"
echo "============================================="
echo ""
echo "Questo script ti guiderà nel deployment su Firebase Hosting"
echo ""

# Check if user is logged in to Firebase
echo "📋 Step 1: Verifica login Firebase"
echo "Esegui questo comando se non sei già loggato:"
echo ""
echo "  firebase login"
echo ""
echo "Premi ENTER quando sei pronto per continuare..."
read

# Build the project
echo "🔨 Step 2: Build del progetto Next.js"
echo "Esecuzione di: npm run build"
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build fallito! Controlla gli errori sopra."
    exit 1
fi

echo "✅ Build completato con successo!"
echo ""

# Deploy to Firebase
echo "🚀 Step 3: Deploy su Firebase Hosting"
echo "Esecuzione di: firebase deploy"
echo ""
firebase deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deploy completato con successo!"
    echo ""
    echo "🌐 La tua app è ora disponibile su:"
    echo "   - https://meepotcl.web.app"
    echo "   - https://meepotcl.firebaseapp.com"
    echo ""
    echo "📊 Puoi vedere lo stato del deployment su:"
    echo "   https://console.firebase.google.com/project/meepotcl/hosting"
else
    echo ""
    echo "❌ Deploy fallito! Controlla gli errori sopra."
    echo ""
    echo "Possibili soluzioni:"
    echo "1. Assicurati di essere loggato: firebase login"
    echo "2. Verifica che il progetto sia corretto: firebase use meepotcl"
    echo "3. Controlla la connessione internet"
fi