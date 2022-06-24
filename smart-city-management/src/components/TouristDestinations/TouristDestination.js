import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

const TouristDestination=()=>{

  const[getList,setList] =  useState([]);
  const[getIndex,setIndex]=useState(-1);
  const[getSearch,setSearch]=useState('');

  const[getPlace,setPlace]=useState({
    PlaceName: '',
    ShortDesc: '',
    City: '',
    SpecialityOfPlace: '',
    EntryFee: '',
    Rating:''
  });

     useEffect(()=>{
      
      axios.get('http://localhost:3000/smartcity').then((response)=>{
        console.log(response.data)
      setList(response.data);
    }).catch((error)=>{
      console.log(error);
    }) 
     },[])

     const onDeleteHandler=(index)=>{
       let PlaceDetails = [...getList];
       let id = PlaceDetails[index].id;
       axios.delete('http://localhost:3000/smartcity/'+id).then((response)=>{
        PlaceDetails.splice(index,1);
       setList(PlaceDetails);
     }).catch(()=>{
     })
     }
     const onEditHandler=(index)=>{
      setPlace({
        PlaceName:getList[index].PlaceName,
        ShortDesc:getList[index].ShortDesc,
        City:getList[index].City,
        SpecialityOfPlace:getList[index].SpecialityOfPlace,
        EntryFee:getList[index].EntryFee,
        Rating:getList[index].Rating
      })
      setIndex(index);
     }
     const onChangeHandler=(event)=>{
      setPlace({
        ...getPlace,[event.target.name]:event.target.value
      })
    }
    const onChangeSearchHandler=(event)=>{
      setSearch(event.target.value);
    }
    const onEditSubmitHandler=(event)=>{
      event.preventDefault();
      let PlaceDetails =[...getList];
      let id= PlaceDetails[getIndex].id;
      axios.patch('http://localhost:3000/smartcity/'+id,{
          PlaceName:getPlace.PlaceName,
          ShortDesc:getPlace.ShortDesc,
          City:getPlace.City,
          SpecialityOfPlace:getPlace.SpecialityOfPlace,
          EntryFee:getPlace.EntryFee,
          Rating: getPlace.Rating 
      }).then(()=>{
        setList(PlaceDetails);
        PlaceDetails[getIndex].PlaceName = getPlace.PlaceName;
        PlaceDetails[getIndex].BookDetails=getPlace.BookDetails;
        PlaceDetails[getIndex].ShortDesc = getPlace.ShortDesc;
        PlaceDetails[getIndex].BookDes = getPlace.BookDes;
        PlaceDetails[getIndex].SpecialityOfPlace = getPlace.SpecialityOfPlace;
        PlaceDetails[getIndex].EntryFee = getPlace.EntryFee;
        PlaceDetails[getIndex].Rating = getPlace.Rating;
      }).catch(()=>{
      })
    }
    const searchFilter=(event)=>{
      event.preventDefault();
      let details = getList.filter((obj)=>{
        return obj.PlaceName === getSearch; 
      })
      setList(details);
    }
    const resetFilter=(event)=>{
      event.preventDefault();
      setSearch('');
      axios.get('http://localhost:3000/smartcity').then((response)=>{
      console.log(response);
      setList(response.data)
      }).catch((error)=>{
      console.log(error);
      });
      }
    return (<div className="container-fluid">
    <div className="row">
      <div className="col-3">
      <form>        
                        <div className="form-group">
                          <br/>
                          <label><b>PlaceName</b></label>
                          <input type="text" value={getSearch} onChange={onChangeSearchHandler} className="form-control" id="PlaceName" name="searchPlaceName" placeholder="Enter PlaceName"/>
                        </div>       
                       <button onClick={searchFilter} type="submit" className="btn btn-primary">Search</button> &nbsp;&nbsp;
                      <button onClick={resetFilter}  className="btn btn-primary">Reset</button>
                      </form>
                </div>
                <div className="col-10"></div>
                <div className="col-2">
                <button type="submit" class="btn btn-outline-primary"><Link to="/addplace">ADD PLACE</Link></button>
                </div>
              </div>
   <br/>
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">PlaceName</th>
              <th scope="col">ShortDesc</th>
              <th scope="col">City</th>
              <th scope="col">SpecialityOfPlace</th>
              <th scope="col">EntryFee</th>
              <th scope="col">Rating</th>
              <th scope="col">Edit</th>
             <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {getList.map((obj,index)=>{
                           return(<tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{obj.PlaceName}</td>
                            <td>{obj.ShortDesc}</td>
                            <td>{obj.City}</td>
                            <td>{obj.SpecialityOfPlace}</td>
                            <td>{obj.EntryFee}</td>
                            <td>{obj.Rating}</td>
                            <td><i onClick={()=>onEditHandler(index)} data-toggle="modal" data-target="#edit" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            <td><i onClick={()=>onDeleteHandler(index)} className="fa fa-trash" aria-hidden="true"></i></td>
                          </tr>
                           )
                        })
                        } 
          </tbody>
        </table>
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
                    <input value={getPlace.PlaceName} onChange={onChangeHandler} type="text" class="form-control" name="PlaceName" id="text" />
                  </div>
                  <div class="form-group">
                    <label>ShortDesc:</label>
                    <textarea value={getPlace.ShortDesc} onChange={onChangeHandler} class="form-control" id="exampleFormControlTextarea1" rows="3"  type="text" className="form-control" name="ShortDesc"></textarea>
                    <div class="form-group">
  </div>
                  </div>
                  <div class="form-group">
                    <label>City:</label>
                    <input value={getPlace.City} onChange={onChangeHandler} type="text" class="form-control" name="City" id="text" />
                  </div>
                  <div class="form-group">
                    <label>SpecialityOfPlace:</label>
                    <input value={getPlace.SpecialityOfPlace} onChange={onChangeHandler} type="text" class="form-control" name="SpecialityOfPlace" id="text" />
                  </div>
                  <div class="form-group">
                    <label>EntryFee:</label>
                    <input value={getPlace.EntryFee} onChange={onChangeHandler} type="text" class="form-control" name="EntryFee" id="text" />                   
                  </div>
                  <div class="form-group">
                    <label>Rating:</label>
                    <input value={getPlace.Rating} onChange={onChangeHandler} type="text" className="form-control" name="Rating" id="text" />                   
                  </div>
                  <div><button data-dismiss="modal" onClick={onEditSubmitHandler} type="submit" className="btn btn-primary">Add Place</button></div>
                </form>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}
export default TouristDestination;