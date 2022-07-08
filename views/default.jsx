//Layout Page
const React = require('react')

//stub function
function Def (html){
    return (
        <html>
            <head>
                <title>Places to Rant and Rave About</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <div className = "content">
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/places">Places</a>
                            </li>
                            <li>
                                <a href="/places/new">Add Place</a>
                            </li>
                        </ul>
                    </nav>
                    {html.children}
                    <div className = "push"></div> 
                </div>
                <footer className = "footer">
                    footer
                </footer>
            </body>
        </html>
    )
}
module.exports = Def