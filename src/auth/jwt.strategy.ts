/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // This looks for the token in the "Authorization: Bearer <token>" header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${process.env.ACCESS_TOKEN_SECRET}`, // MUST match the secret in AuthModule
    });
  }

  // This function runs AFTER the token is verified
  // eslint-disable-next-line @typescript-eslint/require-await
  async validate(payload: any) {
    // Whatever you return here is added to the Request object (req.user)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return { userId: payload.sub, username: payload.username };
  }
}
