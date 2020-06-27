import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 
'react-icons/fa'

export default class Services extends Component {
    state = {
        services :[
            {
                icon:<FaCocktail/>,
                title:"free cocktail",
                info:'lorem ionossdskjaldnaskjdnbasjkd sajkdbnaskj bhkdsc'
            },
            {
                icon:<FaHiking/>,
                title:"endles hicking",
                info:'lorem ionossdskjaldnaskjdnbasjkd sajkdbnaskj bhkdsc'
            },
            {
                icon:<FaShuttleVan/>,
                title:"free FaShuttleVan",
                info:'lorem ionossdskjaldnaskjdnbasjkd sajkdbnaskj bhkdsc'
            },
            {
                icon:<FaBeer/>,
                title:"strongest beer cocktails",
                info:'lorem ionossdskjaldnaskjdnbasjkd sajkdbnaskj bhkdsc'
            }
        ]
    }
    render() {
        return (
           <section className="services">
               <Title title="services" />
               <div className = "services-center"> 
                {this.state.services.map((item,index) => {
                    return (<article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    )
                })}
               </div>
           </section>
        )
    }
}
