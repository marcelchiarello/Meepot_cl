# Netlify Deployment Guide for Meepot

This guide explains how to deploy Meepot to Netlify with all features working correctly.

## 🚀 Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/marcelchiarello/Meepot_cl)

## 📋 Prerequisites

1. Netlify account (free tier works)
2. Firebase project configured
3. GitHub repository connected

## 🔧 Step-by-Step Deployment

### 1. Import Project to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select `marcelchiarello/Meepot_cl`
4. Keep default build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### 2. Configure Environment Variables

In Netlify Dashboard → Site Settings → Environment Variables, add:

```bash
# Firebase (Required)
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# NextAuth (Required)
NEXTAUTH_SECRET=your-generated-secret
NEXTAUTH_URL=https://your-site-name.netlify.app

# OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# APIs (Optional)
OPENROUTER_API_KEY=your-openrouter-key
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-mapbox-token
```

### 3. Generate NEXTAUTH_SECRET

Run this command locally to generate a secure secret:
```bash
openssl rand -base64 32
```

### 4. Configure Firebase

1. Add your Netlify domain to Firebase authorized domains:
   - Firebase Console → Authentication → Settings → Authorized domains
   - Add: `your-site-name.netlify.app`

2. Update OAuth redirect URIs:
   - Google Cloud Console → APIs & Services → Credentials
   - Add: `https://your-site-name.netlify.app/api/auth/callback/google`

### 5. Deploy

1. Push your code to GitHub
2. Netlify will automatically build and deploy
3. Check build logs in Netlify dashboard

## 🔍 Features Configured for Netlify

### ✅ Next.js Compatibility
- `netlify.toml` configured for Next.js 14+
- Edge functions enabled for optimal performance
- API routes handled by Netlify Functions

### ✅ Authentication
- NextAuth.js works with Netlify Functions
- OAuth callbacks configured
- Secure cookie handling

### ✅ Security Headers
- X-Frame-Options: DENY
- X-XSS-Protection enabled
- Content Security Policy ready

### ✅ Performance
- Automatic image optimization
- Edge caching configured
- Static asset optimization

## 🐛 Troubleshooting

### Build Fails
1. Check Node version (should be 18+)
2. Verify all environment variables are set
3. Check build logs for specific errors

### Authentication Issues
1. Verify NEXTAUTH_URL matches your Netlify URL
2. Check Firebase authorized domains
3. Ensure OAuth redirect URIs are correct

### 404 Errors on Routes
- The `_redirects` file ensures client-side routing works
- If issues persist, check `netlify.toml` configuration

## 📊 Netlify Features to Enable

### Recommended Plugins
1. **Essential for Next.js** (already configured)
2. **Sitemap generator** (optional)
3. **Lighthouse CI** (performance monitoring)

### Forms (Optional)
Netlify Forms can be used for contact forms:
```html
<form name="contact" netlify>
  <!-- form fields -->
</form>
```

### Analytics (Optional)
Enable Netlify Analytics in dashboard for visitor insights

## 🔄 Continuous Deployment

1. **Auto Deploy**: Enabled by default for main branch
2. **Preview Deploys**: Each PR gets a unique URL
3. **Branch Deploys**: Deploy other branches if needed

## 📝 Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] Authentication works (login/register)
- [ ] Firebase connection established
- [ ] Environment variables properly set
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active

## 🌐 Custom Domain (Optional)

1. Netlify Dashboard → Domain Settings
2. Add custom domain
3. Update DNS records as instructed
4. Update environment variables:
   - `NEXTAUTH_URL=https://yourdomain.com`
5. Update Firebase authorized domains

## 🚨 Important Notes

1. **Free Tier Limits**: 
   - 100GB bandwidth/month
   - 300 build minutes/month
   - Sufficient for most projects

2. **Environment Variables**:
   - Never commit `.env.local`
   - Use Netlify dashboard for production vars

3. **Firebase Security**:
   - Keep Firebase rules strict
   - Monitor usage in Firebase console

## 📞 Support

- [Netlify Documentation](https://docs.netlify.com)
- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js)
- [GitHub Issues](https://github.com/marcelchiarello/Meepot_cl/issues)