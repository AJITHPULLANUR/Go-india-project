import React from 'react'
import capri from './IMG-20230630-WA0008.jpg';
import ganesh from './IMG-20230630-WA0001.jpg';
import fino from './IMG-20230630-WA0002.jpg';
import gravita from './IMG-20230630-WA0004.jpg';
import hira from './IMG-20230630-WA0003.jpg';
import data from './IMG-20230630-WA0006.jpg';
import deep from './IMG-20230630-WA0007.jpg';
import Secondbody from '../../Secondbody/Secondbody';








const Firstbody = () => {
  return (
    <div>
        <div className='firstbodyfull'>
            <div className='textbody'>
                <span className='featuretag'>FEATURED COMPANIES</span>

            </div>
            <div className='photobody'>
                <img className='bodyphotos' src={capri} alt="" />
                <img className='bodyphotos' src={ganesh} alt="" />
                <img className='bodyphotos' src={fino} alt="" />
                <img className='bodyphotos' src={gravita} alt="" />
                <img className='bodyphotos' src={hira} alt="" />
                <img className='bodyphotos' src={data} alt="" />
                <img className='bodyphotos' src={deep} alt="" />
                <img className='bodyphotos' src={capri} alt="" />
                <img className='bodyphotos' src={ganesh} alt="" />
                <img className='bodyphotos' src={fino} alt="" />
            </div>




        </div>
        <Secondbody/>
    </div>
  )
}

export default Firstbody