

import ContactImage from '@/public/images/contact.png';
import Image from 'next/image';

const ContactForm = [
  {
      id:1,
      placeholder:'name'
  },
  {
      id: 2,    
      placeholder:'email'
  },
  {
      id: 3,    
      placeholder:'phone'
  },
  {
      id: 4,    
      placeholder:'subject'
  },
  {
      id: 5,    
      placeholder:'message'
  },
];

const CustomizedInput = ({ id, placeholder }) => <input className='w-full pl-4 py-8 h-6 my-4 border border-solid border-spacing-4 border-black rounded-tr-xl rounded-bl-xl text-xl' placeholder={placeholder} />

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen mb-24">
    <Image src={ContactImage} height={48} width={600} alt="Contact Us" className='w-full h-full mb-6' />
      <div className="grid grid-cols-3 justify-center">
      <div className=""></div>
      <div className="flex flex-col items-center px-8">
        {ContactForm.map(
          ({ id, placeholder }) => <CustomizedInput key={id} placeholder={placeholder} />
        )}
        <input 
          type='submit' 
          className='w-full h-6 pt-4 pb-10 text-xl font-bold focus:outline focus:border-red-600 focus:outline-offset-2 hover:font-bold hover:text-white rounded-md hover:rounded-br-xl hover:rounded-tl-xl bg-gray-500 hover:bg-red-600'
          value='Submit'
        />
      </div>
      <div className="my-6"></div>
    </div>
    </div>
  )
}

export default Contact