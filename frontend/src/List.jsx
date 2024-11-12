import './List.css'

export function List({petName, walkList, mealList}) {

    const walkListView = walkList.map(item => {
        const date = new Date(item.walk_time)
        date.setHours(date.getHours() - 9);
        const timeTxt = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        return <li key={item.id}>{timeTxt}</li>
    })

    const mealListView = mealList.map(item => {
        const date = new Date(item.meal_time)
        date.setHours(date.getHours() - 9);
        const timeTxt = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        return <li key={item.id}>{timeTxt}</li>
    })

    let title = ''

    if(walkList.length > 0) {
      title = "過去食事時間"
    } else if(mealList.length > 0) {
        title = "過去散歩時間"
    }

    return(
        <div className={"log"}>
            <div className={"title"}>
                <p>{petName}</p>
                <p>{title}</p>
            </div>
            <div className={"logList"}>
                <ul>{walkListView.slice(-5)}</ul>
                <ul>{mealListView.slice(-5)}</ul>
            </div>
        </div>
    )
}
