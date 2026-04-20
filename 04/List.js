import React from 'react';
import { v4 as uuid } from 'uuid';

class List extends React.Component {
    render() {
        const { items } = this.props;
        console.log(items)
        const list = items.map((el) => {
            return (
                <li key={uuid()}>
                    <h3>Dane: {el.text}</h3>
                    <p>Rozmiar pliku: {el.size} Bytes</p>
                </li>
            )
        })
        return (
            <ul>
                Lista plików
                {list}
            </ul>
        )
    }
}

export default List;