import PouchDB from 'pouchdb';

class DB {
  constructor() {
    PouchDB.plugin(require('pouchdb-adapter-node-websql'));
    PouchDB.plugin(require('relational-pouch'));
    PouchDB.plugin(require('pouchdb-find'));
    this.db = new PouchDB('orchin.db', { adapter: 'websql' });
  }

  info = async () => {
    const info = await this.db.info();
    console.log('info', info);
  };
}

export default DB;
