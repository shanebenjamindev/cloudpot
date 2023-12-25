import memoData from '/public/memo/memoData.json';
const MemoContent = () => {
    console.log(memoData[0]);
    const renderMemo = () => {
        return memoData?.[0]?.December?.map((memo) => (
            <MemoItem
                key={memo.id}
                title={memo.title}
                time={memo.time}
                discount={memo.discount}
                conditions={memo.conditions}
                includes={memo.includes}
            />
        ));
    };

    return (
        <div className='memo__Summary'>
            {renderMemo()}
        </div>
    );
};

const MemoItem = ({ title, time, discount, includes, conditions }) => {
    return (
        <div>
            <p className="section__Title">
                <strong>{title.toUpperCase()}</strong>
            </p>
            <p>
                {time ? <>
                    <strong>Thời gian:</strong> {time}
                </> : null
                }
            </p>
            <p>
                {discount ? <>
                    <strong>Giảm giá:</strong> {discount}.000 VND
                </> : null
                }
            </p>
            {includes ? <p> <strong>Bao gồm các set:</strong> {includes} </p> : null}
            <p className="text-danger">
                {conditions ? <>
                    <strong>Điều kiện:</strong> {conditions}
                </> : null
                }
            </p>
        </div>
    );
};
export default MemoContent;