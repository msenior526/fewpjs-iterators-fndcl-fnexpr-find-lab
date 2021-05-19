
const superbowlWin = (record) => {
    let win = record.find(element => 
        element.result === "W"
    )
    if (win == true) {
        return win.year
    } else {
        return undefined
    }
}
