import * as React from 'react'
import { Link } from 'react-router-dom'
import { isBookInCart, add as addChart } from "../../helpers/cart"

export default class AddToChart extends React.Component<{
    bookId: string
},{}>
{
    onAdd = (bookId: string) => () => {
        addChart(bookId)
        this.forceUpdate()
    }

    render() {
        if (!isBookInCart(this.props.bookId)){
            return (
                <div className="btn btn-primary" onClick={this.onAdd(this.props.bookId)}>Add to chart</div>
            )
        } else {
            return (
                <div>Book is in your cart</div>
            )
        }
    }
}
