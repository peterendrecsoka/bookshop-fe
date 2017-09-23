import * as React from 'react'
import { Link } from 'react-router-dom'

export default class AddToChart extends React.Component<{
    bookId: string
},{}>
{
    onAdd = (bookId: string) => () => {
        var storage = window.localStorage
        var cart = storage.getItem("cart") || ""
        var items = cart.split("|")
        items.push(bookId)
        storage.setItem("cart",items.join("|"))
    }

    render() {
        return (
            <div className="btn btn-primary" onClick={this.onAdd(this.props.bookId)}>Add to chart</div>
        )
    }
}
