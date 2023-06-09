const CURRENT_FORMATTER = new Intl.NumberFormat(undefined, {
      currency: 'ILS',
      style: 'currency'
})

export default function formatCurrency(number: number): string {
      return CURRENT_FORMATTER.format(number)
}