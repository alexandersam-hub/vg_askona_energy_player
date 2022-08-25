import React,{useState} from 'react';
import s from './PhotoPage.module.css'
import backSvg from '../../../Static/resource/svg/back2.svg'
import QrReader from 'react-qr-scanner'
import Obj3dPhotoTask from './PhotoTasks/Obj3dPhotoTask/Obj3dPhotoTask';
import ImagePhotoTask from './PhotoTasks/ImagePhotoTask/ImagePhotoTask';
import Loader from '../../../Static/Loader/Loader';

const PhotoPage = ({setNavigation}) => {
    const [typeTask, setTypeTask] = useState('home')
    const [data, setData] = useState({})
    const [load, setLoad] = useState(false)
    const delay = 100
    const handleScan= (data)=>{
        if (data && data.text){
            const dataQr = JSON.parse(data.text)
            console.log(dataQr)
            if(dataQr.type){
                setTypeTask(dataQr.type)
                setData(dataQr)
            }
                
        }
    }
    const goBack = ()=>{
        setTypeTask('home')
    }

    const handleError = (err)=>{
        console.error(err)
    }
    const previewStyle = {
        width: '90%',
        maxWidth: '500px'
    }
    switch (typeTask){
        case 'home':
            return (
                <div className={s.wrapper}>
                    <div className={s.back} onClick={()=>setNavigation('home')}><img src={backSvg} alt="" /> <span>{'Назад'}</span></div>
                    <div>Наведите камеру на QR-код, найденный на локации</div>
                    {!load?<Loader/>:<></>}
                    <div className={s.wrapper_foto}>
                    <QrReader 
                        // className={s.qr_reader}
                        onLoad={()=>{setLoad(true)}}
                        delay={delay}
                        style={previewStyle}
                        onError={handleError}
                        onScan={handleScan}
                    />
                    </div>
                </div>
            );
        case 'qr':
            console.log('!!!!', '3d');
            return(
                <Obj3dPhotoTask goBack={goBack} data={data}/>
            )
        case 'img':
            console.log('!!!!', 'img');
            return(
                <ImagePhotoTask goBack={goBack} data={data}/>
            )
        default:
            setTypeTask('home')
            break    
    }
};

export default React.memo(PhotoPage);