import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const contact_us = () => {
  return (
    <>
        <Header/>
        <section className='contact_us'>

          <div className='nav_border'></div>

          <div className='contact_us_landing'>
            <div className='left'>
              <h3>Contact us</h3>
              <p>Lorem ipsum dolor sit amet. In eveniet omnis aut nulla eveniet sed sint aperiam eos sunt autem et eaque dolores non amet quia. Et sint natus sed quis ipsum eos assumenda unde quo officiis corporis ut commodi illum ab illum explicabo. <br/> Lorem ipsum dolor sit amet. In eveniet omnis aut nulla eveniet sed sint aperiam eos sunt autem et eaque dolores non amet quia. Et sint natus sed quis ipsum eos assumenda unde quo officiis corporis ut commodi illum ab illum explicabo.</p>
            </div>
            <div className='right'>
              <Image src="/contact-us/contact-us.png" height={600} width={800} alt='contact-us'/>
              {/* <Image src="/contact-us/contact-us.png" layout='fill' alt='contact-us'/> */}
            </div>
          </div>

          <div className='contact_us_form'>
            <form action='' >

              <div className='slab'>
                <label for="full_name">Full Name</label>
                <input type='text' id='full_name' name='full_name' placeholder='Enter your full name'/>
              </div>

              <div className='slab'>
                <label for="email_id">Email id</label>
                <input type='text' id='email_id' name='email_id' placeholder='Enter your email id'/>
              </div>

              <div className='slab'>
                <label for="contact_num">Contact number</label>
                <input type='text' id='contact_num' name='contact_num' placeholder='Enter your contact number'/>
              </div>

              <div className='slab'>
                <label for="Note">Note</label>
                <textarea type='text' id='Note' name='Note' placeholder='Enter your questions'></textarea>
              </div>
              <button>Submit</button>
            </form>
          </div>

          <div className='cards_container'>

            <div className='card_'>
              
              <div className='slab'>
                <div className='left'>
                 <Image  src="/contact-us/phone.png" layout='fill' alt='phone' />
                </div>
                <p>+91 9876543210</p>
              </div>

              <div className='slab'>
                <div className='left'>
                 <Image  src="/contact-us/email.png" layout='fill' alt='email' />
                </div>
                <p>abcdefghi@abcdef.com</p>
              </div>

            </div>

            <div className='card_'>
              
              <div className='slab'>
                <div className='left'>
                 <Image  src="/contact-us/location.png" layout='fill' alt='location' />
                </div>
                <p>abc complex abc near abc road surat
abc complex abc near abc road surat</p>
              </div>

            </div>


          </div>

        </section>
        <Footer/>
    </>
  )
}

export default contact_us