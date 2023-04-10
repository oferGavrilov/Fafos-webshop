export interface Product {
      advertisement: null
      brandName: string
      colour: string
      colourWayId: number
      facetGroupings: FacetGroupings
      groupId: null
      hasMultiplePrices: boolean
      hasVariantColours: boolean
      id: number
      imageUrl: string
      isSellingFast: boolean
      name: string
      price: Price
      productCode: number
      productType: string
      sponsoredCampaignId: null
      url: string
      videoUrl: string | null
}

interface FacetGroupings {
      products: {
            productId: number
      }
      type: string
}

interface Price {
      currency: string
      current: {
            value: number
            text: string
      }
      isMarkenDown: boolean
      isOutletPrice: boolean
      previous: {
            value: null
            text: string
      }
      rrp: {
            value: null
            text: string
      }
}