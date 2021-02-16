import React, { Component } from 'react'
import API from '../../utils/API';
import "./style.css"

export default class Discover extends Component {
    state = {
        likes:0,
        currentDog:"",
        previousLike:false
    }

    componentDidMount(){
        this.getRandomImg();
    }
    
    getRandomImg= ()=>{
        API.randomImg().then(res=>{
            this.setState({
                currentDog:res.data.message
            })
        })
    }
    
    likedDog = ()=>{
        const randNum = Math.floor(Math.random()*1) +1;
        if(randNum===1){
            console.log('liked!')
            this.setState({
                likes:this.state.likes+1,
                previousLike:true
            })
        } else {
            this.setState({previousLike:false})
        }

        this.getRandomImg();
    }

    dislikedDog=()=>{
        this.getRandomImg();
        this.setState({previousLike:false})
    }
    renderFlash=()=>{
        if(this.state.previousLike){
            return <h2>YAY he likes you!</h2>
        } 
    }

    render() {
        return (
            <div className="Discover">
                <h1>Discover page</h1>
                {this.renderFlash()}
                <img src={this.state.currentDog}/>
                <h3>{this.state.likes} dog(s) have liked you so far!</h3>
                <button onClick={this.likedDog}>Like</button>
                <button onClick={this.dislikedDog}>Dislike</button>
            </div>
        )
    }
}
