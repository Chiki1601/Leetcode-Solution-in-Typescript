type F = (x: number) => number

function compose(functions: F[]): F {
    return functions.reduceRight(
        (prevFn, nextFn) => {
            return x => nextFn(prevFn(x))
        },
        x => x
    )
}
