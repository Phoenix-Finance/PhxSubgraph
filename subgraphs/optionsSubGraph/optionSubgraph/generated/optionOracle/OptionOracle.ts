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

export class OptionOracle__getAssetAndUnderlyingPriceResult {
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

export class OptionOracle__getAssetsAggregatorResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class OptionOracle__getUnderlyingAggregatorResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class OptionOracle extends ethereum.SmartContract {
  static bind(address: Address): OptionOracle {
    return new OptionOracle("OptionOracle", address);
  }

  getAssetAndUnderlyingPrice(
    asset: Address,
    underlying: BigInt
  ): OptionOracle__getAssetAndUnderlyingPriceResult {
    let result = super.call(
      "getAssetAndUnderlyingPrice",
      "getAssetAndUnderlyingPrice(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(underlying)
      ]
    );

    return new OptionOracle__getAssetAndUnderlyingPriceResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getAssetAndUnderlyingPrice(
    asset: Address,
    underlying: BigInt
  ): ethereum.CallResult<OptionOracle__getAssetAndUnderlyingPriceResult> {
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
      new OptionOracle__getAssetAndUnderlyingPriceResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getAssetsAggregator(asset: Address): OptionOracle__getAssetsAggregatorResult {
    let result = super.call(
      "getAssetsAggregator",
      "getAssetsAggregator(address):(address,uint256)",
      [ethereum.Value.fromAddress(asset)]
    );

    return new OptionOracle__getAssetsAggregatorResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_getAssetsAggregator(
    asset: Address
  ): ethereum.CallResult<OptionOracle__getAssetsAggregatorResult> {
    let result = super.tryCall(
      "getAssetsAggregator",
      "getAssetsAggregator(address):(address,uint256)",
      [ethereum.Value.fromAddress(asset)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new OptionOracle__getAssetsAggregatorResult(
        value[0].toAddress(),
        value[1].toBigInt()
      )
    );
  }

  getOperator(): Array<Address> {
    let result = super.call("getOperator", "getOperator():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getOperator(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall("getOperator", "getOperator():(address[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
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

  getUnderlyingAggregator(
    underlying: BigInt
  ): OptionOracle__getUnderlyingAggregatorResult {
    let result = super.call(
      "getUnderlyingAggregator",
      "getUnderlyingAggregator(uint256):(address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(underlying)]
    );

    return new OptionOracle__getUnderlyingAggregatorResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_getUnderlyingAggregator(
    underlying: BigInt
  ): ethereum.CallResult<OptionOracle__getUnderlyingAggregatorResult> {
    let result = super.tryCall(
      "getUnderlyingAggregator",
      "getUnderlyingAggregator(uint256):(address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(underlying)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new OptionOracle__getUnderlyingAggregatorResult(
        value[0].toAddress(),
        value[1].toBigInt()
      )
    );
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

  removeOperator(removeAddress: Address): boolean {
    let result = super.call(
      "removeOperator",
      "removeOperator(address):(bool)",
      [ethereum.Value.fromAddress(removeAddress)]
    );

    return result[0].toBoolean();
  }

  try_removeOperator(removeAddress: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "removeOperator",
      "removeOperator(address):(bool)",
      [ethereum.Value.fromAddress(removeAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddOperatorCall extends ethereum.Call {
  get inputs(): AddOperatorCall__Inputs {
    return new AddOperatorCall__Inputs(this);
  }

  get outputs(): AddOperatorCall__Outputs {
    return new AddOperatorCall__Outputs(this);
  }
}

export class AddOperatorCall__Inputs {
  _call: AddOperatorCall;

  constructor(call: AddOperatorCall) {
    this._call = call;
  }

  get addAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddOperatorCall__Outputs {
  _call: AddOperatorCall;

  constructor(call: AddOperatorCall) {
    this._call = call;
  }
}

export class RemoveOperatorCall extends ethereum.Call {
  get inputs(): RemoveOperatorCall__Inputs {
    return new RemoveOperatorCall__Inputs(this);
  }

  get outputs(): RemoveOperatorCall__Outputs {
    return new RemoveOperatorCall__Outputs(this);
  }
}

export class RemoveOperatorCall__Inputs {
  _call: RemoveOperatorCall;

  constructor(call: RemoveOperatorCall) {
    this._call = call;
  }

  get removeAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveOperatorCall__Outputs {
  _call: RemoveOperatorCall;

  constructor(call: RemoveOperatorCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
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

export class SetAssetsAggregatorCall extends ethereum.Call {
  get inputs(): SetAssetsAggregatorCall__Inputs {
    return new SetAssetsAggregatorCall__Inputs(this);
  }

  get outputs(): SetAssetsAggregatorCall__Outputs {
    return new SetAssetsAggregatorCall__Outputs(this);
  }
}

export class SetAssetsAggregatorCall__Inputs {
  _call: SetAssetsAggregatorCall;

  constructor(call: SetAssetsAggregatorCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get aggergator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _decimals(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetAssetsAggregatorCall__Outputs {
  _call: SetAssetsAggregatorCall;

  constructor(call: SetAssetsAggregatorCall) {
    this._call = call;
  }
}

export class SetDecimalsCall extends ethereum.Call {
  get inputs(): SetDecimalsCall__Inputs {
    return new SetDecimalsCall__Inputs(this);
  }

  get outputs(): SetDecimalsCall__Outputs {
    return new SetDecimalsCall__Outputs(this);
  }
}

export class SetDecimalsCall__Inputs {
  _call: SetDecimalsCall;

  constructor(call: SetDecimalsCall) {
    this._call = call;
  }

  get newDecimals(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDecimalsCall__Outputs {
  _call: SetDecimalsCall;

  constructor(call: SetDecimalsCall) {
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

  get addAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetOperatorCall__Outputs {
  _call: SetOperatorCall;

  constructor(call: SetOperatorCall) {
    this._call = call;
  }
}

export class SetOperatorsCall extends ethereum.Call {
  get inputs(): SetOperatorsCall__Inputs {
    return new SetOperatorsCall__Inputs(this);
  }

  get outputs(): SetOperatorsCall__Outputs {
    return new SetOperatorsCall__Outputs(this);
  }
}

export class SetOperatorsCall__Inputs {
  _call: SetOperatorsCall;

  constructor(call: SetOperatorsCall) {
    this._call = call;
  }

  get operators(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class SetOperatorsCall__Outputs {
  _call: SetOperatorsCall;

  constructor(call: SetOperatorsCall) {
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

export class SetPricesCall extends ethereum.Call {
  get inputs(): SetPricesCall__Inputs {
    return new SetPricesCall__Inputs(this);
  }

  get outputs(): SetPricesCall__Outputs {
    return new SetPricesCall__Outputs(this);
  }
}

export class SetPricesCall__Inputs {
  _call: SetPricesCall;

  constructor(call: SetPricesCall) {
    this._call = call;
  }

  get assets(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get prices(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class SetPricesCall__Outputs {
  _call: SetPricesCall;

  constructor(call: SetPricesCall) {
    this._call = call;
  }
}

export class SetUnderlyingAggregatorCall extends ethereum.Call {
  get inputs(): SetUnderlyingAggregatorCall__Inputs {
    return new SetUnderlyingAggregatorCall__Inputs(this);
  }

  get outputs(): SetUnderlyingAggregatorCall__Outputs {
    return new SetUnderlyingAggregatorCall__Outputs(this);
  }
}

export class SetUnderlyingAggregatorCall__Inputs {
  _call: SetUnderlyingAggregatorCall;

  constructor(call: SetUnderlyingAggregatorCall) {
    this._call = call;
  }

  get underlying(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get aggergator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _decimals(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetUnderlyingAggregatorCall__Outputs {
  _call: SetUnderlyingAggregatorCall;

  constructor(call: SetUnderlyingAggregatorCall) {
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
