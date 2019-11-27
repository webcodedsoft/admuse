import React, { Component} from 'react';
import ReactFileReader from 'react-file-reader';
import { uploadBulkSlotCSV } from './../../../services/mediaHouseService';
import { toast } from 'react-toastify';
import Dashboard from './../../common/dashboard';

class BulkSlotUpload extends Component {
   
    state = {
        data:"",
        csv: "",
        defaultImage: '/images/no_image.png'
    }
    componentWillMount() {
        const media_house_id = this.props.match.params.shortname;
        const program_name = this.props.match.params.programname;
        this.setState({media_house_id, program_name});
    }
    handleFile = async files => {
        const {media_house_id, program_name} = this.state;
        const selectedFile = files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
                this.setState({ file: selectedFile, defaultImage: selectedFile.result, data:reader.result });
                console.log(reader.result);
        }
        reader.readAsText(selectedFile);

        let formData = new FormData();
        formData.append('csv',selectedFile);

        const { data } = await uploadBulkSlotCSV(formData, media_house_id, program_name);
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
                    <h2 className="section-title">Upload Slots</h2>
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
export default BulkSlotUpload; 