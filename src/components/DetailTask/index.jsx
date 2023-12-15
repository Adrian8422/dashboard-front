import { getProductId } from "api";
import { useGetValueUser } from "hooks";
import react, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { CheckboxLabel, ContainerForm, Form, InputCheck, Label } from "./styled";
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Row } from "reactstrap"
import { getToken } from "functions";
import { updateProduct } from "api";
import { getSupplierId } from "api";
import { updateSupplier } from "api";
import { getTaskId } from "api";
import { updateTask } from "api";


export function DetailTask(){
    const navigateTo = useNavigate()
    const token = getToken();
    const {id}=  useParams()
    const user = useGetValueUser()
    const [task,setTask] = useState({})


useEffect(()=>{
    async function loadProduct (){
        const data = await getTaskId(token,id)
        console.log("producto cargado",data)
        console.log("user",user)
        setTask(data)
    }
    loadProduct()

},[])




    const handleUpdateProduct = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const done = e.target.done.value
    console.log("el idddd",id)
     
        const dataBody = {
            title,description,done
        }
        

            
        await updateTask(token,id,dataBody)
      
        alert("Updated product")
        navigateTo("/admin/dashboard#tasks")
        
    }

    return (
        <ContainerForm>
            <Form onSubmit={handleUpdateProduct}>
                <Label htmlFor="">
                    <Input
                        name="title"
                        defaultValue={task.title}
                        placeholder="Title"
                        type="text"
                    />
                </Label>
                <Label htmlFor="">
                    <Input className="pd-2" type="text" name="description" placeholder="Description" defaultValue={task.description} />
                </Label>
                <CheckboxLabel htmlFor="">
                    <p style={{margin:"0px",marginLeft:"5px"}}>Done:</p>
                    
                    <InputCheck  type="checkbox" name="done"  defaultChecked={task.done} />
                </CheckboxLabel>
                <Label htmlFor="">
                    <p style={{margin:"0px"}}>Created by: {task.createdBy}</p>
                </Label>
                <Button className="btn-fill" color="primary" type="submit">
                    Save
                </Button>

            </Form>

        </ContainerForm>
    )
}
