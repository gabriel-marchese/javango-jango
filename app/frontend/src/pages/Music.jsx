import React, { useState, useEffect } from 'react';
import { requestData } from '../services/requests';
import { useParams } from 'react-router-dom';
import HeaderUser from '../components/HeaderUser';
import { Link } from 'react-router-dom';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import '../styles/pages/music.css';

const Music = () => {
  const { id } = useParams();
  const [musicDetails, setMusicDetails] = useState(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchMusicDetails = async () => {
      try {
        // Faz a chamada para o backend para obter os detalhes específicos da música com base no id
        const result = await requestData(`/music/${id}`);

        // Verifica se o resultado é um objeto e converte para um array, se necessário
        const detailsArray = Array.isArray(result) ? result : [result];
        const key = detailsArray[0].key;
        const pdfLink = [{ uri: `http://localhost:3001/files/${key}` }];
        setUrl(pdfLink);
        setMusicDetails(detailsArray);
      } catch (error) {
        console.error('Erro ao obter detalhes da música:', error);
      }
    };

    fetchMusicDetails();
  }, [id]);

  

  if (!musicDetails) {
    // Se os detalhes da música ainda estão sendo carregados, você pode renderizar uma mensagem de carregamento
    return <p>Carregando detalhes da música...</p>;
  }

  return (
    <section>
      <HeaderUser />
      {
        
        musicDetails.map((music) => (
            
            <div className='music-content'>
                <h3>{ music.music }</h3>
                <p>{ music.band } - { music.instrument }</p>
                <Link to={ '/home' } className='btn-back'>Voltar</Link>
                <DocViewer documents={ url } pluginRenderers={ DocViewerRenderers } config = { { header : { disableFileName : true }, pdfZoom : { defaultZoom : 0.8 } } } />
            </div>
        ))
      }
    </section>
  );
};

export default Music;
