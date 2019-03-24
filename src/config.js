import HelloWorldScene from '@/app';
import { gResources } from '@/resource';

export default () => {
  const { sys } = cc;
  if (!sys.isNative && document.getElementById('cocosLoading'))
    document.body.removeChild(document.getElementById('cocosLoading'));

  // Pass true to enable retina display, on Android disabled by default to improve performance
  cc.view.enableRetina(sys.os === sys.OS_IOS);

  // Disable auto full screen on baidu and wechat, you might also want to eliminate sys.BROWSER_TYPE_MOBILE_QQ
  if (sys.isMobile && sys.browserType !== sys.BROWSER_TYPE_BAIDU && sys.browserType !== sys.BROWSER_TYPE_WECHAT) {
    cc.view.enableAutoFullScreen(true);
  }

  // Adjust viewport meta
  cc.view.adjustViewPort(true);

  // Uncomment the following line to set a fixed orientation for your game
  // cc.view.setOrientation(cc.ORIENTATION_PORTRAIT);

  // Setup the resolution policy and design resolution size
  cc.view.setDesignResolutionSize(960, 640, cc.ResolutionPolicy.SHOW_ALL);

  // The game will be resized when browser size change
  cc.view.resizeWithBrowserSize(true);

  cc.LoaderScene.preload(
    gResources,
    () => {
      cc.director.runScene(new HelloWorldScene());
    },
    this,
  );
};
