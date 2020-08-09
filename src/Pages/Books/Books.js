import React,{Component} from 'react'
import { GET_BOOKS_API } from '../../constants/serverUrls';
import DisplayBook from '../../CommonComponents/DisplayBook';
import fetchBooks from '../../services/fetchBooks';
class Books extends Component{
    state={
        books:[]
    };
    componentDidMount(){
        this.getBooks();
    }

    addToCart=async(id)=>{
        console.log(id);
    }

    getBooks=async()=>{
        try{
            const books=await fetchBooks(GET_BOOKS_API,"GET");
            console.log(books);
            this.setState({
                books
            });
        }
        catch(error){
            console.log(error)
        }
    }

    render(){
        const {books}=this.state;
        let message,e=true;
        return(
            <div>
                {
                    books.map((book,bookIndex)=>{
                        book.availability
                        ?
                        message="Add to Cart"
                        :
                        message="Book is currently not available"
                        return(
                            
                            <DisplayBook 
                            id={book.id}
                            title={book.title}
                            author={book.author}
                            country={book.country}
                            language={book.language}
                            year={book.year}
                            pages={book.pages}
                            imageLink={book.imageLink}
                            message={message}
                            addToCart={this.addToCart}
                            />
    
                        );        
                    })
                }
            </div>
        );
    }
}
export default Books;