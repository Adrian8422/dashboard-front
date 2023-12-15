import react from "react"
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Row } from "reactstrap"
import { ContainerForm, Form, Label } from "./styled"
import { createProduct } from "api"
import { useSetStatsFormProduct } from "hooks"
import { useGetValueUser } from "hooks"
import { getToken } from "functions"
import { useSetStatsFormSupplier } from "hooks"
import { createSupplier } from "api"

export function FormSupplier() {
    const rolUser = useGetValueUser()
    const token = getToken();
    const [stateFormSupplier, setStateFormSupplier] = useSetStatsFormSupplier();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const description = e.target.description.value
        const cellphone = e.target.cellphone.value
        const email = e.target.email.value
     
    const dataBody = {
        name,description,cellphone,email
    }

        await createSupplier(token,dataBody)
        setStateFormSupplier(false)
        alert("Created supplier")
    }

    return (
        <ContainerForm >
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="">
                    <Input
                        name="name"
                        // defaultValue={user.lastname}
                        placeholder="Name"
                        type="text"
                    />
                </Label>
                <Label htmlFor="">
                    <Input className="pd-2" type="text" name="description" placeholder="Description" />
                </Label>
                <Label htmlFor="">
                    <Input type="number" name="cellphone" placeholder="Cellphone" />
                </Label>
                <Label htmlFor="">
                    <Input type="text   " name="email" placeholder="Email" />
                </Label>
               
                {rolUser == 'client' ? null : 
                <Button className="btn-fill" color="primary" type="submit">
                    Save
                </Button>
                }

            </Form>

        </ContainerForm>
    )
}