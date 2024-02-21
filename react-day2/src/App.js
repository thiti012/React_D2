import Transciption from "./components/TranScription";
import './App.css'
import FormComponent from "./components/FormComponent";
import { useEffect, useState} from "react";
import DataContext from "./data/DataContext";
import ReportComponant from "./ReportComponent";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"


function App(){
  const design = {color:"red",textAlign:"center",}
  // eslint-disable-next-line

  const initData = [
    {id:1,title:"ค่าเช่าบ้าน",amount:-3000},
    {id:2,title:"work",amount:8000}  
  ]

  const[items,setItem] = useState(initData)
  const [reportIncome,setReportIncome]= useState(0)
  const [reportEpense,setReportExpense]= useState(0)

  const onAddNewItem =(newItem)=>{
      setItem((prevItem)=>{
        return[newItem,...prevItem]
      })
  }
  useEffect(()=>{
      const amounts=items.map(items=>items.amount)
      const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
      const expense= (amounts.filter(element=>element<0).reduce((total,element)=>total+element))*-1
      setReportIncome(income.toFixed(2))
      setReportExpense(expense.toFixed(2))
  },[items,reportEpense,reportIncome])

  return (
    <DataContext.Provider value={{ income : reportIncome,expense : reportEpense  }}>
    
     <div className="container">

        <h2 style={design}>โปรแกรมบัญชี รายรับรายจ่าย</h2>
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/" exact>thiti1</Link> 
            </li>
            <li>
            <Link to="/insert">booo</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<ReportComponant/>}>

            </Route>
            <Route path="/insert" element={
            <div>
              <FormComponent onAddItem={onAddNewItem}/>
              <Transciption item = {items}/>
            </div>}>
              
            </Route>
          </Routes>
        </div>
        </Router>        

    </div>

    </DataContext.Provider>
    


  );
}

export default App;
