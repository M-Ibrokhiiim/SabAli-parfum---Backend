import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class AdminActionsGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    
    const authHeader = request.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if (token !== 'SABALI') {
      return false;
    }
    
    return true;
  }
}
