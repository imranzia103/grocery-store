import React, { useState } from 'react'
import { assets } from '../assets/greencart_assets/assets'

const InputField = ({type, placeholder, name, handleChnage, address}) => (

<input className=' w-full px-2 py-2.5 border border-gray-500/30 rounded 
outline-none text-gray-500 focus:border-primary transition'

type={type}
placeholder={placeholder} 
onChange={handleChnage}
name={name}
value={address[name]}
required





/>
)






const AddAddress = () => {


    const [address, setAddress] = useState({

        FirstName:'',
        lastName:'',
        email:'',
        street:'',
        city:'',
        state:'',
        zipcode:'',
        country:'',
        phone:'',
    })

const handleChange = (e) => {

const {name, value} = e.target;
setAddress((prevAddress)=> 
({...prevAddress,
    [name]:value,




}))
console.log(address);


}


    const onSubmitHandler = async (e) => {
        e.preventDefault();
    



    
}


  return (
    <div className=' mt-16 pb-16'>
        <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span
        className='font-semibold text-primary'>Address</span></p>
        <div className=' flex flex-col-reverse md:flex-row justify-between mt-10'>
            <div className=' flex-1 max-w-md'>

<form onSubmit={onSubmitHandler} className=' space-y-3 mt-16 text-sm'>


<div className='grid grid-cols-2 gap-4'>

<InputField handleChange={handleChange} address={address} 
name ="name" type="text" placeholder="First  Name"/>

<InputField handleChange={handleChange} address={address} 
name ="name" type="text" placeholder="Last Name"/>

</div>
<InputField handleChange={handleChange} address={address} 
name ="email" type="email" placeholder="E-mail Address"/>

<InputField handleChange={handleChange} address={address} 
name ="street" type="text" placeholder="street"/>

<div className='grid grid-cols-2 gap-4'>


<InputField handleChange={handleChange} address={address} 
name ="city" type="text" placeholder="city"/>
<InputField handleChange={handleChange} address={address} 
name ="state" type="text" placeholder="state"/>


</div>

<div className='grid grid-cols-2 gap-4'>


<InputField handleChange={handleChange} address={address} 
name ="zipcode" type="number" placeholder="Zip- code"/>
<InputField handleChange={handleChange} address={address} 
name ="country" type="text" placeholder="country"/>


</div>










<InputField handleChange={handleChange} address={address} 
name =" Phone" type=" text" placeholder="phone"/>

<button className=' w-full mt-6 bg-primary text-white py-3
hover:bg-primary-dull transition: cursor pointer uppercase'>
    SAve Address
</button>

</form>


            </div>
            <img src={assets.add_address_iamge} alt=" add adress" />

        </div>
      
    </div>
  )
}

export default AddAddress
