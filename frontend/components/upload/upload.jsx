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
            // uploader_id: this.props.currentUserId,
            genre: '',
            image: null,
            audio: null,
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
                this.setState({ photoFile: file, photoUrl: fileReader.result })
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
        formData.append('track[uploader_id]', this.state.uploader_id);
        if(this.state.photoFile){
        // if(this.state.image){
            formData.append('track[photo]', this.state.photoFile);
            // formData.append('track[image]', this.state.image);
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
                page: 1,
                title: currentFile.name.split(".")[0],
                songFile: currentFile
            });
        }
    }




    // render() {
    //     return (
    //         <div>
    //             <h1>Hello From</h1>
    //             <h2>'/uploaaaaaaaaad.jsx'</h2>
    //         </div>            
    //     )
    // }
    render() { 
        return ( 
            <div>
                <div className="app-discover1">
                    <div className="creators-tab">
                        <ul>
                            <li id="upload-only">Upload</li>
                            <li>Mastering</li>
                            <li>Your Tracks</li>
                            <li>Pro Plans</li>
                        </ul>
                    </div>
                    
                    <div className="upload-main">
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
                    </div>


{/* 


                    <div className="file-details-main">
                        <div className="basic-file-box">
                            <div className="file-header">
                                <h2>Basic Info</h2>
                                <h2>Metadata</h2>
                                <h2>Permissions</h2>
                            </div>
                            <div className="file-info">
                                <div className="picture-holder">
                                    {preview}
                                    {uploadButton}
                                </div>
                                <div className="song-details">
                                    <p>Title</p>
                                    <input type="text" defaultValue={this.props.state.title} onChange={this.props.update("title")} required/>
                                    <p>Genre</p>
                                    <select onChange={this.props.update("genre")}>
                                        <option value="EDM">EDM</option>
                                        <option value="Latin">Latin</option>
                                        <option value="Rap">Rap</option>
                                        <option value="Pop">Pop</option>
                                        <option value="RnB">RnB</option>

                                    </select>
                                    <p>Description</p>
                                    <textarea placeholder="Describe Your Track" cols="30" rows="10" onChange={this.props.update("description")}></textarea>
                                </div>
                            </div>
                            <div className="upload-footer">
                                <p>Required fileds</p>
                                <button className="cancel-button-upload">Cancel</button>
                                <button className="save-button-upload" onClick={this.props.handleSubmit} >Save</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="success-main">
                                <div>
                                    <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
                                </div>
                            <div className="current-song-success">
                                    <img className="upload-song-pic" src={this.props.state.photoUrl} alt=""/>
                                    <div className="upload-info">
                                        <div className="upload-username">{this.props.currentUser.username}</div>
                                        <div className="upload-song-title">{this.props.state.title}</div>
                                        <p className="upload-complete">Upload Complete</p>
                                        <Link className="link-to-song" to={`/songs/${this.props.state.songId}`}>Go to your Track</Link>
                                    </div>
                                    <div className="success-message">Congrats your song is upload and ready for the world to hear</div>
                            </div>
                        </div>
                    </div>  */}
                    

                    
                    {/* <div>
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
                        <SuccessFile 
                            state={this.state}
                            currentUser={this.props.currentUser}
                        />
                    </div> */}
                </div>
            </div>
         );
    }
}

export default Upload