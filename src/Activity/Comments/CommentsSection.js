import React, { Component } from 'react'
import './CommentsSection.css'


class CommentsSection extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return(
            <form className="comments">
                <div className="form-group">
                    <label>{this.props.label}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                    <div className="comments-button">
                        <button type="button" className="btn btn-outline-">{this.props.buttonName}</button>
                    </div>
                </div>
            </form>
        )
    }

}

export default CommentsSection