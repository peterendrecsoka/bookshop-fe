import * as React from 'react'
import { Link } from 'react-router-dom'
import AddToChart from "../addToChart"

interface BookProps {
    title: string,
    image: string
    key: string
    id: string
}

const Book = (props: BookProps) => (
    <div className="card col-4" key={props.id}>
        <Link to={"/book/"+props.id}><h2>{props.title}</h2></Link>
        <img src={props.image} style={{width: "100%"}}/>
        <AddToChart bookId={props.id} />
    </div>
)

export default Book
