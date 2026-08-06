import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminActionsGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request:any = context.switchToHttp().getRequest()
    
    const authHeader = request.headers.authorization
    const token:string = authHeader?.split(' ')[1]

    if(token !== 'SABALI'){
      return false
    }
    
    return true;
  }
}
