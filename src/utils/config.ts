import { WC_PROJECT_ID, WEB3AUTH_CLIENT_ID } from 'react-native-dotenv';

const Config = {
  WC_PROJECT_ID: WC_PROJECT_ID || process.env.WC_PROJECT_ID,
  WEB3AUTH_CLIENT_ID: WEB3AUTH_CLIENT_ID || process.env.WEB3AUTH_CLIENT_ID,
};

export default Config;
