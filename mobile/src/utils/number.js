export function integersOnly(value) {
    return value.replace(/[^0-9]/gim, '')
}
