import { getProductId } from "api";
import { useGetValueUser } from "hooks";
import react, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ContainerForm, Form, Label } from "./styled";
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Row } from "reactstrap"
import { getToken } from "functions";
import { updateProduct } from "api";


export function DetailProduct(){
    const token = getToken();
    const {id}=  useParams()
const user = useGetValueUser()
    const [product,setProduct] = useState({})

useEffect(()=>{
    async function loadProduct (){
        const data = await getProductId(token,id)
        console.log("producto cargado",data)
        console.log("user",user)
        setProduct(data)
    }
    loadProduct()

},[])




    const handleUpdateProduct = async (e) => {
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

console.log(token)
        await updateProduct(token,id,dataBody)
      
        alert("Updated product")
    }

    return (
        <ContainerForm>
            <Form onSubmit={handleUpdateProduct}>
                <Label htmlFor="">
                    <Input
                        name="title"
                        defaultValue={product.title}
                        placeholder="Title"
                        type="text"
                    />
                </Label>
                <Label htmlFor="">
                    <Input className="pd-2" type="text" name="description" placeholder="Description" defaultValue={product.description} />
                </Label>
                <Label htmlFor="">
                    <Input type="number" name="price" placeholder="price" defaultValue={product.price} />
                </Label>
                <Label htmlFor="">
                    <Input type="number" name="stock" placeholder="stock" defaultValue={product.stock}/>
                </Label>
                <Label htmlFor="">
                    <Input type="text" name="supplierName" placeholder="supplier" defaultValue={product.supplierName}/>
                </Label>
                <Label htmlFor="">
                    <Input type="text" name="categorieName" placeholder="Categorie" defaultValue={product.categoriesName} />
                </Label>
                <Button className="btn-fill" color="primary" type="submit">
                    Save
                </Button>

            </Form>

        </ContainerForm>
    )
}
