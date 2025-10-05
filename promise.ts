type TPromiseResolve<T> = (value: T) => void;
type TPromiseReject<T> = (reason: T) => void;

type TPromiseExecutor<T, K> = (
  resolve: TPromiseResolve<T>,
  reject: TPromiseReject<K>
) => void;

type TPromiseThenCallback<T> = (value: T) => void;
type TPromiseCatchCallback<K> = (reason: K) => void;

enum PromiseStatus {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

class Mypromise<T, K> {
  private _status: PromiseStatus = PromiseStatus.PENDING;
  private _value?: T;
  private _reason?: K;

  private _successCallbackHandlers: TPromiseThenCallback<T>[] = [];
  private _failureCallbackHandlers: TPromiseCatchCallback<K>[] = [];

  constructor(executor: TPromiseExecutor<T, K>) {
    executor(this._promiseResolve.bind(this), this._promiseRejector.bind(this));
  }

  public then(handlerFn: TPromiseThenCallback<T>) {
    if (this._status === PromiseStatus.FULFILLED) {
      setTimeout(() => handlerFn(this._value!), 0);
    } else {
      this._successCallbackHandlers.push(handlerFn);
    }
    return this;
  }

  public catch(handlerFn: TPromiseCatchCallback<K>) {
    if (this._status === PromiseStatus.REJECTED) {
      setTimeout(() => handlerFn(this._reason!), 0);
    } else {
      this._failureCallbackHandlers.push(handlerFn);
    }
    return this;
  }

  private _promiseResolve(value: T) {
    if (this._status !== PromiseStatus.PENDING) return;
    this._status = PromiseStatus.FULFILLED;
    this._value = value;
    this._successCallbackHandlers.forEach((cb) => {
      cb(value);
    });
  }

  private _promiseRejector(reason: K) {
    if (this._status !== PromiseStatus.PENDING) return;
    this._status = PromiseStatus.REJECTED;
    this._reason = reason;
    this._failureCallbackHandlers.forEach((cb) => {
      cb(reason);
    });
  }
}

function customPromise() {
  return new Mypromise((resolve, reject) => {
    resolve(1);
  });
}

customPromise()
  .then((value) => {
    console.log("success", value);
  })
  .catch((reason) => {
    console.log("error", reason);
  });
