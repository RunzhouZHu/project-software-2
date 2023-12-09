// 数组减元素
function listMinus(list, x)
{
    const  newList = []
    for (let i = 0; i < list.length; i++)
    {
        if (x === list[i]){
        }
        else
        {
            newList.push(list[i])
        }
    }

    return newList
}
