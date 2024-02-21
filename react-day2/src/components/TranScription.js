import Item from "./Item";
import './TranScription1.css'
const Transciption =(props)=>{
  const {item} = props
    return (
    <div>
      <ul className="item-list">
          <p style={{display:"flex", justifyContent:"space-between"}}>รายการ <span>จำนวนเงิน</span></p>
          {item.map((element)=>{
            //  return <Item title={element.title} amount={element.amount} key={uuidv4()}/>
             return <Item {...element} key={element.id} />

            })}
      </ul>
      
    </div>
    );
  }

  export default Transciption