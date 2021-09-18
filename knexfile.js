// Update with your config settings.
module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/slmedforum',

    },
    production: {
        client: 'pg',
        connection: 'https://slmedforum-db.herokuapp.com/',
    },
};