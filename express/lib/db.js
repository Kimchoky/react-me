const { open } = require('sqlite');
const sqlite3 = require('sqlite3');

const db = (() => {
    /** @type Database<sqlite3.Database, sqlite3.Statement> */
    let instance = null;
    open({ filename: './db/db.sqlite', driver: sqlite3.Database} )
        .then(_db => {
        console.log('initaializing DB');
        instance = _db;

    });

    return {
        getInstance: () => instance,
        /** @param cb { function } */
        destroy: async () => { 
            console.log('\nclosing DB..');
            instance && await instance.close();
            console.log('DB closed');
        }
    }
})();


module.exports = db;