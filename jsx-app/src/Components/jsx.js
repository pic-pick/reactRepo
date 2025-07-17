import React from 'react';

const jsx = () => {
    const name = '홍길동';  //상수 name 선언 및 생성
    return (
        <div>
            <h1>JSX 입니다</h1>
            <h2>name 안녕</h2>  {/* 문자열 name */}
            <h2>{name} 안녕</h2> {/* 스크립트영역{}이므로 상수 name접근 */}
        </div>
    );
};

export default jsx;