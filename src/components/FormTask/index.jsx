import react from "react"
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Row } from "reactstrap"
import { ContainerForm, Form, Label } from "./styled"
import { createProduct } from "api"
import { useSetStatsFormProduct } from "hooks"
import { useGetValueUser } from "hooks"
import { getToken } from "functions"
import { useSetStatsFormSupplier } from "hooks"
import { createSupplier } from "api"
import { createTask } from "api"
import { useSetStatusFormTask } from "hooks"

export function FormTask() {
    const rolUser = useGetValueUser()
    const [stateFormTask, setStateFormTask] = useSetStatusFormTask();

    const token = getToken();
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value

     
    const dataBody = {
        title,description
    }

        await createTask(token,dataBody)
        setStateFormTask(false)
        alert("Created task")
    }

    return (
        <ContainerForm >
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="">
                    <Input
                        name="title"
                        // defaultValue={user.lastname}
                        placeholder="title"
                        type="text"
                    />
                </Label>
                <Label htmlFor="">
                    <Input className="pd-2" type="text" name="description" placeholder="Description" />
                </Label>
               
                <Button className="btn-fill" color="primary" type="submit">
                    Save
                </Button>
                

            </Form>

        </ContainerForm>
    )
}