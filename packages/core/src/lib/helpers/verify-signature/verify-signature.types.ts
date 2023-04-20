import type { Network } from "../../options.types";

export interface VerifySignatureParams {
  publicKey: string;
  signature: string;
  message: string;
  nonce: Buffer;
  recipient: string;
  callbackUrl?: string;
}

export interface VerifyFullKeyBelongsToUserParams {
  publicKey: string;
  accountId: string;
  network: Network;
}

export interface FetchUserKeysParams {
  accountId: string;
  network: Network;
}
