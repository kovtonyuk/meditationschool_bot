function getMenu(obj, items) {
    const menu = [];
  
    items.forEach((item) => {
        if(!Array.isArray(item)) {
            menu.push([obj[item]]);
        } else {
            let nested_arr = [];
            item.forEach((item) => {
                nested_arr.push(obj[item]);
            })
            menu.push(nested_arr);
        }
    })
    return menu;
}

module.exports = {
    getMenu
}