import React, { Component } from 'react'
import { DateRangePicker } from 'react-date-range'
import moment from 'moment'

class App extends Component {
    constructor (props) {
        super(props)
        var days = 7
        var date = new Date()
        var res = date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        var endDate = new Date(res)
        this.state = {
            placeDateRange: false,
            dateRangePicker: {
                selection: {
                    startDate: new Date(),
                    endDate: endDate,
                    startDateLocal: moment(new Date()).format('dddd, DD MMMM YYYY'),
                    endDateLocal: moment(endDate).format('dddd, DD MMMM YYYY'),
                    key: 'selection',
                    color: '#2ecc71'
                },
                compare: {
                    startDate: new Date(),
                    endDate: endDate,
                    startDateLocal: moment(new Date()).format('dddd, DD MMMM YYYY'),
                    endDateLocal: moment(endDate).format('dddd, DD MMMM YYYY'),
                    key: 'compare'
                },
            }
        }
    }

    handleClickOutside(element) {
        const outsideclickListener = event => {
            if (!element.contains(event.target)) {
                // element.style.display = 'none'
                this.setState({placeDateRange: false})
                removeClickListener()
            }
        }
    
        const removeClickListener = () => {
            document.removeEventListener('click', outsideclickListener)
        }
    
        document.addEventListener('click', outsideclickListener)
    }

    opPlaceDateRange = () => {
        var element = document.getElementById('app-calendar-picker')
        // element.style.display = 'block'
        this.handleClickOutside(element)
        this.setState({placeDateRange: true})
    }

    clPlaceDateRange = () => {
        // var element = document.getElementById('app-calendar-picker')
        // element.style.display = 'none'
        this.setState({placeDateRange: false})
    }

    handleRangeChange = (which, payload) => {
        // const start = moment(payload.selection.startDate).format('dddd, DD MMMM YYYY')
        // const end = moment(payload.selection.endDate).format('dddd, DD MMMM YYYY')
        this.setState({
            [which]: {
                ...this.state[which],
                ...payload,
                selection: {
                    ...payload.selection,
                    // startDateLocal: start,
                    // endDateLocal: end 
                },
                compare: {
                    ...payload.compare,
                    // startDateLocal: start,
                    // endDateLocal: end 
                }
            }
        })
    }

    handleRangeSave = () => {
        const payload = this.state.dateRangePicker
        const start = moment(payload.selection.startDate).format('dddd, DD MMMM YYYY')
        const end = moment(payload.selection.endDate).format('dddd, DD MMMM YYYY')
        this.setState({
            placeDateRange: false,
            dateRangePicker: {
                ...this.state.dateRangePicker,
                selection: {
                    ...this.state.dateRangePicker.selection,
                    startDateLocal: start,
                    endDateLocal: end 
                },
                compare: {
                    ...this.state.dateRangePicker.compare,
                    startDateLocal: start,
                    endDateLocal: end 
                }
            }
        })
    }

    render () {
        const {placeDateRange} = this.state
        return (
            <div className="card-date-picker" id="app-calendar-picker">

                <div className="double">
                    <div className="display-flex align-center border-right" style={{paddingLeft: 10, paddingRight: 10}}>
                        <i className="txt-site txt-11 txt-primary fa fa-lg fa-calendar-alt" style={{marginRight: 10}} />
                        <div className="txt-site txt-11 txt-primary">Period</div>
                    </div>
                    <input
                        type="text"
                        className="input"
                        readOnly
                        value={ this.state.dateRangePicker.selection.startDateLocal }
                    />
                    <input
                        type="text"
                        className="input border-left"
                        readOnly
                        value={ this.state.dateRangePicker.selection.endDateLocal }
                    />
                    <button 
                        type="button" 
                        className="btn btn-grey border-left btn-no-radius" 
                        onClick={this.opPlaceDateRange}>
                        <i className={placeDateRange ? "fa fa-lg fa-chevron-up" : "fa fa-lg fa-chevron-down"} style={{marginTop: 5}} />
                    </button>
                </div>

                {placeDateRange && (
                    <div className="content" style={{right: 0}}>
                        <div className="padding-5px display-flex space-between align-center">
                            <div className="txt-site txt-main txt-12 txt-bold">Period</div>
                            <div className="display-flex">
                                <button 
                                    type="button" 
                                    className="btn btn-grey btn-circle" 
                                    onClick={this.clPlaceDateRange}>
                                    <i className="fa fa-lg fa-times" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <DateRangePicker
                                // onChange={() => this.handleRangeChange('dateRangePicker')}
                                onChange={this.handleRangeChange.bind(this, 'dateRangePicker')}
                                ranges={[this.state.dateRangePicker.selection]}
                                months={2}
                                direction="horizontal"
                                showSelectionPreview={true}
                                moveRangeOnFirstSelection={false}
                            />
                        </div>
                        <div className="padding-15px content-right">
                            <button className="btn btn-primary" style={{marginRight: 5}} onClick={() => this.clPlaceDateRange()}>
                                Cancel 
                            </button>
                            <button className="btn btn-main" onClick={() => this.handleRangeSave()}>
                                Save
                            </button>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}

export default App 