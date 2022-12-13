//es6 map 구문 사용
function es6Parse(params) { //var 로 해도 되지만, const상수, let변수를 사용한다.
    const queryString = params.split('?'); //? 문자열로 분리한 배열로 반환한다.
    const chunks = queryString[1].split('&'); //배열로 반환된다.
    const result = chunks.map(element => { //element에 chunks 배열의 값이 자동으로 대입된다.
        const [key, value] = element.split('=');
        return { key: key, value: value }; //가로데이터를 세로데이터로 변환한다.
    });
    return result;
}
//영화진흥위원회 api URL 경로 확인
var apiUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101';
console.log(es6Parse(apiUrl)); //객체 배열로 출력이 된다.
const maps = es6Parse(apiUrl);
console.log(...maps);
//es6 resuce 구문 사용
function es6Reduce(params) { //var 로 해도 되지만, const상수, let변수를 사용한다.
    const queryString = params.split('?'); //? 문자열로 분리한 배열로 반환한다.
    const chunks = queryString[1].split('&'); //배열로 반환된다.
    const result = chunks.map(element => { //element에 chunks 배열의 값이 자동으로 대입된다.
        const [key, value] = element.split('=');
        return { key: key, value: value }; //가로데이터를 세로데이터로 변환한다.
    });
    return result.reduce((Obj, item)=> {
        Obj[item.key] = item.value; //세로데이터를 가로데이터로 변환한다.
        return Obj;
    }, {}); //Obj 의 초기 값은 {} 빈 객체
}
console.log(es6Reduce(apiUrl));