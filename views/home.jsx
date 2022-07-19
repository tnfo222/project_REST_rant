//Home Page
const React = require('react')
const Def = require('./default')

//home stub function
function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/bread_plates.jpg" alt="different breads with fruit toppings" width={640} height={480}></img>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/es/@ellaolsson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ella Olsson</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <br></br>
            </main>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </Def>
    )
}

module.exports = home