import * as React from 'react'
import { Link } from 'react-router-dom'
import AddToChart from "../addToChart"

interface BookProps {
    title: string,
    image: string
    key: string
    id: string
    col: number
    hideAddToChart?: boolean
}

const Book = (props: BookProps) => (
    <div className={"card col-"+props.col} key={props.id}>
        <Link to={"/book/"+props.id}><h2>{props.title}</h2></Link>
        <img src={props.image} style={{width: "100%"}}/>
        { !props.hideAddToChart && 
            <AddToChart bookId={props.id} />
        }
    </div>
)

export default Book
