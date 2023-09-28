import Image from "next/image";
import { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from "react-player";




 

const kankotri_p2 = () => {
  
  return (
    <div className="kankotri_p2">
       {/* <ReactPlayer
      url="https://soundcloud.com/dimatik/hooligan-hefs-and-we-dimatik-remix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
      autoPlay
      controls 
      autoplay
    /> */}
      
{/* =============================================================================================
                                    Landing
============================================================================================== */}
      
      <section className="kankotri_p2_landing">
        <h1>Krishna</h1>
        <div className="landing_img">  
          <Image src="/kankotri-p2-assets/main.png" height={550} width={600} alt="landing_img"/>
        </div>
        <h1>Divyesh</h1>
      </section>

{/* =============================================================================================
                                    Intro
============================================================================================== */}
      <section className="intro">
        <div className="groom">
          <div className="groom_image">
            <Image src="/kankotri-p2-assets/intro-groom.png"  height={500} width={500} alt="groom_img"/>
          </div>
          <h3>THE GROOM</h3>
          <h2>Divyesh</h2>
          <p>
            Son of: Jentilal Lakhubhai Vaghamshi
            <br/>
            Jayaben Jentilal Vaghamshi
            <br/>
            Education: Bachelor Of Commerce
            <br/>
            Working: Owner At Kunal Construction Company
          </p>
        </div>
        <div className="groom">
        <div className="groom_image">
            <Image src="/kankotri-p2-assets/intro-bride.png" height={500} width={500} alt="bride_img"/>
          </div>
          <h3>THE BRIDE</h3>
          <h2>Krishna</h2>
          <p>
            Daughter of: Sureshbhai Devshibhai Hadiya
            <br/>
            Jayshreeben Sureshbhai Hadiya
            <br/>
            Education: Master Of Science
            <br/>
            Working: Not Working
          </p>
        </div>
      </section>
  
{/* =============================================================================================
                                    Ring
============================================================================================== */}
      <section className="kankotri_p2_ring">
        <Image src="/kankotri-p2-assets/ring.png" height={215} width={340} alt="ring_img"/>
      </section>

{/* =============================================================================================
                                    Love Story
============================================================================================== */}
      <section className="kankotri_p2_love_story">
        <h2>Our Love Story</h2>

        <div className="kankotri_p2_slab">
          <div className="kankotri_p2_slab_image">
            <Image src="/kankotri-p2-assets/love-story-img-1.png" layout="fill" alt="ls_img"/>
          </div>
          <div className="kankotri_p2_slab_right">
            <h3>28 January 2023</h3>
            <h4>We have first meet each other</h4>
            <p>I never would have thought that the day we meet each other was the best day of my entire life. You are really the one for me and i can not help but wonder if it is because of that first time.</p> 
          </div>
        </div>

        <div className="kankotri_p2_slab slab_reverse">
          <div className="kankotri_p2_slab_image">
            <Image src="/kankotri-p2-assets/love-story-2.png" layout="fill" alt="ls_img"/>  
          </div>
          <div className="kankotri_p2_slab_right">
            <h3>14  Febuary 2023</h3>
            <h4>Our First Beautiful Date</h4>
            <p>Now, at last, they were beginning chapter one of the great stories no one on earth has ever read, which goes on forever; in which every chapter is better than the one before.</p>
          </div>
        </div>

        <div className="kankotri_p2_slab">
          <div className="kankotri_p2_slab_image">
            <Image src="/kankotri-p2-assets/love-story-3.png" layout="fill" alt="ls_img"/>  
          </div>
          <div className="kankotri_p2_slab_right">
            <h3>15  March 2023</h3>
            <h4>Engagement</h4>
            <p>Love is just a word until someone comes along and gives it meaning. your love paints a beautiful picture of what love really means.</p>
          </div>
        </div>

        <div className="kankotri_p2_slab slab_reverse">
          <div className="kankotri_p2_slab_image">    
            <Image src="/kankotri-p2-assets/love-story-4.png" layout="fill" alt="ls_img"/>
          </div>
          <div className="kankotri_p2_slab_right">
            <h3>21 April 2023</h3>
            <h4>Our wedding</h4>
            <p>Neither man nor woman is perfect or complete without the other. Never marry the one you can live with, marry the one you cannot live without.</p>
          </div>
        </div>

      </section>
      

{/* =============================================================================================
                                    Family Blessing
============================================================================================== */}
        <section className="kankotri_p2_family_blessing">
          <Image src="/kankotri-p2-assets/family-blessing-image.png" height={220} width={900} alt="fm_img"/>
        </section>
{/* =============================================================================================
                                    Family Members
============================================================================================== */}
      <section className="kankotri_p2_family_members">
        <h2>Family Members</h2>
        <div className="family_members_card_container">

          <div className="family_members_card">
            <Image src="/kankotri-p2-assets/groom-father.png" height={165} width={160} alt="fm_img"/>
            <h3>Hareshbhai</h3>
            <h4>Groom’s Father</h4>
          </div>

          <div className="family_members_card">
            <Image src="/kankotri-p2-assets/groom-mother.png" height={165} width={160} alt="fm_img"/>
            <h3>Vilasben</h3>
            <h4>Groom’s Mother</h4>
          </div>

          <div className="family_members_card">
            <Image src="/kankotri-p2-assets/groom-brother.png" height={165} width={160} alt="fm_img"/>
            <h3>Kaushik</h3>
            <h4>Groom’s Brother</h4>
          </div>

          <div className="family_members_card">
            <Image src="/kankotri-p2-assets/groom-sister.png" height={165} width={160} alt="fm_img"/>
            <h3>Pragana</h3>
            <h4>Groom’s Sister In Law</h4>
          </div>

          <div className="family_members_card">
            <Image src="/kankotri-p2-assets/bride-father.png" height={165} width={160} alt="fm_img"/>
            <h3>Ashokbhai</h3>
            <h4>Bride’s Father</h4>
          </div>

          <div className="family_members_card">
            <Image src="/kankotri-p2-assets/bride-mother.png" height={165} width={160} alt="fm_img"/>
            <h3>Shilpaben</h3>
            <h4>Bride’s Mother</h4>
          </div>

          <div className="family_members_card">
            <Image src="/kankotri-p2-assets/bride-brother.png" height={165} width={160} alt="fm_img"/>
            <h3>Mahesh</h3>
            <h4>Bride’s Brother</h4>
          </div>

          <div className="family_members_card">
            <Image src="/kankotri-p2-assets/bride-sister.png" height={165} width={160} alt="fm_img"/>
            <h3>Riddhi</h3>
            <h4>Bride’s Sister In Law</h4>
          </div>

        </div>
      </section>
      
{/* =============================================================================================
                                    Events
============================================================================================== */}
      <section className="kankotri_p2_events">
        <h2>Events</h2>
        <div className="events_card_container">
          
          <div className="events_card_border">
            <div className="event_card">
              <div className="event_card_image">
               <Image src="/kankotri-p2-assets/event-1.png" height={300} width={336} alt="event_img"/>
              </div>
              <div className="event_card_data">
                <h3>Mehndi Ceremony</h3>
                <p>10:00 AM
                  <br/>Monday - 20th April 2023
                  <br/>At jakhdata ground
                </p>
              </div>
            </div>
          </div>
        
          <div className="events_card_border">
            <div className="event_card">
              <div className="event_card_image">
                <Image src="/kankotri-p2-assets/event-2.png" height={300} width={336} alt="event_img"/>
              </div>
              <div className="event_card_data">
                <h3>Haldi Raas</h3>
                <p>04:00 PM
                  <br/>Monday - 20th April 2023
                  <br/>At jakhdata ground
                  </p>
              </div>
            </div>
          </div>
          
          <div className="events_card_border">
            <div className="event_card">
              <div className="event_card_image">
                <Image src="/kankotri-p2-assets/event-3.png" height={300} width={300} alt="event_img"/>
              </div>
              <div className="event_card_data">
                <h3>Dandiya Raas</h3>
                <p>08:00 PM
                  <br/>Monday - 20th April 2023
                  <br/>At jakhdata ground
                  </p>
              </div>
            </div>
          </div>

          <div className="events_card_border">
            <div className="event_card">
              <div className="event_card_image">
                <Image src="/kankotri-p2-assets/event-4.png" height={300} width={240} alt="event_img"/>
              </div>
              <div className="event_card_data">
                <h3>Ganesh sathapna</h3>
                <p>09:01 AM
                  <br/>Monday - 21th April 2023
                  <br/>At jakhdata ground
                  </p>
              </div>
            </div>
          </div>

          <div className="events_card_border">
            <div className="event_card">
              <div className="event_card_image">
                <Image src="/kankotri-p2-assets/event-5.png" height={300} width={300} alt="event_img"/>
              </div>
              <div className="event_card_data">
                <h3>Wedding Ceremony</h3>
                <p>06:00 PM
                  <br/>Monday - 21th April 2023
                  <br/>At jakhdata ground
                  </p>
              </div>
            </div>
          </div>

          <div className="events_card_border">
            <div className="event_card">
              <div className="event_card_image">
                <Image src="/kankotri-p2-assets/event-6.png" height={250} width={280} alt="event_img"/>
              </div>
              <div className="event_card_data">
                <h3>Bhojan Samaroh</h3>
                <p>07:00 PM
                  <br/>Monday - 21th April 2023
                  <br/>At jakhdata ground
                  </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    

{/* =============================================================================================
                                    Photo Memory
============================================================================================== */}
      <section className="kankotri_p2_photomemory">
        <h2>PHOTO MEMORIES</h2>
        <Carousel className='mt-3 mb-3 p-2 d-block d-md-none'>
          <Carousel.Item>
            <Image height={500} width={500}
              className="d-block w-100"
              src="/kankotri-p2-assets/gallery-img-1.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image height={500} width={500}
              className="d-block w-100"
              src="/kankotri-p2-assets/gallery-img-2.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image height={500} width={500}
              className="d-block w-100"
              src="/kankotri-p2-assets/gallery-img-3.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image height={500} width={500}
              className="d-block w-100"
              src="/kankotri-p2-assets/gallery-img-4.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image height={500} width={500}
              className="d-block w-100"
              src="/kankotri-p2-assets/gallery-img-5.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image height={500} width={500}
              className="d-block w-100"
              src="/kankotri-p2-assets/gallery-img-6.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image height={500} width={500}
              className="d-block w-100"
              src="/kankotri-p2-assets/gallery-img-7.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image height={500} width={500}
              className="d-block w-100"
              src="/kankotri-p2-assets/gallery-img-8.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
        </Carousel>

        <div className='container mt-3 mb-3 d-none d-md-block'>
          <div className='row'>
            <div className='col-12 col-md-3'>
              <Image height={600} width={600}
                className="d-block w-100"
                src="/kankotri-p2-assets/gallery-img-1.png"
                alt="Gallary Img"
              />
            </div>
            <div className='col-12 col-md-3'>
              <Image height={600} width={600}
                className="d-block w-100"
                src="/kankotri-p2-assets/gallery-img-2.png"
                alt="Gallary Img"
              />
            </div>
            <div className='col-12 col-md-3'>
              <Image height={600} width={600}
                className="d-block w-100"
                src="/kankotri-p2-assets/gallery-img-3.png"
                alt="Gallary Img"
              />
            </div>
            <div className='col-12 col-md-3'>
              <Image height={600} width={600}
                className="d-block w-100"
                src="/kankotri-p2-assets/gallery-img-4.png"
                alt="Gallary Img"
              />
            </div>
            <div className='col-12 col-md-3'>
              <Image height={600} width={600}
                className="d-block w-100"
                src="/kankotri-p2-assets/gallery-img-5.png"
                alt="Gallary Img"
              />
            </div>
            <div className='col-12 col-md-3'>
              <Image height={600} width={600}
                className="d-block w-100"
                src="/kankotri-p2-assets/gallery-img-6.png"
                alt="Gallary Img"
              />
            </div>
            <div className='col-12 col-md-3'>
              <Image height={600} width={600}
                className="d-block w-100"
                src="/kankotri-p2-assets/gallery-img-7.png"
                alt="Gallary Img"
              />
            </div>
            <div className='col-12 col-md-3'>
              <Image height={600} width={600}
                className="d-block w-100"
                src="/kankotri-p2-assets/gallery-img-8.png"
                alt="Gallary Img"
              />
            </div>
          </div>
        </div>
        <button className="viewall_btn">View All</button>
      </section>

{/* =============================================================================================
                                    Footer
============================================================================================== */}
      <section className="kankotri_p2_footer">
        <h2>KANKOTRIWALE</h2>
        <p>Your wedding deserves the best. We are here to help you create the most memorable Wedding Invitation</p>
        <h4>Products</h4>
        <div className="links">
          <a>HOME</a>
          <a>CATEGORIES</a>
          <a>INVITATIONS</a>
          <a>STORE</a>
          <a>CONTACT US</a>
        </div>
        <h5>Find Us On</h5>
        <div className="social_media">
          <div className="icon">
            <Image src="/kankotri-p2-assets/facebook-icon.png" height={20} width={10} alt="sm_img"/>
          </div>
          <div className="icon">
            <Image src="/kankotri-p2-assets/instagram-icon.png" height={20} width={20} alt="sm_img"/>
          </div>
          <div className="icon">
            <Image src="/kankotri-p2-assets/pinterest-icon.png" height={20} width={15} alt="sm_img"/>
          </div>
          <div className="icon">
            <Image src="/kankotri-p2-assets/linkedin-icon.png" height={20} width={15} alt="sm_img"/>
          </div>
        </div>
      </section>

    </div>
  )
}

export default kankotri_p2