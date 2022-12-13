function es5Parse(params) { //es5 고전 for문
    var queryString = params.split('?'); //? 문자열로 분리한 배열로 반환한다.
    var chunks = queryString[1].split('&'); //배열로 반환된다.
    var result = {}; //빈 json 객체 생성
    for(var i=0; i<chunks.length; i++) {
        var parts = chunks[i].split('='); //배열로 반환된다.
        var key = parts[0];
        var value = parts[1];
        result[key] = value; //{ key:value } 생성됨
    }
    return result;
}
//es6 향상된 for문
function es6Parse(params) { //var 로 해도 되지만, const상수, let변수를 사용한다.
    const queryString = params.split('?'); //? 문자열로 분리한 배열로 반환한다.
    const chunks = queryString[1].split('&'); //배열로 반환된다.
    let result = {}; //빈 json 객체 생성
    chunks.forEach(element => { //element에 chunks 배열의 값이 자동으로 대입된다.
        const [key, value] = element.split('=');
        result[key] = value;
    });
    return result;
}
//영화진흥위원회 api URL 경로 확인
var apiUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101';
console.log(es5Parse(apiUrl));
console.log(es6Parse(apiUrl));