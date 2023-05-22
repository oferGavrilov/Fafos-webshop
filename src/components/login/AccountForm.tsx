import React from 'react'
import { TextField } from '@mui/material'
import FormWrapper from './FormWrapper'
import { User } from '../../models/user.model'

interface Props {
      data: User
      updateFields:  (fields: Partial<User>) => void
}

function AccountForm({data , updateFields}:Props) {

      return (
            <FormWrapper title='Account Details'>
                  <TextField autoFocus id="filled-basic" required type='email' label="Email" variant="filled" name='email' value={data.email} onChange={e => updateFields({ email: e.target.value })} />
                  <TextField  id="filled-basic" required type='password' label="Password" variant="filled" name='password' value={data.password} onChange={e => updateFields({ password: e.target.value })} />
            </FormWrapper>
      )
}

export default AccountForm