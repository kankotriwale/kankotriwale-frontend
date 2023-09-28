import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';

const kankotri_p4 = () => {

    function scroll_left(){
      if(window.screen.width <= '760'){
        document.getElementById('scroll').scrollBy(-350,0);
      }else{
        document.getElementById('scroll').scrollBy(-430,0);
      }
    };
    function scroll_right(){
      if(window.screen.width <= '760'){
        document.getElementById('scroll').scrollBy(350,0);
      }else{
        document.getElementById('scroll').scrollBy(430,0);
      }
    };

  return (
    <div className='kankotri_p4'>
      
{/* // ======================================================================================================
//                                     /Landing
// ===================================================================================================== */}
        <section className='landing'>
          
          {/* // -----------------------------------------------------------------------------------------
          //                                     /Landing Left
          // ----------------------------------------------------------------------------------------- */}
          
            <div className='left'>
              <p>YOU ARE CORDIALLY INVITED TO CELEBRATE THE WEDDING CEREMONY OF</p>
              <h1>Jaydeep & Jalpa </h1>
              <span>21.05.2023</span>
            </div>

          {/* // -----------------------------------------------------------------------------------------
          //                                     /Landing Right
          // ----------------------------------------------------------------------------------------- */}
            
            <div className='right'>
              <div className='img_1_container'>
                <Image src="/kankotri-p4-assets/main-1.png" height={540} width={420} alt='main-1'/>

                <div className='img_2_container'>
                  <Image src="/kankotri-p4-assets/main-2.png" height={300} width={300} alt='main-1'/>
                </div>

              </div>
              
            </div>

        </section>

{/* // ======================================================================================================
//                                     /Intro
// ===================================================================================================== */}
        
        <section className='intro'>
          
          {/* // -----------------------------------------------------------------------------------------
          //                                     /Intro Left
          // ----------------------------------------------------------------------------------------- */}
         
          <div className='left_right'>
            <Image src="/kankotri-p4-assets/bride.png" height={350} width={350} alt='main-1'/>
          </div>

          {/* // -----------------------------------------------------------------------------------------
          //                                     /Intro Center
          // ----------------------------------------------------------------------------------------- */}
          
          <div className='center'>
            <h4>SAVE THE DATE</h4>
            <h3>Jaydeep & Jalpa </h3>
            <p>Invite you to join them as they celebrate their marriage at</p>
            <span>Surat - Gujarat</span>
            <div className='vector'>
              <Image src="/kankotri-p4-assets/save-the-date-vector.png" height={70} width={150} alt='main-1'/>
            </div>
          </div>

          {/* // -----------------------------------------------------------------------------------------
          //                                     /Intro Right
          // ----------------------------------------------------------------------------------------- */}
          
          <div className='left_right'>
            <Image src="/kankotri-p4-assets/groom.png" height={350} width={350} alt='main-1'/>
          </div>

        </section>
        
{/* // ======================================================================================================
//                                     /Love Story
// ===================================================================================================== */}
        
        <section className='our_love_story'>
          <h2>Love Story</h2>

          <div className='love_story_slabs'>
            
            {/*-----------------------------------------------------------------------------------------
                                                / Slabs
            ----------------------------------------------------------------------------------------- */}
            <div className='slab'>
              <div className='slab_data'>
                <div className='slab_img'>
                  <Image src="/kankotri-p4-assets/love-story-1.png" height={250} width={250} alt='main-1'/>
                </div>
                <div className='slab_text'>
                  <h4>First date - 25.04.2015</h4>
                  <p>Now, at last, they were beginning chapter one of the great stories no one on earth has ever read, which goes on forever; in which every chapter is better than the one before.</p>
                </div>
              </div>
            </div>

            <div className='slab'>
              <div className='slab_data'>
                <div className='slab_img'>
                  <Image src="/kankotri-p4-assets/love-story-2.png" height={250} width={250} alt='main-1'/>
                </div>
                <div className='slab_text'>
                  <h4>Engagement - 05.06.2015</h4>
                  <p>I take you to be my best friend, my faithful partner, and my one true love. i promise to encourage you and inspire you and to love you truly through good times and bad.</p>
                </div>
              </div>
            </div>

            <div className='slab'>
              <div className='slab_data'>
                <div className='slab_img'>
                  <Image src="/kankotri-p4-assets/love-story-3.png" height={250} width={250} alt='main-1'/>
                </div>
                <div className='slab_text'>
                  <h4>Rings exchanged - 04.12.2018</h4>
                  <p>he fitting of this ring with its unending circle, symbolises my everlasting love for you. the placing of this ring on your finger, is the fulfillment of my dreams, to have you as my friend, my love, my husband/ wife, to live as one forever.</p>
                </div>
              </div>
            </div>

            <div className='slab'>
              <div className='slab_data'>
                <div className='slab_img'>
                  <Image src="/kankotri-p4-assets/love-story-4.png" height={250} width={250} alt='main-1'/>
                </div>
                <div className='slab_text'>
                  <h4>Our wedding - 13.12.2018</h4>
                  <p>Never marry the one you can live with, marry the one you cannot live without.while both the phrases mean the same, the idea is you may have several people with whom you can live, but there is only one without whom you cannot live. the urge and need to be with your spouse all the time would instil more love in your heart, making the marriage a success.</p>
                </div>
              </div>
            </div>
          
          </div>

        </section>

{/* // ======================================================================================================
//                                     /Event
// ===================================================================================================== */}
        
        <section className='event'>
          <h2>Events</h2>
          <p>ગૃહસ્થાશ્રમનો પરિપૂર્ણ પરમ આદર્શ સપ્તપદી<br/>
            પ્રથમ પગલુ :- પ્રાર્થના સૌભાગ્યની...<br/>
            બીજું પગલુ :- આદર્શ સંયુક્ત કુટુંબનો...<br/>
            ત્રીજુ પગલુ :- સંભાળ નિજ ઘરની...<br/>
            ચોથું પગલુ :- મન,વચન, કર્મ થકી એકતા દંપતિની<br/>
            પાંચમુ પગલુ :- સહધર્માચરણ યજ્ઞાદિ સત્કાર્યોમાં<br/>
            છઠ્ઠુ પગલુ :- સદાય સંગાથ સુખ દુઃખનો....<br/>
            સાતમુ પગલુ :- વિશ્વાસ વફાદારી અને સ્નેહ પરસ્પરનો......<br/>
          </p>

          <div className='card_container' id='scroll'>

          <div className='card_scrollable_container' >
            
            {/*-----------------------------------------------------------------------------------------
                                                /Event Cards
            ----------------------------------------------------------------------------------------- */}
            <div className='event_card'>
                <div className='card_img'>
                  <Image src="/kankotri-p4-assets/event-card-1.png" height={100} width={100} alt='main-1'/>
                </div>
                <h3>Ganesh sthapna <br/> (Mandp)</h3>
                <h4>09:01 AM<br/>
                  Monday<br/>
                  21st April 2023<br/>
                  At jakhdata ground
                </h4>
            </div>

            <div className='event_card'>
                <div className='card_img'>
                  <Image src="/kankotri-p4-assets/event-card-2.png" height={100} width={100} alt='main-1'/>
                </div>
                <h3>Dandiya <br/> Raas</h3>
                <h4>08:00 PM<br/>
                    Monday<br/>
                    20th April 2023<br/>
                    At jakhdata ground
                </h4>
            </div>

            <div className='event_card'>
                <div className='card_img'>
                  <Image src="/kankotri-p4-assets/event-card-3.png" height={100} width={100} alt='main-1'/>
                </div>
                <h3>Mehndi <br/> Ceremony</h3>
                <h4>09:00 PM<br/>
                    Monday<br/>
                    20th April 2023<br/>
                    At jakhdata ground
                </h4>
            </div>

            <div className='event_card'>
                <div className='card_img'>
                  <Image src="/kankotri-p4-assets/event-card-4.png" height={100} width={100} alt='main-1'/>
                </div>
                <h3>Haldi <br/> Ceremony</h3>
                <h4>11:01 AM<br/>
                    Tuesday<br/>
                    21st April 2023<br/>
                    At jakhdata ground
                </h4>
            </div>

            <div className='event_card'>
                <div className='card_img'>
                  <Image src="/kankotri-p4-assets/event-card-5.png" height={100} width={100} alt='main-1'/>
                </div>
                <h3>Wedding <br/> Ceremony</h3>
                <h4>06:00 PM<br/>
                    Tuesday<br/>
                    21st April 2023<br/>
                    At jakhdata ground
                </h4>
            </div>

            <div className='event_card'>
                <div className='card_img'>
                  <Image src="/kankotri-p4-assets/event-card-6.png" height={100} width={100} alt='main-1'/>
                </div>
                <h3>Bhojan <br/> Samaroh</h3>
                <h4>07:00 PM<br/>
                    Tuesday<br/>
                    21st April 2023<br/>
                    At jakhdata ground
                </h4>
            </div>
              
          </div>

          </div>

          <div className='btns'>
            <button onClick={scroll_left}>
              <Image src="/kankotri-p4-assets/left-btn.png" height={50} width={50} alt='btn-left'/>
            </button>
            <button onClick={scroll_right}>
              <Image src="/kankotri-p4-assets/right-btn.png" height={50} width={50} alt='btn-right'/>
            </button>
          </div>

        </section>


{/* // ======================================================================================================
//                                     /Photo gallery
// ===================================================================================================== */}
      
        <section className='photo_gallery'>
          <h2>Photo Gallery</h2>

                    
        {/*-----------------------------------------------------------------------------------------
                                            /gallery Corousel for Mobile
        ----------------------------------------------------------------------------------------- */}
        <Carousel className='mt-3 mb-3 p-2 d-block d-md-none'>
          <Carousel.Item>
          <Image height={500} width={450}
              className="d-block w-100"
              src="/kankotri-p4-assets/photo-gallery-1.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
          <Carousel.Item>
          <Image height={500} width={450}
              className="d-block w-100"
              src="/kankotri-p4-assets/photo-gallery-2.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
          <Carousel.Item>
          <Image height={500} width={450}
              className="d-block w-100"
              src="/kankotri-p4-assets/photo-gallery-3.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
          <Carousel.Item>
          <Image height={500} width={450}
              className="d-block w-100"
              src="/kankotri-p4-assets/photo-gallery-4.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
          <Carousel.Item>
          <Image height={500} width={450}
              className="d-block w-100"
              src="/kankotri-p4-assets/photo-gallery-5.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
          <Carousel.Item>
          <Image height={500} width={450}
              className="d-block w-100"
              src="/kankotri-p4-assets/photo-gallery-6.png"
              alt="Gallary Img"
            />
          </Carousel.Item>
        </Carousel>

                    
        {/*-----------------------------------------------------------------------------------------
                                            /Photo gallery
        ----------------------------------------------------------------------------------------- */}
        <div className='d-none d-md-block'>
        <div className='gallery_container'>
          <div className='column'>
            <Image height={400} width={425}
              className="d-block w-100"
              src="/kankotri-p4-assets/photo-gallery-1.png"
              alt="Gallary Img"
            />
            <Image height={500} width={425}
              className="d-block w-100"
              src="/kankotri-p4-assets/photo-gallery-2.png"
              alt="Gallary Img"
            />
          </div>
          <div className='column'>
          <Image height={600} width={425}
              className=""
              src="/kankotri-p4-assets/photo-gallery-3.png"
              alt="Gallary Img"
            />
            <Image height={300} width={425}
              className="d-block w-100"
              src="/kankotri-p4-assets/photo-gallery-4.png"
              alt="Gallary Img"
            />
          </div>
          <div className='column'>
          <Image height={400} width={425}
              className=""
              src="/kankotri-p4-assets/photo-gallery-5.png"
              alt="Gallary Img"
            />
            <Image height={500} width={425}
              className="d-block w-100"
              src="/kankotri-p4-assets/photo-gallery-6.png"
              alt="Gallary Img"
            />
          </div>
        </div>
        </div>
        
        <button className="viewall_btn">View All</button>
    
      </section>

{/* // ======================================================================================================
//                                     /Map
// ===================================================================================================== */}

        <section className='get_direction'>
          <h2>Get Directions</h2>
          <div>
            <Image src="/kankotri-p4-assets/map.png" height={450} width={850} alt='map'/>
          </div>
        </section>

{/* // ======================================================================================================
//                                     /Footer
// ===================================================================================================== */}

        <section className='kp3_footer'>
            <h4>KANKOTRIWALE</h4>
            <p>Your wedding deserves the best. We are here to help you create the most memorable Wedding Invitation</p>
            <h5>Products</h5>
            <div className="kp3_products">
                <a href="#">HOME</a>
                <a href="#">CATEGORIES</a>
                <a href="#">INVITATIONS</a>
                <a href="#">STORE</a>
                <a href="#">CONTACT US</a>
            </div>
            <h6>Find Us On</h6>
            <div className="kp3_social">
                <Image src="/kankotri-p4-assets/facebook.png" height={50} width={50} alt="social Media" />
                <Image src="/kankotri-p4-assets/instagram.png" height={50} width={50} alt="social Media" />
                <Image src="/kankotri-p4-assets/pintrest.png" height={50} width={50} alt="social Media" />
                <Image src="/kankotri-p4-assets/linkedin.png" height={50} width={50} alt="social Media" />
            </div>
        </section>


    {/* The End */}
    </div>
  )
}

export default kankotri_p4


