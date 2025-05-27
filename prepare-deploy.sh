#!/bin/bash

echo "🚀 Preparazione Deploy Meepot"
echo "============================"
echo ""

# Check if .env.production.local exists
if [ ! -f .env.production.local ]; then
    echo "❌ File .env.production.local non trovato!"
    exit 1
fi

# Backup current .env.production
if [ -f .env.production ]; then
    cp .env.production .env.production.backup
    echo "✅ Backup di .env.production creato"
fi

# Create new .env.production with real values
cat > .env.production << EOF
# Production environment variables for Firebase Hosting
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAD1Q3ova1i0sii0N0XujlUFJ1hWTMCuNY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=meepotcl.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=meepotcl
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=meepotcl.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=191068431187
NEXT_PUBLIC_FIREBASE_APP_ID=1:191068431187:web:952d80fa6a0475e48a77a6
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-CSSC4YPCM6

# NextAuth Configuration
NEXTAUTH_SECRET=0vkA3TeBR4Kknb9C3NOo5hBy/YlvCBlZ/4Rs6XheE7Y=
NEXTAUTH_URL=https://meepotcl.web.app

# Google OAuth - Copy from .env.production.local
$(grep "GOOGLE_CLIENT_ID\|GOOGLE_CLIENT_SECRET" .env.production.local)
EOF

echo "✅ .env.production aggiornato con le credenziali reali"
echo ""
echo "⚠️  IMPORTANTE: Dopo il deploy, esegui:"
echo "   ./cleanup-secrets.sh"
echo ""
echo "Ora puoi eseguire:"
echo "   npm run build"
echo "   firebase deploy"