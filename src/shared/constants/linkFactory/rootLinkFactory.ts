class RootLinkFactory {
  getHomePage() {
    return '/' as const;
  }

  getLogInPage() {
    return '/log-in' as const;
  }

  getSignUpPage() {
    return '/sign-up' as const;
  }

  getResetPasswordPage() {
    return '/reset-password' as const;
  }

  getRiskFormPage() {
    return '/hempstead' as const;
  }
}

export const rootLinkFactory = new RootLinkFactory();
