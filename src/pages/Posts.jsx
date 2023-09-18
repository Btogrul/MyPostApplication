import React, { useState, useEffect} from "react";
import {useFetching} from '../components/hooks/useFetching';
import {usePosts} from '../components/hooks/usePosts';
import PostService from '../API/PostService';
import { getPageCount } from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/loader/Loader";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages]= useState(0);
    const [limit, setLimit]= useState(10);
    const [page, setPage]= useState(1);
    const sortedAndSearchingPosts = usePosts(posts, filter.sort, filter.query);
    
  
    const [fetchPosts, isPostLoading, postError] = useFetching( async(limit, page) => {
      const response =  await PostService.getAll(limit, page);
      setPosts(response.data)
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit))
    })
  
  console.log(totalPages);
  
    useEffect(() => {
      fetchPosts(limit, page);
    },[])
  
    
  
  
  
    const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
    }
    const removePost = (post) => {
      setPosts(posts.filter( p => p.id !== post.id))
    }
  
    const changePage = (page) => {
      setPage(page)
      fetchPosts(limit, page)
    }
  
  
    return (
      <div className="App">
        <MyButton style={{marginTop: '20px'}} onClick={()=> setModal(true)}>
          Yeni Post yarat
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {postError && <h1>Xəta baş verdi {postError}</h1>}
        {isPostLoading
        ? <Loader/>
        :
        <PostList remove={removePost} posts={sortedAndSearchingPosts} title="Js postları"/> 
        }
        <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
      </div>
      );
  }
  
  export default Posts;
  
