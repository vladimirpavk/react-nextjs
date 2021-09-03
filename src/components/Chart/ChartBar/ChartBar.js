import React, {useState, useEffect} from 'react';

import './ChartBar.css';

const ChartBar = (props)=>{

    const [barHeight, setBarHeight] = useState(Math.round((props.value/props.maxValue)*100));

    useEffect(() => {
        setBarHeight(Math.round((props.value/props.maxValue)*100));
    }, [props.value, props.maxValue])

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className='chart-bar__fill' style={{height:barHeight ? barHeight : 0, backgroundColor: 'red'}}></div>
            </div>
            <div className="char-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar;