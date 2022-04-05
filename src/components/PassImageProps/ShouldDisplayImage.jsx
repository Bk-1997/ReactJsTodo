import React from "react";

const ShouldDisplayImage = props => (

<>
<h3 style={{textAlign:"center",marginTop:"50px",marginBottom:"-40px"}}>Qo No: 6 :-  Display image using props</h3>
  <div className="propsImage">
    <img className="icon"  src={props.H4ILogo ? props.H4ILogo : props.H4ILogos} alt="icon" />
  </div>
</>
);

export default ShouldDisplayImage;