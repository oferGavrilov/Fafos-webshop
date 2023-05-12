import React from 'react'
import FormWrapper from './FormWrapper'
import { TextField } from '@mui/material'
import { User } from '@/models/user.model'

interface Props {
      data: User
      updateFields: Function
}

function UserForm({ data, updateFields }: Props) {

      return (
            <FormWrapper title="User Details">
                  <TextField autoFocus required value={data.firstName} name='firstName' onChange={e => updateFields({ firstName: e.target.value })} label="First Name" variant="filled" />
                  <TextField id="filled-basic" required label="Last Name" variant="filled" value={data.lastName} name='lastName' onChange={e => updateFields({ lastName: e.target.value })} />
            </FormWrapper>
      )
}

export default UserForm