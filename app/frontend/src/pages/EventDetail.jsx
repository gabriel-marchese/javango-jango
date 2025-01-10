import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/pages/eventDetail.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsappContact from '../components/WhatsappContact';
import { Link } from 'react-router-dom';

const EventDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const { event } = location.state || {};


  return (
    <section className='event-detail-container'>
        <Header />
          <div className='event-open'>
            <h1>{ event.name }</h1>
            <h2>{ event.date }</h2>
            <h3><span className='white-text'>FOI</span> ANIMAL!!</h3>
            <div>
              <img src={ event.flyer } alt="" />
            </div>
          </div>
          <div className='items'>
            <div class="item" tabindex="0" ></div>
            <div class="item" tabindex="0" ></div>
            <div class="item" tabindex="0" ></div>
            <div class="item" tabindex="0" ></div>
            <div class="item" tabindex="0" ></div>
            <div class="item" tabindex="0" ></div>
            <div class="item" tabindex="0" ></div>
            <div class="item" tabindex="0" ></div>
            <div class="item" tabindex="0" ></div>
            <div class="item" tabindex="0" ></div>
            <div class="item" tabindex="0" ></div>
          </div>
          <div className='video-event'>
          <iframe src="https://www.youtube.com/embed/-R0UYHS8A_A" title="Afternoon Jazz 🎷 [jazz lofi]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <Link to="/contact" replace={true}>Marque sua aula experimental!</Link>
        <WhatsappContact />
        <Footer />
    </section>
  ) 
}

export default EventDetail;