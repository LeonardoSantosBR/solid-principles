export const filters = ({
    where,
    page,
    limit,
    orderBy,
    select,
    include
}): any => {

    const options = {}
    if (where) options['where'] = JSON.parse(where)
    if (page) options['page'] = page
    if (limit) options['limit'] = limit
    if (orderBy) options['orderBy'] = JSON.parse(orderBy)
    if (select) options['select'] = JSON.parse(select)
    if (include) options['include'] = JSON.parse(include)

    return options
}