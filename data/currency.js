const currencyFormats = {
    "GBP" : new Intl.NumberFormat('en-GB', {
        style : "currency",
        currency : 'GBP'
    }),
    "USD" : new Intl.NumberFormat('en-US', {
        style : "currency",
        currency : "USD"
    })
}

export default (price, currency) => currencyFormats[currency].format(price)