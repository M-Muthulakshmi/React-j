import './Dashboard.css';
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

const Dashboard=()=>{

  const[getList,setList] =  useState([]);
  const[getIndex,setIndex]=useState(-1);
  const[getSearch,setSearch]=useState('');

  const[getBook,setBook]=useState({
    BookId: '',
    BookTitle: '',
    BookDesc: '',
    AuthorName: '',
    NumberofBooks: ''
  });

     useEffect(()=>{
      
      axios.get('http://localhost:3000/library').then((response)=>{
        console.log(response.data)
      setList(response.data);
    }).catch((error)=>{
      console.log(error);
    }) 
            // if(JSON.parse(sessionStorage.getItem('BookDetails')) && JSON.parse(sessionStorage.getItem('BookDetails')).length>0){
            //    setList(JSON.parse(sessionStorage.getItem('BookDetails')))
            // }
     },[])

     const onDeleteHandler=(index)=>{
       let BookDetails = [...getList];
       let id = BookDetails[index].id;
       axios.delete('http://localhost:3000/library/'+id).then((response)=>{
       BookDetails.splice(index,1);
       setList(BookDetails);
     }).catch(()=>{

     })
     //  sessionStorage.setItem('BookDetails',JSON.stringify(BookDetails));
     }

     const onEditHandler=(index)=>{
      setBook({
        BookId:getList[index].BookId,
        BookTitle:getList[index].BookTitle,
        BookDesc:getList[index].BookDesc,
        AuthorName:getList[index].AuthorName,
        NumberofBooks:getList[index].NumberofBooks
      })
      setIndex(index);
     }

     const onChangeHandler=(event)=>{
      setBook({
        ...getBook,[event.target.name]:event.target.value
      })
    }

    const onChangeSearchHandler=(event)=>{
      setSearch(event.target.value);
    }


    const onEditSubmitHandler=(event)=>{
      event.preventDefault();
      let BookDetails =[...getList];
      let id= BookDetails[getIndex].id;
      axios.patch('http://localhost:3000/library/'+id,{
          BookId:getBook.BookId,
          BookTitle:getBook.BookTitle,
          BookDesc:getBook.BookDesc,
          AuthorName:getBook.AuthorName,
          NumberofBooks:getBook.NumberofBooks
      }).then(()=>{
        setList(BookDetails);
        BookDetails[getIndex].BookId = getBook.BookId;
        BookDetails[getIndex].BookDetails=getBook.BookDetails;
        BookDetails[getIndex].BookTitle = getBook.BookTitle;
        BookDetails[getIndex].BookDes = getBook.BookDes;
        BookDetails[getIndex].AuthorName = getBook.AuthorName;
        BookDetails[getIndex].NumberofBooks = getBook.NumberofBooks;
      }).catch(()=>{
        
      })
    //  sessionStorage.setItem('BookDetails',JSON.stringify(BookDetails));
    }

    const searchFilter=(event)=>{
      event.preventDefault();
      let details = getList.filter((obj)=>{
        return obj.BookId === getSearch; 
      })
      setList(details);
    }

    const resetFilter=(event)=>{
      event.preventDefault();
      setSearch('');
      axios.get('http://localhost:3000/library/').then((response)=>{
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
                          <label><b>Book Id</b></label>
                          <input type="text" value={getSearch} onChange={onChangeSearchHandler} className="form-control" id="BookId" name="searchBookId" placeholder="Enter BookId"/>
                        </div>       
                       <button onClick={searchFilter} type="submit" className="btn btn-warning">Search</button> &nbsp;&nbsp;
                      <button onClick={resetFilter}  className="btn btn-warning">Reset</button>
                      </form>
                </div>
                <div className="col-10"></div>
                <div className="col-2">
                <button type="submit" className="btn btn-warning"><Link to="/addBook">Add Book</Link></button>
                </div>
                
              </div>
   <br/>
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">BookId</th>
              <th scope="col">BookTitle</th>
              <th scope="col">BookDesc</th>
              <th scope="col">AuthorName</th>
              <th scope="col">NumberofBooks</th>
              <th scope="col">Edit</th>
             <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {getList.map((obj,index)=>{
                           return(<tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{obj.BookId}</td>
                            <td>{obj.BookTitle}</td>
                            <td>{obj.BookDesc}</td>
                            <td>{obj.AuthorName}</td>
                            <td>{obj.NumberofBooks}</td>
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
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <form>
                  <div><h3>Add Book</h3></div>
                  <div class="form-group">
                    <label>Book ID:</label>
                    <input value={getBook.BookId} onChange={onChangeHandler} type="text" class="form-control" name="BookId" id="text" />
                  </div>
                  <div class="form-group">
                    <label>Book Title:</label>
                    <input value={getBook.BookTitle} onChange={onChangeHandler} type="text" class="form-control" name="BookTitle" id="text" />
                  </div>
                  <div class="form-group">
                    <label>Book Desc:</label>
                    <input value={getBook.BookDesc} onChange={onChangeHandler} type="text" class="form-control" name="BookDesc" id="text" />
                  </div>
                  <div class="form-group">
                    <label>Author Name:</label>
                    <input value={getBook.AuthorName} onChange={onChangeHandler} type="text" class="form-control" name="AuthorName" id="text" />
                  </div>
                  <div class="form-group">
                    <label>Number of Book Available:</label>
                    <input value={getBook.NumberofBooks} onChange={onChangeHandler} type="text" class="form-control" name="NumberofBooks" id="text" />                   
                  </div>
                  <div><button data-dismiss="modal" onClick={onEditSubmitHandler} type="submit" className="btn btn-warning">Add Book</button></div>
                </form>
        </div>
      </div>
    </div>
  </div>

    </div>
    </div>

  
  
  
  )
}

export default Dashboard;