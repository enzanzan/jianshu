import React, { PureComponent } from 'react';
import { Download_App } from '../style';

class Writer extends PureComponent {
    render() {
        return (
            <Download_App>
                <img className='pic' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-bef8a3919bdba9e8d965956b37291e98.png'></img>
            </Download_App>
        )
    }
}
export default Writer;