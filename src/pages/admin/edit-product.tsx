/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'

export default function EditProduct () {

      const [file, setFile] = useState<File | null>(null)
      const [fileName, setFileName] = useState<string>("")

      function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
            setFile(e.currentTarget.files[0])
            setFileName(e.currentTarget.files[0].name)
      }

      async function handleFileChange (e: React.ChangeEvent<HTMLInputElement>) {
            e.preventDefault()
            const formData = new FormData()
            formData.append('file', file)
            formData.append('upload_preset', 'nextjs-ecommerce')

            try {
                  const res = await fetch('https://api.cloudinary.com/v1_1/dqkstk6dw/image/upload', {
                        method: 'POST',
                        body: formData
                  })
                  console.log(res)
            } catch (err) {
                  console.log(err)
            }

      }
      return (
            <section className='h-screen pt-24'>
                  <form onSubmit={handleSubmit}>
                        <div>
                              <input type='file' onChange={handleFileChange} />
                              <label>{fileName}</label>
                        </div>
                  </form>
            </section>
      )
}
