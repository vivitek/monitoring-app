import React from "react";
import { Card, CardBody, Button, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

const RouterCard = ({ router }) => {
    const history = useHistory();
    return (
        <Card>
            <CardBody>
                <Col md="12" align="center">
                    <img
                        alt="Router Icon"
                        src="https://img.icons8.com/wired/64/000000/router.png"
                    />
                </Col>
                <Col md="12" align="center" className="mt-3">
                    <span className="text-white h3">{router.name}</span>
                </Col>
                <Col md="12" align="center" className="mt-3">
                    <Button
                        onClick={() => {
                            history.push(`/routers/${router._id}`);
                        }}
                    >
                        Details
                    </Button>
                </Col>
            </CardBody>
        </Card>
    );
};

export default RouterCard;
