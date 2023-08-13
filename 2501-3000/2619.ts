declare global {
    interface Array<T> {
        last(): T | -1
    }
}

Array.prototype.last = function () {
    if (this.length === 0) {
        return -1
    } else {
        return this[this.length - 1]
    }
}
