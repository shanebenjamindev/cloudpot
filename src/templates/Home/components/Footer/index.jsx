export default function Footer() {
    return (
        <footer className="footer">
            <div className="p-2 bg-success text-white ">
                <div className="d-md-flex">
                    <div className="col-md-4 info-box">
                        <h4>HÀ NỘI</h4>
                        <p>Tầng 1, TTTM BigC Thăng Long,
                            222 Trần Duy Hưng, Cầu Giấy, Hà Nội</p>
                    </div>

                    <div className="col-md-4 info-box">
                        <h4>TP. HỒ CHÍ MINH</h4>
                        <p>45 Trương Công Định, Phường 14, Tân Bình, Thành phố Hồ Chí Minh</p>
                    </div>
                    <iframe
                        className="col-md-4 "
                        frameBorder={0}
                        width={300}
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcloudpot%2F&tabs=timeline&width=300&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    ></iframe>
                </div>

                <div className="d-md-flex align-items-center">
                    <p className="mx-2">Từ nhà sáng lập Ashima</p>
                    <img width={40} src="https://th.bing.com/th/id/OIP.5ay6N6ejA6Ll0pA_o4nd_wHaJK?rs=1&pid=ImgDetMain" />
                </div>
            </div>
        </footer>
    );
}
