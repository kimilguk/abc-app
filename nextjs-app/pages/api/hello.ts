// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //res.status(200).json({ name: 'John Doe' })
  console.log("자료: ", req.query['date']);
  let searchDate: any = (req.query['date'])?req.query['date']:'20221225';
  searchDate = searchDate.replace(/-/g,"");
  const URL = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='+searchDate;
        fetch(URL)
            .then((response) => {
                    return response.json();//프로미스 객체로 리턴 반환 된다.(아래 then 으로)
                }
            ).then(data => { //도트 연산자로 함수를 이어서 편리하게 사용하는 방식을 도트 체인함수라고 한다.
                res.status(200).json(data)
                console.log(data['boxOfficeResult']['dailyBoxOfficeList']);//크롬 브라우저에서 json데이터 확인
            });
  //console.log(req.query.name);
  //let queryName: string = (req.query.name) as string;
  //res.status(200).json({ name: queryName })
}