import { Util } from '../util/util';
var todate ;
import { Injectable } from '@angular/core';

const construct = function (constructor, argsArray) {
    

  function F(): void {
    constructor.apply(this, argsArray);
  }
  F.prototype = constructor.prototype;
  return new F();
}

const empty = function (constructor, numArgs: number) {
  todate = Util.todate();
  const nullArgs = new Array(numArgs).fill(null);
  return construct(constructor, nullArgs);
}


export class TransactionSumNumberAB {
  static empty(): TransactionSumNumberAB {
    const emptyObj =  empty(TransactionSumNumberAB, 1);
    return emptyObj;
  }

  static sampleSubmitSr(): TransactionSumNumberAB {
    const sample: TransactionSumNumberAB = TransactionSumNumberAB.empty();
    
    sample.numberA = 0;
    sample.numberB = 0;

    return sample;
  }

  constructor (
      public numberA : number,
      public numberB : number
  ) {}
}
