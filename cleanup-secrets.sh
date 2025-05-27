#!/bin/bash

echo "🧹 Pulizia Secrets da .env.production"
echo "===================================="
echo ""

# Replace real credentials with placeholders
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
NEXTAUTH_SECRET=GENERATE-YOUR-SECRET-HERE
NEXTAUTH_URL=https://meepotcl.web.app

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
EOF

echo "✅ Credenziali rimosse da .env.production"
echo "✅ Le credenziali reali sono salvate in .env.production.local"
echo ""
echo "È ora sicuro committare .env.production"