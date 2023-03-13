import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import ClientTF from './clientTF'
import UploadButton from './upload_button'
import Button2 from './button2'
import Image from 'next/image'
import mainImage from '../public/images/Asset_14.png'
import ImagesGrid from './images_grid'

export default function AddProject({}) {
  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10'>
        <p className='text-xl font-bold'>Add Project</p>
        <Textform label="Title" />
        <DescriptionTF label="Description" />
        <ClientTF label="Client's word" />
        <div>
        <Image className='max-w-[250px] rounded-lg mt-5' src={mainImage} />
        </div>
        <p className='font-bold my-2'>Main image</p>
        <UploadButton />
        <ImagesGrid />
        <p className='font-bold my-2'>More images</p>
        <UploadButton />
        <div className=' my-10'>
        <Button2 name="Add project" />
        </div>
        </div>
    </div>
  )
}