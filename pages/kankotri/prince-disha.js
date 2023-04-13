import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Carousel from 'react-bootstrap/Carousel';

export default function princeDisha() {  
  return (
    <div className='kankotri_page'>
  
{/* ===================================================================================================
                                       Landing Section
=================================================================================================== */}
      <section className='landing_area'>
        <h2>save the date</h2>
        <h1>prince & disha</h1>
        <h3 className='style_heading'>21.05.2023</h3>
        <div className='landing_img'>
          <Image src="/landing-img.png" alt="Img" height={500} width={500}/>
        </div>
      </section>
      
{/* ===================================================================================================
                                       About information Section
=================================================================================================== */}

      <section className='about_info'>
        <h3 className='style_heading'>about information</h3>
        <div className='card_container'>
          <div className='left'>
            <Image src="/prince.png" alt="Img" height={200} width={200}/>
            <h3>THE GROOM</h3>
            <h2>Prince</h2>
            <p>Son of: Jentilal Lakhubhai Vaghamshi
              <br/> Jayaben Jentilal Vaghamshi
              <br/>Education: Bachelor Of Commerce
              <br/>Working: Owner At Kunal Construction Company</p>
          </div>
          <div className='center'></div>
          <div className='right'>
            <Image src="/disha.png" alt="Img" height={200} width={200}/>
            <h3>THE BRIDE</h3>
            <h2>Disha</h2>
            <p>Daughter of: Sureshbhai Devshibhai Hadiya
            <br/> Jayshreeben Sureshbhai Hadiya
            <br/> Education: Master Of Science
            <br/> Working: Not Working
            </p>
          </div>
        </div>
      </section>

{/* ===================================================================================================
                                       Love Story Section
=================================================================================================== */}
      <section className='love_story'>
        <h3 className='style_heading'>Our Love Story</h3>
        <div className='slab slab-1'>
          <div className='left'>
            <h3>28  January 2023</h3>
            <h4>We have first meet each other</h4>
            <p>I never would have thought that the day we meet each other was the best day of my entire life. You are really the one for me and i can not help but wonder if it is because of that first time.</p>
          </div>
          <div className='right'></div>
        </div>
        <div className='slab slab-2'>
          <div className='left'>
            <h3>14  Febuary 2023</h3>
            <h4>Our First Beautiful Date</h4>
            <p>Now, at last, they were beginning chapter one of the great stories no one on earth has ever read, which goes on forever; in which every chapter is better than the one before.</p>
          </div>
          <div className='right'></div>
        </div>
        <div className='slab slab-3'>
          <div className='left'>
            <h3>15  March 2023</h3>
            <h4>Engagement</h4>
            <p>Love is just a word until someone comes along and gives it meaning. your love paints a beautiful picture of what love really means.</p>
          </div>
          <div className='right'></div>
        </div>
        <div className='slab slab-4'>
          <div className='left'>
            <h3>21 April 2023</h3>
            <h4>Our wedding</h4>
            <p>Neither man nor woman is perfect or complete without the other. Never marry the one you can live with, marry the one you cannot live without.</p>
          </div>
          <div className='right'></div>
        </div>
      </section>

{/* ===================================================================================================
                                       Family Member Section
=================================================================================================== */}
      <section className='family_member'>
        <div className="family_member_container">
          <h3 className='style_heading'>Family Member</h3>
          <div className='family_card'>
            <div className='card'>
              <h3>Hareshbhai</h3>
              <h4>Groom’s Father</h4>
            </div>
            <div className='card card-2'>
              <h3>Vilasben</h3>
              <h4>Groom’s Mother</h4>
            </div>
            <div className='card card-3'>
              <h3>Kaushik</h3>
              <h4>Groom’s Brother</h4>
            </div>
            <div className='card card-4'>
              <h3>Pragana</h3>
              <h4>Groom’s Sister In Law</h4>
            </div>
            <div className='card card-5 card-r-2'>
              <h3>Ashokbhai</h3>
              <h4>Bride’s Father</h4>
            </div>
            <div className='card card-6 card-r-2'>
              <h3>Shilpaben</h3>
              <h4>Bride’s Mother</h4>
            </div>
            <div className='card card-7 card-r-2'>
              <h3>Mahesh</h3>
              <h4>Bride’s Brother</h4>
            </div>
            <div className='card card-8 card-r-2'>
              <h3>Riddhi</h3>
              <h4>Bride’s Sister</h4>
            </div>
          </div>
        </div>
      </section>
{/* ===================================================================================================
                                       Events Section
=================================================================================================== */}
      <section className='events'>
        <div className='events_container'>
          <h3 className='style_heading'>Events</h3>
          <div className='event_card'>
            <Image src="/event-1.png" height={500} width={350} alt='event-1'/>
            <Image src="/event-2.png" height={500} width={350} alt='event-2'/>
            <Image src="/event-3.png" height={500} width={350} alt='event-3'/>
            <Image src="/event-4.png" height={500} width={350} alt='event-4'/>
            <Image src="/event-5.png" height={500} width={350} alt='event-5'/>
            <Image src="/event-6.png" height={500} width={350} alt='event-6'/>
          </div>
        </div>
      </section>

{/* ===================================================================================================
                                       Photo Gallary Section
=================================================================================================== */}

      <section className='gallery'>
        <h3 className='style_heading'>Photo Gallery</h3>
      <Carousel className='mt-3 mb-3 p-2'>
      <Carousel.Item>
        <Image height={600} width={600}
          className="d-block w-100"
          src="/Gallary-pic-1.png"
          alt="Gallary Img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image height={600} width={600}
          className="d-block w-100"
          src="/Gallary-pic-2.png"
          alt="Gallary Img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image height={600} width={600}
          className="d-block w-100"
          src="/Gallary-pic-3.png"
          alt="Gallary Img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image height={600} width={600}
          className="d-block w-100"
          src="/Gallary-pic-4.png"
          alt="Gallary Img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image height={600} width={600}
          className="d-block w-100"
          src="/Gallary-pic-5.png"
          alt="Gallary Img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image height={600} width={600}
          className="d-block w-100"
          src="/Gallary-pic-6.png"
          alt="Gallary Img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image height={600} width={600}
          className="d-block w-100"
          src="/Gallary-pic-7.png"
          alt="Gallary Img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image height={600} width={600}
          className="d-block w-100"
          src="/Gallary-pic-8.png"
          alt="Gallary Img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image height={600} width={600}
          className="d-block w-100"
          src="/Gallary-pic-9.png"
          alt="Gallary Img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image height={600} width={600}
          className="d-block w-100"
          src="/Gallary-pic-10.png"
          alt="Gallary Img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image height={600} width={600}
          className="d-block w-100"
          src="/Gallary-pic-11.png"
          alt="Gallary Img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image height={600} width={600}
          className="d-block w-100"
          src="/Gallary-pic-12.png"
          alt="Gallary Img"
        />
      </Carousel.Item>
    </Carousel>
    </section>
{/* ===================================================================================================
                                       Footer Section
=================================================================================================== */}

      <section className='kankotri_footer'>
          <h5>KANKOTRIWALE</h5>
          <p>Your wedding deserves the best. We are here to help you create the most memorable Wedding Invitation</p>
          <h4>Products</h4>
          <div className='products'>
            <Link href="#">
              <a>HOME</a>
            </Link>
            <Link href="#">
              <a>CATEGORIES</a>
            </Link>
            <Link href="#">
              <a>INVITATIONS</a>
            </Link>
            <Link href="#">
              <a>STORE</a>
            </Link>
            <Link href="#">
              <a>CONTACT US</a>
            </Link>
          </div>
          <h4>Find Us On</h4>
          <div className='find_us_on'>
            <Image src="/k_fb.png" height={35} width={35} alt='fb'/>
            <Image src="/k_ins.png" height={35} width={35} alt='fb'/>
            <Image src="/k_pin.png" height={35} width={35} alt='fb'/>
            <Image src="/k_lin.png" height={35} width={35} alt='fb'/>
          </div>
      </section>
    </div>
  )
}
