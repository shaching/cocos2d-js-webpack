const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');
const compress = require('koa-compress');
const Router = require('koa-router');

const app = new Koa();

const SERVE_OPTIONS = {
  maxage: 365 * 24 * 60 * 60 * 1000,
};

const buildFolder = path.resolve('publish');

const root = new Router();
root.get('*', async (ctx) => {
  ctx.type = 'html';
  ctx.body = fs.createReadStream(`${buildFolder}/index.html`);
});

const router = new Router();
router.use('/', root.routes(), root.allowedMethods());

app.use(logger());
app.use(compress());
app.use(serve(buildFolder, SERVE_OPTIONS));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8080);
