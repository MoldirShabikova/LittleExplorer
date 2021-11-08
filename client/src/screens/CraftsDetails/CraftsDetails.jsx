import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { deleteCraft, getOneCraft } from '../../services/crafts'
import { FaEdit, FaTrash } from 'react-icons/fa'
import './CraftsDetails.css'

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
    <div className='craft-detail'>
      <div className='craft-box-cont'>
        <h2>{postCraft?.title}</h2>
        <img className='craft-img-center' src={postCraft?.image} />
        <div className='dates'>
          <p> {postCraft?.posted_date}</p>
          <p>By: {postCraft?.name}</p>
        </div>
        <p className='description-craft'> {postCraft?.description}</p>
        <p className='email-craft'>Email: {postCraft?.email}</p>
        <div className='button-container'>
          <Link className='edit-button' to={`/crafts/${id}/edit`}>
            <FaEdit />
          </Link>
          <FaTrash
            className='delete-button'
            onClick={() => handleCraftDelete(postCraft.id)}
          />
        </div>
        <Link to='/crafts' id='none'>
          <button className='craft-go-back'>Go Back</button>
        </Link>
      </div>
    </div>
  )
}
