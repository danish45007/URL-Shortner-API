import React,{Component} from 'react';
import './App.css';
import "tachyons";

class App extends React.Component {
    
    state = {
        longUrl: ""
    }

    handleSubmit(e){
        
        e.preventDefault();
        var data = new URLSearchParams();
         console.log(e.target)
         for(const pair of new FormData(e.target)){
            // console.log(pair)
           data.append(pair[0],pair[1])
         }

         console.log(data)

        fetch('/api/url/shorten',{
            method: "post",
            body: JSON.stringify(data),
           
        }).then(res=>res.json())
        .then(res2 => console.log(res2)); 
    }

    render() {
        return (
            <div className = 'tc'>
                <h1 className='tc bg-black dib br3 ma2 grow bw2 shadow-10'>URL SHORTNER</h1>
                <br/>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input className='mv5 w-30 pa3 ba b--green bg-lightest-blue grow' type="text" placeholder="Search Url" value={this.state.longUrl} 
                    onChange={(e)=>this.setState({longUrl:e.target.value})}/>
                    <br/>
                    <button className="btn btn-danger grow">Search</button>
                </form>
            </div>
        )
    }
}

export default App;