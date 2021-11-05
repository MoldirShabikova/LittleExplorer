import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { deleteCraft, getOneCraft } from '../../services/crafts'
import { FaEdit, FaTrash } from 'react-icons/fa'

export default function CraftDetails(props) {
  const [postCraft, setPostCraft] = useState(null)
  const { currentUser } = props
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fecthPostCraft = async () => {
      const postData = await getOneCraft(id)
      setPostCraft(postData)
    }
    fecthPostCraft()
  }, [id])

  const handleCraftDelete = async (id) => {
    await deleteCraft(id)
    history.push('/crafts')
  }
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
        <FaTrash onClick={() => handleCraftDelete(postCraft.id)} />
      </div>
      <Link to='/crafts' id='none'>
        <p className='craft-go-back'>Go Back</p>
      </Link>
    </div>
  )
}
