const React = require('react')
function Edit(props) {
    const {name, season, isInSeason, _id}=props.vegetable
    return(
        <div>
            <h1>Edit {name}</h1>
                <a href="/vegetables">Go back to index page</a>
                <form action={`/vegetables/${_id}?_method=PUT`} method="POST">
                    name: <input type="text" name="name" /><br />
                    season: <input type="text" name="season" /><br />
                    isInSeason: {isInSeason? <input type="checkbox" name="isInSeason" defaultChecked/>: <input type="checkbox" name="isInSeason"></input>}<br />
                    <input type="submit" value="Update Vegetable"/>
                </form>
        </div>
    )
}

module.exports = Edit