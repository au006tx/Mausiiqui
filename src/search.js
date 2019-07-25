import React from 'react';
import { Button, Form } from 'react-bootstrap';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }    
    }

    updateEvent = event => {
        this.setState({value: event.target.value})
    }

    handlekeyPress = event => {
        if(event.key === 'Enter') {
            this.search();
        }
    }

    search = () => {
        this.props.search(this.state.value);
    }

    

    render() {
        return (
            <div>
                <div className='Form-style'> 
                    <Form.Control onChange={this.updateEvent} onKeyPress={this.handlekeyPress} placeholder="Search for Artist" />
                </div>
                <br />
                <div> 
                    <Button variant="light" onClick={this.search}> Search </Button>
                </div>
            </div>
        )
    }
}

export default Search;