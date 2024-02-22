import lsvtree from '../../../../public/images/restaurant/lsvtree.jpg'
import lvs from '../../../../public/images/restaurant/lvs.jpg'
import lvsroom from '../../../../public/images/restaurant/lvsroom.jpg'
import tcd from '../../../../public/images/restaurant/tcd.jpg'
import './style.css'
export default function StoreSection() {
    return (
        <>
            <div className='row'>
                <h4 className='section__Title '>Địa chỉ 1: 300 Đ. Lê Văn Sỹ, Phường 1, Tân Bình, Thành phố Hồ Chí Minh 70000</h4>
                <hr className="w-100" style={{ border: "1px solid var(--secondary-color)" }} />

                <img className='col-md-6' src={lvs} height={"auto"} />

                <div className='col-md-6'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.401983073417!2d106.64799074878408!3d10.795912696378712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298f95d0a111%3A0xc8326a287d0f885b!2zQ0xPVUQgUE9UIEzDqiBWxINuIFPhu7k!5e0!3m2!1svi!2s!4v1708634851257!5m2!1svi!2s"
                        height={500}
                        width={"100%"}
                        frameBorder={0}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" title='intro__Video'
                    />
                    <div className='d-md-flex'>
                        <img src={lsvtree} className='col-md-6' height={""} />
                        <img src={lvsroom} height={""} className='col-md-6' />
                    </div>
                </div>
            </div>

            <div className='row my-4'>
                <h4 className='section__Title '>Địa chỉ 2: 45 Trương Công Định, Phường 14, Tân Bình, Thành phố Hồ Chí Minh
                </h4>
                <hr className="w-100" style={{ border: "1px solid var(--secondary-color)" }} />
                <div className='col-md-8'>
                    <iframe className=''
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.401983073417!2d106.64799074878408!3d10.795912696378712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175291a39a74525%3A0xf55ae9041b3811f3!2zQ0xPVUQgUE9UIFRyxrDGoW5nIEPDtG5nIMSQ4buLbmg!5e0!3m2!1svi!2s!4v1708634756286!5m2!1svi!2s"
                        height={"50%"}
                        width={"100%"}
                        frameBorder={0}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" title='intro__Video'
                    />
                    <img src={tcd} height={"50%"} width={"100%"}/>

                </div>
                <div className='col-md-4 bg-success'>
                        <video height="100%" muted autoPlay controls playsInline>
                            <source type='video/mp4' src='/videos/review.mp4' />
                        </video>
                </div>


            </div>
        </>
    )
}
