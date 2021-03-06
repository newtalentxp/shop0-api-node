import { SessionStorage } from "./auth/session";
import { AuthScopes } from "./auth/scopes";

export interface ContextParams {
  API_KEY: string;
  API_SECRET_KEY: string;
  SCOPES: string[] | AuthScopes;
  HOST_NAME: string;
  API_VERSION: ApiVersion;
  IS_EMBEDDED_APP: boolean;
  IS_PRIVATE_APP?: boolean;
  SESSION_STORAGE?: SessionStorage;
  LOG_FILE?: string;
  USER_AGENT_PREFIX?: string;
}

export enum ApiVersion {
  April19 = "2019-04",
  July19 = "2019-07",
  October19 = "2019-10",
  January20 = "2020-01",
  April20 = "2020-04",
  July20 = "2020-07",
  October20 = "2020-10",
  January21 = "2021-01",
  April21 = "2021-04",
  Unstable = "unstable",
  Unversioned = "unversioned",
}

export enum shop0Header {
  AccessToken = "X-shop0-Access-Token",
  Hmac = "X-shop0-Hmac-Sha256",
  Topic = "X-shop0-Topic",
  Domain = "X-shop0-Shop-Domain",
}
