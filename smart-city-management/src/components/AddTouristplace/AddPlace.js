import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { PlaceNameValidation, ShortDescValidation, CityValidation, SpecialityOfPlaceValidation, EntryFeeValidation, RatingValidation } from '../Validation';
import axios from 'axios';
function AddPlace() {

  const navigate = useNavigate();

  const [getPlace, setPlace] = useState({
    PlaceName: '',
    ShortDesc: '',
    City: '',
    SpecialityOfPlace: '',
    EntryFee: '',
    Rating:''
  });

  const [getValidation, setValidation] = useState({
    PlaceName: '',
    ShortDesc: '',
    City: '',
    SpecialityOfPlace: '',
    EntryFee: '',
    Rating:''
  });

  const onChangeHandler = (event) => {
    setPlace({
      ...getPlace, [event.target.name]: event.target.value
    })
  }
  const onAddHandler = (event) => {
    event.preventDefault();
    setValidation({
      ...getValidation, PlaceName: !PlaceNameValidation(getPlace.PlaceName) ? "please provide PlaceName" : '',
      ShortDesc: !ShortDescValidation(getPlace.ShortDesc) ? "Please provide ShortDescription" : '',
      City: !CityValidation(getPlace.City) ? "Please provide City" : '',
      SpecialityOfPlace: !SpecialityOfPlaceValidation(getPlace.SpecialityOfPlace) ? "Please provide SpecialityOfPlace" : '',
      EntryFee: !EntryFeeValidation(getPlace.EntryFee) ? "Please provide EntryFees" : '',
      Rating: !RatingValidation(getPlace.Rating) ? "Please provide Rating" : ''
    });
    if (getPlace.PlaceName && getPlace.ShortDesc && getPlace.City && getPlace.SpecialityOfPlace && getPlace.EntryFee && getPlace.Rating) {
        axios.post('http://localhost:3000/smartcity',{
            PlaceName:getPlace.PlaceName,
            ShortDesc:getPlace.ShortDesc,
            City:getPlace.City,
            SpecialityOfPlace:getPlace.SpecialityOfPlace,
            EntryFee:getPlace.EntryFee,
            Rating:getPlace.Rating
        }).then(()=>{
          navigate('/TouristDestination');
        }).catch(()=>{
           alert("error");
        })
    }
    else {
      alert("Please add some data");
    }
  }
  return (<div>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div class="container">
            <div>
              <div class="col-3">
              </div>
              <div>
                <form>
                    <br/>
                  <div><h3>Add Tourist Destination</h3></div>
                  <div class="form-group">
                    <label>PlaceName:</label>
                    <input value={getPlace.PlaceName} onChange={onChangeHandler} type="text" class="form-control" name="PlaceName" id="text"/>
                    {getValidation.PlaceName && <div class="alert alert-danger" role="alert">
                      {getValidation.PlaceName}
                    </div>}
                  </div>
                  <div class="form-group">
                    <label>City:</label>
                    <input value={getPlace.City} onChange={onChangeHandler} type="text" class="form-control" name="City" id="text"/>
                    {getValidation.City && <div class="alert alert-danger" role="alert">
                      {getValidation.City}
                    </div>}
                  </div>
                  <div class="form-group">
                    <label>SpecialityOfPlace:</label>
                    <input value={getPlace.SpecialityOfPlace} onChange={onChangeHandler} type="text" class="form-control" name="SpecialityOfPlace" id="text" />
                    {getValidation.SpecialityOfPlace && <div class="alert alert-danger" role="alert">
                      {getValidation.SpecialityOfPlace}
                    </div>}
                  </div>
                  <div class="form-group">
                    <label>EntryFee:</label>
                    <input value={getPlace.EntryFee} onChange={onChangeHandler} type="text" class="form-control" name="EntryFee" id="text" />
                    {getValidation.EntryFee && <div class="alert alert-danger" role="alert">
                      {getValidation.EntryFee}
                    </div>}
                  </div>
                  <div class="form-group">
                    <label>Rating:</label>
                    <input value={getPlace.Rating} onChange={onChangeHandler} type="text" class="form-control" name="Rating" id="text"/>
                    {getValidation.Rating && <div class="alert alert-danger" role="alert">
                      {getValidation.Rating}
                    </div>}
                  </div>
                  <div class="form-group">
                  <label for="exampleFormControlTextarea1">ShortDesc:</label>
                 <textarea value={getPlace.ShortDesc} onChange={onChangeHandler} class="form-control" id="exampleFormControlTextarea1" rows="3"  type="text" className="form-control" name="ShortDesc"></textarea>
                    {getValidation.ShortDesc && <div class="alert alert-danger" role="alert">
                      {getValidation.ShortDesc}
                    </div>}
                  </div>
                  <button onClick={onAddHandler} type="submit" className="btn btn-primary">Add Details</button>
                </form>
              </div>
              <div class="col-4">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
export default AddPlace;