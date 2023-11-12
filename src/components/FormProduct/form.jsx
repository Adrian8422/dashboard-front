import react from "react"
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Row } from "reactstrap"
import { ContainerForm, Form, Label } from "./styled"
import { createProduct } from "api"
import { useSetStatsFormProduct } from "hooks"

export function FormProduct() {
    const [stateForm, setStateForm] = useSetStatsFormProduct();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const price = e.target.price.value
        const stock = e.target.stock.value
        const supplierName = e.target.supplierName.value
        const categorieName = e.target.categorieName.value
        console.log("DATOS", title, description, price, stock, supplierName, categorieName)
        const dataBody = {
            title, description, price, stock, supplierName, categorieName
        }


        await createProduct(dataBody)
        setStateForm(false)
        alert("Created product")
    }

    return (
        <ContainerForm >
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="">
                    <Input
                        name="title"
                        // defaultValue={user.lastname}
                        placeholder="Title"
                        type="text"
                    />
                </Label>
                <Label htmlFor="">
                    <Input className="pd-2" type="text" name="description" placeholder="Description" />
                </Label>
                <Label htmlFor="">
                    <Input type="number" name="price" placeholder="price" />
                </Label>
                <Label htmlFor="">
                    <Input type="number" name="stock" placeholder="stock" />
                </Label>
                <Label htmlFor="">
                    <Input type="text" name="supplierName" placeholder="supplier" />
                </Label>
                <Label htmlFor="">
                    <Input type="text" name="categorieName" placeholder="Categorie" />
                </Label>
                <Button className="btn-fill" color="primary" type="submit">
                    Save
                </Button>

            </Form>

        </ContainerForm>
    )
}