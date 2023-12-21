import react, { useState } from "react";
import { ContainerForm, Form, Label } from "./styled";
import { Button, Input, Row } from "reactstrap";
import { signup,signin } from "api";
import { useNavigate } from "react-router-dom";
import { useSetUser } from "hooks";


export function FormLog() {
  const [stateFormCode, setStateFormCode] = useState(false)
  const [email, setEmail] = useState("")
  const [user, setUserRecoil] = useSetUser() 
  

  const navigateTo = useNavigate()
  const handleSubmit =async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const lastname = e.target.lastname.value
    const email = e.target.email.value
    console.log(name,lastname,email)
    await signup({name,lastname,email})
    setEmail(email)
    alert("enviamos el codigo a tu email, verifícalo")

    setStateFormCode(true)
    // navigateTo('/dashboard')
  };
  const handleSubmitCode =async (e) => {
    e.preventDefault()
    const code = e.target.code.value
      const response = await signin(email,parseInt(code))
      console.log("this response",response)
      if(response.name){
        await setUserRecoil(response)

        alert("Welcome " + response.name)
        // Vacio el campo email , y vuelve el estado inicial del form code 
        setEmail("")
      
        setStateFormCode(false)
        
        navigateTo("/dashboard")
      }else if(!response.token) {
        setStateFormCode(true)
        alert(response.error)
      }

  

    // aqui aplicar logica para el delete del email osea, ver si es correcto el codigo y demas

  
    // navigateTo('/dashboard')
  };
  return (
    <Row style={{justifyContent:"center"}}>
        <ContainerForm>
        
          {stateFormCode == false ?    
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
              <Input
                className="pd-2"
                type="text"
                name="lastname"
                placeholder="lastname"
              />
            </Label>
            <Label htmlFor="">
              <Input type="email" name="email" placeholder="email" />
            </Label>
            <Button className="btn-fill" color="primary" type="submit" >Send code</Button>
          </Form>
          :
          <Form onSubmit={handleSubmitCode}>
            <Label htmlFor="">
              <Input
                name="code"
                placeholder="Code"
                type="number"
              />
            </Label>
            <Button className="btn-fill" color="primary" type="submit" >Send code</Button>
          </Form>
          }
        </ContainerForm>
      </Row>
  );
}
