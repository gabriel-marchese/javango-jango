import React, { useState } from 'react';
import HeaderOther from '../components/HeaderOther';
import { Navigate } from 'react-router-dom';
import '../styles/pages/createMusic.css'
import { newMusic, setToken } from '../services/requests';


const CreateMusic = () => {
    const [music, setMusic] = useState('');
    const [band, setBand] = useState('');
    const [instrument, setInstrument] = useState('Guitarra');
    const [file, setFile] = useState(null);
    const [created, isCreated] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };

    const createMusic = async (event) => {
      event.preventDefault();
  
      const token = localStorage.getItem('token');
      setToken(token);
  
      try {
        setUploading(true);
  
        // Crie um objeto FormData e adicione os campos ao formulário
        const formData = new FormData();
        formData.append('music', music);
        formData.append('band', band);
        formData.append('instrument', instrument);
        formData.append('file', file);
  
        await newMusic('/music/create', formData);
        isCreated(true);
      } catch (error) {
        console.error('Erro ao criar música:', error);
        setError('Erro ao criar música. Por favor, tente novamente.');
      } finally {
        setUploading(false);
      }
    };

  if (created) {
    return <Navigate to="/admin"/>
  }
  return (
    <section className='section-music'>
        <HeaderOther />
        <form action="post" encType="multipart/form-data">
        <label htmlFor="">
          <p className='create-input'>Nome da Música</p>
          <input 
            type="text"
            value={ music }
            onChange={ ({ target: { value } }) => setMusic(value) }
            placeholder="Ex. Sad but True"
          />
        </label>
        <label htmlFor="">
          <p className='create-input'>Banda</p>
          <input 
            type="text"
            value={ band }
            onChange={ ({ target: { value } }) => setBand(value) }
            placeholder="Ex. Metallica"
          />
        </label>
        <div className='option-div'>
          <label htmlFor="">
            <p>Instrumento</p>
            <select className='select-create' onChange={ ({ target: { value } }) => setInstrument(value) } name="Instrumento" id="Instrumento">
                <option value="Guitarra">Guitarra</option>
                <option value="Bateria">Bateria</option>
                <option value="Baixo">Baixo</option>c
                <option value="Canto">Canto</option>
                <option value="Violão">Violão</option>
            </select>
          </label>
        </div>
        <div>
            <input 
                type="file"
                placeholder="Escolha seu Arquivo em PDF"
                onChange={ handleFileChange }
            ></input>
        </div>
        
        <button type="submit" onClick={ (event) => createMusic(event) } disabled={uploading}>{uploading ? 'Enviando...' : 'Cadastrar'}</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </section>
  );
};

export default CreateMusic;