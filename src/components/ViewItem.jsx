import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewItem = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    {
                        data.map(
                            (value,index) => {
                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                <img src={value.image} height="360px" class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                <h5 class="card-title">{value.title}</h5>
                                <p class="card-text">ID:{value.id}</p>
                                <p class="card-text">DESCRIPTION:{value.description}</p>
                                <p class="card-text">CATEGORY:{value.category}</p>
                                <p class="card-text">PRICE:{value.price}</p>
                                <p class="card-text">RATING:{value.rate}</p>
                                <p class="card-text">RATING:{value.count}</p>
                                <a href="#" class="btn btn-primary">BUY NOW</a>
                            </div>
                        </div>
                                </div>
                            }
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewItem