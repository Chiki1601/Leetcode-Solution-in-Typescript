type DebouncedFunction<F extends (...args: any[]) => any> = (...args: Parameters<F>) => void

function debounce<F extends (...args: any[]) => any>(fn: F, t: number): DebouncedFunction<F> {
    let timer: NodeJS.Timeout | null

    return function (this: any, ...args: Parameters<F>) {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(() => {
            fn.apply(this, args)
        }, t)
    }
}
