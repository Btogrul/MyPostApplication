import React, {useState} from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
      })

      const addNewPost = (e) =>  {
        e.preventDefault()
        const newPost = {
            ...post,
          id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }
    


    return(
    <form>
        <MyInput
        type="text"
        value={post.title}
        onChange={ e => setPost({...post, title: e.target.value})}
        placeholder="Postun yazan" />
        <MyInput
        value={post.body}
        type="text"
        onChange={ e => setPost({...post, body: e.target.value})}
        placeholder="Post haqqında"
        />
        {/* <MyButton disabled>Yeni Post</MyButton> */}
        <MyButton onClick={addNewPost}>Yeni Post</MyButton>
    </form>
    )
}

export default PostForm;