import React, {useEffect, useState} from 'react';
import s from './YMapPage.module.css'
import useGeolocation from 'react-hook-geolocation'

// index={props.index} changeTask={props.changeTask}
const YMapPage = (props) => {
    const event = new Event('start');
    const [myMapX, setMyMap] = useState(null)
    const [playMark, setPlayMark] = useState(null)
    const geolocation = useGeolocation({
        enableHighAccuracy : true ,
        maxAge :  15000 ,
        timeout : 12000
    })
    if(myMapX && geolocation.latitude && geolocation.longitude){

        document.dispatchEvent(event);
        if(!playMark){
            console.log('playMark',playMark)
            const mark = new window.ymaps.Placemark([geolocation.latitude, geolocation.longitude] ,{},{
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            })
            myMapX.geoObjects.add(mark)
            setPlayMark(mark)
        }else{
            playMark.geometry.setCoordinates([geolocation.latitude, geolocation.longitude]);
        }
        // myMapX.setCenter([geolocation.latitude, geolocation.longitude]);
    }
    // console.log(props.changeTask)
    const loadScript = (src, onLoad) => {
        const script = document.createElement("script");

        script.src = src;
        script.async = true;
        document.body.appendChild(script);
        script.onload = onLoad;
    };

    const points = [{
        coordinates:[54.19010,37.58130],
        text:'Первое испытание',
        preset:'islands#blueStretchyIcon'
    },
    {
        coordinates:[54.19012,37.58131],
        text:'Второе испытание',
        preset:'islands#redStretchyIcon'
    },
    {
        coordinates:[54.19012,37.58130],
        text:'Третье испытание',
        preset:'islands#greenStretchyIcon'
    },
    {
        coordinates:[54.191,37.58128],
        text:'Четвертое испытание',
        preset:'islands#violetStretchyIcon'
    },
    {
        coordinates:[54.1895,37.58139],
        text:'Пятое испытание',
        preset:'islands#orangeStretchyIcon'
    },
    {
        coordinates:[54.1890,37.58130],
        text:'Шестое испытание',
        preset:'islands#yellowStretchyIcon'
    },
    {
        coordinates:[54.1885,37.58130],
        text:'Седьмое испытание',
        preset:'islands#pinkStretchyIcon'
    },
    {
        coordinates:[54.1880,37.58130],
        text:'Восьмое испытание',
        preset:'islands#blackStretchyIcon'
    },
    {
        coordinates:[54.1875,37.58130],
        text:'Девятое испытание',
        preset:'islands#darkOrangeStretchyIcon'
    },
    {
        coordinates:[54.1870,37.58130],
        text:'Десятое испытание',
        preset:'islands#brownStretchyIcon'
    },
    {
        coordinates:[54.1865,37.58130],
        text:'Одиннадцатое испытание',
        preset:'islands#grayStretchyIcon'
    },
    {
        coordinates:[54.1860,37.58130],
        text:'Двенадцатое испытание',
        preset:'islands#darkGreenStretchyIcon'
    },
    {
        coordinates:[54.19010,37.582],
        text:'Тринадцатое испытание',
        preset:'islands#darkBlueStretchyIcon'
    },
    {
        coordinates:[54.19010,37.583],
        text:'Четырнадцатое испытание',
        preset:'islands#nightStretchyIcon'
    },

]


    const init = () => {

        let myPlacemark

        const  myMap = new window.ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [54.19063,37.58138],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 18,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        })

        //-------------------------------------------------------
        points.forEach(point=>{
            const firstPlacemark = new window.ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: point.coordinates
                },
                // Свойства.
                properties: {
                    // Контент метки.
                    iconContent: point.text,
                }
            },{ preset: point.preset,}
            
        );
    myMap.geoObjects.add(firstPlacemark);
        })
      
        //---------------------------------------------------------
        
        setMyMap(myMap)
        // myMap.behaviors.disable('scrollZoom'); // — это отключает зум колёсиком мышки, всё ок.
        // myMap.behaviors.disable('multiTouch'); // — это отключает зум щипком, не очень нужно.
        // myMap.behaviors.disable('drag');
        console.log(myMap.behaviors)
        // document.addEventListener('start', function (e) {
        //     console.log('start', props.geo[0],props.geo[1], props)
        //     if (myMapX)
        //         myMapX.setCenter([props.geo[0],props.geo[1]]);
        //     else
        //         myMap.setCenter([props.geo[0],props.geo[1]]);
        //     if (playMark) {
        //         playMark.geometry.setCoordinates([props.geo[0],props.geo[1]]);
        //     }
        //     // Если нет – создаем.
        //     else {
        //         const myPlacemark = createPlacemark([props.geo[0],props.geo[1]]);
        //         myMapX.geoObjects.add(myPlacemark);
        //         // Слушаем событие окончания перетаскивания на метке.
        //         setPlayMark(myPlacemark)
        //     }
        //
        // });

        // Создание метки.
        function createPlacemark(coords) {
            return new  window.ymaps.Placemark(coords, {
                iconCaption: 'поиск...'
            }, {
                preset: 'islands#violetDotIconWithCaption',
                draggable: true
            });
        }

        function getAddress(coords) {
            myPlacemark.properties.set('iconCaption', 'поиск...');
            window.ymaps.geocode(coords).then(function (res) {
                var firstGeoObject = res.geoObjects.get(0);

                myPlacemark.properties
                    .set({
                        // Формируем строку с данными об объекте.
                        iconCaption: [
                            // Название населенного пункта или вышестоящее административно-территориальное образование.
                            firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                            // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                            firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                        ].filter(Boolean).join(', '),
                        // В качестве контента балуна задаем строку с адресом объекта.
                        balloonContent: firstGeoObject.getAddressLine()
                    });
            });
        }

    };
    React.useEffect(() => {

            loadScript("https://api-maps.yandex.ru/2.1/?apikey=061756e0-61d1-4e4e-8bc0-1a0725db72f4&lang=ru_RU", () => {
                    window.ymaps.ready(init);
            });


    }, []);

    return (
        <div className={s.wrapper}>
            <div id="map" style={{ width: '90%', height: '500px', margin:'0 auto' }} />
        </div>
    );
};

export default YMapPage;