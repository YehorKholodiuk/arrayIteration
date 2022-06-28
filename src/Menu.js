import React from 'react';

const Menu = (props) => {
    const buyCourse = (id) => {
        console.log('buyCourse', id)
    };
    return (
        <>
            <div>Courses:</div>
            <ul>
                {
                    props.courses.map(el => (
                        <li key={el.id}>
                            <strong>{el.title}</strong>${el.price}
                            <button onClick={() => buyCourse(el.id)}>Buy</button>
                        </li>
                    ))

                }
            </ul>
        </>
    );
};

export default Menu;
