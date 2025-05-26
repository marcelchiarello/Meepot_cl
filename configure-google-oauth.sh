#!/bin/bash

echo "🔐 Configurazione Google OAuth per Meepot"
echo "========================================"
echo ""
echo "Configurazione delle credenziali Google OAuth..."
echo ""

# Set Google OAuth credentials
firebase functions:config:set \
  google.client_id="YOUR_GOOGLE_CLIENT_ID" \
  google.client_secret="YOUR_GOOGLE_CLIENT_SECRET"

echo ""
echo "✅ Credenziali configurate!"
echo ""
echo "Ora devi:"
echo "1. Assicurati di aver aggiunto gli URI autorizzati nel Google Cloud Console"
echo "2. Esegui: firebase deploy --only functions"
echo ""
echo "URI da aggiungere in Google Cloud Console:"
echo "----------------------------------------"
echo "Authorized JavaScript origins:"
echo "  https://meepotcl.web.app"
echo "  https://meepotcl.firebaseapp.com"
echo "  http://localhost:3000"
echo ""
echo "Authorized redirect URIs:"
echo "  https://meepotcl.web.app/api/auth/callback/google"
echo "  https://meepotcl.firebaseapp.com/api/auth/callback/google"
echo "  http://localhost:3000/api/auth/callback/google"
echo ""