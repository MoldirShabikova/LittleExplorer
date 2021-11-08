import { Link } from 'react-router-dom'
import './Crafts.css'

export default function Crafts(props) {
  const { crafts, handleCraftDelete, currentUser } = props
  return (
    <div className='main-box'>
      <h3 className='craft-title'> Crafts for Kids</h3>
      <div className='craft-lists'>
        {crafts.map((craft) => (
          <div className='all-list' key={craft.id}>
            <div className='craft-container'>
              <Link to={`/crafts/${craft.id}`}>
                <p>{craft.title}</p>
                <img src={craft.image} />
                <p></p>
              </Link>
              {currentUser?.id === craft?.user_id ? (
                <>
                  <button>edit</button>
                  <button onClick={() => handleCraftDelete(craft.id)}>
                    delete
                  </button>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
