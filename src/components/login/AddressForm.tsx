import React from 'react'
import { TextField } from '@mui/material'
import FormWrapper from './FormWrapper'
import { User } from '../../models/user.model'

interface Props {
      data: User
      updateFields: (fields: Partial<User>) => void
}

function AddressForm({ data, updateFields }: Props) {
      return (
            <FormWrapper title='Address Details'>
                  <TextField required autoFocus id="filled-basic" label="Street" variant="filled" name='street' value={data.street} onChange={e => updateFields({ street: e.target.value })} />
                  <TextField required id="filled-basic" label="City" variant="filled" name='city' value={data.city} onChange={e => updateFields({ city: e.target.value })}/>
                  <TextField required id="filled-basic" label="State" variant="filled" name='state' value={data.state} onChange={e => updateFields({ state: e.target.value })} />
                  <TextField required id="filled-basic" label="Zip" type='number' variant="filled" name='zip' value={data.zip} onChange={e => updateFields({ zip: e.target.value })} />
            </FormWrapper>
      )
}

export default AddressForm