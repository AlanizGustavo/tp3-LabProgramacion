const filtrar =  (array, type) => {
    return array.sort((a, b) => {
        return b[type] - a[type];
    })
}

module.exports = filtrar;