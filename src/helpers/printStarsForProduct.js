export const howManyStarsForProduct = (stars) => {

    let ratingOfProduct = []
    for (let i = 0; i <= 2; i++) {
      const star = stars;
      star <= i 
      ? ratingOfProduct.push('far') 
      : ratingOfProduct.push('fas')
    }
    return ratingOfProduct
  }