import lsvtree from "/images/restaurant/lsvtree.jpg";
import lvs from "/images/restaurant/lvs.jpg";
import lvsroom from "/images/restaurant/lvsroom.jpg";
import "./style.css";
export default function StoreSection() {
  return (
    <div>
      <div className="row">
        <h4 className="section__Title ">
          Địa chỉ 1: 300 Đ. Lê Văn Sỹ, Phường 1, Tân Bình, Thành phố Hồ Chí Minh
          70000
        </h4>
        <hr
          className="w-100"
          style={{ border: "1px solid var(--secondary-color)" }}
        />

        <img
          className="col-md-7"
          src={lvs}
          height={"auto"}
          data-aos="fade-right"
          data-aos-delay={500}
        />

        <div className="col-md-5" data-aos="fade-left" data-aos-delay={500}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.401983073417!2d106.64799074878408!3d10.795912696378712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298f95d0a111%3A0xc8326a287d0f885b!2zQ0xPVUQgUE9UIEzDqiBWxINuIFPhu7k!5e0!3m2!1svi!2s!4v1708634851257!5m2!1svi!2s"
            height={500}
            width={"100%"}
            frameBorder={0}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="intro__Video"
          />
          <div className="d-md-flex" data-aos="fade-up" data-aos-delay={1000}>
            <img src={lsvtree} className="col-md-6" height={""} />
            <img src={lvsroom} height={""} className="col-md-6" />
          </div>
        </div>
      </div>

      <div className="row p-5 justify-content-center">
        <h4 className="section__Title ">
          Địa chỉ 2: 45 Trương Công Định, Phường 14, Tân Bình, Thành phố Hồ Chí
          Minh
        </h4>
        <hr
          className="w-100"
          style={{ border: "1px solid var(--secondary-color)" }}
        />
        <div className="d-md-flex">
          <div className="col-md-6" data-aos="fade-right" data-aos-delay={500}>
            <iframe
              className="p-2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.401983073417!2d106.64799074878408!3d10.795912696378712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175291a39a74525%3A0xf55ae9041b3811f3!2zQ0xPVUQgUE9UIFRyxrDGoW5nIEPDtG5nIMSQ4buLbmg!5e0!3m2!1svi!2s!4v1708634756286!5m2!1svi!2s"
              width={"100%"}
              height={"100%"}
              frameBorder={0}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="intro__Video"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left" data-aos-delay={500}>
            <video
              height={"100%"}
              width={"100%"}
              className=""
              muted
              autoPlay
              controls
              playsInline
            >
              <source type="video/mp4" src="/videos/review.mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="pb-5">
        <div>
          <h4 className="section__Title">Địa chỉ Khác:</h4>
          <hr
            className="w-100"
            style={{ border: "1px solid var(--secondary-color)" }}
          />
        </div>

        <div className="d-md-flex address__List">
          <div data-aos="fade-left" data-aos-delay={1200}>
            <img width={"100%"} src="/images/restaurant/adresshcm.jpg" />
          </div>
          <div data-aos="fade-left" data-aos-delay={1500}>
            <img width={"100%"} src="/images/restaurant/adressbinhduong.jpg" />
          </div>
          <div data-aos="fade-left" data-aos-delay={1800}>
            <img width={"100%"} src="/images/restaurant/adressdalat.jpg" />
          </div>
          <div data-aos="fade-left" data-aos-delay={2000}>
            <img width={"100%"} src="/images/restaurant/adresscantho.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
