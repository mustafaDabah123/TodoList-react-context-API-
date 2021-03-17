import React , {useContext} from 'react';
import {itemsContext} from '../contextAPI/globalState';
import {ListList , ItemsList , ButtonDelete } from '../styles'
function ListItems() {
    const {items , deleteItem } = useContext(itemsContext);
    return (
        <div className="list-items">
            {items.map(item => {
                    return (
                        <ListList key={item.id}>
                            <ItemsList>{item.text} <ButtonDelete onClick={() => deleteItem(item.id)}>delete</ButtonDelete></ItemsList>
                        </ListList>
                    )
                })}
        </div>
    )
}

export default ListItems
