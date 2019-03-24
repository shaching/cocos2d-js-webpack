cc.game.onStart = () => {
  import('@/config').then((config) => {
    config.default();
  });
};

cc.game.run();
