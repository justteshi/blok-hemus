import { useEffect, useRef, useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function FirstPost() {
    const viewer = useRef(null);

    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: '/lib',
            initialDoc: '/files/pdf.pdf',
            isReadOnly: true
          },
          viewer.current,
        ).then((instance) => {
            const { docViewer } = instance;
            // you can now call WebViewer APIs here...
          });
      })
    }, []);


    return (
      <div className="MyComponent">
        <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
      </div>
    );

}
