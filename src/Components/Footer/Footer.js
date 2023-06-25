import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'
const Footer = () =>{


    return(
        //Use display flex 
        <div id="footer-container" className="h-[350px] w-full bg-white font-sergioTrendy md:flex md:h-[220px] pt-[16px] md:pt-[0px] md:divide-x md:divide-black">
            {/* Contact Container */}
            <div id="contact-container" className="md:w-[50%] md:pt-[28px] md:pl-[31px] ">
                <div id="contact-title" style={{fontSize: "32px", lineHeight: "34px"}}  className='flex justify-center md:justify-start '>
                    Contact Us
                </div>

                {/* Parkers Pizza Address */}
                <div id="address-container" className='flex justify-center md:justify-start'>

                    <div id="contact-address" style={{fontSize: "16px", lineHeight: "16px"}}className=' w-[205px] mt-[22px] mb-[20px] pl-[10px] md:pl-[0px]'>
                        <div id="contact-address-line1" className=''>
                            2333 W Jackson Blvd
                        </div>
                        <div id="contact-address-line2" className=''>
                            Chicago, Illinois 60612
                        </div>
                        <div id="contact-phone" className=''>
                            312.555.9289
                        </div>
                    </div>                    
                </div>


                {/* Social Media */}
                <div id="social-media" className='flex justify-center md:justify-start'>
                    <div id="twitter" className='h-[50px] w-[50px] mr-[20px]'>
                        <img src={twitter} className='h-full w-full'/>
                    </div>
                    <div id="instagram" className='h-[50px] w-[50px] mr-[20px]'>
                        <img src={instagram} className='h-full w-full'/>
                    </div>
                    <div id="facebook" className='h-[50px] w-[50px]'>
                        <img src={facebook} className='h-full w-full'/>
                    </div>                    
                </div>

            </div>
            {/* Newsletter Container */}
            <div id="newsletter-container" className="md:w-[50%]">
                <div id="newsletter-line1" className='flex justify-center md:justify-start md:pl-[66px]'>
                    <div id="newsletter-title" className='font-sergioTrendy mt-[40px] md:mt-[28px]' style={{fontSize: "32px", lineHeight: "34px"}}>
                        <p>Newsletter</p>
                    </div>
                </div>
                <div className='flex justify-center md:justify-start md:pl-[66px]'>
                    <div id="newsletter-input" className='flex mt-[25px]' >
                        <input type="text" className='font-sans border-black border-[1px] w-[187px] rounded'/>
                        <div id="newsletter-button" style={{fontSize: "14px", lineHeight: "14px"}} className=' flex justify-center ml-[12px] font-sans border-solid border-[1px] border-black rounded w-[91px] h-[33px]'>
                            <p className='mt-[7px]'>Subscribe</p>
                        </div>                        
                    </div>
                </div>                
            </div>


        </div>
    )
}

export default Footer;