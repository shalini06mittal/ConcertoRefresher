import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpusersService } from './httpusers.service';

/**
 * Class that guards application from unauthorized access for the urls that needs login
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;

  }
}
