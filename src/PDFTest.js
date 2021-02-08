import React from 'react';
import ReactToPdf from 'react-to-pdf';
const ref = React.createRef();


export class PDFDocument extends React.Component {
    render() {
        return(
            <div>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                    {({toPdf}) => (
                        <button onClick={toPdf}>Generate pdf</button>
                    )}
                </ReactToPdf>
                <div ref={ref}>
                    <div>Hello This is converted to pdf....</div>
                    <div>Test</div>
                    <button className="btn btn-primary">Click...</button>
                </div>
            </div>
        )
    }
}