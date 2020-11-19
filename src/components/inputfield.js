import React from "react"


function InputField(props) {
    return <div><label for={props.item1}>
        <input id={props.item2} onkeypress="return onlystring();" type={props.item3} className="form-control" name={props.item4} placeholder={props.item5} />
    </label>
    </div>
}

export default InputField;