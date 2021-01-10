import React from "react";
import { Button, Image, Menu, Icon, Segment } from "semantic-ui-react";
import logo from "../../src/logo.svg";
import { Links } from 'react-router-dom'

const Footer = () => {
    return (
        <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 50, padding: '0em 0em' }}
        vertical>
        Henlo smelly feet
        </Segment>
    );
};

export default Footer;