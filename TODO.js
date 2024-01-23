import React, { useState } from 'react'
function TODO() {
    const [input, setinput] = useState('')
    const [list, setlist] = useState([])
    const [corentindex, setcorentindex] = useState('')
    const [haide, sethaide] = useState(false)

    function updatetext(e) {
        let value = e.target.value
        setinput(value)
    }
    function Add_task() {
        if (input !== '') {
            setlist([...list, input])
            setinput("")
        }
        else {
            alert("pleas text tha warit")
        }
    }
    function item_delete(index) {
        let copy = [...list]
        copy.splice(index, 1)
        setlist(copy)
    }

    function addit_item(index) {
        let itemvalue = list[index]
        setinput(itemvalue)
        setcorentindex(index)
        sethaide(true)
    }

    function updatitem() {
        let copy = [...list]
        copy[corentindex] = input
        setlist(copy)

        setinput('')

    }


    return (
        <span>
            <div className='App'>
                <div class=' box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;'>
                    <h1>to do list</h1>
                    <div>
                    </div>
                    <input placeholder='INTER THA TEXT' class=" w-25 p-3 "
                        value={input}
                        onChange={updatetext} />

                    {haide ? <button class="p-3" onClick={updatitem} >updatitem</button>
                        :
                        <button class="p-3" onClick={Add_task} >add task</button>}

                </div>
            </div>
            <div className='list'>
                <ul>
                    {
                        list.map(function (item, index) {
                            return <>
                                {<li>
                                    {item}
                                    <i class="bi bi-cart-dash" onClick={() => item_delete(index)} ></i>
                                    <i class="bi bi-cart-plus" onClick={() => addit_item(index)} ></i>
                                </li>}
                            </>
                        })

                    }
                </ul>
            </div>
        </span>

    )
}



export default TODO;
