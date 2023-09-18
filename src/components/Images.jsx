import React,{useState} from "react";

const Images = () => {
    const [image, setImage] = useState();


    function handleImageChange(event){
      const selectedImage = event.target.files[0];
  
      const imageUrl = URL.createObjectURL(selectedImage)
  
      setImage(imageUrl);
  
    }
  return (
    <>
      <img alt="avatars" src={image} />
      <input
      type="file"
      onChange={handleImageChange}
      />
    </>
  );
};

export default Images;