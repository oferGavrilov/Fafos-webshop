import React, { useState } from 'react'
import SideMenu from './SideMenu'
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import { MdTune } from 'react-icons/md'
interface Props {
  category: string | string[] | undefined
  handleSort: Function
  sort: string
}

function ProductFilter({ category, handleSort, sort }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  function getCategoryText() {
    switch (category) {
      case 'all-swimwear': return 'All Swimwear'
      case 'plus-size': return 'Plus Size'
      case 'b-man': return 'B-Man'
      case 'bottoms': return 'Bottoms'
      case 'tops': return 'Tops'
      case 'one-piece': return 'One Piece'
    }
  }

  return (
    <>
      <section className='text-right mx-10 mt-16 mb-5 flex flex-col'>
        <h2 className='font-fuzzy text-3xl tracking-wide'>{getCategoryText()}</h2>
        <div className='flex justify-between pt-8 gap-4'>
          <Box textAlign={'center'} className="w-1/2 max-w-xs">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                id="demo-simple-select"
                value={sort}
                label="Sort"
                onChange={(ev) => handleSort(ev)}
              >
                <MenuItem value={'none'}>Featured</MenuItem>
                <MenuItem value={'title-ascending'}>Alphabetically, A-Z</MenuItem>
                <MenuItem value={'title-descending'}>Alphabetically, Z-A</MenuItem>
                <MenuItem value={'price-ascending'}>Price, Low to High</MenuItem>
                <MenuItem value={'price-descending'}>Price, High to Low</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <div className='custom-hover flex items-center w-1/2 max-w-xs justify-center gap-2 border cursor-pointer border-[#b2b3b6] rounded' onClick={() => setIsOpen(true)}>
            <span className='font-fuzzy tracking-wider text-lg'>Filters</span>
            <MdTune className='text-2xl' />
          </div>
        </div>
      </section>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} menuType={'filter'} />
    </>
  )
}

export default ProductFilter