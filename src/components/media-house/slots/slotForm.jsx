import React from 'react';
import Joi from 'joi-browser';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './../../common/form';
import { getTypes,createSlot,mapProgramAttributToSelect } from '../../../services/mediaHouseService';
import Dashboard from './../../common/dashboard';
import { uploadProgramImages, getSizes } from './../../../services/mediaHouseService';
import ReactFileReader from 'react-file-reader';
//import Dropzone from 'react-dropzone'

class SlotForm extends Form {
    state = { 
        data: {name : "",price:"",available:"",type_id:"",media_type_id:"",size_id:"",size_value:"",image:[]},
        errors: {},
        media_house_id:this.props.match.params.shortname,
        program_name:this.props.match.params.programname,
        imageUploading: true,
        imageUploadStatus: "",
        images: "",
        imagesName: ""
     }

     schema = {
        id: Joi.string(),
        name:Joi.string().required().label("Slot Name"),
        price:Joi.string().required().label("Price"),
        available:Joi.string().required().label("Available"),
        type_id:Joi.string().required().label("Type"),
        media_type_id:Joi.string(),
        size_value:Joi.string(),
        size_id:Joi.string(),
        image: Joi.array()
    }

    async componentDidMount() {
        const types = await getTypes();
        const {data: sizes } = await getSizes();
        let size_arr = [];
        sizes.result.data.map((item) => {
            return size_arr.push({key: item.id, value: item.size});
        })
        this.setState({
            types: mapProgramAttributToSelect(types.data.result),
            sizes: size_arr
        });
    }
    async doSubmit() {
        try{
            const data = await createSlot(this.state.media_house_id, this.state.program_name, this.state.data);
            console.log(data);
            if(data.status === 201) {
                toast.success("Slot Created Successfully!");
                this.props.history.push(`/media-house/${this.state.media_house_id}/program/${this.state.program_name}/slot/list`);
            } else {
                toast.success("An error occured: Slot was not created!");
            }     
        } catch(ex) {
            console.log('Error '+ex);
        }
        
    }

    handleUpload = async files => {
        const selectedFiles = files;
        const len = selectedFiles.length;
        let names = "";
        let formData = new FormData();
        for (let i = 0; i < len; i++) {
            names += selectedFiles[i].name + ", ";
            formData.append(`images[${i}]`, selectedFiles[i]);
        }
        this.setState({
            imagesName: names,
            images: selectedFiles,
            imageUploadStatus: "Uploading Images, Please Wait..."
        });
        const {data} = await uploadProgramImages(formData);
        
        if (data.statusText === "error") {
            this.setState({imageUploading: true});
            toast.error(data.result.message);
        } else {
            const fields = {...this.state.data};
            fields['image'] = data.result.map(image => {
                return image.id;
            });
            //console.log(fields);
            this.setState({data: fields, imageUploading: false, imageUploadStatus: ''});
            toast.success("Images uploaded successfully!");
        }
    }
    renderButton(label) {
        return (
            <button disabled={this.state.imageUploading} className="btn abtn abtn-2">
                {label}
            </button>
        );
    }
    handleButtonClick = e => {
        e.preventDefault();
    }
    render() { 
        


        return ( 
            <Dashboard>
                <div className="white-bg">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row justify-content-center">
                                    <div className="col-sm-12">
                                        <h3 className="section-title">Create Slot</h3><br/>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {this.renderSelect('programname', 'Program',[{key:1, value: 'Faaji Lawa'},{key:2, value: 'Time Na Money'},{key:3, value: 'Sport'}])}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderSelect('currency', 'Currency',[{key:1, value: 'Naira'},{key:2, value: 'Dollar'},{key:3, value: 'Pounds'}])}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderInput('name', 'Slot Name')}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderInput('price', 'Slot Price')}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderSelect('available', 'Select Available',[{key: 0, value:'Available'},{key: 1, value:'No'},{key: 2, value:'Yes'}])}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderSelect('type_id', 'Slot Type',this.state.types)}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderSelect('media_type_id', 'Media Type',[{key:1, value: 'Default Media'},{key:2, value: 'Default Media 2'}])}
                                            </div>
                                            <div className="col-sm-3">
                                                {this.renderInput('size_value', 'Slot Size')}
                                            </div>
                                            <div className="col-sm-3">
                                                {this.renderSelect('size_id', 'Slot Size Metric',this.state.sizes)}
                                            </div>
                                            <div className="col-lg-12">
                                                <label htmlFor="images">Attach Images</label>

                                                <div className="row col-sm-12">
                                                        <div className="offset-0 col-sm-2" >
                                                            <ReactFileReader handleFiles={this.handleUpload} fileTypes={'image/*'}>
                                                                <button onClick={this.handleButtonClick} className="btn abtn abtn-2"><i className="fas fa-image"></i>&nbsp; Select Images</button>
                                                            </ReactFileReader>
                                                        </div>
                                                            <div className="offset-0 col-sm-2" >
                                                            <ReactFileReader handleFiles={this.handleUpload} fileTypes={'image/*'}>
                                                                <button onClick={this.handleButtonClick} className="btn abtn abtn-2"><i className="fas fa-image"></i>&nbsp; Select Images</button>
                                                            </ReactFileReader>
                                                        </div>
                                                            
                                                            <div className="offset-0 col-sm-2" >
                                                            <ReactFileReader handleFiles={this.handleUpload} fileTypes={'image/*'}>
                                                                <button onClick={this.handleButtonClick} className="btn abtn abtn-2"><i className="fas fa-image"></i>&nbsp; Select Images</button>
                                                            </ReactFileReader>
                                                        </div>
                                                </div>
                                                {this.state.imagesName}
                                            </div>
                                            <div className="col-sm-12">
                                                <br />
                                                { this.renderButton("Save Slot") } {this.state.imageUploadStatus}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Dashboard>
         );
    }
}
 
export default SlotForm;