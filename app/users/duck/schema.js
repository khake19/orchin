import DB from '../../db';

class Schema extends DB {
  constructor() {
    super();
    this.db.setSchema([
      {
        singular: 'user',
        plural: 'users'
      }
    ]);
    this.createIndex();
  }

  createIndex = async () => {
    await this.db.createIndex({
      index: {
        fields: ['data.firstName']
      }
    });
    const getIndex = await this.db.getIndexes();
    console.log('get index', getIndex);
  };

  save = data => {
    const user = this.db.rel.save('users', {
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      address: data.address,
      age: data.age,
      gender: data.gender
    });
    return user;
  };

  count = async selector => {
    const data = await this.db.find(selector);
    const result = await this.db.rel.parseRelDocs('user', data.docs);
    return result.users.length;
  };

  findAll = async options => {
    let selector = {
      selector: { 'data.firstName': { $eq: options.filters.searchTerm } }
    };

    if (!options.filters.searchTerm) {
      selector = { selector: { 'data.firstName': { $gte: null } } };
    }

    const count = await this.count(selector);

    selector.sort = ['data.firstName'];
    selector.limit = options.pagination.limit;
    selector.skip = options.pagination.skip;

    const data = await this.db.find(selector);
    const result = await this.db.rel.parseRelDocs('user', data.docs);

    return {
      result: result.users,
      total: count,
      limit: selector.limit,
      page: options.pagination.page
    };
  };

  delete = async id => {
    const docs = await this.db.rel.find('user', id);
    const user = await this.db.rel.del('user', docs);
    return user;
  };
}

export default Schema;
