import React from 'react'
import FileDetails from './file_details';
import SuccessFile from './success_file';
import UploadFile from "./upload_file";

class Upload extends React.Component {

    constructor(props) {
        super(props) 

        this.state = {
            title: '',
            uploader_id: this.props.currentUser.id,
            genre: '',
            artist: '',
            audioFile: null,
            imageFile: null,
            imageUrl: '',
            page: 0,
            uploadStatus: false
        }

        this.handleFile = this.handleFile.bind(this)
        this.changeUpload = this.changeUpload.bind(this)
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleFile(e){
        e.preventDefault();
        const file = e.target.files[0];
        if(file){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onloadend = () => {
                this.setState({ imageFile: file, imageUrl: fileReader.result })
            };
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[genre]', this.state.genre);
        formData.append('track[artist]', this.state.artist);
        formData.append('track[uploader_id]', this.state.uploader_id);
        formData.append('track[track]', this.state.audioFile);
        if(this.state.imageFile){
            formData.append('track[image]', this.state.imageFile);
        }
        
        this.props.createTrack(formData).then(track => {
            this.setState({
                page: 2, 
                trackId: track.track.id
            })
        })
    }

    changeUpload(e){
        e.preventDefault()
        let currentFile = e.target.files[0]
        
        if(currentFile && currentFile.type === "audio/mpeg"){ 
            
            this.setState({
                title: currentFile.name.split(".")[0],
                audioFile: currentFile
            });
        }
    }





    render() { 
        return ( 
            <div>
                <div className="app-discover1">

                    <div className="creators-tab">
                        <ul>
                            <ul id="upload-only">Upload</ul>
                            <ul>Mastering</ul>
                            <ul>Your Tracks</ul>
                            <ul>Pro Plans</ul>
                        </ul>
                    </div>
                    
                    {/* <div className="upload-main">
                        <div className="upload-screen">
                            <h2>Drag and drop your tracks - albums here</h2>
                            <input
                                type="file"
                                name="file"
                                id="file"
                                className="inputfile"
                                accept=".mp3,audio/*"
                                onChange={this.props.changeUpload}
                            />
                            <label htmlFor="file">or choose files to upload</label>
                        </div>
                    </div> */}
                    
                    <div>
                        <UploadFile 
                            changeUpload={this.changeUpload}
                            page={this.state.page}
                        />
                        <FileDetails 
                            changeUpload={this.changeUpload}
                            state={this.state}
                            update={this.update}
                            handleFile={this.handleFile}
                            handleSubmit={this.handleSubmit}
                        />
                        {/* <SuccessFile 
                            state={this.state}
                            currentUser={this.props.currentUser}
                        /> */}
                    </div>
                </div>
            </div>
         );
    }
}

export default Upload