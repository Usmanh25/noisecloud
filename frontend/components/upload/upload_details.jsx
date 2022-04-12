import React from 'react';

class UploadDetails extends React.Component {
    // state = {  }
    render() { 
        const uploadButton = !this.props.state.imageUrl ? 
            <div className="upload-button-holder">
                <input
                    type="file"
                    className="upload-image"
                    id="upload-image"
                    name="upload-image"
                    accept="image/*"
                    onChange={this.props.handleFile}
                >
                </input>
                <label htmlFor="upload-image">Upload image</label>
            </div>
             : <div className="upload-button-holder">
                <input
                    type="file"
                    className="upload-image"
                    id="upload-image"
                    name="upload-image"
                    accept="image/*"
                    onChange={this.props.handleFile}
                >
                </input>
                <label className='upload-image-button' htmlFor="upload-image">Update image</label>
            </div>

        const preview = this.props.state.imageUrl ? <img src={this.props.state.imageUrl} className="song-artwork-upload2"></img> : <span className="song-artwork-upload"></span>; 
        
        if(this.props.state.page === 0){
        return ( 
            <div className="upload-main">
                <div className="basic-file-box">

                    <div className="file-info">
                        <div className="picture-holder">
                            {preview}
                            {uploadButton}
                        </div>
                        <div className="song-details">
                            <p>Title</p>
                            <input type="text" defaultValue={this.props.state.title} onChange={this.props.update("title")} required/>
                            <p>Artist</p>
                            <input type="text" defaultValue={this.props.state.artist} onChange={this.props.update("artist")} required/>
                            <p>Genre</p>
                            <select onChange={this.props.update("genre")}>
                                <option disabled selected value> -- select genre -- </option>
                                <option value="R&B">R&B</option>
                                <option value="Rap">Rap</option>
                                <option value="Latin">Latin</option>
                                <option value="Pop">Pop</option>
                                <option value="EDM">EDM</option>
                            </select>
                        </div>
                    </div>
                    <div className="upload-footer">
                        <input
                            type="file"
                            name="file"
                            id="file"
                            className="inputfile"
                            accept=".mp3,audio/*"
                            onChange={this.props.page}
                        />
                        {/* <label htmlFor="file">choose file to upload</label> */}
                        <br />
                        <button className="cancel-button-upload">Cancel</button>
                        <button className="save-button-upload" onClick={this.props.handleSubmit} >Save</button>
                    </div>
                </div>
            </div>
         );
        } else {
            return null;
        }
    }
};
 
export default UploadDetails;