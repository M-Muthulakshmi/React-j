import './AddBook.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BookIdValidation, BookTitleValidation, BookDescValidation, AuthorNameValidation, NumberofBooksValidation } from '../Validation';
import axios from 'axios';
function AddBook() {

  const navigate = useNavigate();

  const [getBook, setBook] = useState({
    BookId: '',
    BookTitle: '',
    BookDesc: '',
    AuthorName: '',
    NumberofBooks: ''
  });

  const [getValidation, setValidation] = useState({
    BookId: '',
    BookTitle: '',
    BookDesc: '',
    AuthorName: '',
    NumberofBooks: ''
  });
  const onChangeHandler = (event) => {
    setBook({
      ...getBook, [event.target.name]: event.target.value
    })
  }
  const onAddHandler = (event) => {
    event.preventDefault();
    setValidation({
      ...getValidation, Bookid: !BookIdValidation(getBook.BookId) ? "please provide BookId" : '',
      BookTitle: !BookTitleValidation(getBook.BookTitle) ? "Please provide BookTitle" : '',
      BookDesc: !BookDescValidation(getBook.BookDesc) ? "Please provide BookDescription" : '',
      AuthorName: !AuthorNameValidation(getBook.AuthorName) ? "Please provide AuthorName" : '',
      NumberofBooks: !NumberofBooksValidation(getBook.NumberofBooks) ? "Please provide NumberofBooks" : ''
    });
    if (getBook.BookId && getBook.BookTitle && getBook.BookDesc && getBook.AuthorName && getBook.NumberofBooks) {
    //  let BookDetails = [];
        axios.post('http://localhost:3000/library',{
          BookId:getBook.BookId,
          BookTitle:getBook.BookTitle,
          BookDesc:getBook.BookDesc,
          AuthorName:getBook.AuthorName,
          NumberofBooks:getBook.NumberofBooks
        }).then(()=>{
          navigate('/dashboard');
        }).catch(()=>{
           alert("error");
        })
      // if (sessionStorage.getItem('BookDetails')) {
      //   let details = JSON.parse(sessionStorage.getItem('BookDetails'));
      //   console.log(typeof details);
      //   BookDetails.push(...details);
      //   BookDetails.push({ ...getBook });
      //   sessionStorage.setItem("BookDetails", JSON.stringify(BookDetails));
      // }
      // else {
      //   BookDetails.push({ ...getBook });
      //   sessionStorage.setItem("BookDetails", JSON.stringify(BookDetails));
      // }
     
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
                  <div><h3>Add Book</h3></div>
                  <div class="form-group">
                    <label>Book ID:</label>
                    <input value={getBook.BookId} onChange={onChangeHandler} type="text" class="form-control" name="BookId" id="firstname" />
                    {getValidation.BookId && <div class="alert alert-danger" role="alert">
                      {getValidation.BookId}
                    </div>}
                  </div>
                  <div class="form-group">
                    <label>Book Title:</label>
                    <input value={getBook.BookTitle} onChange={onChangeHandler} type="text" class="form-control" name="BookTitle" id="text" />
                    {getValidation.BookTitle && <div class="alert alert-danger" role="alert">
                      {getValidation.BookTitle}
                    </div>}
                  </div>
                  <div class="form-group">
                    <label>Book Desc:</label>
                    <input value={getBook.BookDesc} onChange={onChangeHandler} type="text" class="form-control" name="BookDesc" id="text" />
                    {getValidation.BookDesc && <div class="alert alert-danger" role="alert">
                      {getValidation.BookDesc}
                    </div>}
                  </div>
                  <div class="form-group">
                    <label>Author Name:</label>
                    <input value={getBook.AuthorName} onChange={onChangeHandler} type="text" class="form-control" name="AuthorName" id="text" />
                    {getValidation.AuthorName && <div class="alert alert-danger" role="alert">
                      {getValidation.AuthorName}
                    </div>}
                  </div>

                  <div class="form-group">
                    <label>Number of Book Available:</label>
                    <input value={getBook.NumberofBooks} onChange={onChangeHandler} type="text" class="form-control" name="NumberofBooks" id="text" />
                    {getValidation.NumberofBooks && <div class="alert alert-danger" role="alert">
                      {getValidation.NumberofBooks}
                    </div>}
                  </div>
                  <button onClick={onAddHandler} type="submit" className="btn btn-warning">Add Book</button>
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

export default AddBook;