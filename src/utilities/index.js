export const priceFormatted = (price, currency = "ARS", minimunDigits = 2) => price.toLocaleString('es-ar', {
  style: 'currency',
  currency: currency,
  minimumFractionDigits: minimunDigits
});

export const totalPrice = (array) => {
  let total = 0;

  if (Array.isArray(array)) {
    const totalAmount = (prevValue, currentValue) => prevValue + currentValue.price * currentValue.quantity
    total = array.reduce(totalAmount, 0)
  }

  return total
}
