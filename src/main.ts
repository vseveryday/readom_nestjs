import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.use((req, _, next) => {
    console.log(`Got invoked: '${req.originalUrl}'`);
    next();
  });
  await app.listen(8000, () => {
    console.log('Listening at http:/localhost:' + 8000 + '/' + globalPrefix);
  });
}
bootstrap();
