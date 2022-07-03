const React = require('react')
const Def = require('./default')

//error404 stub function
function error404 () {
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
        </main>
    </Def>
}

module.exports = error404