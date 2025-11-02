import { managerLinkFactory } from './managerLinkFactory';
import { rootLinkFactory } from './rootLinkFactory';
import { tenantLinkFactory } from './tenantLinkFactory';

export const linkFactory = {
  root: rootLinkFactory,
  tenant: tenantLinkFactory,
  manager: managerLinkFactory,
};
