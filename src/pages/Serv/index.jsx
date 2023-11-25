import quytrinh5buoc from '../../../public/images/cloudpot-services/quytrinh5buoc.png';
import './services.css';

export default function Serv() {
  return (
    <section id="section__Services" className="container">
      <div className="services-header">
        <h2 className="section__Title">Our Services</h2>
      </div>
      <div className="services-content">
        <div className="services-image-container">
          <img className='w-100' src={quytrinh5buoc} alt="Quy trình phục vụ" />
        </div>

        <div className="services-steps">
          <h2 className='section__Title my-5'>KỊCH BẢN TƯ VẤN KH: </h2>
          <ul>
            <li> <span>1. Chào và tiếp đón khách</span>
              <p data-aos="fade-up">Xin hỏi Anh/Chị đi mấy người, mình có đặt bàn trước chưa ạ?</p>
            </li>

            <li>  <span>2. Tư vấn thực đơn</span>
              <p data-aos="fade-up" data-aos-delay={1000}>Xin chào Anh/Chị em tên là…. Hôm nay em xin phép phục vụ bàn cho Anh/Chị</p>
              <p data-aos="fade-up" data-aos-delay={1000}>Bên em có 3 món khai vị có tính phí đậu phộng rang muối,đậu nành long,nấm mèo muối mời Anh/Chị dùng thử!</p>
              <p data-aos="fade-up" data-aos-delay={1000}>Hiện bên em sẽ có 2 dạng là SET MENU và ALC, Anh/Chị muốn chọn loại menu nào ạ?</p>
              <p data-aos="fade-up" data-aos-delay={1000}>Bên em đang có CTKM giảm 20% cho set menu ,nếu Anh/Chị muốn sử dụng thì em sẽ giới thiệu set menu phù hợp với mình. Bên em có món mời tôm nhảy phục vụ thêm cho mình.</p>
              <p data-aos="fade-up" data-aos-delay={1000}>Nếu trong quá trình dùng hết set menu nhưng A/C chưa cảm thấy no thì mình có thể gọi thêm 1 số món ALC như dimsum,… để dùng thêm ạ</p>
              <p data-aos="fade-up" data-aos-delay={1000}>Em xin phép làm nóng nồi trong vòng 2 phút, trong quá trình nồi hấp được làm nóng Anh/Chị hạn chế quơ tay qua lại hai lỗ hơi để tránh bỏng (lưu ý : trẻ em).</p>
              <p data-aos="fade-up" data-aos-delay={1000}>Bên trái là hộp đũa muỗng để Anh/Chị sử dụng và phía trên có nước chấm xì dầu ponzu dùng chung với củ cải trắng xay cùng ớt và hành lá</p>
              <p data-aos="fade-up" data-aos-delay={1000}>Hiện phía quầy line bên em có 4 loại nước mát,trái cây,bánh plan chỉ với 29k anh/Chị có thể dùng thoải mái, không biết Anh/Chị có muốn dùng luôn không ạ!</p>
              <p data-aos="fade-up" data-aos-delay={1000}>Em xin phép đọc lại món ăn mình order là…..., cảm ơn Anh/Chị</p>
            </li>

            <li><span>3. Phục vụ món ăn / thức uống</span>
              <p data-aos="fade-up" data-aos-delay={1000}>Mời Anh/Chị dùng món đậu phộng rang muối không tính phí mời Anh/Chị dùng ạ</p>
              <p data-aos="fade-up" data-aos-delay={1000}>Em xin phép hấp hải sản có vỏ trước ,vì thời gian hấp ngắn chỉ 4 phút ạ hoặc TH: Anh/Chị có món nào yêu thích để em hấp ưu tiên cho mình ạ</p>
              <p data-aos="fade-up" data-aos-delay={1000}>Dạ Anh/Chị muốn hấp nhiều món hay thưởng thức từng món theo nhu cầu của mình ạ</p>
              <p  className='attention'><span>Lưu ý nhân viên:</span> nếu như ốc bị hư ,không mở miệng,bể,… thì hư bao nhiêu con đổi lại KH bao nhiêu con.Kể cả cháo nếu bị ảnh hưởng sẽ đổi luôn nhé
                Đối với nhóm nấm lưu ý kiểm tra trước khi lấy đem ra cho KH, khi chưa chính có thể linh động hấp thêm 1-2 phút</p>
            </li>

            <li>
              <span>4. Chăm sóc khách hàng</span>
              <p data-aos="fade-up" data-aos-delay={1000}>Em xin phép lột tôm , cắt cua, loại bỏ đích ốc cho Anh/Chị ạ</p>
              <span>TH1: Nếu thời gian hấp chưa tới 40p</span>
              <p data-aos="fade-up" data-aos-delay={1000}>Hiện tại bên em đã phục vụ hết món , không biết Anh/Chị có muốn dùng thêm không ạ. Nếu không em xin phép hấp thêm …..phút để cháo chính ạ.</p>

              <span>TH2: Nếu thời gian hấp trên 40p -60p</span>
              <p data-aos="fade-up" data-aos-delay={1000}>Hiện tại cháo đã chính em xin phép phục vụ cháo cho cho mình nhé .Vì nếu cháo hấp lâu sẽ bị bở ra không ngon nữa ạ</p>

              <span>TH3: Khi hết món phục vụ</span>
              <p data-aos="fade-up" data-aos-delay={1000}>Hiện bàn mình đã phục vụ hết món ,không biết Anh/Chị có muốn sử dụng cháo không để em phục vụ ạ</p>
              <p  className='attention'><span>Lưu ý nhân viên:</span> nếu như có một số KH không dùng gia vị thì múc riêng chén cho khách</p>
            </li>

            <li>
              <span>5. Thanh toán và tiễn khách</span>
              <p data-aos="fade-up" data-aos-delay={1000}>Dạ cho em hỏi Anh/Chị có app thành viên ,voucher hay CTKM nào không ạ</p>
              <p data-aos="fade-up" data-aos-delay={1000}>Dạ mình dùng 1 set thanh xuân, …sử dụng 5 khăn, có line, tổng cộng số tiền là….
                Anh/Chị kiểm tra bill lại giúp em nhé</p>
              <p data-aos="fade-up" data-aos-delay={1000}>Nếu Anh/Chị có APP thì mình quét APP thành viên giúp em,có voucher thỉ trừ voucher sau đó bấm thanh toán đồng ý ,đánh giá trên app giúp em ạ              </p>
              <p data-aos="fade-up" data-aos-delay={1000}>Dạ đây là phần tips dành cho các bạn NV, mình có thể tips để tạo thêm động lực cho các bạn phục vụ mình trong bữa ăn ngày hôm nay. Nếu anh/chị không tips có thể ấn "BỎ QUA" ạ.
              </p>
              <span>TH1: KH không xuất HĐ</span>
              <p data-aos="fade-up" data-aos-delay={1000}>Bên em có tính thuế 10% anh/Chị có muốn xuất HĐ đỏ không nếu không xuất NH sẽ xuất hóa đơn khách lẻ và không xuất lại được cho Anh/Chị</p>
              <span>TH2: KH xuất HĐ</span>
              <p data-aos="fade-up" data-aos-delay={1000}>Bên em có tính thuế 10% Anh/Chị có muốn xuất HĐ đỏ không ,
                KH nói : Có
                Nv: Anh/Chị nhập mst,email,sđt giúp em nhé
                Anh/Chị thanh toán bằng hình thức nào ạ (Tiền mặt nv được cầm còn lại thì thanh toán tại bàn)

                </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
