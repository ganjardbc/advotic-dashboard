import React, { Component } from 'react'
import SalesTurnover from '../assets/img/sales-turnover.png'
import SimpleBarchart from './SimpleBarchart'
import CardProduct from './CardProduct'
import DateRange from '../modules/DateRange'

class App extends Component {

    constructor () {
        super()
        this.state = {
            visibleList: true,
            selling: [
                {cover: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/plant-based/silk/silk-range-cream-coconut-cashew-almond.jpg', title: 'Danone', price: 'Rp. 45.000,00', qty: '34'},
                {cover: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/plant-based/silk/silk-range-cream-coconut-cashew-almond.jpg', title: 'Danone', price: 'Rp. 45.000,00', qty: '34'},
                {cover: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/plant-based/silk/silk-range-cream-coconut-cashew-almond.jpg', title: 'Danone', price: 'Rp. 45.000,00', qty: '34'},
                {cover: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/plant-based/silk/silk-range-cream-coconut-cashew-almond.jpg', title: 'Danone', price: 'Rp. 45.000,00', qty: '34'},
                {cover: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/plant-based/silk/silk-range-cream-coconut-cashew-almond.jpg', title: 'Danone', price: 'Rp. 45.000,00', qty: '34'}
            ]
        }
    }
  
    render () {
        const {selling, visibleList} = this.state
        return (
            <div>
                <div className="display-flex space-between align-center" style={{marginBottom: 15}}>
                    <div className="txt-site txt-18 txt-main txt-bold">
                        DASHBOARD 
                    </div>
                    <div className="content-right">
                        <div style={{width: '600px'}}>
                            <DateRange />
                        </div>
                    </div>
                </div>

                <div className="background-main" style={{padding: '10px 15px', borderRadius: 5, marginBottom: 15}}>
                    <div className="display-flex space-between">
                        <div>
                            <div className="post-top txt-site txt-14 txt-white txt-bold">
                                MARKETING INSIGHTS
                            </div>
                        </div>
                        <div className="display-flex right align-center" style={{marginRight: 10}}>
                            <button className="btn btn-circle btn-main" style={{width: 30, borderRadius: 0}}>
                                <i className="fa fa-lg fa-lightbulb" />
                            </button>
                            <button className="btn btn-main">
                                <span className="txt-site txt-underline">Click Here For Help</span>
                            </button>
                            <button className="btn btn-circle btn-main" style={{width: 30, borderRadius: 0}} onClick={() => this.setState({visibleList: !this.state.visibleList})}>
                                <i className={visibleList ? "fa fa-lg fa-chevron-up" : "fa fa-lg fa-chevron-down"} />
                            </button>
                        </div>
                    </div>
                </div>

                {visibleList && (
                    <div style={{width: '100%'}}>
                        <div className="display-flex" style={{marginBottom: 15}}>
                            <div className="card no-hover no-margin no-radius border-all" style={{width: 350}}>
                                <div className="padding-15px">
                                    <div className="display-flex space-between align-center" style={{marginBottom: 5}}>
                                        <div className="txt-site txt-11 txt-primary">Sales Turnover</div>
                                        <button className="btn btn-small-circle btn-grey">
                                            <i className="fa fa-lw fa-ellipsis-v" />
                                        </button>
                                    </div>
                                    <div className="display-flex">
                                        <div style={{width: 'calc(100% - 60px)'}}>
                                            <div className="txt-site txt-18 txt-main txt-bold" style={{marginTop: 2}}>Rp 3,600,000</div>
                                            <div style={{marginTop: 5}}>
                                                <i className="txt-site txt-red txt-8 fa fa-lw fa-arrow-down" style={{marginRight: 3}} />
                                                <span className="txt-site txt-11 txt-red txt-bold" style={{marginRight: 3}}>13.8%</span>
                                                <span className="txt-site txt-10 txt-primary">last period in products sold</span>
                                            </div>
                                        </div>
                                        <div style={{width: 60}}>
                                            <div className="image image-full">
                                                <img className="img" src={SalesTurnover} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="display-flex">
                            <div style={{width: 'calc(50% - 7px)', marginRight: 7}}>
                                <div className="card no-hover no-margin no-radius border-all">
                                    <div className="display-flex space-between align-center padding-15px" style={{paddingTop: 10, paddingBottom: 10}}>
                                        <div className="txt-site txt-11 txt-primary">AVERAGE PURCHASE VALUE</div>
                                        <div>
                                            <button className="btn btn-small btn-sekunder">
                                                Las 6 months <i className="icn icn-right fa fa-lw fa-chevron-down" />
                                            </button>
                                            <button className="btn btn-small-circle btn-grey" style={{marginLeft: 5}}>
                                                <i className="fa fa-lw fa-ellipsis-v" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="padding-15px" style={{height: 450}}>
                                        <SimpleBarchart />
                                    </div>
                                </div>
                            </div>
                            <div style={{width: 'calc(50% - 7px)', marginLeft: 7}}>
                                <div className="display-flex">
                                    <div style={{width: 'calc(50% - 7px)', marginRight: 7}}>
                                        <div className="card no-hover no-margin no-radius border-all">
                                            <div className="display-flex space-between align-center padding-15px" style={{paddingTop: 10, paddingBottom: 10}}>
                                                <div className="txt-site txt-11 txt-primary">BEST SELLING SKU</div>
                                                <button className="btn btn-small-circle btn-grey">
                                                    <i className="fa fa-lw fa-ellipsis-v" />
                                                </button>
                                            </div>
                                            <div className="padding-15px change-scrollbar" style={{height: 450, overflowY: 'auto'}}>
                                                <CardProduct data={selling} />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width: 'calc(50% - 7px)', marginLeft: 7}}>
                                        <div className="card no-hover no-margin no-radius border-all">
                                            <div className="display-flex space-between align-center padding-15px" style={{paddingTop: 10, paddingBottom: 10}}>
                                                <div className="txt-site txt-11 txt-primary">TOP COMPETITOR SKU</div>
                                                <button className="btn btn-small-circle btn-grey">
                                                    <i className="fa fa-lw fa-ellipsis-v" />
                                                </button>
                                            </div>
                                            <div className="padding-15px change-scrollbar" style={{height: 450, overflowY: 'auto'}}>
                                                <CardProduct data={selling} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default App