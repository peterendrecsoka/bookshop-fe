
function getStorage ()
{
    return window.localStorage
}

export function getCart ()
{
    var storage = getStorage()
    var cart = storage.getItem("cart") || ""
    return cart.split("|")
}

export function add (bookId: string)
{
    var items = getCart()
    items.push(bookId)
    getStorage().setItem("cart",items.join("|"))
}

export function isBookInCart (bookId: string)
{
    var items = getCart()
    console.log(bookId, items.join("|"))
    return (items.join("|").indexOf("|"+bookId) > -1)
}
