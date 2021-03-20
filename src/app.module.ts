import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
