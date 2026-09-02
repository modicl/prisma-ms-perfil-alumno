import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';

// CognitoJwtGuard resuelve issuer y audience en su constructor con `getOrThrow`,
// y AppModule lo instancia al compilar. Sin estas variables el modulo no levanta.
// (El guard anterior fallaba igual pidiendo SUPABASE_URL.)
process.env.COGNITO_USER_POOL_ID ??= 'us-east-1_test';
process.env.COGNITO_CLIENT_ID ??= 'test-client-id';

describe('AppModule', () => {
  it('compiles the module', async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    expect(moduleRef).toBeDefined();
  });
});
