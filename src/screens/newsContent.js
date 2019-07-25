import React from 'react';
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';


class NewsContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            author : 'Eddie Makuch',
            title : '"Layoffs At Disney Are Widespread, Affect Both Disney And Fox Studios - Report - GameSpot"',
            description: "Disney is expected to cut \"thousands\" of jobs following its acquisition of Fox's entertainment assets.",
            content: "When Disney announced that its deal to purchase the majority Fox's entertainment assets for $71 billion had closed, CEO Robert Iger said in a memo that there would be a \"integration process.\" Some media reports said \"thousands\" of jobs would be lost as part",
            published_date: "2019-05-16T07:12:00Z",
        }
    }

    componentDidMount() {
        

    }


    render() {
        return(
            <div>    
                {/* <Media>
                    <Media.Body>
                        <h1 className='Title-name'> {this.state.title} </h1>
                        <p> {this.state.content} </p>
                    </Media.Body>
                </Media>  */}
                <Container>
                    <Row className='Row-style'>
                        <Col className='Col'>
                        <h1 className='Title-name'> {this.state.title} </h1>
                        </Col>
                        <Col>{this.state.content}</Col>
                    </Row>
                    <Row>
                        <Col>{this.state.description}</Col>
                        <Col md="auto"><h5> Author - {this.state.author} </h5></Col>
                    </Row>
                </Container> 
            </div>    
        );
    }
}

export default NewsContent;

