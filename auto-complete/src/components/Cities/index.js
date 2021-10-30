import React, { Component } from 'react'

export class index extends Component {
    render() {
        const {cities,handleChange,setCity,city}=this.props;
        return (
            <div className="city">
                <div>
                    <form >
                        <div className="form-group">
                            <label>Search city: </label>
                            <input type="text" className="form-control" autoFocus name="city" value={city} onChange={(e) => handleChange(e)} />
                        </div>
                    </form>
                </div>
                <div className="results">
                    {cities.error !== "" ?
                        <div className="cities">
                            {cities.error}
                        </div>
                        :
                        cities.filtered_cities.map((city, index) => (<div key={index} className="cities" onClick={() => setCity(city)}>{city}</div>))
                    }
                </div>
            </div>
        )
    }
}
export default index
