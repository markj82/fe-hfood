export const totalPrice = basket => {
    return basket.filter(item => item.price).reduce((a, b) => a + b.price, 0)
}