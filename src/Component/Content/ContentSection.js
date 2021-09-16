import React, { Component } from 'react';

class ContentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusCheck: 0
        }
    }

    noti = () => { alert('edit') };

    renderButton = () => (
        <div className="row">
            <div className="btn btn-group">
                <button type="button" className="btn btn-primary" onClick={this.editClick}>Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        </div>
    )


    renderForm = () => (
        <div className="row">
            <div className="form-group">
                <input type="text" className="form-control" defaultValue={this.props.title} />
                <button type="button" className="btn btn-danger" onClick={this.saveClick}>Save</button>
            </div>
        </div>
    )

    displayCheck = () => {
        if (this.state.statusCheck === 0) {
            return this.renderButton();
        }
        else {
            return this.renderForm();
        }
    }

    editClick = () => {
        this.setState({statusCheck:1});
    }

    saveClick = () => {
        this.setState({statusCheck:0});
    }

    render() {
        return (
            <div>
                <section id="scroll">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className={"col-lg-6 " + this.props.location1}>
                                <div className="p-5"><img className="img-fluid rounded-circle" src={this.props.linkImage} alt="..." /></div>
                            </div>
                            <div className={"col-lg-6 " + this.props.location2}>
                                <div className="p-5">
                                    <h2 className="display-4">{this.props.title}</h2>
                                    <p>{this.props.description}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            {this.displayCheck()}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ContentSection;