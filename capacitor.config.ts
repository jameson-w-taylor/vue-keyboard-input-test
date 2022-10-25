import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'vue-keyboard-input-test',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    Keyboard: {
      resizeOnFullScreen: true
    }
  }
};

export default config;
