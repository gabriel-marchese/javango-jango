import React, { useState, useEffect } from 'react';
import HeaderUser from '../components/HeaderOther';
import { requestData } from '../services/requests';
import { useParams } from 'react-router-dom';
import '../styles/pages/home.css'


const UserDetails = () => {
    const { id } = useParams();
    const [musicDetails, setMusicDetails] = useState(null);
  
    useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          // Faz a chamada para o backend para obter os detalhes específicos da música com base no id
          const result = await requestData(`/user/${id}`);
          console.log(result);
          // Verifica se o resultado é um objeto e converte para um array, se necessário
          const detailsArray = Array.isArray(result) ? result : [result];
          //console.log(detailsArray);
          setMusicDetails(detailsArray);
        } catch (error) {
          console.error('Erro ao obter detalhes do usuario', error);
        }
      };
      fetchUserDetails();
    }, [id]);
  
  if (!musicDetails) {
    // Se os detalhes da música ainda estão sendo carregados, você pode renderizar uma mensagem de carregamento
    return <p>Carregando detalhes da música...</p>;
  }

  return (
    <section>
        <HeaderUser />
        {
            musicDetails.map((user) => (
                <div key={ user.id }>
                    <h4>{ user.name }</h4>
                    <p>{ user.type }</p>
                    <p>{ user.payment }</p>
                </div>
            ))
        }
    </section>
  );
};

export default UserDetails;