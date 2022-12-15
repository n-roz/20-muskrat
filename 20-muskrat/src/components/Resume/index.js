import React from 'react';

const Resume = () => {

    const onButtonClick = () => {
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <center>
                <h1 className='resume'>Resume</h1>
                <h3>Click on below button to download as PDF</h3>
                <button onClick={onButtonClick}>
                    Download 
                </button>
            </center>
        </>
    );

}
export default Resume;
