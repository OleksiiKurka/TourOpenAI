export interface Env {
  appName: string;
  openAI: string;
  google: {
    clientId: string;
    clientSecret: string;
  };
}
