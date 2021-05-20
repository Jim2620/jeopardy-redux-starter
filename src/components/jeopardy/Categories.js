import React from 'react';

function Categories(props) {

    const categories = props.categories.map((category) => {
        return <button key={category.id} onClick={props.clickHandler.bind(this, category.id)}>{category.title}</button>
    })

    return (
      <div>
        <div style={{textAlign:"center"}}>
            <h1>Welcome to Jeopardy!</h1>
            <h3>Select A Category</h3>
        </div>
        <div style={{display:"flex", justifyContent: "space-evenly"}}>
          {categories}
        </div>
      </div>
    );
    
}

export default Categories;
