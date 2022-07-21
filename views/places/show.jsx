const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <p>Currently unrated</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
            <h2>Comments</h2> 
            <p>No comments yet!</p>
            <h2>Cuisines</h2>
            <p>{data.cuisines}</p>
          </main>
        </Def>
    )
}

module.exports = show
