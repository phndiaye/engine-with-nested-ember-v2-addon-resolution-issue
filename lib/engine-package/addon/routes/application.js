import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class extends Route {
  @service store;

  beforeModel() {
    console.log('rooooute from engine');
    console.log('record', this.store.createRecord('user'));
  }
}
