import './index.css'
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => (
    <div className='footer-cont'>
        <div className='footer-1-cont'>
        <div className='footer-sub-cont'>
            <img className='footer-sub-icons' src='https://res.cloudinary.com/dx2atlee1/image/upload/v1733638357/Component-2.svg_qmeg2v.png
' alt='phone number' />
            <div>
                <p className='footer-sub-p1'>Phone Number</p>
                <p className='footer-sub-p2'>+974 3118 1843</p>
            </div>
        </div>
        <div className='footer-sub-cont'>
            <img className='footer-sub-icons' src='https://res.cloudinary.com/dx2atlee1/image/upload/v1733638365/Component-2-1.svg_vpifvr.png
' alt='email address' />
            <div>
                <p className='footer-sub-p1'>Email Address</p>
                <p className='footer-sub-p2'>Elbrithcqhr@gmail.com</p>
            </div>
        </div>
        <div className='footer-sub-cont'>
            <img className='footer-sub-icons' src='https://res.cloudinary.com/dx2atlee1/image/upload/v1733638373/Component-2-2.svg_jdrequ.png
' alt='office location' />
            <div>
                <p className='footer-sub-p1' >Office Location</p>
                <p className='footer-sub-p2'>Ambassador Street, Zone 61,</p>
            </div>
        </div>
        </div><br />
        <div className='footer-2-cont'>
            <div className='footer-logo-cont'>
                <img className='footer-logo' src='https://s3-alpha-sig.figma.com/img/8be1/c27b/24873ffb8a3345a8dedea9b0d8f9e7ba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0spKcLnDj3-RGpQBgOl4A15XyrTvF-baao9zqhB1Sbc4h8fV0bqAxcS7zgqS2FsjV7o9OxvALHkXRRbgFT3Xp~6PeUjIn~ISRuX16EbEaLdhXEEpKqHxhzNSpqyeJcazv-C-0Fk4L2YhBx966luC0vI7UTh0tfPGFeD0sMakYF2KogtEA3m~mfkw7wOehPZa3kvbcF7t0T~HrGgOXynC6TglKELsRGlVz95fjwecpdCjr99eGIDVFD61c8UYKTCPShu1wAmLXrhq0ps1APbdyq0Vm16-DHw5sjSFHRHiAsWAAmMCJRJFA5-H9-AXr9MVi1H-zb2wDFoRz3KoK0wsQ__
' alt='logo' />
            </div>
            <p className='footer-para'>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>
        </div>
        <div className='footer-3-cont'>
            <MdOutlineLocationOn className='footer-location-icon' />
            <p className='footer-location-para'>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
        </div>
    </div>
)

export default Footer