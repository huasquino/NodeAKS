'use strict';

const Hapi = require('@hapi/hapi');
const route = require('./lib/route');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route(route);

const init = async () => {
    try {
        await server.start();
        console.log(`Server running`);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};


process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();