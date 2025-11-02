class ManagerLinkFactory {
  private PREFIX = '/manage' as const;

  getDashboardPage() {
    return `${this.PREFIX}/dashboard` as const;
  }
}

export const managerLinkFactory = new ManagerLinkFactory();
