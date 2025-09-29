declare module "google-search-results-nodejs" {
  interface GoogleSearchClientOptions {
    key: string;
  }

  interface GoogleSearch {
    json: (params: any, callback: (data: any) => void) => void;
  }

  export class GoogleSearch {
    constructor(apiKey: string);
    json(params: any, callback: (data: any) => void): void;
  }
}
