
import { AuthGuardData, createAuthGuard } from 'keycloak-angular';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { inject } from '@angular/core';

/**
 * The logic below is a simple example, please make it more robust when implementing in your application.
 *
 * Reason: isAccessGranted is not validating the resource, since it is merging all roles. Two resources might
 * have the same role name and it makes sense to validate it more granular.
 */
const isAccessAllowed = async (
  route: ActivatedRouteSnapshot,
  __: RouterStateSnapshot,
  authData: AuthGuardData
): Promise<boolean | UrlTree> => {
  const { authenticated, grantedRoles } = authData;
  const router = inject(Router);

  if (!authenticated) {
    return router.parseUrl('/auth/login');
  }

  const requiredRoles: string[] | undefined = route.data['role'];
  if (!requiredRoles?.length) {
    return true;
  }

  const granted = [
    ...grantedRoles.realmRoles,
    ...Object.values(grantedRoles.resourceRoles).flat()
  ];

  if (requiredRoles.some((role) => granted.includes(role))) {
    return true;
  }

  return router.parseUrl('/auth/login');
};

export const canActivateAuthRole = createAuthGuard<CanActivateFn>(isAccessAllowed);
