import React, { useEffect, useRef } from 'react';

const TokenomicsChart = () => {
    return (
        <div className="chart-container animate__animated animate__fadeInLeft">
            <h2 className="chart-title">$NICE Token Distribution</h2>
            <div class="row d-flex justify-content-center">
                <div class="d-flex justify-content-center"><img class="chart-image" src="/images/chart.png"></img></div>
            </div>
        </div>
    );
};

export default TokenomicsChart;
