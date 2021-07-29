// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class EntityLeveragePool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save EntityLeveragePool entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save EntityLeveragePool entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("EntityLeveragePool", id.toString(), this);
  }

  static load(id: string): EntityLeveragePool | null {
    return store.get("EntityLeveragePool", id) as EntityLeveragePool | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get underlyingAddress(): Bytes | null {
    let value = this.get("underlyingAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set underlyingAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("underlyingAddress");
    } else {
      this.set("underlyingAddress", Value.fromBytes(value as Bytes));
    }
  }

  get underlyingName(): string | null {
    let value = this.get("underlyingName");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set underlyingName(value: string | null) {
    if (value === null) {
      this.unset("underlyingName");
    } else {
      this.set("underlyingName", Value.fromString(value as string));
    }
  }
}

export class EntityLeverageFactory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save EntityLeverageFactory entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save EntityLeverageFactory entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("EntityLeverageFactory", id.toString(), this);
  }

  static load(id: string): EntityLeverageFactory | null {
    return store.get(
      "EntityLeverageFactory",
      id
    ) as EntityLeverageFactory | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class EntityTradeItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save EntityTradeItem entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save EntityTradeItem entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("EntityTradeItem", id.toString(), this);
  }

  static load(id: string): EntityTradeItem | null {
    return store.get("EntityTradeItem", id) as EntityTradeItem | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    return value.toBytes();
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get status(): string | null {
    let value = this.get("status");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set status(value: string | null) {
    if (value === null) {
      this.unset("status");
    } else {
      this.set("status", Value.fromString(value as string));
    }
  }

  get settlement(): Bytes | null {
    let value = this.get("settlement");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set settlement(value: Bytes | null) {
    if (value === null) {
      this.unset("settlement");
    } else {
      this.set("settlement", Value.fromBytes(value as Bytes));
    }
  }

  get settlementAmount(): BigInt | null {
    let value = this.get("settlementAmount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set settlementAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("settlementAmount");
    } else {
      this.set("settlementAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get settlementPrice(): BigInt | null {
    let value = this.get("settlementPrice");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set settlementPrice(value: BigInt | null) {
    if (value === null) {
      this.unset("settlementPrice");
    } else {
      this.set("settlementPrice", Value.fromBigInt(value as BigInt));
    }
  }

  get leverageToken(): Bytes | null {
    let value = this.get("leverageToken");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set leverageToken(value: Bytes | null) {
    if (value === null) {
      this.unset("leverageToken");
    } else {
      this.set("leverageToken", Value.fromBytes(value as Bytes));
    }
  }

  get leveragetype(): string | null {
    let value = this.get("leveragetype");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set leveragetype(value: string | null) {
    if (value === null) {
      this.unset("leveragetype");
    } else {
      this.set("leveragetype", Value.fromString(value as string));
    }
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class EntityTotalTVL extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save EntityTotalTVL entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save EntityTotalTVL entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("EntityTotalTVL", id.toString(), this);
  }

  static load(id: string): EntityTotalTVL | null {
    return store.get("EntityTotalTVL", id) as EntityTotalTVL | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class EntityTVL extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save EntityTVL entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save EntityTVL entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("EntityTVL", id.toString(), this);
  }

  static load(id: string): EntityTVL | null {
    return store.get("EntityTVL", id) as EntityTVL | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get token(): Bytes | null {
    let value = this.get("token");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set token(value: Bytes | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromBytes(value as Bytes));
    }
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class EntityInterestAPY extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save EntityInterestAPY entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save EntityInterestAPY entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("EntityInterestAPY", id.toString(), this);
  }

  static load(id: string): EntityInterestAPY | null {
    return store.get("EntityInterestAPY", id) as EntityInterestAPY | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get pool(): Bytes | null {
    let value = this.get("pool");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set pool(value: Bytes | null) {
    if (value === null) {
      this.unset("pool");
    } else {
      this.set("pool", Value.fromBytes(value as Bytes));
    }
  }

  get token(): Bytes | null {
    let value = this.get("token");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set token(value: Bytes | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromBytes(value as Bytes));
    }
  }

  get apy(): BigInt | null {
    let value = this.get("apy");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set apy(value: BigInt | null) {
    if (value === null) {
      this.unset("apy");
    } else {
      this.set("apy", Value.fromBigInt(value as BigInt));
    }
  }
}

export class EntityTradeVol extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save EntityTradeVol entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save EntityTradeVol entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("EntityTradeVol", id.toString(), this);
  }

  static load(id: string): EntityTradeVol | null {
    return store.get("EntityTradeVol", id) as EntityTradeVol | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get token(): Bytes | null {
    let value = this.get("token");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set token(value: Bytes | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromBytes(value as Bytes));
    }
  }

  get buyLeverAmount(): BigInt | null {
    let value = this.get("buyLeverAmount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set buyLeverAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("buyLeverAmount");
    } else {
      this.set("buyLeverAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get buyLeverValue(): BigInt | null {
    let value = this.get("buyLeverValue");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set buyLeverValue(value: BigInt | null) {
    if (value === null) {
      this.unset("buyLeverValue");
    } else {
      this.set("buyLeverValue", Value.fromBigInt(value as BigInt));
    }
  }

  get sellLeverAmount(): BigInt | null {
    let value = this.get("sellLeverAmount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sellLeverAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("sellLeverAmount");
    } else {
      this.set("sellLeverAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get sellLeverValue(): BigInt | null {
    let value = this.get("sellLeverValue");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sellLeverValue(value: BigInt | null) {
    if (value === null) {
      this.unset("sellLeverValue");
    } else {
      this.set("sellLeverValue", Value.fromBigInt(value as BigInt));
    }
  }

  get buyHedgeAmount(): BigInt | null {
    let value = this.get("buyHedgeAmount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set buyHedgeAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("buyHedgeAmount");
    } else {
      this.set("buyHedgeAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get buyHedgeValue(): BigInt | null {
    let value = this.get("buyHedgeValue");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set buyHedgeValue(value: BigInt | null) {
    if (value === null) {
      this.unset("buyHedgeValue");
    } else {
      this.set("buyHedgeValue", Value.fromBigInt(value as BigInt));
    }
  }

  get sellHedgeAmount(): BigInt | null {
    let value = this.get("sellHedgeAmount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sellHedgeAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("sellHedgeAmount");
    } else {
      this.set("sellHedgeAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get sellHedgeValue(): BigInt | null {
    let value = this.get("sellHedgeValue");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sellHedgeValue(value: BigInt | null) {
    if (value === null) {
      this.unset("sellHedgeValue");
    } else {
      this.set("sellHedgeValue", Value.fromBigInt(value as BigInt));
    }
  }
}

export class EntityStakePool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save EntityStakePool entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save EntityStakePool entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("EntityStakePool", id.toString(), this);
  }

  static load(id: string): EntityStakePool | null {
    return store.get("EntityStakePool", id) as EntityStakePool | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get underlyingAddress(): Bytes | null {
    let value = this.get("underlyingAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set underlyingAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("underlyingAddress");
    } else {
      this.set("underlyingAddress", Value.fromBytes(value as Bytes));
    }
  }

  get underlyingName(): string | null {
    let value = this.get("underlyingName");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set underlyingName(value: string | null) {
    if (value === null) {
      this.unset("underlyingName");
    } else {
      this.set("underlyingName", Value.fromString(value as string));
    }
  }

  get interestrate(): BigInt | null {
    let value = this.get("interestrate");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set interestrate(value: BigInt | null) {
    if (value === null) {
      this.unset("interestrate");
    } else {
      this.set("interestrate", Value.fromBigInt(value as BigInt));
    }
  }
}

export class EntityFee extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save EntityFee entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save EntityFee entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("EntityFee", id.toString(), this);
  }

  static load(id: string): EntityFee | null {
    return store.get("EntityFee", id) as EntityFee | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get token(): Bytes | null {
    let value = this.get("token");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set token(value: Bytes | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromBytes(value as Bytes));
    }
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class EntityPrice extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save EntityPrice entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save EntityPrice entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("EntityPrice", id.toString(), this);
  }

  static load(id: string): EntityPrice | null {
    return store.get("EntityPrice", id) as EntityPrice | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get pool(): Bytes {
    let value = this.get("pool");
    return value.toBytes();
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get leverSettlement(): Bytes {
    let value = this.get("leverSettlement");
    return value.toBytes();
  }

  set leverSettlement(value: Bytes) {
    this.set("leverSettlement", Value.fromBytes(value));
  }

  get leverageprice(): BigInt {
    let value = this.get("leverageprice");
    return value.toBigInt();
  }

  set leverageprice(value: BigInt) {
    this.set("leverageprice", Value.fromBigInt(value));
  }

  get hedgeSettlement(): Bytes {
    let value = this.get("hedgeSettlement");
    return value.toBytes();
  }

  set hedgeSettlement(value: Bytes) {
    this.set("hedgeSettlement", Value.fromBytes(value));
  }

  get hedgeprice(): BigInt {
    let value = this.get("hedgeprice");
    return value.toBigInt();
  }

  set hedgeprice(value: BigInt) {
    this.set("hedgeprice", Value.fromBigInt(value));
  }
}
