export function localCurrency(
  country: string, 
  currency: string, 
  price: number): string
{
  return new Intl.NumberFormat(country, { 
    style: 'currency', 
    currency: currency 
  }).format(price);
}