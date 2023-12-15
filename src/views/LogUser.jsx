import { FormLog } from "components/FormLogin"
import react from "react"
import { Card, Col, Row } from "reactstrap"

export function PageLog(){
    return (
        <div className="content">
            <Row>
                <Card>
                    <Col md="12">
                        <FormLog/>
                    </Col>
                </Card>
            </Row>
        </div>

    )
}