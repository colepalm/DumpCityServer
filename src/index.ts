import { bootstrap } from 'vesper';
import { UserController } from './controller/UserController';
import { User } from './entity/User';
import { SongController } from "./controller/SongController";
import { Song } from "./entity/Song";
import { MessageController } from "./controller/MessageController";
import { SongInstanceController } from "./controller/SongInstanceController";
import { VenueController } from "./controller/VenueController";
import { Show } from "./entity/Show";
import { Venue } from "./entity/Venue";
import { SongInstance } from "./entity/SongInstance";

bootstrap({
  port: 3000,
  controllers: [
      MessageController,
      SongController,
      SongInstanceController,
      UserController,
      VenueController
  ],
  entities: [
      Show,
      Song,
      SongInstance,
      User,
      Venue

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
