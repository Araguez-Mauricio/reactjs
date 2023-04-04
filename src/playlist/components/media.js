import React, { Component } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends Component {
    render () {
        const  styles = {
        cotainer:{
           color: '#44546b',
           cursor: 'pointer',
           width: 260,
           border: '2px solid red'

        }
        }
        return (
            <div className="Media">
                <div>
                    <img
                    src={this.props.image}
                    alt=""
                    width={260}
                    height={160}
                    />
                </div>
                <h3 className="Media-title">{this.props.title}</h3>
                <p className="Media-author">{this.props.author}</p>
            </div>
        )
    }
}

Media.prototypes = {
image: PropTypes.string,
title: PropTypes.string.isRequired, //valor obligatorio requerido
author: PropTypes.string,
type: PropTypes.oneOf(['video' , ' audio']), //funcion para validar si el texto que resivo es tipo video o audio
}

export default Media;