import React, { Fragment } from 'react';
import "./Clock.css";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return <Fragment>
        {/* <div className='date'>
            <h3 className='text'>MARK THE DATE</h3>
            <br />
            <p className='jagriti'>Jagriti will go live on 7 April 2023.</p>
        </div> */}
        <section className="timer">
            <div className="clock">
                <div className="days">
                    <section id='days'>
                        <p>{timerDays}</p>
                    </section>
                    <small className='text-btn'>DAYS</small>
                </div>

                <div className="hours">
                    <section id='hours'>
                        <p>{timerHours}</p>
                    </section>
                    <small className='text-btn'>HOURS</small>
                </div>

                <div className="minutes">
                    <section id='minutes'>
                        <p>{timerMinutes}</p>
                    </section>
                    <small className='text-btn'>MINUTES</small>
                </div>

                <div className="seconds">
                    <section id='seconds'>
                        <p>{timerSeconds}</p>
                    </section>
                    <small className='text-btn'>SECONDS</small>
                </div>

            </div>
        </section>
        {/* <img id="imgs" src={require('../Assets/timer.png')} alt="..." /> */}
    </Fragment>
};

Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
}

export default Clock


