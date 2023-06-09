/* eslint-disable no-unused-vars */
type environment = 'development' | 'production'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SCHOOL_GUARDIAN_API: string
      NEXT_PUBLIC_VIA_CEP: string
      NEXT_PUBLIC_MODE: environment
      NEXT_PUBLIC_SCHOOL_GUARDIAN_AUTHENTICATOR_USERNAME: string
      NEXT_PUBLIC_SCHOOL_GUARDIAN_AUTHENTICATOR_PASSWORD: string
    }
  }
}

export {}
