export const formatPrice = (price: {
  currency: string;
  amount: number;
}): string => {
  const { currency, amount } = price;
  const formattedAmount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
  return formattedAmount;
};
