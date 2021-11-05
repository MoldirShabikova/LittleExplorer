import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getOneCraft } from '../../services/crafts'
import { FaEdit, FaTrash } from 'react-icons/fa'

export default function CraftDetails(props) {
  const [postCraft, setPostCraft] = useState(null)
  const { currentUser } = props
  const { id } = useParams()

  useEffect(() => {
    const fecthPostCraft = async () => {
      const postData = await getOneCraft(id)
      setPostCraft(postData)
    }
    fecthPostCraft()
  }, [id])

  return (
    <div>
      <div>
        <h2>{postCraft?.title}</h2>
        <p> {postCraft?.posted_date}</p>
        <p>By: {postCraft?.name}</p>
        <img src={postCraft?.image} />
        <p>Description: {postCraft?.description}</p>
        <p>Email: {postCraft?.email}</p>
      </div>
      <div>
        <Link to={`/crafts/${id}/edit`}>
          <FaEdit />
        </Link>
        <FaTrash className='delete-button' />
      </div>
      <p className='craft-go-back'>
        <Link to='/crafts' id='none'>
          Go Back
        </Link>
      </p>
    </div>
  )
}
