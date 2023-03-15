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
                <div className="timer-count-div">
                    <section className='timer-count'>
                        <p>{timerDays}</p>
                    </section>
                    <small className='text-small'>DAYS</small>
                </div>

                <div className="timer-count-div">
                    <section className='timer-count'>
                        <p>{timerHours}</p>
                    </section>
                    <small className='text-small'>HOURS</small>
                </div>

                <div className="timer-count-div">
                    <section className='timer-count'>
                        <p>{timerMinutes}</p>
                    </section>
                    <small className='text-small'>MINUTES</small>
                </div>

                <div className="timer-count-div">
                    <section className='timer-count'>
                        <p>{timerSeconds}</p>
                    </section>
                    <small className='text-small'>SECONDS</small>
                </div>

            </div>
        </section>
        {/* <img id="imgs" src={require('../Assets/timer.png')} alt="..." /> */}
    </Fragment>
};

Clock.defaultProps = {
    timerDays: 0,
    timerHours: 0,
    timerMinutes: 0,
    timerSeconds: 0,
}

export default Clock


