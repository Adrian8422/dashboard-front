import { getProductId } from "api";
import { useGetValueUser } from "hooks";
import react, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { ContainerForm, Form, Label } from "./styled";
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Row } from "reactstrap"
import { getToken } from "functions";
import { updateProduct } from "api";
import { getSupplierId } from "api";
import { updateSupplier } from "api";


export function DetailSupplier(){
    const navigateTo = useNavigate()
    const token = getToken();
    const {id}=  useParams()
    const user = useGetValueUser()
    const [supplier,setSupplier] = useState({})

useEffect(()=>{
    async function loadProduct (){
        const data = await getSupplierId(token,id)
        console.log("producto cargado",data)
        console.log("user",user)
        setSupplier(data)
    }
    loadProduct()

},[])




    const handleUpdateProduct = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const description = e.target.description.value
        const cellphone = e.target.cellphone.value
        const email = e.target.email.value
     
        console.log("DATOS", name,description,cellphone,email)
        const dataBody = {
            name,description,cellphone,email
        }
        

            
        await updateSupplier(token,id,dataBody)
      
        alert("Updated product")
        navigateTo("/admin/products")
        
    }

    return (
        <ContainerForm>
            <Form onSubmit={handleUpdateProduct}>
                <Label htmlFor="">
                    <Input
                        name="title"
                        defaultValue={supplier.name}
                        placeholder="Title"
                        type="text"
                    />
                </Label>
                <Label htmlFor="">
                    <Input className="pd-2" type="text" name="description" placeholder="Description" defaultValue={supplier.description} />
                </Label>
                <Label htmlFor="">
                    <Input type="text" name="cellphone" placeholder="cellphone" defaultValue={supplier.cellphone} />
                </Label>
                <Label htmlFor="">
                    <Input type="text" name="email" placeholder="email" defaultValue={supplier.email}/>
                </Label>
                <Button className="btn-fill" color="primary" type="submit">
                    Save
                </Button>

            </Form>

        </ContainerForm>
    )
}
