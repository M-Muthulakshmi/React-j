import { useEffect, useState } from 'react';
import axios from 'axios';
import image from './download.jpg';

function Weather() {

  const [getList, setList] = useState([]);
  const [getSearch, setSearch] = useState('');

  const [getWeather] = useState({
    City: '',
    Country: '',
    Temperature: '',
    Humidity: '',
  });
  useEffect(() => {
    axios.get('http://localhost:3000/weather').then((response) => {
      console.log(response.data)
      setList(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])


  const onChangeSearchHandler = (event) => {
    setSearch(event.target.value);
  }

  const searchFilter = (event) => {
    event.preventDefault();
    let details = getList.filter((obj) => {
      return obj.City === getSearch;
    })
    setList(details);
  }
  const resetFilter = (event) => {
    event.preventDefault();
    setSearch('');
    axios.get('http://localhost:3000/weather').then((response) => {
      console.log(response);
      setList(response.data)
    }).catch((error) => {
      console.log(error);
    });
  }
  return (<div>
    <div className="container pic">
      <div className="row">
        <div className="col-4">
        </div>
        <form className="heading1">
          <div className="bg-color">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <p className="text-primary" href="#">Weather</p>
            </nav></div>
          <br />
          <div><img src={image} /></div>
          <br />
          <div className="input-group mb-3">
            <div className="textbox">
              <input value={getSearch} onChange={onChangeSearchHandler} type="text" size="55" className="form-control" id="Search" name="search" placeholder="Search" class="form-control" aria-describedby="inputGroup-sizing-default" />
            </div>
          </div>
          <button onClick={searchFilter} type="submit" className="btn btn-info">Search</button> &nbsp;
          <button onClick={resetFilter} className="btn btn-info">Reset</button>
        </form>
      </div>
      <div className="col-4">
      </div>

    </div>
    <div className="row">
      <div className="col-15">
      <br/>
        <div className="table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Index</th>
                <th scope="col">City</th>
                <th scope="col">Country</th>
                <th scope="col">Temperature</th>
                <th scope="col">Humidity</th>
              </tr>
            </thead>
            <tbody>
              {getList.map((obj, index) => {
                return (<tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{obj.City}</td>
                  <td>{obj.Country}</td>
                  <td>{obj.Temperature}</td>
                  <td>{obj.Humidity}</td>
                </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Place</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div class="form-group">
                  <label>Book ID:</label>
                  <input value={getWeather.City} type="text" class="form-control" name="PlaceName" id="text" />
                </div>
                <div class="form-group">
                  <label>ShortDesc:</label>
                  <input value={getWeather.Country} type="text" class="form-control" name="ShortDesc" id="text" />
                </div>
                <div class="form-group">
                  <label>City:</label>
                  <input value={getWeather.Temperature} type="text" class="form-control" name="City" id="text" />
                </div>
                <div class="form-group">
                  <label>SpecialityOfPlace:</label>
                  <input value={getWeather.Humidity} type="text" class="form-control" name="SpecialityOfPlace" id="text" />
                </div>
                <div><button data-dismiss="modal" type="submit" className="btn btn-primary">Add Place</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Weather;