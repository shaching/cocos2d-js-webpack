import HelloWorld from '../res/HelloWorld.png';

const res = {
  HelloWorld_png: HelloWorld,
};

const gResources = [];

for (let i = 0; res.length; i += 1) {
  gResources.push(res[i]);
}

export { res, gResources };
