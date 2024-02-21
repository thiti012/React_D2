import './FormComponent.css'
import { useEffect,useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FormComponent=(props)=>{
    const[title,setTitle] = useState('')
    const[amount,setAmount] = useState(0)
    const[formvalid,setFormValid] = useState(false)

    const inputTitle = (event)=>{
        setTitle(event.target.value)
    }
    const inputAmount = (event)=>{
        setAmount(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount('0')
    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount!==0 
        setFormValid(checkData)

    },[amount,title])


    return(
        <>
        <form onSubmit={saveItem}>
            <div className="form-control">
                <label>ชื่อรายการ </label>
                <input type="text" placeholder="ระบุชื่อรายการ " onChange={inputTitle} value={title}/>
            </div>
            <div className="form-control">
                <label>จำนวนเงิน </label>
                <input type="number" placeholder="ระบุจำนวนเงิน " onChange={inputAmount} value={amount}/> 
            </div>
            <button type="submit" className="btn" disabled={!formvalid}>เพิ่มข้อมูล</button>

        </form>

        <div>
            
        </div>
        </>
    )
}
export default FormComponent