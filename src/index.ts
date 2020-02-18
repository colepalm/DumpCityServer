import { bootstrap } from 'vesper';
import { UserController } from './controller/UserController';
import { User } from './entity/User';
import { SongController } from "./controller/SongController";
import { Song } from "./entity/Song";

bootstrap({
  port: 3000,
  controllers: [
      SongController,
      UserController,
  ],
  entities: [
      Song,
      User,
  ],
  schemas: [
    `${__dirname}/schema/**/*.graphql`
  ]
}).then(() => {
  console.log('Your app is up and running on http://localhost:3000. ' +
    'You can use playground in development mode on http://localhost:3000/playground');

}).catch(error => {
  console.error(error.stack ? error.stack : error);
});
