import React, { useContext, useState } from 'react';
import heroImg from '../assets/img/model1-removebg-preview.png';
import '../styles/hero.css';
import { AuthContext } from '../component/AuthContextProvider'; // Adjust the path to your AuthContext
import AuthModal from '../component/modal';

const Hero = () => {
  const { user } = useContext(AuthContext);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openPHQ9Questionnaire = () => {
    if (user) {
      const url = new URL('/questionnaires', window.location.origin);
      url.searchParams.set('username', user.username);
      window.open(url.toString(), '_blank');
    } else {
      window.open('/questionnaires', '_blank');
    }
  };

  return (
    <section id="#">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2 className="section__title" data-aos-duration="1000" data-aos="fade-up">
              Exercise is the key to a <span className="highlights">Healthy</span> Lifestyle
            </h2>
            <p data-aos-duration="1100" data-aos="fade-up" data-aos-delay="100">
              Regular exercise is a crucial component of a healthy lifestyle.
              <br /> It has numerous benefits for physical and mental health, including reducing
              the risk of chronic diseases, improving cardiovascular function,
              <br /> enhancing mood, reducing stress, and promoting better sleep.
            </p>

            <div
              className="hero__btns"
              data-aos-duration="1200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <button className="register__btn" onClick={openPHQ9Questionnaire}>
                {' '}
                Get Started
              </button>
              <button className="watch_btn">
                <span>
                  <i className="ri-play-fill"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>

          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt="err" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="heart__rate" data-aos-duration="1100" data-aos="fade-right">
                <h5>Heart Rate</h5>
                <span>
                  <i className="ri-heart-pulse-fill"></i>
                </span>
                <h6>100 BPM</h6>
              </div>

              <div className="gym__location" data-aos-duration="1100" data-aos="fade-up">
                <span>
                  <i className="ri-map-pin-2-fill"></i>
                </span>
                <h5>Find our gym centers near you</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <AuthModal isOpen={isLoginModalOpen} onRequestClose={() => setIsLoginModalOpen(false)} />
    </section>
  );
};

export default Hero;
