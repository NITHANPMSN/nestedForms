import  React, {useState} from 'react'
import { Formik } from 'formik'


export default function (){
    const [step, setStep]  = useState(1);
    const values = JSON.parse(localStorage.getItem('values'));
    const addNew = () =>{
        setStep(1);
        localStorage.removeItem('values')
    }
    return(
        <div>
            <Formik 
            initialValues={{
               firstName: '', lastName: '', email: '', mobile: ''
            }}
            onSubmit={(values) =>{ 
                localStorage.setItem('values',JSON.stringify(values))
                setStep(step + 1)
            }}
            >
            {(props) => (
            <form onSubmit={props.handleSubmit} className='regForm'>
             {step == 1 ?( <div className="tab"><h1>Step-1:</h1>
    <p><input type='text' placeholder="firstName"  name="firstName" onChange={props.handleChange} /></p>
    <p><input type='text' placeholder="lastName"  name="lastName" onChange={props.handleChange} /></p>
  </div>) : null }
    {step == 2 ? (
  <div className="tab"><h1>Step-2:</h1>
    <p><input placeholder="email" name="email" type='email' onChange={props.handleChange} /></p>
    <p><input placeholder="Mobile.No"  name="mobile" type="tel" maxLength='10' onChange={props.handleChange} /></p>
              </div>): null}
            
              {step == 3 ?           
<div className="tab"><h1>Step-3:</h1>
    <p>Name:<input type='text' name="firstName" value={values.firstName + " " + values.lastName} readOnly /></p>
    <p>E-mail:<input type='text' name="email" value={values.email} readOnly /></p>
    <p>Mobile.No:<input type='text'  name="mobile" value={values.mobile} readOnly /></p>
  </div> : null }

  <div style={{float:'right',}}>
{step <3 && step !== 1 ? <button type='button' onClick={() => setStep(step - 1)}>Back</button> : null }
 &nbsp;&nbsp;{step == 1 ? <button type='button' onClick={() => setStep(step + 1)}> Next </button> : null }
{step == 2 ? <button type='submit' >Submit</button> : null }
{step == 3 ? <button type='button' onClick={addNew}>Add new</button> : null }
</div>

            </form>
            )}
            </Formik>
        </div>
    );
}