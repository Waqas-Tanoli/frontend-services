class TenantLinkFactory {
  private PREFIX = '/tenant' as const;

  getRentPage() {
    return `${this.PREFIX}/rent` as const;
  }

  getTicketsPage() {
    return `${this.PREFIX}/tickets` as const;
  }

  getChatPage() {
    return `${this.PREFIX}/chat` as const;
  }

  getSettingsPage() {
    return `${this.PREFIX}/settings` as const;
  }
}

export const tenantLinkFactory = new TenantLinkFactory();
