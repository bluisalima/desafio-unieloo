import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

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
                        <img src={medico.User.profileImg} />
                                                                       
                        <a href="">Detalhes</a>
                        <a href="">Mapa</a>
                    </li>
                ))}
            </ul>
        );
    }
}