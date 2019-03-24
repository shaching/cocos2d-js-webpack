import HelloWorld from '../res/HelloWorld.png';

const res = {
  HelloWorld_png: HelloWorld,
};

const gResources = [];

Object.keys(res).forEach((key) => {
  gResources.push(res[key]);
});

export { res, gResources };
