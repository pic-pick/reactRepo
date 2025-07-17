import React from 'react';

const Nav = (props) => {
    //props에 전달되는 객체는 topics라는 배열이 전달됨
    //props.topics -> 배열
    //props.topcis[0].id

    const lis = []
    for (let i=0; i<props.topics.length;i++){
        let t = props.topics[i];
        lis.push(<li>{t.title}</li>);
    }
    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    );
};

export default Nav;