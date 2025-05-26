# Environment Variables for Netlify

Copy these environment variables to your Netlify dashboard:
Site Settings → Environment Variables

```bash
# Firebase Configuration (Your actual values)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAD1Q3ova1i0sii0N0XujlUFJ1hWTMCuNY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=meepotcl.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=meepotcl
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=meepotcl.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=191068431187
NEXT_PUBLIC_FIREBASE_APP_ID=1:191068431187:web:952d80fa6a0475e48a77a6
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-CSSC4YPCM6

# NextAuth Configuration (IMPORTANT: Generate a new secret!)
NEXTAUTH_SECRET=YOUR_GENERATED_SECRET_HERE
NEXTAUTH_URL=https://your-site-name.netlify.app

# Google OAuth (Optional - add if you want Google login)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Important Steps:

1. **Generate NEXTAUTH_SECRET**:
   ```bash
   openssl rand -base64 32
   ```

2. **Update NEXTAUTH_URL**:
   - Replace `your-site-name` with your actual Netlify subdomain
   - Example: `https://meepot.netlify.app`

3. **Firebase Console Setup**:
   - Go to Firebase Console → Authentication → Settings
   - Add your Netlify domain to Authorized domains
   - Enable Email/Password authentication method
   - Enable Google authentication if you want it

4. **Google OAuth Setup** (if using):
   - Go to Google Cloud Console
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `https://your-site.netlify.app/api/auth/callback/google`