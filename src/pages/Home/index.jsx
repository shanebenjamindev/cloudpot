import { Link } from "react-router-dom";
import './home.css'
import memoData from '/public/memo/memoData.json';
export default function Home() {
  const renderMemo = () => {
    console.log(memoData);
    return memoData?.[0]?.December?.map((memo) => (
      <div className="home-news-item mb-3">{memo.title}</div>
    ))
  }


  return (
    <div className="section__Home bg-home">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="w-100" src="https://xachtaynhat.net/wp-content/uploads/2022/07/Nuoc-giai-khat-82X-bo-xung-Collage.jpg" />
          </div>
          <section className="col-md-6 mt-5">
            {renderMemo()}
          </section>
        </div>
      </div>
    </div>
  )
}

// <div id="section__Home">
//       <div className="container-fluid bg-home">

//         <div className="home__Content">
//           <h1 className="text-center">
//             <p>
//               CLOUDPOT
//             </p>
//             <span>
//               LẨU HẤP THỦY NHIỆT
//             </span>
//             <h3 className="text-dark">GRAND OPENING</h3>
//             <hr className="w-25 m-auto" style={{ border: "1px solid grey" }} />
//             - 20% SET MENU
//           </h1>
//           <div className="home-list-link">
//             <Link to="/menu-page" className="nav-link home-link">
//               <li className="">
//                 menu cloudpot
//               </li>
//             </Link>
//             <Link to="/services-page" className="nav-link home-link">
//               <li >
//                 5 bước phục vụ
//               </li>
//             </Link>
//             <Link to="/memo-page" className="nav-link home-link">
//               <li >
//                 Memo
//               </li>
//             </Link>

//           </div>
//         </div>

//         <div className="cloud">
//           <img src="/images/cloud/cloud1.png" style={{ "--i": 1 }} />
//           <img src="/images/cloud/cloud2.png" style={{ "--i": 2 }} />
//           <img src="/images/cloud/cloud3.png" style={{ "--i": 3 }} />
//           <img src="/images/cloud/cloud4.png" style={{ "--i": 4 }} />
//           <img src="/images/cloud/cloud5.png" style={{ "--i": 5 }} />
//         </div>
//         <div className="cloud2">
//           <img src="/images/cloud/cloud1.png" style={{ "--i": 1 }} />
//         </div>
//       </div>
//     </div>