// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class OptionManager extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("OptionManager", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "OptionManager",
      [address.toHex()],
      context
    );
  }
}

export class OptionPool extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("OptionPool", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "OptionPool",
      [address.toHex()],
      context
    );
  }
}

export class CollateralPool extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("CollateralPool", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "CollateralPool",
      [address.toHex()],
      context
    );
  }
}
