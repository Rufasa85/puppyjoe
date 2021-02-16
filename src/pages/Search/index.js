import React, { Component } from 'react'
import API from '../../utils/API';

export default class Search extends Component {
    
        state= {
            search:"",
            results:[]
        }
        componentDidMount(){
            this.searchBreeds("australian")
        }

        handleInputChange= e=>{
            const {name,value}=e.target;
            this.setState({[name]:value})
        }

        searchBreeds = dogBreed=>{
            API.searchByBreed(dogBreed).then(res=>{
                console.log(res);
                this.setState({results:res.data.message})
            })
        }
        submitForm = event=>{
            event.preventDefault();
            this.searchBreeds(this.state.search);
            this.setState({search:""})
        }
        render() {
        return (
            <div>
                <form onSubmit = {this.submitForm}>
                    <input name="search" onChange={this.handleInputChange} value={this.state.search}/>
                    <button>Show me pics!</button>
                </form>
                {this.state.results.map(imgSrc=><img src={imgSrc}/>)}
            </div>
        )
    }
}
