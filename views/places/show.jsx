const React = require('react')
const Def = require('../default')

function show (data) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} width="400" height="600"/>
          </div>
          <div className="col-sm-6">
            <h1>{ data.place.name }</h1>
            <h2>Location</h2>
            <p>{data.place.city}, {data.place.state}</p>
            <h2>Rating</h2>
            <p className="inactive">Currently unrated</p>
            <h2>Cuisines</h2>
            <p>Serving {data.place.cuisines}</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
        <hr />
        <h2>Comments</h2>
        <div className="row">
          <p className="inactive">No comments yet!</p>
        </div>
      </main>
    </Def>
  )
}

module.exports = show
