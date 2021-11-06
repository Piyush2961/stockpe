import React, {useState} from 'react'
import './Carousel.css'
import firebase from '../../firebase'

const Carousel = () => {

    const [mobile, setMobile] = useState(0);
    const [showres, setShowres] = useState(false);
    const [showerror, setShowerror] = useState(false);

    const handleChange =(e) => {
       const {value} = e.target;
        setMobile(value);
    }
    const configureCaptcha = ()=>{ 
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              onSignInSubmit();
            },
            defaultCountry: 'IN'
          });
    }

    const onSignInSubmit = (e) => {
        e.preventDefault();
        configureCaptcha();
        const phoneNumber = "+91"+mobile;
        console.log(phoneNumber);

        const appVerifier = window.recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
     .then((confirmationResult) => {
    
      window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
      console.log('otp has been sent');
      setShowres(true);
     
    }).catch((error) => {
     
      console.log(error);
      setShowerror(true);
    });
    
    }

     const showStyle={
        display: 'block',
        color: '#fff',
     }
     const closeStyle ={
            display: 'none',
            color: '#fff',
        
     }
    return (
        <div class="section mt-sm-5">
        <div class="container-fluid">
            <div class="row">
                <div class="section1 col-lg-6">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active" style={{textAlign: "left"}}>
                                <h2>Open a Stock<span>Pe</span> Learning Account</h2>
                                <p>Instantly buy or sell stock token with just a click of a button.</p>
                            </div>
                            <div class="carousel-item" style={{textAlign: "left"}}>
                                <h2>Learn Stock Trading and <span>Invest</span> like a Pro</h2>
                                <p>Learn Stock Trading and invest simultaneously by practically learning </p>
                            </div>
                            <div class="carousel-item" style={{textAlign: "left"}}>
                                <h2>Learn and Compete with your<span> Peers</span></h2>
                                <p>Learn together with your peers, compete and get exciting returns</p>
                            </div>
                        </div>
                    </div>
                    <div class="form_area" id="myDIV">
                        <form class="d-flex" id="contactForm" onSubmit={onSignInSubmit}>
                            <div id="sign-in-button"></div>
                            <input type="number" class="form-control number " id="inlineFormInputName2"
                                placeholder="Phone number" name="mobile" pattern="[6789][0-9]{9}" onChange={handleChange} required />
                                
                            <button type="submit" class="btn btn-primary nav_btn" onclick="myFunction()">Get
                                invite</button>
                        </form>
                    </div>
                        <div style={showres? showStyle:closeStyle} class="form_area" id="my2">
                            <div class="d-flex">
                              { !showerror? <p>Thank You 😁. We will notify you once your invite is ready and served hot and fresh to your sms inbox.</p>:<p>Captcha Already Verified. Please reload to add new Number</p>}
                                
                            </div>
                        </div>
                    </div>
                
                <div class="svg-container col-lg-6">
                    <img src="https://stockpe.tech/img/Landing.png" alt="landing" class="landing_svg" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Carousel
