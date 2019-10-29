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
            <div className="users-list">
                {usuarios.map(medico => (
                    <article key={medico.id}>
                        <strong>{medico.User.name}</strong>
                        <p>{medico.description}</p>
                        <a href="">Detalhes</a>
                    </article>
                ))}
            </div>
        );
    }
}