// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OperatorTransferred extends ethereum.Event {
  get params(): OperatorTransferred__Params {
    return new OperatorTransferred__Params(this);
  }
}

export class OperatorTransferred__Params {
  _event: OperatorTransferred;

  constructor(event: OperatorTransferred) {
    this._event = event;
  }

  get previousOperator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOperator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get index(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OriginTransferred extends ethereum.Event {
  get params(): OriginTransferred__Params {
    return new OriginTransferred__Params(this);
  }
}

export class OriginTransferred__Params {
  _event: OriginTransferred;

  constructor(event: OriginTransferred) {
    this._event = event;
  }

  get previousOrigin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOrigin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class phxoracle__getAssetAndUnderlyingPriceResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class phxoracle extends ethereum.SmartContract {
  static bind(address: Address): phxoracle {
    return new phxoracle("phxoracle", address);
  }

  getAssetAndUnderlyingPrice(
    asset: Address,
    underlying: BigInt
  ): phxoracle__getAssetAndUnderlyingPriceResult {
    let result = super.call(
      "getAssetAndUnderlyingPrice",
      "getAssetAndUnderlyingPrice(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(underlying)
      ]
    );

    return new phxoracle__getAssetAndUnderlyingPriceResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getAssetAndUnderlyingPrice(
    asset: Address,
    underlying: BigInt
  ): ethereum.CallResult<phxoracle__getAssetAndUnderlyingPriceResult> {
    let result = super.tryCall(
      "getAssetAndUnderlyingPrice",
      "getAssetAndUnderlyingPrice(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(underlying)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new phxoracle__getAssetAndUnderlyingPriceResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getBuyOptionsPrice(oToken: Address): BigInt {
    let result = super.call(
      "getBuyOptionsPrice",
      "getBuyOptionsPrice(address):(uint256)",
      [ethereum.Value.fromAddress(oToken)]
    );

    return result[0].toBigInt();
  }

  try_getBuyOptionsPrice(oToken: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getBuyOptionsPrice",
      "getBuyOptionsPrice(address):(uint256)",
      [ethereum.Value.fromAddress(oToken)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOperator(index: BigInt): Address {
    let result = super.call("getOperator", "getOperator(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toAddress();
  }

  try_getOperator(index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getOperator",
      "getOperator(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPrice(asset: Address): BigInt {
    let result = super.call("getPrice", "getPrice(address):(uint256)", [
      ethereum.Value.fromAddress(asset)
    ]);

    return result[0].toBigInt();
  }

  try_getPrice(asset: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getPrice", "getPrice(address):(uint256)", [
      ethereum.Value.fromAddress(asset)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPrices(assets: Array<BigInt>): Array<BigInt> {
    let result = super.call("getPrices", "getPrices(uint256[]):(uint256[])", [
      ethereum.Value.fromUnsignedBigIntArray(assets)
    ]);

    return result[0].toBigIntArray();
  }

  try_getPrices(assets: Array<BigInt>): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getPrices",
      "getPrices(uint256[]):(uint256[])",
      [ethereum.Value.fromUnsignedBigIntArray(assets)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getSellOptionsPrice(oToken: Address): BigInt {
    let result = super.call(
      "getSellOptionsPrice",
      "getSellOptionsPrice(address):(uint256)",
      [ethereum.Value.fromAddress(oToken)]
    );

    return result[0].toBigInt();
  }

  try_getSellOptionsPrice(oToken: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSellOptionsPrice",
      "getSellOptionsPrice(address):(uint256)",
      [ethereum.Value.fromAddress(oToken)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUnderlyingPrice(underlying: BigInt): BigInt {
    let result = super.call(
      "getUnderlyingPrice",
      "getUnderlyingPrice(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(underlying)]
    );

    return result[0].toBigInt();
  }

  try_getUnderlyingPrice(underlying: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUnderlyingPrice",
      "getUnderlyingPrice(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(underlying)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class RenounceOriginCall extends ethereum.Call {
  get inputs(): RenounceOriginCall__Inputs {
    return new RenounceOriginCall__Inputs(this);
  }

  get outputs(): RenounceOriginCall__Outputs {
    return new RenounceOriginCall__Outputs(this);
  }
}

export class RenounceOriginCall__Inputs {
  _call: RenounceOriginCall;

  constructor(call: RenounceOriginCall) {
    this._call = call;
  }
}

export class RenounceOriginCall__Outputs {
  _call: RenounceOriginCall;

  constructor(call: RenounceOriginCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetBuyOptionsPriceCall extends ethereum.Call {
  get inputs(): SetBuyOptionsPriceCall__Inputs {
    return new SetBuyOptionsPriceCall__Inputs(this);
  }

  get outputs(): SetBuyOptionsPriceCall__Outputs {
    return new SetBuyOptionsPriceCall__Outputs(this);
  }
}

export class SetBuyOptionsPriceCall__Inputs {
  _call: SetBuyOptionsPriceCall;

  constructor(call: SetBuyOptionsPriceCall) {
    this._call = call;
  }

  get optoken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetBuyOptionsPriceCall__Outputs {
  _call: SetBuyOptionsPriceCall;

  constructor(call: SetBuyOptionsPriceCall) {
    this._call = call;
  }
}

export class SetManagerCall extends ethereum.Call {
  get inputs(): SetManagerCall__Inputs {
    return new SetManagerCall__Inputs(this);
  }

  get outputs(): SetManagerCall__Outputs {
    return new SetManagerCall__Outputs(this);
  }
}

export class SetManagerCall__Inputs {
  _call: SetManagerCall;

  constructor(call: SetManagerCall) {
    this._call = call;
  }

  get newManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetManagerCall__Outputs {
  _call: SetManagerCall;

  constructor(call: SetManagerCall) {
    this._call = call;
  }
}

export class SetOperatorCall extends ethereum.Call {
  get inputs(): SetOperatorCall__Inputs {
    return new SetOperatorCall__Inputs(this);
  }

  get outputs(): SetOperatorCall__Outputs {
    return new SetOperatorCall__Outputs(this);
  }
}

export class SetOperatorCall__Inputs {
  _call: SetOperatorCall;

  constructor(call: SetOperatorCall) {
    this._call = call;
  }

  get index(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetOperatorCall__Outputs {
  _call: SetOperatorCall;

  constructor(call: SetOperatorCall) {
    this._call = call;
  }
}

export class SetOptionsBuyAndSellPriceCall extends ethereum.Call {
  get inputs(): SetOptionsBuyAndSellPriceCall__Inputs {
    return new SetOptionsBuyAndSellPriceCall__Inputs(this);
  }

  get outputs(): SetOptionsBuyAndSellPriceCall__Outputs {
    return new SetOptionsBuyAndSellPriceCall__Outputs(this);
  }
}

export class SetOptionsBuyAndSellPriceCall__Inputs {
  _call: SetOptionsBuyAndSellPriceCall;

  constructor(call: SetOptionsBuyAndSellPriceCall) {
    this._call = call;
  }

  get optokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get buyPrices(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get SellPrices(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class SetOptionsBuyAndSellPriceCall__Outputs {
  _call: SetOptionsBuyAndSellPriceCall;

  constructor(call: SetOptionsBuyAndSellPriceCall) {
    this._call = call;
  }
}

export class SetPriceCall extends ethereum.Call {
  get inputs(): SetPriceCall__Inputs {
    return new SetPriceCall__Inputs(this);
  }

  get outputs(): SetPriceCall__Outputs {
    return new SetPriceCall__Outputs(this);
  }
}

export class SetPriceCall__Inputs {
  _call: SetPriceCall;

  constructor(call: SetPriceCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetPriceCall__Outputs {
  _call: SetPriceCall;

  constructor(call: SetPriceCall) {
    this._call = call;
  }
}

export class SetPriceAndUnderlyingPriceCall extends ethereum.Call {
  get inputs(): SetPriceAndUnderlyingPriceCall__Inputs {
    return new SetPriceAndUnderlyingPriceCall__Inputs(this);
  }

  get outputs(): SetPriceAndUnderlyingPriceCall__Outputs {
    return new SetPriceAndUnderlyingPriceCall__Outputs(this);
  }
}

export class SetPriceAndUnderlyingPriceCall__Inputs {
  _call: SetPriceAndUnderlyingPriceCall;

  constructor(call: SetPriceAndUnderlyingPriceCall) {
    this._call = call;
  }

  get assets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get assetPrices(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get underlyings(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get ulPrices(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }
}

export class SetPriceAndUnderlyingPriceCall__Outputs {
  _call: SetPriceAndUnderlyingPriceCall;

  constructor(call: SetPriceAndUnderlyingPriceCall) {
    this._call = call;
  }
}

export class SetSellOptionsPriceCall extends ethereum.Call {
  get inputs(): SetSellOptionsPriceCall__Inputs {
    return new SetSellOptionsPriceCall__Inputs(this);
  }

  get outputs(): SetSellOptionsPriceCall__Outputs {
    return new SetSellOptionsPriceCall__Outputs(this);
  }
}

export class SetSellOptionsPriceCall__Inputs {
  _call: SetSellOptionsPriceCall;

  constructor(call: SetSellOptionsPriceCall) {
    this._call = call;
  }

  get optoken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetSellOptionsPriceCall__Outputs {
  _call: SetSellOptionsPriceCall;

  constructor(call: SetSellOptionsPriceCall) {
    this._call = call;
  }
}

export class SetUnderlyingPriceCall extends ethereum.Call {
  get inputs(): SetUnderlyingPriceCall__Inputs {
    return new SetUnderlyingPriceCall__Inputs(this);
  }

  get outputs(): SetUnderlyingPriceCall__Outputs {
    return new SetUnderlyingPriceCall__Outputs(this);
  }
}

export class SetUnderlyingPriceCall__Inputs {
  _call: SetUnderlyingPriceCall;

  constructor(call: SetUnderlyingPriceCall) {
    this._call = call;
  }

  get underlying(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetUnderlyingPriceCall__Outputs {
  _call: SetUnderlyingPriceCall;

  constructor(call: SetUnderlyingPriceCall) {
    this._call = call;
  }
}

export class TransferOriginCall extends ethereum.Call {
  get inputs(): TransferOriginCall__Inputs {
    return new TransferOriginCall__Inputs(this);
  }

  get outputs(): TransferOriginCall__Outputs {
    return new TransferOriginCall__Outputs(this);
  }
}

export class TransferOriginCall__Inputs {
  _call: TransferOriginCall;

  constructor(call: TransferOriginCall) {
    this._call = call;
  }

  get newOrigin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOriginCall__Outputs {
  _call: TransferOriginCall;

  constructor(call: TransferOriginCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
