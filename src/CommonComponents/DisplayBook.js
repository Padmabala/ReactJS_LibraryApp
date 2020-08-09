import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {NavLink} from 'react-router-dom';
import routes from '../routes/routes';
const DisplayBook=({
    id,
    title,
    author,
    country,
    language,
    year,
    pages,
    imageLink,
    message,
    addToCart=null
})=>{
   const addBookToCart=()=>{
        addToCart(id);
    }
    return(
        <div>
            <h1>{title}</h1>
            <table>
                <tr>
                    <td>
                    <img className="imgSize" src={"http://127.0.0.1:3005/"+imageLink} alt={title}/>
                    </td>
                    <td>
                    <div className="bookDetailWidth">
          <p>Author: {author}</p>
          <p>Country: {country}</p>
          <p>Lang:{language}</p>
          <p>Publication: {year}</p>
          <p>Pages: {pages}</p>
          </div>
                    </td>
                    <td>
                        <button className={`btn btn-primary`} onClick={addBookToCart} value={message}/>
                    
                    </td>

                </tr>
            </table>
        </div>
    );
};
DisplayBook.propTypes={
id:PropTypes.number.isRequired,
title:PropTypes.string.isRequired,
author:PropTypes.string.isRequired,
country:PropTypes.string.isRequired,
language:PropTypes.string.isRequired,
year:PropTypes.string.isRequired,
pages:PropTypes.string.isRequired,
imageLink:PropTypes.string.isRequired,
message:PropTypes.string.isRequired,
e:PropTypes.bool.isRequired
}
export default DisplayBook;