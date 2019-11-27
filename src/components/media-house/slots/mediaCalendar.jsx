import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Calendar,momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

class MediaCalendar extends Component {
    state = { 
        slots:[],
        events:[
            {
                start: '2015-07-20',
                end: '2015-07-02',
                eventClasses: 'optionalEvent',
                title: 'test event',
                description: 'This is a test description of an event',
            },
            {
                start: '2015-07-19',
                end: '2015-07-25',
                title: 'test event',
                description: 'This is a test description of an event',
                data: 'you can add what ever random data you may want to use later',
            },
        ]
     }

    async componentDidMount() {
        //onEventClick={(target, eventData, day) => console.log(eventData) }
    }

    render() { 
        return ( 
            <React.Fragment>
                <ToastContainer />
                <div className="slot-hero">

                </div>
                <div className="slots">
                <div className="container mt-150">
                        <h3 className="section-title">Media Calendar</h3>
                            <div className="row">
                            <Calendar
                                localizer={localizer}
                                events={[]}
                                startAccessor="start"
                                endAccessor="end"
                                defaultDate={moment().toDate()}
                                />
                            </div>
                        </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default MediaCalendar;