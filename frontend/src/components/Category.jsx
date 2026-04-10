import React from 'react'

const Category = (props) => {
    console.log("name:"+ props.name+", Path:"+props.path)
    return (
        <div>
            {props.name}
        </div>
    )
}

export default Category
