// code Here
// function List({ listData, action }) {
function List(props) {
    // console.log(props);
    const { listData, action } = props
    return (
        <div>
            <h1>{listData}</h1>
            <button>{action}</button>
        </div>
    )
}

export default List