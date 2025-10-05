var PromiseStatus;
(function (PromiseStatus) {
    PromiseStatus["PENDING"] = "pending";
    PromiseStatus["FULFILLED"] = "fulfilled";
    PromiseStatus["REJECTED"] = "rejected";
})(PromiseStatus || (PromiseStatus = {}));
var Mypromise = /** @class */ (function () {
    function Mypromise(executor) {
        this._status = PromiseStatus.PENDING;
        this._successCallbackHandlers = [];
        this._failureCallbackHandlers = [];
        executor(this._promiseResolve.bind(this), this._promiseRejector.bind(this));
    }
    Mypromise.prototype.then = function (handlerFn) {
        var _this = this;
        if (this._status === PromiseStatus.FULFILLED) {
            setTimeout(function () { return handlerFn(_this._value); }, 0);
        }
        else {
            this._successCallbackHandlers.push(handlerFn);
        }
        return this;
    };
    Mypromise.prototype.catch = function (handlerFn) {
        var _this = this;
        if (this._status === PromiseStatus.REJECTED) {
            setTimeout(function () { return handlerFn(_this._reason); }, 0);
        }
        else {
            this._failureCallbackHandlers.push(handlerFn);
        }
        return this;
    };
    Mypromise.prototype._promiseResolve = function (value) {
        if (this._status !== PromiseStatus.PENDING)
            return;
        this._status = PromiseStatus.FULFILLED;
        this._value = value;
        this._successCallbackHandlers.forEach(function (cb) {
            cb(value);
        });
    };
    Mypromise.prototype._promiseRejector = function (reason) {
        if (this._status !== PromiseStatus.PENDING)
            return;
        this._status = PromiseStatus.REJECTED;
        this._reason = reason;
        this._failureCallbackHandlers.forEach(function (cb) {
            cb(reason);
        });
    };
    return Mypromise;
}());
function customPromise() {
    return new Mypromise(function (resolve, reject) {
        resolve(1);
    });
}
customPromise()
    .then(function (value) {
    console.log("success", value);
})
    .catch(function (reason) {
    console.log("error", reason);
});
