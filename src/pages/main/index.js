import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom'; 

export default class Main extends Component{
    state = {
        usuarios: []
    };

    componentDidMount(){
        this.loadList();
    }

    loadList = async () => {
        const response = await api.get();

        this.setState({ usuarios: response.data.data});
    };

    render() {
        const { usuarios } = this.state;
        return (
            <ul>
                {usuarios.map(medico => (
                    <li key={medico.id} className="users-list">
                        <div className="box">
                            <img src={medico.User.profileImg} alt="Foto de perfil" />
                            <h2>{medico.User.name}</h2> 
                            <span>{medico.Specialization.name}</span>
                            <p>{medico.description}</p>
                            <p>Endereço: {medico.addressName}, {medico.addressNumber}</p>
                            <a href={medico.addressLink}>Mapa</a>                                    
                            <Link to={`/detalhes/${medico.id}`}>Detalhes</Link>
                            
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}