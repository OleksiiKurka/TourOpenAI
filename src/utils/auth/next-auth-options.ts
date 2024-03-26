import Google from 'next-auth/providers/google';

import { envUtil } from '..';

import type { AuthOptions } from 'next-auth';

const env = envUtil.getEnv();

export const authOptions: AuthOptions = {
  providers: [
    Google({
      ...env.google,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  pages: {
    error: '/sign-in',
    signIn: '/sign-in'
  },
  cookies: {
    sessionToken: {
      name: 'session-token',
      options: {
        path: '/'
      }
    },
    callbackUrl: {
      name: 'callback-url',
      options: {
        path: '/'
      }
    },
    csrfToken: {
      name: 'csrf-token',
      options: {
        path: '/'
      }
    }
  }
};
