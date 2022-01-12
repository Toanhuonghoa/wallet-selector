import BaseWallet from "./BaseWallet";

// TODO: Needs to have CustomWallet for every wallet type, also when developer is adding new wallet a type is needed
export default class CustomWallet extends BaseWallet {
  private onConnectFunction: Function;
  private onDisconnectFunction: Function;
  private isConnectedFunction: Function;

  constructor(
    id: string,
    name: string,
    description: string,
    icon: string,
    onConnectFunction: Function,
    onDisconnectFunction: Function,
    isConnectedFunction: Function
  ) {
    super(id, name, description, icon);

    this.setOnConnectFunction(onConnectFunction);
    this.setOnDisconnectFunction(onDisconnectFunction);
    this.setIsConnectedFunction(isConnectedFunction);
  }

  setOnConnectFunction(onConnectFunction: Function) {
    this.onConnectFunction = onConnectFunction;
  }

  setOnDisconnectFunction(onDisconnectFunction: Function) {
    this.onDisconnectFunction = onDisconnectFunction;
  }

  setIsConnectedFunction(isConnectedFunction: Function) {
    this.isConnectedFunction = isConnectedFunction;
  }

  async walletSelected() {
    this.init();
  }

  async init() {
    this.onConnectFunction();
  }

  async disconnect() {
    this.onDisconnectFunction();
  }

  async isConnected(): Promise<boolean> {
    return this.isConnectedFunction();
  }

  async signIn() {}

  async callContract(method: string, args?: any, gas?: string, deposit?: string): Promise<any> {
    console.log(method, args, gas, deposit);
  }
}
