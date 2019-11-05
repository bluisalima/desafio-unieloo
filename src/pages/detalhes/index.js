import React, { Component } from 'react';
import api from '../../services/api';


export default class Details extends Component{
    state = {
        detalhe: {},
    };

    componentDidMount(){
        this.loadList();
    }

    loadList = async () => {
        const { id } = this.props.match.params;
        const response = await api.get(`/detalhes/${id}`);

        this.setState({ detalhe: response.data.User});
    };
    

    render(){
        const { detalhe } = this.state;

        return(
            <div className="medico-info">
                <h1>{detalhe.name}</h1>
                <p>{detalhe.description}</p>
            </div>
        );
    }
}