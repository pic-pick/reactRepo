import React from 'react';

const jsx = () => {
    const name = '홍길동';  //상수 name 선언 및 생성
    const number = 0;
    const num = 3;

    //내부함수, 사용자정의 객체 선언
    //객체 선언
    const person = {
        name:'성춘향',
        age:20
    }
    //내부함수 정의
    function getPerson(){
        return person.name + ", "+person.age;
    }
    return (
        <div>
            <h1>JSX 입니다</h1>
            <h2>name 안녕</h2>  {/* 문자열 name */}
            <h2>{name} 안녕</h2> {/* 스크립트영역{}이므로 상수 name접근 */}
            {number || '오리'}
            {number && '오리'}
            {false && '오리'}
            {   //조건 연산자 사용
                // eslint-disable-next-line eqeqeq
                name == '홍길동' ? (
                    <h3>홍길동 입니다</h3>
                ) : (
                    <h3>홍길동이 아닙니다</h3>
                )
            }
            {
                name == '이몽룡' ? <h3>이몽룡입니다</h3>:<h3>이몽룡이 아닙니다</h3>
            }
            <div 
                style={{
                    margin: '0 auto',
                    width: '50px',
                    backgroundColor: 'red',
                    color: 'white',
                    fontSize: 'bold',
                    padding: 10,
                    marginTop: '20px'
                }}
            >
                인라인 스타일링 적용
            </div>
            <div className='react'>
                주소 : 서울(자바스크립트 주석) <br/>
                /*주석 아님 문자열 처리 됨*/ <br/>
                {/**주석은 이렇게*/}
                {
                    //자바스크립트 영역 - 자동호출되는 함수
                    (function (){
                        if(num===1) return <div>valuse=1</div>;
                        if(num===2) return <div>valuse=2</div>;
                        if(num===3) return <div>valuse=3</div>;
                    })()
                }

                {/* 사용자 정의 객체값 반환하는 함수 호출 함수명 {함수명()} */}
                {/*문자열 getPerson() 출력*/}
                <div>getPerson()</div>
                <div>{getPerson()}</div>
            </div>
        </div>
    );
};

export default jsx;