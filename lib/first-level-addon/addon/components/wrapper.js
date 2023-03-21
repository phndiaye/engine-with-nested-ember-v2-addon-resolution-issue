import Component from '@glimmer/component';

export default class extends Component {
  constructor(owner, args) {
    super(owner, args);
    console.log('ctor: wrapper component using the nested v2 addon');
  }
}
