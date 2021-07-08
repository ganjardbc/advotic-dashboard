import React, { Component } from 'react'

class App extends Component {

    constructor () {
        super()
        this.state = {}
    }
  
    render () {
        const {data} = this.props
        return (
            <div>
                {data && data.map((dt, i) => {
                    return (
                        <div key={i} className="display-flex padding-15px border-all card-list-hover" style={{borderRadius: 5, marginBottom: (i !== (data.length - 1)) ? 10 : 0}}>
                            <div style={{width: 70, marginRight: 10}}>
                                <div className="image image-full background-main" style={{backgroundImage: 'url(' + dt.cover + ')', borderRadius: 5}}></div>
                            </div>
                            <div style={{width: 'calc(100% - 80px)', paddingTop: 10, paddingBottom: 10}}>
                                <div className="txt-site txt-12 txt-main txt-bold" style={{marginBottom: 10}}>{ dt.title }</div>
                                <div className="display-flex space-between">
                                    <div className="txt-site txt-10 txt-primary">{ dt.price }</div>
                                    <div className="txt-site txt-10 txt-primary">{ dt.qty }</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default App 