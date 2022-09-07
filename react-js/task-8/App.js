import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getPosts } from "./redux/postsReducer/postsReducer"

function App() {
  const posts = useSelector (state => state.posts)
  const loading = useSelector (state => state.loading)
  const error = useSelector (state => state.error)
  const dispatch = useDispatch ()

  useEffect (() => {
    dispatch(getPosts())
  }, [])

  const restart = () => {
    dispatch (getPosts())
  }

  if (loading) {
    return (
      <div>
        Load process...
      </div>
    )
  }

  if (error) {
    return (
      <div>
        Error <button onClick={restart}> Refresh </button>
      </div>
    )
  }

  return(
    <div>
      {posts.map ((post) => {
        return (
          <div key = {post.id}>
            {post.title}
          </div>
        )
      })}
    </div>
  )
}

export default App