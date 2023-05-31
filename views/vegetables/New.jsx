const React = require('react')
function New(props) {
    return(
        <div>
            <h1>New Vegetable</h1>
                <a href="/vegetables">Go back to index page</a>
                <form action="/vegetables" method="POST">
                    name: <input type="text" name="name" /><br />
                    season: <input type="text" name="season" /><br />
                    isInSeason: <input type="checkbox" name="isInSeason" /><br />
                    <input type="submit" value="Create Vegetable"/>
                </form>
        </div>
    )
}

module.exports = New