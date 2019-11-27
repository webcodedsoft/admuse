import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { uploadAvatar } from '../../services/mediaHouseService';
import { toast } from 'react-toastify';

class SingleMediaHouse extends Component {
   
    state = {
        chooseFile:"",
        file: "",
        defaultImage: '/images/no_image.png'
    }
    async handleFile(e) {
        const selectedFile = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
                this.setState({ file: selectedFile, defaultImage: e.target.result });
        }
        reader.readAsDataURL(selectedFile);

        const media_house = this.props.data.short_name;
        let formData = new FormData();
        formData.append('avatar',selectedFile);

        const { data } = await uploadAvatar(media_house, formData);
        if(data.statusText === "error") {
            toast.error(data.result.message);
        } else {
            toast.success("Avatar updated successfully!");
        }
    }
    render() {
        const {data} = this.props;
        return ( 
            <React.Fragment>
                <Link to={"/media-house/"+data.short_name+"/program/create"} className="btn abtn abtn-2" style={{padding: '10px' }}>Create Program</Link>
                <Link to={"/media-house/"+data.short_name+"/program/list"} className="btn abtn abtn-2" style={{padding: '10px' }}>Program List</Link><br /><br />
                    <div className="row">
                        <div className="col-sm-7">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{ data.name }</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{ data.address }</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile Number</td>
                                        <td>{ data.mobile }</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{ data.email }</td>
                                    </tr>
                                    <tr>
                                        <td>Contact Person</td>
                                        <td>{ data.contact_person }</td>
                                    </tr>
                                    <tr>
                                        <td>Description</td>
                                        <td>{ data.description }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-5">
                            <div className="row justify-content-center align-items-center text-center">
                                <div className="well">
                                    <h4>Media House Picture</h4><br />
                                    <div className="avatar">
                                        <img src={(data.images) ? data.images.avatar : this.state.defaultImage} className="img-fluid img-thumbnail" style={{width:'150px'}} alt=""/>
                                    </div>
                                    <br />
                                        <div className="upload">
                                            <input type="file" name="avatar" onChange={(e) => this.handleFile(e)} ref={(ref) => this.chooseFile = ref } style={{display: 'none'}} />
                                            <button className="btn abtn abtn-2" onClick={ (e) => this.chooseFile.click() }><i className="fas fa-camera"></i>&nbsp; Choose an image</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
         );
    }
}
export default SingleMediaHouse; 