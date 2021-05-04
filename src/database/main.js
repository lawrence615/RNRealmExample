import Realm from 'realm'

// Declare Schema
class BookSchema extends Realm.Object {}
BookSchema.schema = {
    name: 'Book',
    properties: {
        title: 'string',
        pages:  'int',
        edition: 'int?',
        author: 'Author?'
    }
};

class AuthorSchema extends Realm.Object {}
AuthorSchema.schema = {
    name: 'Author',
    properties: {
        firstName: 'string',
        lastName:  'string'
    }
};

// Create realm
let realm = new Realm({schema: [BookSchema, AuthorSchema], schemaVersion: 2});

// Export the realm
export default realm;