import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import React from 'react'

interface Props {
      product: Product
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type Product = {
      id: string
      color: string
      imgUrl: string[]
      bulletColor: string
      quantity: Quantity[]
}

type Quantity = {
      size: string
      amount: number
}

export default function ProductForm ({ product, handleChange }: Props) {
      return (
            <FormControl className='!mx-auto !my-5'>
                  <FormLabel id="demo-row-radio-buttons-group-label" className='!text-xl !text-gray-400'>Size</FormLabel>
                  <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        className='mx-auto gap-6 mt-2'
                  >
                        {product?.quantity.map((item, idx) => (
                              <FormControlLabel key={item.size + idx} disabled={!!(!item.amount)} onChange={handleChange} defaultChecked className='border !mx-0  border-gray-300 w-16 md:w-20 rounded uppercase' value={item.size} control={<Radio />} label={item.size} />
                        ))}
                  </RadioGroup>
            </FormControl>
      )
}
