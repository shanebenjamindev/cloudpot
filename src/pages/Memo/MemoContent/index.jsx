
const MemoContent = () => {
    return (
        <div className='memo__Summary'>
            <MemoItem
                title="NỘI DUNG 1: GIẢM 20% SET MENU CHO KHÁCH ĐẶT BÀN TRƯỚC"
                time="Từ 29/11/2023 đến 29/02/2024."
                discount="20% cho khách đặt bàn trước."
                includes="Set Năng Lượng, Set Thanh Xuân, Set Tươi Tắn, Set Thanh Tao, Set Mây Lang Thang, Set Mây Xanh, Set Rì Rào, Set 1."
                conditions="Đặt bàn trước, ăn tại nhà hàng, không áp dụng cùng các chương trình khác, không dành cho mang về, không áp dụng với thẻ nhân viên/đối tác."
            />
            <hr className="" style={{ border: "1px solid var(--secondary-color)" }} />

            <MemoItem
                title="NỘI DUNG 2: CHECK-IN MIỄN PHÍ SỬ DỤNG QUẦY BUFFET LINE"
                time="Từ 29/11/2023 đến 29/02/2024."
                discount="Miễn phí sử dụng quầy buffet cho khách hàng check-in."
                conditions="Check-in, không áp dụng cùng các chương trình khác, không mang về."
            />
            <hr className="" style={{ border: "1px solid var(--secondary-color)" }} />

            <MemoItem
                title="NỘI DUNG 3: PHÁT HÀNH THẺ LÀM QUEN 100.000Đ"
                time="Từ 29/11/2023 đến 29/02/2024."
                discount="Phát hành thẻ trị giá 100,000 VND cho hóa đơn từ 500,000 VND trở lên."
                conditions="Áp dụng cho hóa đơn từ 500,000 VND trở lên, một thẻ cho mỗi hóa đơn, không áp dụng cùng các chương trình khác."
            />
            <hr className="" style={{ border: "1px solid var(--secondary-color)" }} />

            <MemoItem
                title="NỘI DUNG 4: TẶNG 01 PHẦN TÔM BỒNG LAI CHO NHÓM 03 KHÁCH NGƯỜI LỚN"
                time="Từ 29/11/2023 đến 29/02/2024."
                discount=" Tặng Tôm Bồng Lai miễn phí cho nhóm từ 3 người trở lên"
                conditions="Nhóm từ 3 người trở lên, ăn tại nhà hàng, không áp dụng cùng các chương trình khác, không mang về."
            />
            <hr className="" style={{ border: "1px solid var(--secondary-color)" }} />

            <MemoItem
                title="NỘI DUNG 5: QUÀ LÀM QUEN TẶNG HỘP NẾN THƠM/XÀ PHÒNG HOẶC BÓ HOA RAU CỦ"
                time="Từ 29/11/2023 đến 29/02/2024."
                discount="Tặng nến thơm/xà phòng hoặc bó hoa rau củ cho 200 hóa đơn thanh toán bằng thẻ Golden Spoons."
                conditions="Áp dụng cho 200 hóa đơn đầu tiên, có thể áp dụng cùng các chương trình khác."
            />
            <hr className="" style={{ border: "1px solid var(--secondary-color)" }} />

            <MemoItem
                title="NỘI DUNG 6: PPHÁT HÀNH 80 E-VOUCHER CÓ GIÁ TRỊ MIỄN PHÍ 01 SET MENU (KOLS & KHÁCH HÀNG VIP)"
                time="Từ 29/11/2023 đến 29/02/2024."
                discount="Phát hành 80 e-voucher cho KOLs và khách hàng VIP từ đối tác 82X."
                conditions="Có thể áp dụng cùng các chương trình khác, có thể sử dụng vào các ngày lễ."
            />
            <hr className="" style={{ border: "1px solid var(--secondary-color)" }} />

            <MemoItem
                title="NỘI DUNG 7: GIẢM GIÁ CHO NHÂN VIÊN GOLDEN GATE"
                time="Từ 29/11/2023 đến 29/02/2024."
                discount="  Giảm giá 50% trong tuần đầu, giảm giá 30% sau đó cho nhân viên Golden Gate."
                conditions="Yêu cầu có thẻ nhân viên, không áp dụng cùng các chương trình khác."
            />

        </div>
    );
};

// Memo content items
const MemoItem = ({ title, time, discount, includes, conditions }) => {
    return (
        <div>
            <p className="section__Title">
                <strong>{title}</strong>
            </p>
            <p>
                <strong>Thời gian:</strong> {time}
            </p>
            <p>
                <strong>Giảm giá:</strong> {discount}
            </p>
            {includes ? <p> <strong>Bao gồm các set:</strong> {includes} </p> : null}
            <p className="text-danger">
                <strong>Điều kiện:</strong> {conditions}
            </p>
        </div>
    );
};
export default MemoContent;