import React from 'react'
import Crousal from '../components/Crousal'
export default function Card() {
    return (
        <div> 
            <div><div className="card mt-3" style={{ "width": "18rem", "maxheight": "360px" }}>
            <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build.</p>
                <div className='cointainer w-100 rounded'></div>
                <select className="m-2 h-100 bg-success rounded">
                    {Array.from(Array(6), (e, i) => {
                        return (
                            <option key={i + 1} value={i + 1}>{i + 1}  </option>
                        )
                    })}
                </select>
                <select className='m-2 h-100 bg-success rounded' >
                    <option value="half">Half </option>
                    <option value="Full">Full</option>
                </select>
                <div className='d-inline h-100 fs-5'>
                    Total Price
                </div>
            </div>
        </div></div></div>
    )
}
