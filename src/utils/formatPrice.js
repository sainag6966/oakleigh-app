export const priceFormatter = (price, trailZero) => {
  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: trailZero ? 2 : 0,
  }).format(price)
  return formattedPrice
}
