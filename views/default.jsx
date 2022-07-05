//Layout Page
const React = require('react')

//stub function
function Def (html){
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"/>
                <link rel = "stylesheet" href = "/css/style.css"/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def