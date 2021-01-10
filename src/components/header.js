import React from "react";
import { Button, Image, Menu, Icon, Segment } from "semantic-ui-react";
import logo from "../../src/logo.svg";
import { Links } from 'react-router-dom'

const Header = () => {
    return (
        <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 50, padding: '0em 0em' }}
        vertical>
        <Menu pointing secondary>
            <Image src={logo} avatar size={"tiny"} />
            <Menu.Item style={{ color: 'white' ,fontSize: 30 }}>Wipesoft</Menu.Item>
            <Menu.Item name = 'contact' position ="right" style={{ color: 'white' ,fontSize: 20}}>Projects</Menu.Item>
            <Menu.Item position ="right" style={{ color: 'white' ,fontSize: 20}}>Home</Menu.Item>
            <Menu.Item position ="right" style={{ color: 'white' ,fontSize: 20}}>About</Menu.Item>
            <Menu.Item position="right">
                <Button icon inverted style={{ padding: '1em 1em' }}>
                    <Icon name ='sign in' />
                    Sign In
                </Button>    
            </Menu.Item>
            <Menu.Item>
                <Button icon inverted style={{ padding: '1em 1em' }}>
                    Contact
                </Button>
            </Menu.Item>
        </Menu>
        </Segment>
    );
};

export default Header;