const React = require('react')

//stub function
function Def (html){
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def