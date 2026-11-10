import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'saathi-care',
  webDir: 'out',
  server: {
    // Use CAPACITOR_SERVER_URL environment variable if set, otherwise fallback to localhost:3000
    // Note:e http://10.0.2.2:3000 instead of localhost if connecting to host machine.
    url: process.env.CAPACITOR_SERVER_URL || 'http://localhost:3000',
    cleartext: true,
  },
};

export default config;
