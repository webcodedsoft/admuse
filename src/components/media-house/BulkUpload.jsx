import React, { Component} from 'react';
import ReactFileReader from 'react-file-reader';
import { uploadCSV } from '../../services/mediaHouseService';
import { toast } from 'react-toastify';
import Dashboard from './../common/dashboard';

class BulkUpload extends Component {
   
    state = {
        data:"",
        file: "",
        defaultImage: '/images/no_image.png'
    }
    handleFile = async files => {
        const selectedFile = files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
                this.setState({ file: selectedFile, defaultImage: selectedFile.result, data:reader.result });
                console.log(reader.result);
        }
        //reader.readAsDataURL(selectedFile);
        reader.readAsText(selectedFile);

        let formData = new FormData();
        formData.append('csv',selectedFile);

        const { data } = await uploadCSV(formData);
        if(data.statusText === "error") {
            toast.error(data.result.message);
        } else {
            toast.success("Bulk import was successful!");
        }
    }
    render() {
        return ( 
            <Dashboard>
                <div className="white-bg">
                    <h2 className="section-title">Upload Media Houses</h2>
                    <ReactFileReader handleFiles={this.handleFile} fileTypes={'.csv'}>
                        <button className="btn abtn abtn-2"><i className="fas fa-file"></i>&nbsp; Select CSV File</button>
                    </ReactFileReader>                
                    <br />
                    <textarea className="form-control" value={ this.state.data } rows="10"></textarea>
                </div>
            </Dashboard>
         );
    }
}
export default BulkUpload; 