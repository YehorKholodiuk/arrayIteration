import React from 'react';
import Logo from "./Logo";

const Menu = (props) => {
    const buyCourse = (id) => {
        console.log('buyCourse', id)
    };
    return (
        <>
            <div>Site Name:{props.siteName}</div>
            <div>Courses:</div>
            <ul>
                {
                    props.courses.map(el => (
                        <li key={el.id}>
                            <strong>{el.title}</strong>${el.price}
                            <Logo siteName={props.siteName}/>
                            <button onClick={() => buyCourse(el.id)}>Buy</button>
                        </li>
                    ))

                }
            </ul>
        </>
    );
};

export default Menu;
