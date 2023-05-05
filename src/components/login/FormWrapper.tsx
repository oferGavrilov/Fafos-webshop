import React, { ReactNode } from 'react'

type FormWrapperProps = {
      title: string
      children: ReactNode
}

function FormWrapper({ title, children }: FormWrapperProps) {
      return (
            <>
                  <h2 className='text-4xl text-center'>{title}</h2>
                  <div className='flex flex-col gap-y-6 my-4 w-[90%] mx-auto'>{children}</div>
            </>
      )
}

export default FormWrapper