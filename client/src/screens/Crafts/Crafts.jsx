import { Link } from 'react-router-dom'

export default function Crafts(props) {
  const { crafts, handleCraftDelete, currentUser } = props
  return (
    <div>
      <h3> Crafts for Kids</h3>
      {crafts.map((craft) => (
        <div key={craft.id}>
          <Link to={`/crafts/${craft.id}`}>
            <p>{craft.title}</p>
            <img src={craft.image} />
            <p></p>
          </Link>
          {currentUser?.id === craft.user_id && (
            <div>
              <Link to={`/crafts/${craft.id}/edit`}>
                <button>edit</button>
              </Link>
              <button onClick={() => handleCraftDelete(craft.id)}>
                delete
              </button>
            </div>
          )}
        </div>
      ))}
      <Link to='/crafts/new'>
        <button>Create</button>
      </Link>
    </div>
  )
}
