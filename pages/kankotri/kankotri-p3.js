import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import Heading from "../../components/Heading";

const kankotri_p3 = () => {

    var countDownDate = new Date("May 15, 2023").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hour").innerHTML = hours; 
        document.getElementById("minutes").innerHTML = minutes; 
        document.getElementById("second").innerHTML = seconds; 
    
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "-";
            document.getElementById("hour").innerHTML = "-";
            document.getElementById("minutes").innerHTML = "-";
            document.getElementById("second").innerHTML = "-";
        }
    }, 1000);

    function active_card_1(){
        document.querySelectorAll('.kp3_card_data').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('card_1').classList.add('active');
        document.querySelectorAll('.indicator').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('indicator_1').classList.add('active');
        document.querySelectorAll('.option').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('option_1').classList.add('active');
    }
    function active_card_2(){
        document.querySelectorAll('.kp3_card_data').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('card_2').classList.add('active');
        document.querySelectorAll('.indicator').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('indicator_2').classList.add('active');
        document.querySelectorAll('.option').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('option_2').classList.add('active');
    }
    function active_card_3(){
        document.querySelectorAll('.kp3_card_data').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('card_3').classList.add('active');
        document.querySelectorAll('.indicator').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('indicator_3').classList.add('active');
        document.querySelectorAll('.option').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('option_3').classList.add('active');
    }
    function active_card_4(){
        document.querySelectorAll('.kp3_card_data').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('card_4').classList.add('active');
        document.querySelectorAll('.indicator').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('indicator_4').classList.add('active');
        document.querySelectorAll('.option').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('option_4').classList.add('active');
    }

  return (
    <div className='kankotri_p3'>
{/*================================================================================================
                                    LANDING
=================================================================================================*/}
        <section className='kp3_landing'>
            <h1>Trunesh & Pallavi</h1>
            <div className="kp3_landing_img_container">
                <div className="kp3_landing_date">
                    <h2>04.05.2023</h2>
                </div>
                <Image src="/kankotri-p3-assets/landing-img-group.png" height={750} width={1000} alt="landing_img"/>
            </div>
        </section>
{/*================================================================================================
                                    ABOUT INFORMATION
=================================================================================================*/}
        <section className='kp3_about_information'>
            <Heading title="About Information"/>
            <div className="kp3_card_container">
                <div className="kp3_groom_card_container">
                    <div className="kp3_groom_card">
                        <div className="kp3_card_data">
                            <div className="kp3_card_img">
                                <Image src="/kankotri-p3-assets/groom.png" height={350} width={350} alt="landing_img"/>
                            </div>
                            <div className="kp3_card_data_title">
                                <h3>THE GROOM</h3>
                            </div>
                            <h2>Rajesh</h2>
                            <p>Son of: Chandubhai Bhikabhai Kunjadiya<br/>
                                Rekhaben Chandubhai Kunjadiya<br/>
                                Education: Bachelor Of Commerce<br/>
                                Working: Owner At Kunal Construction Company
                            </p>
                        </div>
                    </div>
                </div>

                <div className="kp3_groom_card_container">
                    <div className="kp3_groom_card">
                        <div className="kp3_card_data">
                            <div className="kp3_card_img">
                                <Image src="/kankotri-p3-assets/bride.png" layout="fill" alt="landing_img"/>
                            </div>
                            <div className="kp3_card_data_title">
                                <h3>THE BRIDE</h3>
                            </div>
                            <h2>Urvisha</h2>
                            <p>Daughter of: Rajeshbhai Pragjibhai Sardhara<br/>
                                Rekhaben Chandubhai Kunjadiya<br/>
                                Education: Master Of Science<br/>
                                Working: Not Working
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
{/*================================================================================================
                                    OUR LOVE STORY
=================================================================================================*/}
        <section className='kp3_our_love_story'>
            <Heading title="Our Love Story"/>
            <div className="kp3_ls_data">
                <div className="kpd_data_nav">
                    <li className="option active" id="option_1" onClick={active_card_1}>Our First Meet</li>
                    <li className="option" id="option_2" onClick={active_card_2}>First Beautiful Date</li>
                    <li className="option" id="option_3" onClick={active_card_3}>Engagement</li>
                    <li className="option" id="option_4" onClick={active_card_4}>Our wedding</li>
                </div>
            
                <div className="kp3_card_data active" id="card_1">
                    <div className="kp3_card_left">
                        <Image src="/kankotri-p3-assets/our-first-meet.png" layout="fill" alt="fm"/>
                    </div>
                    <div className="kp3_card_right">
                        <h3>Our First Meet</h3>
                        <h6>28 November, 2022</h6>
                        <p>I never would have thought that the day we meet each other was the best day of my entire life. You are really the one for me and i can not help but wonder if it is because of that first time.</p>
                    </div>
                </div>

                <div className="kp3_card_data" id="card_2">
                    <div className="kp3_card_left">
                        <Image src="/kankotri-p3-assets/ls-2.png" layout="fill" alt="fm"/>
                    </div>
                    <div className="kp3_card_right">
                        <h3>First Beautiful Date</h3>
                        <h6>18 December, 2022</h6>
                        <p>I never would have thought that the day we meet each other was the best day of my entire life. You are really the one for me and i can not help but wonder if it is because of that first time.</p>
                    </div>
                </div>

                <div className="kp3_card_data" id="card_3">
                    <div className="kp3_card_left">
                        <Image src="/kankotri-p3-assets/ls-3.png" layout="fill" alt="fm"/>
                    </div>
                    <div className="kp3_card_right">
                        <h3>Engagement</h3>
                        <h6>11 Febuary, 2023</h6>
                        <p>I never would have thought that the day we meet each other was the best day of my entire life. You are really the one for me and i can not help but wonder if it is because of that first time.</p>
                    </div>
                </div>

                <div className="kp3_card_data" id="card_4">
                    <div className="kp3_card_left">
                        <Image src="/kankotri-p3-assets/ls-4.png" layout="fill" alt="fm"/>
                    </div>
                    <div className="kp3_card_right">
                        <h3>Our wedding</h3>
                        <h6>04 April, 2023</h6>
                        <p>I never would have thought that the day we meet each other was the best day of my entire life. You are really the one for me and i can not help but wonder if it is because of that first time.</p>
                    </div>
                </div>

            </div>
            <div className="kp3_card_indiactor">
                <div className="indicator active" id="indicator_1" onClick={active_card_1}></div>
                <div className="indicator" id="indicator_2" onClick={active_card_2}></div>
                <div className="indicator" id="indicator_3" onClick={active_card_3}></div>
                <div className="indicator" id="indicator_4" onClick={active_card_4}></div>
            </div>
        </section>
{/*================================================================================================
                                    FAMILY MEMBERS
=================================================================================================*/}
        <section className='kp3_family_members'>
            <div className="kp3_fm_title">
                <Heading title="Family Members"/>
            </div>
            <div className="kp3_fm_container">
                <div className="bride_fm_container">
                    <div className="bride_fm">
                        <div className="fm_container_heading">
                            <h3>BRIDE</h3>
                        </div>
                        <div className="kp3_fm">
                            <div className="fm_img">
                                <Image src="/kankotri-p3-assets/bride-fm-1.png" layout="fill" alt="fm"/>
                            </div>
                            <div className="fm_data">
                                <h4>Rajeshbhai Pragjibhai Sardhara</h4>
                                <p>BRIDE’S FATHER</p>
                            </div>    
                        </div>

                        <div className="kp3_fm">
                            <div className="fm_img">
                                <Image src="/kankotri-p3-assets/bride-fm-2.png" layout="fill" alt="fm"/>
                            </div>
                            <div className="fm_data">
                                <h4>Nayanaben Rajeshbhai Sardhara</h4>
                                <p>BRIDE’S MOTHER</p>
                            </div>    
                        </div>

                        <div className="kp3_fm">
                            <div className="fm_img">
                                <Image src="/kankotri-p3-assets/bride-fm-3.png" layout="fill" alt="fm"/>
                            </div>
                            <div className="fm_data">
                                <h4>Tirth Rajeshbhai Sardhara</h4>
                                <p>BRIDE’S BROTHER</p>
                            </div>    
                        </div>

                        <div className="kp3_fm">
                            <div className="fm_img">
                                <Image src="/kankotri-p3-assets/bride-fm-4.png" layout="fill" alt="fm"/>
                            </div>
                            <div className="fm_data">
                                <h4>Liza Rajeshbhai Sardhara</h4>
                                <p>BRIDE’S SISTER</p>
                            </div>    
                        </div>
                    </div>
                </div>

                <div className="bride_fm_container">
                    <div className="bride_fm">
                        <div className="fm_container_heading">
                            <h3>GROOM</h3>
                        </div>
                        <div className="kp3_fm">
                            <div className="fm_img">
                                <Image src="/kankotri-p3-assets/Groom-fm-1.png" layout="fill" alt="fm"/>
                            </div>
                            <div className="fm_data">
                                <h4>Chandubhai Bhikabhai Kunjadiya</h4>
                                <p>GROOM’S FATHER</p>
                            </div>    
                        </div>

                        <div className="kp3_fm">
                            <div className="fm_img">
                                <Image src="/kankotri-p3-assets/Groom-fm-2.png" layout="fill" alt="fm"/>
                            </div>
                            <div className="fm_data">
                                <h4>Rekhaben Chandubhai Kunjadiya</h4>
                                <p>GROOM’S MOTHER</p>
                            </div>    
                        </div>

                        <div className="kp3_fm">
                            <div className="fm_img">
                                <Image src="/kankotri-p3-assets/Groom-fm-3.png" layout="fill" alt="fm"/>
                            </div>
                            <div className="fm_data">
                                <h4>Panth Chandubhai Kunjadiya</h4>
                                <p>GROOM’S BROTHER</p>
                            </div>    
                        </div>

                        <div className="kp3_fm">
                            <div className="fm_img">
                                <Image src="/kankotri-p3-assets/Groom-fm-4.png" layout="fill" alt="fm"/>
                            </div>
                            <div className="fm_data">
                                <h4>Viha Chandubhai Kunjadiya</h4>
                                <p>GROOM’S SISTER</p>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>   
        </section>
{/*================================================================================================
                                    WE ARE GETTING MARRIED
=================================================================================================*/}
        <section className='kp3_we_are_getting_married'>
            <Heading title="We Are Getting Married"/>
            <div className="kp3_timer">
                <div className="box">
                    <h2 id="days"></h2>
                    <p>DAYS</p>
                </div>
                <div className="box">
                    <h2 id="hour"></h2>
                    <p>HOURS</p>
                </div>
                <div className="box">
                    <h2 id="minutes"></h2>
                    <p>MINUTES</p>
                </div>
                <div className="box">
                    <h2 id="second"></h2>
                    <p>SECONDS</p>
                </div>
            </div>
        </section>
{/*================================================================================================
                                    EVENTS
=================================================================================================*/}
        <section className='kp3_events'>
            <Heading title="Events"/>
            <div className="kp3_events_card_container">
                <div className="kp3_event_card">
                    <Image src="/kankotri-p3-assets/event-1.png" height={650} width={400} alt="landing_img"/>
                    <div className="kp3_event_card_data">
                        <h4>Geet Gunjan</h4>
                        <p>08:00 PM<br/>
                        Sunday - 12th Febuary, 2023<br/>
                        <IoLocationSharp/>Amreli
                        </p>
                        <h6>Intact Good lucking</h6>
                        <h5>Priyalben Jigarbhai</h5>
                    </div>
                </div>

                <div className="kp3_event_card">
                    <Image src="/kankotri-p3-assets/event-2.png" height={650} width={400} alt="landing_img"/>
                    <div className="kp3_event_card_data">
                        <h4>Mandap Muhurt</h4>
                        <p>07:00 AM<br/>
                        Monday - 13th Febuary, 2023<br/>
                        <IoLocationSharp/>Amreli
                        </p>
                        <h6>Intact Good lucking</h6>
                        <h5>Rekhaben Chandubhai</h5>
                    </div>
                </div>

                <div className="kp3_event_card">
                    <Image src="/kankotri-p3-assets/event-3.png" height={650} width={400} alt="landing_img"/>
                    <div className="kp3_event_card_data">
                        <h4>Bhojan Samaroh</h4>
                        <p>11:30 AM<br/>
                            Monday - 13th Febuary, 2023<br/>
                            <IoLocationSharp/>Amreli
                        </p>
                        <h6>Intact Good lucking</h6>
                        <h5>Sobhnaben Vipulbhai</h5>
                    </div>
                </div>

                <div className="kp3_event_card">
                    <Image src="/kankotri-p3-assets/event-4.png" height={650} width={400} alt="landing_img"/>
                    <div className="kp3_event_card_data">
                        <h4>Dandiya Raas</h4>
                        <p>08:00 PM<br/>
                        Monday - 12th Febuary, 2023<br/>
                        <IoLocationSharp/>Amreli
                        </p>
                        <h6>Intact Good lucking</h6>
                        <h5>Khushbuben Mehulbhai</h5>
                    </div>
                </div>

                <div className="kp3_event_card">
                    <Image src="/kankotri-p3-assets/event-5.png" height={650} width={400} alt="landing_img"/>
                    <div className="kp3_event_card_data">
                        <h4>Jaan Prasthan</h4>
                        <p>07:00 AM<br/>
                        Tuesday - 14th Febuary, 2023<br/>
                        <IoLocationSharp/>Amreli
                        </p>
                        <h6>Intact Good lucking</h6>
                        <h5>Aerikaben Shaktibhai</h5>
                    </div>
                </div>

                <div className="kp3_event_card">
                    <Image src="/kankotri-p3-assets/event-6.png" height={650} width={400} alt="landing_img"/>
                    <div className="kp3_event_card_data">
                        <h4>Hast Melap</h4>
                        <p>11:30 AM<br/>
                        Tuesday - 14th Febuary, 2023<br/>
                        <IoLocationSharp/>Amreli
                        </p>
                        <h6>Intact Good lucking</h6>
                        <h5>Bhumikaben Ankitbhai</h5>
                    </div>
                </div>
            </div>
        </section>
{/*================================================================================================
                                    FOOTER
=================================================================================================*/}
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
                <Image src="/kankotri-p3-assets/facebook.png" height={50} width={50} alt="social Media" />
                <Image src="/kankotri-p3-assets/instagram.png" height={50} width={50} alt="social Media" />
                <Image src="/kankotri-p3-assets/pinterest.png" height={50} width={50} alt="social Media" />
                <Image src="/kankotri-p3-assets/linkedin.png" height={50} width={50} alt="social Media" />
            </div>
        </section>
    </div>
  )
}

export default kankotri_p3