import React,{useState} from 'react';
import DisplayList from './DisplayList';

const CreateList = () => {
    const [dataList,setDataList] = useState([
        "Amit",
        "Payal",
        "Om",
        "Ram",
        "Anjali",
        "pp",
        "ss"
    ])
  return (
    <>
        <h5 style={{color:"blue"}}><span style={{color:"red"}}>QoNo:7:-</span> Rendering lists and javascript array functions</h5>
        <DisplayList list={dataList} />
    </>
  )
}

export default CreateList