import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from 'src/common/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as basicAuth from 'express-basic-auth';
// import { RateLimiterMiddleware } from './common/middlewares/rate-limiter.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    '/api/docs*',
    basicAuth({
    challenge: true,
    users: {admin: '1234'}
   }),
  );
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe())
  app.enableVersioning()
  // app.use(new RateLimiterMiddleware().use)

  const config = new DocumentBuilder()
    .setTitle('PMS example')
    .setDescription('The PMS API description')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addTag('pms')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(appConfig.port, () => {
    console.log(`Server: http://localhost:${appConfig.port}`);
    console.log(`Docs:   http://localhost:${appConfig.port}/api/docs`);
  });
}
bootstrap();
