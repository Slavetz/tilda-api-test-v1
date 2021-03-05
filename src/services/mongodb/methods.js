class DBMethods {
  constructor(model) {
    this.model = model;
  }

  async Create(data) {
    console.log('>>> Create', data);

    return this.model.create(data);
  }

  async Read(filter) {
    console.log('>>> Read', filter);

    return this.model.findOne(filter);
  }

  async Update(filter, data, options) {
    console.log('>>> Update', filter, data);

    return this.model.findOneAndUpdate(filter,
      { $set: data },
      {
        new: true,
        ...options,
      });
  }

  async Delete(filter) {
    console.log('>>> Delete');

    return this.model.deleteOne(filter);
  }
}

module.exports = DBMethods;
