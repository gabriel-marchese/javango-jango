import React, { useState, useEffect, useRef } from 'react';
import '../styles/components/introduction.css';
import video1 from '../images/videoplayback.mp4';
import video2 from '../images/videoplayback2.mp4';
import video3 from '../images/videoplayback3.mp4';

const Introduction = () => {
  const videos = [video1, video2, video3];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const intervalRef = useRef(null); // Referência para o intervalo
  const videoRef = useRef(null);

  // Função para reiniciar o intervalo
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Limpa o intervalo existente
    }
    intervalRef.current = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Define o novo intervalo de 10 segundos
  };

  // Inicializa o intervalo ao montar o componente
  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current); // Limpa o intervalo ao desmontar o componente
  }, [videos.length]);

  // Troca o vídeo atual e aguarda carregamento
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      // Adiciona o evento `loadeddata` para garantir que o vídeo seja carregado antes de tocar
      const handleLoadedData = () => {
        video.play().catch((err) => {
          console.error('Erro ao reproduzir o vídeo:', err);
        });
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.load(); // Carrega o novo vídeo

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [currentVideoIndex]);

  // Troca para um vídeo específico e reinicia o intervalo
  const handleDotClick = (index) => {
    setCurrentVideoIndex(index);
    resetInterval(); // Reinicia o intervalo ao clicar em um indicador
  };

  return (
    <section className="introduction-section">
      <div>
        <video
          ref={videoRef}
          src={videos[currentVideoIndex]}
          muted
          loop
          className="carousel-video"
        ></video>
        <p>UMA ESCOLA DE</p>
        <p>MÚSICA QUE PENSA</p>
        <p>SEMPRE EM <span className="text-emphasis">VOCÊ!</span></p>
        <div className="video-indicators">
          {videos.map((_, index) => (
            <span
              key={index}
              className={`indicator-dot ${
                currentVideoIndex === index ? 'active' : ''
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
