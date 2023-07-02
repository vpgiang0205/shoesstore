import React, { Component } from "react";
import index from "../Header";

export default class Modal extends Component {
    render() {
        const { content } = this.props
        return (
            <div className="modal fade" id="modelId" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content " >
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="">
                                <img className="img-fluid" src={content.image} alt="" />
                            </div>
                            <table className="table">
                                <tbody id="render">
                                    <tr>
                                        <td>Name</td>
                                        <td>{content.name}</td>
                                    </tr>

                                    <tr>
                                        <td>Price</td>
                                        <td>{content.price}</td>
                                    </tr>

                                    <tr>
                                        <td>Quantity</td>
                                        <td>{content.quantity}</td>
                                    </tr>

                                    <tr className="text-left">
                                        <td>Description</td>
                                        <td>{content.shortDescription} <br></br> {content.description}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}