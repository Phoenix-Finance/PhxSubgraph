// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class leveragePool extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("leveragePool", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "leveragePool",
      [address.toHex()],
      context
    );
  }
}

export class stakePool extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("stakePool", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "stakePool",
      [address.toHex()],
      context
    );
  }
}

export class erc20 extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("erc20", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext("erc20", [address.toHex()], context);
  }
}
