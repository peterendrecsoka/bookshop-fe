import Axios from "axios"

const API = "https://www.googleapis.com/books/v1/volumes"

export function getBooks( title: string) {
    var url = API + "?q=intitle:" + title.replace(" ", "+")
    return Axios.create().get(url)
}

export function getBookData( bookID: string) {
    var url = API + "/" + bookID
    return Axios.create().get(url)
}
