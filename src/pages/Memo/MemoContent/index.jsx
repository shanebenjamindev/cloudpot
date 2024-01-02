import memoData from '/public/memo/memoData.json';

const MemoItem = ({ title, time, discount, includes, conditions }) => {
    return (
        <div>
            <p className="section__SubTitle">
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

const MemoContent = () => {
    const getFirstMonthMemos = () => {
        const firstMonthData = memoData?.months[0];
        const firstMonth = Object.keys(firstMonthData)[0];
        return firstMonthData[firstMonth];
    };

    const getOldMonthMemos = () => {
        const oldMonthData = memoData?.months.slice(1);
        const oldMonthMemos = oldMonthData?.flatMap(month => Object.values(month)[0]) || [];
        return oldMonthMemos;
    };

    const firstMonthMemos = getFirstMonthMemos();
    const oldMonthMemos = getOldMonthMemos();

    return (
        <div className='memo__Summary'>
            <div>
                <h1 className='section__SubTitle'>
                    Newest Memo
                </h1>
                <hr className="w-100" style={{ border: "1px solid var(--secondary-color)" }} />

                {firstMonthMemos.map(memo => (
                    <MemoItem
                        key={memo.id}
                        title={memo.title}
                        time={memo.time}
                        discount={memo.discount}
                        conditions={memo.conditions}
                        includes={memo.includes}
                    />
                ))}


            </div>
            <div>
                <h1 className='section__SubTitle'>
                    Old Memos
                </h1>
                <hr className="w-100" style={{ border: "1px solid var(--secondary-color)" }} />

                {oldMonthMemos.map(memo => (
                    <MemoItem
                        key={memo.id}
                        title={memo.title}
                        time={memo.time}
                        discount={memo.discount}
                        conditions={memo.conditions}
                        includes={memo.includes}
                    />
                ))}
            </div>
        </div>

    );
};

export default MemoContent;

