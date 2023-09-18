import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return(
        <div>

        <MyInput
         placeholder="axtarış"
         value={filter.query}
         onChange={e => setFilter({...filter, query: e.target.value})}
        />


      <span>Sıralama <i className="fa-solid fa-arrow-right"></i> </span> 
        <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Slralanma "
        options={[
          {
            value: 'title',
            name: 'A-Z adlar'
          },
          {
            value: 'body',
            name: 'məğzə əsasən'
          },
        ]}
        /> 
      </div>

    )
}

export default PostFilter;