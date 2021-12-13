import React from 'react'
import { Card } from 'react-bootstrap'

function MyPage({ data }) {
    return (
        <div>
            <Card style={{ width: '18rem', height: '18rem', margin: "auto"}}>



                <Card.Img
                    variant="top"
                    className='card-image'
                    src={data.image}
                    style={{ width: "auto", margin: "auto", height: "80px" }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title><strong>{data.title}</strong></Card.Title>
                    <Card.Text className='cardText'>
                        <strong>{data.category}</strong>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="justify-self-end card-footer">
                    <Card.Text>
                    </Card.Text>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default MyPage
