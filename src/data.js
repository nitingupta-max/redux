import { useSelector, useDispatch } from 'react-redux'
import { storeEven } from '../src/action/index'

const Data = () => {
  const myState = useSelector((state) => state.check)

  return (
    <>
      <h2 className='alert'>{myState.number ? myState.number : 'The Number is odd(No data Found)'}</h2>
      {myState.employee.map((item, index) => {
        return (
          <div className='data' key={index}>
            <h3>Employee Name : {item.empName}</h3>
            <h3>Role : {item.role}</h3>
            <h3>Employee ID : {item.Id}</h3>
            <br></br>
          </div>
        )
      })}
    </>
  )
}

export default Data
