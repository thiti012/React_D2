import { useContext } from "react"
import DataContext from "./data/DataContext"
import './components/reportContainer.css'

const ReportComponant=()=>{
const {income, expense}=useContext(DataContext)
const formatNumber=(num)=>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1,`)
}
return(
    <div>
        <h4>ยอดคงเหลือ </h4>
        <h1>{formatNumber((income - expense).toFixed(2) )} บาท</h1>

        <div className="report-container">
            <div >
                <h4>รายได้ทั้งหมด</h4> 
                <p className="income">{formatNumber(income)}</p> 
            </div>
            <div>
                <h4>รายจ่ายทั้งหมด</h4> 
                <p className="expense">{formatNumber(expense)}</p> 
            </div>
        </div>
    </div>
    
)
}

export default ReportComponant