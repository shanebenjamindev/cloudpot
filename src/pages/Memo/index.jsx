import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function Memo() {
    return (
        <div style={{ width: '100%' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
                <Viewer fileUrl="/public/memo/MemoRestaurant.pdf" />
            </Worker>
        </div>
    );
}
