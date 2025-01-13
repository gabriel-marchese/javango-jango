import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/events.css'
import { eventsData } from '../data/eventsData';
import Footer from '../components/Footer';
import WhatsappContact from '../components/WhatsappContact';

const Events = () => {
  const [animate, setAnimate] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    navigate(`/events/${event.name}`, { state: { event } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animateScroll = () => {
    setAnimate(false)
  }

  const mobile = window.innerWidth<=768 ? false : true;

  return (
    <section className='events-container' onMouseEnter={animateScroll}>
        <Header />
        <h3>Eventos</h3>
        <div className={ (animate === true && mobile === true) ? 'hidden' : 'line-red'}></div>
        <div className='events-list'>
        {
          eventsData.map((event) => (
            <div key={event.name} className='event-item' onClick={() => handleSelectEvent(event)}>
                <img src={ event.image } alt="" />
                <div>
                  <div>
                    <h4>{ event.name }</h4>
                    <p>{ event.date }</p>
                  </div>
                  <hr />
                  <p>{ event.description }</p>
                  <p>{ event.adress }</p>
                </div>
            </div>
          ))
        }
        </div>
        <WhatsappContact />
        <Footer />
    </section>
  );
};

export default Events;